#!/usr/bin/env python3
"""准备商详 scheme 图片：校正品类映射，全宽原图保留，窄图居中填充。"""

from pathlib import Path

from PIL import Image

W, H = 472, 1024
BG = (242, 242, 245)
REF_TOP = 22
REF_BOTTOM = 1013
REF_H = REF_BOTTOM - REF_TOP + 1
INNER_W = W - 40

ASSETS = Path("/Users/wenjing/.cursor/projects/Users-wenjing-Desktop/assets")
DESKTOP = Path("/Users/wenjing/Desktop")

# 一期 · 改版前/后正确映射
PHASE1 = {
    "pdp-p1-milk-before.png": ASSETS / "__-___-338ca464-c7bb-49b0-867b-6c0098ade246.png",
    "pdp-p1-milk-after.png": ASSETS / "__-___-3d238b34-51c7-408d-a698-3054a0d981f1.png",
    "pdp-p1-flowers-before.png": ASSETS / "__-___-79899478-e8d4-448d-8e73-0b8225d9f845.png",
    "pdp-p1-flowers-after.png": ASSETS / "__-___-5ea0788c-4758-4cf6-944f-f9b7b99cf1c6.png",
    "pdp-p1-digital-before.png": ASSETS / "__-___-8d7e009e-7f9f-4638-a13f-0c643abc59fc.png",
    "pdp-p1-digital-after.png": ASSETS / "__-___-6b2c709d-2429-4ff1-86e4-28c6b2924fe0.png",
}

# 二期 · 路径演示（搜索 → 商详浮层）
PATH_DEMO = {
    "pdp-p2-flowers-path-search.png": ASSETS / "_______-da3842dd-003f-42ac-a91e-415edaa07ca0.png",
}

# 二期 · 最终定稿（桌面高清源图 1500px 宽）
PHASE2 = {
    "pdp-p2-flowers-final-before.png": DESKTOP / "鲜花-改版前.png",
    "pdp-p2-flowers-interactive.png": DESKTOP / "鲜花-商详最新版.png",
    "pdp-p2-digital-final-before.png": DESKTOP / "数码-改版前.png",
    "pdp-p2-digital-final-after.png": DESKTOP / "数码-商详最新版.png",
}


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


