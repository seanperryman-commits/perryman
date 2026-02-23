import type { Metadata } from "next";

export const SITE_CONFIG_SEO = {
  name: "Sean Perryman",
  fullName: "Sean A. Perryman",
  title: "AI Strategist and Advisor",
  role: "AI Strategist and Advisor",
  description:
    "Sean Perryman is an AI policy and governance advisor offering strategic consulting, executive coaching, and public speaking on responsible AI.",
  url: "https://seanaperryman.com",
  ogImage: "/opengraph-image.png",
  email: "sean@perrymanconsulting.com",
  social: {
    linkedin: "https://www.linkedin.com/in/seanperryman",
    twitter: "https://x.com/SeanPerrymanVA",
  },
  keywords: [
    "AI policy",
    "AI governance",
    "responsible AI",
    "AI consulting",
    "AI ethics",
    "executive coaching",
    "public speaking",
    "algorithmic accountability",
    "Sean Perryman",
  ],
} as const;

export function buildPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${SITE_CONFIG_SEO.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_CONFIG_SEO.name}`,
      description,
      url,
      siteName: SITE_CONFIG_SEO.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: SITE_CONFIG_SEO.ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG_SEO.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG_SEO.name}`,
      description,
      images: [SITE_CONFIG_SEO.ogImage],
    },
  };
}
