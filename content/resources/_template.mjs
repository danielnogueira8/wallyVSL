// TEMPLATE. Files starting with "_" are never published.
//
// To add a resource:
//   1. Copy this file to content/resources/<slug>.mjs (no leading underscore).
//   2. Fill it in. Paste the Notion resource section by section into blocks.
//   3. Run: node scripts/build-resources.mjs
//   4. Commit the content file AND the generated resources/ HTML + sitemap.xml.
//
// House rules (the build fails on the first one):
//   - No em or en dashes anywhere. Use commas, colons or "to" for ranges.
//   - audience "high-earners" closes on the free audit (/form/).
//     audience "cpas" closes on /partners/. Wally works through the accountant,
//     never approaches their clients, and doesn't take the compliance work.
//   - No LinkedIn CTAs on CPA resources. Default to US sources and figures.
//   - Proof cards count what's inside. Never invent results or client numbers.
//
// Inline markup in any text: **bold**  *italic*  `code`  [label](/path or https://... or #section-id)

export default {
  draft: true, // delete this line to publish

  slug: "my-new-resource", // URL: /resources/my-new-resource/
  audience: "cpas", // "cpas" or "high-earners"
  kind: "Free playbook", // small label on the cover, e.g. "Free Claude prompt"
  title: "Short name", // breadcrumbs, cards, <title>
  headline: "The H1 on the page, one strong line",
  description: "One or two sentences for Google and link previews.",
  lead: "The paragraph under the H1. What they get and why it matters.",
  meta: ["Free", "7 workflows", "Copy-paste prompts"],
  proof: [
    { value: "7", label: "Workflows", detail: "One line on what that count covers." },
    { value: "12", label: "Prompts", detail: "One line." },
    { value: "1", label: "Checklist", detail: "One line." },
  ],
  cover: { big: "7", small: "workflows for QuickBooks firms" }, // big figure + short label
  cardDescription: "One line for the /resources/ card.",
  updated: "2026-10-15", // YYYY-MM-DD
  order: 0, // optional: higher number pins it nearer the top of the library
  disclaimer: "", // optional italic note at the end

  sections: [
    {
      id: "start-here", // anchor, unique on the page
      nav: "Start here", // label in "On this page"
      eyebrow: "Read this first", // small label above the heading (number is added)
      heading: "The section heading",
      blocks: [
        { type: "lead", text: "Bigger intro paragraph." },
        { type: "p", text: "A normal paragraph with **bold** and a [link](/partners/)." },
        { type: "h3", text: "A sub-heading" },
        { type: "h4", text: "A small uppercase label" },
        { type: "list", items: ["One", "Two"] }, // add ordered: true or check: true
        { type: "steps", items: ["Do this.", "Then this."] }, // numbered procedure
        { type: "code", label: "Prompt 1 · Name", text: "The prompt, with a Copy button." },
        { type: "table", head: ["Col A", "Col B"], rows: [["a", "b"]], rowHeads: true },
        { type: "note", title: "Heads up.", body: "A side note.", tone: "warn" }, // tone optional
        { type: "callout", title: "Mid-page CTA heading", body: "One line." }, // button defaults to the audience CTA
        { type: "download", href: "https://drive.google.com/...", title: "Download the files", detail: "Google Drive folder" },
        { type: "quote", text: "A pull quote.", cite: "Who said it" },
        { type: "stats", items: [{ value: "$40k", label: "What it means" }] },
        {
          type: "card", // one entry in a library: a play, a skill, a workflow
          id: "workflow-1",
          num: "01",
          title: "Entry title",
          fields: [
            ["Who it fits", "..."],
            ["What it does", "..."],
          ],
          blocks: [{ type: "code", label: "Prompt", text: "..." }],
        },
        { type: "cta", label: "Partner with Darling FG", href: "/partners/", note: "Optional small line next to the button." },
      ],
    },
  ],
}
