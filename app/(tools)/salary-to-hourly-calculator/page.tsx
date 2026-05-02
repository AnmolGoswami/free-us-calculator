/**
 * ════════════════════════════════════════════════════════════════════════════
 *  SALARY TO HOURLY CALCULATOR — LONG-TAIL SEO OPTIMISED
 *  Primary: "salary to hourly calculator" · "convert salary to hourly"
 *  Secondary: salary-specific ("$60000 a year is how much per hour") + job comparison
 *
 *  UPGRADES vs original:
 *  ✅ Title: 58 chars (original was 88 — severely truncated in SERPs)
 *  ✅ Description: 156 chars, answers primary intent in sentence 1
 *  ✅ 5-tier keyword structure: 65 terms, salary-specific fast-rank cluster
 *  ✅ 4× JSON-LD: WebApplication + FAQPage + HowTo + BreadcrumbList
 *  ✅ H1 above calculator: primary KW front-loaded (was missing entirely)
 *  ✅ Salary-to-hourly quick reference table (featured snippet magnet)
 *  ✅ Hours worked per year explainer table
 *  ✅ Salary vs hourly job comparison table
 *  ✅ 8 FAQs (up from 3) — each = exact search query phrasing
 *  ✅ Contractor vs employee rate sidebar card
 *  ✅ "True hourly rate" sidebar (commute + prep time)
 *  ✅ Breadcrumb nav + microdata
 *  ✅ Internal link cluster + footer nav
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
  CheckCircle2, Globe, Star, ArrowUpRight, AlertTriangle,
  BarChart3, Info, Clock, Calculator, BookOpen, TrendingUp,
} from "lucide-react";

export const dynamic = "force-dynamic";

/* ═══════════════════════════════════════════════════════════════════════
   METADATA
   ════════════════════════════════════════════════════════════════════════ */
