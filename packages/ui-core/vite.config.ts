import { defineConfig } from "vite";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        tokens: resolve(__dirname, "src/tokens.ts"),
      },
      name: "MyDesignSystemUiCore",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["lit", "lit-html", "lit-element"],
    },
  },

  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
