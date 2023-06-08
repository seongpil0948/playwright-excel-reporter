import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
    // alias: [{ find: "@abacus/playwright-excel-reporter", replacement: "/lib" }],
  },
  optimizeDeps: {
    exclude: [
      // 여기에 넣으면 모듈을 아예 불러오질 못함..
      // "danfojs",
    ],
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
