// Claude in Excel for CPA firms. Modelled on Clare Thompson's three-year forecast post. Visuals added.

export default {
  "slug": "claude-in-excel-for-cpas",
  "audience": "cpas",
  "kind": "Free Claude playbook",
  "title": "Claude in Excel for CPA Firms",
  "headline": "Claude in Excel: the client forecast, built inside the workbook",
  "description": "A free playbook for US CPA firms on using Claude inside Excel: build a three-statement, 36-month forecast from a client's QuickBooks trial balance, start it by voice on your phone, flex it live in the client meeting, fix the spreadsheet the client built, and check every number before it goes out.",
  "lead": "How I use Claude inside Excel on the models we build for clients: a three-statement forecast from a QuickBooks trial balance, started on the phone, flexed in the meeting, and checked before anything goes near the client.",
  "meta": [
    "Free",
    "4 workflows",
    "14 prompts",
    "Review checklist"
  ],
  "proof": [
    {
      "value": "4",
      "label": "Workflows",
      "detail": "Build, start on the phone, flex live, fix the client's file."
    },
    {
      "value": "14",
      "label": "Prompts",
      "detail": "Copy, paste, change the client details."
    },
    {
      "value": "36",
      "label": "Months",
      "detail": "Monthly P&L, balance sheet and cash flow, linked."
    }
  ],
  "cover": {
    "big": "36",
    "small": "months, built inside Excel"
  },
  "cardDescription": "Claude working inside the workbook: a three-statement forecast from a QuickBooks trial balance, started on your phone, flexed live with the client, checked before it goes out.",
  "updated": "2026-10-16",
  "order": 4,
  "disclaimer": "This page is general educational information. It is not tax, legal or investment advice, and it does not create an adviser relationship. Product features, plans and menus change, so check the current details with Anthropic, Microsoft and Intuit before you rely on them. The client in the examples is invented.",
  "sections": [
    {
      "id": "start-here",
      "nav": "Why I wrote this",
      "eyebrow": "Read this first",
      "heading": "The model still gets built cell by cell",
      "unnumbered": true,
      "blocks": [
        {
          "type": "lead",
          "text": "Hey, I'm Wallace Darling (most people call me Wally). I run Darling Financial Group (darling-fg.com). I work with people earning $500k+ and business owners with $1M+ in revenue on the tax strategy that sits beyond the return, and I partner with CPA firms on that strategy layer so their clients get it without ever leaving the firm."
        },
        {
          "type": "quickstart",
          "items": [
            {
              "label": "Setup",
              "value": "About 15 minutes, once"
            },
            {
              "label": "You need",
              "value": "Claude Pro, Max, Team or Enterprise, and Microsoft 365 Excel"
            },
            {
              "label": "You get",
              "value": "A linked 36-month model, built inside your workbook"
            }
          ]
        },
        {
          "type": "p",
          "text": "Most CPAs I speak to use Claude in a browser tab. They copy the answer into Excel and rebuild it by hand, so the forecast, the cash flow and the scenario for the client meeting still get built cell by cell, usually after six. Claude has run inside Excel itself for a while now, on the paid plans, and it's sitting unused in most of the firms I see."
        },
        {
          "type": "p",
          "text": "What you'll get: the four ways I use it on client models, each with the exact prompts. Build a three-statement, 36-month forecast from a QuickBooks trial balance. Start it by talking to your phone on the way back from the meeting. Flex it live in front of the client. Fix the spreadsheet the client built themselves. Then the one rule that runs through all of it: check every formula, stress the assumptions and read the chart ranges before anything goes near a client."
        },
        {
          "type": "flow",
          "items": [
            {
              "title": "Build from a trial balance",
              "text": "Workflow 1",
              "href": "#build-from-trial-balance"
            },
            {
              "title": "Start it on your phone",
              "text": "Workflow 2",
              "href": "#start-on-your-phone"
            },
            {
              "title": "Flex it live",
              "text": "Workflow 3",
              "href": "#flex-it-live"
            },
            {
              "title": "Fix the client's file",
              "text": "Workflow 4",
              "href": "#fix-the-clients-spreadsheet"
            },
            {
              "title": "Check before it goes out",
              "text": "The rule",
              "href": "#the-rule"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Have clients whose forecast keeps raising tax questions?",
          "body": [
            "I partner with CPA firms on the tax strategy work: owner pay, entity structure, retirement plan design, the year-end decisions a forecast puts on the table. I work through you and never approach your clients directly, I don't take the compliance work, and your firm earns from the added service."
          ],
          "cta": {
            "label": "Partner with Darling FG",
            "href": "/partners/"
          }
        },
        {
          "type": "note",
          "title": "A note on the writing",
          "body": [
            "The setup steps and the \"Check it\" steps are written in simplified technical English: short sentences, one action per step, no contractions. They're meant to be followed exactly. The rest reads like I talk."
          ]
        }
      ]
    },
    {
      "id": "what-you-need",
      "nav": "What you need, and setup",
      "eyebrow": "What You Need",
      "heading": "What you need, and putting Claude inside Excel",
      "blocks": [
        {
          "type": "p",
          "text": "Three things: a paid Claude plan, a version of Excel the add-in runs on, and about fifteen minutes the first time."
        },
        {
          "type": "p",
          "text": "**Claude plans.** Anthropic's documentation lists Claude in Excel as generally available on the Pro, Max, Team and Enterprise plans. Check current plans and prices at `claude.com/pricing`. For a firm, use Team or Enterprise, so client work sits under business terms and the firm controls who has access."
        },
        {
          "type": "p",
          "text": "**Excel versions.** The add-in needs a current Microsoft 365 build. Your phone's Excel app won't run it, which is why the phone workflow in section 3 uses the Claude app instead."
        },
        {
          "type": "table",
          "head": [
            "Excel",
            "Runs Claude?"
          ],
          "rows": [
            [
              "Excel on the web",
              "Yes"
            ],
            [
              "Excel for Windows, Microsoft 365",
              "Yes, on a recent build"
            ],
            [
              "Excel for Mac",
              "Yes, version 16.46 or later"
            ],
            [
              "Excel 2016 or 2019 (one-time purchase)",
              "No"
            ],
            [
              "Excel on iPad or Android",
              "No"
            ]
          ],
          "rowHeads": true
        },
        {
          "type": "p",
          "text": "**If your firm prepares the client's return.** Check how your engagement letter and consent setup handles client data in AI tools. Under IRC Section 7216 a return preparer generally needs the client's written consent before using or disclosing tax return information for purposes other than preparing the return ([26 CFR 301.7216-3](https://www.law.cornell.edu/cfr/text/26/301.7216-3)). A forecast runs on the books, not the return, but the same people often hold both."
        },
        {
          "type": "h3",
          "text": "Install it for yourself"
        },
        {
          "type": "steps",
          "items": [
            "Open Microsoft AppSource in a browser.",
            "Search for **Claude for Microsoft 365**.",
            "Select **Get it now**.",
            "Open Excel.",
            "Open the add-in from the **Add-ins** button on the **Home** tab.",
            "Sign in with your Claude account."
          ]
        },
        {
          "type": "h3",
          "text": "Install it for the whole firm (Microsoft 365 admin)"
        },
        {
          "type": "steps",
          "items": [
            "Open the Microsoft 365 admin center.",
            "Go to **Settings**, then **Integrated apps**, then **Add-ins**.",
            "Search for **Claude for Microsoft 365**.",
            "Assign it to the firm, or to the staff who build models."
          ]
        },
        {
          "type": "p",
          "text": "If the store is switched off for your firm, the admin first turns on **Let users access the Office Store** under **Settings**, **Org settings**, **User owned apps and services**."
        },
        {
          "type": "h3",
          "text": "Switch on file creation in the Claude app"
        },
        {
          "type": "p",
          "text": "The phone workflow needs Claude to hand back an Excel file. On Pro and Max, turn it on yourself. On Team and Enterprise, the owner sets it for the organization."
        },
        {
          "type": "steps",
          "items": [
            "Open **Settings** in Claude (on the phone, tap your name or initials in the side menu).",
            "Select **Capabilities**.",
            "Turn on **Code execution and file creation**."
          ]
        },
        {
          "type": "h3",
          "text": "Give it the firm's standing instructions"
        },
        {
          "type": "p",
          "text": "The Excel add-in has its own settings where you can save instructions it follows on every workbook. Put the firm's model conventions there once, so nobody types them into every chat."
        },
        {
          "type": "code",
          "label": "Prompt · Standing instructions for Excel",
          "text": "You are working in a CPA firm's client models.\n\nConventions:\n- Inputs live on the Inputs tab only. Blue font for inputs, black for formulas.\n- No hard-coded numbers inside formulas. Every assumption gets its own labeled cell on Inputs.\n- Negative numbers in parentheses. Thousands separators. No decimals on dollars.\n- Months run across columns, one column per month. Labels in column A.\n- Every model has a Checks tab. Each check returns TRUE or FALSE.\n- Use US terms: accounts receivable, accounts payable, payroll taxes, estimated tax payments.\n\nBehavior:\n- Before you change or overwrite anything, tell me which cells you will change.\n- When you answer a question, cite the cells.\n- If an assumption is missing, ask me. Do not guess and do not fill in a default without saying so."
        }
      ]
    },
    {
      "id": "build-from-trial-balance",
      "nav": "Build the model from a trial balance",
      "eyebrow": "Workflow 1",
      "heading": "Build the model from a trial balance",
      "blocks": [
        {
          "type": "p",
          "text": "This is the one to learn first. You give Claude the client's trial balance and a plain-English description of the model. Claude builds the tabs, writes the formulas and links them, inside the workbook you have open."
        },
        {
          "type": "h3",
          "text": "Get the numbers out of QuickBooks"
        },
        {
          "type": "p",
          "text": "A trial balance gives Claude the opening position. For a monthly forecast you also want the last twelve months by month, so the run rates come from the client's own history."
        },
        {
          "type": "table",
          "head": [
            "QuickBooks Online report",
            "Settings",
            "What the model uses it for"
          ],
          "rows": [
            [
              "Trial Balance",
              "As of the last month end",
              "Opening balances for every account"
            ],
            [
              "Profit and Loss by Month",
              "Last 12 months",
              "Sales, cost of sales and overhead run rates, and seasonality"
            ],
            [
              "Balance Sheet",
              "As of the last month end",
              "Receivables, payables, loans, credit cards, payroll liabilities"
            ],
            [
              "A/R Aging Summary",
              "As of the last month end",
              "How fast customers actually pay, for receivable days"
            ]
          ],
          "rowHeads": true
        },
        {
          "type": "steps",
          "items": [
            "In QuickBooks Online, open **Reports**.",
            "Search for the report name.",
            "Set the dates.",
            "Select **Run report**.",
            "Select the export icon.",
            "Select **Export to Excel**."
          ]
        },
        {
          "type": "p",
          "text": "Report names can vary slightly by edition. Copy each export into its own tab of one new workbook: `TB`, `PL by month`, `BS`, `AR aging`. Save the workbook as the client code and the date, for example `HDG01 forecast v1.xlsx`."
        },
        {
          "type": "figure",
          "src": "/assets/public/resources/claude-in-excel-for-cpas/map.webp",
          "width": 1520,
          "height": 938,
          "alt": "The workbook you end up with. The four exports feed the Inputs tab, and the Checks tab tells you when something doesn't tie.",
          "caption": "The workbook you end up with. The four exports feed the Inputs tab, and the Checks tab tells you when something doesn't tie."
        },
        {
          "type": "h3",
          "text": "Describe the model"
        },
        {
          "type": "p",
          "text": "Open Claude in the workbook and describe what you want the way you'd brief a senior. The more specific the brief, the less you fix later."
        },
        {
          "type": "code",
          "label": "Prompt · Build the three-statement model",
          "text": "Build a monthly three-statement forecast for [CLIENT CODE] from the tabs in this workbook.\n\nSources:\n- TB: trial balance as of [MONTH END]. Use it for every opening balance.\n- PL by month: the last 12 months. Use it for run rates and seasonality.\n- BS: balance sheet as of the same date.\n- AR aging: use it to set receivable days.\n\nBuild these tabs:\n1. Inputs. Every assumption in its own labeled cell: sales growth by year, price increase and the month it starts, gross margin, each payroll line, rent, other overhead, receivable days, payable days, owner salary, owner distributions, loan payments, capital purchases, estimated tax payments by quarter.\n2. P&L. 36 months, starting [FIRST FORECAST MONTH].\n3. Balance sheet. 36 months. Opening balances from TB.\n4. Cash flow. 36 months. Indirect method, built from the P&L and the balance sheet movements.\n5. Checks. One row per check, each returning TRUE or FALSE:\n   - Balance sheet balances every month.\n   - Closing cash on Cash flow equals cash on the Balance sheet every month.\n   - Opening balances equal TB.\n   - No hard-coded numbers in formula rows on P&L, Balance sheet or Cash flow.\n\nRules:\n- Start every assumption from the client's last 12 months and show me the number you used.\n- Where the history doesn't give you an assumption, leave the input blank, color it yellow and list it for me.\n- When you finish, give me: the tabs you built, the assumptions you set and where each came from, and the yellow cells I need to fill."
        },
        {
          "type": "figure",
          "src": "/assets/public/resources/claude-in-excel-for-cpas/workbook.webp",
          "width": 1520,
          "height": 1193,
          "alt": "What it looks like in Excel: Claude's panel sits beside the sheet, and its answer cites the cells it used.",
          "caption": "What it looks like in Excel: Claude's panel sits beside the sheet, and its answer cites the cells it used.",
          "label": "Illustration"
        },
        {
          "type": "h3",
          "text": "Check it"
        },
        {
          "type": "steps",
          "items": [
            "Open the Checks tab. Every row must say TRUE.",
            "Click three of the cell citations in Claude's answer. Confirm each one points where it says.",
            "Compare month 1 opening cash with the bank balance on the TB.",
            "Fill every yellow input, or write down who you will ask.",
            "Read the Inputs tab top to bottom as if the client were reading it."
          ]
        },
        {
          "type": "p",
          "text": "**Result.** A linked model that balances, with every assumption visible on one tab. It is a first draft. Section 6 is how it becomes something you sign off."
        },
        {
          "type": "h3",
          "text": "Ask it where a number came from"
        },
        {
          "type": "p",
          "text": "Claude in Excel answers with cell-level citations you can click. Use that on every number you'd be uncomfortable explaining to the client."
        },
        {
          "type": "code",
          "label": "Prompt · Trace a number",
          "text": "Explain how closing cash in [MONTH] is calculated.\nWalk back from that cell to the inputs it depends on.\nCite every cell on the way, and tell me which inputs move it the most."
        }
      ]
    },
    {
      "id": "start-on-your-phone",
      "nav": "Start it on your phone",
      "eyebrow": "Workflow 2",
      "heading": "Start it on your phone",
      "blocks": [
        {
          "type": "p",
          "text": "The brief is freshest in the parking lot after the meeting. Talk it into the Claude app on your phone and ask for an Excel file back. The next morning you open the file at your desk and carry on inside Excel."
        },
        {
          "type": "figure",
          "src": "/assets/public/resources/claude-in-excel-for-cpas/phone.webp",
          "width": 726,
          "height": 1280,
          "alt": "Talk the brief in after the meeting. The file is waiting when you sit down.",
          "caption": "Talk the brief in after the meeting. The file is waiting when you sit down.",
          "label": "Illustration",
          "narrow": true
        },
        {
          "type": "p",
          "text": "The phone can't run the Excel add-in, so this part happens in the Claude app with file creation switched on (section 1). Keep client names out of what you say: use the client code."
        },
        {
          "type": "h3",
          "text": "What to say"
        },
        {
          "type": "p",
          "text": "Tap the microphone in the Claude app and cover these, in any order. It doesn't need to be tidy."
        },
        {
          "type": "list",
          "check": true,
          "items": [
            "What the business does, how many locations, and the fiscal year end.",
            "Rough annual sales and how they move through the year.",
            "Any price increase and when it starts.",
            "Planned hires: role, monthly cost, start month.",
            "Big purchases or a new location, with the month.",
            "Loans: balance, monthly payment, any new borrowing.",
            "How fast customers pay, if you know.",
            "What the owner takes out: salary, distributions, and whether that changes.",
            "The decision the forecast is for: a hire, a lease, a loan, a year-end payout."
          ]
        },
        {
          "type": "code",
          "label": "Example · A dictated brief (invented client)",
          "text": "Client HDG01. Two-location dental practice, December year end.\nAbout 2.4 million in collections this year, a bit slower in July and December.\nFee increase of 4 percent in January.\nThey want a third hygienist starting in April, about 7,500 a month all in.\nThird location possibly next September, roughly 350,000 of equipment and build-out,\nprobably financed. Existing equipment loan is 180,000, about 5,200 a month.\nInsurance pays in about 30 days, patients mostly at the visit.\nOwner takes 240,000 salary and about 300,000 in distributions.\nThe question is whether they can open the third site and still pay the\nyear-end distribution."
        },
        {
          "type": "code",
          "label": "Prompt · Turn the brief into a workbook (send right after you talk)",
          "text": "Turn what I just said into an Excel workbook I can open on my laptop.\n\nTabs:\n1. Inputs: every number I mentioned, in its own labeled cell. Blue font for inputs.\n2. P&L: monthly, 36 months from [FIRST MONTH].\n3. Balance sheet and Cash flow: monthly, linked to the P&L.\n4. Questions: every assumption I didn't give you, written as a question I can ask the client.\n\nUse formulas, not typed numbers, everywhere except Inputs.\nMark any number you assumed in yellow and list it on the Questions tab.\nName the file [CLIENT CODE] forecast v1.xlsx."
        },
        {
          "type": "h3",
          "text": "At your desk the next morning"
        },
        {
          "type": "steps",
          "items": [
            "Download the file from the chat and open it in Excel.",
            "Add the TB tab and the other QuickBooks exports (section 2).",
            "Open Claude in the workbook.",
            "Send the prompt below.",
            "Run the checks in section 2."
          ]
        },
        {
          "type": "code",
          "label": "Prompt · Tie the phone draft to the real books",
          "text": "This workbook was drafted from a spoken brief. The TB, PL by month and BS tabs now hold the client's actual QuickBooks numbers.\n\n1. Replace every opening balance with the TB figure.\n2. Compare each run-rate input on Inputs with the last 12 months on PL by month. List any input that is more than 10 percent away from the history, with both numbers.\n3. Add the Checks tab if it is missing, and make every check TRUE.\n4. Tell me which cells you changed before you change them."
        }
      ]
    },
    {
      "id": "flex-it-live",
      "nav": "Flex it live with the client",
      "eyebrow": "Workflow 3",
      "heading": "Flex it live with the client",
      "blocks": [
        {
          "type": "p",
          "text": "This is where the model earns its fee. Claude changes inputs while keeping the formula links intact, so every dependent cell recalculates. The client asks \"what if we...\" and you answer it in the room, instead of rebuilding the model that night."
        },
        {
          "type": "h3",
          "text": "Before the meeting"
        },
        {
          "type": "steps",
          "items": [
            "Save a copy of the model. Name it with the meeting date.",
            "Confirm every row on the Checks tab is TRUE.",
            "Add a Scenarios tab with a column for Base and one column per scenario.",
            "Open Claude in the workbook."
          ]
        },
        {
          "type": "code",
          "label": "Prompt · Set up the scenarios tab",
          "text": "Build a Scenarios tab.\nRows: the inputs most likely to change in the meeting (price increase and start month, sales growth, each new hire and start month, the new location and its month, new borrowing, owner salary, owner distributions).\nColumns: Base, then Scenario 1 to 4.\nAdd a switch cell at the top that picks which column the model uses.\nBelow the inputs, show for each column: lowest closing cash and the month it happens, year 1 to 3 net income, and year-end cash for each year."
        },
        {
          "type": "h3",
          "text": "In the meeting"
        },
        {
          "type": "p",
          "text": "Change one thing at a time, so the client sees what each decision does. Claude warns you before it overwrites data, and it tells you which cells it changed."
        },
        {
          "type": "code",
          "label": "Prompt · One question from the client",
          "text": "In Scenario 1, move the third location from [MONTH] to [MONTH].\nKeep everything else as Base.\nShow me the lowest closing cash, the month it happens, and year-end cash for each year, next to Base."
        },
        {
          "type": "code",
          "label": "Prompt · Pay for it",
          "text": "In Scenario 2, finance the equipment for the third location with a [TERM]-year loan at [RATE] percent instead of paying cash.\nAdd the loan to the balance sheet and the payments to the cash flow.\nCompare lowest closing cash and year-end cash with Scenario 1."
        },
        {
          "type": "h3",
          "text": "The rows that turn into tax questions"
        },
        {
          "type": "p",
          "text": "Most owner forecasts end on the same few lines, and every one of them is a tax decision as much as a cash decision:"
        },
        {
          "type": "table",
          "head": [
            "Row in the forecast",
            "The question it raises"
          ],
          "rows": [
            [
              "Owner salary",
              "Is the salary set right for the entity, and does the split between salary and distributions still hold up?"
            ],
            [
              "Owner distributions",
              "How big can the year-end payout be after the tax it triggers, and when should it land?"
            ],
            [
              "Estimated tax payments",
              "Do the quarterly estimates match the year the forecast shows, or the year that already happened?"
            ],
            [
              "Retirement plan contribution",
              "Would a larger plan, such as a cash balance plan, cut the tax more than it costs in cash?"
            ],
            [
              "Equipment and build-out",
              "Which year does the deduction land in, and does that match the year the income is highest?"
            ]
          ],
          "rowHeads": true
        },
        {
          "type": "callout",
          "title": "When the forecast puts the owner's tax on the table.",
          "body": [
            "That's the work I do alongside CPA firms: owner pay, entity structure, retirement plan design and the timing of the big deductions. I work through you and never approach your clients directly, the return and the compliance work stay with your firm, and your firm earns from the added service."
          ],
          "cta": {
            "label": "Partner with Darling FG",
            "href": "/partners/"
          }
        },
        {
          "type": "h3",
          "text": "After the meeting"
        },
        {
          "type": "code",
          "label": "Prompt · The note for the file",
          "text": "Write a one-page summary of this meeting for the client file, from the Scenarios tab.\nFor each scenario: what changed, lowest closing cash and its month, and year-end cash for each year.\nThen list the decisions the client said they would make, and the open questions.\nPlain English. No formulas in the text."
        }
      ]
    },
    {
      "id": "fix-the-clients-spreadsheet",
      "nav": "Fix the client's spreadsheet",
      "eyebrow": "Workflow 4",
      "heading": "Fix the spreadsheet the client built",
      "blocks": [
        {
          "type": "p",
          "text": "Every firm has the client who arrives with their own model: twelve tabs, three colors, and a #REF! in the total. Claude can map it, trace the errors to where they start and explain a formula before you touch it."
        },
        {
          "type": "note",
          "tone": "warn",
          "title": "Work on a copy, and read before you let it edit",
          "body": [
            "Anthropic's documentation warns that a spreadsheet from outside can carry hidden instructions that try to make the add-in extract data or change records. Save a copy first. Start with questions only, and read Claude's confirmation prompts before you approve any change."
          ]
        },
        {
          "type": "code",
          "label": "Prompt · Map the workbook (read only)",
          "text": "Do not change anything yet.\nMap this workbook for me:\n1. Each tab, what it seems to do, and which tabs it pulls from.\n2. Where the inputs are, and any inputs typed inside formulas.\n3. Every error cell (#REF!, #DIV/0!, #VALUE!, #N/A), with the cell address.\nCite the cells."
        },
        {
          "type": "code",
          "label": "Prompt · Trace the errors to where they start",
          "text": "For each error cell you found, trace it back to the first cell where the error starts.\nGroup the errors by root cause.\nFor each root cause: what broke, the fix you suggest, and every cell the fix would change.\nDo not apply anything until I say which fixes to make."
        },
        {
          "type": "code",
          "label": "Prompt · Explain a formula before I touch it",
          "text": "Explain the formula in [CELL] in plain English, step by step.\nTell me what each referenced cell holds, what the result means, and anything in it that looks wrong or fragile."
        },
        {
          "type": "table",
          "head": [
            "What you'll usually find",
            "What to ask Claude for"
          ],
          "rows": [
            [
              "#REF! after someone deleted a row or a tab",
              "The cell the reference used to point to, and a rebuilt formula"
            ],
            [
              "Totals that skip the last row someone added",
              "Every SUM whose range stops short of the data"
            ],
            [
              "Numbers typed over formulas",
              "Every cell in a formula row that holds a typed number"
            ],
            [
              "Links to another file nobody has",
              "Every external link, and what it was pulling"
            ],
            [
              "A chart that stopped updating",
              "The chart's source range against the data range"
            ]
          ],
          "rowHeads": true
        },
        {
          "type": "p",
          "text": "Two things the add-in doesn't do, per Anthropic's documentation: Excel data tables, and macros or VBA. If the client's model runs on either, fix that part by hand."
        }
      ]
    },
    {
      "id": "the-rule",
      "nav": "The rule: check before it goes out",
      "eyebrow": "The Rule",
      "heading": "Check every formula before anything goes near a client",
      "blocks": [
        {
          "type": "p",
          "text": "One rule runs through all of it, and it's the one I'd give a new staff accountant: check every formula, stress the assumptions and read the chart ranges before anything goes near a client. Anthropic says the same thing in its own documentation: don't send a final client deliverable without human review."
        },
        {
          "type": "figure",
          "src": "/assets/public/resources/claude-in-excel-for-cpas/checks.webp",
          "width": 1520,
          "height": 800,
          "alt": "One FALSE is a stop. Trace it before anything goes to the client.",
          "caption": "One FALSE is a stop. Trace it before anything goes to the client.",
          "label": "Illustration"
        },
        {
          "type": "p",
          "text": "Claude gets the model most of the way in minutes, and your judgment does the rest, which is the part clients were paying for in the first place."
        },
        {
          "type": "h3",
          "text": "The review checklist"
        },
        {
          "type": "list",
          "check": true,
          "items": [
            "Every row on the Checks tab is TRUE.",
            "Opening balances tie to the QuickBooks trial balance.",
            "Month 1 opening cash matches the bank.",
            "No typed numbers in formula rows on P&L, Balance sheet or Cash flow.",
            "Every input on the Inputs tab has a source: the client's history, the client's answer, or your judgment, written next to it.",
            "Signs are right: costs negative, receipts positive, nothing flipped in the cash flow.",
            "Every chart's range covers all 36 months and only the rows it says.",
            "Totals include the last row and the last month.",
            "Units are consistent: dollars, not thousands, unless the header says so.",
            "Stress test run: sales 10 percent lower and customers paying 15 days slower. You know the month cash goes lowest."
          ]
        },
        {
          "type": "code",
          "label": "Prompt · Second pair of eyes",
          "text": "Review this model as if you were the reviewer who has to sign it off.\nCheck:\n1. Every formula row on P&L, Balance sheet and Cash flow for typed numbers, broken ranges and references that skip a month.\n2. Every chart: its source range against the data it claims to show.\n3. Every input: whether it is consistent with PL by month and the TB. List any that are not, with both numbers.\n4. Signs in the cash flow.\nDo not fix anything. Give me a numbered list of findings with cell addresses."
        },
        {
          "type": "code",
          "label": "Prompt · Stress the assumptions",
          "text": "Add a stress scenario on the Scenarios tab: sales 10 percent below Base in every month, and receivable days 15 days longer.\nShow lowest closing cash and its month, against Base.\nThen tell me the three inputs that move lowest closing cash the most."
        }
      ]
    },
    {
      "id": "rolling-it-out",
      "nav": "Rolling it out in the firm",
      "eyebrow": "Rolling It Out",
      "heading": "Rolling it out in the firm",
      "blocks": [
        {
          "type": "p",
          "text": "Start with one person and one client. The add-in is quick to install. What takes time is a review habit everyone trusts."
        },
        {
          "type": "table",
          "head": [
            "Week",
            "What to do"
          ],
          "rows": [
            [
              "Week 1",
              "One person installs the add-in, saves the standing instructions, and asks Claude to explain three formulas in a model they already know."
            ],
            [
              "Week 2",
              "Build one client model from a trial balance (workflow 1) next to the version you'd have built by hand. Compare them line by line."
            ],
            [
              "Week 3",
              "Run the phone brief (workflow 2) after one client meeting, and the review checklist on the result."
            ],
            [
              "Week 4",
              "Take the model into a client meeting and flex it live (workflow 3). Write down every question the client asked."
            ],
            [
              "After that",
              "Make the Checks tab and the review checklist part of the firm's sign-off for every model, whoever built it."
            ]
          ],
          "rowHeads": true
        },
        {
          "type": "p",
          "text": "Name each workbook with the client code and a version, and keep the meeting copies. When a client asks in March why the forecast said what it said in October, you want the file that was on the screen."
        }
      ]
    },
    {
      "id": "whats-next",
      "nav": "What's next",
      "eyebrow": "What's Next",
      "heading": "Where I fit",
      "blocks": [
        {
          "type": "p",
          "text": "Open one client's trial balance this week and ask Claude to explain a formula you didn't write, because that's the quickest way to find out whether you trust it."
        },
        {
          "type": "p",
          "text": "Once the forecast is built, the conversations change. The owner stops asking what happened last year and starts asking what to do about next year: how much to pay themselves, whether to take the distribution in December, whether a bigger retirement plan beats the new truck. Those are the questions I work on with CPA firms."
        },
        {
          "type": "callout",
          "title": "Partner with Darling FG",
          "body": [
            "I do the tax strategy work through your firm. Your team keeps the client relationship and the return, I never approach your clients directly, and the firm earns from the added service."
          ],
          "cta": {
            "label": "Partner with Darling FG",
            "href": "/partners/"
          }
        }
      ]
    }
  ],
  "heroImage": {
    "src": "/assets/public/resources/claude-in-excel-for-cpas/cover.webp",
    "alt": "Claude in Excel for US CPA firms",
    "width": 1000,
    "height": 1067
  }
}
