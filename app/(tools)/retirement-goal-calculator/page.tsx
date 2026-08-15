import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import RetirementGoalCalculator from "@/components/calculators/RetirementGoalCalculator";
import {
  Sparkles,
  TrendingUp,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Compass
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "How Much Do I Need to Retire? Calculator | FIRE 2026",
  description:
    "Calculate exactly how much money you need to retire based on the 4% rule. Find your FIRE number and see how much you need to save per month.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/retirement-goal-calculator",
  },
  keywords: [
    "how much do i need to retire",
    "retirement number calculator",
    "fire calculator",
    "4% rule calculator",
    "retirement goal calculator",
    "early retirement calculator"
  ],
  openGraph: {
    title: "How Much Do I Need to Retire? Calculator | FIRE 2026",
    description:
      "Find your exact FIRE (Financial Independence, Retire Early) number based on your desired lifestyle, inflation, and safe withdrawal rates.",
    url: "https://www.freeuscalculator.in/retirement-goal-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retirement Goal Calculator - Find Your FIRE Number",
    description: "Calculate exactly how much money you need to retire.",
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
  name: "Retirement Goal Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates the exact amount of money needed to retire based on desired income, inflation, and the 4% safe withdrawal rule.",
  url: "https://www.freeuscalculator.in/retirement-goal-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Retirement Calculators", item: "https://www.freeuscalculator.in/retirement-calculators" },
    { "@type": "ListItem", position: 3, name: "Retirement Goal Calculator", item: "https://www.freeuscalculator.in/retirement-goal-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "What is the 4% Rule for retirement?",
    a: "The 4% rule is a widely accepted rule of thumb for retirement planning. It states that you can safely withdraw 4% of your total retirement portfolio in your first year of retirement, and adjust that amount for inflation each subsequent year, without running out of money for at least 30 years."
  },
  {
    q: "How do you calculate your FIRE number?",
    a: "To find your FIRE (Financial Independence, Retire Early) number using the 4% rule, you simply multiply your expected annual retirement expenses by 25. For example, if you need $60,000 a year to live comfortably, your FIRE number is $1,500,000 ($60,000 × 25)."
  },
  {
    q: "Does inflation affect my retirement goal?",
    a: "Yes, significantly. If you need $60,000 today to live comfortably, and inflation averages 2.5%, in 20 years you will actually need nearly $98,000 a year to maintain the exact same purchasing power. Our calculator automatically factors this in for you."
  },
  {
    q: "What happens if I use a 3% Safe Withdrawal Rate instead?",
    a: "A 3% safe withdrawal rate is considered much more conservative and safer for very early retirees (who may be retired for 40-50 years). However, it requires you to save significantly more money. To withdraw $60,000 at 3%, you would need a portfolio of $2,000,000 instead of $1,500,000."
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


export default function RetirementGoalPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-fuchsia-200 selection:text-fuchsia-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-fuchsia-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-fuchsia-600 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/retirement-calculators" className="hover:text-fuchsia-600 transition-colors">Retirement</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Goal Calculator</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-100 text-fuchsia-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Compass size={12} className="text-fuchsia-600" />
              Find Your FIRE Number
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              How Much Do I Need to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-rose-500">
                Retire?
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Calculate the exact size of the portfolio you need to quit working forever. Powered by the 4% Rule and inflation-adjusted math.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Sparkles, label: "The 4% Rule" },
                { icon: ShieldCheck, label: "Inflation Adjusted" },
                { icon: TrendingUp, label: "Monthly Savings Plan" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-fuchsia-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="Retirement Goal Calculator"
              description="Calculate your FIRE number and required monthly savings."
              category="Retirement"
              lastUpdated="2026"
            >
              <RetirementGoalCalculator />
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
            The Rules of Financial Independence
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "25x", label: "Annual Expenses", sub: "The standard FIRE formula" },
              { val: "4.0%", label: "Safe Withdrawal", sub: "The Trinity Study baseline" },
              { val: "2.5%", label: "Average Inflation", sub: "Erodes your purchasing power" },
              { val: "30 yrs", label: "Standard Timeline", sub: "How long the 4% rule lasts" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-fuchsia-400 mb-2">{val}</p>
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
                <div className="w-12 h-12 rounded-2xl bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center shrink-0">
                  <Compass size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Finding Your Retirement Number
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">The 4% Rule · Trinity Study · Safe Withdrawal Rates</p>
                </div>
              </div>

              <div className="prose prose-slate prose-fuchsia max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-fuchsia-600 hover:prose-a:text-fuchsia-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-fuchsia-500 p-6 rounded-r-2xl">
                  The scariest question in personal finance is: "Do I have enough money to stop working?" Thanks to the FIRE (Financial Independence, Retire Early) movement and the Trinity Study, we now have a mathematical framework to answer that exact question.
                </p>

                <h3>How to Use the Retirement Goal Calculator</h3>
                <figure className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center min-h-[200px]">
                  <img 
                    src="/retirement-goal-calculator-screenshot.jpg" 
                    alt="Retirement Goal Calculator Interface" 
                    className="w-full h-auto object-cover"
                  />
                </figure>
                <p>
                  Simply enter your <strong>Desired Annual Income</strong> in retirement, how many <strong>Years Until Retirement</strong> you have left, and adjust the <strong>Inflation Rate</strong> and <strong>Safe Withdrawal Rate</strong> to match your risk tolerance. The calculator will instantly reveal your exact FIRE Number (the size of the nest egg you need) and the monthly savings required to get there!
                </p>

                <h3>What is the 4% Rule?</h3>
                <p>
                  In the 1990s, three professors at Trinity University looked at historical stock and bond market returns. They wanted to know: how much money can a retiree withdraw from their portfolio every year, adjusting for inflation, without ever running out of money over a 30-year period?
                </p>
                <p>
                  The answer was <strong>4%</strong>. If you withdraw 4% of your starting portfolio balance in year one, and then simply adjust that dollar amount for inflation every year after, historical data says you have a near 100% chance of your money surviving a 30-year retirement.
                </p>

                <div className="my-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
                  <AlertCircle className="text-amber-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-amber-900 font-bold mt-0 mb-2">The Impact of Inflation</h4>
                    <p className="text-amber-800 text-sm m-0 leading-relaxed">
                      Do not underestimate inflation. If you want a lifestyle that costs $60,000 a year today, you cannot plan to retire on $60,000 in 20 years. Assuming a 2.5% inflation rate, that same lifestyle will cost nearly $98,000 a year by the time you retire. Our calculator automatically handles this complex inflation math for you.
                    </p>
                  </div>
                </div>

                <h3>How to Calculate Your "FIRE Number"</h3>
                <p>
                  Because of the 4% rule, finding your baseline target number is incredibly easy. You simply take your expected annual expenses and multiply them by 25. 
                </p>
                <ul>
                  <li>Need $40,000 a year? You need $1,000,000.</li>
                  <li>Need $60,000 a year? You need $1,500,000.</li>
                  <li>Need $100,000 a year? You need $2,500,000.</li>
                </ul>

                <h3>What if I want to retire *very* early?</h3>
                <p>
                  The Trinity Study only looked at 30-year retirements (e.g., retiring at 65 and living to 95). If you want to retire at age 40, your money needs to last 50+ years. In this case, many experts recommend lowering your <strong>Safe Withdrawal Rate (SWR)</strong> to 3.5% or even 3.0%. 
                </p>
                <p>
                  You can adjust the Safe Withdrawal Rate in the advanced settings of our calculator. Notice that lowering it to 3% drastically increases the amount of money you need to save.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-fuchsia-900 to-rose-950 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={16} className="text-fuchsia-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-fuchsia-300">
                      Reach Your Goal
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Max Out Tax-Free Accounts</h3>
                  <p className="text-sm text-fuchsia-100/80 leading-relaxed mb-6">
                    The fastest way to reach your FIRE number is to utilize tax-advantaged accounts like a Roth IRA.
                  </p>
                  <Link href="/roth-ira-calculator" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Roth IRA Calculator <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-2xl" />
              </div>

              {/* Share */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6 text-center">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Share This Tool
                </h4>
                <ShareButtons
                  title="How Much Do I Need to Retire? Calculator"
                  url="https://www.freeuscalculator.in/retirement-goal-calculator"
                />
              </div>

            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RELATED CALCULATORS GRID (FULL WIDTH)
        ════════════════════════════════════════════════════════════════ */}
        <div className="pt-10">
          <RelatedCalculators currentTool="retirement-goal-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-fuchsia-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Retirement Planning Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-fuchsia-300 transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-fuchsia-500 shrink-0 mt-0.5" />
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
          <p className="text-[10px] font-black uppercase tracking-widest text-fuchsia-400 mb-4">
            100% Free · Accurate Math
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Build Your Financial Freedom
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-10 leading-relaxed">
            Stop guessing about your future. Find out exactly how much you need to save per month to reach your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-fuchsia-900/50">
              <Calculator size={16} />
              Scroll to Calculator
            </a>
            <Link href="/401k-calculator" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-colors">
              Check 401(k) Match
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
