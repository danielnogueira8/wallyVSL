# Wally VSL — Qualifier Scoring Rules

This document describes how the 5-question qualifier on `/form/` decides whether to route a lead to Wally's Calendly or to the generic thank-you page.

---

## How it works

Each answer is worth a number of points. Points across all 5 questions are summed.

- **Score ≥ 7** → approved → redirected to `/qualified/` (Calendly embed)
- **Score < 7** → not approved → redirected to `/thank-you/`

Max possible score: **18**.

---

## Points per answer

### 1. Household income

| Answer | Points |
| --- | --- |
| Under $150,000 | 0 |
| $150,000 – $250,000 | 1 |
| $250,000 – $500,000 | 3 |
| $500,000 – $1M | 4 |
| Over $1M | 5 |

### 2. Investable assets / liquid net worth

| Answer | Points |
| --- | --- |
| Under $100,000 | 0 |
| $100,000 – $500,000 | 1 |
| $500,000 – $1M | 2 |
| $1M – $5M | 3 |
| Over $5M | 4 |

### 3. Federal tax paid last year

| Answer | Points |
| --- | --- |
| Less than $25,000 | 0 |
| $25,000 – $75,000 | 1 |
| $75,000 – $200,000 | 3 |
| Over $200,000 | 4 |
| Not sure | 1 |

### 4. Situation

| Answer | Points |
| --- | --- |
| Business owner / self-employed | 2 |
| High-income executive (W-2) | 2 |
| Professional (doctor, lawyer, etc.) | 2 |
| Pre-retiree (within 10 years) | 2 |
| Already retired | 1 |
| Other | 0 |

### 5. Timing

| Answer | Points |
| --- | --- |
| Now — I want to lower this year's tax bill | 3 |
| In the next 3 months | 2 |
| 6–12 months | 1 |
| Just exploring | 0 |

---

## Example profiles

**Approved (score 11)** — Strong fit
$500K–$1M income (4) + $500K–$1M assets (2) + $25K–$75K tax (1) + business owner (2) + 3 months (2) = **11 → approved**

**Approved (score 7)** — Just over the line
$250K–$500K income (3) + $100K–$500K assets (1) + $25K–$75K tax (1) + executive (2) + just exploring (0) = **7 → approved**

**Not approved (score 6)** — Just below the line
$150K–$250K income (1) + $100K–$500K assets (1) + $25K–$75K tax (1) + business owner (2) + 6–12 months (1) = **6 → thank-you**

**Not approved (score 3)** — Mostly low signals
Under $150K income (0) + Under $100K assets (0) + Less than $25K tax (0) + Other (0) + Now (3) = **3 → thank-you** (urgency alone is not enough)

---

## Who currently qualifies in practice

The current threshold of 7 is intentionally generous. It approves:

- Anyone earning **$500K+** regardless of other answers (income alone contributes 4, and the situation step almost always adds 2)
- Most **$250K+** households who also have some tax exposure or urgency
- High-tax-bill payers (**$75K+** in federal tax) even at moderate income levels

It filters out:

- Sub-$150K earners with low assets and no urgency
- People who pick "Just exploring" combined with otherwise weak signals
- Leads who select mostly "Other" / "Not sure" answers

---

## Tuning the threshold

To make qualification **more selective** (fewer booked calls, higher quality):

- Threshold of **10** → roughly requires $500K+ income *or* a $75K+ tax bill *with* urgency
- Threshold of **12** → essentially $1M+ income or comparable wealth markers

To make it **less selective** (more booked calls, lower quality):

- Threshold of **5** → most $250K+ households will pass
- Threshold of **3** → almost everyone passes; effectively no filter

The threshold lives at the top of `assets/js/qualify.js`:

```js
const QUALIFY_THRESHOLD = 7;
```

A one-line change. Likewise, the per-answer point values are in the `SCORING` object directly above that line and can be retuned individually if specific signals matter more than others (e.g. weight tax-paid more heavily and income less, etc.).

---

## What gets captured per lead

Every submission — qualified or not — is currently saved to the browser's `sessionStorage` so the next page can personalize. To capture leads in a real CRM, wire the `TODO` block in `qualify.js` to a webhook (Zapier, Make, HubSpot, etc.). The payload sent looks like:

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
