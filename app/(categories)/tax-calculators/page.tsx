// app/(categories)/tax-calculators/page.tsx

import Link from "next/link";
import { TrendingUp, Users, DollarSign, ShieldCheck, Award, MoveRight, CheckCircle2, Calculator } from "lucide-react";
import ToolCard from "@/components/ui/ToolCard";
import AdBanner from "@/components/common/AdBanner";
import { taxTools } from "@/lib/tools";

export const metadata = {
  title: "Best Tax Calculators 2026 – Free US Tax Tools & Paycheck Estimators",
  description:
    "Accurate free US tax calculators for 2026. Calculate self-employment tax, take-home pay, California paycheck, federal & state taxes with latest 2026 tax brackets.",
  keywords: [
    "tax calculators 2026",
    "self employment tax calculator",
    "paycheck calculator 2026",
    "california paycheck calculator",
    "take home pay calculator",
    "federal tax calculator",
    "salary after tax calculator",
    "1099 tax estimator",
    "us tax calculator free",
  ],
  alternates: {
    canonical: "https://freeuscalculator.com/tax-calculators",
  },
  openGraph: {
    title: "Free US Tax Calculators 2026 | Paycheck & Self-Employment Tools",
    description: "Estimate your 2026 taxes accurately with free tools. Self-employment tax, take-home pay, California paycheck calculator & more.",
    images: [{ url: "/og-tax-calculators.jpg" }],
  },
};

