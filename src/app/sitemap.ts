import type { MetadataRoute } from "next";

const BASE_URL = "https://www.marswellbeing.xyz";

interface SitemapEntry {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: SitemapEntry[] = [
    // Core Pillars
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/nova-hikari", changeFrequency: "monthly", priority: 0.9 },
    { path: "/professionals", changeFrequency: "monthly", priority: 0.9 },
    { path: "/about", changeFrequency: "monthly", priority: 0.85 },
    { path: "/community", changeFrequency: "monthly", priority: 0.85 },

    // Journal & Publications
    { path: "/journal", changeFrequency: "weekly", priority: 0.85 },
    { path: "/journal/bloom-magazine-issue-01", changeFrequency: "monthly", priority: 0.8 },
    { path: "/journal/architecture-of-silence", changeFrequency: "monthly", priority: 0.75 },
    { path: "/journal/screen-fatigue-reset", changeFrequency: "monthly", priority: 0.75 },
    { path: "/journal/vulnerability-without-performance", changeFrequency: "monthly", priority: 0.75 },
    { path: "/journal/autonomic-pacing-decisions", changeFrequency: "monthly", priority: 0.75 },

    // Interactive Experience & Member Pathways
    { path: "/guided-experience", changeFrequency: "monthly", priority: 0.75 },
    { path: "/journey", changeFrequency: "monthly", priority: 0.7 },
    { path: "/how-it-works", changeFrequency: "monthly", priority: 0.7 },
    { path: "/early-access", changeFrequency: "monthly", priority: 0.7 },

    // Inquiries & Governance
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.65 },
    { path: "/wellbeing-safety", changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.5 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.5 },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
