import Link from "next/link";
import { MoveRight, TrendingUp, Home, DollarSign, Target, CheckCircle2 } from "lucide-react";
import ToolCard from "@/components/ui/ToolCard";
import AdBanner from "@/components/common/AdBanner";
import { costTools } from "@/lib/tools";

export const metadata = {
  title: "Best Cost Calculators 2026 – EMI, Rent, Loan & Savings Tools (Free)",
  description:
    "Use advanced 2026 cost calculators to plan smarter. Calculate EMI, rent affordability, loan payments, and savings growth instantly with modern financial tools.",
  keywords: [
    "emi calculator 2026",
    "loan calculator usa free",
    "rent affordability calculator",
    "budget planner online",
    "savings growth calculator 2026",
  ],
  alternates: {
    canonical: "https://freeuscalculator.com/cost-calculators",
  },
};

export default function CostCalculatorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        
        {/* Gradient Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <TrendingUp size={16} />
            Trusted by 50,000+ Users in 2026
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Smart <span className="text-blue-600">Cost Calculators</span> <br />
            for Better Financial Decisions
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Calculate EMI, rent affordability, and savings growth with precision.
            Built for modern financial planning in 2026.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="#tools"
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Explore Tools
            </a>

            <Link
              href="/loan-calculator"
              className="px-8 py-4 border border-slate-300 rounded-full font-semibold hover:bg-slate-100 transition"
            >
              Try EMI Calculator
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
            {[
              ["50+", "Calculators"],
              ["100%", "Free"],
              ["2026", "Updated"],
              ["Fast", "Results"],
            ].map(([num, label]) => (
              <div key={num}>
                <p className="text-2xl font-bold">{num}</p>
                <p className="text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOOLS ================= */}
      <main id="tools" className="max-w-7xl mx-auto px-6 py-20">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold mb-3">
            Popular Financial Calculators
          </h2>
          <p className="text-slate-600">
            Free tools to calculate loans, rent, and savings instantly.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {costTools.map((tool) => (
            <div
              key={tool.slug}
              className="transition duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl"
            >
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>

        <div className="my-20">
          <AdBanner />
        </div>

        {/* ================= SCENARIO SECTION ================= */}
        <section className="grid md:grid-cols-2 gap-8">

          <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Planning a Loan or Big Purchase?
            </h3>
            <p className="mb-6 text-white/80">
              Use EMI and savings tools to plan before committing.
            </p>
            <Link
              href="/loan-calculator"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold"
            >
              Calculate EMI <MoveRight size={18} />
            </Link>
          </div>

          <div className="p-10 rounded-3xl bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Moving to a New City?
            </h3>
            <p className="mb-6 text-white/80">
              Check rent affordability before you relocate.
            </p>
            <Link
              href="/rent-calculator"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold"
            >
              Check Rent <MoveRight size={18} />
            </Link>
          </div>

        </section>

        {/* ================= SEO CONTENT ================= */}
        <section className="mt-24 grid md:grid-cols-3 gap-12">

          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">
              Best Cost Calculators for 2026 Financial Planning
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Our cost calculators help you make smarter financial decisions by
              giving accurate insights into loans, rent affordability, and savings growth.
              Whether you're planning a house, managing debt, or investing for the future,
              these tools remove guesswork.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Each calculator is optimized with real financial formulas used in banking
              and personal finance. This ensures reliable and realistic projections.
            </p>

            <h3 className="text-2xl font-semibold mt-6">
              What You Can Calculate
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>• Monthly EMI payments for loans</li>
              <li>• Ideal rent based on income</li>
              <li>• Savings growth over time</li>
              <li>• Budget planning scenarios</li>
            </ul>

            <AdBanner />
          </div>

          {/* Tips */}
          <aside className="space-y-6">
            {[
              {
                icon: Target,
                title: "50/30/20 Rule",
                desc: "Balance spending, saving, and investing efficiently.",
              },
              {
                icon: DollarSign,
                title: "Emergency Fund",
                desc: "Keep at least 3–6 months of expenses saved.",
              },
              {
                icon: Home,
                title: "Housing Rule",
                desc: "Spend max 28% of income on rent.",
              },
            ].map((tip, i) => {
              const Icon = tip.icon;
              return (
                <div
                  key={i}
                  className="p-5 bg-white border rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">{tip.title}</p>
                      <p className="text-sm text-slate-500">{tip.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </aside>

        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 text-sm text-slate-500 border-t">
        © 2026 FreeUSCalculator — Smart Financial Tools
      </footer>
    </div>
  );
}