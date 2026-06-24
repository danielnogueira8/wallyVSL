// Vercel serverless function — receives an accountant partnership
// submission from /partners/, inserts it into the Neon
// partner_submissions table, and emails a notification via Resend.
//
// Mirrors api/submit.js (the consumer qualifier) but for the partner
// funnel — there is no scoring/qualified flag here: every accountant
// who completes the form is routed to the booking page.
//
// Env vars required:
//   DATABASE_URL                 Neon pooled connection string
//   RESEND_API_KEY               Resend API key (re_...)
// Optional:
//   RESEND_FROM                  Sender address (default: onboarding@resend.dev)
//   PARTNER_NOTIFICATION_EMAIL   Recipient (falls back to LEAD_NOTIFICATION_EMAIL,
//                                then thewallacedarling@outlook.com)

import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

const ALLOWED_FIELDS = [
  'first_name',
  'last_name',
  'firm_name',
  'email',
  'phone',
  'firm_type',
  'fit_clients',
  'client_income',
  'current_handling',
  'partnership_type',
];

const FIELD_LABELS = {
  first_name: 'First name',
  last_name: 'Last name',
  firm_name: 'Firm name',
  email: 'Email',
  phone: 'Phone',
  firm_type: 'Firm type',
  fit_clients: 'High-income / business-owner clients',
  client_income: 'Typical client income',
  current_handling: 'Currently handles overflow by',
  partnership_type: 'Partnership interest',
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
      <h2 style="margin:0 0 16px;">🤝 New partner inquiry: ${escapeHtml(`${row.first_name} ${row.last_name}`)}${row.firm_name ? ` — ${escapeHtml(row.firm_name)}` : ''}</h2>
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
  const required = [
    'first_name',
    'last_name',
    'firm_name',
    'email',
    'firm_type',
    'fit_clients',
    'client_income',
    'current_handling',
    'partnership_type',
  ];
  for (const k of required) {
    if (!row[k]) return res.status(400).json({ error: `Missing required field: ${k}` });
  }

  // Truncate strings to a sensible length (defense in depth)
  for (const k of ['first_name', 'last_name', 'firm_name', 'email', 'phone']) {
    if (typeof row[k] === 'string') row[k] = row[k].slice(0, 200);
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    await sql`
      insert into partner_submissions (
        first_name, last_name, firm_name, email, phone,
        firm_type, fit_clients, client_income, current_handling, partnership_type
      ) values (
        ${row.first_name}, ${row.last_name}, ${row.firm_name}, ${row.email}, ${row.phone},
        ${row.firm_type}, ${row.fit_clients}, ${row.client_income}, ${row.current_handling}, ${row.partnership_type}
      )
    `;
  } catch (err) {
    console.error('partner-submit insert failed:', err);
    return res.status(500).json({ error: 'Insert failed' });
  }

  // Fire-and-forget notification email. Failures here must not break the
  // submission flow — the partner is already saved in Neon.
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const from = process.env.RESEND_FROM || 'Darling Financial <onboarding@resend.dev>';
      // Supports a comma-separated list of recipients (e.g. "a@x.com,b@y.com").
      const to = (
        process.env.PARTNER_NOTIFICATION_EMAIL ||
        process.env.LEAD_NOTIFICATION_EMAIL ||
        'thewallacedarling@outlook.com'
      )
        .split(',')
        .map((addr) => addr.trim())
        .filter(Boolean);
      const subject = `🤝 New partner inquiry: ${row.first_name} ${row.last_name}${row.firm_name ? ` (${row.firm_name})` : ''}`;
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
