import { defineConfig } from "vite";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyDesignSystemUiCore",
      formats: ["es"],
      fileName: "index",
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
