import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],

  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyDesignSystemUiReact",
      formats: ["es"],
      fileName: "index",
    },

    rollupOptions: {
      external: ["react", "@lit/react", "lit", "lucide-react"],
    },
  },

  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
});
