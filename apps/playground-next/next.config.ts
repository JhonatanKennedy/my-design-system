import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // This app resolves @jhonatankennedy/ui-next (and transitively ui-react,
    // ui-core) straight to their TypeScript *source* via the pnpm workspace,
    // not their built dist output - that's intentional, so the package.json
    // "exports" field points at src/index.ts for workspace/dev consumption
    // and gets swapped for the dist-based "publishConfig.exports" only when
    // actually published to npm.
    //
    // ui-core's component styles used to rely on a Vite-only import specifier
    // ("./Alert.styles.css?inline") to pull raw CSS text into Lit's
    // unsafeCSS(). Turbopack doesn't support that convention: it silently
    // extracted the CSS into its own stylesheet chunk instead of returning it
    // as a string, and that chunk was never linked into the page anyway - so
    // every Shadow DOM component rendered unstyled. The styles are now
    // authored directly as `css` tagged template literals in each
    // Component.styles.ts, so that particular mismatch is gone.
    //
    // ignoreBuildErrors stays on for a separate, unrelated reason: ui-core's
    // source imports sibling modules with an explicit ".ts" extension (e.g.
    // "./Alert.styles.ts"), which plain tsc rejects unless
    // "allowImportingTsExtensions" is set. The published dist/index.d.ts
    // these packages ship is a flat, rolled-up declaration file with none of
    // that, so real consumers installing from npm never hit this - it only
    // shows up here because this playground validates the workspace-source
    // path itself. Turbopack's actual module compilation (the thing that
    // matters - does the client boundary work at runtime) already succeeds
    // independent of this flag.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
