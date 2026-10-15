// Source: Notion, Wallace Darling database, row "Lead Magnet - AI Tax Return Auditor"
// > nested page "The AI Tax Return Auditor".

const PARTNER = { label: "Partner with Darling FG", href: "/partners/" }

export default {
  slug: "ai-tax-return-auditor",
  audience: "cpas",
  kind: "Free Claude prompt",
  title: "The AI Tax Return Auditor",
  headline: "The AI Tax Return Auditor: one Claude prompt that reads a return the way a strategist would",
  description:
    "A free master prompt that turns Claude into a first-pass tax return auditor for $500k+ earner and $1M+ revenue returns: ten categories of missed strategy, a dollar range for each, and a 90-day action plan.",
  lead:
    "A compliance review checks that the return is right. It never asks what the return should have looked like. This is the master prompt Wally runs as the first pass on any new client return.",
  meta: ["Free", "1 master prompt", "10 categories", "Sample report"],
  proof: [
    { value: "10", label: "Categories scanned", detail: "Entity, retirement, Roth, gains, real estate, equity, charitable, state, expenses, estimates." },
    { value: "3", label: "Dollar cases", detail: "Every finding gets a low, mid and high estimate. Nothing invented." },
    { value: "1", label: "Guardrail", detail: "Nothing it flags gets implemented without a licensed professional's sign-off." },
  ],
  cover: { big: "10", small: "categories every return gets scanned for" },
  cardDescription:
    "A paste-ready master prompt that scans a 1040 and business return for ten categories of missed strategy, prices each finding, and lists the deadlines.",
  updated: "2026-10-15",

  sections: [
    {
      id: "start-here",
      nav: "Start here",
      eyebrow: "Start here",
      heading: "What the auditor replaces, and what it doesn't",
      blocks: [
        {
          type: "lead",
          text: "Hey, I'm Wally. I run Darling Financial Group ([darling-fg.com](https://darling-fg.com)). I'm a US tax strategist working with $500k+ earners and $1M+ revenue owners who are bleeding tax their CPA never tries to recover.",
        },
        {
          type: "p",
          text: "This is the master prompt I run as the first pass on any new client return. Ten categories, one structured report, and one guardrail that never moves: nothing it flags gets implemented without a licensed professional's sign-off.",
        },
        {
          type: "p",
          text: "The strategist still owns the judgment. What the prompt replaces is the blind spot: a compliance review checks that the return is right. It never asks what the return should have looked like.",
        },
        { type: "p", text: "The prompt is calibrated for $500k+ income or $1M+ revenue returns. Below that, most of these flags don't apply." },
        { type: "h3", text: "For the CPAs reading this" },
        {
          type: "p",
          text: "EY put 150+ tax agents in front of 80,000 of its own tax professionals. The bench is being agentified at the top of the profession, and your $500k+ clients are reading pages like this one.",
        },
        {
          type: "p",
          text: "The strategies this prompt surfaces stall on licensing, not knowledge, and that's the seat we fill: with you, not around you. You keep the filing relationship. We run the strategy layer.",
        },
        {
          type: "callout",
          title: "Work with Darling FG, not around it.",
          body: "Wally works through the accountant, never directly with your client, and doesn't take the compliance work.",
          cta: PARTNER,
        },
      ],
    },

    {
      id: "how-to-use",
      nav: "How to use it",
      eyebrow: "How to use it",
      heading: "Inputs, setup, and what to do with the output",
      blocks: [
        { type: "h4", text: "Inputs you'll need" },
        {
          type: "list",
          check: true,
          items: [
            "Most recent personal return (1040 + all schedules and statements)",
            "If business owner: most recent corporate return (1120, 1120-S, 1065)",
            "K-1s received in the year",
            "Prior-year return for trend comparison (optional but helpful)",
          ],
        },
        { type: "h4", text: "Setup" },
        {
          type: "steps",
          items: [
            "Open a fresh Claude chat (use a Project if you want to come back to it).",
            "Paste the [master prompt](#master-prompt) below.",
            "Upload the returns or paste the relevant figures as the prompt asks.",
            "Read the output as a starting list, not a final answer.",
          ],
        },
        { type: "h4", text: "What to do with the output" },
        {
          type: "p",
          text: "Every flag the auditor surfaces is a strategy worth a real conversation. Don't act on any of them without confirming the math and the implementation path with a strategist and your CPA.",
        },
        {
          type: "note",
          tone: "warn",
          title: "Deadlines matter.",
          body: "Some flags have filing deadlines (Form 2553 for next-year S election, Form 3115 for retroactive cost-seg, NQDC elections). Others have structural implications (entity changes) that take 90 days to set up properly.",
        },
      ],
    },

    {
      id: "master-prompt",
      nav: "The master prompt",
      eyebrow: "The prompt",
      heading: "The master prompt",
      blocks: [
        { type: "p", text: "Copy everything inside the block. Paste it as your first message." },
        {
          type: "code",
          label: "Master prompt · AI Tax Return Auditor",
          text: `You are an AI Tax Return Auditor specialized in $500k+ income personal returns and $1M+ revenue business returns in the United States.

You are not a compliance reviewer. Your job is not to check that the return is filed correctly. Your job is to identify strategies the return suggests were NOT deployed, and quantify the dollar impact of deploying them.

You know deeply:
- Section 199A (QBI) and how it interacts with entity choice
- S-corp reasonable compensation defense and audit risk patterns
- Section 1202 (QSBS) eligibility and the 5-year holding requirement
- Cost segregation, bonus depreciation, and Form 3115 retroactive reclassification
- Real Estate Professional Status (REPS): 750-hour and material participation tests
- Short-term rental loophole (Sec. 469 average rental of 7 days or less)
- Section 1031 like-kind exchange windows and replacement property rules
- Opportunity Zone deferral and 10-year step-up
- DB and Cash Balance plan combined limits with 401(k) profit-sharing
- SEP, Solo 401k, mega backdoor Roth
- Roth conversion bracket filling and IRMAA interaction
- Capital loss harvesting and wash-sale rules
- AMT calculations and ISO bargain element exposure
- NQDC deferral election windows
- Augusta rule (Section 280A(g)) documentation requirements
- PTE elections to recover SALT cap deduction
- Charitable bunching, DAF strategy, QCD for 70.5+
- Backdoor Roth pro-rata rule
- Section 1045 QSBS rollover

Ask me to upload or paste:
1. Personal return (1040 with all schedules)
2. Corporate return if applicable (1120, 1120-S, 1065)
3. K-1s received
4. Prior-year return for trend comparison (optional)

Once you have the returns, perform the following analysis and output a structured report.

For each finding, produce:
- Category (one of the 10 categories below)
- Specific observation from the return
- Why it's a missed opportunity
- Estimated annual dollar impact range (be conservative; show low / mid / high)
- Implementation path (deadline-driven actions, who needs to do what)
- Watch-outs and audit risk

The 10 categories to scan:

1. ENTITY STRUCTURE: Sole prop past S-corp breakeven. S-corp reasonable comp set wrong by $30k+ either direction. C-corp accumulated earnings exposure or unused 1202 path. Missing PTE election.

2. RETIREMENT PLAN CAPACITY: SEP without DB layer. Solo 401k without after-tax voluntary contributions. No DB or Cash Balance for an owner with strong cash flow. Profit-sharing allocation method suboptimal.

3. ROTH CONVERSION OPPORTUNITY: Significant pre-tax balances + a year where bracket headroom exists. IRMAA-safe conversion windows. State residency arbitrage.

4. CAPITAL GAINS AND LOSSES: No harvest activity in a year with realized gains. Carryforward sitting unused. Concentrated position with no sell-down plan. Missing Section 1045 rollover for QSBS.

5. REAL ESTATE: Properties on straight-line with no cost-seg study. Form 3115 retroactive opportunity (property acquired within 15 years). REPS claimed without defensible documentation, or REPS not claimed when qualifying. STR loophole eligibility. Pending 1031 or OZ windows.

6. EQUITY COMPENSATION: ISO exercise that triggered avoidable AMT. NQSO sell-to-cover with an under-withholding shortfall. ESPP held past disqualifying disposition window. RSU vest with no withholding adjustment.

7. CHARITABLE: Cash giving where appreciated securities would have given the deduction without the gain. No DAF for bunching. No QCD for IRA owners 70.5+.

8. STATE AND LOCAL: Residency exposure (multi-state day-count drift). Missing PTE election. Out-of-state pass-through K-1s with no composite or PTE coordination.

9. EXPENSE AND DEDUCTION CAPTURE: Augusta rule eligibility without documentation. Home office without Form 8829 backing. Vehicle deduction methodology suboptimal. Health-related deductions (HSA, MSA, 105 plan for owner-employees) not maxed.

10. ESTIMATED PAYMENTS AND WITHHOLDING: Underpayment penalty paid (should be zero with safe-harbor management). Excessive estimated payments parked at the IRS earning 0%. Withholding mix not optimized.

After the per-category findings, produce a summary section:
- Top 5 findings ranked by dollar impact
- Total estimated annual savings (low / mid / high)
- Cumulative 10-year impact at conservative estimate
- Three actions with deadlines in the next 90 days
- Three structural changes that take 90+ days to implement properly

Never fabricate numbers. Only flag findings the return actually supports. If a category has no findings, say "no flags" and move on.

Close with: "This report identifies strategies the return suggests are available. None of this is advice. Each strategy needs to be confirmed with a tax strategist and CPA before implementation, and most have filing or election deadlines that determine when they can be used."`,
        },
      ],
    },

    {
      id: "what-it-flags",
      nav: "What it flags",
      eyebrow: "What it flags",
      heading: "The 10 categories, and where findings usually land",
      blocks: [
        {
          type: "table",
          head: ["#", "Category", "Typical finding", "Typical dollar range"],
          rows: [
            ["1", "**Entity structure**", "S-corp salary mis-set, sole prop past breakeven, missing PTE", "$8k to $80k / year"],
            ["2", "**Retirement plan capacity**", "No DB plan for high-cash owner", "$30k to $200k+ / year"],
            ["3", "**Roth conversion**", "Pre-tax balance + bracket headroom unused", "$15k to $150k cumulative"],
            ["4", "**Capital gains**", "No harvest, unused carryforward", "$5k to $50k / year"],
            ["5", "**Real estate**", "No cost-seg, missing REPS, Form 3115 opportunity", "$20k to $300k / year"],
            ["6", "**Equity comp**", "Avoidable AMT, ISO timing miss", "$10k to $200k+ / event"],
            ["7", "**Charitable**", "Cash instead of appreciated securities, no DAF", "$5k to $60k / year"],
            ["8", "**State and local**", "Multi-state drift, missing PTE", "$5k to $40k / year"],
            ["9", "**Expense capture**", "Augusta rule, home office, HSA", "$2k to $15k / year"],
            ["10", "**Estimated payments**", "Underpayment penalty paid", "$1k to $20k / year"],
          ],
        },
        {
          type: "p",
          text: "Ranges are illustrative based on patterns Wally sees across $500k+ earner returns. Your specific numbers depend on your return.",
        },
        {
          type: "callout",
          title: "Running this on client returns?",
          body: "Every flag it surfaces needs a licensed professional to implement. That's the partnership.",
          cta: PARTNER,
        },
      ],
    },

    {
      id: "sample-output",
      nav: "Sample output",
      eyebrow: "Sample output",
      heading: "What the report looks like",
      blocks: [
        { type: "note", title: "Illustrative example.", body: "The numbers below are placeholders, not a real client." },
        { type: "h4", text: "Profile" },
        {
          type: "table",
          rowHeads: true,
          head: ["Item", "Detail"],
          rows: [
            ["Income", "$850k W-2 + $400k S-corp distribution"],
            ["Real estate", "Two rental properties"],
            ["Equity comp", "One ISO grant"],
            ["Retirement", "Pre-tax 401k balance $1.2M"],
            ["Filing", "Joint, two kids"],
          ],
        },
        { type: "h4", text: "Findings summary" },
        {
          type: "card",
          id: "finding-1",
          num: "01",
          title: "S-corp reasonable comp set at $90k",
          fields: [
            ["Observation", "Industry comparable for the role is $180k to $220k. Audit risk on the low end. Recommended adjustment: $180k. Net SE tax savings of moving up: marginal because of Social Security wage base interaction, but defensibility improves materially."],
            ["Dollar impact", "$0 to $5k/year (defensibility). Audit risk reduction is the real win."],
          ],
        },
        {
          type: "card",
          id: "finding-2",
          num: "02",
          title: "No DB plan",
          fields: [
            ["Observation", "Owner is 47, cash flow supports $150k to $220k annual DB contribution. Combined DB + Solo 401k profit-sharing capacity unused."],
            ["Dollar impact", "$55k to $85k/year in federal + state tax savings."],
          ],
        },
        {
          type: "card",
          id: "finding-3",
          num: "03",
          title: "Both rentals on straight-line",
          fields: [
            ["Observation", "Property A acquired 2021 ($1.4M), Property B acquired 2023 ($820k). Form 3115 retroactive cost-seg eligible on both. Estimated reclassified portion: 25 to 32%. Year-1 bonus depreciation impact at current rate."],
            ["Dollar impact", "$80k to $130k year one."],
          ],
        },
        {
          type: "card",
          id: "finding-4",
          num: "04",
          title: "ISO exercise in February with $340k bargain element",
          fields: [
            ["Observation", "Triggered AMT of approximately $90k. Could have been spread across two tax years with materially less AMT."],
            ["Dollar impact", "$35k to $50k retroactively (lost). $15k to $40k/year going forward with tranched exercises."],
          ],
        },
        {
          type: "card",
          id: "finding-5",
          num: "05",
          title: "Charitable gifts of $45k all in cash",
          fields: [
            ["Observation", "Held appreciated AAPL and NVDA lots with long-term gains of $80k+ that could have funded a DAF."],
            ["Dollar impact", "$12k to $18k/year capital gains avoided plus the same deduction."],
          ],
        },
        { type: "h4", text: "Action plan" },
        {
          type: "table",
          head: ["Top 90-day actions", "Structural items (90+ days)"],
          rows: [
            ["File Form 3115 for cost-seg before year-end", "S-corp reasonable comp adjustment for next tax year"],
            ["Open DB plan structure (must be established by 12/31)", "DAF establishment for next-cycle charitable giving"],
            ["Adjust Q4 estimated payment to reflect new strategies", "Multi-year ISO exercise schedule"],
          ],
        },
        {
          type: "stats",
          items: [
            { value: "$180k to $280k", label: "Total estimated impact, year one" },
            { value: "$120k to $200k", label: "Recurring annually" },
          ],
        },
      ],
    },

    {
      id: "whats-next",
      nav: "What's next",
      eyebrow: "What's next",
      heading: "The auditor is yours",
      blocks: [
        {
          type: "p",
          text: "**Run it yourself.** Use the master prompt above. Feed it your returns. Treat the output as a starting list to validate with a strategist and your CPA. Most findings have deadlines that determine whether the strategy is even available this year.",
        },
        {
          type: "p",
          text: "**Run it with us.** If you're a CPA and your $500k+ clients are asking about the strategies on this list, the licensing seat is yours and the strategy layer is ours. You keep the filing relationship. We run the audit, the modelling, and the implementation plan, and nothing reaches a filing without your sign-off.",
        },
        { type: "cta", ...PARTNER, note: "US and Canadian firms. Six quick questions." },
        {
          type: "p",
          text: "Not a CPA? If these are your own returns, the [free tax audit](/form/) is the version where Wally runs it for you.",
        },
      ],
    },
  ],
}
