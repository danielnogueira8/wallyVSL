// =========================================================
// Accountant partnership form — multi-step navigation
// =========================================================
// Mirrors qualify.js but with NO scoring: every accountant who
// completes the form is routed to the booking page. We still
// capture all answers in Neon (via /api/partner-submit) so Wally
// can see the firm profile before the call.

document.getElementById('year').textContent = new Date().getFullYear();

// =========================================================
// Country list + qualification gate
// =========================================================
// We only partner with accountants in the United States. The US is
// pinned to the top of the dropdown (separated by a divider); everyone
// else can still submit, but they're routed to a soft "not available in
// your region yet" page instead of the booking calendar.
// QUALIFIED_COUNTRIES is the single source of truth for the gate on the
// client — the server double-checks the same list.
const QUALIFIED_COUNTRIES = ['United States'];

const OTHER_COUNTRIES = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
  'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
  'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
  'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
  'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada',
  'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros',
  'Congo (Brazzaville)', 'Congo (Kinshasa)', 'Costa Rica', 'Côte d’Ivoire',
  'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Denmark', 'Djibouti', 'Dominica',
  'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
  'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France',
  'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada',
  'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary',
  'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
  'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo',
  'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia',
  'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi',
  'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
  'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia',
  'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal',
  'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea',
  'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama',
  'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
  'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
  'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
  'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
  'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
  'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname',
  'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand',
  'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
  'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
  'United Kingdom', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
  'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe',
];

function populateCountries() {
  const select = document.querySelector('select[name="country"]');
  if (!select) return;

  const makeOption = (name) => {
    const opt = document.createElement('option');
    opt.value = name;
    opt.textContent = name;
    return opt;
  };

  // Pinned qualifying countries first.
  QUALIFIED_COUNTRIES.forEach((name) => select.appendChild(makeOption(name)));

  // Visual divider, then the rest alphabetically.
  const divider = document.createElement('option');
  divider.disabled = true;
  divider.textContent = '──────────';
  select.appendChild(divider);

  OTHER_COUNTRIES.forEach((name) => select.appendChild(makeOption(name)));
}

populateCountries();

const form = document.getElementById('partnerForm');
const steps = Array.from(form.querySelectorAll('.step'));
const totalSteps = steps.length;
const backBtn = document.getElementById('backBtn');
const submitBtn = document.getElementById('submitBtn');
const progressFill = document.getElementById('progressFill');
const stepLabel = document.getElementById('stepLabel');

let current = 0;

function showStep(i) {
  steps.forEach((s, idx) => s.classList.toggle('active', idx === i));
  current = i;

  // Progress
  const pct = ((i + 1) / totalSteps) * 100;
  progressFill.style.width = pct + '%';
  stepLabel.textContent = `Question ${i + 1} of ${totalSteps}`;

  // Buttons:
  // - Back is shown on every step except the first
  // - Submit only on the final step (text-input contact step)
  // - All radio steps auto-advance — no Continue button
  const isLastStep = i === totalSteps - 1;
  const step = steps[i];

  backBtn.hidden = i === 0;
  submitBtn.hidden = !isLastStep;

  // Focus first input
  const firstInput = step.querySelector('input');
  if (firstInput) setTimeout(() => firstInput.focus({ preventScroll: true }), 50);
}

function validateStep(i) {
  const step = steps[i];
  // Required text fields AND the country <select> on the contact step.
  const inputs = step.querySelectorAll('input[required], select[required]');
  const isRadioStep = step.querySelector('input[type="radio"]') !== null;

  if (isRadioStep) {
    const name = step.querySelector('input[type="radio"]').name;
    const checked = step.querySelector(`input[name="${name}"]:checked`);
    if (!checked) {
      step.classList.add('error');
      alert('Please pick an option to continue.');
      return false;
    }
  } else {
    for (const input of inputs) {
      if (!input.value.trim()) {
        input.focus();
        input.style.borderColor = '#c0392b';
        if (input.tagName === 'SELECT') alert('Please select your country to continue.');
        return false;
      }
      if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        input.focus();
        input.style.borderColor = '#c0392b';
        alert('Please enter a valid email address.');
        return false;
      }
    }
  }
  step.classList.remove('error');
  return true;
}

// Auto-advance on radio select
steps.forEach((step, idx) => {
  step.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      step.classList.remove('error');
      if (idx < totalSteps - 1) {
        setTimeout(() => showStep(idx + 1), 250);
      }
    });
  });
});

backBtn.addEventListener('click', () => {
  if (current > 0) showStep(current - 1);
});

// =========================================================
// Submit — no scoring; every accountant proceeds to booking
// =========================================================
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validateStep(current)) return;

  const fd = new FormData(form);
  const data = Object.fromEntries(fd.entries());

  // Qualification gate: only US accountants are routed to booking.
  const qualified = QUALIFIED_COUNTRIES.includes(data.country);

  // Persist lead for the booking page (greeting + Calendly prefill)
  const payload = { ...data, qualified, submittedAt: new Date().toISOString() };
  try {
    sessionStorage.setItem('wallyPartner', JSON.stringify(payload));
  } catch (_) {}

  // Persist to Neon via /api/partner-submit. Failure here does NOT block
  // routing — we'd rather show the accountant the calendar than lose them
  // to an outage. Promise.race caps the wait at 4s so the funnel stays snappy.
  const dbWrite = fetch('/api/partner-submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      first_name: data.firstName,
      last_name: data.lastName,
      firm_name: data.firmName,
      email: data.email,
      phone: data.phone || null,
      country: data.country,
      firm_type: data.firm_type,
      fit_clients: data.fit_clients,
      client_income: data.client_income,
      current_handling: data.current_handling,
      partnership_type: data.partnership_type,
    }),
  }).catch((err) => {
    console.warn('Partner submission persistence failed:', err);
  });

  const timeout = new Promise((resolve) => setTimeout(resolve, 4000));
  await Promise.race([dbWrite, timeout]);

  // US accountants book; everyone else gets the soft "not yet" page. We
  // still captured their details above so Wally can revisit later.
  window.location.href = qualified ? './approved/' : './not-available/';
});

// Init
showStep(0);
