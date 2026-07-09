/**
 * 信任背书 Demo · hover 自动播放
 * 商家卡片 → 店铺页；商品评价 → 评价页；商家返图 → 返图页
 */

const phone = document.querySelector('[data-trust-phone]');
const views = {
  pdp: document.querySelector('[data-trust-view="pdp"]'),
  store: document.querySelector('[data-trust-view="store"]'),
  reviews: document.querySelector('[data-trust-view="reviews"]'),
  gallery: document.querySelector('[data-trust-view="gallery"]'),
};

const hotspots = {
  merchant: document.querySelector('.trust-hotspot--merchant'),
  reviews: document.querySelector('.trust-hotspot--reviews'),
  gallery: document.querySelector('.trust-hotspot--gallery'),
};

/** 与策略一路径 demo 搜索页圆环停留一致 */
const RING_HOLD_MS = 2000;

const TIMING = {
  transition: 340,
  highlight: RING_HOLD_MS,
  subpageHold: 1800,
  sectionGap: 1500,
  loopEnd: 700,
};

let activeView = 'pdp';
let playing = false;
let loopToken = 0;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function clearHotspots() {
  document.querySelectorAll('.pdp-demo-hotspot:not(.pdp-demo-hotspot--no-ring)').forEach((el) => {
    el.classList.remove('is-active');
  });
}

function highlightHotspot(target) {
  clearHotspots();
  if (!target) return;
  target.classList.add('is-active');
}

function resetViewsInstant() {
  Object.entries(views).forEach(([name, view]) => {
    if (!view) return;
    view.classList.remove('trust-view--active', 'trust-view--exit', 'trust-view--under');
    view.setAttribute('aria-hidden', name === 'pdp' ? 'false' : 'true');
  });
  views.pdp?.classList.add('trust-view--active');
  activeView = 'pdp';
}

async function openSubpage(name) {
  if (!views[name] || name === activeView) return;

  if (prefersReducedMotion) {
    resetViewsInstant();
    views[name]?.classList.add('trust-view--active');
    views[name]?.setAttribute('aria-hidden', 'false');
    views.pdp?.classList.remove('trust-view--active');
    activeView = name;
    return;
  }

  const incoming = views[name];
  views.pdp?.classList.add('trust-view--under');
  views.pdp?.classList.add('trust-view--active');

  incoming.classList.remove('trust-view--exit');
  incoming.setAttribute('aria-hidden', 'false');
  incoming.offsetHeight;
  incoming.classList.add('trust-view--active');
  activeView = name;
  await wait(TIMING.transition);
}

async function closeSubpage() {
  if (activeView === 'pdp') return;

  if (prefersReducedMotion) {
    resetViewsInstant();
    return;
  }

  const outgoing = views[activeView];
  outgoing?.classList.add('trust-view--exit');
  outgoing?.classList.remove('trust-view--active');
  views.pdp?.classList.remove('trust-view--under');

  await wait(TIMING.transition);

  outgoing?.classList.remove('trust-view--exit');
  outgoing?.setAttribute('aria-hidden', 'true');
  views.pdp?.classList.add('trust-view--active');
  activeView = 'pdp';
}

async function runSequence(token) {
  const segments = [
    { hotspot: hotspots.merchant, page: 'store' },
    { hotspot: hotspots.reviews, page: 'reviews' },
    { hotspot: hotspots.gallery, page: 'gallery' },
  ];

  for (const segment of segments) {
    if (!playing || token !== loopToken) return;

    if (activeView !== 'pdp') await closeSubpage();
    highlightHotspot(segment.hotspot);
    await wait(TIMING.highlight);
    if (!playing || token !== loopToken) return;

    clearHotspots();
    await openSubpage(segment.page);
    await wait(TIMING.subpageHold);
    if (!playing || token !== loopToken) return;

    await closeSubpage();
    await wait(TIMING.sectionGap);
  }

  clearHotspots();
  await wait(TIMING.loopEnd);
}

async function startAutoplay() {
  if (prefersReducedMotion || playing) return;

  playing = true;
  loopToken += 1;
  const token = loopToken;

  while (playing && token === loopToken) {
    await runSequence(token);
  }
}

function stopAutoplay() {
  playing = false;
  loopToken += 1;
  clearHotspots();
  resetViewsInstant();
}

function bindNavigation() {
  document.querySelectorAll('[data-trust-goto]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      stopAutoplay();
      clearHotspots();
      highlightHotspot(btn);
      await wait(280);
      await openSubpage(btn.dataset.trustGoto);
    });
  });

  document.querySelectorAll('[data-trust-back]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      stopAutoplay();
      await closeSubpage();
    });
  });
}

window.addEventListener('message', (event) => {
  if (event.data?.type !== 'pdp-trust-autoplay') return;
  if (event.data.playing) startAutoplay();
  else stopAutoplay();
});

if (phone) {
  bindNavigation();
  resetViewsInstant();
  window.parent.postMessage({ type: 'pdp-trust-ready' }, '*');
}
