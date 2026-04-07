import Link from "next/link";
import { MoveRight, TrendingUp, Home, DollarSign, Target, CheckCircle2, Users, Clock, ShieldCheck, Award } from "lucide-react";
import ToolCard from "@/components/ui/ToolCard";
import AdBanner from "@/components/common/AdBanner";
import { costTools } from "@/lib/tools";

export const metadata = {
  title: "Best Cost Calculators 2026 – Free EMI, Loan, Rent Affordability & Savings Tools",
  description:
    "Discover the most accurate free cost calculators for 2026. Instantly calculate EMI, loan payments, rent affordability, savings growth, and budget scenarios with modern, user-friendly financial tools.",
  keywords: [
    "emi calculator 2026",
    "loan calculator free",
    "rent affordability calculator",
    "savings growth calculator",
    "mortgage payment calculator",
    "budget planner online",
    "personal loan emi calculator",
    "cost calculators usa",
    "financial planning tools 2026",
    "free loan affordability calculator",
  ],
  alternates: {
    canonical: "https://freeuscalculator.com/cost-calculators",
  },
  openGraph: {
    title: "Best Free Cost Calculators 2026 | EMI, Rent & Savings Tools",
    description: "Plan smarter with precise 2026 financial calculators. EMI, loans, rent, and savings – all free and instant.",
    images: [{ url: "/og-cost-calculators.jpg" }], // Add a nice OG image
  },
};

