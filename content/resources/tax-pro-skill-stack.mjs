// Source: Notion, Wallace Darling database, row "Lead Magnet - The Tax Pro Skill Stack"
// > nested page "The Tax Pro Skill Stack: 5 Claude Skills ...".
// Changes from Notion: the mid-page handoff now points to /partners (it pointed to the
// consumer /form), and the LinkedIn P.S. is dropped (no LinkedIn CTAs on CPA assets).

const PARTNER = { label: "Partner with Darling FG", href: "/partners/" }

export default {
  slug: "tax-pro-skill-stack",
  audience: "cpas",
  kind: "Free Claude skills",
  title: "The Tax Pro Skill Stack",
  headline: "Five Claude skills that build the client deliverables in three minutes each",
  description:
    "Five Claude skills for CPAs and tax pros: a tax savings report, an entity comparison model, a Roth conversion scenario, a cash balance plan projection and a financial plan overlay, with the prompts and inputs for each.",
  lead:
    "A savings report, an entity model, a Roth scenario, a cash balance projection and a plan overlay. The strategy is the hard part. The deliverables shouldn't take three days a month.",
  meta: ["Free", "5 Claude skills", "5 prompts", "Decision tree"],
  proof: [
    { value: "5", label: "Skill files", detail: "Ready to load into Claude or a Cowork plugin." },
    { value: "5", label: "Prompts", detail: "One per skill, copy-paste ready." },
    { value: "3 min", label: "Per deliverable", detail: "PDF, Excel or PowerPoint, built while you're still on the call." },
  ],
  cover: { big: "5", small: "Claude skills for tax pros" },
  cardDescription:
    "The savings report, entity model, Roth scenario, cash balance projection and plan overlay, as five Claude skills with the prompts and data inputs to run them.",
  updated: "2026-10-15",

  sections: [
    {
      id: "start-here",
      nav: "Start here",
      eyebrow: "Start here",
      heading: "Why I built the stack",
      blocks: [
        {
          type: "lead",
          text: "Hey, I'm Wallace Darling (most people call me Wally). I run Darling Financial Group ([darling-fg.com](https://darling-fg.com)), where I help qualified business owners and high-income executives recover the six figures most of them are quietly overpaying to the IRS.",
        },
        {
          type: "p",
          text: "I built this stack because I got tired of watching good tax pros lose three days a month to work that should take an afternoon. Savings reports. Entity analysis. Conversion timing. Plan projections. The reason isn't complexity. It's that the workflow hasn't been rebuilt since the spreadsheet.",
        },
        {
          type: "p",
          text: "Here's what you'll get out of this: five working Claude Skills, the exact prompts that run them, the data each one needs, and a side-by-side showing the manual version against the skill output. Load them, run them on a real client, and the savings report, entity model, Roth scenario, cash balance projection, and plan overlay come out in about three minutes each.",
        },
        {
          type: "download",
          href: "https://drive.google.com/drive/folders/1DzThYn7PE1YZ6JC9ngul08tGnL64c5Gb?usp=drive_link",
          title: "Download the five .skill files",
          detail: "Google Drive folder, no sign-up",
        },
        {
          type: "callout",
          title: "Got a client this stack can't fully serve?",
          body: "If a client needs to save on taxes and the strategy work goes past what you do, send them my way. You keep the client and the compliance work.",
          cta: PARTNER,
        },
      ],
    },

    {
      id: "how-it-works",
      nav: "How the stack works",
      eyebrow: "How the stack works",
      heading: "Five skills, five finished files",
      blocks: [
        {
          type: "p",
          text: "Each skill is a self-contained instruction set Claude loads on demand. You give it a client's situation, it runs the same structured process every time, and it produces a finished file. No API, no code, no plugins to build.",
        },
        {
          type: "table",
          head: ["Skill", "What it does", "Output"],
          rows: [
            ["`tax-savings-report`", "Screens a client against a fixed strategy library and itemizes every applicable lever with an estimated dollar saving and a total tally", "PDF"],
            ["`entity-comparison-model`", "Runs the same income through sole prop, LLC, S-corp, and C-corp treatment and shows the take-home difference", "Excel"],
            ["`roth-conversion-scenario`", "Models multi-year Roth conversions, finds the bracket room each year, and compares lifetime tax vs doing nothing", "Excel"],
            ["`cash-balance-plan-projection`", "Sizes the maximum sheltered contribution by owner age and shows the current-year deduction and multi-year saving", "Excel"],
            ["`financial-plan-overlay`", "Overlays the recovered tax dollars onto the client's existing plan and shows current path vs integrated path", "PowerPoint"],
          ],
        },
        {
          type: "p",
          text: "The point isn't to replace your judgment. It's to take the judgment you already have and turn it into a client-ready document while you're still on the call.",
        },
      ],
    },

    {
      id: "prompts",
      nav: "The 5-prompt library",
      eyebrow: "The prompts",
      heading: "The 5-prompt library",
      blocks: [
        {
          type: "p",
          text: "These run in any Claude account. Paste the prompt, then drop in the client data when it asks. Each prompt assumes the matching skill is loaded (see [the skill files](#skill-files)).",
        },
        {
          type: "code",
          label: "Prompt 1 · Tax savings report",
          text: `Run the tax-savings-report skill. Here's the client: [client type, income picture, current entity, filing status, state, effective/marginal rate, existing retirement vehicles, real estate and capital gains events, what their current CPA has already implemented]. Screen against the full strategy library, itemize what applies with an estimated dollar saving and a confidence note, and give me the total tally split into firm estimate vs needs-validation. Output the PDF.`,
        },
        {
          type: "code",
          label: "Prompt 2 · Entity comparison model",
          text: `Run the entity-comparison-model skill. Business net profit is [X], reasonable comp estimate is [Y] (or model low/mid/high), filing status [Z], state [state], other household income [amount], benefits run through the business [list]. Build the Excel with sole prop, S-corp, and C-corp tabs, a comparison table, and a breakeven tab. Pull every scenario from the Inputs tab.`,
        },
        {
          type: "code",
          label: "Prompt 3 · Roth conversion scenario",
          text: `Run the roth-conversion-scenario skill. Account holder age [X], target retirement age [Y], pre-tax balances [amount], expected ordinary income by year [list], filing status [Z], state [state], planning window [years], assumed growth [%], assumed future tax rate [%], outside cash to pay conversion tax [yes/no]. Build the bracket-filling schedule and compare lifetime tax against the do-nothing path.`,
        },
        {
          type: "code",
          label: "Prompt 4 · Cash balance plan projection",
          text: `Run the cash-balance-plan-projection skill. Owner age [X], net business profit [amount] and how stable it is, owner W-2 comp [amount], employee census [ages and comp], existing 401k/profit-sharing [amounts], marginal rate [%], state [state], planning window [years]. Size the contribution capacity by age, show the current-year deduction, the employee funding cost, and the multi-year saving vs 401k-only.`,
        },
        {
          type: "code",
          label: "Prompt 5 · Financial plan overlay",
          text: `Run the financial-plan-overlay skill. Current plan: [allocation, balances, contribution rates, risk profile, goals]. Identified annual tax saving: [amount from the report]. Redeploy the savings into [retirement / taxable / debt paydown]. Assumed growth [%], horizon [years]. Build the deck with current path vs integrated path and call out the ending figure as one number.`,
        },
        {
          type: "callout",
          title: "Running these for clients who then need real strategy execution?",
          body: "That's exactly the handoff I take. If a client's situation is bigger than the deliverable, I run the full review through you. I don't approach your client or take the compliance work.",
          cta: PARTNER,
        },
      ],
    },

    {
      id: "skill-files",
      nav: "The five .skill files",
      eyebrow: "The skill files",
      heading: "The five .skill files",
      blocks: [
        {
          type: "p",
          text: "**How to load them.** Drop the .skill into your Claude skills directory (or your Cowork plugin's skills folder). Claude reads the `description` line in each file's front matter and fires the right skill when your prompt matches. You don't have to name the skill by hand most of the time. The prompts above name it explicitly so there's no ambiguity.",
        },
        {
          type: "p",
          text: "**What's inside each file.** Every skill follows the same shape: the inputs to collect first, the fixed process it runs, the output structure, and a set of hard rules that keep the numbers honest (no invented figures, every soft number flagged for validation, all rate years labeled). That last part matters. A deliverable that overstates savings is worse than no deliverable.",
        },
        {
          type: "download",
          href: "https://drive.google.com/drive/folders/1DzThYn7PE1YZ6JC9ngul08tGnL64c5Gb?usp=drive_link",
          title: "Download the five .skill files",
          detail: "Google Drive folder, no sign-up",
        },
      ],
    },

    {
      id: "inputs",
      nav: "The data inputs",
      eyebrow: "Before you run them",
      heading: "The exact data inputs each skill needs",
      blocks: [
        {
          type: "p",
          text: "Gather these before you run the prompt. Walking in with the inputs ready is the difference between a three-minute output and a twenty-minute back-and-forth.",
        },
        {
          type: "table",
          head: ["Skill", "Must-have inputs"],
          rows: [
            ["`tax-savings-report`", "Client type, income picture (W-2 / K-1 / distributions), current entity, filing status and state, effective/marginal rate, existing retirement vehicles, real estate and capital gains events, what the current CPA already implemented"],
            ["`entity-comparison-model`", "Business net profit, reasonable comp estimate, filing status, state, other household income, benefits run through the business, number of owners"],
            ["`roth-conversion-scenario`", "Ages, pre-tax balances, expected income by year, filing status, state, planning window, growth rate, assumed future tax rate, outside cash to pay the tax"],
            ["`cash-balance-plan-projection`", "Owner age(s), net profit and stability, owner W-2 comp, employee census (ages and comp), existing plan contributions, marginal rate, state, planning window"],
            ["`financial-plan-overlay`", "Current allocation and balances, contribution rates, risk profile, goals, the identified annual saving, how it's redeployed, growth rate, horizon"],
          ],
        },
        {
          type: "p",
          text: "When a number isn't available, the skills are built to mark it \"needs data\" rather than inventing it. Use that. A report that's honest about its soft spots earns more trust than one that pretends to be precise.",
        },
      ],
    },

    {
      id: "side-by-side",
      nav: "Manual vs skill",
      eyebrow: "Side by side",
      heading: "Manual vs skill",
      blocks: [
        {
          type: "table",
          rowHeads: true,
          head: ["Workflow", "The manual version", "With the skill"],
          rows: [
            ["Savings report", "Pull the return, eyeball it against strategies you remember, write up the ones that come to mind, build the document by hand. Half a day, and you forget two or three levers.", "Screened against the full library every time, itemized with a split tally, rendered as a PDF. Minutes."],
            ["Entity comparison", "Rebuild a spreadsheet from a template, re-key the brackets, sanity-check the payroll tax math, format it. An afternoon.", "Four entity scenarios, comparison table, and breakeven, all driven off one Inputs tab. Minutes."],
            ["Roth scenario", "Map brackets by hand, project year by year, build the do-nothing comparison. Easy to make an arithmetic slip.", "Bracket-filling schedule and lifetime comparison, with a sensitivity tab. Minutes."],
            ["Cash balance projection", "Estimate capacity, guess at staff cost, build the projection. Often skipped entirely because it's fiddly.", "Capacity scaled by age, employee cost shown, multi-year saving vs 401k-only. Minutes."],
            ["Plan overlay", "Most pros never build this. The tax win gets delivered and the long-term story never gets told.", "Current path vs integrated path, the difference called out as one number, presentation-ready. Minutes."],
          ],
        },
        {
          type: "p",
          text: "The pattern: the skill doesn't make the decisions. It removes the hours between your decision and a document the client can hold.",
        },
      ],
    },

    {
      id: "decision-tree",
      nav: "The decision tree",
      eyebrow: "Which one when",
      heading: "The decision tree",
      blocks: [
        { type: "p", text: "Which skill to run when. Read top to bottom for a given client." },
        {
          type: "table",
          rowHeads: true,
          head: ["If the client is...", "And the situation is...", "Run this first"],
          rows: [
            ["Any high earner, new to you", "You don't yet know where the leaks are", "`tax-savings-report` (it screens everything and tells you what to model next)"],
            ["A business owner", "Still a sole prop or unsure their structure fits", "`entity-comparison-model`"],
            ["Anyone with large pre-tax balances", "Has a low-income year coming, or fears higher future rates", "`roth-conversion-scenario`"],
            ["An owner or practice professional", "Strong stable profit, already maxing the 401k", "`cash-balance-plan-projection`"],
            ["Any client after savings are found", "Wants to see what the recovered dollars become long-term", "`financial-plan-overlay`"],
          ],
        },
        {
          type: "p",
          text: "The usual sequence: run the savings report first to find the levers, model the two or three biggest with the matching skills, then close with the overlay so the client sees the compounding effect. The report tells you what to model. The models prove the numbers. The overlay makes it land.",
        },
      ],
    },

    {
      id: "whats-next",
      nav: "What's next",
      eyebrow: "What's next",
      heading: "Two ways forward",
      blocks: [
        {
          type: "p",
          text: "**Run it yourself.** Load the five skills, use the prompts, and these deliverables are yours to produce for every client. Bookmark this page and come back to it.",
        },
        {
          type: "p",
          text: "**Hand off the strategy work.** Plenty of clients have savings sitting in their structure that go past return-level work: entity restructuring, plan integration, the strategies that need a securities or insurance license to implement. That's the part I run, through you. I don't approach your clients or take the compliance work, and the firm earns from the added service.",
        },
        { type: "cta", ...PARTNER, note: "US and Canadian firms. Six quick questions." },
        { type: "p", text: "You keep the relationship. I do the strategy. The client keeps the money they were overpaying." },
      ],
    },
  ],
}
