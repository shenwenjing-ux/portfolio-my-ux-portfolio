# Cursor × UX 作品集网站：制作认知沉淀

> 基于「申文靖 UX Design Portfolio」从零到上线的完整过程整理。  
> 技术栈：Vite 6 + 原生 JavaScript + 静态资源，部署至 Netlify / GitHub Pages。

---

## 一、项目全景

### 1.1 这是什么类型的项目

| 维度 | 说明 |
|------|------|
| 性质 | 设计师个人作品集，单页滚动 + 多项目详情 |
| 技术 | Vite 构建，无 React/Vue，数据驱动（`portfolio.js`） |
| 资源 | 大量 JPG/PNG 静态图（约 90MB+ build 产物） |
| 发布 | Netlify Drop（拖 `dist`）+ GitHub Pages（Actions 自动构建） |

### 1.2 关键目录

```
├── index.html              # 开发入口（指向 /src/main.js）
├── src/
│   ├── main.js             # 页面渲染与交互（5000+ 行）
│   ├── data/portfolio.js   # 文案、指标、图片路径——改内容主要改这里
│   ├── utils/assetUrl.js   # 图片路径适配部署 base
│   └── styles/main.css
├── public/images/          # 静态图片（构建时复制到 dist）
├── dist/                   # 构建产物（.gitignore，部署用）
└── vite.config.js          # base、IIFE 构建、HTML 后处理
```

---

## 二、用 Cursor 高效协作的方法

### 2.1 提需求时怎么描述最有效

**UI 改动：带上 DOM 路径 + 期望**

Cursor 能精确定位元素。好的提问示例：

> 「DOM Path: `section#catalog > ... > .catalog-card__overlay`  
> 将项目 3 目录封面改为使用 `#pdp-redesign` hero 里的两张商详图，默认态加 30% 黑色蒙层。」

**部署问题：带截图 + URL**

> 「Netlify 发布后空白页，地址是 `xxx.netlify.app`」  
> Agent 会 curl 线上 HTML，对比本地 `dist`，快速定位路径 404。

**数据改动：说明数据源**

> 「把商详二期结果页的三个指标补充到作品目录卡片里」  
> Agent 会去 `portfolio.js` 的 `metricGroups` / `pdpResultSections` 找数据对齐。

### 2.2 适合交给 Cursor 做的事

- 改 `vite.config.js`、修复空白页、路径适配
- 复用已有组件/样式（如 hero 双图 → catalog 封面）
- 排查 z-index、蒙层、间距等 CSS 层级问题
- 写 Git commit summary、解释 Push 失败原因
- 本地 `npm run build` 并验证 bundle 是否包含新代码

### 2.3 你需要自己完成的事

- **GitHub Push**（国内网络 SSL 不稳定，需 VPN/热点）
- **Netlify 手动拖包**（Drop 不会自动 build）
- **GitHub Desktop 登录与 SSH 配置**
- **最终视觉验收**（间距、蒙层深浅等主观判断）

### 2.4 Cursor 使用原则（本项目验证有效）

1. **一次说清目标**，比多轮「还是不对」更高效  
2. **改代码 ≠ 改线上**：源码改了必须 `npm run build`，Netlify 要重新上传 `dist`  
3. **开发看 `npm run dev`，发布看 `npm run build` + preview**  
4. **不要双击 `dist/index.html`** 验效果（见下文空白页章节）  
5. **Commit 前先本地刷新确认**，再让 Agent 写 summary

---

## 三、部署认知（最容易踩坑）

### 3.1 三种访问方式对比

| 方式 | 命令/操作 | 何时使用 |
|------|-----------|----------|
| 开发模式 | `npm run dev` → localhost:5173 | 日常改 UI/文案 |
| 预览构建 | `npm run build` → `npm run preview` | 发布前验收 |
| 双击 HTML | 打开 `dist/index.html` | ❌ 不推荐（需 IIFE 配置才可用） |
| Netlify | 拖 `dist` 文件夹 | 快速上线、国内访问较稳 |
| GitHub Pages | Push + Actions | 与代码仓库绑定、自动部署 |

### 3.2 空白页根因清单

本项目遇到过 **三类** 空白页，原因不同：

#### ① 资源路径错误（Netlify 最常见）

```html
<!-- 错误：GitHub Pages 子路径写死在 build 里 -->
<script src="/portfolio-my-ux-portfolio/assets/index-xxx.js">

<!-- 正确：相对路径，根域名和子路径都能用 -->
<script defer src="./assets/index-xxx.js">
```

