#!/usr/bin/env python3
"""生成商品参数卡：网站用 820×1024（对齐评价图）+ MasterGo 用 702×553 SVG。"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
OUT_DIR = Path(__file__).resolve().parent
WEB_PNG = ROOT / "public/images/projects/pdp-p1-trust-nutrition.png"
REVIEW_PNG = ROOT / "public/images/projects/pdp-p1-conversion-review.png"

# MasterGo 设计稿坐标系（750 宽）
DESIGN_W = 750
CARD_W, CARD_H = 702, 553
CARD_X, CARD_Y = 24, 117
TAB_X, TAB_Y, TAB_W, TAB_H = 172, 812, 407, 50

# 网站展示尺寸（与评价 / 弹幕主图一致）
SCENE_W, SCENE_H = 820, 1024
S = SCENE_W / DESIGN_W  # ≈ 1.0933

# 评价图实测几何（820×1024）：顶栏有 letterbox，勿用纯 design*S 从 y=0 起算
SCENE_CARD = (26, 232, 793, 836)  # 对应 702×553 @ 750 缩放
SCENE_TAB = (191, 890, 629, 941)  # 对应 407×50 胶囊后略有导出压缩

# 字色令牌（稿面）
TEXT = (0x22, 0x24, 0x26)  # #222426 其余文字
TEXT_TITLE = (0x22, 0x24, 0x26)  # #222426 标题
TEXT_GRAY = (0x88, 0x88, 0x88)  # #888888 配料/小节/表头
TEXT_TAB = (0x85, 0x86, 0x87)  # #858687 Tab 未选中 / 1/5
TABLE_BG = (247, 247, 247)
LINE = (235, 235, 235)
PILL_BORDER = (0xF1, 0xF1, 0xF2)  # #F1F1F2
DIVIDER = (0xDE, 0xDE, 0xDE)
ARROW_BG = (0x99, 0x99, 0x99)  # #999999 详情箭头底

# 标题区（702 卡坐标）
TITLE_TOP = 24
TITLE_LEFT = 28
TITLE_SIZE = 36
TITLE_LH = 46
TITLE_UNDERLINE = (1, 30, 142, 10)  # left/top/w/h 相对标题容器
# 商品参数下内容垂直节奏（设计稿 px）
GAP_TITLE_TO_INGREDIENT = 16
GAP_INGREDIENT_TO_SECTION = 24
GAP_SECTION_TO_TABLE = 16
# 营养表：灰底上下留白 24；信息之间空隙 24（非行顶距）；无行分割线；有空则补行
ROW_TEXT_H = 22
ROW_GAP = 24  # 相邻信息文字盒之间的空隙
TABLE_PAD_Y = 24
HEADER_H = 24
DIVIDER_Y = 458

# 切图：1.5x → 1x 坑位
ICON_CTA_SRC = OUT_DIR / "icon-cta-arrow@1.5x.png"  # 查看更多，39→26
ICON_TAB_SRC = OUT_DIR / "icon-tab-arrow@1.5x.png"  # 详情 Tab，30→20
ICON_CTA_SIZE = 26
ICON_TAB_SIZE = 20  # 稿面箭头 20×20

# Tab 设计稿：固定 407×50 @ (172, 812)，padding 24 / gap 24
TAB_PAD_X = 24
TAB_ITEM_GAP = 24
TAB_ACTIVE_W = 128  # 营养表选中白底宽度
TAB_ACTIVE_PAD_X = 28

ROWS = [
    ("能量", "289kJ", "3%"),
    ("蛋白质", "3.6g", "6%"),
    ("脂肪", "4.2g", "7%"),
    ("碳水化合物", "3.3g", "1%"),
    ("-乳糖", "0.0g", "0%"),
    ("膳食纤维", "2.0g", "8%"),
    ("钠", "60mg", "3%"),
    ("钙", "120mg", "15%"),
]

INGREDIENT = "生牛乳(添加量≥99%)、乳糖酶"

# 苹方路径（本机常无 PingFang.ttc，统一走冬青黑体 GB / 角ゴ 近似）
PINGFANG_CANDIDATES = [
    "/System/Library/Fonts/PingFang.ttc",
    "/System/Library/Fonts/Hiragino Sans GB.ttc",
    "/System/Library/Fonts/ヒラギノ角ゴシック W5.ttc",
    "/System/Library/Fonts/STHeiti Light.ttc",
]


def sx(v):
    return v * S


def font(size, weight="regular"):
    """统一苹方栈：优先 PingFang；本机无则用 Hiragino Sans GB / 黑体 SC（勿用日文角ゴ，缺汉字）。
    weight: regular | medium(500) | bold
    """
    # Hiragino Sans GB: index 0=W3, 2=W6
    if weight in ("medium", "title", "title500"):
        indexed = [
            ("/System/Library/Fonts/PingFang.ttc", 1),
            ("/System/Library/Fonts/Hiragino Sans GB.ttc", 0),  # W3 逼近 500 视觉
            ("/System/Library/Fonts/STHeiti Light.ttc", 1),  # Heiti SC Light
        ]
    elif weight == "bold":
        indexed = [
            ("/System/Library/Fonts/PingFang.ttc", 2),
            ("/System/Library/Fonts/Hiragino Sans GB.ttc", 2),  # W6
            ("/System/Library/Fonts/STHeiti Medium.ttc", 1),
        ]
    else:
        indexed = [
            ("/System/Library/Fonts/PingFang.ttc", 0),
            ("/System/Library/Fonts/Hiragino Sans GB.ttc", 0),
            ("/System/Library/Fonts/STHeiti Light.ttc", 1),
        ]
    for path, index in indexed:
        try:
            return ImageFont.truetype(path, size=size, index=index)
        except OSError:
            continue
    return ImageFont.load_default()


def load_icon(path, display_size, scale=1.0, tint_rgb=None):
    """1.5x 切图缩放到 1x 坑位；可选把非透明像素染色（保留箭头高光）。"""
    icon = Image.open(path).convert("RGBA")
    slot = max(1, int(round(display_size * scale)))
    icon = icon.resize((slot, slot), Image.Resampling.LANCZOS)
    if tint_rgb is None:
        return icon
    # 圆底着色：按 alpha 保留箭头（接近白的像素保持白）
    px = icon.load()
    tr, tg, tb = tint_rgb
    for y in range(icon.size[1]):
        for x in range(icon.size[0]):
            r, g, b, a = px[x, y]
            if a < 8:
                continue
            if r > 220 and g > 220 and b > 220:
                continue  # 白色箭头保留
            px[x, y] = (tr, tg, tb, a)
    return icon


def draw_fade_underline(base, x, y, w, h):
    """linear-gradient(90deg, #ffdd00 → transparent)。"""
    w, h = max(1, int(round(w))), max(1, int(round(h)))
    layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    px = layer.load()
    for i in range(w):
        t = i / max(w - 1, 1)
        a = int(255 * (1 - t))
        for j in range(h):
            px[i, j] = (255, 221, 0, a)
    base.alpha_composite(layer, (int(round(x)), int(round(y))))


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def paint_gradient(img, box, stops, vertical=True):
    """stops: [(t0, rgb), ...] t in 0..1"""
    x0, y0, x1, y1 = [int(v) for v in box]
    w, h = x1 - x0, y1 - y0
    if w <= 0 or h <= 0:
        return
    layer = Image.new("RGBA", (w, h))
    px = layer.load()
    for i in range(h if vertical else w):
        t = i / max((h if vertical else w) - 1, 1)
        # 在 stops 间插值
        color = stops[-1][1]
        for j in range(len(stops) - 1):
            t0, c0 = stops[j]
            t1, c1 = stops[j + 1]
            if t0 <= t <= t1:
                local = 0 if t1 == t0 else (t - t0) / (t1 - t0)
                color = lerp(c0, c1, local)
                break
            if t < t0:
                color = c0
                break
        if vertical:
            for x in range(w):
                px[x, i] = (*color, 255)
        else:
            for y in range(h):
                px[i, y] = (*color, 255)
    img.paste(layer, (x0, y0), layer)


def rounded_mask(size, radius):
    m = Image.new("L", size, 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    return m


def draw_glass_card_bg(base, box, radius):
    """半透明白渐变卡 + 细描边。"""
    x0, y0, x1, y1 = [int(round(v)) for v in box]
    w, h = x1 - x0, y1 - y0
    card = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    # 渐变：#ffffff80 → #ffffff
    for y in range(h):
        t = y / max(h - 1, 1)
        a = int(128 + (255 - 128) * t)
        ImageDraw.Draw(card).line([(0, y), (w, y)], fill=(255, 255, 255, a))
    mask = rounded_mask((w, h), radius)
    card.putalpha(Image.composite(card.split()[-1], Image.new("L", (w, h), 0), mask))
    base.alpha_composite(card, (x0, y0))
    # 上亮下隐描边
    outline = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    od = ImageDraw.Draw(outline)
    for i in range(2):
        od.rounded_rectangle(
            (i, i, w - 1 - i, h - 1 - i),
            radius=max(radius - i, 0),
            outline=(255, 255, 255, max(40, 160 - i * 60)),
            width=1,
        )
    outline.putalpha(Image.composite(outline.split()[-1], Image.new("L", (w, h), 0), mask))
    base.alpha_composite(outline, (x0, y0))


def draw_card_content(base, ox, oy, scale=1.0):
    """在 base 上绘制卡片内文（scale=1 为 702 坐标系）。"""
    draw = ImageDraw.Draw(base)
    pad_x = TITLE_LEFT * scale
    title_x = ox + pad_x
    title_y = oy + TITLE_TOP * scale

    # 渐变下划线在字下
    ul_l, ul_t, ul_w, ul_h = TITLE_UNDERLINE
    draw_fade_underline(
        base,
        title_x + ul_l * scale,
        title_y + ul_t * scale,
        ul_w * scale,
        ul_h * scale,
    )

    # 商品参数：36 / 600 / lh46 / #222426
    f_title = font(int(TITLE_SIZE * scale), weight="bold")
    draw.text((title_x, title_y), "商品参数", fill=TEXT_TITLE, font=f_title)

    y = title_y + (TITLE_LH + GAP_TITLE_TO_INGREDIENT) * scale

    f_label = font(int(24 * scale), weight="regular")
    f_body = font(int(24 * scale), weight="medium")
    draw.text((ox + pad_x, y), "配料", fill=TEXT_GRAY, font=f_label)
    label_w = draw.textlength("配料", font=f_label)
    draw.text((ox + pad_x + label_w + 16 * scale, y), INGREDIENT, fill=TEXT, font=f_body)
    y += (24 + GAP_INGREDIENT_TO_SECTION) * scale

    f_sec = font(int(24 * scale), weight="regular")
    draw.text((ox + pad_x, y), "营养成分表", fill=TEXT_GRAY, font=f_sec)
    y += (24 + GAP_SECTION_TO_TABLE) * scale

    table_x0 = ox + pad_x
    table_x1 = ox + CARD_W * scale - pad_x
    text_h = ROW_TEXT_H * scale
    header_h = HEADER_H * scale
    gap = ROW_GAP * scale
    pad_y = TABLE_PAD_Y * scale
    div_y = oy + DIVIDER_Y * scale
    table_y0 = y
    # 结构：[pad] 表头 [gap] 行 [gap] 行… [pad]；装不下则减行，有空则补行
    max_table_h = max(pad_y * 2 + header_h + gap + text_h, div_y - 16 * scale - table_y0)

    def table_height_for(n):
        if n <= 0:
            return pad_y * 2 + header_h
        return pad_y + header_h + gap + n * text_h + (n - 1) * gap + pad_y

    max_rows = 0
    for n in range(1, len(ROWS) + 1):
        if table_height_for(n) <= max_table_h + 0.5:
            max_rows = n
        else:
            break
    visible_rows = ROWS[:max_rows]
    table_h = table_height_for(len(visible_rows))
    table_y1 = table_y0 + table_h
    draw.rounded_rectangle(
        (table_x0, table_y0, table_x1, table_y1),
        radius=max(8, int(16 * scale)),
        fill=TABLE_BG,
    )

    col1 = table_x0 + 20 * scale
    col2 = table_x0 + 300 * scale
    col3 = table_x1 - 20 * scale
    f_th = font(int(22 * scale), weight="regular")
    f_td = font(int(ROW_TEXT_H * scale), weight="medium")
    f_td_sub = font(int(ROW_TEXT_H * scale), weight="regular")

    # 表头：距灰底上边 24；无行分割线
    hy = table_y0 + pad_y
    draw.text((col1, hy), "项目", fill=TEXT_GRAY, font=f_th)
    c2w = draw.textlength("每100ml", font=f_th)
    draw.text((col2 - c2w / 2, hy), "每100ml", fill=TEXT_GRAY, font=f_th)
    c3w = draw.textlength("NRV%", font=f_th)
    draw.text((col3 - c3w, hy), "NRV%", fill=TEXT_GRAY, font=f_th)

    row_y = hy + header_h + gap
    for name, val, nrv in visible_rows:
        indent = 18 * scale if name.startswith("-") else 0
        f_name = f_td_sub if name.startswith("-") else f_td
        draw.text((col1 + indent, row_y), name, fill=TEXT, font=f_name)
        vw = draw.textlength(val, font=f_td)
        draw.text((col2 - vw / 2, row_y), val, fill=TEXT, font=f_td)
        nw = draw.textlength(nrv, font=f_td)
        draw.text((col3 - nw, row_y), nrv, fill=TEXT, font=f_td)
        row_y += text_h + gap

    # 分割线 2px #DEDEDE
    div_x0 = ox + 24 * scale
    div_x1 = ox + (24 + 654) * scale
    line_w = max(2, int(round(2 * scale)))
    draw.line((div_x0, div_y, div_x1, div_y), fill=DIVIDER, width=line_w)

    f_link = font(int(26 * scale), weight="regular")
    link = "查看更多参数"
    lw = draw.textlength(link, font=f_link)
    icon = load_icon(ICON_CTA_SRC, ICON_CTA_SIZE, scale)
    gap = 8 * scale
    total = lw + gap + icon.size[0]
    link_x = ox + (CARD_W * scale - total) / 2
    link_y = oy + CARD_H * scale - 52 * scale
    draw.text((link_x, link_y), link, fill=TEXT, font=f_link)
    icon_x = int(round(link_x + lw + gap))
    icon_y = int(round(link_y + (26 * scale - icon.size[1]) / 2))
    base.alpha_composite(icon, (icon_x, icon_y))

    return {
        "table_pad_y": TABLE_PAD_Y,
        "visible_rows": len(visible_rows),
        "total_rows": len(ROWS),
        "row_gap": ROW_GAP,
    }


def paint_tab_on(base, active="nutrition"):
    """固定 407×50 胶囊；文字按实际墨水 bbox 垂直居中（修正 CJK 偏上）。"""
    erase_x0 = int(TAB_X * S) - 24
    erase_y0 = int(SCENE_TAB[1]) - 16
    erase_w = int(TAB_W * S) + 80
    erase_h = int(TAB_H * S) + 40
    base.paste(
        Image.new("RGBA", (erase_w, erase_h), (245, 245, 246, 255)),
        (erase_x0, erase_y0),
    )

    x0 = TAB_X * S
    w = TAB_W * S
    h = TAB_H * S
    y0 = SCENE_TAB[1] + (SCENE_TAB[3] - SCENE_TAB[1] - h) / 2

    pill = Image.new("RGBA", (max(1, int(round(w))), max(1, int(round(h)))), (255, 255, 255, 204))
    pill.putalpha(rounded_mask(pill.size, pill.size[1] // 2))
    base.alpha_composite(pill, (int(round(x0)), int(round(y0))))
    draw = ImageDraw.Draw(base)
    draw.rounded_rectangle(
        (x0, y0, x0 + w - 1, y0 + h - 1),
        radius=h / 2,
        outline=PILL_BORDER,
        width=max(1, int(round(S))),
    )

    f_tab = font(int(24 * S), weight="regular")
    # 营养表选中态：普通字重（按反馈降低）
    f_on = font(int(24 * S), weight="regular")
    tab_icon = load_icon(ICON_TAB_SRC, ICON_TAB_SIZE, S, tint_rgb=ARROW_BG)

    def text_center_xy(text, font_obj, cx):
        """按墨水 bbox 几何居中，再下移 0.06em 做 CJK 光学修正。"""
        l, t, r, b = draw.textbbox((0, 0), text, font=font_obj)
        ink_mid = (t + b) / 2
        # Hiragino / 苹方字盒上松下紧，纯几何居中仍会略偏上
        optical = 0.06 * font_obj.size
        return cx, y0 + h / 2 - ink_mid + optical

    # 1/5
    tx, ty = text_center_xy("1/5", f_tab, x0 + 24 * S)
    draw.text((tx, ty), "1/5", fill=TEXT_TAB, font=f_tab)

    # 营养表选中白底 + 文案
    ax = x0 + 85 * S
    aw = TAB_ACTIVE_W * S
    active_layer = Image.new("RGBA", (max(1, int(round(aw))), max(1, int(round(h)))), (255, 255, 255, 255))
    active_layer.putalpha(rounded_mask(active_layer.size, active_layer.size[1] // 2))
    base.alpha_composite(active_layer, (int(round(ax)), int(round(y0))))
    label = "营养表"
    tw = draw.textlength(label, font=f_on)
    tx, ty = text_center_xy(label, f_on, ax + (aw - tw) / 2)
    draw.text((tx, ty), label, fill=TEXT, font=f_on)

    tx, ty = text_center_xy("评价", f_tab, x0 + 237 * S)
    draw.text((tx, ty), "评价", fill=TEXT_TAB, font=f_tab)

    detail_x = x0 + 309 * S
    tx, ty = text_center_xy("详情", f_tab, detail_x)
    draw.text((tx, ty), "详情", fill=TEXT_TAB, font=f_tab)
    ix = int(round(detail_x + 52 * S))
    iy = int(round(y0 + (h - tab_icon.size[1]) / 2))
    max_ix = int(round(x0 + w - 24 * S - tab_icon.size[0]))
    ix = min(ix, max_ix)
    base.alpha_composite(tab_icon, (ix, iy))


def render_card_png():
    """纯 702×553 白卡（编辑备用）。"""
    img = Image.new("RGBA", (CARD_W, CARD_H), (0, 0, 0, 0))
    draw_glass_card_bg(img, (0, 0, CARD_W, CARD_H), 24)
    spacing = draw_card_content(img, 0, 0, scale=1.0)
    rgb = Image.new("RGB", (CARD_W, CARD_H), (255, 255, 255))
    rgb.paste(img, mask=img.split()[-1])
    path = OUT_DIR / "nutrition-params-card-702x553.png"
    rgb.save(path, "PNG")
    return path, spacing


def render_scene_from_review():
    """以评价图为壳：保留顶栏 / 状态栏 / 渐变底，替换白卡与 Tab。"""
    if not REVIEW_PNG.exists():
        raise FileNotFoundError(f"缺少评价参考图: {REVIEW_PNG}")

    base = Image.open(REVIEW_PNG).convert("RGBA")
    if base.size != (SCENE_W, SCENE_H):
        base = base.resize((SCENE_W, SCENE_H), Image.Resampling.LANCZOS)

    x0, y0, x1, y1 = SCENE_CARD
    card_box = SCENE_CARD
    radius = int(round(sx(24)))
    scale = (x1 - x0) / CARD_W

    pad = 6
    erase_w, erase_h = (x1 - x0 + pad * 2), (y1 - y0 + pad * 2)
    erase = Image.new("RGBA", (erase_w, erase_h), (0, 0, 0, 0))
    stops = [
        (0.0, (252, 244, 202)),
        (0.62, (254, 247, 228)),
        (1.0, (245, 245, 246)),
    ]
    ep = erase.load()
    for yy in range(erase_h):
        abs_y = (y0 - pad) + yy
        t = max(0.0, min(1.0, (abs_y - 105) / 700))
        color = stops[-1][1]
        for j in range(len(stops) - 1):
            t0, c0 = stops[j]
            t1, c1 = stops[j + 1]
            if t0 <= t <= t1:
                local = 0 if t1 == t0 else (t - t0) / (t1 - t0)
                color = lerp(c0, c1, local)
                break
        for xx in range(erase_w):
            ep[xx, yy] = (*color, 255)
    erase.putalpha(rounded_mask((erase_w, erase_h), radius + 2))
    base.alpha_composite(erase, (x0 - pad, y0 - pad))

    draw_glass_card_bg(base, card_box, radius)
    draw_card_content(base, x0, y0, scale=scale)
    paint_tab_on(base, active="nutrition")

    out = base.convert("RGB")
    WEB_PNG.parent.mkdir(parents=True, exist_ok=True)
    out.save(WEB_PNG, "PNG")
    scene_path = OUT_DIR / "nutrition-params-scene.png"
    out.save(scene_path, "PNG")
    return scene_path, WEB_PNG

def write_svg():
    """MasterGo 备用 SVG：与位图同节奏——无行分割线、灰底/行间 24、最多可见行。"""
    title_baseline = TITLE_TOP + 36
    ingredient_y = TITLE_TOP + TITLE_LH + GAP_TITLE_TO_INGREDIENT + 20
    section_y = ingredient_y + GAP_INGREDIENT_TO_SECTION + 24
    table_y0 = section_y + GAP_SECTION_TO_TABLE
    max_table_h = DIVIDER_Y - 16 - table_y0

    def table_height_for(n):
        if n <= 0:
            return TABLE_PAD_Y * 2 + HEADER_H
        return TABLE_PAD_Y + HEADER_H + ROW_GAP + n * ROW_TEXT_H + (n - 1) * ROW_GAP + TABLE_PAD_Y

    max_rows = 0
    for n in range(1, len(ROWS) + 1):
        if table_height_for(n) <= max_table_h:
            max_rows = n
        else:
            break
    visible = ROWS[:max_rows]
    table_h = table_height_for(len(visible))
    header_baseline = table_y0 + TABLE_PAD_Y + 18
    rows_svg = []
    row_y = table_y0 + TABLE_PAD_Y + HEADER_H + ROW_GAP + 18
    for name, val, nrv in visible:
        indent = 18 if name.startswith("-") else 0
        rows_svg.append(
            f'<text x="{48 + indent}" y="{row_y}" fill="#222426" font-size="22" font-weight="500" '
            f'font-family="PingFang SC, sans-serif">{name}</text>'
        )
        rows_svg.append(
            f'<text x="351" y="{row_y}" text-anchor="middle" fill="#222426" font-size="22" font-weight="500" '
            f'font-family="PingFang SC, sans-serif">{val}</text>'
        )
        rows_svg.append(
            f'<text x="654" y="{row_y}" text-anchor="end" fill="#222426" font-size="22" font-weight="500" '
            f'font-family="PingFang SC, sans-serif">{nrv}</text>'
        )
        row_y += ROW_TEXT_H + ROW_GAP

    # Tab 文案：dominant-baseline middle + dy 略下，对齐胶囊垂直中心
    tab_cy = TAB_Y + TAB_H / 2
    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{CARD_W}" height="{CARD_H}" viewBox="0 0 {CARD_W} {CARD_H}">
  <title>商品参数卡 · 702×553</title>
  <defs>
    <linearGradient id="cardFill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"/>
    </linearGradient>
    <linearGradient id="titleUnderline" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#FFDD00"/>
      <stop offset="100%" stop-color="#D8D8D8" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect id="card-bg" width="{CARD_W}" height="{CARD_H}" rx="24" fill="url(#cardFill)"/>
  <rect id="title-underline" x="{TITLE_LEFT + 1}" y="{TITLE_TOP + 30}" width="142" height="10" fill="url(#titleUnderline)"/>
  <text id="title" x="{TITLE_LEFT}" y="{title_baseline}" fill="#222426" font-size="36" font-weight="600" font-family="PingFang SC, sans-serif">商品参数</text>
  <text x="{TITLE_LEFT}" y="{ingredient_y}" fill="#888888" font-size="24" font-family="PingFang SC, sans-serif">配料</text>
  <text x="{TITLE_LEFT + 64}" y="{ingredient_y}" fill="#222426" font-size="24" font-weight="500" font-family="PingFang SC, sans-serif">{INGREDIENT}</text>
  <text x="{TITLE_LEFT}" y="{section_y}" fill="#888888" font-size="24" font-family="PingFang SC, sans-serif">营养成分表</text>
  <rect x="{TITLE_LEFT}" y="{table_y0}" width="646" height="{table_h}" rx="16" fill="#F7F7F7"/>
  <text x="48" y="{header_baseline}" fill="#888888" font-size="22" font-family="PingFang SC, sans-serif">项目</text>
  <text x="351" y="{header_baseline}" text-anchor="middle" fill="#888888" font-size="22" font-family="PingFang SC, sans-serif">每100ml</text>
  <text x="654" y="{header_baseline}" text-anchor="end" fill="#888888" font-size="22" font-family="PingFang SC, sans-serif">NRV%</text>
  <g id="table-rows">{chr(10).join(rows_svg)}</g>
  <line x1="24" y1="458" x2="678" y2="458" stroke="#DEDEDE" stroke-width="2"/>
  <text x="320" y="520" text-anchor="middle" fill="#222426" font-size="26" font-weight="500" font-family="PingFang SC, sans-serif">查看更多参数</text>
  <image href="icon-cta-arrow@1.5x.png" x="412" y="499" width="{ICON_CTA_SIZE}" height="{ICON_CTA_SIZE}"/>
</svg>
'''
    path = OUT_DIR / "nutrition-params-card-702x553.svg"
    path.write_text(svg, encoding="utf-8")

    scene = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{DESIGN_W}" height="870" viewBox="0 0 {DESIGN_W} 870">
  <title>商品参数 · 营养表 Tab 选中</title>
  <defs>
    <linearGradient id="pageBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCF4CA"/>
      <stop offset="62%" stop-color="#FEF7E4"/>
      <stop offset="100%" stop-color="#F5F5F6"/>
    </linearGradient>
  </defs>
  <rect width="{DESIGN_W}" height="788" rx="24" fill="url(#pageBg)"/>
  <image href="nutrition-params-card-702x553.svg" x="{CARD_X}" y="{CARD_Y}" width="{CARD_W}" height="{CARD_H}"/>
  <rect x="{TAB_X}" y="{TAB_Y}" width="{TAB_W}" height="{TAB_H}" rx="25" fill="#FFFFFF" fill-opacity="0.8" stroke="#F1F1F2"/>
  <text x="{TAB_X + 24}" y="{tab_cy}" dominant-baseline="central" fill="#858687" font-size="24" font-family="PingFang SC, sans-serif">1/5</text>
  <rect x="{TAB_X + 85}" y="{TAB_Y}" width="128" height="50" rx="25" fill="#FFFFFF"/>
  <text x="{TAB_X + 149}" y="{tab_cy}" text-anchor="middle" dominant-baseline="central" fill="#222426" font-size="24" font-weight="500" font-family="PingFang SC, sans-serif">营养表</text>
  <text x="{TAB_X + 237}" y="{tab_cy}" dominant-baseline="central" fill="#858687" font-size="24" font-family="PingFang SC, sans-serif">评价</text>
  <text x="{TAB_X + 309}" y="{tab_cy}" dominant-baseline="central" fill="#858687" font-size="24" font-family="PingFang SC, sans-serif">详情</text>
  <image href="icon-tab-arrow@1.5x.png" x="{TAB_X + 309 + 52}" y="{TAB_Y + (TAB_H - 20) / 2}" width="20" height="20"/>
</svg>
'''
    (OUT_DIR / "nutrition-params-scene.svg").write_text(scene, encoding="utf-8")
    return path


def write_readme():
    text = """# 商品参数卡 · 营养表前置主图方案

## 关键令牌
- 标题：苹方 36 / 500 / `#222426`
- 灰字 `#888888`：配料、营养成分表、表头；其余 `#222426`
- Tab：固定 407×50，padding 24，gap 24；营养表选中白底 128
- 无免声明行

```bash
.venv/bin/python designs/nutrition-params-card/render.py
```
"""
    (OUT_DIR / "README.md").write_text(text, encoding="utf-8")


if __name__ == "__main__":
    write_svg()
    write_readme()
    card, spacing = render_card_png()
    scene, web = render_scene_from_review()
    print("card:", card)
    print("spacing:", spacing)
    print("scene:", scene)
    print("web:", web)
    print(f"arrows: CTA {ICON_CTA_SIZE}px (from 39@1.5x), tab {ICON_TAB_SIZE}px (from 30@1.5x)")
