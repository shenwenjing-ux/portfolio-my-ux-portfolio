#!/usr/bin/env python3
"""生成商详改版前后页面框架灰图 (472×1024)，四边安全距离一致。"""

import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

W, H = 472, 1024
OUT_DIR = Path(__file__).resolve().parents[1] / "public" / "images" / "projects"

SCREEN_BG = (242, 242, 245)
CARD_BG = (255, 255, 255)
CARD_BORDER = (238, 238, 241)
TEXT = (72, 72, 76)
DIVIDER = (244, 244, 246)
MARGIN = 20
GAP = 4
CARD_R = 16


def load_font(size: int, bold=False):
    for path in (
        "/System/Library/Fonts/PingFang.ttc",
        "/System/Library/Fonts/STHeiti Medium.ttc",
    ):
        try:
            return ImageFont.truetype(path, size, index=1 if bold else 0)
        except OSError:
            continue
    return ImageFont.load_default()


def fit_label(draw, text, box, max_size=18, min_size=13, bold=False):
    x0, y0, x1, y1 = box
    pad = 12
    inner_w = x1 - x0 - pad * 2
    label = text
    for size in range(max_size, min_size - 1, -1):
        font = load_font(size, bold=bold)
        if draw.textlength(label, font=font) <= inner_w:
            break
    else:
        font = load_font(min_size, bold=bold)
        while len(label) > 2 and draw.textlength(label + "…", font=font) > inner_w:
            label = label[:-1]
        label += "…"
    tw = draw.textlength(label, font=font)
    tx = x0 + pad + max(0, (inner_w - tw) / 2)
    ty = y0 + (y1 - y0 - size) / 2
    draw.text((tx, ty), label, fill=TEXT, font=font)


def rect_pct(x0, y0, x1, y1):
    return {
        "top": round(y0 / H * 100, 2),
        "left": round(x0 / W * 100, 2),
        "width": round((x1 - x0) / W * 100, 2),
        "height": round((y1 - y0) / H * 100, 2),
    }


def card(draw, x0, y0, x1, y1, label, bold=False):
    draw.rounded_rectangle((x0, y0, x1, y1), radius=CARD_R, fill=CARD_BG, outline=CARD_BORDER, width=1)
    fit_label(draw, label, (x0, y0, x1, y1), bold=bold)


def multi_row_card(draw, x0, y0, x1, y1, rows, region_map=None):
    draw.rounded_rectangle((x0, y0, x1, y1), radius=CARD_R, fill=CARD_BG, outline=CARD_BORDER, width=1)
    regions = {}
    row_h = (y1 - y0) / len(rows)
    for i, label in enumerate(rows):
        ry0 = y0 + i * row_h
        ry1 = ry0 + row_h
        if i > 0:
            draw.line((x0 + 12, ry0, x1 - 12, ry0), fill=DIVIDER, width=1)
        fit_label(draw, label, (x0, ry0, x1, ry1))
        if region_map and i in region_map:
            regions[region_map[i]] = rect_pct(x0, ry0, x1, ry1)
    return regions


def draw_before():
    """改版前：到手价格 / 商品标题 / 商品属性 / 价格&售卖&行动 → 优惠&配送 → 用户评价 → 详情&推荐"""
    img = Image.new("RGB", (W, H), SCREEN_BG)
    draw = ImageDraw.Draw(img)
    regions = {}
    x0, x1 = MARGIN, W - MARGIN
    bottom = H - MARGIN

    hero_y0, hero_y1 = MARGIN, 461
    card(draw, x0, hero_y0, x1, hero_y1, "商品图", bold=True)
    regions["l0-hero"] = rect_pct(x0, hero_y0, x1, hero_y1)

    core_y0, core_y1 = hero_y1 + GAP, 772
    regions.update(
        multi_row_card(
            draw,
            x0,
            core_y0,
            x1,
            core_y1,
            ["到手价格", "商品标题", "商品属性", "商品价格&售卖信息&行动按钮"],
            {0: "l1-price", 1: "l1-title", 2: "l2-attrs", 3: "l1-inline-cta"},
        )
    )

    row = regions["l1-inline-cta"]
    row_w = row["width"]
    row_top = row["top"]
    row_h = row["height"]
    row_left = row["left"]
    regions["l2-sales-inline"] = {
        "top": row_top,
        "left": round(row_left + row_w * 0.33, 2),
        "width": round(row_w * 0.34, 2),
        "height": row_h,
    }
    regions["l1-inline-cta"] = {
        "top": row_top,
        "left": round(row_left + row_w * 0.66, 2),
        "width": round(row_w * 0.34, 2),
        "height": row_h,
    }

    promo_y0, promo_y1 = 776, 848
    card(draw, x0, promo_y0, x1, promo_y1, "优惠信息&配送信息")
    regions["l2-promo-card"] = rect_pct(x0, promo_y0, x1, promo_y1)

    review_y0, review_y1 = 852, 924
    card(draw, x0, review_y0, x1, review_y1, "用户评价")
    regions["l2-reviews"] = rect_pct(x0, review_y0, x1, review_y1)

    tail_y0, tail_y1 = 928, bottom
    card(draw, x0, tail_y0, x1, tail_y1, "商品详情&同店推荐")
    regions["l3-longtail"] = rect_pct(x0, tail_y0, x1, tail_y1)

    return img, regions


