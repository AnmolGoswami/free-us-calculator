// app/(categories)/tax-calculators/page.tsx
import Link from "next/link";
import ToolCard from "@/components/ui/ToolCard";
import AdBanner from "@/components/common/AdBanner";
import { taxTools } from "@/lib/tools";

export const metadata = {
  title: "Tax Calculators 2026 - Free US Tax Tools",
  description: "Free accurate US tax calculators for 2026. Self-employment tax, salary after tax, California paycheck calculator and more.",
  keywords: ["tax calculators 2026", "self employment tax calculator", "salary after tax calculator", "paycheck calculator california"],
};

export default function TaxCalculatorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Free US Tax Calculators 2026
        </h1>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
          Accurate and easy-to-use tax tools updated for the 2026 tax year. 
          No signup required.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {taxTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      <AdBanner />

      {/* SEO Content */}
      <div className="mt-20 prose max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Why Use Our Tax Calculators?</h2>
        <p className="text-lg leading-relaxed">
          Our tax calculators are built using the latest 2026 federal tax brackets, 
          Social Security wage base, Medicare rates, and California state tax rules. 
          Whether you're a W-2 employee, freelancer, or self-employed, these tools help you 
          estimate your tax liability and take-home pay accurately.
        </p>
      </div>

      <AdBanner />
    </div>
  );
}