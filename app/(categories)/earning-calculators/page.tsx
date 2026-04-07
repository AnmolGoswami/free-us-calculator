// app/(categories)/earning-calculators/page.tsx

import Link from "next/link";
import { TrendingUp, Users, DollarSign, Clock, Award, ShieldCheck, MoveRight, CheckCircle2 } from "lucide-react";
import ToolCard from "@/components/ui/ToolCard";
import AdBanner from "@/components/common/AdBanner";
import { earningTools } from "@/lib/tools";

export const metadata = {
  title: "Best Earnings Calculators 2026 – Uber, DoorDash, Gig & Salary Tools (Free)",
  description:
    "Free 2026 earnings calculators for gig workers & employees. Calculate Uber driver pay, DoorDash earnings, hourly to salary, take-home pay, and more with accurate tools.",
  keywords: [
    "uber earnings calculator 2026",
    "doordash earnings calculator",
    "gig economy calculator",
    "hourly to salary converter",
    "uber driver pay calculator",
    "doordash pay after expenses",
    "take home pay calculator",
    "rider earnings estimator",
    "freelance income calculator",
  ],
  alternates: {
    canonical: "https://freeuscalculator.com/earning-calculators",
  },
  openGraph: {
    title: "Free Earnings Calculators 2026 | Uber, DoorDash & Salary Tools",
    description: "Calculate real earnings for gig workers and salaried employees. Uber, DoorDash, hourly to salary & more – 100% free.",
    images: [{ url: "/og-earning-calculators.jpg" }],
  },
};

