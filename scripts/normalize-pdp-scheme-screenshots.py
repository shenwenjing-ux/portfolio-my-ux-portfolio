#!/usr/bin/env python3
"""统一三类品类 scheme 截图与灰图框架的内容区边距 (472×1024)。"""

from pathlib import Path

from PIL import Image

W, H = 472, 1024
MARGIN = 20
CONTENT_TOP = 22
CONTENT_BOTTOM = 1013
CONTENT_H = CONTENT_BOTTOM - CONTENT_TOP + 1
INNER_W = W - MARGIN * 2
BG = (242, 242, 245)

FILES = [
    "pdp-p1-scheme-framework-after.png",
    "pdp-p1-milk-before.png",
    "pdp-p1-milk-after.png",
    "pdp-p1-flowers-before.png",
    "pdp-p1-flowers-after.png",
    "pdp-p1-digital-before.png",
    "pdp-p1-digital-after.png",
]


def content_bbox(im: Image.Image, bg_tol: int = 14):
    px = im.load()
    w, h = im.size
    bg = px[w // 2, 0]
    xs, ys = [], []
    step = max(1, w // 80)
    for y in range(0, h, 2):
        for x in range(0, w, step):
            r, g, b = px[x, y]
            if abs(r - bg[0]) + abs(g - bg[1]) + abs(b - bg[2]) > bg_tol:
                xs.append(x)
                ys.append(y)
    if not xs:
        return (0, 0, w - 1, h - 1)
    return (min(xs), min(ys), max(xs), max(ys))


def normalize(path: Path) -> None:
    im = Image.open(path).convert("RGB")
    x0, y0, x1, y1 = content_bbox(im)
    content = im.crop((x0, y0, x1 + 1, y1 + 1))
    scale = min(INNER_W / content.width, CONTENT_H / content.height)
    new_w = max(1, int(content.width * scale))
    new_h = max(1, int(content.height * scale))
    content = content.resize((new_w, new_h), Image.LANCZOS)
    canvas = Image.new("RGB", (W, H), BG)
    x = (W - new_w) // 2
    y = CONTENT_TOP
    canvas.paste(content, (x, y))
    canvas.save(path, optimize=True)
    print(f"  {path.name}: {new_w}x{new_h} @ ({x},{y})")


def main():
    out_dir = Path(__file__).resolve().parents[1] / "public" / "images" / "projects"
    for name in FILES:
        path = out_dir / name
        if not path.exists():
            print(f"skip missing: {name}")
            continue
        normalize(path)
    print("done")


if __name__ == "__main__":
    main()
