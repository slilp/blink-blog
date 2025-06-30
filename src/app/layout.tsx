import "@/style/globals.css";
import type { Metadata } from "next";
import { interFont } from "@/style/font";

import Layout from "@/component/layout";

export const metadata: Metadata = {
  title: "Blink Blog",
  description:
    "My journey and experiences in the world of programming and technology.",
  icons: {
    icon: "/bitcoin.png",
    shortcut: "/bitcoin.png",
    apple: "/bitcoin.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interFont.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
