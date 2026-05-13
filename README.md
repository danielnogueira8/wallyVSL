# WallyVSL — VSL Template for Darling Financial Group

A reusable Video Sales Letter (VSL) template for promoting free lead-magnet resources to high-earners interested in tax-saving strategies.

The flow:
**Ad / LinkedIn / Email → VSL page (watch video) → opt-in → free resource delivered**

---

## Project structure

```
wallyVSL/
├── index.html               ← the VSL page (clone this per resource)
├── form/index.html          ← 5-question qualifier
├── qualified/index.html     ← Calendly embed (shown if score >= threshold)
├── thank-you/index.html     ← generic thank-you (shown if not a fit)
├── assets/
│   ├── css/styles.css       ← brand styles (navy + teal, Darling FG palette)
│   ├── css/form.css         ← qualifier + outcome page styles
│   ├── js/main.js           ← VSL page form handler + smooth scroll
│   ├── js/qualify.js        ← multi-step form logic, scoring, routing
│   └── public/              ← drop your video + poster here
│       ├── vsl.mp4          ← (uploaded)
│       └── vsl-poster.jpg   ← (optional thumbnail)
```

## Funnel flow

```
Ad / LinkedIn / Email
        ↓
   /  (VSL page — watch video)
        ↓
   /form/  (5-question qualifier + contact info)
        ↓
   ┌────────┴────────┐
   ↓                 ↓
/qualified/      /thank-you/
(Calendly        (generic + nurture
 embed)           via email)
```

---

## Adding the video

Place your VSL video at:

```
assets/public/vsl.mp4
```

Optionally add a poster frame (shown before play):

```
assets/public/vsl-poster.jpg
```

The video tag in `index.html` already points at these paths — no code changes needed.

For better delivery, host the MP4 on a CDN (Bunny.net, Cloudflare R2, Mux, Vimeo) and replace the `<source src="...">` line in `index.html`.

---

## Creating a new resource page

Each free resource gets its own page using the same template. Recommended layout:

```
wallyVSL/
├── index.html                    ← landing index (optional)
├── tax-saving-playbook/index.html
├── retirement-income-guide/index.html
└── small-business-tax-audit/index.html
```

**Steps to clone for a new resource:**

1. Copy `index.html` into a new folder, e.g. `retirement-income-guide/index.html`.
2. Update the paths to assets from `assets/...` → `../assets/...`.
3. Edit the elements marked with `data-edit="..."` attributes:
   - `headline` — main promise
   - `subheadline` — supporting line
   - `primary-cta` — button text
   - `who-1` through `who-4` — qualifier bullets
   - `inside-1-title` / `inside-1-body` (and 2–4) — what's inside cards
   - `claim-title` / `claim-body` — opt-in section
4. Drop the resource's video at `assets/public/<slug>-vsl.mp4` and point the `<source>` at it.
5. Update the `<title>` and `<meta description>` for SEO/sharing.

---

## Capturing submissions (Neon + Vercel)

Every form submission is persisted to a Neon Postgres database via a Vercel serverless function at `api/submit.js`. Qualified leads see Wally's Calendly afterward; unqualified leads see the thank-you page; both are saved.

### One-time setup

1. **Create the table in Neon.** In Neon's SQL Editor, run:

   ```sql
   create table submissions (
     id            bigserial primary key,
     created_at    timestamptz not null default now(),
     first_name    text not null,
     last_name     text not null,
     email         text not null,
     phone         text,
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
   ```

2. **Deploy to Vercel.** Import the GitHub repo in the Vercel dashboard. No build settings needed — it's a static site with one serverless function.

3. **Add the env var.** In Vercel → Project Settings → Environment Variables, add:
   - **Name:** `DATABASE_URL`
   - **Value:** Neon's *pooled* connection string (the one ending `-pooler.<region>.aws.neon.tech`)
   - **Environments:** Production, Preview, Development (all three)

   Redeploy after saving so the function picks up the var.

### Viewing submissions

In the Neon console, **SQL Editor**:

```sql
-- Most recent leads
select created_at, first_name, last_name, email, score, qualified
from submissions
order by created_at desc
limit 50;

-- Just the qualified ones
select * from submissions where qualified = true order by created_at desc;

-- Counts
select qualified, count(*) from submissions group by qualified;
```

### How it works

- `assets/js/qualify.js` POSTs to `/api/submit` with the lead data and computed score
- `api/submit.js` (Vercel serverless function) validates the payload and inserts a row using `@neondatabase/serverless` (HTTP-based driver, ideal for short-lived functions)
- If the DB write fails or takes longer than 4 seconds, the user is still routed correctly — we don't block the funnel on a DB hiccup. Failures are logged in Vercel's function logs.

### Local development

```bash
npm install
cp .env.example .env.local   # paste your DATABASE_URL into this file
npx vercel dev               # runs the static site + the serverless function locally
```

### Tuning the qualifier

The scoring table and threshold live at the top of `assets/js/qualify.js`:

- **Max possible score:** 18
- **Default qualify threshold:** 7

Bump the threshold up to be more selective, or down to capture more leads. Each lead is also saved to `sessionStorage` so the qualified page can personalize the greeting and prefill Calendly with name + email.

---

## Brand notes

- Primary ink (navy): `#14223a`
- Warm paper background: `#faf7f1`
- Single accent (muted bronze): `#8a6d3b`
- Display + body font: Source Serif 4
- Label font: Inter
- Positioning: "The Family Office for Mainstreet"
- Target: high-income earners ($250K+), business owners, professionals

---

## Local preview

Just open `index.html` in a browser, or run a static server:

```bash
cd wallyVSL
python3 -m http.server 8000
# visit http://localhost:8000
```
