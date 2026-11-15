
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LexBridge Evaluations | Immigration Research & Professional Support",
  description:
    "Professional immigration research, expert opinions, petition documentation and dedicated support for US immigration law firms.",
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
