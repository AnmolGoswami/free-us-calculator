import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import RothIraCalculator from "@/components/calculators/RothIraCalculator";
import {
  Sparkles,
  TrendingUp,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  Calculator,
  ArrowRight,
  CheckCircle2,
  PiggyBank
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Roth IRA Calculator 2026 | Tax-Free Retirement Growth",
  description:
    "Free Roth IRA calculator. Estimate your future retirement balance and see how tax-free compound interest accelerates your wealth.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/roth-ira-calculator",
  },
  keywords: [
    "roth ira calculator",
    "roth ira growth calculator",
    "tax-free retirement calculator",
    "roth ira contribution limit 2026",
    "ira investment calculator"
  ],
  openGraph: {
    title: "Roth IRA Calculator 2026 | Tax-Free Retirement Growth",
    description:
      "Estimate your Roth IRA balance at retirement. See how your tax-free compound interest grows over decades.",
    url: "https://www.freeuscalculator.in/roth-ira-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roth IRA Calculator - Tax-Free Growth",
    description: "Estimate your Roth IRA balance at retirement.",
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
  name: "Roth IRA Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates future Roth IRA balances emphasizing tax-free compound interest growth.",
  url: "https://www.freeuscalculator.in/roth-ira-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Retirement Calculators", item: "https://www.freeuscalculator.in/retirement-calculators" },
    { "@type": "ListItem", position: 3, name: "Roth IRA Calculator", item: "https://www.freeuscalculator.in/roth-ira-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "What is the Roth IRA contribution limit for 2026?",
    a: "The standard contribution limit for an individual is generally around $7,000 per year, though this scales with inflation. If you are aged 50 or older, the IRS typically allows an additional $1,000 'catch-up' contribution, making the limit $8,000."
  },
  {
    q: "Why is a Roth IRA better than a Traditional IRA?",
    a: "A Roth IRA is funded with post-tax money (money you've already paid taxes on). The massive advantage is that all investment growth and future withdrawals in retirement are 100% tax-free. A Traditional IRA provides a tax break today, but you must pay taxes on all withdrawals later."
  },
  {
    q: "Can I withdraw my Roth IRA contributions without penalty?",
    a: "Yes. Because you have already paid taxes on your initial contributions (the principal), you can withdraw those exact contributions at any time without taxes or penalties. However, you cannot withdraw the investment earnings early without facing severe penalties."
  },
  {
    q: "What is a good rate of return for my IRA?",
    a: "If your IRA is invested in a broad stock market index fund (like the S&P 500), historical averages suggest a 7% to 10% annual return before inflation. 7% is a safe, conservative metric to use for long-term planning."
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


export default function RothIraPage() {
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
            <Link href="/retirement-calculators" className="hover:text-violet-600 transition-colors">Retirement</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Roth IRA Calculator</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <PiggyBank size={12} className="text-violet-600" />
              Tax-Free Retirement Planning
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Roth IRA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Estimate your tax-free retirement wealth. See how compound interest turns your annual contributions into a massive tax-free nest egg.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Sparkles, label: "100% Tax-Free Growth" },
                { icon: ShieldCheck, label: "IRS Limits Checked" },
                { icon: TrendingUp, label: "Compound Interest" },
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
              title="Roth IRA Calculator"
              description="Calculate your tax-free future balance and growth."
              category="Retirement"
              lastUpdated="2026"
            >
              <RothIraCalculator />
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
            Roth IRA Benchmarks (2026)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "$7,000", label: "Contribution Limit", sub: "For individuals under 50" },
              { val: "$8,000", label: "Catch-Up Limit", sub: "For individuals 50 and older" },
              { val: "Zero", label: "Taxes in Retirement", sub: "Qualified withdrawals are tax-free" },
              { val: "No RMDs", label: "Required Minimums", sub: "You never have to withdraw" },
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
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    The Magic of Tax-Free Growth
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">Compound Interest · Tax Strategies · Contribution Limits</p>
                </div>
              </div>

              <div className="prose prose-slate prose-violet max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-violet-600 hover:prose-a:text-violet-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-violet-500 p-6 rounded-r-2xl">
                  A Roth IRA is considered one of the ultimate retirement accounts for one simple reason: <strong>you will never pay taxes on the growth.</strong> Because you fund it with money that has already been taxed (your <Link href="/salary-after-tax-calculator">after-tax salary</Link>), the IRS cannot touch your profits when you withdraw them in retirement.
                </p>

                <h3>Why You Should Max It Out Every Year</h3>
                <p>
                  As you can see in our calculator, investing $7,000 every year for 30 or 40 years results in a massive snowball of wealth. In fact, if you start early enough, the amount of money you make from <em>pure investment growth</em> will far eclipse the actual money you put in. 
                </p>
                <p>
                  If this growth occurred in a standard brokerage account, you would be liable for hundreds of thousands of dollars in capital gains taxes. Inside a Roth IRA, you keep every single penny.
                </p>

                <div className="my-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex gap-4">
                  <AlertCircle className="text-emerald-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-emerald-900 font-bold mt-0 mb-2">Can I Withdraw Early?</h4>
                    <p className="text-emerald-800 text-sm m-0 leading-relaxed">
                      Yes! A unique feature of the Roth IRA is that your initial contributions (the principal) can be withdrawn at any time, completely penalty-free. For example, if you contribute $5,000 this year, you can take that exact $5,000 out next year if an emergency happens. However, if you try to withdraw the investment <em>earnings</em> before age 59½, you will face taxes and a 10% penalty.
                    </p>
                  </div>
                </div>

                <h3>Are There Income Limits?</h3>
                <p>
                  Yes. The IRS prevents high earners from contributing directly to a Roth IRA. In 2026, if you are a single filer making over a certain threshold (historically around $150k - $160k), your contribution limit phases out to $0. 
                </p>
                <p>
                  If you make too much money, you can bypass this restriction using a strategy known as the <strong>Backdoor Roth IRA</strong>. This involves contributing post-tax money to a Traditional IRA (which has no income limits) and immediately converting it to a Roth IRA. 
                </p>

                <h3>Roth IRA vs. 401(k)</h3>
                <p>
                  If your employer offers a <Link href="/401k-calculator">401(k) match</Link>, you should always contribute enough to get that full match first—it is literally free money. Once you have secured the match, many financial advisors recommend funding a Roth IRA up to the $7,000 limit, before returning to max out the rest of your 401(k). This strategy provides a balance of pre-tax and post-tax retirement funds.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-violet-900 to-fuchsia-950 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <PiggyBank size={16} className="text-violet-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-violet-300">
                      Smart Planning
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Check Your 401(k) Match</h3>
                  <p className="text-sm text-violet-100/80 leading-relaxed mb-6">
                    Before maxing out your Roth IRA, make sure you are getting 100% of your free employer match from your 401(k).
                  </p>
                  <Link href="/401k-calculator" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Go to 401(k) Calculator <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl" />
              </div>

              {/* Share */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6 text-center">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Share This Tool
                </h4>
                <ShareButtons
                  title="Roth IRA Calculator - Tax-Free Growth"
                  url="https://www.freeuscalculator.in/roth-ira-calculator"
                />
              </div>

            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RELATED CALCULATORS GRID (FULL WIDTH)
        ════════════════════════════════════════════════════════════════ */}
        <div className="pt-10">
          <RelatedCalculators currentTool="roth-ira-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Roth IRA Questions
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

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 to-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-violet-400 mb-4">
            100% Free · Accurate Math
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Grow Your Wealth Tax-Free
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-10 leading-relaxed">
            The best time to start investing was yesterday. See what your future balance could be if you max out your Roth IRA today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-violet-900/50">
              <Calculator size={16} />
              Scroll to Calculator
            </a>
            <Link href="/401k-calculator" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-colors">
              Check 401(k) Calculator
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
