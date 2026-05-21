// app/blog/loan-calculator-guide-2026/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Calculator, Calendar, Clock, CheckCircle2,
  ChevronRight, AlertTriangle, TrendingUp, Globe,
  DollarSign, Landmark,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// Tool page = transactional: "loan calculator"
// Blog page = informational: "how to calculate monthly loan payment",
//   "amortization schedule explained", "extra payment savings mortgage"
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Loan Calculator Guide 2026 – Monthly Payment, Amortization & Extra Payment Savings",
  description:
    "How to calculate monthly loan payments, read an amortization schedule, and save tens of thousands with extra payments. Covers mortgages, auto, personal, student loans + current US/UK/Canada/Australia rates for May 2026.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/blog/loan-calculator-guide-2026",
  },
  keywords: [
    "how to calculate monthly loan payment 2026",
    "amortization schedule explained",
    "extra payment mortgage savings calculator",
    "bi-weekly mortgage payment savings",
    "how much interest do i pay on a 30 year mortgage",
    "loan payoff calculator with extra payments",
    "fixed vs variable rate loan 2026",
    "mortgage rates 2026 US UK Canada Australia",
    "car loan monthly payment guide",
    "student loan payoff strategies 2026",
    "bond yield to maturity explained",
  ],
  openGraph: {
    title: "Loan Calculator Guide 2026 – Monthly Payment, Amortization & Extra Payment Savings",
    description:
      "Complete guide to loan math: monthly payment formula, amortization tables, how extra payments save $74,000+, and current rates in US, UK, Canada, Australia, India.",
    url: "https://www.freeuscalculator.in/blog/loan-calculator-guide-2026",
    type: "article",
    publishedTime: "2026-04-01T00:00:00Z",
    modifiedTime: "2026-05-01T00:00:00Z",
    authors: ["FreeUSCalculator"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",  item: "https://www.freeuscalculator.in" },
        { "@type": "ListItem", position: 2, name: "Blog",  item: "https://www.freeuscalculator.in/blog" },
        { "@type": "ListItem", position: 3,
          name: "Loan Calculator Guide 2026",
          item: "https://www.freeuscalculator.in/blog/loan-calculator-guide-2026" },
      ],
    },
    {
      "@type": "Article",
      headline: "Loan Calculator Guide 2026 – Monthly Payment, Amortization & Extra Payment Savings",
      description:
        "How to calculate monthly loan payments, understand amortization schedules, and save tens of thousands with extra payments or bi-weekly strategies. Includes current rates for US, UK, Canada, Australia, India.",
      url: "https://www.freeuscalculator.in/blog/loan-calculator-guide-2026",
      datePublished: "2026-04-01",
      dateModified: "2026-05-01",
      author: { "@type": "Organization", name: "FreeUSCalculator",
        url: "https://www.freeuscalculator.in" },
      publisher: { "@type": "Organization", name: "FreeUSCalculator",
        url: "https://www.freeuscalculator.in" },
      relatedLink: "https://www.freeuscalculator.in/loan-calculator",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I calculate my monthly loan payment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the formula: Monthly Payment = [P × r × (1+r)^n] ÷ [(1+r)^n – 1], where P = loan amount, r = monthly interest rate (annual rate ÷ 12 ÷ 100), and n = total months. Example: a $25,000 loan at 7% APR for 60 months = $495/month.",
          },
        },
        {
          "@type": "Question",
          name: "How much do extra payments save on a $300,000 mortgage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At 7% over 30 years, paying $200 extra per month saves approximately $74,000 in interest and cuts about 7 years off the loan. Even $100 extra per month saves over $30,000. The earlier you start extra payments, the bigger the impact.",
          },
        },
        {
          "@type": "Question",
          name: "How do bi-weekly mortgage payments save money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paying half your monthly payment every two weeks results in 26 half-payments per year — equivalent to 13 full monthly payments. The extra payment goes entirely to principal. On a $400,000 mortgage at 6.5% for 30 years, this saves approximately $90,000 and finishes the loan 5 years early.",
          },
        },
        {
          "@type": "Question",
          name: "What is an amortization schedule?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An amortization schedule is a month-by-month table showing each payment split into principal and interest, plus the remaining loan balance. In early months most of your payment is interest; in final months most is principal. This gradual shift is the amortization curve.",
          },
        },
        {
          "@type": "Question",
          name: "Fixed or variable rate — which is better in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fixed rates give certainty and protect against rate increases — best for long-term loans or when rates are near historic lows. Variable rates can save money if benchmark rates fall. In 2026 with US 30-year fixed rates around 6.39%, fixed is generally advisable for most borrowers planning to hold the loan more than 5–7 years.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const PAYMENT_TABLE = [
  ["$15,000",  "Personal Loan · 36 mo",  "$463",   "$1,668",   "$16,668"],
  ["$25,000",  "Auto Loan · 60 mo",      "$495",   "$4,700",   "$29,700"],
  ["$35,000",  "Auto Loan · 72 mo",      "$378",   "$7,216",   "$42,216"],
  ["$50,000",  "Student Loan · 10 yr",   "$581",   "$19,720",  "$69,720"],
  ["$200,000", "Mortgage · 30 yr",       "$1,331", "$279,160", "$479,160"],
  ["$300,000", "Mortgage · 30 yr",       "$1,996", "$418,740", "$718,740"],
  ["$300,000", "Mortgage · 15 yr",       "$2,696", "$185,280", "$485,280"],
  ["$400,000", "Mortgage · 30 yr",       "$2,661", "$558,320", "$958,320"],
];

