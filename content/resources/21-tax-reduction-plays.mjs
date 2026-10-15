// Source: Notion, Wallace Darling database, row
// "Lead Magnet - BREAKING: BYE CPA-ONLY. HELLO TAX STRATEGIST." > nested page
// "The 21 Tax Reduction Plays Most High Earners Never Get Shown".

const AUDIT = { label: "Apply for the free audit", href: "/form/" }

export default {
  slug: "21-tax-reduction-plays",
  audience: "high-earners",
  kind: "Free playbook",
  title: "The 21 Tax Reduction Plays",
  headline: "The 21 tax reduction plays most high earners never get shown",
  description:
    "21 legal tax reduction plays for business owners and executives, rebuilt for the 2026 rules: who each one fits, what it moves, and the honest reason it gets skipped. Plus a 90 minute self audit.",
  lead:
    "Your CPA reports what already happened. A strategist changes what happens next. Every play below is legal, current for the 2026 tax year, and in use right now.",
  meta: ["Free", "21 plays", "Current for 2026", "90 minute self audit"],
  proof: [
    { value: "21", label: "Plays", detail: "Structure, deferral, real estate, capital gains, repositioning and protection." },
    { value: "4", label: "Parts per play", detail: "Who it fits, what it does, rough impact, and why it gets skipped." },
    { value: "25", label: "Self audit steps", detail: "A first pass on your own returns, no software needed." },
  ],
  cover: { big: "21", small: "tax reduction plays for 2026" },
  cardDescription:
    "Entity, deferral, real estate, QSBS, 1031 and insurance plays, each with who it fits, the rough dollar impact and why your accountant hasn't raised it.",
  updated: "2026-10-15",
  order: 1,
  disclaimer:
    "This document is general educational information about tax strategies available under current federal law. It is not tax, legal, or investment advice, and it is not a recommendation for your situation. Tax outcomes depend on facts specific to you. Figures reflect the 2026 tax year and are subject to change. Work with qualified professionals before implementing anything described here.",

  sections: [
    {
      id: "read-this-first",
      nav: "How to read this",
      eyebrow: "Read this first",
      heading: "Filing a return and engineering what lands on it are two different jobs",
      blocks: [
        {
          type: "lead",
          text: "Hey, I'm Wallace Darling. I'm a tax reduction strategist working with business owners and executives who are making real money and handing an unnecessary amount of it to the IRS.",
        },
        {
          type: "p",
          text: "I built this because of a conversation I keep having. Someone earning $800,000 tells me their accountant is great, and they're usually right. Clean returns, filed on time, no notices. Then I read those returns and find six figures of strategy that was never on the table, because filing a return correctly and engineering what lands on it are two different jobs held by two different people, and most high earners have only hired one of them.",
        },
        {
          type: "p",
          text: "Read it and you'll be able to look at your own situation and tell which of the 21 should have come up by now.",
        },
        {
          type: "note",
          title: "A note on the writing.",
          body: "Two sections, \"How to read this\" and \"The 90 minute self audit\", are written in simplified technical English. Short sentences, no contractions, one instruction at a time. Those two sections are procedures, and a procedure that can be read two ways is a procedure that fails. Everything else is written the way I talk.",
        },
        { type: "h3", text: "How to read this" },
        {
          type: "p",
          text: "Each play states who it fits in its first line. Three reader types appear: **business owner**, **employed executive**, and **practice professional**. A practice professional owns a practice and also draws a salary from it. A practice professional fits both of the other two types.",
        },
        {
          type: "steps",
          items: [
            "Identify your reader type from the three above.",
            "Read the \"Who it fits\" line at the top of each play.",
            "If your reader type appears in that line, read the whole play.",
            "If your reader type does not appear, read the play anyway at half speed. Some plays apply to a spouse or a second entity.",
            "Give each play one of three results: **in place**, **does not apply**, or **never discussed**.",
            "Write the result next to the play number.",
            "Count your \"never discussed\" results.",
            "If the count is four or higher, a structured review finds money in most cases.",
            "If the count is zero, you have a strategist already. You do not need me.",
          ],
        },
        {
          type: "p",
          text: "Every play has the same four parts: who it fits, what it does, the rough impact, and why it gets skipped. Read the fourth part closely. The reason a strategy gets skipped is almost never that it fails to work.",
        },
        {
          type: "callout",
          title: "Prefer to skip the DIY?",
          body: "A free tax audit reviews your last two returns and produces an itemized savings tally for your situation. Most qualified clients land in the $50k to $400k+ range.",
          cta: AUDIT,
        },
      ],
    },

    {
      id: "structure",
      nav: "Structure plays (1 to 3)",
      eyebrow: "Structure plays",
      heading: "Where your income lands before a single deduction gets counted",
      blocks: [
        {
          type: "p",
          text: "Three decisions that sit upstream of every deduction you will ever take. Get these wrong and the other eighteen plays are working against a bad foundation.",
        },
        {
          type: "card",
          id: "play-1",
          num: "01",
          title: "Entity election review",
          fields: [
            ["Who it fits", "Business owners and practice professionals. Sole proprietors, single-member LLCs, and anyone whose entity was chosen at formation and never looked at again."],
            ["What it does", "Your entity determines whether profit gets hit with self-employment tax, whether it qualifies for the Section 199A deduction, and whether owner compensation can be split between salary and distribution. The common move is sole proprietor to S corporation. The narrower move, S corporation to C corporation, matters when you are retaining earnings, funding benefits at the entity, or building toward a QSBS-eligible exit."],
            ["Rough impact", "Run the arithmetic rather than the sales pitch. On $500,000 of net profit, a sole proprietor pays roughly $38,600 in self-employment tax for 2026: 12.4% on the $184,500 Social Security wage base, 2.9% Medicare on the whole amount because Medicare has no cap, and 0.9% additional Medicare above $200,000. Move to an S corporation with a defensible $180,000 salary and payroll taxes land near $27,500. That is about $11,000 a year. The realistic range is $10,000 to $20,000, and anyone quoting you more than that is assuming a salary you cannot defend in an exam."],
            ["Why it gets skipped", "An entity change is a project, not a filing. New EIN, payroll setup, a short-period return, state registrations, and a year of cleanup. It sits outside the scope most engagement letters describe, so it needs someone to own it as a separate piece of work. There is also a 2026 wrinkle: the 199A phase-in range widened to $150,000 joint this year, so the wage decision now interacts with the QBI deduction differently than it did in 2025. If nobody re-ran that math this spring, it is still sitting on last year's answer."],
          ],
        },
        {
          type: "card",
          id: "play-2",
          num: "02",
          title: "Reasonable compensation calibration",
          fields: [
            ["Who it fits", "Business owners and practice professionals. Every S corporation owner."],
            ["What it does", "Sets the split between salary and distribution. Salary carries payroll tax. Distributions do not. Set it too high and you are donating. Set it too low and you invite an examination and lose the W-2 wage capacity that both the 199A deduction and your retirement plan limits depend on."],
            ["Rough impact", "Recalibrating a salary that has been on autopilot for years commonly moves five figures annually, and it moves in both directions. I have told owners to raise their salary. The point is that almost nobody has had the number actually calculated. They inherited a rule of thumb."],
            ["Why it gets skipped", "Defending the number properly requires a compensation study: role, hours, market comparables, documented. A firm can reasonably set it once at 60/40 and move on, and then revenue triples underneath a number nobody revisits. Worth knowing for 2026: the compensation limit that drives qualified plan contributions is $360,000, so your salary is not only a payroll tax decision. It is also the ceiling on how much you can put into a retirement plan, which makes plays 4 and 5 downstream of this one."],
          ],
        },
        {
          type: "card",
          id: "play-3",
          num: "03",
          title: "Pass-through entity tax election",
          fields: [
            ["Who it fits", "Business owners and practice professionals who own S corporations or partnerships in any of the 36 states with a PTET regime."],
            ["What it does", "The entity pays your state income tax at the entity level and deducts it as an ordinary business expense on the federal return. That converts a personal deduction sitting under a cap into a business deduction with no cap."],
            ["Rough impact", "The 2026 SALT cap is $40,400. It phases down by 30 cents per dollar of MAGI above $505,000 and floors at $10,000, so it is fully phased down around $606,333 of MAGI. If you are in a 9% state with $1M of pass-through income, you are paying roughly $90,000 in state tax and personally deducting almost none of it. There is a second bite most people have not heard about yet: a new limitation effective for tax years beginning after December 31, 2025 reduces the value of itemized deductions by 2/37 for taxpayers in the 37% bracket. So the SALT deduction you do keep is worth less than it was. Both effects push the same direction, and the PTET election moves the deduction to the entity where neither one reaches it."],
            ["Why it gets skipped", "It is an annual election with state-specific deadlines, estimated payment requirements, and consent mechanics across partners. Miss the window and you wait a full year. Good news for 2026: the proposed federal restrictions on PTET were dropped from the final legislation, so the workaround survived intact. Several state regimes carry their own sunset dates, so this is a state-by-state check rather than a blanket yes."],
          ],
        },
      ],
    },

    {
      id: "deferral",
      nav: "Deferral plays (4 to 7)",
      eyebrow: "Deferral plays",
      heading: "The vehicles that dwarf a maxed-out 401(k)",
      blocks: [
        { type: "p", text: "If your retirement conversation ends at the 401(k), you are looking at the floor and calling it the ceiling." },
        {
          type: "card",
          id: "play-4",
          num: "04",
          title: "Cash balance plan",
          fields: [
            ["Who it fits", "Business owners and practice professionals with consistent profit, generally $500,000 and up, ideally with a small or older employee census."],
            ["What it does", "A defined benefit plan expressed as a hypothetical account balance. Unlike a 401(k), the contribution scales with your age and compensation rather than sitting under one flat cap. The older you are, the more you can put in, because the plan has fewer years left to fund your benefit."],
            ["Rough impact", "The 2026 Section 415(b) annual benefit limit is $290,000. Practical annual contributions run roughly $150,000 at age 45, $250,000 to $290,000 at age 55, and $325,000 to $360,000 at ages 60 to 62. Those are actuarial illustrations that vary by plan design, so treat them as the shape of the opportunity rather than your number. Contributions come off ordinary income at a 37% federal top rate plus state. One honest adjustment: if you own a pass-through, the contribution also reduces qualified business income, which shrinks your 199A deduction, so the net federal benefit lands somewhat under 37%."],
            ["Why it gets skipped", "It requires an enrolled actuary, a third party administrator, annual coverage testing, and a multi-year funding commitment. That is a plan design engagement with a different professional, not something that surfaces during return prep."],
          ],
          blocks: [
            {
              type: "note",
              tone: "warn",
              title: "The caution worth more than the rest of this entry.",
              body: "Contributions are largely required once the plan exists, not optional. If your income swings hard year to year, this is the wrong tool, and anyone telling you otherwise is selling.",
            },
          ],
        },
        {
          type: "card",
          id: "play-5",
          num: "05",
          title: "Defined benefit and 401(k) combo design",
          fields: [
            ["Who it fits", "Business owners and practice professionals, once the cash balance plan exists. This play is about what you stack on top."],
            ["What it does", "Layers a 401(k) profit sharing plan over the defined benefit plan. Your elective deferral does not count against the combined deduction limit under Section 404(n). And if employer profit sharing stays at or below 6% of aggregate participant compensation, the combined limit under Section 404(a)(7) does not apply at all."],
            ["Rough impact", "For 2026, the elective deferral is $24,500, or $32,500 with the age 50 catch-up, or $35,750 at ages 60 to 63. Add employer profit sharing, which for a solo or near-solo census can reach about $21,600 at the $360,000 compensation limit. Note that the 6% safe harbor is measured against aggregate participant compensation, so with rank-and-file employees in the census your individual allocation may need to be smaller to stay inside it. Stack a cash balance contribution at age 60 on top and total deductible contributions approach $400,000 in a single year."],
            ["Why it gets skipped", "The 6% safe harbor and the PBGC exception to the combined limit are plan design mechanics that live with the actuary and the recordkeeper. Without someone coordinating those two parties against your tax picture, the design defaults to something smaller."],
          ],
          blocks: [
            {
              type: "note",
              title: "One 2026 change to flag.",
              body: "If your 2025 Social Security wages from the employer sponsoring the plan exceeded $150,000, your catch-up contributions now have to be Roth, which removes the deduction on that portion. The test runs on FICA wages from that specific employer, so a partner or a sole proprietor with self-employment income and no W-2 is outside the rule entirely.",
            },
          ],
        },
        {
          type: "card",
          id: "play-6",
          num: "06",
          title: "Nonqualified deferred compensation",
          fields: [
            ["Who it fits", "Employed executives with access to a 409A plan. Also business owners of C corporations."],
            ["What it does", "Lets you elect to defer salary or bonus into a future year. The play is landing those dollars in a year with a lower rate: after an exit, in retirement, during a sabbatical, or after a move to a state with no income tax."],
            ["Rough impact", "Moving $200,000 from a 37% year into a 24% year is roughly $26,000 of federal rate arbitrage. The state arbitrage is often larger than the federal one and gets discussed far less."],
            ["Why it gets skipped", "The election is irrevocable and generally has to be made before the year the compensation is earned, so the decision window closes in the fall, months before anyone is thinking about taxes. There is also a risk that belongs in the conversation and rarely makes it: deferred compensation is an unsecured claim against your employer. If the company fails, you are a general creditor standing in line. That makes this a credit decision as much as a tax one."],
          ],
        },
        {
          type: "card",
          id: "play-7",
          num: "07",
          title: "Roth conversion sequencing",
          fields: [
            ["Who it fits", "Business owners after a loss year, employed executives between roles, and anyone in the window between retiring and required distributions starting. Large pre-tax balances plus a year of unusually low income."],
            ["What it does", "Converts pre-tax dollars to Roth during a low-rate year, deliberately filling a bracket rather than converting a round number and hoping."],
            ["Rough impact", "The bracket structure was made permanent in 2025, so this is bracket arbitrage rather than a race against an expiring rule. Filling the 24% bracket up to $403,550 of joint taxable income, instead of letting those same dollars come out later at 37%, is about 13 points on every converted dollar. Compounded across a large balance, it is one of the highest-value plays on this list for the right household."],
            ["Why it gets skipped", "A conversion raises this year's tax bill. Measured on a one-year scorecard, that reads as a loss, and return preparation is a one-year engagement by design. Two thresholds to watch while you execute: Medicare premium surcharges two years forward, and the 3.8% net investment income tax at $250,000 of joint MAGI, a figure fixed in statute since 2013 and never indexed for inflation."],
          ],
        },
        {
          type: "callout",
          title: "Four plays into the deferral section and you can already tell whether yours have been run.",
          body: "The free tax audit reads your last two returns and produces the itemized version of this: every play that applies to your actual numbers, with a dollar tally attached.",
          cta: AUDIT,
        },
      ],
    },

    {
      id: "real-estate",
      nav: "Real estate plays (8 to 11)",
      eyebrow: "Real estate plays",
      heading: "Depreciation, participation status, and the 2026 trap under both",
      blocks: [
        { type: "p", text: "The most powerful cluster on the list, and the one with a live trap sitting under it this year." },
        {
          type: "card",
          id: "play-8",
          num: "08",
          title: "Cost segregation",
          fields: [
            ["Who it fits", "Business owners and practice professionals who own commercial or residential rental property. Also anyone who owns the building their practice operates out of, a group that almost never gets told about this."],
            ["What it does", "An engineering study that breaks a building into its components and reclassifies the qualifying ones out of 27.5 or 39 year depreciation and into 5, 7, and 15 year property. Carpet, cabinetry, specialty electrical, land improvements, parking, landscaping."],
            ["Rough impact", "Benchmark data across thousands of studies puts the median reclassification near 24% of depreciable basis, with most results between 15% and 30%. Warehouses land low, hotels and medical offices land high. Note that basis excludes land, which is not depreciable. On a $3M purchase with $600,000 allocated to land, you are working from $2.4M, and a 24% reclassification pulls roughly $575,000 forward into the near term."],
            ["Why it gets skipped", "It costs money up front and requires an engineering firm, so it needs someone to sponsor it. There is also a legitimate objection: acceleration is not creation, and some of it comes back as recapture on sale. Two things that objection misses. The time value of the money is real. And the recapture question has an answer, which is planning the exit at the same time you run the study rather than four years later. See [play 15](#play-15) for the part that catches people."],
          ],
        },
        {
          type: "card",
          id: "play-9",
          num: "09",
          title: "100% bonus depreciation and the 2026 loss trap",
          fields: [
            ["Who it fits", "Business owners, practice professionals, and any employed executive with a side entity placing property in service."],
            ["What it does", "Immediately expenses the short-life property a cost segregation study identifies, plus equipment, heavy vehicles, and qualified improvement property."],
            ["Rough impact", "Bonus depreciation is back at 100% and permanent, for property both acquired and placed in service after January 19, 2025. Both dates matter. Property acquired on or before January 19, 2025 stays on the old phase-down schedule, which gives 20% if it is placed in service in 2026. Section 179 for 2026 is $2,560,000 with the phase-out starting at $4,090,000."],
            ["Why it gets skipped", "Both of these rules are new this filing season. The dual date requirement and the downward threshold reset are exactly the kind of detail that gets missed when a return is prepared against last year's assumptions."],
          ],
          blocks: [
            {
              type: "note",
              tone: "warn",
              title: "Read this before you buy anything.",
              body: [
                "The excess business loss limitation under Section 461(l) was made permanent and its indexing base was reset. For 2026 the threshold is $256,000 single and $512,000 joint, down from $313,000 and $626,000 in 2025. A large bonus depreciation loss that would have wiped out W-2 income last year may get capped this year and carried forward as a net operating loss instead.",
                "The deduction survives. The timing changed, and if you bought the property expecting a current-year offset, the timing was the entire point. Most commentary online still quotes the 2025 numbers, so verify before you commit.",
              ],
            },
          ],
        },
        {
          type: "card",
          id: "play-10",
          num: "10",
          title: "Real estate professional status and the short-stay route",
          fields: [
            ["Who it fits", "Business owners, employed executives, and practice professionals. Specifically, households where one spouse can meet the hours test, and any high earner willing to run short-stay rentals."],
            ["What it does", "Real estate professional status makes rental losses non-passive, so they can offset W-2 and business income instead of sitting idle. It requires more than half your personal services in real property trades or businesses, more than 750 hours in them, and material participation in the rental activity."],
            ["The route most people miss", "Under Regulation 1.469-1T(e)(3)(ii)(A), an activity with an average customer stay of seven days or less is not a rental activity at all. REPS is not required. Material participation on its own is enough. For a two-earner household where neither spouse can reach 750 hours, this is the door."],
            ["Rough impact", "Pair this with cost segregation on a $1.5M short-stay property, adjust for land, apply a typical reclassification, and a first-year deduction of roughly $250,000 to $350,000 against ordinary income is a reasonable expectation. Two constraints ride along. The excess business loss cap in [play 9](#play-9) applies, which is why these two plays have to be modeled together. And once the activity is not a rental it is a trade or business, which can expose net income to self-employment tax in the profitable years."],
            ["Why it gets skipped", "The hours test is a documentation problem rather than a tax problem. Most advisors will not sign off without a contemporaneous log, and building that log is outside what a compliance engagement covers, so the strategy gets discouraged rather than supported. Understandable position. It still costs you the deduction."],
          ],
        },
        {
          type: "card",
          id: "play-11",
          num: "11",
          title: "The Augusta rule",
          fields: [
            ["Who it fits", "Business owners and practice professionals. Anyone with a home and an entity."],
            ["What it does", "Section 280A(g) lets you rent your home to your business for 14 days or fewer per year. The business deducts the rent. You exclude the income from your personal return entirely. Not deferred. Excluded."],
            ["Rough impact", "Modest and clean. At a defensible $1,500 per day for 14 days, that is $21,000 deducted at the entity and received tax free. The 2025 legislation left this provision untouched."],
            ["Why it gets skipped", "Two reasons. It is small enough that it loses the agenda to bigger items. And it demands real substantiation: comparable venue quotes, a written rental agreement, a documented business purpose, actual payment between accounts, and minutes for the meeting that happened. Day 15 destroys the entire exclusion rather than just the extra day, which makes it a file with real downside and no glory in owning it."],
          ],
        },
      ],
    },

    {
      id: "capital-gains",
      nav: "Capital gains plays (12 to 14)",
      eyebrow: "Capital gains plays",
      heading: "QSBS, equity timing, and the loss bank nobody builds",
      blocks: [
        {
          type: "card",
          id: "play-12",
          num: "12",
          title: "Section 1202 QSBS",
          fields: [
            ["Who it fits", "Business owners who are founders or early employees of C corporations, and anyone weighing a C corporation conversion."],
            ["What it does", "Excludes gain on the sale of qualified small business stock. It is the single largest exclusion available to an American entrepreneur, and it gets decided years before anyone thinks about it."],
            ["Rough impact", "The rules changed for stock acquired after July 4, 2025, and the change is significant. The exclusion is tiered now: 50% at three years held, 75% at four years, 100% at five. The per-issuer cap moved from $10M to $15M, or 10 times basis if greater. The gross asset ceiling for a qualifying company moved from $50M to $75M, tested at issuance. Stock acquired on or before July 4, 2025 stays on the old rules: five years, $10M, $50M."],
            ["Why it gets skipped", "QSBS eligibility is set at formation and re-tested at every financing round. By the time a return preparer sees the sale, the outcome was locked years earlier. Stacking, which means gifting shares into non-grantor trusts to multiply the per-taxpayer cap, is estate planning work requiring an attorney. That is a third professional, and coordinating three of them is a job that usually belongs to no one."],
          ],
          blocks: [
            {
              type: "note",
              tone: "warn",
              title: "Do not over-model the three-year exit.",
              body: "The portion of gain that is not excluded at the 50% and 75% tiers is taxed at the 28% Section 1202 rate, not at 15% or 20%, and the net investment income tax can apply on top. A 50% exclusion at three years works out to an effective rate near 15.9%, which is better than a normal long-term gain and nowhere near half of it. The five-year tier is still where the real money is.",
            },
          ],
        },
        {
          type: "card",
          id: "play-13",
          num: "13",
          title: "Equity compensation timing",
          fields: [
            ["Who it fits", "Employed executives and senior employees holding RSUs, incentive stock options, or non-qualified options."],
            ["What it does", "Sequences exercises and vests across tax years instead of letting the vesting schedule decide your tax bill. ISO exercises trigger alternative minimum tax on the spread. Early exercise with a Section 83(b) election starts the long-term capital gains clock while the spread is still small. RSU vests stack on top of salary and push you through thresholds you may not be watching."],
            ["Rough impact", "For 2026, the 20% long-term capital gains rate starts above $613,700 of joint taxable income, and the 3.8% net investment income tax rides on top, so the ceiling on long-term gain is 23.8%. Equity compensation, by contrast, is wage income. The net investment income tax does not touch it, but the Medicare taxes do: 37% federal plus 2.35% employee Medicare at the top puts you near 39.35%. That is roughly 15.5 points between a vest and a qualifying sale, and which side of it a dollar lands on is frequently a scheduling decision."],
            ["Why it gets skipped", "This needs a projection built in the third quarter, not a return prepared in the first. By the time your accountant opens the file, a vesting calendar has already made every decision that mattered."],
          ],
        },
        {
          type: "card",
          id: "play-14",
          num: "14",
          title: "Systematic tax loss harvesting",
          fields: [
            ["Who it fits", "Business owners, employed executives, and practice professionals with a taxable brokerage account above roughly $250,000. Not a play for retirement accounts."],
            ["What it does", "Harvests unrealized losses continuously through the year rather than in a December scramble, banking them against gains."],
            ["Rough impact", "Harvested losses offset capital gains dollar for dollar, then $3,000 of ordinary income per year, and the remainder carries forward with no expiration. The real value is not the $3,000. It is the carryforward bank, which is what makes a future business sale, a concentrated position unwind, or a portfolio rebuild dramatically cheaper. People underrate this because they price it as an annual benefit instead of an asset they are building."],
            ["Why it gets skipped", "It falls between two chairs. It is an investment operations job, and your accountant does not have custody of the account. Your broker has custody but does not file your return. If you run it yourself, know that the wash sale window is 61 days, not 30: thirty days before the sale, the day of the sale, and thirty days after. It applies across every account you and your spouse control, and a repurchase inside an IRA permanently disallows the loss rather than deferring it."],
          ],
        },
        {
          type: "callout",
          title: "The next three plays are where the licensing wall starts showing up.",
          body: "The audit is a diagnostic, not a pitch. Two returns in, an itemized tally out, and a straight answer about whether there is enough here to be worth your time.",
          cta: AUDIT,
        },
      ],
    },

    {
      id: "repositioning",
      nav: "Repositioning plays (15 to 17)",
      eyebrow: "Repositioning plays",
      heading: "Three ways to move a gain instead of paying it",
      blocks: [
        {
          type: "card",
          id: "play-15",
          num: "15",
          title: "1031 exchange into a Delaware Statutory Trust",
          fields: [
            ["Who it fits", "Business owners and practice professionals holding appreciated investment real estate who want out of active management without writing a check to the IRS on the way out."],
            ["What it does", "A DST is a fractional interest in institutional real estate that qualifies as like-kind replacement property under Revenue Ruling 2004-86. You sell the building, exchange into the trust, and the gain rides forward. No tenants, no toilets, no phone calls."],
            ["Rough impact", "Defers federal capital gains, unrecaptured Section 1250 gain taxed at 25%, the 3.8% net investment income tax, and state tax on the full gain. On a $2M gain in a high-tax state, the deferred amount commonly exceeds $500,000."],
            ["Why it gets skipped", "DSTs are securities. Placing one requires a securities license, and your CPA does not hold one. This is the cleanest example of the licensing problem in the document. Your accountant may know exactly what a DST is, may agree it is right for you, and still cannot legally put you in one."],
          ],
          blocks: [
            {
              type: "note",
              tone: "warn",
              title: "The interaction with play 8 that catches people.",
              body: "Cost segregation converts building basis into Section 1245 personal property. Section 1245 recapture is ordinary income, up to 37%, and it is triggered on the exchange unless you receive like-kind Section 1245 replacement property. A DST does not provide that. So a heavily cost-segregated building exchanged into a DST can throw off ordinary recapture income in the year of an exchange that was supposed to defer everything. This is not a reason to skip either play. It is a reason to model them in the same conversation, which almost never happens because they are usually run by different people two years apart.",
            },
            {
              type: "note",
              title: "One honest caution.",
              body: "DSTs are illiquid, you have no operational control, and you are taking sponsor risk. The deferral is real and it is not a reason to buy a bad asset. There are plenty of bad assets in this category.",
            },
          ],
        },
        {
          type: "card",
          id: "play-16",
          num: "16",
          title: "Opportunity zone timing",
          fields: [
            ["Who it fits", "Business owners, employed executives, and practice professionals realizing a large capital gain in 2026 or 2027."],
            ["What it does", "Reinvests a realized gain into a Qualified Opportunity Fund, which defers the original gain and eventually excludes appreciation on the new investment."],
            ["Rough impact", "For a gain realized in the back half of 2026, pushing the fund investment into 2027 is generally the better outcome, and the 180-day reinvestment window can often be managed to land there. On a large gain, that calendar decision is worth six figures."],
            ["Why it gets skipped", "The split between legacy and new rules is brand new and not obvious from anything you would read casually. Watching a 180-day clock so it lands on the correct side of a year end sits outside what anyone has been engaged to do."],
          ],
          blocks: [
            {
              type: "note",
              tone: "warn",
              title: "This is a calendar play in 2026, and it is worth reading twice.",
              body: "The program was made permanent in 2025, but the new rules do not start yet. An investment made in 2026 falls under the legacy rules, which force recognition of the deferred gain on December 31, 2026. That is effectively no deferral at all. An investment made after December 31, 2026 gets a rolling five-year deferral plus an automatic 10% basis step-up at year five, or 30% for a qualified rural fund. The 10-year exclusion of post-investment appreciation applies either way.",
            },
          ],
        },
        {
          type: "card",
          id: "play-17",
          num: "17",
          title: "Installment sale structuring",
          fields: [
            ["Who it fits", "Business owners and practice professionals selling an asset with a large embedded gain."],
            ["What it does", "Spreads gain recognition across multiple years under Section 453 instead of recognizing all of it at once."],
            ["Rough impact", "Keeps you under the $613,700 joint long-term capital gains threshold in more years than one, holds down net investment income tax exposure, and can keep ordinary income out of the 37% bracket. It also interacts with the 199A phase-in range and with Medicare premium surcharges two years out, both of which get forgotten in exit planning."],
            ["Why it gets skipped", "Buyers prefer cash and advisors default to the clean close. Structuring the note happens during the letter of intent, months before anyone asks a tax question. By the time a return preparer is in the room, the deal is signed and the structure is fixed."],
          ],
          blocks: [
            {
              type: "note",
              title: "Three limits to know before you count on it.",
              body: "Section 453(i) forces all depreciation recapture into the year of sale regardless of the installment method, so a heavily depreciated asset gives up much of the smoothing. Section 453A imposes an interest charge on the deferred tax once the obligation exceeds $5 million. And the installment method is unavailable for publicly traded securities and for inventory.",
            },
          ],
        },
      ],
    },

    {
      id: "protection",
      nav: "Protection plays (18 to 20)",
      eyebrow: "Protection plays",
      heading: "The three your accountant is least licensed to touch",
      blocks: [
        {
          type: "p",
          text: "Not because they fail to understand them. Because they are not licensed to act on them, which is a completely different problem and one that no amount of goodwill from your CPA can fix.",
        },
        {
          type: "card",
          id: "play-18",
          num: "18",
          title: "Key man policy",
          fields: [
            ["Who it fits", "Business owners and practice professionals running a firm whose value depends on one or two people. Practices, agencies, closely held businesses with a rainmaker."],
            ["What it does", "The company owns and funds a policy on a critical person. The proceeds fund a buyout, satisfy a lender covenant, or keep the doors open through a forced transition."],
            ["Rough impact", "Premiums are generally not deductible, so this is not a deduction play. Proceeds are generally received free of income tax under Section 101(a), provided the notice and consent requirements of Section 101(j) were satisfied before the policy was issued. The value is in what tax-free cash does at the worst possible moment."],
            ["Why it gets skipped", "It requires an insurance license. Your CPA does not hold one. And the notice and consent documentation has to exist before issuance, not after. Miss that step and the proceeds become taxable income, which turns a well-intentioned policy into an expensive discovery at the exact moment nobody has capacity to deal with it."],
          ],
        },
        {
          type: "card",
          id: "play-19",
          num: "19",
          title: "Permanent insurance as a tax location",
          fields: [
            ["Who it fits", "Business owners, employed executives, and practice professionals who have already exhausted every qualified plan above and have a durable need for death benefit. Not a first move. Possibly a seventh."],
            ["What it does", "Cash value grows tax deferred, and it can be accessed through policy loans, which are not taxable events while the policy remains in force and is not a modified endowment contract."],
            ["The contrarian part", "\"Buy term and invest the difference\" is sound advice for a household whose entire plan fits inside a 401(k). It is a rule about product cost, and it answers nothing about where an asset should sit inside a tax structure. Those are separate questions. For a household that has already filled the cash balance plan, the profit sharing, the deferred comp, and the taxable account, the question stops being which product is cheaper and becomes where the next dollars sit most efficiently."],
            ["Rough impact", "Entirely dependent on funding level, policy design, and holding period. I am not giving you a range, because a range here would be marketing. Treat any illustration you are shown with real skepticism, including one from me."],
            ["Why it gets skipped", "Two forces pulling opposite directions. CPAs cannot implement it and are rightly wary of how aggressively it gets sold. Insurance agents oversell it because that is how they are paid. The honest version needs someone compensated the same whether the answer is yes or no. Ask whoever is showing you an illustration which one they are, and watch how long the answer takes."],
          ],
          blocks: [
            {
              type: "note",
              tone: "warn",
              title: "Read the MEC caveat, because this is how the strategy fails.",
              body: "If the policy is funded fast enough to become a modified endowment contract, loans and distributions become taxable income-first under Section 72(e)(10), regardless of whether the policy stays in force. Separately, a lapse or surrender with a large loan outstanding triggers tax on gain you never saw as cash. Both of these are design and monitoring problems, and both are avoidable, and both happen constantly.",
            },
          ],
        },
        {
          type: "card",
          id: "play-20",
          num: "20",
          title: "Partnership allocation",
          fields: [
            ["Who it fits", "Business owners and practice professionals in multi-owner partnerships and LLCs taxed as partnerships."],
            ["What it does", "A partnership agreement can allocate income, deductions, and specific items disproportionately to ownership percentage. The allocation has to carry substantial economic effect under Section 704(b), which means it must be reflected in capital accounts and must actually change what partners economically receive."],
            ["Rough impact", "The legitimate version matches allocations to economics. A partner who funds more of a capital-intensive expansion takes more of the depreciation and correspondingly more of the downside. A partner winding down toward retirement takes a shrinking income allocation as their role shrinks, with capital accounts and distributions following. Done properly this can move meaningful dollars, and it is common for the allocation in a five-year-old agreement to have drifted far from what the partners actually do now."],
            ["Why it gets skipped", "It lives in the operating agreement, which is a lawyer's document rather than an accountant's. Most agreements are boilerplate from formation and go unread until there is a dispute. If you have not opened yours since you signed it, that is where this play is hiding."],
          ],
          blocks: [
            {
              type: "note",
              tone: "warn",
              title: "Where people get this wrong.",
              body: "An allocation designed purely to lower the group's combined tax, with no change to anyone's economic position, is the textbook fact pattern the substantiality rules exist to defeat. Regulation 1.704-1(b)(2)(iii) treats shifting tax consequences as insubstantial where capital accounts do not meaningfully differ. The IRS reallocates it and you have paid a lawyer to build something that does not hold. If someone pitches you a reallocation with no economic change attached, that is the tell.",
            },
            {
              type: "note",
              title: "Related structure.",
              body: "Owners holding a large concentrated position sometimes look at an exchange fund under Section 721, an UPREIT contribution, or a charitable remainder trust to reposition exposure without an immediate taxable sale. Each is a different instrument with different lockups and different consequences, so name the specific one before anyone builds you a diagram.",
            },
          ],
        },
        {
          type: "callout",
          title: "If plays 18 through 20 were news to you, that is the licensing wall, not a failing in your accountant.",
          body: "Coordinating across the licensed parties each strategy needs is most of what the implementation work actually is. The audit tells you first whether it is worth coordinating anything.",
          cta: AUDIT,
        },
      ],
    },

    {
      id: "operating-system",
      nav: "The operating system (21)",
      eyebrow: "Play 21",
      heading: "The return review sequence",
      blocks: [
        {
          type: "p",
          text: "Twenty plays are a menu. What turns a menu into a result is running the same sequence every time, in the same order, against real returns rather than a conversation.",
        },
        {
          type: "table",
          rowHeads: true,
          head: ["Stage", "What happens", "What comes out"],
          rows: [
            ["Diagnose", "Read the last two personal and corporate returns line by line", "A list of plays that could apply"],
            ["Quantify", "Price each play against the actual numbers on those returns", "An itemized savings tally"],
            ["Prioritize", "Rank by dollars, effort required, and how reversible each one is", "An ordered implementation list"],
            ["Implement", "Execute the plays with the licensed parties each one requires", "Completed strategies with documentation"],
            ["Integrate", "Overlay the recovered dollars on the financial plan and project both paths", "Current path versus integrated path"],
          ],
        },
        {
          type: "p",
          text: "Most tax work stops at stage three. A report gets delivered, everyone agrees it is impressive, and then the year ends and the report goes in a drawer.",
        },
        {
          type: "p",
          text: "Stage five is the one that moves the number that actually matters. Recovered tax dollars that land in a checking account and get absorbed by ordinary life are a single-year win. The same dollars deployed against a plan are what compounds, which is why the projection at the end compares two paths instead of reporting one savings figure.",
        },
      ],
    },

    {
      id: "self-audit",
      nav: "The 90 minute self audit",
      eyebrow: "Do it tonight",
      heading: "The 90 minute self audit",
      blocks: [
        { type: "p", text: "Use this procedure to run a first pass on your own returns. You do not need software." },
        {
          type: "note",
          title: "Before you start.",
          body: "Get your most recent `Form 1040` and your most recent business return. Get the same two documents from the prior year.",
        },
        {
          type: "steps",
          items: [
            "Open your most recent `Form 1040`.",
            "Find the total tax amount on `line 24`.",
            "Find the total income amount on `line 9`.",
            "Divide the total tax by the total income.",
            "Record the result. This is your effective federal rate.",
            "If your effective federal rate is below 22%, stop the procedure. Your exposure is low.",
            "If your effective federal rate is 22% or higher, continue to step 8.",
            "Open `Schedule 1`.",
            "Find the total adjustments to income on `line 26`.",
            "If `line 26` is under $30,000 and you own a business, mark plays 4 and 5. Your deferral capacity is unused.",
            "Open `Schedule E`.",
            "Find any rental property listed in Part I.",
            "Find the depreciation expense reported for that property.",
            "If the depreciation expense is under 4% of what you paid for the property, mark play 8. No cost segregation study has been done.",
            "Open `Schedule A`.",
            "Find the state and local tax deduction amount.",
            "If the state and local tax deduction is $30,000 or higher, continue to step 18. If it is lower, skip to step 19.",
            "If you own a pass-through entity, mark play 3. The PTET election is not in use.",
            "Open your business return.",
            "Find the officer compensation line.",
            "Compare the officer compensation to the same line on the prior year return.",
            "If officer compensation is unchanged and revenue increased, mark play 2.",
            "Compare this year's personal return to last year's personal return.",
            "Look for any strategy that appears in one return and not the other.",
            "If no new strategy appears, mark play 21. No sequence runs on your returns.",
          ],
        },
        {
          type: "p",
          text: "**Result.** You now have a list of marked plays. Each marked play is a strategy your current setup does not use. This list is not a savings figure. It is a starting point.",
        },
      ],
    },

    {
      id: "whats-next",
      nav: "What's next",
      eyebrow: "What's next",
      heading: "Two ways forward",
      blocks: [
        { type: "p", text: "You have the 21 plays and a way to check your own returns against them." },
        {
          type: "p",
          text: "**Run it yourself.** Everything above is real, current for 2026, and yours to take to whoever files your returns. Print it, mark it up, put it in front of them. Plenty of people will do exactly that, and it is a good outcome. Your CPA is not the obstacle here. Scope is. Hand them this and you have widened the scope.",
        },
        {
          type: "p",
          text: "**Have me run it.** The free tax audit reads your last two personal and corporate returns and produces an itemized report: every applicable strategy from a library of over 100 sections, priced against your actual numbers, with a total savings tally. Most qualified clients land in the $50k to $400k+ range. If the audit finds you are already well-optimized, I will tell you that and we both save an afternoon.",
        },
        {
          type: "p",
          text: "One filter before you apply. I work with people ready to act on what we find. If you are gathering information for a decision you plan to make in a couple of years, this is the wrong month and I will say so on the call.",
        },
        { type: "cta", label: "Apply for the free audit", href: "/form/", note: "A 60-second qualifier, then Wally's calendar if it's a fit." },
        {
          type: "p",
          text: "P.S. Not ready for a call? Run the [self audit](#self-audit) above and count your marked plays. Four or more and there is something here worth a conversation.",
        },
      ],
    },
  ],
}
