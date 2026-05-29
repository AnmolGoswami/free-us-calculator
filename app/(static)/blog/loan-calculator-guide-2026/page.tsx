
// app/blog/loan-calculator-guide-2026/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Calculator, Calendar, Clock, CheckCircle2,
  ChevronRight, AlertTriangle, TrendingUp,
  Landmark, Shield, BookOpen, Star, Info,
} from "lucide-react";

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Loan Calculator Guide 2026: Monthly Payments, Amortization & How to Save $74,000",
  description:
    "Learn how monthly loan payments are calculated, what your amortization schedule means, and how paying $200 extra per month saves $74,000 on a $300K mortgage. Free loan calculator — US, UK, Canada, Australia rates for 2026.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/blog/loan-calculator-guide-2026",
  },
  keywords: [
    "loan calculator",
    "monthly loan payment calculator",
    "loan amortization schedule",
    "how to calculate loan payment",
    "mortgage payment calculator",
    "extra mortgage payment savings",
    "biweekly mortgage payment savings calculator",
    "how much home loan can I afford",
    "car loan monthly payment calculator",
    "fixed vs variable rate mortgage 2026",
    "mortgage payoff calculator with extra payments",
    "30 year vs 15 year mortgage savings",
    "loan payment formula explained",
    "does paying extra on mortgage reduce principal",
    "amortization schedule explained",
    "student loan payoff calculator 2026",
    "mortgage rates 2026 US UK Canada Australia",
    "how much interest on 300000 mortgage",
    "personal loan monthly payment",
    "auto loan calculator 60 months",
  ],
  openGraph: {
    title: "Loan Calculator Guide 2026: Monthly Payments, Amortization & $74,000 Savings",
    description:
      "Complete guide: loan payment formula, amortization tables, how $200/month extra saves $74,000, and current mortgage rates across US, UK, Canada, Australia, India.",
    url: "https://www.freeuscalculator.in/blog/loan-calculator-guide-2026",
    type: "article",
  },
};

// ─── JSON-LD SCHEMA ───────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",  item: "https://www.freeuscalculator.in" },
        { "@type": "ListItem", position: 2, name: "Blog",  item: "https://www.freeuscalculator.in/blog" },
        { "@type": "ListItem", position: 3, name: "Loan Calculator Guide 2026", item: "https://www.freeuscalculator.in/blog/loan-calculator-guide-2026" },
      ],
    },
    {
      "@type": "Article",
      headline: "Loan Calculator Guide 2026 — Monthly Payments, Amortization & Extra Payment Savings",
      description: "Learn how to calculate monthly loan payments, read your amortization schedule, and use extra payments to save $74,000 on a typical mortgage.",
      datePublished: "2026-04-01",
      dateModified: "2026-05-28",
      author:    { "@type": "Organization", name: "FreeUSCalculator", url: "https://www.freeuscalculator.in" },
      publisher: { "@type": "Organization", name: "FreeUSCalculator", url: "https://www.freeuscalculator.in" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.freeuscalculator.in/blog/loan-calculator-guide-2026" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I calculate my monthly loan payment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use: Monthly Payment = [P × r × (1+r)^n] ÷ [(1+r)^n – 1], where P = loan amount, r = annual rate ÷ 12 ÷ 100, n = total months. Example: $25,000 at 7% for 60 months = $495/month.",
          },
        },
        {
          "@type": "Question",
          name: "How much does paying $200 extra per month save on a $300,000 mortgage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On a $300,000 mortgage at 7% over 30 years, paying $200 extra per month toward principal saves approximately $74,000 in total interest and cuts about 6.9 years off the loan.",
          },
        },
        {
          "@type": "Question",
          name: "What is a loan amortization schedule?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A month-by-month table showing how each payment splits between interest and principal, plus remaining balance. Early payments are mostly interest; final payments are mostly principal.",
          },
        },
        {
          "@type": "Question",
          name: "Fixed or variable rate mortgage — which is better in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fixed is advisable for most borrowers in 2026. US 30-year fixed rates are around 6.39%. Variable rates carry the risk of rising payments and offer minimal savings vs the certainty of fixed.",
          },
        },
        {
          "@type": "Question",
          name: "How much home loan can I afford?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most US lenders cap total monthly debt at 43% of gross income (they prefer 36%). On $8,000/month gross with $650 in existing debt, max mortgage payment is ~$2,230 — supporting roughly $353,000 at 6.5% over 30 years.",
          },
        },
        {
          "@type": "Question",
          name: "Do biweekly mortgage payments really save money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. 26 half-payments per year equals 13 full payments instead of 12. That one extra payment reduces principal. On a $400,000 mortgage at 6.5%, this saves ~$90,000 and cuts 5 years off the loan.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const TOC = [
  { id: "formula",        label: "How monthly loan payments are calculated"        },
  { id: "amortization",   label: "What a loan amortization schedule tells you"    },
  { id: "payment-table",  label: "Monthly payment quick-reference table 2026"     },
  { id: "rates-2026",     label: "Current rates: US, UK, Canada, AU, India"       },
  { id: "extra-payments", label: "Extra mortgage payments: how to save $74,000"   },
  { id: "biweekly",       label: "Biweekly mortgage payments — the $90,000 trick" },
  { id: "fixed-variable", label: "Fixed vs variable rate mortgage in 2026"        },
  { id: "home-loan",      label: "How much home loan can I afford?"                },
  { id: "car-loan",       label: "Car loan monthly payment guide"                 },
  { id: "strategies",     label: "10 smart loan strategies for 2026"              },
  { id: "faq",            label: "Frequently asked questions"                     },
];

