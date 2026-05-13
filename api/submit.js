// Vercel serverless function — receives a form submission from /form/
// and inserts it into the Neon submissions table.
//
// Requires the DATABASE_URL env var (Neon pooled connection string)
// to be set in Vercel → Project Settings → Environment Variables.

import { neon } from '@neondatabase/serverless';

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
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('submit insert failed:', err);
    return res.status(500).json({ error: 'Insert failed' });
  }
}
