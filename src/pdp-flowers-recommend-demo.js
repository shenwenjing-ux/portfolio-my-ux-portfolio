/** 鲜花商详 · 同店推荐切换 demo（750 设计稿 · 容器宽度自适应） */

import { renderMockupImg } from './pdp-mockup-image.js';

const REC_DESIGN_W = 750;
const REC_DESIGN_H = 1024;

export function renderPdpFlowersRecommendDemo(demo) {
  if (!demo?.page) return '';

  const {
    page,
    pageSize = { w: 598, h: REC_DESIGN_H },
    mediaTabs,
    tabs = [],
    tabAssets = {},
    mainThumb,
    mainHero,
    recLabel,
  chrome = {},
  variants = [],
  layout = {},
  styleSpecLabels = {},
} = demo;

  const pageH = pageSize.h || REC_DESIGN_H;
  const pageW = pageSize.w || 598;
  const designW = layout.designWidth ?? REC_DESIGN_W;
  const statusBarEnd = layout.statusBarEnd ?? 53;
  const navStart = layout.navStart ?? 70;
  const navEnd = layout.navEnd ?? 158;
  const heroTop = layout.heroTop ?? navStart;
  const priceTop = layout.priceTop ?? 647;
  const thumbPageH = layout.thumbPageH ?? Math.round((layout.thumbSize ?? 100) * (pageW / designW));
  const tabPageH = layout.tabHeight ?? 54.5;
  const tabsGap = layout.tabsGap ?? 52;
  const heroBottomPx = layout.heroBottomPx ?? layout.trackTopPx ?? 838;
  const trackTopPx = layout.trackTopPx ?? heroBottomPx;
  const tabsTopPx = layout.tabsTopPx ?? 786;
  const trackLeftPx = layout.trackLeftPx ?? 6;
  const heroTopOffsetPx = layout.heroTopOffsetPx ?? 0;
  const tabsBottomGapPx = layout.tabsBottomGapPx ?? 52;
  const sectionFadeTopPx = layout.sectionFadeTopPx ?? 718;
  const sectionFadeHeightPx = layout.sectionFadeHeightPx ?? 120;
  const whitePanelWidthInsetPx = layout.whitePanelWidthInsetPx ?? 12;
  const whitePanelTopRadiusPx = layout.whitePanelTopRadiusPx ?? 18;
  const whitePanelHeightPx = layout.whitePanelHeightPx ?? 70;
  const whitePanelGapFromTabsBottomPx = layout.whitePanelGapFromTabsBottomPx ?? 16;
  const trackActiveShiftPx = layout.trackActiveShiftPx ?? 12;
  const trackActiveShiftId = layout.trackActiveShiftId ?? 'v5';
  const recTop = layout.recommendTop ?? priceTop - thumbPageH;
  const tabsTop = layout.tabsTop ?? Math.round(recTop - tabPageH - tabsGap);
  const tabsLeft = layout.tabsLeft ?? 103;
  const tabsWidth = layout.tabsWidth ?? 392;
  const padLeft = layout.padLeft ?? 26;
  const padRight = layout.padRight ?? 24;
  const gapMainLabel = layout.gapMainLabel ?? 22;
  const gapLabelList = layout.gapLabelList ?? 20;
  const gapItem = layout.gapItem ?? 12;
  const labelW = layout.labelWidth ?? 36;
  const thumbSize = layout.thumbSize ?? 100;
  const thumbRadius = layout.thumbRadius ?? 18;
  const specTagGapPx = layout.specTagGapPx ?? 24;
  const specTagWidthPx = layout.specTagWidthPx ?? 76;
  const specTagHeightPx = layout.specTagHeightPx ?? 40;
  const specTagRadiusPx = layout.specTagRadiusPx ?? 20;
  const reviewsPanelWidthPx = layout.reviewsPanelWidthPx ?? 738;
  const reviewsPanelAspectW = layout.reviewsPanelAspectW ?? 1021;
  const reviewsPanelAspectH = layout.reviewsPanelAspectH ?? 1024;
  const tabBarRadiusPx = layout.tabBarRadiusPx ?? 26;
  const tabPillTopPx = layout.tabPillTopPx ?? 4;
  const tabPillHeightPx = layout.tabPillHeightPx ?? 44;
  const tabPillRadiusPx = layout.tabPillRadiusPx ?? 28;
  const tabFontSizePx = layout.tabFontSizePx ?? 24;
  const tabLineHeightPx = layout.tabLineHeightPx ?? 40;
  const tabBlurPx = layout.tabBlurPx ?? 16.32;
  const demoStyleHoldMs = layout.demoStyleHoldMs ?? 1600;
  const reviewsPanelOffsetYPx = layout.reviewsPanelOffsetYPx ?? -48;
  const reviewsClipTopOnly = layout.reviewsClipTopOnly ?? false;
  const whitePanelFullWidth = layout.whitePanelFullWidth ?? false;
  const whitePanelExtendToBottom = layout.whitePanelExtendToBottom ?? false;
  const whitePanelExtendOnReviewsOnly = layout.whitePanelExtendOnReviewsOnly ?? false;
  const whitePanelBottomRadiusPx = layout.whitePanelBottomRadiusPx ?? 0;
  const mainHeroScale = layout.mainHeroScale ?? 1;
  const mainHeroWidthPx = layout.mainHeroWidthPx ?? 0;
  const mainHeroOffsetYPx = layout.mainHeroOffsetYPx ?? 0;
  const heroWidthBasePx = layout.heroWidthBasePx ?? 0;
  const heroAlignTop = layout.heroAlignTop ?? false;
  const specTagSrc = tabAssets.specTag || '';
  const reviewsPanelSrc = tabAssets.reviewsPanel || '';

  const renderMediaTabLabel = (tab) => {
    if (tab.id === 'style') {
      const styleMain = tab.styleLabelMain || '款式';
      const styleSub = tab.styleLabelSub || '1/3';
      return `<span class="pdp-flowers-rec__media-tab-text"><span class="pdp-flowers-rec__media-tab-style-main">${styleMain}</span><span class="pdp-flowers-rec__media-tab-style-sub">${styleSub}</span></span>`;
    }
    return tab.label;
  };

  const mediaTabItems = tabs.length
    ? tabs
    : [
        { id: 'images', label: '图片' },
        { id: 'style', label: '款式1/3' },
        { id: 'reviews', label: '评价' },
      ];

  const mediaTabsHtml = mediaTabItems.length
    ? `
            <div class="pdp-flowers-rec__tab-content-layer" data-pdp-flowers-tab-content-layer aria-hidden="true">
              ${
                specTagSrc
                  ? `<div class="pdp-flowers-rec__tab-content-slot" data-pdp-flowers-tab-slot="style">
                  <div class="pdp-flowers-rec__spec-tag-wrap">
                    <img class="pdp-flowers-rec__spec-tag" data-pdp-flowers-tab-content="style" src="${specTagSrc}" alt="" loading="eager" decoding="async" draggable="false" />
                    <span class="pdp-flowers-rec__spec-tag-text" data-pdp-flowers-spec-label hidden aria-hidden="true"></span>
                  </div>
                </div>`
                  : ''
              }
            </div>
            <div class="pdp-flowers-rec__media-tabs" data-pdp-flowers-media-tabs role="tablist" aria-label="商详模块">
              <div class="pdp-flowers-rec__media-tabs-inner">
                <span class="pdp-flowers-rec__media-tabs-pill" data-pdp-flowers-media-tabs-pill aria-hidden="true"></span>
                ${mediaTabItems
                  .map(
                    (tab, index) => `
                <button
                  type="button"
                  role="tab"
                  class="pdp-flowers-rec__media-tab${index === 0 ? ' is-active' : ''}"
                  data-pdp-flowers-media-tab="${tab.id}"
                  aria-selected="${index === 0 ? 'true' : 'false'}"
                >${renderMediaTabLabel(tab)}</button>`
                  )
                  .join('')}
              </div>
            </div>`
    : mediaTabs
      ? `<img class="pdp-flowers-rec__tabs" src="${mediaTabs}" alt="" aria-hidden="true" loading="eager" decoding="async" draggable="false" />`
      : '';

  const toY = (y) => y / pageH;
  const heroTopRatio = toY(heroTop);
  const navStartRatio = toY(navStart);
  const statusBarEndRatio = toY(statusBarEnd);
  const navEndRatio = toY(navEnd);
  const heroBottomRatio = toY(heroBottomPx);
  const tabsTopRatio = toY(tabsTop);
  const recTopRatio = toY(recTop);

  const statusBarSrc = chrome.statusBar || '/images/projects/pdp-p2-chrome-status-bar.png';
  const topNavSrc = chrome.topNav || chrome.topNavDefault || '/images/projects/pdp-p2-chrome-top-nav-default.png?v=6';
  const navAspectW = chrome.navAspectW ?? layout.navAspectW ?? 472;
  const navAspectH = chrome.navAspectH ?? layout.navAspectH ?? 67;

  const heroImgs = [
    mainHero
      ? `<img class="pdp-flowers-rec__hero is-active" data-pdp-flowers-hero="main" src="${mainHero}" alt="" loading="eager" decoding="async" draggable="false"${mainHeroWidthPx ? ` data-hero-width-px="${mainHeroWidthPx}"` : ''}${mainHeroOffsetYPx ? ` data-hero-offset-y-px="${mainHeroOffsetYPx}"` : ''} />`
      : '',
    ...variants.map(
      (v) =>
        `<img class="pdp-flowers-rec__hero" data-pdp-flowers-hero="${v.id}" src="${v.hero}" alt="" loading="lazy" decoding="async" draggable="false"${v.heroWidthPx ? ` data-hero-width-px="${v.heroWidthPx}"` : ''}${v.heroOffsetYPx ? ` data-hero-offset-y-px="${v.heroOffsetYPx}"` : ''} />`
    ),
  ].join('');

  const variantThumbs = variants
    .map(
      (v) => `
        <button type="button" class="pdp-flowers-rec__thumb pdp-flowers-rec__thumb--rec" data-pdp-flowers-thumb="${v.id}" aria-label="${v.label || v.id}" role="listitem">
          <img src="${v.thumb || v.hero}" alt="" loading="lazy" decoding="async" draggable="false" />
          <span class="pdp-flowers-rec__thumb-ring" aria-hidden="true"></span>
        </button>`
    )
    .join('');

  return `
    <div
      class="pdp-flowers-rec"
      data-pdp-flowers-pdp
      data-pdp-flowers-mode="recommend"
      data-design-w="${designW}"
      data-hero-top-ratio="${heroTopRatio}"
      data-nav-start-ratio="${navStartRatio}"
      data-status-bar-end-ratio="${statusBarEndRatio}"
      data-nav-end-ratio="${navEndRatio}"
      data-nav-aspect-w="${navAspectW}"
      data-nav-aspect-h="${navAspectH}"
      data-hero-bottom-ratio="${heroBottomRatio}"
      data-hero-bottom-px="${heroBottomPx}"
      data-tabs-top-px="${tabsTopPx}"
      data-tabs-gap-px="${tabsGap}"
      data-tabs-top-ratio="${tabsTopRatio}"
      data-rec-top-ratio="${recTopRatio}"
      data-track-top-px="${trackTopPx}"
      data-track-left-px="${trackLeftPx}"
      data-hero-top-offset-px="${heroTopOffsetPx}"
      data-tabs-bottom-gap-px="${tabsBottomGapPx}"
      data-section-fade-top-px="${sectionFadeTopPx}"
      data-section-fade-height-px="${sectionFadeHeightPx}"
      data-white-panel-width-inset-px="${whitePanelWidthInsetPx}"
      data-white-panel-full-width="${whitePanelFullWidth ? 'true' : 'false'}"
      data-white-panel-extend-to-bottom="${whitePanelExtendToBottom ? 'true' : 'false'}"
      data-white-panel-extend-on-reviews-only="${whitePanelExtendOnReviewsOnly ? 'true' : 'false'}"
      data-white-panel-bottom-radius-px="${whitePanelBottomRadiusPx}"
      data-white-panel-top-radius-px="${whitePanelTopRadiusPx}"
      data-white-panel-height-px="${whitePanelHeightPx}"
      data-white-panel-gap-from-tabs-bottom-px="${whitePanelGapFromTabsBottomPx}"
      data-track-active-shift-px="${trackActiveShiftPx}"
      data-track-active-shift-id="${trackActiveShiftId}"
      data-tabs-left-ratio="${tabsLeft / designW}"
      data-tabs-width-ratio="${tabsWidth / designW}"
      data-tab-height-ratio="${tabPageH / designW}"
      data-pad-left="${padLeft}"
      data-pad-right="${padRight}"
      data-gap-main-label="${gapMainLabel}"
      data-gap-label-list="${gapLabelList}"
      data-gap-item="${gapItem}"
      data-label-w="${labelW}"
      data-thumb-size="${thumbSize}"
      data-thumb-radius="${thumbRadius}"
      data-spec-tag-gap-px="${specTagGapPx}"
      data-spec-tag-width-px="${specTagWidthPx}"
      data-spec-tag-height-px="${specTagHeightPx}"
      data-spec-tag-radius-px="${specTagRadiusPx}"
      data-reviews-panel-width-px="${reviewsPanelWidthPx}"
      data-reviews-panel-aspect-w="${reviewsPanelAspectW}"
      data-reviews-panel-aspect-h="${reviewsPanelAspectH}"
      data-tab-bar-radius-px="${tabBarRadiusPx}"
      data-tab-pill-top-px="${tabPillTopPx}"
      data-tab-pill-height-px="${tabPillHeightPx}"
      data-tab-pill-radius-px="${tabPillRadiusPx}"
      data-tab-font-size-px="${tabFontSizePx}"
      data-tab-line-height-px="${tabLineHeightPx}"
      data-tab-blur-px="${tabBlurPx}"
      data-demo-style-hold-ms="${demoStyleHoldMs}"
      data-reviews-panel-offset-y-px="${reviewsPanelOffsetYPx}"
      data-main-hero-scale="${mainHeroScale}"
      data-hero-width-base-px="${heroWidthBasePx}"
      data-hero-align-top="${heroAlignTop ? 'true' : 'false'}"
      data-style-spec-labels="${encodeURIComponent(JSON.stringify(styleSpecLabels))}"
      data-reviews-clip-top-only="${reviewsClipTopOnly ? 'true' : 'false'}"
    >
      <div class="pdp-screen-mockup__viewport pdp-flowers-rec__viewport">
        <div class="pdp-flowers-rec__scroller">
          <div class="pdp-flowers-rec__stage">
            <img class="pdp-flowers-rec__page" src="${page}" alt="" loading="eager" decoding="async" draggable="false" />
            <div class="pdp-flowers-rec__chrome" aria-hidden="true">
              ${renderMockupImg(statusBarSrc, {
                className: 'pdp-flowers-rec__chrome-status',
                alt: '',
                loading: 'eager',
                fetchpriority: 'high',
              })}
              ${renderMockupImg(topNavSrc, {
                className: 'pdp-flowers-rec__chrome-nav',
                alt: '',
                loading: 'eager',
                fetchpriority: 'high',
                sharpSrc: true,
              })}
            </div>
            <div class="pdp-flowers-rec__hero-layer">${heroImgs}</div>
            ${
              reviewsPanelSrc
                ? `<div class="pdp-flowers-rec__reviews-layer" data-pdp-flowers-reviews-layer aria-hidden="true">
              <img class="pdp-flowers-rec__reviews-panel" data-pdp-flowers-tab-content="reviews" src="${reviewsPanelSrc}" alt="" loading="eager" decoding="async" draggable="false" />
            </div>`
                : ''
            }
            <div class="pdp-flowers-rec__section-fade" aria-hidden="true"></div>
            ${mediaTabsHtml}
            <div class="pdp-flowers-rec__white-panel" aria-hidden="true"></div>
            <div class="pdp-flowers-rec__track-layer">
              <div class="pdp-flowers-rec__track" role="list" aria-label="款式缩略图">
                ${
                  mainThumb
                    ? `
                <button type="button" class="pdp-flowers-rec__thumb pdp-flowers-rec__thumb--main is-active" data-pdp-flowers-thumb="main" aria-label="主图缩略图" role="listitem">
                  <img src="${mainThumb}" alt="" loading="eager" decoding="async" draggable="false" />
                  <span class="pdp-flowers-rec__thumb-ring" aria-hidden="true"></span>
                </button>
                ${recLabel ? `<img class="pdp-flowers-rec__label" src="${recLabel}" alt="" aria-hidden="true" loading="lazy" decoding="async" draggable="false" />` : ''}`
                    : ''
                }
                <div class="pdp-flowers-rec__variants">${variantThumbs}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function readLayoutNumber(root, key, fallback) {
  const v = parseFloat(root.dataset[key]);
  return Number.isFinite(v) ? v : fallback;
}

export function createFlowersRecommendController(root) {
  const scroller = root.querySelector('.pdp-flowers-rec__scroller');
  const page = root.querySelector('.pdp-flowers-rec__page');
  const track = root.querySelector('.pdp-flowers-rec__track');
  const thumbs = [...root.querySelectorAll('[data-pdp-flowers-thumb]')];
  const variantThumbs = thumbs.filter((t) => t.dataset.pdpFlowersThumb !== 'main');
  const heroes = [...root.querySelectorAll('[data-pdp-flowers-hero]')];

  const designW = readLayoutNumber(root, 'designW', REC_DESIGN_W);
  const heroTopRatio = parseFloat(root.dataset.heroTopRatio) || 0;
  const navStartRatio = parseFloat(root.dataset.navStartRatio) || 70 / REC_DESIGN_H;
  const statusBarEndRatio = parseFloat(root.dataset.statusBarEndRatio) || 53 / REC_DESIGN_H;
  const navEndRatio = parseFloat(root.dataset.navEndRatio) || 158 / REC_DESIGN_H;
  const navAspectW = readLayoutNumber(root, 'navAspectW', 472);
  const navAspectH = readLayoutNumber(root, 'navAspectH', 67);
  const heroBottomRatio = parseFloat(root.dataset.heroBottomRatio) || 0;
  const heroBottomPx = readLayoutNumber(root, 'heroBottomPx', 838);
  const tabsTopPx = readLayoutNumber(root, 'tabsTopPx', 786);
  const tabsGapPx = readLayoutNumber(root, 'tabsGapPx', 52);
  const tabsTopRatio = parseFloat(root.dataset.tabsTopRatio) || 0;
  const recTopRatio = parseFloat(root.dataset.recTopRatio) || 0;
  const trackTopPx = readLayoutNumber(root, 'trackTopPx', heroBottomPx);
  const trackLeftPx = readLayoutNumber(root, 'trackLeftPx', 6);
  const heroTopOffsetPx = readLayoutNumber(root, 'heroTopOffsetPx', 0);
  const tabsBottomGapPx = readLayoutNumber(root, 'tabsBottomGapPx', 52);
  const sectionFadeTopPx = readLayoutNumber(root, 'sectionFadeTopPx', 718);
  const sectionFadeHeightPx = readLayoutNumber(root, 'sectionFadeHeightPx', 120);
  const whitePanelWidthInsetPx = readLayoutNumber(root, 'whitePanelWidthInsetPx', 12);
  const whitePanelTopRadiusPx = readLayoutNumber(root, 'whitePanelTopRadiusPx', 18);
  const whitePanelHeightPx = readLayoutNumber(root, 'whitePanelHeightPx', 70);
  const whitePanelGapFromTabsBottomPx = readLayoutNumber(root, 'whitePanelGapFromTabsBottomPx', 16);
  const whitePanelFullWidth = root.dataset.whitePanelFullWidth === 'true';
  const whitePanelExtendToBottom = root.dataset.whitePanelExtendToBottom === 'true';
  const whitePanelExtendOnReviewsOnly = root.dataset.whitePanelExtendOnReviewsOnly === 'true';
  const whitePanelBottomRadiusPx = readLayoutNumber(root, 'whitePanelBottomRadiusPx', 0);
  const trackActiveShiftPx = readLayoutNumber(root, 'trackActiveShiftPx', 12);
  const trackActiveShiftId = root.dataset.trackActiveShiftId || 'v5';
  const tabsLeftRatio = parseFloat(root.dataset.tabsLeftRatio) || 103 / REC_DESIGN_W;
  const tabsWidthRatio = parseFloat(root.dataset.tabsWidthRatio) || 392 / REC_DESIGN_W;
  const tabHeightRatio = parseFloat(root.dataset.tabHeightRatio) || 54.5 / REC_DESIGN_W;

  const padLeft = readLayoutNumber(root, 'padLeft', 26);
  const padRight = readLayoutNumber(root, 'padRight', 24);
  const gapMainLabel = readLayoutNumber(root, 'gapMainLabel', 22);
  const gapLabelList = readLayoutNumber(root, 'gapLabelList', 20);
  const gapItem = readLayoutNumber(root, 'gapItem', 12);
  const labelW = readLayoutNumber(root, 'labelW', 36);
  const thumbSize = readLayoutNumber(root, 'thumbSize', 100);
  const thumbRadius = readLayoutNumber(root, 'thumbRadius', 18);
  const specTagGapPx = readLayoutNumber(root, 'specTagGapPx', 24);
  const specTagWidthPx = readLayoutNumber(root, 'specTagWidthPx', 76);
  const specTagHeightPx = readLayoutNumber(root, 'specTagHeightPx', 40);
  const specTagRadiusPx = readLayoutNumber(root, 'specTagRadiusPx', 20);
  const reviewsPanelWidthPx = readLayoutNumber(root, 'reviewsPanelWidthPx', 738);
  const reviewsPanelAspectW = readLayoutNumber(root, 'reviewsPanelAspectW', 1021);
  const reviewsPanelAspectH = readLayoutNumber(root, 'reviewsPanelAspectH', 1024);
  const tabBarRadiusPx = readLayoutNumber(root, 'tabBarRadiusPx', 26);
  const tabPillTopPx = readLayoutNumber(root, 'tabPillTopPx', 4);
  const tabPillHeightPx = readLayoutNumber(root, 'tabPillHeightPx', 44);
  const tabPillRadiusPx = readLayoutNumber(root, 'tabPillRadiusPx', 28);
  const tabFontSizePx = readLayoutNumber(root, 'tabFontSizePx', 24);
  const tabLineHeightPx = readLayoutNumber(root, 'tabLineHeightPx', 40);
  const tabBlurPx = readLayoutNumber(root, 'tabBlurPx', 16.32);
  const demoStyleHoldMs = readLayoutNumber(root, 'demoStyleHoldMs', 1600);
  const reviewsPanelOffsetYPx = readLayoutNumber(root, 'reviewsPanelOffsetYPx', -48);
  const mainHeroScale = readLayoutNumber(root, 'mainHeroScale', 1);
  const heroWidthBasePx = readLayoutNumber(root, 'heroWidthBasePx', 0);
  const heroAlignTop = root.dataset.heroAlignTop === 'true';
  const mediaTabsRoot = root.querySelector('[data-pdp-flowers-media-tabs]');
  const mediaTabButtons = mediaTabsRoot ? [...mediaTabsRoot.querySelectorAll('[data-pdp-flowers-media-tab]')] : [];
  const mediaTabPill = root.querySelector('[data-pdp-flowers-media-tabs-pill]');
  const tabContentLayer = root.querySelector('[data-pdp-flowers-tab-content-layer]');
  const reviewsLayer = root.querySelector('[data-pdp-flowers-reviews-layer]');
  const tabContentSlots = tabContentLayer ? [...tabContentLayer.querySelectorAll('[data-pdp-flowers-tab-slot]')] : [];
  const tabContents = [
    ...(tabContentLayer ? [...tabContentLayer.querySelectorAll('[data-pdp-flowers-tab-content]')] : []),
    ...(reviewsLayer ? [...reviewsLayer.querySelectorAll('[data-pdp-flowers-tab-content]')] : []),
  ];

  const heroLayer = root.querySelector('.pdp-flowers-rec__hero-layer');
  const styleTabBtn = mediaTabButtons.find((btn) => btn.dataset.pdpFlowersMediaTab === 'style');
  const styleSubEl = styleTabBtn?.querySelector('.pdp-flowers-rec__media-tab-style-sub');
  const defaultStyleSub = styleSubEl?.textContent?.trim() || '1/3';
  const specLabelEl = root.querySelector('[data-pdp-flowers-spec-label]');
  const specTagImg = root.querySelector('[data-pdp-flowers-tab-content="style"]');
  const specTagWrap = root.querySelector('.pdp-flowers-rec__spec-tag-wrap');
  const specTagSlot = root.querySelector('[data-pdp-flowers-tab-slot="style"]');
  let styleSpecLabels = {};
  try {
    styleSpecLabels = JSON.parse(decodeURIComponent(root.dataset.styleSpecLabels || '{}'));
  } catch {
    styleSpecLabels = {};
  }

  const buildStyleThumbIds = () => {
    const hasMain = thumbs.some((t) => t.dataset.pdpFlowersThumb === 'main');
    if (hasMain && variantThumbs.length <= 2) {
      return ['main', ...variantThumbs.slice(0, 2).map((t) => t.dataset.pdpFlowersThumb)].slice(0, 3);
    }
    return variantThumbs.slice(0, 3).map((t) => t.dataset.pdpFlowersThumb);
  };

  const styleThumbIds = buildStyleThumbIds();
  const swipeSteps = [
    { tab: 'images', thumbId: 'main' },
    ...styleThumbIds.map((thumbId, index) => ({
      tab: 'style',
      thumbId,
      styleIndex: index + 1,
      styleTotal: styleThumbIds.length,
    })),
    ...(reviewsLayer ? [{ tab: 'reviews' }] : []),
  ];

  let swipeIndex = 0;
  let autoTimer = null;
  let thumbIndex = -1;
  let activeMediaTabId = 'images';
  let dragStartX = 0;
  let dragging = false;
  const SWIPE_THRESHOLD = 36;

  const scalePx = (vw, n) => (vw * n) / designW;

  const updateStyleTabLabel = (step) => {
    if (!styleSubEl) return;
    if (step?.tab === 'style' && step.styleIndex) {
      styleSubEl.textContent = `${step.styleIndex}/${step.styleTotal}`;
      return;
    }
    styleSubEl.textContent = defaultStyleSub;
  };

  const updateSpecLabel = (styleIndex) => {
    const label = styleIndex ? styleSpecLabels[String(styleIndex)] : null;
    const useText = Boolean(label);
    const showImage = Boolean(styleIndex && !useText);

    if (specTagWrap) {
      specTagWrap.classList.toggle('is-text-mode', useText);
      specTagWrap.classList.toggle('is-image-mode', showImage);
    }

    if (specLabelEl) {
      if (useText) {
        specLabelEl.textContent = label;
        specLabelEl.hidden = false;
        specLabelEl.setAttribute('aria-hidden', 'false');
      } else {
        specLabelEl.textContent = '';
        specLabelEl.hidden = true;
        specLabelEl.setAttribute('aria-hidden', 'true');
      }
    }

    if (specTagImg) {
      specTagImg.hidden = !showImage;
      specTagImg.style.display = showImage ? 'block' : 'none';
    }

    if (specTagSlot) {
      if (useText && label) {
        const vw = scroller?.clientWidth || 260;
        const fontSize = scalePx(vw, tabFontSizePx);
        const padX = scalePx(vw, 32);
        const minW = scalePx(vw, specTagWidthPx);
        let textW = label.length * fontSize * 0.92;
        if (typeof document !== 'undefined') {
          const canvas = updateSpecLabel._canvas || (updateSpecLabel._canvas = document.createElement('canvas'));
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.font = `500 ${fontSize}px "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif`;
            textW = ctx.measureText(label).width;
          }
        }
        specTagSlot.style.width = `${Math.ceil(Math.max(minW, textW + padX))}px`;
      } else {
        specTagSlot.style.width = '';
      }
    }
  };

  const setHero = (id) => {
    heroes.forEach((h) => h.classList.toggle('is-active', h.dataset.pdpFlowersHero === id));
  };

  const setThumbActive = (id) => {
    thumbs.forEach((t) => t.classList.toggle('is-active', t.dataset.pdpFlowersThumb === id));
    if (id === 'main') thumbIndex = -1;
    else thumbIndex = Math.max(0, variantThumbs.findIndex((t) => t.dataset.pdpFlowersThumb === id));
    alignTrack(id);
  };

  const applySwipeStep = (index, { keepAuto = false } = {}) => {
    if (!swipeSteps.length) return;
    const nextIndex = ((index % swipeSteps.length) + swipeSteps.length) % swipeSteps.length;
    swipeIndex = nextIndex;
    const step = swipeSteps[nextIndex];
    setMediaTab(step.tab);
    if (step.tab === 'reviews') {
      updateStyleTabLabel(null);
      updateSpecLabel(null);
    } else if (step.tab === 'style') {
      setHero(step.thumbId);
      updateStyleTabLabel(step);
      updateSpecLabel(step.styleIndex);
    } else if (step.thumbId) {
      setVariant(step.thumbId, { keepTab: true, syncThumbs: true });
      updateStyleTabLabel(null);
      updateSpecLabel(null);
    }
    if (!keepAuto) stopAuto();
  };

  const goSwipeNext = () => applySwipeStep(swipeIndex + 1);
  const goSwipePrev = () => applySwipeStep(swipeIndex - 1);

  const applyScaleVars = (vw) => {
    root.style.setProperty('--pdp-flowers-rec-vw', `${vw}px`);
    root.style.setProperty('--pdp-flowers-rec-pad-left', `${scalePx(vw, padLeft)}px`);
    root.style.setProperty('--pdp-flowers-rec-pad-right', `${scalePx(vw, padRight)}px`);
    root.style.setProperty('--pdp-flowers-rec-gap-main-label', `${scalePx(vw, gapMainLabel)}px`);
    root.style.setProperty('--pdp-flowers-rec-gap-label-list', `${scalePx(vw, gapLabelList)}px`);
    root.style.setProperty('--pdp-flowers-rec-gap-item', `${scalePx(vw, gapItem)}px`);
    root.style.setProperty('--pdp-flowers-rec-label-w', `${scalePx(vw, labelW)}px`);
    root.style.setProperty('--pdp-flowers-rec-row-h', `${scalePx(vw, thumbSize)}px`);
    root.style.setProperty('--pdp-flowers-rec-thumb-size', `${scalePx(vw, thumbSize)}px`);
    root.style.setProperty('--pdp-flowers-rec-thumb-radius', `${scalePx(vw, thumbRadius)}px`);
    root.style.setProperty('--pdp-flowers-rec-tabs-width', `${tabsWidthRatio * 100}%`);
    root.style.setProperty('--pdp-flowers-rec-tabs-height', `${scalePx(vw, tabHeightRatio * designW)}px`);
    root.style.setProperty('--pdp-flowers-rec-tab-bar-radius', `${scalePx(vw, tabBarRadiusPx)}px`);
    root.style.setProperty('--pdp-flowers-rec-tab-pill-top', `${scalePx(vw, tabPillTopPx)}px`);
    root.style.setProperty('--pdp-flowers-rec-tab-pill-height', `${scalePx(vw, tabPillHeightPx)}px`);
    root.style.setProperty('--pdp-flowers-rec-tab-pill-radius', `${scalePx(vw, tabPillRadiusPx)}px`);
    root.style.setProperty('--pdp-flowers-rec-tab-font-size', `${scalePx(vw, tabFontSizePx)}px`);
    root.style.setProperty('--pdp-flowers-rec-tab-line-height', `${scalePx(vw, tabLineHeightPx)}px`);
    root.style.setProperty('--pdp-flowers-rec-tab-blur', `${scalePx(vw, tabBlurPx)}px`);
    root.style.setProperty('--pdp-flowers-rec-spec-tag-w', `${scalePx(vw, specTagWidthPx)}px`);
    root.style.setProperty('--pdp-flowers-rec-spec-tag-h', `${scalePx(vw, specTagHeightPx)}px`);
    root.style.setProperty('--pdp-flowers-rec-spec-tag-radius', `${scalePx(vw, specTagRadiusPx)}px`);
  };

  const alignMediaTabPill = () => {
    if (!mediaTabPill || !mediaTabButtons.length) return;
    const activeBtn = mediaTabButtons.find((btn) => btn.dataset.pdpFlowersMediaTab === activeMediaTabId) || mediaTabButtons[0];
    if (!activeBtn) return;
    mediaTabPill.style.width = `${activeBtn.offsetWidth}px`;
    mediaTabPill.style.transform = `translate(${activeBtn.offsetLeft}px, -50%)`;
  };

  const syncTabContent = () => {
    tabContentSlots.forEach((slot) => {
      const show = slot.dataset.pdpFlowersTabSlot === activeMediaTabId;
      slot.classList.toggle('is-visible', show);
    });
    if (reviewsLayer) {
      const showReviews = activeMediaTabId === 'reviews';
      reviewsLayer.classList.toggle('is-visible', showReviews);
      reviewsLayer.setAttribute('aria-hidden', showReviews ? 'false' : 'true');
    }
    if (tabContentLayer) {
      const showStyle = activeMediaTabId === 'style';
      tabContentLayer.setAttribute('aria-hidden', showStyle ? 'false' : 'true');
    }
    root.classList.toggle('is-reviews-tab', activeMediaTabId === 'reviews');
  };

  const setMediaTab = (id) => {
    if (!mediaTabButtons.length) return;
    if (activeMediaTabId === id) {
      alignMediaTabPill();
      return;
    }
    activeMediaTabId = id;
    mediaTabButtons.forEach((btn) => {
      const selected = btn.dataset.pdpFlowersMediaTab === id;
      btn.classList.toggle('is-active', selected);
      btn.setAttribute('aria-selected', selected ? 'true' : 'false');
    });
    alignMediaTabPill();
    syncTabContent();
    applyMetrics();
  };

  const getActiveThumbId = () => thumbs.find((t) => t.classList.contains('is-active'))?.dataset.pdpFlowersThumb || 'main';

  const alignTrack = (id) => {
    if (!track) return;
    const vw = scroller?.clientWidth || 260;
    const shift = id === trackActiveShiftId ? scalePx(vw, trackActiveShiftPx) : 0;
    track.style.transform = shift ? `translateX(-${shift}px)` : 'translateX(0)';
  };

  const applyMetrics = () => {
    if (!scroller) return;
    const vw = scroller.clientWidth;
    if (!vw) return;

    applyScaleVars(vw);

    const layoutH =
      page?.offsetHeight || (page?.naturalWidth ? (page.naturalHeight / page.naturalWidth) * vw : scroller.clientHeight);
    const tabH = scalePx(vw, tabHeightRatio * designW);
    const heroBottom = scalePx(vw, heroBottomPx);
    const trackTop = scalePx(vw, trackTopPx);
    const trackLeft = scalePx(vw, trackLeftPx);
    const recH = scalePx(vw, thumbSize);

    const navStartY = layoutH * navStartRatio;
    const statusBarBottom = layoutH * statusBarEndRatio;
    const tabsTrackGap = scalePx(vw, tabsGapPx);
    const tabsBottom = trackTop - tabsTrackGap;
    const tabsTop = tabsBottom - tabH;
    const heroShift = scalePx(vw, heroTopOffsetPx);
    const alignTop = navStartY;
    const navTop = alignTop;
    const heroLayerTop = alignTop;
    const heroImgTop = 0;
    const heroObjectY = heroShift;

    root.style.setProperty('--pdp-flowers-rec-status-bar-h', `${statusBarBottom}px`);
    root.style.setProperty('--pdp-flowers-rec-nav-top', `${navTop}px`);
    root.style.setProperty('--pdp-flowers-rec-nav-aspect-w', `${navAspectW}`);
    root.style.setProperty('--pdp-flowers-rec-nav-aspect-h', `${navAspectH}`);
    root.style.setProperty('--pdp-flowers-rec-hero-layer-top', `${heroLayerTop}px`);
    root.style.setProperty('--pdp-flowers-rec-hero-layer-h', `${Math.max(0, heroBottom - heroLayerTop)}px`);
    root.style.setProperty('--pdp-flowers-rec-hero-top', `${heroImgTop}px`);
    root.style.setProperty('--pdp-flowers-rec-hero-h', `${Math.max(0, heroBottom - heroLayerTop)}px`);
    root.style.setProperty('--pdp-flowers-rec-hero-object-y', `${heroObjectY}px`);
    root.style.setProperty('--pdp-flowers-rec-tabs-top', `${tabsTop}px`);
    const specTagGap = scalePx(vw, specTagGapPx);
    const specTagH = scalePx(vw, specTagHeightPx);
    root.style.setProperty('--pdp-flowers-rec-spec-tag-top', `${tabsTop - specTagGap - specTagH}px`);
    const heroLayerH = Math.max(0, heroBottom - heroLayerTop);
    root.style.setProperty('--pdp-flowers-rec-reviews-top', `${heroLayerTop}px`);
    root.style.setProperty('--pdp-flowers-rec-reviews-layer-h', `${heroLayerH}px`);
    root.style.setProperty('--pdp-flowers-rec-reviews-offset-y', `${scalePx(vw, reviewsPanelOffsetYPx)}px`);
    root.style.setProperty('--pdp-flowers-rec-main-hero-scale', `${mainHeroScale}`);
    root.style.setProperty('--pdp-flowers-rec-track-top', `${trackTop}px`);
    root.style.setProperty('--pdp-flowers-rec-track-left', `${trackLeft}px`);
    root.style.setProperty('--pdp-flowers-rec-track-h', `${recH}px`);

    const heroLayerHeight = Math.max(0, heroBottom - heroLayerTop);
    const heroWidthBase = heroWidthBasePx > 0 ? heroWidthBasePx : designW;
    heroes.forEach((hero) => {
      const customWidthPx = parseFloat(hero.dataset.heroWidthPx);
      if (Number.isFinite(customWidthPx) && customWidthPx > 0) {
        const displayW = (vw * customWidthPx) / heroWidthBase;
        const offsetRaw = parseFloat(hero.dataset.heroOffsetYPx);
        let offsetY = 0;
        if (Number.isFinite(offsetRaw)) {
          offsetY = scalePx(vw, offsetRaw);
        } else if (heroAlignTop) {
          offsetY = scalePx(vw, heroTopOffsetPx);
        }
        hero.style.width = `${displayW}px`;
        hero.style.left = '50%';
        hero.style.right = 'auto';
        hero.style.height = 'auto';
        hero.style.maxHeight = `${heroLayerHeight}px`;
        hero.style.objectFit = 'contain';
        if (heroAlignTop) {
          hero.style.objectPosition = 'top center';
          hero.style.top = '0';
          hero.style.transform = offsetY ? `translate(-50%, ${offsetY}px)` : 'translateX(-50%)';
        } else {
          hero.style.objectPosition = 'center center';
          hero.style.transform = offsetY
            ? `translate(-50%, calc(-50% + ${offsetY}px))`
            : 'translate(-50%, -50%)';
        }
      } else {
        hero.style.removeProperty('width');
        hero.style.removeProperty('left');
        hero.style.removeProperty('right');
        hero.style.removeProperty('height');
        hero.style.removeProperty('max-height');
        hero.style.removeProperty('object-fit');
        hero.style.removeProperty('object-position');
        hero.style.removeProperty('transform');
      }
    });

    root.style.setProperty('--pdp-flowers-rec-section-fade-h', `${scalePx(vw, sectionFadeHeightPx)}px`);
    root.style.setProperty('--pdp-flowers-rec-section-fade-top', `${scalePx(vw, sectionFadeTopPx)}px`);

    const whitePanelTop = tabsBottom + scalePx(vw, whitePanelGapFromTabsBottomPx);
    let whitePanelH = scalePx(vw, whitePanelHeightPx);
    const shouldExtendWhitePanel =
      whitePanelExtendToBottom ||
      (whitePanelExtendOnReviewsOnly && activeMediaTabId === 'reviews');
    if (shouldExtendWhitePanel) {
      whitePanelH = Math.max(whitePanelH, Math.max(0, layoutH - whitePanelTop));
    }
    const whitePanelSideInset = whitePanelFullWidth ? 0 : (vw / 260) * (whitePanelWidthInsetPx / 2);
    const whitePanelW = whitePanelFullWidth ? vw : Math.max(0, vw - (vw / 260) * whitePanelWidthInsetPx);
    root.style.setProperty('--pdp-flowers-rec-white-panel-top', `${whitePanelTop}px`);
    root.style.setProperty('--pdp-flowers-rec-white-panel-h', `${whitePanelH}px`);
    root.style.setProperty('--pdp-flowers-rec-white-panel-w', `${whitePanelW}px`);
    root.style.setProperty('--pdp-flowers-rec-white-panel-left', `${whitePanelSideInset}px`);
    root.style.setProperty('--pdp-flowers-rec-white-panel-radius', `${scalePx(vw, whitePanelTopRadiusPx)}px`);
    root.style.setProperty(
      '--pdp-flowers-rec-white-panel-bottom-radius',
      whitePanelBottomRadiusPx > 0 || shouldExtendWhitePanel
        ? `${scalePx(vw, whitePanelBottomRadiusPx > 0 ? whitePanelBottomRadiusPx : 16)}px`
        : '0px'
    );

    if (track) {
      track.style.removeProperty('top');
      track.style.removeProperty('left');
    }

    alignTrack(getActiveThumbId());
    alignMediaTabPill();
    if (activeMediaTabId === 'style') {
      const step = swipeSteps[swipeIndex];
      if (step?.styleIndex) updateSpecLabel(step.styleIndex);
    }
  };

  const setVariant = (id, { keepTab = false, syncThumbs = true } = {}) => {
    setHero(id);
    if (syncThumbs) setThumbActive(id);
    if (!keepTab && mediaTabButtons.length && activeMediaTabId !== 'images') {
      setMediaTab('images');
      updateStyleTabLabel(null);
      updateSpecLabel(null);
    }
  };

  const selectThumb = (id) => {
    stopAuto();
    swipeIndex = findSwipeIndexForTab('images');
    setMediaTab('images');
    setVariant(id, { keepTab: true, syncThumbs: true });
    updateStyleTabLabel(null);
    updateSpecLabel(null);
  };

  const findSwipeIndexForTab = (tabId) => {
    if (tabId === 'images') return swipeSteps.findIndex((s) => s.tab === 'images');
    if (tabId === 'style') return swipeSteps.findIndex((s) => s.tab === 'style' && s.styleIndex === 1);
    if (tabId === 'reviews') return swipeSteps.findIndex((s) => s.tab === 'reviews');
    return 0;
  };

  const findSwipeIndexForThumb = (thumbId) => findSwipeIndexForTab('images');

  const cycleSwipeNext = () => applySwipeStep(swipeIndex + 1, { keepAuto: true });

  const stopAuto = () => {
    if (autoTimer) window.clearInterval(autoTimer);
    autoTimer = null;
  };

  const startAutoCycle = (interval = 1200) => {
    stopAuto();
    autoTimer = window.setInterval(cycleSwipeNext, interval);
  };

  const startAuto = (interval = 1200) => {
    stopAuto();
    applySwipeStep(0, { keepAuto: true });
    startAutoCycle(interval);
  };

  const reset = () => {
    stopAuto();
    swipeIndex = 0;
    setVariant('main', { keepTab: true });
    setMediaTab('images');
    updateStyleTabLabel(null);
    updateSpecLabel(null);
    applyMetrics();
  };

  const bindSwipeTarget = (target) => {
    if (!target || target.dataset.pdpFlowersSwipeBound === 'true') return;
    target.dataset.pdpFlowersSwipeBound = 'true';
    target.style.pointerEvents = 'auto';
    target.style.touchAction = 'pan-y';
    target.style.cursor = 'grab';

    const finishDrag = (e) => {
      if (!dragging) return;
      dragging = false;
      target.classList.remove('is-dragging');
      const dx = e.clientX - dragStartX;
      if (Math.abs(dx) >= SWIPE_THRESHOLD) {
        stopAuto();
        if (dx < 0) goSwipeNext();
        else goSwipePrev();
      }
      if (target.hasPointerCapture?.(e.pointerId)) {
        target.releasePointerCapture(e.pointerId);
      }
    };

    target.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      dragging = true;
      dragStartX = e.clientX;
      target.classList.add('is-dragging');
      target.setPointerCapture(e.pointerId);
    });

    target.addEventListener('pointerup', finishDrag);
    target.addEventListener('pointercancel', finishDrag);
  };

  [heroLayer, reviewsLayer].filter(Boolean).forEach(bindSwipeTarget);

  mediaTabButtons.forEach((btn) => {
    const activateTab = () => {
      stopAuto();
      applySwipeStep(findSwipeIndexForTab(btn.dataset.pdpFlowersMediaTab));
    };
    btn.addEventListener('click', activateTab);
    btn.addEventListener('mouseenter', activateTab);
  });

  thumbs.forEach((thumb) => {
    const id = thumb.dataset.pdpFlowersThumb;
    thumb.addEventListener('click', () => selectThumb(id));
    thumb.addEventListener('mouseenter', () => selectThumb(id));
    thumb.addEventListener('mouseleave', (e) => {
      if (e.relatedTarget?.closest('[data-pdp-flowers-thumb]')) return;
      startAutoCycle(1200);
    });
  });

  if (page) {
    const onReady = () => applyMetrics();
    if (page.complete) onReady();
    else page.addEventListener('load', onReady, { once: true });
  }

  tabContents.forEach((img) => {
    const onImgReady = () => applyMetrics();
    if (img.complete) onImgReady();
    else img.addEventListener('load', onImgReady, { once: true });
  });

  if (typeof ResizeObserver !== 'undefined' && scroller) {
    new ResizeObserver(applyMetrics).observe(scroller);
  }

  reset();

  syncTabContent();
  alignMediaTabPill();

  heroes.forEach((hero) => {
    if (hero.loading === 'lazy') hero.loading = 'eager';
  });

  return { reset, setVariant, setMediaTab, cycleNext: cycleSwipeNext, startAuto, stopAuto, applyMetrics, goSwipeNext, goSwipePrev };
}

export function bindPdpFlowersRecommendDemoRoots() {
  document.querySelectorAll('.pdp-flowers-rec[data-pdp-flowers-pdp]').forEach((root) => {
    if (root.dataset.pdpFlowersRecBound === 'true') return;
    root.dataset.pdpFlowersRecBound = 'true';
    root.__pdpFlowersController = createFlowersRecommendController(root);
  });
}
