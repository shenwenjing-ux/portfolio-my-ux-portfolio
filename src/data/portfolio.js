export const site = {
  name: '申文靖',
  role: '产品设计师',
  title: 'UX Design Portfolio',
  subtitle: '用户体验 · 交互 · 系统 · 2021–2026',
  description:
    '聚焦闪购业务场景，通过场景化引导、链路简化与信息降噪，推动体验优化与业务增长。',
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
    id: 'friend-help',
    index: '03',
    title: '拉新全链路优化与增长赋能',
    items: ['好友助力 · 客态用户链路重构优化'],
  },
];

function makeSlide(page, projectTitle, label) {
  return {
    src: `/images/pages/page-${String(page).padStart(2, '0')}.jpg`,
    alt: `${projectTitle} · ${label}`,
  };
}

function makeSlidesFromPages(pages, projectTitle, sectionLabel) {
  return pages.map((page) => makeSlide(page, projectTitle, sectionLabel));
}

export const projects = [
  {
    id: 'reverse-flow',
    title: '逆向链路体验优化',
    category: '闪购设计 · 逆向链路标杆化',
    cover: '/images/pages/page-03.jpg',
    summary:
      '围绕日均 34 万退款订单的售后瓶颈，构建场景化功能引导体系，简化链路与模块布局，作为「设计团队-逆向一致性」项目的标杆示例。',
    background:
      '闪购业务日均订单 GTV 达 479 万单，但日均退款订单量高达 34 万单，整体退款率约 7%。流程低效、体验不佳严重影响用户感知，成为制约业务高质量发展的关键问题。',
    resultsIntro:
      '本次优化聚焦闪购日均34万退款订单的核心痛点——退款率高、审批周期长，通过极速退款、订单修改等四大项目落地，实现体验与数据双提升。',
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
          '精准降噪、场景化呈现信息，提升信息传递效率',
          '差异化视觉样式表达，辅助用户快速获取信息',
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
        slides: makeSlidesFromPages([3, 4], '逆向链路体验优化', '项目分析'),
      },
      {
        label: '方案设计',
        slides: makeSlidesFromPages([5, 6, 7, 8, 9, 10], '逆向链路体验优化', '方案设计'),
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
    category: '闪购设计 · 拉新全链路优化',
    cover: '/images/pages/page-12.jpg',
    summary:
      '针对邀请有礼活动转化下滑问题，重构分享方式与信息架构，打造具有强「社交货币」属性的收益型分享体验。',
    background:
      '邀请有礼是闪购提升新客规模的裂变营销活动。增加商品&商家分享路径后，曝光到订单转化率下降 8.70pp，主态分享率下降 21.40pp，亟需明确后续优化方向。',
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
    sections: [
      {
        label: '项目背景',
        slides: makeSlidesFromPages([12, 13], '邀新活动商品迭代优化', '项目背景'),
      },
      {
        label: '方案设计',
        slides: makeSlidesFromPages([14, 15, 16, 17, 18, 19], '邀新活动商品迭代优化', '方案设计'),
      },
      {
        label: '数据结果',
        slides: [],
        metrics: true,
      },
    ],
  },
  {
    id: 'friend-help',
    title: '好友助力 · 客态用户链路重构优化',
    category: '闪购设计 · 拉新全链路优化',
    placeholder: true,
    cover: '',
    summary: '聚焦客态用户助力链路，重构交互流程与信息架构，提升活动参与转化。（案例内容筹备中，后续补充）',
    background: '',
    painPoints: [],
    strategies: [],
    metrics: [
      { value: 0, suffix: '', label: '核心指标', unit: '', placeholder: true },
      { value: 0, suffix: '', label: '待补充', unit: '', placeholder: true },
      { value: 0, suffix: '', label: '待补充', unit: '', placeholder: true },
    ],
    slides: [],
    sections: [],
  },
];
