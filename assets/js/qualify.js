// =========================================================
// Qualification form — multi-step navigation + scoring
// =========================================================

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('qualifyForm');
const steps = Array.from(form.querySelectorAll('.step'));
const totalSteps = steps.length;
const nextBtn = document.getElementById('nextBtn');
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

  // Buttons
  backBtn.hidden = i === 0;
  nextBtn.hidden = i === totalSteps - 1;
  submitBtn.hidden = i !== totalSteps - 1;

  // Focus first input
  const firstInput = steps[i].querySelector('input');
  if (firstInput) setTimeout(() => firstInput.focus({ preventScroll: true }), 50);
}

function validateStep(i) {
  const step = steps[i];
  const inputs = step.querySelectorAll('input[required]');
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

nextBtn.addEventListener('click', () => {
  if (!validateStep(current)) return;
  if (current < totalSteps - 1) showStep(current + 1);
});

backBtn.addEventListener('click', () => {
  if (current > 0) showStep(current - 1);
});

// =========================================================
// Scoring logic
// =========================================================
// Wally's tax-saving strategies are most impactful for higher-income
// households. The scoring below is intentionally generous to surface
// any reasonably-qualified lead — refine the thresholds with Wally.

const SCORING = {
  income: {
    under_150k: 0,
    '150_250k': 1,
    '250_500k': 3,
    '500k_1m': 4,
    over_1m: 5,
  },
  assets: {
    under_100k: 0,
    '100_500k': 1,
    '500k_1m': 2,
    '1_5m': 3,
    over_5m: 4,
  },
  tax: {
    under_25k: 0,
    '25_75k': 1,
    '75_200k': 3,
    over_200k: 4,
    unsure: 1,
  },
  situation: {
    business_owner: 2,
    executive: 2,
    professional: 2,
    pre_retiree: 2,
    retiree: 1,
    other: 0,
  },
  timing: {
    now: 3,
    '3_months': 2,
    '6_12_months': 1,
    exploring: 0,
  },
};

// Minimum total score to be considered "qualified".
// Max possible = 5 + 4 + 4 + 2 + 3 = 18.
// Threshold of 7 = moderately qualified (e.g. $250K+ income OR $75K+ tax bill + intent).
const QUALIFY_THRESHOLD = 7;

function calculateScore(data) {
  let score = 0;
  score += SCORING.income[data.income] ?? 0;
  score += SCORING.assets[data.assets] ?? 0;
  score += SCORING.tax[data.tax] ?? 0;
  score += SCORING.situation[data.situation] ?? 0;
  score += SCORING.timing[data.timing] ?? 0;
  return score;
}

// =========================================================
// Submit
// =========================================================
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validateStep(current)) return;

  const fd = new FormData(form);
  const data = Object.fromEntries(fd.entries());
  const score = calculateScore(data);
  const qualified = score >= QUALIFY_THRESHOLD;

  // Persist lead for downstream pages / analytics
  const payload = { ...data, score, qualified, submittedAt: new Date().toISOString() };
  try {
    sessionStorage.setItem('wallyLead', JSON.stringify(payload));
  } catch (_) {}

  // TODO: send to your CRM / Zapier webhook here
  // await fetch('https://hooks.zapier.com/your-hook', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // });

  // Route based on qualification
  if (qualified) {
    window.location.href = '../qualified/';
  } else {
    window.location.href = '../thank-you/';
  }
});

// Init
showStep(0);