const EXTRA_PAYMENT_TABLE = [
  ["$0 (standard)",   "$0 saved",    "30 years",          "Standard"],
  ["$100/month",      "$30,200",     "25yr 8mo",          "−4.3 yrs"],
  ["$200/month",      "$74,000",     "23yr 1mo",          "−6.9 yrs"],
  ["$500/month",      "$133,000",    "18yr 6mo",          "−11.5 yrs"],
  ["$1,000/month",    "$177,000",    "14yr 3mo",          "−15.8 yrs"],
];

const RATES_TABLE = [
  ["🇺🇸 US", "30-yr Fixed Mortgage", "6.30–6.55%", "Bankrate May 2026"],
  ["🇺🇸 US", "Auto Loan (new)",      "6.50–8.00%", "48–72 months"],
  ["🇺🇸 US", "Personal Loan",        "10–22%",     "1–5 years"],
  ["🇬🇧 UK", "2-yr Fixed Mortgage",  "4.20–5.10%", "Most popular term"],
  ["🇬🇧 UK", "5-yr Fixed Mortgage",  "4.10–4.90%", "Lower long-term risk"],
  ["🇨🇦 CA", "5-yr Fixed Mortgage",  "4.40–5.25%", "Stress test applies"],
  ["🇦🇺 AU", "Variable Home Loan",   "5.90–7.40%", "RBA benchmark"],
  ["🇮🇳 IN", "Home Loan (EMI)",      "7.10–9.90%", "RBI repo rate linked"],
];

const STRATEGIES = [
  {
    n: "1", title: "Make one extra payment per year",
    body: "Apply it directly to principal — a $2,000 extra payment on a $300,000 mortgage shortens the loan by 3–4 years. Use your tax refund or year-end bonus.",
    color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100",
  },
  {
    n: "2", title: "Switch to bi-weekly payments",
    body: "Pay half your monthly amount every two weeks = 13 full payments/year instead of 12. On a $400,000 mortgage at 6.5%, this saves ~$90,000 over 30 years.",
    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100",
  },
  {
    n: "3", title: "Never extend a car loan beyond 60 months",
    body: "72 and 84-month auto loans look affordable monthly but cost 15–20% more in total interest — and leave you underwater on a depreciating asset for years.",
    color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100",
  },
  {
    n: "4", title: "Compare at least 3 lenders",
    body: "Rates on the same loan can vary by 0.5–2% between lenders. On a $300,000 mortgage, a 0.5% rate difference equals ~$30,000 over 30 years. Shopping costs nothing.",
    color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100",
  },
];

