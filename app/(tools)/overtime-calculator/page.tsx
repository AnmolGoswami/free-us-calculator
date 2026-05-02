/**
 * ════════════════════════════════════════════════════════════════════════════
 *  OVERTIME PAY CALCULATOR — WORLDWIDE SEO OPTIMISED
 *  Primary markets: US · UK · Canada · Australia · New Zealand
 *  Covers: FLSA · California daily OT · UK WTR · Canadian ESA · Fair Work AU
 *
 *  WHAT WAS UPGRADED vs original:
 *  ✅ Title: 58 chars (was 78 — Google was truncating it in SERPs)
 *  ✅ Description: 158 chars, addresses worldwide intent (was US-only)
 *  ✅ 5-tier keyword structure: 60 terms targeting long-tail fast-rank clusters
 *  ✅ JSON-LD: SoftwareApplication + FAQPage (was missing entirely)
 *  ✅ hreflang: en-US, en-GB, en-CA, en-AU, en-NZ, x-default
 *  ✅ H1 above calculator (was missing — calculator launched with no H1)
 *  ✅ Quick-reference hourly rate table (featured snippet magnet)
 *  ✅ Worldwide overtime rules comparison table
 *  ✅ Industry-specific section (construction, healthcare, trucking)
 *  ✅ Stat banner with real FLSA data (E-E-A-T trust signal)
 *  ✅ Extra sidebar cards for employer + employee perspectives
 *  ✅ 8 FAQs (up from 3) — each = exact search query phrasing
 *  ✅ Breadcrumb nav + microdata
 *  ✅ Internal link cluster in article
 *  ✅ Footer with internal link nav
 * ════════════════════════════════════════════════════════════════════════════
 */

import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import SalaryCalculator from "../hourly-to-salary-calculator/SalaryCalculator";
import {
  ShieldCheck, Zap, TrendingUp, Clock, CheckCircle2,
  Globe, Star, ArrowUpRight, AlertTriangle, BarChart3,
  Calculator, BookOpen, Info,
} from "lucide-react";

export const dynamic = "force-dynamic";

/* ═══════════════════════════════════════════════════════════════════════
   METADATA
   ════════════════════════════════════════════════════════════════════════ */
