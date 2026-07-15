export const site = {
  name: '申文靖',
  role: '产品设计师',
  title: 'UX Design Portfolio',
  subtitle: '用户体验 · 交互 · 系统 · 2021–2026',
  description: '',
  tags: ['用户体验', '交互设计', '系统设计', '闪购'],
  contact: {
    phone: '15801352103',
    email: 'jane_design_bj@163.com',
  },
  cover: '/images/pages/page-01.jpg',
};

export const catalog = [
  {
    id: 'reverse-flow',
    index: '01',
    title: '逆向链路标杆化建设与落地',
    items: ['申请售后优化', '修改订单信息', '退货退款流程优化', '订单详情页优化', '逆向一致性'],
  },
  {
    id: 'invite-activity',
    index: '02',
    title: '拉新全链路优化与增长赋能',
    items: ['邀新活动商品迭代优化'],
  },
  {
    id: 'pdp-redesign',
    index: '03',
    title: '商详体系化建设与体验优化',
    items: ['商详改版优化'],
  },
];

function makeSlide(page, projectTitle, label, ext = 'jpg') {
  return {
    src: `/images/pages/page-${String(page).padStart(2, '0')}.${ext}`,
    alt: `${projectTitle} · ${label}`,
  };
}

function makeSlidesFromPages(pages, projectTitle, sectionLabel, ext = 'jpg') {
  return pages.map((page) => makeSlide(page, projectTitle, sectionLabel, ext));
}

const p2FlowersScrollDemo = {
  mode: 'scroll',
  layout: { designWidth: 750, statusBarHeight: 88, navTopRadius: 24 },
  chrome: {
    statusBar: '/images/projects/pdp-p2-chrome-status-bar.png',
    topNavDefault: '/images/projects/pdp-p2-chrome-top-nav-default.png?v=6',
    topNavPinned: '/images/projects/pdp-p2-chrome-top-nav-pinned.png',
    bottomBar: '/images/projects/pdp-p2-chrome-bottom-bar.png',
  },
  page: '/images/projects/pdp-p2-flowers-scroll-page.png?v=2',
  page2x: '/images/projects/pdp-p2-flowers-scroll-page@2x.png?v=2',
  page3x: '/images/projects/pdp-p2-flowers-scroll-page@3x.png?v=2',
  tabs: [
    { label: '商品', yRatio: 0 },
    { label: '评价', yRatio: 0.20 },
    { label: '返图', yRatio: 0.25 },
    { label: '详情', yRatio: 0.29 },
  ],
  tabsInset: { left: 0.16, right: 0.28 },
  /** 吸顶 Tab 样式 · 对齐设计稿（260px 视口基准） */
  tabStyle: {
    fontSize: 11,
    lineHeight: 13,
    underlineHeight: 2,
    underlineGap: 3,
  },
};

/** 598×1024 底图走查 · 同店推荐 demo 叠层锚点（坐标均为 750 设计稿 px） */
const p2FlowersRecommendDemo = {
  page: '/images/projects/pdp-p2-flowers-rec-base.png?v=3',
  pageSize: { w: 598, h: 1024 },
  chrome: {
    statusBar: '/images/projects/pdp-p2-chrome-status-bar.png',
    topNavDefault: '/images/projects/pdp-p2-chrome-top-nav-default.png?v=6',
  },
  mediaTabs: '/images/projects/pdp-p2-flowers-rec-media-tabs.png?v=2',
  tabs: [
    { id: 'images', label: '图片' },
    { id: 'style', label: '款式1/3' },
    { id: 'reviews', label: '评价' },
  ],
  tabAssets: {
    specTag: '/images/projects/pdp-p2-flowers-rec-spec-tag.png',
    reviewsPanel: '/images/projects/pdp-p2-flowers-rec-reviews-panel.png',
  },
  mainThumb: '/images/projects/pdp-p2-flowers-rec-main-thumb.png?v=2',
  mainHero: '/images/projects/pdp-p2-flowers-rec-hero-main.png?v=2',
  recLabel: '/images/projects/pdp-p2-flowers-rec-label.png?v=3',
  layout: {
    designWidth: 750,
    designHeight: 1024,
    statusBarEnd: 53,
    navStart: 70,
    navEnd: 158,
    heroTop: 70,
    heroTopOffsetPx: -24,
    trackActiveShiftPx: 12,
    trackActiveShiftId: 'v5',
    sectionFadeTopPx: 718,
    sectionFadeHeightPx: 120,
    /* 与页内白卡左右边距一致：约 16×2 @750 */
    whitePanelWidthInsetPx: 32,
    /* 顶圆角 24 @750 → ≈8.3 @260；底角 0 */
    whitePanelTopRadiusPx: 24,
    /* 露出高度≈14px @260（40@750），贴缩略轨顶上，不挡 Tab 底 */
    whitePanelHeightPx: 40,
    whitePanelGapFromTabsBottomPx: 16,
    whitePanelFullWidth: false,
    whitePanelExtendOnReviewsOnly: false,
    whitePanelBottomRadiusPx: 0,
    heroBottomPx: 838,
    priceTop: 647,
    tabsTopPx: 786,
    tabsBottomGapPx: 8,
    trackTopPx: 838,
    trackLeftPx: 6,
    recommendTop: 567,
    tabsLeft: 103,
    tabsWidth: 391,
    tabHeight: 52,
    tabsGap: 52,
    thumbSize: 100,
    thumbRadius: 18,
    padLeft: 26,
    padRight: 24,
    gapMainLabel: 22,
    gapLabelList: 20,
    gapItem: 12,
    labelWidth: 36,
    specTagGapPx: 24,
    specTagWidthPx: 76,
    specTagHeightPx: 40,
    specTagRadiusPx: 20,
    reviewsPanelWidthPx: 738,
    reviewsPanelAspectW: 1021,
    reviewsPanelAspectH: 1024,
    tabBarRadiusPx: 26,
    tabPillTopPx: 4,
    tabPillHeightPx: 44,
    tabPillRadiusPx: 28,
    tabFontSizePx: 24,
    tabLineHeightPx: 40,
    tabBlurPx: 16.32,
    demoStyleHoldMs: 1600,
    reviewsPanelOffsetYPx: -48,
  },
  variants: [
    { id: 'v1', label: '款式1', hero: '/images/projects/pdp-p2-flowers-rec-hero-01.png?v=2' },
    { id: 'v2', label: '款式2', hero: '/images/projects/pdp-p2-flowers-rec-hero-02.png?v=2' },
    { id: 'v3', label: '款式3', hero: '/images/projects/pdp-p2-flowers-rec-hero-03.png?v=2' },
    { id: 'v4', label: '款式4', hero: '/images/projects/pdp-p2-flowers-rec-hero-04.png?v=3' },
    { id: 'v5', label: '款式5', hero: '/images/projects/pdp-p2-flowers-rec-hero-05.png?v=3' },
  ],
  styleSpecLabels: {
    1: '11枝',
    2: '6枝',
    3: '5枝',
  },
};

