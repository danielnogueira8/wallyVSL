#!/usr/bin/env node
/**
 * Builds the free resources library as static HTML.
 *
 *   node scripts/build-resources.mjs
 *
 * Reads every content/resources/*.mjs file (files starting with "_" are skipped,
 * so _template.mjs never publishes), then writes:
 *
 *   resources/index.html            the library page
 *   resources/<slug>/index.html     one page per resource
 *   sitemap.xml                     home, partners, the library and every resource
 *
 * No dependencies. The generated HTML is committed, so Vercel deploys it as-is
 * with no build step. Edit the content file, run this script, commit both.
 *
 * Inline markup inside any text field:
 *   **bold**   *italic*   `code`   [label](https://... or /path or #anchor)
 */

import { readdir, mkdir, writeFile } from "node:fs/promises"
import { fileURLToPath, pathToFileURL } from "node:url"
import path from "node:path"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const CONTENT_DIR = path.join(ROOT, "content", "resources")
const OUT_DIR = path.join(ROOT, "resources")
const SITE = "https://www.wallacedarling.com"

/** Where each audience is sent at the end of a page. */
const AUDIENCES = {
  "high-earners": {
    tag: "For high earners",
    cta: { label: "Apply for the free audit", href: "/form/" },
  },
  cpas: {
    tag: "For CPAs & accountants",
    cta: { label: "Partner with Darling FG", href: "/partners/" },
  },
}

/* ------------------------------------------------------------------ */
/* Text helpers                                                        */
/* ------------------------------------------------------------------ */

const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

const attr = esc

/** Inline markup to HTML. Escapes first, so content can never inject tags. */
function md(s = "") {
  let out = esc(s)
  const codes = []
  out = out.replace(/`([^`]+)`/g, (_, c) => {
    codes.push(`<code>${c}</code>`)
    return `\u0000${codes.length - 1}\u0000`
  })
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => {
    const ext = /^https?:/.test(href) && !href.startsWith(SITE)
    return `<a href="${href}"${ext ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`
  })
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  out = out.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>")
  out = out.replace(/\u0000(\d+)\u0000/g, (_, i) => codes[+i])
  return out
}

/** Plain text, for meta tags and JSON-LD. */
const plain = (s = "") =>
  String(s)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*`]/g, "")

const pad = (n) => String(n).padStart(2, "0")

/* ------------------------------------------------------------------ */
/* Blocks                                                              */
/* ------------------------------------------------------------------ */

