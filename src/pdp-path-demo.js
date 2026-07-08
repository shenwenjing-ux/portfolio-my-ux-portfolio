/** 决策链路 · 搜索 → 商详 路径 demo */

import { bindPdpFlowersPdpDemo } from './pdp-flowers-scroll-demo.js';
import { renderPdpFlowersPdpDemo } from './pdp-flowers-scroll-demo.js';
import { renderMockupImg } from './pdp-mockup-image.js';

export const PDP_DEMO_RING_HOLD_MS = 2000;
export const PDP_DEMO_LOOP_PAUSE_MS = 900;
/** 鲜花商详 demo · 匀速滚动速度（px/s） */
export const PDP_FLOWERS_SCROLL_PX_PER_SEC = 140;

export function waitMs(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function resolveScrollDuration(scroller, targetTop, options = {}) {
  if (typeof options === 'number') {
    return options;
  }

  const { duration, pxPerSec = PDP_FLOWERS_SCROLL_PX_PER_SEC, minDuration = 480 } = options;
  if (duration != null) return duration;

  const delta = Math.abs(targetTop - (scroller?.scrollTop ?? 0));
  return Math.max(minDuration, (delta / pxPerSec) * 1000);
}

export function animateScrollTop(scroller, targetTop, options = {}) {
  const linear = typeof options === 'object' && options.linear;
  const duration = resolveScrollDuration(scroller, targetTop, options);

  return new Promise((resolve) => {
    if (!scroller || duration <= 0) {
      if (scroller) scroller.scrollTop = targetTop;
      scroller?.dispatchEvent(new Event('scroll'));
      resolve();
      return;
    }

    const startTop = scroller.scrollTop;
    const delta = targetTop - startTop;
    if (Math.abs(delta) < 1) {
      scroller.scrollTop = targetTop;
      scroller.dispatchEvent(new Event('scroll'));
      resolve();
      return;
    }

    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = linear ? progress : 1 - (1 - progress) ** 3;
      scroller.scrollTop = startTop + delta * eased;
      scroller.dispatchEvent(new Event('scroll'));
      if (progress < 1) requestAnimationFrame(step);
      else resolve();
    };

    requestAnimationFrame(step);
  });
}

function renderPdpPathDemoHotspot(hotspot) {
  if (!hotspot) return '';

  const top = (hotspot.top ?? 0.35) * 100;
  const left = (hotspot.left ?? 0.05) * 100;
  const width = (hotspot.width ?? 0.9) * 100;
  const height = (hotspot.height ?? 0.2) * 100;

  return `
          <div
            class="pdp-path-demo__hotspot pdp-demo-hotspot pdp-demo-hotspot--ring-right"
            data-pdp-path-hotspot
            aria-hidden="true"
            style="top:${top}%;left:${left}%;width:${width}%;height:${height}%;"
          ></div>`;
}

export function renderPdpPathDemo(demo, { demoId = '', renderScrollMockup } = {}) {
  if (!demo?.search) return '';

  const hasFlowersPdp = Boolean(demo.flowersPdpDemo);
  const hasScroll = Boolean(demo.scrollDemo && demo.pdp);
  let pdpContent = '';

  if (hasFlowersPdp) {
    pdpContent = renderPdpFlowersPdpDemo(demo.flowersPdpDemo, { embedded: true });
  } else if (demo.pdp) {
    pdpContent = hasScroll
      ? renderScrollMockup?.(demo.pdp, demo.scrollDemo, { embedded: true, hideHint: true }) ||
        renderMockupImg(demo.pdp.src, { className: '', alt: demo.pdp.alt })
      : renderMockupImg(demo.pdp.src, {
          className: '',
          alt: demo.pdp.alt,
        });
  } else {
    return '';
  }

  return `
    <div
      class="pdp-path-demo"
      data-pdp-path-demo
      data-pdp-path-demo-id="${demoId}"
      data-pdp-path-scroll-down="${demo.scrollDemo?.scrollDownRatio ?? 0.35}"
      data-pdp-path-has-scroll="${hasScroll ? 'true' : 'false'}"
      data-pdp-path-has-flowers="${hasFlowersPdp ? 'true' : 'false'}"
    >
      <div class="pdp-screen-mockup__viewport pdp-path-demo__viewport">
        <div class="pdp-path-demo__stack">
          <div class="pdp-path-demo__screen pdp-path-demo__screen--search is-active" data-pdp-path-screen="search">
            ${renderMockupImg(demo.search.src, { className: 'pdp-path-demo__search-img', alt: demo.search.alt, loading: 'eager' })}
            ${renderPdpPathDemoHotspot(demo.searchHotspot)}
          </div>
          <div class="pdp-path-demo__screen pdp-path-demo__screen--pdp" data-pdp-path-screen="pdp" aria-hidden="true">
            ${pdpContent}
          </div>
        </div>
      </div>
    </div>`;
}

