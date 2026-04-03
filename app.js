const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-open', isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    });
  });
}

const decisionContent = {
  buying: {
    title: 'Buying a property',
    text: 'Spot renovation scope traps, underquoted repair risk, and layout assumptions before you exchange or overpay.',
    points: [
      'Check whether the “cheap fix” is actually a deeper scope issue',
      'Understand likely renovation pressure points before making an offer',
      'Prioritise questions that reduce hidden-cost risk early'
    ]
  },
  selling: {
    title: 'Selling a property',
    text: 'Decide where renovation spend adds confidence, where it is wasted, and what buyers are likely to question.',
    points: [
      'Avoid spending on upgrades that do not materially improve buyer trust',
      'Identify presentation issues versus genuine renovation blockers',
      'Improve sale-readiness with clearer renovation judgment'
    ]
  },
  renovating: {
    title: 'Planning a renovation',
    text: 'Pressure-test the scope before work starts so sequencing, budget logic, and trade decisions are more stable.',
    points: [
      'See where early assumptions could create expensive downstream changes',
      'Clarify the decisions that most affect budget and complexity',
      'Reduce the chance of regret driven by poor scope definition'
    ]
  }
};

const decisionSelect = document.querySelector('[data-decision-select]');
const decisionTitle = document.getElementById('decision-title');
const decisionText = document.getElementById('decision-text');
const decisionPoints = document.getElementById('decision-points');

if (decisionSelect && decisionTitle && decisionText && decisionPoints) {
  decisionSelect.addEventListener('change', (event) => {
    const nextContent = decisionContent[event.target.value];

    if (!nextContent) {
      return;
    }

    decisionTitle.textContent = nextContent.title;
    decisionText.textContent = nextContent.text;
    decisionPoints.innerHTML = nextContent.points.map((point) => `<li>${point}</li>`).join('');
  });
}

const toggleButtons = document.querySelectorAll('[data-form-view]');
const formPanels = document.querySelectorAll('[data-form-panel]');

if (toggleButtons.length && formPanels.length) {
  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const view = button.dataset.formView;

      toggleButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-selected', String(isActive));
      });

      formPanels.forEach((panel) => {
        const isActive = panel.dataset.formPanel === view;
        panel.classList.toggle('is-active', isActive);
        panel.hidden = !isActive;
      });
    });
  });
}

const mediaFrames = document.querySelectorAll('[data-fallback-label]');

mediaFrames.forEach((frame) => {
  const image = frame.querySelector('img');

  if (!image) {
    return;
  }

  image.addEventListener(
    'error',
    () => {
      frame.classList.add('is-fallback');
      image.remove();

      if (!frame.querySelector('.media-fallback')) {
        const fallback = document.createElement('div');
        fallback.className = 'media-fallback';
        fallback.textContent = frame.dataset.fallbackLabel || 'Image unavailable';
        frame.appendChild(fallback);
      }
    },
    { once: true }
  );
});
