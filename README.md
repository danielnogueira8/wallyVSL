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

## Connecting the qualifier form

`assets/js/qualify.js` has a `TODO` block inside the submit handler. Replace it with a real endpoint so every lead (qualified or not) is captured in your CRM:

- **ConvertKit / Beehiiv / Mailchimp** — use their form action URL
- **HubSpot / ActiveCampaign** — drop in their JS embed or API endpoint
- **Zapier / Make webhook** — POST the full lead object and route from there

The payload sent looks like:

```json
{
  "income": "500k_1m",
  "assets": "1_5m",
  "tax": "75_200k",
  "situation": "business_owner",
  "timing": "now",
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@example.com",
  "phone": "555-555-5555",
  "score": 14,
  "qualified": true,
  "submittedAt": "2026-05-13T..."
}
```

### Tuning the qualifier

The scoring table and threshold live at the top of `assets/js/qualify.js`:

- **Max possible score:** 18
- **Default qualify threshold:** 7

Bump the threshold up to be more selective, or down to capture more leads. Each lead is also saved to `sessionStorage` so the qualified page can personalize the greeting and prefill Calendly with name + email.

---

## Brand notes

- Primary navy: `#0b1f3a`
- Teal accent: `#2bb6a8`
- Display font: Playfair Display (serif, headlines)
- Body font: Inter (sans, everything else)
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