export function renderPdpPathDemoGallery(demos, { renderScrollMockup } = {}) {
  if (!demos?.length) return '';

  return `
    <div class="pdp-path-demo-gallery" data-pdp-path-demo-gallery>
      ${demos
        .map(
          (demo) => `
      <article
        class="pdp-path-demo-card reveal"
        data-pdp-path-demo-card="${demo.id}"
        tabindex="0"
        aria-label="${demo.name} · 路径演示"
      >
        <header class="pdp-path-demo-card__head">
          <h6 class="pdp-path-demo-card__title">${demo.name}</h6>
          <span class="pdp-path-demo-card__hint">悬停自动播放</span>
        </header>
        ${renderPdpPathDemo(demo, { demoId: demo.id, renderScrollMockup })}
      </article>`
        )
        .join('')}
    </div>`;
}

export function createPdpPathDemoController(root) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasScroll = root.dataset.pdpPathHasScroll === 'true';
  const hasFlowersPdp = root.dataset.pdpPathHasFlowers === 'true';
  const TIMING = {
    searchHold: PDP_DEMO_RING_HOLD_MS,
    transition: hasFlowersPdp ? 320 : 480,
    pdpTopHold: hasFlowersPdp ? 500 : hasScroll ? 600 : 2400,
    scrollDown: hasFlowersPdp ? { linear: true, pxPerSec: PDP_FLOWERS_SCROLL_PX_PER_SEC } : 2400,
    scrollUp: hasFlowersPdp ? { linear: true, pxPerSec: PDP_FLOWERS_SCROLL_PX_PER_SEC } : 1700,
    tabScroll: { linear: true, pxPerSec: PDP_FLOWERS_SCROLL_PX_PER_SEC },
    loopPause: PDP_DEMO_LOOP_PAUSE_MS,
  };

  const scrollRoot = root.querySelector('[data-pdp-scroll-demo]');
  const scroller = scrollRoot?.querySelector('.pdp-scroll-mockup__scroller');
  const scrollImg = scroller?.querySelector('img');
  const flowersRoot = root.querySelector('[data-pdp-flowers-pdp]');
  const scrollDownRatio = parseFloat(root.dataset.pdpPathScrollDown) || 0.35;
  const searchHotspot = root.querySelector('[data-pdp-path-hotspot]');
  let loopToken = 0;
  let running = false;

  const getFlowersController = () => flowersRoot?.__pdpFlowersController;

  const setStage = (stage) => {
    const isPdp = stage === 'pdp';
    root.classList.toggle('is-pdp', isPdp);
    root.dataset.pdpPathStage = stage;

    root.querySelectorAll('[data-pdp-path-screen]').forEach((screen) => {
      const name = screen.dataset.pdpPathScreen;
      if (name === 'search') {
        screen.classList.add('is-active');
        screen.setAttribute('aria-hidden', 'false');
      } else if (name === 'pdp') {
        screen.classList.toggle('is-active', isPdp);
        screen.setAttribute('aria-hidden', isPdp ? 'false' : 'true');
      }
    });
  };

  const resetScroll = () => {
    if (!scroller) return;
    scroller.scrollTop = 0;
    scroller.dispatchEvent(new Event('scroll'));
  };

  const waitForScrollReady = () =>
    new Promise((resolve) => {
      if (!scrollImg) {
        resolve();
        return;
      }
      if (scrollImg.complete && scrollImg.offsetHeight) {
        resolve();
        return;
      }
      scrollImg.addEventListener('load', () => resolve(), { once: true });
      window.setTimeout(resolve, 1200);
    });

  const getScrollTarget = () => {
    if (!scroller || !scrollImg?.offsetHeight) return 0;
    const maxScroll = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
    return Math.min(maxScroll, scrollImg.offsetHeight * scrollDownRatio);
  };

  const playFlowersSequence = async (active) => {
    const flowersCtrl = getFlowersController();
    flowersCtrl?.applyMetrics();
    requestAnimationFrame(() => flowersCtrl?.applyMetrics());
    await waitMs(60);
    flowersCtrl?.applyMetrics();
    await waitMs(TIMING.pdpTopHold);
    if (!active()) return;

    const flowerScroller = flowersRoot?.querySelector('.pdp-flowers-pdp__scroller');
    if (!flowerScroller) return;

    const maxScroll = Math.max(0, flowerScroller.scrollHeight - flowerScroller.clientHeight);
    const pinTarget = Math.min(maxScroll, (flowersCtrl?.getNavChromeHeight?.() || 36) + 4);
    await animateScrollTop(flowerScroller, pinTarget, TIMING.scrollDown);
    if (!active()) return;

    const tabCount = flowersRoot?.querySelectorAll('.pdp-flowers-pdp__tab').length || 0;
    for (let tabIndex = 1; tabIndex < tabCount; tabIndex += 1) {
      await flowersCtrl?.scrollToTab?.(tabIndex, { smooth: true, ...TIMING.tabScroll });
      if (!active()) return;
    }

    await waitMs(300);
    await animateScrollTop(flowerScroller, 0, TIMING.scrollUp);
  };

  const stop = () => {
    loopToken += 1;
    running = false;
    root.classList.remove('is-transitioning', 'is-playing', 'is-search-highlight');
    searchHotspot?.classList.remove('is-active');
    getFlowersController()?.stopAuto?.();
    setStage('search');
    resetScroll();
    getFlowersController()?.reset();
  };

  const start = async () => {
    if (prefersReducedMotion) return;
    stop();

    running = true;
    loopToken += 1;
    const token = loopToken;
    const active = () => token === loopToken && root.isConnected && running;

    root.classList.add('is-playing');

    while (active()) {
      setStage('search');
      resetScroll();
      getFlowersController()?.reset();
      root.classList.remove('is-transitioning');
      root.classList.add('is-search-highlight');
      searchHotspot?.classList.add('is-active');
      await waitMs(TIMING.searchHold);
      searchHotspot?.classList.remove('is-active');
      root.classList.remove('is-search-highlight');
      if (!active()) break;

      root.classList.add('is-transitioning');
      setStage('pdp');
      await waitMs(TIMING.transition);
      if (!active()) break;
      root.classList.remove('is-transitioning');

      if (hasFlowersPdp) {
        await playFlowersSequence(active);
        await waitMs(400);
      } else if (hasScroll) {
        await waitForScrollReady();
        resetScroll();
        await waitMs(TIMING.pdpTopHold);
        if (!active()) break;
        await animateScrollTop(scroller, getScrollTarget(), TIMING.scrollDown);
        await waitMs(300);
        if (!active()) break;
        await animateScrollTop(scroller, 0, TIMING.scrollUp);
        await waitMs(400);
      } else {
        await waitMs(TIMING.pdpTopHold);
      }

      if (!active()) break;
      root.classList.add('is-transitioning');
      setStage('search');
      await waitMs(TIMING.transition);
      if (!active()) break;
      root.classList.remove('is-transitioning');
      await waitMs(TIMING.loopPause);
    }

    running = false;
    root.classList.remove('is-playing');
    getFlowersController()?.stopAuto?.();
  };

  stop();
  return { start, stop, root };
}

export function bindPdpPathDemo({ bindHoverAutoplay }) {
  bindPdpFlowersPdpDemo();

  const controllers = new Map();
  let activeId = null;

  document.querySelectorAll('[data-pdp-path-demo-card]').forEach((card) => {
    const demoRoot = card.querySelector('[data-pdp-path-demo]');
    if (!demoRoot) return;

    const id = card.dataset.pdpPathDemoCard;
    const controller = createPdpPathDemoController(demoRoot);
    controllers.set(id, controller);

    const play = () => {
      if (activeId && activeId !== id) {
        controllers.get(activeId)?.stop();
        document.querySelector(`[data-pdp-path-demo-card="${activeId}"]`)?.classList.remove('is-active');
      }
      activeId = id;
      card.classList.add('is-active');
      demoRoot.querySelector('[data-pdp-flowers-pdp]')?.__pdpFlowersController?.applyMetrics();
      void controller.start();
    };

    const pause = () => {
      controller.stop();
      card.classList.remove('is-active');
      if (activeId === id) activeId = null;
    };

    bindHoverAutoplay(card, { onPlay: play, onPause: pause });
  });
}
