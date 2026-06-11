import { site, catalog, projects } from './data/portfolio.js';
import './styles/main.css';

const state = {
  navScrolled: false,
};

function sectionAnchor(projectId, index) {
  return `${projectId}-section-${index}`;
}

function renderMetricStat(m) {
  const trendIcon = m.trend === 'up' ? '↑' : m.trend === 'down' ? '↓' : '';
  return `
    <div class="metrics-stat">
      <div class="metrics-stat__value">
        <span data-count="${m.value}" data-suffix="${m.suffix}" data-decimals="${Number.isInteger(m.value) ? 0 : 2}">0</span>
        ${m.unit ? `<small>${m.unit}</small>` : ''}
        ${trendIcon ? `<span class="metrics-stat__trend metrics-stat__trend--${m.trend}">${trendIcon}</span>` : ''}
      </div>
      <div class="metrics-stat__label">${m.label}</div>
    </div>
  `;
}

function renderMetricsCallout(text, variant = 'default') {
  return `
    <div class="metrics-callout metrics-callout--${variant}">
      <span class="metrics-callout__icon" aria-hidden="true">▶</span>
      <p class="metrics-callout__text">${text}</p>
    </div>
  `;
}

function renderMetricCard(m) {
  return `
    <div class="metric-card">
      <div class="metric-card__value">
        <span data-count="${m.value}" data-suffix="${m.suffix}" data-decimals="${Number.isInteger(m.value) ? 0 : 2}">0</span>
        ${m.unit ? `<small>${m.unit}</small>` : ''}
      </div>
      <div class="metric-card__label">${m.label}</div>
    </div>
  `;
}

