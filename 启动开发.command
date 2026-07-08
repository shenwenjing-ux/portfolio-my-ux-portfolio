#!/bin/bash
cd "$(dirname "$0")"

PREVIEW_URL="http://127.0.0.1:5173/#pdp-redesign"

echo "================================"
echo "  作品集网站 · 开发服务器"
echo "================================"
echo ""
echo "项目目录: $(pwd)"
echo "预览地址: $PREVIEW_URL"
echo ""
echo "启动中，请稍候..."
echo "按 Ctrl + C 可停止"
echo ""

if ! command -v npm >/dev/null 2>&1; then
  echo "未找到 npm，请先安装 Node.js: https://nodejs.org/"
  read -r -p "按回车键关闭..."
  exit 1
fi

# 2 秒后在系统浏览器打开（勿用 Cursor 内置预览）
(sleep 2 && open "$PREVIEW_URL") &

npm run dev

read -r -p "按回车键关闭..."