function block(b, ctx) {
  switch (b.type) {
    case "p":
      return `<p>${md(b.text)}</p>`
    case "lead":
      return `<p class="r-lead">${md(b.text)}</p>`
    case "h3":
      return `<h3 class="r-h3">${md(b.text)}</h3>`
    case "h4":
      return `<h4 class="r-h4">${md(b.text)}</h4>`
    case "list": {
      const tag = b.ordered ? "ol" : "ul"
      const cls = b.check ? "r-list r-check" : b.ordered ? "r-list r-ordered" : "r-list"
      return `<${tag} class="${cls}">${b.items.map((i) => `<li>${md(i)}</li>`).join("")}</${tag}>`
    }
    case "steps":
      return `<ol class="r-steps">${b.items.map((i) => `<li><span>${md(i)}</span></li>`).join("")}</ol>`
    case "code":
      return `<div class="r-code">
  <div class="r-code-bar"><span>${esc(b.label || "Prompt")}</span><button type="button" class="r-copy" aria-label="Copy to clipboard">Copy</button></div>
  <pre><code>${esc(b.text.trim())}</code></pre>
</div>`
    case "table": {
      const head = `<thead><tr>${b.head.map((h) => `<th>${md(h)}</th>`).join("")}</tr></thead>`
      const rows = b.rows
        .map((r) => `<tr>${r.map((c, i) => (i === 0 && b.rowHeads ? `<th scope="row">${md(c)}</th>` : `<td>${md(c)}</td>`)).join("")}</tr>`)
        .join("")
      const total = b.total ? `<tfoot><tr>${b.total.map((c) => `<td>${md(c)}</td>`).join("")}</tr></tfoot>` : ""
      return `<div class="r-table-wrap" tabindex="0"><table class="r-table">${head}<tbody>${rows}</tbody>${total}</table></div>`
    }
    case "note":
      return `<aside class="r-note${b.tone === "warn" ? " r-note-warn" : ""}">
  ${b.title ? `<strong class="r-note-title">${md(b.title)}</strong>` : ""}
  ${(Array.isArray(b.body) ? b.body : [b.body]).map((t) => `<p>${md(t)}</p>`).join("")}
</aside>`
    case "callout": {
      const cta = b.cta || ctx.audience.cta
      return `<aside class="r-callout">
  <div>
    <strong class="r-callout-title">${md(b.title)}</strong>
    ${(Array.isArray(b.body) ? b.body : [b.body]).filter(Boolean).map((t) => `<p>${md(t)}</p>`).join("")}
  </div>
  <a class="btn btn-primary" href="${attr(cta.href)}">${esc(cta.label)}</a>
</aside>`
    }
    case "cta":
      return `<p class="r-cta"><a class="btn btn-primary btn-lg" href="${attr(b.href)}">${esc(b.label)}</a>${b.note ? `<span>${md(b.note)}</span>` : ""}</p>`
    case "download":
      return `<a class="r-download" href="${attr(b.href)}" target="_blank" rel="noopener">
  <span class="r-download-icon" aria-hidden="true">&darr;</span>
  <span><strong>${md(b.title)}</strong><span>${md(b.detail)}</span></span>
  <span class="r-download-go" aria-hidden="true">Open &rarr;</span>
</a>`
    case "quote":
      return `<blockquote class="r-quote"><p>${md(b.text)}</p>${b.cite ? `<cite>${md(b.cite)}</cite>` : ""}</blockquote>`
    case "stats":
      return `<div class="r-stats">${b.items.map((s) => `<div><span class="r-stat-value">${esc(s.value)}</span><span class="r-stat-label">${md(s.label)}</span></div>`).join("")}</div>`
    case "card":
      // One entry in a library: a play, a skill, a category
      return `<article class="r-card" id="${attr(b.id)}">
  <header class="r-card-head">
    <span class="r-card-num">${esc(b.num)}</span>
    <h3>${md(b.title)}</h3>
  </header>
  ${b.fields ? `<dl class="r-fields">${b.fields.map(([k, v]) => `<div><dt>${md(k)}</dt><dd>${md(v)}</dd></div>`).join("")}</dl>` : ""}
  ${(b.blocks || []).map((x) => block(x, ctx)).join("\n")}
</article>`
    default:
      throw new Error(`Unknown block type "${b.type}" in ${ctx.slug}`)
  }
}

/* ------------------------------------------------------------------ */
/* Page chrome                                                         */
/* ------------------------------------------------------------------ */

function head({ title, description, url, jsonld }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<meta name="description" content="${attr(description)}" />
<link rel="canonical" href="${SITE}${url}" />
<meta property="og:title" content="${attr(title)}" />
<meta property="og:description" content="${attr(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE}${url}" />
<meta property="og:image" content="${SITE}/assets/public/wallace.jpeg" />
<meta name="twitter:card" content="summary" />
<link rel="icon" type="image/jpeg" href="/assets/public/wallace.jpeg" />
<link rel="apple-touch-icon" href="/assets/public/wallace.jpeg" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/assets/css/styles.css" />
<link rel="stylesheet" href="/assets/css/resources.css" />
<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, "\\u003c")}</script>
</head>
<body class="r-body">

