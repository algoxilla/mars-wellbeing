import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/",
          "/dashboard",
          "/dashboard/",
          "/settings",
          "/settings/",
          "/portal-admin",
          "/portal-admin/",
          "/portal-pro",
          "/portal-pro/",
          "/api/",
          "/auth/",
        ],
      },
    ],
    sitemap: "https://www.marswellbeing.xyz/sitemap.xml",
  };
}
