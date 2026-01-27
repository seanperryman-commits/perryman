import type { MetadataRoute } from "next";
import { SITE_CONFIG_SEO } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/mockups/"],
      },
    ],
    sitemap: `${SITE_CONFIG_SEO.url}/sitemap.xml`,
  };
}