**修复**：`vite.config.js` 设置 `base: './'`，重新 build。

#### ② ES Module + file:// 协议

Chrome 用 `file://` 打开本地 HTML 时，会拦截 `type="module"` 的脚本。

**修复**：构建为 IIFE + 去掉 `type="module"` + 加 `defer`。

#### ③ 脚本执行早于 DOM

`<script>` 在 `<head>` 且无 `defer` 时，`#app` 还不存在就执行 `render()`。

**修复**：`<script defer src="...">` 或把 script 放到 `</body>` 前。

### 3.3 当前 vite.config 核心配置（可直接复用）

```javascript
export default defineConfig({
  base: './',                    // Netlify + GitHub Pages 通用
  build: {
    modulePreload: false,
    rollupOptions: {
      output: {
        format: 'iife',          // 单文件，非 ES module
        inlineDynamicImports: true,
      },
    },
  },
  // closeBundle 插件：去掉 type="module"，加 defer
});
```

### 3.4 GitHub Pages 子路径图片

若仓库名是 `portfolio-my-ux-portfolio`，Pages URL 带子路径。  
图片若写死 `/images/...` 会 404。

**方案**：`src/utils/assetUrl.js` 用 `import.meta.env.BASE_URL` 拼接路径。  
使用相对 base `'./'` 后，Netlify 与 GitHub Pages 通常都能工作。

### 3.5 Netlify Drop 注意事项

- 上传 **`dist` 文件夹内容**，不是项目根目录  
- `index.html` 必须在包根目录  
- 改代码后 **必须重新 build + 重新拖包**  
- `dist` 在 `.gitignore` 里，不会随 Git Push 自动更新 Netlify

---

## 四、Git / GitHub 协作认知

### 4.1 本地先有代码、GitHub 先有空仓库

典型场景：GitHub 创建仓库时勾了 README → 远程 1 个 commit，本地 N 个 commit，**历史 unrelated**。

| 现象 | 处理 |
|------|------|
| GitHub Desktop Pull 报 `Unable to merge unrelated histories` | 终端：`git fetch origin && git merge origin/main --allow-unrelated-histories` |
| README 冲突 | 保留本地完整 README 即可 |
| Push 报 `SSL_ERROR_SYSCALL` | 换热点/VPN；或 `git -c http.version=HTTP/1.1 push`；或改 SSH |

### 4.2 什么时候 Pull，什么时候只 Push

```
本地已 commit，远程无新 commit  →  直接 Push
远程有 ↓ 数字                    →  先 Pull（或 merge）再 Push
改完代码未 commit               →  先 Commit 再 Push
```

**Summary** 填在 GitHub Desktop 左下角第一行，是 commit message，不是改代码的地方。

### 4.3 GitHub Pages 开启方式

Settings → Pages → Source 选 **GitHub Actions**（不是 Deploy from branch）。  
仓库需有 `.github/workflows/deploy.yml`：`npm ci` → `npm run build` → 上传 `dist`。

---

## 五、内容与 UI 的数据驱动模式

### 5.1 改文案 / 指标 / 图片路径

**主文件**：`src/data/portfolio.js`

| 字段 | 用途 |
|------|------|
| `catalog[]` | 作品目录三项的标题、序号 |
| `projects[].heroShowcase` | 项目详情页 hero 双图/多图 |
| `projects[].cover` | 目录卡片封面（可被自定义渲染覆盖） |
| `projects[].metrics` | 目录卡片底部指标（简单数组） |
| `projects[].metricGroups` | 分组指标（邀新、商详等） |
| `projects[].pdpResultSections` | 商详结果页详细数据 |

目录卡片指标读取逻辑（`main.js`）：

```javascript
function getCatalogMetrics(project) {
  if (project.metricGroups?.[0]?.metrics?.length) {
    return project.metricGroups[0].metrics.slice(0, 3);
  }
  return (project.metrics ?? []).slice(0, 3);
}
```

**认知**：要给目录加数据，优先在对应 `project` 上补 `metricGroups` 或 `metrics`，并确认 `getCatalogMetrics` 能读到。

### 5.2 复用 hero 资源到目录封面

不必 duplicate 图片路径。在 `renderCatalogCover(project)` 中：

```javascript
if (project.id === 'pdp-redesign' && project.heroShowcase?.length >= 2) {
  // 直接用 heroShowcase[0] 牛奶、heroShowcase[1] 鲜花
}
```

