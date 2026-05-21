// Vercel serverless function — receives a form submission from /form/,
// inserts it into the Neon submissions table, and emails a notification
// via Resend.
//
// Env vars required:
//   DATABASE_URL              Neon pooled connection string
//   RESEND_API_KEY            Resend API key (re_...)
// Optional:
//   RESEND_FROM               Sender address (default: onboarding@resend.dev)
//   LEAD_NOTIFICATION_EMAIL   Recipient (default: thewallacedarling@outlook.com)

import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

const ALLOWED_FIELDS = [
  'first_name',
  'last_name',
  'email',
  'phone',
  'income',
  'assets',
  'tax',
  'situation',
  'timing',
  'score',
  'qualified',
];

const FIELD_LABELS = {
  first_name: 'First name',
  last_name: 'Last name',
  email: 'Email',
  phone: 'Phone',
  income: 'Income',
  assets: 'Assets',
  tax: 'Tax',
  situation: 'Situation',
  timing: 'Timing',
  score: 'Score',
  qualified: 'Qualified',
};

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildEmail(row) {
  const rows = ALLOWED_FIELDS.map((k) => {
    const label = FIELD_LABELS[k];
    const value = row[k] === null || row[k] === undefined || row[k] === '' ? '—' : row[k];
    return `<tr><td style="padding:6px 12px 6px 0;color:#555;white-space:nowrap;">${label}</td><td style="padding:6px 0;font-weight:600;">${escapeHtml(value)}</td></tr>`;
  }).join('');

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#111;max-width:560px;">
      <h2 style="margin:0 0 16px;">${row.qualified ? '🟢 Qualified lead' : 'New lead submission'}: ${escapeHtml(`${row.first_name} ${row.last_name}`)}</h2>
      <table style="border-collapse:collapse;font-size:14px;">${rows}</table>
    </div>
  `;

  const text = ALLOWED_FIELDS
    .map((k) => `${FIELD_LABELS[k]}: ${row[k] ?? '—'}`)
    .join('\n');

  return { html, text };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.DATABASE_URL) {
    return res.status(500).json({ error: 'Database not configured' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch (_) {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  // Pull only the fields we care about
  const row = {};
  for (const k of ALLOWED_FIELDS) row[k] = body?.[k] ?? null;

  // Minimal validation — required fields
  const required = ['first_name', 'last_name', 'email', 'income', 'assets', 'tax', 'situation', 'timing'];
  for (const k of required) {
    if (!row[k]) return res.status(400).json({ error: `Missing required field: ${k}` });
  }
  if (typeof row.score !== 'number') row.score = 0;
  row.qualified = Boolean(row.qualified);

  // Truncate strings to a sensible length (defense in depth)
  for (const k of ['first_name', 'last_name', 'email', 'phone']) {
    if (typeof row[k] === 'string') row[k] = row[k].slice(0, 200);
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    await sql`
      insert into submissions (
        first_name, last_name, email, phone,
        income, assets, tax, situation, timing,
        score, qualified
      ) values (
        ${row.first_name}, ${row.last_name}, ${row.email}, ${row.phone},
        ${row.income}, ${row.assets}, ${row.tax}, ${row.situation}, ${row.timing},
        ${row.score}, ${row.qualified}
      )
    `;
  } catch (err) {
    console.error('submit insert failed:', err);
    return res.status(500).json({ error: 'Insert failed' });
  }

  // Fire-and-forget notification email. Failures here must not break the
  // submission flow — the lead is already saved in Neon.
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const from = process.env.RESEND_FROM || 'Darling Financial <onboarding@resend.dev>';
      const to = process.env.LEAD_NOTIFICATION_EMAIL || 'thewallacedarling@outlook.com';
      const subject = row.qualified
        ? `🟢 Qualified lead: ${row.first_name} ${row.last_name}`
        : `New lead submission: ${row.first_name} ${row.last_name}`;
      const { html, text } = buildEmail(row);
      const { error } = await resend.emails.send({
        from,
        to,
        subject,
        html,
        text,
        replyTo: row.email || undefined,
      });
      if (error) console.error('resend send failed:', error);
    } catch (err) {
      console.error('resend send threw:', err);
    }
  } else {
    console.warn('RESEND_API_KEY not set — skipping notification email');
  }

  return res.status(200).json({ ok: true });
}