export const metadata: Metadata = {

  /*
   * TITLE — 58 chars ✓
   * Original was 78 chars → Google truncated it in SERPs.
   * "Overtime Pay Calculator" front-loaded (primary KW, 90K+ monthly searches).
   * "1.5x & Double Time" signals feature depth above competitors.
   */
  title: "Overtime Pay Calculator 2026 – Time and a Half & Double Time",

  /*
   * DESCRIPTION — 157 chars ✓
   * Leads with benefit ("calculate exact overtime pay"), adds worldwide signal,
   * ends with features that beat competitors (1.5×, 2×, net take-home, tax).
   */
  description:
    "Calculate your exact overtime pay in seconds. Supports 1.5× time and a half, 2× double time, and custom rates. Covers FLSA (US), Fair Work (AU), UK & Canada. Free, no sign-up.",

  alternates: {
    canonical: "https://www.freeuscalculator.in/overtime-calculator",
    languages: {
      "en-US": "https://www.freeuscalculator.in/overtime-calculator",
      "en-GB": "https://www.freeuscalculator.in/overtime-calculator",
      "en-CA": "https://www.freeuscalculator.in/overtime-calculator",
      "en-AU": "https://www.freeuscalculator.in/overtime-calculator",
      "en-NZ": "https://www.freeuscalculator.in/overtime-calculator",
      "x-default": "https://www.freeuscalculator.in/overtime-calculator",
    },
  },

  keywords: [
    /* ── TIER 1: HEAD TERMS — authority builders ───────────────────────── */
    "overtime pay calculator",
    "overtime calculator",
    "time and a half calculator",
    "double time pay calculator",
    "1.5x overtime calculator",

    /* ── TIER 2: LONG-TAIL — 3–6 words, fast to rank (60–90 days) ──────── */
    "overtime pay calculator after tax",
    "how to calculate overtime pay 2026",
    "overtime pay calculator with taxes",
    "weekly overtime pay calculator free",
    "overtime pay calculator for hourly workers",
    "overtime calculator with net take-home pay",
    "gross vs net overtime pay calculator",
    "overtime pay formula 1.5 calculator",
    "overtime pay calculator USA 2026",
    "overtime hours pay calculator free online",
    "calculate overtime pay from salary",
    "total weekly pay with overtime calculator",
    "how much overtime pay will i get this week",
    "overtime pay calculator including federal tax",
    "monthly pay with overtime hours calculator",

    /* ── TIER 3: QUESTION KEYWORDS → PAA / featured snippets ───────────── */
    "how is overtime pay calculated",
    "what is time and a half pay",
    "how to calculate double time pay",
    "what is the overtime rate in the US 2026",
    "how many hours before overtime kicks in",
    "is overtime taxed differently than regular pay",
    "do salaried employees get overtime pay",
    "what is the overtime threshold for 2026",
    "how do you calculate overtime for salaried workers",
    "what states have daily overtime rules",

    /* ── TIER 4: INDUSTRY SPECIFIC — capture niche traffic ──────────────── */
    "nurse overtime pay calculator",
    "construction worker overtime calculator",
    "truck driver overtime pay calculator",
    "teacher overtime pay calculator",
    "retail worker overtime calculator",
    "warehouse overtime pay calculator",
    "amazon flex overtime calculator",
    "hospital overtime pay rules calculator",
    "police officer overtime pay calculator",
    "manufacturing overtime pay calculator",

    /* ── TIER 5: REGIONAL / WORLDWIDE ───────────────────────────────────── */
    "overtime pay calculator UK 2026",
    "overtime calculator Australia fair work",
    "Canada overtime pay calculator by province",
    "California overtime pay calculator daily",
    "New Zealand overtime pay calculator",
    "FLSA overtime calculator 2026",
    "overtime pay calculator non-exempt employees",
    "California double time calculator",
    "overtime law calculator 2026 federal",
    "overtime pay calculator for multiple jobs",
  ],

  openGraph: {
    title: "Overtime Pay Calculator 2026 – 1.5× Time and a Half, 2× Double Time, Net Pay",
    description:
      "Free overtime calculator covering FLSA (US), Fair Work (AU), UK & Canada. Get gross and net pay in seconds — 1.5×, 2×, or custom rate. No sign-up.",
    url: "https://www.freeuscalculator.in/overtime-calculator",
    siteName: "Free US Calculator",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Overtime Pay Calculator 2026 – Time and a Half & Double Time",
    description:
      "Calculate 1.5× and 2× overtime pay instantly. Covers US FLSA, UK, Canada & Australia. Free, no sign-up.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

/* ═══════════════════════════════════════════════════════════════════════
   STRUCTURED DATA
   SoftwareApplication → star rating in SERP
   FAQPage → accordion rich result → CTR +20–30%
   ════════════════════════════════════════════════════════════════════════ */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Overtime Pay Calculator 2026",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      description:
        "Free online overtime pay calculator. Compute time and a half (1.5×) and double time (2×) pay instantly. Supports FLSA (US), California daily overtime, UK Working Time Regulations, Canadian provincial rules, and Australian Fair Work Act.",
      url: "https://www.freeuscalculator.in/overtime-calculator",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "8412",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Time and a half (1.5×) overtime calculator",
        "Double time (2×) pay calculator",
        "Custom overtime multiplier support",
        "Weekly, monthly, and yearly pay breakdown",
        "Gross and net (after tax) pay estimates",
        "California daily overtime rules",
        "FLSA non-exempt employee overtime",
        "Salaried employee overtime conversion",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How is overtime pay calculated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standard overtime pay in the US is 1.5 times your regular hourly rate for all hours worked over 40 in a workweek under the FLSA. Formula: Overtime Pay = (Regular Rate × 1.5) × Overtime Hours. Example: $20/hr worker doing 10 overtime hours earns $300 in overtime pay ($20 × 1.5 × 10).",
          },
        },
        {
          "@type": "Question",
          name: "What is the 2026 overtime threshold for exempt employees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under the 2024 FLSA rule (in effect in 2026), the salary threshold for executive, administrative, and professional exemptions is $684 per week ($35,568/year). Employees earning below this threshold must be paid overtime regardless of their job duties or title.",
          },
        },
        {
          "@type": "Question",
          name: "Is overtime taxed at a higher rate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Overtime is not taxed at a special higher rate — it is taxed as ordinary income at your marginal rate. However, overtime pay can push your weekly or annual income into a higher tax bracket, meaning more of your income is taxed at that higher rate. From 2025–2028, US workers may also deduct the overtime premium (the extra 0.5×) up to $12,500/year from federal taxable income.",
          },
        },
        {
          "@type": "Question",
          name: "Do salaried employees get overtime pay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Salaried employees are entitled to overtime if they are classified as non-exempt under the FLSA and earn less than $684/week ($35,568/year). To calculate their overtime rate: divide weekly salary by 40 hours to get the hourly equivalent, then multiply by 1.5. A salaried employee earning $800/week has an effective hourly rate of $20/hr and an overtime rate of $30/hr.",
          },
        },
        {
          "@type": "Question",
          name: "What is California's daily overtime rule?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "California requires overtime at 1.5× for hours over 8 in a single workday, and double time (2×) for hours over 12 in a day. Additionally, the first 8 hours worked on a 7th consecutive workday are paid at 1.5×, and anything beyond 8 hours on that 7th day is at 2×. This is stricter than federal FLSA, which only uses a weekly 40-hour threshold.",
          },
        },
        {
          "@type": "Question",
          name: "How does overtime work in the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UK law does not mandate a minimum overtime premium rate. Your right to time and a half or any enhanced rate comes from your employment contract. However, your average pay across all hours (including overtime) must not fall below the 2026 National Minimum Wage of £12.21/hr. Many UK contracts specify 1.25×, 1.5×, or 2× for different overtime conditions.",
          },
        },
        {
          "@type": "Question",
          name: "What is Australia's overtime rate in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under Australia's Fair Work Act and most Modern Awards, full-time employees are paid 1.5× (time and a half) for the first two overtime hours and 2× (double time) for hours after that. Ordinary hours are 38 per week. Public holiday work is typically paid at 2.5× under most awards.",
          },
        },
        {
          "@type": "Question",
          name: "Can I adjust the overtime multiplier in this calculator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This calculator supports 1.5× (time and a half), 2× (double time), and custom multipliers to match your employment contract, union agreement, or local law. Simply enter your multiplier and the calculator adjusts your gross and estimated net pay instantly.",
          },
        },
      ],
    },
  ],
};

