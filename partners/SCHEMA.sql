-- Accountant partnership funnel — Neon table setup.
-- Run this once in the Neon SQL Editor (same database as `submissions`).
-- Mirrors the consumer `submissions` table but for partner inquiries:
-- there is no score/qualified flag because every accountant who completes
-- the /partners/ form is routed straight to the booking page.

create table partner_submissions (
  id                bigserial primary key,
  created_at        timestamptz not null default now(),
  first_name        text not null,
  last_name         text not null,
  firm_name         text not null,
  email             text not null,
  phone             text,
  firm_type         text not null,   -- solo_cpa | small_firm | mid_firm | large_firm | bookkeeper | other
  fit_clients       text not null,   -- under_10 | 10_25 | 25_75 | 75_200 | over_200
  client_income     text not null,   -- under_250k | 250_500k | 500k_1m | over_1m | mixed
  current_handling  text not null,   -- nothing | informal_referral | existing_partner | in_house
  partnership_type  text not null    -- referral_fee | revenue_share | white_label | open | exploring
);

create index partner_submissions_created_at_idx on partner_submissions (created_at desc);

-- Viewing partner inquiries:
--   select created_at, first_name, last_name, firm_name, email, firm_type, partnership_type
--   from partner_submissions
--   order by created_at desc
--   limit 50;