**好处**：详情页换图，目录封面同步更新。

### 5.3 蒙层与层级（CSS 经验值）

| 状态 | 样式 | 数值 |
|------|------|------|
| 项目 1/2 悬停蒙层 | `.catalog-card__overlay` | `rgba(0,0,0,0.5)`，默认 `opacity:0`，hover 为 1 |
| 项目 3 默认蒙层 | `::after` on cover | `rgba(0,0,0,0.3)` 常显 |
| 项目 3 悬停 | overlay 显示，::after 淡出 | z-index: 图片 0~2 → 默认蒙层 2 → overlay 3 |

---

## 六、常见问题速查

| 现象 | 原因 | 解决 |
|------|------|------|
| 线上空白，Network 里 JS 404 | 旧 dist 或 base 路径错 | `base:'./'`，重新 build 上传 |
| 本地改完没变化 | 在看旧 dist 或没重启 dev | `npm run dev` 或 rebuild |
| 双击 index.html 空白 | file:// + module 限制 | 用 dev/preview，或 IIFE 配置 |
| GitHub Desktop Pull 失败 | unrelated histories | 终端 merge + allow-unrelated-histories |
| Push 超时/SSL 错误 | 网络 | 热点/VPN/SSH/HTTP1.1 |
| 目录没数据 | portfolio.js 未 commit 或未 build | 检查 git status，`npm run build` |
| npm 报错 ENOENT | 不在项目目录 | `cd` 到含 package.json 的目录 |

---

## 七、推荐工作流（给未来的自己）

### 日常改设计/文案

```bash
cd "/path/to/作品集网站制作"
npm run dev
# 浏览器打开 http://localhost:5173
# 改 src/data/portfolio.js 或 src/styles/main.css
# 满意后 GitHub Desktop Commit
```

### 发布到 Netlify

```bash
npm run build
# Finder 打开 dist → 拖到 Netlify Deploys
# 浏览器 Cmd+Shift+R 强刷
```

### 发布到 GitHub Pages

```bash
# GitHub Desktop: Commit → Push（需稳定网络）
# 等 Actions 绿勾 → 访问 *.github.io/repo-name/
```

### 让 Cursor 改 UI 的标准话术模板

```
【目标】（一句话）
【位置】DOM Path: ... 或 组件/文件名
【参考】（可选）复用 xxx 页面的样式/图片
【约束】（可选）默认态/悬停态、蒙层百分比、间距等；明确「不要动」的范围
【验收】npm run dev 下可见 / 需 rebuild dist；涉及 demo 时悬停验证自动播放
```

---

## 七 B、三类高发误伤（AI 实现时的根因）

| 现象 | 根因 | 防呆 |
|------|------|------|
| 换图却删了其它图 / 圆角变了 | 改了整段数组或过宽 CSS 选择器 | 只改点名路径；选择器加区块前缀；数组长度保持 |
| Demo 不自动播 | 误伤 hover/is-playing/Observer/定时器 | 改样式勿动 demo JS；改完悬停验收 |
| 白底浅字看不清 | 只改 background、未成套改文字色；白层叠在深色上 | 背景+文字+边框成套；改区块主题而非叠层 |

详见 `docs/设计师与Cursor高效协作指南.md` 第五节 B。

---

## 八、给设计师同行的建议

1. **作品集不必上 React**：静态站 + Vite 足够，加载快、部署简单、Cursor 改起来直观。  
2. **内容数据化**：把 PDF 文案、指标、图片路径放进一个 JS 文件，改内容不用碰 HTML。  
3. **先 Netlify 后 GitHub**：国内 Push 不稳定时，Netlify Drop 是最快的「给别人看」方式。  
4. **源码 ≠ 线上**：这是设计师最容易忽略的一点——每次改完都要 build。  
5. **用 Cursor 当「懂部署的前端搭档」**：你负责审美与内容，Agent 负责路径、构建、Git 报错解释。

---

## 九、本项目关键 Commit 主题（便于回溯）

| 主题 | 内容 |
|------|------|
| GitHub Pages 子路径 | assetUrl、deploy.yml |
| dist 空白页 | base `./`、IIFE、defer |
| 商详目录封面 | hero 双图 mockup、蒙层、间距 |
| 商详二期数据 | metricGroups 补充目录指标 |

---

*文档版本：2026-07，随项目演进可继续追加章节。*
