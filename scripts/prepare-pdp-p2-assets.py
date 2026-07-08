#!/usr/bin/env python3
"""准备二期 P2 资源：导航 chrome、长图内容、规格示例、同店推荐切图。"""

from pathlib import Path
from typing import Optional

from PIL import Image

ASSETS = Path("/Users/wenjing/.cursor/projects/Users-wenjing-Desktop/assets")
OUT = Path(__file__).resolve().parents[1] / "public" / "images" / "projects"
W, H = 472, 1024
SCROLL_W = 260
NAV_DEFAULT_H = 67
BOTTOM_BAR_H = 113
BG = (242, 242, 245)
STATUS_BAR_CROP_H = 54
HERO_VIEWPORT_RATIO = 0.405


PNG_MAGIC = b"\x89PNG\r\n\x1a\n"


def save_png(im: Image.Image, path: Path) -> None:
    if path.suffix.lower() != ".png":
        raise ValueError(f"expected .png output, got {path}")
    if im.mode == "RGBA":
        im.save(path, format="PNG", optimize=True)
    else:
        im.convert("RGB").save(path, format="PNG", optimize=True)
    with path.open("rb") as fp:
        if fp.read(8) != PNG_MAGIC:
            raise RuntimeError(f"{path.name} was not written as PNG")
    print(f"  {path.name}: {im.size[0]}x{im.size[1]} PNG")


def export_design_png(src: Path, path: Path, width: Optional[int] = None) -> None:
    """设计稿导出为真 PNG（修正 JPEG 误存为 .png 的情况）。"""
    im = Image.open(src)
    if im.mode in ("RGBA", "LA"):
        out = im.convert("RGBA")
    elif im.mode == "P" and "transparency" in im.info:
        out = im.convert("RGBA")
    else:
        out = im.convert("RGB")
    if width and out.width != width:
        ratio = width / out.width
        height = max(1, int(out.height * ratio))
        out = out.resize((width, height), Image.LANCZOS)
    save_png(out, path)


def _param_sheet_rgba(im: Image.Image) -> Image.Image:
    """圆角面板外黑底转透明，保留白底与文字。"""
    out = im.convert("RGBA")
    px = out.load()
    for y in range(out.height):
        for x in range(out.width):
            r, g, b, a = px[x, y]
            if max(r, g, b) < 60:
                px[x, y] = (0, 0, 0, 0)
            elif min(r, g, b) > 248:
                px[x, y] = (255, 255, 255, 255)
            else:
                px[x, y] = (r, g, b, 255)
    return out


def export_param_sheet_png(src: Path, path: Path, width: int = W) -> None:
    """参数浮层：整页即面板切图，缩放到 472×662 并导出 @2x/@3x（源图可为 JPEG/PNG）。"""
    src_im = Image.open(src)
    if src_im.format and src_im.format.upper() != "PNG":
        print(f"  note: {src.name} is {src_im.format}, converting to PNG")
    im = _param_sheet_rgba(src_im)

    def write_variant(out_width: int, out_path: Path) -> None:
        out_height = max(1, int(round(662 * out_width / width)))
        variant = _param_sheet_rgba(im.resize((out_width, out_height), Image.LANCZOS))
        save_png(variant, out_path)

    write_variant(width, path)
    write_variant(int(width * 520 / 472), path.with_name(path.stem + "@2x" + path.suffix))
    write_variant(int(width * 780 / 472), path.with_name(path.stem + "@3x" + path.suffix))


def scale_to_width(im: Image.Image, width: int = W) -> Image.Image:
    if im.width == width:
        return im.convert("RGB")
    ratio = width / im.width
    height = max(1, int(im.height * ratio))
    return im.convert("RGB").resize((width, height), Image.LANCZOS)