export default function EarningCalculatorsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* ================= HERO ================= */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-800 to-cyan-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(16,185,129,0.3),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              100% Free • No Signup
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              <Award className="w-5 h-5 text-amber-400" />
              Updated for 2026
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              <Users className="w-5 h-5 text-sky-400" />
              65,000+ Gig Workers
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            Know Your Real <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">Earnings</span> in 2026
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/80 mb-10">
            Accurate calculators for Uber, DoorDash, Lyft, Instacart, and traditional jobs. 
            See take-home pay after gas, maintenance, taxes, and expenses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#tools"
              className="group px-10 py-4 bg-white text-emerald-950 rounded-2xl font-semibold text-lg flex items-center gap-3 hover:bg-amber-400 transition-all duration-300 shadow-xl"
            >
              Explore All Tools
              <MoveRight className="group-hover:translate-x-1 transition" />
            </a>

            <Link
              href="/uber-earnings-calculator"
              className="px-10 py-4 border border-white/30 hover:border-white rounded-2xl font-semibold text-lg transition-all"
            >
              Try Uber Earnings Calculator
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { num: "65K+", label: "Gig Workers Helped" },
              { num: "100%", label: "Free Forever" },
              { num: "< 2s", label: "Instant Results" },
              { num: "2026", label: "Tax & Expense Ready" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold mb-1">{stat.num}</div>
                <div className="text-emerald-200 text-sm tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOOLS SECTION ================= */}
      <main id="tools" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-600 font-medium mb-3">
            <TrendingUp className="w-5 h-5" /> GIG ECONOMY & SALARY TOOLS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Popular Earnings Calculators 2026
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            From ride-sharing to delivery and full-time jobs — calculate your true income accurately.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {earningTools.map((tool) => (
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
          <div className="p-10 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-2xl flex flex-col">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4">Driving for Uber or Lyft?</h3>
              <p className="text-emerald-100 text-lg mb-8">
                Know your real hourly earnings after gas, maintenance, insurance, and platform fees.
              </p>
            </div>
            <Link
              href="/uber-earnings-calculator"
              className="inline-flex items-center justify-center gap-3 bg-white text-emerald-700 px-8 py-4 rounded-2xl font-semibold hover:bg-amber-300 transition"
            >
              Calculate Uber Earnings <MoveRight className="transition" />
            </Link>
          </div>

          <div className="p-10 rounded-3xl bg-gradient-to-br from-amber-600 to-orange-600 text-white shadow-2xl flex flex-col">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4">Delivering with DoorDash?</h3>
              <p className="text-amber-100 text-lg mb-8">
                Calculate your actual take-home pay including tips, mileage, and vehicle expenses.
              </p>
            </div>
            <Link
              href="/doordash-earnings-calculator"
              className="inline-flex items-center justify-center gap-3 bg-white text-amber-700 px-8 py-4 rounded-2xl font-semibold hover:bg-white/90 transition"
            >
              Check DoorDash Earnings <MoveRight className="transition" />
            </Link>
          </div>
        </div>

        {/* SEO Content Section */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Why Gig Workers Love These Calculators
              </h2>
              <div className="prose prose-zinc max-w-none text-lg leading-relaxed">
                <p>
                  The gig economy is booming in 2026, but understanding your real earnings is harder than ever. 
                  Hidden costs like fuel, vehicle wear, taxes, and platform fees can eat up 30–50% of your gross pay.
                </p>
                <p>
                  Our free earnings calculators help Uber drivers, DoorDash dashers, Instacart shoppers, and salaried employees 
                  see their true hourly or monthly income with full transparency.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">What You Can Calculate</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Uber & Lyft real hourly earnings",
                  "DoorDash pay after expenses & tips",
                  "Hourly wage to annual salary conversion",
                  "Take-home pay after taxes & deductions",
                  "Gig worker net profit calculator",
                  "Vehicle operating cost estimator",
                  "Break-even mileage calculator",
                  "Monthly income projections",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <AdBanner />

            {/* FAQ for SEO */}
            <div className="pt-8">
              <h3 className="text-3xl font-bold mb-8">Frequently Asked Questions</h3>
              <div className="space-y-8">
                {[
                  {
                    q: "Are these earnings calculators accurate for 2026?",
                    a: "Yes. All calculators are updated with current 2026 platform fees, average gas prices, and tax brackets to give you realistic estimates.",
                  },
                  {
                    q: "Do I need to create an account to use the tools?",
                    a: "No. Everything is 100% free and works without signup or login.",
                  },
                  {
                    q: "Can I calculate earnings for multiple cities?",
                    a: "Absolutely. Just enter your local gas price, insurance cost, and expected orders per hour.",
                  },
                  {
                    q: "How do I convert hourly pay to yearly salary?",
                    a: "Our hourly to salary calculator instantly shows annual, monthly, and weekly earnings with optional unpaid time off adjustments.",
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

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border sticky top-8">
              <h4 className="font-semibold text-xl mb-6 flex items-center gap-3">
                <DollarSign className="text-emerald-600" /> Pro Tips for Gig Workers
              </h4>
              {[
                {
                  icon: Clock,
                  title: "Track Every Mile",
                  desc: "Every mile you drive affects your real hourly rate. Use our mileage calculator.",
                },
                {
                  icon: Users,
                  title: "Factor in Downtime",
                  desc: "Waiting time between rides/orders significantly reduces your effective earnings.",
                },
                {
                  icon: ShieldCheck,
                  title: "Save for Taxes",
                  desc: "Set aside 25–35% of your gross earnings for self-employment taxes.",
                },
              ].map((tip, i) => {
                const Icon = tip.icon;
                return (
                  <div key={i} className="flex gap-5 mb-8 last:mb-0">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-emerald-600" />
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
          <h2 className="text-4xl font-bold mb-6">Ready to Calculate Your Real Earnings?</h2>
          <p className="text-xl text-zinc-400 mb-10">
            Choose any tool below and get instant, accurate results.
          </p>
          <a
            href="#tools"
            className="inline-flex items-center gap-4 bg-white text-zinc-900 px-12 py-5 rounded-2xl font-semibold text-xl hover:bg-emerald-400 transition"
          >
            Browse All Earnings Tools
            <MoveRight className="w-7 h-7" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-sm text-zinc-500 border-t bg-white">
        © 2026 FreeUSCalculator — Free Tools for Gig Workers & Employees
      </footer>
    </div>
  );
}