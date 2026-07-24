import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/.storybook/**",
      "**/*.d.ts",
      //This ignores itself to prevent an error on ts analyzing it.
      "eslint.config.js",
      "commitlint.config.js",
      // apps/playground-next has its own eslint.config.mjs (eslint-config-next),
      // which needs Next.js's own tsconfig.json (referencing .next/types, only
      // generated after a build) and eslint-plugin-react's version detection -
      // neither plays well with this root config's typescript-eslint project
      // service, which was set up for the Vite/tsc-based packages. Let its own
      // config (used by `pnpm --filter playground-next lint`) be the only one
      // that ever lints it.
      "apps/playground-next/**",
    ],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            "packages/*/vite.config.ts",
            "packages/*/vitest.config.ts",
            "apps/*/vite.config.ts",
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/naming-convention": [
        "error",
        // Interfaces
        {
          selector: "interface",
          format: ["PascalCase"],
          prefix: ["I"],
        },

        // Type aliases
        {
          selector: "typeAlias",
          format: ["PascalCase"],
          prefix: ["T"],
        },
      ],

      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
    },
  }
);
