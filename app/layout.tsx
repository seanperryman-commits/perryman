import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
  title: {
    default: "AI Policy & Governance Advisor",
    template: "%s | AI Policy & Governance Advisor",
  },
  description:
    "Executive advisory practice specializing in AI policy, governance, and technology consulting.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Policy & Governance Advisor",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
