import Link from "next/link";
import { allTools, getToolBySlug, Tool } from "@/lib/tools";

interface RelatedTool {
  slug: string;
  title: string;
  description: string;
}

interface RelatedCalculatorsProps {
  currentTool: string;
  title?: string;
  tools?: RelatedTool[];
}

export default function RelatedCalculators({
  currentTool,
  title = "Related Calculators You Might Find Useful",
  tools,
}: RelatedCalculatorsProps) {
  let relatedToolsData: Tool[] = [];

  // If tools are explicitly provided, use them.
  if (tools && tools.length > 0) {
    relatedToolsData = tools
      .map((t) => getToolBySlug(t.slug))
      .filter((t): t is Tool => t !== undefined);
  } else {
    // Dynamically find tools based on category
    const currentToolData = getToolBySlug(currentTool);

    if (currentToolData) {
      // Find tools in the same category, excluding the current one
      let sameCategoryTools = allTools.filter(
        (t) => t.category === currentToolData.category && t.slug !== currentTool
      );

      // Sort by popularity (descending)
      sameCategoryTools.sort((a, b) => b.popularity - a.popularity);

      // Take up to 3
      relatedToolsData = sameCategoryTools.slice(0, 3);

      // If we don't have enough, pad with popular tools from other categories
      if (relatedToolsData.length < 3) {
        const otherPopularTools = allTools
          .filter((t) => t.category !== currentToolData.category && t.slug !== currentTool)
          .sort((a, b) => b.popularity - a.popularity);

        relatedToolsData = [...relatedToolsData, ...otherPopularTools].slice(0, 3);
      }
    } else {
      // Fallback if current tool is not found
      relatedToolsData = allTools
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 3);
    }
  }

  if (!relatedToolsData || relatedToolsData.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* 🔥 Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-600 tracking-tight">
          {title}
        </h2>
        <p className="text-slate-200 mt-3 text-sm sm:text-base">
          Explore more tools to calculate smarter and plan better
        </p>
      </div>

      {/* 🔥 Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedToolsData.map((tool) => {
          // If tools were explicitly passed, we might want to use their custom title/description
          const explicitTool = tools?.find((t) => t.slug === tool.slug);
          const displayTitle = explicitTool?.title || tool.shortTitle || tool.title;
          const displayDescription = explicitTool?.description || tool.description;

          return (
            <article
              key={tool.slug}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-500"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition duration-300 -z-10" />

              {/* Category */}
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
                {tool.category?.toUpperCase() || "TOOL"}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug">
                <Link
                  href={`/${tool.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {displayTitle}
                </Link>
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-5">
                {displayDescription}
              </p>

              {/* CTA */}
              <Link
                href={`/${tool.slug}`}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
              >
                Use {displayTitle.toLowerCase()} →
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}