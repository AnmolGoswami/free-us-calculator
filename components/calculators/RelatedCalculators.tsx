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
  title = "Related Calculators You Might Find Useful",
  tools,
}: RelatedCalculatorsProps) {

  const defaultTools: RelatedTool[] = [
    {
      slug: "salary-after-tax-calculator",
      title: "Salary After Tax Calculator",
      description: "Calculate your real take-home salary after taxes.",
    },
    {
      slug: "paycheck-calculator",
      title: "Paycheck Calculator",
      description: "Estimate your exact paycheck after deductions.",
    },
    {
      slug: "loan-calculator",
      title: "Loan Calculator",
      description: "Calculate EMI, total interest, and loan payments.",
    },
    {
      slug: "rent-affordability-calculator",
      title: "Rent Affordability Calculator",
      description: "Find how much rent you can afford easily.",
    },
  ];

  const relatedTools = tools || defaultTools;

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
        {relatedTools.map((tool) => {
          const toolData = getToolBySlug(tool.slug);

          return (
            <article
              key={tool.slug}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-500"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition duration-300 -z-10" />

              {/* Category */}
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
                {toolData?.category?.toUpperCase() || "TOOL"}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug">
                <Link
                  href={`/${tool.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {tool.title}
                </Link>
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-5">
                {tool.description}
              </p>

              {/* CTA */}
              <Link
                href={`/${tool.slug}`}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
              >
                Use {tool.title.toLowerCase()} →
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}