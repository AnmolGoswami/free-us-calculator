// app/blog/savings-calculator-guide-2026/page.tsx
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Calculator, Calendar, Clock, CheckCircle2,
  ChevronRight, AlertTriangle, TrendingUp, Target,
  Wallet, ShieldCheck, Zap, DollarSign, BarChart2,
  AlertCircle, Globe, Star,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
//
// Tool page = transactional: "savings calculator", "compound interest calculator"
//
// Blog page = informational (different SERP positions):
//   "how much should I save per month"
//   "how does compound interest work savings"
//   "how much will my savings grow in 10 years"
//   "save $500 a month how much in 10 years"
//   "how to reach savings goal faster"
//   "best interest rate for savings account 2026"
//   "what is a realistic savings goal"
//   "FIRE calculator how much to save"
//   "emergency fund how much 2026"
//   "compound interest vs simple interest savings"
//
// Two URLs cover both intent clusters = two SERP positions for same keywords.
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Savings Calculator Guide 2026 – Compound Interest, Monthly Goals & Retirement Planning",
  description:
    "How much should you save per month? Complete 2026 guide: compound interest explained with real examples, $500/$1,000/month savings tables over 5–30 years, emergency fund targets, retirement milestones, and FIRE number calculator. Real numbers, no fluff.",
  alternates: {
    canonical:
      "https://www.freeuscalculator.in/blog/savings-calculator-guide-2026",
  },
  keywords: [
    "how much should I save per month 2026",
    "compound interest savings calculator guide",
    "save 500 a month how much in 10 years",
    "how to reach savings goal faster",
    "compound interest vs simple interest explained",
    "emergency fund how much 2026",
    "FIRE number calculator how much to save",
    "best interest rate savings account 2026",
    "retirement savings by age 2026",
    "how much will my savings grow in 10 years",
    "savings goal calculator guide",
    "monthly savings plan 2026",
    "compound interest formula explained simply",
    "how to calculate future value of savings",
    "wealth building through compound interest",
  ],
  openGraph: {
    title:
      "Savings Calculator Guide 2026 – Compound Interest, Monthly Goals & Retirement",
    description:
      "Compound interest explained with real savings tables, emergency fund targets, FIRE number guide, retirement milestones by age, and the strategies that actually build wealth in 2026.",
    url: "https://www.freeuscalculator.in/blog/savings-calculator-guide-2026",
    type: "article",
    publishedTime: "2026-04-01T00:00:00Z",
    modifiedTime: "2026-05-01T00:00:00Z",
    authors: ["FreeUSCalculator"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD — Article + FAQPage
// Tool page uses WebApplication schema — different type across URLs = stronger
// topical authority signal to Google.
// ─────────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",
          item: "https://www.freeuscalculator.in" },
        { "@type": "ListItem", position: 2, name: "Blog",
          item: "https://www.freeuscalculator.in/blog" },
        { "@type": "ListItem", position: 3,
          name: "Savings Calculator Guide 2026",
          item: "https://www.freeuscalculator.in/blog/savings-calculator-guide-2026" },
      ],
    },
    {
      "@type": "Article",
      headline:
        "Savings Calculator Guide 2026 – Compound Interest, Monthly Goals & Retirement Planning",
      description:
        "Complete guide to savings planning in 2026: compound interest explained, $500/$1,000/month growth tables, emergency fund targets, retirement milestones, FIRE number calculator, and the strategies that actually build wealth.",
      url: "https://www.freeuscalculator.in/blog/savings-calculator-guide-2026",
      datePublished: "2026-04-01",
      dateModified: "2026-05-01",
      author: {
        "@type": "Organization",
        name: "FreeUSCalculator",
        url: "https://www.freeuscalculator.in",
      },
      publisher: {
        "@type": "Organization",
        name: "FreeUSCalculator",
        url: "https://www.freeuscalculator.in",
      },
      relatedLink: "https://www.freeuscalculator.in/savings-calculator",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much should I save per month in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The standard financial planning guideline is to save 20% of your net take-home pay (the 50/30/20 rule). On a $4,000/month take-home, that's $800/month. However, the right amount depends on your specific goals. For an emergency fund: save enough to cover 3–6 months of expenses (typically $9,000–$30,000). For retirement: aim to save 15% of gross income. For a specific goal: use the formula Monthly Saving = (Goal Amount − Initial Savings × (1+r)^n) ÷ ((1+r)^n − 1) × r, where r is monthly interest rate and n is months.",
          },
        },
        {
          "@type": "Question",
          name: "How much will $500/month savings grow to in 10 years?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Saving $500/month for 10 years at a 5% annual return grows to approximately $77,641. At 7% annual return, it grows to $86,731. At 10% return, it reaches $102,422. Without any interest (simple savings account earning near 0%), you'd have $60,000 — meaning compound interest adds $17,641–$42,422 in free money depending on your rate.",
          },
        },
        {
          "@type": "Question",
          name: "What is compound interest and why does it matter for savings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Compound interest means you earn interest on both your original principal AND on the interest you've already earned. The formula is A = P × (1 + r/n)^(n×t), where P = principal, r = annual rate, n = compounding periods per year, t = years. Example: $10,000 at 7% annually for 20 years grows to $38,697 through compound interest — nearly 4× your original investment with no additional contributions. With $500/month contributions added, the same scenario reaches $252,000.",
          },
        },
        {
          "@type": "Question",
          name: "How much should I have saved by age in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common retirement savings benchmarks by age (based on your annual salary): By 30: 1× your salary. By 35: 2× your salary. By 40: 3× your salary. By 45: 4× your salary. By 50: 6× your salary. By 55: 7× your salary. By 60: 8× your salary. By 67: 10× your salary. For a $60,000 salary, this means having $60,000 saved by 30, $180,000 by 40, and $600,000 by 67.",
          },
        },
        {
          "@type": "Question",
          name: "How do I calculate my FIRE number (financial independence number)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your FIRE (Financial Independence, Retire Early) number is calculated using the 4% rule: FIRE Number = Annual Expenses × 25. If you spend $40,000/year, your FIRE number is $1,000,000. If you spend $60,000/year, it's $1,500,000. This assumes a 4% safe withdrawal rate from a diversified portfolio. To reach your FIRE number faster, the most powerful levers are: increase savings rate, invest in higher-returning assets (index funds), and reduce annual expenses.",
          },
        },
        {
          "@type": "Question",
          name: "What is a realistic interest rate to use for savings calculations in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In 2026: High-yield savings accounts offer 4.0%–5.2% APY. Money market accounts offer 4.0%–5.0%. CDs (1-year) offer 4.5%–5.1%. Bond funds: 3.5%–5.5% depending on duration. US stock market (S&P 500) historical average: 7% real return (10% nominal before inflation). Diversified 60/40 portfolio: 5%–7% historical average. For long-term goals (10+ years), using 6%–7% is common for mixed stock/bond portfolios. For short-term goals under 3 years, use your actual HYSA or CD rate.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA TABLES
// ─────────────────────────────────────────────────────────────────────────────

// $500/month savings growth table
const FIVE_HUNDRED_TABLE = [
  ["1 year",  "$6,000",  "$6,171",   "$6,228",   "$6,305"],
  ["2 years", "$12,000", "$12,698",  "$12,952",  "$13,382"],
  ["3 years", "$18,000", "$19,568",  "$20,147",  "$21,171"],
  ["5 years", "$30,000", "$34,070",  "$35,519",  "$38,082"],
  ["10 years","$60,000", "$77,641",  "$86,731",  "$102,422"],
  ["15 years","$90,000", "$132,385", "$155,797", "$205,511"],
  ["20 years","$120,000","$205,516", "$260,465", "$379,684"],
  ["25 years","$150,000","$303,168", "$411,267", "$662,976"],
  ["30 years","$180,000","$416,129", "$615,461", "$1,130,244"],
];

// $1,000/month savings growth table
const ONE_K_TABLE = [
  ["1 year",  "$12,000", "$12,341",  "$12,456",   "$12,611"],
  ["2 years", "$24,000", "$25,396",  "$25,904",   "$26,763"],
  ["5 years", "$60,000", "$68,140",  "$71,039",   "$76,163"],
  ["10 years","$120,000","$155,282", "$173,463",  "$204,845"],
  ["15 years","$180,000","$264,770", "$311,594",  "$411,022"],
  ["20 years","$240,000","$411,033", "$520,930",  "$759,368"],
  ["30 years","$360,000","$832,258", "$1,230,922","$2,260,488"],
];

// FIRE number table
const FIRE_TABLE = [
  ["$20,000/yr", "$500,000",  "$1,040/mo", "19 yrs (7%)"],
  ["$30,000/yr", "$750,000",  "$1,560/mo", "21 yrs (7%)"],
  ["$40,000/yr", "$1,000,000","$2,080/mo", "22 yrs (7%)"],
  ["$50,000/yr", "$1,250,000","$2,600/mo", "24 yrs (7%)"],
  ["$60,000/yr", "$1,500,000","$3,120/mo", "25 yrs (7%)"],
  ["$80,000/yr", "$2,000,000","$4,160/mo", "27 yrs (7%)"],
  ["$100,000/yr","$2,500,000","$5,200/mo", "29 yrs (7%)"],
];

// Savings by age benchmarks
const AGE_BENCHMARKS = [
  ["25", "~$10,000–$20,000",   "Emergency fund built, starting retirement contributions"],
  ["30", "1× annual salary",    "e.g. $60K saved if you earn $60K"],
  ["35", "2× annual salary",    "e.g. $140K saved if you earn $70K"],
  ["40", "3× annual salary",    "e.g. $240K saved if you earn $80K"],
  ["45", "4× annual salary",    "e.g. $360K saved if you earn $90K"],
  ["50", "6× annual salary",    "e.g. $600K saved if you earn $100K"],
  ["55", "7× annual salary",    "Half decade from early retirement zone"],
  ["60", "8× annual salary",    "Final stretch — maintain contributions"],
  ["67", "10× annual salary",   "Target for comfortable Social Security-supplemented retirement"],
];

// Interest rate environment 2026
const RATES_2026 = [
  ["High-Yield Savings Account (HYSA)", "4.0–5.2% APY",  "Best for: emergency fund, short-term goals"],
  ["Money Market Account",              "4.0–5.0% APY",  "Best for: flexible short-term savings"],
  ["1-Year CD",                         "4.5–5.1% APY",  "Best for: locking in rates, 12-month horizon"],
  ["5-Year CD",                         "3.8–4.5% APY",  "Best for: medium-term goals with guaranteed rate"],
  ["Treasury Bonds (10-yr yield)",      "~4.3% APY",     "Best for: safe medium-term, tax advantages"],
  ["Bond Index Fund",                   "3.5–5.5%",      "Best for: conservative portfolio allocation"],
  ["S&P 500 Index Fund (historical)",   "~10% nominal",  "Best for: long-term (10+ years), accepts volatility"],
  ["Diversified 60/40 Portfolio",       "5–7% historical","Best for: balanced risk, retirement accounts"],
];

const TOC = [
  { id: "compound-interest",    label: "How compound interest actually works — with real math" },
  { id: "savings-tables",       label: "$500 and $1,000/month savings tables over 1–30 years" },
  { id: "how-much-per-month",   label: "How much should you save per month?" },
  { id: "interest-rates-2026",  label: "Realistic interest rates to use in 2026" },
  { id: "emergency-fund",       label: "Emergency fund: how much, where to keep it" },
  { id: "savings-by-age",       label: "How much should you have saved by age?" },
  { id: "fire-number",          label: "Your FIRE number and how to reach it" },
  { id: "strategies",           label: "5 strategies that actually accelerate savings" },
  { id: "common-mistakes",      label: "The 4 savings mistakes that cost people the most" },
  { id: "calculator",           label: "Use the free savings calculator" },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-black tracking-tight text-slate-900
                 border-l-4 border-emerald-500 pl-4 mt-14 mb-5 scroll-mt-6"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-black text-slate-900 mt-8 mb-3">{children}</h3>
  );
}

