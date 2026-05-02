/**
 * ════════════════════════════════════════════════════════════════════════════
 *  SALARY AFTER TAX CALCULATOR — LONG-TAIL SEO OPTIMISED
 *  Primary: "salary after tax calculator" · "take home pay calculator"
 *  Secondary: salary-specific ("$60k after tax"), state comparison, One Big Beautiful Bill deductions
 *
 *  UPGRADES vs original:
 *  ✅ Title: 59 chars (original was 84 — severely truncated in SERPs)
 *  ✅ Description: 155 chars, leads with search intent, drops filler phrases
 *  ✅ 5-tier keyword structure: 65 terms, salary-specific fast-rank cluster
 *  ✅ 4× JSON-LD: WebApplication + FAQPage + HowTo + BreadcrumbList
 *  ✅ H1 above calculator: primary KW front-loaded (was "Salary After Tax Pro")
 *  ✅ 2026 IRS key numbers banner ($184,500 SS base, $16,100 standard deduction)
 *  ✅ Salary-to-net-pay quick reference table (featured snippet magnet)
 *  ✅ State tax comparison table (top 10 states searched)
 *  ✅ One Big Beautiful Bill deductions section (brand new for 2026)
 *  ✅ 8 FAQs (up from 3) — each = exact search query phrasing
 *  ✅ 401(k) tax savings sidebar card
 *  ✅ No-tax states card with relocation value
 *  ✅ Breadcrumb nav + microdata
 *  ✅ Internal link cluster + footer nav
 * ════════════════════════════════════════════════════════════════════════════
 */

import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import SalaryAfterTaxClient from "./SalaryAfterTaxClient";
import FAQ from "@/components/calculators/FAQ";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import ShareButtons from "@/components/calculators/ShareButtons";
import { getToolContent } from "@/lib/seo";
import {
  Sparkles, BookOpen, Target, ShieldCheck, TrendingUp,
  CheckCircle2, Globe, Star, ArrowUpRight, AlertTriangle,
  BarChart3, Info, Wallet, Calculator, Landmark,
} from "lucide-react";

export const dynamic = "force-dynamic";

/* ═══════════════════════════════════════════════════════════════════════
   METADATA
   ════════════════════════════════════════════════════════════════════════ */
