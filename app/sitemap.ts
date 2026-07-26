import { MetadataRoute } from "next";
import { allTools } from "@/lib/tools";
import fs from "fs";
import path from "path";

// Helper to get the actual file modification date from the filesystem
function getFileLastModified(filePath: string): Date {
  try {
    const absolutePath = path.join(process.cwd(), filePath);
    const stats = fs.statSync(absolutePath);
    return stats.mtime;
  } catch (error) {
    console.error(`Could not find file for sitemap: ${filePath}`);
    return new Date(); // Fallback
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// BLOG POST SLUGS
// Add new blog posts here whenever you publish one.
// The sitemap will automatically read the last modified date of the page.tsx file!
// ─────────────────────────────────────────────────────────────────────────────
const BLOG_POSTS: {
  slug: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}[] = [
  { slug: "doordash-earnings-guide-2026", priority: 0.85, changeFrequency: "monthly" },
  { slug: "paycheck-calculator-guide-2026", priority: 0.85, changeFrequency: "monthly" },
  { slug: "salary-after-tax-guide-2026", priority: 0.85, changeFrequency: "monthly" },
  { slug: "rent-affordability-guide-2026", priority: 0.82, changeFrequency: "monthly" },
  { slug: "self-employment-tax-guide-2026", priority: 0.82, changeFrequency: "monthly" },
  { slug: "savings-calculator-guide-2026", priority: 0.82, changeFrequency: "monthly" },
  { slug: "loan-calculator-guide-2026", priority: 0.80, changeFrequency: "monthly" },
  { slug: "hourly-to-salary-guide-2026", priority: 0.80, changeFrequency: "monthly" },
  { slug: "india-salary-guide-2026", priority: 0.78, changeFrequency: "monthly" },
];

// ─────────────────────────────────────────────────────────────────────────────
// CORE PAGES
// The sitemap will automatically read the last modified date of the page.tsx file!
// ─────────────────────────────────────────────────────────────────────────────
const CORE_PAGES: {
  urlPath: string;
  filePath: string;
  priority: number;
}[] = [
  { urlPath: "/earning-calculators", filePath: "app/(categories)/earning-calculators/page.tsx", priority: 0.7 },
  { urlPath: "/tax-calculators",     filePath: "app/(categories)/tax-calculators/page.tsx",     priority: 0.7 },
  { urlPath: "/cost-calculators",    filePath: "app/(categories)/cost-calculators/page.tsx",    priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.freeuscalculator.in";

  // ── 1. Homepage ─────────────────────────────────────────────────────────────
  const home: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: getFileLastModified("app/page.tsx"),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  // ── 2. Core category/hub pages ───────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = CORE_PAGES.map(({ urlPath, filePath, priority }) => ({
    url: `${baseUrl}${urlPath}`,
    lastModified: getFileLastModified(filePath),
    changeFrequency: "weekly" as const,
    priority,
  }));

  // ── 3. Calculator tool pages (dynamic from allTools) ─────────────────────────
  const toolPages: MetadataRoute.Sitemap = allTools.map((tool) => ({
    url: `${baseUrl}/${tool.slug}`,
    // Automatically check the actual tool page file on disk
    lastModified: getFileLastModified(`app/(tools)/${tool.slug}/page.tsx`),
    changeFrequency: "weekly" as const,
    priority:
      tool.popularity >= 10 ? 0.95 :
      tool.popularity >= 9  ? 0.90 :
      tool.popularity >= 8  ? 0.85 :
      0.80,
  }));

  // ── 4. Blog index page ───────────────────────────────────────────────────────
  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: getFileLastModified("app/(static)/blog/page.tsx"),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
  ];

  // ── 5. Individual blog post pages ─────────────────────────────────────────────
  const blogPostPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: getFileLastModified(`app/(static)/blog/${post.slug}/page.tsx`),
    changeFrequency: post.changeFrequency,
    priority: post.priority,
  }));

  // ── Final Sitemap ─────────────────────────────────────────────────────────────
  return [
    ...home,
    ...corePages,
    ...toolPages,
    ...blogIndex,
    ...blogPostPages,
  ];
}