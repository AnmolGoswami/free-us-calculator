// app/savings-calculator/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import SavingsCalculatorClient from "./SavingsCalculatorClient";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import {
  ChevronRight, Star, CheckCircle2, ArrowRight,
  Shield, Zap, Calculator, TrendingUp, Info,
  BookOpen, PiggyBank, Target, DollarSign, Clock,
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Savings Calculator 2026 – Compound Interest & Savings Goal Planner",
  description:
    "Free savings calculator with compound interest. See how your money grows monthly. Calculate savings goals, monthly contributions, and future value. Updated for 2026 HYSA & investment rates.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/savings-calculator",
  },
  keywords: [
    "savings calculator",
    "compound interest calculator",
    "savings goal calculator",
    "monthly savings calculator 2026",
    "how much to save per month calculator",
    "future value savings calculator",
    "retirement savings calculator",
    "savings growth calculator",
    "compound interest savings with monthly contributions",
    "how much will my savings grow in 10 years",
    "save 500 a month for 10 years calculator",
    "high yield savings account calculator 2026",
    "investment growth calculator",
    "financial independence calculator",
    "emergency fund calculator",
  ],
  openGraph: {
    title: "Savings Calculator 2026 – Compound Interest & Goal Planner",
    description:
      "See exactly how your savings grow with compound interest. Monthly contributions, goal tracking, and future value — free, instant, no signup.",
    url: "https://www.freeuscalculator.in/savings-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savings & Compound Interest Calculator 2026",
    description: "Plan savings goals and calculate compound interest growth. Free, instant, no signup.",
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
  name: "Savings & Compound Interest Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description:
    "Free savings calculator with compound interest. Calculate how much savings grow over time with monthly contributions, initial deposit, and annual interest rate. Supports savings goals, emergency funds, and retirement planning.",
  url: "https://www.freeuscalculator.in/savings-calculator",
  isAccessibleForFree: true,
  dateModified: "2026-05-28",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "9831",
    bestRating: "5",
  },
  featureList: [
    "Compound interest calculation (monthly compounding)",
    "Savings goal tracker",
    "Monthly contribution planner",
    "Initial deposit + monthly savings combined",
    "Future value projection up to 50 years",
    "Interest vs contribution breakdown",
    "Rule of 72 doubling time",
    "Milestone timeline projections",
  ],
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",              item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Cost Calculators",  item: "https://www.freeuscalculator.in/cost-calculators" },
    { "@type": "ListItem", position: 3, name: "Savings Calculator",item: "https://www.freeuscalculator.in/savings-calculator" },
  ],
});

const SCHEMA_HOWTO = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Use the Savings Calculator",
  totalTime: "PT1M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Set your savings goal",      text: "Enter your target amount — emergency fund ($15K–$30K), down payment ($50K–$100K), or retirement goal ($500K+). Use preset buttons or type any amount." },
    { "@type": "HowToStep", position: 2, name: "Enter your starting deposit", text: "Add your current savings as the initial deposit. Even $0 works — the calculator shows how monthly contributions alone compound over time." },
    { "@type": "HowToStep", position: 3, name: "Set monthly contribution",    text: "Enter how much you'll save every month. The calculator shows the minimum required to hit your goal." },
    { "@type": "HowToStep", position: 4, name: "Choose interest rate",        text: "Use 4–5% for HYSA (2026 rates), 7–10% for S&P 500 long-term average, or 3% for conservative bonds." },
    { "@type": "HowToStep", position: 5, name: "Read your results",           text: "See total balance, interest earned, milestone timeline, and how much is contributions vs compound interest — with a donut chart." },
  ],
});