const TOC = [
  { id: "formula",        label: "How monthly loan payments are calculated" },
  { id: "amortization",   label: "What an amortization schedule really tells you" },
  { id: "payment-table",  label: "Monthly payment quick reference table" },
  { id: "rates-2026",     label: "Current loan rates: US, UK, Canada, Australia, India" },
  { id: "extra-payments", label: "How extra payments save you $74,000+" },
  { id: "biweekly",       label: "Bi-weekly payments: the $90,000 strategy" },
  { id: "fixed-variable", label: "Fixed vs variable rate in 2026" },
  { id: "home-loan",      label: "Home loan — how much can you borrow?" },
  { id: "car-loan",       label: "Car loan monthly payment guide" },
  { id: "strategies",     label: "10 smart loan strategies for 2026" },
  { id: "calculator",     label: "Use the free loan calculator" },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id}
      className="text-2xl md:text-3xl font-black tracking-tight text-slate-900
                 border-l-4 border-blue-600 pl-4 mt-14 mb-5 scroll-mt-6">
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
          ? "linear-gradient(135deg,#1d4ed8 0%,#7c3aed 100%)"
          : "linear-gradient(135deg,#060d1f 0%,#0c1e46 100%)",
      }}
    >
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full
                      bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center
                      justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Calculator size={15} className="text-blue-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-300">
              Free Tool
            </span>
          </div>
          <p className="text-white font-black text-lg leading-snug mb-1">
            {isEnd
              ? "Calculate your exact monthly payment and amortization schedule"
              : "Skip the math — see your numbers instantly"}
          </p>
          <p className="text-slate-400 text-[13px] leading-relaxed max-w-sm">
            {isEnd
              ? "Enter any loan amount, rate, and term. Get monthly payment, full amortization table, total interest, payoff date, and extra payment savings — free, no sign-up."
              : "Monthly payment · Full amortization schedule · Extra payment savings · Works for any loan worldwide."}
          </p>
        </div>
        <Link
          href="/loan-calculator"
          className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-blue-500 hover:bg-blue-400 text-white font-black text-[14px]
                     transition-colors whitespace-nowrap group"
        >
          Use the Calculator
          <ArrowRight size={14}
            className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function LoanCalculatorGuidePage() {
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
          <span className="text-slate-600">Loan Calculator Guide 2026</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        bg-blue-50 border border-blue-100 text-blue-700
                        text-[10px] font-black uppercase tracking-widest mb-5">
          <Globe size={11} />
          Finance · Worldwide · 2026
        </div>

        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]
                       text-slate-900 mb-6">
          Loan Calculator{" "}
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg,#1d4ed8,#7c3aed)" }}>
            Guide
          </span>{" "}
          2026
          <br className="hidden sm:block" />
          <span className="text-slate-500 text-xl md:text-2xl font-bold">
            Monthly Payment · Amortization · Extra Payment Savings
          </span>
        </h1>

        <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-7 max-w-2xl">
          If you've ever stared at a loan offer and thought{" "}
          <em>"what does this actually cost me over 30 years?"</em> — this guide
          answers that. Monthly payment formula, amortization tables, how{" "}
          <strong className="text-slate-900">$200 extra per month saves $74,000</strong>{" "}
          on a mortgage, and current rates in the US, UK, Canada, Australia, and India.
        </p>

        {/* Hero stat strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
          {[
            { value: "$74,000+", label: "Saved with $200/mo extra on $300K mortgage" },
            { value: "$90,000",  label: "Saved with bi-weekly payments on $400K mortgage" },
            { value: "6.39%",   label: "US 30-yr fixed rate (May 2026)" },
            { value: "5 years", label: "Shorter loan term with bi-weekly strategy" },
          ].map((s) => (
            <div key={s.label}
              className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-center">
              <p className="text-xl font-black text-blue-700 tabular-nums
                             leading-none mb-1">{s.value}</p>
              <p className="text-[10px] text-slate-500 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 pb-7
                        border-b border-slate-100 text-[12px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} /> Updated May 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> 14 min read
          </span>
          <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
            <CheckCircle2 size={12} />
            US · UK · Canada · Australia · India · Worldwide
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
                    <span className="text-[10px] text-blue-500 font-black w-5 h-5
                                     rounded-full bg-blue-50 flex items-center
                                     justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <a href={`#${item.id}`}
                      className="text-blue-600 hover:underline text-[13px] font-medium">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* ─── SECTION 1 ─── */}
            <H2 id="formula">How monthly loan payments are calculated</H2>

            <p>
              Every mortgage, car loan, and personal loan payment follows one standard
              formula. Banks in the US, UK, Canada, Australia, and India all use the
              same calculation — understanding it puts you on equal footing with your lender.
            </p>

            <div className="not-prose my-7 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="font-black text-blue-900 text-[13px] mb-3">
                The standard loan payment formula
              </p>
              <div className="bg-white rounded-xl p-5 font-mono text-[13px]
                              text-slate-700 shadow-sm">
                <p className="mb-1">
                  Monthly Payment ={" "}
                  <strong>P × r × (1+r)^n</strong>
                </p>
                <p className="pl-[148px] mb-4">÷ <strong>[(1+r)^n − 1]</strong></p>
                <div className="border-t border-slate-100 pt-3 space-y-1
                                text-[11px] text-slate-500">
                  <p><strong>P</strong> = Principal (loan amount)</p>
                  <p><strong>r</strong> = Monthly rate = Annual rate ÷ 12 ÷ 100</p>
                  <p><strong>n</strong> = Term in months = Years × 12</p>
                </div>
              </div>
              <p className="text-[11px] text-blue-700 mt-3">
                Standard across CFPB (US), FCA (UK), FCAC (Canada), ASIC (Australia).
              </p>
            </div>

            <H3>A real-world example</H3>
            <p>
              Borrowing <strong>$25,000</strong> for a car at <strong>7% APR</strong>{" "}
              for <strong>60 months</strong>:
            </p>
            <ul className="mt-3 space-y-1.5">
              {[
                ["Monthly rate (r)", "7 ÷ 12 ÷ 100 = 0.005833"],
                ["Total payments (n)", "5 × 12 = 60"],
                ["Monthly payment", "$495.03"],
                ["Total paid", "$29,702"],
                ["Total interest", "$4,702 — the real cost of borrowing"],
              ].map(([l, v]) => (
                <li key={l} className="flex items-center gap-2.5 text-[14px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span><strong>{l}:</strong> {v}</span>
                </li>
              ))}
            </ul>

            {/* ─── SECTION 2 ─── */}
            <H2 id="amortization">What an amortization schedule really tells you</H2>

            <p>
              An amortization schedule is a month-by-month table breaking down every
              single payment across your entire loan term — how much goes to interest,
              how much to principal, and what your remaining balance is.
            </p>

            <div className="not-prose rounded-2xl border border-amber-100 bg-amber-50
                            p-5 my-6 flex gap-3">
              <AlertTriangle size={17} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-amber-900 text-[13px] mb-1">
                  The thing that trips everyone up
                </p>
                <p className="text-amber-800 text-[13px] leading-relaxed">
                  In the early months of a loan, the vast majority of your payment is
                  interest — not principal. On a $300,000 mortgage at 6.5%, Month 1
                  pays $1,625 in interest and only $271 toward your actual balance.
                  By Month 360, almost every dollar goes to principal. This isn't your
                  bank cheating you — it's how amortization math works.
                </p>
              </div>
            </div>

            <H3>Sample amortization — $300,000 mortgage at 6.5% for 30 years</H3>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-5">
              <table className="w-full text-[12px] min-w-[480px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Month</th>
                    <th className="px-3 py-3 text-left font-black">Payment</th>
                    <th className="px-3 py-3 text-left font-black">Interest</th>
                    <th className="px-3 py-3 text-left font-black">Principal</th>
                    <th className="px-3 py-3 text-left font-black">Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["1",   "$1,896.20", "$1,625.00", "$271.20",  "$299,728"],
                    ["12",  "$1,896.20", "$1,623.53", "$272.67",  "$296,513"],
                    ["60",  "$1,896.20", "$1,594.32", "$301.88",  "$275,950"],
                    ["120", "$1,896.20", "$1,546.77", "$349.43",  "$267,368"],
                    ["240", "$1,896.20", "$1,400.52", "$495.68",  "$241,793"],
                    ["300", "$1,896.20", "$1,227.31", "$668.89",  "$211,570"],
                    ["360", "$1,896.20", "$10.27",    "$1,885.93","$0"],
                  ].map(([mo, pmt, int_, prin, bal], i) => (
                    <tr key={mo}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2.5 font-bold text-slate-700">{mo}</td>
                      <td className="px-3 py-2.5 text-slate-600">{pmt}</td>
                      <td className="px-3 py-2.5 text-rose-600 font-semibold">{int_}</td>
                      <td className="px-3 py-2.5 text-emerald-700 font-semibold">{prin}</td>
                      <td className="px-3 py-2.5 font-bold text-blue-700">{bal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ─── SECTION 3 — PAYMENT TABLE ─── */}
            <H2 id="payment-table">Monthly payment quick reference table — 2026</H2>

            <p className="mb-5">
              All figures calculated at <strong>7% annual interest rate</strong> —
              close to US mortgage market averages as of May 2026. Use the calculator
              for your exact rate.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-2">
              <table className="w-full text-[12px] text-slate-700 bg-white min-w-[520px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Loan Amount</th>
                    <th className="px-3 py-3 text-left font-black">Type / Term</th>
                    <th className="px-3 py-3 text-left font-black">Monthly</th>
                    <th className="px-3 py-3 text-left font-black">Total Interest</th>
                    <th className="px-3 py-3 text-left font-black">Total Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {PAYMENT_TABLE.map(([amt, type, mo, int_, total], i) => (
                    <tr key={amt + type}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                                  hover:bg-blue-50/20 transition-colors`}>
                      <td className="px-3 py-2.5 font-black text-slate-900">{amt}</td>
                      <td className="px-3 py-2.5 text-slate-500">{type}</td>
                      <td className="px-3 py-2.5 font-black text-blue-700">{mo}</td>
                      <td className="px-3 py-2.5 text-rose-600 font-semibold">{int_}</td>
                      <td className="px-3 py-2.5 font-bold text-emerald-700">{total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MID-ARTICLE CTA */}
            <CalculatorCTA variant="mid" />

            {/* ─── SECTION 4 ─── */}
            <H2 id="rates-2026">Current loan rates — US, UK, Canada, Australia, India (May 2026)</H2>

            <p className="mb-5">
              Rates move constantly — use these as a benchmark when comparing your
              lender's offer. Even a 0.5% difference on a $300,000 mortgage equals
              ~$30,000 over 30 years.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-2">
              <table className="w-full text-[12px] min-w-[500px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Country</th>
                    <th className="px-3 py-3 text-left font-black">Loan Type</th>
                    <th className="px-3 py-3 text-left font-black">Rate Range</th>
                    <th className="px-3 py-3 text-left font-black">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {RATES_TABLE.map(([country, type, rate, note], i) => (
                    <tr key={country + type}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2.5 font-bold text-slate-900">{country}</td>
                      <td className="px-3 py-2.5 text-slate-600">{type}</td>
                      <td className="px-3 py-2.5 font-black text-blue-700">{rate}</td>
                      <td className="px-3 py-2.5 text-slate-400 text-[11px]">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[12px] text-slate-400 mt-2">
              Sources: Bankrate, Freddie Mac, Bank of England, RBA, RBI — May 2026.
              Always verify with your specific lender.
            </p>

            {/* ─── SECTION 5 ─── */}
            <H2 id="extra-payments">How extra payments save you $74,000+</H2>

            <p>
              This is where most people leave serious money on the table. Making even a
              small extra payment every month — applied directly to principal — has a
              compounding effect that builds over time on a{" "}
              <strong>$300,000 mortgage at 7% for 30 years</strong>:
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 shadow-sm my-6">
              <table className="w-full text-[12px] min-w-[440px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Extra Payment</th>
                    <th className="px-3 py-3 text-left font-black">Interest Saved</th>
                    <th className="px-3 py-3 text-left font-black">New Term</th>
                    <th className="px-3 py-3 text-left font-black">Time Saved</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {EXTRA_PAYMENT_TABLE.map(([extra, saved, term, diff], i) => (
                    <tr key={extra}
                      className={`${i === 0 ? "bg-slate-50 text-slate-400" : i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                      <td className="px-3 py-2.5 font-bold text-slate-900">{extra}</td>
                      <td className={`px-3 py-2.5 font-bold ${i === 0 ? "text-slate-400" : "text-emerald-700"}`}>
                        {saved}
                      </td>
                      <td className="px-3 py-2.5 text-slate-600">{term}</td>
                      <td className={`px-3 py-2.5 font-bold ${i === 0 ? "text-slate-400" : "text-blue-700"}`}>
                        {diff}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl bg-emerald-50 border border-emerald-100
                            p-5 my-5">
              <p className="font-black text-emerald-900 text-[13px] mb-1.5">
                Practical tip
              </p>
              <p className="text-emerald-800 text-[13px] leading-relaxed">
                You don't need a formal arrangement. Simply add your extra amount to
                your regular payment each month with a note: "apply to principal."
                Most lenders honor this. Always check your statement to confirm it's
                being applied correctly, not held as an advance payment.
              </p>
            </div>

            {/* ─── SECTION 6 ─── */}
            <H2 id="biweekly">Bi-weekly payments: the $90,000 strategy</H2>

            <p>
              Instead of paying your mortgage once a month, pay half the monthly amount
              every two weeks. There are 52 weeks in a year, which means{" "}
              <strong>26 bi-weekly half-payments = 13 full monthly payments</strong>{" "}
              instead of 12. That one extra payment goes entirely to principal.
            </p>

            <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-3 my-7">
              {[
                { label: "Strategy",       value: "Bi-weekly" },
                { label: "Interest saved", value: "~$90,000" },
                { label: "Time saved",     value: "5 years" },
              ].map((s) => (
                <div key={s.label}
                  className="rounded-xl bg-blue-50 border border-blue-100
                             p-4 text-center">
                  <p className="text-xl font-black text-blue-700 leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-blue-600">{s.label}</p>
                </div>
              ))}
            </div>

            <p>
              On a <strong>$400,000 mortgage at 6.5% for 30 years</strong>, bi-weekly
              payments save approximately $90,000 and finish the loan 5 years early.
              The monthly payment amount doesn't change — just the timing. Many banks
              offer a formal bi-weekly program; alternatively, make one extra full
              payment per year applied to principal for the same effect.
            </p>

            {/* ─── SECTION 7 ─── */}
            <H2 id="fixed-variable">Fixed vs variable rate — which is better in 2026?</H2>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {[
                {
                  title: "Fixed Rate",
                  verdict: "Best for most in 2026",
                  verdictColor: "bg-emerald-50 border-emerald-100 text-emerald-700",
                  points: [
                    "Rate stays the same for entire term",
                    "Monthly payment never changes",
                    "Best for loans over 5–7 years",
                    "US 30-yr fixed: ~6.39% (May 2026)",
                    "Protects against future rate increases",
                  ],
                },
                {
                  title: "Variable Rate",
                  verdict: "Only if you plan to sell/refinance soon",
                  verdictColor: "bg-amber-50 border-amber-100 text-amber-700",
                  points: [
                    "Moves with benchmark rate (SOFR, BoE, RBA, RBI)",
                    "Usually starts below fixed rate",
                    "Can save money if rates fall",
                    "Carry risk of payment increases",
                    "US ARM starter barely below fixed right now",
                  ],
                },
              ].map((s) => (
                <div key={s.title}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <p className="font-black text-slate-900 text-[14px]">{s.title}</p>
                    <span className={`px-2 py-0.5 rounded-full border text-[10px]
                                      font-black uppercase tracking-wide ${s.verdictColor}`}>
                      {s.verdict}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-[12px] text-slate-600">
                        <CheckCircle2 size={12} className="text-blue-400 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p>
              The simple rule: if you're keeping the loan for more than 5–7 years and
              rates are not at historic highs, take the fixed rate. Never take variable
              just because the starting rate looks attractive — you're making a bet on
              future rate movements.
            </p>

            {/* ─── SECTION 8 ─── */}
            <H2 id="home-loan">Home loan — how much can you actually borrow?</H2>

            <p>
              Most lenders use a <strong>debt-to-income ratio (DTI)</strong> to decide
              how much you can borrow. In the US, the standard guideline is keeping
              total monthly debt payments below <strong>43% of gross monthly income</strong>
              — many lenders prefer 36% or lower.
            </p>

            <H3>Quick calculation (US)</H3>
            <ul className="mt-3 space-y-1.5">
              {[
                "Gross monthly income: $8,000",
                "36% of $8,000 = $2,880",
                "Minus existing debt payments: −$650",
                "Max mortgage payment: $2,230",
                "At 6.5% / 30 years → supports ~$353,000 loan",
              ].map((step, i) => (
                <li key={step} className="flex items-center gap-2.5 text-[14px]">
                  <span className="text-[10px] text-blue-500 font-black w-5 h-5
                                   rounded-full bg-blue-50 flex items-center
                                   justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>

            <div className="not-prose rounded-2xl border border-slate-200 bg-slate-50
                            p-5 my-6">
              <p className="font-black text-slate-900 text-[13px] mb-2">
                Hidden costs your calculator won't show
              </p>
              <div className="grid grid-cols-2 gap-2 text-[12px]">
                {[
                  ["Property taxes", "Varies by state / city"],
                  ["Homeowner's insurance", "~$100–$200/month"],
                  ["PMI (if &lt;20% down)", "~0.5–1% of loan/yr"],
                  ["HOA fees", "If applicable"],
                  ["Maintenance", "Budget 1–2% of value/yr"],
                ].map(([item, note]) => (
                  <div key={item} className="flex gap-2">
                    <span className="text-slate-400">•</span>
                    <span>
                      <strong dangerouslySetInnerHTML={{ __html: item }} />
                      {" "}<span className="text-slate-400">{note}</span>
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 mt-3">
                Factor these in — your affordable mortgage amount is often 15–20%
                lower than the raw calculator suggests.
              </p>
            </div>

            {/* ─── SECTION 9 ─── */}
            <H2 id="car-loan">Car loan monthly payment guide</H2>

            <p>
              Auto loans are among the most common loan products worldwide — and among
              the most expensive per dollar borrowed relative to mortgages. One key rule:{" "}
              <strong>never extend beyond 60 months</strong>.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border
                            border-slate-200 my-5">
              <table className="w-full text-[12px] min-w-[440px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Credit Score</th>
                    <th className="px-3 py-3 text-left font-black">New Car Rate</th>
                    <th className="px-3 py-3 text-left font-black">Used Car Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["750+ (Excellent)",  "5.5–7.0%",   "6.5–8.0%"],
                    ["700–749 (Good)",    "6.5–8.5%",   "7.5–10.0%"],
                    ["650–699 (Fair)",    "8.5–12.0%",  "10.0–15.0%"],
                    ["Below 650",        "14.0–20%+",  "18–25%+"],
                  ].map(([score, newR, usedR], i) => (
                    <tr key={score}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2.5 font-bold text-slate-900">{score}</td>
                      <td className="px-3 py-2.5 text-blue-700 font-semibold">{newR}</td>
                      <td className="px-3 py-2.5 text-slate-600">{usedR}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl border border-rose-100 bg-rose-50
                            p-5 my-5 flex gap-3">
              <AlertTriangle size={16} className="text-rose-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-rose-900 text-[13px] mb-1">
                  The 72/84-month trap
                </p>
                <p className="text-rose-800 text-[13px] leading-relaxed">
                  72 and 84-month car loans lower the monthly payment — but you pay
                  15–20% more in total interest and risk being underwater (owing more
                  than the car is worth) for the first several years. Stick to 48–60
                  months.
                </p>
              </div>
            </div>

            {/* ─── SECTION 10 ─── */}
            <H2 id="strategies">10 smart loan strategies for 2026</H2>

            <div className="not-prose space-y-4 my-7">
              {STRATEGIES.map((s) => (
                <div key={s.title}
                  className={`rounded-2xl border ${s.border} p-5 flex gap-4`}>
                  <div className={`${s.bg} ${s.color} w-9 h-9 rounded-xl
                                   flex items-center justify-center flex-shrink-0
                                   font-black text-[13px]`}>
                    {s.n}
                  </div>
                  <div>
                    <p className={`font-black text-[13px] mb-1 ${s.color}`}>{s.title}</p>
                    <p className="text-slate-600 text-[13px] leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}

              {/* Remaining strategies as compact list */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <p className="text-[11px] font-black uppercase tracking-widest
                               text-slate-500 mb-3">More strategies</p>
                <div className="space-y-2">
                  {[
                    ["5", "Keep total monthly loan repayments under 36% of gross income — above 40% and one unexpected expense triggers a missed payment."],
                    ["6", "Refinance when rates drop 1% or more below your current rate and you plan to stay in the home longer than the break-even period (typically 2–4 years)."],
                    ["7", "Prioritize paying off high-rate debt first (avalanche method) — minimum payments on all, extra dollars to highest-interest debt."],
                    ["8", "Check for prepayment penalties before making extra payments — most US mortgages have none, but some car loans and UK mortgages do."],
                    ["9", "For deferred/education loans: ask for the outstanding balance when repayment begins — not the original amount borrowed. Moratorium interest surprises are real."],
                    ["10", "Know your numbers before entering any loan negotiation. A lender quoting you 7.5% when you've already seen 6.8% elsewhere is a $18,000 difference on $200,000 over 20 years."],
                  ].map(([n, text]) => (
                    <div key={n} className="flex gap-3 text-[13px] text-slate-600">
                      <span className="font-black text-slate-400 flex-shrink-0
                                       w-5 text-center">{n}.</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FINAL CTA */}
            <div id="calculator">
              <CalculatorCTA variant="end" />
            </div>

            {/* Disclaimer */}
            <div className="mt-10 pt-6 border-t border-slate-100">
              <p className="text-[11px] text-slate-400 italic leading-relaxed">
                All payment calculations use the standard actuarial amortization method,
                consistent with CFPB (US), FCA (UK), FCAC (Canada), and ASIC (Australia)
                guidelines. Interest rate data sourced from Bankrate, Freddie Mac, and
                regional central bank publications as of May 2026. Rates change daily —
                always verify with your specific lender. This guide is for informational
                purposes only and does not constitute financial advice.
              </p>
              <p className="text-[11px] text-slate-400 mt-2">
                Last updated: May 2026
              </p>
            </div>

          </article>

          {/* ── SIDEBAR ──────────────────────────────────────────────────── */}
          <aside className="w-full lg:w-[260px] flex-shrink-0 space-y-5 lg:sticky lg:top-6">

            {/* Primary CTA */}
            <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-sm">
              <div className="px-5 py-4 text-white"
                style={{ background: "linear-gradient(135deg,#1d4ed8,#7c3aed)" }}>
                <Landmark size={18} className="mb-2 text-blue-200" />
                <p className="font-black text-[14px] leading-snug mb-1">
                  Free Loan Calculator
                </p>
                <p className="text-blue-200 text-[11px] leading-relaxed">
                  Monthly payment · Full amortization · Extra payment savings ·
                  Works for any loan worldwide.
                </p>
              </div>
              <Link href="/loan-calculator"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white
                           border-t border-blue-100 text-blue-700 font-black
                           text-[13px] hover:bg-blue-50 transition-colors group">
                Open Calculator
                <ArrowRight size={13}
                  className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Extra payment quick reference */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">
                Extra Payment Impact
              </p>
              <p className="text-[10px] text-slate-400 mb-3">
                $300K mortgage · 7% · 30 years
              </p>
              <div className="space-y-2">
                {[
                  ["$100/mo extra",  "$30,200 saved",  "−4.3 yrs"],
                  ["$200/mo extra",  "$74,000 saved",  "−6.9 yrs"],
                  ["$500/mo extra",  "$133,000 saved", "−11.5 yrs"],
                  ["$1,000/mo extra","$177,000 saved", "−15.8 yrs"],
                ].map(([extra, saved, time]) => (
                  <div key={extra}
                    className="flex items-center justify-between text-[11px]
                               border-b border-slate-50 pb-2 last:border-0">
                    <span className="text-slate-500 font-medium">{extra}</span>
                    <div className="text-right">
                      <span className="font-black text-emerald-700 block">{saved}</span>
                      <span className="text-blue-600 text-[10px]">{time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key rates */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">Rates (May 2026)</p>
              <div className="space-y-2.5">
                {[
                  { label: "🇺🇸 30-yr fixed",  value: "~6.39%" },
                  { label: "🇺🇸 15-yr fixed",  value: "~5.84%" },
                  { label: "🇬🇧 2-yr fixed",   value: "4.20–5.10%" },
                  { label: "🇨🇦 5-yr fixed",   value: "4.40–5.25%" },
                  { label: "🇦🇺 Variable",      value: "5.90–7.40%" },
                  { label: "🇮🇳 Home Loan",     value: "7.10–9.90%" },
                ].map((r) => (
                  <div key={r.label}
                    className="flex items-center justify-between text-[12px]
                               border-b border-slate-50 pb-2 last:border-0">
                    <span className="text-slate-500">{r.label}</span>
                    <span className="font-black text-slate-900">{r.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-slate-400 mt-3">
                Verify with your lender. Rates change daily.
              </p>
            </div>

            {/* Related calculators */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-3">Related Calculators</p>
              <div className="space-y-2">
                {[
                  { label: "Mortgage Calculator",          href: "/mortgage-calculator" },
                  { label: "Auto Loan Calculator",         href: "/auto-loan-calculator" },
                  { label: "Student Loan Calculator",      href: "/student-loan-calculator" },
                  { label: "Debt Payoff Calculator",       href: "/debt-payoff-calculator" },
                  { label: "Refinance Calculator",         href: "/refinance-calculator" },
                ].map((l) => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-1.5 text-[12px] text-blue-600
                               hover:underline">
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
                  { label: "Salary After Tax Guide 2026", href: "/blog/salary-after-tax-guide-2026" },
                  { label: "Rent Affordability Guide",    href: "/blog/rent-affordability-guide-2026" },
                  { label: "Self-Employment Tax Guide",   href: "/blog/self-employment-tax-guide-2026" },
                ].map((l) => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-1.5 text-[12px] text-blue-600
                               hover:underline">
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