function renderMetricsPanel(project) {
  if (!project.metrics?.length && !project.resultsSummary && !project.resultsIntro) return '';

  const hasMergedLayout = project.resultsIntro || project.resultsSummary;

  if (hasMergedLayout) {
    const statsHtml = project.metrics?.map(renderMetricStat).join('') || '';
    return `
      <div class="metrics-panel">
        <div class="metrics-panel__inner container">
          <div class="metrics-panel__card">
            <h3 class="metrics-panel__title">数据结果</h3>
            <div class="metrics-panel__layout">
              <div class="metrics-panel__primary">
                ${project.resultsIntro ? renderMetricsCallout(project.resultsIntro, 'intro') : ''}
                ${statsHtml ? `<div class="metrics-panel__stats">${statsHtml}</div>` : ''}
              </div>
              ${project.resultsSummary ? renderMetricsCallout(project.resultsSummary, 'highlight') : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="metrics-panel">
      <div class="metrics-panel__inner container">
        <div class="metrics-panel__card">
          <h3 class="metrics-panel__title">数据结果</h3>
          <div class="metrics-grid">
            ${project.metrics?.map(renderMetricCard).join('') || ''}
          </div>
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
  observeMetrics();
  observeReveal();
  observeSectionSpy();
}

function renderNav() {
  return `
    <nav class="nav ${state.navScrolled ? 'nav--scrolled' : ''}" id="nav">
      <div class="nav__inner">
        <a href="#hero" class="nav__logo">${site.name}</a>
        <div class="nav__links">
          <a href="#catalog">目录</a>
          ${projects.map((p) => `<a href="#${p.id}">${p.title.slice(0, 6)}…</a>`).join('')}
          <a href="#contact">联系</a>
        </div>
        <button class="nav__menu-btn" id="menuBtn" aria-label="打开菜单">
          <span></span><span></span>
        </button>
      </div>
      <div class="nav__mobile" id="mobileMenu">
        <a href="#catalog">作品目录</a>
        ${projects.map((p) => `<a href="#${p.id}">${p.title}</a>`).join('')}
        <a href="#contact">联系方式</a>
      </div>
    </nav>
  `;
}

function renderHero() {
  return `
    <header class="hero" id="hero">
      <div class="hero__bg"></div>
      <div class="hero__content reveal">
        <p class="hero__eyebrow">${site.subtitle}</p>
        <h1 class="hero__title">${site.name}</h1>
        <p class="hero__role">${site.role}</p>
        <p class="hero__desc">${site.description}</p>
        <div class="hero__tags">
          ${site.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="hero__contact">
          <a href="tel:${site.contact.phone}">${site.contact.phone}</a>
          <a href="mailto:${site.contact.email}">${site.contact.email}</a>
        </div>
        <div class="hero__actions">
          <a href="#catalog" class="btn btn--primary">查看目录</a>
        </div>
      </div>
      <div class="hero__scroll-hint">
        <span>向下滚动</span>
        <div class="hero__scroll-line"></div>
      </div>
    </header>
  `;
}

function renderCatalog() {
  return `
    <section class="section section--catalog" id="catalog">
      <div class="container">
        <div class="section__header reveal">
          <p class="section__eyebrow">Contents</p>
          <h2 class="section__title">作品目录</h2>
          <p class="section__desc">点击项目卡片进入详情，查看完整案例与设计方案。</p>
        </div>
        <div class="catalog-grid">
          ${catalog
            .map((group, i) => {
              const project = getProject(group.id);
              if (!project) return '';
              const isPlaceholder = project.placeholder;
              return `
            <a href="#${group.id}" class="catalog-card reveal ${isPlaceholder ? 'catalog-card--placeholder' : ''}" style="--delay: ${i * 0.1}s">
              <div class="catalog-card__cover">
                ${
                  project.cover
                    ? `<img src="${project.cover}" alt="${project.title}" loading="lazy" />`
                    : `<div class="catalog-card__cover-placeholder"><span>Case 03</span></div>`
                }
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
                  ${project.metrics
                    .slice(0, 3)
                    .map(
                      (m) => `
                    <div class="mini-metric">
                      <strong ${m.placeholder ? '' : `data-count="${m.value}" data-suffix="${m.suffix}"`}>${m.placeholder ? '—' : '0'}</strong>
                      <span>${m.label}</span>
                    </div>
                  `
                    )
                    .join('')}
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
      const slidesHtml = section.slides
        .map(
          (slide) => `
        <figure class="project-section__figure">
          <img src="${slide.src}" alt="${slide.alt}" loading="lazy" />
        </figure>
      `
        )
        .join('');

      const metricsHtml = section.metrics ? renderMetricsPanel(project) : '';

      return `
      <section class="project-section" id="${sectionAnchor(project.id, i)}" data-section="${sectionAnchor(project.id, i)}" aria-label="${section.label}">
        ${slidesHtml}
        ${metricsHtml}
      </section>
    `;
    })
    .join('');

  return `
    <section class="project-detail" id="${project.id}" data-project="${project.id}">
      <nav class="project-subnav" data-project-nav="${project.id}" aria-label="章节目录">
        <div class="project-subnav__inner">
          <span class="project-subnav__title">${project.title}</span>
          <div class="project-subnav__links">
            ${sectionLinks}
          </div>
        </div>
      </nav>

      <div class="project-content">
        <div class="project-sections">
          ${sectionBlocks}
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
          <h4>联系方式</h4>
          <a href="tel:${site.contact.phone}">${site.contact.phone}</a>
          <a href="mailto:${site.contact.email}">${site.contact.email}</a>
        </div>
        <p class="footer__thanks">谢谢</p>
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
    { threshold: 0.3 }
  );
  counters.forEach((el) => observer.observe(el));
}

function observeReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  items.forEach((el) => observer.observe(el));
}

function observeSectionSpy() {
  document.querySelectorAll('[data-project]').forEach((projectEl) => {
    const projectId = projectEl.dataset.project;
    const sections = projectEl.querySelectorAll('[data-section]');
    const navLinks = projectEl.querySelectorAll('.project-subnav__link');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.dataset.section;
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.dataset.spy === id);
          });
        });
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
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
