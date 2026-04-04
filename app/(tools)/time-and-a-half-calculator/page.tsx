import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import AdBanner from "@/components/common/AdBanner";
import SalaryCalculator from "../hourly-to-salary-calculator/SalaryCalculator";

// ✅ SEO METADATA (HIGH TRAFFIC KEYWORD)
export const metadata: Metadata = {
  title: "Time and a Half Calculator 2026 – Overtime Pay (1.5x)",
  description:
    "Calculate time and a half pay instantly. Find your overtime rate, weekly earnings, and total salary with accurate 1.5x calculations.",
  keywords: [
    "time and a half calculator",
    "time and a half pay",
    "1.5x overtime calculator",
    "overtime pay 1.5",
    "how much is time and a half",
  ],
};

export default function TimeAndHalfPage() {
  const faqs = [
    {
      q: "What is time and a half?",
      a: "Time and a half means you are paid 1.5 times your regular hourly rate for overtime hours.",
    },
    {
      q: "How do I calculate time and a half?",
      a: "Multiply your hourly rate by 1.5, then multiply by the number of overtime hours worked.",
    },
    {
      q: "When does time and a half apply?",
      a: "Typically after 40 hours per week, depending on labor laws and employer policies.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* 🔥 HERO + CALCULATOR */}
      <section className="py-10">
        <CalculatorContainer
          title="Time and a Half Calculator 2026"
          description="Quickly calculate your overtime pay at 1.5× rate. See weekly, monthly, and yearly earnings instantly."
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
            "1.5× Overtime Accurate",
            "Instant Calculation",
            "Tax Estimation",
            "Multi-Currency Support",
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
          title="Time and a Half Calculator 2026"
          url="https://freeuscalculator.com/time-and-a-half-calculator"
        />
      </section>

      {/* 🔥 SEO CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white border rounded-3xl shadow-sm p-8 md:p-10 prose prose-gray prose-lg max-w-none">
          
          <h2>Time and a Half Calculator</h2>
          <p>
            Use this time and a half calculator to quickly determine your overtime pay.
            This tool applies the standard 1.5× multiplier to your hourly wage and calculates
            your total earnings across different time periods.
          </p>

          <h3>Example Calculation</h3>
          <p>
            If you earn $20 per hour, your overtime rate becomes $30 per hour (20 × 1.5).
            If you work 10 overtime hours, your extra earnings would be $300.
          </p>

          <h3>Why This Tool Is Useful</h3>
          <ul>
            <li>Understand your overtime income instantly</li>
            <li>Plan your work hours efficiently</li>
            <li>Compare job offers with overtime benefits</li>
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
        <RelatedCalculators currentTool="time-and-a-half-calculator" />
      </section>
    </div>
  );
}