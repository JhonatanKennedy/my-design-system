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
      external: [/^lit(\/.*)?$/, /^lit-html(\/.*)?$/, /^lit-element(\/.*)?$/],
      output: {
        assetFileNames: (assetInfo) => {
          // força o CSS único do lib build a sempre se chamar index.css
          if (assetInfo.names?.some((n) => n.endsWith(".css"))) {
            return "index.css";
          }
          return assetInfo.names?.[0] ?? "[name][extname]";
        },
      },
    },
  },

  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
