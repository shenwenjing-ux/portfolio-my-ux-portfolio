import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  server: {
    port: 5173,
  },
  build: {
    // IIFE 单文件打包，便于 file:// 直接打开 dist/index.html 预览
    modulePreload: false,
    rollupOptions: {
      output: {
        format: 'iife',
        inlineDynamicImports: true,
      },
    },
  },
  plugins: [
    {
      name: 'fix-file-protocol-html',
      closeBundle() {
        const htmlPath = path.resolve(__dirname, 'dist/index.html');
        let html = fs.readFileSync(htmlPath, 'utf8');
        html = html.replace(
          /<script type="module" crossorigin /g,
          '<script defer ',
        );
        html = html.replace(/<script src="/g, '<script defer src="');
        fs.writeFileSync(htmlPath, html);
      },
    },
  ],
});
