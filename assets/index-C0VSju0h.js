(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const X={name:"申文靖",role:"产品设计师",subtitle:"用户体验 · 交互 · 系统 · 2021–2026",tags:["用户体验","交互设计","系统设计","闪购"],contact:{phone:"15801352103",email:"jane_design_bj@163.com"}},Pa=[{id:"reverse-flow",index:"01",title:"逆向链路标杆化建设与落地",items:["申请售后优化","修改订单信息","退货退款流程优化","订单详情页优化","逆向一致性"]},{id:"invite-activity",index:"02",title:"拉新全链路优化与增长赋能",items:["邀新活动商品迭代优化"]},{id:"pdp-redesign",index:"03",title:"商详体系化建设与体验优化",items:["商详改版优化"]}];function ka(e,t,a,s="jpg"){return{src:`/images/pages/page-${String(e).padStart(2,"0")}.${s}`,alt:`${t} · ${a}`}}function qt(e,t,a,s="jpg"){return e.map(i=>ka(i,t,a,s))}const Sa={mode:"scroll",layout:{designWidth:750,statusBarHeight:88,navTopRadius:24},chrome:{statusBar:"/images/projects/pdp-p2-chrome-status-bar.png",topNavDefault:"/images/projects/pdp-p2-chrome-top-nav-default.png?v=6",topNavPinned:"/images/projects/pdp-p2-chrome-top-nav-pinned.png",bottomBar:"/images/projects/pdp-p2-chrome-bottom-bar.png"},page:"/images/projects/pdp-p2-flowers-scroll-page.png?v=2",page2x:"/images/projects/pdp-p2-flowers-scroll-page@2x.png?v=2",page3x:"/images/projects/pdp-p2-flowers-scroll-page@3x.png?v=2",tabs:[{label:"商品",yRatio:0},{label:"评价",yRatio:.2},{label:"返图",yRatio:.25},{label:"详情",yRatio:.29}],tabsInset:{left:.16,right:.28},tabStyle:{fontSize:11,lineHeight:13,underlineHeight:2,underlineGap:3}},Ha={page:"/images/projects/pdp-p2-flowers-rec-base.png?v=3",pageSize:{w:598,h:1024},chrome:{statusBar:"/images/projects/pdp-p2-chrome-status-bar.png",topNavDefault:"/images/projects/pdp-p2-chrome-top-nav-default.png?v=6"},mediaTabs:"/images/projects/pdp-p2-flowers-rec-media-tabs.png?v=2",tabs:[{id:"images",label:"图片"},{id:"style",label:"款式1/3"},{id:"reviews",label:"评价"}],tabAssets:{specTag:"/images/projects/pdp-p2-flowers-rec-spec-tag.png",reviewsPanel:"/images/projects/pdp-p2-flowers-rec-reviews-panel.png"},mainThumb:"/images/projects/pdp-p2-flowers-rec-main-thumb.png?v=2",mainHero:"/images/projects/pdp-p2-flowers-rec-hero-main.png?v=2",recLabel:"/images/projects/pdp-p2-flowers-rec-label.png?v=3",layout:{designWidth:750,designHeight:1024,statusBarEnd:53,navStart:70,navEnd:158,heroTop:70,heroTopOffsetPx:-24,trackActiveShiftPx:12,trackActiveShiftId:"v5",sectionFadeTopPx:718,sectionFadeHeightPx:120,whitePanelWidthInsetPx:12,whitePanelTopRadiusPx:18,whitePanelHeightPx:70,whitePanelGapFromTabsBottomPx:16,heroBottomPx:838,priceTop:647,tabsTopPx:786,tabsBottomGapPx:8,trackTopPx:838,trackLeftPx:6,recommendTop:567,tabsLeft:103,tabsWidth:391,tabHeight:52,tabsGap:52,thumbSize:100,thumbRadius:18,padLeft:26,padRight:24,gapMainLabel:22,gapLabelList:20,gapItem:12,labelWidth:36,specTagGapPx:24,specTagWidthPx:76,specTagHeightPx:40,specTagRadiusPx:20,reviewsPanelWidthPx:738,reviewsPanelAspectW:1021,reviewsPanelAspectH:1024,tabBarRadiusPx:26,tabPillTopPx:4,tabPillHeightPx:44,tabPillRadiusPx:28,tabFontSizePx:24,tabLineHeightPx:40,tabBlurPx:16.32,demoStyleHoldMs:1600,reviewsPanelOffsetYPx:-48},variants:[{id:"v1",label:"款式1",hero:"/images/projects/pdp-p2-flowers-rec-hero-01.png?v=2"},{id:"v2",label:"款式2",hero:"/images/projects/pdp-p2-flowers-rec-hero-02.png?v=2"},{id:"v3",label:"款式3",hero:"/images/projects/pdp-p2-flowers-rec-hero-03.png?v=2"},{id:"v4",label:"款式4",hero:"/images/projects/pdp-p2-flowers-rec-hero-04.png?v=3"},{id:"v5",label:"款式5",hero:"/images/projects/pdp-p2-flowers-rec-hero-05.png?v=3"}],styleSpecLabels:{1:"11枝",2:"6枝",3:"5枝"}},Ta={page:"/images/projects/pdp-p2-digital-rec-base.png?v=3",pageSize:{w:598,h:1024},chrome:{statusBar:"/images/projects/pdp-p2-chrome-status-bar.png",topNavDefault:"/images/projects/pdp-p2-chrome-top-nav-default.png?v=6"},tabs:[{id:"images",label:"图片"},{id:"style",label:"配色1/3",styleLabelMain:"配色",styleLabelSub:"1/3"},{id:"reviews",label:"评价"}],tabAssets:{specTag:"/images/projects/pdp-p2-digital-rec-spec-tag.png?v=5",reviewsPanel:"/images/projects/pdp-p2-digital-rec-reviews-panel.png?v=3"},mainThumb:"/images/projects/pdp-p2-digital-rec-main-thumb.png?v=1",mainHero:"/images/projects/pdp-p2-digital-rec-hero-main.png?v=2",layout:{designWidth:750,designHeight:1024,statusBarEnd:53,navStart:70,navEnd:158,heroTop:70,heroTopOffsetPx:-24,trackActiveShiftPx:0,trackActiveShiftId:"v2",sectionFadeTopPx:718,sectionFadeHeightPx:120,whitePanelWidthInsetPx:12,whitePanelTopRadiusPx:18,whitePanelHeightPx:70,whitePanelGapFromTabsBottomPx:16,whitePanelFullWidth:!0,whitePanelExtendToBottom:!1,whitePanelExtendOnReviewsOnly:!0,whitePanelBottomRadiusPx:16,heroBottomPx:838,priceTop:647,tabsTopPx:786,tabsBottomGapPx:8,trackTopPx:838,trackLeftPx:6,recommendTop:567,tabsLeft:103,tabsWidth:391,tabHeight:52,tabsGap:52,thumbSize:100,thumbRadius:18,padLeft:26,padRight:24,gapMainLabel:12,gapLabelList:20,gapItem:12,labelWidth:36,specTagGapPx:24,specTagWidthPx:76,specTagHeightPx:40,specTagRadiusPx:20,reviewsPanelWidthPx:738,reviewsPanelAspectW:820,reviewsPanelAspectH:1024,tabBarRadiusPx:26,tabPillTopPx:4,tabPillHeightPx:44,tabPillRadiusPx:28,tabFontSizePx:24,tabLineHeightPx:40,tabBlurPx:16.32,demoStyleHoldMs:1600,reviewsPanelOffsetYPx:-48,reviewsClipTopOnly:!0},variants:[{id:"v1",label:"橙色",hero:"/images/projects/pdp-p2-digital-rec-hero-01.png?v=1",thumb:"/images/projects/pdp-p2-digital-rec-thumb-01.png?v=1"},{id:"v2",label:"蓝色",hero:"/images/projects/pdp-p2-digital-rec-hero-02.png?v=2",thumb:"/images/projects/pdp-p2-digital-rec-thumb-02.png?v=1"}],styleSpecLabels:{1:"银色",2:"星宇橙色",3:"深蓝色"}},La={label:"商详页 · 参数浮层",hint:"悬停自动播放",page:"/images/projects/pdp-p2-digital-param-page.png?v=3",sheet:"/images/projects/pdp-p2-digital-param-sheet.png?v=9",hotspot:{top:"447px",left:"179px",width:.24,height:.065}},Ra={label:"After",src:"/images/projects/pdp-p2-trust-after-v5.png",alt:"改版后 · 鲜花商详 · 信任背书模块"},Ea={label:"鲜花商详 · 信任背书交互",hint:"悬停自动播放",src:"/demos/pdp-p2-trust/index.html?v=12"},lt=[{id:"reverse-flow",title:"逆向链路体验优化",navLabel:"逆向优化",category:"闪购设计 · 逆向链路标杆化",cover:"/images/pages/page-03.jpg",heroShowcase:[{src:"/images/projects/reverse-flow-a.jpg",alt:"逆向链路体验优化 · 等待支付"},{src:"/images/projects/reverse-flow-b.jpg",alt:"逆向链路体验优化 · 申请退货退款"},{src:"/images/projects/reverse-flow-c.jpg",alt:"逆向链路体验优化 · 商家处理中"},{src:"/images/projects/reverse-flow-d.jpg",alt:"逆向链路体验优化 · 退款成功"}],summary:"围绕日均 34 万退款订单的售后瓶颈，构建场景化功能引导体系，简化链路与模块布局，作为「设计团队-逆向一致性」项目的标杆示例。",background:"当前闪购业务已形成规模化发展态势，日均订单 GTV 达 479 万单，但业务增长背后存在显著售后瓶颈：日均退款订单量高达 34 万单，整体退款率约 7%。庞大的售后退款体量不仅直接侵蚀业务核心收益，更因流程低效、体验不佳严重影响用户感知，成为制约闪购业务高质量发展的关键问题，亟需通过系统性体验优化破解售后困境。",analysisCategories:[{index:"01",badge:"闪购售后体验差",titleParts:["功能缺","路径繁","信息难","无共情"],items:["功能缺失导致用户无从下手","操作路径繁琐降低用户售后效率","信息获取困难导致用户理解成本高","缺乏情感化表达"]},{index:"02",badge:"数据现状",titleParts:["审批效率低","拒绝场景差异显著"],items:["用户主动发起的退款订单占比高达 95%，其中 66% 的订单需经过商家审批环节，而商家平均审批时长长达 82 分钟","相比配送前，配送中、收货后拒绝率分别高达 36.49%、24.15%","被拒绝订单需平台介入处理，平均介入时长约 6 分钟"]},{index:"03",badge:"竞品设计亮点",titleParts:["场景化","简路径","清信息","情感化"],items:["场景化平台引导功能，满足不同场景下的用户诉求","剔除冗余步骤，布局符合用户操作行为","信息简洁易懂、主次分明，用户可快速做出下一步行动","采用「用户语言」，与用户共情、传递业务价值"]}],analysisMetrics:[{label:"万服降低",trend:"down"},{label:"订单完成率提升",trend:"up"},{label:"用户满意度提升",trend:"up"}],resultsIntro:"本次优化围绕用户主动退款占比高、商家审批周期长、退款拒绝率高、平台介入成本高等核心痛点，通过极速退、修改订单信息、售后申请链路、售后详情页四大项目落地，实现体验与数据双改善。",resultsSummary:'闪购逆向链路作为本次"设计团队-逆向一致性"项目的标杆示例，其优化思路与落地成效已形成可复用经验，后续将推动其他业务线向闪购逆向链路的设计标准看齐，实现全业务逆向链路的规范化、一致性优化。',painPoints:[{title:"功能缺路径繁",desc:"功能缺失导致用户无从下手，操作路径繁琐降低售后效率"},{title:"信息难无共情",desc:"信息获取困难导致理解成本高，缺乏情感化表达"},{title:"审批效率低",desc:"66% 订单需商家审批，平均审批时长长达 82 分钟"},{title:"拒绝场景差异显著",desc:"配送中、收货后拒绝率分别高达 36.49%、24.15%"}],strategies:[{title:"构建场景化功能引导体系",items:["补齐并强化相应功能，提升用户自主操作性","完善订单修改页模块，提升用户操作效率","在不同售后节点结合用户痛点，增加平台主动引导功能"]},{title:"简化链路与模块布局",items:["精简极速退款链路，提升操作效率","优化退款链路及信息布局，通过精准降噪、场景化呈现信息，提升信息传递效率与用户体验","信息精简+可视化表达，提升用户信息获取效率"]}],metrics:[{value:2.73,suffix:"",label:"万服下降",unit:"",trend:"down"},{value:1.71,suffix:"%",label:"订单完成率提升",unit:"",trend:"up"},{value:5.16,suffix:"%",label:"用户满意度提升",unit:"",trend:"up"},{value:4,suffix:"%",label:"页面停留时长",unit:"",trend:"up"}],sections:[{label:"项目分析",slides:[],analysis:!0},{label:"方案设计",designLayout:"grouped",hideDesignHeaders:!0,stickyStrategies:!0,stickyStrategySplit:3,slides:qt([5,6,7,8,9,10],"逆向链路体验优化","方案设计"),designHeaders:[{subtitle:"构建场景化功能引导体系",strategies:[{label:"策略1",text:"补齐并强化相应功能，提升用户自主操作性"}],maskHeader:!1},{subtitle:"构建场景化功能引导体系",strategies:[{label:"策略2",text:"完善订单信息修改页模块，提升用户操作效率"}],maskHeader:!1},{subtitle:"构建场景化功能引导体系",strategies:[{label:"策略3",text:"在不同售后节点结合用户痛点，增加平台主动引导功能"}],maskHeader:!1},{subtitle:"简化链路与模块布局，提升满意度",strategies:[{label:"策略1",text:"精简极速退款链路，提升操作效率"}],maskHeader:!1},{subtitle:"简化链路与模块布局，提升满意度",strategies:[{label:"策略2",text:"优化退款链路及信息布局，通过精准降噪、场景化呈现信息，提升信息传递效率与用户体验"}],maskHeader:!1},{subtitle:"简化链路与模块布局，提升满意度",strategies:[{label:"策略3",text:"信息精简+可视化表达，提升用户信息获取效率"}],maskHeader:!1}]},{label:"数据结果",slides:[],metrics:!0}]},{id:"invite-activity",title:"邀新活动商品迭代优化",navLabel:"邀新活动",category:"闪购设计 · 拉新全链路优化",cover:"/images/pages/page-12.jpg",heroShowcase:[{src:"/images/projects/invite-share-products.png",alt:"邀新活动商品迭代优化 · 分享商品"},{src:"/images/projects/invite-share-promo.png",alt:"邀新活动商品迭代优化 · 邀新活动页"}],heroTags:["分享路径重构","收益型体验","社交货币属性"],summary:"针对邀请有礼活动转化下滑问题，重构分享方式与信息架构，打造具有强「社交货币」属性的收益型分享体验。",background:"闪购邀请有礼活动聚焦新客规模，2023 年邀请有礼活动新客来源占比 19.89%，2024 年 1–10 月期间邀请用户中新客数占闪购新客大盘 5.6%，12 月期间仅占 4.1%，持续走低。2024 年初增加商品&商家分享路径后，曝光转交易转化率下降 8.70pp，主态点击分享率下降 21.40pp，表明用户在专业分享与日常分享两类角色下，对活动规则、信息呈现与操作路径存在明显理解与使用障碍，项目目标为通过体验优化提升活动「社交货币」属性与分享转化。",backgroundPanel:{index:"01",title:"项目背景",goals:[{title:"业务目标",text:"将邀请有礼打造成具有强「社交货币」属性的活动，扩大专业用户量，提升新客和交易订单量"},{title:"体验目标",text:"为邀请有礼头部专业用户，提供丰富多样、便宜实惠的「分享货币」，让用户清晰认知活动规则、愿意参与分享，同时觉得闪购邀请有礼活动是一个好用的赚钱工具"}],strategyLabel:"体验设计策略制定",strategySteps:[{index:"01",title:"数据分析",items:["增加商品&商家分享后，曝光转交易订单下降 8.7%","主态点击分享率降低 21.4%","商详页进入邀请页 CTR 降低 7.61PP"]},{index:"02",title:"用户访谈",items:["活动规则不清晰，页面信息复杂，用户不知道能赚多少钱","信息展示/操作入口不符合用户习惯，页面字太小不易查找"]},{index:"03",title:"专家走查",items:["信息多、信息碎，信息获取效率低","信息传递缺乏差异化","入口引导弱"]}],principles:[{title:"活动玩法更简单",items:["降低阅读成本：一屏只展示一个活动/任务","降低理解成本：让用户知道活动是干什么的","简化操作成本：明确哪个按钮能点、该点哪个"]},{title:"决策起来更容易",items:["赚的钱更大程度差异化","差异化不大时尽量做到差异化"]}],keyStrategies:["简化页面布局","优化信息构成","提升选择效率"]},painPoints:[{title:"活动规则不清晰",desc:"页面信息复杂，用户不知道能赚多少钱"},{title:"信息展示不符合习惯",desc:"找不到活动入口，页面字太小不易查找"},{title:"信息多且碎",desc:"信息获取效率低，降低了用户操作效率"},{title:"入口引导弱",desc:"61.97% 点击分享按钮的用户没有后续转化"}],strategies:[{title:"简化页面布局",items:["活动玩法更简单，一屏只展示一个活动/任务","降低理解成本，让用户知道活动是干什么的","简化操作成本，明确哪个按钮能点"]},{title:"优化信息构成",items:["赚的钱更大程度差异化","差异化不大时尽量做到差异化","提升选择效率"]}],metrics:[{value:13.09,suffix:"%",label:"曝光转交易订单率",unit:""},{value:22.23,suffix:"%",label:"红包分享点击率",unit:""},{value:8.24,suffix:"%",label:"曝光转闪购新率",unit:""},{value:2.45,suffix:"%",label:"商品分享率",unit:""},{value:1282,suffix:"",label:"每日新增客数",unit:"人"},{value:1.14,suffix:"%",label:"商家分享率",unit:""},{value:7069,suffix:"",label:"每日订单增量",unit:"单"}],resultsIntro:"聚焦分享方式重构与信息架构优化，通过全局规则简化与局部模块轻量化，提升活动理解效率与分享转化表现。",resultsSummary:"整体业务结论：分模块改版后，曝光转交易、分享点击与订单增量等核心指标均达成预期，验证收益型分享体验策略有效。",metricGroups:[{title:"整体业务结论",columns:4,metrics:[{value:13.09,suffix:"%",label:"曝光转交易订单率",unit:""},{value:8.24,suffix:"%",label:"曝光转闪购新率",unit:""},{value:1282,suffix:"",label:"每日新增客数",unit:"人"},{value:7069,suffix:"",label:"每日订单增量",unit:"单"}]},{title:"分模块改版效果",columns:3,metrics:[{value:22.23,suffix:"%",label:"红包分享点击率",unit:""},{value:2.45,suffix:"%",label:"商品分享率",unit:""},{value:1.14,suffix:"%",label:"商家分享率",unit:""}]}],sections:[{label:"项目背景",slides:[],backgroundPanel:!0},{label:"方案设计",panelIndex:"02",designLayout:"grouped",designSectionTitle:"方案设计与效果评估",stickyStrategies:!0,stickyMode:"invite-title",slides:qt([14,15,16,17,18,19],"邀新活动商品迭代优化","方案设计","png"),designHeaders:[{subtitle:"",strategies:[],maskHeader:!1},{subtitle:"【全局】聚焦分享方式重构，简化活动规则，降低用户理解成本",strategies:[],maskHeader:!1},{subtitle:"【全局】聚焦分享方式重构，简化活动规则，降低用户理解成本",strategies:[],maskHeader:!1},{subtitle:"【全局】聚焦分享方式重构，简化活动规则，降低用户理解成本",strategies:[],maskHeader:!1},{subtitle:"【局部】轻量化信息+精细化筛选，打造高转化的收益型商品分享体验",strategies:[],maskHeader:!1},{subtitle:"【局部】轻量化信息+精细化筛选，打造高转化的收益型商品分享体验",strategies:[],maskHeader:!1}]},{label:"数据结果",panelIndex:"03",slides:[],metrics:!0}]},{id:"pdp-redesign",title:"商详改版优化",navLabel:"商详改版",category:"闪购设计 · 交易链路优化",cover:"/images/projects/pdp-redesign-reference.png",heroShowcase:[{src:"/images/projects/pdp-flowers.png",alt:"商详改版优化 · 鲜花类商详设计稿"},{src:"/images/projects/pdp-milk.png",alt:"商详改版优化 · 食品类商详设计稿"}],heroTags:["全品类通用","品类差异化","转化基线提升"],summary:"从「一套模板打全品类」升级为「全品类通用 + 品类差异化」两期策略，一期建立统一基线，二期聚焦非食品类（鲜花、数码）专项优化。",background:"闪购商详是用户下单决策的核心页面，承载全品类商品交易转化。原有商详采用统一模板，信息层级与模块优先级难以兼顾食品与非食等不同品类的购买心智，导致关键决策信息传递效率不足、转化表现存在品类间差异。",backgroundPanel:{layout:"pdp-goals",index:"01",title:"项目背景",goals:[{title:"业务目标",text:"提升商详转化率与加购效率，支撑全品类 GMV 增长，验证「统一规范 + 品类差异化」的可扩展商详体系"},{title:"体验目标",text:"优化信息层级与视觉表达，让用户更快获取价格、卖点与行动决策信息，降低跨品类浏览时的理解成本"}]},strategyPhases:[{phase:"一期",title:"全品类通用",subtitle:"以全品类为基准，建立统一信息架构与视觉规范，拉升整体转化基线",items:["统一全品类核心模块：主图、价格促销、卖点摘要、规格选择与加购行动区","优化全品类通用的价格与促销信息层级，强化决策关键路径","规范加购/立即购买行动区，覆盖食品、日用等全部品类"],categoryNotes:{label:"覆盖品类",chips:["全品类"]}},{phase:"二期",title:"非食品类差异化",subtitle:"以非食为主，按品类购物心智定制模块布局与信息优先级",items:["缩短选购路径，满足用户对比诉求","丰富决策信息，提升用户选购效率"],categoryNotes:{label:"覆盖品类",chips:["鲜花","数码"]}}],designPanel:{index:"03",title:"方案设计",overview:{title:"方案概述",lead:"闪购商详改版分两期推进：一期建立全品类统一规范，二期针对非食品类做差异化优化。",blocks:[{id:"purpose",title:"商详：下单决策核心页",text:"闪购商详承载用户从「认识商品」到「完成加购」的完整决策链路。页面需在一屏内高效回答：这是什么、多少钱、划不划算、多久送到，并给出明确的购买行动入口。"},{id:"changes",title:"两期递进式改版",items:["一期 · 全品类：统一信息架构与视觉规范，重构页面三层信息层级，强化首屏转化信息","二期 · 非食品：针对鲜花、数码等品类，定制模块布局与信息优先级，满足对比选购心智"]},{id:"why",title:"突破「一套模板打全品类」瓶颈",items:["原模板信息层级扁平，价格、配送等关键转化信息首屏可见性不足","全品类共用同一优先级，难以兼顾食品即时购与非食品对比选购的差异心智","促销与价格表达分散，用户难以快速建立「值不值、快不快」的判断"]}]},phaseOne:{badge:"一期",title:"统一信息架构与视觉规范",beforeProblems:{title:"改版前存在的体验问题",panels:{default:{underSectionIndex:2,sections:[{title:"价格信息混乱，多标价冲突",subtitle:"用户看不懂真实底价",points:["多层价格标签无清晰优先级","优惠券与标价割裂，无法直观看到用券后实付金额"]},{title:"行动按钮动线不连续",subtitle:"购买操作分散、位置不固定",points:["购买按钮穿插在页面中展示","领券与加购分散在不同区块，需反复上下滑动"]},{title:"信息获取效率低",subtitle:"首屏难以完成决策",points:["属性信息与商品标题重复度高","关键决策信息位置靠下"]}]},milk:{eyebrow:"普通商品 · 食品类",title:"普通商品体验问题",points:[{title:"信息冗余",detail:"属性和标题信息重复，降低首屏屏效，用户难以快速抓住关键信息。"},{title:"有效信息获取效率低",detail:"配料表、营养信息、评价等决策信息下沉靠后，需多次滑动才能对比完成购买判断。"}]},flowers:{eyebrow:"非食商品 · 鲜花类",title:"非食商品体验问题",points:[{title:"有效信息获取效率低",detail:"用户评价信息靠下，用户需要滑动页面后才能判断决策，决策流程长。"},{title:"商品置信度低",detail:"缺少商家实拍与真实返图聚合，用户难以判断实物品相，购买预期与实际体验易偏差。"}]}},shots:[{id:"milk",label:"普通商品",src:"/images/projects/pdp-p1-problems-milk-before.png",alt:"改版前 · 牛奶类商详体验问题示例"},{id:"flowers",label:"非食商品",src:"/images/projects/pdp-p1-problems-flowers-before.png",alt:"改版前 · 鲜花类商详体验问题示例"}]},framework:{title:"页面结构优化",subtitle:"重新梳理并优化页面布局，提升用户信息获取效率、兼顾用户决策成本，从而提升页面转化率",schemeWireframe:{label:"页面框架",src:"/images/projects/pdp-p1-framework-after.png",alt:"改版后 · 页面框架灰图（商品价格 / 优惠信息 / 商品标题 / 推荐理由&售卖信息）"},parts:[{id:"first-screen",layout:"hero-list",strategyBadge:"策略一",strategyTitle:"即时转化 —— 缩短下单操作链路，强化快速成交",hero:{src:"/images/projects/pdp-p1-first-screen-after.png",alt:"改版后 · 牛奶类商详首屏方案"},strategies:[{title:"价格优惠相近布局",text:"价格与优惠信息相近排列，提升获取效率。"},{title:"去除冗余信息",text:"首屏高效获取商品基础信息。"},{title:"底部固定行动栏",text:"非食双按钮、普通单按钮差异化，转化按钮固定可视。",media:{type:"duo-after",shots:[{label:"改版后-普通",src:"/images/projects/pdp-p1-cta-after-normal.png",alt:"改版后 · 普通商品 · 底部固定行动栏单按钮"},{label:"改版后-非食",src:"/images/projects/pdp-p1-cta-after-nonfood.png",alt:"改版后 · 非食商品 · 底部固定行动栏双按钮"}]}},{title:"置信度与服务保障",text:"弱化售卖信息，新增置信度与服务保障标签。"}]},{id:"trust-hero",layout:"stagger-list",strategyBadge:"策略二",strategyTitle:"打消疑虑 —— 前置信任类操作入口，提前化解用户购买顾虑",visual:{heroDanmaku:{src:"/images/projects/pdp-p1-trust-hero-danmaku.png?v=2",alt:"改版后 · 主图 UGC 弹幕示例"},nutrition:{label:"营养表",src:"/images/projects/pdp-p1-trust-nutrition.png",alt:"改版后 · 营养表前置主图示例",placeholder:!0},review:{src:"/images/projects/pdp-p1-conversion-review.png",alt:"改版后 · 用户评价前置主图示例"}},strategies:[{title:"主图前置信任信息",text:"营养表、用户评价前置主图，一键查看佐证。"},{title:"UGC 弹幕与花语",text:"新增 UGC 弹幕与花语，丰富商品了解。"}]}]},schemesTitle:"三类品类改版方案",schemes:[{category:"牛奶",tag:"食品类",before:{label:"改版前",src:"/images/projects/pdp-p1-milk-before.png?v=2",alt:"一期 · 牛奶类商详 · 改版前"},after:{label:"改版后",src:"/images/projects/pdp-p1-milk-after.png?v=2",alt:"一期 · 牛奶类商详 · 改版后"},danmaku:{designWidth:750,designHeight:1024,topPx:160,leftPx:24,maxWidthPx:204,pillItemHeightPx:40,pillGapPx:4*750/260,visibleCount:2,fontSizePx:24,pillLineHeightPx:34,textPaddingXPx:16,textPaddingYPx:3,bubbleIcon:"/images/projects/pdp-p1-scheme-danmaku-bubble.png",items:["近期87人复购过","36人点赞"]}},{category:"鲜花",tag:"非食品类",before:{label:"改版前",src:"/images/projects/pdp-p1-flowers-before.png",alt:"一期 · 鲜花类商详 · 改版前"},after:{label:"改版后",src:"/images/projects/pdp-p1-flowers-after.png?v=2",alt:"一期 · 鲜花类商详 · 改版后"},danmaku:{designWidth:750,designHeight:1024,topPx:160,leftPx:24,maxWidthPx:204,pillItemHeightPx:40,assetWidthPx:1027,assetHeightPx:285,assetScale:2,segmentOffsetYPx:12,barImage:"/images/projects/pdp-p1-flowers-danmaku-custom.png?v=4",pillGapPx:4*750/260,mixedGapPx:-8*750/260,groupGapPx:-16*750/260,visibleCount:2,fontSizePx:24,pillLineHeightPx:34,imageLineHeightPx:30,textPaddingXPx:16,textPaddingYPx:3,bubbleIcon:"/images/projects/pdp-p1-scheme-danmaku-bubble.png",items:["近期87人复购过","36人点赞",{segments:[{text:"曼塔玫瑰花语",leftPx:67,topPx:31.38,widthPx:144,fontWeight:500,color:"#222426"},{text:"初恋、温柔美好的回忆",leftPx:219,topPx:31.38,widthPx:240,fontWeight:400,color:"#7A7DD2"}]}]}},{category:"数码",tag:"非食品类",before:{label:"改版前",src:"/images/projects/pdp-p1-digital-before.png",alt:"一期 · 数码类商详 · 改版前"},after:{label:"改版后",src:"/images/projects/pdp-p1-digital-after.png",alt:"一期 · 数码类商详 · 改版后"}}]},phaseOneInsights:{badge:"依据",title:"一期改版依据",intro:"",dataSection:{title:"数据结论",headline:"体验升级，不影响核心购买决策",heroMetric:{label:"整体进店访购率",change:"-0.01pp",changeNote:"-0.03%",trend:"neutral",fillPct:50},overall:{title:"整体核心指标",metrics:[{label:"商家至商详转化率",before:"—",after:"—",change:"+0.38pp",changeNote:"+0.99%",trend:"up",priority:1},{label:"加购率",before:"55.21%",after:"55.13%",change:"-0.08pp",changeNote:"-0.14%",trend:"neutral",priority:2}],bullets:["用户主动打开、浏览商详意愿增强。","整体访购率、加购率微幅波动，无显著负向影响。"]},categories:{title:"全品类效果汇总",summary:"改版对平台主力品类无负面影响；仅数码品类存在适配短板。",items:[{name:"超市便利",tag:"核心主力",trend:"stable",highlight:"0pp",changeNote:"持平",desc:"访购率基本持平、加购率小幅正向上涨，核心营收品类表现稳定，改版落地安全性高。"},{name:"数码/鲜花",tag:"短板弱势",trend:"down",highlight:"-1.41pp",changeNote:"-6.26%",desc:"访购率小幅微降、加购率明显下滑，新版通用模块无法适配重参数、重正品、重规格对比的决策特性。"},{name:"服饰鞋帽",tag:"正向增益",trend:"up",highlight:"+3.45pp",changeNote:"+16.56%",desc:"加购率大幅提升，宠物、日用百货、美妆日化加购率稳步增长，适配轻决策、重体验场景。"}],footnote:"非食品类订单基数偏低，品类波动不影响整体大盘。"}},interviewSection:{title:"用户痛点挖掘",sample:"62 份深度访谈",nativeLabel:"用户原生",extractLabel:"痛点挖掘结论",nativeQuotes:[{text:"不知道真实送到的什么样",avatar:"/images/projects/pdp-insight-avatars/avatar-1.jpg"},{text:"用户评价里贴的图有些就是网上下载的，不知道真实性",avatar:"/images/projects/pdp-insight-avatars/avatar-2.jpg"},{text:"页面跳转太多，体验很割裂",avatar:"/images/projects/pdp-insight-avatars/avatar-5.jpg"},{text:"搜索进店再进商详，中间环节多余",avatar:"/images/projects/pdp-insight-avatars/avatar-7.jpg"},{text:"商详信息更丰富",avatar:"/images/projects/pdp-insight-avatars/avatar-5.jpg"},{text:"提单页看到的价格跟商详页不一样",avatar:"/images/projects/pdp-insight-avatars/avatar-2.jpg"},{text:"买鲜花习惯性对比差不多花材价格",avatar:"/images/projects/pdp-insight-avatars/avatar-3.jpg"},{text:"榜单这些信息都是平台给的",avatar:"/images/projects/pdp-insight-avatars/avatar-4.jpg"},{text:"像鲜花、手机这种高客单价的商品，还是得多对比",avatar:"/images/projects/pdp-insight-avatars/avatar-8.jpg"}],conclusions:[{title:"真实种草背书缺失，预期偏差大",desc:"商详缺少商家实拍与真实返图，用户无法判断实物品相，购买预期模糊。"},{title:"高客单路径冗余，流失严重",desc:"搜索 → 进店 → 商详固定路径中间环节多余，高意向用户极易中途流失。",singleLine:!0},{title:"优质内容无聚合，比价效率低下",desc:"横向比价缺少实拍与评价聚合，只能依赖修图与单薄参数，决策成本高。"}],painPoints:[{pct:74,title:"真实种草背书缺失，预期偏差大",desc:"鲜花、非标品类用户反馈商详仅展示精修主图，无商家实拍返图，素材同质化严重，无法判断实物品相与质感，购买预期模糊。",severity:"critical"},{pct:61,title:"优质内容无聚合，比价效率低下",desc:"多商品横向比价时缺少实拍返图与评价聚合，只能依赖官方修图和单薄参数，对比成本高、决策效率低。",severity:"high"},{pct:70,title:"页面跳转繁琐，交互体验割裂",desc:"传统页面跳转打断浏览节奏，进出成本高、体验不连贯，相比轻量化浮层模式沉浸式体验极差。",severity:"high"},{pct:0,title:"高客单路径冗余，流失严重",desc:"鲜花、数码用户反馈固定路径「搜索 → 进店 → 商详」中间进店环节多余，高意向用户极易中途流失，是制约转化的核心卡点。",severity:"critical",badge:"核心迭代痛点"}]},iterationSection:{title:"迭代方向",directions:[{title:"精简高客单决策链路",desc:"缩短搜索至商详路径，去除中间进店环节，降低鲜花、数码等高客单品类中途流失。"},{title:"非食品类场景定制化布局",desc:"针对数码重参数、鲜花重款式的决策特性，重构信息优先级，补齐通用模板适配不足。"},{title:"升级全域真实信任背书体系",desc:"以商家实拍、结构化评价与资质信息前置，建立真实种草背书，修正预期偏差。"}]}},phaseTwo:{badge:"二期",title:"非食品类差异化设计方案",sections:[{index:"一",title:"精简高客单决策链路，去除进店中转损耗",goal:"解决鲜花、数码等高客单品类路径过长、跳转流失高的问题，缩短用户下单决策链路。",strategies:[],pathDemos:[{id:"digital",name:"数码",search:{src:"/images/projects/pdp-p2-path-search.png",alt:"搜索结果页 · iPhone 17 Pro Max"},searchHotspot:{top:.268,left:.04,width:.9,height:.178},pdp:{src:"/images/projects/pdp-p2-path-pdp.png",alt:"商详页 · iPhone 17 Pro Max"}},{id:"flowers",name:"鲜花",search:{src:"/images/projects/pdp-p2-flowers-path-search.png",alt:"搜索结果页 · 玫瑰"},searchHotspot:{top:.372,left:.04,width:.9,height:.162},flowersPdpDemo:Sa}]},{index:"二",title:"非食品类场景定制化信息布局，补齐转化短板",goalLabel:"核心目标",strategyLabel:"优化策略",layout:"split-rows",goal:"针对数码重参数对比、鲜花重款式送礼的决策特性，重构页面信息优先级，修复通用模板适配不足、核心信息下沉的问题。",splitRows:[{strategy:{title:"全品类前置规格选择能力",text:"将规格、款式选择模块置顶首屏，数码机型配色、鲜花款式缩略图横向平铺展示，支持一键切换，无需下滑、无需进店，满足用户快速对比选型的诉求。",examples:[{label:"鲜花",alt:"二期 · 鲜花 · 首屏款式缩略图",flowersRecommendDemo:Ha},{label:"数码",alt:"二期 · 数码 · 首屏配色缩略图",digitalRecommendDemo:Ta}]},category:{name:"鲜花",comparison:{before:{label:"Before",src:"/images/projects/pdp-p2-flowers-final-before-v2.png?v=1",alt:"二期 · 鲜花 · Before"},afterStatic:{label:"After",src:"/images/projects/pdp-p2-flowers-after-v5.png?v=1",alt:"二期 · 鲜花 · After"}}}},{strategy:{title:"数码新增结构化核心参数卡片",text:"在价格区下方增设极简横向参数模块，集中展示机型系列、屏幕、续航、配置等核心参数，解决原有参数分散、用户查阅成本高的痛点，提升配置对比效率。"},interactiveDemo:La}]},{index:"三",title:"升级全域真实信任背书体系，修正用户预期偏差",goalLabel:"核心目标",strategyLabel:"优化策略",layout:"split-trust",goal:"解决高客单品类实物与预期不符、口碑信息零散、信任支撑不足的问题，搭建全方位真实种草信任体系。",strategies:[{title:"商家基础信息全域前置",text:"商详页集中透出商家评分、销量、配送方式、服务水平等核心资质信息，建立基础商家信任。"},{title:"鲜花专属实拍信任模块升级",text:"新增商家实拍返图专区，置顶发货前实拍确认服务承诺，搭配买家真实实拍轮播，叠加「花图不符包赔」服务标识，有效消解鲜花色差、品质不符的消费顾虑。"},{title:"评价体系效率优化",text:"上线评价快捷筛选标签，帮助用户快速精准获取有效口碑信息，提升决策参考效率，强化真实用户种草背书。"}],trustCompare:{before:{label:"Before",src:"/images/projects/pdp-p2-trust-before-v1.png?v=1",alt:"改版前 · 鲜花商详 · 信任背书"},after:Ra,interactiveDemo:Ea}}]}},resultsIntro:"基于一期基线复盘，二期商详改版在大盘转化与分品类访购率上给出可量化验证方向。",resultsSummary:"",pdpResultSections:[{index:"一",title:"大盘核心流量转化指标",subtitle:"对比一期基线",metrics:[{label:"整体进店访购率",text:"+0.05pp",trend:"up"},{label:"商家至商详转化率",text:"+0.4pp",trend:"up"},{label:"加购率",text:"+0.02pp",trend:"up"}]},{index:"二",title:"分品类进店访购率定量预期",subtitle:"一期基线 vs 二期目标",categoryCards:[{category:"超市便利",target:"+0.03pp",note:"无负向波动，基础盘稳定",tone:"neutral"},{category:"数码家电",target:"+1.71pp，由负转正",note:"修复 1.71~2.01pp，由负转正",tone:"positive"},{category:"鲜花",target:"+1.90pp，由负转正",note:"全新增量增长",tone:"positive"}]},{index:"三",title:"定性结论",qualitative:{headline:"精简高客单决策路径、分品类定制信息布局，并完善真实信任体系，整体体验与转化同步提升。",voices:[{avatar:"/images/projects/pdp-insight-avatars/avatar-1.jpg",text:"不用点进店铺再切商品，点一下直接看详情，操作省事多了"},{avatar:"/images/projects/pdp-insight-avatars/avatar-2.jpg",text:"价格、款式、规格全都在首页，不用来回滑动翻找，对比更方便"},{avatar:"/images/projects/pdp-insight-avatars/avatar-3.jpg",text:"手机参数直接摆在价格下面，不用滑到页面底部，对比机型一眼看清配置差别"},{avatar:"/images/projects/pdp-insight-avatars/avatar-4.jpg",text:"商家实拍图一目了然，不怕收到货色差太大"},{avatar:"/images/projects/pdp-insight-avatars/avatar-5.jpg",text:"评价可以直接筛想看的关键词，不用一条条翻评论找有用信息"}]}}],sections:[{label:"项目背景",slides:[],backgroundPanel:!0},{label:"设计策略",slides:[],strategyPanel:!0},{label:"方案设计",slides:[],pdpDesignPanel:!0},{label:"数据结果",panelIndex:"04",slides:[],metrics:!0}]}],ja="260px";function Ba(e,{sharpSrc:t=!1}={}){if(!e)return{src:"",srcset:""};const[a,s=""]=e.split("?"),i=s?`?${s}`:"",r=a.replace(/@[123]x(?=\.[^.]+$)/,""),l=r.lastIndexOf(".");if(l<=0)return{src:e,srcset:""};const n=r.slice(0,l),d=r.slice(l),p=`${n}${d}${i}`,c=`${n}@2x${d}${i}`,o=`${n}@3x${d}${i}`;return t?{src:c,srcset:[`${p} 1x`,`${o} 3x`].join(", ")}:{src:p,srcset:[`${c} 2x`,`${o} 3x`].join(", ")}}function ae(e,{className:t="",alt:a="",loading:s="lazy",fetchpriority:i,sizes:r=ja,sharpSrc:l=!1,extraAttrs:n=""}={}){if(!e)return"";const{src:d,srcset:p}=Ba(e,{sharpSrc:l}),c=p?` srcset="${p}" sizes="${r}"`:"",o=i?` fetchpriority="${i}"`:"";return`<img
              class="${t}"
              src="${d}"${c}
              alt="${a}"
              loading="${s}"${o}
              decoding="async"
              draggable="false"
              ${n}
            />`}function Ia(e=[]){return e.length?`
    <nav class="pdp-flowers-pdp__tabs" data-pdp-flowers-tabs role="tablist" aria-label="商详模块" aria-hidden="true">
      ${e.map((t,a)=>`
        <button
          type="button"
          role="tab"
          class="pdp-flowers-pdp__tab${a===0?" is-active":""}"
          data-y-ratio="${t.yRatio}"
          aria-selected="${a===0?"true":"false"}"
        >${t.label}</button>`).join("")}
    </nav>`:""}function Aa(e,t,a,s=[]){const i=e.topNavDefault||e.topNav,r=e.topNavPinned||e.topNav,l=i?ae(i,{className:"pdp-flowers-pdp__nav-img pdp-flowers-pdp__nav-img--default",alt:"",loading:"eager",fetchpriority:"high"}):"",n=r?ae(r,{className:"pdp-flowers-pdp__nav-img pdp-flowers-pdp__nav-img--pinned",alt:"",loading:"eager",fetchpriority:"high"}):"",d=e.statusBar?`<div class="pdp-flowers-pdp__status-chrome" data-pdp-status-chrome aria-hidden="true">
          ${ae(e.statusBar,{className:"pdp-flowers-pdp__status-img",alt:"",loading:"eager",fetchpriority:"high"})}
        </div>`:"",p=a?`src="${t}" srcset="${a}" sizes="260px"`:`src="${t}"`;return`
        <div class="pdp-flowers-pdp__status-layer" data-pdp-status-layer aria-hidden="true">
          ${d}
        </div>
        <div class="pdp-flowers-pdp__nav-layer" data-pdp-nav-layer aria-hidden="true">
          <div class="pdp-flowers-pdp__nav-pinned-bar" data-pdp-nav-pinned aria-hidden="true">
            <div class="pdp-flowers-pdp__nav-pinned-slot">
              ${n}
              ${Ia(s)}
            </div>
          </div>
        </div>
        <div class="pdp-flowers-pdp__scroller" data-pdp-scroll-content>
          <div class="pdp-flowers-pdp__top-anchor" data-pdp-top-anchor>
            <div class="pdp-flowers-pdp__nav-flow" data-pdp-nav-flow aria-hidden="true">
              ${l}
            </div>
          </div>
          <div class="pdp-flowers-pdp__stage">
            <img
              class="pdp-flowers-pdp__page"
              data-pdp-flowers-page
              ${p}
              alt=""
              loading="eager"
              fetchpriority="high"
              decoding="async"
              draggable="false"
            />
          </div>
        </div>`}function Yt(e,{embedded:t=!1}={}){if(!(e!=null&&e.page))return"";const{chrome:a={},page:s,page2x:i,page3x:r,tabs:l=[],tabsInset:n={left:.16,right:.28},tabStyle:d={fontSize:11,lineHeight:13,underlineHeight:2,underlineGap:3},layout:p={designWidth:750,statusBarHeight:88,navTopRadius:24},heroViewportRatio:c=.405,recommendViewportRatio:o=.095,recommendTopRatio:h=c,recommendInsetLeft:b=.11}=e,_=[r&&`${r} 3x`,i&&`${i} 2x`,s&&`${s} 1x`].filter(Boolean).join(", "),P=a.bottomBar?ae(a.bottomBar,{className:"",alt:"",loading:"eager",extraAttrs:"data-pdp-bottom-chrome-img"}):"",R=Aa(a,s,_,l),E=n.left??.16,T=n.right??.28,L=d.fontSize??11,j=d.lineHeight??13,k=d.underlineHeight??2,$=d.underlineGap??3,f=p.designWidth??750,w=p.statusBarHeight??88,I=p.navTopRadius??24;return`
    <div
      class="pdp-flowers-pdp pdp-flowers-pdp--scroll${t?" pdp-flowers-pdp--embedded":""}"
      data-pdp-flowers-pdp
      data-pdp-flowers-mode="scroll"
      data-status-design-w="${f}"
      data-status-design-h="${w}"
      data-hero-viewport-ratio="${c}"
      data-recommend-viewport-ratio="${o}"
      data-recommend-top-ratio="${h}"
      data-recommend-inset-left="${b}"
      style="
        --pdp-flowers-status-design-w:${f};
        --pdp-flowers-status-design-h:${w};
        --pdp-flowers-nav-top-radius:${I};
        --pdp-flowers-nav-top-r:calc(var(--pdp-screen-w, 260px) * ${I} / ${f});
        --pdp-flowers-recommend-inset-left:${b*100}%;
        --pdp-flowers-tab-inset-left:${E*100}%;
        --pdp-flowers-tab-inset-right:${T*100}%;
        --pdp-flowers-tab-font-size:calc(var(--pdp-screen-w, 260px) * ${L} / 260);
        --pdp-flowers-tab-line-height:calc(var(--pdp-screen-w, 260px) * ${j} / 260);
        --pdp-flowers-tab-underline-h:calc(var(--pdp-screen-w, 260px) * ${k} / 260);
        --pdp-flowers-tab-underline-gap:calc(var(--pdp-screen-w, 260px) * ${$} / 260);
      "
    >
      <div class="pdp-screen-mockup__viewport pdp-flowers-pdp__viewport" data-pdp-viewport>
        ${R}
        <footer class="pdp-flowers-pdp__bottom-chrome" data-pdp-bottom-chrome aria-hidden="true">
          ${P}
        </footer>
      </div>
    </div>`}function Wt(e,t){return!t||!(e!=null&&e.naturalWidth)?0:e.naturalHeight/e.naturalWidth*t}const Ma=140;function Vt(e,t,a={}){if(typeof a=="number")return a;const{duration:s,pxPerSec:i=Ma,minDuration:r=480}=a;if(s!=null)return s;const l=Math.abs(t-((e==null?void 0:e.scrollTop)??0));return Math.max(r,l/i*1e3)}function Fa(e,t,a={}){const s=typeof a=="object"&&a.linear,i=Vt(e,t,a);return new Promise(r=>{if(!e||i<=0){e&&(e.scrollTop=t),e==null||e.dispatchEvent(new Event("scroll")),r();return}const l=e.scrollTop,n=t-l;if(Math.abs(n)<1){e.scrollTop=t,e.dispatchEvent(new Event("scroll")),r();return}const d=performance.now(),p=c=>{const o=Math.min(1,(c-d)/i),h=s?o:1-(1-o)**3;e.scrollTop=l+n*h,e.dispatchEvent(new Event("scroll")),o<1?requestAnimationFrame(p):r()};requestAnimationFrame(p)})}function Ca(e){const t=e.querySelector(".pdp-flowers-pdp__scroller"),a=e.querySelector(".pdp-flowers-pdp__page"),s=e.querySelector(".pdp-flowers-pdp__status-img"),i=e.querySelector(".pdp-flowers-pdp__nav-flow .pdp-flowers-pdp__nav-img--default"),r=e.querySelector("[data-pdp-nav-pinned]"),l=e.querySelector("[data-pdp-flowers-tabs]"),n=l?[...l.querySelectorAll(".pdp-flowers-pdp__tab")]:[],d=n.map(g=>parseFloat(g.dataset.yRatio)||0),p=e.querySelector("[data-pdp-bottom-chrome] img, [data-pdp-bottom-chrome-img]"),c=parseFloat(e.dataset.heroViewportRatio)||.48,o=parseFloat(e.dataset.recommendViewportRatio)||.095,h=parseFloat(e.dataset.recommendTopRatio)||c,b=parseFloat(e.dataset.recommendInsetLeft)||.11;let _=0,P=!1;const R=parseFloat(e.dataset.statusDesignW)||750,E=parseFloat(e.dataset.statusDesignH)||88,T=g=>g*E/R,L=g=>{n.forEach((m,v)=>{const x=v===g;m.classList.toggle("is-active",x),m.setAttribute("aria-selected",x?"true":"false")})},j=()=>{if(!(a!=null&&a.offsetHeight)||!t)return 0;const g=T(t.clientWidth);return Math.max(0,t.scrollTop-g)/a.offsetHeight},k=g=>{if(!t||!(a!=null&&a.offsetHeight)||g<0||g>=d.length||g===0)return 0;const m=Math.max(0,t.scrollHeight-t.clientHeight),v=T(t.clientWidth),x=a.offsetHeight*d[g];return Math.min(m,Math.max(0,v+x))},$=()=>Wt(i,t==null?void 0:t.clientWidth),f=()=>{if(!l||!n.length||(l.classList.toggle("is-visible",P),l.setAttribute("aria-hidden",P?"false":"true"),r==null||r.setAttribute("aria-hidden",P?"false":"true"),!P))return;const g=j();let m=0;d.forEach((v,x)=>{g>=v-.02&&(m=x)}),L(m)},w=()=>{if(!t)return;_=$();const g=t.scrollTop,m=Math.max(0,_-2),v=Math.max(0,_-8);P=P?g>=v:g>=m,e.classList.toggle("is-nav-pinned",P),f()},I=(g,{smooth:m=!0,duration:v,linear:x,pxPerSec:W}={})=>{if(!t||!(a!=null&&a.offsetHeight)||g<0||g>=d.length)return Promise.resolve();const O=k(g),z={duration:v,linear:x,pxPerSec:W},Z=m&&Vt(t,O,z)>0&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches,Q=()=>{w(),L(g),f()};return Z?Fa(t,O,z).then(Q):(t.scrollTop=O,t.dispatchEvent(new Event("scroll")),Q(),Promise.resolve())},C=()=>{if(!t)return;const g=t.clientHeight,m=t.clientWidth,v=g,x=Wt(p,m),W=v*o,O=v*c,z=v*h;e.style.setProperty("--pdp-flowers-hero-h",`${O}px`),e.style.setProperty("--pdp-flowers-recommend-top",`${z}px`),e.style.setProperty("--pdp-flowers-recommend-h",`${W}px`),e.style.setProperty("--pdp-flowers-recommend-inset-left",`${b*100}%`),e.style.setProperty("--pdp-flowers-bottom-chrome-h",`${x}px`),t.style.paddingBottom=x?`${x}px`:"0";const Z=T(m);if(_=$(),e.style.setProperty("--pdp-flowers-status-h",`${Z}px`),e.style.setProperty("--pdp-flowers-nav-h",`${_}px`),e.style.setProperty("--pdp-flowers-top-chrome-h",`${Z+_}px`),a!=null&&a.naturalWidth){const Q=a.naturalHeight/a.naturalWidth*m;e.style.setProperty("--pdp-flowers-page-h",`${Q}px`)}w(),f()},Y=()=>{t&&(t.scrollTop=0),P=!1,e.classList.remove("is-nav-pinned"),n.length&&L(0),f(),C()};if(a){const g=()=>C();a.complete?g():a.addEventListener("load",g,{once:!0})}return t&&t.addEventListener("scroll",()=>{w(),f()},{passive:!0}),n.forEach((g,m)=>{g.addEventListener("click",v=>{v.preventDefault(),v.stopPropagation(),I(m)})}),[s,i,p].filter(Boolean).forEach(g=>{g.complete?C():g.addEventListener("load",()=>C(),{once:!0})}),typeof ResizeObserver<"u"&&t&&new ResizeObserver(C).observe(t),Y(),{reset:Y,applyMetrics:C,scrollToTab:I,getNavChromeHeight:()=>_||$()}}function Xt(){document.querySelectorAll('[data-pdp-flowers-pdp][data-pdp-flowers-mode="scroll"]').forEach(e=>{e.dataset.pdpFlowersPdpBound!=="true"&&(e.dataset.pdpFlowersPdpBound="true",e.__pdpFlowersController=Ca(e))})}const Ge=750,Ye=1024;function Da(e){if(!(e!=null&&e.page))return"";const{page:t,pageSize:a={w:598,h:Ye},mediaTabs:s,tabs:i=[],tabAssets:r={},mainThumb:l,mainHero:n,recLabel:d,chrome:p={},variants:c=[],layout:o={},styleSpecLabels:h={}}=e,b=a.h||Ye,_=a.w||598,P=o.designWidth??Ge,R=o.statusBarEnd??53,E=o.navStart??70,T=o.navEnd??158,L=o.heroTop??E,j=o.priceTop??647,k=o.thumbPageH??Math.round((o.thumbSize??100)*(_/P)),$=o.tabHeight??54.5,f=o.tabsGap??52,w=o.heroBottomPx??o.trackTopPx??838,I=o.trackTopPx??w,C=o.tabsTopPx??786,Y=o.trackLeftPx??6,g=o.heroTopOffsetPx??0,m=o.tabsBottomGapPx??52,v=o.sectionFadeTopPx??718,x=o.sectionFadeHeightPx??120,W=o.whitePanelWidthInsetPx??12,O=o.whitePanelTopRadiusPx??18,z=o.whitePanelHeightPx??70,Z=o.whitePanelGapFromTabsBottomPx??16,Q=o.trackActiveShiftPx??12,he=o.trackActiveShiftId??"v5",ye=o.recommendTop??j-k,Ae=o.tabsTop??Math.round(ye-$-f),$e=o.tabsLeft??103,we=o.tabsWidth??392,xe=o.padLeft??26,Pe=o.padRight??24,B=o.gapMainLabel??22,A=o.gapLabelList??20,V=o.gapItem??12,U=o.labelWidth??36,K=o.thumbSize??100,me=o.thumbRadius??18,fe=o.specTagGapPx??24,Me=o.specTagWidthPx??76,ke=o.specTagHeightPx??40,Se=o.specTagRadiusPx??20,Xe=o.reviewsPanelWidthPx??738,se=o.reviewsPanelAspectW??1021,Fe=o.reviewsPanelAspectH??1024,oe=o.tabBarRadiusPx??26,re=o.tabPillTopPx??4,ut=o.tabPillHeightPx??44,gt=o.tabPillRadiusPx??28,ht=o.tabFontSizePx??24,Ce=o.tabLineHeightPx??40,pe=o.tabBlurPx??16.32,mt=o.demoStyleHoldMs??1600,ne=o.reviewsPanelOffsetYPx??-48,De=o.reviewsClipTopOnly??!1,qe=o.whitePanelFullWidth??!1,We=o.whitePanelExtendToBottom??!1,Oe=o.whitePanelExtendOnReviewsOnly??!1,Rt=o.whitePanelBottomRadiusPx??0,Ue=o.mainHeroScale??1,J=o.mainHeroWidthPx??0,ie=o.mainHeroOffsetYPx??0,He=o.heroWidthBasePx??0,ee=o.heroAlignTop??!1,ze=r.specTag||"",Te=r.reviewsPanel||"",ft=D=>{if(D.id==="style"){const be=D.styleLabelMain||"款式",tt=D.styleLabelSub||"1/3";return`<span class="pdp-flowers-rec__media-tab-text"><span class="pdp-flowers-rec__media-tab-style-main">${be}</span><span class="pdp-flowers-rec__media-tab-style-sub">${tt}</span></span>`}return D.label},S=i.length?i:[{id:"images",label:"图片"},{id:"style",label:"款式1/3"},{id:"reviews",label:"评价"}],de=S.length?`
            <div class="pdp-flowers-rec__tab-content-layer" data-pdp-flowers-tab-content-layer aria-hidden="true">
              ${ze?`<div class="pdp-flowers-rec__tab-content-slot" data-pdp-flowers-tab-slot="style">
                  <div class="pdp-flowers-rec__spec-tag-wrap">
                    <img class="pdp-flowers-rec__spec-tag" data-pdp-flowers-tab-content="style" src="${ze}" alt="" loading="eager" decoding="async" draggable="false" />
                    <span class="pdp-flowers-rec__spec-tag-text" data-pdp-flowers-spec-label hidden aria-hidden="true"></span>
                  </div>
                </div>`:""}
            </div>
            <div class="pdp-flowers-rec__media-tabs" data-pdp-flowers-media-tabs role="tablist" aria-label="商详模块">
              <div class="pdp-flowers-rec__media-tabs-inner">
                <span class="pdp-flowers-rec__media-tabs-pill" data-pdp-flowers-media-tabs-pill aria-hidden="true"></span>
                ${S.map((D,be)=>`
                <button
                  type="button"
                  role="tab"
                  class="pdp-flowers-rec__media-tab${be===0?" is-active":""}"
                  data-pdp-flowers-media-tab="${D.id}"
                  aria-selected="${be===0?"true":"false"}"
                >${ft(D)}</button>`).join("")}
              </div>
            </div>`:s?`<img class="pdp-flowers-rec__tabs" src="${s}" alt="" aria-hidden="true" loading="eager" decoding="async" draggable="false" />`:"",G=D=>D/b,Ze=G(L),vt=G(E),ve=G(R),Qe=G(T),Ke=G(w),_t=G(Ae),Le=G(ye),Je=p.statusBar||"/images/projects/pdp-p2-chrome-status-bar.png",_e=p.topNav||p.topNavDefault||"/images/projects/pdp-p2-chrome-top-nav-default.png?v=6",bt=p.navAspectW??o.navAspectW??472,et=p.navAspectH??o.navAspectH??67,ce=[n?`<img class="pdp-flowers-rec__hero is-active" data-pdp-flowers-hero="main" src="${n}" alt="" loading="eager" decoding="async" draggable="false"${J?` data-hero-width-px="${J}"`:""}${ie?` data-hero-offset-y-px="${ie}"`:""} />`:"",...c.map(D=>`<img class="pdp-flowers-rec__hero" data-pdp-flowers-hero="${D.id}" src="${D.hero}" alt="" loading="lazy" decoding="async" draggable="false"${D.heroWidthPx?` data-hero-width-px="${D.heroWidthPx}"`:""}${D.heroOffsetYPx?` data-hero-offset-y-px="${D.heroOffsetYPx}"`:""} />`)].join(""),Re=c.map(D=>`
        <button type="button" class="pdp-flowers-rec__thumb pdp-flowers-rec__thumb--rec" data-pdp-flowers-thumb="${D.id}" aria-label="${D.label||D.id}" role="listitem">
          <img src="${D.thumb||D.hero}" alt="" loading="lazy" decoding="async" draggable="false" />
          <span class="pdp-flowers-rec__thumb-ring" aria-hidden="true"></span>
        </button>`).join("");return`
    <div
      class="pdp-flowers-rec"
      data-pdp-flowers-pdp
      data-pdp-flowers-mode="recommend"
      data-design-w="${P}"
      data-hero-top-ratio="${Ze}"
      data-nav-start-ratio="${vt}"
      data-status-bar-end-ratio="${ve}"
      data-nav-end-ratio="${Qe}"
      data-nav-aspect-w="${bt}"
      data-nav-aspect-h="${et}"
      data-hero-bottom-ratio="${Ke}"
      data-hero-bottom-px="${w}"
      data-tabs-top-px="${C}"
      data-tabs-gap-px="${f}"
      data-tabs-top-ratio="${_t}"
      data-rec-top-ratio="${Le}"
      data-track-top-px="${I}"
      data-track-left-px="${Y}"
      data-hero-top-offset-px="${g}"
      data-tabs-bottom-gap-px="${m}"
      data-section-fade-top-px="${v}"
      data-section-fade-height-px="${x}"
      data-white-panel-width-inset-px="${W}"
      data-white-panel-full-width="${qe?"true":"false"}"
      data-white-panel-extend-to-bottom="${We?"true":"false"}"
      data-white-panel-extend-on-reviews-only="${Oe?"true":"false"}"
      data-white-panel-bottom-radius-px="${Rt}"
      data-white-panel-top-radius-px="${O}"
      data-white-panel-height-px="${z}"
      data-white-panel-gap-from-tabs-bottom-px="${Z}"
      data-track-active-shift-px="${Q}"
      data-track-active-shift-id="${he}"
      data-tabs-left-ratio="${$e/P}"
      data-tabs-width-ratio="${we/P}"
      data-tab-height-ratio="${$/P}"
      data-pad-left="${xe}"
      data-pad-right="${Pe}"
      data-gap-main-label="${B}"
      data-gap-label-list="${A}"
      data-gap-item="${V}"
      data-label-w="${U}"
      data-thumb-size="${K}"
      data-thumb-radius="${me}"
      data-spec-tag-gap-px="${fe}"
      data-spec-tag-width-px="${Me}"
      data-spec-tag-height-px="${ke}"
      data-spec-tag-radius-px="${Se}"
      data-reviews-panel-width-px="${Xe}"
      data-reviews-panel-aspect-w="${se}"
      data-reviews-panel-aspect-h="${Fe}"
      data-tab-bar-radius-px="${oe}"
      data-tab-pill-top-px="${re}"
      data-tab-pill-height-px="${ut}"
      data-tab-pill-radius-px="${gt}"
      data-tab-font-size-px="${ht}"
      data-tab-line-height-px="${Ce}"
      data-tab-blur-px="${pe}"
      data-demo-style-hold-ms="${mt}"
      data-reviews-panel-offset-y-px="${ne}"
      data-main-hero-scale="${Ue}"
      data-hero-width-base-px="${He}"
      data-hero-align-top="${ee?"true":"false"}"
      data-style-spec-labels="${encodeURIComponent(JSON.stringify(h))}"
      data-reviews-clip-top-only="${De?"true":"false"}"
    >
      <div class="pdp-screen-mockup__viewport pdp-flowers-rec__viewport">
        <div class="pdp-flowers-rec__scroller">
          <div class="pdp-flowers-rec__stage">
            <img class="pdp-flowers-rec__page" src="${t}" alt="" loading="eager" decoding="async" draggable="false" />
            <div class="pdp-flowers-rec__chrome" aria-hidden="true">
              ${ae(Je,{className:"pdp-flowers-rec__chrome-status",alt:"",loading:"eager",fetchpriority:"high"})}
              ${ae(_e,{className:"pdp-flowers-rec__chrome-nav",alt:"",loading:"eager",fetchpriority:"high",sharpSrc:!0})}
            </div>
            <div class="pdp-flowers-rec__hero-layer">${ce}</div>
            ${Te?`<div class="pdp-flowers-rec__reviews-layer" data-pdp-flowers-reviews-layer aria-hidden="true">
              <img class="pdp-flowers-rec__reviews-panel" data-pdp-flowers-tab-content="reviews" src="${Te}" alt="" loading="eager" decoding="async" draggable="false" />
            </div>`:""}
            <div class="pdp-flowers-rec__section-fade" aria-hidden="true"></div>
            ${de}
            <div class="pdp-flowers-rec__white-panel" aria-hidden="true"></div>
            <div class="pdp-flowers-rec__track-layer">
              <div class="pdp-flowers-rec__track" role="list" aria-label="款式缩略图">
                ${l?`
                <button type="button" class="pdp-flowers-rec__thumb pdp-flowers-rec__thumb--main is-active" data-pdp-flowers-thumb="main" aria-label="主图缩略图" role="listitem">
                  <img src="${l}" alt="" loading="eager" decoding="async" draggable="false" />
                  <span class="pdp-flowers-rec__thumb-ring" aria-hidden="true"></span>
                </button>
                ${d?`<img class="pdp-flowers-rec__label" src="${d}" alt="" aria-hidden="true" loading="lazy" decoding="async" draggable="false" />`:""}`:""}
                <div class="pdp-flowers-rec__variants">${Re}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`}function H(e,t,a){const s=parseFloat(e.dataset[t]);return Number.isFinite(s)?s:a}function qa(e){var Bt;const t=e.querySelector(".pdp-flowers-rec__scroller"),a=e.querySelector(".pdp-flowers-rec__page"),s=e.querySelector(".pdp-flowers-rec__track"),i=[...e.querySelectorAll("[data-pdp-flowers-thumb]")],r=i.filter(u=>u.dataset.pdpFlowersThumb!=="main"),l=[...e.querySelectorAll("[data-pdp-flowers-hero]")],n=H(e,"designW",Ge);parseFloat(e.dataset.heroTopRatio);const d=parseFloat(e.dataset.navStartRatio)||70/Ye,p=parseFloat(e.dataset.statusBarEndRatio)||53/Ye;parseFloat(e.dataset.navEndRatio)||158/Ye;const c=H(e,"navAspectW",472),o=H(e,"navAspectH",67);parseFloat(e.dataset.heroBottomRatio);const h=H(e,"heroBottomPx",838);H(e,"tabsTopPx",786);const b=H(e,"tabsGapPx",52);parseFloat(e.dataset.tabsTopRatio),parseFloat(e.dataset.recTopRatio);const _=H(e,"trackTopPx",h),P=H(e,"trackLeftPx",6),R=H(e,"heroTopOffsetPx",0);H(e,"tabsBottomGapPx",52);const E=H(e,"sectionFadeTopPx",718),T=H(e,"sectionFadeHeightPx",120),L=H(e,"whitePanelWidthInsetPx",12),j=H(e,"whitePanelTopRadiusPx",18),k=H(e,"whitePanelHeightPx",70),$=H(e,"whitePanelGapFromTabsBottomPx",16),f=e.dataset.whitePanelFullWidth==="true",w=e.dataset.whitePanelExtendToBottom==="true",I=e.dataset.whitePanelExtendOnReviewsOnly==="true",C=H(e,"whitePanelBottomRadiusPx",0),Y=H(e,"trackActiveShiftPx",12),g=e.dataset.trackActiveShiftId||"v5";parseFloat(e.dataset.tabsLeftRatio)||103/Ge;const m=parseFloat(e.dataset.tabsWidthRatio)||392/Ge,v=parseFloat(e.dataset.tabHeightRatio)||54.5/Ge,x=H(e,"padLeft",26),W=H(e,"padRight",24),O=H(e,"gapMainLabel",22),z=H(e,"gapLabelList",20),Z=H(e,"gapItem",12),Q=H(e,"labelW",36),he=H(e,"thumbSize",100),ye=H(e,"thumbRadius",18),Ae=H(e,"specTagGapPx",24),$e=H(e,"specTagWidthPx",76),we=H(e,"specTagHeightPx",40),xe=H(e,"specTagRadiusPx",20);H(e,"reviewsPanelWidthPx",738),H(e,"reviewsPanelAspectW",1021),H(e,"reviewsPanelAspectH",1024);const Pe=H(e,"tabBarRadiusPx",26),B=H(e,"tabPillTopPx",4),A=H(e,"tabPillHeightPx",44),V=H(e,"tabPillRadiusPx",28),U=H(e,"tabFontSizePx",24),K=H(e,"tabLineHeightPx",40),me=H(e,"tabBlurPx",16.32);H(e,"demoStyleHoldMs",1600);const fe=H(e,"reviewsPanelOffsetYPx",-48),Me=H(e,"mainHeroScale",1),ke=H(e,"heroWidthBasePx",0),Se=e.dataset.heroAlignTop==="true",Xe=e.querySelector("[data-pdp-flowers-media-tabs]"),se=Xe?[...Xe.querySelectorAll("[data-pdp-flowers-media-tab]")]:[],Fe=e.querySelector("[data-pdp-flowers-media-tabs-pill]"),oe=e.querySelector("[data-pdp-flowers-tab-content-layer]"),re=e.querySelector("[data-pdp-flowers-reviews-layer]"),ut=oe?[...oe.querySelectorAll("[data-pdp-flowers-tab-slot]")]:[],gt=[...oe?[...oe.querySelectorAll("[data-pdp-flowers-tab-content]")]:[],...re?[...re.querySelectorAll("[data-pdp-flowers-tab-content]")]:[]],ht=e.querySelector(".pdp-flowers-rec__hero-layer"),Ce=se.find(u=>u.dataset.pdpFlowersMediaTab==="style"),pe=Ce==null?void 0:Ce.querySelector(".pdp-flowers-rec__media-tab-style-sub"),mt=((Bt=pe==null?void 0:pe.textContent)==null?void 0:Bt.trim())||"1/3",ne=e.querySelector("[data-pdp-flowers-spec-label]"),De=e.querySelector('[data-pdp-flowers-tab-content="style"]'),qe=e.querySelector(".pdp-flowers-rec__spec-tag-wrap"),We=e.querySelector('[data-pdp-flowers-tab-slot="style"]');let Oe={};try{Oe=JSON.parse(decodeURIComponent(e.dataset.styleSpecLabels||"{}"))}catch{Oe={}}const Ue=i.some(y=>y.dataset.pdpFlowersThumb==="main")&&r.length<=2?["main",...r.slice(0,2).map(y=>y.dataset.pdpFlowersThumb)].slice(0,3):r.slice(0,3).map(y=>y.dataset.pdpFlowersThumb),J=[{tab:"images",thumbId:"main"},...Ue.map((u,y)=>({tab:"style",thumbId:u,styleIndex:y+1,styleTotal:Ue.length})),...re?[{tab:"reviews"}]:[]];let ie=0,He=null,ee="images",ze=0,Te=!1;const ft=36,S=(u,y)=>u*y/n,de=u=>{if(pe){if((u==null?void 0:u.tab)==="style"&&u.styleIndex){pe.textContent=`${u.styleIndex}/${u.styleTotal}`;return}pe.textContent=mt}},G=u=>{const y=u?Oe[String(u)]:null,M=!!y,q=!!(u&&!M);if(qe&&(qe.classList.toggle("is-text-mode",M),qe.classList.toggle("is-image-mode",q)),ne&&(M?(ne.textContent=y,ne.hidden=!1,ne.setAttribute("aria-hidden","false")):(ne.textContent="",ne.hidden=!0,ne.setAttribute("aria-hidden","true"))),De&&(De.hidden=!q,De.style.display=q?"block":"none"),We)if(M&&y){const le=(t==null?void 0:t.clientWidth)||260,at=S(le,U),yt=S(le,32),$t=S(le,$e);let st=y.length*at*.92;if(typeof document<"u"){const Ee=(G._canvas||(G._canvas=document.createElement("canvas"))).getContext("2d");Ee&&(Ee.font=`500 ${at}px "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif`,st=Ee.measureText(y).width)}We.style.width=`${Math.ceil(Math.max($t,st+yt))}px`}else We.style.width=""},Ze=u=>{l.forEach(y=>y.classList.toggle("is-active",y.dataset.pdpFlowersHero===u))},vt=u=>{i.forEach(y=>y.classList.toggle("is-active",y.dataset.pdpFlowersThumb===u)),u==="main"||Math.max(0,r.findIndex(y=>y.dataset.pdpFlowersThumb===u)),et(u)},ve=(u,{keepAuto:y=!1}={})=>{if(!J.length)return;const M=(u%J.length+J.length)%J.length;ie=M;const q=J[M];_e(q.tab),q.tab==="reviews"?(de(null),G(null)):q.tab==="style"?(Ze(q.thumbId),de(q),G(q.styleIndex)):q.thumbId&&(Re(q.thumbId,{keepTab:!0,syncThumbs:!0}),de(null),G(null)),y||ue()},Qe=()=>ve(ie+1),Ke=()=>ve(ie-1),_t=u=>{e.style.setProperty("--pdp-flowers-rec-vw",`${u}px`),e.style.setProperty("--pdp-flowers-rec-pad-left",`${S(u,x)}px`),e.style.setProperty("--pdp-flowers-rec-pad-right",`${S(u,W)}px`),e.style.setProperty("--pdp-flowers-rec-gap-main-label",`${S(u,O)}px`),e.style.setProperty("--pdp-flowers-rec-gap-label-list",`${S(u,z)}px`),e.style.setProperty("--pdp-flowers-rec-gap-item",`${S(u,Z)}px`),e.style.setProperty("--pdp-flowers-rec-label-w",`${S(u,Q)}px`),e.style.setProperty("--pdp-flowers-rec-row-h",`${S(u,he)}px`),e.style.setProperty("--pdp-flowers-rec-thumb-size",`${S(u,he)}px`),e.style.setProperty("--pdp-flowers-rec-thumb-radius",`${S(u,ye)}px`),e.style.setProperty("--pdp-flowers-rec-tabs-width",`${m*100}%`),e.style.setProperty("--pdp-flowers-rec-tabs-height",`${S(u,v*n)}px`),e.style.setProperty("--pdp-flowers-rec-tab-bar-radius",`${S(u,Pe)}px`),e.style.setProperty("--pdp-flowers-rec-tab-pill-top",`${S(u,B)}px`),e.style.setProperty("--pdp-flowers-rec-tab-pill-height",`${S(u,A)}px`),e.style.setProperty("--pdp-flowers-rec-tab-pill-radius",`${S(u,V)}px`),e.style.setProperty("--pdp-flowers-rec-tab-font-size",`${S(u,U)}px`),e.style.setProperty("--pdp-flowers-rec-tab-line-height",`${S(u,K)}px`),e.style.setProperty("--pdp-flowers-rec-tab-blur",`${S(u,me)}px`),e.style.setProperty("--pdp-flowers-rec-spec-tag-w",`${S(u,$e)}px`),e.style.setProperty("--pdp-flowers-rec-spec-tag-h",`${S(u,we)}px`),e.style.setProperty("--pdp-flowers-rec-spec-tag-radius",`${S(u,xe)}px`)},Le=()=>{if(!Fe||!se.length)return;const u=se.find(y=>y.dataset.pdpFlowersMediaTab===ee)||se[0];u&&(Fe.style.width=`${u.offsetWidth}px`,Fe.style.transform=`translate(${u.offsetLeft}px, -50%)`)},Je=()=>{if(ut.forEach(u=>{const y=u.dataset.pdpFlowersTabSlot===ee;u.classList.toggle("is-visible",y)}),re){const u=ee==="reviews";re.classList.toggle("is-visible",u),re.setAttribute("aria-hidden",u?"false":"true")}if(oe){const u=ee==="style";oe.setAttribute("aria-hidden",u?"false":"true")}e.classList.toggle("is-reviews-tab",ee==="reviews")},_e=u=>{if(se.length){if(ee===u){Le();return}ee=u,se.forEach(y=>{const M=y.dataset.pdpFlowersMediaTab===u;y.classList.toggle("is-active",M),y.setAttribute("aria-selected",M?"true":"false")}),Le(),Je(),ce()}},bt=()=>{var u;return((u=i.find(y=>y.classList.contains("is-active")))==null?void 0:u.dataset.pdpFlowersThumb)||"main"},et=u=>{if(!s)return;const y=(t==null?void 0:t.clientWidth)||260,M=u===g?S(y,Y):0;s.style.transform=M?`translateX(-${M}px)`:"translateX(0)"},ce=()=>{if(!t)return;const u=t.clientWidth;if(!u)return;_t(u);const y=(a==null?void 0:a.offsetHeight)||(a!=null&&a.naturalWidth?a.naturalHeight/a.naturalWidth*u:t.clientHeight),M=S(u,v*n),q=S(u,h),le=S(u,_),at=S(u,P),yt=S(u,he),$t=y*d,st=y*p,It=S(u,b),Ee=le-It,At=Ee-M,ua=S(u,R),Mt=$t,ga=Mt,je=Mt,ha=0,ma=ua;e.style.setProperty("--pdp-flowers-rec-status-bar-h",`${st}px`),e.style.setProperty("--pdp-flowers-rec-nav-top",`${ga}px`),e.style.setProperty("--pdp-flowers-rec-nav-aspect-w",`${c}`),e.style.setProperty("--pdp-flowers-rec-nav-aspect-h",`${o}`),e.style.setProperty("--pdp-flowers-rec-hero-layer-top",`${je}px`),e.style.setProperty("--pdp-flowers-rec-hero-layer-h",`${Math.max(0,q-je)}px`),e.style.setProperty("--pdp-flowers-rec-hero-top",`${ha}px`),e.style.setProperty("--pdp-flowers-rec-hero-h",`${Math.max(0,q-je)}px`),e.style.setProperty("--pdp-flowers-rec-hero-object-y",`${ma}px`),e.style.setProperty("--pdp-flowers-rec-tabs-top",`${At}px`);const fa=S(u,Ae),va=S(u,we);e.style.setProperty("--pdp-flowers-rec-spec-tag-top",`${At-fa-va}px`);const _a=Math.max(0,q-je);e.style.setProperty("--pdp-flowers-rec-reviews-top",`${je}px`),e.style.setProperty("--pdp-flowers-rec-reviews-layer-h",`${_a}px`),e.style.setProperty("--pdp-flowers-rec-reviews-offset-y",`${S(u,fe)}px`),e.style.setProperty("--pdp-flowers-rec-main-hero-scale",`${Me}`),e.style.setProperty("--pdp-flowers-rec-track-top",`${le}px`),e.style.setProperty("--pdp-flowers-rec-track-left",`${at}px`),e.style.setProperty("--pdp-flowers-rec-track-h",`${yt}px`);const ba=Math.max(0,q-je),ya=ke>0?ke:n;l.forEach(F=>{const xt=parseFloat(F.dataset.heroWidthPx);if(Number.isFinite(xt)&&xt>0){const xa=u*xt/ya,Dt=parseFloat(F.dataset.heroOffsetYPx);let Be=0;Number.isFinite(Dt)?Be=S(u,Dt):Se&&(Be=S(u,R)),F.style.width=`${xa}px`,F.style.left="50%",F.style.right="auto",F.style.height="auto",F.style.maxHeight=`${ba}px`,F.style.objectFit="contain",Se?(F.style.objectPosition="top center",F.style.top="0",F.style.transform=Be?`translate(-50%, ${Be}px)`:"translateX(-50%)"):(F.style.objectPosition="center center",F.style.transform=Be?`translate(-50%, calc(-50% + ${Be}px))`:"translate(-50%, -50%)")}else F.style.removeProperty("width"),F.style.removeProperty("left"),F.style.removeProperty("right"),F.style.removeProperty("height"),F.style.removeProperty("max-height"),F.style.removeProperty("object-fit"),F.style.removeProperty("object-position"),F.style.removeProperty("transform")}),e.style.setProperty("--pdp-flowers-rec-section-fade-h",`${S(u,T)}px`),e.style.setProperty("--pdp-flowers-rec-section-fade-top",`${S(u,E)}px`);const Ft=Ee+S(u,$);let wt=S(u,k);const Ct=w||I&&ee==="reviews";Ct&&(wt=Math.max(wt,Math.max(0,y-Ft)));const $a=f?0:u/260*(L/2),wa=f?u:Math.max(0,u-u/260*L);if(e.style.setProperty("--pdp-flowers-rec-white-panel-top",`${Ft}px`),e.style.setProperty("--pdp-flowers-rec-white-panel-h",`${wt}px`),e.style.setProperty("--pdp-flowers-rec-white-panel-w",`${wa}px`),e.style.setProperty("--pdp-flowers-rec-white-panel-left",`${$a}px`),e.style.setProperty("--pdp-flowers-rec-white-panel-radius",`${S(u,j)}px`),e.style.setProperty("--pdp-flowers-rec-white-panel-bottom-radius",C>0||Ct?`${S(u,C>0?C:16)}px`:"0px"),s&&(s.style.removeProperty("top"),s.style.removeProperty("left")),et(bt()),Le(),ee==="style"){const F=J[ie];F!=null&&F.styleIndex&&G(F.styleIndex)}},Re=(u,{keepTab:y=!1,syncThumbs:M=!0}={})=>{Ze(u),M&&vt(u),!y&&se.length&&ee!=="images"&&(_e("images"),de(null),G(null))},D=u=>{ue(),ie=be("images"),_e("images"),Re(u,{keepTab:!0,syncThumbs:!0}),de(null),G(null)},be=u=>u==="images"?J.findIndex(y=>y.tab==="images"):u==="style"?J.findIndex(y=>y.tab==="style"&&y.styleIndex===1):u==="reviews"?J.findIndex(y=>y.tab==="reviews"):0,tt=()=>ve(ie+1,{keepAuto:!0}),ue=()=>{He&&window.clearInterval(He),He=null},Et=(u=1200)=>{ue(),He=window.setInterval(tt,u)},da=(u=1200)=>{ue(),ve(0,{keepAuto:!0}),Et(u)},jt=()=>{ue(),ie=0,Re("main",{keepTab:!0}),_e("images"),de(null),G(null),ce()},ca=u=>{if(!u||u.dataset.pdpFlowersSwipeBound==="true")return;u.dataset.pdpFlowersSwipeBound="true",u.style.pointerEvents="auto",u.style.touchAction="pan-y",u.style.cursor="grab";const y=M=>{var le;if(!Te)return;Te=!1,u.classList.remove("is-dragging");const q=M.clientX-ze;Math.abs(q)>=ft&&(ue(),q<0?Qe():Ke()),(le=u.hasPointerCapture)!=null&&le.call(u,M.pointerId)&&u.releasePointerCapture(M.pointerId)};u.addEventListener("pointerdown",M=>{M.button===0&&(Te=!0,ze=M.clientX,u.classList.add("is-dragging"),u.setPointerCapture(M.pointerId))}),u.addEventListener("pointerup",y),u.addEventListener("pointercancel",y)};if([ht,re].filter(Boolean).forEach(ca),se.forEach(u=>{const y=()=>{ue(),ve(be(u.dataset.pdpFlowersMediaTab))};u.addEventListener("click",y),u.addEventListener("mouseenter",y)}),i.forEach(u=>{const y=u.dataset.pdpFlowersThumb;u.addEventListener("click",()=>D(y)),u.addEventListener("mouseenter",()=>D(y)),u.addEventListener("mouseleave",M=>{var q;(q=M.relatedTarget)!=null&&q.closest("[data-pdp-flowers-thumb]")||Et(1200)})}),a){const u=()=>ce();a.complete?u():a.addEventListener("load",u,{once:!0})}return gt.forEach(u=>{const y=()=>ce();u.complete?y():u.addEventListener("load",y,{once:!0})}),typeof ResizeObserver<"u"&&t&&new ResizeObserver(ce).observe(t),jt(),Je(),Le(),l.forEach(u=>{u.loading==="lazy"&&(u.loading="eager")}),{reset:jt,setVariant:Re,setMediaTab:_e,cycleNext:tt,startAuto:da,stopAuto:ue,applyMetrics:ce,goSwipeNext:Qe,goSwipePrev:Ke}}function Wa(){document.querySelectorAll(".pdp-flowers-rec[data-pdp-flowers-pdp]").forEach(e=>{e.dataset.pdpFlowersRecBound!=="true"&&(e.dataset.pdpFlowersRecBound="true",e.__pdpFlowersController=qa(e))})}const Ut=2e3,Zt=900,nt=140;function te(e){return new Promise(t=>window.setTimeout(t,e))}function Oa(e,t,a={}){if(typeof a=="number")return a;const{duration:s,pxPerSec:i=nt,minDuration:r=480}=a;if(s!=null)return s;const l=Math.abs(t-((e==null?void 0:e.scrollTop)??0));return Math.max(r,l/i*1e3)}function it(e,t,a={}){const s=typeof a=="object"&&a.linear,i=Oa(e,t,a);return new Promise(r=>{if(!e||i<=0){e&&(e.scrollTop=t),e==null||e.dispatchEvent(new Event("scroll")),r();return}const l=e.scrollTop,n=t-l;if(Math.abs(n)<1){e.scrollTop=t,e.dispatchEvent(new Event("scroll")),r();return}const d=performance.now(),p=c=>{const o=Math.min(1,(c-d)/i),h=s?o:1-(1-o)**3;e.scrollTop=l+n*h,e.dispatchEvent(new Event("scroll")),o<1?requestAnimationFrame(p):r()};requestAnimationFrame(p)})}function za(e){if(!e)return"";const t=(e.top??.35)*100,a=(e.left??.05)*100,s=(e.width??.9)*100,i=(e.height??.2)*100;return`
          <div
            class="pdp-path-demo__hotspot pdp-demo-hotspot pdp-demo-hotspot--ring-right"
            data-pdp-path-hotspot
            aria-hidden="true"
            style="top:${t}%;left:${a}%;width:${s}%;height:${i}%;"
          ></div>`}function Qt(e,{demoId:t="",renderScrollMockup:a}={}){var l;if(!(e!=null&&e.search))return"";const s=!!e.flowersPdpDemo,i=!!(e.scrollDemo&&e.pdp);let r="";if(s)r=Yt(e.flowersPdpDemo,{embedded:!0});else if(e.pdp)r=i?(a==null?void 0:a(e.pdp,e.scrollDemo,{embedded:!0,hideHint:!0}))||ae(e.pdp.src,{className:"",alt:e.pdp.alt}):ae(e.pdp.src,{className:"",alt:e.pdp.alt});else return"";return`
    <div
      class="pdp-path-demo"
      data-pdp-path-demo
      data-pdp-path-demo-id="${t}"
      data-pdp-path-scroll-down="${((l=e.scrollDemo)==null?void 0:l.scrollDownRatio)??.35}"
      data-pdp-path-has-scroll="${i?"true":"false"}"
      data-pdp-path-has-flowers="${s?"true":"false"}"
    >
      <div class="pdp-screen-mockup__viewport pdp-path-demo__viewport">
        <div class="pdp-path-demo__stack">
          <div class="pdp-path-demo__screen pdp-path-demo__screen--search is-active" data-pdp-path-screen="search">
            ${ae(e.search.src,{className:"pdp-path-demo__search-img",alt:e.search.alt,loading:"eager"})}
            ${za(e.searchHotspot)}
          </div>
          <div class="pdp-path-demo__screen pdp-path-demo__screen--pdp" data-pdp-path-screen="pdp" aria-hidden="true">
            ${r}
          </div>
        </div>
      </div>
    </div>`}function Na(e,{renderScrollMockup:t}={}){return e!=null&&e.length?`
    <div class="pdp-path-demo-gallery" data-pdp-path-demo-gallery>
      ${e.map(a=>`
      <article
        class="pdp-path-demo-card reveal"
        data-pdp-path-demo-card="${a.id}"
        tabindex="0"
        aria-label="${a.name} · 路径演示"
      >
        <header class="pdp-path-demo-card__head">
          <h6 class="pdp-path-demo-card__title">${a.name}</h6>
          <span class="pdp-path-demo-card__hint">悬停自动播放</span>
        </header>
        ${Qt(a,{demoId:a.id,renderScrollMockup:t})}
      </article>`).join("")}
    </div>`:""}function Ga(e){const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=e.dataset.pdpPathHasScroll==="true",s=e.dataset.pdpPathHasFlowers==="true",i={searchHold:Ut,transition:s?320:480,pdpTopHold:s?500:a?600:2400,scrollDown:s?{linear:!0,pxPerSec:nt}:2400,scrollUp:s?{linear:!0,pxPerSec:nt}:1700,tabScroll:{linear:!0,pxPerSec:nt},loopPause:Zt},r=e.querySelector("[data-pdp-scroll-demo]"),l=r==null?void 0:r.querySelector(".pdp-scroll-mockup__scroller"),n=l==null?void 0:l.querySelector("img"),d=e.querySelector("[data-pdp-flowers-pdp]"),p=parseFloat(e.dataset.pdpPathScrollDown)||.35,c=e.querySelector("[data-pdp-path-hotspot]");let o=0,h=!1;const b=()=>d==null?void 0:d.__pdpFlowersController,_=k=>{const $=k==="pdp";e.classList.toggle("is-pdp",$),e.dataset.pdpPathStage=k,e.querySelectorAll("[data-pdp-path-screen]").forEach(f=>{const w=f.dataset.pdpPathScreen;w==="search"?(f.classList.add("is-active"),f.setAttribute("aria-hidden","false")):w==="pdp"&&(f.classList.toggle("is-active",$),f.setAttribute("aria-hidden",$?"false":"true"))})},P=()=>{l&&(l.scrollTop=0,l.dispatchEvent(new Event("scroll")))},R=()=>new Promise(k=>{if(!n){k();return}if(n.complete&&n.offsetHeight){k();return}n.addEventListener("load",()=>k(),{once:!0}),window.setTimeout(k,1200)}),E=()=>{if(!l||!(n!=null&&n.offsetHeight))return 0;const k=Math.max(0,l.scrollHeight-l.clientHeight);return Math.min(k,n.offsetHeight*p)},T=async k=>{var Y,g;const $=b();if($==null||$.applyMetrics(),requestAnimationFrame(()=>$==null?void 0:$.applyMetrics()),await te(60),$==null||$.applyMetrics(),await te(i.pdpTopHold),!k())return;const f=d==null?void 0:d.querySelector(".pdp-flowers-pdp__scroller");if(!f)return;const w=Math.max(0,f.scrollHeight-f.clientHeight),I=Math.min(w,(((Y=$==null?void 0:$.getNavChromeHeight)==null?void 0:Y.call($))||36)+4);if(await it(f,I,i.scrollDown),!k())return;const C=(d==null?void 0:d.querySelectorAll(".pdp-flowers-pdp__tab").length)||0;for(let m=1;m<C;m+=1)if(await((g=$==null?void 0:$.scrollToTab)==null?void 0:g.call($,m,{smooth:!0,...i.tabScroll})),!k())return;await te(300),await it(f,0,i.scrollUp)},L=()=>{var k,$,f;o+=1,h=!1,e.classList.remove("is-transitioning","is-playing","is-search-highlight"),c==null||c.classList.remove("is-active"),($=(k=b())==null?void 0:k.stopAuto)==null||$.call(k),_("search"),P(),(f=b())==null||f.reset()},j=async()=>{var f,w,I;if(t)return;L(),h=!0,o+=1;const k=o,$=()=>k===o&&e.isConnected&&h;for(e.classList.add("is-playing");$()&&(_("search"),P(),(f=b())==null||f.reset(),e.classList.remove("is-transitioning"),e.classList.add("is-search-highlight"),c==null||c.classList.add("is-active"),await te(i.searchHold),c==null||c.classList.remove("is-active"),e.classList.remove("is-search-highlight"),!(!$()||(e.classList.add("is-transitioning"),_("pdp"),await te(i.transition),!$())));){if(e.classList.remove("is-transitioning"),s)await T($),await te(400);else if(a){if(await R(),P(),await te(i.pdpTopHold),!$()||(await it(l,E(),i.scrollDown),await te(300),!$()))break;await it(l,0,i.scrollUp),await te(400)}else await te(i.pdpTopHold);if(!$()||(e.classList.add("is-transitioning"),_("search"),await te(i.transition),!$()))break;e.classList.remove("is-transitioning"),await te(i.loopPause)}h=!1,e.classList.remove("is-playing"),(I=(w=b())==null?void 0:w.stopAuto)==null||I.call(w)};return L(),{start:j,stop:L,root:e}}function Ya({bindHoverAutoplay:e}){Xt();const t=new Map;let a=null;document.querySelectorAll("[data-pdp-path-demo-card]").forEach(s=>{const i=s.querySelector("[data-pdp-path-demo]");if(!i)return;const r=s.dataset.pdpPathDemoCard,l=Ga(i);t.set(r,l),e(s,{onPlay:()=>{var p,c,o,h;a&&a!==r&&((p=t.get(a))==null||p.stop(),(c=document.querySelector(`[data-pdp-path-demo-card="${a}"]`))==null||c.classList.remove("is-active")),a=r,s.classList.add("is-active"),(h=(o=i.querySelector("[data-pdp-flowers-pdp]"))==null?void 0:o.__pdpFlowersController)==null||h.applyMetrics(),l.start()},onPause:()=>{l.stop(),s.classList.remove("is-active"),a===r&&(a=null)}})})}const St={navScrolled:!1};function Ne(e,t){return`${e}-section-${t}`}function Pt(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function Kt(e){return Number.isInteger(e)?0:2}function ot(e){return e.placeholder||e.text||e.value===void 0?"":`data-count="${e.value}" data-suffix="${e.suffix||""}" data-decimals="${Kt(e.value)}"`}function pt(e){if(e.placeholder)return"—";if(e.text&&e.value===void 0)return e.text;const t=Kt(e.value);return`${t>0?Number(e.value).toFixed(t):String(e.value)}${e.suffix||""}`}function Va(e){var t,a,s;return(s=(a=(t=e.metricGroups)==null?void 0:t[0])==null?void 0:a.metrics)!=null&&s.length?e.metricGroups[0].metrics.slice(0,3):(e.metrics??[]).slice(0,3)}function Xa(e){return`
    <div class="mini-metric">
      <div class="mini-metric__value">
        <strong ${ot(e)}>${pt(e)}</strong>
        ${e.unit?`<small>${e.unit}</small>`:""}
      </div>
      <span class="mini-metric__label">${e.label}</span>
    </div>
  `}function Ua(e){const t=e.trend==="up"?"↑":e.trend==="down"?"↓":"";return`
    <div class="metrics-stat">
      <div class="metrics-stat__value">
        <span ${ot(e)}>${pt(e)}</span>
        ${e.unit?`<small>${e.unit}</small>`:""}
        ${t?`<span class="metrics-stat__trend metrics-stat__trend--${e.trend}">${t}</span>`:""}
      </div>
      <div class="metrics-stat__label">${e.label}</div>
    </div>
  `}function Jt(e,t=4){return e!=null&&e.length?`
    <div class="metrics-panel__stats" style="--stat-cols: ${t}">
      ${e.map(Ua).join("")}
    </div>
  `:""}function Za(e,t=!1){const a=t?"background-panel__section-title":"metrics-panel__group-title";return e.map(s=>`
      <div class="metrics-panel__group">
        ${t?`<h4 class="${a}">${s.title}</h4>`:`<p class="${a}">${s.title}</p>`}
        ${Jt(s.metrics,s.columns||s.metrics.length)}
      </div>
    `).join("")}function Qa(e){return`
    <div class="analysis-card__heading analysis-card__heading--split">
      ${e.map((t,a)=>`
        ${a>0?'<span class="analysis-card__heading-sep" aria-hidden="true"></span>':""}
        <span>${t}</span>
      `).join("")}
    </div>
  `}function Ka(e){var a;const t=(a=e.titleParts)!=null&&a.length?Qa(e.titleParts):`<strong class="analysis-card__heading">${e.title}</strong>`;return`
    <div class="analysis-card analysis-card--deck">
      <span class="analysis-card__watermark">${e.index}</span>
      ${e.badge?`<span class="analysis-card__badge">${e.badge}</span>`:""}
      <div class="analysis-card__body">
        ${t}
        <ul class="analysis-card__list">
          ${e.items.map(s=>`<li>${s}</li>`).join("")}
        </ul>
      </div>
    </div>
  `}function Ja(e){const t=typeof e=="string"?e:e.label,a=typeof e=="object"?e.trend:"",s=a==="up"?"↑":a==="down"?"↓":"";return`
    <div class="analysis-card analysis-card--light analysis-card--metric">
      <div class="analysis-card__body">
        <p class="analysis-metric-item">
          <span class="analysis-metric-item__label">${t}</span>
          ${s?`<span class="analysis-metric-item__trend" aria-hidden="true">${s}</span>`:""}
        </p>
      </div>
    </div>
  `}function ea(e,t){const a=t&&t.maskHeader!==!1;return`
    <figure class="project-section__figure project-section__figure--design">
      ${ta(e,a)}
    </figure>
  `}function ta(e,t){return t?`
      <div class="design-slide-media design-slide-media--masked">
        <img src="${e.src}" alt="${e.alt}" loading="lazy" />
      </div>`:`<img src="${e.src}" alt="${e.alt}" loading="lazy" />`}function aa(e,t){return`
    <header class="background-panel__head">
      <span class="background-panel__index">${e}</span>
      <h3 class="background-panel__title">${t}</h3>
    </header>
  `}function es(e){var t;return(t=e.strategies)!=null&&t.length?`
        <section class="analysis-block analysis-block--strategies reveal">
          <h3 class="project-content-title">关键策略</h3>
          <div class="analysis-card-grid analysis-card-grid--2">
            ${e.strategies.map((a,s)=>`
              <div
                class="analysis-card analysis-card--light analysis-card--strategy"
                data-strategy-index="${s}"
              >
                <div class="analysis-card__body">
                  <strong class="analysis-card__heading">${a.title}</strong>
                  <ul class="analysis-card__list">
                    ${a.items.map((i,r)=>`
                      <li data-strategy-item-index="${r}">${i}</li>
                    `).join("")}
                  </ul>
                </div>
              </div>
            `).join("")}
          </div>
        </section>`:""}function sa(e){const t=[];return e.slides.forEach((a,s)=>{var n;const i=(n=e.designHeaders)==null?void 0:n[s],r=(i==null?void 0:i.subtitle)??"",l=t[t.length-1];l&&l.subtitle===r?l.slides.push({slide:a,slideIndex:s,header:i}):t.push({subtitle:r,slides:[{slide:a,slideIndex:s,header:i}]})}),t}function ts(e){var i,r;const t=(i=e.slides[0])==null?void 0:i.header;if(!(t!=null&&t.subtitle))return"";const a=(r=t.strategies)==null?void 0:r[0],s=a?`<p class="design-section-header__strategy-line">${a.label}：${a.text}</p>`:"";return`
    <div class="design-section-header design-section-header--group-start reveal" data-design-page-header>
      <p class="design-section-header__group-title design-section-header__group-title--section">${t.subtitle}</p>
      ${s}
    </div>
  `}function as(e={}){return e.stickyMode==="invite-title"?`
    <div class="design-sticky-bar design-sticky-bar--invite-title" data-design-sticky-source data-sticky-mode="invite-title" aria-live="polite" aria-hidden="true">
      <div class="design-sticky-bar__inner">
        <div class="design-sticky-bar__title-viewport" data-sticky-strategy-viewport>
          <span class="design-sticky-bar__title-track" data-sticky-strategy-track></span>
        </div>
      </div>
    </div>`:`
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
  `}function ss(e){const t=e.match(/^策略(\d+)$/);return t?`${t[1]}：`:e?`${e}：`:""}function is(e){const t=document.createElement("span");t.className="design-sticky-bar__strategy-body design-sticky-bar__scroll-body";const a=ss(e.dataset.stickyLabel||"");if(a){const i=document.createElement("span");i.className="design-sticky-bar__strategy-index",i.textContent=a,t.appendChild(i)}const s=document.createElement("span");return s.className="design-sticky-bar__strategy-text",s.textContent=e.dataset.stickyStrategy||"",t.appendChild(s),t}function rs(e){const t=document.createElement("span");return t.className="design-sticky-bar__invite-body design-sticky-bar__scroll-body",t.textContent=e.dataset.stickySubtitle||"",t}function kt(e,t="strategy"){return t==="invite-title"?rs(e):is(e)}function ns(e,t,a,s={}){const{isStickyHeader:i=!1}=s;if(e.hideDesignHeaders)return a===0?ts(t):"";const l=t.slides.flatMap(({header:p})=>(p==null?void 0:p.strategies)||[]).map(p=>`
      <p class="design-section-header__strategy-line">${p.label}：${p.text}</p>
    `).join("");if(!t.subtitle&&!l)return"";if(e.panelIndex)return t.subtitle?`
    <div class="design-section-header design-section-header--group-start"${i?" data-design-page-header":""}>
      <h4 class="background-panel__section-title">${t.subtitle}</h4>
      ${l}
    </div>`:"";const d=!!e.designSectionTitle?t.subtitle?`<p class="design-section-header__group-title design-section-header__group-title--section">${t.subtitle}</p>`:"":t.subtitle?`<p class="design-section-header__group-title design-section-header__group-title--section">${t.subtitle}</p>`:a===0?`
      <div class="design-section-header__title-line">
        <h3 class="project-content-title">${e.label}</h3>
      </div>`:"";return!d&&!l?"":`
    <div class="design-section-header design-section-header--group-start">
      ${d}
      ${l}
    </div>
  `}function ls(e,t,a){const s=sa(e),i=e.panelIndex&&e.designSectionTitle?aa(e.panelIndex,e.designSectionTitle):e.designSectionTitle?`
      <div class="design-section-heading">
        <h3 class="project-content-title">${e.designSectionTitle}</h3>
      </div>`:e.hideDesignHeaders&&e.label?`
      <div class="design-section-title-block reveal">
        <h3 class="project-content-title">${e.label}</h3>
      </div>`:"";return`
    <div class="design-section-inner design-section-inner--grouped project-content-inner${e.stickyStrategies?" design-section-inner--sticky-strategies":""}">
      ${i}
      ${e.stickyStrategies?as(e):""}
      ${(()=>{let r=!1;return s.map((l,n)=>{const d=!!(e.stickyStrategies&&l.subtitle&&!r);return d&&(r=!0),`
      <div class="design-section-group${n>0?" design-section-group--spaced":""}">
        ${ns(e,l,n,{isStickyHeader:d})}
        <div class="design-section-group__slides">
          ${l.slides.map(({slide:p,slideIndex:c,header:o})=>{var _;const h=(_=o==null?void 0:o.strategies)==null?void 0:_[0],b=e.stickyStrategies?`
            data-design-slide
            data-sticky-subtitle="${Pt((o==null?void 0:o.subtitle)??"")}"${e.stickyMode==="invite-title"?"":`
            data-sticky-label="${Pt((h==null?void 0:h.label)??"")}"
            data-sticky-strategy="${Pt((h==null?void 0:h.text)??"")}"`}`:"";return`
          <div
            class="design-slide design-slide--grouped"
            id="${t}-slide-${c}"${b}
          >
            ${ea(p,o)}
          </div>`}).join("")}
        </div>
      </div>`}).join("")})()}
    </div>
  `}function os(e){return e.subtitle||"效果总览"}function ps(e,t){const a=sa(e),s=e.designSectionTitle?`
      <div class="design-section-heading">
        <h3 class="project-content-title">${e.designSectionTitle}</h3>
      </div>`:"",i=`
    <nav class="design-section-catalog" aria-label="方案策略目录">
      <p class="design-section-catalog__eyebrow">策略目录</p>
      <div class="design-section-catalog__groups">
        ${a.map(l=>{const n=os(l);return`
        <div class="design-section-catalog__group">
          <a href="#${`${t}-slide-${l.slides[0].slideIndex}`}" class="design-section-catalog__group-link">${n}</a>
          ${l.slides.length>1?`
          <ul class="design-section-catalog__items">
            ${l.slides.map(({slideIndex:p})=>`
              <li>
                <a href="#${t}-slide-${p}" class="design-section-catalog__item-link">
                  方案 ${p+1}
                </a>
              </li>`).join("")}
          </ul>`:""}
        </div>`}).join("")}
      </div>
    </nav>`,r=`
    <div class="design-section-stream">
      ${e.slides.map((l,n)=>{var c;const d=(c=e.designHeaders)==null?void 0:c[n],p=d&&d.maskHeader!==!1;return`
      <figure
        id="${t}-slide-${n}"
        class="design-section-stream__figure project-section__figure project-section__figure--design"
      >
        ${ta(l,p)}
      </figure>`}).join("")}
    </div>`;return`
    <div class="design-section-inner design-section-inner--catalog project-content-inner">
      ${s}
      ${i}
      ${r}
    </div>
  `}function ds(e,t,a,s){return`
    <div class="design-slide">
      ${s?us(e,s,a):""}
      ${ea(t,s)}
    </div>
  `}function cs(e,t,a){return e.designLayout==="grouped"?ls(e,t):e.designLayout==="catalog"?ps(e,t):`
    <div class="design-section-inner project-content-inner">
      ${e.designSectionTitle?`
      <div class="design-section-heading">
        <h3 class="project-content-title">${e.designSectionTitle}</h3>
      </div>`:""}
      ${e.slides.map((i,r)=>{var n;const l=(n=e.designHeaders)==null?void 0:n[r];return ds(e,i,r,l)}).join("")}
    </div>
  `}function us(e,t,a){var c,o;if(!t)return"";const s=e.designHeaders,i=a>0?s[a-1]:null,r=!i||t.subtitle!==i.subtitle,l=!!e.designSectionTitle;if(!t.subtitle&&!((c=t.strategies)!=null&&c.length)||!r&&!((o=t.strategies)!=null&&o.length))return"";const n=(t.strategies||[]).map(h=>`
      <p class="design-section-header__strategy-line">${h.label}：${h.text}</p>
    `).join(""),d=["design-section-header",!l&&a===0?"design-section-header--lead":r?"design-section-header--group-start":"design-section-header--compact"].join(" "),p=r?l?t.subtitle?`<p class="design-section-header__group-title">${t.subtitle}</p>`:"":`
      <div class="design-section-header__title-line">
        <h3 class="project-content-title">${e.label}</h3>
        ${t.subtitle?`<p class="project-content-subtitle">${t.subtitle}</p>`:""}
      </div>`:t.subtitle?`<p class="design-section-header__subtitle-continued">${t.subtitle}</p>`:"";return`
    <div class="${d}">
      ${p}
      ${n}
    </div>
  `}function gs(e){const t=e.backgroundPanel;if(!t)return"";if(t.layout==="help-journey")return ki(e);if(t.layout==="pdp-goals")return vs(e);const a=t.goals.map(r=>`
      <div class="background-panel__goal">
        <h4 class="background-panel__goal-title">${r.title}</h4>
        <p class="background-panel__goal-text">${r.text}</p>
      </div>
    `).join(""),s=t.strategySteps.map(r=>`
      <div class="background-panel__step">
        <div class="background-panel__step-head">
          <span class="background-panel__step-index">${r.index}</span>
          <h4 class="background-panel__step-title">${r.title}</h4>
        </div>
        <ul class="background-panel__step-list">
          ${r.items.map(l=>`<li>${l}</li>`).join("")}
        </ul>
      </div>
    `).join(""),i=t.principles.map(r=>`
      <div class="background-panel__principle">
        <h4 class="background-panel__principle-title">${r.title}</h4>
        <ul class="background-panel__principle-list">
          ${r.items.map(l=>`<li>${l}</li>`).join("")}
        </ul>
      </div>
    `).join("");return`
    <div class="background-panel">
      <div class="background-panel__inner project-content-inner">
        ${dt(e)}
        <header class="background-panel__head reveal">
          <span class="background-panel__index">${t.index}</span>
          <h3 class="background-panel__title">${t.title}</h3>
        </header>
        ${e.background?`<p class="background-panel__intro reveal">${e.background}</p>`:""}
        <div class="background-panel__goals reveal">
          ${a}
        </div>
        <div class="background-panel__strategy reveal">
          <div class="background-panel__strategy-label">${t.strategyLabel}</div>
          <div class="background-panel__strategy-steps">
            ${s}
          </div>
        </div>
        <section class="background-panel__section reveal">
          <h4 class="background-panel__section-title">设计原则</h4>
          <div class="background-panel__principles">
            ${i}
          </div>
        </section>
        <section class="background-panel__section reveal">
          <h4 class="background-panel__section-title">关键策略</h4>
          <p class="background-panel__key-strategies">${t.keyStrategies.join(" | ")}</p>
        </section>
      </div>
    </div>
  `}function hs(e){const t=e.heroShowcase||[],a=["pdp-hero__device--flowers","pdp-hero__device--food"],s=t.length>=2?`
      <div class="pdp-hero__showcase reveal">
        <div class="pdp-hero__showcase-bg" aria-hidden="true">
          <span class="pdp-hero__orb pdp-hero__orb--pink"></span>
          <span class="pdp-hero__orb pdp-hero__orb--warm"></span>
          <span class="pdp-hero__orb pdp-hero__orb--accent-soft"></span>
        </div>
        ${t.map((i,r)=>`
        <figure class="pdp-hero__device ${a[r]||""}">
          <img src="${i.src}" alt="${i.alt}" loading="eager" />
        </figure>`).join("")}
        <span class="pdp-hero__float pdp-hero__float--grid" aria-hidden="true"></span>
        <span class="pdp-hero__float pdp-hero__float--accent" aria-hidden="true"></span>
      </div>
    `:"";return`
    <div class="pdp-hero">
      <div class="pdp-hero__grid project-content-inner">
        <div class="pdp-hero__copy reveal">
          <p class="pdp-hero__eyebrow">${e.category}</p>
          <h2 class="pdp-hero__title">商详<span class="pdp-highlight">改版</span>优化</h2>
          ${ia(e.heroTags)}
          <p class="pdp-hero__summary">${e.summary}</p>
        </div>
        ${s}
      </div>
    </div>
  `}function dt(e){var t;return(t=e.heroShowcase)!=null&&t.length?'<span class="subnav-reveal-marker" data-subnav-reveal-trigger aria-hidden="true"></span>':""}function ia(e){return e!=null&&e.length?`
    <ul class="project-hero__tags" aria-label="项目关键词">
      ${e.map(t=>`<li class="project-hero__tag">${t}</li>`).join("")}
    </ul>
  `:""}function ms(e){const t=e.heroShowcase||[],a=["invite-hero__device--front","invite-hero__device--back"],s=t.map((i,r)=>`
      <figure class="invite-hero__device ${a[r]||""} reveal">
        <img src="${i.src}" alt="${i.alt}" loading="${r===0?"eager":"lazy"}" />
      </figure>
    `).join("");return`
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
          <p class="invite-hero__eyebrow">${e.category}</p>
          <h2 class="invite-hero__title">${e.title}</h2>
          ${ia(e.heroTags)}
          <p class="invite-hero__summary">${e.summary}</p>
        </header>
        ${t.length?`<div class="invite-hero__showcase">${s}</div>`:""}
      </div>
    </div>
  `}function fs(e){const t=e.heroShowcase||[],a=t.map((s,i)=>`
      <figure class="reverse-hero__screen reveal">
        <img src="${s.src}" alt="${s.alt}" loading="${i<2?"eager":"lazy"}" />
      </figure>
    `).join("");return`
    <div class="reverse-hero">
      <div class="reverse-hero__inner project-content-inner">
        <header class="reverse-hero__head reveal">
          <p class="reverse-hero__eyebrow">${e.category}</p>
          <h2 class="reverse-hero__title">逆向链路<span class="reverse-hero__highlight">体验</span>优化</h2>
          <p class="reverse-hero__summary">${e.summary}</p>
        </header>
        ${t.length?`<div class="reverse-hero__showcase">${a}</div>`:""}
      </div>
    </div>
  `}function vs(e){const t=e.backgroundPanel;if(!t)return"";const a=t.goals.map(s=>`
      <article class="pdp-glass-card reveal">
        <h4 class="pdp-glass-card__title">${s.title}</h4>
        <p class="pdp-glass-card__text">${s.text}</p>
      </article>
    `).join("");return`
    <div class="pdp-panel pdp-panel--background">
      <div class="pdp-panel__inner project-content-inner">
        ${dt(e)}
        <header class="pdp-section-head reveal">
          <span class="pdp-section-head__index">${t.index}</span>
          <h3 class="pdp-section-head__title">${t.title}</h3>
        </header>
        <div class="pdp-panel__body reveal">
          ${e.background?`<p class="pdp-panel__intro">${e.background}</p>`:""}
          <div class="pdp-glass-grid">
            ${a}
          </div>
        </div>
      </div>
    </div>
  `}function _s(e){var t;return(t=e==null?void 0:e.chips)!=null&&t.length?`
    <div class="pdp-category-notes reveal">
      <span class="pdp-category-notes__label">${e.label}</span>
      <div class="pdp-category-notes__chips">
        ${e.chips.map(a=>`<span class="pdp-category-chip">${a}</span>`).join("")}
      </div>
    </div>
  `:""}function bs(e,{compact:t=!1}={}){if(!e)return"";const a=t?" pdp-framework__strategy-media--compact":"",s=e.type==="duo-after"?" pdp-framework__strategy-media--row":" pdp-framework__strategy-media--stack";return e.type==="danmaku"?ys(e.danmaku):e.type==="duo-after"?`
      <div class="pdp-framework__strategy-media pdp-framework__strategy-media--duo${a}${s}">
        ${e.shots.map(i=>`
          <figure class="pdp-framework__strategy-shot">
            <figcaption class="pdp-framework__strategy-shot-label">${i.label}</figcaption>
            <div class="pdp-framework__strategy-shot-frame">
              <img src="${i.src}" alt="${i.alt}" loading="lazy" decoding="async" draggable="false" />
            </div>
          </figure>`).join("")}
      </div>`:e.type==="compare"?`
      <div class="pdp-framework__strategy-media pdp-framework__strategy-media--compare${a}">
        ${["before","after"].map(i=>{const r=e[i];return r?`
          <figure class="pdp-framework__strategy-shot pdp-framework__strategy-shot--${i}">
            <figcaption class="pdp-framework__strategy-shot-label">${r.label}</figcaption>
            <div class="pdp-framework__strategy-shot-frame">
              <img src="${r.src}" alt="${r.alt}" loading="lazy" decoding="async" draggable="false" />
            </div>
          </figure>`:""}).join("")}
      </div>`:e.type==="gallery"?`
      <div class="pdp-framework__strategy-media pdp-framework__strategy-media--gallery${a}${s}">
        ${e.shots.map(i=>`
          <figure class="pdp-framework__strategy-shot${i.placeholder?" pdp-framework__strategy-shot--placeholder":""}">
            ${i.label?`<figcaption class="pdp-framework__strategy-shot-label">${i.label}</figcaption>`:""}
            ${i.placeholder?`
            <div class="pdp-framework__strategy-shot-frame pdp-framework__strategy-shot-frame--slot">
              <span class="pdp-framework__strategy-slot-title">${i.label}</span>
              <span class="pdp-framework__strategy-slot-note">示例图预留</span>
            </div>`:`
            <div class="pdp-framework__strategy-shot-frame">
              <img src="${i.src}" alt="${i.alt}" loading="lazy" decoding="async" draggable="false" />
            </div>`}
          </figure>`).join("")}
      </div>`:e.type==="single"?`
      <div class="pdp-framework__strategy-media pdp-framework__strategy-media--single${a}${s}">
        <figure class="pdp-framework__strategy-shot">
          <div class="pdp-framework__strategy-shot-frame">
            <img src="${e.shot.src}" alt="${e.shot.alt}" loading="lazy" decoding="async" draggable="false" />
          </div>
        </figure>
      </div>`:e.type==="placeholder"?`
      <div class="pdp-framework__strategy-media pdp-framework__strategy-media--placeholder${a}${s}">
        <div class="pdp-framework__strategy-shot-frame pdp-framework__strategy-shot-frame--slot">
          <span class="pdp-framework__strategy-slot-title">${e.label||"坑位预留"}</span>
          ${e.note?`<span class="pdp-framework__strategy-slot-note">${e.note}</span>`:""}
        </div>
      </div>`:""}function ys(e){var t;return(t=e==null?void 0:e.items)!=null&&t.length?`
    <div class="pdp-framework__strategy-media pdp-framework__strategy-media--danmaku pdp-framework__strategy-media--stack pdp-framework__strategy-media--compact">
      <div class="pdp-framework__danmaku-demo" data-pdp-framework-danmaku-demo>
        ${Lt(e)}
      </div>
    </div>`:""}function $s(e){e.querySelectorAll("[data-pdp-framework-danmaku-demo]").forEach(t=>{if(t.dataset.pdpFrameworkDanmakuBound==="true")return;t.dataset.pdpFrameworkDanmakuBound="true";const a=()=>{t.style.setProperty("--pdp-scheme-device-w",`${t.clientWidth}px`)};a(),typeof ResizeObserver<"u"&&new ResizeObserver(a).observe(t)})}function ws(){return`
    <span class="pdp-framework__point-icon" aria-hidden="true">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
        <path d="M20 6.5 10.5 16 7 12.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>`}function xs(e){const t=e.media?bs(e.media,{compact:!0}):"";return`
    <article class="pdp-framework__point">
      <div class="pdp-framework__point-main">
        ${ws()}
        <div class="pdp-framework__point-copy">
          <h6 class="pdp-framework__point-title">${e.title}</h6>
          ${e.text?`<p class="pdp-framework__point-text">${e.text}</p>`:""}
        </div>
      </div>
      ${t?`<div class="pdp-framework__point-media">${t}</div>`:""}
    </article>`}function Ps(e){return(e.strategies||[]).map(t=>xs(t)).join("")}function ks(e){return`
    <div class="pdp-framework__hero-visual">
      <div class="pdp-framework__hero-shell">
        <img
          class="pdp-framework__hero-shot"
          src="${e.hero.src}"
          alt="${e.hero.alt}"
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </div>
    </div>`}function Ss(e){var l,n;const t=e.heroDanmaku,a=e.nutrition,s=e.review,i=(n=(l=t==null?void 0:t.danmaku)==null?void 0:l.items)!=null&&n.length?`<div class="pdp-framework__stagger-danmaku" data-pdp-framework-danmaku-demo>${Lt(t.danmaku)}</div>`:"",r=a.placeholder?`
            <div class="pdp-framework__stagger-slot">
              <span class="pdp-framework__stagger-slot-title">${a.label}</span>
              <span class="pdp-framework__stagger-slot-note">示例图预留</span>
            </div>`:`
            <img src="${a.src}" alt="${a.alt}" loading="lazy" decoding="async" draggable="false" />`;return`
    <div class="pdp-framework__stagger-visual">
      <div class="pdp-framework__stagger-stage">
        <figure class="pdp-framework__stagger-card pdp-framework__stagger-card--hero-danmaku">
          <img src="${t.src}" alt="${t.alt}" loading="lazy" decoding="async" draggable="false" />
          ${i}
        </figure>
        <figure class="pdp-framework__stagger-card pdp-framework__stagger-card--nutrition">
          ${r}
        </figure>
        <figure class="pdp-framework__stagger-card pdp-framework__stagger-card--review">
          <img src="${s.src}" alt="${s.alt}" loading="lazy" decoding="async" draggable="false" />
        </figure>
      </div>
    </div>`}function Hs(e){const a=e.layout==="hero-list"?ks(e):Ss(e.visual),s=`
    <div class="pdp-framework__part-copy">
      <div class="pdp-framework__part-head">
        <span class="pdp-framework__part-badge">${e.strategyBadge}</span>
        <h5 class="pdp-framework__part-title">${e.strategyTitle}</h5>
      </div>
      <div class="pdp-framework__point-list">${Ps(e)}</div>
    </div>`;return`
    <section
      class="pdp-framework__part pdp-framework__part--${e.layout}"
      data-pdp-framework-part="${e.id}"
      aria-label="${e.strategyTitle}"
    >
      ${a}
      ${s}
    </section>`}function Ts(e){if(!e)return"";const t=(e.parts||[]).map(a=>Hs(a)).join("");return`
    <section
      class="pdp-framework reveal"
      data-pdp-framework
      aria-label="${e.title||"信息层级改版总览"}"
    >
      ${e.title?`<h5 class="pdp-framework__title">${e.title}</h5>`:""}
      ${e.subtitle?`<p class="pdp-framework__subtitle">${e.subtitle}</p>`:""}
      <div class="pdp-framework__layout pdp-framework__layout--parts">
        ${t}
      </div>
    </section>
  `}function Ls(e,t){const a=t.points.map(s=>{const i=typeof s=="string"?s:s.title,r=typeof s=="string"?"":s.detail||"";return`
              <li class="pdp-before-problems__category-issue">
                <p class="pdp-before-problems__category-issue-title">${i}</p>
                ${r?`<p class="pdp-before-problems__category-issue-detail">${r}</p>`:""}
              </li>`}).join("");return`
            <div class="pdp-before-problems__category-block" data-pdp-before-problems-category="${e}">
              <p class="pdp-before-problems__category-eyebrow">${t.eyebrow||""}</p>
              <ul class="pdp-before-problems__category-issues">
                ${a}
              </ul>
            </div>`}function Rs(e){var n;if(!((n=e==null?void 0:e.panels)!=null&&n.default))return"";const{panels:t,shots:a=[]}=e,s=[["milk",t.milk],["flowers",t.flowers]].filter(([,d])=>d),i=t.default.underSectionIndex??2,r=t.default.sections.map((d,p)=>{const c=p===i&&s.length?`<div class="pdp-before-problems__category-extras" data-pdp-before-problems-extras>
              <div class="pdp-before-problems__category-extras-inner">
              ${s.map(([o,h])=>Ls(o,h)).join("")}
              </div>
            </div>`:"";return`
          <div class="pdp-before-problems__section" data-pdp-before-problems-section="${p}">
            <span class="pdp-before-problems__section-index">0${p+1}</span>
            <div class="pdp-before-problems__section-body">
              <h6 class="pdp-before-problems__section-title">${d.title}</h6>
              <p class="pdp-before-problems__section-subtitle">${d.subtitle||""}</p>
              <ul class="pdp-before-problems__section-points">
                ${d.points.map(o=>`<li>${o}</li>`).join("")}
              </ul>
              ${c}
            </div>
          </div>`}).join(""),l=a.map(d=>`
        <figure
          class="pdp-before-problems__shot"
          data-pdp-before-problems-shot="${d.id}"
          tabindex="0"
          role="button"
          aria-label="${d.label} · 查看${d.label}体验问题"
        >
          <img src="${d.src}" alt="${d.alt}" loading="lazy" decoding="async" draggable="false" />
        </figure>`).join("");return`
    <section class="pdp-before-problems reveal" data-pdp-before-problems aria-label="${e.title}">
      <h5 class="pdp-before-problems__title">${e.title}</h5>
      <div class="pdp-before-problems__stage" data-pdp-before-problems-stage>
        <div class="pdp-before-problems__copy" data-pdp-before-problems-copy>
          <div class="pdp-before-problems__sections">
            ${r}
          </div>
        </div>
        <div class="pdp-before-problems__shots" data-pdp-before-problems-shots>
          <div class="pdp-before-problems__shots-rail">
            ${l}
          </div>
        </div>
      </div>
    </section>`}function Es(){const e=document.querySelector("[data-pdp-before-problems]");if(!e)return;const t=e.querySelector("[data-pdp-before-problems-stage]"),a=e.querySelector("[data-pdp-before-problems-copy]"),s=e.querySelector("[data-pdp-before-problems-shots]"),i=e.querySelector("[data-pdp-before-problems-extras]"),r=[...e.querySelectorAll("[data-pdp-before-problems-category]")],l=[...e.querySelectorAll("[data-pdp-before-problems-shot]")];if(!t||!s)return;const n=d=>{const p=d!=="default";i==null||i.classList.toggle("is-active",p),r.forEach(c=>{const o=p&&c.dataset.pdpBeforeProblemsCategory===d;c.classList.toggle("is-visible",o)}),l.forEach(c=>{c.classList.toggle("is-active",p&&c.dataset.pdpBeforeProblemsShot===d)})};l.forEach(d=>{const p=d.dataset.pdpBeforeProblemsShot;d.addEventListener("mouseenter",()=>n(p)),d.addEventListener("focus",()=>n(p))}),s.addEventListener("mousemove",d=>{d.target.closest("[data-pdp-before-problems-shot]")||n("default")}),a==null||a.addEventListener("mouseenter",()=>n("default")),t.addEventListener("mouseleave",d=>{t.contains(d.relatedTarget)||n("default")}),n("default")}function js(e){return e?`
    <section class="pdp-design-overview reveal" aria-labelledby="pdp-design-overview">
      <header class="pdp-design-overview__head">
        <h4 class="pdp-design-overview__title" id="pdp-design-overview">${e.title}</h4>
        ${e.lead?`<p class="pdp-design-overview__lead">${e.lead}</p>`:""}
      </header>
      <div class="pdp-design-overview__grid">
        ${e.blocks.map(t=>`
        <article class="pdp-design-overview__card">
          <h5 class="pdp-design-overview__card-title">${t.title}</h5>
          ${t.text?`<p class="pdp-design-overview__text">${t.text}</p>`:`
          <ul class="pdp-design-overview__list">
            ${t.items.map(a=>`<li>${a}</li>`).join("")}
          </ul>`}
        </article>`).join("")}
      </div>
    </section>
  `:""}function Ot(e,t="pdp-scheme-explorer__demo-hotspot pdp-demo-hotspot",a=!1){if(!e)return"";const{top:s,left:i,width:r,height:l,label:n,target:d}=e;return`
    <button
      type="button"
      class="${t}"
      data-pdp-scheme-demo-target="${d}"
      style="top:${s}%;left:${i}%;width:${r}%;height:${l}%;"
      aria-label="${n}"
      ${a?"hidden":""}
    >
      <span class="visually-hidden">${n}</span>
    </button>`}function ge(e){var t;return!!((t=e==null?void 0:e.segments)!=null&&t.length)}function Lt(e){var Pe;if(!((Pe=e==null?void 0:e.items)!=null&&Pe.length))return"";const t=e.designWidth??750,a=e.designHeight??1024,s=e.topPx??208,i=e.leftPx??0,r=e.assetScale??2,l=e.assetWidthPx??0,n=e.assetHeightPx??0,d=e.barWidthPx??(l?l/r:512),p=e.barHeightPx??(n?n/r:142),c=e.barImage??"",o=e.pillItemHeightPx??e.itemHeightPx??40,h=e.maxWidthPx??e.widthPx??204,b=e.pillGapPx??e.itemGapPx??4*750/260,_=e.mixedGapPx??e.itemGapPx??b,P=e.groupGapPx??_,R=e.visibleCount??2,E=e.textPaddingXPx??16,T=e.textPaddingYPx??3,L=e.fontSizePx??24,j=e.pillLineHeightPx??34,k=e.imageLineHeightPx??e.lineHeightPx??30,$=e.segmentOffsetYPx??0,f=e.bubbleIcon||"/images/projects/pdp-p1-scheme-danmaku-bubble.png",w=e.items.some(ge),I=e.items.some(B=>!ge(B)),C=w?Math.max(o,p):o,Y=w?Math.max(h,d):h,g=B=>ge(B)?p:o,m=(B,A)=>A?ge(B)!==ge(A)?_:b:0,v=e.items,x=v.length,W=B=>{const A=B%x,V=(A+1)%x;return V===0&&ge(v[x-1])?P:m(v[A],v[V])},O=(B,A)=>A===0&&B===x-1&&ge(v[B])?P:m(v[B],v[A]),z=()=>v.reduce((B,A,V)=>B+g(A)+W(V),0),Z=()=>{if(x===0||R<=0)return 0;if(x===1)return g(v[0]);let B=0;for(let A=0;A<x;A+=1){let V=0;for(let U=0;U<R;U+=1){const K=v[(A+U)%x];if(V+=g(K),U<R-1){const me=(A+U)%x,fe=(A+U+1)%x;V+=O(me,fe)}}B=Math.max(B,V)}return B},Q=z(),he=Z(),ye=[...v,...v],Ae=B=>{const A=B.segments??[],V=B.segmentOffsetYPx??$,U=A.map(K=>{const me=K.leftPx??0,fe=(K.topPx??0)+V,Me=K.widthPx??0,ke=K.fontWeight??400,Se=K.color??"#222426";return`
              <span
                class="pdp-scheme-explorer__danmaku-segment"
                style="
                  --pdp-seg-left-ratio: ${me/d};
                  --pdp-seg-top-ratio: ${fe/p};
                  --pdp-seg-w-ratio: ${Me/d};
                  --pdp-seg-color: ${Se};
                  --pdp-seg-weight: ${ke};
                "
              >${K.text??""}</span>`}).join("");return`
            <div class="pdp-scheme-explorer__danmaku-bubble pdp-scheme-explorer__danmaku-bubble--image">
              <img
                class="pdp-scheme-explorer__danmaku-bubble-bg"
                src="${c}"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
              />
              ${U}
            </div>`},$e=B=>{const A=typeof B=="string"?B:B.text;return`
            <div class="pdp-scheme-explorer__danmaku-bubble pdp-scheme-explorer__danmaku-bubble--pill">
              <span class="pdp-scheme-explorer__danmaku-bubble-icon" aria-hidden="true">
                <img src="${f}" alt="" loading="lazy" decoding="async" draggable="false" />
              </span>
              <span class="pdp-scheme-explorer__danmaku-bubble-text">${A}</span>
            </div>`},we=(B,A=0)=>(ge(B)?Ae(B):$e(B)).replace('<div class="pdp-scheme-explorer__danmaku-bubble',`<div style="--pdp-bubble-mb-ratio: ${A/t};" class="pdp-scheme-explorer__danmaku-bubble`),xe=[w?"pdp-scheme-explorer__danmaku--image":"",w&&I?"pdp-scheme-explorer__danmaku--mixed":""].filter(Boolean).join(" ");return`
      <div
        class="pdp-scheme-explorer__danmaku${xe?` ${xe}`:""}"
        aria-hidden="true"
        style="
          --pdp-danmaku-top: ${s/a*100}%;
          --pdp-danmaku-left: ${i/t*100}%;
          --pdp-danmaku-max-w: ${Y/t*100}%;
          --pdp-danmaku-viewport-h-ratio: ${he/t};
          --pdp-danmaku-cycle-h-ratio: ${Q/t};
          --pdp-danmaku-item-h-ratio: ${o/t};
          --pdp-danmaku-max-item-h-ratio: ${C/t};
          --pdp-danmaku-bar-w-ratio: ${d/t};
          --pdp-danmaku-bar-h-ratio: ${p/t};
          --pdp-danmaku-pill-gap-ratio: ${b/t};
          --pdp-danmaku-mixed-gap-ratio: ${_/t};
          --pdp-danmaku-group-gap-ratio: ${P/t};
          --pdp-danmaku-font-ratio: ${L/t};
          --pdp-danmaku-pill-line-ratio: ${j/t};
          --pdp-danmaku-image-line-ratio: ${k/t};
          --pdp-danmaku-text-px: ${E/t};
          --pdp-danmaku-text-py: ${T/t};
        "
      >
        <div class="pdp-scheme-explorer__danmaku-viewport">
          <div class="pdp-scheme-explorer__danmaku-track">
            ${ye.map((B,A)=>we(B,W(A))).join("")}
          </div>
        </div>
      </div>`}function Bs(e){var r,l;const t=e.demo,a=Lt(e.danmaku);if(!(t!=null&&t.review))return`
      <div class="pdp-scheme-explorer__device${a?" pdp-scheme-explorer__device--danmaku":""}">
        <img src="${e.after.src}" alt="${e.after.alt}" loading="lazy" />
        ${a}
      </div>`;const{review:s,heroHeight:i=54}=t;return`
    <div
      class="pdp-scheme-explorer__device pdp-scheme-explorer__device--demo"
      data-pdp-scheme-demo
      style="--pdp-demo-hero-h: ${i}%"
    >
      <img
        class="pdp-scheme-explorer__demo-base"
        src="${e.after.src}"
        alt="${e.after.alt}"
        loading="lazy"
      />
      <div class="pdp-scheme-explorer__demo-hero" data-pdp-scheme-demo-hero aria-hidden="true">
        <img
          class="pdp-scheme-explorer__demo-hero-img"
          src="${s.src}"
          alt="${s.alt}"
          loading="lazy"
        />
      </div>
      ${Ot((r=t.hotspots)==null?void 0:r.toReview)}
      ${Ot((l=t.hotspots)==null?void 0:l.toMain,"pdp-scheme-explorer__demo-hotspot pdp-scheme-explorer__demo-hotspot--back pdp-demo-hotspot",!0)}
      ${a}
      <span class="pdp-scheme-explorer__demo-hint" aria-hidden="true">点击「评价」切换</span>
    </div>`}function Is(e,t){if(!e||!(t!=null&&t.length))return"";const a=t.map((r,l)=>`
        <button
          type="button"
          class="pdp-scheme-explorer__tab pdp-scheme-explorer__tab--${l}${l===0?" is-active":""}"
          data-pdp-scheme-tab="${l}"
          data-pdp-scheme-category="${r.category}"
          role="tab"
          aria-selected="${l===0?"true":"false"}"
          tabindex="${l===0?"0":"-1"}"
        >
          <span class="pdp-scheme-explorer__tab-label">${r.category}</span>
        </button>`).join(""),s=t.map((r,l)=>`
        <figure
          class="pdp-scheme-explorer__shot pdp-scheme-explorer__shot--before${l===0?" is-active":""}"
          data-pdp-scheme-before="${l}"
          aria-hidden="${l===0?"false":"true"}"
        >
          <div class="pdp-scheme-explorer__device">
            <img src="${r.before.src}" alt="${r.before.alt}" loading="lazy" />
          </div>
        </figure>`).join(""),i=t.map((r,l)=>`
        <figure
          class="pdp-scheme-explorer__shot pdp-scheme-explorer__shot--after${l===0?" is-active":""}"
          data-pdp-scheme-after="${l}"
          aria-hidden="${l===0?"false":"true"}"
        >
          ${Bs(r)}
        </figure>`).join("");return`
    <section class="pdp-scheme-explorer reveal" data-pdp-scheme-explorer aria-label="三类品类改版方案">
      <div class="pdp-scheme-explorer__layout">
        <figure class="pdp-scheme-explorer__column pdp-scheme-explorer__column--wireframe">
          <div class="pdp-scheme-explorer__shot-stack pdp-scheme-explorer__shot-stack--static">
            <div class="pdp-scheme-explorer__device">
              <img src="${e.src}" alt="${e.alt}" loading="lazy" />
            </div>
          </div>
        </figure>
        <figure class="pdp-scheme-explorer__column pdp-scheme-explorer__column--before">
          <figcaption class="pdp-scheme-explorer__column-label">Before</figcaption>
          <div class="pdp-scheme-explorer__shot-stack" data-pdp-scheme-before-stack>
            ${s}
          </div>
        </figure>
        <figure class="pdp-scheme-explorer__column pdp-scheme-explorer__column--after">
          <figcaption class="pdp-scheme-explorer__column-label pdp-scheme-explorer__column-label--after">After</figcaption>
          <div class="pdp-scheme-explorer__shot-stack" data-pdp-scheme-after-stack>
            ${i}
          </div>
        </figure>
        <div class="pdp-scheme-explorer__tabs" role="tablist" aria-label="品类切换">
          ${a}
        </div>
      </div>
    </section>`}function Ht(e,{split:t=!1,visualOnly:a=!1}={}){if(!(e!=null&&e.page)||!(e!=null&&e.sheet))return"";const{page:s,sheet:i,label:r="商详页 · 参数浮层",hint:l="悬停自动播放",hotspot:n={}}=e,d=(T,L)=>typeof T=="string"?T:`${(T??L)*100}%`,p=d(n.top,.555),c=d(n.left,.04),o=(n.width??.92)*100,h=(n.height??.088)*100,b=l?`<span class="pdp-digital-param-demo-wrap__hint">${l}</span>`:"",_=a?"":t?`<figcaption class="pdp-phase-two-strategy-example__label">${r}${b}</figcaption>`:`<p class="pdp-digital-param-demo-wrap__label">${r}${b}</p>`,P=`
          <div class="pdp-digital-param-demo__screen">
            ${ae(s,{className:"pdp-digital-param-demo__page",alt:""})}
            <button
              type="button"
              class="pdp-digital-param-demo__hotspot pdp-demo-hotspot pdp-demo-hotspot--ring-right"
              data-pdp-digital-param-trigger
              aria-label="展开商品参数浮层"
              style="top:${p};left:${c};width:${o}%;height:${h}%;"
            ></button>
          </div>
          <div class="pdp-digital-param-demo__overlay" data-pdp-digital-param-overlay aria-hidden="true">
            <div class="pdp-digital-param-demo__mask" aria-hidden="true"></div>
            <div class="pdp-digital-param-demo__sheet-wrap">
              ${ae(i,{className:"pdp-digital-param-demo__sheet",alt:""})}
            </div>
          </div>`,E=t||a?`
      <div class="pdp-screen-mockup pdp-screen-mockup--flat pdp-screen-mockup--design-flat${a?" pdp-screen-mockup--split-visual":""}">
        <div class="${a?"pdp-digital-param-demo__stage pdp-digital-param-demo__stage--visual":"pdp-digital-param-demo__stage"}">
          ${P}
        </div>
      </div>`:`
      <div class="pdp-digital-param-demo" data-pdp-digital-param-demo>
        <div class="pdp-digital-param-demo__stage">
          ${P}
        </div>
      </div>`;return a?E:t?`${_}${E}`:`
    <div class="pdp-digital-param-demo-wrap" data-pdp-digital-param-demo-card>
      ${_}
      ${E}
    </div>`}function Ve(e,{long:t=!1,flat:a=!1,designFlat:s=!1}={}){return`
    <div class="pdp-screen-mockup${t?" pdp-screen-mockup--long":""}${a?" pdp-screen-mockup--flat":""}${s?" pdp-screen-mockup--design-flat":""}">
      <div class="pdp-screen-mockup__viewport">
        <img src="${e.src}" alt="${e.alt}" loading="lazy" decoding="async" />
      </div>
    </div>`}function zt(e,t,{embedded:a=!1,hideHint:s=!1}={}){const{topNavRatio:i,tabBarRatio:r,bottomRatio:l,tabRevealRatio:n,stickyTabRatio:d,stickyNavRatio:p,ratioBase:c,tabs:o}=t,h=i??.069,b=r??.031,_=d??.17,P=p??h,R=o.map((T,L)=>`<button type="button" role="tab" class="pdp-scroll-mockup__tab${L===0?" is-active":""}" data-y-ratio="${T.yRatio}" aria-selected="${L===0?"true":"false"}">${T.label}</button>`).join(""),E=s?"":`
        <div class="pdp-scroll-mockup__hint" aria-hidden="true">
          <span class="pdp-scroll-mockup__hint-text">下滑浏览</span>
          <span class="pdp-scroll-mockup__hint-chevron"></span>
        </div>`;return`
    <div
      class="pdp-scroll-mockup${a?" pdp-scroll-mockup--embedded":""}"
      data-pdp-scroll-demo
      data-ratio-base="${c||"viewport"}"
      data-top-nav-ratio="${h}"
      data-tab-bar-ratio="${b}"
      data-bottom-ratio="${l}"
      data-tab-reveal-ratio="${n}"
      data-sticky-tab-ratio="${_}"
      data-sticky-nav-ratio="${P}"
    >
      <div class="pdp-screen-mockup__viewport pdp-scroll-mockup__viewport">
        <div class="pdp-scroll-mockup__scroller" tabindex="${a?"-1":"0"}" aria-label="${e.alt}">
          <img src="${e.src}" alt="" loading="lazy" decoding="async" draggable="false" />
        </div>
        <div class="pdp-scroll-mockup__chrome pdp-scroll-mockup__chrome--top" aria-hidden="true">
          <div class="pdp-scroll-mockup__chrome-nav">
            <img src="${e.src}" alt="" loading="lazy" decoding="async" draggable="false" data-pdp-scroll-chrome-nav />
          </div>
          <div class="pdp-scroll-mockup__chrome-tabs">
            <img src="${e.src}" alt="" loading="lazy" decoding="async" draggable="false" data-pdp-scroll-chrome-tabs />
          </div>
          <nav class="pdp-scroll-mockup__tabs" role="tablist" aria-label="页面模块" aria-hidden="true">
            ${R}
          </nav>
        </div>
        <div class="pdp-scroll-mockup__chrome pdp-scroll-mockup__chrome--bottom" aria-hidden="true">
          <img src="${e.src}" alt="" loading="lazy" decoding="async" draggable="false" data-pdp-scroll-chrome-bottom />
        </div>
        ${E}
      </div>
    </div>`}function As(e,{compact:t=!1,index:a=null}={}){const s=a!=null?`<span class="pdp-strategy-card__index">${String(a+1).padStart(2,"0")}</span>`:"";return`
    <article class="pdp-strategy-card${t?" pdp-strategy-card--compact":""}">
      <header class="pdp-strategy-card__head">
        ${s}
        <h6 class="pdp-strategy-card__title">${e.title}</h6>
      </header>
      <p class="pdp-strategy-card__text">${e.text}</p>
    </article>`}function ra(e,{split:t=!1,textOnly:a=!1,asRowContent:s=!1,index:i=null}={}){var p;if(typeof e=="string"){const c=`<div class="pdp-strategy-note"><p>${e}</p></div>`;return s?`<div class="pdp-phase-two-strategy-row__body">${c}</div>`:t?`<article class="pdp-phase-two-strategy-module">${c}</article>`:`<li class="pdp-phase-two-strategy-item">${c}</li>`}const r=!a&&((p=e.examples)!=null&&p.length)?t?e.examples.map(c=>{const o=c.flowersRecommendDemo||c.digitalRecommendDemo;if(o){const h=!!c.digitalRecommendDemo,b=h?"pdp-phase-two-strategy-example--digital":"pdp-phase-two-strategy-example--flowers",_=h?"配色切换":"同店推荐切换";return`
          <figure
            class="pdp-phase-two-strategy-example pdp-phase-two-strategy-example--pair ${b}"
            data-pdp-flowers-recommend-card
            tabindex="0"
            aria-label="${c.alt||c.label} · ${_}"
          >
            <figcaption class="pdp-phase-two-strategy-example__label">${c.label}<span class="pdp-phase-two-strategy-example__hint">悬停自动播放</span></figcaption>
            ${Da(o)}
          </figure>`}return`
          <figure class="pdp-phase-two-strategy-example pdp-phase-two-strategy-example--pair">
            <figcaption class="pdp-phase-two-strategy-example__label">${c.label}</figcaption>
            <img class="pdp-phase-two-strategy-example__img" src="${c.src}" alt="${c.alt||c.label}" loading="lazy" decoding="async" />
          </figure>`}).join(""):`
        <div class="pdp-phase-two-strategy-examples">
          ${e.examples.map(c=>`
          <figure class="pdp-phase-two-strategy-example">
            <figcaption class="pdp-phase-two-strategy-example__label">${c.label}</figcaption>
            ${Ve({src:c.src,alt:c.alt||c.label},{flat:!0})}
          </figure>`).join("")}
        </div>`:"",l=!a&&e.interactiveDemo?t?`
        <div class="pdp-phase-two-strategy-examples">
          <figure class="pdp-phase-two-strategy-example pdp-phase-two-strategy-example--interactive" data-pdp-digital-param-demo-card>
            ${Ht(e.interactiveDemo,{split:!0})}
          </figure>
        </div>`:`<div class="pdp-phase-two-strategy-interactive">${Ht(e.interactiveDemo)}</div>`:"",n=As(e,{compact:s,index:i}),d=s?`${n}${r}`:`${n}${r}${l}`;return s?`<div class="pdp-phase-two-strategy-row__body">${d}</div>`:t?`<article class="pdp-phase-two-strategy-module">${d}</article>`:`<li class="pdp-phase-two-strategy-item">${d}</li>`}function Ms(e){var i,r,l,n;if(e.interactiveDemo)return"";const t=(i=e.category)==null?void 0:i.comparison,a=((r=t==null?void 0:t.before)==null?void 0:r.label)||"Before",s=((l=t==null?void 0:t.afterStatic)==null?void 0:l.label)||((n=t==null?void 0:t.afterInteractive)==null?void 0:n.label)||"After";return`
            <span class="pdp-phase-two-compare__label">${a}</span>
            <span class="pdp-phase-two-compare__label pdp-phase-two-compare__label--after">${s}</span>`}function Fs(e){return e.interactiveDemo?`
        <div class="pdp-phase-two-split-visual pdp-phase-two-split-visual--interactive">
          <figure class="pdp-phase-two-split-visual__figure" data-pdp-digital-param-demo-card aria-label="${e.interactiveDemo.label||"商详页 · 参数浮层"}">
            ${Ht(e.interactiveDemo,{split:!0,visualOnly:!0})}
          </figure>
        </div>`:e.category?Tt(e.category,{hideHead:!0,hideLabels:!0}):""}function Cs(e){const t=ra(e.strategy,{split:!0,textOnly:!!e.interactiveDemo,asRowContent:!0}),a=Ms(e),s=a?`<div class="pdp-phase-two-split-unit__labels" aria-hidden="true">${a}</div>`:"";return`
        <article class="pdp-phase-two-split-unit reveal">
          <div class="pdp-phase-two-split-unit__copy">
            ${t}
          </div>
          <div class="pdp-phase-two-split-unit__showcase">
            ${s}
            <div class="pdp-phase-two-split-unit__visuals${e.interactiveDemo?" pdp-phase-two-split-unit__visuals--demo":""}">
              ${Fs(e)}
            </div>
          </div>
        </article>`}function Nt(e,{hideLabel:t=!1}={}){const a=(e==null?void 0:e.label)||"Before";return`
    <figure class="pdp-phase-two-compare__column pdp-phase-two-compare__column--before">
      ${t?"":`<figcaption class="pdp-phase-two-compare__label">${a}</figcaption>`}
      <div class="pdp-screen-mockup">
        <div class="pdp-screen-mockup__viewport">
          <div class="pdp-compare-placeholder" aria-label="${(e==null?void 0:e.alt)||"改版前 · 待补充"}">
            <span class="pdp-compare-placeholder__eyebrow">${a}</span>
            <span class="pdp-compare-placeholder__note">改版前 · 待补充</span>
          </div>
        </div>
      </div>
    </figure>`}function Ds(e,{embedded:t=!1}={}){if(!(e!=null&&e.src))return"";const a=e.label||"鲜花商详 · 信任背书交互",s=e.hint||"悬停自动播放",i=t?"":`<p class="pdp-trust-interactive-demo__hint">${s}</p>`;return`
    <div class="pdp-trust-interactive-demo${t?" pdp-trust-interactive-demo--embedded":""}" data-pdp-trust-interactive>
      ${i}
      <iframe
        class="pdp-trust-interactive-demo__frame"
        src="${e.src}"
        title="${a}"
        loading="lazy"
        tabindex="0"
      ></iframe>
    </div>`}function qs(e){var s,i,r;if(!e)return"";const t=(s=e.before)!=null&&s.placeholder?Nt(e.before,{hideLabel:!0}):(i=e.before)!=null&&i.src?`
    <figure class="pdp-phase-two-compare__column pdp-phase-two-compare__column--before">
      ${Ve(e.before,{flat:!0,designFlat:!0})}
    </figure>`:Nt(e.before||{},{hideLabel:!0}),a=(r=e.after)!=null&&r.src?`
    <figure class="pdp-phase-two-compare__column pdp-phase-two-compare__column--after">
      ${Ve(e.after,{flat:!0,designFlat:!0})}
    </figure>`:"";return`
    <div class="pdp-phase-two-compare pdp-phase-two-compare--trust">
      ${t}
      ${a}
    </div>`}function Ws(e){var c,o,h,b,_,P,R,E,T,L,j,k,$;const t=e.goalLabel||"设计目标",a=t==="核心目标",s=e.layout==="split"&&((c=e.categories)==null?void 0:c.length),i=e.layout==="split-rows"&&((o=e.splitRows)==null?void 0:o.length),r=e.layout==="split-trust"&&e.trustCompare,l=(e.strategies||[]).map((f,w)=>ra(f,{split:!!s,index:w})).join(""),n=s?`<div class="pdp-phase-two-strategy-modules">${l}</div>`:`<ul class="pdp-phase-two-strategy-list">${l}</ul>`,d=l.trim()?`
    <div class="pdp-phase-two-module__strategies pdp-phase-two-module__strategies--tier-tertiary">
      ${n}
    </div>`:"";let p="";if(r){const f=e.trustCompare.interactiveDemo?`
        <div class="pdp-phase-two-module__visuals pdp-phase-two-module__visuals--center pdp-phase-two-module__visuals--trust-demo reveal">
          ${Ds(e.trustCompare.interactiveDemo)}
        </div>`:"";p=`
      <div class="pdp-phase-two-module__split pdp-phase-two-module__split--trust">
        <article class="pdp-phase-two-split-unit reveal">
          <div class="pdp-phase-two-split-unit__copy">
            ${d}
          </div>
          <div class="pdp-phase-two-split-unit__showcase">
            <div class="pdp-phase-two-split-unit__labels" aria-hidden="true">
              <span class="pdp-phase-two-compare__label">${((h=e.trustCompare.before)==null?void 0:h.label)||"Before"}</span>
              <span class="pdp-phase-two-compare__label pdp-phase-two-compare__label--after">${((b=e.trustCompare.after)==null?void 0:b.label)||"After"}</span>
            </div>
            <div class="pdp-phase-two-split-unit__visuals pdp-phase-two-split-unit__visuals--trust">
              ${qs(e.trustCompare)}
            </div>
          </div>
        </article>
        ${f}
      </div>`}else if(i)p=`
      <div class="pdp-phase-two-module__split pdp-phase-two-module__split--rows">
        ${e.splitRows.map(f=>Cs(f)).join("")}
      </div>`;else if(e.layout==="split"&&((_=e.categories)!=null&&_.length)){const[f]=e.categories,w=((R=(P=f.comparison)==null?void 0:P.before)==null?void 0:R.label)||"改版前",I=((T=(E=f.comparison)==null?void 0:E.afterStatic)==null?void 0:T.label)||((j=(L=f.comparison)==null?void 0:L.afterInteractive)==null?void 0:j.label)||"改版后";p=`
      <div class="pdp-phase-two-module__split">
        <div class="pdp-phase-two-module__split-row pdp-phase-two-module__split-row--body">
          <div class="pdp-phase-two-module__split-labels pdp-phase-two-module__split-labels--compare" aria-hidden="true">
            <span class="pdp-phase-two-compare__label">${w}</span>
            <span class="pdp-phase-two-compare__label pdp-phase-two-compare__label--after">${I}</span>
          </div>
          <div class="pdp-phase-two-module__strategies pdp-phase-two-module__strategies--split pdp-phase-two-module__strategies--tier-tertiary">
            ${n}
          </div>
          <div class="pdp-phase-two-module__visuals pdp-phase-two-module__visuals--compare">
            ${e.categories.map(C=>Tt(C,{hideHead:!0,hideLabels:!0})).join("")}
          </div>
        </div>
      </div>`}else{let f="";(k=e.pathDemos)!=null&&k.length?f=`
        <div class="pdp-phase-two-module__visuals pdp-phase-two-module__visuals--center">
          ${Na(e.pathDemos,{renderScrollMockup:zt})}
        </div>`:e.pathDemo?f=`
        <div class="pdp-phase-two-module__visuals pdp-phase-two-module__visuals--center">
          ${Qt(e.pathDemo,{renderScrollMockup:zt})}
        </div>`:($=e.categories)!=null&&$.length&&(f=`
        <div class="pdp-phase-two-module__visuals">
          ${e.categories.map(Tt).join("")}
        </div>`),p=`${d}${f}`}return`
    <section class="pdp-phase-two-module${a?" pdp-phase-two-module--detail":""} reveal" aria-labelledby="pdp-phase-two-module-${e.index}">
      <div class="pdp-phase-two-module__intro-group">
        <header class="pdp-phase-two-module__head pdp-phase-two-module__head--tier-primary">
          <h5 class="pdp-phase-two-module__title" id="pdp-phase-two-module-${e.index}">${e.index}、${e.title}</h5>
        </header>
        <dl class="pdp-phase-two-module__goal pdp-phase-two-module__goal--tier-secondary">
          <dt>${t}</dt>
          <dd>${e.goal}</dd>
        </dl>
      </div>
      ${p}
    </section>`}function Os(e){const t=e.sections||[];return t.length?`
    <div class="pdp-phase-two-body">
      ${t.map(Ws).join("")}
    </div>`:""}function Tt(e,{staticOnly:t=!1,hideHead:a=!1,hideLabels:s=!1}={}){const{comparison:i,name:r}=e;if(!i)return"";const{before:l,afterStatic:n,afterInteractive:d}=i,p=d==null?void 0:d.flowersPdpDemo,c=(d==null?void 0:d.label)||(n==null?void 0:n.label)||"改版后",o=(_,P=!1,R="")=>s?"":`
            <figcaption class="pdp-phase-two-compare__label${P?" pdp-phase-two-compare__label--after":""}">${_}${R}</figcaption>`,h=!t&&p?`
          <figure
            class="pdp-phase-two-compare__column pdp-phase-two-compare__column--after-interactive reveal"
            data-pdp-flowers-recommend-card
            tabindex="0"
            aria-label="${r} · 改版后 · 同店推荐切换"
          >
            ${o(c,!0,'<span class="pdp-phase-two-compare__hint">悬停自动播放</span>')}
            ${Yt(p)}
          </figure>`:n?`
          <figure class="pdp-phase-two-compare__column pdp-phase-two-compare__column--after">
            ${o(n.label,!0)}
            ${Ve(n,{flat:!0,designFlat:!0})}
          </figure>`:"";return`
    <article class="pdp-phase-two-category reveal">
      ${a?"":`
      <header class="pdp-phase-two-category__head">
        <h4 class="pdp-phase-two-category__title">${r}</h4>
      </header>`}
      <div class="pdp-phase-two-category__visuals">
        <div class="pdp-phase-two-compare pdp-phase-two-compare--primary">
          <figure class="pdp-phase-two-compare__column pdp-phase-two-compare__column--before">
            ${o(l.label)}
            ${Ve(l,{flat:!0,designFlat:!0})}
          </figure>
          ${h}
        </div>
      </div>
    </article>`}function na(e,t){return e?t?`${e}/${t}`:e:t||"持平"}function la(e,t){return`
    <div class="pdp-insight-panel__more pdp-insight-panel__more--inline" tabindex="0">
      <span class="pdp-insight-panel__more-trigger">${e}</span>
      <div class="pdp-insight-panel__more-panel">${t}</div>
    </div>`}function zs(e){return`
    <article class="pdp-insight-metric-tile pdp-insight-metric-tile--${e.trend||"neutral"}">
      <span class="pdp-insight-metric-tile__label">${e.label}</span>
      <span class="pdp-insight-metric-tile__value">${na(e.change,e.changeNote)}</span>
    </article>`}function Ns(e){return`
    <li class="pdp-insight-category-chip pdp-insight-category-chip--${e.trend}">
      <span class="pdp-insight-category-chip__name">${e.name}</span>
      <span class="pdp-insight-category-chip__value">${na(e.highlight,e.changeNote)}</span>
    </li>`}function Gs(e){return`
    <span class="pdp-insight-native-chip">
      ${e.avatar?`<img class="pdp-insight-native-chip__avatar" src="${e.avatar}" alt="" width="22" height="22" loading="lazy" decoding="async" draggable="false" />`:`<span class="pdp-insight-native-chip__avatar" aria-hidden="true">${e.initial||"用"}</span>`}
      <span class="pdp-insight-native-chip__text">${e.text}</span>
    </span>`}function Ys(e){return`
    <article class="pdp-insight-conclusion-box">
      <h6 class="pdp-insight-conclusion-box__title">${e.title}</h6>
      <p class="pdp-insight-conclusion-box__desc${e.singleLine?" pdp-insight-conclusion-box__desc--single-line":""}">${e.desc}</p>
    </article>`}function Vs(e){const t={path:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M6.2 4.8a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm11.6 10.4a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Z" opacity="0.92"></path>
        <path fill="currentColor" d="M8.1 6.8h4.8a2.6 2.6 0 0 1 2.6 2.6v1.8h1.9a2.6 2.6 0 0 1 2.6 2.6v1.8" opacity="0.28"></path>
        <path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M8.1 6.8h4.8a2.6 2.6 0 0 1 2.6 2.6v1.8h1.9a2.6 2.6 0 0 1 2.6 2.6v1.8"></path>
      </svg>`,layout:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="7" height="7" rx="2" fill="currentColor" opacity="0.92"></rect>
        <rect x="13" y="4" width="7" height="7" rx="2" fill="currentColor" opacity="0.62"></rect>
        <rect x="4" y="13" width="7" height="7" rx="2" fill="currentColor" opacity="0.62"></rect>
        <rect x="13" y="13" width="7" height="7" rx="2" fill="currentColor" opacity="0.38"></rect>
      </svg>`,trust:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 3.2 5.4 6.1v5.9c0 4.1 2.8 7.2 6.6 8.5 3.8-1.3 6.6-4.4 6.6-8.5V6.1L12 3.2Z"></path>
        <path fill="#fff" d="m9.4 12.1 1.7 1.7 3.7-3.7 1.3 1.3-5 5-3-3 1.3-1.3 1.7 1.7Z"></path>
      </svg>`};return t[e]||t.path}function Xs(e){const{heroMetric:t,overall:a,categories:s}=e,i=[t,...a.metrics.filter(p=>p.label!==t.label).sort((p,c)=>(p.priority??99)-(c.priority??99))],r=s.items.map(Ns),l=`
    <p>${e.summary||"改版实现体验优化、转化稳健，无业务负向损耗。"}</p>
    <ul>${a.bullets.map(p=>`<li>${p}</li>`).join("")}</ul>`,n=`
    <p>${s.summary}</p>
    ${s.items.map(p=>`<p><strong>${p.name}</strong>：${p.desc}</p>`).join("")}
    <p class="pdp-insight-note">${s.footnote}</p>`,d=s.summary?`${e.headline}；${s.summary}`:e.headline;return`
    <article class="pdp-insight-card pdp-insight-card--data reveal">
      <header class="pdp-insight-card__head">
        <div class="pdp-insight-card__head-main pdp-insight-card__head-main--compact">
          <h5 class="pdp-insight-card__title">${e.title}</h5>
          <p class="pdp-insight-card__lead">${d}</p>
        </div>
        ${la("详情",`${l}${n}`)}
      </header>

      <div class="pdp-insight-glass-stage pdp-insight-glass-stage--data">
        <p class="pdp-insight-glass-stage__eyebrow">核心指标</p>
        <div class="pdp-insight-data-priority">
          ${i.map(p=>zs(p)).join("")}
        </div>

        <div class="pdp-insight-data-categories">
          <p class="pdp-insight-glass-stage__eyebrow">${s.title||"全品类效果汇总"}</p>
          <ul class="pdp-insight-data-category-row">${r.join("")}</ul>
        </div>
      </div>
    </article>`}function Us(e){const t=(e.nativeQuotes||[]).map(Gs).join(""),a=(e.conclusions||[]).map(Ys).join(""),s=e.painPoints.map(i=>`<p>${i.pct>0?`<strong>${i.pct}%</strong> · `:`<strong>${i.badge}</strong> · `}${i.title}：${i.desc}</p>`).join("");return`
    <article class="pdp-insight-card pdp-insight-card--interview reveal">
      <header class="pdp-insight-card__head">
        <div class="pdp-insight-card__head-main">
          <h5 class="pdp-insight-card__title">${e.title}</h5>
        </div>
        ${la("深度访谈详情",s)}
      </header>

      <div class="pdp-insight-glass-stage pdp-insight-glass-stage--pain">
        <div class="pdp-insight-pain-native">
          <p class="pdp-insight-glass-stage__eyebrow">${e.nativeLabel||"用户原生"}</p>
          <div class="pdp-insight-native-cloud" data-pdp-native-marquee>
            <div class="pdp-insight-native-cloud__viewport">
              <div class="pdp-insight-native-cloud__track">
                <div class="pdp-insight-native-cloud__set">${t}</div>
                <div class="pdp-insight-native-cloud__set" aria-hidden="true">${t}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="pdp-insight-pain-extract">
          <p class="pdp-insight-glass-stage__eyebrow">${e.extractLabel||"痛点挖掘结论"}</p>
          <div class="pdp-insight-conclusion-stack">${a}</div>
        </div>
      </div>
    </article>`}function Zs(e){const t=["path","layout","trust"],a=e.directions.map((s,i)=>`
      <article class="pdp-insight-iteration-card">
        <div class="pdp-insight-iteration-card__icon" aria-hidden="true">
          ${Vs(t[i]||"path")}
        </div>
        <h6 class="pdp-insight-iteration-card__title">${s.title}</h6>
        <p class="pdp-insight-iteration-card__desc">${s.desc}</p>
      </article>`).join("");return`
    <article class="pdp-insight-card pdp-insight-card--iteration reveal">
      <header class="pdp-insight-card__head">
        <div class="pdp-insight-card__head-main">
          <h5 class="pdp-insight-card__title" id="pdp-insight-iteration">${e.title}</h5>
        </div>
      </header>
      <div class="pdp-insight-iteration-grid">${a}</div>
    </article>`}function Qs(e){return e?`
    <section class="pdp-design-insights reveal" aria-labelledby="pdp-design-insights">
      <span class="pdp-design-phase__badge">${e.badge}</span>
      <h4 class="pdp-design-phase__title" id="pdp-design-insights">${e.title}</h4>

      <div class="pdp-insights-board pdp-insights-board--scheme-c" data-pdp-insight-chart>
        ${Xs(e.dataSection)}
        ${Us(e.interviewSection)}
        ${Zs(e.iterationSection)}
      </div>
    </section>`:""}function Ks(){var t;const e=()=>{document.querySelectorAll(".pdp-insight-glass-stage--pain").forEach(a=>{const s=a.querySelector(".pdp-insight-conclusion-stack"),i=a.querySelector(".pdp-insight-native-cloud");if(!s||!i)return;i.style.height="",i.style.minHeight="",i.style.maxHeight="";const r=Math.ceil(s.getBoundingClientRect().height);r>0&&(i.style.height=`${r}px`,i.style.minHeight=`${r}px`)})};e(),requestAnimationFrame(()=>{e(),requestAnimationFrame(e)}),(t=document.fonts)!=null&&t.ready&&document.fonts.ready.then(e).catch(()=>{}),typeof ResizeObserver<"u"&&document.querySelectorAll(".pdp-insight-conclusion-stack").forEach(a=>{new ResizeObserver(e).observe(a)}),window.addEventListener("resize",e,{passive:!0})}function Js(){document.querySelectorAll("[data-pdp-native-marquee]").forEach(t=>{var i;if(t.dataset.pdpNativeMarqueeBound==="true")return;t.dataset.pdpNativeMarqueeBound="true";const a=()=>{const r=t.querySelector('.pdp-insight-native-cloud__set:not([aria-hidden="true"])');if(!r)return;const l=r.getBoundingClientRect().height;if(l>0){const n=Math.max(l/20,22);t.style.setProperty("--pdp-native-marquee-duration",`${n.toFixed(1)}s`)}};a(),requestAnimationFrame(()=>{a(),requestAnimationFrame(a)}),(i=document.fonts)!=null&&i.ready&&document.fonts.ready.then(a).catch(()=>{});const s=t.querySelector('.pdp-insight-native-cloud__set:not([aria-hidden="true"])');s&&typeof ResizeObserver<"u"&&new ResizeObserver(a).observe(s),window.addEventListener("resize",a,{passive:!0})})}function ei(){document.querySelectorAll(".pdp-insight-stat, .pdp-insight-pain-row").forEach(e=>{e.addEventListener("click",()=>{window.matchMedia("(hover: hover)").matches||e.classList.toggle("is-open")})}),document.querySelectorAll(".pdp-insight-panel__more").forEach(e=>{e.addEventListener("click",()=>{window.matchMedia("(hover: hover)").matches||e.classList.toggle("is-open")})})}function ti(e){const t=parseFloat(e.dataset.ringTarget)||0,a=1200,s=performance.now();e.classList.add("is-animating");function i(r){const l=Math.min((r-s)/a,1),n=1-Math.pow(1-l,3);e.style.setProperty("--ring-dash",`${t*n}`),l<1?requestAnimationFrame(i):e.classList.remove("is-animating")}requestAnimationFrame(i)}function ai(e){const t=e.querySelector(".pdp-insight-gauge__fill");if(!t)return;const a=182,s=Math.min(Math.max(parseFloat(e.dataset.gaugeFill)||72,0),100),i=a*(1-s/100);t.style.strokeDasharray=`${a}`,t.style.strokeDashoffset=`${a}`,e.classList.add("is-animating"),requestAnimationFrame(()=>{t.style.transition="stroke-dashoffset 1.4s cubic-bezier(0.22, 1, 0.36, 1)",t.style.strokeDashoffset=`${i}`,window.setTimeout(()=>e.classList.remove("is-animating"),1400)})}function si(){typeof IntersectionObserver>"u"||document.querySelectorAll("[data-pdp-insight-chart]").forEach(e=>{new IntersectionObserver(a=>{a.forEach(s=>{!s.isIntersecting||s.target.dataset.chartAnimated==="true"||(s.target.dataset.chartAnimated="true",s.target.querySelectorAll("[data-pdp-gauge]").forEach(ai),s.target.querySelectorAll("[data-pdp-ring]").forEach(ti),s.target.querySelectorAll(".pdp-insight-ring__value[data-count]").forEach(i=>{i.dataset.animated||(i.dataset.animated="true",oa(i))}))})},{threshold:.2,rootMargin:"0px 0px -5% 0px"}).observe(e)})}function ii(e){var r,l,n;const t=e.designPanel;if(!t)return"";const a=t.phaseOne,s=t.phaseOneInsights,i=t.phaseTwo;return`
    <div class="pdp-panel pdp-panel--design">
      <div class="pdp-panel__inner project-content-inner">
        ${dt(e)}
        <header class="pdp-section-head reveal">
          <span class="pdp-section-head__index">${t.index}</span>
          <h3 class="pdp-section-head__title">方案<span class="pdp-highlight">设计</span></h3>
        </header>

        ${t.overview?js(t.overview):""}

        <section class="pdp-design-phase reveal" aria-labelledby="pdp-design-phase-one">
          <div class="pdp-design-phase__card">
            <span class="pdp-design-phase__badge">${a.badge}</span>
            <div class="pdp-design-phase__intro">
              <h4 class="pdp-design-phase__title" id="pdp-design-phase-one">${a.title}</h4>
            </div>
            ${a.beforeProblems?Rs(a.beforeProblems):""}
            ${a.framework?Ts(a.framework):""}
            <section class="pdp-design-subsection reveal" aria-label="${a.schemesTitle||"改版方案"}">
              ${a.schemesTitle?`<h5 class="pdp-design-subsection__title">${a.schemesTitle}</h5>`:""}
              ${Is(((r=a.framework)==null?void 0:r.schemeWireframe)||((n=(l=a.framework)==null?void 0:l.comparison)==null?void 0:n.after),a.schemes)}
            </section>
          </div>
        </section>

        ${s?Qs(s):""}

        <section class="pdp-design-phase reveal" aria-labelledby="pdp-design-phase-two">
          <div class="pdp-design-phase__card">
            <span class="pdp-design-phase__badge">${i.badge}</span>
            <div class="pdp-design-phase__intro">
              <h4 class="pdp-design-phase__title" id="pdp-design-phase-two">${i.title}</h4>
              ${i.intro?`<p class="pdp-design-copy pdp-design-copy--lead">${i.intro}</p>`:""}
            </div>
            ${Os(i)}
          </div>
        </section>
      </div>
    </div>
  `}function ri(e){if(!e||e.dataset.pdpSchemeDemoBound==="true")return;const t=e.querySelector("[data-pdp-scheme-demo-hero]"),a=[...e.querySelectorAll("[data-pdp-scheme-demo-target]")];if(!t||!a.length)return;e.dataset.pdpSchemeDemoBound="true";const s=i=>{const r=i==="review";t.classList.toggle("is-active",r),t.setAttribute("aria-hidden",r?"false":"true"),a.forEach(n=>{const d=n.dataset.pdpSchemeDemoTarget,p=r?d==="main":d==="review";n.hidden=!p}),e.dataset.pdpSchemeDemoActive=i;const l=e.querySelector(".pdp-scheme-explorer__demo-hint");l&&(l.textContent=r?"点击「详情」返回":"点击「评价」切换")};s("main"),e.addEventListener("click",i=>{const r=i.target.closest("[data-pdp-scheme-demo-target]");!r||!e.contains(r)||r.hidden||(i.preventDefault(),i.stopPropagation(),s(r.dataset.pdpSchemeDemoTarget))})}function ct(e,{onPlay:t,onPause:a}={}){if(!e||typeof t!="function"||typeof a!="function")return()=>{};let s=!1;const i=()=>{s||(s=!0,t())},r=()=>{s&&(s=!1,a())};return e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",r),e.addEventListener("focusin",i),e.addEventListener("focusout",l=>{e.contains(l.relatedTarget)||r()}),e.addEventListener("touchstart",i,{passive:!0}),()=>{e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",r)}}function ni(){const e=Ut,t=2600,a=420,s=Zt,i=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.querySelectorAll("[data-pdp-digital-param-demo-card]").forEach(r=>{if(r.dataset.pdpDigitalParamBound==="true")return;r.dataset.pdpDigitalParamBound="true";const l=r.querySelector("[data-pdp-digital-param-overlay]"),n=r.querySelector("[data-pdp-digital-param-trigger]"),d=r.querySelector(".pdp-digital-param-demo__mask"),p=()=>{var f,w;(f=r.querySelector(".pdp-digital-param-demo__stage"))==null||f.scrollTo({top:0}),(w=r.querySelector(".pdp-digital-param-demo__sheet-wrap"))==null||w.scrollTo({top:0})};let c=null,o=null,h=null,b=null,_=!1;const P=()=>{c&&window.clearTimeout(c),o&&window.clearTimeout(o),h&&window.clearTimeout(h),b&&window.clearTimeout(b),c=o=h=b=null},R=f=>{l==null||l.setAttribute("aria-hidden",f?"true":"false")},E=()=>{!_||i||(h=window.setTimeout(L,s))},T=()=>{P(),r.classList.remove("is-closing"),r.classList.add("is-active"),R(!1),!i&&(c=window.setTimeout(()=>{j({scheduleLoop:!0})},t))},L=()=>{!_||i||(p(),n==null||n.classList.add("is-active"),b=window.setTimeout(()=>{b=null,_&&T()},e))},j=({immediate:f=!1,scheduleLoop:w=!1}={})=>{if(!r.classList.contains("is-active")&&!r.classList.contains("is-closing")){n==null||n.classList.remove("is-active"),w&&E();return}if(P(),n==null||n.classList.remove("is-active"),f||i){r.classList.remove("is-active","is-closing"),R(!0),w&&E();return}r.classList.remove("is-active"),r.classList.add("is-closing"),R(!1),o=window.setTimeout(()=>{r.classList.remove("is-closing"),R(!0),o=null,w&&E()},a)},k=()=>{_=!1,P(),n==null||n.classList.remove("is-active"),j({immediate:!0}),p()},$=()=>{_||i||(_=!0,L())};n==null||n.addEventListener("click",f=>{f.preventDefault(),r.classList.contains("is-active")||r.classList.contains("is-closing")?j({immediate:!0}):(_=!0,P(),L())}),d==null||d.addEventListener("click",f=>{f.preventDefault(),j({immediate:!0})}),p(),ct(r,{onPlay:$,onPause:k})})}function li(){document.querySelectorAll("[data-pdp-flowers-recommend-card]").forEach(e=>{if(e.dataset.pdpFlowersRecommendBound==="true")return;e.dataset.pdpFlowersRecommendBound="true";const t=e.querySelector(".pdp-flowers-rec[data-pdp-flowers-pdp]");if(!t)return;const a=()=>t.__pdpFlowersController;ct(e,{onPlay:()=>{var r,l;e.classList.add("is-active"),(r=a())==null||r.applyMetrics(),(l=a())==null||l.startAuto(1200)},onPause:()=>{var r,l;e.classList.remove("is-active"),(r=a())==null||r.stopAuto(),(l=a())==null||l.reset()}})})}function oi(){document.querySelectorAll("[data-pdp-trust-interactive]").forEach(e=>{if(e.dataset.pdpTrustInteractiveBound==="true")return;e.dataset.pdpTrustInteractiveBound="true";const t=e.querySelector(".pdp-trust-interactive-demo__frame");if(!t)return;const a=s=>{var i;(i=t.contentWindow)==null||i.postMessage({type:"pdp-trust-autoplay",playing:s},"*")};t.addEventListener("load",()=>{e.dataset.pdpTrustHovering==="true"&&a(!0)}),ct(e,{onPlay:()=>{e.dataset.pdpTrustHovering="true",a(!0)},onPause:()=>{e.dataset.pdpTrustHovering="false",a(!1)}})})}function pi(){document.querySelectorAll("[data-pdp-scroll-demo]").forEach(e=>{const t=e.querySelector(".pdp-scroll-mockup__scroller"),a=t==null?void 0:t.querySelector("img"),s=e.querySelector(".pdp-scroll-mockup__chrome--top"),i=e.querySelector("[data-pdp-scroll-chrome-nav]"),r=e.querySelector("[data-pdp-scroll-chrome-tabs]"),l=e.querySelector("[data-pdp-scroll-chrome-bottom]"),n=e.querySelector(".pdp-scroll-mockup__tabs"),d=n?[...n.querySelectorAll(".pdp-scroll-mockup__tab")]:[],p=e.querySelector(".pdp-scroll-mockup__hint");if(!t||!a||!i||!r||!l||!n||!s)return;const c=e.dataset.ratioBase||"viewport",o=parseFloat(e.dataset.topNavRatio)||.069,h=parseFloat(e.dataset.tabBarRatio)||.031,b=parseFloat(e.dataset.bottomRatio)||.055,_=parseFloat(e.dataset.tabRevealRatio)||.165,P=parseFloat(e.dataset.stickyTabRatio)||.17,R=parseFloat(e.dataset.stickyNavRatio)||o,E=d.map(m=>parseFloat(m.dataset.yRatio)||0);let T=0,L=0,j=0;const k=m=>{const v=a.offsetHeight;if(!v)return 0;if(c==="viewport"){const x=t.clientHeight/v;return v*x*m}return v*m},$=()=>{a.offsetHeight&&(T=k(o),L=k(h),j=k(b),e.style.setProperty("--pdp-scroll-top-nav-h",`${T}px`),e.style.setProperty("--pdp-scroll-tab-bar-h",`${L}px`),e.style.setProperty("--pdp-scroll-bottom-h",`${j}px`),e.style.setProperty("--pdp-scroll-top-h",`${T}px`))},f=()=>{const m=a.offsetHeight;if(!m)return;const v=t.scrollTop,x=m*R,W=m*P,O=m-j;s.classList.contains("is-sticky")?(i.style.transform=`translate3d(0, ${-Math.round(x)}px, 0)`,r.style.transform=`translate3d(0, ${-Math.round(W)}px, 0)`):(i.style.transform=`translate3d(0, ${-Math.round(v)}px, 0)`,r.style.transform=`translate3d(0, ${-Math.round(v)}px, 0)`),l.style.transform=`translate3d(0, ${-Math.round(O)}px, 0)`},w=()=>{const m=a.offsetHeight;return m?t.scrollTop/m:0},I=m=>{d.forEach((v,x)=>{const W=x===m;v.classList.toggle("is-active",W),v.setAttribute("aria-selected",W?"true":"false")})},C=()=>{a.offsetHeight;const m=t.scrollTop,v=T*.92,x=m>v;s.classList.toggle("is-sticky",x),e.classList.toggle("is-nav-sticky",x),f();const W=w(),O=x&&W>=_;n.classList.toggle("is-visible",O),s.classList.toggle("is-tabs-mode",O),n.setAttribute("aria-hidden",O?"false":"true"),e.style.setProperty("--pdp-scroll-top-h",`${O?T+L:T}px`),p&&p.classList.toggle("is-hidden",m>12);let z=0;E.forEach((Z,Q)=>{W+.012>=Z&&(z=Q)}),I(z)},Y=m=>{const v=a.offsetHeight,x=n.classList.contains("is-visible")?T+L:T,W=Math.max(0,m*v-x*.35);t.scrollTo({top:W,behavior:"smooth"})};d.forEach((m,v)=>{m.addEventListener("click",()=>{Y(E[v]),I(v)})}),t.addEventListener("scroll",C,{passive:!0});const g=()=>{$(),C()};a.complete?g():a.addEventListener("load",g),typeof ResizeObserver<"u"&&new ResizeObserver(g).observe(a)})}function di(){document.querySelectorAll("[data-pdp-scheme-explorer]").forEach(e=>{const t=[...e.querySelectorAll("[data-pdp-scheme-tab]")],a=[...e.querySelectorAll("[data-pdp-scheme-before]")],s=[...e.querySelectorAll("[data-pdp-scheme-after]")];if(!t.length||!a.length||!s.length)return;const i=l=>{l==null||l.querySelectorAll("[data-pdp-scheme-demo]").forEach(n=>{const d=n.querySelector("[data-pdp-scheme-demo-hero]");d==null||d.classList.remove("is-active"),d==null||d.setAttribute("aria-hidden","true"),n.querySelectorAll("[data-pdp-scheme-demo-target]").forEach(c=>{const o=c.dataset.pdpSchemeDemoTarget==="review";c.hidden=!o}),n.dataset.pdpSchemeDemoActive="main";const p=n.querySelector(".pdp-scheme-explorer__demo-hint");p&&(p.textContent="点击「评价」切换")})},r=l=>{t.forEach((n,d)=>{const p=d===l;n.classList.toggle("is-active",p),n.setAttribute("aria-selected",p?"true":"false"),n.tabIndex=p?0:-1}),a.forEach((n,d)=>{const p=d===l;n.classList.toggle("is-active",p),n.setAttribute("aria-hidden",p?"false":"true")}),s.forEach((n,d)=>{const p=d===l;n.classList.toggle("is-active",p),n.setAttribute("aria-hidden",p?"false":"true"),p||i(n)})};t.forEach((l,n)=>{l.addEventListener("mouseenter",()=>r(n)),l.addEventListener("focus",()=>r(n)),l.addEventListener("click",()=>r(n))}),e.querySelectorAll("[data-pdp-scheme-demo]").forEach(l=>{ri(l)}),r(0)})}function ci(){const e=document.querySelector("[data-pdp-framework]");e&&$s(e)}function ui(){document.querySelectorAll("[data-pdp-hierarchy]").forEach(e=>{const t=[...e.querySelectorAll("[data-pdp-hierarchy-layer]")],a=[...e.querySelectorAll("[data-pdp-hierarchy-panel]")],s=[...e.querySelectorAll("[data-pdp-hierarchy-dock-layer]")],i=e.querySelector(".pdp-hierarchy__stack-wrap");if(!t.length)return;let r=0;const l=(p,{pin:c=!1}={})=>{c&&(r=p),t.forEach((o,h)=>{const b=h===p;o.classList.toggle("is-active",b),o.setAttribute("aria-selected",b?"true":"false")}),a.forEach((o,h)=>{const b=h===p;o.classList.toggle("is-active",b),o.setAttribute("aria-hidden",b?"false":"true")}),s.forEach((o,h)=>{o.classList.toggle("is-active",h===p)})},n=(p,{pin:c=!1,scroll:o=!1}={})=>{l(p,{pin:c}),o&&(i==null||i.scrollIntoView({behavior:"smooth",block:"nearest"}))},d=(p,c,{scrollOnClick:o=!1}={})=>{p.addEventListener("mouseenter",()=>l(c)),p.addEventListener("focus",()=>l(c)),p.addEventListener("click",()=>n(c,{pin:!0,scroll:o}))};if(t.forEach(p=>d(p,Number(p.dataset.pdpHierarchyLayer))),s.forEach(p=>d(p,Number(p.dataset.pdpHierarchyDockLayer),{scrollOnClick:!0})),e.addEventListener("mouseleave",p=>{e.contains(p.relatedTarget)||l(r)}),i&&typeof IntersectionObserver<"u"){let p=!1,c=!1;const o=()=>{e.classList.toggle("is-stack-offscreen",p&&!c)},h=new IntersectionObserver(([_])=>{p=_.isIntersecting,o()},{threshold:0,rootMargin:"0px 0px -20% 0px"}),b=new IntersectionObserver(([_])=>{c=_.isIntersecting,o()},{threshold:0,rootMargin:"-96px 0px 0px 0px"});h.observe(e),b.observe(i)}l(r,{pin:!0})})}function gi(e){const t=`
      <ul class="pdp-phase-card__list">
        ${e.items.map(a=>`<li>${a}</li>`).join("")}
      </ul>
      ${_s(e.categoryNotes)}`;return`
    <article class="pdp-phase-card reveal">
      <span class="pdp-phase-card__badge">${e.phase}</span>
      <div class="pdp-phase-card__head">
        <div class="pdp-phase-card__titles">
          <h4 class="pdp-phase-card__title">${e.title}</h4>
          <p class="pdp-phase-card__subtitle">${e.subtitle}</p>
        </div>
      </div>
      ${t}
    </article>
  `}function hi(e){const t=e.strategyPhases||[];return t.length?`
    <div class="pdp-panel pdp-panel--strategy">
      <div class="pdp-panel__inner project-content-inner">
        <header class="pdp-section-head reveal">
          <span class="pdp-section-head__index">02</span>
          <h3 class="pdp-section-head__title">设计<span class="pdp-highlight">策略</span></h3>
        </header>
        <div class="pdp-phase-stack">
          ${t.map(gi).join("")}
        </div>
      </div>
    </div>
  `:""}function mi(){document.querySelectorAll("[data-pdp-design-slot]").forEach(e=>{const t=e.querySelector("img");if(!t){e.classList.add("pdp-design-slot__frame--empty");return}const a=()=>e.classList.add("pdp-design-slot__frame--empty"),s=()=>e.classList.remove("pdp-design-slot__frame--empty");t.addEventListener("error",a),t.addEventListener("load",()=>{t.naturalWidth>0?s():a()}),t.complete&&(t.naturalWidth>0?s():a())})}function fi(e){const t={超市便利:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M5.5 7.2 7.8 3h8.4l2.3 4.2H5.5Z" opacity="0.92"></path>
        <path fill="currentColor" d="M4.8 8.4h14.4v1.4H4.8V8.4Zm1.2 2.8h12v7.4a1.8 1.8 0 0 1-1.8 1.8H7.8a1.8 1.8 0 0 1-1.8-1.8v-7.4Z" opacity="0.72"></path>
        <path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" d="M9 12.2h6"></path>
      </svg>`,数码家电:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="3.5" width="10" height="17" rx="2.2" fill="currentColor" opacity="0.92"></rect>
        <rect x="8.4" y="6" width="7.2" height="11.2" rx="1" fill="#fff" opacity="0.92"></rect>
        <circle cx="12" cy="18.8" r="1" fill="#fff"></circle>
      </svg>`,鲜花:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.1" fill="currentColor" opacity="0.92"></circle>
        <path fill="currentColor" d="M12 4.2c.8 1.6.8 2.8 0 4.4-.8-1.6-.8-2.8 0-4.4Zm0 11.2c.8 1.6.8 2.8 0 4.4-.8-1.6-.8-2.8 0-4.4ZM4.2 12c1.6-.8 2.8-.8 4.4 0-1.6.8-2.8.8-4.4 0Zm11.2 0c1.6-.8 2.8-.8 4.4 0-1.6.8-2.8.8-4.4 0Z" opacity="0.72"></path>
      </svg>`};return t[e]||t.超市便利}function vi(e){const t=e.text||e.value||pt(e),a=e.text||typeof e.value=="string"?"":ot(e),s=e.trend?`<div class="pdp-result-metric-card__trend-wrap"><span class="pdp-result-metric-card__trend pdp-result-metric-card__trend--${e.trend}" aria-hidden="true">${e.trend==="up"?"↑":"↓"}</span><span class="pdp-result-metric-card__trend-label">提升</span></div>`:"",i=[];e.baseline&&i.push(`<span class="pdp-result-metric-card__baseline">${e.baseline}</span>`),e.baseline&&(e.delta||e.detail)&&i.push('<span class="pdp-result-metric-card__arrow" aria-hidden="true">→</span>'),e.delta?i.push(`<span class="pdp-result-metric-card__delta">${e.delta}</span>`):e.detail&&i.push(`<span class="pdp-result-metric-card__delta">${e.detail}</span>`);const r=i.length?`<p class="pdp-result-metric-card__compare">${i.join("")}</p>`:"";return`
        <article class="pdp-result-metric-card reveal">
          <div class="pdp-result-metric-card__head">
            <p class="pdp-result-metric-card__label">${e.label}</p>
          </div>
          <div class="pdp-result-metric-card__main">
            <p class="pdp-result-metric-card__value">
              <strong ${a}>${t}</strong>
            </p>
            ${s}
          </div>
          ${r}
        </article>`}function _i(e){return`
        <article class="pdp-result-category-card${e.tone?` pdp-result-category-card--${e.tone}`:""} reveal">
          <div class="pdp-result-category-card__head">
            <div class="pdp-result-category-card__icon" aria-hidden="true">
              ${fi(e.category)}
            </div>
            <h5 class="pdp-result-category-card__title">${e.category}</h5>
          </div>
          <p class="pdp-result-category-card__line"><span class="pdp-result-category-card__key">二期</span>${e.target}</p>
          <p class="pdp-result-category-card__note">${e.note}</p>
        </article>`}function bi(e,t){const a=typeof e=="string"?e:e.text,s=typeof e=="object"&&e.avatar?e.avatar:`/images/projects/pdp-insight-avatars/avatar-${t%8+1}.jpg`;return`
            <article class="pdp-result-voice-chip pdp-result-voice-chip--stagger-${t%3}">
              <div class="pdp-result-voice-chip__card">
                <img class="pdp-result-voice-chip__avatar" src="${s}" alt="" width="32" height="32" loading="lazy" decoding="async" draggable="false" />
                <p class="pdp-result-voice-chip__text">${a}</p>
              </div>
            </article>`}function rt(e,{leadText:t=""}={}){const a=e.subtitle?`<p class="pdp-result-section__subtitle">${e.subtitle}</p>`:t?`<p class="pdp-result-qualitative-lead">${t}</p>`:"";return`
        <header class="pdp-result-section__head">
          <div class="pdp-result-section__titles">
            <h4 class="pdp-result-section__title">${e.title}</h4>
            ${a}
          </div>
        </header>`}function yi(e){var a;if(!e)return"";const t=(a=e.voices)!=null&&a.length?`<div class="pdp-result-voice-mosaic">${e.voices.map((s,i)=>bi(s,i)).join("")}</div>`:"";return`
        <div class="pdp-result-qualitative-block">
          ${t?`<div class="pdp-result-qualitative-summary">
              <div class="pdp-result-qualitative-voices">
              <p class="pdp-result-qualitative-stage__eyebrow">用户原声</p>
              ${t}
            </div>
            </div>`:""}
        </div>`}function $i(e){var t,a;if(e.qualitative){const s=e.qualitative.headline||e.qualitative.summary||"";return`
      <section class="pdp-result-section pdp-result-section--qualitative reveal">
        ${rt(e,{leadText:s})}
        ${yi(e.qualitative)}
      </section>`}if((t=e.metrics)!=null&&t.length)return`
      <section class="pdp-result-section reveal">
        ${rt(e)}
        <div class="pdp-result-metric-grid">
          ${e.metrics.map(s=>vi(s)).join("")}
        </div>
      </section>`;if((a=e.categoryCards)!=null&&a.length)return`
      <section class="pdp-result-section reveal">
        ${rt(e)}
        <div class="pdp-result-category-grid">
          ${e.categoryCards.map(s=>_i(s)).join("")}
        </div>
      </section>`;if(e.table){const{headers:s,rows:i}=e.table,r=i.map(l=>{const n=Array.isArray(l)?l:[l.category,l.baseline,l.target,l.note];return`
              <tr class="pdp-result-table__row${l.tone?` pdp-result-table__row--${l.tone}`:""}">
                ${n.map((p,c)=>`<td${c===0?' class="pdp-result-table__category"':""}>${p}</td>`).join("")}
              </tr>`}).join("");return`
      <section class="pdp-result-section reveal">
        ${rt(e)}
        <div class="pdp-result-table-wrap">
          <table class="pdp-result-table">
            <thead>
              <tr>${s.map(l=>`<th scope="col">${l}</th>`).join("")}</tr>
            </thead>
            <tbody>${r}</tbody>
          </table>
        </div>
      </section>`}return""}function wi(e,t){var i,r,l;if((i=e.pdpResultSections)!=null&&i.length){const n=e.pdpResultSections.map(d=>$i(d)).join("");return`
    <div class="metrics-panel metrics-panel--pdp">
      <div class="metrics-panel__inner project-content-inner">
        <header class="pdp-section-head reveal">
          <span class="pdp-section-head__index">${t.panelIndex||"03"}</span>
          <h3 class="pdp-section-head__title">数据<span class="pdp-highlight">结果</span></h3>
        </header>
        <div class="pdp-result-board">
          ${e.resultsIntro?`<p class="pdp-result-intro reveal">${e.resultsIntro}</p>`:""}
          ${n}
          ${e.resultsSummary?`<aside class="pdp-result-callout reveal"><span class="pdp-result-callout__icon" aria-hidden="true">✦</span><p class="pdp-result-callout__text">${e.resultsSummary}</p></aside>`:""}
        </div>
      </div>
    </div>
  `}const a=(r=e.metricGroups)!=null&&r.length?e.metricGroups.flatMap((n,d)=>n.metrics.map((p,c)=>{const o=String(d*10+c+1).padStart(2,"0"),h=p.text||pt(p),b=p.unit?` ${p.unit}`:"",_=p.detail?`<p class="pdp-result-row__desc">${p.detail}</p>`:"";return`
        <li class="pdp-result-row reveal">
          <span class="pdp-result-row__index">${o}</span>
          <div class="pdp-result-row__body">
            <p class="pdp-result-row__group">${n.title}</p>
            <h4 class="pdp-result-row__title">${p.label}</h4>
            ${_}
          </div>
          <div class="pdp-result-row__value">
            <strong ${ot(p)}>${h}${b}</strong>
            ${p.trend?`<span class="pdp-result-row__trend pdp-result-row__trend--${p.trend}">${p.trend==="up"?"↑":"↓"}</span>`:""}
          </div>
        </li>`})).join(""):"",s=(l=e.resultTables)!=null&&l.length?e.resultTables.map(n=>`
        <section class="pdp-result-table-block reveal">
          <header class="pdp-result-table-block__head">
            <h4 class="pdp-result-table-block__title">${n.title}</h4>
            ${n.subtitle?`<p class="pdp-result-table-block__subtitle">${n.subtitle}</p>`:""}
          </header>
          <table class="pdp-result-table">
            <thead>
              <tr>${n.headers.map(d=>`<th scope="col">${d}</th>`).join("")}</tr>
            </thead>
            <tbody>
              ${n.rows.map(d=>`
              <tr>${d.map((p,c)=>`<td${c===0?' class="pdp-result-table__category"':""}>${p}</td>`).join("")}</tr>`).join("")}
            </tbody>
          </table>
        </section>`).join(""):"";return`
    <div class="metrics-panel metrics-panel--pdp">
      <div class="metrics-panel__inner project-content-inner">
        <header class="pdp-section-head reveal">
          <span class="pdp-section-head__index">${t.panelIndex||"03"}</span>
          <h3 class="pdp-section-head__title">数据<span class="pdp-highlight">结果</span></h3>
        </header>
        ${e.resultsIntro?`<p class="pdp-result-intro reveal">${e.resultsIntro}</p>`:""}
        ${a?`<ul class="pdp-result-list">${a}</ul>`:s?"":'<div class="pdp-result-placeholder reveal" aria-hidden="true"></div>'}
        ${s}
        ${e.resultsSummary?`<p class="pdp-result-summary reveal">${e.resultsSummary}</p>`:""}
      </div>
    </div>
  `}function Gt(e,t,a){const s=e.strategies.map(i=>`<p class="help-strategy-card__text">${i.text}</p>`).join("");return`
    <article class="help-strategy-card help-strategy-card--${a}">
      <div class="help-strategy-card__accent" aria-hidden="true"></div>
      <span class="help-strategy-card__index">${t}</span>
      <h4 class="help-strategy-card__title">${e.tag}</h4>
      <div class="help-strategy-card__body">${s}</div>
    </article>
  `}function xi(e){const[t,a]=e;return`
    <div class="help-strategy-cards">
      ${Gt(t,"01","start")}
      <span class="help-strategy-cards__arrow" aria-hidden="true"></span>
      ${Gt(a,"02","end")}
    </div>
  `}function Pi(e,t){const a=[e.background];return t.goal&&a.push(`${t.goal.label}：${t.goal.text}`),`
    <div class="help-panel__text-block">
      ${a.map(s=>`<p class="help-panel__text">${s}</p>`).join("")}
    </div>
  `}function ki(e){const t=e.backgroundPanel;if(!t)return"";const a=xi(t.modules);return`
    <div class="help-panel">
      <div class="help-panel__inner project-content-inner">
        <section class="help-panel__section reveal">
          <h3 class="help-panel__heading">${t.title}</h3>
          ${Pi(e,t)}
        </section>
        <section class="help-panel__section reveal">
          <h3 class="help-panel__heading">${t.strategyLabel}</h3>
          ${a}
        </section>
      </div>
    </div>
  `}function Si(e){var a,s,i,r,l,n;const t=(a=e.strategies)==null?void 0:a.length;return!e.background&&!((s=e.analysisMetrics)!=null&&s.length)&&!((i=e.analysisCategories)!=null&&i.length)&&!t?"":`
    <div class="analysis-panel">
      <div class="analysis-panel__inner project-content-inner">
        ${e.background||(r=e.analysisCategories)!=null&&r.length?`
        <section class="analysis-block reveal">
          ${dt(e)}
          ${e.background?'<h3 class="project-content-title">项目背景</h3>':""}
          ${e.background?`<p class="analysis-block__text">${e.background}</p>`:""}
          ${(l=e.analysisCategories)!=null&&l.length?`
          <div class="analysis-card-grid analysis-card-grid--3 analysis-card-grid--spaced">
            ${e.analysisCategories.map(Ka).join("")}
          </div>`:""}
        </section>`:""}
        ${(n=e.analysisMetrics)!=null&&n.length?`
        <section class="analysis-block reveal">
          <h3 class="project-content-title">核心指标</h3>
          <div class="analysis-card-grid analysis-card-grid--3">
            ${e.analysisMetrics.map(Ja).join("")}
          </div>
        </section>`:""}
        ${t?es(e):""}
      </div>
    </div>
  `}function Hi(e,t){var n,d,p;if(e.id==="pdp-redesign")return wi(e,t);if(!((n=e.metrics)!=null&&n.length)&&!e.resultsSummary&&!e.resultsIntro&&!((d=e.metricGroups)!=null&&d.length))return"";const a=!!(t!=null&&t.panelIndex),s=e.metricGroups?Za(e.metricGroups,a):Jt(e.metrics,((p=e.metrics)==null?void 0:p.length)===4?4:3),i=a?aa(t.panelIndex,t.label):'<h3 class="project-content-title">数据结果</h3>',r=a?"background-panel__intro":"metrics-panel__text",l=a?"background-panel__key-strategies":"metrics-panel__text metrics-panel__text--summary";return`
    <div class="metrics-panel${a?" metrics-panel--panel-style":""}">
      <div class="metrics-panel__inner project-content-inner">
        ${i}
        <div class="metrics-panel__body">
          ${e.resultsIntro?`<p class="${r}">${e.resultsIntro}</p>`:""}
          ${s}
          ${e.metricsFigure?`
          <figure class="metrics-panel__figure reveal">
            <img src="${e.metricsFigure.src}" alt="${e.metricsFigure.alt}" loading="lazy" />
            ${e.metricsFigure.caption?`<figcaption class="metrics-panel__caption">${e.metricsFigure.caption}</figcaption>`:""}
          </figure>`:""}
          ${e.resultsSummary?`<p class="${l}">${e.resultsSummary}</p>`:""}
        </div>
      </div>
    </div>
  `}function Ti(){const e=document.getElementById("app");e.innerHTML=`
    ${Li()}
    ${Ri()}
    ${Ei()}
    ${lt.map((t,a)=>Bi(t,a)).join("")}
    ${Ii()}
  `,Wi(),N("bindPdpDesignSlots",mi),N("bindPdpFramework",ci),N("bindPdpBeforeProblems",Es),N("bindPdpSchemeExplorer",di),N("bindPdpPhaseTwoScroll",pi),N("bindPdpFlowersPdpDemo",Xt),N("bindPdpFlowersRecommendDemoRoots",Wa),N("bindPdpFlowersRecommendDemo",li),N("bindPdpDigitalParamDemo",ni),N("bindPdpPathDemo",()=>Ya({bindHoverAutoplay:ct})),N("bindPdpTrustInteractiveDemo",oi),N("bindPdpInsightsExpand",ei),N("bindPdpInsightCharts",si),N("bindPdpInsightPainHeights",Ks),N("bindPdpNativeMarquee",Js),N("bindPdpHierarchy",ui),N("observeMetrics",Ai),Fi(),Mi(),N("observeDesignStickyStrategies",qi),N("observeSubnavReveal",Di)}function Li(){return`
    <nav class="nav ${St.navScrolled?"nav--scrolled":""}" id="nav">
      <div class="nav__inner">
        <a href="#hero" class="nav__logo">${X.name}</a>
        <div class="nav__links">
          <a href="#hero">首页</a>
          <a href="#catalog">目录</a>
          ${lt.map(e=>`<a href="#${e.id}">${e.navLabel||e.title}</a>`).join("")}
          <a href="#contact">联系</a>
        </div>
        <button class="nav__menu-btn" id="menuBtn" aria-label="打开菜单">
          <span></span><span></span>
        </button>
      </div>
      <div class="nav__mobile" id="mobileMenu">
        <a href="#hero">首页</a>
        <a href="#catalog">作品目录</a>
        ${lt.map(e=>`<a href="#${e.id}">${e.navLabel||e.title}</a>`).join("")}
        <a href="#contact">联系方式</a>
      </div>
    </nav>
  `}function Ri(){return`
    <header class="hero" id="hero">
      <div class="hero__bg"></div>
      <div class="hero__content reveal visible">
        <p class="hero__eyebrow">${X.subtitle}</p>
        <h1 class="hero__title">${X.name}</h1>
        <p class="hero__role">${X.role}</p>
        <div class="hero__tags">
          ${X.tags.map(e=>`<span class="tag">${e}</span>`).join("")}
        </div>
        <div class="hero__contact">
          <a href="tel:${X.contact.phone}">${X.contact.phone}</a>
          <a href="mailto:${X.contact.email}">${X.contact.email}</a>
        </div>
      </div>
      <div class="hero__scroll-hint" aria-label="向下滚动">
        <span class="hero__scroll-chevron"></span>
        <span class="hero__scroll-chevron"></span>
      </div>
    </header>
  `}function Ei(){return`
    <section class="section section--catalog" id="catalog">
      <div class="container">
        <div class="section__header reveal visible">
          <p class="section__eyebrow">Contents</p>
          <h2 class="section__title">作品目录</h2>
        </div>
        <div class="catalog-grid">
          ${Pa.map((e,t)=>{const a=ji(e.id);if(!a)return"";const s=a.placeholder;return`
            <a href="#${e.id}" class="catalog-card reveal ${s?"catalog-card--placeholder":""}" style="--delay: ${t*.1}s">
              <div class="catalog-card__cover">
                ${a.cover?`<img src="${a.cover}" alt="${a.title}" loading="lazy" />`:'<div class="catalog-card__cover-placeholder"><span>Case 03</span></div>'}
                <div class="catalog-card__overlay">
                  <span>${s?"敬请期待":"查看详情"}</span>
                </div>
              </div>
              <div class="catalog-card__body">
                <div class="catalog-card__index">${e.index}</div>
                <p class="catalog-card__category">${a.category}</p>
                <h3 class="catalog-card__title">${e.title}</h3>
                <p class="catalog-card__summary">${a.summary}</p>
                <div class="catalog-card__metrics">
                  ${Va(a).map(Xa).join("")}
                </div>
                <span class="catalog-card__link">${s?"查看坑位 →":"进入项目详情 →"}</span>
              </div>
            </a>
          `}).join("")}
        </div>
      </div>
    </section>
  `}function ji(e){return lt.find(t=>t.id===e)}function Bi(e,t){var l;if(e.placeholder)return`
    <section class="project-detail project-detail--placeholder" id="${e.id}" data-project="${e.id}">
      <div class="container">
        <div class="project-placeholder reveal">
          <span class="project-detail__index">0${t+1}</span>
          <p class="project-placeholder__title">${e.title}</p>
          <span class="project-detail__badge">筹备中</span>
          <p class="project-placeholder__desc">${e.summary}</p>
          <p class="project-placeholder__hint">后续补充 PDF 页面与案例内容后，可在 <code>src/data/portfolio.js</code> 中完善该项目数据。</p>
        </div>
      </div>
    </section>
  `;const a=e.sections.map((n,d)=>`
      <a href="#${Ne(e.id,d)}" class="project-subnav__link" data-spy="${Ne(e.id,d)}">
        ${n.label}
      </a>
    `).join(""),i=e.sections.map((n,d)=>{var T,L;const p=((T=n.slides)==null?void 0:T.length)&&!n.analysis&&!n.metrics&&!n.backgroundPanel&&!n.strategyPanel&&!n.pdpDesignPanel,o=p&&((L=n.designHeaders)!=null&&L.length)?cs(n,Ne(e.id,d)):n.slides.map(j=>`
        <figure class="project-section__figure">
          <img src="${j.src}" alt="${j.alt}" loading="lazy" />
        </figure>
      `).join(""),h=n.backgroundPanel?gs(e):"",b=n.strategyPanel?hi(e):"",_=n.pdpDesignPanel?ii(e):"",P=n.analysis?Si(e):"",R=n.metrics?Hi(e,n):"";return`
      <section class="${["project-section",n.metrics?"project-section--results":"",n.analysis?"project-section--analysis":"",n.backgroundPanel?"project-section--background":"",n.strategyPanel?"project-section--strategy":"",n.pdpDesignPanel?"project-section--design":"",p?"project-section--design":""].filter(Boolean).join(" ")}" id="${Ne(e.id,d)}" data-section="${Ne(e.id,d)}" aria-label="${n.label}">
        ${h}
        ${b}
        ${_}
        ${o}
        ${P}
        ${R}
      </section>`}).join(""),r=!!((l=e.heroShowcase)!=null&&l.length);return`
    <section class="project-detail${t>0?" project-detail--continued":""}${e.id==="reverse-flow"?" project-detail--bw":""}${e.id==="invite-activity"?" project-detail--invite":""}${e.id==="pdp-redesign"?" project-detail--pdp":""}${r?" project-detail--has-cover":""}" id="${e.id}" data-project="${e.id}">
      <nav class="project-subnav${r?" project-subnav--cover":""}" data-project-nav="${e.id}" aria-label="章节目录">
        <div class="project-subnav__inner">
          <span class="project-subnav__title">${e.title}</span>
          <div class="project-subnav__links">
            ${a}
          </div>
        </div>
      </nav>

      ${e.id==="pdp-redesign"?hs(e):""}
      ${e.id==="reverse-flow"?fs(e):""}
      ${e.id==="invite-activity"?ms(e):""}

      <div class="project-content">
        <div class="project-sections">
          ${i}
        </div>
      </div>
    </section>
  `}function Ii(){return`
    <footer class="footer" id="contact">
      <div class="container footer__inner">
        <div class="footer__profile">
          <h3>${X.name}</h3>
          <p class="footer__role">${X.role} · ${X.subtitle}</p>
        </div>
        <div class="footer__contact">
          <a href="tel:${X.contact.phone}">${X.contact.phone}</a>
          <span class="footer__contact-sep" aria-hidden="true">·</span>
          <a href="mailto:${X.contact.email}">${X.contact.email}</a>
        </div>
      </div>
    </footer>
  `}function oa(e){const t=parseFloat(e.dataset.count),a=e.dataset.suffix||"",s=parseInt(e.dataset.decimals||"0",10),i=1200,r=performance.now();function l(n){const d=Math.min((n-r)/i,1),p=1-Math.pow(1-d,3),c=t*p;e.textContent=(s>0?c.toFixed(s):Math.round(c))+a,d<1&&requestAnimationFrame(l)}requestAnimationFrame(l)}function Ai(){if(typeof IntersectionObserver>"u")return;const e=document.querySelectorAll("[data-count]"),t=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&!s.target.dataset.animated&&(s.target.dataset.animated="true",oa(s.target))})},{threshold:.15,rootMargin:"0px 0px 0px 0px"});e.forEach(a=>t.observe(a))}function pa(e){const t=e.getBoundingClientRect(),a=window.innerHeight||document.documentElement.clientHeight||800;return t.bottom>0&&t.top<a}function Ie(e=document){e.querySelectorAll(".reveal:not(.visible)").forEach(t=>{pa(t)&&t.classList.add("visible")})}function Mi(){Ie(),requestAnimationFrame(()=>{Ie(),requestAnimationFrame(Ie)}),document.readyState==="complete"?Ie():window.addEventListener("load",()=>Ie(),{once:!0})}function N(e,t){try{t()}catch(a){console.error(`[portfolio init] ${e}`,a)}}function Fi(){const e=document.querySelectorAll(".reveal");if(typeof IntersectionObserver>"u"){e.forEach(a=>a.classList.add("visible"));return}const t=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&s.target.classList.add("visible")})},{threshold:0,rootMargin:"0px 0px -5% 0px"});e.forEach(a=>{t.observe(a),pa(a)&&a.classList.add("visible")})}function Ci(e){const t=e.closest(".project-section--design"),a=t==null?void 0:t.querySelector("[data-design-page-header]"),s=[...(t==null?void 0:t.querySelectorAll("[data-design-slide]"))||[]],i=e.dataset.stickyMode||"strategy",r=i==="invite-title";if(!t||!a||!s.length)return;const l=e.closest("[data-project]"),n=l==null?void 0:l.querySelector(".project-subnav"),d=e.querySelector("[data-sticky-subtitle]"),p=e.querySelector("[data-sticky-strategy-viewport]"),c=e.querySelector("[data-sticky-strategy-track]"),o=()=>{const g=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-height"),10)||72;return n!=null&&n.classList.contains("project-subnav--cover")&&!n.classList.contains("is-revealed")?g:(n==null?void 0:n.getBoundingClientRect().bottom)??g+52};let h=!1,b="",_=-1,P=!1;const R=280,E=g=>r?g.dataset.stickySubtitle||"":`${g.dataset.stickySubtitle}|${g.dataset.stickyLabel}|${g.dataset.stickyStrategy}`,T=()=>{const g=n==null?void 0:n.querySelector(".project-subnav__inner"),m=n==null?void 0:n.querySelector(".project-subnav__title"),v=g==null?void 0:g.getBoundingClientRect(),x=m==null?void 0:m.getBoundingClientRect();e.style.setProperty("--strategy-fixed-top",`${o()}px`),v&&(e.style.setProperty("--strategy-fixed-pad-left",`${(x==null?void 0:x.left)??v.left}px`),e.style.setProperty("--strategy-fixed-pad-right",`${Math.max(0,window.innerWidth-v.right)}px`))},L=g=>{if(g){h?T():(T(),e.classList.add("is-strategy-fixed"),e.setAttribute("aria-hidden","false"),h=!0,e.classList.add("is-strategy-entering"),e.offsetHeight,requestAnimationFrame(()=>{e.classList.remove("is-strategy-entering")}));return}h=!1,b="",_=-1,P=!1,c.style.transition="",c.style.transform="",c.innerHTML="",p.style.height="",e.classList.remove("is-strategy-fixed","is-strategy-entering"),e.setAttribute("aria-hidden","true"),e.style.removeProperty("--strategy-fixed-top"),e.style.removeProperty("--strategy-fixed-pad-left"),e.style.removeProperty("--strategy-fixed-pad-right")},j=g=>{const m=g||c.querySelector(".design-sticky-bar__scroll-body");p.style.height=m?`${m.offsetHeight}px`:""},k=(g,m)=>{!r&&d&&(d.textContent=g.dataset.stickySubtitle||""),c.style.transition="",c.style.transform="",c.innerHTML="";const v=kt(g,i);c.appendChild(v),j(v),b=m,_=s.indexOf(g),P=!1},$=g=>{const m=E(g);if(!m||m===b||P)return;const v=s.indexOf(g);if(!b||_<0){k(g,m);return}const x=c.querySelector(".design-sticky-bar__scroll-body");if(!x){k(g,m);return}const W=v>_,O=kt(g,i);if(P=!0,!r&&d&&(d.textContent=g.dataset.stickySubtitle||""),W){c.appendChild(O);const z=x.offsetHeight;j(x),c.style.transition="none",c.style.transform="translateY(0)",c.offsetHeight,c.style.transition=`transform ${R}ms cubic-bezier(0.4, 0, 0.2, 1)`,c.style.transform=`translateY(-${z}px)`}else{c.insertBefore(O,x);const z=O.offsetHeight;j(x),c.style.transition="none",c.style.transform=`translateY(-${z}px)`,c.offsetHeight,c.style.transition=`transform ${R}ms cubic-bezier(0.4, 0, 0.2, 1)`,c.style.transform="translateY(0)"}window.setTimeout(()=>{c.style.transition="",c.style.transform="",c.innerHTML="";const z=kt(g,i);c.appendChild(z),j(z),b=m,_=v,P=!1},R)},f=()=>{const g=o()+e.offsetHeight+16,m=r?s.filter(x=>x.dataset.stickySubtitle):s;let v=m[0]||s[0];for(const x of m)x.getBoundingClientRect().top<=g&&(v=x);return v},w=()=>{L(!1)},I=()=>{const g=o(),m=t.getBoundingClientRect().bottom,v=a.getBoundingClientRect().bottom;if(m<=g||v>g){w();return}const x=f();if(r&&!x.dataset.stickySubtitle){w();return}L(!0),$(x)};let C=!1;const Y=()=>{C||(C=!0,requestAnimationFrame(()=>{C=!1,I()}))};window.addEventListener("scroll",Y,{passive:!0}),window.addEventListener("resize",Y,{passive:!0}),window.addEventListener("hashchange",w),l==null||l.querySelectorAll(".project-subnav__link").forEach(g=>{g.addEventListener("click",()=>window.setTimeout(I,320))}),I()}function Di(){const e=()=>parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-height"),10)||72,t=()=>parseInt(getComputedStyle(document.documentElement).getPropertyValue("--subnav-height"),10)||52,a=()=>{const r=e(),l=t(),n=[...document.querySelectorAll("[data-project]")];let d=null,p=1/0;n.forEach(c=>{const o=c.getBoundingClientRect();if(o.bottom<=r+8||o.top>=window.innerHeight-8)return;const h=Math.abs(o.top-r);h<p&&(p=h,d=c)}),n.forEach(c=>{const o=c.querySelector(".project-subnav--cover"),h=c.querySelector("[data-subnav-reveal-trigger]"),b=c.querySelectorAll(".project-subnav__link"),_=[...c.querySelectorAll("[data-section]")],P=c.getBoundingClientRect(),R=P.bottom>r+8&&P.top<window.innerHeight-8,E=c===d;if(o&&h)if(!R||!E)o.classList.remove("is-revealed"),c.classList.remove("is-subnav-revealed");else{const w=h.getBoundingClientRect().top<=r+1;o.classList.toggle("is-revealed",w),c.classList.toggle("is-subnav-revealed",w)}if(!b.length||!_.length||!R||!E){b.forEach(w=>w.classList.remove("active"));return}const L=!!o?c.classList.contains("is-subnav-revealed"):!0,j=r+(L?l:0)+20;if(h&&h.getBoundingClientRect().top>j){b.forEach(w=>w.classList.remove("active"));return}const k=j+6;let $=_[0].dataset.section,f=!1;for(const w of _){const I=w.getBoundingClientRect();I.top<=k&&I.bottom>k&&($=w.dataset.section,f=!0)}if(!f)for(const w of _)w.getBoundingClientRect().top<=k&&($=w.dataset.section);b.forEach(w=>{w.classList.toggle("active",w.dataset.spy===$)})}),Ie()};let s=!1;const i=()=>{s||(s=!0,requestAnimationFrame(()=>{s=!1,a()}))};window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i,{passive:!0}),window.addEventListener("hashchange",a),a()}function qi(){document.querySelectorAll("[data-design-sticky-source]").forEach(e=>{Ci(e)})}function Wi(){const e=document.getElementById("menuBtn"),t=document.getElementById("mobileMenu");e==null||e.addEventListener("click",()=>{t.classList.toggle("open"),e.classList.toggle("open")}),t==null||t.querySelectorAll("a").forEach(a=>{a.addEventListener("click",()=>{t.classList.remove("open"),e.classList.remove("open")})}),window.addEventListener("scroll",()=>{const a=document.getElementById("nav"),s=window.scrollY>40;s!==St.navScrolled&&(St.navScrolled=s,a==null||a.classList.toggle("nav--scrolled",s))}),document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",s=>{const i=a.getAttribute("href");if(i==="#")return;const r=document.querySelector(i);r&&(s.preventDefault(),r.scrollIntoView({behavior:"smooth",block:"start"}))})})}Ti();
