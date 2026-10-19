import type { MetadataRoute } from "next";

const BASE_URL = "https://www.marswellbeing.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicRoutes = [
    "",
    "/about",
    "/how-it-works",
    "/nova-hikari",
    "/community",
    "/circles",
    "/professionals",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/wellbeing-safety",
  ];

  return publicRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
