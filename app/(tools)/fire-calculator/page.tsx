import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import FireCalculator from "@/components/calculators/FireCalculator";
import {
  Sparkles,
  TrendingUp,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Flame
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "FIRE Calculator 2026 | Financial Independence Retire Early",
  description:
    "The ultimate FIRE calculator. Find out exactly what age you can quit your job based on your savings rate and the 4% rule.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/fire-calculator",
  },
  keywords: [
    "fire calculator",
    "financial independence retire early",
    "when can i retire",
    "early retirement calculator",
    "lean fire calculator",
    "fat fire calculator",
    "coast fire"
  ],
  openGraph: {
    title: "FIRE Calculator 2026 | Financial Independence Retire Early",
    description:
      "Find out exactly what age you can retire. Discover your FIRE number and see how your savings rate accelerates your path to freedom.",
    url: "https://www.freeuscalculator.in/fire-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FIRE Calculator - When Can I Retire?",
    description: "Find out exactly what age you can quit your job based on your savings rate.",
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
  name: "FIRE Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates the age of financial independence based on annual income, expenses, and savings rate.",
  url: "https://www.freeuscalculator.in/fire-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Retirement Calculators", item: "https://www.freeuscalculator.in/retirement-calculators" },
    { "@type": "ListItem", position: 3, name: "FIRE Calculator", item: "https://www.freeuscalculator.in/fire-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "What does FIRE mean?",
    a: "FIRE stands for Financial Independence, Retire Early. It is a movement of people dedicated to extreme savings and investment in order to retire decades earlier than traditional retirement age (often in their 30s or 40s)."
  },
  {
    q: "How does the FIRE Calculator work?",
    a: "The calculator looks at your 'Savings Rate' (the gap between your post-tax income and your annual expenses). It then compounds those annual savings at an expected market return (e.g., 7%) until the total portfolio reaches your FIRE Number (25x your annual expenses)."
  },
  {
    q: "What is Lean FIRE vs. Fat FIRE?",
    a: "Lean FIRE refers to retiring with a minimalist lifestyle, requiring lower annual expenses (e.g., $30k-$40k/yr). Fat FIRE is retiring with a luxurious lifestyle, requiring much higher annual expenses (e.g., $100k+/yr) and therefore a significantly larger portfolio."
  },
  {
    q: "Why is the Savings Rate so important?",
    a: "Your savings rate is the single most important metric in FIRE. A higher savings rate does two things simultaneously: it increases the amount of money you invest, and it lowers the amount of money you need to live on. A 50% savings rate means you only need to work 1 year to pay for 1 year of retirement."
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


export default function FirePage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-orange-200 selection:text-orange-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-orange-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/retirement-calculators" className="hover:text-orange-600 transition-colors">Retirement</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">FIRE Calculator</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Flame size={12} className="text-orange-600" />
              Financial Independence
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              The Ultimate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
                FIRE Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Find out exactly what age you can quit your job. See how your savings rate accelerates your path to freedom.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Sparkles, label: "Savings Rate Math" },
                { icon: ShieldCheck, label: "Trinity Study" },
                { icon: TrendingUp, label: "Compound Growth" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-orange-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="FIRE Calculator"
              description="Calculate your FIRE age based on your savings rate."
              category="Retirement"
              lastUpdated="2026"
            >
              <FireCalculator />
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
            The Mathematics of Early Retirement
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "25x", label: "FIRE Number", sub: "Annual expenses × 25" },
              { val: "50%", label: "Aggressive Savings", sub: "Cuts timeline drastically" },
              { val: "7.0%", label: "Market Return", sub: "Historical S&P 500 average" },
              { val: "Time", label: "Your Best Asset", sub: "Compound interest is magic" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-orange-400 mb-2">{val}</p>
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
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <Flame size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    The Mathematics of FIRE
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">Savings Rate · Lean FIRE · Fat FIRE · 4% Rule</p>
                </div>
              </div>

              <div className="prose prose-slate prose-orange max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-orange-600 hover:prose-a:text-orange-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-orange-500 p-6 rounded-r-2xl">
                  Financial Independence, Retire Early (FIRE) is a movement of people who refuse to wait until age 65 to start living their lives. By saving a massive percentage of their income and investing it in index funds, they are able to buy back their time decades early.
                </p>

                <h3>Why Savings Rate is Everything</h3>
                <p>
                  In traditional finance, advisors tell you to save 10% or 15% of your income. In the FIRE movement, people regularly save 40%, 50%, or even 70% of their <Link href="/salary-after-tax-calculator">after-tax income</Link>.
                </p>
                <p>
                  Why? Because your savings rate has a dual effect on your timeline. If you make $100,000 and save $50,000 (a 50% savings rate), you are simultaneously <strong>adding</strong> $50,000 to your investments, while <strong>proving</strong> that you only need $50,000 a year to live happily. 
                </p>

                <div className="my-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex gap-4">
                  <AlertCircle className="text-emerald-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-emerald-900 font-bold mt-0 mb-2">The Magic of 50%</h4>
                    <p className="text-emerald-800 text-sm m-0 leading-relaxed">
                      At a 50% savings rate, every 1 year you work pays for 1 year of retirement. When you factor in compound interest, it only takes roughly 15 to 17 years to go from $0 to full Financial Independence!
                    </p>
                  </div>
                </div>

                <h3>Lean FIRE vs. Fat FIRE</h3>
                <p>
                  Your FIRE number is completely dependent on your annual expenses. 
                </p>
                <ul>
                  <li><strong>Lean FIRE:</strong> Living on $40,000 or less per year. This requires a much smaller portfolio ($1,000,000 or less) and allows you to retire extremely early.</li>
                  <li><strong>Fat FIRE:</strong> Living on $100,000 or more per year. You'll live in luxury, but you will need to save $2,500,000+ to achieve it.</li>
                </ul>

                <h3>Optimizing Your Path</h3>
                <p>
                  To hit FIRE, you must maximize tax-advantaged accounts to keep more of your own money. The very first step is utilizing our <Link href="/401k-calculator">401(k) match calculator</Link> to ensure you capture 100% of your employer's free money. Second, use a <Link href="/roth-ira-calculator">Roth IRA</Link> to ensure your investments grow completely tax-free.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-orange-900 to-red-950 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={16} className="text-orange-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-orange-300">
                      Optimize FIRE
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Target Number Needed?</h3>
                  <p className="text-sm text-orange-100/80 leading-relaxed mb-6">
                    If you just want to know your exact FIRE number and how much to save per month, try our Retirement Goal calculator.
                  </p>
                  <Link href="/retirement-goal-calculator" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Goal Calculator <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
              </div>

              {/* Share */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6 text-center">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Share This Tool
                </h4>
                <ShareButtons
                  title="FIRE Calculator - When Can I Retire?"
                  url="https://www.freeuscalculator.in/fire-calculator"
                />
              </div>

            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RELATED CALCULATORS GRID (FULL WIDTH)
        ════════════════════════════════════════════════════════════════ */}
        <div className="pt-10">
          <RelatedCalculators currentTool="fire-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-orange-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              FIRE Movement Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-orange-300 transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-orange-500 shrink-0 mt-0.5" />
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
          <p className="text-[10px] font-black uppercase tracking-widest text-orange-400 mb-4">
            100% Free · Accurate Math
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Escape the Rat Race
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-10 leading-relaxed">
            Every dollar you save buys back a piece of your future time. Find out exactly when you'll be free today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-orange-900/50">
              <Calculator size={16} />
              Scroll to Calculator
            </a>
            <Link href="/roth-ira-calculator" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-colors">
              Check Roth IRA
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