export default function TaxCalculatorsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* ================= HERO ================= */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-800 to-purple-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(129,140,248,0.35),transparent_65%)]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              100% Free • No Signup
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              <Award className="w-5 h-5 text-amber-400" />
              Updated for 2026 Tax Year
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              <Users className="w-5 h-5 text-sky-400" />
              Trusted by 80,000+ Americans
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            Smart <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">Tax Calculators</span> for 2026
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/80 mb-10">
            Accurate estimates using the latest 2026 federal & state tax brackets. 
            Perfect for W-2 employees, freelancers, and self-employed workers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#tools"
              className="group px-10 py-4 bg-white text-indigo-950 rounded-2xl font-semibold text-lg flex items-center gap-3 hover:bg-amber-400 transition-all duration-300 shadow-xl"
            >
              Explore All Tax Tools
              <MoveRight className="group-hover:translate-x-1 transition" />
            </a>

            <Link
              href="/paycheck-calculator"
              className="px-10 py-4 border border-white/30 hover:border-white rounded-2xl font-semibold text-lg transition-all"
            >
              Try Paycheck Calculator
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { num: "80K+", label: "Users This Year" },
              { num: "100%", label: "Free & Accurate" },
              { num: "2026", label: "Latest Tax Rules" },
              { num: "< 3s", label: "Instant Results" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold mb-1">{stat.num}</div>
                <div className="text-violet-200 text-sm tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOOLS SECTION ================= */}
      <main id="tools" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-violet-600 font-medium mb-3">
            <Calculator className="w-5 h-5" /> 2026 US TAX TOOLS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Popular Tax Calculators for 2026
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            From self-employment taxes to paycheck breakdowns — calculate exactly what you’ll owe or take home.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {taxTools.map((tool) => (
            <div
              key={tool.slug}
              className="group transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl rounded-3xl overflow-hidden bg-white border border-zinc-100"
            >
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>

        <div className="my-20">
          <AdBanner />
        </div>

        {/* Scenario Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-2xl flex flex-col">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4">Self-Employed or 1099 Worker?</h3>
              <p className="text-violet-100 text-lg mb-8">
                Calculate your self-employment tax (Social Security + Medicare) and estimate quarterly payments accurately.
              </p>
            </div>
            <Link
              href="/self-employment-tax-calculator"
              className="inline-flex items-center justify-center gap-3 bg-white text-violet-700 px-8 py-4 rounded-2xl font-semibold hover:bg-amber-300 transition"
            >
              Calculate Self-Employment Tax <MoveRight className="transition" />
            </Link>
          </div>

          <div className="p-10 rounded-3xl bg-gradient-to-br from-fuchsia-600 to-pink-600 text-white shadow-2xl flex flex-col">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4">Want to Know Your Take-Home Pay?</h3>
              <p className="text-fuchsia-100 text-lg mb-8">
                See exactly how much you’ll receive after federal, state, Social Security, and Medicare deductions.
              </p>
            </div>
            <Link
              href="/paycheck-calculator"
              className="inline-flex items-center justify-center gap-3 bg-white text-fuchsia-700 px-8 py-4 rounded-2xl font-semibold hover:bg-white/90 transition"
            >
              Check Take-Home Pay <MoveRight className="transition" />
            </Link>
          </div>
        </div>

        {/* SEO Content Section */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Accurate 2026 Tax Calculations You Can Trust
              </h2>
              <div className="prose prose-zinc max-w-none text-lg leading-relaxed">
                <p>
                  Tax laws change every year. Our calculators are fully updated with the latest 2026 federal tax brackets, 
                  standard deduction, Social Security wage base, and state-specific rules (including California, New York, Texas, and more).
                </p>
                <p>
                  Whether you're a W-2 employee getting a paycheck or a freelancer paying quarterly estimated taxes, 
                  these tools help you avoid surprises and plan better.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">What You Can Calculate in 2026</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Self-employment tax (SE Tax)",
                  "Federal + State income tax estimates",
                  "Take-home pay / paycheck calculator",
                  "California paycheck calculator",
                  "Effective tax rate",
                  "Quarterly estimated tax payments",
                  "Salary after tax breakdown",
                  "1099 vs W-2 tax comparison",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <AdBanner />

            {/* FAQ Section */}
            <div className="pt-8">
              <h3 className="text-3xl font-bold mb-8">Frequently Asked Questions</h3>
              <div className="space-y-8">
                {[
                  {
                    q: "Are these tax calculators updated for the 2026 tax year?",
                    a: "Yes. All tools use the latest 2026 tax brackets, deductions, and rates released by the IRS and state authorities.",
                  },
                  {
                    q: "Do I need to enter personal information?",
                    a: "No. Our calculators are completely anonymous. No signup, no email, and no data is stored.",
                  },
                  {
                    q: "Can I use the paycheck calculator for any state?",
                    a: "Yes. Most tools support multiple states including California, New York, Texas, Florida, and others.",
                  },
                  {
                    q: "How accurate is the self-employment tax calculator?",
                    a: "Very accurate for estimation purposes. It includes both the employee and employer portion of Social Security and Medicare taxes.",
                  },
                ].map((faq, i) => (
                  <div key={i} className="border-b border-zinc-200 pb-8 last:border-0">
                    <h4 className="font-semibold text-xl mb-3">{faq.q}</h4>
                    <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Tips */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border sticky top-8">
              <h4 className="font-semibold text-xl mb-6 flex items-center gap-3">
                <DollarSign className="text-violet-600" /> Tax Planning Tips for 2026
              </h4>
              {[
                {
                  icon: ShieldCheck,
                  title: "Save for Quarterly Taxes",
                  desc: "Self-employed individuals should set aside 25–35% of income for taxes.",
                },
                {
                  icon: Calculator,
                  title: "Track Every Deduction",
                  desc: "Keep records of business expenses, mileage, and home office costs.",
                },
                {
                  icon: Users,
                  title: "Understand Your Bracket",
                  desc: "Knowing your marginal tax rate helps with better financial decisions.",
                },
              ].map((tip, i) => {
                const Icon = tip.icon;
                return (
                  <div key={i} className="flex gap-5 mb-8 last:mb-0">
                    <div className="w-11 h-11 rounded-2xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-violet-600" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{tip.title}</p>
                      <p className="text-sm text-zinc-600">{tip.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </section>
      </main>

      {/* Final CTA */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Calculate Your 2026 Taxes?</h2>
          <p className="text-xl text-zinc-400 mb-10">
            Get accurate estimates in seconds with our free tools.
          </p>
          <a
            href="#tools"
            className="inline-flex items-center gap-4 bg-white text-zinc-900 px-12 py-5 rounded-2xl font-semibold text-xl hover:bg-violet-400 transition"
          >
            Browse All Tax Calculators
            <MoveRight className="w-7 h-7" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-sm text-zinc-500 border-t bg-white">
        © 2026 FreeUSCalculator — Free & Accurate US Tax Tools
      </footer>
    </div>
  );
}