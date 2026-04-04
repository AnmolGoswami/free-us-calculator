import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import AdBanner from "@/components/common/AdBanner";
import SalaryCalculator from "../hourly-to-salary-calculator/SalaryCalculator";

// ✅ SEO METADATA (VERY IMPORTANT)
export const metadata: Metadata = {
  title: "Salary to Hourly Calculator 2026 – Convert Annual Salary to Hourly Rate",
  description:
    "Convert your yearly salary into hourly wage instantly. Includes taxes, overtime, and accurate breakdowns for weekly, monthly, and yearly income.",
  keywords: [
    "salary to hourly calculator",
    "annual salary to hourly wage",
    "convert salary to hourly",
    "how much is my salary per hour",
    "hourly wage calculator",
  ],
};

// ✅ MAIN PAGE
export default function SalaryToHourlyPage() {
  const faqs = [
    {
      q: "How do I convert salary to hourly?",
      a: "Divide your annual salary by total yearly working hours (usually 40 hours/week × 52 weeks = 2080 hours).",
    },
    {
      q: "Does this include taxes?",
      a: "Yes, you can add your estimated tax rate to calculate your real take-home hourly pay.",
    },
    {
      q: "What if I work more than 40 hours?",
      a: "You can adjust weekly hours to get a more accurate hourly rate based on your real schedule.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* 🔥 HERO + CALCULATOR */}
      <section className="py-10">
        <CalculatorContainer
          title="Salary to Hourly Calculator 2026"
          description="Convert your annual salary into hourly wage instantly. See detailed breakdown including taxes, overtime, and real earnings."
          category="Earnings"
          lastUpdated="April 2026"
        >
          <SalaryCalculator defaultMode="salary-to-hourly" />
        </CalculatorContainer>
      </section>

      {/* 🔥 TRUST BAR (BOOST CONVERSION) */}
      <section className="max-w-6xl mx-auto px-6 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            "Accurate Calculations",
            "Supports All Currencies",
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

      {/* 🔥 SHARE (SEO BOOST) */}
      <section className="max-w-4xl mx-auto px-6 mb-10">
        <ShareButtons
          title="Salary to Hourly Calculator 2026"
          url="https://freeuscalculator.com/salary-to-hourly-calculator"
        />
      </section>

      {/* 🔥 SEO CONTENT (RANKING POWER) */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white border rounded-3xl shadow-sm p-8 md:p-10 prose prose-gray prose-lg max-w-none">
          
          <h2>Salary to Hourly Calculator</h2>
          <p>
            Our salary to hourly calculator helps you convert your annual salary into an hourly wage instantly.
            This is useful for comparing job offers, freelancing rates, and understanding your real earnings.
          </p>

          <h3>How It Works</h3>
          <p>
            The calculator divides your yearly salary by total working hours in a year.
            By default, it assumes 40 hours per week and 52 weeks per year, but you can customize this.
          </p>

          <h3>Why This Matters</h3>
          <ul>
            <li>Compare jobs easily</li>
            <li>Understand your real hourly worth</li>
            <li>Plan freelance pricing</li>
          </ul>

        </div>
      </section>

      {/* 🔥 AD (HIGH RPM PLACEMENT) */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <AdBanner />
      </section>

      {/* 🔥 FAQ (RICH SNIPPETS SEO) */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <FAQ title="Frequently Asked Questions" faqs={faqs} />
      </section>

      {/* 🔥 RELATED TOOLS (INTERNAL SEO) */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <RelatedCalculators currentTool="salary-to-hourly-calculator" />
      </section>
    </div>
  );
}