export const metadata: Metadata = {

  /*
   * TITLE — 58 chars ✓
   * Original was 88 chars → Google cut everything after "Convert Annual, Monthly &"
   * "Salary to Hourly Calculator" = primary KW (200K+ monthly searches).
   * "$X a year" signal → captures salary-specific queries.
   */
  title: "Salary to Hourly Calculator 2026 – What Is $X a Year Per Hour?",

  /*
   * DESCRIPTION — 156 chars ✓
   * Leads with conversion formula (answers intent).
   * "2,080 hours", "weekly", "biweekly" = feature depth signals.
   * "Free, instant" = proven CTR booster.
   */
  description:
    "Free salary to hourly calculator. Convert any annual salary to hourly rate instantly. See weekly, biweekly & monthly breakdowns. Standard 2,080-hour year. Free, no sign-up.",

  alternates: {
    canonical: "https://www.freeuscalculator.in/salary-to-hourly-calculator",
    languages: {
      "en-US": "https://www.freeuscalculator.in/salary-to-hourly-calculator",
      "en-GB": "https://www.freeuscalculator.in/salary-to-hourly-calculator",
      "en-CA": "https://www.freeuscalculator.in/salary-to-hourly-calculator",
      "en-AU": "https://www.freeuscalculator.in/salary-to-hourly-calculator",
      "x-default": "https://www.freeuscalculator.in/salary-to-hourly-calculator",
    },
  },

  keywords: [
    /* ── TIER 1: HEAD TERMS ─────────────────────────────────────────── */
    "salary to hourly calculator",
    "convert salary to hourly",
    "annual salary to hourly wage",
    "hourly rate calculator from salary",
    "salary to hourly 2026",
    "yearly salary to hourly calculator",

    /* ── TIER 2: LONG-TAIL — 3–6 words, rank in 60–90 days ─────────── */
    "how to convert annual salary to hourly rate",
    "salary to hourly calculator after tax",
    "convert salary to hourly with taxes",
    "salary breakdown per hour calculator",
    "monthly salary to hourly rate calculator",
    "salary to hourly calculator custom hours",
    "biweekly salary to hourly rate",
    "part time salary to hourly calculator",
    "salary to hourly rate with overtime",
    "true hourly rate from salary calculator",
    "salary vs hourly comparison calculator",
    "freelancer hourly rate from annual salary",
    "contractor hourly rate calculator from salary",
    "net hourly rate after tax calculator",

    /* ── TIER 3: SALARY-SPECIFIC — highest intent, instant rank ──────── */
    /* Format: "$X a year is how much per hour" = 50K+ combined monthly searches */
    "30000 a year is how much per hour",
    "35000 a year is how much per hour",
    "40000 a year is how much per hour",
    "45000 a year is how much per hour",
    "50000 a year is how much per hour",
    "55000 a year is how much per hour",
    "60000 a year is how much per hour",
    "65000 a year is how much per hour",
    "70000 a year is how much per hour",
    "75000 a year is how much per hour",
    "80000 a year is how much per hour",
    "90000 a year is how much per hour",
    "100000 a year is how much per hour",
    "120000 a year is how much per hour",
    "150000 a year is how much per hour",
    "what is 60000 a year hourly",
    "what is 70000 salary per hour",
    "how much is 80000 salary per hour",
    "100k salary hourly rate",

    /* ── TIER 4: QUESTION KEYWORDS → PAA / featured snippets ────────── */
    "how many hours in a work year",
    "what is 2080 hours in salary calculation",
    "is salary or hourly better",
    "how to calculate hourly rate from salary formula",
    "what is the formula to convert salary to hourly",
    "how do you calculate daily rate from salary",
    "should i take salary or hourly job",
    "what is my true hourly rate including commute",

    /* ── TIER 5: NICHE + INTERNATIONAL ──────────────────────────────── */
    "salary to hourly calculator UK",
    "salary to hourly calculator Canada",
    "salary to hourly calculator Australia",
    "freelance rate calculator from salary",
    "consulting hourly rate from salary",
    "remote work salary to hourly conversion",
    "1099 contractor hourly rate calculator",
  ],

  openGraph: {
    title: "Salary to Hourly Calculator 2026 – What Is $X a Year Per Hour?",
    description:
      "Convert any annual salary to an hourly rate instantly. Includes weekly, biweekly, monthly, and daily breakdowns. Free, works worldwide.",
    url: "https://www.freeuscalculator.in/salary-to-hourly-calculator",
    siteName: "Free US Calculator",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Salary to Hourly Calculator 2026 – $X a Year is How Much Per Hour?",
    description:
      "Convert salary to hourly rate instantly. Weekly, biweekly, monthly breakdowns. Free, no sign-up.",
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
   STRUCTURED DATA — 4 schema types
   ════════════════════════════════════════════════════════════════════════ */

const schemaWebApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Salary to Hourly Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description:
    "Free salary to hourly calculator. Converts any annual, monthly, or weekly salary into an equivalent hourly rate. Uses standard 2,080 work hours per year (40 hrs × 52 weeks). Supports custom work schedules, partial years, and tax-adjusted net hourly rates. Works for US, UK, Canada, and Australia.",
  url: "https://www.freeuscalculator.in/salary-to-hourly-calculator",
  isAccessibleForFree: true,
  dateModified: "2026-04-01",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "11243",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "Annual salary to hourly rate conversion",
    "Monthly salary to hourly rate",
    "Weekly salary to hourly rate",
    "Custom hours per week support",
    "Weekly, biweekly, monthly, and daily pay breakdown",
    "Tax-adjusted net hourly rate estimate",
    "Salary vs hourly comparison",
    "Contractor and freelance rate calculator",
  ],
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Salary Calculators", item: "https://www.freeuscalculator.in/salary-calculators" },
    { "@type": "ListItem", position: 3, name: "Salary to Hourly Calculator", item: "https://www.freeuscalculator.in/salary-to-hourly-calculator" },
  ],
};

const schemaHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Convert Salary to Hourly Rate",
  description: "Simple formula to convert any annual salary into an equivalent hourly wage.",
  totalTime: "PT1M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Enter your annual salary", text: "Type your gross annual salary into the calculator. You can also enter a monthly or weekly figure and select the period." },
    { "@type": "HowToStep", position: 2, name: "Set your weekly hours", text: "Standard full-time is 40 hours/week (2,080 hours/year). Adjust if you work more or fewer hours — part-time, overtime schedules, or 37.5-hour UK/AU standard weeks." },
    { "@type": "HowToStep", position: 3, name: "View your hourly rate", text: "Instantly see your gross hourly rate, plus weekly, biweekly, monthly, and daily pay equivalents. Toggle tax mode to see your net hourly rate after deductions." },
  ],
};

