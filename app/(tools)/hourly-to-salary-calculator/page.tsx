import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import AdBanner from "@/components/common/AdBanner";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import { getToolContent } from "@/lib/seo";
import SalaryCalculator from "./SalaryCalculator";

// ✅ ADVANCED SEO
export const metadata: Metadata = {
  title: "Hourly to Salary Calculator 2026 – Convert Hourly Wage to Annual Salary",
  description:
    "Convert hourly wage to yearly salary instantly. Includes overtime, taxes, and accurate monthly, weekly, and yearly breakdowns.",
  keywords: [
    "hourly to salary calculator",
    "hourly wage to annual salary",
    "convert hourly to yearly salary",
    "salary calculator with overtime",
    "take home pay calculator",
  ],
  alternates: {
    canonical: "https://freeuscalculator.com/hourly-to-salary-calculator",
  },
  openGraph: {
    title: "Hourly to Salary Calculator 2026",
    description:
      "Convert hourly wage to yearly salary with overtime and tax estimates.",
    url: "https://freeuscalculator.com/hourly-to-salary-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
};

export default function HourlyToSalaryPage() {
  const seoContent = getToolContent("hourly-to-salary-calculator");

  const faqs = [
    {
      q: "How do I convert hourly wage to salary?",
      a: "Multiply your hourly rate by hours per week and weeks per year (usually 40 × 52).",
    },
    {
      q: "Does this include overtime?",
      a: "Yes. You can add overtime hours and see adjusted earnings.",
    },
    {
      q: "Is this after-tax salary?",
      a: "You can include a tax percentage to estimate your take-home pay.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* 🔥 HERO + CALCULATOR */}
      <section className="py-10">
        <CalculatorContainer
          title="Hourly to Salary Calculator 2026"
          description="Convert your hourly wage into weekly, monthly, and yearly salary instantly with overtime and tax insights."
          category="Earnings"
          lastUpdated="April 2026"
        >
          {/* ✅ IMPORTANT FIX */}
          <SalaryCalculator defaultMode="hourly-to-salary" />
        </CalculatorContainer>
      </section>

      {/* 🔥 TRUST BAR */}
      <section className="max-w-6xl mx-auto px-6 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            "Accurate Calculations",
            "Overtime Supported",
            "Tax Estimates",
            "Instant Results",
          ].map((item) => (
            <div
              key={item}
              className="bg-white border rounded-xl py-4 text-sm font-medium shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 SHARE */}
      <section className="max-w-4xl mx-auto px-6 mb-10">
        <ShareButtons
          title="Hourly to Salary Calculator 2026"
          url="https://freeuscalculator.com/hourly-to-salary-calculator"
        />
      </section>

      {/* 🔥 SEO CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white border rounded-3xl shadow-sm p-8 md:p-10 prose prose-gray prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: seoContent }} />
        </div>
      </section>

      {/* 🔥 AD */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <AdBanner />
      </section>

      {/* 🔥 FAQ */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <FAQ title="Frequently Asked Questions" faqs={faqs} />
      </section>

      {/* 🔥 RELATED */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <RelatedCalculators currentTool="hourly-to-salary-calculator" />
      </section>
    </div>
  );
}