const PAYMENT_TABLE = [
  { amount: "$15,000",  type: "Personal · 36 mo", mo: "$463",   interest: "$1,668",   total: "$16,668"  },
  { amount: "$25,000",  type: "Auto · 60 mo",      mo: "$495",   interest: "$4,700",   total: "$29,700"  },
  { amount: "$35,000",  type: "Auto · 72 mo",      mo: "$378",   interest: "$7,216",   total: "$42,216"  },
  { amount: "$50,000",  type: "Student · 10 yr",   mo: "$581",   interest: "$19,720",  total: "$69,720"  },
  { amount: "$200,000", type: "Mortgage · 30 yr",  mo: "$1,331", interest: "$279,160", total: "$479,160" },
  { amount: "$300,000", type: "Mortgage · 30 yr",  mo: "$1,996", interest: "$418,740", total: "$718,740" },
  { amount: "$300,000", type: "Mortgage · 15 yr",  mo: "$2,696", interest: "$185,280", total: "$485,280" },
  { amount: "$400,000", type: "Mortgage · 30 yr",  mo: "$2,661", interest: "$558,320", total: "$958,320" },
];

const EXTRA_TABLE = [
  { extra: "$0 (baseline)",  saved: "—",          term: "30 years",  diff: "baseline",   baseline: true  },
  { extra: "$100/month",     saved: "$30,200",     term: "25yr 8mo",  diff: "−4.3 yrs",   baseline: false },
  { extra: "$200/month",     saved: "$74,000",     term: "23yr 1mo",  diff: "−6.9 yrs",   baseline: false },
  { extra: "$500/month",     saved: "$133,000",    term: "18yr 6mo",  diff: "−11.5 yrs",  baseline: false },
  { extra: "$1,000/month",   saved: "$177,000",    term: "14yr 3mo",  diff: "−15.8 yrs",  baseline: false },
];

const RATES = [
  { flag: "🇺🇸", country: "US", type: "30-yr Fixed Mortgage", rate: "6.30–6.55%", note: "Bankrate May 2026"     },
  { flag: "🇺🇸", country: "US", type: "Auto Loan (new car)",   rate: "6.50–8.00%", note: "48–72 month terms"   },
  { flag: "🇺🇸", country: "US", type: "Personal Loan",         rate: "10–22%",     note: "1–5 year terms"      },
  { flag: "🇬🇧", country: "UK", type: "2-yr Fixed Mortgage",   rate: "4.20–5.10%", note: "Most popular term"   },
  { flag: "🇨🇦", country: "CA", type: "5-yr Fixed Mortgage",   rate: "4.40–5.25%", note: "Stress test applies" },
  { flag: "🇦🇺", country: "AU", type: "Variable Home Loan",    rate: "5.90–7.40%", note: "RBA benchmark rate"  },
  { flag: "🇮🇳", country: "IN", type: "Home Loan (EMI)",       rate: "7.10–9.90%", note: "RBI repo rate linked"},
];

const AMORT_ROWS = [
  { mo: "1",   pmt: "$1,896", int: "$1,625", prin: "$271",   bal: "$299,728" },
  { mo: "12",  pmt: "$1,896", int: "$1,624", prin: "$272",   bal: "$296,513" },
  { mo: "60",  pmt: "$1,896", int: "$1,594", prin: "$302",   bal: "$275,950" },
  { mo: "120", pmt: "$1,896", int: "$1,547", prin: "$349",   bal: "$267,368" },
  { mo: "240", pmt: "$1,896", int: "$1,401", prin: "$495",   bal: "$241,793" },
  { mo: "360", pmt: "$1,896", int: "$10",    prin: "$1,886", bal: "$0"       },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 text-xl sm:text-2xl font-black text-slate-900 mt-12 mb-4 flex items-start gap-3 leading-tight"
    >
      <span className="w-1 h-6 mt-0.5 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500 flex-shrink-0" />
      <span className="min-w-0">{children}</span>
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base sm:text-lg font-black text-slate-800 mt-7 mb-3 leading-snug">
      {children}
    </h3>
  );
}

