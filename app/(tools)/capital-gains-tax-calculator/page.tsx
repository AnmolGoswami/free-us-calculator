import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import CapitalGainsCalculator from "@/components/calculators/CapitalGainsCalculator";
import {
  Banknote,
  ChevronRight,
  Calculator,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  BookOpen,
  PieChart as PieChartIcon,
  AlertCircle
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Capital Gains Tax Calculator 2026 | Stock & Crypto Tax Estimator",
  description: "Calculate your 2026 short-term and long-term capital gains tax. Estimate taxes on stocks, cryptocurrency, and real estate investments.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/capital-gains-tax-calculator",
  },
  keywords: ["capital gains tax calculator", "crypto tax calculator", "stock tax calculator", "short term vs long term capital gains", "real estate capital gains"],
  openGraph: {
    title: "Capital Gains Tax Calculator 2026",
    description: "Calculate your short-term and long-term capital gains tax for stocks, crypto, and real estate investments.",
    url: "https://www.freeuscalculator.in/capital-gains-tax-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Gains Tax Calculator (2026)",
    description: "Calculate your short-term and long-term capital gains tax for stocks, crypto, and real estate investments.",
  },
};

// ─── Static JSON-LD ───────────────────────────────────────────────────────────
const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Capital Gains Tax Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates estimated taxes on investment gains based on hold duration, filing status, and annual income.",
  url: "https://www.freeuscalculator.in/capital-gains-tax-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Tax Tools", item: "https://www.freeuscalculator.in/tax-calculators" },
    { "@type": "ListItem", position: 3, name: "Capital Gains Tax Calculator", item: "https://www.freeuscalculator.in/capital-gains-tax-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "What is the difference between Short-Term and Long-Term Capital Gains?",
    a: "Short-term capital gains apply to assets held for one year or less and are taxed at your standard ordinary income tax rate (up to 37%). Long-term capital gains apply to assets held for more than one year and benefit from significantly lower tax rates (0%, 15%, or 20%).",
  },
  {
    q: "Do I have to pay taxes on Crypto?",
    a: "Yes. The IRS treats cryptocurrency as property for tax purposes. This means every time you sell, trade, or dispose of crypto at a profit, you owe capital gains tax. Exchanging one cryptocurrency for another (e.g., trading Bitcoin for Ethereum) is considered a taxable event.",
  },
  {
    q: "What is the Net Investment Income Tax (NIIT)?",
    a: "The NIIT is an additional 3.8% tax applied to investment income for high earners. It generally applies if your Modified Adjusted Gross Income (MAGI) exceeds $200,000 for single filers or $250,000 for married couples filing jointly.",
  },
  {
    q: "Can I offset my capital gains with losses?",
    a: "Yes! This strategy is called Tax-Loss Harvesting. You can use your capital losses to offset your capital gains. If your losses exceed your gains, you can use up to $3,000 of those losses to offset ordinary income, and carry the rest forward to future years.",
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

export default function CapitalGainsPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-violet-200 selection:text-violet-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-violet-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-violet-600 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/tax-calculators" className="hover:text-violet-600 transition-colors">Tax Tools</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Capital Gains Tax</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Banknote size={12} className="text-violet-600" />
              Investment Taxes
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Capital Gains{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Calculate your tax liability on stocks, crypto, and real estate. See exactly how much you can save by holding long-term.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: TrendingUp, label: "Stocks & Crypto" },
                { icon: Calculator, label: "Short vs Long Term" },
                { icon: DollarSign, label: "NIIT Included" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-violet-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="Capital Gains Tax Estimator"
              description="Calculate taxes based on 2025/2026 tax brackets."
              category="Tax"
              lastUpdated="2026"
            >
              <CapitalGainsCalculator />
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
            Capital Gains Rules of Thumb
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "1 Year", label: "The Magic Number", sub: "Hold longer to drop your rate" },
              { val: "0, 15, 20%", label: "Long-Term Rates", sub: "Massively lower than income tax" },
              { val: "3.8%", label: "NIIT Surtax", sub: "Applies to high earners" },
              { val: "$3,000", label: "Loss Deduction", sub: "Max net loss deducted against income" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-violet-400 mb-2">{val}</p>
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
                <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Understanding Investment Taxes
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">Stocks · Crypto · Real Estate</p>
                </div>
              </div>

              <div className="prose prose-slate prose-violet max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-violet-600 hover:prose-a:text-violet-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-violet-500 p-6 rounded-r-2xl">
                  The moment you click "sell" on a profitable stock or crypto trade, you trigger a taxable event. Understanding the difference between short-term and long-term capital gains can literally save you thousands of dollars at tax time.
                </p>

                <h3>The "One Year" Rule</h3>
                <p>
                  The IRS heavily rewards long-term investors. If you buy an asset and sell it in <strong>365 days or less</strong>, any profit is considered a Short-Term Capital Gain. This is taxed identically to your normal salary from a job—at ordinary income tax rates, which can be as high as 37%.
                </p>
                <p>
                  If you hold that exact same asset for <strong>366 days or more</strong>, it becomes a Long-Term Capital Gain. The tax brackets drop significantly to either 0%, 15%, or 20% (depending on your total income). For most middle-class Americans, the long-term capital gains tax rate is 15%.
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0 mt-6">
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-violet-100">
                    <CheckCircle2 size={18} className="text-violet-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700"><strong>Crypto Swaps:</strong> Trading Bitcoin for Ethereum is a taxable event, even if you never convert it to cash.</span>
                  </li>
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-violet-100">
                    <CheckCircle2 size={18} className="text-violet-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700"><strong>Real Estate:</strong> Selling a home has special exemptions if it was your primary residence for 2 of the last 5 years.</span>
                  </li>
                </ul>

                <div className="my-8 bg-rose-50 border border-rose-200 rounded-2xl p-6 flex gap-4">
                  <AlertCircle className="text-rose-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-rose-900 font-bold mt-0 mb-2">The Day Trading Trap</h4>
                    <p className="text-rose-800 text-sm m-0 leading-relaxed">
                      Many new day traders make thousands of dollars in the stock or crypto market, reinvest it, and then lose it all later in the year. If they don't hold back cash for taxes on those early profitable trades, they can end up owing massive tax bills to the IRS on money they no longer have. Always set aside ~30% of short-term trading profits for taxes!
                    </p>
                  </div>
                </div>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-violet-900 to-indigo-950 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={16} className="text-violet-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-violet-300">
                      Tax Free Growth
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Avoid Taxes Entirely</h3>
                  <p className="text-sm text-violet-100/80 leading-relaxed mb-6">
                    If you trade stocks or ETFs inside a Roth IRA, you pay $0 in capital gains taxes, ever. It is the ultimate legal tax shelter.
                  </p>
                  <Link href="/roth-ira-calculator" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Roth IRA Calculator <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl" />
              </div>

              {/* Internal Related Links */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Self-Employment Tax", href: "/self-employment-tax-calculator-usa", icon: Calculator },
                    { title: "Paycheck Calculator", href: "/paycheck-calculator", icon: DollarSign },
                    { title: "Compound Interest", href: "/compound-interest-calculator", icon: TrendingUp },
                    { title: "Salary After Tax", href: "/salary-after-tax-calculator", icon: PieChartIcon },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-violet-50 border border-transparent hover:border-violet-100 transition-colors group">
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-violet-200 group-hover:text-violet-700 transition-colors text-slate-500">
                        <item.icon size={16} />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-violet-700 text-sm">{item.title}</span>
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
                  title="Capital Gains Tax Calculator 2026"
                  url="https://www.freeuscalculator.in/capital-gains-tax-calculator"
                />
              </div>
            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RELATED CALCULATORS GRID (FULL WIDTH)
        ════════════════════════════════════════════════════════════════ */}
        <div className="pt-10">
          <RelatedCalculators currentTool="capital-gains-tax-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Investment Tax Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-violet-300 transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-violet-500 shrink-0 mt-0.5" />
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
