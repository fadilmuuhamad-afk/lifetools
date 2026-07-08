import type { Metadata } from "next";
import "./globals.css";

import { Geist } from "next/font/google";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/providers/ThemeProvider";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}