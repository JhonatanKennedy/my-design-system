// Deliberately NOT a client component - no "use client" here. The point of
// this page is to prove @jhonatankennedy/ui-next can be imported directly
// into a Server Component tree without the app needing its own client
// boundary, since ui-next already ships one.
import { Button, Badge, Alert, primaryColor, infoColor } from "@jhonatankennedy/ui-next";

export default function Home() {
  return (
    <main style={{ padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
      <h1>@jhonatankennedy/ui-next - Server Component smoke test</h1>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Button variant="primary">Primary</Button>
        <Button variant="info">Info</Button>
        <Badge variant="success">Shipped</Badge>
      </div>

      <Alert variant="info">
        This alert, the buttons, and the badge above are Lit custom elements wrapped by ui-react,
        rendered from a page.tsx with no &quot;use client&quot; directive of its own.
      </Alert>

      <p>
        Token color outside the design system, via a plain style prop:{" "}
        <span style={{ color: primaryColor, fontWeight: 700 }}>primaryColor</span> /{" "}
        <span style={{ color: infoColor, fontWeight: 700 }}>infoColor</span>
      </p>
    </main>
  );
}
