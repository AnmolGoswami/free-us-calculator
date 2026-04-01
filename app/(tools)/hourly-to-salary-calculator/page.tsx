import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import HourlyToSalaryClient from "./HourlyToSalaryClient";
import FAQ from "@/components/calculators/FAQ";
import AdBanner from "@/components/common/AdBanner";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import { getToolContent } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hourly to Salary Calculator 2026 – With Overtime & Taxes (USA)",
  description:
    "Convert hourly wage to yearly salary including overtime pay and estimated taxes. See your real take-home pay.",
  keywords: [
    "hourly to salary calculator",
    "hourly wage to salary",
    "salary calculator with overtime",
    "take home pay calculator",
  ],
};

export default function HourlyToSalaryPage() {
  const seoContent = getToolContent("hourly-to-salary-calculator");

  const faqs = [
    {
      q: "Does this calculator include overtime?",
      a: "Yes. It applies 1.5× overtime after 40 hours per week.",
    },
    {
      q: "How is tax calculated?",
      a: "We use an estimated tax rate. You can adjust it based on your income.",
    },
    {
      q: "Is monthly salary accurate?",
      a: "Yes. It uses 52 weeks / 12 months for precise conversion.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* HERO + CALCULATOR */}
      <section className="py-10">
        <CalculatorContainer
          title="Hourly to Salary Calculator 2026"
          description="Convert your hourly wage into weekly, monthly, and yearly salary instantly with accurate tax and overtime estimates."
          category="Earnings"
          lastUpdated="March 2026"
        >
          <HourlyToSalaryClient />
        </CalculatorContainer>
      </section>

      {/* TRUST BAR */}
      <section className="max-w-6xl mx-auto px-6 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            "Accurate US Calculations",
            "Overtime Included",
            "Tax Estimation",
            "Free & Instant",
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

      {/* SHARE (TOP PLACEMENT - IMPORTANT) */}
      <section className="max-w-4xl mx-auto px-6 mb-10">
        <ShareButtons
          title="Hourly to Salary Calculator 2026"
          url="https://freeuscalculator.com/hourly-to-salary-calculator"
        />
      </section>

      {/* SEO CONTENT (🔥 CARD STYLE) */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white border rounded-3xl shadow-sm p-8 md:p-10 prose prose-gray prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: seoContent }} />
        </div>
      </section>

      {/* AD (NATURAL POSITION) */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <AdBanner />
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <FAQ title="Frequently Asked Questions" faqs={faqs} />
      </section>

      {/* RELATED TOOLS */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <RelatedCalculators currentTool="hourly-to-salary-calculator" />
      </section>
    </div>
  );
}