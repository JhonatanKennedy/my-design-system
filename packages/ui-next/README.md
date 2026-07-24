# @jhonatankennedy/ui-next

Next.js entry point for the design system. Re-exports everything from
[`@jhonatankennedy/ui-react`](../ui-react) (components, `useTheme`, styles) plus
the color token constants from `@jhonatankennedy/ui-core`, pre-marked as a
client boundary.

## Why this package exists

Every component here wraps a Lit custom element, and `useTheme` reads
`window`/`localStorage`/`matchMedia`. None of that can run on the server. In
the Next.js App Router, any module doing that has to live behind a `"use
client"` boundary, or the build fails / the component silently doesn't
hydrate correctly.

`@jhonatankennedy/ui-react` doesn't declare that boundary itself - it's meant
to work in plain Vite/CRA React apps too, where there's no such distinction.
`@jhonatankennedy/ui-next` is a thin wrapper that adds it, so App Router
consumers can do this directly in a Server Component tree without adding
`"use client"` themselves:

```tsx
// app/page.tsx (Server Component)
import { Button, primaryColor } from "@jhonatankennedy/ui-next";

export default function Page() {
  return <Button variant="primary">Click me</Button>;
}
```

## Setup

Import the stylesheet once, e.g. in your root layout:

```tsx
// app/layout.tsx
import "@jhonatankennedy/ui-next/styles.css";
import "@jhonatankennedy/ui-next/styles/reset.css";
```

## Color tokens outside the design system

```tsx
import { primaryColor, dsColor } from "@jhonatankennedy/ui-next";

<ExternalChart color={primaryColor} />
<div style={{ background: dsColor.info }} />
```

These resolve to `var(--ds-*)`, so they track the active theme (`:root` vs
`.dark`) instead of a frozen hex value.

## What's not included

Types (`TCoreButtonProps`, etc.) - import those straight from
`@jhonatankennedy/ui-core` or `@jhonatankennedy/ui-react`, same as in a
non-Next.js app; they're type-only and have no client/server distinction.