def export_flowers_scroll_page(src: Path, path: Path, design_w: int = 750, status_h: int = 88) -> None:
    """从完整商详截图裁掉状态栏、默认顶导与底栏，仅保留可滚动内容区。"""
    im = Image.open(src).convert("RGB")
    scale = im.width / design_w
    nav_h = NAV_DEFAULT_H * (design_w / W)
    bottom_h = BOTTOM_BAR_H * (design_w / W)
    top = int(round((status_h + nav_h) * scale))
    bottom = int(round(bottom_h * scale))
    body = im.crop((0, top, im.width, im.height - bottom))
    save_png(scale_to_width(body, SCROLL_W), path)
    save_png(scale_to_width(body, SCROLL_W * 2), path.with_name(path.stem + "@2x" + path.suffix))
    save_png(scale_to_width(body, SCROLL_W * 3), path.with_name(path.stem + "@3x" + path.suffix))


def export_top_combined(merged_src: Path, nav_src: Path, path: Path) -> None:
    """合并状态栏 + 顶导航 Tab 行为单层 chrome。"""
    merged = Image.open(merged_src).convert("RGB")
    nav = Image.open(nav_src).convert("RGB")
    w = merged.width
    status_h = min(STATUS_BAR_CROP_H, merged.height)
    status = merged.crop((0, 0, w, status_h))
    canvas_h = status_h + nav.height
    canvas = Image.new("RGB", (w, canvas_h), (0, 0, 0))
    canvas.paste(status, (0, 0))
    canvas.paste(nav, (0, status_h))
    save_png(scale_to_width(canvas, W), path)
    print(f"    combined ratio: status={status_h}, nav={nav.height}, total={canvas_h}")


def export_status_bar_v2(src: Path, path: Path) -> None:
    """从新版状态栏条带裁切纯黑状态栏区域。"""
    im = Image.open(src).convert("RGB")
    bar_h = min(STATUS_BAR_CROP_H, im.height)
    cropped = im.crop((0, 0, im.width, bar_h))
    save_png(scale_to_width(cropped, W), path)


def export_nav_strip(src: Path, path: Path) -> None:
    """顶导航行（默认态 / 滑动态）· 黑底抠透明 · 472/@2x/@3x。"""

    def process(width: int) -> Image.Image:
        im = scale_to_width(Image.open(src).convert("RGBA"), width)
        px = im.load()
        for y in range(im.height):
            for x in range(im.width):
                r, g, b, a = px[x, y]
                if r < 24 and g < 24 and b < 24:
                    px[x, y] = (0, 0, 0, 0)
                else:
                    px[x, y] = (r, g, b, 255)
        return im

    save_png(process(W), path)
    save_png(process(int(W * 520 / 472)), path.with_name(path.stem + "@2x" + path.suffix))
    save_png(process(int(W * 780 / 472)), path.with_name(path.stem + "@3x" + path.suffix))


def export_status_bar(src: Path, path: Path) -> None:
    im = Image.open(src).convert("RGB")
    bar_h = min(STATUS_BAR_CROP_H, im.height)
    cropped = im.crop((0, 0, im.width, bar_h))
    save_png(scale_to_width(cropped, W), path)


def patch_scroll_hero(scroll_src: Path, hero_src: Path, path: Path) -> None:
    scroll = scale_to_width(Image.open(scroll_src).convert("RGB"), W)
    hero = scale_to_width(Image.open(hero_src).convert("RGB"), W)
    status_skip = int(hero.height * (STATUS_BAR_CROP_H / H))
    hero_body = hero.crop((0, status_skip, W, hero.height))
    hero_h = min(int(H * HERO_VIEWPORT_RATIO), hero_body.height, scroll.height)
    patch = hero_body.crop((0, 0, W, hero_h))
    scroll.paste(patch, (0, 0))
    save_png(scroll, path)


def crop_hero_variants(src: Path, out_dir: Path) -> None:
    im = Image.open(src).convert("RGB")
    w, h = im.size
    hero_h = int(h * HERO_VIEWPORT_RATIO)
    row_y = int(h * HERO_VIEWPORT_RATIO)
    row_h = int(h * 0.095)
    label_w = int(w * 0.11)
    gap = int(w * 0.012)
    count = 6
    usable = w - label_w - int(w * 0.04)
    thumb_w = (usable - gap * (count - 1)) // count

    for i in range(count):
        x0 = label_w + i * (thumb_w + gap)
        thumb = im.crop((x0, row_y, x0 + thumb_w, row_y + row_h))
        hero = thumb.resize((w, hero_h), Image.LANCZOS)
        idx = i + 1
        save_png(thumb, out_dir / f"pdp-p2-flowers-thumb-{idx:02d}.png")
        save_png(hero, out_dir / f"pdp-p2-flowers-hero-{idx:02d}.png")