<header class="site-header">
  <div class="container header-inner">
    <a href="/" class="brand">
      <span class="brand-name">Darling Financial Group</span>
      <span class="brand-divider"></span>
      <span class="brand-tag">The Family Office for Mainstreet</span>
    </a>
    <nav class="header-nav r-nav" aria-label="Main">
      <a href="/resources/">Resources</a>
      <a href="/partners/" class="r-nav-cta">For CPAs</a>
    </nav>
  </div>
</header>
`
}

function foot() {
  return `
<section class="r-ways">
  <div class="container">
    <div class="r-ways-grid">
      <div class="r-way">
        <span class="section-eyebrow light">For high earners</span>
        <h2>Have Wally read your returns.</h2>
        <p>A free tax audit of your last two returns, with an itemized savings tally for your actual numbers. Sixty-second qualifier first.</p>
        <a class="btn btn-light" href="/form/">Apply for the free audit</a>
      </div>
      <div class="r-way">
        <span class="section-eyebrow light">For CPAs &amp; accountants</span>
        <h2>Send the client you've run out of moves on.</h2>
        <p>Wally works through you, never around you. You keep the client and the compliance work. The firm earns from the added service.</p>
        <a class="btn btn-light" href="/partners/">Partner with Darling FG</a>
      </div>
    </div>
  </div>
</section>

<footer class="site-footer">
  <div class="container footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <strong>Darling Financial Group</strong>
        <span>The Family Office for Mainstreet</span>
      </div>
      <div class="footer-links">
        <a href="/resources/">Free resources</a>
        <a href="/partners/">For CPAs</a>
        <a href="https://darling-fg.com" target="_blank" rel="noopener">darling-fg.com</a>
      </div>
    </div>
    <div class="footer-legal">
      <p>&copy; <span id="year">${new Date().getFullYear()}</span> Darling Financial Group. All rights reserved.</p>
      <p>
        The information presented is for educational purposes only and does not constitute individualized tax, legal, or investment advice. Strategies referenced may not be appropriate for your particular situation. Please consult a qualified professional before acting on any of this material. Darling Financial Group is a registered investment adviser. Registration does not imply a certain level of skill or training.
      </p>
    </div>
  </div>
</footer>

<script src="/assets/js/resources.js" defer></script>
</body>
</html>
`
}

/** Typographic cover: a big figure and a short label, in the brand palette. */
function cover(r, size = "") {
  return `<div class="r-cover ${size}" aria-hidden="true">
  <span class="r-cover-kicker">${esc(r.kind)}</span>
  <span class="r-cover-big">${esc(r.cover.big)}</span>
  <span class="r-cover-small">${esc(r.cover.small)}</span>
  <span class="r-cover-mark">Darling FG</span>
</div>`
}

/* ------------------------------------------------------------------ */
/* Resource page                                                       */
/* ------------------------------------------------------------------ */

function resourcePage(r) {
  const audience = AUDIENCES[r.audience]
  if (!audience) throw new Error(`${r.slug}: audience must be one of ${Object.keys(AUDIENCES).join(", ")}`)
  const ctx = { slug: r.slug, audience }
  const url = `/resources/${r.slug}/`

  const toc = r.sections
    .map((s, i) => `<li><a href="#${attr(s.id)}"><span>${pad(i + 1)}</span>${esc(s.nav)}</a></li>`)
    .join("")

  const sections = r.sections
    .map(
      (s, i) => `<section class="r-section" id="${attr(s.id)}" aria-labelledby="${attr(s.id)}-h">
  <span class="r-eyebrow"><span>${pad(i + 1)}</span>${esc(s.eyebrow)}</span>
  <h2 id="${attr(s.id)}-h">${md(s.heading)}</h2>
  ${s.blocks.map((b) => block(b, ctx)).join("\n  ")}
</section>`,
    )
    .join("\n")

  const jsonld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: plain(r.title),
    description: plain(r.description),
    dateModified: r.updated,
    url: `${SITE}${url}`,
    author: { "@type": "Person", name: "Wallace Darling", url: SITE },
    publisher: { "@type": "Organization", name: "Darling Financial Group", url: "https://darling-fg.com" },
    isAccessibleForFree: true,
    audience: { "@type": "Audience", audienceType: audience.tag.replace("For ", "") },
  }

  return (
    head({ title: `${plain(r.title)} | Darling Financial Group`, description: plain(r.description), url, jsonld }) +
    `
