import { MetadataRoute } from "next";
import { allTools } from "@/lib/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://freeuscalculator.in";
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

  // ✅ Core Pages (ONLY if they exist)
  const corePages = [
    "/calculators",
    "/earning-calculators",
    "/tax-calculators",
    "/cost-calculators",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // ✅ ALL Tool Pages (AUTO from your registry)
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

  // ✅ ONLY YOUR EXISTING BLOG PAGE
  const blogPages = [
    "/blog" // 👉 only include if this page exists
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ✅ FINAL
  return [...home, ...corePages, ...toolPages, ...blogPages];
}