def main():
    OUT.mkdir(parents=True, exist_ok=True)

    mapping = {
        "pdp-p2-digital-param-page.png": ASSETS / "___-66e0f82f-dcec-400b-9d0d-89775a6d686a.png",
        "pdp-p2-digital-param-sheet.png": ASSETS / "____-82deac1e-8de8-465e-a310-c270beceb2a6.png",
        "pdp-p2-flowers-after-v4.png": ASSETS / "________-525c644b-49ef-4c88-8b84-733c961b3496.png",
        "pdp-p2-chrome-status-bar.png": ASSETS / "___-9b5adb66-de13-47fc-a31b-d14321b61f47.png",
        "pdp-p2-chrome-top-nav-default.png": ASSETS / "______-a8827522-59a8-4640-a5c4-2983c3b649fe.png",
        "pdp-p2-chrome-top-nav-pinned.png": ASSETS / "_____-68f89a3b-d27e-4450-9110-7d422fcf6c58.png",
        "pdp-p2-chrome-top-nav.png": ASSETS / "_____-68f89a3b-d27e-4450-9110-7d422fcf6c58.png",
        "pdp-p2-chrome-bottom-bar.png": ASSETS / "_____-f6230ef2-125f-4134-836a-048fcaac9dbb.png",
        "pdp-p2-flowers-scroll-page.png": OUT / "pdp-p2-flowers-interactive.png",
        "pdp-p2-spec-flowers.png": ASSETS / "_____-81698e3c-564b-4cff-b495-6c835caa6dd9.png",
        "pdp-p2-spec-digital.png": ASSETS / "___-e975917d-8f7e-4a37-93cb-009b40a6acf4.png",
        "pdp-p2-flowers-hero-source.png": ASSETS / "_____-81698e3c-564b-4cff-b495-6c835caa6dd9.png",
    }

    print("export assets:")
    for name, src in mapping.items():
        if not src.exists():
            print(f"  missing: {src}")
            continue
        if name == "pdp-p2-chrome-top-combined.png":
            export_top_combined(
                ASSETS / "_______-045293b3-8cf7-4901-b3c5-f315c46e1a36.png",
                ASSETS / "_____-68f89a3b-d27e-4450-9110-7d422fcf6c58.png",
                OUT / name,
            )
        elif name == "pdp-p2-chrome-status-bar.png":
            export_status_bar_v2(src, OUT / name)
        elif name in ("pdp-p2-chrome-top-nav-default.png", "pdp-p2-chrome-top-nav-pinned.png", "pdp-p2-chrome-top-nav.png"):
            export_nav_strip(src, OUT / name)
        elif name == "pdp-p2-flowers-after-v4.png":
            export_design_png(src, OUT / name, width=W)
        elif name == "pdp-p2-flowers-scroll-page.png":
            export_flowers_scroll_page(
                OUT / "pdp-p2-flowers-interactive.png",
                OUT / name,
            )
        elif name.startswith("pdp-p2-chrome"):
            save_png(scale_to_width(Image.open(src), W), OUT / name)
        elif name.startswith("pdp-p2-spec"):
            export_design_png(src, OUT / name)
        elif name == "pdp-p2-digital-param-page.png":
            export_design_png(src, OUT / name, width=W)
        elif name == "pdp-p2-digital-param-sheet.png":
            export_param_sheet_png(src, OUT / name, width=W)
        else:
            save_png(Image.open(src), OUT / name)

    hero_src = OUT / "pdp-p2-flowers-hero-source.png"
    if hero_src.exists():
        print("flower hero variants:")
        crop_hero_variants(hero_src, OUT)

    print("done")


if __name__ == "__main__":
    main()
