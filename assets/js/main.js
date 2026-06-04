// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll on in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Optional: track video play to fire CTA reveal after X seconds
const video = document.getElementById('vsl-player');
if (video) {
  video.addEventListener('play', () => {
    // Hook analytics here, e.g. window.dataLayer?.push({ event: 'vsl_play' });
  });
}
