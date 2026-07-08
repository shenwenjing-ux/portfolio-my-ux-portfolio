/** 鲜花商详 · 滚动长图 demo（路径卡片 / 对比区复用） */

import { renderMockupImg } from './pdp-mockup-image.js';

export function renderPdpFlowersScrollTabBar(tabs = []) {
  if (!tabs.length) return '';

  return `
    <nav class="pdp-flowers-pdp__tabs" data-pdp-flowers-tabs role="tablist" aria-label="商详模块" aria-hidden="true">
      ${tabs
        .map(
          (tab, index) => `
        <button
          type="button"
          role="tab"
          class="pdp-flowers-pdp__tab${index === 0 ? ' is-active' : ''}"
          data-y-ratio="${tab.yRatio}"
          aria-selected="${index === 0 ? 'true' : 'false'}"
        >${tab.label}</button>`
        )
        .join('')}
    </nav>`;
}

function renderPdpFlowersScrollViewport(chrome, page, pageSrcSet, tabs = []) {
  const navDefault = chrome.topNavDefault || chrome.topNav;
  const navPinned = chrome.topNavPinned || chrome.topNav;

  const defaultImg = navDefault
    ? renderMockupImg(navDefault, {
        className: 'pdp-flowers-pdp__nav-img pdp-flowers-pdp__nav-img--default',
        alt: '',
        loading: 'eager',
        fetchpriority: 'high',
      })
    : '';
  const pinnedImg = navPinned
    ? renderMockupImg(navPinned, {
        className: 'pdp-flowers-pdp__nav-img pdp-flowers-pdp__nav-img--pinned',
        alt: '',
        loading: 'eager',
        fetchpriority: 'high',
      })
    : '';

  const statusBar = chrome.statusBar
    ? `<div class="pdp-flowers-pdp__status-chrome" data-pdp-status-chrome aria-hidden="true">
          ${renderMockupImg(chrome.statusBar, {
            className: 'pdp-flowers-pdp__status-img',
            alt: '',
            loading: 'eager',
            fetchpriority: 'high',
          })}
        </div>`
    : '';

  const pageAttrs = pageSrcSet
    ? `src="${page}" srcset="${pageSrcSet}" sizes="260px"`
    : `src="${page}"`;

  return `
        <div class="pdp-flowers-pdp__status-layer" data-pdp-status-layer aria-hidden="true">
          ${statusBar}
        </div>
        <div class="pdp-flowers-pdp__nav-layer" data-pdp-nav-layer aria-hidden="true">
          <div class="pdp-flowers-pdp__nav-pinned-bar" data-pdp-nav-pinned aria-hidden="true">
            <div class="pdp-flowers-pdp__nav-pinned-slot">
              ${pinnedImg}
              ${renderPdpFlowersScrollTabBar(tabs)}
            </div>
          </div>
        </div>
        <div class="pdp-flowers-pdp__scroller" data-pdp-scroll-content>
          <div class="pdp-flowers-pdp__top-anchor" data-pdp-top-anchor>
            <div class="pdp-flowers-pdp__nav-flow" data-pdp-nav-flow aria-hidden="true">
              ${defaultImg}
            </div>
          </div>
          <div class="pdp-flowers-pdp__stage">
            <img
              class="pdp-flowers-pdp__page"
              data-pdp-flowers-page
              ${pageAttrs}
              alt=""
              loading="eager"
              fetchpriority="high"
              decoding="async"
              draggable="false"
            />
          </div>
        </div>`;
}

