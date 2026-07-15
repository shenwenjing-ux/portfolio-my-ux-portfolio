import {
  site as rawSite,
  catalog as rawCatalog,
  projects as rawProjects,
} from './data/portfolio.js';
import { assetUrl, bindAssetImageRetry, ensureTrailingSlash, resolveAssetPaths } from './utils/assetUrl.js';
import {
  bindPdpFlowersPdpDemo,
  renderPdpFlowersPdpDemo,
} from './pdp-flowers-scroll-demo.js';
import {
  bindPdpFlowersRecommendDemoRoots,
  renderPdpFlowersRecommendDemo,
} from './pdp-flowers-recommend-demo.js';
import {
  bindPdpPathDemo,
  PDP_DEMO_LOOP_PAUSE_MS,
  PDP_DEMO_RING_HOLD_MS,
  renderPdpPathDemo,
  renderPdpPathDemoGallery,
} from './pdp-path-demo.js';
import { renderMockupImg } from './pdp-mockup-image.js';
import './styles/main.css';
import './styles/pdp-flowers-recommend-demo.css';

ensureTrailingSlash();

const site = resolveAssetPaths(rawSite);
const catalog = resolveAssetPaths(rawCatalog);
const projects = resolveAssetPaths(rawProjects);

const state = {
  navScrolled: false,
};

