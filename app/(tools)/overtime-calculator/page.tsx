import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import AdBanner from "@/components/common/AdBanner";
import SalaryCalculator from "../hourly-to-salary-calculator/SalaryCalculator";

// ✅ SEO METADATA
export const metadata: Metadata = {
  title: "Overtime Pay Calculator 2026 – Time & Half + Double Pay",
  description:
    "Calculate overtime pay with time-and-a-half or custom rates. See your weekly, monthly, and yearly earnings including overtime instantly.",
  keywords: [
    "overtime calculator",
    "overtime pay calculator",
    "time and a half calculator",
    "double overtime pay",
    "extra hours pay calculator",
  ],
};

export default function OvertimeCalculatorPage() {
  const faqs = [
    {
      q: "How is overtime pay calculated?",
      a: "Overtime is usually paid at 1.5× your hourly rate after 40 hours per week. Some jobs offer double pay for extended overtime.",
    },
    {
      q: "Can I change the overtime rate?",
      a: "Yes, you can adjust the overtime multiplier (e.g., 1.5× or 2×) based on your company policy.",
    },
    {
      q: "Does this include taxes?",
      a: "Yes, you can include an estimated tax rate to see your real take-home overtime earnings.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* 🔥 HERO + CALCULATOR */}
      <section className="py-10">
        <CalculatorContainer
          title="Overtime Pay Calculator 2026"
          description="Calculate your overtime earnings instantly. Supports time-and-a-half, double pay, and custom work schedules."
          category="Earnings"
          lastUpdated="April 2026"
        >
          <SalaryCalculator defaultMode="overtime" />
        </CalculatorContainer>
      </section>

      {/* 🔥 TRUST BAR */}
      <section className="max-w-6xl mx-auto px-6 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            "Time & Half Supported",
            "Custom Overtime Rates",
            "Tax Included",
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
          title="Overtime Pay Calculator 2026"
          url="https://freeuscalculator.com/overtime-calculator"
        />
      </section>

      {/* 🔥 SEO CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white border rounded-3xl shadow-sm p-8 md:p-10 prose prose-gray prose-lg max-w-none">
          
          <h2>Overtime Pay Calculator</h2>
          <p>
            This overtime calculator helps you estimate your extra earnings when you work beyond regular hours.
            Whether you receive time-and-a-half or double pay, this tool gives accurate results instantly.
          </p>

          <h3>How Overtime Works</h3>
          <p>
            In most jobs, overtime starts after 40 hours per week. The standard rate is 1.5× your hourly wage,
            but some companies offer higher multipliers.
          </p>

          <h3>Why Use This Tool</h3>
          <ul>
            <li>Track your real earnings</li>
            <li>Understand extra income from overtime</li>
            <li>Plan work schedules better</li>
          </ul>

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

      {/* 🔥 RELATED TOOLS */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <RelatedCalculators currentTool="overtime-calculator" />
      </section>
    </div>
  );
}