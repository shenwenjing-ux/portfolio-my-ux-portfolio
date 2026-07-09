/** 将 /images、/demos 等 public 资源路径适配 Vite base（GitHub Pages 子路径） */
export function assetUrl(path) {
  if (!path || typeof path !== 'string') return path;
  if (!path.startsWith('/')) return path;
  return `${import.meta.env.BASE_URL}${path.slice(1)}`;
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
