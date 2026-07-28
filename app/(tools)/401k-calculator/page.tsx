import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import Retirement401kCalculator from "@/components/calculators/401kCalculator";
import {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  ChevronRight,
  Briefcase,
  AlertCircle,
  Calculator,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  PiggyBank
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "401(k) Calculator 2026 - Employer Match & Growth Estimator",
  description:
    "Free 401(k) retirement calculator. Estimate your future balance, employer match contributions, and compound interest growth over time.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/401k-calculator",
  },
  keywords: [
    "401k calculator",
    "employer match calculator",
    "retirement calculator",
    "401k growth calculator",
    "401k match"
  ],
  openGraph: {
    title: "401(k) Calculator 2026 - Employer Match & Growth",
    description:
      "Estimate your future balance, employer match contributions, and compound interest growth over time with this 100% free tool.",
    url: "https://www.freeuscalculator.in/401k-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "401(k) Calculator - Employer Match Estimator",
    description: "Estimate your future balance and employer match contributions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// ─── Static JSON-LD ───────────────────────────────────────────────────────────
const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "401(k) Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates future 401(k) balances including employer match and compound interest growth.",
  url: "https://www.freeuscalculator.in/401k-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Retirement Calculators", item: "https://www.freeuscalculator.in/retirement-calculators" },
    { "@type": "ListItem", position: 3, name: "401(k) Calculator", item: "https://www.freeuscalculator.in/401k-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "How does a 401(k) employer match work?",
    a: "An employer match is when your company contributes money to your 401(k) based on how much you contribute. For example, a common match is 50% of your contributions up to 6% of your salary. If you earn $100,000 and contribute 6% ($6,000), your employer will add $3,000 to your account for free."
  },
  {
    q: "What is a good rate of return for a 401(k)?",
    a: "Historically, the stock market (S&P 500) has returned an average of 7% to 10% per year after inflation. When projecting over decades, using 6% to 7% is considered a safe, conservative estimate for a diversified portfolio."
  },
  {
    q: "How much should I contribute to my 401(k)?",
    a: "At a bare minimum, you should always contribute enough to get your full employer match—otherwise, you are leaving free money on the table. Financial experts often recommend saving 10% to 15% of your total income for retirement."
  },
  {
    q: "What is the maximum I can contribute in 2026?",
    a: "Contribution limits change based on IRS rules. Generally, it increases slightly over time. For example, the employee limit in recent years has hovered around $23,000, with a $7,500 catch-up contribution allowed for those over age 50."
  }
];

const SCHEMA_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS_DATA.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});


