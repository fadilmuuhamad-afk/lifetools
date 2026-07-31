import type { Metadata } from "next";
import "./globals.css";

import { Geist } from "next/font/google";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import WebsiteSchema
  from "@/components/seo/WebsiteSchema";

import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#09090b",
    },
  ],
  colorScheme: "light",
};

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s | LifeTools",
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  applicationName: siteConfig.applicationName,

  authors: [
    {
      name: siteConfig.author,
    },
  ],

  creator: siteConfig.creator,

  publisher: siteConfig.publisher,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "technology",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  manifest: "/manifest.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: siteConfig.twitter,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <WebsiteSchema />
        <ThemeProvider>
          {children}
          <Toaster
            position="top-right"
            richColors
          />
        </ThemeProvider>
      </body>
    </html>
  );
}