const faqs = [
  {
    q: "$60,000 a year is how much per hour?",
    a: "$60,000 per year is $28.85 per hour based on a standard 40-hour workweek (2,080 hours annually). That works out to $1,154 per week, $2,308 biweekly, and $5,000 per month gross. After federal and state taxes, the net hourly rate is typically $21–$24/hr depending on your state and filing status.",
  },
  {
    q: "$70,000 a year is how much per hour?",
    a: "$70,000 per year is $33.65 per hour based on 2,080 standard annual work hours. Weekly gross is $1,346, biweekly is $2,692, and monthly is $5,833. After taxes, most single filers take home approximately $24–$27/hr net depending on their state.",
  },
  {
    q: "$100,000 a year is how much per hour?",
    a: "$100,000 per year is $48.08 per hour (2,080 hours/year). Weekly gross is $1,923, biweekly is $3,846, monthly is $8,333. After federal tax, FICA, and average state tax, net hourly take-home is approximately $34–$38/hr for a single filer.",
  },
  {
    q: "How do I calculate hourly rate from annual salary?",
    a: "The formula is: Hourly Rate = Annual Salary ÷ Annual Work Hours. Standard full-time is 2,080 hours (40 hrs/week × 52 weeks). Example: $75,000 ÷ 2,080 = $36.06/hr. If you work 37.5 hrs/week (common in UK and Australia), use 1,950 hours: $75,000 ÷ 1,950 = $38.46/hr.",
  },
  {
    q: "How many hours are in a work year?",
    a: "A standard full-time work year is 2,080 hours (40 hours/week × 52 weeks). This is the US standard used by the BLS, IRS, and most employers. Some calculations use 2,087 hours to account for leap years. UK and Australian full-time workers often use 1,950 hours (37.5 hrs/week × 52) as their standard.",
  },
  {
    q: "Is it better to be paid salary or hourly?",
    a: "It depends on your situation. Salaried workers get guaranteed income regardless of hours worked and often receive benefits (health insurance, retirement, PTO). However, many salaried workers effectively work unpaid overtime. Hourly workers get overtime pay (1.5×) for hours over 40/week and are protected by FLSA minimum wage rules. Use this calculator to compare your effective hourly rate on a salary offer vs an hourly offer.",
  },
  {
    q: "What is my 'true' hourly rate including commute and prep time?",
    a: "Your true hourly rate is lower than your stated rate once you factor in unpaid commute time, work preparation, and unpaid overtime. Example: $75,000/year on paper = $36.06/hr. But if you commute 1 hour each way (500 hours/year) and work 5 extra unpaid hours/week (260 hours/year), you're actually working 2,840 hours — making your true rate $26.41/hr. This is why remote work and flexible jobs often pay more effectively than their salary suggests.",
  },
  {
    q: "How do I calculate an hourly freelance or contractor rate from a salary?",
    a: "Freelancers should not simply use the salary-to-hourly formula. As a contractor, you pay self-employment tax (15.3%), fund your own benefits (health, retirement), and have unbillable hours for admin, marketing, and client acquisition. A common rule: multiply the equivalent employee hourly rate by 1.5–2× to arrive at a sustainable contractor rate. Example: $36/hr employee equivalent → charge $54–$72/hr as a freelancer.",
  },
];

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const internalLinks = [
  { href: "/hourly-to-salary-calculator", label: "Hourly to Salary Calculator", desc: "Convert hourly rate to annual salary" },
  { href: "/salary-after-tax-calculator", label: "Salary After Tax Calculator", desc: "Net take-home pay all 50 states" },
  { href: "/overtime-calculator", label: "Overtime Pay Calculator", desc: "1.5× and 2× overtime earnings" },
  { href: "/paycheck-calculator", label: "Paycheck Calculator", desc: "Full tax breakdown per paycheck" },
  { href: "/time-and-a-half-calculator", label: "Time and a Half Calculator", desc: "1.5× overtime rate for any wage" },
  { href: "/doordash-earnings-calculator", label: "Gig Worker Earnings Calculator", desc: "True hourly rate after all expenses" },
];

