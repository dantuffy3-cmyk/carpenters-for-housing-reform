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

const renderDecisionContent = (value) => {
  const nextContent = decisionContent[value];

  if (!nextContent || !decisionTitle || !decisionText || !decisionPoints) {
    return;
  }

  decisionTitle.textContent = nextContent.title;
  decisionText.textContent = nextContent.text;
  decisionPoints.replaceChildren(
    ...nextContent.points.map((point) => {
      const item = document.createElement('li');
      item.textContent = point;
      return item;
    })
  );
};

if (decisionSelect && decisionTitle && decisionText && decisionPoints) {
  decisionSelect.addEventListener('change', (event) => {
    renderDecisionContent(event.target.value);
  });
}

const toggleButtons = document.querySelectorAll('[data-form-view]');
const formPanels = document.querySelectorAll('[data-form-panel]');

if (toggleButtons.length && formPanels.length) {
  const setFormView = (view) => {
    toggleButtons.forEach((item) => {
      const isActive = item.dataset.formView === view;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });

    formPanels.forEach((panel) => {
      const isActive = panel.dataset.formPanel === view;
      panel.classList.toggle('is-active', isActive);
      panel.hidden = !isActive;
    });
  };

  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setFormView(button.dataset.formView);
    });
  });

  const defaultView = document.querySelector('[data-form-view].is-active')?.dataset.formView;
  const fallbackView = toggleButtons[0]?.dataset.formView;

  if (defaultView || fallbackView) {
    setFormView(defaultView || fallbackView);
  }
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
      if (frame.dataset.fallbackApplied === 'true') {
        return;
      }

      frame.dataset.fallbackApplied = 'true';
      frame.classList.add('is-fallback');

      if (image.isConnected) {
        image.remove();
      }

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