function sectionAnchor(projectId, index) {
  return `${projectId}-section-${index}`;
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function metricDecimals(value) {
  return Number.isInteger(value) ? 0 : 2;
}

function metricCountAttrs(m) {
  if (m.placeholder || m.text || m.value === undefined) return '';
  return `data-count="${m.value}" data-suffix="${m.suffix || ''}" data-decimals="${metricDecimals(m.value)}"`;
}

function formatMetricDisplay(m) {
  if (m.placeholder) return '—';
  if (m.text && m.value === undefined) return m.text;
  const decimals = metricDecimals(m.value);
  const num = decimals > 0 ? Number(m.value).toFixed(decimals) : String(m.value);
  return `${num}${m.suffix || ''}`;
}

function getCatalogMetrics(project) {
  if (project.metricGroups?.[0]?.metrics?.length) {
    return project.metricGroups[0].metrics.slice(0, 3);
  }
  return (project.metrics ?? []).slice(0, 3);
}

function renderMiniMetric(m) {
  return `
    <div class="mini-metric">
      <div class="mini-metric__value">
        <strong ${metricCountAttrs(m)}>${formatMetricDisplay(m)}</strong>
        ${m.unit ? `<small>${m.unit}</small>` : ''}
      </div>
      <span class="mini-metric__label">${m.label}</span>
    </div>
  `;
}

function renderCatalogCover(project) {
  if (project.id === 'pdp-redesign' && project.heroShowcase?.length >= 2) {
    const deviceClasses = ['catalog-card__device--food', 'catalog-card__device--flowers'];
    return `
      <div class="catalog-card__cover-showcase catalog-card__cover-showcase--pdp">
        <div class="catalog-card__cover-showcase-bg" aria-hidden="true">
          <span class="catalog-card__orb catalog-card__orb--pink"></span>
          <span class="catalog-card__orb catalog-card__orb--warm"></span>
          <span class="catalog-card__orb catalog-card__orb--accent-soft"></span>
        </div>
        ${project.heroShowcase
          .slice(0, 2)
          .map(
            (item, index) => `
          <figure class="catalog-card__device ${deviceClasses[index] || ''}">
            <img src="${item.src}" alt="${item.alt}" loading="lazy" />
          </figure>`,
          )
          .join('')}
      </div>
    `;
  }

  if (project.cover) {
    return `<img src="${project.cover}" alt="${project.title}" loading="lazy" />`;
  }

  return `<div class="catalog-card__cover-placeholder"><span>Case 03</span></div>`;
}

function renderMetricStat(m) {
  const trendIcon = m.trend === 'up' ? '↑' : m.trend === 'down' ? '↓' : '';
  return `
    <div class="metrics-stat">
      <div class="metrics-stat__value">
        <span ${metricCountAttrs(m)}>${formatMetricDisplay(m)}</span>
        ${m.unit ? `<small>${m.unit}</small>` : ''}
        ${trendIcon ? `<span class="metrics-stat__trend metrics-stat__trend--${m.trend}">${trendIcon}</span>` : ''}
      </div>
      <div class="metrics-stat__label">${m.label}</div>
    </div>
  `;
}

function renderMetricsText(text, type = 'intro') {
  return `<p class="metrics-panel__text metrics-panel__text--${type}">${text}</p>`;
}

function renderMetricsStats(metrics, columns = 4) {
  if (!metrics?.length) return '';
  return `
    <div class="metrics-panel__stats" style="--stat-cols: ${columns}">
      ${metrics.map(renderMetricStat).join('')}
    </div>
  `;
}

function renderMetricsGroups(groups, usePanelStyle = false) {
  const groupTitleClass = usePanelStyle ? 'background-panel__section-title' : 'metrics-panel__group-title';

  return groups
    .map(
      (group) => `
      <div class="metrics-panel__group">
        ${usePanelStyle ? `<h4 class="${groupTitleClass}">${group.title}</h4>` : `<p class="${groupTitleClass}">${group.title}</p>`}
        ${renderMetricsStats(group.metrics, group.columns || group.metrics.length)}
      </div>
    `
    )
    .join('');
}

function renderSplitTitle(parts) {
  return `
    <div class="analysis-card__heading analysis-card__heading--split">
      ${parts
        .map(
          (part, i) => `
        ${i > 0 ? '<span class="analysis-card__heading-sep" aria-hidden="true"></span>' : ''}
        <span>${part}</span>
      `
        )
        .join('')}
    </div>
  `;
}

function renderAnalysisCategory(cat) {
  const heading = cat.titleParts?.length
    ? renderSplitTitle(cat.titleParts)
    : `<strong class="analysis-card__heading">${cat.title}</strong>`;

  return `
    <div class="analysis-card analysis-card--deck">
      <span class="analysis-card__watermark">${cat.index}</span>
      ${cat.badge ? `<span class="analysis-card__badge">${cat.badge}</span>` : ''}
      <div class="analysis-card__body">
        ${heading}
        <ul class="analysis-card__list">
          ${cat.items.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

function renderAnalysisMetric(item) {
  const label = typeof item === 'string' ? item : item.label;
  const trend = typeof item === 'object' ? item.trend : '';
  const trendIcon = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '';

  return `
    <div class="analysis-card analysis-card--light analysis-card--metric">
      <div class="analysis-card__body">
        <p class="analysis-metric-item">
          <span class="analysis-metric-item__label">${label}</span>
          ${trendIcon ? `<span class="analysis-metric-item__trend" aria-hidden="true">${trendIcon}</span>` : ''}
        </p>
      </div>
    </div>
  `;
}

function renderDesignSlideFigure(slide, header) {
  const maskedMedia = header && header.maskHeader !== false;

  return `
    <figure class="project-section__figure project-section__figure--design">
      ${renderDesignSlideMedia(slide, maskedMedia)}
    </figure>
  `;
}

function renderDesignSlideMedia(slide, maskedMedia) {
  if (maskedMedia) {
    return `
      <div class="design-slide-media design-slide-media--masked">
        <img src="${slide.src}" alt="${slide.alt}" loading="lazy" />
      </div>`;
  }

  return `<img src="${slide.src}" alt="${slide.alt}" loading="lazy" />`;
}

function renderPanelHead(index, title) {
  return `
    <header class="background-panel__head">
      <span class="background-panel__index">${index}</span>
      <h3 class="background-panel__title">${title}</h3>
    </header>
  `;
}

function renderStrategyBlock(project) {
  if (!project.strategies?.length) return '';

  return `
        <section class="analysis-block analysis-block--strategies reveal">
          <h3 class="project-content-title">关键策略</h3>
          <div class="analysis-card-grid analysis-card-grid--2">
            ${project.strategies
              .map(
                (strategy, strategyIndex) => `
              <div
                class="analysis-card analysis-card--light analysis-card--strategy"
                data-strategy-index="${strategyIndex}"
              >
                <div class="analysis-card__body">
                  <strong class="analysis-card__heading">${strategy.title}</strong>
                  <ul class="analysis-card__list">
                    ${strategy.items
                      .map(
                        (item, itemIndex) => `
                      <li data-strategy-item-index="${itemIndex}">${item}</li>
                    `
                      )
                      .join('')}
                  </ul>
                </div>
              </div>
            `
              )
              .join('')}
          </div>
        </section>`;
}

function groupDesignSlides(section) {
  const groups = [];

  section.slides.forEach((slide, slideIndex) => {
    const header = section.designHeaders?.[slideIndex];
    const subtitle = header?.subtitle ?? '';
    const lastGroup = groups[groups.length - 1];

    if (lastGroup && lastGroup.subtitle === subtitle) {
      lastGroup.slides.push({ slide, slideIndex, header });
    } else {
      groups.push({ subtitle, slides: [{ slide, slideIndex, header }] });
    }
  });

  return groups;
}

function renderDesignFirstPageHeader(group) {
  const firstHeader = group.slides[0]?.header;
  if (!firstHeader?.subtitle) return '';

  const firstStrategy = firstHeader.strategies?.[0];
  const strategyLine = firstStrategy
    ? `<p class="design-section-header__strategy-line">${firstStrategy.label}：${firstStrategy.text}</p>`
    : '';

  return `
    <div class="design-section-header design-section-header--group-start reveal" data-design-page-header>
      <p class="design-section-header__group-title design-section-header__group-title--section">${firstHeader.subtitle}</p>
      ${strategyLine}
    </div>
  `;
}

function renderDesignStickyBar(section = {}) {
  if (section.stickyMode === 'invite-title') {
    return `
    <div class="design-sticky-bar design-sticky-bar--invite-title" data-design-sticky-source data-sticky-mode="invite-title" aria-live="polite" aria-hidden="true">
      <div class="design-sticky-bar__inner">
        <div class="design-sticky-bar__title-viewport" data-sticky-strategy-viewport>
          <span class="design-sticky-bar__title-track" data-sticky-strategy-track></span>
        </div>
      </div>
    </div>`;
  }

  return `
    <div class="design-sticky-bar" data-design-sticky-source data-sticky-mode="strategy" aria-live="polite" aria-hidden="true">
      <div class="design-sticky-bar__inner">
        <strong class="design-sticky-bar__subtitle" data-sticky-subtitle></strong>
        <p class="design-sticky-bar__strategy">
          <span class="design-sticky-bar__strategy-prefix">策略</span><span class="design-sticky-bar__strategy-viewport" data-sticky-strategy-viewport>
            <span class="design-sticky-bar__strategy-track" data-sticky-strategy-track></span>
          </span>
        </p>
      </div>
    </div>
  `;
}

function getStickyStrategyIndexPart(label) {
  const match = label.match(/^策略(\d+)$/);
  return match ? `${match[1]}：` : label ? `${label}：` : '';
}

function createStickyStrategyBody(slide) {
  const body = document.createElement('span');
  body.className = 'design-sticky-bar__strategy-body design-sticky-bar__scroll-body';

  const indexPart = getStickyStrategyIndexPart(slide.dataset.stickyLabel || '');
  if (indexPart) {
    const indexSpan = document.createElement('span');
    indexSpan.className = 'design-sticky-bar__strategy-index';
    indexSpan.textContent = indexPart;
    body.appendChild(indexSpan);
  }

  const textSpan = document.createElement('span');
  textSpan.className = 'design-sticky-bar__strategy-text';
  textSpan.textContent = slide.dataset.stickyStrategy || '';
  body.appendChild(textSpan);

  return body;
}

function createStickyInviteTitleBody(slide) {
  const body = document.createElement('span');
  body.className = 'design-sticky-bar__invite-body design-sticky-bar__scroll-body';
  body.textContent = slide.dataset.stickySubtitle || '';
  return body;
}

function createStickyBarBody(slide, mode = 'strategy') {
  return mode === 'invite-title' ? createStickyInviteTitleBody(slide) : createStickyStrategyBody(slide);
}

function renderDesignGroupHeader(section, group, groupIndex, options = {}) {
  const { isStickyHeader = false } = options;
  if (section.hideDesignHeaders) {
    return groupIndex === 0 ? renderDesignFirstPageHeader(group) : '';
  }

  const strategies = group.slides.flatMap(({ header }) => header?.strategies || []);
  const strategyLines = strategies
    .map(
      (strategy) => `
      <p class="design-section-header__strategy-line">${strategy.label}：${strategy.text}</p>
    `
    )
    .join('');

  if (!group.subtitle && !strategyLines) return '';

  if (section.panelIndex) {
    if (!group.subtitle) return '';

    return `
    <div class="design-section-header design-section-header--group-start"${isStickyHeader ? ' data-design-page-header' : ''}>
      <h4 class="background-panel__section-title">${group.subtitle}</h4>
      ${strategyLines}
    </div>`;
  }

  const useSectionTitle = Boolean(section.designSectionTitle);

  const titleBlock = useSectionTitle
    ? group.subtitle
      ? `<p class="design-section-header__group-title design-section-header__group-title--section">${group.subtitle}</p>`
      : ''
    : group.subtitle
      ? `<p class="design-section-header__group-title design-section-header__group-title--section">${group.subtitle}</p>`
      : groupIndex === 0
        ? `
      <div class="design-section-header__title-line">
        <h3 class="project-content-title">${section.label}</h3>
      </div>`
        : '';

  if (!titleBlock && !strategyLines) return '';

  return `
    <div class="design-section-header design-section-header--group-start">
      ${titleBlock}
      ${strategyLines}
    </div>
  `;
}

function renderDesignSectionGrouped(section, sectionId, project) {
  const groups = groupDesignSlides(section);
  const sectionTitleHtml =
    section.panelIndex && section.designSectionTitle
      ? renderPanelHead(section.panelIndex, section.designSectionTitle)
      : section.designSectionTitle
        ? `
      <div class="design-section-heading">
        <h3 class="project-content-title">${section.designSectionTitle}</h3>
      </div>`
        : section.hideDesignHeaders && section.label
          ? `
      <div class="design-section-title-block reveal">
        <h3 class="project-content-title">${section.label}</h3>
      </div>`
          : '';

  return `
    <div class="design-section-inner design-section-inner--grouped project-content-inner${section.stickyStrategies ? ' design-section-inner--sticky-strategies' : ''}">
      ${sectionTitleHtml}
      ${section.stickyStrategies ? renderDesignStickyBar(section) : ''}
      ${(() => {
        let stickyHeaderMarked = false;
        return groups
        .map(
          (group, groupIndex) => {
            const isStickyHeader = Boolean(
              section.stickyStrategies && group.subtitle && !stickyHeaderMarked
            );
            if (isStickyHeader) stickyHeaderMarked = true;

            return `
      <div class="design-section-group${groupIndex > 0 ? ' design-section-group--spaced' : ''}">
        ${renderDesignGroupHeader(section, group, groupIndex, { isStickyHeader })}
        <div class="design-section-group__slides">
          ${group.slides
            .map(({ slide, slideIndex, header }) => {
              const stickyStrategy = header?.strategies?.[0];
              const stickyAttrs = section.stickyStrategies
                ? `
            data-design-slide
            data-sticky-subtitle="${escapeAttr(header?.subtitle ?? '')}"${
                    section.stickyMode === 'invite-title'
                      ? ''
                      : `
            data-sticky-label="${escapeAttr(stickyStrategy?.label ?? '')}"
            data-sticky-strategy="${escapeAttr(stickyStrategy?.text ?? '')}"`
                  }`
                : '';

              return `
          <div
            class="design-slide design-slide--grouped"
            id="${sectionId}-slide-${slideIndex}"${stickyAttrs}
          >
            ${renderDesignSlideFigure(slide, header)}
          </div>`;
            })
            .join('')}
        </div>
      </div>`;
          }
        )
        .join('');
      })()}
    </div>
  `;
}

function renderDesignCatalogLabel(group) {
  return group.subtitle || '效果总览';
}

function renderDesignSectionCatalog(section, sectionId) {
  const groups = groupDesignSlides(section);
  const sectionTitleHtml = section.designSectionTitle
    ? `
      <div class="design-section-heading">
        <h3 class="project-content-title">${section.designSectionTitle}</h3>
      </div>`
    : '';

  const catalogHtml = `
    <nav class="design-section-catalog" aria-label="方案策略目录">
      <p class="design-section-catalog__eyebrow">策略目录</p>
      <div class="design-section-catalog__groups">
        ${groups
          .map((group) => {
            const groupLabel = renderDesignCatalogLabel(group);
            const firstSlideId = `${sectionId}-slide-${group.slides[0].slideIndex}`;

            return `
        <div class="design-section-catalog__group">
          <a href="#${firstSlideId}" class="design-section-catalog__group-link">${groupLabel}</a>
          ${
            group.slides.length > 1
              ? `
          <ul class="design-section-catalog__items">
            ${group.slides
              .map(
                ({ slideIndex }) => `
              <li>
                <a href="#${sectionId}-slide-${slideIndex}" class="design-section-catalog__item-link">
                  方案 ${slideIndex + 1}
                </a>
              </li>`
              )
              .join('')}
          </ul>`
              : ''
          }
        </div>`;
          })
          .join('')}
      </div>
    </nav>`;

  const streamHtml = `
    <div class="design-section-stream">
      ${section.slides
        .map((slide, slideIndex) => {
          const header = section.designHeaders?.[slideIndex];
          const maskedMedia = header && header.maskHeader !== false;

          return `
      <figure
        id="${sectionId}-slide-${slideIndex}"
        class="design-section-stream__figure project-section__figure project-section__figure--design"
      >
        ${renderDesignSlideMedia(slide, maskedMedia)}
      </figure>`;
        })
        .join('')}
    </div>`;

  return `
    <div class="design-section-inner design-section-inner--catalog project-content-inner">
      ${sectionTitleHtml}
      ${catalogHtml}
      ${streamHtml}
    </div>
  `;
}

function renderDesignSlide(section, slide, slideIndex, header) {
  const headerHtml = header ? renderDesignSectionHeader(section, header, slideIndex) : '';

  return `
    <div class="design-slide">
      ${headerHtml}
      ${renderDesignSlideFigure(slide, header)}
    </div>
  `;
}

function renderDesignSection(section, sectionId, project) {
  if (section.designLayout === 'grouped') {
    return renderDesignSectionGrouped(section, sectionId, project);
  }

  if (section.designLayout === 'catalog') {
    return renderDesignSectionCatalog(section, sectionId);
  }

  const sectionTitleHtml = section.designSectionTitle
    ? `
      <div class="design-section-heading">
        <h3 class="project-content-title">${section.designSectionTitle}</h3>
      </div>`
    : '';

  return `
    <div class="design-section-inner project-content-inner">
      ${sectionTitleHtml}
      ${section.slides
        .map((slide, slideIndex) => {
          const header = section.designHeaders?.[slideIndex];
          return renderDesignSlide(section, slide, slideIndex, header);
        })
        .join('')}
    </div>
  `;
}

function renderDesignSectionHeader(section, header, slideIndex) {
  if (!header) return '';

  const headers = section.designHeaders;

  const prevHeader = slideIndex > 0 ? headers[slideIndex - 1] : null;
  const showTitleLine = !prevHeader || header.subtitle !== prevHeader.subtitle;
  const useSectionTitle = Boolean(section.designSectionTitle);

  if (!header.subtitle && !header.strategies?.length) return '';
  if (!showTitleLine && !header.strategies?.length) return '';

  const strategyLines = (header.strategies || [])
    .map(
      (strategy) => `
      <p class="design-section-header__strategy-line">${strategy.label}：${strategy.text}</p>
    `
    )
    .join('');

  const headerClass = [
    'design-section-header',
    !useSectionTitle && slideIndex === 0
      ? 'design-section-header--lead'
      : showTitleLine
        ? 'design-section-header--group-start'
        : 'design-section-header--compact',
  ].join(' ');

  const titleBlock = showTitleLine
    ? useSectionTitle
      ? header.subtitle
        ? `<p class="design-section-header__group-title">${header.subtitle}</p>`
        : ''
      : `
      <div class="design-section-header__title-line">
        <h3 class="project-content-title">${section.label}</h3>
        ${header.subtitle ? `<p class="project-content-subtitle">${header.subtitle}</p>` : ''}
      </div>`
    : header.subtitle
      ? `<p class="design-section-header__subtitle-continued">${header.subtitle}</p>`
      : '';

  return `
    <div class="${headerClass}">
      ${titleBlock}
      ${strategyLines}
    </div>
  `;
}

function renderBackgroundPanel(project) {
  const panel = project.backgroundPanel;
  if (!panel) return '';

  if (panel.layout === 'help-journey') {
    return renderHelpBackgroundPanel(project);
  }

  if (panel.layout === 'pdp-goals') {
    return renderPdpGoalsPanel(project);
  }

  const goalsHtml = panel.goals
    .map(
      (goal) => `
      <div class="background-panel__goal">
        <h4 class="background-panel__goal-title">${goal.title}</h4>
        <p class="background-panel__goal-text">${goal.text}</p>
      </div>
    `
    )
    .join('');

  const stepsHtml = panel.strategySteps
    .map(
      (step) => `
      <div class="background-panel__step">
        <div class="background-panel__step-head">
          <span class="background-panel__step-index">${step.index}</span>
          <h4 class="background-panel__step-title">${step.title}</h4>
        </div>
        <ul class="background-panel__step-list">
          ${step.items.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `
    )
    .join('');

  const principlesHtml = panel.principles
    .map(
      (principle) => `
      <div class="background-panel__principle">
        <h4 class="background-panel__principle-title">${principle.title}</h4>
        <ul class="background-panel__principle-list">
          ${principle.items.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `
    )
    .join('');

  return `
    <div class="background-panel">
      <div class="background-panel__inner project-content-inner">
        ${renderSubnavRevealMarker(project)}
        <header class="background-panel__head reveal">
          <span class="background-panel__index">${panel.index}</span>
          <h3 class="background-panel__title">${panel.title}</h3>
        </header>
        ${project.background ? `<p class="background-panel__intro reveal">${project.background}</p>` : ''}
        <div class="background-panel__goals reveal">
          ${goalsHtml}
        </div>
        <div class="background-panel__strategy reveal">
          <div class="background-panel__strategy-label">${panel.strategyLabel}</div>
          <div class="background-panel__strategy-steps">
            ${stepsHtml}
          </div>
        </div>
        <section class="background-panel__section reveal">
          <h4 class="background-panel__section-title">设计原则</h4>
          <div class="background-panel__principles">
            ${principlesHtml}
          </div>
        </section>
        <section class="background-panel__section reveal">
          <h4 class="background-panel__section-title">关键策略</h4>
          <p class="background-panel__key-strategies">${panel.keyStrategies.join(' | ')}</p>
        </section>
      </div>
    </div>
  `;
}

function renderPdpHero(project) {
  const showcase = project.heroShowcase || [];
  const deviceClasses = ['pdp-hero__device--flowers', 'pdp-hero__device--food'];
  const showcaseHtml =
    showcase.length >= 2
      ? `
      <div class="pdp-hero__showcase reveal">
        <div class="pdp-hero__showcase-bg" aria-hidden="true">
          <span class="pdp-hero__orb pdp-hero__orb--pink"></span>
          <span class="pdp-hero__orb pdp-hero__orb--warm"></span>
          <span class="pdp-hero__orb pdp-hero__orb--accent-soft"></span>
        </div>
        ${showcase
          .map(
            (item, index) => `
        <figure class="pdp-hero__device ${deviceClasses[index] || ''}">
          <img src="${item.src}" alt="${item.alt}" loading="eager" />
        </figure>`
          )
          .join('')}
        <span class="pdp-hero__float pdp-hero__float--grid" aria-hidden="true"></span>
        <span class="pdp-hero__float pdp-hero__float--accent" aria-hidden="true"></span>
      </div>
    `
      : '';

  return `
    <div class="pdp-hero">
      <div class="pdp-hero__grid project-content-inner">
        <div class="pdp-hero__copy reveal">
          <p class="pdp-hero__eyebrow">${project.category}</p>
          <h2 class="pdp-hero__title">商详<span class="pdp-highlight">改版</span>优化</h2>
          ${renderHeroTags(project.heroTags)}
          <p class="pdp-hero__summary">${project.summary}</p>
        </div>
        ${showcaseHtml}
      </div>
    </div>
  `;
}

function renderSubnavRevealMarker(project) {
  return project.heroShowcase?.length
    ? '<span class="subnav-reveal-marker" data-subnav-reveal-trigger aria-hidden="true"></span>'
    : '';
}

function renderHeroTags(tags) {
  if (!tags?.length) return '';

  return `
    <ul class="project-hero__tags" aria-label="项目关键词">
      ${tags.map((tag) => `<li class="project-hero__tag">${tag}</li>`).join('')}
    </ul>
  `;
}

function renderInviteHero(project) {
  const showcase = project.heroShowcase || [];
  const deviceClasses = ['invite-hero__device--front', 'invite-hero__device--back'];

  const showcaseHtml = showcase
    .map(
      (item, index) => `
      <figure class="invite-hero__device ${deviceClasses[index] || ''} reveal">
        <img src="${item.src}" alt="${item.alt}" loading="${index === 0 ? 'eager' : 'lazy'}" />
      </figure>
    `
    )
    .join('');

  return `
    <div class="invite-hero">
      <div class="invite-hero__grid project-content-inner">
        <svg class="invite-hero__backdrop-defs" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="invite-mutmiz-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0.36 L 0 0.88 A 0.035 0.12 0 0 0 0.035 1 L 1 1 L 1 0 L 0.035 0.24 A 0.035 0.12 0 0 0 0 0.36 Z" />
            </clipPath>
          </defs>
        </svg>
        <div class="invite-hero__backdrop" aria-hidden="true"></div>
        <header class="invite-hero__copy reveal">
          <p class="invite-hero__eyebrow">${project.category}</p>
          <h2 class="invite-hero__title">${project.title}</h2>
          ${renderHeroTags(project.heroTags)}
          <p class="invite-hero__summary">${project.summary}</p>
        </header>
        ${showcase.length ? `<div class="invite-hero__showcase">${showcaseHtml}</div>` : ''}
      </div>
    </div>
  `;
}

function renderReverseHero(project) {
  const showcase = project.heroShowcase || [];
  const cardsHtml = showcase
    .map(
      (item, index) => `
      <figure class="reverse-hero__screen reveal">
        <img src="${item.src}" alt="${item.alt}" loading="${index < 2 ? 'eager' : 'lazy'}" />
      </figure>
    `
    )
    .join('');

  return `
    <div class="reverse-hero">
      <div class="reverse-hero__inner project-content-inner">
        <header class="reverse-hero__head reveal">
          <p class="reverse-hero__eyebrow">${project.category}</p>
          <h2 class="reverse-hero__title">逆向链路<span class="reverse-hero__highlight">体验</span>优化</h2>
          <p class="reverse-hero__summary">${project.summary}</p>
        </header>
        ${showcase.length ? `<div class="reverse-hero__showcase">${cardsHtml}</div>` : ''}
      </div>
    </div>
  `;
}

function renderPdpGoalsPanel(project) {
  const panel = project.backgroundPanel;
  if (!panel) return '';

  const goalsHtml = panel.goals
    .map(
      (goal) => `
      <article class="pdp-glass-card reveal">
        <h4 class="pdp-glass-card__title">${goal.title}</h4>
        <p class="pdp-glass-card__text">${goal.text}</p>
      </article>
    `
    )
    .join('');

  return `
    <div class="pdp-panel pdp-panel--background">
      <div class="pdp-panel__inner project-content-inner">
        ${renderSubnavRevealMarker(project)}
        <header class="pdp-section-head reveal">
          <span class="pdp-section-head__index">${panel.index}</span>
          <h3 class="pdp-section-head__title">${panel.title}</h3>
        </header>
        <div class="pdp-panel__body reveal">
          ${project.background ? `<p class="pdp-panel__intro">${project.background}</p>` : ''}
          <div class="pdp-glass-grid">
            ${goalsHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPdpCategoryNotes(notes) {
  if (!notes?.chips?.length) return '';

  return `
    <div class="pdp-category-notes reveal">
      <span class="pdp-category-notes__label">${notes.label}</span>
      <div class="pdp-category-notes__chips">
        ${notes.chips.map((name) => `<span class="pdp-category-chip">${name}</span>`).join('')}
      </div>
    </div>
  `;
}

function renderPdpDesignSlot(slot, options = {}) {
  const { variant = 'scheme', hint = '' } = options;
  const fileHint = slot.src ? slot.src.split('/').pop() : hint;

  return `
    <figure class="pdp-design-slot pdp-design-slot--${variant}">
      <figcaption class="pdp-design-slot__label">${slot.label}</figcaption>
      <div class="pdp-design-slot__frame" data-pdp-design-slot>
        <img src="${slot.src}" alt="${slot.alt || slot.label}" loading="lazy" />
        <div class="pdp-design-slot__empty" aria-hidden="true">
          <span class="pdp-design-slot__tag">${slot.label}坑位</span>
          ${fileHint ? `<span class="pdp-design-slot__hint">${fileHint}</span>` : ''}
        </div>
      </div>
      ${slot.caption ? `<p class="pdp-design-slot__caption">${slot.caption}</p>` : ''}
    </figure>
  `;
}

function renderPdpFrameworkLayerIcon(layerId) {
  if (layerId === 'conversion') {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
  }
  if (layerId === 'trust') {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.5L19 7V12C19 16.1 16.1 19.6 12 20.5C7.9 19.6 5 16.1 5 12V7L12 3.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9.5 12L11 13.5L14.5 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }
  return '';
}

function renderPdpFrameworkGroupIcon(label) {
  if (label === '商品信息') {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M8 9H16M8 13H13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
  }
  if (label === '价格') {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="7.5" stroke="currentColor" stroke-width="1.8"/><path d="M9.5 9.5C9.5 8.4 10.6 7.5 12 7.5C13.4 7.5 14.5 8.4 14.5 9.5C14.5 10.6 12 11.5 12 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="15.5" r="0.9" fill="currentColor"/></svg>`;
  }
  if (label === '优惠券') {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 8.5H19V15.5H5V8.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 8.5V15.5M15 8.5V15.5" stroke="currentColor" stroke-width="1.8" stroke-dasharray="2 2"/></svg>`;
  }
  if (label === '配送信息') {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 7.5H14V16.5H3V7.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 10.5H17.5L20 13.5V16.5H14V10.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="7.5" cy="16.5" r="1.5" stroke="currentColor" stroke-width="1.8"/><circle cx="17" cy="16.5" r="1.5" stroke="currentColor" stroke-width="1.8"/></svg>`;
  }
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="7.5" stroke="currentColor" stroke-width="1.8"/></svg>`;
}

function renderPdpFrameworkHotspots(regions, regionIds = []) {
  if (!regions || !regionIds.length) return '';

  return regionIds
    .map((id) => {
      const rect = regions[id];
      if (!rect) return '';
      return `
        <span
          class="pdp-framework__hotspot"
          data-pdp-framework-region="${id}"
          style="top:${rect.top}%;left:${rect.left}%;width:${rect.width}%;height:${rect.height}%;"
        ></span>`;
    })
    .join('');
}

function renderPdpFrameworkWireframeStatic(shot, regions = {}, { hideLabel = false } = {}) {
  return `
    <figure class="pdp-framework__figure" data-pdp-framework-side="after">
      ${hideLabel ? '' : `<figcaption class="pdp-framework__figure-label">页面框架</figcaption>`}
      <div class="pdp-framework__figure-canvas">
        <img class="pdp-framework__figure-img" src="${shot.src}" alt="${shot.alt}" loading="lazy" />
        <div class="pdp-framework__hotspots" aria-hidden="true">
          ${renderPdpFrameworkHotspots(regions, Object.keys(regions))}
        </div>
        <div class="pdp-framework__highlight-merges" data-pdp-framework-merges aria-hidden="true"></div>
      </div>
    </figure>`;
}

function renderPdpFrameworkDetailIcon(index) {
  const palette = [
    { bg: 'rgba(124, 58, 237, 0.12)', color: '#7c3aed' },
    { bg: 'rgba(37, 99, 235, 0.12)', color: '#2563eb' },
    { bg: 'rgba(219, 39, 119, 0.12)', color: '#db2777' },
    { bg: 'rgba(8, 145, 178, 0.12)', color: '#0891b2' },
    { bg: 'rgba(217, 119, 6, 0.12)', color: '#d97706' },
    { bg: 'rgba(5, 150, 105, 0.12)', color: '#059669' },
  ];
  const tone = palette[index % palette.length];

  return `
    <span
      class="pdp-framework__detail-card-icon"
      style="--detail-icon-bg:${tone.bg};--detail-icon-color:${tone.color}"
      aria-hidden="true"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8"/>
        <rect x="13" y="4" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8"/>
        <rect x="4" y="13" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8"/>
        <rect x="13" y="13" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8"/>
      </svg>
    </span>`;
}

function renderPdpFrameworkStrategyMedia(media, { compact = false } = {}) {
  if (!media) return '';

  const compactClass = compact ? ' pdp-framework__strategy-media--compact' : '';
  const stackClass =
    media.type === 'duo-after' ? ' pdp-framework__strategy-media--row' : ' pdp-framework__strategy-media--stack';

  if (media.type === 'danmaku') {
    return renderPdpFrameworkDanmakuDemo(media.danmaku);
  }

  if (media.type === 'duo-after') {
    return `
      <div class="pdp-framework__strategy-media pdp-framework__strategy-media--duo${compactClass}${stackClass}">
        ${media.shots
          .map(
            (shot) => `
          <figure class="pdp-framework__strategy-shot">
            <figcaption class="pdp-framework__strategy-shot-label">${shot.label}</figcaption>
            <div class="pdp-framework__strategy-shot-frame">
              <img src="${shot.src}" alt="${shot.alt}" loading="lazy" decoding="async" draggable="false" />
            </div>
          </figure>`
          )
          .join('')}
      </div>`;
  }

  if (media.type === 'compare') {
    return `
      <div class="pdp-framework__strategy-media pdp-framework__strategy-media--compare${compactClass}">
        ${['before', 'after']
          .map((side) => {
            const shot = media[side];
            if (!shot) return '';
            return `
          <figure class="pdp-framework__strategy-shot pdp-framework__strategy-shot--${side}">
            <figcaption class="pdp-framework__strategy-shot-label">${shot.label}</figcaption>
            <div class="pdp-framework__strategy-shot-frame">
              <img src="${shot.src}" alt="${shot.alt}" loading="lazy" decoding="async" draggable="false" />
            </div>
          </figure>`;
          })
          .join('')}
      </div>`;
  }

  if (media.type === 'gallery') {
    return `
      <div class="pdp-framework__strategy-media pdp-framework__strategy-media--gallery${compactClass}${stackClass}">
        ${media.shots
          .map(
            (shot) => `
          <figure class="pdp-framework__strategy-shot${shot.placeholder ? ' pdp-framework__strategy-shot--placeholder' : ''}">
            ${shot.label ? `<figcaption class="pdp-framework__strategy-shot-label">${shot.label}</figcaption>` : ''}
            ${
              shot.placeholder
                ? `
            <div class="pdp-framework__strategy-shot-frame pdp-framework__strategy-shot-frame--slot">
              <span class="pdp-framework__strategy-slot-title">${shot.label}</span>
              <span class="pdp-framework__strategy-slot-note">示例图预留</span>
            </div>`
                : `
            <div class="pdp-framework__strategy-shot-frame">
              <img src="${shot.src}" alt="${shot.alt}" loading="lazy" decoding="async" draggable="false" />
            </div>`
            }
          </figure>`
          )
          .join('')}
      </div>`;
  }

  if (media.type === 'single') {
    return `
      <div class="pdp-framework__strategy-media pdp-framework__strategy-media--single${compactClass}${stackClass}">
        <figure class="pdp-framework__strategy-shot">
          <div class="pdp-framework__strategy-shot-frame">
            <img src="${media.shot.src}" alt="${media.shot.alt}" loading="lazy" decoding="async" draggable="false" />
          </div>
        </figure>
      </div>`;
  }

  if (media.type === 'placeholder') {
    return `
      <div class="pdp-framework__strategy-media pdp-framework__strategy-media--placeholder${compactClass}${stackClass}">
        <div class="pdp-framework__strategy-shot-frame pdp-framework__strategy-shot-frame--slot">
          <span class="pdp-framework__strategy-slot-title">${media.label || '坑位预留'}</span>
          ${media.note ? `<span class="pdp-framework__strategy-slot-note">${media.note}</span>` : ''}
        </div>
      </div>`;
  }

  return '';
}

function renderPdpFrameworkDanmakuDemo(danmaku) {
  if (!danmaku?.items?.length) return '';

  return `
    <div class="pdp-framework__strategy-media pdp-framework__strategy-media--danmaku pdp-framework__strategy-media--stack pdp-framework__strategy-media--compact">
      <div class="pdp-framework__danmaku-demo" data-pdp-framework-danmaku-demo>
        ${renderPdpSchemeDanmaku(danmaku)}
      </div>
    </div>`;
}

function bindPdpFrameworkDanmakuDemos(root) {
  root.querySelectorAll('[data-pdp-framework-danmaku-demo]').forEach((demo) => {
    if (demo.dataset.pdpFrameworkDanmakuBound === 'true') return;
    demo.dataset.pdpFrameworkDanmakuBound = 'true';

    const syncDeviceWidth = () => {
      demo.style.setProperty('--pdp-scheme-device-w', `${demo.clientWidth}px`);
    };

    syncDeviceWidth();

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(syncDeviceWidth);
      observer.observe(demo);
    }
  });
}

function renderPdpFrameworkPointIcon() {
  return `
    <span class="pdp-framework__point-icon" aria-hidden="true">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
        <path d="M20 6.5 10.5 16 7 12.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>`;
}

function renderPdpFrameworkStrategyPoint(item) {
  const mediaHtml = item.media
    ? renderPdpFrameworkStrategyMedia(item.media, { compact: true })
    : '';

  return `
    <article class="pdp-framework__point">
      <div class="pdp-framework__point-main">
        ${renderPdpFrameworkPointIcon()}
        <div class="pdp-framework__point-copy">
          <h6 class="pdp-framework__point-title">${item.title}</h6>
          ${item.text ? `<p class="pdp-framework__point-text">${item.text}</p>` : ''}
        </div>
      </div>
      ${mediaHtml ? `<div class="pdp-framework__point-media">${mediaHtml}</div>` : ''}
    </article>`;
}

function renderPdpFrameworkStrategyList(part) {
  return (part.strategies || [])
    .map((item) => renderPdpFrameworkStrategyPoint(item))
    .join('');
}

function renderPdpFrameworkHeroVisual(part) {
  return `
    <div class="pdp-framework__hero-visual">
      <div class="pdp-framework__hero-shell">
        <img
          class="pdp-framework__hero-shot"
          src="${part.hero.src}"
          alt="${part.hero.alt}"
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </div>
    </div>`;
}

function renderPdpFrameworkStaggerVisual(visual) {
  const hero = visual.heroDanmaku;
  const nutrition = visual.nutrition;
  const nutritionSheet = visual.nutritionSheet;
  const review = visual.review;
  const reviewsLanding = visual.reviewsLanding;

  const heroDanmakuHtml =
    hero?.danmaku?.items?.length
      ? `<div class="pdp-framework__stagger-danmaku" data-pdp-framework-danmaku-demo>${renderPdpSchemeDanmaku(hero.danmaku)}</div>`
      : '';

  const nutritionHtml = nutrition.placeholder
    ? `
            <div class="pdp-framework__stagger-slot">
              <span class="pdp-framework__stagger-slot-title">${nutrition.label}</span>
              <span class="pdp-framework__stagger-slot-note">示例图预留</span>
            </div>`
    : `
            <img src="${nutrition.src}" alt="${nutrition.alt}" loading="lazy" decoding="async" draggable="false" />`;

  const sheetHtml = nutritionSheet
    ? `
        <figure class="pdp-framework__stagger-card pdp-framework__stagger-card--nutrition-sheet"${nutritionSheet.aspect ? ` style="--pdp-stagger-aspect: ${nutritionSheet.aspect}"` : ''}>
          <img src="${nutritionSheet.src}" alt="${nutritionSheet.alt}" loading="lazy" decoding="async" draggable="false" />
        </figure>`
    : '';

  const landingHtml = reviewsLanding
    ? `
        <figure class="pdp-framework__stagger-card pdp-framework__stagger-card--reviews-landing"${reviewsLanding.aspect ? ` style="--pdp-stagger-aspect: ${reviewsLanding.aspect}"` : ''}>
          <img src="${reviewsLanding.src}" alt="${reviewsLanding.alt}" loading="lazy" decoding="async" draggable="false" />
        </figure>`
    : '';

  const stageMod = nutritionSheet || reviewsLanding ? ' pdp-framework__stagger-stage--trust-flow' : '';

  return `
    <div class="pdp-framework__stagger-visual">
      <div class="pdp-framework__stagger-stage${stageMod}">
        <figure class="pdp-framework__stagger-card pdp-framework__stagger-card--hero-danmaku">
          <img src="${hero.src}" alt="${hero.alt}" loading="lazy" decoding="async" draggable="false" />
          ${heroDanmakuHtml}
        </figure>
        <figure class="pdp-framework__stagger-card pdp-framework__stagger-card--nutrition">
          ${nutritionHtml}
        </figure>
        ${sheetHtml}
        <figure class="pdp-framework__stagger-card pdp-framework__stagger-card--review">
          <img src="${review.src}" alt="${review.alt}" loading="lazy" decoding="async" draggable="false" />
        </figure>
        ${landingHtml}
      </div>
    </div>`;
}

function renderPdpFrameworkPart(part) {
  const isHeroList = part.layout === 'hero-list';
  const visualHtml = isHeroList
    ? renderPdpFrameworkHeroVisual(part)
    : renderPdpFrameworkStaggerVisual(part.visual);

  const copyHtml = `
    <div class="pdp-framework__part-copy">
      <div class="pdp-framework__part-head">
        <span class="pdp-framework__part-badge">${part.strategyBadge}</span>
        <h5 class="pdp-framework__part-title">${part.strategyTitle}</h5>
      </div>
      <div class="pdp-framework__point-list">${renderPdpFrameworkStrategyList(part)}</div>
    </div>`;

  return `
    <section
      class="pdp-framework__part pdp-framework__part--${part.layout}"
      data-pdp-framework-part="${part.id}"
      aria-label="${part.strategyTitle}"
    >
      ${visualHtml}
      ${copyHtml}
    </section>`;
}

function renderPdpFrameworkOverview(framework) {
  if (!framework) return '';

  const partsHtml = (framework.parts || [])
    .map((part) => renderPdpFrameworkPart(part))
    .join('');

  return `
    <section
      class="pdp-framework reveal"
      data-pdp-framework
      aria-label="${framework.title || '信息层级改版总览'}"
    >
      ${framework.title ? `<h5 class="pdp-framework__title">${framework.title}</h5>` : ''}
      ${framework.subtitle ? `<p class="pdp-framework__subtitle">${framework.subtitle}</p>` : ''}
      <div class="pdp-framework__layout pdp-framework__layout--parts">
        ${partsHtml}
      </div>
    </section>
  `;
}

function renderPdpFrameworkInfoMatrix(groups = []) {
  if (!groups.length) return '';

  return `
    <div class="pdp-framework__info-grid">
      ${groups
        .map(
          (group, index) => `
        <article class="pdp-framework__info-cell pdp-framework__info-cell--${index + 1}">
          <span class="pdp-framework__info-cell-icon" aria-hidden="true">
            ${renderPdpFrameworkGroupIcon(group.label)}
          </span>
          <h6 class="pdp-framework__info-cell-title">${group.label}</h6>
          <p class="pdp-framework__info-cell-desc">${group.tags.join(' · ')}</p>
        </article>`
        )
        .join('')}
    </div>`;
}

function renderPdpFrameworkInfoFlow(tags = [], label = '') {
  if (!tags.length) return '';

  return `
    <div class="pdp-framework__info-flow pdp-framework__info-flow--trust" aria-label="${label}">
      <p class="pdp-framework__info-tags">${tags.join(' · ')}</p>
    </div>`;
}

function renderPdpFrameworkLayerDetail(layer) {
  const detail = layer.detail;
  if (!detail) return '';

  if (layer.id === 'conversion' && detail.groups?.length) {
    return renderPdpFrameworkInfoMatrix(detail.groups);
  }

  if (layer.id === 'trust') {
    return `
        <div class="pdp-framework__trust-detail">
          <p class="pdp-framework__detail-lead">${detail.lead || ''}</p>
          ${renderPdpFrameworkInfoFlow(detail.tags, '打消疑虑信息')}
          ${detail.note ? `<p class="pdp-framework__detail-note">${detail.note}</p>` : ''}
        </div>`;
  }

  if (layer.id === 'longtail') {
    return `<p class="pdp-framework__detail-copy">${detail.copy}</p>`;
  }

  return '';
}


function renderPdpFrameworkScreenEfficiency(screenEfficiency) {
  if (!screenEfficiency?.after) return '';

  return `
    <div class="pdp-framework__screen-efficiency" data-pdp-framework-screen-efficiency aria-hidden="true">
      <figure class="pdp-framework__screen-efficiency-shot pdp-framework__screen-efficiency-shot--after">
        <div class="pdp-framework__screen-efficiency-frame">
          <img src="${screenEfficiency.after.src}" alt="${screenEfficiency.after.alt}" loading="lazy" />
        </div>
      </figure>
    </div>`;
}

function renderPdpBeforeProblemsCategoryBlock(id, panel) {
  const pointsHtml = panel.points
    .map((point) => {
      const title = typeof point === 'string' ? point : point.title;
      const detail = typeof point === 'string' ? '' : point.detail || '';
      return `
              <li class="pdp-before-problems__category-issue">
                <p class="pdp-before-problems__category-issue-title">${title}</p>
                ${detail ? `<p class="pdp-before-problems__category-issue-detail">${detail}</p>` : ''}
              </li>`;
    })
    .join('');

  return `
            <div class="pdp-before-problems__category-block" data-pdp-before-problems-category="${id}">
              <p class="pdp-before-problems__category-eyebrow">${panel.eyebrow || ''}</p>
              <ul class="pdp-before-problems__category-issues">
                ${pointsHtml}
              </ul>
            </div>`;
}

function renderPdpBeforeProblems(beforeProblems) {
  if (!beforeProblems?.panels?.default) return '';

  const { panels, shots = [] } = beforeProblems;
  const categoryPanels = [
    ['milk', panels.milk],
    ['flowers', panels.flowers],
  ].filter(([, panel]) => panel);
  const underSectionIndex = panels.default.underSectionIndex ?? 2;

  const sectionsHtml = panels.default.sections
    .map((section, index) => {
      const categoryExtras =
        index === underSectionIndex && categoryPanels.length
          ? `<div class="pdp-before-problems__category-extras" data-pdp-before-problems-extras>
              <div class="pdp-before-problems__category-extras-inner">
              ${categoryPanels.map(([id, panel]) => renderPdpBeforeProblemsCategoryBlock(id, panel)).join('')}
              </div>
            </div>`
          : '';

      return `
          <div class="pdp-before-problems__section" data-pdp-before-problems-section="${index}">
            <span class="pdp-before-problems__section-index">0${index + 1}</span>
            <div class="pdp-before-problems__section-body">
              <h6 class="pdp-before-problems__section-title">${section.title}</h6>
              <p class="pdp-before-problems__section-subtitle">${section.subtitle || ''}</p>
              <ul class="pdp-before-problems__section-points">
                ${section.points.map((point) => `<li>${point}</li>`).join('')}
              </ul>
              ${categoryExtras}
            </div>
          </div>`;
    })
    .join('');

  const shotsHtml = shots
    .map(
      (shot) => `
        <figure
          class="pdp-before-problems__shot"
          data-pdp-before-problems-shot="${shot.id}"
          tabindex="0"
          role="button"
          aria-label="${shot.label} · 查看${shot.label}体验问题"
        >
          <img src="${shot.src}" alt="${shot.alt}" loading="lazy" decoding="async" draggable="false" />
        </figure>`
    )
    .join('');

  return `
    <section class="pdp-before-problems reveal" data-pdp-before-problems aria-label="${beforeProblems.title}">
      <h5 class="pdp-before-problems__title">${beforeProblems.title}</h5>
      <div class="pdp-before-problems__stage" data-pdp-before-problems-stage>
        <div class="pdp-before-problems__copy" data-pdp-before-problems-copy>
          <div class="pdp-before-problems__sections">
            ${sectionsHtml}
          </div>
        </div>
        <div class="pdp-before-problems__shots" data-pdp-before-problems-shots>
          <div class="pdp-before-problems__shots-rail">
            ${shotsHtml}
          </div>
        </div>
      </div>
    </section>`;
}

function bindPdpBeforeProblems() {
  const root = document.querySelector('[data-pdp-before-problems]');
  if (!root) return;

  const stage = root.querySelector('[data-pdp-before-problems-stage]');
  const copy = root.querySelector('[data-pdp-before-problems-copy]');
  const shotsRail = root.querySelector('[data-pdp-before-problems-shots]');
  const extras = root.querySelector('[data-pdp-before-problems-extras]');
  const categoryBlocks = [...root.querySelectorAll('[data-pdp-before-problems-category]')];
  const shots = [...root.querySelectorAll('[data-pdp-before-problems-shot]')];
  if (!stage || !shotsRail) return;

  const setCategory = (categoryId) => {
    const active = categoryId !== 'default';
    extras?.classList.toggle('is-active', active);
    categoryBlocks.forEach((block) => {
      const show = active && block.dataset.pdpBeforeProblemsCategory === categoryId;
      block.classList.toggle('is-visible', show);
    });
    shots.forEach((shot) => {
      shot.classList.toggle(
        'is-active',
        active && shot.dataset.pdpBeforeProblemsShot === categoryId,
      );
    });
  };

  shots.forEach((shot) => {
    const panelId = shot.dataset.pdpBeforeProblemsShot;
    shot.addEventListener('mouseenter', () => setCategory(panelId));
    shot.addEventListener('focus', () => setCategory(panelId));
  });

  shotsRail.addEventListener('mousemove', (event) => {
    if (event.target.closest('[data-pdp-before-problems-shot]')) return;
    setCategory('default');
  });

  copy?.addEventListener('mouseenter', () => setCategory('default'));

  stage.addEventListener('mouseleave', (event) => {
    if (stage.contains(event.relatedTarget)) return;
    setCategory('default');
  });

  setCategory('default');
}

function renderPdpLayerDetailDesign(design) {
  if (!design) return '';

  return `
    <figure class="pdp-layer-detail__design">
      <img src="${design.src}" alt="${design.alt}" loading="lazy" />
    </figure>`;
}

function renderPdpLayerDetails(layerDetails) {
  if (!layerDetails?.layers?.length) return '';

  const itemsHtml = layerDetails.layers
    .map(
      (layer, index) => `
        <article
          class="pdp-layer-detail pdp-layer-detail--${index + 1}${layer.design ? ' pdp-layer-detail--has-design' : ''}"
        >
          <header class="pdp-layer-detail__head">
            <span class="pdp-layer-detail__tone" aria-hidden="true"></span>
            <h6 class="pdp-layer-detail__label">${layer.label}</h6>
          </header>
          ${renderPdpLayerDetailDesign(layer.design)}
        </article>`
    )
    .join('');

  return `
    <section class="pdp-layer-details reveal" aria-label="${layerDetails.title || '分层改版方案'}">
      ${layerDetails.title ? `<h5 class="pdp-layer-details__title">${layerDetails.title}</h5>` : ''}
      <div class="pdp-layer-details__stack">
        ${itemsHtml}
      </div>
    </section>
  `;
}

function renderPdpDesignBrief(brief) {
  if (!brief) return '';

  const blocksHtml = brief.blocks
    ?.map(
      (block) => `
        <article class="pdp-design-brief__card">
          <h5 class="pdp-design-brief__card-title">${block.title}</h5>
          ${
            block.text
              ? `<p class="pdp-design-brief__text">${block.text}</p>`
              : `
          <ul class="pdp-design-brief__list">
            ${block.items.map((item) => `<li>${item}</li>`).join('')}
          </ul>`
          }
        </article>`
    )
    .join('');

  const visualHtml = brief.visual
    ? `
        <div class="pdp-design-brief__visual">
          ${renderPdpDesignSlot(brief.visual, { variant: 'scheme' })}
        </div>`
    : '';

  return `
    <section class="pdp-design-brief reveal">
      ${brief.lead ? `<p class="pdp-design-brief__lead">${brief.lead}</p>` : ''}
      <div class="pdp-design-brief__layout${brief.visual ? ' pdp-design-brief__layout--visual' : ''}">
        ${blocksHtml ? `<div class="pdp-design-brief__cards">${blocksHtml}</div>` : ''}
        ${visualHtml}
      </div>
    </section>
  `;
}

function renderPdpDesignOverview(overview) {
  if (!overview) return '';

  return `
    <section class="pdp-design-overview reveal" aria-labelledby="pdp-design-overview">
      <header class="pdp-design-overview__head">
        <h4 class="pdp-design-overview__title" id="pdp-design-overview">${overview.title}</h4>
        ${overview.lead ? `<p class="pdp-design-overview__lead">${overview.lead}</p>` : ''}
      </header>
      <div class="pdp-design-overview__grid">
        ${overview.blocks
          .map(
            (block) => `
        <article class="pdp-design-overview__card">
          <h5 class="pdp-design-overview__card-title">${block.title}</h5>
          ${
            block.text
              ? `<p class="pdp-design-overview__text">${block.text}</p>`
              : `
          <ul class="pdp-design-overview__list">
            ${block.items.map((item) => `<li>${item}</li>`).join('')}
          </ul>`
          }
        </article>`
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderPdpSchemeDemoHotspot(hotspot, className = 'pdp-scheme-explorer__demo-hotspot pdp-demo-hotspot', hidden = false) {
  if (!hotspot) return '';

  const { top, left, width, height, label, target } = hotspot;
  return `
    <button
      type="button"
      class="${className}"
      data-pdp-scheme-demo-target="${target}"
      style="top:${top}%;left:${left}%;width:${width}%;height:${height}%;"
      aria-label="${label}"
      ${hidden ? 'hidden' : ''}
    >
      <span class="visually-hidden">${label}</span>
    </button>`;
}

function isImageDanmakuItem(item) {
  return Boolean(item?.segments?.length);
}

function renderPdpSchemeDanmaku(danmaku) {
  if (!danmaku?.items?.length) return '';

  const designW = danmaku.designWidth ?? 750;
  const designH = danmaku.designHeight ?? 1024;
  const topPx = danmaku.topPx ?? 208;
  const leftPx = danmaku.leftPx ?? 0;
  const assetScale = danmaku.assetScale ?? 2;
  const assetWidthPx = danmaku.assetWidthPx ?? 0;
  const assetHeightPx = danmaku.assetHeightPx ?? 0;
  const barWidthPx = danmaku.barWidthPx
    ?? (assetWidthPx ? assetWidthPx / assetScale : 512);
  const barHeightPx = danmaku.barHeightPx
    ?? (assetHeightPx ? assetHeightPx / assetScale : 142);
  const barImage = danmaku.barImage ?? '';
  const pillItemHeightPx = danmaku.pillItemHeightPx ?? danmaku.itemHeightPx ?? 40;
  const pillMaxWidthPx = danmaku.maxWidthPx ?? danmaku.widthPx ?? 204;
  const pillGapPx = danmaku.pillGapPx ?? danmaku.itemGapPx ?? (4 * 750) / 260;
  const mixedGapPx = danmaku.mixedGapPx ?? danmaku.itemGapPx ?? pillGapPx;
  const groupGapPx = danmaku.groupGapPx ?? mixedGapPx;
  const visibleCount = danmaku.visibleCount ?? 2;
  const textPaddingXPx = danmaku.textPaddingXPx ?? 16;
  const textPaddingYPx = danmaku.textPaddingYPx ?? 3;
  const fontSizePx = danmaku.fontSizePx ?? 24;
  const pillLineHeightPx = danmaku.pillLineHeightPx ?? 34;
  const imageLineHeightPx = danmaku.imageLineHeightPx ?? danmaku.lineHeightPx ?? 30;
  const segmentOffsetYPx = danmaku.segmentOffsetYPx ?? 0;
  const bubbleIcon =
    danmaku.bubbleIcon || assetUrl('/images/projects/pdp-p1-scheme-danmaku-bubble.png');
  const hasImageItems = danmaku.items.some(isImageDanmakuItem);
  const hasPillItems = danmaku.items.some((item) => !isImageDanmakuItem(item));
  const maxItemHeightPx = hasImageItems
    ? Math.max(pillItemHeightPx, barHeightPx)
    : pillItemHeightPx;
  const containerWidthPx = hasImageItems
    ? Math.max(pillMaxWidthPx, barWidthPx)
    : pillMaxWidthPx;

  const getItemHeightPx = (item) => (
    isImageDanmakuItem(item) ? barHeightPx : pillItemHeightPx
  );

  const getGapPx = (current, next) => {
    if (!next) return 0;
    const crossType = isImageDanmakuItem(current) !== isImageDanmakuItem(next);
    return crossType ? mixedGapPx : pillGapPx;
  };

  const sourceItems = danmaku.items;
  const cycleLength = sourceItems.length;

  const getCycleMarginBottomPx = (loopIndex) => {
    const cycleIndex = loopIndex % cycleLength;
    const nextCycleIndex = (cycleIndex + 1) % cycleLength;
    if (nextCycleIndex === 0 && isImageDanmakuItem(sourceItems[cycleLength - 1])) {
      return groupGapPx;
    }
    return getGapPx(sourceItems[cycleIndex], sourceItems[nextCycleIndex]);
  };

  const getTransitionGapPx = (fromIndex, toIndex) => {
    if (toIndex === 0 && fromIndex === cycleLength - 1 && isImageDanmakuItem(sourceItems[fromIndex])) {
      return groupGapPx;
    }
    return getGapPx(sourceItems[fromIndex], sourceItems[toIndex]);
  };

  const computeCycleHeightPx = () => sourceItems.reduce((total, item, index) => (
    total
      + getItemHeightPx(item)
      + getCycleMarginBottomPx(index)
  ), 0);

  const computeViewportHeight = () => {
    if (cycleLength === 0 || visibleCount <= 0) return 0;
    if (cycleLength === 1) return getItemHeightPx(sourceItems[0]);

    let maxHeight = 0;
    for (let i = 0; i < cycleLength; i += 1) {
      let height = 0;
      for (let j = 0; j < visibleCount; j += 1) {
        const item = sourceItems[(i + j) % cycleLength];
        height += getItemHeightPx(item);
        if (j < visibleCount - 1) {
          const fromIndex = (i + j) % cycleLength;
          const toIndex = (i + j + 1) % cycleLength;
          height += getTransitionGapPx(fromIndex, toIndex);
        }
      }
      maxHeight = Math.max(maxHeight, height);
    }
    return maxHeight;
  };

  const cycleHeightPx = computeCycleHeightPx();
  const viewportHeightPx = computeViewportHeight();
  const loopItems = [...sourceItems, ...sourceItems];

  const renderImageBubble = (item) => {
    const segments = item.segments ?? [];
    const offsetY = item.segmentOffsetYPx ?? segmentOffsetYPx;
    const segmentsHtml = segments
      .map((segment) => {
        const segLeftPx = segment.leftPx ?? 0;
        const segTopPx = (segment.topPx ?? 0) + offsetY;
        const segWidthPx = segment.widthPx ?? 0;
        const segWeight = segment.fontWeight ?? 400;
        const segColor = segment.color ?? '#222426';
        return `
              <span
                class="pdp-scheme-explorer__danmaku-segment"
                style="
                  --pdp-seg-left-ratio: ${segLeftPx / barWidthPx};
                  --pdp-seg-top-ratio: ${segTopPx / barHeightPx};
                  --pdp-seg-w-ratio: ${segWidthPx / barWidthPx};
                  --pdp-seg-color: ${segColor};
                  --pdp-seg-weight: ${segWeight};
                "
              >${segment.text ?? ''}</span>`;
      })
      .join('');

    return `
            <div class="pdp-scheme-explorer__danmaku-bubble pdp-scheme-explorer__danmaku-bubble--image">
              <img
                class="pdp-scheme-explorer__danmaku-bubble-bg"
                src="${barImage}"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
              />
              ${segmentsHtml}
            </div>`;
  };

  const renderPillBubble = (item) => {
    const text = typeof item === 'string' ? item : item.text;
    return `
            <div class="pdp-scheme-explorer__danmaku-bubble pdp-scheme-explorer__danmaku-bubble--pill">
              <span class="pdp-scheme-explorer__danmaku-bubble-icon" aria-hidden="true">
                <img src="${bubbleIcon}" alt="" loading="lazy" decoding="async" draggable="false" />
              </span>
              <span class="pdp-scheme-explorer__danmaku-bubble-text">${text}</span>
            </div>`;
  };

  const renderBubble = (item, marginBottomPx = 0) => {
    const bubbleHtml = isImageDanmakuItem(item)
      ? renderImageBubble(item)
      : renderPillBubble(item);
    return bubbleHtml.replace(
      '<div class="pdp-scheme-explorer__danmaku-bubble',
      `<div style="--pdp-bubble-mb-ratio: ${marginBottomPx / designW};" class="pdp-scheme-explorer__danmaku-bubble`,
    );
  };

  const modClasses = [
    hasImageItems ? 'pdp-scheme-explorer__danmaku--image' : '',
    hasImageItems && hasPillItems ? 'pdp-scheme-explorer__danmaku--mixed' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `
      <div
        class="pdp-scheme-explorer__danmaku${modClasses ? ` ${modClasses}` : ''}"
        aria-hidden="true"
        style="
          --pdp-danmaku-top: ${topPx / designH * 100}%;
          --pdp-danmaku-left: ${leftPx / designW * 100}%;
          --pdp-danmaku-max-w: ${containerWidthPx / designW * 100}%;
          --pdp-danmaku-viewport-h-ratio: ${viewportHeightPx / designW};
          --pdp-danmaku-cycle-h-ratio: ${cycleHeightPx / designW};
          --pdp-danmaku-item-h-ratio: ${pillItemHeightPx / designW};
          --pdp-danmaku-max-item-h-ratio: ${maxItemHeightPx / designW};
          --pdp-danmaku-bar-w-ratio: ${barWidthPx / designW};
          --pdp-danmaku-bar-h-ratio: ${barHeightPx / designW};
          --pdp-danmaku-pill-gap-ratio: ${pillGapPx / designW};
          --pdp-danmaku-mixed-gap-ratio: ${mixedGapPx / designW};
          --pdp-danmaku-group-gap-ratio: ${groupGapPx / designW};
          --pdp-danmaku-font-ratio: ${fontSizePx / designW};
          --pdp-danmaku-pill-line-ratio: ${pillLineHeightPx / designW};
          --pdp-danmaku-image-line-ratio: ${imageLineHeightPx / designW};
          --pdp-danmaku-text-px: ${textPaddingXPx / designW};
          --pdp-danmaku-text-py: ${textPaddingYPx / designW};
        "
      >
        <div class="pdp-scheme-explorer__danmaku-viewport">
          <div class="pdp-scheme-explorer__danmaku-track">
            ${loopItems
              .map((item, index) => renderBubble(item, getCycleMarginBottomPx(index)))
              .join('')}
          </div>
        </div>
      </div>`;
}

function renderPdpSchemePreviewDevice(item) {
  const demo = item.demo;
  const danmakuHtml = renderPdpSchemeDanmaku(item.danmaku);
  const heroTabs = item.heroTabs?.tabs?.length ? item.heroTabs : null;

  if (heroTabs) {
    const tabsJson = encodeURIComponent(JSON.stringify(heroTabs.tabs));
    const holdMs = heroTabs.holdMs ?? 1600;
    const heroHeight = heroTabs.heroHeight ?? 54;
    const firstHero = heroTabs.tabs.find((t) => t.heroSrc)?.heroSrc || '';
    return `
      <div
        class="pdp-scheme-explorer__device${danmakuHtml ? ' pdp-scheme-explorer__device--danmaku' : ''} pdp-scheme-explorer__device--hero-tabs pdp-scheme-explorer__device--demo"
        data-pdp-scheme-hero-tabs
        data-pdp-scheme-hero-tabs-json="${tabsJson}"
        data-pdp-scheme-hero-tabs-hold="${holdMs}"
        style="--pdp-demo-hero-h: ${heroHeight}%"
      >
        <img
          class="pdp-scheme-explorer__demo-base"
          src="${item.after.src}"
          alt="${item.after.alt}"
          loading="lazy"
        />
        <div class="pdp-scheme-explorer__demo-hero" data-pdp-scheme-hero-tab-layer aria-hidden="true">
          <img
            class="pdp-scheme-explorer__demo-hero-img"
            data-pdp-scheme-hero-tab-img
            src="${firstHero}"
            alt=""
            loading="lazy"
          />
        </div>
        ${danmakuHtml}
        <span class="pdp-scheme-explorer__demo-hint" aria-hidden="true">悬停切换</span>
      </div>`;
  }

  if (!demo?.review) {
    return `
      <div class="pdp-scheme-explorer__device${danmakuHtml ? ' pdp-scheme-explorer__device--danmaku' : ''}">
        <img src="${item.after.src}" alt="${item.after.alt}" loading="lazy" />
        ${danmakuHtml}
      </div>`;
  }

  const { review, heroHeight = 54 } = demo;
  return `
    <div
      class="pdp-scheme-explorer__device pdp-scheme-explorer__device--demo"
      data-pdp-scheme-demo
      style="--pdp-demo-hero-h: ${heroHeight}%"
    >
      <img
        class="pdp-scheme-explorer__demo-base"
        src="${item.after.src}"
        alt="${item.after.alt}"
        loading="lazy"
      />
      <div class="pdp-scheme-explorer__demo-hero" data-pdp-scheme-demo-hero aria-hidden="true">
        <img
          class="pdp-scheme-explorer__demo-hero-img"
          src="${review.src}"
          alt="${review.alt}"
          loading="lazy"
        />
      </div>
      ${renderPdpSchemeDemoHotspot(demo.hotspots?.toReview)}
      ${renderPdpSchemeDemoHotspot(demo.hotspots?.toMain, 'pdp-scheme-explorer__demo-hotspot pdp-scheme-explorer__demo-hotspot--back pdp-demo-hotspot', true)}
      ${danmakuHtml}
      <span class="pdp-scheme-explorer__demo-hint" aria-hidden="true">点击「评价」切换</span>
    </div>`;
}

function renderPdpSchemeExplorer(wireframe, schemes) {
  if (!wireframe || !schemes?.length) return '';

  const tabsHtml = schemes
    .map(
      (item, index) => `
        <button
          type="button"
          class="pdp-scheme-explorer__tab pdp-scheme-explorer__tab--${index}${index === 0 ? ' is-active' : ''}"
          data-pdp-scheme-tab="${index}"
          data-pdp-scheme-category="${item.category}"
          role="tab"
          aria-selected="${index === 0 ? 'true' : 'false'}"
          tabindex="${index === 0 ? '0' : '-1'}"
        >
          <span class="pdp-scheme-explorer__tab-label">${item.category}</span>
        </button>`
    )
    .join('');

  const beforeShotsHtml = schemes
    .map(
      (item, index) => `
        <figure
          class="pdp-scheme-explorer__shot pdp-scheme-explorer__shot--before${index === 0 ? ' is-active' : ''}"
          data-pdp-scheme-before="${index}"
          aria-hidden="${index === 0 ? 'false' : 'true'}"
        >
          <div class="pdp-scheme-explorer__device">
            <img src="${item.before.src}" alt="${item.before.alt}" loading="lazy" />
          </div>
        </figure>`
    )
    .join('');

  const afterShotsHtml = schemes
    .map(
      (item, index) => `
        <figure
          class="pdp-scheme-explorer__shot pdp-scheme-explorer__shot--after${index === 0 ? ' is-active' : ''}"
          data-pdp-scheme-after="${index}"
          aria-hidden="${index === 0 ? 'false' : 'true'}"
        >
          ${renderPdpSchemePreviewDevice(item)}
        </figure>`
    )
    .join('');

  return `
    <section class="pdp-scheme-explorer reveal" data-pdp-scheme-explorer aria-label="三类品类改版方案">
      <div class="pdp-scheme-explorer__layout">
        <figure class="pdp-scheme-explorer__column pdp-scheme-explorer__column--wireframe">
          <div class="pdp-scheme-explorer__shot-stack pdp-scheme-explorer__shot-stack--static">
            <div class="pdp-scheme-explorer__device">
              <img src="${wireframe.src}" alt="${wireframe.alt}" loading="lazy" />
            </div>
          </div>
        </figure>
        <figure class="pdp-scheme-explorer__column pdp-scheme-explorer__column--before">
          <figcaption class="pdp-scheme-explorer__column-label">Before</figcaption>
          <div class="pdp-scheme-explorer__shot-stack" data-pdp-scheme-before-stack>
            ${beforeShotsHtml}
          </div>
        </figure>
        <figure class="pdp-scheme-explorer__column pdp-scheme-explorer__column--after">
          <figcaption class="pdp-scheme-explorer__column-label pdp-scheme-explorer__column-label--after">After</figcaption>
          <div class="pdp-scheme-explorer__shot-stack" data-pdp-scheme-after-stack>
            ${afterShotsHtml}
          </div>
        </figure>
        <div class="pdp-scheme-explorer__tabs" role="tablist" aria-label="品类切换">
          ${tabsHtml}
        </div>
      </div>
    </section>`;
}

function renderPdpHierarchyPreview(preview) {
  if (!preview) return '';

  return `
    <div class="pdp-hierarchy__preview">
      <div class="pdp-hierarchy__preview-pair">
        <figure class="pdp-hierarchy__preview-shot">
          <figcaption class="pdp-hierarchy__preview-label">${preview.before.label}</figcaption>
          <img src="${preview.before.src}" alt="${preview.before.alt}" loading="lazy" />
        </figure>
        <span class="pdp-compare-arrow" aria-hidden="true"></span>
        <figure class="pdp-hierarchy__preview-shot pdp-hierarchy__preview-shot--after">
          <figcaption class="pdp-hierarchy__preview-label">${preview.after.label}</figcaption>
          <img src="${preview.after.src}" alt="${preview.after.alt}" loading="lazy" />
        </figure>
      </div>
    </div>
  `;
}

function renderPdpHierarchyStrategies(strategies) {
  if (!strategies?.length) return '';

  return `
    <div class="pdp-hierarchy__strategies">
      ${strategies
        .map(
          (group) => `
        <section class="pdp-hierarchy__strategy">
          <h6 class="pdp-hierarchy__strategy-title">${group.title}</h6>
          <ul class="pdp-hierarchy__strategy-points">
            ${group.points
              .map(
                (point) => `
              <li class="pdp-hierarchy__strategy-point">
                <div class="pdp-hierarchy__strategy-point-head">
                  <span class="pdp-hierarchy__strategy-point-index">${point.index}</span>
                  <strong class="pdp-hierarchy__strategy-point-headline">${point.headline}</strong>
                  ${point.badge ? `<span class="pdp-hierarchy__strategy-point-badge">${point.badge}</span>` : ''}
                </div>
                <p class="pdp-hierarchy__strategy-point-detail">${point.detail}</p>
              </li>`
              )
              .join('')}
          </ul>
        </section>`
        )
        .join('')}
    </div>
  `;
}

function renderPdpHierarchyLayerDetail(layer) {
  if (!layer.preview && !layer.strategies?.length) return '';

  return `
    <div class="pdp-hierarchy__detail-body">
      ${renderPdpHierarchyPreview(layer.preview)}
      ${renderPdpHierarchyStrategies(layer.strategies)}
    </div>
  `;
}

function renderPdpHierarchyLayerButton(layer, index) {
  return `
            <button
              type="button"
              class="pdp-hierarchy__layer pdp-hierarchy__layer--${index + 1}${index === 0 ? ' is-active' : ''}"
              data-pdp-hierarchy-layer="${index}"
              role="tab"
              aria-selected="${index === 0 ? 'true' : 'false'}"
              aria-label="${layer.label}"
            >
              <span class="pdp-hierarchy__layer-surface" aria-hidden="true"></span>
              <div class="pdp-hierarchy__layer-copy">
                <h6 class="pdp-hierarchy__layer-title">${layer.label}</h6>
                <p class="pdp-hierarchy__layer-desc">${layer.description}</p>
              </div>
            </button>`;
}

function resolvePdpLayerHeight(stack, layerWidth) {
  if (stack.layerHeight != null) return stack.layerHeight;
  if (typeof stack.layerRatio === 'number') return stack.layerRatio;
  const ratio = stack.layerRatio ?? '472 / 1024';
  if (typeof ratio === 'string' && ratio.includes('/')) {
    const [w, h] = ratio.split('/').map((value) => Number(value.trim()));
    if (w && h) return Math.round((layerWidth * h) / w);
  }
  return Math.round((layerWidth * 1024) / 472);
}

function renderPdpInfoHierarchy(hierarchy) {
  const stack = hierarchy.stack || {};
  const layerWidth = stack.layerWidth ?? 132;
  const layerHeight = resolvePdpLayerHeight(stack, layerWidth);

  return `
    <section
      class="pdp-hierarchy reveal"
      data-pdp-hierarchy
      aria-label="${hierarchy.title}"
      style="--pdp-layer-width: ${layerWidth}px; --pdp-layer-height: ${layerHeight}px;"
    >
      <header class="pdp-hierarchy__head">
        <h5 class="pdp-hierarchy__title">${hierarchy.title}</h5>
        ${hierarchy.hint ? `<p class="pdp-hierarchy__hint">${hierarchy.hint}</p>` : ''}
      </header>
      <div class="pdp-hierarchy__layout">
        <div class="pdp-hierarchy__content">
          <div class="pdp-hierarchy__panels">
            ${hierarchy.layers
              .map((layer, index) => {
                const detail = renderPdpHierarchyLayerDetail(layer);
                if (!detail) return '';
                return `
            <div
              class="pdp-hierarchy__panel${index === 0 ? ' is-active' : ''}"
              data-pdp-hierarchy-panel="${index}"
              role="tabpanel"
              aria-hidden="${index === 0 ? 'false' : 'true'}"
            >
              ${detail}
            </div>`;
              })
              .join('')}
          </div>
        </div>
        <div class="pdp-hierarchy__stack-wrap">
          <div class="pdp-hierarchy__stack" role="tablist" aria-label="信息层级图层">
            ${hierarchy.layers.map((layer, index) => renderPdpHierarchyLayerButton(layer, index)).join('')}
          </div>
        </div>
      </div>
      <nav class="pdp-hierarchy__dock" data-pdp-hierarchy-dock aria-label="信息层级快速切换">
        ${hierarchy.layers
          .map(
            (layer, index) => `
        <button
          type="button"
          class="pdp-hierarchy__dock-btn${index === 0 ? ' is-active' : ''}"
          data-pdp-hierarchy-dock-layer="${index}"
          aria-label="${layer.label}"
        >
          <span class="pdp-hierarchy__dock-index">${String(index + 1).padStart(2, '0')}</span>
        </button>`
          )
          .join('')}
      </nav>
    </section>
  `;
}

function renderPdpDesignCompare(comparison) {
  return `
    <article class="pdp-design-compare reveal">
      <header class="pdp-design-compare__head">
        <div class="pdp-design-compare__titles">
          <h4 class="pdp-design-compare__title">${comparison.category}</h4>
          ${comparison.tag ? `<span class="pdp-design-compare__tag">${comparison.tag}</span>` : ''}
        </div>
      </header>
      ${comparison.description ? `<p class="pdp-design-copy">${comparison.description}</p>` : ''}
      <div class="pdp-design-compare__pair">
        ${renderPdpDesignSlot(comparison.before, { variant: 'compare' })}
        <span class="pdp-compare-arrow" aria-hidden="true"></span>
        ${renderPdpDesignSlot(comparison.after, { variant: 'compare' })}
      </div>
      ${
        comparison.details?.length
          ? `
      <div class="pdp-design-detail-grid">
        ${comparison.details.map((detail) => renderPdpDesignSlot(detail, { variant: 'detail' })).join('')}
      </div>`
          : ''
      }
    </article>
  `;
}

function renderPdpDesignBlock(block) {
  const isFinal = Boolean(block.comparison);
  const schemeHtml = block.comparison
    ? `
      <div class="pdp-design-block__compare">
        <div class="pdp-design-compare__pair pdp-design-compare__pair--block">
          ${renderPdpDesignSlot(block.comparison.before, { variant: 'scheme-compare' })}
          <span class="pdp-compare-arrow" aria-hidden="true"></span>
          ${renderPdpDesignSlot(block.comparison.after, { variant: 'scheme-compare' })}
        </div>
      </div>`
    : block.scheme
      ? `<div class="pdp-design-block__scheme">${renderPdpDesignSlot(block.scheme, { variant: 'scheme' })}</div>`
      : '';

  return `
    <section class="pdp-design-block reveal${isFinal ? ' pdp-design-block--final' : ''}">
      <header class="pdp-design-block__head">
        <h5 class="pdp-design-block__stage">${block.stage}</h5>
      </header>
      ${block.copy ? `<p class="pdp-design-copy">${block.copy}</p>` : ''}
      ${schemeHtml}
      ${
        block.details?.length
          ? `
      <div class="pdp-design-detail-grid pdp-design-detail-grid--process">
        ${block.details.map((detail) => renderPdpDesignSlot(detail, { variant: 'detail' })).join('')}
      </div>`
          : ''
      }
    </section>
  `;
}

function renderPdpDigitalParamDemo(demo, { split = false, visualOnly = false } = {}) {
  if (!demo?.page || !demo?.sheet) return '';

  const { page, sheet, label = '商详页 · 参数浮层', hint = '悬停自动播放', hotspot = {} } = demo;
  const formatHotspotAxis = (value, defaultRatio) =>
    typeof value === 'string' ? value : `${(value ?? defaultRatio) * 100}%`;
  const top = formatHotspotAxis(hotspot.top, 0.555);
  const left = formatHotspotAxis(hotspot.left, 0.04);
  const width = (hotspot.width ?? 0.92) * 100;
  const height = (hotspot.height ?? 0.088) * 100;

  const hintHtml = hint ? `<span class="pdp-digital-param-demo-wrap__hint">${hint}</span>` : '';
  const labelHtml = visualOnly
    ? ''
    : split
      ? `<figcaption class="pdp-phase-two-strategy-example__label">${label}${hintHtml}</figcaption>`
      : `<p class="pdp-digital-param-demo-wrap__label">${label}${hintHtml}</p>`;

  const deviceInner = `
          <div class="pdp-digital-param-demo__screen">
            ${renderMockupImg(page, {
              className: 'pdp-digital-param-demo__page',
              alt: '',
            })}
            <button
              type="button"
              class="pdp-digital-param-demo__hotspot pdp-demo-hotspot pdp-demo-hotspot--ring-right"
              data-pdp-digital-param-trigger
              aria-label="展开商品参数浮层"
              style="top:${top};left:${left};width:${width}%;height:${height}%;"
            ></button>
          </div>
          <div class="pdp-digital-param-demo__overlay" data-pdp-digital-param-overlay aria-hidden="true">
            <div class="pdp-digital-param-demo__mask" aria-hidden="true"></div>
            <div class="pdp-digital-param-demo__sheet-wrap">
              ${renderMockupImg(sheet, {
                className: 'pdp-digital-param-demo__sheet',
                alt: '',
              })}
            </div>
          </div>`;

  const stageClass = visualOnly
    ? 'pdp-digital-param-demo__stage pdp-digital-param-demo__stage--visual'
    : 'pdp-digital-param-demo__stage';

  const device = split || visualOnly
    ? `
      <div class="pdp-screen-mockup pdp-screen-mockup--flat pdp-screen-mockup--design-flat${visualOnly ? ' pdp-screen-mockup--split-visual' : ''}">
        <div class="${stageClass}">
          ${deviceInner}
        </div>
      </div>`
    : `
      <div class="pdp-digital-param-demo" data-pdp-digital-param-demo>
        <div class="pdp-digital-param-demo__stage">
          ${deviceInner}
        </div>
      </div>`;

  if (visualOnly) {
    return device;
  }

  if (split) {
    return `${labelHtml}${device}`;
  }

  return `
    <div class="pdp-digital-param-demo-wrap" data-pdp-digital-param-demo-card>
      ${labelHtml}
      ${device}
    </div>`;
}

function renderPdpScreenMockup(shot, { long = false, flat = false, designFlat = false } = {}) {
  const longClass = long ? ' pdp-screen-mockup--long' : '';
  const flatClass = flat ? ' pdp-screen-mockup--flat' : '';
  const designFlatClass = designFlat ? ' pdp-screen-mockup--design-flat' : '';
  return `
    <div class="pdp-screen-mockup${longClass}${flatClass}${designFlatClass}">
      <div class="pdp-screen-mockup__viewport">
        <img src="${shot.src}" alt="${shot.alt}" loading="lazy" decoding="async" />
      </div>
    </div>`;
}

function renderPdpScrollMockup(shot, scrollDemo, { embedded = false, hideHint = false } = {}) {
  const {
    topNavRatio,
    tabBarRatio,
    bottomRatio,
    tabRevealRatio,
    stickyTabRatio,
    stickyNavRatio,
    ratioBase,
    tabs,
  } = scrollDemo;
  const topNav = topNavRatio ?? 0.069;
  const tabBar = tabBarRatio ?? 0.031;
  const stickyTab = stickyTabRatio ?? 0.17;
  const stickyNav = stickyNavRatio ?? topNav;
  const tabButtons = tabs
    .map(
      (tab, index) =>
        `<button type="button" role="tab" class="pdp-scroll-mockup__tab${index === 0 ? ' is-active' : ''}" data-y-ratio="${tab.yRatio}" aria-selected="${index === 0 ? 'true' : 'false'}">${tab.label}</button>`
    )
    .join('');

  const hintHtml = hideHint
    ? ''
    : `
        <div class="pdp-scroll-mockup__hint" aria-hidden="true">
          <span class="pdp-scroll-mockup__hint-text">下滑浏览</span>
          <span class="pdp-scroll-mockup__hint-chevron"></span>
        </div>`;

  return `
    <div
      class="pdp-scroll-mockup${embedded ? ' pdp-scroll-mockup--embedded' : ''}"
      data-pdp-scroll-demo
      data-ratio-base="${ratioBase || 'viewport'}"
      data-top-nav-ratio="${topNav}"
      data-tab-bar-ratio="${tabBar}"
      data-bottom-ratio="${bottomRatio}"
      data-tab-reveal-ratio="${tabRevealRatio}"
      data-sticky-tab-ratio="${stickyTab}"
      data-sticky-nav-ratio="${stickyNav}"
    >
      <div class="pdp-screen-mockup__viewport pdp-scroll-mockup__viewport">
        <div class="pdp-scroll-mockup__scroller" tabindex="${embedded ? '-1' : '0'}" aria-label="${shot.alt}">
          <img src="${shot.src}" alt="" loading="lazy" decoding="async" draggable="false" />
        </div>
        <div class="pdp-scroll-mockup__chrome pdp-scroll-mockup__chrome--top" aria-hidden="true">
          <div class="pdp-scroll-mockup__chrome-nav">
            <img src="${shot.src}" alt="" loading="lazy" decoding="async" draggable="false" data-pdp-scroll-chrome-nav />
          </div>
          <div class="pdp-scroll-mockup__chrome-tabs">
            <img src="${shot.src}" alt="" loading="lazy" decoding="async" draggable="false" data-pdp-scroll-chrome-tabs />
          </div>
          <nav class="pdp-scroll-mockup__tabs" role="tablist" aria-label="页面模块" aria-hidden="true">
            ${tabButtons}
          </nav>
        </div>
        <div class="pdp-scroll-mockup__chrome pdp-scroll-mockup__chrome--bottom" aria-hidden="true">
          <img src="${shot.src}" alt="" loading="lazy" decoding="async" draggable="false" data-pdp-scroll-chrome-bottom />
        </div>
        ${hintHtml}
      </div>
    </div>`;
}


function renderPdpPhaseTwoShot(shot, { long = false, interactive = false, hideLabel = false } = {}) {
  const labelExtra = shot.subLabel
    ? ` <span class="pdp-phase-two-compare__sublabel">${shot.subLabel}</span>`
    : '';
  const mockup = interactive
    ? renderPdpScrollMockup(shot, shot.scrollDemo)
    : renderPdpScreenMockup(shot, { long });
  const caption = hideLabel
    ? ''
    : `
      <figcaption class="pdp-phase-two-compare__label pdp-phase-two-compare__label--after">
        ${shot.label}${labelExtra}
      </figcaption>`;

  return `
    <figure class="pdp-phase-two-compare__column${interactive ? ' pdp-phase-two-compare__column--interactive' : ''}">
      ${caption}
      ${mockup}
    </figure>`;
}

function renderPdpPathFlowStrategy(text) {
  const flowMatch = text.match(/将「([^」]+)」.*?优化为「([^」]+)」(.*)?$/);
  if (!flowMatch) {
    return `<div class="pdp-strategy-note"><p>${text}</p></div>`;
  }

  const beforeSteps = flowMatch[1].split(/\s*→\s*/).filter(Boolean);
  const afterSteps = flowMatch[2].split(/\s*→\s*/).filter(Boolean);
  const tail = (flowMatch[3] || '').replace(/^，/, '').trim();
  const removedSteps = new Set(beforeSteps.filter((step) => !afterSteps.includes(step)));

  const renderTrack = (steps, variant) =>
    steps
      .map((step, index) => {
        const removed = variant === 'before' && removedSteps.has(step);
        const connector =
          index < steps.length - 1
            ? `<span class="pdp-path-flow__connector${removed ? ' is-removed' : ''}" aria-hidden="true"></span>`
            : '';
        return `
          <span class="pdp-path-flow__step pdp-path-flow__step--${variant}${removed ? ' is-removed' : ''}${variant === 'after' ? ' is-highlight' : ''}">
            <span class="pdp-path-flow__step-text">${step}</span>
          </span>${connector}`;
      })
      .join('');

  return `
    <div class="pdp-path-flow-strategy">
      <div class="pdp-path-flow-strategy__lanes pdp-path-flow-strategy__lanes--horizontal">
        <div class="pdp-path-flow-strategy__lane pdp-path-flow-strategy__lane--before">
          <div class="pdp-path-flow__track">${renderTrack(beforeSteps, 'before')}</div>
        </div>
        <div class="pdp-path-flow-strategy__shift pdp-path-flow-strategy__shift--horizontal" aria-hidden="true">→</div>
        <div class="pdp-path-flow-strategy__lane pdp-path-flow-strategy__lane--after">
          <div class="pdp-path-flow__track">${renderTrack(afterSteps, 'after')}</div>
        </div>
      </div>
    </div>`;
}

function renderPdpStrategyCard(item, { compact = false, index = null } = {}) {
  const indexHtml =
    index != null
      ? `<span class="pdp-strategy-card__index">${String(index + 1).padStart(2, '0')}</span>`
      : '';

  return `
    <article class="pdp-strategy-card${compact ? ' pdp-strategy-card--compact' : ''}">
      <header class="pdp-strategy-card__head">
        ${indexHtml}
        <h6 class="pdp-strategy-card__title">${item.title}</h6>
      </header>
      <p class="pdp-strategy-card__text">${item.text}</p>
    </article>`;
}

function renderPdpPhaseTwoStrategyItem(item, { split = false, textOnly = false, asRowContent = false, index = null } = {}) {
  if (typeof item === 'string') {
    const visual = `<div class="pdp-strategy-note"><p>${item}</p></div>`;
    if (asRowContent) return `<div class="pdp-phase-two-strategy-row__body">${visual}</div>`;
    return split
      ? `<article class="pdp-phase-two-strategy-module">${visual}</article>`
      : `<li class="pdp-phase-two-strategy-item">${visual}</li>`;
  }

  const examples = !textOnly && item.examples?.length
    ? split
      ? item.examples
          .map((example) => {
            const recommendDemo = example.flowersRecommendDemo || example.digitalRecommendDemo;
            if (recommendDemo) {
              const isDigital = Boolean(example.digitalRecommendDemo);
              const exampleModifier = isDigital ? 'pdp-phase-two-strategy-example--digital' : 'pdp-phase-two-strategy-example--flowers';
              const interactionLabel = isDigital ? '配色切换' : '同店推荐切换';
              return `
          <figure
            class="pdp-phase-two-strategy-example pdp-phase-two-strategy-example--pair ${exampleModifier}"
            data-pdp-flowers-recommend-card
            tabindex="0"
            aria-label="${example.alt || example.label} · ${interactionLabel}"
          >
            <figcaption class="pdp-phase-two-strategy-example__label">${example.label}<span class="pdp-phase-two-strategy-example__hint">悬停自动播放</span></figcaption>
            ${renderPdpFlowersRecommendDemo(recommendDemo)}
          </figure>`;
            }

            return `
          <figure class="pdp-phase-two-strategy-example pdp-phase-two-strategy-example--pair">
            <figcaption class="pdp-phase-two-strategy-example__label">${example.label}</figcaption>
            <img class="pdp-phase-two-strategy-example__img" src="${example.src}" alt="${example.alt || example.label}" loading="lazy" decoding="async" />
          </figure>`;
          })
          .join('')
      : `
        <div class="pdp-phase-two-strategy-examples">
          ${item.examples
            .map(
              (example) => `
          <figure class="pdp-phase-two-strategy-example">
            <figcaption class="pdp-phase-two-strategy-example__label">${example.label}</figcaption>
            ${renderPdpScreenMockup({ src: example.src, alt: example.alt || example.label }, { flat: true })}
          </figure>`
            )
            .join('')}
        </div>`
    : '';

  const interactiveDemo =
    !textOnly && item.interactiveDemo
      ? split
        ? `
        <div class="pdp-phase-two-strategy-examples">
          <figure class="pdp-phase-two-strategy-example pdp-phase-two-strategy-example--interactive" data-pdp-digital-param-demo-card>
            ${renderPdpDigitalParamDemo(item.interactiveDemo, { split: true })}
          </figure>
        </div>`
        : `<div class="pdp-phase-two-strategy-interactive">${renderPdpDigitalParamDemo(item.interactiveDemo)}</div>`
      : '';

  const card = renderPdpStrategyCard(item, { compact: asRowContent, index });

  const content = asRowContent
    ? `${card}${examples}`
    : `${card}${examples}${interactiveDemo}`;

  return asRowContent
    ? `<div class="pdp-phase-two-strategy-row__body">${content}</div>`
    : split
      ? `<article class="pdp-phase-two-strategy-module">${content}</article>`
      : `<li class="pdp-phase-two-strategy-item">${content}</li>`;
}

function renderPdpPhaseTwoSplitRowRightLabels(row) {
  if (row.interactiveDemo) {
    return '';
  }

  const comparison = row.category?.comparison;
  const beforeLabel = comparison?.before?.label || 'Before';
  const afterLabel = comparison?.afterStatic?.label || comparison?.afterInteractive?.label || 'After';
  return `
            <span class="pdp-phase-two-compare__label">${beforeLabel}</span>
            <span class="pdp-phase-two-compare__label pdp-phase-two-compare__label--after">${afterLabel}</span>`;
}

function renderPdpPhaseTwoSplitRowRightVisual(row) {
  if (row.interactiveDemo) {
    return `
        <div class="pdp-phase-two-split-visual pdp-phase-two-split-visual--interactive">
          <figure class="pdp-phase-two-split-visual__figure" data-pdp-digital-param-demo-card aria-label="${row.interactiveDemo.label || '商详页 · 参数浮层'}">
            ${renderPdpDigitalParamDemo(row.interactiveDemo, { split: true, visualOnly: true })}
          </figure>
        </div>`;
  }

  if (row.category) {
    return renderPdpPhaseTwoCompare(row.category, { hideHead: true, hideLabels: true });
  }

  return '';
}

function renderPdpPhaseTwoSplitRow(row) {
  const strategyContent = renderPdpPhaseTwoStrategyItem(row.strategy, {
    split: true,
    textOnly: Boolean(row.interactiveDemo),
    asRowContent: true,
  });
  const labels = renderPdpPhaseTwoSplitRowRightLabels(row);
  const labelsHtml = labels
    ? `<div class="pdp-phase-two-split-unit__labels" aria-hidden="true">${labels}</div>`
    : '';

  return `
        <article class="pdp-phase-two-split-unit reveal">
          <div class="pdp-phase-two-split-unit__copy">
            ${strategyContent}
          </div>
          <div class="pdp-phase-two-split-unit__showcase">
            ${labelsHtml}
            <div class="pdp-phase-two-split-unit__visuals${row.interactiveDemo ? ' pdp-phase-two-split-unit__visuals--demo' : ''}">
              ${renderPdpPhaseTwoSplitRowRightVisual(row)}
            </div>
          </div>
        </article>`;
}

function renderPdpComparePlaceholder(before, { hideLabel = false } = {}) {
  const label = before?.label || 'Before';
  const caption = hideLabel
    ? ''
    : `<figcaption class="pdp-phase-two-compare__label">${label}</figcaption>`;
  return `
    <figure class="pdp-phase-two-compare__column pdp-phase-two-compare__column--before">
      ${caption}
      <div class="pdp-screen-mockup">
        <div class="pdp-screen-mockup__viewport">
          <div class="pdp-compare-placeholder" aria-label="${before?.alt || '改版前 · 待补充'}">
            <span class="pdp-compare-placeholder__eyebrow">${label}</span>
            <span class="pdp-compare-placeholder__note">改版前 · 待补充</span>
          </div>
        </div>
      </div>
    </figure>`;
}

function renderPdpTrustInteractiveDemo(demo, { embedded = false } = {}) {
  if (!demo?.src) return '';

  const label = demo.label || '鲜花商详 · 信任背书交互';
  const hint = demo.hint || '悬停自动播放';
  const hintHtml = embedded ? '' : `<p class="pdp-trust-interactive-demo__hint">${hint}</p>`;

  return `
    <div class="pdp-trust-interactive-demo${embedded ? ' pdp-trust-interactive-demo--embedded' : ''}" data-pdp-trust-interactive>
      ${hintHtml}
      <iframe
        class="pdp-trust-interactive-demo__frame"
        src="${demo.src}"
        title="${label}"
        loading="lazy"
        tabindex="0"
      ></iframe>
    </div>`;
}

function renderPdpPhaseTwoTrustCompare(trustCompare) {
  if (!trustCompare) return '';

  const beforeColumn = trustCompare.before?.placeholder
    ? renderPdpComparePlaceholder(trustCompare.before, { hideLabel: true })
    : trustCompare.before?.src
      ? `
    <figure class="pdp-phase-two-compare__column pdp-phase-two-compare__column--before">
      ${renderPdpScreenMockup(trustCompare.before, { flat: true, designFlat: true })}
    </figure>`
      : renderPdpComparePlaceholder(trustCompare.before || {}, { hideLabel: true });

  const afterColumn = trustCompare.after?.src
    ? `
    <figure class="pdp-phase-two-compare__column pdp-phase-two-compare__column--after">
      ${renderPdpScreenMockup(trustCompare.after, { flat: true, designFlat: true })}
    </figure>`
    : '';

  return `
    <div class="pdp-phase-two-compare pdp-phase-two-compare--trust">
      ${beforeColumn}
      ${afterColumn}
    </div>`;
}

function renderPdpPhaseTwoSection(section) {
  const goalLabel = section.goalLabel || '设计目标';
  const isDetailCopy = goalLabel === '核心目标';
  const isSplitLayout = section.layout === 'split' && section.categories?.length;
  const isSplitRowsLayout = section.layout === 'split-rows' && section.splitRows?.length;
  const isSplitTrustLayout = section.layout === 'split-trust' && section.trustCompare;

  const strategyItems = (section.strategies || [])
    .map((item, index) => renderPdpPhaseTwoStrategyItem(item, { split: Boolean(isSplitLayout), index }))
    .join('');

  const strategiesList = isSplitLayout
    ? `<div class="pdp-phase-two-strategy-modules">${strategyItems}</div>`
    : `<ul class="pdp-phase-two-strategy-list">${strategyItems}</ul>`;
  const strategiesBlock = strategyItems.trim()
    ? `
    <div class="pdp-phase-two-module__strategies pdp-phase-two-module__strategies--tier-tertiary">
      ${strategiesList}
    </div>`
    : '';

  let body = '';
  if (isSplitTrustLayout) {
    const trustDemoHtml = section.trustCompare.interactiveDemo
      ? `
        <div class="pdp-phase-two-module__visuals pdp-phase-two-module__visuals--center pdp-phase-two-module__visuals--trust-demo reveal">
          ${renderPdpTrustInteractiveDemo(section.trustCompare.interactiveDemo)}
        </div>`
      : '';

    body = `
      <div class="pdp-phase-two-module__split pdp-phase-two-module__split--trust">
        <article class="pdp-phase-two-split-unit reveal">
          <div class="pdp-phase-two-split-unit__copy">
            ${strategiesBlock}
          </div>
          <div class="pdp-phase-two-split-unit__showcase">
            <div class="pdp-phase-two-split-unit__labels" aria-hidden="true">
              <span class="pdp-phase-two-compare__label">${section.trustCompare.before?.label || 'Before'}</span>
              <span class="pdp-phase-two-compare__label pdp-phase-two-compare__label--after">${section.trustCompare.after?.label || 'After'}</span>
            </div>
            <div class="pdp-phase-two-split-unit__visuals pdp-phase-two-split-unit__visuals--trust">
              ${renderPdpPhaseTwoTrustCompare(section.trustCompare)}
            </div>
          </div>
        </article>
        ${trustDemoHtml}
      </div>`;
  } else if (isSplitRowsLayout) {
    body = `
      <div class="pdp-phase-two-module__split pdp-phase-two-module__split--rows">
        ${section.splitRows.map((row) => renderPdpPhaseTwoSplitRow(row)).join('')}
      </div>`;
  } else if (section.layout === 'split' && section.categories?.length) {
    const [primaryCategory] = section.categories;
    const beforeLabel = primaryCategory.comparison?.before?.label || '改版前';
    const afterLabel =
      primaryCategory.comparison?.afterStatic?.label ||
      primaryCategory.comparison?.afterInteractive?.label ||
      '改版后';
    body = `
      <div class="pdp-phase-two-module__split">
        <div class="pdp-phase-two-module__split-row pdp-phase-two-module__split-row--body">
          <div class="pdp-phase-two-module__split-labels pdp-phase-two-module__split-labels--compare" aria-hidden="true">
            <span class="pdp-phase-two-compare__label">${beforeLabel}</span>
            <span class="pdp-phase-two-compare__label pdp-phase-two-compare__label--after">${afterLabel}</span>
          </div>
          <div class="pdp-phase-two-module__strategies pdp-phase-two-module__strategies--split pdp-phase-two-module__strategies--tier-tertiary">
            ${strategiesList}
          </div>
          <div class="pdp-phase-two-module__visuals pdp-phase-two-module__visuals--compare">
            ${section.categories.map((category) => renderPdpPhaseTwoCompare(category, { hideHead: true, hideLabels: true })).join('')}
          </div>
        </div>
      </div>`;
  } else {
    let visuals = '';
    if (section.pathDemos?.length) {
      visuals = `
        <div class="pdp-phase-two-module__visuals pdp-phase-two-module__visuals--center">
          ${renderPdpPathDemoGallery(section.pathDemos, { renderScrollMockup: renderPdpScrollMockup })}
        </div>`;
    } else if (section.pathDemo) {
      visuals = `
        <div class="pdp-phase-two-module__visuals pdp-phase-two-module__visuals--center">
          ${renderPdpPathDemo(section.pathDemo, { renderScrollMockup: renderPdpScrollMockup })}
        </div>`;
    } else if (section.categories?.length) {
      visuals = `
        <div class="pdp-phase-two-module__visuals">
          ${section.categories.map(renderPdpPhaseTwoCompare).join('')}
        </div>`;
    }
    body = `${strategiesBlock}${visuals}`;
  }

  return `
    <section class="pdp-phase-two-module${isDetailCopy ? ' pdp-phase-two-module--detail' : ''} reveal" aria-labelledby="pdp-phase-two-module-${section.index}">
      <div class="pdp-phase-two-module__intro-group">
        <header class="pdp-phase-two-module__head pdp-phase-two-module__head--tier-primary">
          <h5 class="pdp-phase-two-module__title" id="pdp-phase-two-module-${section.index}">${section.index}、${section.title}</h5>
        </header>
        <dl class="pdp-phase-two-module__goal pdp-phase-two-module__goal--tier-secondary">
          <dt>${goalLabel}</dt>
          <dd>${section.goal}</dd>
        </dl>
      </div>
      ${body}
    </section>`;
}

function renderPdpPhaseTwoPanel(phaseTwo) {
  const sections = phaseTwo.sections || [];
  if (!sections.length) return '';

  return `
    <div class="pdp-phase-two-body">
      ${sections.map(renderPdpPhaseTwoSection).join('')}
    </div>`;
}

function renderPdpPhaseTwoCompare(category, { staticOnly = false, hideHead = false, hideLabels = false } = {}) {
  const { comparison, name } = category;
  if (!comparison) return '';

  const { before, afterStatic, afterInteractive } = comparison;
  const flowersDemo = afterInteractive?.flowersPdpDemo;
  const afterLabel = afterInteractive?.label || afterStatic?.label || '改版后';

  const labelHtml = (label, after = false, hint = '') =>
    hideLabels
      ? ''
      : `
            <figcaption class="pdp-phase-two-compare__label${after ? ' pdp-phase-two-compare__label--after' : ''}">${label}${hint}</figcaption>`;

  const afterColumn =
    !staticOnly && flowersDemo
      ? `
          <figure
            class="pdp-phase-two-compare__column pdp-phase-two-compare__column--after-interactive reveal"
            data-pdp-flowers-recommend-card
            tabindex="0"
            aria-label="${name} · 改版后 · 同店推荐切换"
          >
            ${labelHtml(afterLabel, true, '<span class="pdp-phase-two-compare__hint">悬停自动播放</span>')}
            ${renderPdpFlowersPdpDemo(flowersDemo)}
          </figure>`
      : afterStatic
        ? `
          <figure class="pdp-phase-two-compare__column pdp-phase-two-compare__column--after">
            ${labelHtml(afterStatic.label, true)}
            ${renderPdpScreenMockup(afterStatic, { flat: true, designFlat: true })}
          </figure>`
        : '';

  const categoryHead = hideHead
    ? ''
    : `
      <header class="pdp-phase-two-category__head">
        <h4 class="pdp-phase-two-category__title">${name}</h4>
      </header>`;

  return `
    <article class="pdp-phase-two-category reveal">
      ${categoryHead}
      <div class="pdp-phase-two-category__visuals">
        <div class="pdp-phase-two-compare pdp-phase-two-compare--primary">
          <figure class="pdp-phase-two-compare__column pdp-phase-two-compare__column--before">
            ${labelHtml(before.label)}
            ${renderPdpScreenMockup(before, { flat: true, designFlat: true })}
          </figure>
          ${afterColumn}
        </div>
      </div>
    </article>`;
}

function renderPdpInsightHeroRing(metric) {
  const trend = metric.trend || 'up';
  const ringColor =
    trend === 'up' ? 'var(--pdp-accent)' : trend === 'down' ? '#1a9b5c' : 'rgba(31, 31, 36, 0.38)';
  const ringPct = Math.min(Math.max(metric.fillPct ?? 72, 0), 100);
  const circumference = 113;
  const dash = (ringPct / 100) * circumference;

  return `
    <div class="pdp-insight-gauge__chart-inner">
      <div class="pdp-insight-gauge__ring pdp-insight-ring pdp-insight-ring--${trend}" data-pdp-ring data-ring-target="${dash}" style="--ring-dash: 0; --ring-circ: ${circumference}; --ring-color: ${ringColor};" aria-hidden="true">
        <svg class="pdp-insight-ring__svg" viewBox="0 0 44 44">
          <circle class="pdp-insight-ring__track" cx="22" cy="22" r="18" />
          <circle class="pdp-insight-ring__fill" cx="22" cy="22" r="18" />
        </svg>
      </div>
      <div class="pdp-insight-gauge__hero-data">
        <span class="pdp-insight-gauge__value pdp-insight-gauge__value--${trend}">${formatInsightDelta(metric.change, metric.changeNote)}</span>
        <span class="pdp-insight-gauge__label pdp-insight-gauge__chart-label">${metric.label}</span>
      </div>
    </div>`;
}

function renderPdpInsightRing(value, { unit = '%', trend = 'accent', label = '', fillPct = 0 } = {}) {
  const ringColor =
    trend === 'up' ? 'var(--pdp-accent)' : trend === 'down' ? '#d14343' : trend === 'stable' ? '#8a8a96' : 'var(--pdp-accent)';
  const ringPct = value > 0 ? Math.min(Math.max(value, 0), 100) : Math.min(Math.max(fillPct, 0), 100);
  const display = value > 0 ? `${value}${unit}` : label;
  const circumference = 113;
  const dash = (ringPct / 100) * circumference;
  const countAttrs =
    value > 0
      ? ` data-count="${value}" data-suffix="${unit}" data-decimals="0"`
      : '';

  return `
    <div class="pdp-insight-ring pdp-insight-ring--${trend}" data-pdp-ring data-ring-target="${dash}" style="--ring-dash: 0; --ring-circ: ${circumference}; --ring-color: ${ringColor};" aria-hidden="true">
      <svg class="pdp-insight-ring__svg" viewBox="0 0 44 44">
        <circle class="pdp-insight-ring__track" cx="22" cy="22" r="18" />
        <circle class="pdp-insight-ring__fill" cx="22" cy="22" r="18" />
      </svg>
      <span class="pdp-insight-ring__value"${countAttrs}>${value > 0 ? `0${unit}` : display}</span>
    </div>`;
}

function formatInsightDelta(primary, secondary) {
  if (!primary) return secondary || '持平';
  return secondary ? `${primary}/${secondary}` : primary;
}

function renderPdpInsightHoverItem({ surface, detail, trend = '' }) {
  return `
    <li class="pdp-insight-stat pdp-insight-stat--${trend || 'default'}" tabindex="0">
      <div class="pdp-insight-stat__surface">${surface}</div>
      ${detail ? `<div class="pdp-insight-stat__detail" role="tooltip">${detail}</div>` : ''}
    </li>`;
}

function renderPdpInsightMetricSurface(metric) {
  const hoverDetail =
    metric.before !== '—'
      ? `<p>${metric.before} → ${metric.after}</p>`
      : '';

  return renderPdpInsightHoverItem({
    trend: metric.trend,
    surface: `<span class="pdp-insight-stat__value">${formatInsightDelta(metric.change, metric.changeNote)}</span><span class="pdp-insight-stat__label">${metric.label}</span>`,
    detail: hoverDetail,
  });
}

function renderPdpInsightCategorySurface(item) {
  const hoverDetail = item.desc ? `<p>${item.desc}</p>` : item.tag ? `<p>${item.tag}</p>` : '';

  return renderPdpInsightHoverItem({
    trend: item.trend,
    surface: `<span class="pdp-insight-stat__value">${formatInsightDelta(item.highlight, item.changeNote)}</span><span class="pdp-insight-stat__label">${item.name}</span>`,
    detail: hoverDetail,
  });
}

function renderPdpInsightPainItem(point) {
  const ring =
    point.pct > 0
      ? renderPdpInsightRing(point.pct, { trend: point.severity === 'critical' ? 'accent' : 'stable' })
      : renderPdpInsightRing(0, { trend: 'accent', label: '核心', fillPct: 88 });

  return `
    <li class="pdp-insight-pain-row pdp-insight-pain-row--${point.severity}" tabindex="0">
      ${ring}
      <div class="pdp-insight-pain-row__body">
        <strong class="pdp-insight-pain-row__title">${point.title}</strong>
        <p class="pdp-insight-pain-row__desc">${point.desc}</p>
      </div>
    </li>`;
}

function renderPdpInsightInlineMore(triggerLabel, panelHtml) {
  return `
    <div class="pdp-insight-panel__more pdp-insight-panel__more--inline" tabindex="0">
      <span class="pdp-insight-panel__more-trigger">${triggerLabel}</span>
      <div class="pdp-insight-panel__more-panel">${panelHtml}</div>
    </div>`;
}

function renderPdpInsightEyebrowRow(label, moreHtml = '') {
  return `
    <div class="pdp-insight-glass-stage__row">
      <p class="pdp-insight-glass-stage__eyebrow">${label}</p>
      ${moreHtml}
    </div>`;
}

function renderPdpInsightPriorityTile(metric) {
  const trend = metric.trend || 'neutral';
  return `
    <article class="pdp-insight-metric-tile pdp-insight-metric-tile--${trend}">
      <span class="pdp-insight-metric-tile__label">${metric.label}</span>
      <span class="pdp-insight-metric-tile__value">${formatInsightDelta(metric.change, metric.changeNote)}</span>
    </article>`;
}

function renderPdpInsightCategoryChip(item) {
  return `
    <li class="pdp-insight-category-chip pdp-insight-category-chip--${item.trend}">
      <span class="pdp-insight-category-chip__name">${item.name}</span>
      <span class="pdp-insight-category-chip__value">${formatInsightDelta(item.highlight, item.changeNote)}</span>
    </li>`;
}

function renderPdpInsightNativeQuote(quote) {
  const avatar = quote.avatar
    ? `<img class="pdp-insight-native-chip__avatar" src="${quote.avatar}" alt="" width="22" height="22" loading="lazy" decoding="async" draggable="false" />`
    : `<span class="pdp-insight-native-chip__avatar" aria-hidden="true">${quote.initial || '用'}</span>`;

  return `
    <span class="pdp-insight-native-chip">
      ${avatar}
      <span class="pdp-insight-native-chip__text">${quote.text}</span>
    </span>`;
}

function renderPdpInsightConclusionBox(item) {
  return `
    <article class="pdp-insight-conclusion-box">
      <h6 class="pdp-insight-conclusion-box__title">${item.title}</h6>
      <p class="pdp-insight-conclusion-box__desc${item.singleLine ? ' pdp-insight-conclusion-box__desc--single-line' : ''}">${item.desc}</p>
    </article>`;
}

function renderPdpInsightIterationIcon(type) {
  const icons = {
    path: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M6.2 4.8a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm11.6 10.4a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Z" opacity="0.92"></path>
        <path fill="currentColor" d="M8.1 6.8h4.8a2.6 2.6 0 0 1 2.6 2.6v1.8h1.9a2.6 2.6 0 0 1 2.6 2.6v1.8" opacity="0.28"></path>
        <path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M8.1 6.8h4.8a2.6 2.6 0 0 1 2.6 2.6v1.8h1.9a2.6 2.6 0 0 1 2.6 2.6v1.8"></path>
      </svg>`,
    layout: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="7" height="7" rx="2" fill="currentColor" opacity="0.92"></rect>
        <rect x="13" y="4" width="7" height="7" rx="2" fill="currentColor" opacity="0.62"></rect>
        <rect x="4" y="13" width="7" height="7" rx="2" fill="currentColor" opacity="0.62"></rect>
        <rect x="13" y="13" width="7" height="7" rx="2" fill="currentColor" opacity="0.38"></rect>
      </svg>`,
    trust: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 3.2 5.4 6.1v5.9c0 4.1 2.8 7.2 6.6 8.5 3.8-1.3 6.6-4.4 6.6-8.5V6.1L12 3.2Z"></path>
        <path fill="#fff" d="m9.4 12.1 1.7 1.7 3.7-3.7 1.3 1.3-5 5-3-3 1.3-1.3 1.7 1.7Z"></path>
      </svg>`,
  };

  return icons[type] || icons.path;
}

function renderPdpInsightDataCard(section) {
  const { heroMetric, overall, categories } = section;
  const priorityMetrics = [
    heroMetric,
    ...overall.metrics
      .filter((metric) => metric.label !== heroMetric.label)
      .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99)),
  ];
  const categoryItems = categories.items.map(renderPdpInsightCategoryChip);

  const overallDetail = `
    <p>${section.summary || '改版实现体验优化、转化稳健，无业务负向损耗。'}</p>
    <ul>${overall.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>`;

  const categoriesDetail = `
    <p>${categories.summary}</p>
    ${categories.items.map((item) => `<p><strong>${item.name}</strong>：${item.desc}</p>`).join('')}
    <p class="pdp-insight-note">${categories.footnote}</p>`;

  const leadText = categories.summary
    ? `${section.headline}；${categories.summary}`
    : section.headline;

  return `
    <article class="pdp-insight-card pdp-insight-card--data reveal">
      <header class="pdp-insight-card__head">
        <div class="pdp-insight-card__head-main pdp-insight-card__head-main--compact">
          <h5 class="pdp-insight-card__title">${section.title}</h5>
          <p class="pdp-insight-card__lead">${leadText}</p>
        </div>
        ${renderPdpInsightInlineMore('详情', `${overallDetail}${categoriesDetail}`)}
      </header>

      <div class="pdp-insight-glass-stage pdp-insight-glass-stage--data">
        <p class="pdp-insight-glass-stage__eyebrow">核心指标</p>
        <div class="pdp-insight-data-priority">
          ${priorityMetrics.map((metric) => renderPdpInsightPriorityTile(metric)).join('')}
        </div>

        <div class="pdp-insight-data-categories">
          <p class="pdp-insight-glass-stage__eyebrow">${categories.title || '全品类效果汇总'}</p>
          <ul class="pdp-insight-data-category-row">${categoryItems.join('')}</ul>
        </div>
      </div>
    </article>`;
}

function renderPdpInsightInterviewCard(section) {
  const nativeQuotesHtml = (section.nativeQuotes || []).map(renderPdpInsightNativeQuote).join('');
  const conclusions = (section.conclusions || []).map(renderPdpInsightConclusionBox).join('');
  const fullDetail = section.painPoints
    .map(
      (p) =>
        `<p>${p.pct > 0 ? `<strong>${p.pct}%</strong> · ` : `<strong>${p.badge}</strong> · `}${p.title}：${p.desc}</p>`
    )
    .join('');

  return `
    <article class="pdp-insight-card pdp-insight-card--interview reveal">
      <header class="pdp-insight-card__head">
        <div class="pdp-insight-card__head-main">
          <h5 class="pdp-insight-card__title">${section.title}</h5>
        </div>
        ${renderPdpInsightInlineMore('深度访谈详情', fullDetail)}
      </header>

      <div class="pdp-insight-glass-stage pdp-insight-glass-stage--pain">
        <div class="pdp-insight-pain-native">
          <p class="pdp-insight-glass-stage__eyebrow">${section.nativeLabel || '用户原生'}</p>
          <div class="pdp-insight-native-cloud" data-pdp-native-marquee>
            <div class="pdp-insight-native-cloud__viewport">
              <div class="pdp-insight-native-cloud__track">
                <div class="pdp-insight-native-cloud__set">${nativeQuotesHtml}</div>
                <div class="pdp-insight-native-cloud__set" aria-hidden="true">${nativeQuotesHtml}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="pdp-insight-pain-extract">
          <p class="pdp-insight-glass-stage__eyebrow">${section.extractLabel || '痛点挖掘结论'}</p>
          <div class="pdp-insight-conclusion-stack">${conclusions}</div>
        </div>
      </div>
    </article>`;
}

function renderPdpInsightIterationCard(section) {
  const iconTypes = ['path', 'layout', 'trust'];
  const pillars = section.directions
    .map(
      (dir, index) => `
      <article class="pdp-insight-iteration-card">
        <div class="pdp-insight-iteration-card__icon" aria-hidden="true">
          ${renderPdpInsightIterationIcon(iconTypes[index] || 'path')}
        </div>
        <h6 class="pdp-insight-iteration-card__title">${dir.title}</h6>
        <p class="pdp-insight-iteration-card__desc">${dir.desc}</p>
      </article>`
    )
    .join('');

  return `
    <article class="pdp-insight-card pdp-insight-card--iteration reveal">
      <header class="pdp-insight-card__head">
        <div class="pdp-insight-card__head-main">
          <h5 class="pdp-insight-card__title" id="pdp-insight-iteration">${section.title}</h5>
        </div>
      </header>
      <div class="pdp-insight-iteration-grid">${pillars}</div>
    </article>`;
}

function renderPdpPhaseOneInsights(insights) {
  if (!insights) return '';

  return `
    <section class="pdp-design-insights reveal" aria-labelledby="pdp-design-insights">
      <span class="pdp-design-phase__badge">${insights.badge}</span>
      <h4 class="pdp-design-phase__title" id="pdp-design-insights">${insights.title}</h4>

      <div class="pdp-insights-board pdp-insights-board--scheme-c" data-pdp-insight-chart>
        ${renderPdpInsightDataCard(insights.dataSection)}
        ${renderPdpInsightInterviewCard(insights.interviewSection)}
        ${renderPdpInsightIterationCard(insights.iterationSection)}
      </div>
    </section>`;
}

function bindPdpInsightPainHeights() {
  const sync = () => {
    document.querySelectorAll('.pdp-insight-glass-stage--pain').forEach((stage) => {
      const stack = stage.querySelector('.pdp-insight-conclusion-stack');
      const cloud = stage.querySelector('.pdp-insight-native-cloud');
      if (!stack || !cloud) return;

      cloud.style.height = '';
      cloud.style.minHeight = '';
      cloud.style.maxHeight = '';

      const stackHeight = Math.ceil(stack.getBoundingClientRect().height);
      if (stackHeight > 0) {
        cloud.style.height = `${stackHeight}px`;
        cloud.style.minHeight = `${stackHeight}px`;
      }
    });
  };

  sync();

  requestAnimationFrame(() => {
    sync();
    requestAnimationFrame(sync);
  });

  if (document.fonts?.ready) {
    document.fonts.ready.then(sync).catch(() => {});
  }

  if (typeof ResizeObserver !== 'undefined') {
    document.querySelectorAll('.pdp-insight-conclusion-stack').forEach((stack) => {
      const observer = new ResizeObserver(sync);
      observer.observe(stack);
    });
  }

  window.addEventListener('resize', sync, { passive: true });
}

function bindPdpNativeMarquee() {
  const PX_PER_SEC = 20;

  document.querySelectorAll('[data-pdp-native-marquee]').forEach((cloud) => {
    if (cloud.dataset.pdpNativeMarqueeBound === 'true') return;
    cloud.dataset.pdpNativeMarqueeBound = 'true';

    const syncDuration = () => {
      const set = cloud.querySelector('.pdp-insight-native-cloud__set:not([aria-hidden="true"])');
      if (!set) return;

      const setHeight = set.getBoundingClientRect().height;
      if (setHeight > 0) {
        const duration = Math.max(setHeight / PX_PER_SEC, 22);
        cloud.style.setProperty('--pdp-native-marquee-duration', `${duration.toFixed(1)}s`);
      }
    };

    syncDuration();

    requestAnimationFrame(() => {
      syncDuration();
      requestAnimationFrame(syncDuration);
    });

    if (document.fonts?.ready) {
      document.fonts.ready.then(syncDuration).catch(() => {});
    }

    const set = cloud.querySelector('.pdp-insight-native-cloud__set:not([aria-hidden="true"])');
    if (set && typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(syncDuration).observe(set);
    }

    window.addEventListener('resize', syncDuration, { passive: true });
  });
}

function bindPdpInsightsExpand() {
  document.querySelectorAll('.pdp-insight-stat, .pdp-insight-pain-row').forEach((item) => {
    item.addEventListener('click', () => {
      if (window.matchMedia('(hover: hover)').matches) return;
      item.classList.toggle('is-open');
    });
  });

  document.querySelectorAll('.pdp-insight-panel__more').forEach((block) => {
    block.addEventListener('click', () => {
      if (window.matchMedia('(hover: hover)').matches) return;
      block.classList.toggle('is-open');
    });
  });
}

function animatePdpInsightRing(ring) {
  const target = parseFloat(ring.dataset.ringTarget) || 0;
  const circumference = 113;
  const duration = 1200;
  const start = performance.now();

  ring.classList.add('is-animating');

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    ring.style.setProperty('--ring-dash', `${target * eased}`);
    if (progress < 1) requestAnimationFrame(tick);
    else ring.classList.remove('is-animating');
  }

  requestAnimationFrame(tick);
}

function animatePdpInsightGauge(gauge) {
  const fill = gauge.querySelector('.pdp-insight-gauge__fill');
  if (!fill) return;

  const arcLen = 182;
  const pct = Math.min(Math.max(parseFloat(gauge.dataset.gaugeFill) || 72, 0), 100);
  const targetOffset = arcLen * (1 - pct / 100);

  fill.style.strokeDasharray = `${arcLen}`;
  fill.style.strokeDashoffset = `${arcLen}`;
  gauge.classList.add('is-animating');

  requestAnimationFrame(() => {
    fill.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.22, 1, 0.36, 1)';
    fill.style.strokeDashoffset = `${targetOffset}`;
    window.setTimeout(() => gauge.classList.remove('is-animating'), 1400);
  });
}

function bindPdpInsightCharts() {
  if (typeof IntersectionObserver === 'undefined') return;

  document.querySelectorAll('[data-pdp-insight-chart]').forEach((root) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.target.dataset.chartAnimated === 'true') return;
          entry.target.dataset.chartAnimated = 'true';

          entry.target.querySelectorAll('[data-pdp-gauge]').forEach(animatePdpInsightGauge);
          entry.target.querySelectorAll('[data-pdp-ring]').forEach(animatePdpInsightRing);
          entry.target.querySelectorAll('.pdp-insight-ring__value[data-count]').forEach((el) => {
            if (!el.dataset.animated) {
              el.dataset.animated = 'true';
              animateCount(el);
            }
          });
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -5% 0px' }
    );

    observer.observe(root);
  });
}

function renderPdpDesignPanel(project) {
  const panel = project.designPanel;
  if (!panel) return '';

  const phaseOne = panel.phaseOne;
  const phaseOneInsights = panel.phaseOneInsights;
  const phaseTwo = panel.phaseTwo;

  return `
    <div class="pdp-panel pdp-panel--design">
      <div class="pdp-panel__inner project-content-inner">
        ${renderSubnavRevealMarker(project)}
        <header class="pdp-section-head reveal">
          <span class="pdp-section-head__index">${panel.index}</span>
          <h3 class="pdp-section-head__title">方案<span class="pdp-highlight">设计</span></h3>
        </header>

        ${panel.overview ? renderPdpDesignOverview(panel.overview) : ''}

        <section class="pdp-design-phase reveal" aria-labelledby="pdp-design-phase-one">
          <div class="pdp-design-phase__card">
            <span class="pdp-design-phase__badge">${phaseOne.badge}</span>
            <div class="pdp-design-phase__intro">
              <h4 class="pdp-design-phase__title" id="pdp-design-phase-one">${phaseOne.title}</h4>
            </div>
            ${phaseOne.beforeProblems ? renderPdpBeforeProblems(phaseOne.beforeProblems) : ''}
            ${phaseOne.framework ? renderPdpFrameworkOverview(phaseOne.framework) : ''}
            <section class="pdp-design-subsection reveal" aria-label="${phaseOne.schemesTitle || '改版方案'}">
              ${phaseOne.schemesTitle ? `<h5 class="pdp-design-subsection__title">${phaseOne.schemesTitle}</h5>` : ''}
              ${renderPdpSchemeExplorer(
                phaseOne.framework?.schemeWireframe || phaseOne.framework?.comparison?.after,
                phaseOne.schemes
              )}
            </section>
          </div>
        </section>

        ${phaseOneInsights ? renderPdpPhaseOneInsights(phaseOneInsights) : ''}

        <section class="pdp-design-phase reveal" aria-labelledby="pdp-design-phase-two">
          <div class="pdp-design-phase__card">
            <span class="pdp-design-phase__badge">${phaseTwo.badge}</span>
            <div class="pdp-design-phase__intro">
              <h4 class="pdp-design-phase__title" id="pdp-design-phase-two">${phaseTwo.title}</h4>
              ${phaseTwo.intro ? `<p class="pdp-design-copy pdp-design-copy--lead">${phaseTwo.intro}</p>` : ''}
            </div>
            ${renderPdpPhaseTwoPanel(phaseTwo)}
          </div>
        </section>
      </div>
    </div>
  `;
}

function parsePdpHotspotRect(spot) {
  return {
    top: parseFloat(spot.style.top),
    left: parseFloat(spot.style.left),
    width: parseFloat(spot.style.width),
    height: parseFloat(spot.style.height),
  };
}

function groupContiguousPdpRects(rects) {
  if (!rects.length) return [];

  const sorted = [...rects].sort((a, b) => a.top - b.top);
  const groups = [[sorted[0]]];

  for (let i = 1; i < sorted.length; i += 1) {
    const prev = groups[groups.length - 1].at(-1);
    const gap = sorted[i].top - (prev.top + prev.height);
    if (gap <= 0.35) {
      groups[groups.length - 1].push(sorted[i]);
    } else {
      groups.push([sorted[i]]);
    }
  }

  return groups.map((group) => {
    const top = Math.min(...group.map((rect) => rect.top));
    const left = Math.min(...group.map((rect) => rect.left));
    const bottom = Math.max(...group.map((rect) => rect.top + rect.height));
    const right = Math.max(...group.map((rect) => rect.left + rect.width));
    return { top, left, width: right - left, height: bottom - top };
  });
}

function updatePdpFrameworkMerges(root) {
  root.querySelectorAll('[data-pdp-framework-side]').forEach((shot) => {
    const container = shot.querySelector('[data-pdp-framework-merges]');
    if (!container) return;

    container.innerHTML = '';
    const activeSpots = [
      ...shot.querySelectorAll('[data-pdp-framework-region].is-active:not(.is-hidden)'),
    ];
    if (!activeSpots.length) return;

    groupContiguousPdpRects(activeSpots.map(parsePdpHotspotRect)).forEach((rect) => {
      const merge = document.createElement('span');
      merge.className = 'pdp-framework__highlight-merge';
      merge.style.top = `${rect.top}%`;
      merge.style.left = `${rect.left}%`;
      merge.style.width = `${rect.width}%`;
      merge.style.height = `${rect.height}%`;
      container.appendChild(merge);
    });
  });
}

function bindPdpSchemeDemo(device) {
  if (!device || device.dataset.pdpSchemeDemoBound === 'true') return;

  const hero = device.querySelector('[data-pdp-scheme-demo-hero]');
  const hotspots = [...device.querySelectorAll('[data-pdp-scheme-demo-target]')];
  if (!hero || !hotspots.length) return;

  device.dataset.pdpSchemeDemoBound = 'true';

  const setStage = (target) => {
    const isReview = target === 'review';
    hero.classList.toggle('is-active', isReview);
    hero.setAttribute('aria-hidden', isReview ? 'false' : 'true');
    hotspots.forEach((hotspot) => {
      const goesTo = hotspot.dataset.pdpSchemeDemoTarget;
      const visible = isReview ? goesTo === 'main' : goesTo === 'review';
      hotspot.hidden = !visible;
    });
    device.dataset.pdpSchemeDemoActive = target;
    const hint = device.querySelector('.pdp-scheme-explorer__demo-hint');
    if (hint) {
      hint.textContent = isReview ? '点击「详情」返回' : '点击「评价」切换';
    }
  };

  setStage('main');

  device.addEventListener('click', (event) => {
    const hotspot = event.target.closest('[data-pdp-scheme-demo-target]');
    if (!hotspot || !device.contains(hotspot) || hotspot.hidden) return;
    event.preventDefault();
    event.stopPropagation();
    setStage(hotspot.dataset.pdpSchemeDemoTarget);
  });
}

function bindPdpSchemeHeroTabs(device) {
  if (!device || device.dataset.pdpSchemeHeroTabsBound === 'true') return;
  const raw = device.dataset.pdpSchemeHeroTabsJson;
  if (!raw) return;

  let tabs = [];
  try {
    tabs = JSON.parse(decodeURIComponent(raw));
  } catch {
    return;
  }
  if (!tabs.length) return;

  device.dataset.pdpSchemeHeroTabsBound = 'true';
  const heroLayer = device.querySelector('[data-pdp-scheme-hero-tab-layer]');
  const img = device.querySelector('[data-pdp-scheme-hero-tab-img]');
  const danmaku = device.querySelector('.pdp-scheme-explorer__danmaku');
  const hint = device.querySelector('.pdp-scheme-explorer__demo-hint');
  const holdMs = Number(device.dataset.pdpSchemeHeroTabsHold) || 1600;
  let index = 0;
  let timer = null;

  tabs.forEach((tab) => {
    if (!tab?.heroSrc) return;
    const preload = new Image();
    preload.src = tab.heroSrc;
  });

  const apply = (i) => {
    index = ((i % tabs.length) + tabs.length) % tabs.length;
    const tab = tabs[index];
    const showHero = Boolean(tab.heroSrc);
    const showDanmaku = Boolean(tab.showDanmaku);

    if (img && tab.heroSrc) {
      img.src = tab.heroSrc;
    }
    if (heroLayer) {
      heroLayer.classList.toggle('is-active', showHero);
      heroLayer.setAttribute('aria-hidden', showHero ? 'false' : 'true');
    }
    if (danmaku) {
      danmaku.classList.toggle('is-hidden', !showDanmaku);
      danmaku.setAttribute('aria-hidden', 'true');
    }
    device.dataset.pdpSchemeHeroTab = tab.id || String(index);
    device.classList.toggle('is-danmaku-off', !showDanmaku);
    if (hint) {
      hint.textContent = '悬停切换';
    }
  };

  const stop = () => {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  };

  const start = () => {
    stop();
    apply(0);
    if (tabs.length < 2) return;
    timer = window.setInterval(() => apply(index + 1), holdMs);
  };

  apply(0);
  bindPdpHoverAutoplay(device, {
    onPlay: start,
    onPause: () => {
      stop();
      apply(0);
    },
  });

  device.addEventListener('pdp-scheme-hero-tabs-reset', () => {
    stop();
    apply(0);
  });
}

function bindPdpHoverAutoplay(target, { onPlay, onPause } = {}) {
  if (!target || typeof onPlay !== 'function' || typeof onPause !== 'function') {
    return () => {};
  }

  let engaged = false;

  const play = () => {
    if (engaged) return;
    engaged = true;
    onPlay();
  };

  const pause = () => {
    if (!engaged) return;
    engaged = false;
    onPause();
  };

  target.addEventListener('mouseenter', play);
  target.addEventListener('mouseleave', pause);
  target.addEventListener('focusin', play);
  target.addEventListener('focusout', (event) => {
    if (!target.contains(event.relatedTarget)) pause();
  });
  target.addEventListener('touchstart', play, { passive: true });

  return () => {
    target.removeEventListener('mouseenter', play);
    target.removeEventListener('mouseleave', pause);
  };
}

function bindPdpDigitalParamDemo() {
  const HIGHLIGHT_MS = PDP_DEMO_RING_HOLD_MS;
  const HOLD_MS = 2600;
  const CLOSE_MS = 420;
  const LOOP_GAP_MS = PDP_DEMO_LOOP_PAUSE_MS;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-pdp-digital-param-demo-card]').forEach((card) => {
    if (card.dataset.pdpDigitalParamBound === 'true') return;
    card.dataset.pdpDigitalParamBound = 'true';

    const overlay = card.querySelector('[data-pdp-digital-param-overlay]');
    const trigger = card.querySelector('[data-pdp-digital-param-trigger]');
    const mask = card.querySelector('.pdp-digital-param-demo__mask');

    const resetStageScroll = () => {
      card.querySelector('.pdp-digital-param-demo__stage')?.scrollTo({ top: 0 });
      card.querySelector('.pdp-digital-param-demo__sheet-wrap')?.scrollTo({ top: 0 });
    };
    let holdTimer = null;
    let closeTimer = null;
    let loopTimer = null;
    let startTimer = null;
    let hovering = false;

    const clearTimers = () => {
      if (holdTimer) window.clearTimeout(holdTimer);
      if (closeTimer) window.clearTimeout(closeTimer);
      if (loopTimer) window.clearTimeout(loopTimer);
      if (startTimer) window.clearTimeout(startTimer);
      holdTimer = closeTimer = loopTimer = startTimer = null;
    };

    const setOverlayHidden = (hidden) => {
      overlay?.setAttribute('aria-hidden', hidden ? 'true' : 'false');
    };

    const scheduleNext = () => {
      if (!hovering || prefersReducedMotion) return;
      loopTimer = window.setTimeout(beginCycle, LOOP_GAP_MS);
    };

    const openSheet = () => {
      clearTimers();
      card.classList.remove('is-closing');
      card.classList.add('is-active');
      setOverlayHidden(false);

      if (prefersReducedMotion) return;

      holdTimer = window.setTimeout(() => {
        closeAnimated({ scheduleLoop: true });
      }, HOLD_MS);
    };

    const beginCycle = () => {
      if (!hovering || prefersReducedMotion) return;
      resetStageScroll();
      trigger?.classList.add('is-active');
      startTimer = window.setTimeout(() => {
        startTimer = null;
        if (!hovering) return;
        openSheet();
      }, HIGHLIGHT_MS);
    };

    const closeAnimated = ({ immediate = false, scheduleLoop = false } = {}) => {
      if (!card.classList.contains('is-active') && !card.classList.contains('is-closing')) {
        trigger?.classList.remove('is-active');
        if (scheduleLoop) scheduleNext();
        return;
      }

      clearTimers();
      trigger?.classList.remove('is-active');

      if (immediate || prefersReducedMotion) {
        card.classList.remove('is-active', 'is-closing');
        setOverlayHidden(true);
        if (scheduleLoop) scheduleNext();
        return;
      }

      card.classList.remove('is-active');
      card.classList.add('is-closing');
      setOverlayHidden(false);

      closeTimer = window.setTimeout(() => {
        card.classList.remove('is-closing');
        setOverlayHidden(true);
        closeTimer = null;
        if (scheduleLoop) scheduleNext();
      }, CLOSE_MS);
    };

    const stop = () => {
      hovering = false;
      clearTimers();
      trigger?.classList.remove('is-active');
      closeAnimated({ immediate: true });
      resetStageScroll();
    };

    const start = () => {
      if (hovering || prefersReducedMotion) return;
      hovering = true;
      beginCycle();
    };

    trigger?.addEventListener('click', (event) => {
      event.preventDefault();
      if (card.classList.contains('is-active') || card.classList.contains('is-closing')) {
        closeAnimated({ immediate: true });
      } else {
        hovering = true;
        clearTimers();
        beginCycle();
      }
    });

    mask?.addEventListener('click', (event) => {
      event.preventDefault();
      closeAnimated({ immediate: true });
    });

    resetStageScroll();
    bindPdpHoverAutoplay(card, { onPlay: start, onPause: stop });
  });
}


function bindPdpFlowersRecommendDemo() {
  document.querySelectorAll('[data-pdp-flowers-recommend-card]').forEach((card) => {
    if (card.dataset.pdpFlowersRecommendBound === 'true') return;
    card.dataset.pdpFlowersRecommendBound = 'true';

    const root = card.querySelector('.pdp-flowers-rec[data-pdp-flowers-pdp]');
    if (!root) return;

    const getController = () => root.__pdpFlowersController;

    const play = () => {
      card.classList.add('is-active');
      getController()?.applyMetrics();
      getController()?.startAuto(1200);
    };

    const pause = () => {
      card.classList.remove('is-active');
      getController()?.stopAuto();
      getController()?.reset();
    };

    bindPdpHoverAutoplay(card, { onPlay: play, onPause: pause });
  });
}


function bindPdpTrustInteractiveDemo() {
  document.querySelectorAll('[data-pdp-trust-interactive]').forEach((wrap) => {
    if (wrap.dataset.pdpTrustInteractiveBound === 'true') return;
    wrap.dataset.pdpTrustInteractiveBound = 'true';

    const frame = wrap.querySelector('.pdp-trust-interactive-demo__frame');
    if (!frame) return;

    const postAutoplay = (playing) => {
      frame.contentWindow?.postMessage({ type: 'pdp-trust-autoplay', playing }, '*');
    };

    frame.addEventListener('load', () => {
      if (wrap.dataset.pdpTrustHovering === 'true') postAutoplay(true);
    });

    bindPdpHoverAutoplay(wrap, {
      onPlay: () => {
        wrap.dataset.pdpTrustHovering = 'true';
        postAutoplay(true);
      },
      onPause: () => {
        wrap.dataset.pdpTrustHovering = 'false';
        postAutoplay(false);
      },
    });
  });
}

function bindPdpPhaseTwoScroll() {
  document.querySelectorAll('[data-pdp-scroll-demo]').forEach((root) => {
    const scroller = root.querySelector('.pdp-scroll-mockup__scroller');
    const img = scroller?.querySelector('img');
    const topChrome = root.querySelector('.pdp-scroll-mockup__chrome--top');
    const navImg = root.querySelector('[data-pdp-scroll-chrome-nav]');
    const tabsImg = root.querySelector('[data-pdp-scroll-chrome-tabs]');
    const bottomImg = root.querySelector('[data-pdp-scroll-chrome-bottom]');
    const tabsNav = root.querySelector('.pdp-scroll-mockup__tabs');
    const tabButtons = tabsNav ? [...tabsNav.querySelectorAll('.pdp-scroll-mockup__tab')] : [];
    const hint = root.querySelector('.pdp-scroll-mockup__hint');
    if (!scroller || !img || !navImg || !tabsImg || !bottomImg || !tabsNav || !topChrome) return;

    const ratioBase = root.dataset.ratioBase || 'viewport';
    const topNavRatio = parseFloat(root.dataset.topNavRatio) || 0.069;
    const tabBarRatio = parseFloat(root.dataset.tabBarRatio) || 0.031;
    const bottomRatio = parseFloat(root.dataset.bottomRatio) || 0.055;
    const tabRevealRatio = parseFloat(root.dataset.tabRevealRatio) || 0.165;
    const stickyTabRatio = parseFloat(root.dataset.stickyTabRatio) || 0.17;
    const stickyNavRatio = parseFloat(root.dataset.stickyNavRatio) || topNavRatio;
    const tabRatios = tabButtons.map((btn) => parseFloat(btn.dataset.yRatio) || 0);

    let navH = 0;
    let tabBarH = 0;
    let bottomH = 0;

    const scaleToPx = (ratio) => {
      const imgHeight = img.offsetHeight;
      if (!imgHeight) return 0;
      if (ratioBase === 'viewport') {
        const vpUnit = scroller.clientHeight / imgHeight;
        return imgHeight * vpUnit * ratio;
      }
      return imgHeight * ratio;
    };

    const applyChromeMetrics = () => {
      const imgHeight = img.offsetHeight;
      if (!imgHeight) return;
      navH = scaleToPx(topNavRatio);
      tabBarH = scaleToPx(tabBarRatio);
      bottomH = scaleToPx(bottomRatio);
      root.style.setProperty('--pdp-scroll-top-nav-h', `${navH}px`);
      root.style.setProperty('--pdp-scroll-tab-bar-h', `${tabBarH}px`);
      root.style.setProperty('--pdp-scroll-bottom-h', `${bottomH}px`);
      root.style.setProperty('--pdp-scroll-top-h', `${navH}px`);
    };

    const syncChromePosition = () => {
      const imgHeight = img.offsetHeight;
      if (!imgHeight) return;
      const scrollTop = scroller.scrollTop;
      const navOffsetPx = imgHeight * stickyNavRatio;
      const tabOffsetPx = imgHeight * stickyTabRatio;
      const bottomOffsetPx = imgHeight - bottomH;

      if (topChrome.classList.contains('is-sticky')) {
        navImg.style.transform = `translate3d(0, ${-Math.round(navOffsetPx)}px, 0)`;
        tabsImg.style.transform = `translate3d(0, ${-Math.round(tabOffsetPx)}px, 0)`;
      } else {
        navImg.style.transform = `translate3d(0, ${-Math.round(scrollTop)}px, 0)`;
        tabsImg.style.transform = `translate3d(0, ${-Math.round(scrollTop)}px, 0)`;
      }

      bottomImg.style.transform = `translate3d(0, ${-Math.round(bottomOffsetPx)}px, 0)`;
    };

    const getContentRatio = () => {
      const imgHeight = img.offsetHeight;
      return imgHeight ? scroller.scrollTop / imgHeight : 0;
    };

    const setActiveTab = (index) => {
      tabButtons.forEach((btn, i) => {
        const active = i === index;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', active ? 'true' : 'false');
      });
    };

    const updateFromScroll = () => {
      const imgHeight = img.offsetHeight;
      const scrollTop = scroller.scrollTop;
      const stickyThreshold = navH * 0.92;
      const isSticky = scrollTop > stickyThreshold;

      topChrome.classList.toggle('is-sticky', isSticky);
      root.classList.toggle('is-nav-sticky', isSticky);

      syncChromePosition();

      const contentRatio = getContentRatio();
      const tabsVisible = isSticky && contentRatio >= tabRevealRatio;
      tabsNav.classList.toggle('is-visible', tabsVisible);
      topChrome.classList.toggle('is-tabs-mode', tabsVisible);
      tabsNav.setAttribute('aria-hidden', tabsVisible ? 'false' : 'true');
      root.style.setProperty('--pdp-scroll-top-h', `${tabsVisible ? navH + tabBarH : navH}px`);

      if (hint) {
        hint.classList.toggle('is-hidden', scrollTop > 12);
      }

      let activeIndex = 0;
      tabRatios.forEach((ratio, index) => {
        if (contentRatio + 0.012 >= ratio) activeIndex = index;
      });
      setActiveTab(activeIndex);
    };

    const scrollToRatio = (ratio) => {
      const imgHeight = img.offsetHeight;
      const topH = tabsNav.classList.contains('is-visible') ? navH + tabBarH : navH;
      const target = Math.max(0, ratio * imgHeight - topH * 0.35);
      scroller.scrollTo({ top: target, behavior: 'smooth' });
    };

    tabButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        scrollToRatio(tabRatios[index]);
        setActiveTab(index);
      });
    });

    scroller.addEventListener('scroll', updateFromScroll, { passive: true });

    const onReady = () => {
      applyChromeMetrics();
      updateFromScroll();
    };

    if (img.complete) onReady();
    else img.addEventListener('load', onReady);

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(onReady);
      ro.observe(img);
    }
  });
}

function bindPdpSchemeExplorer() {
  document.querySelectorAll('[data-pdp-scheme-explorer]').forEach((root) => {
    const tabs = [...root.querySelectorAll('[data-pdp-scheme-tab]')];
    const beforeShots = [...root.querySelectorAll('[data-pdp-scheme-before]')];
    const afterShots = [...root.querySelectorAll('[data-pdp-scheme-after]')];
    if (!tabs.length || !beforeShots.length || !afterShots.length) return;

    const resetDemo = (container) => {
      container?.querySelectorAll('[data-pdp-scheme-demo]').forEach((device) => {
        const hero = device.querySelector('[data-pdp-scheme-demo-hero]');
        hero?.classList.remove('is-active');
        hero?.setAttribute('aria-hidden', 'true');
        device.querySelectorAll('[data-pdp-scheme-demo-target]').forEach((hotspot) => {
          const visible = hotspot.dataset.pdpSchemeDemoTarget === 'review';
          hotspot.hidden = !visible;
        });
        device.dataset.pdpSchemeDemoActive = 'main';
        const hint = device.querySelector('.pdp-scheme-explorer__demo-hint');
        if (hint) hint.textContent = '点击「评价」切换';
      });
      container?.querySelectorAll('[data-pdp-scheme-hero-tabs]').forEach((device) => {
        device.dispatchEvent(new CustomEvent('pdp-scheme-hero-tabs-reset'));
      });
    };

    const activate = (index) => {
      tabs.forEach((tab, i) => {
        const active = i === index;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
        tab.tabIndex = active ? 0 : -1;
      });
      beforeShots.forEach((shot, i) => {
        const active = i === index;
        shot.classList.toggle('is-active', active);
        shot.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      afterShots.forEach((shot, i) => {
        const active = i === index;
        shot.classList.toggle('is-active', active);
        shot.setAttribute('aria-hidden', active ? 'false' : 'true');
        if (!active) resetDemo(shot);
      });
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener('mouseenter', () => activate(index));
      tab.addEventListener('focus', () => activate(index));
      tab.addEventListener('click', () => activate(index));
    });

    root.querySelectorAll('[data-pdp-scheme-demo]').forEach((device) => {
      bindPdpSchemeDemo(device);
    });
    root.querySelectorAll('[data-pdp-scheme-hero-tabs]').forEach((device) => {
      bindPdpSchemeHeroTabs(device);
    });

    activate(0);
  });
}

function updatePdpFrameworkLeaders(block) {
  const svg = block.querySelector('[data-pdp-framework-leaders]');
  const layout = block.querySelector('[data-pdp-framework-block-layout]');
  if (!svg || !layout) return;

  const merge = block.querySelector('.pdp-framework__highlight-merge');
  const panel = block.querySelector('.pdp-framework__tab-panel.is-active');
  const anchor =
    panel?.querySelector('.pdp-framework__tab-media') ||
    block.querySelector('.pdp-framework__tab.is-active');

  if (!merge || !anchor) {
    svg.innerHTML = '';
    return;
  }

  const layoutRect = layout.getBoundingClientRect();
  if (!layoutRect.width || !layoutRect.height) return;

  const mergeRect = merge.getBoundingClientRect();
  const anchorRect = anchor.getBoundingClientRect();
  const core = block.querySelector('.pdp-framework__block-core');
  const coreRect = core?.getBoundingClientRect();
  const isTrust = block.dataset.pdpFrameworkLayer === 'trust';

  const x1 = mergeRect.left + mergeRect.width / 2 - layoutRect.left;
  const y1 = mergeRect.top + mergeRect.height / 2 - layoutRect.top;
  const x2 = isTrust
    ? anchorRect.right - layoutRect.left
    : anchorRect.left - layoutRect.left;
  const y2 = anchorRect.top + anchorRect.height / 2 - layoutRect.top;
  const midX = coreRect
    ? isTrust
      ? coreRect.left - layoutRect.left + 6
      : coreRect.right - layoutRect.left - 6
    : x1 + (x2 - x1) * 0.45;

  svg.setAttribute('width', layoutRect.width);
  svg.setAttribute('height', layoutRect.height);
  svg.setAttribute('viewBox', `0 0 ${layoutRect.width} ${layoutRect.height}`);
  svg.innerHTML = `
    <path
      d="M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}"
      fill="none"
      stroke="rgba(255, 51, 117, 0.38)"
      stroke-width="1.5"
      stroke-dasharray="5 4"
      stroke-linecap="round"
    />
    <circle cx="${x1}" cy="${y1}" r="4" fill="rgba(255, 51, 117, 0.55)" />
    <circle cx="${x2}" cy="${y2}" r="3.5" fill="rgba(255, 51, 117, 0.38)" />
  `;
}

function applyPdpFrameworkHighlight(block, regionIds = []) {
  block.classList.add('is-highlighting');

  block.querySelectorAll('[data-pdp-framework-region]').forEach((spot) => {
    const region = spot.dataset.pdpFrameworkRegion;
    const active = regionIds.includes(region);
    spot.classList.toggle('is-active', active);
    spot.classList.toggle('is-dimmed', !active);
    spot.classList.remove('is-hidden');
  });

  updatePdpFrameworkMerges(block);
  updatePdpFrameworkLeaders(block);
}

function bindPdpFrameworkTabs(block) {
  const tabsRoot = block.querySelector('[data-pdp-framework-tabs]');
  if (!tabsRoot) return;

  const tabs = [...tabsRoot.querySelectorAll('[data-pdp-framework-tab]')];
  const panels = [...tabsRoot.querySelectorAll('[data-pdp-framework-tab-panel]')];
  if (!tabs.length || !panels.length) return;

  const defaultIndex = Number.parseInt(block.dataset.pdpFrameworkDefaultTab || '0', 10) || 0;

  const activate = (index) => {
    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    panels.forEach((panel, i) => {
      const active = i === index;
      panel.classList.toggle('is-active', active);
      panel.toggleAttribute('hidden', !active);
    });

    const panel = panels[index];
    let highlights = [];
    try {
      highlights = JSON.parse(panel.dataset.pdpFrameworkHighlight || '[]');
    } catch {
      highlights = [];
    }
    applyPdpFrameworkHighlight(block, highlights);

    block.querySelectorAll('.pdp-framework__tab-media img').forEach((img) => {
      if (img.complete) return;
      img.addEventListener('load', () => updatePdpFrameworkLeaders(block), { once: true });
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('mouseenter', () => activate(index));
    tab.addEventListener('focus', () => activate(index));
    tab.addEventListener('click', () => activate(index));
  });

  if (!block.dataset.pdpFrameworkLeadersBound) {
    block.dataset.pdpFrameworkLeadersBound = 'true';
    const layout = block.querySelector('[data-pdp-framework-block-layout]');
    if (layout && typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(() => updatePdpFrameworkLeaders(block));
      observer.observe(layout);
    }
    window.addEventListener('resize', () => updatePdpFrameworkLeaders(block));
  }

  activate(defaultIndex);
}

function bindPdpFramework() {
  const root = document.querySelector('[data-pdp-framework]');
  if (!root) return;
  bindPdpFrameworkDanmakuDemos(root);
}

function bindPdpHierarchy() {
  document.querySelectorAll('[data-pdp-hierarchy]').forEach((root) => {
    const layers = [...root.querySelectorAll('[data-pdp-hierarchy-layer]')];
    const panels = [...root.querySelectorAll('[data-pdp-hierarchy-panel]')];
    const dockButtons = [...root.querySelectorAll('[data-pdp-hierarchy-dock-layer]')];
    const stackWrap = root.querySelector('.pdp-hierarchy__stack-wrap');
    if (!layers.length) return;

    let pinnedIndex = 0;

    const activate = (index, { pin = false } = {}) => {
      if (pin) pinnedIndex = index;

      layers.forEach((layer, i) => {
        const active = i === index;
        layer.classList.toggle('is-active', active);
        layer.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      panels.forEach((panel, i) => {
        const active = i === index;
        panel.classList.toggle('is-active', active);
        panel.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      dockButtons.forEach((button, i) => {
        button.classList.toggle('is-active', i === index);
      });
    };

    const activateAndFocus = (index, { pin = false, scroll = false } = {}) => {
      activate(index, { pin });
      if (!scroll) return;
      stackWrap?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    const bindTarget = (element, index, { scrollOnClick = false } = {}) => {
      element.addEventListener('mouseenter', () => activate(index));
      element.addEventListener('focus', () => activate(index));
      element.addEventListener('click', () => activateAndFocus(index, { pin: true, scroll: scrollOnClick }));
    };

    layers.forEach((layer) => bindTarget(layer, Number(layer.dataset.pdpHierarchyLayer)));
    dockButtons.forEach((button) =>
      bindTarget(button, Number(button.dataset.pdpHierarchyDockLayer), { scrollOnClick: true })
    );

    root.addEventListener('mouseleave', (event) => {
      if (!root.contains(event.relatedTarget)) activate(pinnedIndex);
    });

    if (stackWrap && typeof IntersectionObserver !== 'undefined') {
      let hierarchyInView = false;
      let stackInView = false;

      const updateDock = () => {
        root.classList.toggle('is-stack-offscreen', hierarchyInView && !stackInView);
      };

      const hierarchyObserver = new IntersectionObserver(
        ([entry]) => {
          hierarchyInView = entry.isIntersecting;
          updateDock();
        },
        { threshold: 0, rootMargin: '0px 0px -20% 0px' }
      );
      const stackObserver = new IntersectionObserver(
        ([entry]) => {
          stackInView = entry.isIntersecting;
          updateDock();
        },
        { threshold: 0, rootMargin: '-96px 0px 0px 0px' }
      );

      hierarchyObserver.observe(root);
      stackObserver.observe(stackWrap);
    }

    activate(pinnedIndex, { pin: true });
  });
}

function renderPdpPhaseCard(phase) {
  const listHtml = `
      <ul class="pdp-phase-card__list">
        ${phase.items.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      ${renderPdpCategoryNotes(phase.categoryNotes)}`;

  return `
    <article class="pdp-phase-card reveal">
      <span class="pdp-phase-card__badge">${phase.phase}</span>
      <div class="pdp-phase-card__head">
        <div class="pdp-phase-card__titles">
          <h4 class="pdp-phase-card__title">${phase.title}</h4>
          <p class="pdp-phase-card__subtitle">${phase.subtitle}</p>
        </div>
      </div>
      ${listHtml}
    </article>
  `;
}

function renderPdpStrategyPanel(project) {
  const phases = project.strategyPhases || [];
  if (!phases.length) return '';

  return `
    <div class="pdp-panel pdp-panel--strategy">
      <div class="pdp-panel__inner project-content-inner">
        <header class="pdp-section-head reveal">
          <span class="pdp-section-head__index">02</span>
          <h3 class="pdp-section-head__title">设计<span class="pdp-highlight">策略</span></h3>
        </header>
        <div class="pdp-phase-stack">
          ${phases.map(renderPdpPhaseCard).join('')}
        </div>
      </div>
    </div>
  `;
}

function bindPdpDesignSlots() {
  document.querySelectorAll('[data-pdp-design-slot]').forEach((frame) => {
    const img = frame.querySelector('img');
    if (!img) {
      frame.classList.add('pdp-design-slot__frame--empty');
      return;
    }

    const markEmpty = () => frame.classList.add('pdp-design-slot__frame--empty');
    const markReady = () => frame.classList.remove('pdp-design-slot__frame--empty');

    img.addEventListener('error', markEmpty);
    img.addEventListener('load', () => {
      if (img.naturalWidth > 0) markReady();
      else markEmpty();
    });

    if (img.complete) {
      if (img.naturalWidth > 0) markReady();
      else markEmpty();
    }
  });
}

function renderPdpResultCategoryIcon(category) {
  const icons = {
    超市便利: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M5.5 7.2 7.8 3h8.4l2.3 4.2H5.5Z" opacity="0.92"></path>
        <path fill="currentColor" d="M4.8 8.4h14.4v1.4H4.8V8.4Zm1.2 2.8h12v7.4a1.8 1.8 0 0 1-1.8 1.8H7.8a1.8 1.8 0 0 1-1.8-1.8v-7.4Z" opacity="0.72"></path>
        <path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" d="M9 12.2h6"></path>
      </svg>`,
    数码家电: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="3.5" width="10" height="17" rx="2.2" fill="currentColor" opacity="0.92"></rect>
        <rect x="8.4" y="6" width="7.2" height="11.2" rx="1" fill="#fff" opacity="0.92"></rect>
        <circle cx="12" cy="18.8" r="1" fill="#fff"></circle>
      </svg>`,
    鲜花: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.1" fill="currentColor" opacity="0.92"></circle>
        <path fill="currentColor" d="M12 4.2c.8 1.6.8 2.8 0 4.4-.8-1.6-.8-2.8 0-4.4Zm0 11.2c.8 1.6.8 2.8 0 4.4-.8-1.6-.8-2.8 0-4.4ZM4.2 12c1.6-.8 2.8-.8 4.4 0-1.6.8-2.8.8-4.4 0Zm11.2 0c1.6-.8 2.8-.8 4.4 0-1.6.8-2.8.8-4.4 0Z" opacity="0.72"></path>
      </svg>`,
  };

  return icons[category] || icons['超市便利'];
}

function renderPdpResultMetricCard(metric) {
  const valueText = metric.text || metric.value || formatMetricDisplay(metric);
  const countAttrs = metric.text || typeof metric.value === 'string' ? '' : metricCountAttrs(metric);
  const trendHtml = metric.trend
    ? `<div class="pdp-result-metric-card__trend-wrap"><span class="pdp-result-metric-card__trend pdp-result-metric-card__trend--${metric.trend}" aria-hidden="true">${metric.trend === 'up' ? '↑' : '↓'}</span><span class="pdp-result-metric-card__trend-label">提升</span></div>`
    : '';
  const compareParts = [];
  if (metric.baseline) compareParts.push(`<span class="pdp-result-metric-card__baseline">${metric.baseline}</span>`);
  if (metric.baseline && (metric.delta || metric.detail)) {
    compareParts.push('<span class="pdp-result-metric-card__arrow" aria-hidden="true">→</span>');
  }
  if (metric.delta) compareParts.push(`<span class="pdp-result-metric-card__delta">${metric.delta}</span>`);
  else if (metric.detail) compareParts.push(`<span class="pdp-result-metric-card__delta">${metric.detail}</span>`);
  const compareHtml = compareParts.length
    ? `<p class="pdp-result-metric-card__compare">${compareParts.join('')}</p>`
    : '';

  return `
        <article class="pdp-result-metric-card reveal">
          <div class="pdp-result-metric-card__head">
            <p class="pdp-result-metric-card__label">${metric.label}</p>
          </div>
          <div class="pdp-result-metric-card__main">
            <p class="pdp-result-metric-card__value">
              <strong ${countAttrs}>${valueText}</strong>
            </p>
            ${trendHtml}
          </div>
          ${compareHtml}
        </article>`;
}

function renderPdpResultCategoryCard(row) {
  const toneClass = row.tone ? ` pdp-result-category-card--${row.tone}` : '';
  return `
        <article class="pdp-result-category-card${toneClass} reveal">
          <div class="pdp-result-category-card__head">
            <div class="pdp-result-category-card__icon" aria-hidden="true">
              ${renderPdpResultCategoryIcon(row.category)}
            </div>
            <h5 class="pdp-result-category-card__title">${row.category}</h5>
          </div>
          <p class="pdp-result-category-card__line"><span class="pdp-result-category-card__key">二期</span>${row.target}</p>
          <p class="pdp-result-category-card__note">${row.note}</p>
        </article>`;
}

function renderPdpResultVoiceQuote(voice, index) {
  const text = typeof voice === 'string' ? voice : voice.text;
  const avatar =
    typeof voice === 'object' && voice.avatar
      ? voice.avatar
      : assetUrl(`/images/projects/pdp-insight-avatars/avatar-${(index % 8) + 1}.jpg`);
  const stagger = index % 3;

  return `
            <article class="pdp-result-voice-chip pdp-result-voice-chip--stagger-${stagger}">
              <div class="pdp-result-voice-chip__card">
                <img class="pdp-result-voice-chip__avatar" src="${avatar}" alt="" width="32" height="32" loading="lazy" decoding="async" draggable="false" />
                <p class="pdp-result-voice-chip__text">${text}</p>
              </div>
            </article>`;
}

function renderPdpResultSectionHead(section, { leadText = '' } = {}) {
  const subtitleHtml = section.subtitle
    ? `<p class="pdp-result-section__subtitle">${section.subtitle}</p>`
    : leadText
      ? `<p class="pdp-result-qualitative-lead">${leadText}</p>`
      : '';
  return `
        <header class="pdp-result-section__head">
          <div class="pdp-result-section__titles">
            <h4 class="pdp-result-section__title">${section.title}</h4>
            ${subtitleHtml}
          </div>
        </header>`;
}

function renderPdpResultQualitativeBlock(qualitative) {
  if (!qualitative) return '';
  const voicesHtml = qualitative.voices?.length
    ? `<div class="pdp-result-voice-mosaic">${qualitative.voices
        .map((voice, index) => renderPdpResultVoiceQuote(voice, index))
        .join('')}</div>`
    : '';

  return `
        <div class="pdp-result-qualitative-block">
          ${
            voicesHtml
              ? `<div class="pdp-result-qualitative-summary">
              <div class="pdp-result-qualitative-voices">
              <p class="pdp-result-qualitative-stage__eyebrow">用户原声</p>
              ${voicesHtml}
            </div>
            </div>`
              : ''
          }
        </div>`;
}

function renderPdpResultSection(section) {
  if (section.qualitative) {
    const leadText = section.qualitative.headline || section.qualitative.summary || '';
    return `
      <section class="pdp-result-section pdp-result-section--qualitative reveal">
        ${renderPdpResultSectionHead(section, { leadText })}
        ${renderPdpResultQualitativeBlock(section.qualitative)}
      </section>`;
  }

  if (section.metrics?.length) {
    return `
      <section class="pdp-result-section reveal">
        ${renderPdpResultSectionHead(section)}
        <div class="pdp-result-metric-grid">
          ${section.metrics.map((metric) => renderPdpResultMetricCard(metric)).join('')}
        </div>
      </section>`;
  }

  if (section.categoryCards?.length) {
    return `
      <section class="pdp-result-section reveal">
        ${renderPdpResultSectionHead(section)}
        <div class="pdp-result-category-grid">
          ${section.categoryCards.map((row) => renderPdpResultCategoryCard(row)).join('')}
        </div>
      </section>`;
  }

  if (section.table) {
    const { headers, rows } = section.table;
    const bodyHtml = rows
      .map((row) => {
        const cells =
          Array.isArray(row)
            ? row
            : [row.category, row.baseline, row.target, row.note];
        const tone = row.tone ? ` pdp-result-table__row--${row.tone}` : '';
        return `
              <tr class="pdp-result-table__row${tone}">
                ${cells
                  .map(
                    (cell, cellIndex) =>
                      `<td${cellIndex === 0 ? ' class="pdp-result-table__category"' : ''}>${cell}</td>`
                  )
                  .join('')}
              </tr>`;
      })
      .join('');

    return `
      <section class="pdp-result-section reveal">
        ${renderPdpResultSectionHead(section)}
        <div class="pdp-result-table-wrap">
          <table class="pdp-result-table">
            <thead>
              <tr>${headers.map((cell) => `<th scope="col">${cell}</th>`).join('')}</tr>
            </thead>
            <tbody>${bodyHtml}</tbody>
          </table>
        </div>
      </section>`;
  }

  return '';
}

function renderPdpMetricsPanel(project, section) {
  if (project.pdpResultSections?.length) {
    const sectionsHtml = project.pdpResultSections.map((item) => renderPdpResultSection(item)).join('');
    return `
    <div class="metrics-panel metrics-panel--pdp">
      <div class="metrics-panel__inner project-content-inner">
        <header class="pdp-section-head reveal">
          <span class="pdp-section-head__index">${section.panelIndex || '03'}</span>
          <h3 class="pdp-section-head__title">数据<span class="pdp-highlight">结果</span></h3>
        </header>
        <div class="pdp-result-board">
          ${project.resultsIntro ? `<p class="pdp-result-intro reveal">${project.resultsIntro}</p>` : ''}
          ${sectionsHtml}
          ${
            project.resultsSummary
              ? `<aside class="pdp-result-callout reveal"><span class="pdp-result-callout__icon" aria-hidden="true">✦</span><p class="pdp-result-callout__text">${project.resultsSummary}</p></aside>`
              : ''
          }
        </div>
      </div>
    </div>
  `;
  }

  const rowsHtml = project.metricGroups?.length
    ? project.metricGroups
        .flatMap((group, groupIndex) =>
          group.metrics.map((metric, metricIndex) => {
            const rowIndex = String(groupIndex * 10 + metricIndex + 1).padStart(2, '0');
            const valueText = metric.text || formatMetricDisplay(metric);
            const unitText = metric.unit ? ` ${metric.unit}` : '';
            const detailHtml = metric.detail ? `<p class="pdp-result-row__desc">${metric.detail}</p>` : '';
            return `
        <li class="pdp-result-row reveal">
          <span class="pdp-result-row__index">${rowIndex}</span>
          <div class="pdp-result-row__body">
            <p class="pdp-result-row__group">${group.title}</p>
            <h4 class="pdp-result-row__title">${metric.label}</h4>
            ${detailHtml}
          </div>
          <div class="pdp-result-row__value">
            <strong ${metricCountAttrs(metric)}>${valueText}${unitText}</strong>
            ${metric.trend ? `<span class="pdp-result-row__trend pdp-result-row__trend--${metric.trend}">${metric.trend === 'up' ? '↑' : '↓'}</span>` : ''}
          </div>
        </li>`;
          })
        )
        .join('')
    : '';

  const tablesHtml = project.resultTables?.length
    ? project.resultTables
        .map(
          (table) => `
        <section class="pdp-result-table-block reveal">
          <header class="pdp-result-table-block__head">
            <h4 class="pdp-result-table-block__title">${table.title}</h4>
            ${table.subtitle ? `<p class="pdp-result-table-block__subtitle">${table.subtitle}</p>` : ''}
          </header>
          <table class="pdp-result-table">
            <thead>
              <tr>${table.headers.map((cell) => `<th scope="col">${cell}</th>`).join('')}</tr>
            </thead>
            <tbody>
              ${table.rows
                .map(
                  (row) => `
              <tr>${row.map((cell, cellIndex) => `<td${cellIndex === 0 ? ' class="pdp-result-table__category"' : ''}>${cell}</td>`).join('')}</tr>`
                )
                .join('')}
            </tbody>
          </table>
        </section>`
        )
        .join('')
    : '';

  return `
    <div class="metrics-panel metrics-panel--pdp">
      <div class="metrics-panel__inner project-content-inner">
        <header class="pdp-section-head reveal">
          <span class="pdp-section-head__index">${section.panelIndex || '03'}</span>
          <h3 class="pdp-section-head__title">数据<span class="pdp-highlight">结果</span></h3>
        </header>
        ${project.resultsIntro ? `<p class="pdp-result-intro reveal">${project.resultsIntro}</p>` : ''}
        ${
          rowsHtml
            ? `<ul class="pdp-result-list">${rowsHtml}</ul>`
            : !tablesHtml
              ? '<div class="pdp-result-placeholder reveal" aria-hidden="true"></div>'
              : ''
        }
        ${tablesHtml}
        ${project.resultsSummary ? `<p class="pdp-result-summary reveal">${project.resultsSummary}</p>` : ''}
      </div>
    </div>
  `;
}

function renderHelpStrategyCard(module, step, variant) {
  const bodyHtml = module.strategies
    .map((strategy) => `<p class="help-strategy-card__text">${strategy.text}</p>`)
    .join('');

  return `
    <article class="help-strategy-card help-strategy-card--${variant}">
      <div class="help-strategy-card__accent" aria-hidden="true"></div>
      <span class="help-strategy-card__index">${step}</span>
      <h4 class="help-strategy-card__title">${module.tag}</h4>
      <div class="help-strategy-card__body">${bodyHtml}</div>
    </article>
  `;
}

function renderHelpStrategyFlow(modules) {
  const [popupModule, landingModule] = modules;

  return `
    <div class="help-strategy-cards">
      ${renderHelpStrategyCard(popupModule, '01', 'start')}
      <span class="help-strategy-cards__arrow" aria-hidden="true"></span>
      ${renderHelpStrategyCard(landingModule, '02', 'end')}
    </div>
  `;
}
function renderHelpBackgroundText(project, panel) {
  const paragraphs = [project.background];
  if (panel.goal) {
    paragraphs.push(`${panel.goal.label}：${panel.goal.text}`);
  }

  return `
    <div class="help-panel__text-block">
      ${paragraphs.map((text) => `<p class="help-panel__text">${text}</p>`).join('')}
    </div>
  `;
}

function renderHelpBackgroundPanel(project) {
  const panel = project.backgroundPanel;
  if (!panel) return '';

  const modulesHtml = renderHelpStrategyFlow(panel.modules);

  return `
    <div class="help-panel">
      <div class="help-panel__inner project-content-inner">
        <section class="help-panel__section reveal">
          <h3 class="help-panel__heading">${panel.title}</h3>
          ${renderHelpBackgroundText(project, panel)}
        </section>
        <section class="help-panel__section reveal">
          <h3 class="help-panel__heading">${panel.strategyLabel}</h3>
          ${modulesHtml}
        </section>
      </div>
    </div>
  `;
}

function renderAnalysisPanel(project) {
  const hasStrategies = project.strategies?.length;

  if (
    !project.background &&
    !project.analysisMetrics?.length &&
    !project.analysisCategories?.length &&
    !hasStrategies
  ) {
    return '';
  }

  return `
    <div class="analysis-panel">
      <div class="analysis-panel__inner project-content-inner">
        ${
          project.background || project.analysisCategories?.length
            ? `
        <section class="analysis-block reveal">
          ${renderSubnavRevealMarker(project)}
          ${project.background ? `<h3 class="project-content-title">项目背景</h3>` : ''}
          ${project.background ? `<p class="analysis-block__text">${project.background}</p>` : ''}
          ${
            project.analysisCategories?.length
              ? `
          <div class="analysis-card-grid analysis-card-grid--3 analysis-card-grid--spaced">
            ${project.analysisCategories.map(renderAnalysisCategory).join('')}
          </div>`
              : ''
          }
        </section>`
            : ''
        }
        ${
          project.analysisMetrics?.length
            ? `
        <section class="analysis-block reveal">
          <h3 class="project-content-title">核心指标</h3>
          <div class="analysis-card-grid analysis-card-grid--3">
            ${project.analysisMetrics.map(renderAnalysisMetric).join('')}
          </div>
        </section>`
            : ''
        }
        ${hasStrategies ? renderStrategyBlock(project) : ''}
      </div>
    </div>
  `;
}


function renderMetricsPanel(project, section) {
  if (project.id === 'pdp-redesign') {
    return renderPdpMetricsPanel(project, section);
  }

  if (!project.metrics?.length && !project.resultsSummary && !project.resultsIntro && !project.metricGroups?.length) {
    return '';
  }

  const usePanelStyle = Boolean(section?.panelIndex);
  const statsBlock = project.metricGroups
    ? renderMetricsGroups(project.metricGroups, usePanelStyle)
    : renderMetricsStats(project.metrics, project.metrics?.length === 4 ? 4 : 3);

  const titleHtml = usePanelStyle
    ? renderPanelHead(section.panelIndex, section.label)
    : `<h3 class="project-content-title">数据结果</h3>`;

  const textClass = usePanelStyle ? 'background-panel__intro' : 'metrics-panel__text';
  const summaryClass = usePanelStyle
    ? 'background-panel__key-strategies'
    : 'metrics-panel__text metrics-panel__text--summary';

  return `
    <div class="metrics-panel${usePanelStyle ? ' metrics-panel--panel-style' : ''}">
      <div class="metrics-panel__inner project-content-inner">
        ${titleHtml}
        <div class="metrics-panel__body">
          ${project.resultsIntro ? `<p class="${textClass}">${project.resultsIntro}</p>` : ''}
          ${statsBlock}
          ${
            project.metricsFigure
              ? `
          <figure class="metrics-panel__figure reveal">
            <img src="${project.metricsFigure.src}" alt="${project.metricsFigure.alt}" loading="lazy" />
            ${
              project.metricsFigure.caption
                ? `<figcaption class="metrics-panel__caption">${project.metricsFigure.caption}</figcaption>`
                : ''
            }
          </figure>`
              : ''
          }
          ${project.resultsSummary ? `<p class="${summaryClass}">${project.resultsSummary}</p>` : ''}
        </div>
      </div>
    </div>
  `;
}

function render() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${renderNav()}
    ${renderHero()}
    ${renderCatalog()}
    ${projects.map((p, i) => renderProjectDetail(p, i)).join('')}
    ${renderFooter()}
  `;
  bindEvents();
  bindAssetImageRetry(app);
  safeInit('bindPdpDesignSlots', bindPdpDesignSlots);
  safeInit('bindPdpFramework', bindPdpFramework);
  safeInit('bindPdpBeforeProblems', bindPdpBeforeProblems);
  safeInit('bindPdpSchemeExplorer', bindPdpSchemeExplorer);
  safeInit('bindPdpPhaseTwoScroll', bindPdpPhaseTwoScroll);
  safeInit('bindPdpFlowersPdpDemo', bindPdpFlowersPdpDemo);
  safeInit('bindPdpFlowersRecommendDemoRoots', bindPdpFlowersRecommendDemoRoots);
  safeInit('bindPdpFlowersRecommendDemo', bindPdpFlowersRecommendDemo);
  safeInit('bindPdpDigitalParamDemo', bindPdpDigitalParamDemo);
  safeInit('bindPdpPathDemo', () => bindPdpPathDemo({ bindHoverAutoplay: bindPdpHoverAutoplay }));
  safeInit('bindPdpTrustInteractiveDemo', bindPdpTrustInteractiveDemo);
  safeInit('bindPdpInsightsExpand', bindPdpInsightsExpand);
  safeInit('bindPdpInsightCharts', bindPdpInsightCharts);
  safeInit('bindPdpInsightPainHeights', bindPdpInsightPainHeights);
  safeInit('bindPdpNativeMarquee', bindPdpNativeMarquee);
  safeInit('bindPdpHierarchy', bindPdpHierarchy);
  safeInit('observeMetrics', observeMetrics);
  observeReveal();
  scheduleRefreshReveal();
  observeSectionSpy();
  safeInit('observeDesignStickyStrategies', observeDesignStickyStrategies);
  safeInit('observeSubnavReveal', observeSubnavReveal);
}

function renderNav() {
  return `
    <nav class="nav ${state.navScrolled ? 'nav--scrolled' : ''}" id="nav">
      <div class="nav__inner">
        <a href="#hero" class="nav__logo">${site.name}</a>
        <div class="nav__links">
          <a href="#hero">首页</a>
          <a href="#catalog">目录</a>
          ${projects.map((p) => `<a href="#${p.id}">${p.navLabel || p.title}</a>`).join('')}
          <a href="#contact">联系</a>
        </div>
        <button class="nav__menu-btn" id="menuBtn" aria-label="打开菜单">
          <span></span><span></span>
        </button>
      </div>
      <div class="nav__mobile" id="mobileMenu">
        <a href="#hero">首页</a>
        <a href="#catalog">作品目录</a>
        ${projects.map((p) => `<a href="#${p.id}">${p.navLabel || p.title}</a>`).join('')}
        <a href="#contact">联系方式</a>
      </div>
    </nav>
  `;
}

function renderHero() {
  return `
    <header class="hero" id="hero">
      <div class="hero__bg"></div>
      <div class="hero__content reveal visible">
        <p class="hero__eyebrow">${site.subtitle}</p>
        <h1 class="hero__title">${site.name}</h1>
        <p class="hero__role">${site.role}</p>
        <div class="hero__tags">
          ${site.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="hero__contact">
          <a href="tel:${site.contact.phone}">${site.contact.phone}</a>
          <a href="mailto:${site.contact.email}">${site.contact.email}</a>
        </div>
      </div>
      <div class="hero__scroll-hint" aria-label="向下滚动">
        <span class="hero__scroll-chevron"></span>
        <span class="hero__scroll-chevron"></span>
      </div>
    </header>
  `;
}

function renderCatalog() {
  return `
    <section class="section section--catalog" id="catalog">
      <div class="container">
        <div class="section__header reveal visible">
          <p class="section__eyebrow">Contents</p>
          <h2 class="section__title">作品目录</h2>
        </div>
        <div class="catalog-grid">
          ${catalog
            .map((group, i) => {
              const project = getProject(group.id);
              if (!project) return '';
              const isPlaceholder = project.placeholder;
              return `
            <a href="#${group.id}" class="catalog-card reveal ${isPlaceholder ? 'catalog-card--placeholder' : ''}" style="--delay: ${i * 0.1}s">
              <div class="catalog-card__cover${project.id === 'pdp-redesign' ? ' catalog-card__cover--pdp-showcase' : ''}">
                ${renderCatalogCover(project)}
                <div class="catalog-card__overlay">
                  <span>${isPlaceholder ? '敬请期待' : '查看详情'}</span>
                </div>
              </div>
              <div class="catalog-card__body">
                <div class="catalog-card__index">${group.index}</div>
                <p class="catalog-card__category">${project.category}</p>
                <h3 class="catalog-card__title">${group.title}</h3>
                <p class="catalog-card__summary">${project.summary}</p>
                <div class="catalog-card__metrics">
                  ${getCatalogMetrics(project).map(renderMiniMetric).join('')}
                </div>
                <span class="catalog-card__link">${isPlaceholder ? '查看坑位 →' : '进入项目详情 →'}</span>
              </div>
            </a>
          `;
            })
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function getProject(id) {
  return projects.find((p) => p.id === id);
}

function renderProjectDetail(project, index) {
  if (project.placeholder) {
    return `
    <section class="project-detail project-detail--placeholder" id="${project.id}" data-project="${project.id}">
      <div class="container">
        <div class="project-placeholder reveal">
          <span class="project-detail__index">0${index + 1}</span>
          <p class="project-placeholder__title">${project.title}</p>
          <span class="project-detail__badge">筹备中</span>
          <p class="project-placeholder__desc">${project.summary}</p>
          <p class="project-placeholder__hint">后续补充 PDF 页面与案例内容后，可在 <code>src/data/portfolio.js</code> 中完善该项目数据。</p>
        </div>
      </div>
    </section>
  `;
  }

  const sectionLinks = project.sections
    .map(
      (s, i) => `
      <a href="#${sectionAnchor(project.id, i)}" class="project-subnav__link" data-spy="${sectionAnchor(project.id, i)}">
        ${s.label}
      </a>
    `
    )
    .join('');

  const sectionBlocks = project.sections
    .map((section, i) => {
      const isDesignSection =
        section.slides?.length &&
        !section.analysis &&
        !section.metrics &&
        !section.backgroundPanel &&
        !section.strategyPanel &&
        !section.pdpDesignPanel;

      const designContent =
        isDesignSection && section.designHeaders?.length
          ? renderDesignSection(section, sectionAnchor(project.id, i), project)
          : section.slides
              .map(
                (slide) => `
        <figure class="project-section__figure">
          <img src="${slide.src}" alt="${slide.alt}" loading="lazy" />
        </figure>
      `
              )
              .join('');

      const slidesHtml = designContent;

      const backgroundPanelHtml = section.backgroundPanel ? renderBackgroundPanel(project) : '';
      const strategyPanelHtml = section.strategyPanel ? renderPdpStrategyPanel(project) : '';
      const designPanelHtml = section.pdpDesignPanel ? renderPdpDesignPanel(project) : '';
      const analysisHtml = section.analysis ? renderAnalysisPanel(project) : '';
      const metricsHtml = section.metrics ? renderMetricsPanel(project, section) : '';

      const sectionClass = [
        'project-section',
        section.metrics ? 'project-section--results' : '',
        section.analysis ? 'project-section--analysis' : '',
        section.backgroundPanel ? 'project-section--background' : '',
        section.strategyPanel ? 'project-section--strategy' : '',
        section.pdpDesignPanel ? 'project-section--design' : '',
        isDesignSection ? 'project-section--design' : '',
      ]
        .filter(Boolean)
        .join(' ');

      return `
      <section class="${sectionClass}" id="${sectionAnchor(project.id, i)}" data-section="${sectionAnchor(project.id, i)}" aria-label="${section.label}">
        ${backgroundPanelHtml}
        ${strategyPanelHtml}
        ${designPanelHtml}
        ${slidesHtml}
        ${analysisHtml}
        ${metricsHtml}
      </section>`;
    })
    .join('');

  const sectionBlocksHtml = sectionBlocks;

  const hasCover = Boolean(project.heroShowcase?.length);

  return `
    <section class="project-detail${index > 0 ? ' project-detail--continued' : ''}${project.id === 'reverse-flow' ? ' project-detail--bw' : ''}${project.id === 'invite-activity' ? ' project-detail--invite' : ''}${project.id === 'pdp-redesign' ? ' project-detail--pdp' : ''}${hasCover ? ' project-detail--has-cover' : ''}" id="${project.id}" data-project="${project.id}">
      <nav class="project-subnav${hasCover ? ' project-subnav--cover' : ''}" data-project-nav="${project.id}" aria-label="章节目录">
        <div class="project-subnav__inner">
          <span class="project-subnav__title">${project.title}</span>
          <div class="project-subnav__links">
            ${sectionLinks}
          </div>
        </div>
      </nav>

      ${project.id === 'pdp-redesign' ? renderPdpHero(project) : ''}
      ${project.id === 'reverse-flow' ? renderReverseHero(project) : ''}
      ${project.id === 'invite-activity' ? renderInviteHero(project) : ''}

      <div class="project-content">
        <div class="project-sections">
          ${sectionBlocksHtml}
        </div>
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="footer" id="contact">
      <div class="container footer__inner">
        <div class="footer__profile">
          <h3>${site.name}</h3>
          <p class="footer__role">${site.role} · ${site.subtitle}</p>
        </div>
        <div class="footer__contact">
          <a href="tel:${site.contact.phone}">${site.contact.phone}</a>
          <span class="footer__contact-sep" aria-hidden="true">·</span>
          <a href="mailto:${site.contact.email}">${site.contact.email}</a>
        </div>
      </div>
    </footer>
  `;
}

function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = (decimals > 0 ? value.toFixed(decimals) : Math.round(value)) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function observeMetrics() {
  if (typeof IntersectionObserver === 'undefined') return;

  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';
          animateCount(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px 0px 0px' }
  );
  counters.forEach((el) => observer.observe(el));
}

function isRevealInViewport(el) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight || 800;
  return rect.bottom > 0 && rect.top < vh;
}

function refreshReveal(root = document) {
  root.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
    if (isRevealInViewport(el)) el.classList.add('visible');
  });
}

function scheduleRefreshReveal() {
  refreshReveal();
  requestAnimationFrame(() => {
    refreshReveal();
    requestAnimationFrame(refreshReveal);
  });
  if (document.readyState === 'complete') {
    refreshReveal();
  } else {
    window.addEventListener('load', () => refreshReveal(), { once: true });
  }
}

function safeInit(label, fn) {
  try {
    fn();
  } catch (error) {
    console.error(`[portfolio init] ${label}`, error);
  }
}

function observeReveal() {
  const items = document.querySelectorAll('.reveal');
  if (typeof IntersectionObserver === 'undefined') {
    items.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0, rootMargin: '0px 0px -5% 0px' }
  );
  items.forEach((el) => {
    observer.observe(el);
    if (isRevealInViewport(el)) el.classList.add('visible');
  });
}

function bindDesignStickySource(source) {
  const designSection = source.closest('.project-section--design');
  const pageHeader = designSection?.querySelector('[data-design-page-header]');
  const slides = [...(designSection?.querySelectorAll('[data-design-slide]') || [])];
  const mode = source.dataset.stickyMode || 'strategy';
  const isInviteTitleMode = mode === 'invite-title';

  if (!designSection || !pageHeader || !slides.length) return;

  const projectEl = source.closest('[data-project]');
  const subnav = projectEl?.querySelector('.project-subnav');
  const subtitleEl = source.querySelector('[data-sticky-subtitle]');
  const strategyViewportEl = source.querySelector('[data-sticky-strategy-viewport]');
  const strategyTrackEl = source.querySelector('[data-sticky-strategy-track]');

  const getAnchorY = () => {
    const navHeight =
      parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 72;
    if (
      subnav?.classList.contains('project-subnav--cover') &&
      !subnav.classList.contains('is-revealed')
    ) {
      return navHeight;
    }
    return subnav?.getBoundingClientRect().bottom ?? navHeight + 52;
  };

  let fixedMode = false;
  let lastStickyKey = '';
  let lastSlideIndex = -1;
  let strategyAnimating = false;
  const STRATEGY_SWAP_MS = 280;

  const getStickyKey = (slide) =>
    isInviteTitleMode
      ? slide.dataset.stickySubtitle || ''
      : `${slide.dataset.stickySubtitle}|${slide.dataset.stickyLabel}|${slide.dataset.stickyStrategy}`;

  const syncFixedPosition = () => {
    const innerEl = subnav?.querySelector('.project-subnav__inner');
    const titleEl = subnav?.querySelector('.project-subnav__title');
    const innerRect = innerEl?.getBoundingClientRect();
    const titleRect = titleEl?.getBoundingClientRect();

    source.style.setProperty('--strategy-fixed-top', `${getAnchorY()}px`);
    if (innerRect) {
      source.style.setProperty(
        '--strategy-fixed-pad-left',
        `${titleRect?.left ?? innerRect.left}px`
      );
      source.style.setProperty(
        '--strategy-fixed-pad-right',
        `${Math.max(0, window.innerWidth - innerRect.right)}px`
      );
    }
  };

  const setFixedMode = (enabled) => {
    if (enabled) {
      if (!fixedMode) {
        syncFixedPosition();
        source.classList.add('is-strategy-fixed');
        source.setAttribute('aria-hidden', 'false');
        fixedMode = true;
        source.classList.add('is-strategy-entering');
        void source.offsetHeight;
        requestAnimationFrame(() => {
          source.classList.remove('is-strategy-entering');
        });
      } else {
        syncFixedPosition();
      }
      return;
    }

    fixedMode = false;
    lastStickyKey = '';
    lastSlideIndex = -1;
    strategyAnimating = false;
    strategyTrackEl.style.transition = '';
    strategyTrackEl.style.transform = '';
    strategyTrackEl.innerHTML = '';
    strategyViewportEl.style.height = '';
    source.classList.remove('is-strategy-fixed', 'is-strategy-entering');
    source.setAttribute('aria-hidden', 'true');
    source.style.removeProperty('--strategy-fixed-top');
    source.style.removeProperty('--strategy-fixed-pad-left');
    source.style.removeProperty('--strategy-fixed-pad-right');
  };

  const syncStrategyViewportHeight = (bodyEl) => {
    const target = bodyEl || strategyTrackEl.querySelector('.design-sticky-bar__scroll-body');
    strategyViewportEl.style.height = target ? `${target.offsetHeight}px` : '';
  };

  const setStickyContentImmediate = (slide, nextKey) => {
    if (!isInviteTitleMode && subtitleEl) {
      subtitleEl.textContent = slide.dataset.stickySubtitle || '';
    }
    strategyTrackEl.style.transition = '';
    strategyTrackEl.style.transform = '';
    strategyTrackEl.innerHTML = '';
    const body = createStickyBarBody(slide, mode);
    strategyTrackEl.appendChild(body);
    syncStrategyViewportHeight(body);
    lastStickyKey = nextKey;
    lastSlideIndex = slides.indexOf(slide);
    strategyAnimating = false;
  };

  const setStickyContent = (slide) => {
    const nextKey = getStickyKey(slide);
    if (!nextKey || nextKey === lastStickyKey || strategyAnimating) return;

    const nextIndex = slides.indexOf(slide);
    if (!lastStickyKey || lastSlideIndex < 0) {
      setStickyContentImmediate(slide, nextKey);
      return;
    }

    const currentBody = strategyTrackEl.querySelector('.design-sticky-bar__scroll-body');
    if (!currentBody) {
      setStickyContentImmediate(slide, nextKey);
      return;
    }

    const scrollingDown = nextIndex > lastSlideIndex;
    const newBody = createStickyBarBody(slide, mode);
    strategyAnimating = true;
    if (!isInviteTitleMode && subtitleEl) {
      subtitleEl.textContent = slide.dataset.stickySubtitle || '';
    }

    if (scrollingDown) {
      strategyTrackEl.appendChild(newBody);
      const offset = currentBody.offsetHeight;
      syncStrategyViewportHeight(currentBody);
      strategyTrackEl.style.transition = 'none';
      strategyTrackEl.style.transform = 'translateY(0)';
      void strategyTrackEl.offsetHeight;
      strategyTrackEl.style.transition = `transform ${STRATEGY_SWAP_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      strategyTrackEl.style.transform = `translateY(-${offset}px)`;
    } else {
      strategyTrackEl.insertBefore(newBody, currentBody);
      const offset = newBody.offsetHeight;
      syncStrategyViewportHeight(currentBody);
      strategyTrackEl.style.transition = 'none';
      strategyTrackEl.style.transform = `translateY(-${offset}px)`;
      void strategyTrackEl.offsetHeight;
      strategyTrackEl.style.transition = `transform ${STRATEGY_SWAP_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      strategyTrackEl.style.transform = 'translateY(0)';
    }

    window.setTimeout(() => {
      strategyTrackEl.style.transition = '';
      strategyTrackEl.style.transform = '';
      strategyTrackEl.innerHTML = '';
      const body = createStickyBarBody(slide, mode);
      strategyTrackEl.appendChild(body);
      syncStrategyViewportHeight(body);
      lastStickyKey = nextKey;
      lastSlideIndex = nextIndex;
      strategyAnimating = false;
    }, STRATEGY_SWAP_MS);
  };

  const getActiveSlide = () => {
    const anchorY = getAnchorY() + source.offsetHeight + 16;
    const eligibleSlides = isInviteTitleMode
      ? slides.filter((slide) => slide.dataset.stickySubtitle)
      : slides;
    let activeSlide = eligibleSlides[0] || slides[0];

    for (const slide of eligibleSlides) {
      if (slide.getBoundingClientRect().top <= anchorY) {
        activeSlide = slide;
      }
    }

    return activeSlide;
  };

  const resetSticky = () => {
    setFixedMode(false);
  };

  const update = () => {
    const anchorY = getAnchorY();
    const designBottom = designSection.getBoundingClientRect().bottom;
    const headerBottom = pageHeader.getBoundingClientRect().bottom;

    if (designBottom <= anchorY || headerBottom > anchorY) {
      resetSticky();
      return;
    }

    const activeSlide = getActiveSlide();
    if (isInviteTitleMode && !activeSlide.dataset.stickySubtitle) {
      resetSticky();
      return;
    }

    setFixedMode(true);
    setStickyContent(activeSlide);
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      update();
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('hashchange', resetSticky);
  projectEl?.querySelectorAll('.project-subnav__link').forEach((link) => {
    link.addEventListener('click', () => window.setTimeout(update, 320));
  });
  update();
}

function observeSubnavReveal() {
  const navHeight = () =>
    parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 72;

  const subnavHeight = () =>
    parseInt(getComputedStyle(document.documentElement).getPropertyValue('--subnav-height'), 10) || 52;

  const updateAll = () => {
    const navH = navHeight();
    const subnavH = subnavHeight();
    const projectEls = [...document.querySelectorAll('[data-project]')];

    let primaryProject = null;
    let bestScore = Infinity;
    projectEls.forEach((projectEl) => {
      const rect = projectEl.getBoundingClientRect();
      if (rect.bottom <= navH + 8 || rect.top >= window.innerHeight - 8) return;
      const score = Math.abs(rect.top - navH);
      if (score < bestScore) {
        bestScore = score;
        primaryProject = projectEl;
      }
    });

    projectEls.forEach((projectEl) => {
      const subnav = projectEl.querySelector('.project-subnav--cover');
      const trigger = projectEl.querySelector('[data-subnav-reveal-trigger]');
      const navLinks = projectEl.querySelectorAll('.project-subnav__link');
      const sections = [...projectEl.querySelectorAll('[data-section]')];
      const projectRect = projectEl.getBoundingClientRect();
      const inView = projectRect.bottom > navH + 8 && projectRect.top < window.innerHeight - 8;
      const isPrimary = projectEl === primaryProject;

      if (subnav && trigger) {
        if (!inView || !isPrimary) {
          subnav.classList.remove('is-revealed');
          projectEl.classList.remove('is-subnav-revealed');
        } else {
          const revealed = trigger.getBoundingClientRect().top <= navH + 1;
          subnav.classList.toggle('is-revealed', revealed);
          projectEl.classList.toggle('is-subnav-revealed', revealed);
        }
      }

      if (!navLinks.length || !sections.length || !inView || !isPrimary) {
        navLinks.forEach((link) => link.classList.remove('active'));
        return;
      }

      const hasCoverSubnav = Boolean(subnav);
      const subnavRevealed = hasCoverSubnav
        ? projectEl.classList.contains('is-subnav-revealed')
        : true;
      const anchor = navH + (subnavRevealed ? subnavH : 0) + 20;

      if (trigger && trigger.getBoundingClientRect().top > anchor) {
        navLinks.forEach((link) => link.classList.remove('active'));
        return;
      }

      const anchorY = anchor + 6;
      let activeId = sections[0].dataset.section;
      let containsAnchor = false;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= anchorY && rect.bottom > anchorY) {
          activeId = section.dataset.section;
          containsAnchor = true;
        }
      }

      if (!containsAnchor) {
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= anchorY) {
            activeId = section.dataset.section;
          }
        }
      }

      navLinks.forEach((link) => {
        link.classList.toggle('active', link.dataset.spy === activeId);
      });
    });

    refreshReveal();
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      updateAll();
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('hashchange', updateAll);
  updateAll();
}

function observeSectionSpy() {
  // Tab highlighting is handled together with subnav reveal in observeSubnavReveal.
}

function observeDesignStickyStrategies() {
  document.querySelectorAll('[data-design-sticky-source]').forEach((source) => {
    bindDesignStickySource(source);
  });
}

function bindEvents() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuBtn.classList.toggle('open');
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuBtn.classList.remove('open');
    });
  });

  window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    const scrolled = window.scrollY > 40;
    if (scrolled !== state.navScrolled) {
      state.navScrolled = scrolled;
      nav?.classList.toggle('nav--scrolled', scrolled);
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

render();