export default function Retirement401kPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-indigo-200 selection:text-indigo-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/retirement-calculators" className="hover:text-indigo-600 transition-colors">Retirement</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">401(k) Calculator</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <PiggyBank size={12} className="text-indigo-600" />
              Retirement Planning
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              401(k) Growth & Match{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Visualize your future wealth. See how compound interest and employer matches can turn your monthly contributions into millions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Sparkles, label: "Compound Interest" },
                { icon: Briefcase, label: "Employer Match" },
                { icon: ShieldCheck, label: "IRS Rules Ready" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-indigo-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="401(k) Retirement Calculator"
              description="Estimate your future balance, employer match, and growth."
              category="Retirement"
              lastUpdated="2026"
            >
              <Retirement401kCalculator />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      <div className="h-40" />

      {/* ════════════════════════════════════════════════════════════════════
          2026 FACTS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-10 sm:py-12 border-y border-slate-800 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8">
            Retirement Benchmarks & Facts
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "10-15%", label: "Target Savings Rate", sub: "Recommended by experts" },
              { val: "Free Money", label: "Employer Match", sub: "Always max this out first" },
              { val: "7-10%", label: "Historical S&P 500", sub: "Average annual return" },
              { val: "Compound", label: "Interest Magic", sub: "Time is your best asset" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-indigo-400 mb-2">{val}</p>
                <p className="text-sm font-bold text-white mb-1">{label}</p>
                <p className="text-[11px] text-slate-400 leading-tight">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20 pb-20">
        
        {/* ════════════════════════════════════════════════════════════════
            COMPREHENSIVE GUIDE WITH INTERNAL LINKS
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="guide-heading">
          <div className="flex flex-col lg:flex-row gap-10 items-start max-w-6xl mx-auto">
            
            {/* Main Article */}
            <article className="flex-1 min-w-0 space-y-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    How to Maximize Your 401(k) Growth
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">Employer Matches · Compound Interest · Tax Savings</p>
                </div>
              </div>

              <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-indigo-600 hover:prose-a:text-indigo-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-indigo-500 p-6 rounded-r-2xl">
                  A 401(k) is the most powerful wealth-building tool available to the average American worker. Because contributions are made pre-tax and employers often match your savings, it offers guaranteed returns that you cannot find anywhere else.
                </p>

                <h3>Understanding the Employer Match</h3>
                <p>
                  If your company offers a 401(k) match, it is essentially offering you a guaranteed 50% or 100% return on your investment immediately. For example, a standard plan might offer a "50% match up to 6% of your salary". 
                </p>
                <p>
                  This means if you earn $80,000 and contribute 6% ($4,800), your employer will give you $2,400 for free. If you contribute less than 6%, you are literally leaving free money on the table. Always adjust your contribution rate in our calculator to see exactly how much employer money you can claim.
                </p>

                <div className="my-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex gap-4">
                  <AlertCircle className="text-emerald-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-emerald-900 font-bold mt-0 mb-2">The Power of Compound Interest</h4>
                    <p className="text-emerald-800 text-sm m-0 leading-relaxed">
                      Because your 401(k) investments (like stock index funds) grow over decades, the money you earn starts earning its own money. If you look at the chart in our calculator, you'll notice that in the later years, the purple "Investment Growth" area will vastly outsize your actual contributions. Time in the market beats timing the market.
                    </p>
                  </div>
                </div>

                <h3>Traditional 401(k) vs. Roth 401(k)</h3>
                <p>
                  Most 401(k) contributions are "Traditional", meaning the money comes out of your <Link href="/paycheck-calculator">paycheck</Link> before taxes are applied. This lowers your current taxable income, saving you money on taxes today. You will only pay taxes when you withdraw the money in retirement.
                </p>
                <p>
                  Some employers offer a "Roth 401(k)" option. With a Roth, you pay taxes now (using your <Link href="/salary-after-tax-calculator">after-tax salary</Link>), but the money grows completely tax-free, and you pay zero taxes when you withdraw it in retirement.
                </p>

                <h3>What Should I Invest In?</h3>
                <p>
                  When you contribute to a 401(k), the money doesn't just sit in a cash account—it must be invested. Many young investors make the mistake of leaving their money in a default money market fund, which barely keeps up with inflation. 
                </p>
                <p>
                  For the highest likelihood of achieving the 7-10% historical return modeled in our calculator, most experts recommend broad-market index funds (like an S&P 500 fund) or a "Target Date Fund" which automatically adjusts your risk as you get closer to retirement age.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-indigo-900 to-violet-950 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={16} className="text-indigo-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-indigo-300">
                      Savings Tip
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Check Your Net Pay</h3>
                  <p className="text-sm text-indigo-100/80 leading-relaxed mb-6">
                    Increasing your 401(k) contribution lowers your taxable income. Use our paycheck calculator to see exactly how a 1% increase affects your take-home pay.
                  </p>
                  <Link href="/paycheck-calculator" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Calculate Paycheck <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />
              </div>

              {/* Share */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6 text-center">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Share This Tool
                </h4>
                <ShareButtons
                  title="401(k) Calculator & Employer Match Estimator"
                  url="https://www.freeuscalculator.in/401k-calculator"
                />
              </div>

            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RELATED CALCULATORS GRID (FULL WIDTH)
        ════════════════════════════════════════════════════════════════ */}
        <div className="pt-10">
          <RelatedCalculators currentTool="401k-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              401(k) & Retirement Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-indigo-300 transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-indigo-500 shrink-0 mt-0.5" />
                  {q}
                </dt>
                <dd className="text-slate-500 text-sm sm:text-base leading-relaxed pl-8">{a}</dd>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 to-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-4">
            100% Free · Accurate Math
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Secure Your Retirement
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-10 leading-relaxed">
            Don't leave free money on the table. Check your employer match and compound growth potential today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-indigo-900/50">
              <Calculator size={16} />
              Scroll to Calculator
            </a>
            <Link href="/paycheck-calculator" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-colors">
              Check Net Paycheck
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
