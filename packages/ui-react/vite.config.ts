import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],

  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        tokens: resolve(__dirname, "src/tokens.ts"),
      },
      name: "MyDesignSystemUiReact",
      formats: ["es"],
    },

    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // força o CSS único do lib build a sempre se chamar index.css
          if (assetInfo.names?.some((n) => n.endsWith(".css"))) {
            return "index.css";
          }
          return assetInfo.names?.[0] ?? "[name][extname]";
        },
      },
      external: [
        "react",
        "@lit/react",
        /^lit(\/.*)?$/,
        /^lit-html(\/.*)?$/,
        /^lit-element(\/.*)?$/,
        "lucide-react",
        "react/jsx-dev-runtime",
        "react/jsx-runtime",
      ],
    },
  },

  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
});
