// app/(categories)/earning-calculators/page.tsx
import Link from "next/link";
import ToolCard from "@/components/ui/ToolCard";
import AdBanner from "@/components/common/AdBanner";
import { earningTools } from "@/lib/tools";

export const metadata = {
  title: "Earnings Calculators - Uber, DoorDash & Salary Tools 2026",
  description: "Free gig economy and salary calculators. Estimate Uber driver earnings, DoorDash pay, convert hourly to salary and more.",
  keywords: ["uber earnings calculator", "doordash earnings calculator", "hourly to salary calculator", "gig worker pay"],
};

export default function EarningCalculatorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Free Earnings Calculators 2026
        </h1>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
          Perfect for gig workers, drivers, and salaried employees. 
          Calculate your real take-home earnings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {earningTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      <AdBanner />

      <div className="mt-20 prose max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Built for American Workers</h2>
        <p className="text-lg leading-relaxed">
          Whether you're driving for Uber, dashing for DoorDash, or working a traditional job, 
          these calculators help you understand your true earnings after expenses, taxes, and deductions.
        </p>
      </div>

      <AdBanner />
    </div>
  );
}