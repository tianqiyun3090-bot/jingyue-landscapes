import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "境阅 · 风景漫游",
  description: "慢一点，看见远方。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