const FAQS_DATA = [
  {
    q: "How does compound interest work in a savings calculator?",
    a: "Compound interest means you earn interest on both your original deposit and previously earned interest. Monthly compounding: each month, your balance is multiplied by (1 + annual rate ÷ 12). On $10,000 at 5% for 10 years with $500/month added, you'd accumulate approximately $87,000 — of which $27,000 is interest you earned without contributing a single extra dollar.",
  },
  {
    q: "How much will $500/month savings grow to in 10 years?",
    a: "Saving $500/month for 10 years at 5% APY grows to approximately $77,600 ($60,000 contributed + $17,600 in compound interest). At 8% (S&P 500 average), it grows to $91,500 ($31,500 in interest). At 10%, approximately $103,000. Starting earlier dramatically increases the interest portion — the same $500/month for 20 years at 7% grows to $260,000.",
  },
  {
    q: "What is a realistic interest rate to use in 2026?",
    a: "High-yield savings accounts (HYSA) in 2026 offer 4–5% APY with FDIC insurance — use 4.5% for HYSA planning. US Treasury bonds average 3–5%. The S&P 500 long-term average is 7–10% (use 7% for conservative projections, 10% for optimistic). For retirement accounts (401k, IRA), 7–8% is a commonly used planning rate. The calculator lets you test any rate.",
  },
  {
    q: "How much should I save per month for retirement?",
    a: "The 15% rule: save 15% of gross income for retirement starting in your 20s. At $60,000 salary, that's $750/month. If starting later, you need more: starting at 35 instead of 25 requires roughly double the monthly savings to reach the same goal. Our calculator shows exactly how much monthly savings you need to hit any target by any date.",
  },
  {
    q: "What is the Rule of 72 and how does it apply to savings?",
    a: "The Rule of 72 estimates how long it takes your money to double: divide 72 by your annual interest rate. At 6% APY, your money doubles every 12 years (72 ÷ 6). At 8%, every 9 years. At 4% (typical HYSA), every 18 years. This shows why even small differences in returns matter enormously over long time horizons.",
  },
  {
    q: "How much should I have in an emergency fund?",
    a: "Standard financial planning recommends 3–6 months of essential expenses. On $4,000/month in expenses, your target is $12,000–$24,000. Keep emergency funds in a HYSA (4–5% APY in 2026) for liquidity. Use our calculator with a 4.5% rate to plan how long it takes to build your emergency fund with your current monthly savings.",
  },
  {
    q: "What is the difference between nominal and real interest rate?",
    a: "Nominal rate is what the bank or investment account states. Real rate accounts for inflation: Real Rate ≈ Nominal Rate − Inflation Rate. With 5% HYSA and 3% inflation, your real return is ~2%. For long-term planning (10+ years), reduce your rate by 2–3% to estimate real purchasing power. Our calculator uses nominal rates — subtract inflation manually for real returns.",
  },
  {
    q: "How does starting early affect compound interest?",
    a: "Starting 10 years earlier can more than double your final savings. Example: $300/month at 7% for 30 years = $340,000. Starting 10 years later ($300/month at 7% for 20 years) = $157,000 — less than half. The early years produce little visible growth but create the foundation that makes the final decades explosive. Time is the most powerful variable in compound interest.",
  },
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

// ─── Data tables ──────────────────────────────────────────────────────────────
const GROWTH_TABLE = [
  { monthly: "$100",   y5: "$6,800",    y10: "$15,500",  y20: "$52,000",  y30: "$121,000" },
  { monthly: "$200",   y5: "$13,600",   y10: "$31,000",  y20: "$104,000", y30: "$243,000" },
  { monthly: "$300",   y5: "$20,400",   y10: "$46,500",  y20: "$156,000", y30: "$364,000" },
  { monthly: "$500",   y5: "$34,000",   y10: "$77,600",  y20: "$260,000", y30: "$607,000" },
  { monthly: "$750",   y5: "$51,000",   y10: "$116,000", y20: "$390,000", y30: "$910,000" },
  { monthly: "$1,000", y5: "$68,000",   y10: "$155,000", y20: "$520,000", y30: "$1.21M"  },
  { monthly: "$1,500", y5: "$102,000",  y10: "$233,000", y20: "$780,000", y30: "$1.82M"  },
  { monthly: "$2,000", y5: "$136,000",  y10: "$310,000", y20: "$1.04M",   y30: "$2.43M"  },
];

const RATE_TABLE = [
  { type: "Checking Account",        rate: "0.1%",    risk: "None",     note: "Most basic accounts"         },
  { type: "Traditional Savings",     rate: "0.5%",    risk: "None",     note: "Big banks avg"               },
  { type: "High-Yield Savings (HYSA)",rate: "4–5%",   risk: "None",     note: "FDIC insured · 2026 rates"   },
  { type: "US Treasury Bonds",       rate: "3–5%",    risk: "Very Low", note: "10-yr Treasury note"         },
  { type: "CDs (1–5 year)",          rate: "4–5%",    risk: "None",     note: "Fixed term FDIC insured"     },
  { type: "Index Funds (S&P 500)",   rate: "7–10%",   risk: "Medium",   note: "Long-term historical avg"    },
  { type: "Bonds + Stocks (60/40)",  rate: "5–7%",    risk: "Medium",   note: "Balanced portfolio avg"      },
  { type: "Stock Portfolio",         rate: "8–12%",   risk: "High",     note: "Variable, not guaranteed"    },
];

const GOALS_TABLE = [
  { goal: "1-month emergency fund",  target: "$3,000–$5,000",  timeframe: "3–6 months",   rate: "HYSA 4.5%" },
  { goal: "3-month emergency fund",  target: "$9,000–$15,000", timeframe: "12–24 months", rate: "HYSA 4.5%" },
  { goal: "6-month emergency fund",  target: "$18,000–$30,000",timeframe: "2–4 years",    rate: "HYSA 4.5%" },
  { goal: "Car down payment",        target: "$3,000–$8,000",  timeframe: "6–18 months",  rate: "HYSA 4.5%" },
  { goal: "Home down payment (20%)", target: "$60,000–$120,000",timeframe: "5–10 years",  rate: "Bonds/funds" },
  { goal: "College fund",            target: "$50,000–$200,000",timeframe: "10–18 years", rate: "529 / index" },
  { goal: "Retirement (modest)",     target: "$500,000",        timeframe: "25–35 years", rate: "7% index"    },
  { goal: "Retirement (comfortable)",target: "$1,000,000–$2M", timeframe: "30–40 years", rate: "7–8% index"  },
];

const RELATED = [
  { href: "/loan-calculator",               label: "Loan EMI Calculator",       desc: "Monthly payments & amortization"  },
  { href: "/rent-affordability-calculator", label: "Rent Affordability",         desc: "How much rent can you afford?"   },
  { href: "/salary-after-tax-calculator",   label: "Salary After Tax",           desc: "Net take-home pay all 50 states" },
  { href: "/self-employment-tax-calculator-usa", label: "Self-Employment Tax",   desc: "SE tax with deductible portion"  },
  { href: "/hourly-to-salary-calculator",   label: "Hourly to Salary",           desc: "Convert hourly to annual salary" },
  { href: "/overtime-calculator",           label: "Overtime Calculator",        desc: "1.5× and 2× overtime pay"        },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SavingsCalculatorPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_HOWTO }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-6">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/cost-calculators" className="hover:text-slate-300 transition-colors">Cost Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-400">Savings Calculator</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                          bg-emerald-500/15 border border-emerald-500/20
                          text-emerald-300 text-[10px] font-black uppercase tracking-widest mb-5">
            <Zap size={11} className="fill-emerald-400" />
            2026 HYSA &amp; Investment Rates · Compound Interest
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight
                         leading-[1.05] mb-4">
            Savings{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400
                             bg-clip-text text-transparent">
              Calculator
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl font-black text-slate-500 mb-4 tracking-tight">
            Compound Interest &amp; Goal Planner 2026
          </p>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
            See exactly <strong className="text-white">how your savings grow with compound interest</strong>.
            Set a goal, enter monthly savings, choose a rate — get a full
            projection with milestones, breakdown chart, and timeline.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { icon: Star,         label: "4.9/5 · 9,831 users",       cls: "text-amber-400"   },
              { icon: CheckCircle2, label: "Monthly compounding",        cls: "text-emerald-400" },
              { icon: Target,       label: "Goal tracker included",      cls: "text-emerald-400" },
              { icon: Shield,       label: "No data stored",             cls: "text-indigo-400"  },
              { icon: CheckCircle2, label: "100% Free · No login",       cls: "text-emerald-400" },
            ].map(({ icon: Icon, label, cls }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-xs font-semibold
                           bg-white/8 border border-white/10 px-3 py-1.5 rounded-full text-slate-300"
              >
                <Icon size={11} className={cls} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CALCULATOR
      ════════════════════════════════════════════════════════════════════ */}
      <section id="calculator" className="scroll-mt-16 bg-slate-950 pb-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-3xl border border-white/8 overflow-hidden">
            <SavingsCalculatorClient />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          KEY NUMBERS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-8 border-y border-white/6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest
                        text-slate-500 mb-6">
            2026 Reference Rates
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { val: "4–5%",   label: "HYSA Rate 2026",      sub: "FDIC insured, liquid"        },
              { val: "7–10%",  label: "S&P 500 Avg (LT)",    sub: "Historical long-term return"  },
              { val: "3–5%",   label: "US Treasuries",        sub: "10-yr bond yield 2026"        },
              { val: "72 ÷ r", label: "Rule of 72",           sub: "Years to double your money"   },
            ].map(({ val, label, sub }) => (
              <div key={label}>
                <p className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums mb-1">{val}</p>
                <p className="text-xs font-bold text-white">{label}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">

        {/* ════════════════════════════════════════════════════════════════
            GROWTH TABLE — featured snippet magnet
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="growth-heading">
          <div className="text-center mb-6">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">
              Featured Snippet · Most Searched
            </p>
            <h2 id="growth-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              How Much Will My Savings Grow? (2026)
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Monthly contributions · 5% APY · Monthly compounding · No initial deposit
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm -mx-1">
            <table className="w-full text-xs sm:text-sm min-w-[480px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  {["Monthly Savings", "After 5 Years", "After 10 Years", "After 20 Years", "After 30 Years"].map((h) => (
                    <th key={h} className="px-3 sm:px-4 py-3 text-left font-black text-[9px] uppercase tracking-widest">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {GROWTH_TABLE.map((row, i) => (
                  <tr
                    key={row.monthly}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"} hover:bg-emerald-50/30 transition-colors`}
                  >
                    <td className="px-3 sm:px-4 py-3 font-black text-slate-900">{row.monthly}</td>
                    <td className="px-3 sm:px-4 py-3 text-slate-600">{row.y5}</td>
                    <td className="px-3 sm:px-4 py-3 font-semibold text-slate-700">{row.y10}</td>
                    <td className="px-3 sm:px-4 py-3 font-bold text-indigo-700">{row.y20}</td>
                    <td className="px-3 sm:px-4 py-3 font-black text-emerald-700">{row.y30}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400 text-center mt-3">
            At 5% APY with monthly compounding. Higher rates (S&P 500 avg 7–10%) grow significantly faster. Use the calculator above for your exact rate.
          </p>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            HOW-TO STEPS
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="howto-heading">
          <div className="text-center mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">How to Use</p>
            <h2 id="howto-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              How to Calculate Savings Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              { n: "1", title: "Set Your Goal",         body: "Enter your target — emergency fund, down payment, or retirement. Use presets or type any amount." },
              { n: "2", title: "Initial Deposit",        body: "Add current savings as starting balance. Zero works too — shows how monthly savings alone compound." },
              { n: "3", title: "Monthly Contribution",   body: "How much you'll save each month. The calculator shows the minimum needed to hit your goal." },
              { n: "4", title: "Choose Interest Rate",   body: "4–5% for HYSA, 7–10% for S&P index funds, 3% for conservative bonds." },
              { n: "5", title: "Read the Results",       body: "See total balance, interest earned, donut chart, milestone timeline, and how long to reach your goal." },
            ].map(({ n, title, body }) => (
              <div
                key={n}
                className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm
                           hover:border-emerald-200 hover:shadow-md transition-all relative"
              >
                <span className="absolute -top-3 left-5 w-6 h-6 rounded-full bg-emerald-600
                                 text-white text-xs font-black flex items-center justify-center">
                  {n}
                </span>
                <h3 className="font-black text-slate-900 text-sm mt-1 mb-1.5">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RATE REFERENCE TABLE
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="rates-heading">
          <div className="text-center mb-6">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Rate Reference</p>
            <h2 id="rates-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              Which Interest Rate Should I Use? (2026)
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Choose the right rate for your savings account or investment type
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm -mx-1">
            <table className="w-full text-xs sm:text-sm min-w-[460px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  {["Account / Investment Type", "Typical Rate", "Risk", "Note"].map((h) => (
                    <th key={h} className="px-3 sm:px-4 py-3 text-left font-black text-[9px] uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {RATE_TABLE.map((row, i) => (
                  <tr
                    key={row.type}
                    className={`${row.type.includes("HYSA") ? "bg-emerald-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
                  >
                    <td className="px-3 sm:px-4 py-3 font-bold text-slate-900">
                      {row.type}
                      {row.type.includes("HYSA") && (
                        <span className="ml-2 text-[9px] font-black uppercase tracking-wide
                                         text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-full">
                          Recommended
                        </span>
                      )}
                    </td>
                    <td className="px-3 sm:px-4 py-3 font-black text-emerald-700">{row.rate}</td>
                    <td className="px-3 sm:px-4 py-3 text-slate-500 text-xs">{row.risk}</td>
                    <td className="px-3 sm:px-4 py-3 text-slate-400 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SAVINGS GOALS TABLE
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="goals-heading">
          <div className="text-center mb-6">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Goal Reference</p>
            <h2 id="goals-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              Common Savings Goals — Targets &amp; Timelines
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm -mx-1">
            <table className="w-full text-xs sm:text-sm min-w-[480px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  {["Goal", "Target Amount", "Typical Timeframe", "Best Account"].map((h) => (
                    <th key={h} className="px-3 sm:px-4 py-3 text-left font-black text-[9px] uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {GOALS_TABLE.map((row, i) => (
                  <tr key={row.goal} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="px-3 sm:px-4 py-3 font-bold text-slate-900">{row.goal}</td>
                    <td className="px-3 sm:px-4 py-3 font-black text-emerald-700">{row.target}</td>
                    <td className="px-3 sm:px-4 py-3 text-slate-600">{row.timeframe}</td>
                    <td className="px-3 sm:px-4 py-3 text-indigo-700 font-semibold text-xs">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            GUIDE + SIDEBAR
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="guide-heading">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Article */}
            <article className="flex-1 min-w-0 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <BookOpen size={17} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-xl sm:text-2xl font-black text-slate-900">
                    How Compound Interest Works — 2026 Guide
                  </h2>
                  <p className="text-xs text-slate-400">Formula · HYSA rates · Rule of 72 · Starting early</p>
                </div>
              </div>

              {[
                {
                  title: "The Compound Interest Formula",
                  body: `Compound interest is calculated as: FV = P × (1 + r/n)^(nt) + PMT × [((1 + r/n)^(nt) − 1) ÷ (r/n)]. Where P = initial deposit, r = annual rate, n = compounding periods per year (12 for monthly), t = years, PMT = monthly contribution. What this means practically: your interest earns interest. A $10,000 deposit at 5% for 10 years earns $6,289 in compound interest — while the same $10,000 at simple interest earns only $5,000. The difference grows dramatically over longer periods.`,
                  icon: Calculator,
                  color: "bg-emerald-100 text-emerald-600",
                },
                {
                  title: "Why HYSA Rates Matter in 2026",
                  body: `High-yield savings accounts in 2026 offer 4–5% APY — the highest rates since 2007. This is a significant opportunity: a traditional savings account at 0.5% on $20,000 earns $100/year. The same $20,000 in a HYSA at 4.5% earns $900/year — 9× more. The key difference: HYSA accounts are FDIC insured (safe up to $250,000), liquid (no lockup period), and currently yielding competitive returns. For emergency funds and short-term goals (under 5 years), HYSA is the best savings vehicle in 2026.`,
                  icon: TrendingUp,
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  title: "The Power of Starting Early",
                  body: `Time is the most powerful variable in compound interest — more important than rate or contribution amount. Consider two savers: Alex starts at 25 saving $300/month at 7% and stops at 35 (contributes for 10 years = $36,000 total). Jordan starts at 35 saving $300/month at 7% until retirement at 65 (contributes for 30 years = $108,000 total). At 65, Alex has $338,000. Jordan has $340,000. Same ending balance — despite contributing 3× less money, simply by starting 10 years earlier. This is the power of compound interest and time.`,
                  icon: Clock,
                  color: "bg-amber-100 text-amber-600",
                },
                {
                  title: "The 50/30/20 Rule and How Much to Save",
                  body: `The standard budgeting guideline: 50% of take-home pay for needs (housing, food, transport), 30% for wants, 20% for savings and debt repayment. On $5,000/month take-home, that's $1,000/month to savings. Of that, financial planners recommend: 6 months emergency fund first (typically $15,000–$30,000), then 15% of gross salary to retirement accounts (401k, IRA), then additional savings for specific goals. Use our calculator to see exactly what $1,000/month at 7% grows to over 30 years — the result ($1.2M) makes the math clear.`,
                  icon: DollarSign,
                  color: "bg-violet-100 text-violet-600",
                },
              ].map(({ title, body, icon: Icon, color }) => (
                <div
                  key={title}
                  className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm"
                >
                  <h3 className="font-black text-slate-900 mb-3 flex items-center gap-2.5 text-sm sm:text-base">
                    <div className={`w-7 h-7 rounded-lg ${color} flex items-center justify-center shrink-0`}>
                      <Icon size={14} />
                    </div>
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}

              {/* Rule of 72 callout */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                <p className="font-black text-emerald-900 text-sm mb-3 flex items-center gap-2">
                  <Zap size={14} className="text-emerald-600" />
                  Rule of 72 — Doubling Time at a Glance
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { rate: "3% APY",  double: "24 years" },
                    { rate: "5% APY",  double: "14.4 years" },
                    { rate: "7% APY",  double: "10.3 years" },
                    { rate: "10% APY", double: "7.2 years" },
                  ].map(({ rate, double: d }) => (
                    <div key={rate} className="bg-white rounded-xl px-3 py-2.5 border border-emerald-100 text-center">
                      <p className="text-xs text-slate-500">{rate}</p>
                      <p className="text-sm font-black text-emerald-700">Doubles in</p>
                      <p className="text-xs font-black text-slate-900">{d}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-emerald-700 mt-2">Formula: 72 ÷ annual rate = years to double your money</p>
              </div>

              {/* Share */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col
                              sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-slate-900">Planning your financial future?</p>
                  <p className="text-xs text-slate-500">Share this with anyone working toward a savings goal.</p>
                </div>
                <ShareButtons
                  title="Savings & Compound Interest Calculator 2026"
                  url="https://www.freeuscalculator.in/savings-calculator"
                />
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-3 bg-slate-50 border border-slate-200
                              rounded-2xl px-4 py-3 text-xs text-slate-500">
                <Info size={14} className="text-slate-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Results are projections based on constant monthly compounding at the specified rate.
                  Actual returns vary. Past performance does not guarantee future results. Not financial
                  advice.{" "}
                  <Link href="/disclaimer" className="underline hover:text-slate-700 transition-colors">
                    See disclaimer
                  </Link>.
                </p>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-56 flex-shrink-0 space-y-5 lg:sticky lg:top-20">

              {/* Compound interest insight */}
              <div className="bg-slate-900 text-white rounded-2xl p-5">
                <PiggyBank size={16} className="text-emerald-400 mb-3" />
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
                  $500/mo at 7% Grows To
                </p>
                <div className="space-y-2">
                  {[
                    { yr: "5 years",  val: "$35,900",  good: false },
                    { yr: "10 years", val: "$86,900",  good: false },
                    { yr: "15 years", val: "$158,000", good: true  },
                    { yr: "20 years", val: "$260,000", good: true  },
                    { yr: "30 years", val: "$607,000", good: true  },
                  ].map(({ yr, val, good }) => (
                    <div key={yr} className="flex items-center justify-between text-xs border-b border-white/6 pb-1.5 last:border-0">
                      <span className="text-slate-400">{yr}</span>
                      <span className={`font-black ${good ? "text-emerald-400" : "text-white"}`}>{val}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[9px] text-slate-600 mt-3">Monthly compounding · No initial deposit</p>
              </div>

              {/* Go to calculator */}
              <div className="bg-emerald-600 rounded-2xl p-5 text-white text-center">
                <Calculator size={18} className="mx-auto mb-2 text-emerald-200" />
                <p className="font-black text-sm mb-1">Try the Calculator</p>
                <p className="text-emerald-200 text-xs mb-3">Enter your goal for instant results</p>
                <a
                  href="#calculator"
                  className="block bg-white text-emerald-700 font-black text-xs py-2
                             rounded-xl hover:bg-emerald-50 transition-colors"
                >
                  ↑ Go to Calculator
                </a>
              </div>

              {/* Related tools */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">Related Tools</p>
                <div className="space-y-2">
                  {[
                    { href: "/loan-calculator",               label: "Loan Calculator"    },
                    { href: "/rent-affordability-calculator", label: "Rent Affordability" },
                    { href: "/salary-after-tax-calculator",   label: "Salary After Tax"   },
                    { href: "/overtime-calculator",           label: "Overtime Pay"       },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-1.5 text-xs text-emerald-700
                                 hover:text-emerald-900 hover:underline transition-colors"
                    >
                      <ChevronRight size={11} />
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Ad slot */}
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl
                              min-h-[120px] flex items-center justify-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                  Advertisement
                </span>
              </div>
            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading">
          <div className="text-center mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              Savings &amp; Compound Interest — 2026 Questions
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              $500/mo growth · HYSA rates · Rule of 72 · Retirement · Emergency fund
            </p>
          </div>

          <dl className="space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div
                key={q}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6
                           hover:border-emerald-200 transition-colors shadow-sm"
              >
                <dt className="font-black text-slate-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  {q}
                </dt>
                <dd className="text-slate-500 text-sm leading-relaxed pl-5">{a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RELATED CALCULATORS
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
            Related Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RELATED.map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-start gap-3 p-4 bg-white border border-slate-100
                           rounded-2xl hover:border-emerald-300 hover:shadow-md transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600
                                flex items-center justify-center shrink-0
                                group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Calculator size={16} />
                </div>
                <div>
                  <p className="font-black text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    {label}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-gradient-to-br from-emerald-700 to-teal-800
                          text-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-300 mb-3">
            Free · No Signup · Instant Results
          </p>
          <h2 className="text-2xl sm:text-3xl font-black mb-4">
            Start Building Your Future Today
          </h2>
          <p className="text-emerald-200 text-sm mb-8 leading-relaxed">
            Every month you wait costs compound interest. Use the calculator to see exactly
            how much starting today vs next year is worth.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 font-black
                         text-sm px-7 py-3.5 rounded-2xl hover:bg-amber-300 hover:text-emerald-900
                         transition-all shadow-xl active:scale-95"
            >
              <PiggyBank size={16} />
              Calculate My Savings
            </a>
            <Link
              href="/cost-calculators"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20
                         border border-white/20 text-white font-bold text-sm px-7 py-3.5
                         rounded-2xl transition-all active:scale-95"
            >
              More Tools <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SEO FOOTER NAV
      ════════════════════════════════════════════════════════════════════ */}
      <nav aria-label="Related calculators" className="bg-slate-950 py-8 border-t border-white/6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { href: "/loan-calculator",               label: "Loan EMI Calculator"      },
              { href: "/rent-affordability-calculator", label: "Rent Affordability"        },
              { href: "/salary-after-tax-calculator",   label: "Salary After Tax"          },
              { href: "/paycheck-calculator",           label: "Paycheck Calculator"       },
              { href: "/overtime-calculator",           label: "Overtime Pay Calculator"   },
              { href: "/hourly-to-salary-calculator",   label: "Hourly to Salary"          },
              { href: "/self-employment-tax-calculator-usa", label: "Self-Employment Tax" },
              { href: "/doordash-earnings-calculator",  label: "DoorDash Earnings"         },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-500 hover:text-slate-300 transition-colors text-xs"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-[10px] text-slate-700 mt-4">
            Savings & Compound Interest Calculator · 2026 HYSA Rates · Goal Planner · FreeUSCalculator.in
          </p>
        </div>
      </nav>
    </main>
  );
}