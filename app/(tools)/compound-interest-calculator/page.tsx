import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";
import {
  TrendingUp,
  ChevronRight,
  Calculator,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Zap,
  Target,
  BookOpen
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Compound Interest Calculator 2026 – Investment Growth Estimator",
  description: "Free compound interest calculator. Discover how your investments will grow over time with regular contributions and the power of compounding.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/compound-interest-calculator",
  },
  keywords: ["compound interest calculator", "investment calculator", "future value calculator", "wealth calculator", "Rule of 72 calculator 2026"],
  openGraph: {
    title: "Compound Interest Calculator 2026",
    description: "Calculate how your money can grow over time with the power of compound interest. See the impact of regular contributions and returns.",
    url: "https://www.freeuscalculator.in/compound-interest-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compound Interest Calculator (2026)",
    description: "Calculate how your money can grow over time with the power of compound interest.",
  },
};

// ─── Static JSON-LD ───────────────────────────────────────────────────────────
const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Compound Interest Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates the future value of investments based on initial balance, regular contributions, and annual compound interest.",
  url: "https://www.freeuscalculator.in/compound-interest-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Retirement Tools", item: "https://www.freeuscalculator.in/retirement-calculators" },
    { "@type": "ListItem", position: 3, name: "Compound Interest Calculator", item: "https://www.freeuscalculator.in/compound-interest-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "What is Compound Interest?",
    a: "Compound interest is the interest on savings calculated on both the initial principal and the accumulated interest from previous periods. Put simply, it's 'interest on interest,' and it is the most powerful force in building long-term wealth.",
  },
  {
    q: "What is the Rule of 72?",
    a: "The Rule of 72 is a quick mental math trick to determine how long an investment will take to double. You simply divide 72 by your expected annual rate of return. For example, at an 8% return, your money will double every 9 years (72 / 8 = 9).",
  },
  {
    q: "What is a realistic rate of return?",
    a: "Historically, the S&P 500 (the 500 largest US companies) has returned an average of about 10% annually before inflation. Adjusting for inflation, a realistic long-term rate of return for a stock-heavy portfolio is typically estimated between 7% and 8%.",
  },
  {
    q: "Does contribution frequency matter?",
    a: "Yes! Contributing monthly rather than annually puts your money into the market faster, allowing it to start compounding sooner. Over a 30-year period, contributing $500 monthly will result in significantly more wealth than contributing $6,000 once a year.",
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

export default function CompoundInterestPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-emerald-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/retirement-calculators" className="hover:text-emerald-600 transition-colors">Retirement</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Compound Interest</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Target size={12} className="text-emerald-600" />
              Wealth & Investing
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Compound Interest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Discover how your money can grow over time. Calculate the future value of your investments with the power of compounding.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Zap, label: "Visual Growth Curve" },
                { icon: TrendingUp, label: "Investment Tracking" },
                { icon: Calculator, label: "Monthly vs Annual" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-emerald-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="Interactive Growth Calculator"
              description="Estimate the future value of your portfolio for 2026 and beyond."
              category="Wealth"
              lastUpdated="2026"
            >
              <CompoundInterestCalculator />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      <div className="h-40" />

      {/* ════════════════════════════════════════════════════════════════════
          FACTS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-10 sm:py-12 border-y border-slate-800 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8">
            Investing Rules of Thumb
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "10%", label: "S&P 500 Average", sub: "Historical annual return" },
              { val: "Rule of 72", label: "Doubling Time", sub: "72 / rate = years to double" },
              { val: "Time", label: "The Secret Weapon", sub: "Start as early as possible" },
              { val: "Taxes", label: "Erode Returns", sub: "Use Roth IRAs to avoid them" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-emerald-400 mb-2">{val}</p>
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
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    The Power of Compound Interest
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">Albert Einstein called it the 8th wonder of the world.</p>
                </div>
              </div>

              <div className="prose prose-slate prose-emerald max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-emerald-600 hover:prose-a:text-emerald-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                  "Compound interest is the eighth wonder of the world. He who understands it, earns it... he who doesn't... pays it." Whether Einstein actually said this or not, the math holds true. It is the single most important concept in personal finance.
                </p>

                <h3>How Does It Work?</h3>
                <p>
                  Imagine you invest $10,000 and it grows by 10% in the first year. You now have $11,000. 
                  In year two, if it grows by 10% again, you don't just earn another $1,000. You earn 10% on the new balance of $11,000, giving you $1,100 in interest. 
                </p>
                <p>
                  This snowball effect continues. By year 30, that same 10% growth isn't generating $1,000 a year—it's generating <strong>$15,000+ a year</strong> in pure interest, without you lifting a finger.
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0 mt-6">
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-emerald-100">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700"><strong>Start Early:</strong> Time is more important than money in compounding.</span>
                  </li>
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-emerald-100">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700"><strong>Be Consistent:</strong> Automate your monthly contributions.</span>
                  </li>
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-emerald-100">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700"><strong>Reinvest:</strong> Never withdraw the dividends; reinvest them.</span>
                  </li>
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-emerald-100">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700"><strong>Avoid Fees:</strong> High expense ratios eat your compound growth.</span>
                  </li>
                </ul>

                <div className="my-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
                  <TrendingUp className="text-amber-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-amber-900 font-bold mt-0 mb-2">The Danger of Debt</h4>
                    <p className="text-amber-800 text-sm m-0 leading-relaxed">
                      Compound interest works both ways. When you carry a balance on a credit card, the credit card company is compounding interest <em>against</em> you. This is why credit card debt is so hard to escape. Always pay off high-interest debt before investing!
                    </p>
                  </div>
                </div>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-emerald-900 to-slate-900 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Target size={16} className="text-emerald-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-300">
                      Tax Free Growth
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Protect Your Wealth</h3>
                  <p className="text-sm text-emerald-100/80 leading-relaxed mb-6">
                    If you invest in a standard brokerage, you will pay taxes on your gains. Use a Roth IRA to ensure your compound growth is 100% tax-free forever.
                  </p>
                  <Link href="/roth-ira-calculator" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Roth IRA Calculator <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
              </div>

              {/* Internal Related Links */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Retirement Calculator", href: "/retirement-calculator", icon: Target },
                    { title: "Roth IRA Growth", href: "/roth-ira-calculator", icon: TrendingUp },
                    { title: "401(k) Match", href: "/401k-calculator", icon: DollarSign },
                    { title: "FIRE Calculator", href: "/retirement-goal-calculator", icon: Zap },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-colors group">
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-emerald-200 group-hover:text-emerald-700 transition-colors text-slate-500">
                        <item.icon size={16} />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-emerald-700 text-sm">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6 text-center">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Share This Tool
                </h4>
                <ShareButtons
                  title="Compound Interest Calculator 2026"
                  url="https://www.freeuscalculator.in/compound-interest-calculator"
                />
              </div>
            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RELATED CALCULATORS GRID (FULL WIDTH)
        ════════════════════════════════════════════════════════════════ */}
        <div className="pt-10">
          <RelatedCalculators currentTool="compound-interest-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Wealth & Investing Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-emerald-300 transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                  {q}
                </dt>
                <dd className="text-slate-500 text-sm sm:text-base leading-relaxed pl-8">{a}</dd>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
