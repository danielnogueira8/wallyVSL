-- Accountant partnership funnel — Neon table setup.
-- Run this once in the Neon SQL Editor (same database as `submissions`).
-- Mirrors the consumer `submissions` table but for partner inquiries.
--
-- We only partner with accountants in the US: the funnel captures
-- the firm's country and stores a `qualified` flag. US firms are
-- routed to the booking page; everyone else is stored (so Wally can
-- revisit later) but sent to a soft "not available yet" page.

create table partner_submissions (
  id                bigserial primary key,
  created_at        timestamptz not null default now(),
  first_name        text not null,
  last_name         text not null,
  firm_name         text not null,
  email             text not null,
  phone             text,
  country           text not null,
  firm_type         text not null,   -- solo_cpa | small_firm | mid_firm | large_firm | bookkeeper | other
  fit_clients       text not null,   -- under_10 | 10_25 | 25_75 | 75_200 | over_200
  client_income     text not null,   -- under_250k | 250_500k | 500k_1m | over_1m | mixed
  current_handling  text not null,   -- nothing | informal_referral | existing_partner | in_house
  partnership_type  text not null,   -- referral_fee | revenue_share | white_label | open | exploring
  qualified         boolean not null default false  -- true only for United States
);

create index partner_submissions_created_at_idx on partner_submissions (created_at desc);

-- ---------------------------------------------------------------------
-- MIGRATION for an existing partner_submissions table (adds the new
-- country/qualified columns). Safe to run once on the live database.
-- ---------------------------------------------------------------------
--   alter table partner_submissions add column if not exists country text;
--   alter table partner_submissions add column if not exists qualified boolean not null default false;
--   -- Backfill any pre-existing rows to a known-safe default:
--   update partner_submissions set country = coalesce(country, 'Unknown');
--   alter table partner_submissions alter column country set not null;

-- Viewing partner inquiries:
--   select created_at, first_name, last_name, firm_name, email, country, qualified, partnership_type
--   from partner_submissions
--   order by created_at desc
--   limit 50;
--
-- Only bookable (US) partners:
--   select created_at, first_name, last_name, firm_name, email, country
--   from partner_submissions
--   where qualified
--   order by created_at desc;
