// The AI Workflow for Modern CPA Firms: ten tax-season workflows. Modelled on Damon Millar's
// "The AI Workflow for Modern Accounting Firms" post, moved from the bookkeeping cycle to the
// US tax season so it doesn't repeat the September Practice Automation Handbook.

const partnerCta = { label: "Partner with Darling FG", href: "/partners/" }
const S = "tax-season-ai-workflows"
const fig = (name, width, height, caption, extra = {}) => ({
  type: "figure",
  src: `/assets/public/resources/${S}/${name}.webp`,
  width,
  height,
  alt: caption.replace(/[*`]/g, ""),
  caption,
  ...extra,
})

/** The header every workflow opens with: when, who runs it, who reviews it, what data goes in. */
const card = (when, runs, reviews, data, out) => ({
  type: "table",
  head: ["At a glance", ""],
  rows: [
    ["When", when],
    ["Who runs it", runs],
    ["Who reviews it", reviews],
    ["Client data that can go in", data],
    ["What comes back", out],
  ],
  rowHeads: true,
})

export default {
  slug: S,
  audience: "cpas",
  kind: "Free Claude playbook",
  title: "The AI Workflow for Modern CPA Firms",
  headline: "Ten AI workflows for tax season, from the engagement letter to the filed return",
  description:
    "A free playbook for US CPA firms: ten Claude workflows for tax season, from the engagement letter and organizer to the document chase, the K-1 tracker, extension triage, IRS notices, the review checklist, the planning signal list and a capacity tracker. Each one sets out who runs it, who reviews it and what client data can go in.",
  lead:
    "One workflow for each stage of the season, written for a US firm, with who runs it, who reviews it and what client data can go in set out on every one.",
  meta: ["Free", "10 workflows", "Copy-paste prompts", "Data rule included"],
  proof: [
    { value: "10", label: "Workflows", detail: "December to October, one per stage of the season." },
    { value: "3", label: "Data tiers", detail: "What never goes in, what needs consent, what's free to use." },
    { value: "1", label: "Capacity tracker", detail: "Hours per return, before and after." },
  ],
  cover: { big: "10", small: "workflows for tax season" },
  heroImage: { src: `/assets/public/resources/${S}/cover.webp`, alt: "The AI Workflow for Modern CPA Firms", width: 1000, height: 1174 },
  cardDescription:
    "Ten Claude workflows for tax season, from the organizer to the filed return, each with who runs it, who reviews it and what client data can go in.",
  updated: "2026-10-16",
  order: 5,
  disclaimer:
    "This page is general educational information. It is not tax, legal or investment advice, and it does not create an adviser relationship. Deadlines and product features change, so check each date with the IRS and each feature with Anthropic before you rely on it. Section 7216 questions belong with the firm's own adviser.",
  sections: [
    {
      id: "start-here",
      nav: "Why I built this",
      eyebrow: "Read this first",
      heading: "Everyone uses it their own way, and nobody can say what it saved",
      unnumbered: true,
      blocks: [
        {
          type: "lead",
          text: "Hey, I'm Wallace Darling (most people call me Wally). I run Darling Financial Group (darling-fg.com). I work with people earning $500k+ and business owners with $1M+ in revenue on the tax strategy that sits beyond the return, and I partner with CPA firms on that strategy layer so their clients get it without ever leaving the firm.",
        },
        {
          type: "quickstart",
          items: [
            { label: "Set up", value: "One afternoon in November" },
            { label: "You need", value: "A Claude Team plan and your tax software's exports" },
            { label: "You get", value: "Ten workflows, each with a prompt, a check and a reviewer" },
            { label: "Measure", value: "Hours per return, before and after" },
          ],
        },
        {
          type: "p",
          text: "Most firm owners already know AI can handle a big chunk of tax season. What they don't have is a way to roll it out, so one person uses it their own way, everyone else keeps keying 1099s by hand, and nobody can say whether it's saving a single hour.",
        },
        {
          type: "p",
          text: "So I wrote one workflow for each stage of the season, in the order the season runs. Every one sets out who runs it, who reviews it, what client data can go in and what comes back, then gives you the prompt, the check before you move on and where it goes wrong. Nobody on the team gets replaced. The same people take on more returns, and the hours your seniors spend ticking off 1099s go on planning work you can bill for.",
        },
        fig("season", 1520, 1112, "When each workflow runs. Set them up in November, before the first organizer goes out.", { label: "The season" }),
        {
          type: "flow",
          items: [
            { title: "Set it up once", text: "Plan, projects, the data rule", href: "#set-it-up" },
            { title: "Get the documents in", text: "Workflows 1 to 3", href: "#organizer-sender" },
            { title: "Prepare and track", text: "Workflows 4 to 6", href: "#prior-year-comparison" },
            { title: "Review and respond", text: "Workflows 7 and 8", href: "#notice-reader" },
            { title: "Plan and measure", text: "Workflows 9 and 10", href: "#planning-signal-list" },
          ],
        },
        {
          type: "callout",
          title: "Workflow 9 finds the planning work. I can help you deliver it.",
          body: [
            "I partner with CPA firms on the tax strategy work. I work through you and never approach your clients directly, I don't take the compliance work, and your firm earns from the added service.",
          ],
          cta: partnerCta,
        },
        {
          type: "note",
          title: "A note on the writing",
          body: [
            "The setup steps and the \"Check it\" steps are written in simplified technical English: short sentences, one action per step, no contractions. They're meant to be followed exactly. The rest reads like I talk.",
          ],
        },
      ],
    },
    {
      id: "set-it-up",
      nav: "Set it up once",
      eyebrow: "Set It Up",
      unnumbered: true,
      heading: "Set it up once, before the first organizer goes out",
      blocks: [
        {
          type: "p",
          text: "Do this in November. Once the season starts, nobody has an afternoon.",
        },
        { type: "h3", text: "The plan" },
        {
          type: "p",
          text: "Use Claude Team or Enterprise for client work, so it sits under business terms, isn't used to train Claude's models, and the firm controls who has access. Check current plans and prices at `claude.com/pricing`. Turn on file creation, because several workflows hand back an Excel file or a Word letter.",
        },
        {
          type: "steps",
          items: [
            "Open **Settings** (on Team and Enterprise, the owner opens **Organization settings**).",
            "Select **Capabilities**.",
            "Turn on **Code execution and file creation**.",
          ],
        },
        { type: "h3", text: "One project per workflow" },
        {
          type: "p",
          text: "Make a Claude project for each workflow you roll out, and paste the workflow's standing instructions into the project instructions. Then everyone runs the same steps the same way, and the reviewer knows what to expect. Name them with a number, so they sort in season order: `01 Organizer Sender`, `02 Document Chaser` and so on.",
        },
        {
          type: "steps",
          items: [
            "In Claude, select **Projects**.",
            "Select **New project**.",
            "Name the project, for example `03 Document Reader`.",
            "Paste the standing instructions from the workflow into the project instructions.",
            "Add the firm's templates to the project files: letters, checklists, the organizer.",
            "On Team, share the project with the people in the workflow's \"Who runs it\" row.",
          ],
        },
        { type: "h3", text: "The data rule" },
        {
          type: "p",
          text: "Every workflow card says which tier of client data can go in. Write the rule down once, put it in the firm's WISP, and make it the first line of every project's instructions.",
        },
        fig("tiers", 1520, 858, "The three tiers. Every workflow card names the highest tier it needs."),
        {
          type: "table",
          head: ["Tier", "What it covers", "Rule"],
          rows: [
            ["Tier 1: never", "Full Social Security numbers, bank and card numbers, ID images, passwords, IRS PINs", "Never goes into any AI tool. Redact it before upload, or use the last four digits."],
            ["Tier 2: with consent", "Tax return information: the return, the source documents, the workpapers, IRS notices", "Only in the firm's business account, only where the firm's Section 7216 setup covers it, and only by the people on the workflow."],
            ["Tier 3: free to use", "Firm templates, checklists, anonymized examples, counts and codes", "Use it anywhere in the firm's business account."],
          ],
          rowHeads: true,
        },
        {
          type: "p",
          text: "**Section 7216.** A return preparer generally needs the client's written consent before using or disclosing tax return information for purposes other than preparing the return ([26 CFR 301.7216-3](https://www.law.cornell.edu/cfr/text/26/301.7216-3)). Some of these workflows prepare the return. Some, like the planning signal list, go beyond it. Take the question of which is which to the firm's adviser before the season, not during it, and write the answer into the engagement letter.",
        },
        { type: "h3", text: "Who does what" },
        {
          type: "table",
          head: ["Role", "Runs", "Reviews"],
          rows: [
            ["Admin", "1 Organizer Sender, 2 Document Chaser", "Nothing on its own"],
            ["Staff accountant", "3 Document Reader, 4 Prior-Year Comparison", "Nothing on its own"],
            ["Senior", "5 K-1 Tracker, 6 Extension Triage, 7 Notice Reader", "3 and 4"],
            ["Manager", "8 Review Checklist, 10 Capacity Tracker", "5, 6 and 7"],
            ["Partner", "9 Planning Signal List", "8, 9, and anything that goes to the IRS"],
          ],
          rowHeads: true,
        },
        {
          type: "p",
          text: "Smaller firms merge roles. Keep one rule whatever the size: the person who runs a workflow is never the only person who reviews it.",
        },
      ],
    },
    {
      id: "organizer-sender",
      nav: "1. The Organizer Sender",
      eyebrow: "Workflow 1",
      heading: "The Organizer Sender",
      unnumbered: true,
      blocks: [
        card("December, before the holidays", "Admin", "Manager, on a sample of five", "Tier 3 for the letters. Tier 2 only for the client list with return types", "An engagement letter, a Section 7216 consent and the right organizer for each client, ready to send"),
        {
          type: "p",
          text: "The season starts late when the organizer goes out in February. This one sends the engagement letter, the consent and the organizer together, matched to what each client filed last year.",
        },
        {
          type: "code",
          label: "Prompt · Build the December send list",
          text: `The attached list is last year's clients, by client code, with the forms we filed for each (1040, Schedule C, Schedule E, 1120-S, 1065, state returns) and the fee.

For each client:
1. Pick the organizer version from the project files: individual, individual with business, individual with rentals, or business entity.
2. Pick the engagement letter template that matches the return types.
3. Note anything that changed last year that the letter or organizer must cover: a new state, a new entity, a K-1 that arrived late, a return we extended.
4. Flag any client with no signed Section 7216 consent on file.

Give me one table: client code, organizer, letter, notes, consent status.
Do not write to any client. Do not invent a fee change.`,
        },
        { type: "h3", text: "Check it" },
        {
          type: "steps",
          items: [
            "Open five rows at random. Compare each with last year's return.",
            "Confirm every client with an extension last year has a note.",
            "Send only after the manager signs off the sample.",
          ],
        },
        {
          type: "p",
          text: "**Result.** Every client gets the right letter and organizer in December, and the list of missing consents goes to the partner before any return information goes near an AI tool.",
        },
        { type: "note", tone: "warn", title: "Where it goes wrong", body: ["A client who added a rental or a state in the year gets last year's organizer. The notes column is there to catch it, so read it."] },
      ],
    },
    {
      id: "document-chaser",
      nav: "2. The Document Chaser",
      eyebrow: "Workflow 2",
      heading: "The Document Chaser",
      unnumbered: true,
      blocks: [
        card("Every Monday, February to April", "Admin", "Senior, for the first round of each client", "Tier 2: last year's document list and this year's portal index, by client code", "A missing-documents list per client and the reminder email in the firm's tone"),
        {
          type: "p",
          text: "Last year's return is the best checklist you have. Every W-2, 1099 and K-1 that was there last year should turn up again, or someone should know why it didn't.",
        },
        {
          type: "code",
          label: "Prompt · What's still missing",
          text: `For client [CODE]:
- Last year's document list is attached (payer and form type for every source document we used).
- This year's portal index is attached (file names and dates received).

1. Match this year's documents to last year's, payer by payer.
2. List what is missing. For each item: payer, form type, and whether it usually arrives late (K-1s, corrected 1099s).
3. List anything new this year that wasn't there last year.
4. Draft a short reminder email in the firm's tone from the project files. Name each missing document by payer and form. Do not list documents we already have.

If a file name does not tell you the payer, say so. Do not guess.`,
        },
        { type: "h3", text: "Check it" },
        {
          type: "steps",
          items: [
            "Compare the missing list with the portal for one client each week.",
            "Read the email before it goes. Check every payer name.",
          ],
        },
        { type: "note", tone: "warn", title: "Where it goes wrong", body: ["A payer whose name changed, a bank merger for example, shows up as one missing and one new. Read the \"new this year\" list next to the missing list."] },
      ],
    },
    {
      id: "document-reader",
      nav: "3. The Document Reader",
      eyebrow: "Workflow 3",
      heading: "The Document Reader",
      unnumbered: true,
      blocks: [
        card("As documents arrive", "Staff accountant", "Senior, on every flagged document and a sample of the rest", "Tier 2, with Social Security numbers and account numbers redacted (Tier 1)", "A table of every box on every form, with a flag on anything it couldn't read"),
        {
          type: "p",
          text: "This is the hours. Keying W-2s, 1099s, 1098s and K-1s into a worksheet is the most repeated job in the season, and the one where a tired person transposes two digits.",
        },
        {
          type: "code",
          label: "Standing instructions · Document Reader project",
          text: `You read US tax source documents for a CPA firm: W-2, 1099-INT, 1099-DIV, 1099-B, 1099-NEC, 1099-MISC, 1099-R, 1098, 1098-T, Schedule K-1 (1065, 1120-S, 1041).

For every document:
- Record the form type, the payer or issuer, the tax year and every box with a value, box by box, exactly as printed.
- If the form is marked CORRECTED, say so on its own line.
- If a box is unreadable, blurred, cut off or handwritten, write UNREADABLE for that box. Never estimate a number.
- If the tax year is not the year we are preparing, flag it.
- For consolidated brokerage statements, record the summary totals and list the pages you read.

Output one row per box: client code, form, payer, box number, box label, amount, flag.
Data rule: if you see a full Social Security number or account number, do not repeat it. Write REDACT and tell me which page.`,
        },
        { type: "h3", text: "Check it" },
        {
          type: "steps",
          items: [
            "Open every row with a flag and read the box on the source document yourself.",
            "For each client, add up wages and withholding from the table. Compare the totals with the documents.",
            "Check one random box on every third document.",
          ],
        },
        {
          type: "p",
          text: "**Result.** A table the preparer can import or key from in minutes, and a short list of the documents a person must read.",
        },
        { type: "note", tone: "warn", title: "Where it goes wrong", body: ["Photographed documents with a shadow across a box, and K-1 footnotes that carry the real information. The UNREADABLE flag catches the first. Tell the preparer to read every K-1 footnote page themselves."] },
      ],
    },
    {
      id: "prior-year-comparison",
      nav: "4. The Prior-Year Comparison",
      eyebrow: "Workflow 4",
      heading: "The Prior-Year Comparison",
      unnumbered: true,
      blocks: [
        card("When the draft return is ready", "Staff accountant", "Senior", "Tier 2: this year's draft and last year's return, by client code", "A line-by-line comparison and a list of every swing over your threshold"),
        {
          type: "p",
          text: "The 1099 that disappeared is the one the IRS notices later. This compares the draft with last year line by line, before a reviewer spends time on it.",
        },
        {
          type: "code",
          label: "Prompt · Compare with last year",
          text: `Compare this year's draft return for [CODE] with last year's return, both attached.

1. Line by line: last year, this year, change in dollars, change in percent.
2. Flag every line that changed by more than [THRESHOLD] dollars or [PERCENT] percent.
3. List every income source (payer or schedule) on last year's return that is missing this year.
4. List every new income source.
5. Check estimated payments claimed against the payments in the client file.

For each flag, write one question the preparer should be able to answer before review.
Do not explain the changes yourself. List them.`,
        },
        { type: "h3", text: "Check it" },
        {
          type: "steps",
          items: [
            "The preparer answers every question on the list in the workpapers.",
            "The senior reads the answers before reviewing the return.",
          ],
        },
        { type: "note", tone: "warn", title: "Where it goes wrong", body: ["A sold rental, a closed account or a retirement looks like a missing source. That's why the prompt asks for questions, not explanations: the preparer knows the client."] },
      ],
    },
    {
      id: "k1-tracker",
      nav: "5. The K-1 Tracker",
      eyebrow: "Workflow 5",
      heading: "The K-1 Tracker",
      unnumbered: true,
      blocks: [
        card("Weekly from February to the extension deadlines", "Senior", "Manager", "Tier 2: client codes, entity names and the date each K-1 arrived last year", "Who's waiting on which K-1, when it's expected, and which returns it will push past the deadline"),
        {
          type: "p",
          text: "Most late returns are late for one reason: a K-1 that hasn't arrived. Last year's arrival dates tell you which ones to expect late, so the extension conversation happens in February, not on April 14.",
        },
        {
          type: "code",
          label: "Prompt · The K-1 board",
          text: `Attached: every client who received a K-1 last year, with the issuing entity and the date the K-1 arrived; and the K-1s received so far this year.

1. Build one table: client code, entity, received this year (yes or no), date it arrived last year, expected this year.
2. Expected this year = last year's arrival date, moved to the same weekday this year. If last year's arrived after March 15, mark it LIKELY LATE.
3. For each client, the latest expected K-1 decides when the return can be finished. Sort by that date.
4. List every client whose return can't be finished before April 15 on these dates.

Give me the table and the list. Do not contact anyone.`,
        },
        { type: "note", tone: "warn", title: "Where it goes wrong", body: ["An entity that extended last year but filed on time this year. Update the table the day a K-1 arrives, or the list goes stale fast."] },
      ],
    },
    {
      id: "extension-triage",
      nav: "6. The Extension Triage",
      eyebrow: "Workflow 6",
      heading: "The Extension Triage",
      unnumbered: true,
      blocks: [
        card("First week of March, then weekly", "Senior", "Manager, then the partner for any payment over your threshold", "Tier 2: the status list, last year's tax and this year's payments, by client code", "Which returns won't make April 15, the payment to send with each extension, and the email to the client"),
        {
          type: "p",
          text: "An extension extends the time to file, not the time to pay. Form 4868 moves an individual return to October 15, but tax owed is still due on April 15, so every extension needs a payment estimate and a client who knows about it.",
        },
        {
          type: "code",
          label: "Prompt · Who will miss April 15",
          text: `Attached: the return status list (client code, documents complete yes or no, K-1 expected date from the K-1 tracker, preparer, review status), last year's total tax, and this year's estimates and withholding so far.

1. List every return that will not be filed by April 15 on the current status. Give the reason in one phrase.
2. For each one, estimate the balance due: last year's total tax, adjusted for anything the file already shows changed this year, minus payments so far. Show the working.
3. Mark each estimate HIGH, MEDIUM or LOW confidence, and say why.
4. Draft the client email: why we are extending, what they need to send, and the payment to make by April 15 with the amount.

Do not file or send anything. List anything you assumed.`,
        },
        { type: "h3", text: "Check it" },
        {
          type: "steps",
          items: [
            "The manager reads every LOW confidence estimate.",
            "The partner approves any payment estimate over the firm's threshold.",
            "Check each email's amount against the working before it goes.",
          ],
        },
        { type: "note", tone: "warn", title: "Where it goes wrong", body: ["A big capital gain or a year-end bonus that isn't in the file yet. The estimate is only as good as what the firm knows, which is why the email asks the client to confirm."] },
      ],
    },
    {
      id: "notice-reader",
      nav: "7. The Notice Reader",
      eyebrow: "Workflow 7",
      heading: "The Notice Reader",
      unnumbered: true,
      blocks: [
        card("Whenever an IRS notice arrives", "Senior", "Manager, and the partner before anything goes to the IRS", "Tier 2: the notice and the return as filed, with identifying numbers redacted", "What the notice says, whether the IRS is right, the response letter and the client email"),
        {
          type: "p",
          text: "A CP2000 proposes changes to a return when the income or payments reported to the IRS don't match it. Most of them are a missing 1099, a cost basis that wasn't reported, or a payment applied to the wrong year. Reading one against the return is mechanical, so let Claude do the first pass. A person decides what goes back.",
        },
        {
          type: "code",
          label: "Prompt · Read the notice against the return",
          text: `Attached: an IRS notice for [CODE] and the return as filed for the same year.

1. What type of notice is it, what year, and what is the response date printed on it?
2. List each change the IRS proposes, with the amount, and find the matching line on the return.
3. For each change: does the return already include it (for example under a different payer name or on a consolidated statement)? Say AGREE, DISAGREE or NEED DOCUMENTS, and why.
4. Draft the response letter for each DISAGREE item, citing the return line and the document.
5. Draft a short client email: what the notice is, what we think, what we need from them, and the date.

Do not tell the client what they owe until a person has reviewed this.`,
        },
        { type: "note", tone: "warn", title: "Where it goes wrong", body: ["Cost basis. The notice shows gross proceeds with no basis, and the answer is on a brokerage statement page Claude didn't get. NEED DOCUMENTS is the honest answer there, so don't push it to AGREE."] },
      ],
    },
    {
      id: "review-checklist",
      nav: "8. The Review Checklist",
      eyebrow: "Workflow 8",
      heading: "The Review Checklist",
      unnumbered: true,
      blocks: [
        card("Before anything is filed or sent", "Manager", "Partner signs", "Tier 2: the return, the workpapers and the outputs of workflows 3, 4 and 6", "A completed checklist with every item ticked, explained or sent back"),
        {
          type: "p",
          text: "This is the workflow that keeps the rest safe. Claude prepares the checklist from the file. A person ticks it, and nothing goes out with an open item.",
        },
        {
          type: "code",
          label: "Prompt · Prepare the review",
          text: `Prepare the review checklist for [CODE] from the attached return, workpapers, document table (workflow 3) and prior-year comparison (workflow 4).

For each item, write DONE, OPEN or N/A, and cite the page or row:
1. Every source document in the document table is on the return.
2. Every flag from the document table has a note from the preparer.
3. Every question from the prior-year comparison has an answer.
4. Estimated payments claimed match the payments in the file.
5. Dependents, filing status and address match last year or the change is explained.
6. State returns match the federal return where they should.
7. Any extension payment made is claimed.
8. The client's Section 7216 consent is on file if any workflow used their information beyond preparing the return.

List the OPEN items first. Do not mark anything DONE that you cannot cite.`,
        },
        {
          type: "p",
          text: "**Result.** The reviewer starts with the open items instead of hunting for them, and the file shows who checked what.",
        },
      ],
    },
    {
      id: "planning-signal-list",
      nav: "9. The Planning Signal List",
      eyebrow: "Workflow 9",
      heading: "The Planning Signal List",
      unnumbered: true,
      blocks: [
        card("After each return is prepared, and in a batch in May", "Partner, or a manager the partner names", "Partner", "Tier 3 where you can: codes and counts from a tax software export. Tier 2 only with the consent your adviser says this use needs", "A list of clients whose returns show planning work, by signal, with a rough fee"),
        {
          type: "p",
          text: "Your team sees the planning signals every year while they prepare the return, and most of them never become a conversation. This turns the season's returns into next season's planning list.",
        },
        {
          type: "table",
          head: ["Signal on the return", "The conversation it starts"],
          rows: [
            ["S corporation owner, salary unchanged for three or more years", "Whether the salary still holds up as reasonable compensation, and the split between salary and distributions"],
            ["Pass-through owner in a state with a PTET election, no election made", "Whether electing would cut the client's federal tax"],
            ["Owner profit over $400,000, no plan beyond a 401(k)", "Whether a cash balance plan fits"],
            ["Rental on straight-line depreciation, no cost segregation study", "Whether a study would move deductions forward"],
            ["Capital gain over $250,000", "Timing, harvesting and where the next sale lands"],
            ["Equity compensation", "When to exercise or sell, and what the next grant does to the year"],
            ["Business sale planned within three years", "Entity, timing and structure before the sale, not after"],
          ],
          rowHeads: true,
        },
        {
          type: "code",
          label: "Prompt · Build the planning list",
          text: `Attached: an export from our tax software with client codes and the fields listed below. No names.

Fields: entity type, owner salary for the last three years, state, PTET election (yes or no), ordinary business income, retirement plan type, rental depreciation method, capital gains, equity compensation (yes or no), sale planned (yes or no from our notes).

1. Apply these thresholds: [FIRM THRESHOLDS].
2. For each signal, list the client codes that meet it.
3. Count unique clients across all signals.
4. At our planning fee of $[FEE], what is the total?

Give me the counts and the codes. Do not suggest a strategy for any client: a signal means a conversation is worth having, not that a strategy applies.`,
        },
        {
          type: "callout",
          title: "This list is where my work starts.",
          body: [
            "If the list comes back longer than the hours your team has, that's what I do with CPA firms. You bring me the clients the list flags, I build the strategy with your team, and your firm holds the client conversation. I never contact your clients directly, the return stays with you, and the firm earns from every engagement.",
          ],
          cta: partnerCta,
        },
      ],
    },
    {
      id: "capacity-tracker",
      nav: "10. The Capacity Tracker",
      eyebrow: "Workflow 10",
      heading: "The Capacity Tracker",
      unnumbered: true,
      blocks: [
        card("Baseline in January, then monthly", "Manager", "Partner", "Tier 3: hours by return type and by workflow, no client data", "Hours per return before and after each workflow, and how many more returns the same team can take"),
        {
          type: "p",
          text: "Most AI adoption in firms has never been measured. People feel faster and nobody wrote down the before number. This is the before number.",
        },
        {
          type: "table",
          head: ["Return type", "Hours per return, last season", "Hours per return, this season", "Returns this season", "Hours saved"],
          rows: [
            ["1040, wages and investments", "", "", "", ""],
            ["1040 with Schedule C or E", "", "", "", ""],
            ["1120-S", "", "", "", ""],
            ["1065", "", "", "", ""],
          ],
          rowHeads: true,
        },
        {
          type: "code",
          label: "Prompt · What the hours mean",
          text: `Attached: hours per return by return type for last season and this season so far, from our time records, and the number of returns of each type.

1. Hours saved by return type, and in total.
2. Which workflow each saving most likely came from, using the workflow log attached (which workflows ran on which return types).
3. At this season's hours per return, how many more returns of each type the same team could take next season, with the same hours available.
4. Where hours went up, say so.

Show the working. Do not round before the final line.`,
        },
        {
          type: "p",
          text: "Fill the \"last season\" column in January, before the first workflow runs. Without it, the season ends with a feeling instead of a number.",
        },
      ],
    },
    {
      id: "rolling-it-out",
      nav: "Rolling it out",
      eyebrow: "Rolling It Out",
      unnumbered: true,
      heading: "Rolling it out without stalling the season",
      blocks: [
        {
          type: "p",
          text: "Don't start all ten in February. Start with the ones that run before the pressure does, and add the rest as each one proves itself.",
        },
        {
          type: "table",
          head: ["When", "What to do"],
          rows: [
            ["November", "Plan, file creation, the data rule in the WISP, the Section 7216 question to your adviser, and the projects for workflows 1, 2 and 10."],
            ["December", "Workflow 1 goes out. Workflow 10's baseline from last season's timesheets."],
            ["January", "Workflows 2 and 3 on ten clients each, checked line by line against the old way."],
            ["February", "Workflows 3 and 4 on every return. Workflow 5 weekly."],
            ["March", "Workflow 6 in the first week. Workflow 8 on every return."],
            ["April to October", "Workflow 7 as notices arrive. Workflow 9 in May. Workflow 10 monthly, and the full comparison after October 15."],
          ],
          rowHeads: true,
        },
        {
          type: "p",
          text: "Every key date in this page is for the 2026 returns filed in 2027: W-2 and 1099-NEC by February 1, 2027 (January 31 is a Sunday); partnership and S corporation returns by March 15, 2027, or September 15 on extension; individual returns by April 15, 2027, or October 15 on extension; and the fourth 2026 estimate on January 15, 2027. Check each date with the IRS before the season.",
        },
      ],
    },
    {
      id: "whats-next",
      nav: "What's next",
      eyebrow: "What's Next",
      unnumbered: true,
      heading: "Where I fit",
      blocks: [
        {
          type: "p",
          text: "Pick the workflow that would have saved the most hours last season and set it up this week. For most firms it's the Document Reader. For the partner it's usually the extension conversation that happened too late.",
        },
        {
          type: "p",
          text: "Then look at workflow 9 in May. The list it builds is the planning work your clients would pay for, and the work most firms don't have the hours to deliver after April.",
        },
        {
          type: "callout",
          title: "Partner with Darling FG",
          body: [
            "I do the tax strategy work through your firm. Your team keeps the client relationship and the return, I never approach your clients directly, and the firm earns from the added service.",
          ],
          cta: partnerCta,
        },
      ],
    },
  ],
}