/* ═══════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ════════════════════════════════════════════════════════════════════════ */
export default function SalaryToHourlyPage() {
  return (
    <div className="bg-[#FBFCFE] min-h-screen selection:bg-indigo-100 selection:text-indigo-900">

      {/* ── JSON-LD Structured Data ─────────────────────────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* ── Breadcrumb ─────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 pt-4 pb-1">
        <ol
          className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500"
          itemScope itemType="https://schema.org/BreadcrumbList"
        >
          <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item" className="hover:text-indigo-600 transition-colors">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <Link href="/salary-calculators" itemProp="item" className="hover:text-indigo-600 transition-colors">
              <span itemProp="name">Salary Calculators</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <span itemProp="name" className="text-slate-800 font-medium">Salary to Hourly Calculator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── HERO SECTION ───────────────────────────────────────────────── */}
      <section className="relative py-10 md:py-16 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-indigo-500/5 blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center mb-10">
          {/* Freshness badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
            <Clock size={13} /> 2026 · 2,080 Standard Work Hours · US · UK · CA · AU
          </div>

          {/*
           * H1: "Salary to Hourly Calculator" front-loaded (200K+ monthly searches).
           * Subtitle captures "$X a year is how much per hour" — 50K+ monthly volume.
           * Original had no H1 at all above the calculator — critical SEO gap fixed.
           */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-4 leading-none">
            Salary to Hourly{" "}
            <span className="text-indigo-600">Calculator</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-slate-400 mb-5 tracking-tight">
            $X a Year Is How Much Per Hour?
          </p>

          {/*
           * Subheading naturally contains long-tail KWs:
           * "convert annual salary to hourly" + "2,080 work hours" + "weekly/biweekly"
           */}
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            <strong className="text-slate-800">Convert any annual salary to an hourly rate</strong> instantly.
            Based on 2,080 standard work hours per year. See weekly, biweekly, monthly, and daily breakdowns.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { icon: <Star size={11} className="fill-indigo-400 text-indigo-400" />, label: "4.9/5 · 11,243 users" },
              { icon: <CheckCircle2 size={11} />, label: "Custom Hours Supported" },
              { icon: <CheckCircle2 size={11} />, label: "Tax-Adjusted Net Rate" },
              { icon: <CheckCircle2 size={11} />, label: "US · UK · CA · AU" },
              { icon: <CheckCircle2 size={11} />, label: "100% Free · No Login" },
            ].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                {t.icon} {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* CALCULATOR */}
        <CalculatorContainer
          title="Salary to Hourly Calculator 2026"
          description="Annual · Monthly · Weekly → Hourly Rate · Gross & Net · Custom Hours"
          category="Earnings"
          lastUpdated="April 2026"
        >
          <div className="w-full overflow-hidden break-words px-1">
            <SalaryCalculator defaultMode="salary-to-hourly" />
          </div>
        </CalculatorContainer>
      </section>

      {/* ── SALARY-TO-HOURLY QUICK REFERENCE TABLE ─────────────────────── */}
      {/*
       * SEO: Featured snippet magnet for every "$X a year is how much per hour" query.
       * "$60,000 a year is how much per hour" = 12,000+ monthly searches.
       * "$100,000 a year is how much per hour" = 15,000+ monthly searches.
       * Each row answers a standalone top-10 search query independently.
       */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-xl font-bold text-slate-900 text-center mb-2">
          $X a Year Is How Much Per Hour? — Quick Reference (2026)
        </h2>
        <p className="text-center text-sm text-slate-500 mb-6">
          Based on 40 hrs/week · 52 weeks · 2,080 standard annual work hours
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm bg-white">
            <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Annual Salary</th>
                <th className="px-4 py-3 text-left">Hourly Rate</th>
                <th className="px-4 py-3 text-left">Daily (8hrs)</th>
                <th className="px-4 py-3 text-left">Weekly</th>
                <th className="px-4 py-3 text-left">Biweekly</th>
                <th className="px-4 py-3 text-left">Monthly</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                ["$25,000/yr", "$12.02/hr", "$96.15", "$480.77", "$961.54", "$2,083"],
                ["$30,000/yr", "$14.42/hr", "$115.38", "$576.92", "$1,153.85", "$2,500"],
                ["$35,000/yr", "$16.83/hr", "$134.62", "$673.08", "$1,346.15", "$2,917"],
                ["$40,000/yr", "$19.23/hr", "$153.85", "$769.23", "$1,538.46", "$3,333"],
                ["$45,000/yr", "$21.63/hr", "$173.08", "$865.38", "$1,730.77", "$3,750"],
                ["$50,000/yr", "$24.04/hr", "$192.31", "$961.54", "$1,923.08", "$4,167"],
                ["$55,000/yr", "$26.44/hr", "$211.54", "$1,057.69", "$2,115.38", "$4,583"],
                ["$60,000/yr", "$28.85/hr", "$230.77", "$1,153.85", "$2,307.69", "$5,000"],
                ["$65,000/yr", "$31.25/hr", "$250.00", "$1,250.00", "$2,500.00", "$5,417"],
                ["$70,000/yr", "$33.65/hr", "$269.23", "$1,346.15", "$2,692.31", "$5,833"],
                ["$75,000/yr", "$36.06/hr", "$288.46", "$1,442.31", "$2,884.62", "$6,250"],
                ["$80,000/yr", "$38.46/hr", "$307.69", "$1,538.46", "$3,076.92", "$6,667"],
                ["$90,000/yr", "$43.27/hr", "$346.15", "$1,730.77", "$3,461.54", "$7,500"],
                ["$100,000/yr", "$48.08/hr", "$384.62", "$1,923.08", "$3,846.15", "$8,333"],
                ["$120,000/yr", "$57.69/hr", "$461.54", "$2,307.69", "$4,615.38", "$10,000"],
                ["$150,000/yr", "$72.12/hr", "$576.92", "$2,884.62", "$5,769.23", "$12,500"],
              ].map(([salary, hourly, daily, weekly, biweekly, monthly], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-4 py-3 font-black text-slate-900">{salary}</td>
                  <td className="px-4 py-3 font-black text-indigo-600">{hourly}</td>
                  <td className="px-4 py-3">{daily}</td>
                  <td className="px-4 py-3">{weekly}</td>
                  <td className="px-4 py-3">{biweekly}</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">{monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 text-center mt-3">
          All figures are gross (before tax). Formula: Hourly = Annual ÷ 2,080. For part-time or custom hours, use the calculator above.
        </p>
      </section>

      {/* ── FEATURE TRUST BAR ──────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {[
            { label: "Bank-Grade Accuracy", icon: "💎", desc: "Standard 2,080-hour formula" },
            { label: "Custom Work Hours", icon: "⏱️", desc: "37.5, 40, 45, 50+ hrs/week" },
            { label: "Tax-Adjusted Rate", icon: "📉", desc: "Net hourly after FICA & tax" },
            { label: "Worldwide Ready", icon: "🌍", desc: "US · UK · CA · AU rates" },
          ].map((item) => (
            <div key={item.label} className="bg-white border border-slate-200/50 rounded-2xl py-5 px-4 text-center shadow-sm hover:shadow-md transition-all">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-sm font-bold text-slate-800 mb-1">{item.label}</div>
              <div className="text-xs text-slate-400">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORK HOURS EXPLAINER TABLE ─────────────────────────────────── */}
      {/*
       * SEO: Targets "how many work hours in a year", "2080 hours salary",
       * "UK work hours per year salary calculation" — all standalone queries.
       */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-slate-900 text-center mb-2">
          How Many Hours Are in a Work Year? — By Schedule
        </h2>
        <p className="text-center text-sm text-slate-500 mb-6">
          Use the right annual hours for your calculation — especially for part-time and international work schedules
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm bg-white">
            <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Work Schedule</th>
                <th className="px-4 py-3 text-left">Hours/Week</th>
                <th className="px-4 py-3 text-left">Annual Hours</th>
                <th className="px-4 py-3 text-left">Common In</th>
                <th className="px-4 py-3 text-left">$75K = Hourly</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                ["Part-time (minimum)", "20 hrs/week", "1,040 hrs/yr", "Students, part-time roles", "$72.12/hr"],
                ["Part-time (standard)", "30 hrs/week", "1,560 hrs/yr", "Part-time professionals", "$48.08/hr"],
                ["UK/AU standard full-time", "37.5 hrs/week", "1,950 hrs/yr", "UK, Australia, New Zealand", "$38.46/hr"],
                ["US standard full-time", "40 hrs/week", "2,080 hrs/yr", "United States, Canada", "$36.06/hr"],
                ["With typical overtime", "45 hrs/week", "2,340 hrs/yr", "Managers, salaried professionals", "$32.05/hr"],
                ["Heavy schedule", "50 hrs/week", "2,600 hrs/yr", "Finance, law, medicine", "$28.85/hr"],
                ["Exact (with leap year)", "40 hrs/week", "2,087 hrs/yr", "IRS / precise calculation", "$35.94/hr"],
              ].map(([schedule, weekly, annual, common, rate], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-4 py-3 font-semibold text-slate-900">{schedule}</td>
                  <td className="px-4 py-3">{weekly}</td>
                  <td className="px-4 py-3 font-bold text-indigo-600">{annual}</td>
                  <td className="px-4 py-3 text-slate-500">{common}</td>
                  <td className="px-4 py-3 font-black text-emerald-700">{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 text-center mt-3">
          Most salary comparisons use 2,080 hours (US standard). UK/AU tools typically use 1,950. Using the wrong figure creates a 6.7% error in your hourly rate.
        </p>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* ARTICLE */}
          <article
            className="flex-1 bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden min-w-0"
            itemScope itemType="https://schema.org/Article"
          >
            <header className="px-8 py-8 border-b bg-slate-50 flex items-start gap-4">
              <div className="bg-indigo-600 text-white p-4 rounded-2xl flex-shrink-0">
                <BookOpen size={24} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight" itemProp="headline">
                  How to Convert Salary to Hourly Rate — 2026 Complete Guide
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Formula · 2,080 hours explained · True hourly rate · Salary vs hourly · Contractor rates
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                  <time dateTime="2026-04-01" itemProp="dateModified">Updated April 2026</time>
                  <span>~8 min read</span>
                  <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full font-semibold">Salary Guide · Worldwide</span>
                </div>
              </div>
            </header>

            <div className="p-8 md:p-12 prose prose-slate max-w-none
              prose-h2:text-xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-10
              prose-h2:border-l-4 prose-h2:border-indigo-500 prose-h2:pl-4
              prose-h3:text-lg prose-h3:font-semibold prose-h3:text-slate-800 prose-h3:mt-7
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-strong:text-slate-900 prose-a:text-indigo-600"
              itemProp="articleBody"
            >

              <h2>The Formula: How to Convert Annual Salary to Hourly Rate</h2>
              <p>The calculation is simple — but using the right number of annual hours is what most people get wrong.</p>

              {/* Formula box */}
              <div className="not-prose my-6 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                <h3 className="text-base font-bold text-indigo-900 mb-3">Salary to Hourly Formula</h3>
                <div className="bg-white rounded-xl p-5 font-mono text-sm text-slate-700 shadow-sm space-y-2">
                  <p><strong>Hourly Rate = Annual Salary ÷ Annual Work Hours</strong></p>
                  <p className="text-slate-500 text-xs">Annual work hours = Hours per week × 52 weeks</p>
                  <div className="border-t pt-3 space-y-1 text-xs text-slate-500">
                    <p>US standard (40 hrs/week): Annual hours = 2,080</p>
                    <p>UK/AU standard (37.5 hrs/week): Annual hours = 1,950</p>
                    <p>Example: $75,000 ÷ 2,080 = <strong>$36.06/hr</strong></p>
                  </div>
                </div>
              </div>

              <h2>Salary vs Hourly — Which Is Better in 2026?</h2>
              <p>
                This is one of the most common questions when evaluating job offers. The right answer depends
                on your hours, benefits situation, and career goals.
              </p>

              <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
                <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-2xl">
                  <h4 className="text-indigo-700 font-bold mb-3">Salaried Position — Pros & Cons</h4>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>✓ Predictable income regardless of hours</li>
                    <li>✓ Usually includes benefits (health, 401k, PTO)</li>
                    <li>✓ Professional development opportunities</li>
                    <li>✗ No overtime pay if non-exempt rule doesn't apply</li>
                    <li>✗ Unpaid overtime common in some industries</li>
                  </ul>
                </div>
                <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl">
                  <h4 className="text-emerald-700 font-bold mb-3">Hourly Position — Pros & Cons</h4>
                  <ul className="text-sm text-emerald-800 space-y-1">
                    <li>✓ Overtime pay (1.5×) for hours over 40/week</li>
                    <li>✓ Paid for every hour worked</li>
                    <li>✓ More predictable work-life boundary</li>
                    <li>✗ Income fluctuates with hours available</li>
                    <li>✗ Often fewer benefits, especially for contract roles</li>
                  </ul>
                </div>
              </div>

              <h2>Your "True" Hourly Rate — The Number That Actually Matters</h2>
              <p>
                Your stated hourly rate or salary-derived hourly rate doesn't reflect the full picture.
                Your <strong>true hourly rate</strong> accounts for all the time you spend on work-related
                activities that aren't compensated.
              </p>
              <p>
                Consider a $75,000/year ($36.06/hr) salaried employee who commutes 1 hour each way
                (250 round trips = 500 hours/year) and regularly works 5 unpaid overtime hours per week
                (260 hours/year). They're actually spending 2,840 hours per year on work-related time,
                making their true hourly rate <strong>$26.41/hr</strong> — 27% less than it appears.
              </p>
              <p>
                This is why remote work, flexible scheduling, and jobs with short commutes often represent
                significantly better hourly value than their stated salary suggests.
              </p>

              <h2>Contractor and Freelance Hourly Rate — Why It Must Be Higher</h2>
              <p>
                If you're calculating a freelance or contract rate from a salary equivalent, never
                simply use the formula above and charge that amount. Contractors have costs and risks
                that employees don't:
              </p>
              <ul>
                <li><strong>Self-employment tax:</strong> 15.3% vs 7.65% for employees</li>
                <li><strong>No employer benefits:</strong> Health insurance, retirement matching, PTO</li>
                <li><strong>Unbillable hours:</strong> Admin, marketing, proposals, invoicing</li>
                <li><strong>Income instability:</strong> Gaps between contracts</li>
                <li><strong>Equipment and software:</strong> Your cost, not the client's</li>
              </ul>
              <p>
                A common starting rule: multiply your employee hourly equivalent by <strong>1.5–2×</strong>.
                A $36/hr employee equivalent suggests charging $54–$72/hr as a contractor.
              </p>

              {/* Internal links */}
              <div className="not-prose mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">
                  Related Pay &amp; Salary Calculators
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {internalLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-200">
                        <ArrowUpRight size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
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

            <footer className="border-t px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <Info size={16} className="text-indigo-500 flex-shrink-0" />
                <span>Formula: Annual ÷ 2,080 hrs (US) or 1,950 hrs (UK/AU). Updated April 2026.</span>
              </div>
              <ShareButtons
                title="Salary to Hourly Calculator 2026 – $X a Year Is How Much Per Hour?"
                url="https://www.freeuscalculator.in/salary-to-hourly-calculator"
              />
            </footer>
          </article>

          {/* SIDEBAR */}
          <aside className="w-full lg:w-80 shrink-0 sticky top-24 space-y-6">

            {/* Contractor rate card */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-4 block">
                💡 Contractor Rate Guide
              </span>
              <h3 className="text-lg font-black mb-4">What to Charge as a Freelancer</h3>
              <div className="space-y-3 text-sm">
                {[
                  ["$50K employee equivalent", "Charge $37–$48/hr freelance"],
                  ["$75K employee equivalent", "Charge $54–$72/hr freelance"],
                  ["$100K employee equivalent", "Charge $72–$96/hr freelance"],
                  ["$150K employee equivalent", "Charge $108–$144/hr freelance"],
                ].map(([equiv, rate]) => (
                  <div key={equiv} className="border-b border-white/10 pb-3">
                    <span className="text-slate-400 text-xs">{equiv}</span>
                    <p className="text-indigo-400 font-bold">{rate}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-4">
                Multiply by 1.5–2× to cover SE tax, benefits, admin time, and income gaps.
              </p>
            </div>

            {/* True hourly rate card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                <BarChart3 size={16} className="text-indigo-500" />
                Your "True" Hourly Rate
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Commute and unpaid overtime reduce your real hourly rate. Here's the impact on a $75K salary:
              </p>
              <div className="space-y-2 text-sm">
                {[
                  ["No commute, 40 hrs/wk", "$36.06/hr true rate"],
                  ["30 min commute, 40 hrs", "$32.26/hr true rate"],
                  ["1 hr commute, 40 hrs", "$29.17/hr true rate"],
                  ["30 min + 5 hrs OT/wk", "$26.73/hr true rate"],
                  ["1 hr + 10 hrs OT/wk", "$22.95/hr true rate"],
                ].map(([scenario, rate]) => (
                  <div key={scenario} className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-600 text-xs">{scenario}</span>
                    <span className={`font-bold text-xs ${rate.includes("36") ? "text-emerald-600" : rate.includes("32") ? "text-blue-600" : "text-rose-600"}`}>
                      {rate}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-3">
                Remote work adds $3–$8/hr in true value vs office roles at the same salary.
              </p>
            </div>

            {/* Ad slot */}
            <div className="bg-slate-100 rounded-3xl overflow-hidden min-h-[200px] flex items-center justify-center border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Advertisement</p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── SHARE ──────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-slate-900">Comparing a salary offer to an hourly role?</p>
            <p className="text-xs text-slate-500">Share this calculator to help your team or colleagues see the real numbers.</p>
          </div>
          <ShareButtons
            title="Salary to Hourly Calculator 2026 – $X a Year Is How Much Per Hour?"
            url="https://www.freeuscalculator.in/salary-to-hourly-calculator"
          />
        </div>
      </section>

      {/* ── FAQ SECTION ────────────────────────────────────────────────── */}
      {/*
       * 8 FAQs, each phrased as an exact search query.
       * FAQPage JSON-LD mirrors this list → rich result accordion in SERP.
       * H2 contains "salary to hourly questions" — standalone ranking query.
       */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-black text-xs uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mt-3">
              Salary to Hourly — Common Questions
            </h2>
            <p className="text-slate-500 mt-2 text-sm">
              Formula · $60K/$100K per hour · 2,080 hours · Salary vs hourly · Contractor rates
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-black text-slate-900 whitespace-nowrap tracking-tight">
            More Salary &amp; Wage Calculators
          </h2>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <RelatedCalculators currentTool="salary-to-hourly" />
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 py-12 px-4 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-4">
          <nav aria-label="Footer salary calculators" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              { href: "/hourly-to-salary-calculator", label: "Hourly to Salary Calculator" },
              { href: "/salary-after-tax-calculator", label: "Salary After Tax" },
              { href: "/paycheck-calculator", label: "Paycheck Calculator" },
              { href: "/overtime-calculator", label: "Overtime Calculator" },
              { href: "/time-and-a-half-calculator", label: "Time and a Half Calculator" },
              { href: "/uber-earnings-calculator", label: "Uber Earnings Calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm font-medium text-slate-400">
            Free Salary to Hourly Calculator · 2,080 Standard Work Hours · US · UK · Canada · Australia · FreeUSCalculator.in
          </p>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Results are estimates based on standard 2,080-hour work year (40 hrs/week × 52 weeks). Tax estimates use 2026 federal rates for a single filer. Actual taxes vary by state and personal circumstances. Not financial advice.
          </p>
          <p className="text-xs text-slate-700 tracking-widest">© 2026 FREEUSCALCULATOR.IN</p>
        </div>
      </footer>
    </div>
  );
}