<main class="r-main">
  <div class="container">
    <nav class="r-crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/resources/">Resources</a><span>/</span><span aria-current="page">${esc(r.title)}</span></nav>
  </div>

  <header class="r-hero">
    <div class="container r-hero-grid">
      <div>
        <span class="r-tag">${esc(audience.tag)}</span>
        <h1>${md(r.headline)}</h1>
        <p class="r-hero-lead">${md(r.lead)}</p>
        <p class="r-hero-meta">${r.meta.map(esc).join(" &middot; ")}</p>
        <div class="r-hero-actions">
          <a class="btn btn-primary" href="#${attr(r.sections[0].id)}">Start reading</a>
          <a class="r-hero-link" href="${attr(audience.cta.href)}">${esc(audience.cta.label)} &rarr;</a>
        </div>
      </div>
      ${cover(r, "r-cover-lg")}
    </div>
    <div class="container">
      <div class="r-proof">${r.proof.map((p) => `<div><span class="r-proof-value">${esc(p.value)}</span><span class="r-proof-label">${esc(p.label)}</span><span class="r-proof-detail">${md(p.detail)}</span></div>`).join("")}</div>
    </div>
  </header>

  <div class="container r-layout">
    <aside class="r-toc">
      <div class="r-toc-inner">
        <details class="r-toc-box" open>
          <summary>On this page</summary>
          <ol>${toc}</ol>
        </details>
        <a class="btn btn-primary r-toc-cta" href="${attr(audience.cta.href)}">${esc(audience.cta.label)}</a>
      </div>
    </aside>
    <article class="r-article">
${sections}
      ${r.disclaimer ? `<p class="r-disclaimer">${md(r.disclaimer)}</p>` : ""}
      <p class="r-updated">Last updated ${esc(new Date(r.updated + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }))}</p>
    </article>
  </div>
</main>
` +
    foot()
  )
}

/* ------------------------------------------------------------------ */
/* Library page                                                        */
/* ------------------------------------------------------------------ */

function card(r, featured = false) {
  const audience = AUDIENCES[r.audience]
  return `<a class="r-lib-card${featured ? " r-lib-featured" : ""}" href="/resources/${attr(r.slug)}/">
  ${cover(r, featured ? "r-cover-lg" : "")}
  <div class="r-lib-body">
    <span class="r-tag">${esc(audience.tag)}</span>
    <h${featured ? 2 : 3}>${esc(r.title)}</h${featured ? 2 : 3}>
    <p>${md(r.cardDescription)}</p>
    <span class="r-lib-meta">${r.meta.map(esc).join(" &middot; ")}</span>
    <span class="r-lib-go">Read it free &rarr;</span>
  </div>
</a>`
}

function libraryPage(reports) {
  const [featured, ...rest] = reports
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free tax strategy resources",
    url: `${SITE}/resources/`,
    publisher: { "@type": "Organization", name: "Darling Financial Group", url: "https://darling-fg.com" },
    hasPart: reports.map((r) => ({ "@type": "Article", headline: plain(r.title), url: `${SITE}/resources/${r.slug}/` })),
  }
  const filters = Object.entries(AUDIENCES)
    .filter(([k]) => rest.some((r) => r.audience === k))
    .map(([k, a]) => `<button type="button" data-filter="${k}">${esc(a.tag.replace("For ", "").replace(/^./, (c) => c.toUpperCase()))}</button>`)
    .join("")
  // Only worth filtering once the grid below the featured card holds both audiences
  const showFilter = new Set(rest.map((r) => r.audience)).size > 1

  return (
    head({
      title: "Free Tax Strategy Resources | Darling Financial Group",
      description:
        "Free tax strategy playbooks and Claude prompts from Wallace Darling, for high earners and for the CPAs who serve them. No email required.",
      url: "/resources/",
      jsonld,
    }) +
    `