def copy_fullwidth(src: Path, dst: Path) -> None:
    im = Image.open(src).convert("RGB")
    if im.size == (W, H):
        im.save(dst, optimize=True)
        print(f"  {dst.name}: copy {im.size}")
        return
    canvas = Image.new("RGB", (W, H), BG)
    x = (W - im.width) // 2
    y = 0 if im.height >= H - 4 else max(0, (H - im.height) // 2)
    canvas.paste(im, (x, y))
    canvas.save(dst, optimize=True)
    print(f"  {dst.name}: center {im.size} -> ({x},{y})")


def pad_narrow_shot(src: Path, dst: Path) -> None:
    im = Image.open(src).convert("RGB")
    x0, y0, x1, y1 = content_bbox(im)
    content = im.crop((x0, y0, x1 + 1, y1 + 1))
    scale = min(INNER_W / content.width, REF_H / content.height)
    new_w = max(1, int(content.width * scale))
    new_h = max(1, int(content.height * scale))
    if (new_w, new_h) != content.size:
        content = content.resize((new_w, new_h), Image.LANCZOS)
    canvas = Image.new("RGB", (W, H), BG)
    x = (W - new_w) // 2
    y = REF_TOP
    canvas.paste(content, (x, y))
    canvas.save(dst, optimize=True)
    print(f"  {dst.name}: pad {new_w}x{new_h} @ ({x},{y})")


def pad_narrow_shot_fill_width(src: Path, dst: Path) -> None:
    """窄图按改版前同宽缩放，超出画布高度从底部裁切，保证框内手机宽度一致。"""
    im = Image.open(src).convert("RGB")
    x0, y0, x1, y1 = content_bbox(im)
    content = im.crop((x0, y0, x1 + 1, y1 + 1))
    scale = INNER_W / content.width
    new_w = INNER_W
    new_h = max(1, int(content.height * scale))
    if (new_w, new_h) != content.size:
        content = content.resize((new_w, new_h), Image.LANCZOS)
    canvas = Image.new("RGB", (W, H), BG)
    x = (W - new_w) // 2
    y = REF_TOP
    canvas.paste(content, (x, y))
    canvas.save(dst, compress_level=0)
    print(f"  {dst.name}: fill-width {new_w}x{new_h} @ ({x},{y})")


def flatten_rgba(im: Image.Image) -> Image.Image:
    if im.mode in ("RGBA", "LA"):
        if im.mode == "LA":
            im = im.convert("RGBA")
        canvas = Image.new("RGB", im.size, BG)
        canvas.paste(im, mask=im.split()[3])
        return canvas
    if im.mode == "P" and "transparency" in im.info:
        im = im.convert("RGBA")
        canvas = Image.new("RGB", im.size, BG)
        canvas.paste(im, mask=im.split()[3])
        return canvas
    return im.convert("RGB")


def export_hi_res_shot(src: Path, dst: Path) -> None:
    """高清图：保留原分辨率完整输出，仅缩小不放大。"""
    im = flatten_rgba(Image.open(src))
    if im.width < 450:
        export_phase2_after_long(src, dst)
        return
    im.save(dst, compress_level=1)
    print(f"  {dst.name}: hi-res {im.size[0]}x{im.size[1]}")


def export_phase2_after_long(src: Path, dst: Path) -> None:
    """窄图兜底：按同宽缩放，保留完整高度，不裁切。"""
    im = Image.open(src).convert("RGB")
    if im.width >= 450:
        im.save(dst, compress_level=0)
        print(f"  {dst.name}: copy full {im.size}")
        return
    x0, y0, x1, y1 = content_bbox(im)
    content = im.crop((x0, y0, x1 + 1, y1 + 1))
    scale = INNER_W / content.width
    new_w = INNER_W
    new_h = max(1, int(content.height * scale))
    content = content.resize((new_w, new_h), Image.LANCZOS)
    bottom_pad = 11
    canvas_h = REF_TOP + new_h + bottom_pad
    canvas = Image.new("RGB", (W, canvas_h), BG)
    x = (W - new_w) // 2
    canvas.paste(content, (x, REF_TOP))
    canvas.save(dst, compress_level=0)
    print(f"  {dst.name}: long {W}x{canvas_h} content {new_w}x{new_h}")


def ensure_png(src_path: Path) -> None:
    """将误存为 .png 的 JPEG 等格式转为真实 PNG。"""
    if not src_path.exists():
        return
    with Image.open(src_path) as im:
        fmt = im.format
        if fmt == "PNG":
            return
        out_im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
        out_im.save(src_path, format="PNG", optimize=True)
        print(f"  converted to PNG: {src_path.name} (was {fmt})")


def pad_phone_shot(src: Path, dst: Path) -> None:
    im = Image.open(src)
    if im.width >= 450:
        copy_fullwidth(src, dst)
    else:
        pad_narrow_shot(src, dst)


def pad_phase2_after_shot(src: Path, dst: Path) -> None:
    export_phase2_after_long(src, dst)


def align_wireframe(wireframe: Path, ref: Path) -> None:
    ref_im = Image.open(ref).convert("RGB")
    _, ry0, _, ry1 = content_bbox(ref_im)
    ref_h = ry1 - ry0 + 1
    im = Image.open(wireframe).convert("RGB")
    x0, y0, x1, y1 = content_bbox(im)
    content = im.crop((x0, y0, x1 + 1, y1 + 1))
    scale = min(INNER_W / content.width, ref_h / content.height)
    new_w = max(1, int(content.width * scale))
    new_h = max(1, int(content.height * scale))
    content = content.resize((new_w, new_h), Image.LANCZOS)
    canvas = Image.new("RGB", (W, H), BG)
    x = (W - new_w) // 2
    canvas.paste(content, (x, REF_TOP))
    canvas.save(wireframe, optimize=True)
    print(f"  wireframe aligned: {new_w}x{new_h}")


def main():
    out = Path(__file__).resolve().parents[1] / "public" / "images" / "projects"

    print("phase1 scheme images:")
    for name, src in PHASE1.items():
        if src.exists():
            pad_phone_shot(src, out / name)
        else:
            print(f"  missing: {name}")

    wf = out / "pdp-p1-scheme-framework-after.png"
    ref = out / "pdp-p1-flowers-before.png"
    if wf.exists() and ref.exists():
        print("align wireframe:")
        align_wireframe(wf, ref)

    print("phase2 final compare:")
    for name, src in PHASE2.items():
        if not src.exists():
            print(f"  missing: {name}")
            continue
        if name.endswith("-after.png") or name.endswith("-interactive.png"):
            export_hi_res_shot(src, out / name)
        else:
            export_hi_res_shot(src, out / name)

    print("path demo images:")
    for name, src in PATH_DEMO.items():
        if src.exists():
            pad_phone_shot(src, out / name)
        else:
            print(f"  missing: {name}")

    print("ensure PNG format:")
    for path in sorted(out.glob("pdp-p*.png")):
        ensure_png(path)

    print("done")


if __name__ == "__main__":
    main()
