# 申文靖 · UX Design Portfolio

将 PDF 作品集转化为可交互的单页网站（2021–2026）。

## 当前版本

- 21 页 PDF 完整导出
- 封面个人信息（申文靖 · 产品设计师）
- 作品目录（逆向链路标杆化 / 拉新全链路优化）
- 2 个完整项目案例，各 9 页幻灯片
- 联系方式与页脚

## 功能特性

- 响应式布局，支持桌面与移动端
- 项目卡片概览与详情页
- 幻灯片浏览器（缩略图、章节导航、键盘/按钮切换）
- 全屏 Lightbox 查看设计稿
- 数据指标数字动画
- 滚动渐入动画

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
├── public/images/pages/   # 从 PDF 导出的页面图片
├── src/
│   ├── data/portfolio.js  # 作品集内容与数据
│   ├── styles/main.css    # 样式
│   └── main.js            # 交互逻辑
└── index.html
```

## 自定义

编辑 `src/data/portfolio.js` 可修改：
- 网站标题与描述
- 项目背景、痛点、策略文案
- 数据指标
- 章节名称

如需更新设计稿图片，替换 `public/images/pages/` 中的 JPG 文件即可。
