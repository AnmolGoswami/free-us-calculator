import { Metadata } from "next";

import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import SalaryCalculator from "@/app/(tools)/hourly-to-salary-calculator/SalaryCalculator";


export const dynamic = "force-dynamic";
export async function generateMetadata({
  params,
}: {
  params: { rate: string };
}): Promise<Metadata> {
  const rate = Number(params.rate) || 25;

  return {
    title: `$${rate}/hour is how much a year? (2026 Salary Calculator)`,
    description: `If you earn $${rate} per hour, your yearly salary is ${(rate * 40 * 52).toLocaleString()}. Calculate weekly, monthly & after-tax income instantly.`,
    keywords: [
      `${rate} an hour is how much a year`,
      `${rate}/hour salary`,
      `hourly to salary ${rate}`,
      "salary calculator",
      "hourly wage calculator",
    ],
  };
}

export default function HourlyToSalaryPage({ params }: { params: { rate: string } }) {
  const rate = Number(params.rate) || 25;

  const yearly = rate * 40 * 52;
  const monthly = Math.round(yearly / 12);
  const weekly = rate * 40;

  const faqs = [
    {
      q: `Is $${rate} an hour a good salary?`,
      a: `It depends on your location and expenses. At $${rate}/hour, you earn about ${yearly.toLocaleString()} per year before taxes.`,
    },
    {
      q: "How is yearly salary calculated?",
      a: "We multiply hourly rate by 40 hours per week and 52 weeks per year.",
    },
    {
      q: "Does this include taxes?",
      a: "No, this is gross income. Use the calculator below to estimate after-tax income.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
          ${rate} an hour is how much a year?
        </h1>

        <p className="text-xl text-gray-600 mb-8 text-center md:text-left">
          If you make <strong>${rate}/hour</strong>, your yearly salary is:
        </p>

        <div className="bg-green-600 text-white p-8 rounded-3xl shadow-md max-w-md mx-auto md:mx-0">
          <p className="text-sm uppercase tracking-widest opacity-90">Yearly Gross Salary</p>
          <p className="text-5xl font-bold mt-3">
            ${yearly.toLocaleString()}
          </p>
          <p className="mt-4 text-lg opacity-90">
            ${monthly.toLocaleString()} / month • ${weekly.toLocaleString()} / week
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <SalaryCalculator
          defaultMode="hourly-to-salary" 
          defaultHourly={rate.toString()} 
        />
      </section>

      {/* SHARE */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <ShareButtons
          title={`${rate} an hour salary`}
          url={`https://freeuscalculator.com/hourly/${rate}`}
        />
      </section>

      {/* OTHER RATES */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
          Try Other Hourly Rates
        </h2>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {[10, 15, 18, 20, 25, 30, 40, 50, 60, 75].map((r) => (
            <a
              key={r}
              href={`/hourly/${r}`}
              className="px-6 py-3 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all font-medium"
            >
              ${r}/hour
            </a>
          ))}
        </div>
      </section>

      {/* AD */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <FAQ title="Frequently Asked Questions" faqs={faqs} />
      </section>
    </div>
  );
}