export function renderPdpFlowersPdpDemo(demo, { embedded = false } = {}) {
  if (!demo?.page) return '';

  const {
    chrome = {},
    page,
    page2x,
    page3x,
    tabs = [],
    tabsInset = { left: 0.16, right: 0.28 },
    tabStyle = { fontSize: 11, lineHeight: 13, underlineHeight: 2, underlineGap: 3 },
    layout = { designWidth: 750, statusBarHeight: 88, navTopRadius: 24 },
    heroViewportRatio = 0.405,
    recommendViewportRatio = 0.095,
    recommendTopRatio = heroViewportRatio,
    recommendInsetLeft = 0.11,
  } = demo;

  const pageSrcSet = [page3x && `${page3x} 3x`, page2x && `${page2x} 2x`, page && `${page} 1x`]
    .filter(Boolean)
    .join(', ');

  const bottomBar = chrome.bottomBar
    ? renderMockupImg(chrome.bottomBar, {
        className: '',
        alt: '',
        loading: 'eager',
        extraAttrs: 'data-pdp-bottom-chrome-img',
      })
    : '';
  const scrollChrome = renderPdpFlowersScrollViewport(chrome, page, pageSrcSet, tabs);

  const tabInsetLeft = tabsInset.left ?? 0.16;
  const tabInsetRight = tabsInset.right ?? 0.28;
  const tabFontSize = tabStyle.fontSize ?? 11;
  const tabLineHeight = tabStyle.lineHeight ?? 13;
  const tabUnderlineHeight = tabStyle.underlineHeight ?? 2;
  const tabUnderlineGap = tabStyle.underlineGap ?? 3;
  const designWidth = layout.designWidth ?? 750;
  const statusBarHeight = layout.statusBarHeight ?? 88;
  const navTopRadius = layout.navTopRadius ?? 24;

  return `
    <div
      class="pdp-flowers-pdp pdp-flowers-pdp--scroll${embedded ? ' pdp-flowers-pdp--embedded' : ''}"
      data-pdp-flowers-pdp
      data-pdp-flowers-mode="scroll"
      data-status-design-w="${designWidth}"
      data-status-design-h="${statusBarHeight}"
      data-hero-viewport-ratio="${heroViewportRatio}"
      data-recommend-viewport-ratio="${recommendViewportRatio}"
      data-recommend-top-ratio="${recommendTopRatio}"
      data-recommend-inset-left="${recommendInsetLeft}"
      style="
        --pdp-flowers-status-design-w:${designWidth};
        --pdp-flowers-status-design-h:${statusBarHeight};
        --pdp-flowers-nav-top-radius:${navTopRadius};
        --pdp-flowers-nav-top-r:calc(var(--pdp-screen-w, 260px) * ${navTopRadius} / ${designWidth});
        --pdp-flowers-recommend-inset-left:${recommendInsetLeft * 100}%;
        --pdp-flowers-tab-inset-left:${tabInsetLeft * 100}%;
        --pdp-flowers-tab-inset-right:${tabInsetRight * 100}%;
        --pdp-flowers-tab-font-size:calc(var(--pdp-screen-w, 260px) * ${tabFontSize} / 260);
        --pdp-flowers-tab-line-height:calc(var(--pdp-screen-w, 260px) * ${tabLineHeight} / 260);
        --pdp-flowers-tab-underline-h:calc(var(--pdp-screen-w, 260px) * ${tabUnderlineHeight} / 260);
        --pdp-flowers-tab-underline-gap:calc(var(--pdp-screen-w, 260px) * ${tabUnderlineGap} / 260);
      "
    >
      <div class="pdp-screen-mockup__viewport pdp-flowers-pdp__viewport" data-pdp-viewport>
        ${scrollChrome}
        <footer class="pdp-flowers-pdp__bottom-chrome" data-pdp-bottom-chrome aria-hidden="true">
          ${bottomBar}
        </footer>
      </div>
    </div>`;
}

function chromeHeightFor(img, baseWidth) {
  if (!baseWidth || !img?.naturalWidth) return 0;
  return (img.naturalHeight / img.naturalWidth) * baseWidth;
}

/** 鲜花商详 · 滚动长图 demo（路径卡片 / 对比区复用） */

const FLOWERS_SCROLL_PX_PER_SEC = 140;

function resolveScrollDuration(scroller, targetTop, options = {}) {
  if (typeof options === 'number') {
    return options;
  }

  const { duration, pxPerSec = FLOWERS_SCROLL_PX_PER_SEC, minDuration = 480 } = options;
  if (duration != null) return duration;

  const delta = Math.abs(targetTop - (scroller?.scrollTop ?? 0));
  return Math.max(minDuration, (delta / pxPerSec) * 1000);
}

