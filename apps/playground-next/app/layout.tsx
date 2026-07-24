import type { Metadata } from "next";
import "@jhonatankennedy/ui-next/styles.css";
import "@jhonatankennedy/ui-next/styles/reset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ui-next playground",
  description: "Server Component smoke test for @jhonatankennedy/ui-next",
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
