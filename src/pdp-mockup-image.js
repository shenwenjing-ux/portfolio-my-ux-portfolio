/** 260px 视口 mockup 图：src + @2x/@3x srcset */

const MOCKUP_SIZES = '260px';

export function buildMockupSrcSet(src, { sharpSrc = false } = {}) {
  if (!src) return { src: '', srcset: '' };

  const [path, query = ''] = src.split('?');
  const suffix = query ? `?${query}` : '';
  const normalized = path.replace(/@[123]x(?=\.[^.]+$)/, '');
  const dot = normalized.lastIndexOf('.');
  if (dot <= 0) return { src, srcset: '' };

  const root = normalized.slice(0, dot);
  const ext = normalized.slice(dot);
  const src1x = `${root}${ext}${suffix}`;
  const src2x = `${root}@2x${ext}${suffix}`;
  const src3x = `${root}@3x${ext}${suffix}`;

  if (sharpSrc) {
    return {
      src: src2x,
      srcset: [`${src1x} 1x`, `${src3x} 3x`].join(', '),
    };
  }

  return {
    src: src1x,
    srcset: [`${src2x} 2x`, `${src3x} 3x`].join(', '),
  };
}

export function renderMockupImg(
  src,
  {
    className = '',
    alt = '',
    loading = 'lazy',
    fetchpriority,
    sizes = MOCKUP_SIZES,
    sharpSrc = false,
    extraAttrs = '',
  } = {}
) {
  if (!src) return '';

  const { src: imgSrc, srcset } = buildMockupSrcSet(src, { sharpSrc });
  const srcsetAttr = srcset ? ` srcset="${srcset}" sizes="${sizes}"` : '';
  const fetchAttr = fetchpriority ? ` fetchpriority="${fetchpriority}"` : '';

  return `<img
              class="${className}"
              src="${imgSrc}"${srcsetAttr}
              alt="${alt}"
              loading="${loading}"${fetchAttr}
              decoding="async"
              draggable="false"
              ${extraAttrs}
            />`;
}