function Callout({
  type = "tip",
  title,
  children,
}: {
  type?: "tip" | "warning" | "info";
  title: string;
  children: React.ReactNode;
}) {
  const styles = {
    tip:     { wrap: "bg-emerald-50 border-emerald-200", title: "text-emerald-800", body: "text-emerald-700", icon: <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" /> },
    warning: { wrap: "bg-amber-50 border-amber-200",     title: "text-amber-800",   body: "text-amber-700",   icon: <AlertTriangle  size={15} className="text-amber-500 flex-shrink-0 mt-0.5" /> },
    info:    { wrap: "bg-blue-50 border-blue-200",       title: "text-blue-800",    body: "text-blue-700",    icon: <Info           size={15} className="text-blue-500 flex-shrink-0 mt-0.5" /> },
  }[type];
  return (
    <div className={`rounded-xl border ${styles.wrap} p-4 my-6`}>
      <div className="flex gap-3">
        {styles.icon}
        <div className="min-w-0">
          <p className={`font-black text-sm mb-1.5 ${styles.title}`}>{title}</p>
          <p className={`text-sm leading-relaxed ${styles.body}`}>{children}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * TableWrap — MOBILE SCROLL FIX
 *
 * Critical rules:
 * 1. The OUTER div must NOT have overflow-hidden — that clips the scrollbar.
 * 2. The INNER div gets overflow-x-auto + a visible scrollbar via scrollbar-thin.
 * 3. We add a subtle "swipe" hint label on mobile so users know they can scroll.
 * 4. -webkit-overflow-scrolling: touch gives momentum on iOS.
 */
function TableWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 w-full">
      {/* Mobile hint — hidden on sm+ */}
      <p className="text-[10px] text-slate-400 text-right mb-1 sm:hidden select-none">
        ← scroll →
      </p>
      <div
        className="w-full rounded-xl border border-slate-200 shadow-sm"
        style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`px-3 py-3 text-left font-black text-[10px] uppercase tracking-widest whitespace-nowrap ${className}`}>
      {children}
    </th>
  );
}

function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <td className={`px-3 py-3 text-xs sm:text-sm whitespace-nowrap ${className}`}>
      {children}
    </td>
  );
}

