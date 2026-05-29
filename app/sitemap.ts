import { MetadataRoute } from "next";
import { allTools } from "@/lib/tools";

// ─────────────────────────────────────────────────────────────────────────────
// BLOG POST SLUGS
// Add new blog posts here whenever you publish one.
// Each entry maps to: /blog/<slug>
// IMPORTANT: Update lastModified whenever you edit a post — this is what tells
// Google to re-crawl that specific page.
// ─────────────────────────────────────────────────────────────────────────────
const BLOG_POSTS: {
  slug: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  lastModified: Date;
}[] = [
  {
    slug: "doordash-earnings-guide-2026",
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified: new Date("2026-05-01"),
  },
  {
    slug: "paycheck-calculator-guide-2026",
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified: new Date("2026-05-01"),
  },
  {
    slug: "salary-after-tax-guide-2026",
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified: new Date("2026-05-01"),
  },
  {
    slug: "rent-affordability-guide-2026",
    priority: 0.82,
    changeFrequency: "monthly",
    lastModified: new Date("2026-05-01"),
  },
  {
    slug: "self-employment-tax-guide-2026",
    priority: 0.82,
    changeFrequency: "monthly",
    lastModified: new Date("2026-05-01"),
  },
  {
    slug: "savings-calculator-guide-2026",
    priority: 0.82,
    changeFrequency: "monthly",
    lastModified: new Date("2026-05-01"),
  },
  {
    slug: "loan-calculator-guide-2026",
    priority: 0.80,
    changeFrequency: "monthly",
    lastModified: new Date("2026-05-01"),
  },
  {
    slug: "hourly-to-salary-guide-2026",
    priority: 0.80,
    changeFrequency: "monthly",
    lastModified: new Date("2026-05-01"),
  },
  {
    slug: "india-salary-guide-2026",
    priority: 0.78,
    changeFrequency: "monthly",
    lastModified: new Date("2026-05-01"),
  },
  // ── Add future blog posts below this line ─────────────────────────────────
  // {
  //   slug: "uber-eats-earnings-guide-2026",
  //   priority: 0.80,
  //   changeFrequency: "monthly",
  //   lastModified: new Date("2026-05-01"),
  // },
];

// ─────────────────────────────────────────────────────────────────────────────
// CORE PAGES
// Update lastModified here whenever you make changes to these hub pages.
// ─────────────────────────────────────────────────────────────────────────────
const CORE_PAGES: {
  path: string;
  lastModified: Date;
  priority: number;
}[] = [
  { path: "/earning-calculators", lastModified: new Date("2026-04-01"), priority: 0.7 },
  { path: "/tax-calculators",     lastModified: new Date("2026-04-01"), priority: 0.7 },
  { path: "/cost-calculators",    lastModified: new Date("2026-04-01"), priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.freeuscalculator.in";

  // ── 1. Homepage ─────────────────────────────────────────────────────────────
  const home: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-05-28"), // ← bump this whenever homepage changes
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  // ── 2. Core category/hub pages ───────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = CORE_PAGES.map(({ path, lastModified, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,                          // ← real date, not new Date()
    changeFrequency: "weekly" as const,
    priority,
  }));

  // ── 3. Calculator tool pages (dynamic from allTools) ─────────────────────────
  // lastModified comes from each tool's lastModified field in tools.ts
  // Just bump that field in tools.ts whenever you update a specific calculator.
  const toolPages: MetadataRoute.Sitemap = allTools.map((tool) => ({
    url: `${baseUrl}/${tool.slug}`,
    lastModified: tool.lastModified,       // ← real per-tool date from tools.ts
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
      lastModified: new Date("2026-05-01"), // ← bump when you add a new blog post
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
  ];

  // ── 5. Individual blog post pages ─────────────────────────────────────────────
  const blogPostPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,       // ← real date per post
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