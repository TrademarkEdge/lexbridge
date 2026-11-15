import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "LexBridge Evaluations | Immigration Research & Professional Support",
  description:
    "Professional immigration documentation, expert opinion letters, petition research and dedicated support for US immigration law firms.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
