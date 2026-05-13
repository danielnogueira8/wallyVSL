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

// Lead form — replace handler with your CRM/Email tool endpoint
const form = document.getElementById('leadForm');
const success = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    if (!name || !email || !email.includes('@')) {
      alert('Please fill in your name and a valid email.');
      return;
    }

    // TODO: replace with real submission endpoint (Mailchimp / ConvertKit / Beehiiv / HubSpot / Zapier webhook)
    // Example:
    // await fetch('https://hooks.zapier.com/your-hook', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, resource: 'tax-saving-playbook' })
    // });

    form.reset();
    success.hidden = false;
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

// Optional: track video play to fire CTA reveal after X seconds
const video = document.getElementById('vsl-player');
if (video) {
  video.addEventListener('play', () => {
    // Hook analytics here, e.g. window.dataLayer?.push({ event: 'vsl_play' });
  });
}