<main class="r-main">
  <div class="container">
    <nav class="r-crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span aria-current="page">Resources</span></nav>
  </div>
  <header class="r-lib-hero">
    <div class="container">
      <span class="eyebrow">Free library</span>
      <h1>Free resources</h1>
      <p>The playbooks, prompts and checklists Wally uses on real returns, written up in full. Two shelves: one for high earners, one for the CPAs who serve them. Nothing to sign up for.</p>
    </div>
  </header>

  <div class="container">
    ${card(featured, true)}
    ${
      rest.length
        ? `<div class="r-lib-head">
      <h2>Also free to read</h2>
      ${showFilter ? `<div class="r-filter" role="group" aria-label="Filter by audience"><button type="button" data-filter="all" aria-pressed="true">All</button>${filters}</div>` : ""}
    </div>
    <div class="r-lib-grid">
      ${rest.map((r) => card(r).replace('class="r-lib-card"', `class="r-lib-card" data-audience="${r.audience}"`)).join("\n      ")}
    </div>`
        : ""
    }
  </div>
</main>
` +
    foot()
  )
}

/* ------------------------------------------------------------------ */
/* Build                                                               */
/* ------------------------------------------------------------------ */

function validate(r, file) {
  const need = ["slug", "audience", "kind", "title", "headline", "description", "lead", "meta", "proof", "cover", "cardDescription", "updated", "sections"]
  for (const k of need) if (r[k] == null) throw new Error(`${file}: missing "${k}"`)
  if (!/^[a-z0-9-]+$/.test(r.slug)) throw new Error(`${file}: slug must be lowercase-with-dashes`)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(r.updated)) throw new Error(`${file}: updated must be YYYY-MM-DD`)
  const text = JSON.stringify(r)
  if (/[\u2013\u2014]/.test(text)) throw new Error(`${file}: contains an en or em dash. House style: none.`)
  const ids = new Set()
  for (const s of r.sections) {
    if (ids.has(s.id)) throw new Error(`${file}: duplicate section id "${s.id}"`)
    ids.add(s.id)
  }
}

async function main() {
  const files = (await readdir(CONTENT_DIR)).filter((f) => f.endsWith(".mjs") && !f.startsWith("_")).sort()
  const reports = []
  for (const f of files) {
    const mod = await import(pathToFileURL(path.join(CONTENT_DIR, f)).href)
    const r = mod.default
    validate(r, f)
    if (r.draft) continue
    reports.push(r)
  }
  if (!reports.length) throw new Error("No resources to publish.")

  // Newest first; "order" breaks ties and lets you pin one to the top.
  reports.sort((a, b) => (b.order ?? 0) - (a.order ?? 0) || b.updated.localeCompare(a.updated))

  await mkdir(OUT_DIR, { recursive: true })
  await writeFile(path.join(OUT_DIR, "index.html"), libraryPage(reports))
  for (const r of reports) {
    await mkdir(path.join(OUT_DIR, r.slug), { recursive: true })
    await writeFile(path.join(OUT_DIR, r.slug, "index.html"), resourcePage(r))
  }

  const urls = ["/", "/partners/", "/resources/", ...reports.map((r) => `/resources/${r.slug}/`)]
  const today = new Date().toISOString().slice(0, 10)
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE}${u}</loc><lastmod>${reports.find((r) => u.endsWith(`/${r.slug}/`))?.updated ?? today}</lastmod></url>`).join("\n")}
</urlset>
`
  await writeFile(path.join(ROOT, "sitemap.xml"), sitemap)

  console.log(`Built ${reports.length} resource page(s) + library + sitemap:`)
  for (const r of reports) console.log(`  /resources/${r.slug}/`)
}

main().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
