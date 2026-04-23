import { MetadataRoute } from "next";
import { allTools } from "@/lib/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  // ✅ FIXED: use www version
  const baseUrl = "https://www.freeuscalculator.in";
  const now = new Date();

  // ✅ Homepage
  const home = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1,
    },
  ];

  // ✅ Core Pages
  const corePages = [
    "/earning-calculators",
    "/tax-calculators",
    "/cost-calculators",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // ✅ Tool Pages
  const toolPages = allTools.map((tool) => ({
    url: `${baseUrl}/${tool.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority:
      tool.popularity >= 10
        ? 0.95
        : tool.popularity >= 9
        ? 0.9
        : tool.popularity >= 8
        ? 0.85
        : 0.8,
  }));

  // ✅ Blog Page
  const blogPages = ["/blog"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ✅ Final Sitemap
  return [...home, ...corePages, ...toolPages, ...blogPages];
}