const p2DigitalRecommendDemo = {
  page: '/images/projects/pdp-p2-digital-rec-base.png?v=3',
  pageSize: { w: 598, h: 1024 },
  chrome: {
    statusBar: '/images/projects/pdp-p2-chrome-status-bar.png',
    topNavDefault: '/images/projects/pdp-p2-chrome-top-nav-default.png?v=6',
  },
  tabs: [
    { id: 'images', label: '图片' },
    { id: 'style', label: '配色1/3', styleLabelMain: '配色', styleLabelSub: '1/3' },
    { id: 'reviews', label: '评价' },
  ],
  tabAssets: {
    specTag: '/images/projects/pdp-p2-digital-rec-spec-tag.png?v=5',
    reviewsPanel: '/images/projects/pdp-p2-digital-rec-reviews-panel.png?v=10',
  },
  mainThumb: '/images/projects/pdp-p2-digital-rec-main-thumb.png?v=1',
  mainHero: '/images/projects/pdp-p2-digital-rec-hero-main.png?v=2',
  layout: {
    designWidth: 750,
    designHeight: 1024,
    statusBarEnd: 53,
    navStart: 70,
    navEnd: 158,
    heroTop: 70,
    heroTopOffsetPx: -24,
    trackActiveShiftPx: 0,
    trackActiveShiftId: 'v2',
    sectionFadeTopPx: 718,
    sectionFadeHeightPx: 120,
    /* 与页内白卡左右边距一致：约 16×2 @750 */
    whitePanelWidthInsetPx: 32,
    /* 顶圆角 24 @750 → ≈8.3 @260；底角 0 */
    whitePanelTopRadiusPx: 24,
    /* 露出高度≈14px @260（40@750），贴缩略轨顶上，不挡 Tab 底 */
    whitePanelHeightPx: 40,
    whitePanelGapFromTabsBottomPx: 16,
    whitePanelFullWidth: false,
    whitePanelExtendToBottom: false,
    whitePanelExtendOnReviewsOnly: false,
    whitePanelBottomRadiusPx: 0,
    heroBottomPx: 838,
    priceTop: 647,
    tabsTopPx: 786,
    tabsBottomGapPx: 8,
    trackTopPx: 838,
    trackLeftPx: 6,
    recommendTop: 567,
    tabsLeft: 103,
    tabsWidth: 391,
    tabHeight: 52,
    tabsGap: 52,
    thumbSize: 100,
    thumbRadius: 18,
    padLeft: 26,
    padRight: 24,
    gapMainLabel: 12,
    gapLabelList: 20,
    gapItem: 12,
    labelWidth: 36,
    specTagGapPx: 24,
    specTagWidthPx: 76,
    specTagHeightPx: 40,
    specTagRadiusPx: 20,
    reviewsPanelWidthPx: 738,
    reviewsPanelAspectW: 974,
    reviewsPanelAspectH: 1024,
    tabBarRadiusPx: 26,
    tabPillTopPx: 4,
    tabPillHeightPx: 44,
    tabPillRadiusPx: 28,
    tabFontSizePx: 24,
    tabLineHeightPx: 40,
    tabBlurPx: 16.32,
    demoStyleHoldMs: 1600,
    /* 与鲜花评价态一致：上移面板；仅裁切底边直角 */
    reviewsPanelOffsetYPx: -48,
    reviewsClipTopOnly: true,
  },
  variants: [
    {
      id: 'v1',
      label: '橙色',
      hero: '/images/projects/pdp-p2-digital-rec-hero-01.png?v=1',
      thumb: '/images/projects/pdp-p2-digital-rec-thumb-01.png?v=1',
    },
    {
      id: 'v2',
      label: '蓝色',
      hero: '/images/projects/pdp-p2-digital-rec-hero-02.png?v=2',
      thumb: '/images/projects/pdp-p2-digital-rec-thumb-02.png?v=1',
    },
  ],
  styleSpecLabels: {
    1: '银色',
    2: '星宇橙色',
    3: '深蓝色',
  },
};

const p2DigitalParamDemo = {
  label: '商详页 · 参数浮层',
  hint: '悬停自动播放',
  page: '/images/projects/pdp-p2-digital-param-page.png?v=3',
  sheet: '/images/projects/pdp-p2-digital-param-sheet.png?v=9',
  hotspot: { top: '447px', left: '179px', width: 0.24, height: 0.065 },
};

const p2TrustAfterStatic = {
  label: 'After',
  src: '/images/projects/pdp-p2-trust-after-v5.png',
  alt: '改版后 · 鲜花商详 · 信任背书模块',
};

const p2TrustInteractiveDemo = {
  label: '鲜花商详 · 信任背书交互',
  hint: '悬停自动播放',
  src: '/demos/pdp-p2-trust/index.html?v=12',
};

