import { Metadata } from "next";
import HourlyToSalaryClient from "@/app/(tools)/hourly-to-salary-calculator/SalaryCalculator";
import AdBanner from "@/components/common/AdBanner";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";

// ✅ Dynamic SEO
export async function generateMetadata({
  params,
}: {
  params: { rate: string };
}): Promise<Metadata> {
  const rate = Number(params.rate);

  return {
    title: `$${rate}/hour is how much a year? (2026 Salary Calculator)`,
    description: `If you earn $${rate} per hour, your yearly salary is ${(
      rate * 40 * 52
    ).toLocaleString()}. Calculate weekly, monthly & after-tax income instantly.`,
    keywords: [
      `${rate} an hour is how much a year`,
      `${rate}/hour salary`,
      `hourly to salary ${rate}`,
    ],
  };
}

export default function Page({ params }: { params: { rate: string } }) {
  const rate = Number(params.rate);

  const yearly = rate * 40 * 52;
  const monthly = yearly / 12;
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
      a: "No, this is gross income. Use the calculator above to estimate after-tax income.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          ${rate} an hour is how much a year?
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          If you make <strong>${rate}/hour</strong>, your yearly salary is:
        </p>

        {/* RESULT BOX */}
        <div className="bg-green-600 text-white p-6 rounded-2xl shadow-md">
          <p className="text-sm uppercase">Yearly Salary</p>
          <p className="text-4xl font-bold mt-2">
            ${yearly.toLocaleString()}
          </p>
          <p className="mt-2 text-sm">
            ${monthly.toLocaleString()} / month • ${weekly.toLocaleString()} / week
          </p>
        </div>
      </section>

      {/* 🔥 CALCULATOR (REUSE YOUR CLIENT) */}
      <section className="max-w-6xl mx-auto px-6 mb-10">
        <HourlyToSalaryClient defaultHourly={rate} />
      </section>

      {/* 🔥 SHARE */}
      <section className="max-w-4xl mx-auto px-6 mb-10">
        <ShareButtons
          title={`${rate} an hour salary`}
          url={`https://freeuscalculator.com/hourly/${rate}`}
        />
      </section>

      {/* 🔥 INTERNAL LINKS (SEO BOOST) */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <h2 className="text-xl font-bold mb-4">Try Other Hourly Rates</h2>
        <div className="flex flex-wrap gap-3">
          {[10, 15, 18, 20, 25, 30, 40, 50].map((r) => (
            <a
              key={r}
              href={`/hourly/${r}`}
              className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100"
            >
              ${r}/hour
            </a>
          ))}
        </div>
      </section>

      {/* AD */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <AdBanner />
      </section>

      {/* FAQ (RICH SNIPPETS) */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <FAQ title="Frequently Asked Questions" faqs={faqs} />
      </section>

    </div>
  );
}