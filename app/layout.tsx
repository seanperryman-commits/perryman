import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/structured-data";
import { SITE_CONFIG_SEO } from "@/lib/site-config";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG_SEO.url),
  title: {
    default: `${SITE_CONFIG_SEO.name} | ${SITE_CONFIG_SEO.title}`,
    template: `%s | ${SITE_CONFIG_SEO.name}`,
  },
  description: SITE_CONFIG_SEO.description,
  keywords: [...SITE_CONFIG_SEO.keywords],
  authors: [{ name: SITE_CONFIG_SEO.fullName }],
  creator: SITE_CONFIG_SEO.fullName,
  publisher: SITE_CONFIG_SEO.fullName,
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG_SEO.url,
    siteName: SITE_CONFIG_SEO.name,
    title: `${SITE_CONFIG_SEO.name} | ${SITE_CONFIG_SEO.title}`,
    description: SITE_CONFIG_SEO.description,
    images: [
      {
        url: SITE_CONFIG_SEO.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG_SEO.name} — ${SITE_CONFIG_SEO.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG_SEO.name} | ${SITE_CONFIG_SEO.title}`,
    description: SITE_CONFIG_SEO.description,
    images: [SITE_CONFIG_SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Icons are auto-generated from app/icon.tsx and app/apple-icon.tsx
  // Manifest is auto-generated from app/manifest.ts
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${lora.variable} ${nunito.variable} antialiased`}
      >
        {/* Hidden form for Netlify build-time detection */}
        <form
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <select name="subject">
            <option value="consulting">Consulting Inquiry</option>
            <option value="speaking">Speaking Request</option>
            <option value="coaching">Executive Coaching</option>
            <option value="other">Other</option>
          </select>
          <textarea name="message" />
        </form>

        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
