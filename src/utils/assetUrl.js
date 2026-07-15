/** 将 /images、/demos 等 public 资源路径适配 Vite base（GitHub Pages 子路径） */

/**
 * 规范化为「目录型」base href，避免
 * `github.io/repo`（无尾斜杠）把 `./images` 解析成 `github.io/images`。
 */
function directoryBaseHref() {
  if (typeof document === 'undefined') return null;
  const u = new URL(document.baseURI);
  u.hash = '';
  u.search = '';
  const { pathname } = u;
  if (pathname.endsWith('/')) return u.href;
  const last = pathname.split('/').pop() || '';
  // index.html 等文件：退到所在目录
  if (/\.[a-zA-Z0-9]+$/.test(last)) {
    u.pathname = pathname.replace(/\/[^/]+$/, '/');
  } else {
    // /repo → /repo/
    u.pathname = `${pathname}/`;
  }
  return u.href;
}

export function assetUrl(path) {
  if (!path || typeof path !== 'string') return path;
  if (!path.startsWith('/')) return path;

  const joined = `${import.meta.env.BASE_URL}${path.slice(1)}`;
  const dirBase = directoryBaseHref();
  if (!dirBase) return joined;

  // 输出根相对路径（含仓库前缀），与当前页是否带尾斜杠无关
  const abs = new URL(joined, dirBase);
  return `${abs.pathname}${abs.search}`;
}

export function resolveAssetPaths(value) {
  if (typeof value === 'string') {
    if (value.startsWith('/images/') || value.startsWith('/demos/')) {
      return assetUrl(value);
    }
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(resolveAssetPaths);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, resolveAssetPaths(entry)]),
    );
  }

  return value;
}

/** GitHub Pages 项目页：无尾斜杠时强制补齐，避免相对资源跑到域名根 */
export function ensureTrailingSlash() {
  if (typeof location === 'undefined') return;
  const { pathname, search, hash } = location;
  if (!pathname || pathname.endsWith('/')) return;
  const last = pathname.split('/').pop() || '';
  if (/\.[a-zA-Z0-9]+$/.test(last)) return; // 真实文件不处理
  location.replace(`${pathname}/${search}${hash}`);
}