def draw_after():
    """改版后 · 默认/即时转化/打消疑虑：无状态栏，含行动按钮"""
    img = Image.new("RGB", (W, H), SCREEN_BG)
    draw = ImageDraw.Draw(img)
    regions = {}
    x0, x1 = MARGIN, W - MARGIN
    bottom = H - MARGIN

    hero_y0, hero_y1 = MARGIN, 461
    card(draw, x0, hero_y0, x1, hero_y1, "商品图", bold=True)
    regions["l0-hero"] = rect_pct(x0, hero_y0, x1, hero_y1)

    core_y0, core_y1 = hero_y1 + GAP, 842
    regions.update(
        multi_row_card(
            draw,
            x0,
            core_y0,
            x1,
            core_y1,
            ["商品价格", "优惠信息", "商品标题", "推荐理由&售卖信息"],
            {0: "l1-price", 1: "l1-promo", 2: "l1-title", 3: "l2-trust"},
        )
    )

    del_y0, del_y1 = 846, 922
    card(draw, x0, del_y0, x1, del_y1, "配送信息")
    regions["l2-delivery"] = rect_pct(x0, del_y0, x1, del_y1)

    cta_y0, cta_y1 = 926, bottom
    card(draw, x0, cta_y0, x1, cta_y1, "行动按钮", bold=True)
    regions["l1-sticky-cta"] = rect_pct(x0, cta_y0, x1, cta_y1)
    regions["l3-longtail"] = rect_pct(x0, cta_y0, x1, cta_y1)

    return img, regions


def draw_after_longtail():
    """改版后 · 长尾兜底：无状态栏、无行动按钮，含用户评价与详情推荐"""
    img = Image.new("RGB", (W, H), SCREEN_BG)
    draw = ImageDraw.Draw(img)
    regions = {}
    x0, x1 = MARGIN, W - MARGIN
    bottom = H - MARGIN

    hero_y0, hero_y1 = MARGIN, 461
    card(draw, x0, hero_y0, x1, hero_y1, "商品图", bold=True)
    regions["l0-hero"] = rect_pct(x0, hero_y0, x1, hero_y1)

    core_y0, core_y1 = hero_y1 + GAP, 772
    regions.update(
        multi_row_card(
            draw,
            x0,
            core_y0,
            x1,
            core_y1,
            ["商品价格", "优惠信息", "商品标题", "推荐理由&售卖信息"],
            {0: "l1-price", 1: "l1-promo", 2: "l1-title", 3: "l2-trust"},
        )
    )

    del_y0, del_y1 = 776, 848
    card(draw, x0, del_y0, x1, del_y1, "配送信息")
    regions["l2-delivery"] = rect_pct(x0, del_y0, x1, del_y1)

    review_y0, review_y1 = 852, 924
    card(draw, x0, review_y0, x1, review_y1, "用户评价")
    regions["l2-reviews"] = rect_pct(x0, review_y0, x1, review_y1)

    tail_y0, tail_y1 = 928, bottom
    card(draw, x0, tail_y0, x1, tail_y1, "商品详情&同店推荐")
    regions["l3-longtail"] = rect_pct(x0, tail_y0, x1, tail_y1)

    return img, regions


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    before, before_regions = draw_before()
    after, after_regions = draw_after()
    after_longtail, after_longtail_regions = draw_after_longtail()

    before_path = OUT_DIR / "pdp-p1-framework-before.png"
    after_path = OUT_DIR / "pdp-p1-framework-after.png"
    after_longtail_path = OUT_DIR / "pdp-p1-framework-after-longtail.png"
    scheme_path = OUT_DIR / "pdp-p1-scheme-framework-after.png"
    meta_path = OUT_DIR / "pdp-p1-framework-regions.json"

    before.save(before_path, format="PNG", optimize=True)
    after.save(after_path, format="PNG", optimize=True)
    after.save(scheme_path, format="PNG", optimize=True)
    after_longtail.save(after_longtail_path, format="PNG", optimize=True)
    meta_path.write_text(
        json.dumps(
            {
                "before": {"version": "before", "regions": before_regions, "height": H, "width": W},
                "after": {"version": "after", "regions": after_regions, "height": H, "width": W},
                "afterLongtail": {
                    "version": "after-longtail",
                    "regions": after_longtail_regions,
                    "height": H,
                    "width": W,
                },
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    print(json.dumps({"before": before_regions, "after": after_regions, "afterLongtail": after_longtail_regions}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