export const projects = [
  {
    id: 'reverse-flow',
    title: '逆向链路体验优化',
    navLabel: '逆向优化',
    category: '闪购设计 · 逆向链路标杆化',
    cover: '/images/pages/page-03.jpg',
    heroShowcase: [
      {
        src: '/images/projects/reverse-flow-a.jpg',
        alt: '逆向链路体验优化 · 等待支付',
      },
      {
        src: '/images/projects/reverse-flow-b.jpg',
        alt: '逆向链路体验优化 · 申请退货退款',
      },
      {
        src: '/images/projects/reverse-flow-c.jpg',
        alt: '逆向链路体验优化 · 商家处理中',
      },
      {
        src: '/images/projects/reverse-flow-d.jpg',
        alt: '逆向链路体验优化 · 退款成功',
      },
    ],
    summary:
      '围绕日均 34 万退款订单的售后瓶颈，构建场景化功能引导体系，简化链路与模块布局，作为「设计团队-逆向一致性」项目的标杆示例。',
    background:
      '当前闪购业务已形成规模化发展态势，日均订单 GTV 达 479 万单，但业务增长背后存在显著售后瓶颈：日均退款订单量高达 34 万单，整体退款率约 7%。庞大的售后退款体量不仅直接侵蚀业务核心收益，更因流程低效、体验不佳严重影响用户感知，成为制约闪购业务高质量发展的关键问题，亟需通过系统性体验优化破解售后困境。',
    analysisCategories: [
      {
        index: '01',
        badge: '闪购售后体验差',
        titleParts: ['功能缺', '路径繁', '信息难', '无共情'],
        items: [
          '功能缺失导致用户无从下手',
          '操作路径繁琐降低用户售后效率',
          '信息获取困难导致用户理解成本高',
          '缺乏情感化表达',
        ],
      },
      {
        index: '02',
        badge: '数据现状',
        titleParts: ['审批效率低', '拒绝场景差异显著'],
        items: [
          '用户主动发起的退款订单占比高达 95%，其中 66% 的订单需经过商家审批环节，而商家平均审批时长长达 82 分钟',
          '相比配送前，配送中、收货后拒绝率分别高达 36.49%、24.15%',
          '被拒绝订单需平台介入处理，平均介入时长约\u00A06\u00A0分钟',
        ],
      },
      {
        index: '03',
        badge: '竞品设计亮点',
        titleParts: ['场景化', '简路径', '清信息', '情感化'],
        items: [
          '场景化平台引导功能，满足不同场景下的用户诉求',
          '剔除冗余步骤，布局符合用户操作行为',
          '信息简洁易懂、主次分明，用户可快速做出下一步行动',
          '采用「用户语言」，与用户共情、传递业务价值',
        ],
      },
    ],
    analysisMetrics: [
      { label: '万服降低', trend: 'down' },
      { label: '订单完成率提升', trend: 'up' },
      { label: '用户满意度提升', trend: 'up' },
    ],
    resultsIntro:
      '本次优化围绕用户主动退款占比高、商家审批周期长、退款拒绝率高、平台介入成本高等核心痛点，通过极速退、修改订单信息、售后申请链路、售后详情页四大项目落地，实现体验与数据双改善。',
    resultsSummary:
      '闪购逆向链路作为本次"设计团队-逆向一致性"项目的标杆示例，其优化思路与落地成效已形成可复用经验，后续将推动其他业务线向闪购逆向链路的设计标准看齐，实现全业务逆向链路的规范化、一致性优化。',
    painPoints: [
      { title: '功能缺路径繁', desc: '功能缺失导致用户无从下手，操作路径繁琐降低售后效率' },
      { title: '信息难无共情', desc: '信息获取困难导致理解成本高，缺乏情感化表达' },
      { title: '审批效率低', desc: '66% 订单需商家审批，平均审批时长长达 82 分钟' },
      { title: '拒绝场景差异显著', desc: '配送中、收货后拒绝率分别高达 36.49%、24.15%' },
    ],
    strategies: [
      {
        title: '构建场景化功能引导体系',
        items: [
          '补齐并强化相应功能，提升用户自主操作性',
          '完善订单修改页模块，提升用户操作效率',
          '在不同售后节点结合用户痛点，增加平台主动引导功能',
        ],
      },
      {
        title: '简化链路与模块布局',
        items: [
          '精简极速退款链路，提升操作效率',
          '优化退款链路及信息布局，通过精准降噪、场景化呈现信息，提升信息传递效率与用户体验',
          '信息精简+可视化表达，提升用户信息获取效率',
        ],
      },
    ],
    metrics: [
      { value: 2.73, suffix: '', label: '万服下降', unit: '', trend: 'down' },
      { value: 1.71, suffix: '%', label: '订单完成率提升', unit: '', trend: 'up' },
      { value: 5.16, suffix: '%', label: '用户满意度提升', unit: '', trend: 'up' },
      { value: 4, suffix: '%', label: '页面停留时长', unit: '', trend: 'up' },
    ],
    sections: [
      {
        label: '项目分析',
        slides: [],
        analysis: true,
      },
      {
        label: '方案设计',
        designLayout: 'grouped',
        hideDesignHeaders: true,
        stickyStrategies: true,
        stickyStrategySplit: 3,
        slides: makeSlidesFromPages([5, 6, 7, 8, 9, 10], '逆向链路体验优化', '方案设计'),
        designHeaders: [
          {
            subtitle: '构建场景化功能引导体系',
            strategies: [{ label: '策略1', text: '补齐并强化相应功能，提升用户自主操作性' }],
            maskHeader: false,
          },
          {
            subtitle: '构建场景化功能引导体系',
            strategies: [{ label: '策略2', text: '完善订单信息修改页模块，提升用户操作效率' }],
            maskHeader: false,
          },
          {
            subtitle: '构建场景化功能引导体系',
            strategies: [{ label: '策略3', text: '在不同售后节点结合用户痛点，增加平台主动引导功能' }],
            maskHeader: false,
          },
          {
            subtitle: '简化链路与模块布局，提升满意度',
            strategies: [{ label: '策略1', text: '精简极速退款链路，提升操作效率' }],
            maskHeader: false,
          },
          {
            subtitle: '简化链路与模块布局，提升满意度',
            strategies: [
              {
                label: '策略2',
                text: '优化退款链路及信息布局，通过精准降噪、场景化呈现信息，提升信息传递效率与用户体验',
              },
            ],
            maskHeader: false,
          },
          {
            subtitle: '简化链路与模块布局，提升满意度',
            strategies: [{ label: '策略3', text: '信息精简+可视化表达，提升用户信息获取效率' }],
            maskHeader: false,
          },
        ],
      },
      {
        label: '数据结果',
        slides: [],
        metrics: true,
      },
    ],
  },
  {
    id: 'invite-activity',
    title: '邀新活动商品迭代优化',
    navLabel: '邀新活动',
    category: '闪购设计 · 拉新全链路优化',
    cover: '/images/pages/page-12.jpg',
    heroShowcase: [
      {
        src: '/images/projects/invite-share-products.png',
        alt: '邀新活动商品迭代优化 · 分享商品',
      },
      {
        src: '/images/projects/invite-share-promo.png',
        alt: '邀新活动商品迭代优化 · 邀新活动页',
      },
    ],
    heroTags: ['分享路径重构', '收益型体验', '社交货币属性'],
    summary:
      '针对邀请有礼活动转化下滑问题，重构分享方式与信息架构，打造具有强「社交货币」属性的收益型分享体验。',
    background:
      '闪购邀请有礼活动聚焦新客规模，2023 年邀请有礼活动新客来源占比 19.89%，2024 年 1–10 月期间邀请用户中新客数占闪购新客大盘 5.6%，12 月期间仅占 4.1%，持续走低。2024 年初增加商品&商家分享路径后，曝光转交易转化率下降 8.70pp，主态点击分享率下降 21.40pp，表明用户在专业分享与日常分享两类角色下，对活动规则、信息呈现与操作路径存在明显理解与使用障碍，项目目标为通过体验优化提升活动「社交货币」属性与分享转化。',
    backgroundPanel: {
      index: '01',
      title: '项目背景',
      goals: [
        {
          title: '业务目标',
          text: '将邀请有礼打造成具有强「社交货币」属性的活动，扩大专业用户量，提升新客和交易订单量',
        },
        {
          title: '体验目标',
          text: '为邀请有礼头部专业用户，提供丰富多样、便宜实惠的「分享货币」，让用户清晰认知活动规则、愿意参与分享，同时觉得闪购邀请有礼活动是一个好用的赚钱工具',
        },
      ],
      strategyLabel: '体验设计策略制定',
      strategySteps: [
        {
          index: '01',
          title: '数据分析',
          items: [
            '增加商品&商家分享后，曝光转交易订单下降 8.7%',
            '主态点击分享率降低 21.4%',
            '商详页进入邀请页 CTR 降低 7.61PP',
          ],
        },
        {
          index: '02',
          title: '用户访谈',
          items: [
            '活动规则不清晰，页面信息复杂，用户不知道能赚多少钱',
            '信息展示/操作入口不符合用户习惯，页面字太小不易查找',
          ],
        },
        {
          index: '03',
          title: '专家走查',
          items: [
            '信息多、信息碎，信息获取效率低',
            '信息传递缺乏差异化',
            '入口引导弱',
          ],
        },
      ],
      principles: [
        {
          title: '活动玩法更简单',
          items: [
            '降低阅读成本：一屏只展示一个活动/任务',
            '降低理解成本：让用户知道活动是干什么的',
            '简化操作成本：明确哪个按钮能点、该点哪个',
          ],
        },
        {
          title: '决策起来更容易',
          items: ['赚的钱更大程度差异化', '差异化不大时尽量做到差异化'],
        },
      ],
      keyStrategies: ['简化页面布局', '优化信息构成', '提升选择效率'],
    },
    painPoints: [
      { title: '活动规则不清晰', desc: '页面信息复杂，用户不知道能赚多少钱' },
      { title: '信息展示不符合习惯', desc: '找不到活动入口，页面字太小不易查找' },
      { title: '信息多且碎', desc: '信息获取效率低，降低了用户操作效率' },
      { title: '入口引导弱', desc: '61.97% 点击分享按钮的用户没有后续转化' },
    ],
    strategies: [
      {
        title: '简化页面布局',
        items: [
          '活动玩法更简单，一屏只展示一个活动/任务',
          '降低理解成本，让用户知道活动是干什么的',
          '简化操作成本，明确哪个按钮能点',
        ],
      },
      {
        title: '优化信息构成',
        items: ['赚的钱更大程度差异化', '差异化不大时尽量做到差异化', '提升选择效率'],
      },
    ],
    metrics: [
      { value: 13.09, suffix: '%', label: '曝光转交易订单率', unit: '' },
      { value: 22.23, suffix: '%', label: '红包分享点击率', unit: '' },
      { value: 8.24, suffix: '%', label: '曝光转闪购新率', unit: '' },
      { value: 2.45, suffix: '%', label: '商品分享率', unit: '' },
      { value: 1282, suffix: '', label: '每日新增客数', unit: '人' },
      { value: 1.14, suffix: '%', label: '商家分享率', unit: '' },
      { value: 7069, suffix: '', label: '每日订单增量', unit: '单' },
    ],
    resultsIntro:
      '聚焦分享方式重构与信息架构优化，通过全局规则简化与局部模块轻量化，提升活动理解效率与分享转化表现。',
    resultsSummary:
      '整体业务结论：分模块改版后，曝光转交易、分享点击与订单增量等核心指标均达成预期，验证收益型分享体验策略有效。',
    metricGroups: [
      {
        title: '整体业务结论',
        columns: 4,
        metrics: [
          { value: 13.09, suffix: '%', label: '曝光转交易订单率', unit: '' },
          { value: 8.24, suffix: '%', label: '曝光转闪购新率', unit: '' },
          { value: 1282, suffix: '', label: '每日新增客数', unit: '人' },
          { value: 7069, suffix: '', label: '每日订单增量', unit: '单' },
        ],
      },
      {
        title: '分模块改版效果',
        columns: 3,
        metrics: [
          { value: 22.23, suffix: '%', label: '红包分享点击率', unit: '' },
          { value: 2.45, suffix: '%', label: '商品分享率', unit: '' },
          { value: 1.14, suffix: '%', label: '商家分享率', unit: '' },
        ],
      },
    ],
    sections: [
      {
        label: '项目背景',
        slides: [],
        backgroundPanel: true,
      },
      {
        label: '方案设计',
        panelIndex: '02',
        designLayout: 'grouped',
        designSectionTitle: '方案设计与效果评估',
        stickyStrategies: true,
        stickyMode: 'invite-title',
        slides: makeSlidesFromPages([14, 15, 16, 17, 18, 19], '邀新活动商品迭代优化', '方案设计', 'jpg'),
        designHeaders: [
          {
            subtitle: '',
            strategies: [],
            maskHeader: false,
          },
          {
            subtitle: '【全局】聚焦分享方式重构，简化活动规则，降低用户理解成本',
            strategies: [],
            maskHeader: false,
          },
          {
            subtitle: '【全局】聚焦分享方式重构，简化活动规则，降低用户理解成本',
            strategies: [],
            maskHeader: false,
          },
          {
            subtitle: '【全局】聚焦分享方式重构，简化活动规则，降低用户理解成本',
            strategies: [],
            maskHeader: false,
          },
          {
            subtitle: '【局部】轻量化信息+精细化筛选，打造高转化的收益型商品分享体验',
            strategies: [],
            maskHeader: false,
          },
          {
            subtitle: '【局部】轻量化信息+精细化筛选，打造高转化的收益型商品分享体验',
            strategies: [],
            maskHeader: false,
          },
        ],
      },
      {
        label: '数据结果',
        panelIndex: '03',
        slides: [],
        metrics: true,
      },
    ],
  },
  {
    id: 'pdp-redesign',
    title: '商详改版优化',
    navLabel: '商详改版',
    category: '闪购设计 · 交易链路优化',
    cover: '/images/projects/pdp-redesign-reference.png',
    heroShowcase: [
      {
        src: '/images/projects/pdp-flowers.png',
        alt: '商详改版优化 · 鲜花类商详设计稿',
      },
      {
        src: '/images/projects/pdp-milk.png',
        alt: '商详改版优化 · 食品类商详设计稿',
      },
    ],
    heroTags: ['全品类通用', '品类差异化', '转化基线提升'],
    summary:
      '从「一套模板打全品类」升级为「全品类通用 + 品类差异化」两期策略，一期建立统一基线，二期聚焦非食品类（鲜花、数码）专项优化。',
    metricGroups: [
      {
        title: '商详二期',
        columns: 3,
        metrics: [
          { label: '整体进店访购率', text: '+0.05pp', trend: 'up' },
          { label: '商家至商详转化率', text: '+0.4pp', trend: 'up' },
          { label: '加购率', text: '+0.02pp', trend: 'up' },
        ],
      },
    ],
    background:
      '闪购商详是用户下单决策的核心页面，承载全品类商品交易转化。原有商详采用统一模板，信息层级与模块优先级难以兼顾食品与非食等不同品类的购买心智，导致关键决策信息传递效率不足、转化表现存在品类间差异。',
    backgroundPanel: {
      layout: 'pdp-goals',
      index: '01',
      title: '项目背景',
      goals: [
        {
          title: '业务目标',
          text: '提升商详转化率与加购效率，支撑全品类 GMV 增长，验证「统一规范 + 品类差异化」的可扩展商详体系',
        },
        {
          title: '体验目标',
          text: '优化信息层级与视觉表达，让用户更快获取价格、卖点与行动决策信息，降低跨品类浏览时的理解成本',
        },
      ],
    },
    strategyPhases: [
      {
        phase: '一期',
        title: '全品类通用',
        subtitle: '以全品类为基准，建立统一信息架构与视觉规范，拉升整体转化基线',
        items: [
          '统一全品类核心模块：主图、价格促销、卖点摘要、规格选择与加购行动区',
          '优化全品类通用的价格与促销信息层级，强化决策关键路径',
          '规范加购/立即购买行动区，覆盖食品、日用等全部品类',
        ],
        categoryNotes: { label: '覆盖品类', chips: ['全品类'] },
      },
      {
        phase: '二期',
        title: '非食品类差异化',
        subtitle: '以非食为主，按品类购物心智定制模块布局与信息优先级',
        items: [
          '缩短选购路径，满足用户对比诉求',
          '丰富决策信息，提升用户选购效率',
        ],
        categoryNotes: { label: '覆盖品类', chips: ['鲜花', '数码'] },
      },
    ],
    designPanel: {
      index: '03',
      title: '方案设计',
      overview: {
        title: '方案概述',
        lead: '闪购商详改版分两期推进：一期建立全品类统一规范，二期针对非食品类做差异化优化。',
        blocks: [
          {
            id: 'purpose',
            title: '商详：下单决策核心页',
            text: '闪购商详承载用户从「认识商品」到「完成加购」的完整决策链路。页面需在一屏内高效回答：这是什么、多少钱、划不划算、多久送到，并给出明确的购买行动入口。',
          },
          {
            id: 'changes',
            title: '两期递进式改版',
            items: [
              '一期 · 全品类：统一信息架构与视觉规范，重构页面三层信息层级，强化首屏转化信息',
              '二期 · 非食品：针对鲜花、数码等品类，定制模块布局与信息优先级，满足对比选购心智',
            ],
          },
          {
            id: 'why',
            title: '突破「一套模板打全品类」瓶颈',
            items: [
              '原模板信息层级扁平，价格、配送等关键转化信息首屏可见性不足',
              '全品类共用同一优先级，难以兼顾食品即时购与非食品对比选购的差异心智',
              '促销与价格表达分散，用户难以快速建立「值不值、快不快」的判断',
            ],
          },
        ],
      },
      phaseOne: {
        badge: '一期',
        title: '统一信息架构与视觉规范',
        beforeProblems: {
          title: '改版前存在的体验问题',
          panels: {
            default: {
              underSectionIndex: 2,
              sections: [
                {
                  title: '价格信息混乱，多标价冲突',
                  subtitle: '用户看不懂真实底价',
                  points: [
                    '多层价格标签无清晰优先级',
                    '优惠券与标价割裂，无法直观看到用券后实付金额',
                  ],
                },
                {
                  title: '行动按钮动线不连续',
                  subtitle: '购买操作分散、位置不固定',
                  points: [
                    '购买按钮穿插在页面中展示',
                    '领券与加购分散在不同区块，需反复上下滑动',
                  ],
                },
                {
                  title: '信息获取效率低',
                  subtitle: '首屏难以完成决策',
                  points: [
                    '属性信息与商品标题重复度高',
                    '关键决策信息位置靠下',
                  ],
                },
              ],
            },
            milk: {
              eyebrow: '普通商品 · 食品类',
              title: '普通商品体验问题',
              points: [
                {
                  title: '信息冗余',
                  detail: '属性和标题信息重复，降低首屏屏效，用户难以快速抓住关键信息。',
                },
                {
                  title: '有效信息获取效率低',
                  detail: '配料表、营养信息、评价等决策信息下沉靠后，需多次滑动才能对比完成购买判断。',
                },
              ],
            },
            flowers: {
              eyebrow: '非食商品 · 鲜花类',
              title: '非食商品体验问题',
              points: [
                {
                  title: '有效信息获取效率低',
                  detail: '用户评价信息靠下，用户需要滑动页面后才能判断决策，决策流程长。',
                },
                {
                  title: '商品置信度低',
                  detail: '缺少商家实拍与真实返图聚合，用户难以判断实物品相，购买预期与实际体验易偏差。',
                },
              ],
            },
          },
          shots: [
            {
              id: 'milk',
              label: '普通商品',
              src: '/images/projects/pdp-p1-problems-milk-before.png',
              alt: '改版前 · 牛奶类商详体验问题示例',
            },
            {
              id: 'flowers',
              label: '非食商品',
              src: '/images/projects/pdp-p1-problems-flowers-before.png',
              alt: '改版前 · 鲜花类商详体验问题示例',
            },
          ],
        },
        framework: {
          title: '页面结构优化',
          subtitle:
            '重新梳理并优化页面布局，提升用户信息获取效率、兼顾用户决策成本，从而提升页面转化率',
          schemeWireframe: {
            label: '页面框架',
            src: '/images/projects/pdp-p1-framework-after.png',
            alt: '改版后 · 页面框架灰图（商品价格 / 优惠信息 / 商品标题 / 推荐理由&售卖信息）',
          },
          parts: [
            {
              id: 'first-screen',
              layout: 'hero-list',
              strategyBadge: '策略一',
              strategyTitle: '即时转化 —— 缩短下单操作链路，强化快速成交',
              hero: {
                src: '/images/projects/pdp-p1-first-screen-after.png',
                alt: '改版后 · 牛奶类商详首屏方案',
              },
              strategies: [
                {
                  title: '价格优惠相近布局',
                  text: '价格与优惠信息相近排列，提升获取效率。',
                },
                {
                  title: '去除冗余信息',
                  text: '首屏高效获取商品基础信息。',
                },
                {
                  title: '底部固定行动栏',
                  text: '非食双按钮、普通单按钮差异化，转化按钮固定可视。',
                  media: {
                    type: 'duo-after',
                    shots: [
                      {
                        label: '改版后-普通',
                        src: '/images/projects/pdp-p1-cta-after-normal.png',
                        alt: '改版后 · 普通商品 · 底部固定行动栏单按钮',
                      },
                      {
                        label: '改版后-非食',
                        src: '/images/projects/pdp-p1-cta-after-nonfood.png',
                        alt: '改版后 · 非食商品 · 底部固定行动栏双按钮',
                      },
                    ],
                  },
                },
                {
                  title: '置信度与服务保障',
                  text: '弱化售卖信息，新增置信度与服务保障标签。',
                },
              ],
            },
            {
              id: 'trust-hero',
              layout: 'stagger-list',
              strategyBadge: '策略二',
              strategyTitle: '打消疑虑 —— 前置信任类操作入口，提前化解用户购买顾虑',
              visual: {
                heroDanmaku: {
                  src: '/images/projects/pdp-p1-trust-hero-danmaku.png?v=2',
                  alt: '改版后 · 主图 UGC 弹幕示例',
                },
                nutrition: {
                  label: '营养表',
                  src: '/images/projects/pdp-p1-trust-nutrition.png?v=11',
                  alt: '改版后 · 营养表前置主图示例',
                  placeholder: false,
                },
                nutritionSheet: {
                  label: '查看更多参数',
                  src: '/images/projects/pdp-p1-trust-nutrition-sheet.png?v=14',
                  alt: '改版后 · 点击查看更多参数浮层示例',
                  aspect: '472 / 1024',
                },
                review: {
                  src: '/images/projects/pdp-p1-conversion-review.png',
                  alt: '改版后 · 用户评价前置主图示例',
                },
                reviewsLanding: {
                  label: '更多评价',
                  src: '/images/projects/pdp-p1-trust-reviews-landing.png?v=5',
                  alt: '改版后 · 更多评价落地页示例',
                  aspect: '750 / 1624',
                },
              },
              strategies: [
                {
                  title: 'UGC 弹幕与花语',
                  text: '新增 UGC 弹幕与花语，丰富商品了解。',
                },
                {
                  title: '主图前置信任信息',
                  text: '营养表、用户评价前置主图，一键查看佐证。',
                },
              ],
            },
          ],
        },
        schemesTitle: '三类品类改版方案',
        schemes: [
          {
            category: '牛奶',
            tag: '食品类',
            before: {
              label: '改版前',
              src: '/images/projects/pdp-p1-milk-before.png?v=7',
              alt: '一期 · 牛奶类商详 · 改版前',
            },
            after: {
              label: '改版后',
              src: '/images/projects/pdp-p1-milk-after.png?v=2',
              alt: '一期 · 牛奶类商详 · 改版后',
            },
            danmaku: {
              designWidth: 750,
              designHeight: 1024,
              topPx: 160,
              leftPx: 24,
              maxWidthPx: 204,
              pillItemHeightPx: 40,
              pillGapPx: (4 * 750) / 260,
              visibleCount: 2,
              fontSizePx: 24,
              pillLineHeightPx: 34,
              textPaddingXPx: 16,
              textPaddingYPx: 3,
              bubbleIcon: '/images/projects/pdp-p1-scheme-danmaku-bubble.png',
              items: ['近期87人复购过', '36人点赞'],
            },
          },
          {
            category: '鲜花',
            tag: '非食品类',
            before: {
              label: '改版前',
              src: '/images/projects/pdp-p1-flowers-before.png',
              alt: '一期 · 鲜花类商详 · 改版前',
            },
            after: {
              label: '改版后',
              src: '/images/projects/pdp-p1-flowers-after.png?v=2',
              alt: '一期 · 鲜花类商详 · 改版后',
            },
            danmaku: {
              designWidth: 750,
              designHeight: 1024,
              topPx: 160,
              leftPx: 24,
              maxWidthPx: 204,
              pillItemHeightPx: 40,
              assetWidthPx: 1027,
              assetHeightPx: 285,
              assetScale: 2,
              segmentOffsetYPx: 12,
              barImage: '/images/projects/pdp-p1-flowers-danmaku-custom.png?v=4',
              pillGapPx: (4 * 750) / 260,
              mixedGapPx: (-8 * 750) / 260,
              groupGapPx: (-16 * 750) / 260,
              visibleCount: 2,
              fontSizePx: 24,
              pillLineHeightPx: 34,
              imageLineHeightPx: 30,
              textPaddingXPx: 16,
              textPaddingYPx: 3,
              bubbleIcon: '/images/projects/pdp-p1-scheme-danmaku-bubble.png',
              items: [
                '近期87人复购过',
                '36人点赞',
                {
                  segments: [
                    {
                      text: '曼塔玫瑰花语',
                      leftPx: 67,
                      topPx: 31.38,
                      widthPx: 144,
                      fontWeight: 500,
                      color: '#222426',
                    },
                    {
                      text: '初恋、温柔美好的回忆',
                      leftPx: 219,
                      topPx: 31.38,
                      widthPx: 240,
                      fontWeight: 400,
                      color: '#7A7DD2',
                    },
                  ],
                },
              ],
            },
          },
          {
            category: '数码',
            tag: '非食品类',
            before: {
              label: '改版前',
              src: '/images/projects/pdp-p1-digital-before.png',
              alt: '一期 · 数码类商详 · 改版前',
            },
            after: {
              label: '改版后',
              src: '/images/projects/pdp-p1-digital-after.png',
              alt: '一期 · 数码类商详 · 改版后',
            },
          },
        ],
      },
      phaseOneInsights: {
        badge: '依据',
        title: '一期改版依据',
        intro: '',
        dataSection: {
          title: '数据结论',
          headline: '体验升级，不影响核心购买决策',
          heroMetric: {
            label: '整体进店访购率',
            change: '-0.01pp',
            changeNote: '-0.03%',
            trend: 'neutral',
            fillPct: 50,
          },
          overall: {
            title: '整体核心指标',
            metrics: [
              {
                label: '商家至商详转化率',
                before: '—',
                after: '—',
                change: '+0.38pp',
                changeNote: '+0.99%',
                trend: 'up',
                priority: 1,
              },
              {
                label: '加购率',
                before: '55.21%',
                after: '55.13%',
                change: '-0.08pp',
                changeNote: '-0.14%',
                trend: 'neutral',
                priority: 2,
              },
            ],
            bullets: [
              '用户主动打开、浏览商详意愿增强。',
              '整体访购率、加购率微幅波动，无显著负向影响。',
            ],
          },
          categories: {
            title: '全品类效果汇总',
            summary:
              '改版对平台主力品类无负面影响；仅数码品类存在适配短板。',
            items: [
              {
                name: '超市便利',
                tag: '核心主力',
                trend: 'stable',
                highlight: '0pp',
                changeNote: '持平',
                desc: '访购率基本持平、加购率小幅正向上涨，核心营收品类表现稳定，改版落地安全性高。',
              },
              {
                name: '数码/鲜花',
                tag: '短板弱势',
                trend: 'down',
                highlight: '-1.41pp',
                changeNote: '-6.26%',
                desc: '访购率小幅微降、加购率明显下滑，新版通用模块无法适配重参数、重正品、重规格对比的决策特性。',
              },
              {
                name: '服饰鞋帽',
                tag: '正向增益',
                trend: 'up',
                highlight: '+3.45pp',
                changeNote: '+16.56%',
                desc: '加购率大幅提升，宠物、日用百货、美妆日化加购率稳步增长，适配轻决策、重体验场景。',
              },
            ],
            footnote: '非食品类订单基数偏低，品类波动不影响整体大盘。',
          },
        },
        interviewSection: {
          title: '用户痛点挖掘',
          sample: '62 份深度访谈',
          nativeLabel: '用户原生',
          extractLabel: '痛点挖掘结论',
          nativeQuotes: [
            { text: '不知道真实送到的什么样', avatar: '/images/projects/pdp-insight-avatars/avatar-1.jpg' },
            { text: '用户评价里贴的图有些就是网上下载的，不知道真实性', avatar: '/images/projects/pdp-insight-avatars/avatar-2.jpg' },
            { text: '页面跳转太多，体验很割裂', avatar: '/images/projects/pdp-insight-avatars/avatar-5.jpg' },
            { text: '搜索进店再进商详，中间环节多余', avatar: '/images/projects/pdp-insight-avatars/avatar-7.jpg' },
            { text: '商详信息更丰富', avatar: '/images/projects/pdp-insight-avatars/avatar-5.jpg' },
            { text: '提单页看到的价格跟商详页不一样', avatar: '/images/projects/pdp-insight-avatars/avatar-2.jpg' },
            { text: '买鲜花习惯性对比差不多花材价格', avatar: '/images/projects/pdp-insight-avatars/avatar-3.jpg' },
            { text: '榜单这些信息都是平台给的', avatar: '/images/projects/pdp-insight-avatars/avatar-4.jpg' },
            { text: '像鲜花、手机这种高客单价的商品，还是得多对比', avatar: '/images/projects/pdp-insight-avatars/avatar-8.jpg' },
          ],
          conclusions: [
            {
              title: '真实种草背书缺失，预期偏差大',
              desc: '商详缺少商家实拍与真实返图，用户无法判断实物品相，购买预期模糊。',
            },
            {
              title: '高客单路径冗余，流失严重',
              desc: '搜索 → 进店 → 商详固定路径中间环节多余，高意向用户极易中途流失。',
              singleLine: true,
            },
            {
              title: '优质内容无聚合，比价效率低下',
              desc: '横向比价缺少实拍与评价聚合，只能依赖修图与单薄参数，决策成本高。',
            },
          ],
          painPoints: [
            {
              pct: 74,
              title: '真实种草背书缺失，预期偏差大',
              desc: '鲜花、非标品类用户反馈商详仅展示精修主图，无商家实拍返图，素材同质化严重，无法判断实物品相与质感，购买预期模糊。',
              severity: 'critical',
            },
            {
              pct: 61,
              title: '优质内容无聚合，比价效率低下',
              desc: '多商品横向比价时缺少实拍返图与评价聚合，只能依赖官方修图和单薄参数，对比成本高、决策效率低。',
              severity: 'high',
            },
            {
              pct: 70,
              title: '页面跳转繁琐，交互体验割裂',
              desc: '传统页面跳转打断浏览节奏，进出成本高、体验不连贯，相比轻量化浮层模式沉浸式体验极差。',
              severity: 'high',
            },
            {
              pct: 0,
              title: '高客单路径冗余，流失严重',
              desc: '鲜花、数码用户反馈固定路径「搜索 → 进店 → 商详」中间进店环节多余，高意向用户极易中途流失，是制约转化的核心卡点。',
              severity: 'critical',
              badge: '核心迭代痛点',
            },
          ],
        },
        iterationSection: {
          title: '迭代方向',
          directions: [
            {
              title: '精简高客单决策链路',
              desc: '缩短搜索至商详路径，去除中间进店环节，降低鲜花、数码等高客单品类中途流失。',
            },
            {
              title: '非食品类场景定制化布局',
              desc: '针对数码重参数、鲜花重款式的决策特性，重构信息优先级，补齐通用模板适配不足。',
            },
            {
              title: '升级全域真实信任背书体系',
              desc: '以商家实拍、结构化评价与资质信息前置，建立真实种草背书，修正预期偏差。',
            },
          ],
        },
      },
      phaseTwo: {
        badge: '二期',
        title: '非食品类差异化设计方案',
        sections: [
          {
            index: '一',
            title: '精简高客单决策链路，去除进店中转损耗',
            goal: '解决鲜花、数码等高客单品类路径过长、跳转流失高的问题，缩短用户下单决策链路。',
            strategies: [],
            pathDemos: [
              {
                id: 'digital',
                name: '数码',
                search: {
                  src: '/images/projects/pdp-p2-path-search.png',
                  alt: '搜索结果页 · iPhone 17 Pro Max',
                },
                searchHotspot: { top: 0.268, left: 0.04, width: 0.9, height: 0.178 },
                pdp: {
                  src: '/images/projects/pdp-p2-path-pdp.png',
                  alt: '商详页 · iPhone 17 Pro Max',
                },
              },
              {
                id: 'flowers',
                name: '鲜花',
                search: {
                  src: '/images/projects/pdp-p2-flowers-path-search.png',
                  alt: '搜索结果页 · 玫瑰',
                },
                searchHotspot: { top: 0.372, left: 0.04, width: 0.9, height: 0.162 },
                flowersPdpDemo: p2FlowersScrollDemo,
              },
            ],
          },
          {
            index: '二',
            title: '非食品类场景定制化信息布局，补齐转化短板',
            goalLabel: '核心目标',
            strategyLabel: '优化策略',
            layout: 'split-rows',
            goal: '针对数码重参数对比、鲜花重款式送礼的决策特性，重构页面信息优先级，修复通用模板适配不足、核心信息下沉的问题。',
            splitRows: [
              {
                strategy: {
                  title: '全品类前置规格选择能力',
                  text: '将规格、款式选择模块置顶首屏，数码机型配色、鲜花款式缩略图横向平铺展示，支持一键切换，无需下滑、无需进店，满足用户快速对比选型的诉求。',
                  examples: [
                    {
                      label: '鲜花',
                      alt: '二期 · 鲜花 · 首屏款式缩略图',
                      flowersRecommendDemo: p2FlowersRecommendDemo,
                    },
                    {
                      label: '数码',
                      alt: '二期 · 数码 · 首屏配色缩略图',
                      digitalRecommendDemo: p2DigitalRecommendDemo,
                    },
                  ],
                },
                category: {
                  name: '鲜花',
                  comparison: {
                    before: {
                      label: 'Before',
                      src: '/images/projects/pdp-p2-flowers-final-before-v2.png?v=1',
                      alt: '二期 · 鲜花 · Before',
                    },
                    afterStatic: {
                      label: 'After',
                      src: '/images/projects/pdp-p2-flowers-after-v5.png?v=1',
                      alt: '二期 · 鲜花 · After',
                    },
                  },
                },
              },
              {
                strategy: {
                  title: '数码新增结构化核心参数卡片',
                  text: '在价格区下方增设极简横向参数模块，集中展示机型系列、屏幕、续航、配置等核心参数，解决原有参数分散、用户查阅成本高的痛点，提升配置对比效率。',
                },
                interactiveDemo: p2DigitalParamDemo,
              },
            ],
          },
          {
            index: '三',
            title: '升级全域真实信任背书体系，修正用户预期偏差',
            goalLabel: '核心目标',
            strategyLabel: '优化策略',
            layout: 'split-trust',
            goal: '解决高客单品类实物与预期不符、口碑信息零散、信任支撑不足的问题，搭建全方位真实种草信任体系。',
            strategies: [
              {
                title: '商家基础信息全域前置',
                text: '商详页集中透出商家评分、销量、配送方式、服务水平等核心资质信息，建立基础商家信任。',
              },
              {
                title: '鲜花专属实拍信任模块升级',
                text: '新增商家实拍返图专区，置顶发货前实拍确认服务承诺，搭配买家真实实拍轮播，叠加「花图不符包赔」服务标识，有效消解鲜花色差、品质不符的消费顾虑。',
              },
              {
                title: '评价体系效率优化',
                text: '上线评价快捷筛选标签，帮助用户快速精准获取有效口碑信息，提升决策参考效率，强化真实用户种草背书。',
              },
            ],
            trustCompare: {
              before: {
                label: 'Before',
                src: '/images/projects/pdp-p2-trust-before-v1.png?v=1',
                alt: '改版前 · 鲜花商详 · 信任背书',
              },
              after: p2TrustAfterStatic,
              interactiveDemo: p2TrustInteractiveDemo,
            },
          },
        ],
      },
    },
    resultsIntro:
      '基于一期基线复盘，二期商详改版在大盘转化与分品类访购率上给出可量化验证方向。',
    resultsSummary: '',
    pdpResultSections: [
      {
        index: '一',
        title: '大盘核心流量转化指标',
        subtitle: '对比一期基线',
        metrics: [
          {
            label: '整体进店访购率',
            text: '+0.05pp',
            trend: 'up',
          },
          {
            label: '商家至商详转化率',
            text: '+0.4pp',
            trend: 'up',
          },
          {
            label: '加购率',
            text: '+0.02pp',
            trend: 'up',
          },
        ],
      },
      {
        index: '二',
        title: '分品类进店访购率定量预期',
        subtitle: '一期基线 vs 二期目标',
        categoryCards: [
          {
            category: '超市便利',
            target: '+0.03pp',
            note: '无负向波动，基础盘稳定',
            tone: 'neutral',
          },
          {
            category: '数码家电',
            target: '+1.71pp，由负转正',
            note: '修复 1.71~2.01pp，由负转正',
            tone: 'positive',
          },
          {
            category: '鲜花',
            target: '+1.90pp，由负转正',
            note: '全新增量增长',
            tone: 'positive',
          },
        ],
      },
      {
        index: '三',
        title: '定性结论',
        qualitative: {
          headline:
            '精简高客单决策路径、分品类定制信息布局，并完善真实信任体系，整体体验与转化同步提升。',
          voices: [
            {
              avatar: '/images/projects/pdp-insight-avatars/avatar-1.jpg',
              text: '不用点进店铺再切商品，点一下直接看详情，操作省事多了',
            },
            {
              avatar: '/images/projects/pdp-insight-avatars/avatar-2.jpg',
              text: '价格、款式、规格全都在首页，不用来回滑动翻找，对比更方便',
            },
            {
              avatar: '/images/projects/pdp-insight-avatars/avatar-3.jpg',
              text: '手机参数直接摆在价格下面，不用滑到页面底部，对比机型一眼看清配置差别',
            },
            {
              avatar: '/images/projects/pdp-insight-avatars/avatar-4.jpg',
              text: '商家实拍图一目了然，不怕收到货色差太大',
            },
            {
              avatar: '/images/projects/pdp-insight-avatars/avatar-5.jpg',
              text: '评价可以直接筛想看的关键词，不用一条条翻评论找有用信息',
            },
          ],
        },
      },
    ],
    sections: [
      {
        label: '项目背景',
        slides: [],
        backgroundPanel: true,
      },
      {
        label: '设计策略',
        slides: [],
        strategyPanel: true,
      },
      {
        label: '方案设计',
        slides: [],
        pdpDesignPanel: true,
      },
      {
        label: '数据结果',
        panelIndex: '04',
        slides: [],
        metrics: true,
      },
    ],
  },
];
