-- Consumer qualifier funnel — Neon table setup.
-- Run this once in the Neon SQL Editor.
--
-- The form captures the lead's country. It does NOT affect scoring or
-- routing (every lead is still scored and sent to /qualified/ or
-- /thank-you/), but only US leads generate a notification email — see
-- NOTIFY_COUNTRIES in api/submit.js. Non-US leads are still stored here.

create table submissions (
  id            bigserial primary key,
  created_at    timestamptz not null default now(),
  first_name    text not null,
  last_name     text not null,
  email         text not null,
  phone         text,
  country       text not null,
  income        text not null,
  assets        text not null,
  tax           text not null,
  situation     text not null,
  timing        text not null,
  score         integer not null,
  qualified     boolean not null
);

create index submissions_created_at_idx on submissions (created_at desc);
create index submissions_qualified_idx on submissions (qualified);

-- ---------------------------------------------------------------------
-- MIGRATION for an existing submissions table (adds the new country
-- column). Run this on the live database BEFORE deploying, otherwise
-- inserts from api/submit.js will fail.
-- ---------------------------------------------------------------------
--   alter table submissions add column if not exists country text;
--   -- Backfill pre-existing rows to a known-safe default:
--   update submissions set country = coalesce(country, 'Unknown');
--   alter table submissions alter column country set not null;

-- Viewing submissions:
--   select created_at, first_name, last_name, email, country, score, qualified
--   from submissions
--   order by created_at desc
--   limit 50;
--
-- Only leads that triggered a notification (US):
--   select created_at, first_name, last_name, email, score, qualified
--   from submissions
--   where country = 'United States'
--   order by created_at desc;
