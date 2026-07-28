import type { Metadata } from "next";
import "@jhonatankennedy/ui-next/styles.css";
import "./globals.scss";

export const metadata: Metadata = {
  title: "ui-next playground",
  description: "Full INK UI playground, ported from playground-react to @jhonatankennedy/ui-next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
