// Free resources library: copy buttons, "On this page" highlighting, audience filter.

// Copy buttons on prompt blocks
document.querySelectorAll('.r-copy').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const code = btn.closest('.r-code').querySelector('pre').innerText
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = code
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch {}
      ta.remove()
    }
    btn.textContent = 'Copied'
    btn.classList.add('is-done')
    setTimeout(() => {
      btn.textContent = 'Copy'
      btn.classList.remove('is-done')
    }, 1800)
  })
})

// Highlight the current section in the index
const tocLinks = [...document.querySelectorAll('.r-toc a[href^="#"]')]
if (tocLinks.length && 'IntersectionObserver' in window) {
  const byId = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]))
  const visible = new Set()
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)))
      const first = [...byId.keys()].find((id) => visible.has(id))
      if (!first) return
      tocLinks.forEach((a) => a.classList.toggle('is-active', a === byId.get(first)))
    },
    { rootMargin: '0px 0px -65% 0px' },
  )
  byId.forEach((_, id) => {
    const el = document.getElementById(id)
    if (el) io.observe(el)
  })
}

// Collapse the index after a tap on small screens
const tocBox = document.querySelector('.r-toc-box')
if (tocBox) {
  const mq = window.matchMedia('(max-width: 980px)')
  if (mq.matches) tocBox.open = false
  tocLinks.forEach((a) => a.addEventListener('click', () => { if (mq.matches) tocBox.open = false }))
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const target = document.getElementById(a.getAttribute('href').slice(1))
    if (!target) return
    e.preventDefault()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    history.replaceState(null, '', '#' + target.id)
  })
})

// Audience filter on the library page
const filterBtns = [...document.querySelectorAll('.r-filter button')]
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter
    filterBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)))
    document.querySelectorAll('.r-lib-grid .r-lib-card').forEach((c) => {
      c.hidden = f !== 'all' && c.dataset.audience !== f
    })
  })
})
