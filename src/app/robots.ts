import type { MetadataRoute } from "next";
import { headers } from "next/headers";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://waldorclinic.com";
const PRODUCTION_HOST = new URL(SITE_URL).hostname;

/**
 * Blocks crawling entirely on staging/preview hosts (e.g. waldor.netlify.app).
 * Only the real production domain gets normal allow rules + sitemap.
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const hostname = headersList.get("host")?.split(":")[0] ?? "";
  const isProduction =
    hostname === PRODUCTION_HOST || hostname === `www.${PRODUCTION_HOST}`;

  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
