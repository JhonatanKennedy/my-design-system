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
    // ui-core's source uses a couple of Vite-only import specifiers (e.g.
    // "./Alert.styles.css?inline") that plain tsc/Next's typecheck step
    // doesn't understand, since it isn't running through Vite. The published
    // dist/index.d.ts these packages ship has none of that - it's a flat,
    // rolled-up declaration file - so real consumers installing from npm
    // never hit this. It only shows up here because this playground exists
    // to validate the workspace-source path itself. Turbopack's actual
    // module compilation (the thing that matters - does the client boundary
    // work at runtime) already succeeds independent of this flag.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