function animateScrollTop(scroller, targetTop, options = {}) {
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

export function createFlowersPdpController(root) {
  const scroller = root.querySelector('.pdp-flowers-pdp__scroller');
  const page = root.querySelector('.pdp-flowers-pdp__page');
  const statusBarImg = root.querySelector('.pdp-flowers-pdp__status-img');
  const navDefaultImg = root.querySelector('.pdp-flowers-pdp__nav-flow .pdp-flowers-pdp__nav-img--default');
  const navPinnedBar = root.querySelector('[data-pdp-nav-pinned]');
  const tabsNav = root.querySelector('[data-pdp-flowers-tabs]');
  const tabButtons = tabsNav ? [...tabsNav.querySelectorAll('.pdp-flowers-pdp__tab')] : [];
  const tabRatios = tabButtons.map((btn) => parseFloat(btn.dataset.yRatio) || 0);
  const bottomChromeImg = root.querySelector('[data-pdp-bottom-chrome] img, [data-pdp-bottom-chrome-img]');
  const heroViewportRatio = parseFloat(root.dataset.heroViewportRatio) || 0.48;
  const recommendViewportRatio = parseFloat(root.dataset.recommendViewportRatio) || 0.095;
  const recommendTopRatio = parseFloat(root.dataset.recommendTopRatio) || heroViewportRatio;
  const recommendInsetLeft = parseFloat(root.dataset.recommendInsetLeft) || 0.11;

  let navChromeHeight = 0;
  let navPinned = false;
  const designWidth = parseFloat(root.dataset.statusDesignW) || 750;
  const statusDesignH = parseFloat(root.dataset.statusDesignH) || 88;

  const measureStatusHeight = (vw) => (vw * statusDesignH) / designWidth;

  const setActiveTab = (index) => {
    tabButtons.forEach((btn, i) => {
      const active = i === index;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  };

  const getPageScrollRatio = () => {
    if (!page?.offsetHeight || !scroller) return 0;
    const statusH = measureStatusHeight(scroller.clientWidth);
    return Math.max(0, scroller.scrollTop - statusH) / page.offsetHeight;
  };

  const getTabScrollTarget = (index) => {
    if (!scroller || !page?.offsetHeight || index < 0 || index >= tabRatios.length) return 0;
    if (index === 0) return 0;
    const maxScroll = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
    const statusH = measureStatusHeight(scroller.clientWidth);
    const pageY = page.offsetHeight * tabRatios[index];
    return Math.min(maxScroll, Math.max(0, statusH + pageY));
  };

  const measureNavChromeHeight = () => chromeHeightFor(navDefaultImg, scroller?.clientWidth);

  const updateTabsFromScroll = () => {
    if (!tabsNav || !tabButtons.length) return;

    tabsNav.classList.toggle('is-visible', navPinned);
    tabsNav.setAttribute('aria-hidden', navPinned ? 'false' : 'true');
    navPinnedBar?.setAttribute('aria-hidden', navPinned ? 'false' : 'true');

    if (!navPinned) return;

    const ratio = getPageScrollRatio();
    let activeIndex = 0;
    tabRatios.forEach((tabRatio, index) => {
      if (ratio >= tabRatio - 0.02) activeIndex = index;
    });
    setActiveTab(activeIndex);
  };

  const updateNavChromePin = () => {
    if (!scroller) return;

    navChromeHeight = measureNavChromeHeight();
    const scrollTop = scroller.scrollTop;
    const enterAt = Math.max(0, navChromeHeight - 2);
    const exitAt = Math.max(0, navChromeHeight - 8);
    navPinned = navPinned ? scrollTop >= exitAt : scrollTop >= enterAt;

    root.classList.toggle('is-nav-pinned', navPinned);
    updateTabsFromScroll();
  };

  const scrollToTab = (index, { smooth = true, duration, linear, pxPerSec } = {}) => {
    if (!scroller || !page?.offsetHeight || index < 0 || index >= tabRatios.length) {
      return Promise.resolve();
    }

    const target = getTabScrollTarget(index);
    const scrollOptions = { duration, linear, pxPerSec };
    const useMotion =
      smooth &&
      resolveScrollDuration(scroller, target, scrollOptions) > 0 &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const finish = () => {
      updateNavChromePin();
      setActiveTab(index);
      updateTabsFromScroll();
    };

    if (useMotion) {
      return animateScrollTop(scroller, target, scrollOptions).then(finish);
    }

    scroller.scrollTop = target;
    scroller.dispatchEvent(new Event('scroll'));
    finish();
    return Promise.resolve();
  };

  const applyMetrics = () => {
    if (!scroller) return;
    const vh = scroller.clientHeight;
    const vw = scroller.clientWidth;
    const layoutH = vh;
    const bottomH = chromeHeightFor(bottomChromeImg, vw);
    const recommendH = layoutH * recommendViewportRatio;
    const heroH = layoutH * heroViewportRatio;
    const recommendTop = layoutH * recommendTopRatio;

    root.style.setProperty('--pdp-flowers-hero-h', `${heroH}px`);
    root.style.setProperty('--pdp-flowers-recommend-top', `${recommendTop}px`);
    root.style.setProperty('--pdp-flowers-recommend-h', `${recommendH}px`);
    root.style.setProperty('--pdp-flowers-recommend-inset-left', `${recommendInsetLeft * 100}%`);
    root.style.setProperty('--pdp-flowers-bottom-chrome-h', `${bottomH}px`);
    scroller.style.paddingBottom = bottomH ? `${bottomH}px` : '0';

    const statusH = measureStatusHeight(vw);
    navChromeHeight = measureNavChromeHeight();
    root.style.setProperty('--pdp-flowers-status-h', `${statusH}px`);
    root.style.setProperty('--pdp-flowers-nav-h', `${navChromeHeight}px`);
    root.style.setProperty('--pdp-flowers-top-chrome-h', `${statusH + navChromeHeight}px`);

    if (page?.naturalWidth) {
      const renderedPageH = (page.naturalHeight / page.naturalWidth) * vw;
      root.style.setProperty('--pdp-flowers-page-h', `${renderedPageH}px`);
    }

    updateNavChromePin();
    updateTabsFromScroll();
  };

  const reset = () => {
    if (scroller) scroller.scrollTop = 0;
    navPinned = false;
    root.classList.remove('is-nav-pinned');
    if (tabButtons.length) setActiveTab(0);
    updateTabsFromScroll();
    applyMetrics();
  };

  if (page) {
    const onReady = () => applyMetrics();
    if (page.complete) onReady();
    else page.addEventListener('load', onReady, { once: true });
  }

  if (scroller) {
    scroller.addEventListener(
      'scroll',
      () => {
        updateNavChromePin();
        updateTabsFromScroll();
      },
      { passive: true }
    );
  }

  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      scrollToTab(index);
    });
  });

  [statusBarImg, navDefaultImg, bottomChromeImg]
    .filter(Boolean)
    .forEach((img) => {
      if (img.complete) applyMetrics();
      else img.addEventListener('load', () => applyMetrics(), { once: true });
    });

  if (typeof ResizeObserver !== 'undefined' && scroller) {
    const ro = new ResizeObserver(applyMetrics);
    ro.observe(scroller);
  }

  reset();
  return {
    reset,
    applyMetrics,
    scrollToTab,
    getNavChromeHeight: () => navChromeHeight || measureNavChromeHeight(),
  };
}

export function bindPdpFlowersPdpDemo() {
  document.querySelectorAll('[data-pdp-flowers-pdp][data-pdp-flowers-mode="scroll"]').forEach((root) => {
    if (root.dataset.pdpFlowersPdpBound === 'true') return;
    root.dataset.pdpFlowersPdpBound = 'true';
    root.__pdpFlowersController = createFlowersPdpController(root);
  });
}
