"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

/**
 * Wraps a ui-react component (a Lit custom element under the hood, via
 * @lit/react's createComponent()) so it can be imported directly into a
 * Server Component tree.
 *
 * createComponent() needs `HTMLElement` to exist at module-evaluation time
 * to set up the property accessors it forwards to the underlying custom
 * element. Next.js still evaluates "use client" modules on the server to
 * produce the initial HTML, and there is no HTMLElement there - that throws
 * (`createProperty is not a function`) the moment the module loads, not
 * just when it renders.
 *
 * next/dynamic(..., { ssr: false }) skips that server evaluation entirely:
 * the module is only ever imported in the browser, where HTMLElement is
 * real. The element renders nothing until its chunk loads client-side, then
 * upgrades in place - no crash, no hydration mismatch, just a brief gap
 * before it appears. This has to be called from inside a "use client" file
 * (this one) - Next's App Router doesn't allow `ssr: false` from a Server
 * Component.
 */
export function clientOnlyComponent<P extends object>(importFn: () => Promise<ComponentType<P>>) {
  return dynamic(importFn, { ssr: false });
}