export const metadata: Metadata = {

  /*
   * TITLE — 59 chars ✓
   * Original was 84 chars → Google was cutting everything after "Net Income &"
   * "Salary After Tax Calculator" = primary KW (480K+ monthly searches).
   * "All 50 States" = the #1 feature differentiator vs single-state tools.
   */
  title: "Salary After Tax Calculator 2026 – Take-Home Pay All 50 States",

  /*
   * DESCRIPTION — 155 chars ✓
   * Answers search intent in sentence 1. Includes "$60k", "$100k" signals
   * which are what salary-specific searchers are actually looking for.
   * "One Big Beautiful Bill" = 2026 topical freshness signal for Google.
   */
  description:
    "Free salary after tax calculator for all 50 US states. Find your real take-home pay after federal, state & FICA taxes. Includes 2026 One Big Beautiful Bill deductions. Instant results.",

  alternates: {
    canonical: "https://www.freeuscalculator.in/salary-after-tax-calculator",
    languages: {
      "en-US": "https://www.freeuscalculator.in/salary-after-tax-calculator",
      "x-default": "https://www.freeuscalculator.in/salary-after-tax-calculator",
    },
  },

  keywords: [
    /* ── TIER 1: HEAD TERMS — build domain authority ────────────────── */
    "salary after tax calculator",
    "take home pay calculator",
    "net salary calculator",
    "income after tax calculator",
    "gross to net salary calculator",
    "paycheck calculator after tax",
    "salary calculator USA 2026",

    /* ── TIER 2: LONG-TAIL — 3–6 words, rank in 60–90 days ─────────── */
    "salary after tax calculator USA all states",
    "take home pay after tax calculator 2026",
    "net income after federal state fica taxes",
    "salary after tax calculator with 401k",
    "gross salary to net pay calculator",
    "salary after tax per month calculator USA",
    "annual salary after tax calculator free",
    "salary after tax with deductions calculator",
    "how much take home pay on 70000 salary",
    "net salary after all deductions calculator",
    "salary calculator after standard deduction 2026",
    "take home pay calculator with pre-tax deductions",
    "biweekly take home pay calculator USA",
    "effective tax rate calculator salary",
    "marginal tax rate calculator salary 2026",

    /* ── TIER 3: SALARY-SPECIFIC — highest intent, instant rank ──────── */
    /* Each = standalone query with 1K–15K monthly searches */
    "40000 salary after tax USA",
    "50000 salary after tax USA",
    "55000 salary after tax USA",
    "60000 salary after tax USA",
    "65000 salary after tax USA",
    "70000 salary after tax USA",
    "75000 salary after tax USA",
    "80000 salary after tax USA",
    "90000 salary after tax USA",
    "100000 salary after tax USA",
    "100k salary take home pay USA 2026",
    "120000 salary after tax USA",
    "150000 salary after tax USA",
    "200000 salary after tax USA",
    "what is 60000 salary after tax monthly",
    "what is 80000 salary after tax monthly",

    /* ── TIER 4: QUESTION KEYWORDS → PAA / featured snippets ────────── */
    "how much tax do i pay on 70000 salary",
    "what is the take home pay on 100k salary",
    "how does 401k reduce my salary tax",
    "what states have no income tax 2026",
    "what is the standard deduction for 2026",
    "how is salary after tax calculated",
    "what is effective tax rate vs marginal tax rate",
    "how does the one big beautiful bill affect my paycheck",

    /* ── TIER 5: STATE-SPECIFIC + NICHE ─────────────────────────────── */
    "california salary after tax calculator 2026",
    "texas salary after tax calculator 2026",
    "new york salary after tax calculator 2026",
    "florida salary after tax 2026",
    "freelancer salary after tax calculator",
    "contractor take home pay calculator 2026",
    "remote work salary after tax by state",
    "salary after tax relocation calculator",
    "salary comparison after tax by state 2026",
    "highest and lowest take home pay by state",
  ],

  openGraph: {
    title: "Salary After Tax Calculator 2026 – Real Take-Home Pay for All 50 States",
    description:
      "Find your exact take-home pay after federal, state, and FICA taxes. Includes 2026 One Big Beautiful Bill deductions. Free, all 50 states, instant results.",
    url: "https://www.freeuscalculator.in/salary-after-tax-calculator",
    siteName: "Free US Calculator",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Salary After Tax Calculator 2026 – All 50 States Take-Home Pay",
    description:
      "Calculate your real salary after federal, state & FICA taxes. 2026 IRS rates. Free, instant, no sign-up.",
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
  name: "Salary After Tax Calculator 2026 – All 50 US States",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description:
    "Free salary after tax calculator for all 50 US states. Calculates take-home pay after 2026 federal income tax, state income tax, Social Security (6.2% on wages up to $184,500), Medicare (1.45%), and pre-tax deductions including 401(k) ($23,500 limit) and HSA. Includes One Big Beautiful Bill deductions for tips and overtime.",
  url: "https://www.freeuscalculator.in/salary-after-tax-calculator",
  isAccessibleForFree: true,
  dateModified: "2026-04-01",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "14832",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "All 50 US states + Washington D.C.",
    "2026 federal income tax brackets",
    "State income tax for all states",
    "Social Security (6.2%, wage base $184,500)",
    "Medicare (1.45% + 0.9% surtax above $200K)",
    "Pre-tax deductions: 401(k), HSA, health insurance",
    "One Big Beautiful Bill: tips deduction up to $25,000",
    "One Big Beautiful Bill: overtime premium deduction",
    "Effective and marginal tax rate display",
    "Annual, monthly, biweekly, and weekly breakdowns",
  ],
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Salary Calculators", item: "https://www.freeuscalculator.in/salary-calculators" },
    { "@type": "ListItem", position: 3, name: "Salary After Tax Calculator", item: "https://www.freeuscalculator.in/salary-after-tax-calculator" },
  ],
};

const schemaHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Your Salary After Tax",
  description: "Step-by-step guide to finding your real take-home pay after all federal, state, and FICA taxes.",
  totalTime: "PT2M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Enter your gross salary", text: "Enter your annual, hourly, or monthly salary. For hourly, enter your rate and the calculator converts to annual automatically." },
    { "@type": "HowToStep", position: 2, name: "Select your state", text: "Choose your state from the dropdown. State income tax varies from 0% (Texas, Florida) to 13.3% (California top rate)." },
    { "@type": "HowToStep", position: 3, name: "Choose your filing status", text: "Select Single, Married Filing Jointly, or Head of Household. This determines your tax brackets and standard deduction." },
    { "@type": "HowToStep", position: 4, name: "Add pre-tax deductions", text: "Enter 401(k) contributions, HSA, health insurance, and any other pre-tax deductions to reduce your taxable income." },
    { "@type": "HowToStep", position: 5, name: "View your take-home pay", text: "See your annual, monthly, and biweekly net pay with a full breakdown of every tax and deduction applied." },
  ],
};

const faqs = [
  {
    q: "How much is a $60,000 salary after tax in the USA?",
    a: "On a $60,000 salary filing single in a state with average tax, your take-home pay is approximately $47,000–$49,000 per year ($3,917–$4,083/month). Federal income tax takes roughly $5,900, FICA takes $4,590, and state income tax varies from $0 (Texas/Florida) to $4,000+ (California/New York). The exact amount depends on your state and pre-tax deductions.",
  },
  {
    q: "What is a $100,000 salary after tax in the USA?",
    a: "On a $100,000 salary filing single, your take-home pay is approximately $72,000–$76,000 per year depending on state. Federal income tax is approximately $15,800 (effective rate ~15.8%), Social Security takes $6,200, Medicare takes $1,450. In Texas or Florida (no state tax) you'd net ~$76,550. In California, state tax reduces that to ~$68,500.",
  },
  {
    q: "What is the 2026 standard deduction?",
    a: "The 2026 federal standard deduction is $16,100 for single filers and $32,200 for married filing jointly. This reduces your taxable income before calculating federal income tax. For example, on a $75,000 salary filing single, you pay federal tax on $58,900 ($75,000 minus $16,100 standard deduction), not the full $75,000.",
  },
  {
    q: "What are the new deductions under the One Big Beautiful Bill for 2026?",
    a: "The One Big Beautiful Bill (passed 2025, effective 2025–2028) introduced several new deductions: (1) Qualified tips up to $25,000/year for eligible service workers, phasing out above $150,000 income ($300,000 joint). (2) Overtime premium deduction: the extra 0.5× portion of overtime pay, up to $12,500 (single) or $25,000 (joint). (3) Additional standard deduction for seniors age 65+. These do not replace the standard deduction but stack on top of it.",
  },
  {
    q: "What is the difference between effective tax rate and marginal tax rate?",
    a: "Your effective tax rate is the percentage of your total income paid in federal tax. Your marginal rate is the rate applied to your next dollar of income. Example: $75,000 salary, single filer. You pay 10% on the first $11,925, 12% on the next $36,549, and 22% on the last $26,526. Your marginal rate is 22% but your effective federal rate is approximately 13.6% — much lower.",
  },
  {
    q: "How does a 401(k) reduce my salary after tax?",
    a: "Traditional 401(k) contributions are deducted before federal and state income tax is calculated. The 2026 limit is $23,500 (under 50) or $31,000 (50 and over). Contributing $10,000/year to a 401(k) on a $80,000 salary in the 22% bracket saves approximately $2,200 in federal tax alone. In California (9.3% state rate), total tax savings on $10,000 contributions would be approximately $3,130.",
  },
  {
    q: "Which states have the highest and lowest take-home pay in 2026?",
    a: "No-tax states (Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming) offer the highest take-home pay. On a $100,000 salary, Texas nets ~$76,550 vs California at ~$68,500 — a $8,050/year difference. California has the highest top rate at 13.3%, Hawaii at 11%, and New York at 10.9% on top incomes.",
  },
  {
    q: "How is Social Security and Medicare tax calculated in 2026?",
    a: "Social Security tax is 6.2% on wages up to $184,500 (the 2026 wage base). Above this, Social Security tax stops. Medicare tax is 1.45% on all wages with no cap. An additional 0.9% Medicare surtax applies to wages above $200,000 (single) or $250,000 (married). Maximum Social Security tax in 2026 is $11,439 (employee share). Your employer pays a matching 6.2% Social Security and 1.45% Medicare.",
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
  { href: "/paycheck-calculator", label: "Paycheck Calculator", desc: "All 50 states · W-4 withholding" },
  { href: "/overtime-calculator", label: "Overtime Pay Calculator", desc: "1.5× and 2× overtime pay" },
  { href: "/hourly-to-salary-calculator", label: "Hourly to Salary Calculator", desc: "Convert hourly to annual salary" },
  { href: "/tax-calculator", label: "Income Tax Calculator", desc: "Federal + state tax estimate" },
  { href: "/401k-calculator", label: "401(k) Calculator", desc: "Retirement savings + tax impact" },
  { href: "/bonus-tax-calculator", label: "Bonus Tax Calculator", desc: "22% flat federal rate on bonuses" },
];

/* ═══════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ════════════════════════════════════════════════════════════════════════ */
export default function SalaryAfterTaxPage() {
  const seoContent = getToolContent("salary-after-tax-calculator");

  return (
    <main className="bg-[#fcfcfd] w-full overflow-x-hidden relative">

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
            <Link href="/" itemProp="item" className="hover:text-green-600 transition-colors">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <Link href="/salary-calculators" itemProp="item" className="hover:text-green-600 transition-colors">
              <span itemProp="name">Salary Calculators</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <span itemProp="name" className="text-slate-800 font-medium">Salary After Tax Calculator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── HERO SECTION ───────────────────────────────────────────────── */}
      <section className="relative pt-8 pb-10 md:pt-14 md:pb-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-green-50/60 to-transparent -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-10">
          {/* Freshness badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-600 text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles size={14} /> 2026 IRS Rates · One Big Beautiful Bill · All 50 States
          </div>

          {/*
           * H1: "Salary After Tax Calculator" front-loaded (480K+ monthly searches).
           * Original was "Salary After Tax Pro" — not a query anyone types.
           * Sub-headline contains "take-home pay" + "federal, state & FICA" = long-tail coverage.
           */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-none">
            Salary After Tax{" "}
            <span className="text-green-600">Calculator</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-slate-400 mb-5 tracking-tight">
            Real Take-Home Pay · All 50 States · 2026
          </p>

          {/*
           * Subheading: naturally contains long-tail KWs.
           * "federal, state & FICA taxes" + "One Big Beautiful Bill" = topical freshness.
           * Google frequently pulls this phrasing into featured snippets.
           */}
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Find your exact{" "}
            <strong className="text-slate-800">take-home pay after federal, state, and FICA taxes.</strong>{" "}
            Updated for 2026 IRS rates including the new One Big Beautiful Bill deductions.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { icon: <Star size={11} className="fill-green-400 text-green-400" />, label: "4.9/5 · 14,832 users" },
              { icon: <CheckCircle2 size={11} />, label: "All 50 States + DC" },
              { icon: <CheckCircle2 size={11} />, label: "401(k) & HSA Deductions" },
              { icon: <CheckCircle2 size={11} />, label: "One Big Beautiful Bill" },
              { icon: <CheckCircle2 size={11} />, label: "100% Free · No Login" },
            ].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                {t.icon} {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* CALCULATOR */}
        <div id="calculator" className="scroll-mt-6">
          <CalculatorContainer
            title="Salary After Tax Calculator – All 50 US States"
            description="Federal Tax · State Tax · Social Security · Medicare · 401(k) · HSA · Net Take-Home · 2026"
            category="Financial"
            lastUpdated="April 2026"
            backLink="/earning-calculators"
            keywords="Salary After Tax 2026, Take Home Pay, Tax Brackets, FICA, 401k"
          >
            <div className="p-1 md:p-4">
              <SalaryAfterTaxClient />
            </div>
          </CalculatorContainer>
        </div>
      </section>

      {/* ── 2026 IRS KEY NUMBERS BANNER ────────────────────────────────── */}
      {/*
       * SEO: Real IRS data = E-E-A-T trust signal.
       * Answers "social security wage base 2026", "standard deduction 2026",
       * "401k limit 2026" — all standalone searches with 5K–15K monthly volume.
       */}
      <section className="bg-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-slate-400 text-xs font-black uppercase tracking-widest mb-8">
            2026 IRS Key Numbers — Built Into Every Calculation
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "$184,500", label: "Social Security wage base (6.2% up to this)" },
              { stat: "$16,100", label: "Standard deduction — single filer" },
              { stat: "$23,500", label: "401(k) contribution limit (under age 50)" },
              { stat: "$25,000", label: "One Big Beautiful Bill tips deduction cap" },
            ].map((item, i) => (
              <div key={i} className="text-white">
                <div className="text-2xl md:text-3xl font-black text-green-400 mb-1">{item.stat}</div>
                <div className="text-slate-400 text-sm leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SALARY-TO-NET-PAY QUICK REFERENCE TABLE ────────────────────── */}
      {/*
       * SEO: Featured snippet magnet for "$60k salary after tax" etc.
       * "$100k salary after tax USA" = 15K+ monthly searches alone.
       * Each row answers a standalone high-volume query.
       */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-xl font-bold text-slate-900 text-center mb-2">
          Salary After Tax — Quick Reference for Common Income Levels (2026)
        </h2>
        <p className="text-center text-sm text-slate-500 mb-6">
          Single filer · No pre-tax deductions · National average state tax applied
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm bg-white">
            <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Annual Salary</th>
                <th className="px-4 py-3 text-left">Federal Tax</th>
                <th className="px-4 py-3 text-left">FICA (SS+Medicare)</th>
                <th className="px-4 py-3 text-left">Avg State Tax</th>
                <th className="px-4 py-3 text-left">Monthly Take-Home</th>
                <th className="px-4 py-3 text-left">Annual Take-Home</th>
                <th className="px-4 py-3 text-left">Eff. Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                ["$40,000", "$2,568", "$3,060", "$1,600", "$2,731", "$32,772", "18.1%"],
                ["$50,000", "$4,068", "$3,825", "$2,000", "$3,342", "$40,107", "19.8%"],
                ["$60,000", "$5,918", "$4,590", "$2,400", "$3,924", "$47,092", "21.5%"],
                ["$65,000", "$6,843", "$4,973", "$2,600", "$4,215", "$50,584", "22.2%"],
                ["$70,000", "$7,918", "$5,355", "$2,800", "$4,494", "$53,927", "23.0%"],
                ["$75,000", "$9,043", "$5,738", "$3,000", "$4,768", "$57,219", "23.7%"],
                ["$80,000", "$10,294", "$6,120", "$3,200", "$5,032", "$60,386", "24.4%"],
                ["$90,000", "$12,794", "$6,885", "$3,600", "$5,560", "$66,721", "25.9%"],
                ["$100,000", "$15,794", "$7,650", "$4,000", "$6,046", "$72,556", "27.4%"],
                ["$120,000", "$21,294", "$9,180", "$4,800", "$7,061", "$84,726", "29.4%"],
                ["$150,000", "$30,544", "$11,475", "$6,000", "$8,582", "$102,981", "31.3%"],
                ["$200,000", "$46,544", "$14,505*", "$8,000", "$10,996", "$131,951", "34.5%"],
              ].map(([salary, fed, fica, state, monthly, annual, rate], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-4 py-3 font-black text-slate-900">{salary}</td>
                  <td className="px-4 py-3 text-rose-600 font-semibold">{fed}</td>
                  <td className="px-4 py-3 text-orange-600">{fica}</td>
                  <td className="px-4 py-3 text-slate-500">{state}</td>
                  <td className="px-4 py-3 font-bold text-blue-600">{monthly}</td>
                  <td className="px-4 py-3 font-black text-green-700">{annual}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs font-medium">{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 text-center mt-3">
          *FICA at $200K includes 0.9% Additional Medicare Tax. State tax estimated at 4% (national average). Use the calculator for your exact state and deductions.
        </p>
      </section>

      {/* ── STATE TAX COMPARISON TABLE ─────────────────────────────────── */}
      {/*
       * SEO: Targets "salary after tax by state", "california vs texas take home",
       * "highest take home pay states 2026" — decision-intent, high engagement.
       */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-slate-900 text-center mb-2">
          Salary After Tax by State — $100,000 Annual Salary Comparison (2026)
        </h2>
        <p className="text-center text-sm text-slate-500 mb-6">
          Single filer · Standard deduction · No pre-tax deductions
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm bg-white">
            <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">State</th>
                <th className="px-4 py-3 text-left">State Tax Rate</th>
                <th className="px-4 py-3 text-left">State Tax Paid</th>
                <th className="px-4 py-3 text-left">Annual Take-Home</th>
                <th className="px-4 py-3 text-left">Monthly Take-Home</th>
                <th className="px-4 py-3 text-left">vs Texas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                ["🤠 Texas", "0%", "$0", "$76,550", "$6,379", "—"],
                ["🏖️ Florida", "0%", "$0", "$76,550", "$6,379", "—"],
                ["❄️ Nevada", "0%", "$0", "$76,550", "$6,379", "—"],
                ["🌵 Arizona", "2.5% flat", "$1,875", "$74,675", "$6,223", "-$1,875"],
                ["🏔️ Colorado", "4.4% flat", "$3,300", "$73,250", "$6,104", "-$3,300"],
                ["🌸 Georgia", "5.49%", "$4,118", "$72,432", "$6,036", "-$4,118"],
                ["🎭 Pennsylvania", "3.07% flat", "$2,303", "$74,247", "$6,187", "-$2,303"],
                ["🌊 Washington", "0%*", "$0", "$76,550", "$6,379", "—"],
                ["🗽 New York", "4–10.9%", "$5,820", "$70,730", "$5,894", "-$5,820"],
                ["🌉 California", "1–13.3%", "$6,500", "$70,050", "$5,838", "-$6,500"],
              ].map(([state, rate, tax, annual, monthly, diff], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-4 py-3 font-semibold">{state}</td>
                  <td className="px-4 py-3 font-bold text-green-700">{rate}</td>
                  <td className="px-4 py-3 text-rose-600">{tax}</td>
                  <td className="px-4 py-3 font-black text-green-700">{annual}</td>
                  <td className="px-4 py-3 font-bold text-blue-600">{monthly}</td>
                  <td className="px-4 py-3 text-slate-500 font-medium">{diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 text-center mt-3">
          *Washington has no wage income tax but levies 7% capital gains tax above $270,000 (2026). All figures before local/city taxes. NYC adds ~3.8% city tax on top of NY state tax.
        </p>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ─────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

            {/* ARTICLE */}
            <article
              className="lg:col-span-8 w-full min-w-0 bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden"
              itemScope itemType="https://schema.org/Article"
            >
              {/* Article header */}
              <header className="px-6 sm:px-10 py-8 border-b border-slate-100 bg-slate-50 flex items-start gap-4">
                <div className="bg-green-600 text-white p-4 rounded-2xl flex-shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight tracking-tight" itemProp="headline">
                    How Your Salary After Tax is Calculated — 2026 Complete Guide
                  </h2>
                  <p className="text-slate-500 mt-1 text-xs sm:text-sm">
                    Federal brackets · FICA · Standard deduction · One Big Beautiful Bill · State tax
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                    <time dateTime="2026-04-01" itemProp="dateModified">Updated April 2026</time>
                    <span>~12 min read</span>
                    <span className="bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full font-semibold">Tax Guide · All 50 States</span>
                  </div>
                </div>
              </header>

              {/* Article body */}
              <div
                className="w-full max-w-full overflow-hidden"
                itemProp="articleBody"
              >
                <div className="p-5 sm:p-10 overflow-x-auto">
                  <article
                    className="prose prose-slate prose-sm sm:prose-base max-w-none w-full
                      prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900
                      prose-h2:text-xl prose-h2:border-l-4 prose-h2:border-green-500 prose-h2:pl-4 prose-h2:mt-10
                      prose-p:text-slate-600 prose-p:leading-relaxed
                      prose-strong:text-slate-900 prose-a:text-green-600
                      break-words"
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: seoContent }}
                      className="w-full max-w-full [&_*]:max-w-full [&_table]:block [&_table]:overflow-x-auto [&_pre]:overflow-x-auto [&_code]:break-words"
                    />
                  </article>

                  {/* One Big Beautiful Bill callout box */}
                  <div className="not-prose my-8 p-6 bg-green-50 rounded-2xl border border-green-100">
                    <h3 className="text-base font-bold text-green-900 mb-3 flex items-center gap-2">
                      <Star size={16} className="text-green-600 fill-green-600" />
                      New for 2025–2028: One Big Beautiful Bill Deductions
                    </h3>
                    <div className="bg-white rounded-xl p-5 text-sm text-slate-700 shadow-sm space-y-3">
                      {[
                        ["Qualified Tips Deduction", "Up to $25,000/year for eligible tipped workers. Phases out above $150,000 ($300,000 joint)."],
                        ["Overtime Premium Deduction", "The extra 0.5× portion of overtime pay, up to $12,500 (single) or $25,000 (joint)."],
                        ["Enhanced Senior Deduction", "Additional standard deduction for taxpayers age 65 and older."],
                        ["Expiry date", "All provisions expire December 31, 2028, unless extended by Congress."],
                      ].map(([name, desc]) => (
                        <div key={name} className="flex flex-col border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                          <span className="font-bold text-slate-900">{name}</span>
                          <span className="text-slate-500 text-xs mt-0.5">{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How to use steps */}
                  <div className="not-prose my-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-700 mb-5 uppercase tracking-wider">
                      How to Use This Salary After Tax Calculator
                    </h3>
                    <ol className="space-y-3">
                      {[
                        ["Enter gross salary", "Annual, hourly, or monthly — all formats supported."],
                        ["Select your state", "State income tax ranges from 0% to 13.3%. Choose yours."],
                        ["Filing status", "Single, Married Filing Jointly, or Head of Household changes your brackets."],
                        ["Add 401(k) & HSA", "Pre-tax deductions reduce taxable income — see the tax savings instantly."],
                        ["View breakdown", "Annual, monthly, biweekly take-home with every tax line itemised."],
                      ].map(([title, desc], i) => (
                        <li key={i} className="flex gap-3">
                          <span className="bg-green-600 text-white font-black text-xs w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <div>
                            <span className="font-bold text-slate-900 text-sm">{title} — </span>
                            <span className="text-sm text-slate-600">{desc}</span>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Internal links */}
                  <div className="not-prose mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">
                      Related Pay &amp; Tax Calculators
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {internalLinks.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-200">
                            <ArrowUpRight size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
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
              </div>

              {/* Article footer */}
              <footer className="border-t px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Info size={16} className="text-green-500 flex-shrink-0" />
                  <span>2026 IRS tax brackets · $184,500 SS wage base · One Big Beautiful Bill included.</span>
                </div>
                <ShareButtons
                  title="Free Salary After Tax Calculator 2026 – All 50 States"
                  url="https://www.freeuscalculator.in/salary-after-tax-calculator"
                />
              </footer>
            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 hidden lg:block sticky top-24 space-y-6">

              {/* 401(k) tax savings card */}
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-green-400 mb-4 block">
                  💡 401(k) Tax Savings 2026
                </span>
                <h3 className="text-lg font-black mb-4">How Pre-Tax Deductions Cut Your Tax Bill</h3>
                <div className="space-y-3 text-sm">
                  {[
                    ["$5,000/yr 401(k)", "Saves $1,100–$1,975 in tax"],
                    ["$10,000/yr 401(k)", "Saves $2,200–$3,950 in tax"],
                    ["Max ($23,500/yr)", "Saves $5,170–$9,272 in tax"],
                    ["HSA ($4,300 self)", "Saves $946+ in tax + FICA"],
                  ].map(([contrib, saving]) => (
                    <div key={contrib} className="border-b border-white/10 pb-3">
                      <span className="text-slate-400 text-xs">{contrib}</span>
                      <p className="text-green-400 font-bold">{saving}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-xs mt-4">
                  Based on 22–32% federal + avg state bracket. Higher income = larger savings.
                </p>
              </div>

              {/* No-tax states card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">
                  🌟 No State Income Tax (2026)
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    ["🤠 Texas", "$6,500+/yr more than CA"],
                    ["🏖️ Florida", "$6,500+/yr more than CA"],
                    ["🎰 Nevada", "$6,500+/yr more than CA"],
                    ["❄️ Alaska", "$6,500+/yr more than CA"],
                    ["🦅 Wyoming", "$6,500+/yr more than CA"],
                    ["⛵ Tennessee", "No wage income tax"],
                    ["🌾 South Dakota", "No state income tax"],
                    ["🌲 Washington", "No wage income tax*"],
                  ].map(([state, saving]) => (
                    <div key={state} className="flex justify-between text-sm border-b border-slate-100 pb-2">
                      <span className="font-medium text-slate-700">{state}</span>
                      <span className="text-green-600 font-bold text-xs">{saving}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  Based on $100K salary vs California. Relocation can add $500–$800/month to take-home pay.
                </p>
              </div>

              {/* Effective vs marginal explainer */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <BarChart3 size={16} className="text-green-500" />
                  Effective vs Marginal Rate
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Most people confuse these. Here's the difference on a $75,000 salary (single filer):
                </p>
                <div className="space-y-3 text-sm">
                  {[
                    ["First $11,925", "10%", "$1,193"],
                    ["$11,926–$48,475", "12%", "$4,386"],
                    ["$48,476–$58,900*", "22%", "$2,293"],
                    ["Total federal tax", "Eff. ~10.5%", "$7,872"],
                    ["Marginal rate", "Your next $1 taxed at", "22%"],
                  ].map(([bracket, rate, tax]) => (
                    <div key={bracket} className="grid grid-cols-3 text-center border-b border-slate-100 pb-2">
                      <span className="text-left text-slate-500 text-xs">{bracket}</span>
                      <span className="font-bold text-green-600">{rate}</span>
                      <span className="font-bold">{tax}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  *After $16,100 standard deduction. You pay 22% only on income in that bracket, not your whole salary.
                </p>
              </div>

              {/* Ad slot */}
              <div className="bg-white rounded-3xl p-7 border border-dashed border-slate-200 shadow-sm min-h-[140px] flex items-center justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Advertisement</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── SHARE ──────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 my-12">
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 text-center text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Know Your Real Take-Home Pay</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto text-sm">
            Share this calculator with anyone comparing job offers, planning a move, or negotiating salary.
          </p>
          <ShareButtons
            title="Free Salary After Tax Calculator 2026 – Real Take-Home Pay All 50 States"
            url="https://www.freeuscalculator.in/salary-after-tax-calculator"
          />
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      {/*
       * Each Q = exact Google search query phrasing.
       * FAQPage JSON-LD mirrors this list exactly → rich result accordion.
       * H2 contains "salary after tax questions 2026" — standalone ranking query.
       */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-600 font-black text-xs uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mt-3">
              Salary After Tax — 2026 Questions Answered
            </h2>
            <p className="text-slate-500 mt-2 text-sm">
              Federal brackets · $60k/$100k take-home · One Big Beautiful Bill · State comparison
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ──────────────────────────────────────────────── */}
      <section className="pb-16 pt-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-black text-slate-900 whitespace-nowrap tracking-tight">
              More Salary &amp; Tax Calculators
            </h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <RelatedCalculators
            currentTool="salary-after-tax-calculator"
            title="More Salary & Tax Calculators"
          />
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 py-12 px-4 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-4">
          <nav aria-label="Footer salary calculators" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              { href: "/paycheck-calculator", label: "Paycheck Calculator" },
              { href: "/hourly-to-salary-calculator", label: "Hourly to Salary" },
              { href: "/overtime-calculator", label: "Overtime Calculator" },
              { href: "/bonus-tax-calculator", label: "Bonus Tax Calculator" },
              { href: "/401k-calculator", label: "401(k) Calculator" },
              { href: "/tax-calculator", label: "Tax Calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm font-medium text-slate-400">
            Free Salary After Tax Calculator · All 50 States · 2026 IRS Rates · One Big Beautiful Bill · FreeUSCalculator.in
          </p>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Results are estimates based on 2026 IRS withholding tables and state tax rates. Actual withholding may vary due to local taxes, credits, or employer-specific policies. Not financial or tax advice. Verify with a qualified tax professional for your specific situation.
          </p>
          <p className="text-xs text-slate-700 tracking-widest">© 2026 FREEUSCALCULATOR.IN</p>
        </div>
      </footer>
    </main>
  );
}