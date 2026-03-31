import Link from "next/link";
import { getToolBySlug } from "@/lib/tools";

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
  title = "Related Tools You Might Find Useful",
  tools,
}: RelatedCalculatorsProps) {
  // If no tools passed, auto-suggest from registry
  const relatedTools = tools || [
    { slug: "uber-earnings-calculator", title: "Uber Earnings Calculator 2026", description: "Estimate real take-home pay as an Uber driver." },
    { slug: "self-employment-tax-calculator-usa", title: "Self Employment Tax Calculator 2026", description: "Calculate your full SE tax accurately." },
    { slug: "salary-after-tax-calculator", title: "Salary After Tax Calculator 2026", description: "See exact take-home pay after taxes." },
    { slug: "rent-affordability-calculator", title: "Rent Affordability Calculator 2026", description: "Find out how much rent you can afford." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedTools.map((tool) => {
          const toolData = getToolBySlug(tool.slug);
          
          return (
            <Link
              key={tool.slug}
              href={`/${tool.slug}`}
              className="group bg-white border border-gray-200 hover:border-blue-500 rounded-3xl p-8 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-blue-600 font-medium text-sm mb-3">
                {toolData?.category.toUpperCase() || "TOOL"}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                {tool.title}
              </h3>
              
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {tool.description}
              </p>

              <div className="mt-6 text-blue-600 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Use Calculator →
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}