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
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyDesignSystemUiNext",
      formats: ["es"],
      fileName: "index",
    },

    rollupOptions: {
      external: (id: string) => {
        if (id === "@jhonatankennedy/ui-react/styles.css") return false; // deixa o Vite processar esse CSS
        return [
          "react",
          "react-dom",
          "next",
          "@jhonatankennedy/ui-react",
          "@lit/react",
          "lit",
          "lucide-react",
        ].some((pkg) => id === pkg || id.startsWith(`${pkg}/`));
      },
      output: {
        // Everything re-exported here (Lit custom elements under the hood,
        // hooks touching window/localStorage) only runs in the browser, so
        // the published bundle has to open with the RSC client-boundary
        // directive. It's already the first line of src/index.ts too - that
        // copy is what workspace/dev consumers get, since this package's
        // "." export resolves to src/index.ts outside of publishConfig. The
        // banner is a second, independent guarantee for the built dist/index.js,
        // since bundlers aren't guaranteed to preserve a source-level "use
        // client" pragma through minification/bundling. A duplicated
        // directive in the output is harmless.
        banner: '"use client";',
      },
    },
  },

  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
});