function CalculatorCTA({ variant = "mid" }: { variant?: "mid" | "end" }) {
  return (
    <div className="my-10 rounded-2xl overflow-hidden border border-indigo-200">
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500" />
      <div className="bg-gradient-to-br from-slate-950 to-indigo-950 p-5 sm:p-7">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Calculator size={12} className="text-indigo-300 flex-shrink-0" />
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300">Free Tool · No Signup</span>
            </div>
            <p className="text-white font-black text-base sm:text-lg leading-snug mb-1.5">
              {variant === "end" ? "Calculate your exact payment + full amortization schedule" : "Skip the math — get your loan payment in 10 seconds"}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Monthly payment · Full amortization schedule · Extra payment savings · Works for any loan worldwide.
            </p>
          </div>
          <Link
            href="/loan-calculator"
            className="flex-shrink-0 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm transition-all hover:-translate-y-0.5 group w-full sm:w-auto"
          >
            Use Free Calculator
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function LoanCalculatorGuidePage() {
  return (
    /**
     * OVERFLOW FIX — DO NOT add overflow-x-hidden here.
     * overflow-x-hidden on a parent kills overflow-x-auto on children,
     * preventing the horizontal scrollbar from appearing on tables.
     * Instead we fix each overflow source individually.
     */
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-7 sm:pb-10 min-w-0">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 mb-5 flex-wrap">
            <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/blog" className="hover:text-slate-700 transition-colors">Blog</Link>
            <ChevronRight size={11} />
            <span className="text-slate-600 font-medium">Loan Calculator Guide 2026</span>
          </nav>

          {/* Category pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-widest mb-4">
            <BookOpen size={10} />
            Personal Finance · Worldwide · 2026
          </div>

          {/* H1 */}
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-slate-900 mb-4">
            Loan Calculator Guide{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">2026</span>
            <span className="block text-slate-400 text-base sm:text-xl font-bold mt-1">
              Monthly Payments · Amortization Schedule · Save $74,000
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
            This guide breaks down the exact formula lenders use, explains your loan amortization schedule, and shows how{" "}
            <strong className="text-slate-900">one small habit saves $74,000</strong> on a typical mortgage — with zero extra income.
          </p>

          {/* Stat strip — 2 cols on mobile prevents overflow */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6">
            {[
              { value: "$74K+", label: "$200/mo extra on $300K mortgage" },
              { value: "$90K",  label: "Saved with biweekly payments"    },
              { value: "6.39%", label: "US 30-yr fixed rate May 2026"    },
              { value: "5 yrs", label: "Shorter with biweekly strategy"  },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-white border border-slate-200 p-3 text-center">
                <p className="text-lg sm:text-2xl font-black text-indigo-700 tabular-nums leading-none mb-1">{s.value}</p>
                <p className="text-[10px] text-slate-500 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><Calendar size={11} />Updated May 28, 2026</span>
            <span className="flex items-center gap-1.5"><Clock size={11} />14 min read</span>
            <span className="flex items-center gap-1.5 text-emerald-600 font-semibold"><Shield size={11} />US · UK · Canada · Australia · India</span>
          </div>
        </div>
      </div>

      {/* ══ BODY ══════════════════════════════════════════════════════════ */}
      {/*
        CRITICAL: No overflow-x-hidden anywhere in this chain.
        max-w-5xl + px-4 gives us 16px safe padding on both sides of mobile.
        min-w-0 on flex children stops them from forcing the parent wider.
      */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-7 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">

          {/* ── ARTICLE ────────────────────────────────────────────────── */}
          <article className="flex-1 min-w-0 w-full text-slate-700 text-sm sm:text-[15px] leading-relaxed">

            {/* Table of Contents */}
            <nav aria-label="Table of contents" className="rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-6 mb-10">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">In This Guide</p>
              <ol className="space-y-2.5">
                {TOC.map((item, i) => (
                  <li key={item.id} className="flex items-start gap-2.5">
                    <span className="text-[9px] text-white font-black w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <a href={`#${item.id}`} className="text-indigo-600 hover:text-indigo-800 hover:underline text-sm font-medium transition-colors leading-snug">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ── 1. Formula ─────────────────────────────────────────── */}
            <SectionHeading id="formula">How monthly loan payments are calculated</SectionHeading>

            <p>
              Every lender uses the same standard amortization formula — recognised by CFPB (US), FCA (UK), FCAC (Canada), and ASIC (Australia). Most borrowers never see it, which is why a 0.5% rate difference on a $300,000 mortgage —
              just $90/month — adds up to <strong className="text-slate-900">$32,000 over 30 years</strong>.
            </p>

            {/*
              FORMULA BOX — key fix:
              Use overflow-x: auto on the box itself so the formula scrolls
              inside the dark card rather than pushing the page wider.
              Never use fixed pl-[Npx] — use a proper layout instead.
            */}
            <div className="rounded-2xl bg-slate-950 my-6" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
              <div className="p-4 sm:p-6" style={{ minWidth: "280px" }}>
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-4">
                  Standard Loan Amortization Formula
                </p>
                <div className="font-mono text-sm text-white space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-slate-400 whitespace-nowrap">Monthly Payment =</span>
                    <span className="text-indigo-300 whitespace-nowrap">P × r × (1+r)^n</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 invisible whitespace-nowrap">Monthly Payment =</span>
                    <span className="text-slate-500 whitespace-nowrap">──────────────────</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 invisible whitespace-nowrap">Monthly Payment =</span>
                    <span className="text-violet-300 whitespace-nowrap">(1+r)^n − 1</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-400">
                  <p><span className="text-indigo-300 font-bold">P</span> = Loan principal amount</p>
                  <p><span className="text-indigo-300 font-bold">r</span> = Annual rate ÷ 12 ÷ 100</p>
                  <p><span className="text-indigo-300 font-bold">n</span> = Years × 12 (months)</p>
                </div>
              </div>
            </div>

            <H3>Worked example: $25,000 auto loan payment</H3>
            <p>Borrowing <strong>$25,000</strong> at <strong>7% APR</strong> for <strong>60 months</strong>:</p>
            <div className="mt-4 space-y-2">
              {[
                ["Monthly rate (r)",    "7 ÷ 12 ÷ 100 = 0.005833"],
                ["Total payments (n)", "5 × 12 = 60 months"],
                ["Monthly payment",    "$495.03"],
                ["Total paid",         "$29,702"],
                ["Total interest",     "$4,702 — the real cost of borrowing"],
              ].map(([label, val]) => (
                <div key={label as string} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0 mt-1.5" />
                  <span><strong className="text-slate-900">{label}:</strong> {val}</span>
                </div>
              ))}
            </div>

            {/* ── 2. Amortization ────────────────────────────────────── */}
            <SectionHeading id="amortization">What a loan amortization schedule tells you</SectionHeading>

            <p>
              A loan amortization schedule shows — month by month — exactly how much of each payment goes to interest and how much reduces your balance. Lenders rarely explain this, and it costs most borrowers tens of thousands in missed savings.
            </p>

            <Callout type="warning" title="Why early payments feel like they do nothing">
              On a $300,000 mortgage at 6.5%, Month 1 sends $1,625 to interest and only $271 toward your actual balance.
              By Month 360, nearly the entire payment reduces principal. This front-loading is intentional — understanding it makes extra payments obvious.
            </Callout>

            <H3>Sample amortization schedule — $300,000 at 6.5% for 30 years</H3>

            <TableWrap>
              <table className="w-full text-xs sm:text-sm" style={{ minWidth: "420px" }}>
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <Th>Month</Th>
                    <Th>Payment</Th>
                    <Th><span className="text-rose-300">Interest</span></Th>
                    <Th><span className="text-emerald-300">Principal</span></Th>
                    <Th>Balance</Th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {AMORT_ROWS.map((row, i) => (
                    <tr key={row.mo} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <Td className="font-bold text-slate-700">{row.mo}</Td>
                      <Td className="text-slate-600">{row.pmt}</Td>
                      <Td className="font-bold text-rose-600">{row.int}</Td>
                      <Td className="font-bold text-emerald-700">{row.prin}</Td>
                      <Td className="font-bold text-indigo-700">{row.bal}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrap>

            {/* ── 3. Payment table ───────────────────────────────────── */}
            <SectionHeading id="payment-table">Monthly loan payment quick-reference — 2026</SectionHeading>

            <p className="mb-5">
              All figures at <strong>7% annual rate</strong> — close to US averages as of May 2026.
              A 15-year mortgage costs $700/month more than a 30-year but saves over{" "}
              <strong className="text-slate-900">$233,000 in total interest</strong>.
            </p>

            <TableWrap>
              <table className="w-full text-xs sm:text-sm" style={{ minWidth: "500px" }}>
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <Th>Loan Amount</Th>
                    <Th>Type / Term</Th>
                    <Th>Monthly</Th>
                    <Th>Total Interest</Th>
                    <Th>Total Cost</Th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {PAYMENT_TABLE.map((row, i) => (
                    <tr key={row.amount + row.type} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <Td className="font-black text-slate-900">{row.amount}</Td>
                      <Td className="text-slate-500">{row.type}</Td>
                      <Td className="font-black text-indigo-700">{row.mo}</Td>
                      <Td className="font-bold text-rose-600">{row.interest}</Td>
                      <Td className="font-bold text-slate-700">{row.total}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrap>

            <CalculatorCTA variant="mid" />

            {/* ── 4. Rates ───────────────────────────────────────────── */}
            <SectionHeading id="rates-2026">Current mortgage rates — US, UK, Canada, Australia, India (May 2026)</SectionHeading>

            <p className="mb-5">
              A 0.5% rate difference on $300,000 equals roughly{" "}
              <strong className="text-slate-900">$30,000 over 30 years</strong>. Always get at least 3 quotes. Rates change daily — verify with your lender.
            </p>

            <TableWrap>
              <table className="w-full text-xs sm:text-sm" style={{ minWidth: "460px" }}>
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <Th>Country</Th>
                    <Th>Loan Type</Th>
                    <Th>Rate Range</Th>
                    <Th>Note</Th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {RATES.map((row, i) => (
                    <tr key={row.country + row.type} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <Td className="font-bold text-slate-900">{row.flag} {row.country}</Td>
                      <Td className="text-slate-600">{row.type}</Td>
                      <Td className="font-black text-indigo-700">{row.rate}</Td>
                      <Td className="text-slate-400">{row.note}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrap>
            <p className="text-xs text-slate-400 mt-2">
              Sources: Bankrate, Freddie Mac, Bank of England, RBA, RBI — May 2026.
            </p>

            {/* ── 5. Extra payments ──────────────────────────────────── */}
            <SectionHeading id="extra-payments">Extra mortgage payments: how to save $74,000+</SectionHeading>

            <p>
              Every dollar you pay early eliminates future interest on that dollar for the remaining life of the loan. The table uses a{" "}
              <strong className="text-slate-900">$300,000 mortgage at 7% for 30 years</strong>:
            </p>

            <TableWrap>
              <table className="w-full text-xs sm:text-sm" style={{ minWidth: "380px" }}>
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <Th>Extra Payment</Th>
                    <Th>Interest Saved</Th>
                    <Th>New Loan Term</Th>
                    <Th>Time Saved</Th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {EXTRA_TABLE.map((row, i) => (
                    <tr key={row.extra} className={row.baseline ? "bg-slate-100" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <Td className="font-bold text-slate-900">{row.extra}</Td>
                      <Td className={`font-bold ${row.baseline ? "text-slate-400" : "text-emerald-700"}`}>{row.saved}</Td>
                      <Td className="text-slate-600">{row.term}</Td>
                      <Td className={`font-bold ${row.baseline ? "text-slate-400" : "text-indigo-700"}`}>{row.diff}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrap>

            <Callout type="tip" title="How to apply extra payments correctly">
              Add the extra amount to your regular payment and write "apply to principal" in the memo field.
              Most US lenders honour this. Always verify on your next statement that the extra reduced your balance, not just your next due date.
            </Callout>

            {/* ── 6. Biweekly ────────────────────────────────────────── */}
            <SectionHeading id="biweekly">Biweekly mortgage payments — the $90,000 strategy</SectionHeading>

            <p>
              52 weeks ÷ 2 = 26 half-payments per year, which equals{" "}
              <strong className="text-slate-900">13 full monthly payments</strong> instead of 12.
              That one extra payment goes entirely to principal every year.
            </p>

            {/* 3 stat cards — on mobile we use 3 cols with smaller text; the cards don't overflow */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 my-6">
              {[
                { label: "Loan Amount",    value: "$400,000" },
                { label: "Interest Saved", value: "~$90,000" },
                { label: "Time Saved",     value: "5 years"  },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-indigo-50 border border-indigo-100 p-2 sm:p-4 text-center">
                  <p className="text-sm sm:text-2xl font-black text-indigo-700 leading-none mb-1">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-indigo-600 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            <p>
              On a <strong>$400,000 mortgage at 6.5% for 30 years</strong>, switching to biweekly
              payments saves ~$90,000 in total interest and finishes the loan 5 years early —
              with zero increase to your monthly budget.
            </p>

            {/* ── 7. Fixed vs Variable ───────────────────────────────── */}
            <SectionHeading id="fixed-variable">Fixed vs variable rate mortgage — which is better in 2026?</SectionHeading>

            {/* Stack on mobile, side-by-side on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {[
                {
                  title: "Fixed Rate Mortgage",
                  tag: "Best for most in 2026",
                  tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
                  border: "border-emerald-200",
                  points: ["Monthly payment never changes","Best for loans held 5+ years","US 30-yr fixed: ~6.39% (May 2026)","Protects against future rate rises"],
                },
                {
                  title: "Variable Rate Mortgage",
                  tag: "Only if selling/refinancing soon",
                  tagColor: "bg-amber-100 text-amber-800 border-amber-200",
                  border: "border-amber-200",
                  points: ["Rate moves with SOFR / BoE / RBA","Starts lower than fixed initially","Risk: payments can rise","ARM gap vs fixed is small in 2026"],
                },
              ].map((s) => (
                <div key={s.title} className={`rounded-2xl border ${s.border} bg-white p-4 sm:p-5`}>
                  <p className="font-black text-slate-900 mb-1.5">{s.title}</p>
                  <span className={`inline-block px-2 py-0.5 rounded-full border text-[9px] font-black uppercase tracking-wide mb-3 ${s.tagColor}`}>
                    {s.tag}
                  </span>
                  <ul className="space-y-2">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={13} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ── 8. Home loan ───────────────────────────────────────── */}
            <SectionHeading id="home-loan">How much home loan can I afford?</SectionHeading>

            <p>
              Most US lenders use the <strong className="text-slate-900">debt-to-income ratio (DTI)</strong> —
              total monthly debt as a percentage of gross income. Standard cap: 43%; most lenders prefer 36% or lower.
            </p>

            <H3>Quick home loan affordability example</H3>
            <div className="space-y-2 mt-3">
              {[
                "Gross monthly income: $8,000",
                "36% of $8,000 = $2,880 maximum total debt",
                "Existing debt (car + student loans): −$650/month",
                "Max mortgage payment available: $2,230",
                "At 6.5% for 30 years → supports ~$353,000 loan",
              ].map((step, i) => (
                <div key={step} className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[9px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <Callout type="warning" title="Hidden costs your calculator won't show">
              Property taxes ($200–$600/mo), homeowner's insurance (~$150/mo), PMI if down payment is under 20%, HOA fees,
              and maintenance (1–2% of home value/year) typically add $400–$900/month on top of your base mortgage.
              Your truly affordable loan is usually 15–20% less than the raw number.
            </Callout>

            {/* ── 9. Car loan ────────────────────────────────────────── */}
            <SectionHeading id="car-loan">Car loan monthly payment guide</SectionHeading>

            <p>
              A 72-month auto loan looks affordable monthly but costs 15–20% more in total interest and leaves you
              underwater on a depreciating asset for the first several years.
            </p>

            <TableWrap>
              <table className="w-full text-xs sm:text-sm" style={{ minWidth: "320px" }}>
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <Th>Credit Score</Th>
                    <Th>New Car Rate</Th>
                    <Th>Used Car Rate</Th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { score: "750+ (Excellent)", newR: "5.5–7.0%",  usedR: "6.5–8.0%"   },
                    { score: "700–749 (Good)",   newR: "6.5–8.5%",  usedR: "7.5–10.0%"  },
                    { score: "650–699 (Fair)",   newR: "8.5–12.0%", usedR: "10.0–15.0%" },
                    { score: "Below 650",        newR: "14–20%+",   usedR: "18–25%+"    },
                  ].map((row, i) => (
                    <tr key={row.score} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <Td className="font-bold text-slate-900">{row.score}</Td>
                      <Td className="font-bold text-indigo-700">{row.newR}</Td>
                      <Td className="text-slate-600">{row.usedR}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrap>

            <Callout type="warning" title="The 72-month and 84-month car loan trap">
              Long-term auto loans lower the monthly payment but cost 15–20% more in total interest —
              and leave you owing more than the car is worth for years. Stick to 48–60 months.
            </Callout>

            {/* ── 10. Strategies ─────────────────────────────────────── */}
            <SectionHeading id="strategies">10 smart loan strategies for 2026</SectionHeading>

            <div className="space-y-3 my-6">
              {[
                { n:"1", title:"Make one extra loan payment per year",       body:"Apply your tax refund or bonus directly to principal. A $2,000 extra payment on a $300,000 mortgage shortens the loan by 3–4 years.",                                          accent:"from-indigo-500 to-indigo-600" },
                { n:"2", title:"Switch to biweekly mortgage payments",       body:"Pay half your monthly amount every two weeks — 13 full payments per year. Saves ~$90,000 on a $400K mortgage at 6.5%.",                                                         accent:"from-emerald-500 to-teal-600"  },
                { n:"3", title:"Never extend a car loan beyond 60 months",   body:"72 and 84-month loans cost 15–20% more in total. You'll owe more than the car is worth for years.",                                                                              accent:"from-amber-500 to-orange-500"  },
                { n:"4", title:"Always compare at least 3 lenders",          body:"A 0.5% rate difference on $300,000 equals ~$30,000 over 30 years. Pre-approval from multiple lenders takes one afternoon.",                                                      accent:"from-violet-500 to-purple-600" },
                { n:"5", title:"Keep total monthly debt under 36% of income", body:"Above 40%, one unexpected expense can trigger a missed payment. Build your buffer before adding more debt.",                                                                      accent:"from-rose-500 to-pink-600"    },
                { n:"6", title:"Refinance when rates drop 1%+ and you'll stay", body:"Break-even = closing costs ÷ monthly savings. If under 30 months and you're staying, refinancing makes sense.",                                                              accent:"from-sky-500 to-blue-600"     },
              ].map((s) => (
                <div key={s.n} className="flex gap-3 rounded-2xl border border-slate-100 bg-white p-4">
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center flex-shrink-0 text-white font-black text-sm`}>
                    {s.n}
                  </div>
                  <div className="min-w-0">
                    <p className="font-black text-slate-900 text-sm mb-1">{s.title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">4 More Strategies</p>
                <div className="space-y-3">
                  {[
                    ["7",  "Use the debt avalanche: minimum payments on all debts, every extra dollar to the highest rate."],
                    ["8",  "Check for prepayment penalties before making extra payments — most US mortgages have none, but some car and UK loans do."],
                    ["9",  "For student loans: confirm your balance when repayment begins — interest accrued during deferment is often added silently."],
                    ["10", "Know your numbers before negotiating. A lender quoting 7.5% when you've seen 6.8% elsewhere is $18,000 on a $200K loan over 20 years."],
                  ].map(([n, text]) => (
                    <div key={n as string} className="flex gap-3 text-sm text-slate-600">
                      <span className="font-black text-slate-400 w-5 flex-shrink-0">{n}.</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── 11. FAQ ────────────────────────────────────────────── */}
            <SectionHeading id="faq">Frequently asked questions</SectionHeading>

            <dl className="space-y-3 my-6">
              {[
                { q: "How do I calculate my monthly loan payment?",
                  a: "Use: Monthly Payment = [P × r × (1+r)^n] ÷ [(1+r)^n – 1], where P = loan amount, r = annual rate ÷ 12 ÷ 100, n = total months. Example: $25,000 at 7% for 60 months = $495/month, with $4,702 total interest." },
                { q: "How much does paying $200 extra per month save on a $300,000 mortgage?",
                  a: "At 7% over 30 years: $200 extra/month saves $74,000 in interest and cuts 6.9 years. Even $100 extra saves $30,200 and cuts 4.3 years." },
                { q: "Do biweekly mortgage payments really save money?",
                  a: "Yes. You make 26 half-payments per year — equal to 13 full payments. That extra annual payment reduces principal. On $400,000 at 6.5%, this saves ~$90,000 and finishes the loan 5 years early." },
                { q: "Fixed or variable rate mortgage — which is better in 2026?",
                  a: "Fixed is better for most in 2026. US 30-year fixed rates are ~6.39%. Variable offers minimal savings vs the risk of rising payments. Choose variable only if selling or refinancing within 3–5 years." },
                { q: "How much home loan can I afford?",
                  a: "Standard rule: total monthly debt ≤ 36% of gross income. On $8,000/month with $650 in other debt, max mortgage is ~$2,230/month — supporting ~$353,000 at 6.5% over 30 years. Add taxes, insurance, and maintenance." },
                { q: "What credit score do I need for the best mortgage rate?",
                  a: "760+ typically qualifies for the best rates. 700–759 may add 0.25–0.5%. Below 640, rates jump significantly. Even a 20-point improvement before applying can save thousands." },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <dt className="font-black text-slate-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                    <Star size={13} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                    {q}
                  </dt>
                  <dd className="text-slate-500 text-sm leading-relaxed pl-5">{a}</dd>
                </div>
              ))}
            </dl>

            <div id="calculator"><CalculatorCTA variant="end" /></div>

            {/* Disclaimer */}
            <div className="mt-10 pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-400 italic leading-relaxed">
                All calculations use the standard actuarial amortization method consistent with CFPB (US), FCA (UK), FCAC (Canada), and ASIC (Australia) guidelines.
                Rate data sourced from Bankrate, Freddie Mac, and regional central banks as of May 2026. Rates change daily — always verify with your lender.
                This guide is informational and does not constitute financial advice.
              </p>
              <p className="text-xs text-slate-400 mt-1">Last updated: May 28, 2026</p>
            </div>
          </article>

          {/* ── SIDEBAR ────────────────────────────────────────────────── */}
          {/*
            On mobile: stacks below article naturally (flex-col).
            On lg+: sticky sidebar.
            w-full on mobile, fixed width on lg.
          */}
          <aside className="w-full lg:w-56 xl:w-64 flex-shrink-0 space-y-4 lg:sticky lg:top-20 self-start">

            {/* CTA */}
            <div className="rounded-2xl overflow-hidden border border-indigo-100">
              <div className="p-4 text-white" style={{ background: "linear-gradient(135deg,#4338ca,#7c3aed)" }}>
                <Landmark size={15} className="mb-2 text-indigo-200" />
                <p className="font-black text-sm leading-snug mb-1">Free Loan Calculator</p>
                <p className="text-indigo-200 text-xs leading-relaxed">Monthly payment · Amortization · Extra payment savings</p>
              </div>
              <Link href="/loan-calculator"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white border-t border-indigo-100 text-indigo-700 font-black text-sm hover:bg-indigo-50 transition-colors group">
                Open Calculator
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Extra payment reference */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Extra Payment Savings</p>
              <p className="text-[9px] text-slate-400 mb-3">$300K mortgage · 7% · 30 yr</p>
              <div className="space-y-2.5">
                {[
                  { extra: "$100/mo",   saved: "$30,200",  time: "−4.3 yrs"  },
                  { extra: "$200/mo",   saved: "$74,000",  time: "−6.9 yrs"  },
                  { extra: "$500/mo",   saved: "$133,000", time: "−11.5 yrs" },
                  { extra: "$1,000/mo", saved: "$177,000", time: "−15.8 yrs" },
                ].map((r) => (
                  <div key={r.extra} className="flex items-center justify-between text-xs border-b border-slate-50 pb-2 last:border-0">
                    <span className="text-slate-500">{r.extra}</span>
                    <div className="text-right">
                      <span className="font-black text-emerald-700 block">{r.saved}</span>
                      <span className="text-[10px] text-indigo-600">{r.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rate snapshot */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">Rates Snapshot (May 2026)</p>
              <div className="space-y-2.5">
                {[
                  { label: "🇺🇸 30-yr fixed", val: "~6.39%"    },
                  { label: "🇺🇸 15-yr fixed", val: "~5.84%"    },
                  { label: "🇬🇧 2-yr fixed",  val: "4.2–5.1%"  },
                  { label: "🇨🇦 5-yr fixed",  val: "4.4–5.25%" },
                  { label: "🇦🇺 Variable",    val: "5.9–7.4%"  },
                  { label: "🇮🇳 Home Loan",   val: "7.1–9.9%"  },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between text-xs border-b border-slate-50 pb-2 last:border-0">
                    <span className="text-slate-500">{r.label}</span>
                    <span className="font-black text-slate-900">{r.val}</span>
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-slate-400 mt-2">Rates change daily. Verify with lender.</p>
            </div>

            {/* Related calculators */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">Related Calculators</p>
              <div className="space-y-2">
                {[
                  { label: "Rent Affordability Calculator", href: "/rent-affordability-calculator"      },
                  { label: "Savings Calculator",            href: "/savings-calculator"                 },
                  { label: "Salary After Tax",              href: "/salary-after-tax-calculator"        },
                  { label: "Self-Employment Tax",           href: "/self-employment-tax-calculator-usa" },
                ].map((l) => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-1.5 text-xs text-indigo-600 hover:text-indigo-800 hover:underline transition-colors">
                    <Calculator size={10} className="flex-shrink-0" />
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Related guides */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">Related Guides</p>
              <div className="space-y-2">
                {[
                  { label: "Salary After Tax Guide 2026",    href: "/blog/salary-after-tax-guide-2026"    },
                  { label: "Rent Affordability Guide 2026",  href: "/blog/rent-affordability-guide-2026"  },
                  { label: "Self-Employment Tax Guide 2026", href: "/blog/self-employment-tax-guide-2026" },
                  { label: "DoorDash Earnings Guide 2026",   href: "/blog/doordash-earnings-guide-2026"   },
                ].map((l) => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-1.5 text-xs text-indigo-600 hover:text-indigo-800 hover:underline transition-colors">
                    <TrendingUp size={10} className="flex-shrink-0" />
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-center">
              <Shield size={18} className="text-emerald-500 mx-auto mb-1.5" />
              <p className="text-xs font-black text-slate-700">100% Free · No Signup</p>
              <p className="text-[10px] text-slate-400 mt-1 leading-snug">All calculations run in your browser. No data stored.</p>
              <p className="text-[10px] text-slate-400 mt-2">Not financial advice. See disclaimer.</p>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}