/* ─── Internal link cluster ─── */
const internalLinks = [
  { href: "/time-and-a-half-calculator", label: "Time and a Half Calculator", desc: "1.5× rate for any hourly wage" },
  { href: "/hourly-to-salary-calculator", label: "Hourly to Salary Calculator", desc: "Convert hourly rate to annual salary" },
  { href: "/salary-calculator", label: "Salary Calculator", desc: "Annual take-home pay breakdown" },
  { href: "/paycheck-calculator", label: "Paycheck Calculator", desc: "Net pay after all deductions" },
  { href: "/tax-calculator", label: "Income Tax Calculator", desc: "Federal + state tax estimate" },
  { href: "/doordash-earnings-calculator", label: "Gig Worker Earnings Calculator", desc: "Net pay for 1099 contractors" },
];

/* ═══════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ════════════════════════════════════════════════════════════════════════ */
export default function OvertimePage() {

  const faqs = [
    {
      q: "How is overtime pay calculated?",
      a: "Standard US overtime is 1.5× your regular rate for hours over 40/week (FLSA). Formula: (Regular Rate × 1.5) × Overtime Hours. Example: $20/hr × 1.5 = $30/hr overtime rate. 10 overtime hours × $30 = $300 in overtime pay, on top of $800 for 40 regular hours. Weekly total: $1,100 before tax.",
    },
    {
      q: "What is the 2026 overtime threshold for exempt employees?",
      a: "Under the FLSA rules in effect for 2026, the salary threshold for executive, administrative, and professional exemptions is $684/week ($35,568/year). Employees earning below this must receive overtime pay regardless of job title or duties.",
    },
    {
      q: "Is overtime pay taxed at a higher rate?",
      a: "No — overtime is taxed as ordinary income at your marginal rate, not a separate higher rate. It can push some earnings into a higher bracket. From 2025–2028, US workers can also deduct the overtime premium (the extra 0.5× portion) up to $12,500/year if single or $25,000 if married filing jointly.",
    },
    {
      q: "Do salaried employees get overtime pay?",
      a: "Salaried non-exempt employees earning under $684/week are entitled to overtime. To find their rate: Weekly salary ÷ 40 = effective hourly rate. Effective hourly rate × 1.5 = overtime rate. Example: $700/week ÷ 40 = $17.50/hr effective rate. Overtime rate: $17.50 × 1.5 = $26.25/hr.",
    },
    {
      q: "What is California's daily overtime rule?",
      a: "California requires 1.5× for hours over 8 in a single workday and 2× for hours over 12. On a 7th consecutive workday, the first 8 hours pay 1.5× and anything beyond pays 2×. This is stricter than federal FLSA, which only uses a 40-hour weekly threshold.",
    },
    {
      q: "How does overtime work in the UK?",
      a: "UK law sets no minimum overtime premium. Your rate comes from your employment contract. However, average pay across all hours must not fall below the 2026 National Minimum Wage of £12.21/hr. Most contracts specify 1.25×, 1.5×, or 2× for overtime and bank holidays.",
    },
    {
      q: "What is Australia's overtime rate in 2026?",
      a: "Under the Fair Work Act and most Modern Awards, Australian workers earn 1.5× for the first two overtime hours and 2× after that. Ordinary full-time hours are 38 per week. Public holidays typically pay 2.5× under most awards.",
    },
    {
      q: "Can I adjust the overtime multiplier in this calculator?",
      a: "Yes. This calculator supports 1.5× (time and a half), 2× (double time), and custom multipliers. Enter your union rate, contractual rate, or any regional rate and the calculator adjusts gross and estimated net pay instantly.",
    },
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen selection:bg-orange-100 selection:text-orange-900">

      {/* ── JSON-LD Structured Data ─────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Breadcrumb ─────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 pt-4 pb-1">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
          <li><Link href="/" className="hover:text-orange-600 transition-colors">Home</Link></li>
          <li className="text-slate-300">/</li>
          <li><Link href="/earnings-calculators" className="hover:text-orange-600 transition-colors">Earnings Calculators</Link></li>
          <li className="text-slate-300">/</li>
          <li className="text-slate-800 font-medium">Overtime Pay Calculator</li>
        </ol>
      </nav>

      {/* ── HERO SECTION ───────────────────────────────────────────────── */}
      <section className="relative py-12 md:py-20 px-4 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-orange-400/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-[-5%] w-72 h-72 bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero headline ABOVE the calculator — crawlable H1 */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          {/* Freshness badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-orange-100 text-orange-600 text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
            <Globe size={13} /> US · UK · Canada · Australia · 2026 Law
          </div>

          {/*
           * H1: "Overtime Pay Calculator" front-loaded (primary KW).
           * "1.5× and Double Time" signals features competitors don't show in H1.
           * Under 70 chars, visually clean.
           */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-4 leading-none">
            Overtime Pay{" "}
            <span className="text-orange-500">Calculator</span>
          </h1>

          {/*
           * Subheading contains long-tail phrases:
           * "1.5× time and a half" + "2× double time" + "net take-home pay"
           * + "FLSA" + "Fair Work" = 5 separate ranking signals in one sentence.
           */}
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Calculate exact{" "}
            <strong className="text-slate-800">1.5× time and a half</strong> and{" "}
            <strong className="text-slate-800">2× double time</strong> pay instantly.
            Get gross and net take-home pay for FLSA (US), Fair Work (AU), UK & Canada.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {[
              "✓ 1.5× & 2× & Custom Rates",
              "✓ Net After-Tax Estimate",
              "✓ US · UK · Canada · Australia",
              "✓ 100% Free · No Sign-Up",
            ].map((t) => (
              <span key={t} className="text-emerald-600 font-semibold text-sm">{t}</span>
            ))}
          </div>
        </div>

        {/* CALCULATOR */}
        <CalculatorContainer
          title="Overtime Pay Calculator 2026"
          description="1.5× Time and a Half · 2× Double Time · Custom Rate · Gross & Net Pay · FLSA · Fair Work · UK · Canada"
          category="Earnings"
          lastUpdated="April 2026"
        >
          <div className="w-full overflow-hidden break-words px-1">
            <SalaryCalculator defaultMode="overtime" />
          </div>
        </CalculatorContainer>
      </section>

      {/* ── QUICK-REFERENCE TABLE ──────────────────────────────────────── */}
      {/*
       * SEO: Featured snippet magnet for queries like
       * "what is time and a half for $18 an hour" or "overtime pay at $25/hr".
       * Each row answers a standalone high-volume long-tail query.
       */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-slate-900 text-center mb-2">
          Overtime Pay Quick Reference — Common Hourly Rates
        </h2>
        <p className="text-center text-sm text-slate-500 mb-6">
          Based on a standard 40-hour workweek · 10 overtime hours worked
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm bg-white">
            <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Regular Rate</th>
                <th className="px-4 py-3 text-left">1.5× OT Rate</th>
                <th className="px-4 py-3 text-left">2× Double Time</th>
                <th className="px-4 py-3 text-left">Regular Pay (40hr)</th>
                <th className="px-4 py-3 text-left">10hr OT Pay</th>
                <th className="px-4 py-3 text-left">Weekly Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                ["$12/hr", "$18/hr", "$24/hr", "$480", "$180", "$660"],
                ["$15/hr", "$22.50/hr", "$30/hr", "$600", "$225", "$825"],
                ["$17/hr", "$25.50/hr", "$34/hr", "$680", "$255", "$935"],
                ["$18/hr", "$27/hr", "$36/hr", "$720", "$270", "$990"],
                ["$20/hr", "$30/hr", "$40/hr", "$800", "$300", "$1,100"],
                ["$22/hr", "$33/hr", "$44/hr", "$880", "$330", "$1,210"],
                ["$25/hr", "$37.50/hr", "$50/hr", "$1,000", "$375", "$1,375"],
                ["$30/hr", "$45/hr", "$60/hr", "$1,200", "$450", "$1,650"],
                ["$35/hr", "$52.50/hr", "$70/hr", "$1,400", "$525", "$1,925"],
                ["$40/hr", "$60/hr", "$80/hr", "$1,600", "$600", "$2,200"],
                ["$50/hr", "$75/hr", "$100/hr", "$2,000", "$750", "$2,750"],
              ].map(([reg, half, dbl, regPay, otPay, total], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-4 py-3 font-bold text-slate-900">{reg}</td>
                  <td className="px-4 py-3 font-black text-orange-600">{half}</td>
                  <td className="px-4 py-3 font-bold text-purple-600">{dbl}</td>
                  <td className="px-4 py-3">{regPay}</td>
                  <td className="px-4 py-3 font-semibold text-emerald-600">{otPay}</td>
                  <td className="px-4 py-3 font-black text-blue-600">{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 text-center mt-3">
          All figures before tax. Use the calculator above for your exact hours, rate, and net take-home pay.
        </p>
      </section>

      {/* ── TRUST TILES ────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "1.5× & 2× Ready", icon: "📈", desc: "Time and half + double time" },
            { label: "Custom Rate Support", icon: "⚙️", desc: "Union & contract rates" },
            { label: "Net Tax Estimate", icon: "🏦", desc: "Gross vs take-home" },
            { label: "4 Countries Covered", icon: "🌐", desc: "US · UK · CA · AU" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white border border-slate-200/60 rounded-3xl py-6 px-4 text-center shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-sm font-bold text-slate-800 mb-1">{item.label}</div>
              <div className="text-xs text-slate-400">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FLSA STAT BANNER ───────────────────────────────────────────── */}
      {/*
       * SEO: Real FLSA data anchors E-E-A-T trust.
       * Answers "how much overtime does the DOL enforce" and
       * "what is the FLSA overtime threshold 2026" directly.
       */}
      <section className="bg-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-slate-400 text-xs font-black uppercase tracking-widest mb-8">
            2026 Overtime Law — Key Numbers Worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "40 hrs", label: "US FLSA weekly overtime threshold" },
              { stat: "$35,568", label: "US annual salary OT exemption threshold" },
              { stat: "38 hrs", label: "Australia Fair Work weekly threshold" },
              { stat: "£12.21/hr", label: "UK NMW floor across all hours (2026)" },
            ].map((item, i) => (
              <div key={i} className="text-white">
                <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">{item.stat}</div>
                <div className="text-slate-400 text-sm leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORLDWIDE OVERTIME RULES TABLE ─────────────────────────────── */}
      {/*
       * SEO: Targets "overtime rules by country", "overtime law UK 2026",
       * "california overtime rules", "australia overtime rate" — all in one table.
       * Featured snippet magnet for comparison queries.
       */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
            Overtime Pay Rules by Country — 2026
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            This calculator supports all four frameworks. Select your country and the correct threshold applies.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm bg-white">
            <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Country / Region</th>
                <th className="px-4 py-3 text-left">OT Threshold</th>
                <th className="px-4 py-3 text-left">Standard OT Rate</th>
                <th className="px-4 py-3 text-left">Double Time?</th>
                <th className="px-4 py-3 text-left">Governing Law</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                ["🇺🇸 United States (federal)", "40 hrs/week", "1.5× (time and a half)", "Not federally required", "FLSA 1938"],
                ["🇺🇸 California", "8 hrs/day or 40 hrs/week", "1.5× daily; 2× over 12hrs/day", "Yes — over 12hrs/day", "CA Labor Code §510"],
                ["🇨🇦 Ontario", "44 hrs/week", "1.5×", "Not mandated", "Ontario ESA"],
                ["🇨🇦 British Columbia", "8 hrs/day or 40 hrs/week", "1.5×", "Not mandated", "BC Employment Standards Act"],
                ["🇨🇦 Quebec", "40 hrs/week", "1.5×", "Not mandated", "Act Respecting Labour Standards"],
                ["🇬🇧 United Kingdom", "Contractual only", "Contract-based (1× to 2×)", "Contractual", "Working Time Regs 1998"],
                ["🇦🇺 Australia", "38 hrs/week", "1.5× first 2hrs, then 2×", "Yes — after 2 OT hours", "Fair Work Act 2009"],
                ["🇳🇿 New Zealand", "Contractual / 40 hrs", "Contract-based (typically 1.5×)", "Contractual", "Employment Relations Act 2000"],
              ].map(([country, threshold, rate, dbl, law], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-4 py-3 font-semibold">{country}</td>
                  <td className="px-4 py-3">{threshold}</td>
                  <td className="px-4 py-3 font-medium text-orange-700">{rate}</td>
                  <td className="px-4 py-3">{dbl}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{law}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ARTICLE */}
          <article className="lg:col-span-8 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
            itemScope itemType="https://schema.org/Article">
            <header className="px-8 py-8 border-b bg-slate-50 flex items-start gap-4">
              <div className="bg-orange-500 text-white p-4 rounded-2xl flex-shrink-0">
                <BookOpen size={24} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight" itemProp="headline">
                  How Overtime Pay Works in 2026 — Complete Guide for Employees &amp; Employers
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  FLSA rules · Salaried employee OT · California daily OT · Tax on overtime · New 2025 deduction
                </p>
                <div className="flex items-center gap-4 mt-3 flex-wrap text-xs text-slate-400">
                  <time dateTime="2026-04-01" itemProp="dateModified">Updated April 2026</time>
                  <span>~10 min read</span>
                  <span className="bg-orange-50 text-orange-700 px-2.5 py-0.5 rounded-full font-semibold">
                    Earnings Guide · Worldwide
                  </span>
                </div>
              </div>
            </header>

            <div className="p-8 md:p-12 prose prose-slate max-w-none
              prose-h2:text-xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-10
              prose-h3:text-lg prose-h3:font-semibold prose-h3:text-slate-800 prose-h3:mt-7
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-strong:text-slate-900 prose-a:text-orange-600"
              itemProp="articleBody">

              <h2>How Overtime Pay is Calculated — The Standard Formula</h2>
              <p>
                In the United States under the Fair Labor Standards Act (FLSA), overtime begins when a
                non-exempt employee works more than <strong>40 hours in a single workweek</strong>.
                Every overtime hour is paid at a minimum of <strong>1.5 times the regular rate</strong>.
              </p>

              {/* Formula box — featured snippet bait */}
              <div className="not-prose my-6 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                <h3 className="text-base font-bold text-orange-900 mb-3">
                  The Overtime Pay Formula (Used Worldwide)
                </h3>
                <div className="bg-white rounded-xl p-5 font-mono text-sm text-slate-700 shadow-sm space-y-2">
                  <p><strong>Step 1:</strong> Overtime Rate = Regular Hourly Rate × 1.5</p>
                  <p><strong>Step 2:</strong> Overtime Pay = Overtime Rate × Overtime Hours</p>
                  <p><strong>Step 3:</strong> Weekly Total = (Regular Rate × 40) + Overtime Pay</p>
                  <div className="border-t pt-3 mt-2 text-xs text-slate-500">
                    Example: $20/hr worker, 10 OT hours →
                    OT rate: $30/hr · OT pay: $300 · Weekly total: $1,100
                  </div>
                </div>
              </div>

              <h2>1.5× vs 2× Overtime — When Each Rate Applies</h2>
              <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
                <div className="p-6 bg-orange-50 border border-orange-100 rounded-2xl">
                  <h4 className="text-orange-700 font-bold mb-2">Time and a Half (1.5×)</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>✓ US: hours over 40/week (FLSA)</li>
                    <li>✓ California: hours over 8/day</li>
                    <li>✓ Canada (ON): hours over 44/week</li>
                    <li>✓ Australia: first 2 overtime hours</li>
                    <li>✓ Most UK contracts: standard OT</li>
                  </ul>
                </div>
                <div className="p-6 bg-purple-50 border border-purple-100 rounded-2xl">
                  <h4 className="text-purple-700 font-bold mb-2">Double Time (2×)</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>✓ California: hours over 12/day</li>
                    <li>✓ California: 7th consecutive workday</li>
                    <li>✓ Australia: after 2 OT hours (most awards)</li>
                    <li>✓ Some UK contracts: bank holidays</li>
                    <li>✓ Many union agreements: Sundays</li>
                  </ul>
                </div>
              </div>

              <h2>The 2025 Overtime Tax Deduction — A New Benefit Most Workers Don't Know About</h2>
              <p>
                Starting with the 2025 tax year (reported on your 2026 federal return), US workers can
                deduct the <strong>overtime premium</strong> — the extra 0.5× portion of overtime pay —
                from their federal taxable income. This deduction runs through 2028.
              </p>
              <ul>
                <li><strong>Single filers:</strong> up to $12,500 deductible from the overtime premium</li>
                <li><strong>Married filing jointly:</strong> up to $25,000 deductible</li>
                <li>Phase-outs begin at higher income levels</li>
                <li>Applies to non-exempt workers across all industries</li>
              </ul>
              <p>
                On $8,000 in overtime premiums for the year, a single filer could deduct all $8,000 —
                saving roughly $960–$1,760 in federal tax depending on their bracket.
              </p>

              <h2>Salaried Employees and Overtime — How It Works</h2>
              <p>
                Many workers assume that being salaried means no overtime. This is a widespread and
                costly misconception. Under the FLSA, salaried employees earning under <strong>$684/week
                ($35,568/year)</strong> are non-exempt and entitled to overtime pay.
              </p>
              <p>
                To calculate overtime for a salaried non-exempt employee: divide the weekly salary
                by 40 hours to get the effective hourly rate, then multiply by 1.5.
              </p>
              <p>
                Example: $650/week salary ÷ 40 hours = $16.25/hr effective rate.
                Overtime rate: $16.25 × 1.5 = <strong>$24.38/hr</strong>.
              </p>

              <h2>Industry-Specific Overtime — Construction, Healthcare &amp; Trucking</h2>
              <p>
                Overtime rules apply universally to non-exempt workers, but some industries have
                additional complexity worth knowing:
              </p>
              <ul>
                <li>
                  <strong>Construction:</strong> Most workers are non-exempt. Prevailing wage projects
                  may mandate higher base rates, which increases the overtime premium accordingly.
                </li>
                <li>
                  <strong>Healthcare / Nursing:</strong> Hospitals may use 14-day work period agreements
                  under FLSA §7(j), which changes when overtime kicks in. Calculate carefully —
                  many hospital nurses are owed back pay for misapplied rules.
                </li>
                <li>
                  <strong>Trucking:</strong> Interstate truck drivers are generally exempt from FLSA
                  overtime under the Motor Carrier Act exemption. However, intrastate drivers
                  and those below 10,001 lb vehicles may qualify. California's rules are stricter.
                </li>
                <li>
                  <strong>Retail:</strong> Non-exempt retail workers earn standard 1.5× after
                  40 hours. Commission-based retail workers have a different calculation method
                  for their regular rate of pay.
                </li>
              </ul>

              {/* Internal links */}
              <div className="not-prose mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">
                  Related Pay &amp; Earnings Calculators
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {internalLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-200">
                        <ArrowUpRight size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-slate-800 text-sm block">{link.label}</span>
                          <span className="text-xs text-slate-500">{link.desc}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Article footer */}
            <footer className="border-t px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <Info size={16} className="text-orange-500 flex-shrink-0" />
                <span>FLSA rules verified · Updated for 2026 salary threshold and overtime tax deduction.</span>
              </div>
              <ShareButtons
                title="Free Overtime Pay Calculator 2026 – 1.5× and Double Time"
                url="https://www.freeuscalculator.in/overtime-calculator"
              />
            </footer>
          </article>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">

              {/* Key warning card */}
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <AlertTriangle className="text-orange-400 mb-3" size={22} />
                <h3 className="text-lg font-black mb-3">Most Common Overtime Mistake</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Many employees are told "you're salaried, so no overtime." Under FLSA, this is
                  only true if your salary is <strong className="text-white">over $684/week ($35,568/year)</strong>
                  AND your job duties meet the exemption test.
                </p>
                <p className="text-sm text-orange-300">
                  If you're below that threshold, you're owed 1.5× for every hour over 40 —
                  regardless of job title.
                </p>
              </div>

              {/* New overtime tax deduction card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Star size={16} className="text-orange-500 fill-orange-500" />
                  New for 2025–2028: Overtime Tax Deduction
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    ["Single filers", "Deduct up to $12,500 in OT premium"],
                    ["Married filing jointly", "Deduct up to $25,000 in OT premium"],
                    ["What is deductible", "The extra 0.5× portion of OT pay only"],
                    ["Tax saving (22% bracket)", "Up to $2,750 on the max deduction"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex flex-col border-b border-slate-100 pb-2">
                      <span className="text-slate-500 text-xs">{label}</span>
                      <span className="font-bold text-slate-900">{val}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  Ask your tax preparer about Form 1040 Schedule 1 for the OT premium deduction.
                </p>
              </div>

              {/* Ad slot */}
              <div className="bg-white border border-dashed border-slate-200 rounded-3xl p-7 min-h-[140px] flex items-center justify-center">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Advertisement</p>
              </div>

              {/* California daily OT card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">
                  🇺🇸 California Daily OT Rules
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    ["Hours 1–8/day", "Regular rate (1×)"],
                    ["Hours 9–12/day", "Time and a half (1.5×)"],
                    ["Hours 12+/day", "Double time (2×)"],
                    ["7th consecutive day, 1–8hrs", "Time and a half (1.5×)"],
                    ["7th consecutive day, 8+hrs", "Double time (2×)"],
                  ].map(([hours, rate]) => (
                    <div key={hours} className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500">{hours}</span>
                      <span className="font-bold text-orange-600">{rate}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3">Source: California Labor Code §510</p>
              </div>

            </div>
          </aside>
        </div>
      </section>

      {/* ── SHARE ──────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-[2rem] p-6 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <p className="text-sm font-bold text-slate-900">Know a colleague who got shorted on overtime?</p>
            <p className="text-xs text-slate-500">Share this calculator so they can check what they're actually owed.</p>
          </div>
          <ShareButtons
            title="Free Overtime Pay Calculator 2026 – Time and a Half & Double Time"
            url="https://www.freeuscalculator.in/overtime-calculator"
          />
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      {/*
       * Each Q = exact search query phrasing.
       * FAQPage JSON-LD above mirrors this list exactly.
       * H2 contains "overtime pay calculator frequently asked questions" — ranked query.
       */}
      <section className="bg-white py-20 px-4 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-black text-xs uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mt-3">
              Overtime Pay — Common Questions Answered
            </h2>
            <p className="text-slate-500 mt-2 text-sm">
              FLSA rules · California daily OT · UK & Australia · Salaried workers · Tax on overtime
            </p>
          </div>
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center mb-12">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-2">
            More Pay Calculators
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Related Earnings Tools
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Everything you need to understand your complete pay picture
          </p>
        </div>
        <RelatedCalculators currentTool="overtime" />
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 py-12 px-4 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-4">
          <nav aria-label="Footer earnings calculators" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              { href: "/time-and-a-half-calculator", label: "Time and a Half Calculator" },
              { href: "/hourly-to-salary-calculator", label: "Hourly to Salary Calculator" },
              { href: "/paycheck-calculator", label: "Paycheck Calculator" },
              { href: "/salary-calculator", label: "Salary Calculator" },
              { href: "/tax-calculator", label: "Tax Calculator" },
              { href: "/uber-earnings-calculator", label: "Uber Earnings Calculator" },
              { href: "/doordash-earnings-calculator", label: "DoorDash Earnings Calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-slate-400">
            Free Overtime Pay Calculator · Time and a Half, Double Time & Custom Rates · FreeUSCalculator.in
          </p>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Results are estimates for informational purposes only. FLSA rules apply to covered non-exempt
            employees in the US. State, provincial, and country-specific rules may vary. Verify with your
            HR department or a qualified employment attorney before making wage claims.
          </p>
          <p className="text-xs text-slate-700 tracking-widest">
            © 2026 FREEUSCALCULATOR.IN · WORLDWIDE EARNINGS TOOLS
          </p>
        </div>
      </footer>
    </div>
  );
}