export default function CostCalculatorsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(234,179,8,0.15),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>100% Free • No Signup</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Updated for 2026 Rates</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              <Users className="w-5 h-5 text-sky-400" />
              <span>Trusted by 75,000+ Users</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            Make Smarter Money Moves in <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">2026</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-zinc-300 mb-10">
            Instant, accurate cost calculators for EMI, loans, rent affordability, savings growth, and more. 
            Built with real banking formulas — completely free and mobile-friendly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#tools"
              className="group px-10 py-4 bg-white text-zinc-900 rounded-2xl font-semibold text-lg flex items-center gap-3 hover:bg-amber-400 hover:text-zinc-900 transition-all duration-300 shadow-xl shadow-blue-500/20"
            >
              Explore All Tools
              <MoveRight className="group-hover:translate-x-1 transition" />
            </a>

            <Link
              href="/loan-calculator"
              className="px-10 py-4 border border-white/30 hover:border-white/60 rounded-2xl font-semibold text-lg transition-all"
            >
              Try EMI Calculator Now
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { num: "75K+", label: "Happy Users" },
              { num: "100%", label: "Free Forever" },
              { num: "< 3s", label: "Instant Results" },
              { num: "2026", label: "Latest Formulas" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-white mb-1">{stat.num}</div>
                <div className="text-zinc-400 text-sm tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOOLS SECTION ================= */}
      <main id="tools" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 font-medium mb-3">
            <TrendingUp className="w-5 h-5" /> POWERFUL FINANCIAL TOOLS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Popular Cost Calculators for 2026
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            From home loans to daily budgeting — calculate everything you need to take control of your finances.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {costTools.map((tool) => (
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
          <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl flex flex-col">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4">Buying a Home or Car?</h3>
              <p className="text-blue-100 text-lg mb-8">
                Know exactly what your monthly EMI will be before you commit. Plan payments, compare rates, and avoid surprises.
              </p>
            </div>
            <Link
              href="/loan-calculator"
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold hover:bg-amber-300 transition group-hover:scale-105"
            >
              Calculate Your EMI <MoveRight className="transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="p-10 rounded-3xl bg-gradient-to-br from-rose-500 to-orange-500 text-white shadow-2xl flex flex-col">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4">Moving to a New City?</h3>
              <p className="text-orange-100 text-lg mb-8">
                Check if that dream apartment fits your budget. See rent affordability based on your income and lifestyle.
              </p>
            </div>
            <Link
              href="/rent-calculator"
              className="inline-flex items-center justify-center gap-3 bg-white text-rose-700 px-8 py-4 rounded-2xl font-semibold hover:bg-white/90 transition group-hover:scale-105"
            >
              Check Rent Affordability <MoveRight className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Expanded SEO Content Section */}
        <section className="mt-16 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Why Use Our 2026 Cost Calculators?
              </h2>
              <div className="prose prose-zinc max-w-none text-lg">
                <p>
                  In today’s fast-changing economy, guessing your monthly payments or rent budget can lead to costly mistakes. 
                  Our free cost calculators use up-to-date 2026 financial formulas to give you precise, realistic results in seconds.
                </p>
                <p>
                  Whether you're planning a big purchase, relocating, or building wealth, these tools help you make confident, data-driven decisions.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">What You Can Calculate Instantly</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Monthly EMI & total interest on loans",
                  "Rent affordability based on income",
                  "Savings growth with compound interest",
                  "Personal loan vs. credit card costs",
                  "Budget breakdowns using 50/30/20 rule",
                  "Mortgage vs. rent comparisons",
                  "Emergency fund timelines",
                  "Investment return projections",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <AdBanner />

            {/* FAQ Section for SEO */}
            <div className="pt-8">
              <h3 className="text-3xl font-bold mb-8">Frequently Asked Questions</h3>
              <div className="space-y-8">
                {[
                  {
                    q: "Are these cost calculators really free?",
                    a: "Yes! All tools on FreeUSCalculator are 100% free with no hidden fees, no signup required, and no ads interrupting your calculations.",
                  },
                  {
                    q: "How accurate are the 2026 EMI and loan calculators?",
                    a: "Our calculators use standard banking formulas (PMT, FV, etc.) and are updated for current 2026 interest rate trends. Results are estimates — always consult a financial advisor for official advice.",
                  },
                  {
                    q: "Can I use the rent affordability calculator for any city?",
                    a: "Absolutely. Just enter your monthly income and desired rent percentage. The tool adapts to any location and lifestyle.",
                  },
                  {
                    q: "Do the savings calculators account for inflation?",
                    a: "Advanced savings tools include optional inflation adjustments to show real purchasing power growth over time.",
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

          {/* Sidebar Tips & Benefits */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-8 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border">
                <h4 className="font-semibold text-xl mb-6 flex items-center gap-3">
                  <Target className="text-blue-600" /> Smart Money Tips for 2026
                </h4>
                {[
                  {
                    icon: DollarSign,
                    title: "50/30/20 Budget Rule",
                    desc: "50% needs, 30% wants, 20% savings & debt. Use our tools to track it.",
                  },
                  {
                    icon: Home,
                    title: "Housing Affordability",
                    desc: "Keep housing costs under 28-30% of gross income for financial breathing room.",
                  },
                  {
                    icon: Clock,
                    title: "Start Saving Early",
                    desc: "Even small monthly contributions grow significantly with compound interest.",
                  },
                ].map((tip, i) => {
                  const Icon = tip.icon;
                  return (
                    <div key={i} className="flex gap-5 mb-8 last:mb-0">
                      <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">{tip.title}</p>
                        <p className="text-sm text-zinc-600">{tip.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-white p-8 rounded-3xl">
                <div className="text-amber-950/70 text-sm font-medium mb-2">PRO TIP</div>
                <p className="text-xl font-semibold leading-tight">
                  Run multiple scenarios before signing any loan or lease. Small changes in rate or term can save you thousands.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>

      {/* Final CTA */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl text-zinc-400 mb-10">
            Start with any calculator below — results appear instantly.
          </p>
          <a
            href="#tools"
            className="inline-flex items-center gap-4 bg-white text-zinc-900 px-12 py-5 rounded-2xl font-semibold text-xl hover:bg-amber-400 transition"
          >
            Browse All 2026 Calculators
            <MoveRight className="w-7 h-7" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-sm text-zinc-500 border-t bg-white">
        © 2026 FreeUSCalculator — Accurate, Free Financial Tools for Everyone
      </footer>
    </div>
  );
}