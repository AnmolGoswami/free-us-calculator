// app/(categories)/cost-calculators/page.tsx
import Link from "next/link";
import ToolCard from "@/components/ui/ToolCard";
import AdBanner from "@/components/common/AdBanner";
import { costTools } from "@/lib/tools";

export const metadata = {
  title: "Cost Calculators - Rent, Loan & Savings Tools 2026",
  description: "Free cost calculators including rent affordability, loan EMI, and savings growth tools for smart financial planning.",
  keywords: ["rent affordability calculator", "loan calculator", "savings calculator", "emi calculator"],
};

export default function CostCalculatorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Free Cost & Budget Calculators 2026
        </h1>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
          Make better financial decisions with accurate rent, loan, and savings calculators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {costTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      <AdBanner />

      <div className="mt-20 prose max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Plan Your Finances Better</h2>
        <p className="text-lg leading-relaxed">
          From knowing how much rent you can afford to calculating loan payments and 
          watching your savings grow — these tools help everyday Americans manage money smarter in 2026.
        </p>
      </div>

      <AdBanner />
    </div>
  );
}