import Link from "next/link";
import { TrendingUp, Users, PiggyBank, Clock, Award, ShieldCheck, MoveRight, CheckCircle2, DollarSign } from "lucide-react";
import ToolCard from "@/components/ui/ToolCard";
import { retirementTools } from "@/lib/tools";

export const metadata = {
  title: "Best Retirement & 401(k) Calculators 2026 (Free)",
  description:
    "Free 2026 retirement calculators. Calculate your 401(k) growth, employer match, Roth IRA, and find out exactly how much you need to retire early.",
  keywords: [
    "retirement calculator",
    "401k calculator",
    "employer match calculator",
    "roth ira calculator",
    "when can i retire",
    "fire calculator",
  ],
  alternates: {
    canonical: "https://www.freeuscalculator.in/retirement-calculators",
  },
  openGraph: {
    title: "Free Retirement & 401(k) Calculators 2026",
    description: "Calculate your 401(k) growth, employer match, and see exactly when you can retire with our 100% free tools.",
    images: [{ url: "/og-retirement-calculators.jpg" }],
  },
};

export default function RetirementCalculatorsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* ================= HERO ================= */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-800 to-purple-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(139,92,246,0.3),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              100% Free • No Signup
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              <Award className="w-5 h-5 text-amber-400" />
              Updated for 2026
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              <Users className="w-5 h-5 text-fuchsia-400" />
              120,000+ Planners
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            Secure Your <span className="bg-gradient-to-r from-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">Future</span> Today
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/80 mb-10">
            Accurate 401(k), Roth IRA, and FIRE calculators. See exactly how much your money will grow and when you can finally stop working.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#tools"
              className="group px-10 py-4 bg-white text-indigo-950 rounded-2xl font-semibold text-lg flex items-center gap-3 hover:bg-amber-400 transition-all duration-300 shadow-xl"
            >
              Explore All Tools
              <MoveRight className="group-hover:translate-x-1 transition" />
            </a>

            <Link
              href="/401k-calculator"
              className="px-10 py-4 border border-white/30 hover:border-white rounded-2xl font-semibold text-lg transition-all"
            >
              Try 401(k) Calculator
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { num: "120K+", label: "Retirements Planned" },
              { num: "100%", label: "Free Forever" },
              { num: "Accurate", label: "Compound Interest" },
              { num: "2026", label: "Tax Rules Ready" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold mb-1">{stat.num}</div>
                <div className="text-indigo-200 text-sm tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOOLS SECTION ================= */}
      <main id="tools" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-indigo-600 font-medium mb-3">
            <PiggyBank className="w-5 h-5" /> RETIREMENT & INVESTING
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Popular Retirement Calculators 2026
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            From 401(k) employer matches to FIRE planning — take control of your long-term wealth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {retirementTools.map((tool) => (
            <div
              key={tool.slug}
              className="group transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl rounded-3xl overflow-hidden bg-white border border-zinc-100"
            >
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>

        <div className="my-20">
          
        </div>

        {/* Scenario Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-2xl flex flex-col">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4">Do You Have a 401(k)?</h3>
              <p className="text-indigo-100 text-lg mb-8">
                See how much free money you get from your employer match and how fast your balance will grow.
              </p>
            </div>
            <Link
              href="/401k-calculator"
              className="inline-flex items-center justify-center gap-3 bg-white text-indigo-700 px-8 py-4 rounded-2xl font-semibold hover:bg-amber-300 transition"
            >
              Calculate 401(k) Growth <MoveRight className="transition" />
            </Link>
          </div>

          <div className="p-10 rounded-3xl bg-gradient-to-br from-fuchsia-600 to-pink-600 text-white shadow-2xl flex flex-col">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4">Planning to Retire Early?</h3>
              <p className="text-fuchsia-100 text-lg mb-8">
                Calculate exactly how much money you need invested before you can safely quit your job forever.
              </p>
            </div>
            <Link
              href="/401k-calculator"
              className="inline-flex items-center justify-center gap-3 bg-white text-fuchsia-700 px-8 py-4 rounded-2xl font-semibold hover:bg-white/90 transition"
            >
              Check Retirement Goals <MoveRight className="transition" />
            </Link>
          </div>
        </div>

        {/* SEO Content Section */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Why You Need a Retirement Calculator
              </h2>
              <div className="prose prose-zinc max-w-none text-lg leading-relaxed">
                <p>
                  Planning for retirement can feel overwhelming, but the math behind it is incredibly simple thanks to compound interest. 
                  Whether you are investing in a 401(k), Roth IRA, or standard brokerage account, knowing your numbers is the first step to financial freedom.
                </p>
                <p>
                  Our free retirement calculators help you visualize your future wealth, maximize your employer match, and figure out the exact date you can retire.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">What You Can Calculate</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "401(k) Employer Match & Growth",
                  "Roth IRA Tax-Free Growth",
                  "Target Retirement Savings Goal",
                  "FIRE (Financial Independence) Age",
                  "Compound Interest over 10-40 years",
                  "Monthly contribution impacts",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ for SEO */}
            <div className="pt-8">
              <h3 className="text-3xl font-bold mb-8">Frequently Asked Questions</h3>
              <div className="space-y-8">
                {[
                  {
                    q: "What is a good employer match for a 401(k)?",
                    a: "A standard employer match is 50% up to 6% of your salary, or a 100% match up to 3-4%. You should always contribute enough to get the full match—it's free money!",
                  },
                  {
                    q: "Do I need an account to use these calculators?",
                    a: "No! All our financial calculators are 100% free and don't require any signup.",
                  },
                  {
                    q: "What is the rule of thumb for retirement savings?",
                    a: "Many experts recommend having 1x your salary saved by age 30, 3x by 40, and 10x by 67. Use our calculators to see if you are on track.",
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
                <TrendingUp className="text-indigo-600" /> Pro Tips for Retirement
              </h4>
              {[
                {
                  icon: DollarSign,
                  title: "Get the Match",
                  desc: "Never leave free money on the table. Always contribute enough to your 401(k) to get the maximum employer match.",
                },
                {
                  icon: Clock,
                  title: "Start Early",
                  desc: "Thanks to compound interest, starting at age 25 vs 35 can literally mean a difference of millions of dollars.",
                },
                {
                  icon: ShieldCheck,
                  title: "Check Your Fees",
                  desc: "High expense ratios in your 401(k) can eat away at your returns. Aim for index funds with low fees.",
                },
              ].map((tip, i) => {
                const Icon = tip.icon;
                return (
                  <div key={i} className="flex gap-5 mb-8 last:mb-0">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-indigo-600" />
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
          <h2 className="text-4xl font-bold mb-6">Ready to Plan Your Future?</h2>
          <p className="text-xl text-zinc-400 mb-10">
            Choose a calculator below to start modeling your wealth.
          </p>
          <a
            href="#tools"
            className="inline-flex items-center gap-4 bg-white text-zinc-900 px-12 py-5 rounded-2xl font-semibold text-xl hover:bg-indigo-400 transition"
          >
            Browse Retirement Tools
            <MoveRight className="w-7 h-7" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-sm text-zinc-500 border-t bg-white">
        © 2026 FreeUSCalculator — Free Tools for Your Financial Future
      </footer>
    </div>
  );
}
