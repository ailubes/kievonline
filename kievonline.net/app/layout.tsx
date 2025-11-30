import type { Metadata } from "next";
import Script from "next/script";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyiv Online | Ukrainian Heritage Sites Directory",
  description: "Discover 200+ Ukrainian heritage sites - castles, monasteries, museums, natural reserves, and historic cities. Explore UNESCO World Heritage Sites and cultural landmarks across Ukraine.",
  metadataBase: new URL("https://kievonline.net"),
  alternates: {
    canonical: "https://kievonline.net",
    languages: {
      uk: "https://kievonline.net/uk",
      en: "https://kievonline.net/en",
      de: "https://kievonline.net/de",
    },
  },
  openGraph: {
    title: "Kyiv Online | Ukrainian Heritage",
    description: "Discover 200+ Ukrainian heritage sites and cultural landmarks",
    url: "https://kievonline.net",
    siteName: "Kyiv Online",
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyiv Online | Ukrainian Heritage",
    description: "Discover Ukrainian cultural treasures",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-ukraine-cream text-slate-900 antialiased">
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3503353237698892"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