function CalculatorCTA({ variant = "mid" }: { variant?: "mid" | "end" }) {
  const isEnd = variant === "end";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl my-10
                  ${isEnd ? "p-10 text-center" : "p-7"}`}
      style={{
        background: isEnd
          ? "linear-gradient(135deg,#059669 0%,#0d9488 100%)"
          : "linear-gradient(135deg,#052e16 0%,#064e3b 100%)",
      }}
    >
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full
                      bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div
        className="relative flex flex-col sm:flex-row items-start
                   sm:items-center justify-between gap-5"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Calculator size={15} className="text-emerald-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300">
              Free Tool · Compound Interest · Goal Tracker
            </span>
          </div>
          <p className="text-white font-black text-lg leading-snug mb-1">
            {isEnd
              ? "Calculate exactly how fast your savings will grow"
              : "Model your savings growth with any rate and timeline"}
          </p>
          <p className="text-emerald-200 text-[13px] leading-relaxed max-w-sm">
            {isEnd
              ? "Enter your goal, initial deposit, monthly contribution, and interest rate. See how long it takes, how much interest you'll earn, and the monthly savings you need — free, instant."
              : "Compound interest · Goal tracking · Monthly required savings · Investment breakdown pie chart."}
          </p>
        </div>
        <Link
          href="/savings-calculator"
          className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-emerald-500 hover:bg-emerald-400 text-white font-black text-[14px]
                     transition-colors whitespace-nowrap group"
        >
          Use the Calculator
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function SavingsCalculatorGuidePage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 pt-12 md:pt-18 pb-0">
        <nav className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-6 flex-wrap">
          <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
          <ChevronRight size={11} />
          <Link href="/blog" className="hover:text-slate-700 transition-colors">Blog</Link>
          <ChevronRight size={11} />
          <span className="text-slate-600">Savings Calculator Guide 2026</span>
        </nav>

        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                      bg-emerald-50 border border-emerald-100 text-emerald-700
                      text-[10px] font-black uppercase tracking-widest mb-5"
        >
          <TrendingUp size={11} />
          Personal Finance · Compound Interest · 2026 Rates
        </div>

        <h1
          className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]
                     text-slate-900 mb-6"
        >
          Savings Calculator{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg,#059669,#0d9488)" }}
          >
            Guide
          </span>{" "}
          2026
          <br className="hidden sm:block" />
          <span className="text-slate-500 text-xl md:text-2xl font-bold">
            Compound Interest, Monthly Goals & Retirement Planning
          </span>
        </h1>

        <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-7 max-w-2xl">
          Saving $500/month sounds modest. But at 7% annual return for 30 years,
          it grows to{" "}
          <strong className="text-slate-900">$615,461</strong> — of which
          $435,461 is interest you never contributed. This guide shows exactly
          how compound interest builds wealth, what rate to expect in 2026, how
          much you should save by age, and how to calculate your FIRE number.
        </p>

        {/* Hero stat strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
          {[
            { value: "$615K",   label: "$500/mo × 30 yrs at 7%" },
            { value: "4–5.2%",  label: "HYSA rates 2026" },
            { value: "25×",     label: "FIRE number multiplier" },
            { value: "20%",     label: "Recommended savings rate" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-center"
            >
              <p className="text-xl font-black text-emerald-700 tabular-nums leading-none mb-1">
                {s.value}
              </p>
              <p className="text-[10px] text-emerald-600 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 pb-7
                        border-b border-slate-100 text-[12px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} /> Updated May 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> 13 min read
          </span>
          <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
            <CheckCircle2 size={12} />
            HYSA rates May 2026 · S&P 500 historical · Fidelity retirement benchmarks
          </span>
        </div>
      </section>

      {/* ── CONTENT + SIDEBAR ────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ── ARTICLE ─────────────────────────────────────────────────── */}
          <article className="flex-1 min-w-0 text-slate-700 text-[15px] leading-relaxed">

            {/* TOC */}
            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6 mb-10">
              <p className="text-[11px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">In This Guide</p>
              <ol className="space-y-2.5">
                {TOC.map((item, i) => (
                  <li key={item.id} className="flex items-center gap-2.5">
                    <span className="text-[10px] text-emerald-600 font-black w-5 h-5
                                     rounded-full bg-emerald-50 flex items-center
                                     justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <a
                      href={`#${item.id}`}
                      className="text-emerald-700 hover:underline text-[13px] font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* ─── SECTION 1 ─── */}
            <H2 id="compound-interest">
              How compound interest actually works — with real math
            </H2>

            <p>
              Compound interest is the single most powerful force in personal finance.
              Albert Einstein allegedly called it "the eighth wonder of the world."
              Whether or not he said it, the math justifies the reverence.
            </p>

            <p className="mt-4">
              The compound interest formula is:
            </p>

            <div className="not-prose my-6 p-5 bg-emerald-50 rounded-2xl border
                            border-emerald-100 font-mono text-[13px] text-slate-700">
              <p className="font-black text-emerald-900 mb-3 not-italic text-[14px]">
                The compound interest formula:
              </p>
              <p className="leading-relaxed">
                <strong>A = P × (1 + r/n)^(n×t)</strong>
              </p>
              <div className="border-t border-emerald-100 mt-3 pt-3 space-y-1 text-[12px] text-slate-500">
                <p><strong>A</strong> = Final amount</p>
                <p><strong>P</strong> = Principal (initial deposit)</p>
                <p><strong>r</strong> = Annual interest rate (decimal — 7% = 0.07)</p>
                <p><strong>n</strong> = Compounding periods per year (12 = monthly)</p>
                <p><strong>t</strong> = Time in years</p>
              </div>
            </div>

            <H3>Simple vs compound — why the difference is massive</H3>

            <p>
              <strong>Simple interest</strong> earns interest only on your original
              principal. If you deposit $10,000 at 7% simple interest for 20 years,
              you earn $14,000 in interest (7% × $10,000 × 20 years).
            </p>

            <p className="mt-4">
              <strong>Compound interest</strong> earns interest on your principal
              AND on all the interest you've already earned. That same $10,000 at
              7% compounded monthly for 20 years grows to $40,103 — almost{" "}
              <strong>3× more than simple interest</strong>, and 4× your original
              deposit, with no additional contributions.
            </p>

            {/* Compound interest worked example */}
            <div className="not-prose my-7 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <p className="font-black text-emerald-900 text-[14px] mb-4">
                Real example: $10,000 initial deposit + $500/month for 20 years at 7%
              </p>
              <div className="bg-white rounded-xl p-5 font-mono text-[13px]
                              text-slate-700 shadow-sm space-y-2">
                <p>Initial deposit:              <strong>$10,000</strong></p>
                <p>Monthly contributions:        <strong>$500 × 240 months = $120,000</strong></p>
                <p>Total money invested:         <strong>$130,000</strong></p>
                <div className="border-t border-slate-100 pt-3 mt-2">
                  <p>Final balance at 7%:         <strong className="text-emerald-700">$282,243</strong></p>
                  <p>Interest earned:             <strong className="text-emerald-600">$152,243</strong></p>
                  <p>Return on investment:         <strong>117% — more than doubled</strong></p>
                </div>
              </div>
              <p className="text-[11px] text-emerald-700 mt-3">
                You put in $130,000 over 20 years. Compound interest added another
                $152,243 — more than your total contributions. That's the compounding
                effect working for you.
              </p>
            </div>

            <H3>The rule of 72 — how long to double your money</H3>

            <p>
              The Rule of 72 gives a quick mental estimate: divide 72 by your annual
              interest rate to find the approximate years to double your money.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200 my-5">
              <table className="w-full text-[12px] min-w-[360px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Annual Rate</th>
                    <th className="px-4 py-3 text-left font-black">Years to Double (Rule of 72)</th>
                    <th className="px-4 py-3 text-left font-black">$10,000 becomes in 20 yrs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["1% (basic savings)", "72 years", "$12,202"],
                    ["3% (HYSA low)",       "24 years", "$18,061"],
                    ["5% (HYSA high)",      "14.4 years","$26,533"],
                    ["7% (balanced fund)", "10.3 years","$38,697"],
                    ["10% (S&P 500 hist.)", "7.2 years", "$67,275"],
                  ].map(([rate, years, result], i) => (
                    <tr key={rate} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-2.5 font-bold text-slate-900">{rate}</td>
                      <td className="px-4 py-2.5 text-emerald-700 font-semibold">{years}</td>
                      <td className="px-4 py-2.5 font-black text-blue-700">{result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ─── SECTION 2 ─── */}
            <H2 id="savings-tables">
              $500 and $1,000/month savings tables over 1–30 years
            </H2>

            <p className="mb-5">
              These tables assume no initial deposit — purely monthly contributions
              with monthly compounding. They show exactly how much compound interest
              adds over time compared to simply stashing the money under a mattress.
            </p>

            <H3>Saving $500/month — what you'll have at different rates</H3>
            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200
                            shadow-sm my-4">
              <table className="w-full text-[11px] text-slate-700 bg-white min-w-[520px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Time</th>
                    <th className="px-3 py-3 text-left font-black">Contributed (no interest)</th>
                    <th className="px-3 py-3 text-left font-black">At 5%</th>
                    <th className="px-3 py-3 text-left font-black">At 7%</th>
                    <th className="px-3 py-3 text-left font-black">At 10%</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {FIVE_HUNDRED_TABLE.map(([time, noInt, five, seven, ten], i) => (
                    <tr
                      key={time}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                                  hover:bg-emerald-50/20 transition-colors`}
                    >
                      <td className="px-3 py-2.5 font-bold text-slate-900">{time}</td>
                      <td className="px-3 py-2.5 text-slate-500">{noInt}</td>
                      <td className="px-3 py-2.5 font-semibold text-blue-700">{five}</td>
                      <td className="px-3 py-2.5 font-bold text-emerald-700">{seven}</td>
                      <td className="px-3 py-2.5 font-black text-emerald-800">{ten}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H3>Saving $1,000/month — doubled contribution, not doubled result</H3>
            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200
                            shadow-sm my-4">
              <table className="w-full text-[11px] text-slate-700 bg-white min-w-[520px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Time</th>
                    <th className="px-3 py-3 text-left font-black">Contributed</th>
                    <th className="px-3 py-3 text-left font-black">At 5%</th>
                    <th className="px-3 py-3 text-left font-black">At 7%</th>
                    <th className="px-3 py-3 text-left font-black">At 10%</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ONE_K_TABLE.map(([time, noInt, five, seven, ten], i) => (
                    <tr
                      key={time}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                                  hover:bg-emerald-50/20 transition-colors`}
                    >
                      <td className="px-3 py-2.5 font-bold text-slate-900">{time}</td>
                      <td className="px-3 py-2.5 text-slate-500">{noInt}</td>
                      <td className="px-3 py-2.5 font-semibold text-blue-700">{five}</td>
                      <td className="px-3 py-2.5 font-bold text-emerald-700">{seven}</td>
                      <td className="px-3 py-2.5 font-black text-emerald-800">{ten}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl bg-slate-900 text-white p-5 my-5">
              <p className="font-black text-[13px] text-emerald-400 mb-1">
                The key insight these tables reveal
              </p>
              <p className="text-slate-300 text-[13px] leading-relaxed">
                At 10 years, doubling your monthly contribution from $500 to $1,000
                roughly doubles your balance (as you'd expect). But at 30 years, the
                same doubling produces a balance{" "}
                <strong className="text-white">almost identical to doubling</strong>{" "}
                — because compound interest on the larger balance also roughly doubles.
                This means starting earlier at $500/month beats starting 5 years later
                at $1,000/month in almost every scenario.
              </p>
            </div>

            {/* MID-ARTICLE CTA */}
            <CalculatorCTA variant="mid" />

            {/* ─── SECTION 3 ─── */}
            <H2 id="how-much-per-month">
              How much should you save per month in 2026?
            </H2>

            <p>
              The right monthly savings amount depends entirely on your specific goals.
              There is no universal number — but there are proven frameworks.
            </p>

            <div className="not-prose space-y-4 my-6">
              {[
                {
                  title: "The 50/30/20 rule — the starting point for most people",
                  color: "border-blue-100 bg-blue-50",
                  textColor: "text-blue-800",
                  body: "Allocate 50% of take-home pay to needs, 30% to wants, and 20% to savings and debt repayment. On a $4,000/month take-home, that's $800/month to savings. On $3,000/month, it's $600/month. This isn't optimal for aggressive wealth-building, but it's sustainable for most households and creates real progress.",
                  data: "At $800/month for 20 years at 7%: $510,832 total",
                },
                {
                  title: "The 15% retirement rule — the baseline for long-term security",
                  color: "border-emerald-100 bg-emerald-50",
                  textColor: "text-emerald-800",
                  body: "Financial planners typically recommend saving 15% of gross income for retirement. This includes any employer 401(k) match. On $70,000/year gross, that's $10,500/year or $875/month. If your employer matches 3%, you need to contribute 12% ($700/month) to hit the 15% target.",
                  data: "$875/month for 30 years at 7% = $1,076,720",
                },
                {
                  title: "Goal-based calculation — the most accurate method",
                  color: "border-violet-100 bg-violet-50",
                  textColor: "text-violet-800",
                  body: "For a specific goal (emergency fund, house down payment, college fund), calculate backwards from your target: Monthly Required = (Goal − Current Savings × (1+r)^n) ÷ [((1+r)^n − 1) / r]. Use the savings calculator to reverse-engineer your required monthly contribution for any goal and timeline.",
                  data: "Example: $50,000 in 5 years at 5% with $5,000 already saved → need $694/month",
                },
              ].map((s) => (
                <div key={s.title} className={`rounded-2xl border ${s.color} p-5`}>
                  <p className={`font-black text-[13px] mb-2 ${s.textColor}`}>{s.title}</p>
                  <p className="text-slate-600 text-[13px] leading-relaxed mb-2">{s.body}</p>
                  <p className={`text-[11px] font-bold ${s.textColor} opacity-80`}>
                    → {s.data}
                  </p>
                </div>
              ))}
            </div>

            {/* ─── SECTION 4 ─── */}
            <H2 id="interest-rates-2026">
              Realistic interest rates to use in 2026
            </H2>

            <p className="mb-5">
              Using the right interest rate for your savings calculator is critical.
              Being too optimistic means planning on money you won't have. Being too
              conservative means undersaving unnecessarily. Here's what's realistic
              in 2026:
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200
                            shadow-sm my-4">
              <table className="w-full text-[12px] min-w-[500px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Account / Asset Type</th>
                    <th className="px-3 py-3 text-left font-black">2026 Rate</th>
                    <th className="px-3 py-3 text-left font-black">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {RATES_2026.map(([type, rate, use], i) => (
                    <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2.5 font-bold text-slate-900">{type}</td>
                      <td className="px-3 py-2.5 font-black text-emerald-700">{rate}</td>
                      <td className="px-3 py-2.5 text-slate-500 text-[11px]">{use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl border border-amber-100 bg-amber-50
                            p-5 my-5 flex gap-3">
              <AlertTriangle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-amber-900 text-[13px] mb-1">
                  Inflation reduces real returns
                </p>
                <p className="text-amber-800 text-[13px] leading-relaxed">
                  US inflation ran at approximately 3.3% in early 2026. A 5% HYSA rate
                  gives a <strong>real return of only ~1.7%</strong>. For long-term
                  wealth building, use inflation-adjusted returns: subtract 2.5–3% from
                  nominal rates. A 7% stock market return becomes approximately 4–4.5%
                  in real purchasing power.
                </p>
              </div>
            </div>

            {/* ─── SECTION 5 ─── */}
            <H2 id="emergency-fund">
              Emergency fund: how much, where to keep it, and when to use it
            </H2>

            <p>
              Before investing a single dollar in stocks or retirement accounts, you
              need a proper emergency fund. It's not optional — it's the foundation
              that prevents you from liquidating investments at the worst possible
              time when life happens.
            </p>

            <H3>How much emergency fund do you need?</H3>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200 my-5">
              <table className="w-full text-[12px] min-w-[380px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Your Situation</th>
                    <th className="px-4 py-3 text-left font-black">Recommended Fund</th>
                    <th className="px-4 py-3 text-left font-black">Example ($4K/mo expenses)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Stable job, dual income, no dependents", "3 months",  "$12,000"],
                    ["Single income, stable job",              "4 months",  "$16,000"],
                    ["Self-employed or variable income",       "6 months",  "$24,000"],
                    ["Business owner, irregular income",       "6–9 months","$24,000–$36,000"],
                    ["Single income + dependents",             "6 months",  "$24,000"],
                    ["Any job with low stability",             "6 months",  "$24,000"],
                  ].map(([situation, target, example], i) => (
                    <tr key={situation} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-2.5 text-slate-700">{situation}</td>
                      <td className="px-4 py-2.5 font-bold text-emerald-700">{target}</td>
                      <td className="px-4 py-2.5 font-black text-blue-700">{example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H3>Where to keep your emergency fund in 2026</H3>
            <p>
              Keep your emergency fund in a <strong>high-yield savings account (HYSA)</strong>
              earning 4–5.2% APY. It needs to be liquid (accessible in 1–2 business days),
              FDIC-insured, and in a separate account from your regular spending to prevent
              accidental spending. Top HYSA options in 2026 include Marcus by Goldman Sachs,
              SoFi, Marcus, and most credit unions. Do not invest your emergency fund in
              stocks, CDs with penalties, or any account you can't access immediately.
            </p>

            {/* ─── SECTION 6 ─── */}
            <H2 id="savings-by-age">
              How much should you have saved by age in 2026?
            </H2>

            <p>
              These benchmarks come from Fidelity's retirement savings guidelines and
              are widely used by financial planners. They assume you want to retire at
              67 and replace 10× your salary in savings at retirement. Treat them as
              targets, not requirements.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200
                            shadow-sm my-5">
              <table className="w-full text-[12px] min-w-[460px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Age</th>
                    <th className="px-3 py-3 text-left font-black">Savings Target</th>
                    <th className="px-3 py-3 text-left font-black">Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {AGE_BENCHMARKS.map(([age, target, context], i) => (
                    <tr key={age} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2.5 font-black text-slate-900 text-[14px]">
                        Age {age}
                      </td>
                      <td className="px-3 py-2.5 font-black text-emerald-700">{target}</td>
                      <td className="px-3 py-2.5 text-slate-500 text-[11px]">{context}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Most people fall short of these benchmarks — that doesn't mean retirement
              is impossible. Social Security provides income (average benefit: ~$1,900/month
              in 2026), and the benchmarks assume no pension, no inheritance, and retiring
              exclusively on savings. Use them as directional guides, not pass/fail criteria.
            </p>

            {/* ─── SECTION 7 ─── */}
            <H2 id="fire-number">
              Your FIRE number — how much you need to retire early
            </H2>

            <p>
              FIRE (Financial Independence, Retire Early) is built around one core idea:
              if you can accumulate 25× your annual expenses in invested assets, you can
              safely withdraw 4% per year indefinitely without depleting your portfolio.
              This is the "4% rule" from the Trinity Study.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200
                            shadow-sm my-5">
              <table className="w-full text-[12px] min-w-[480px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Annual Expenses</th>
                    <th className="px-3 py-3 text-left font-black">FIRE Number (25×)</th>
                    <th className="px-3 py-3 text-left font-black">Monthly Savings Needed</th>
                    <th className="px-3 py-3 text-left font-black">Approx. Time (from $0)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {FIRE_TABLE.map(([expenses, fire, monthly, time], i) => (
                    <tr key={expenses} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2.5 font-bold text-slate-900">{expenses}</td>
                      <td className="px-3 py-2.5 font-black text-emerald-700">{fire}</td>
                      <td className="px-3 py-2.5 font-bold text-blue-700">{monthly}</td>
                      <td className="px-3 py-2.5 text-slate-500">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[12px] text-slate-400 mb-6">
              Monthly savings needed assumes starting from $0 at 7% annual return.
              Having an existing savings balance dramatically reduces the time required.
            </p>

            <div className="not-prose rounded-2xl border border-blue-100 bg-blue-50 p-5 my-5">
              <p className="font-black text-blue-900 text-[13px] mb-1.5">
                The most powerful FIRE lever: reduce annual expenses
              </p>
              <p className="text-blue-800 text-[13px] leading-relaxed">
                Reducing annual expenses from $60,000 to $40,000 doesn't just cut your
                FIRE number by $500,000 — it also means you can save more each month,
                reaching the lower target even faster. The compound effect works in both
                directions: lower expenses simultaneously shrink the target and increase
                the monthly savings you can direct toward it.
              </p>
            </div>

            {/* ─── SECTION 8 ─── */}
            <H2 id="strategies">
              5 strategies that actually accelerate savings growth
            </H2>

            <div className="not-prose space-y-4 my-6">
              {[
                {
                  n: "1", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-100",
                  title: "Maximize tax-advantaged accounts first",
                  body: "401(k) contributions up to the employer match are a guaranteed 50–100% return before any market gain. HSA contributions provide a triple tax advantage. IRA contributions reduce taxable income. In 2026, you can contribute $23,500 to a 401(k) and $7,000 to an IRA — that's $30,500 in tax-advantaged saving before touching taxable accounts.",
                  stat: "401(k) match alone can add $2,000–$5,000/year to your effective savings",
                },
                {
                  n: "2", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-100",
                  title: "Automate everything — make saving invisible",
                  body: "People who automate savings save significantly more than those who manually transfer money. Set up automatic transfers on payday — before the money hits your checking account, it's gone into savings. Studies consistently show automation is the #1 behavioral driver of savings success. Set it and forget it is not laziness; it's strategy.",
                  stat: "Automatic savers save 2–3× more than manual savers on average",
                },
                {
                  n: "3", color: "text-violet-700", bg: "bg-violet-50", border: "border-violet-100",
                  title: "Invest windfalls immediately, not incrementally",
                  body: "Tax refunds, bonuses, inheritance, and raises are the highest-leverage moments in savings. A $5,000 tax refund invested at age 35 at 7% grows to $38,061 by age 65. The same $5,000 spent on lifestyle inflation grows to $0. Commit to investing a minimum percentage of every windfall — 50% is a widely recommended default.",
                  stat: "$5,000 invested at 35 → $38,061 at 65 (7% return)",
                },
                {
                  n: "4", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-100",
                  title: "Increase your savings rate with every income increase",
                  body: "Lifestyle inflation is the silent killer of wealth. When you get a raise, immediately increase your 401(k) contribution or automatic transfer by at least half the raise amount before adjusting your budget. This keeps you making progress while still enjoying some income increase. A 3% raise on a $70,000 salary is $2,100/year — banking $1,050 of that adds $1,050/year to your savings rate.",
                  stat: "Saving half of each raise doubles wealth-building speed over a career",
                },
                {
                  n: "5", color: "text-rose-700", bg: "bg-rose-50", border: "border-rose-100",
                  title: "Use index funds — not individual stocks or actively managed funds",
                  body: "Over 20-year periods, more than 90% of actively managed funds underperform the S&P 500 index after fees. A total market index fund charging 0.03% (like Vanguard VTSAX or Fidelity FZROX) keeps more of your returns. On a $200,000 portfolio, the difference between a 0.03% and 1% expense ratio is approximately $2,000 per year — compounding over 30 years, that's a six-figure difference.",
                  stat: "Lower fund fees compound into $50,000–$200,000 differences over 30 years",
                },
              ].map((s) => (
                <div key={s.title} className={`rounded-2xl border ${s.border} p-5 flex gap-4`}>
                  <div className={`${s.bg} ${s.color} w-9 h-9 rounded-xl flex items-center
                                   justify-center flex-shrink-0 font-black text-[14px]`}>
                    {s.n}
                  </div>
                  <div>
                    <p className={`font-black text-[13px] mb-1.5 ${s.color}`}>{s.title}</p>
                    <p className="text-slate-600 text-[13px] leading-relaxed mb-2">{s.body}</p>
                    <p className={`text-[11px] font-bold ${s.color} opacity-80`}>
                      → {s.stat}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ─── SECTION 9 ─── */}
            <H2 id="common-mistakes">
              The 4 savings mistakes that cost people the most
            </H2>

            <div className="not-prose space-y-3 my-6">
              {[
                {
                  title: "Starting too late — every 5-year delay is catastrophic",
                  body: "Someone who starts saving $500/month at 25 and stops at 35 (10 years, $60,000 contributed) ends up with more at 65 than someone who starts at 35 and saves continuously until 65 (30 years, $180,000 contributed) — at a 7% return. The first person has $602,070; the second has $566,764. This is the time-value-of-money principle at full power. Time in the market beats timing the market every time.",
                  color: "text-rose-700 bg-rose-50 border-rose-100",
                },
                {
                  title: "Keeping savings in a regular savings account earning near 0%",
                  body: "The national average savings account interest rate in 2026 is approximately 0.45% APY. High-yield savings accounts offer 4.0–5.2%. On a $30,000 emergency fund, the difference is $1,050–$1,425 per year in additional interest earned — for zero extra effort. This is free money most people leave on the table by defaulting to their primary bank's savings account.",
                  color: "text-amber-700 bg-amber-50 border-amber-100",
                },
                {
                  title: "Raiding retirement accounts early — the double penalty",
                  body: "Withdrawing from a 401(k) or IRA before age 59½ triggers a 10% early withdrawal penalty plus ordinary income tax on the amount. On a $20,000 withdrawal in the 22% bracket, you lose approximately $6,400 immediately. But the compounding loss is even worse: $20,000 at 7% over 25 years would have grown to $108,552. The early withdrawal truly costs you $108,552, not $20,000.",
                  color: "text-violet-700 bg-violet-50 border-violet-100",
                },
                {
                  title: "Optimizing for returns before building the emergency fund",
                  body: "Many people invest in stocks before building an emergency fund, reasoning that they're maximizing returns. The problem: when an emergency occurs (and it always does), they're forced to sell investments — often during a market downturn, locking in losses. A 20% market drop means a $10,000 emergency costs you $12,500 from your portfolio. Build your emergency fund first, invest after.",
                  color: "text-blue-700 bg-blue-50 border-blue-100",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-2xl border p-5 ${m.color}`}>
                  <p className="font-black text-[13px] mb-2">{m.title}</p>
                  <p className="text-slate-600 text-[13px] leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>

            {/* FINAL CTA */}
            <div id="calculator">
              <CalculatorCTA variant="end" />
            </div>

            {/* Disclaimer */}
            <div className="mt-10 pt-6 border-t border-slate-100">
              <p className="text-[11px] text-slate-400 italic leading-relaxed">
                Investment return assumptions (7%, 10%) are based on historical
                long-term averages and are not guarantees of future performance.
                Past performance does not predict future results. Interest rates
                for HYSAs, CDs, and money market accounts sourced from public
                data as of May 2026 and change frequently — verify current rates
                before making financial decisions. Emergency fund and retirement
                benchmarks sourced from Fidelity Investments and standard financial
                planning guidelines. This guide is for informational and educational
                purposes only and does not constitute investment, financial, or tax
                advice. Consult a licensed financial advisor for your specific situation.
              </p>
              <p className="text-[11px] text-slate-400 mt-2">Last updated: May 2026</p>
            </div>
          </article>

          {/* ── STICKY SIDEBAR ──────────────────────────────────────────── */}
          <aside className="w-full lg:w-[260px] flex-shrink-0 space-y-5 lg:sticky lg:top-6">

            {/* Primary CTA */}
            <div className="rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div
                className="px-5 py-4 text-white"
                style={{ background: "linear-gradient(135deg,#059669,#0d9488)" }}
              >
                <Target size={18} className="mb-2 text-emerald-200" />
                <p className="font-black text-[14px] leading-snug mb-1">
                  Free Savings Calculator
                </p>
                <p className="text-emerald-200 text-[11px] leading-relaxed">
                  Compound interest · Goal tracking · Monthly required savings ·
                  Investment breakdown · Instant results.
                </p>
              </div>
              <Link
                href="/savings-calculator"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white
                           border-t border-emerald-100 text-emerald-700 font-black
                           text-[13px] hover:bg-emerald-50 transition-colors group"
              >
                Open Calculator
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>

            {/* Rule of 72 quick ref */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">Rule of 72 — Years to Double</p>
              <div className="space-y-2.5">
                {[
                  { rate: "1% APY",      years: "72 years",  note: "Regular savings" },
                  { rate: "3% APY",      years: "24 years",  note: "Low HYSA" },
                  { rate: "5% APY",      years: "14.4 years",note: "Top HYSA 2026" },
                  { rate: "7% return",   years: "10.3 years",note: "Balanced fund" },
                  { rate: "10% return",  years: "7.2 years", note: "S&P 500 avg" },
                ].map((r) => (
                  <div
                    key={r.rate}
                    className="flex items-start justify-between text-[12px]
                               border-b border-slate-50 pb-2 last:border-0"
                  >
                    <div>
                      <span className="font-bold text-slate-700 block">{r.rate}</span>
                      <span className="text-slate-400 text-[10px]">{r.note}</span>
                    </div>
                    <span className="font-black text-emerald-700">{r.years}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2026 savings rates */}
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-emerald-700 mb-3">
                Best Savings Rates (May 2026)
              </p>
              <div className="space-y-2">
                {[
                  ["HYSA (top)",        "4.0–5.2%"],
                  ["Money Market",      "4.0–5.0%"],
                  ["1-Year CD",         "4.5–5.1%"],
                  ["5-Year CD",         "3.8–4.5%"],
                  ["I-Bonds",           "Check TreasuryDirect"],
                  ["S&P 500 (hist.)",   "~10% nominal"],
                ].map(([type, rate]) => (
                  <div
                    key={type}
                    className="flex items-center justify-between text-[11px]
                               border-b border-emerald-100 pb-1.5 last:border-0"
                  >
                    <span className="text-emerald-800">{type}</span>
                    <span className="font-black text-emerald-900">{rate}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-emerald-600 mt-2">
                Verify current rates — change frequently.
              </p>
            </div>

            {/* 2026 contribution limits */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">2026 Contribution Limits</p>
              <div className="space-y-2.5">
                {[
                  { label: "401(k) < 50",   value: "$23,500" },
                  { label: "401(k) 50–59",  value: "$31,000" },
                  { label: "401(k) 60–63",  value: "$34,750" },
                  { label: "IRA (all)",      value: "$7,000" },
                  { label: "HSA self-only",  value: "$4,300" },
                  { label: "HSA family",     value: "$8,550" },
                  { label: "529 (gift limit)","value": "$19,000/yr" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center justify-between text-[12px]
                               border-b border-slate-50 pb-2 last:border-0"
                  >
                    <span className="text-slate-500">{r.label}</span>
                    <span className="font-black text-slate-900">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related calculators */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-3">Related Calculators</p>
              <div className="space-y-2">
                {[
                  { label: "Compound Interest Calculator", href: "/compound-interest-calculator" },
                  { label: "Retirement Calculator",        href: "/retirement-calculator" },
                  { label: "401(k) Calculator",            href: "/401k-calculator" },
                  { label: "Budget Calculator",            href: "/budget-calculator" },
                  { label: "Investment Return Calculator", href: "/investment-calculator" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center gap-1.5 text-[12px] text-emerald-700
                               hover:underline"
                  >
                    <Calculator size={11} className="flex-shrink-0" />
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Related blog posts */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-3">Related Guides</p>
              <div className="space-y-2">
                {[
                  { label: "Salary After Tax Guide 2026",   href: "/blog/salary-after-tax-guide-2026" },
                  { label: "Paycheck Calculator Guide",     href: "/blog/paycheck-calculator-guide-2026" },
                  { label: "Rent Affordability Guide",      href: "/blog/rent-affordability-guide-2026" },
                  { label: "Loan Calculator Guide 2026",    href: "/blog/loan-calculator-guide-2026" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center gap-1.5 text-[12px] text-emerald-700
                               hover:underline"
                  >
                    <TrendingUp size={11} className="flex-shrink-0" />
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}