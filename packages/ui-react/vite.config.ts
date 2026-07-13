import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyDesignSystemUiReact",
      formats: ["es"],
      fileName: "index",
    },

    rollupOptions: {
      external: ["react", "@lit/react", "lit"],
    },
  },

  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
});
