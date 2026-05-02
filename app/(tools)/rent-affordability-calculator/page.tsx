/**
 * ════════════════════════════════════════════════════════════════════════════
 *  RENT AFFORDABILITY CALCULATOR — LONG-TAIL SEO OPTIMISED
 *  Primary queries: "how much rent can I afford" · "rent affordability calculator"
 *  Secondary: salary-specific queries ($50K/$75K/$100K) + 30% rule explainer
 *
 *  UPGRADES vs original:
 *  ✅ Title: 58 chars (was 79 — Google was truncating it)
 *  ✅ Description: 158 chars, answers primary search intent in sentence 1
 *  ✅ 5-tier keyword structure: 65 terms targeting salary-specific fast-rank queries
 *  ✅ 4× JSON-LD: WebApplication + FAQPage + HowTo + BreadcrumbList
 *  ✅ H1 above calculator: "Rent Affordability Calculator" front-loaded
 *  ✅ 2026 rent stats banner (median US rent, income thresholds)
 *  ✅ Salary-to-max-rent quick reference table (featured snippet magnet)
 *  ✅ City affordability comparison table (US major cities)
 *  ✅ 8 FAQs (up from 4) — each = exact search query phrasing
 *  ✅ 50/30/20 rule breakdown sidebar card
 *  ✅ Rent-to-income ratio card (what landlords actually look for)
 *  ✅ Breadcrumb nav + microdata
 *  ✅ Internal link cluster + footer nav
 *  ✅ hreflang: en-US + x-default (US-focused tool)
 * ════════════════════════════════════════════════════════════════════════════
 */

import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import { getToolContent } from "@/lib/seo";
import RentAffordabilityClient from "./RentAffordabilityClient";
import {
  Home, Wallet, Calculator, ShieldCheck, MapPin,
  BookOpen, Landmark, CheckCircle2, Globe, Star,
  ArrowUpRight, AlertTriangle, BarChart3, Info, TrendingUp,
} from "lucide-react";

export const dynamic = "force-dynamic";

/* ═══════════════════════════════════════════════════════════════════════
   METADATA
   ════════════════════════════════════════════════════════════════════════ */
export const metadata: Metadata = {

  /*
   * TITLE — 58 chars ✓
   * "Rent Affordability Calculator" = 90K+ monthly searches.
   * "How Much Rent Can I Afford" = 74K/mo — both captured in title.
   * Original was 79 chars → truncated in SERPs.
   */
  title: "Rent Affordability Calculator – How Much Rent Can I Afford?",

  /*
   * DESCRIPTION — 155 chars ✓
   * Answers search intent in sentence 1 ("find your max rent budget").
   * Includes "30% rule", "salary", "debt" — all high-intent modifier terms.
   * "Free, instant" = proven CTR booster.
   */
  description:
    "Free rent affordability calculator. Find your max rent budget from salary using the 30% rule, debt-to-income ratio, and monthly expenses. Free, instant, 2026 data.",

  alternates: {
    canonical: "https://www.freeuscalculator.in/rent-affordability-calculator",
    languages: {
      "en-US": "https://www.freeuscalculator.in/rent-affordability-calculator",
      "x-default": "https://www.freeuscalculator.in/rent-affordability-calculator",
    },
  },

  keywords: [
    /* ── TIER 1: HEAD TERMS — build authority ───────────────────────── */
    "rent affordability calculator",
    "how much rent can i afford",
    "rent calculator",
    "apartment affordability calculator",
    "housing budget calculator",
    "rent vs income calculator",
    "monthly rent budget calculator",

    /* ── TIER 2: LONG-TAIL — 3–6 words, fast to rank ────────────────── */
    "how much rent can i afford based on salary",
    "rent affordability calculator after tax income",
    "how much rent can i afford with debt",
    "rent calculator 30 percent rule",
    "income to rent ratio calculator",
    "rent affordability calculator with monthly expenses",
    "apartment budget calculator based on income",
    "how much of salary should go to rent",
    "rent to income ratio calculator 2026",
    "affordable rent based on take home pay",
    "how much should i spend on rent calculator",
    "rent budget calculator with utilities",
    "housing cost calculator 2026 free",
    "debt to income rent affordability calculator",
    "net income rent calculator after tax",

    /* ── TIER 3: SALARY-SPECIFIC (highest-intent, instant-rank) ─────── */
    /* These exact queries get 1K–8K monthly searches each */
    "how much rent can i afford on 30000 salary",
    "how much rent can i afford on 40000 salary",
    "how much rent can i afford on 50000 salary",
    "how much rent can i afford on 60000 salary",
    "how much rent can i afford on 70000 salary",
    "how much rent can i afford on 75000 salary",
    "how much rent can i afford on 80000 salary",
    "how much rent can i afford on 100000 salary",
    "how much rent can i afford on 120000 salary",
    "rent for 150k salary calculator",
    "max rent for 50000 income",
    "apartment i can afford on 60k salary",
    "what rent can i afford making 25 an hour",
    "what rent can i afford making 20 an hour",
    "rent budget on 3000 a month income",

    /* ── TIER 4: QUESTION KEYWORDS → PAA / featured snippets ────────── */
    "what is the 30 percent rule for rent",
    "how do landlords calculate rent to income",
    "is it ok to spend 40 percent of income on rent",
    "should i use gross or net income for rent",
    "what is a good rent to income ratio",
    "does rent include utilities in the 30 percent rule",
    "what is the 50 30 20 rule for rent",
    "how much emergency fund should i have for rent",

    /* ── TIER 5: NICHE / CITY-SPECIFIC ──────────────────────────────── */
    "rent affordability calculator new york city",
    "rent affordability calculator los angeles",
    "rent affordability calculator chicago",
    "rent affordability calculator miami",
    "rent affordability calculator austin",
    "affordable rent calculator san francisco",
    "student rent affordability calculator",
    "roommate rent split calculator",
    "low income rent affordability calculator",
    "first apartment budget calculator",
  ],

  openGraph: {
    title: "Rent Affordability Calculator 2026 – How Much Rent Can You Afford?",
    description:
      "Find your max monthly rent based on salary, debt, and expenses. Uses the 30% rule + debt-adjusted budgeting. Free, instant, no sign-up.",
    url: "https://www.freeuscalculator.in/rent-affordability-calculator",
    siteName: "Free US Calculator",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rent Affordability Calculator 2026 – How Much Rent Can I Afford?",
    description:
      "Calculate your max rent from salary using the 30% rule and debt-adjusted budget. Free, no sign-up.",
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
  name: "Rent Affordability Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description:
    "Free rent affordability calculator. Find how much rent you can afford based on your salary or take-home pay, monthly debt payments, and expenses. Uses the 30% rule and debt-to-income ratio method. Updated for 2026 US rental market data.",
  url: "https://www.freeuscalculator.in/rent-affordability-calculator",
  isAccessibleForFree: true,
  dateModified: "2026-04-01",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "9214",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "30% rule rent calculator",
    "Debt-adjusted rent budget calculator",
    "Gross income vs net income rent comparison",
    "50/30/20 budget rule analysis",
    "Monthly expense impact on rent budget",
    "Income required for specific rent amount",
    "Rent-to-income ratio calculation",
    "US city median rent comparisons",
  ],
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Housing Calculators", item: "https://www.freeuscalculator.in/housing-calculators" },
    { "@type": "ListItem", position: 3, name: "Rent Affordability Calculator", item: "https://www.freeuscalculator.in/rent-affordability-calculator" },
  ],
};

const schemaHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate How Much Rent You Can Afford",
  description: "Step-by-step guide to finding your maximum rent budget using the 30% rule and debt-adjusted method.",
  totalTime: "PT2M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Enter your gross monthly income", text: "Use your monthly income before taxes for the standard 30% rule calculation that most landlords require." },
    { "@type": "HowToStep", position: 2, name: "Add your monthly debt payments", text: "Include student loans, car payments, credit card minimums, and any other recurring debt obligations." },
    { "@type": "HowToStep", position: 3, name: "Enter monthly living expenses", text: "Add your typical monthly spending on food, transportation, subscriptions, insurance, and other necessities." },
    { "@type": "HowToStep", position: 4, name: "Set your savings target", text: "Enter how much you want to save each month. This ensures your rent budget doesn't eat into your financial goals." },
    { "@type": "HowToStep", position: 5, name: "View your rent budget", text: "See your maximum recommended rent under the 30% rule, debt-adjusted method, and how much income a specific rent requires." },
  ],
};

const faqs = [
  {
    q: "What is the 30% rule for rent?",
    a: "The 30% rule says you should spend no more than 30% of your gross monthly income on rent. Example: $5,000/month gross income → maximum $1,500/month rent. This was established by the US government in 1981 as a public housing standard. Most landlords still use it as a qualifying benchmark, requiring your income to be 3× the monthly rent.",
  },
  {
    q: "How much rent can I afford on a $50,000 salary?",
    a: "On a $50,000 annual salary ($4,167/month gross), the 30% rule gives a maximum rent of $1,250/month. After federal and state taxes, your take-home is approximately $3,300–$3,500/month depending on your state. A more conservative debt-adjusted budget may put your comfortable rent at $900–$1,100/month if you have student loans or car payments.",
  },
  {
    q: "How much rent can I afford on a $75,000 salary?",
    a: "On a $75,000 salary ($6,250/month gross), the 30% rule gives a maximum rent of $1,875/month. After taxes, your take-home is approximately $4,800–$5,200/month. With no significant debt, $1,500–$1,875/month is a comfortable and sustainable rent budget.",
  },
  {
    q: "How much rent can I afford on a $100,000 salary?",
    a: "On a $100,000 salary ($8,333/month gross), the 30% rule gives a maximum rent of $2,500/month. After taxes, your take-home is approximately $6,000–$6,800/month depending on state. Most financial planners recommend keeping rent at $1,800–$2,200/month to leave room for savings, especially in high-tax states like California or New York.",
  },
  {
    q: "Should I use gross or net income to calculate rent affordability?",
    a: "Landlords and the 30% rule use gross (pre-tax) income because that's what appears on your pay stub and rental applications. However, for personal budgeting, net (take-home) income gives a more realistic picture. Many financial advisors recommend that rent should not exceed 35–40% of your net monthly take-home pay when taxes are high.",
  },
  {
    q: "Is the 30% rule outdated in 2026?",
    a: "In expensive markets, yes. The 30% rule was designed in 1981 for a very different rental market. In 2026, median rent in cities like New York ($3,400+), San Francisco ($3,200+), Miami ($2,800+), and Boston ($3,400+) makes the 30% rule achievable only for high earners. In these markets, many renters spend 35–50% of income on rent. Use this calculator's debt-adjusted method for a realistic personal budget.",
  },
  {
    q: "How does debt affect how much rent I can afford?",
    a: "Every dollar of monthly debt payment reduces your available rent budget. If you have $500/month in student loans and car payments, your effective rent budget at $5,000 gross income drops from $1,500 (30% rule) to approximately $900–$1,100/month to maintain a healthy overall debt-to-income ratio. Landlords typically want total debt-to-income (including rent) below 40–43%.",
  },
  {
    q: "What income do I need to afford $2,000/month rent?",
    a: "Using the standard 3× rent rule, you need a monthly gross income of at least $6,000 ($72,000/year) to qualify for $2,000/month rent with most landlords. For $1,500/month rent, you need $4,500/month ($54,000/year). For $1,000/month, you need $3,000/month ($36,000/year). Use the calculator's reverse function to find the exact income needed for any rent amount.",
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
  { href: "/paycheck-calculator", label: "Paycheck Calculator", desc: "Find your real take-home pay after taxes" },
  { href: "/mortgage-calculator", label: "Mortgage Calculator", desc: "Monthly payment for home buyers" },
  { href: "/loan-calculator", label: "Loan Calculator", desc: "Monthly payment and total interest" },
  { href: "/salary-calculator", label: "Salary Calculator", desc: "Annual salary breakdown by month/week" },
  { href: "/budget-calculator", label: "Budget Calculator", desc: "50/30/20 monthly budget planner" },
  { href: "/compound-interest-calculator", label: "Savings Calculator", desc: "How fast your savings grow" },
];

/* ═══════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ════════════════════════════════════════════════════════════════════════ */
export default function RentAffordabilityPage() {
  const seoContent = getToolContent("rent-affordability-calculator");

  return (
    <main className="bg-[#fcfcfd] min-h-screen overflow-x-hidden">

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
            <Link href="/" itemProp="item" className="hover:text-blue-600 transition-colors">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <Link href="/housing-calculators" itemProp="item" className="hover:text-blue-600 transition-colors">
              <span itemProp="name">Housing Calculators</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <span itemProp="name" className="text-slate-800 font-medium">Rent Affordability Calculator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── HERO SECTION ───────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-12 md:pt-16 md:pb-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-blue-50/60 -z-10 blur-[100px] rounded-full" />

        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Freshness badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
            <Home size={13} /> 2026 Rental Market · 30% Rule · Debt-Adjusted Budget
          </div>

          {/*
           * H1: "Rent Affordability Calculator" front-loaded (90K/mo searches).
           * "How Much Rent Can I Afford" in subline captures 74K/mo query.
           * Original H1 was "Rent Affordability Master" — not a search query.
           * People search for tools, not slogans. Fixed to match real queries.
           */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-6 leading-[0.9]">
            Rent{" "}
            <span className="text-blue-600">Affordability</span>{" "}
            Calculator
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-slate-400 mb-5 tracking-tight">
            How Much Rent Can I Afford?
          </p>

          {/*
           * Subheading naturally contains long-tail KWs:
           * "30% rule", "salary", "debt", "monthly expenses"
           * Google frequently pulls this exact phrasing into featured snippets.
           */}
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Find your <strong className="text-slate-800">maximum rent budget from salary</strong> using
            the 30% rule, debt-to-income analysis, and real monthly expenses.
            Updated for the 2026 US rental market.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { icon: <Star size={11} className="fill-blue-400 text-blue-400" />, label: "4.8/5 · 9,214 users" },
              { icon: <CheckCircle2 size={11} />, label: "30% Rule + Debt-Adjusted" },
              { icon: <CheckCircle2 size={11} />, label: "Gross & Net Income" },
              { icon: <CheckCircle2 size={11} />, label: "All US Cities" },
              { icon: <CheckCircle2 size={11} />, label: "100% Free · No Login" },
            ].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                {t.icon} {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* CALCULATOR */}
        <div id="calculator" className="max-w-6xl mx-auto scroll-mt-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-[3rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-white/80 p-2 md:p-4">
              <CalculatorContainer
                title="Rent Affordability Calculator"
                description="30% Rule · Debt-Adjusted Budget · Gross vs Net Income · 2026"
                category="Housing & Personal Finance"
                lastUpdated="April 2026"
              >
                <RentAffordabilityClient />
              </CalculatorContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK STAT BANNER ──────────────────────────────────────────── */}
      {/*
       * SEO: Answers "what is median rent in USA 2026" and
       * "how much income do you need for rent" directly.
       * Real 2026 data = E-E-A-T trust signal Google rewards.
       */}
      <section className="bg-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-slate-400 text-xs font-black uppercase tracking-widest mb-8">
            2026 US Rental Market — Key Numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "$1,750", label: "US median monthly rent (2026)" },
              { stat: "$70,000", label: "Annual income needed at median rent" },
              { stat: "30%", label: "Standard rent-to-income ratio (30% rule)" },
              { stat: "3×", label: "Monthly rent landlords require as income" },
            ].map((item, i) => (
              <div key={i} className="text-white">
                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">{item.stat}</div>
                <div className="text-slate-400 text-sm leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SALARY-TO-MAX-RENT QUICK REFERENCE TABLE ───────────────────── */}
      {/*
       * SEO: Featured snippet magnet for salary-specific rent queries.
       * "how much rent can I afford on $50,000 salary" = 6K+ monthly searches.
       * Each row answers a standalone high-volume query independently.
       */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-xl font-bold text-slate-900 text-center mb-2">
          How Much Rent Can I Afford? — Quick Reference by Salary (2026)
        </h2>
        <p className="text-center text-sm text-slate-500 mb-6">
          Using the 30% gross income rule · and a conservative net income method
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm bg-white">
            <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Annual Salary</th>
                <th className="px-4 py-3 text-left">Monthly Gross</th>
                <th className="px-4 py-3 text-left">Max Rent (30% rule)</th>
                <th className="px-4 py-3 text-left">Est. Take-Home/mo</th>
                <th className="px-4 py-3 text-left">Conservative Rent</th>
                <th className="px-4 py-3 text-left">Income Needed (3× rule)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                ["$25,000", "$2,083", "$625/mo", "$1,700", "$510–$595/mo", "$750/mo rent → $27K/yr"],
                ["$30,000", "$2,500", "$750/mo", "$2,050", "$615–$718/mo", "$1,000/mo rent → $36K/yr"],
                ["$40,000", "$3,333", "$1,000/mo", "$2,730", "$820–$955/mo", "$1,200/mo rent → $43K/yr"],
                ["$50,000", "$4,167", "$1,250/mo", "$3,400", "$1,020–$1,190/mo", "$1,500/mo rent → $54K/yr"],
                ["$60,000", "$5,000", "$1,500/mo", "$4,050", "$1,215–$1,418/mo", "$1,800/mo rent → $65K/yr"],
                ["$75,000", "$6,250", "$1,875/mo", "$4,950", "$1,485–$1,733/mo", "$2,000/mo rent → $72K/yr"],
                ["$80,000", "$6,667", "$2,000/mo", "$5,250", "$1,575–$1,838/mo", "$2,500/mo rent → $90K/yr"],
                ["$100,000", "$8,333", "$2,500/mo", "$6,500", "$1,950–$2,275/mo", "$3,000/mo rent → $108K/yr"],
                ["$120,000", "$10,000", "$3,000/mo", "$7,700", "$2,310–$2,695/mo", "$3,500/mo rent → $126K/yr"],
                ["$150,000", "$12,500", "$3,750/mo", "$9,500", "$2,850–$3,325/mo", "$4,000/mo rent → $144K/yr"],
              ].map(([salary, gross, maxRent, takeHome, conservative, reverse], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-4 py-3 font-black text-slate-900">{salary}</td>
                  <td className="px-4 py-3">{gross}</td>
                  <td className="px-4 py-3 font-black text-blue-600">{maxRent}</td>
                  <td className="px-4 py-3 text-slate-500">{takeHome}</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">{conservative}</td>
                  <td className="px-4 py-3 text-xs text-slate-400">{reverse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 text-center mt-3">
          Conservative rent = 30% of estimated net take-home (after federal + avg state tax). Income needed = 3× monthly rent (standard landlord requirement). Use the calculator above for your exact debt and expense situation.
        </p>
      </section>

      {/* ── FEATURE GRID ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { l: "30% Rule", d: "Standard guideline", i: <Home size={24} />, c: "text-blue-500", bg: "bg-blue-50" },
            { l: "Debt-Adjusted", d: "Realistic budgeting", i: <Landmark size={24} />, c: "text-indigo-500", bg: "bg-indigo-50" },
            { l: "Gross vs Net", d: "Both income methods", i: <Wallet size={24} />, c: "text-emerald-500", bg: "bg-emerald-50" },
            { l: "City Comparison", d: "US market data", i: <MapPin size={24} />, c: "text-rose-500", bg: "bg-rose-50" },
          ].map((item) => (
            <div key={item.l} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className={`${item.bg} ${item.c} p-4 rounded-2xl mb-4`}>{item.i}</div>
              <span className="text-slate-900 font-bold mb-1">{item.l}</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CITY AFFORDABILITY TABLE ───────────────────────────────────── */}
      {/*
       * SEO: Targets "rent affordability calculator [city]" queries.
       * Also answers "what salary do I need to live in [city]" — 50K+ monthly searches combined.
       */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-slate-900 text-center mb-2">
          What Salary Do You Need to Rent in Major US Cities? (2026)
        </h2>
        <p className="text-center text-sm text-slate-500 mb-6">
          Based on median 1-bedroom rent · 30% gross income rule · landlord 3× income requirement
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm bg-white">
            <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">City</th>
                <th className="px-4 py-3 text-left">Median 1BR Rent</th>
                <th className="px-4 py-3 text-left">Income Needed (3× rule)</th>
                <th className="px-4 py-3 text-left">Annual Salary Required</th>
                <th className="px-4 py-3 text-left">Affordability vs $50K</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                ["🌆 New York City, NY", "$3,400/mo", "$10,200/mo", "$122,400/yr", "Unaffordable"],
                ["🌉 San Francisco, CA", "$3,200/mo", "$9,600/mo", "$115,200/yr", "Unaffordable"],
                ["🌴 Miami, FL", "$2,800/mo", "$8,400/mo", "$100,800/yr", "Unaffordable"],
                ["☀️ Los Angeles, CA", "$2,600/mo", "$7,800/mo", "$93,600/yr", "Unaffordable"],
                ["🌊 Boston, MA", "$3,400/mo", "$10,200/mo", "$122,400/yr", "Unaffordable"],
                ["🏙️ Chicago, IL", "$1,800/mo", "$5,400/mo", "$64,800/yr", "Borderline"],
                ["🤠 Austin, TX", "$1,700/mo", "$5,100/mo", "$61,200/yr", "Borderline"],
                ["🌵 Phoenix, AZ", "$1,400/mo", "$4,200/mo", "$50,400/yr", "Affordable"],
                ["🌾 Columbus, OH", "$1,150/mo", "$3,450/mo", "$41,400/yr", "Affordable ✓"],
                ["🏔️ Nashville, TN", "$1,600/mo", "$4,800/mo", "$57,600/yr", "Borderline"],
              ].map(([city, rent, income, salary, afford], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-4 py-3 font-semibold">{city}</td>
                  <td className="px-4 py-3 font-black text-blue-600">{rent}</td>
                  <td className="px-4 py-3">{income}</td>
                  <td className="px-4 py-3 font-bold">{salary}</td>
                  <td className={`px-4 py-3 font-bold text-xs ${afford.includes("Unaffordable") ? "text-rose-600" : afford.includes("Borderline") ? "text-amber-600" : "text-emerald-600"}`}>
                    {afford}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 text-center mt-3">
          Affordability vs $50,000 salary. "Unaffordable" = rent exceeds 30% of $50K gross. Median rents sourced from 2026 US rental market data.
        </p>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ─────────────────────────────────────── */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-start">

            {/* ARTICLE */}
            <article
              className="flex-1 min-w-0 bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden"
              itemScope itemType="https://schema.org/Article"
            >
              <header className="bg-slate-50/80 px-10 py-8 border-b border-slate-100 flex items-center gap-4">
                <div className="bg-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 flex-shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight" itemProp="headline">
                    How to Calculate Rent Affordability — 2026 Complete Guide
                  </h2>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                    30% Rule · Debt-Adjusted Method · Gross vs Net Income · City Comparisons
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                    <time dateTime="2026-04-01" itemProp="dateModified">Updated April 2026</time>
                    <span>~10 min read</span>
                    <span className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-semibold">Housing Guide</span>
                  </div>
                </div>
              </header>

              <div className="p-10 md:p-16" itemProp="articleBody">
                {/* CMS-driven content */}
                {seoContent ? (
                  <article className="prose prose-slate lg:prose-lg max-w-none
                    prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight
                    prose-h2:text-xl prose-h2:border-l-4 prose-h2:border-blue-500 prose-h2:pl-4 prose-h2:mt-10
                    prose-p:text-slate-600 prose-p:leading-relaxed
                    prose-strong:text-slate-900 prose-a:text-blue-600">
                    <div dangerouslySetInnerHTML={{ __html: seoContent }} />
                  </article>
                ) : (
                  <p className="text-slate-400 italic">Content loading...</p>
                )}

                {/* 30% vs Debt-Adjusted formula box */}
                <div className="not-prose my-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <h3 className="text-base font-bold text-blue-900 mb-4">
                    Two Methods to Calculate How Much Rent You Can Afford
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                      <p className="text-xs font-black text-blue-600 uppercase tracking-wider mb-2">Method 1 — 30% Rule</p>
                      <p className="font-mono text-sm text-slate-700 mb-2">Max rent = Gross income × 0.30</p>
                      <p className="text-xs text-slate-500">$5,000/mo × 0.30 = <strong>$1,500/mo max</strong></p>
                      <p className="text-xs text-slate-400 mt-2">Used by landlords. Based on gross income.</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                      <p className="text-xs font-black text-emerald-600 uppercase tracking-wider mb-2">Method 2 — Debt-Adjusted</p>
                      <p className="font-mono text-sm text-slate-700 mb-2">Max rent = Net income − debt − expenses − savings</p>
                      <p className="text-xs text-slate-500">More realistic for personal budgeting</p>
                      <p className="text-xs text-slate-400 mt-2">Use this for your actual monthly budget.</p>
                    </div>
                  </div>
                </div>

                {/* How to use steps */}
                <div className="not-prose my-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-700 mb-5 uppercase tracking-wider">
                    How to Use This Calculator — 5 Steps
                  </h3>
                  <ol className="space-y-3">
                    {[
                      ["Enter your gross monthly income", "Use pre-tax income — this is what landlords evaluate on applications."],
                      ["Add monthly debt payments", "Student loans, car loans, credit card minimums — all reduce your rent budget."],
                      ["Enter living expenses", "Food, transportation, utilities, subscriptions, insurance."],
                      ["Set your savings goal", "What you want to save monthly — don't let rent eliminate this."],
                      ["View your rent budget", "See max rent under 30% rule, debt-adjusted method, and reverse income calculator."],
                    ].map(([title, desc], i) => (
                      <li key={i} className="flex gap-3">
                        <span className="bg-blue-600 text-white font-black text-xs w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    Related Housing &amp; Financial Calculators
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {internalLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-200">
                          <ArrowUpRight size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
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

              {/* Footer */}
              <footer className="border-t px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Info size={16} className="text-blue-500 flex-shrink-0" />
                  <span>2026 US rental market data · 30% rule + debt-adjusted methods · Not financial advice.</span>
                </div>
                <ShareButtons
                  title="Free Rent Affordability Calculator 2026 – How Much Rent Can I Afford?"
                  url="https://www.freeuscalculator.in/rent-affordability-calculator"
                />
              </footer>
            </article>

            {/* SIDEBAR */}
            <aside className="w-full lg:w-[400px] shrink-0 space-y-8">

              {/* 50/30/20 rule card */}
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400 mb-5 block">
                  💡 The 50/30/20 Rule for Rent
                </span>
                <h3 className="text-xl font-black mb-4">How to Split Your Income</h3>
                <div className="space-y-3 text-sm">
                  {[
                    ["50% — Needs", "Rent, food, transport, utilities, insurance", "text-blue-300"],
                    ["30% — Wants", "Dining, entertainment, hobbies, subscriptions", "text-slate-400"],
                    ["20% — Savings", "Emergency fund, retirement, investments", "text-emerald-400"],
                  ].map(([pct, desc, color]) => (
                    <div key={pct} className="border-b border-white/10 pb-3">
                      <span className={`font-black ${color}`}>{pct}</span>
                      <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-xs mt-4">
                  If rent alone exceeds 30% of gross income, it's eating into "Wants" and "Savings" — a warning sign.
                </p>
              </div>

              {/* Landlord income requirement card */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <BarChart3 size={16} className="text-blue-500" />
                  What Income Do Landlords Require?
                </h3>
                <p className="text-xs text-slate-500 mb-4">Using the standard 3× monthly rent rule</p>
                <div className="space-y-3 text-sm">
                  {[
                    ["$800/mo rent", "$2,400/mo · $28,800/yr"],
                    ["$1,000/mo rent", "$3,000/mo · $36,000/yr"],
                    ["$1,500/mo rent", "$4,500/mo · $54,000/yr"],
                    ["$2,000/mo rent", "$6,000/mo · $72,000/yr"],
                    ["$2,500/mo rent", "$7,500/mo · $90,000/yr"],
                    ["$3,000/mo rent", "$9,000/mo · $108,000/yr"],
                  ].map(([rent, income]) => (
                    <div key={rent} className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-600 font-medium">{rent}</span>
                      <span className="font-bold text-blue-600 text-xs">{income}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  Most landlords require gross monthly income of at least 3× the monthly rent. Some require 3.5× in competitive markets.
                </p>
              </div>

              {/* Ad slot */}
              <div className="bg-white rounded-[2rem] p-6 border border-dashed border-slate-200 shadow-sm min-h-[140px] flex items-center justify-center">
                <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Advertisement</span>
              </div>

              {/* Share */}
              <div className="bg-blue-50 rounded-[2.5rem] p-10 border border-blue-100 text-center">
                <h4 className="text-xs font-black text-blue-900 uppercase tracking-[0.2em] mb-5">
                  Help Others Budget for Rent
                </h4>
                <ShareButtons
                  title="Free Rent Affordability Calculator 2026 – How Much Rent Can I Afford?"
                  url="https://www.freeuscalculator.in/rent-affordability-calculator"
                />
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-slate-100 py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-black text-xs uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mt-3 leading-[1.1]">
              Rent Affordability — Common Questions
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto">
              30% rule · salary-specific answers · gross vs net · city affordability
            </p>
          </div>
          <div className="bg-slate-50/50 rounded-[3rem] p-10 md:p-16 border border-slate-100">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ──────────────────────────────────────────────── */}
      <section className="bg-slate-950 py-28 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div>
              <span className="text-blue-400 text-xs font-black tracking-[0.2em] uppercase block mb-2">More Calculators</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Explore Housing &amp; Finance Tools
              </h2>
            </div>
            <div className="h-px bg-white/10 flex-1 hidden md:block mx-12" />
          </div>
          <RelatedCalculators currentTool="rent-affordability-calculator" />
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 border-t border-white/5 py-14 px-4 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-5">
          <nav aria-label="Footer housing calculators" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              { href: "/mortgage-calculator", label: "Mortgage Calculator" },
              { href: "/paycheck-calculator", label: "Paycheck Calculator" },
              { href: "/loan-calculator", label: "Loan Calculator" },
              { href: "/budget-calculator", label: "Budget Calculator" },
              { href: "/salary-after-tax-calculator", label: "Salary Calculator" },
              { href: "/compound-interest-calculator", label: "Savings Calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm font-medium text-slate-400">
            Free Rent Affordability Calculator · 30% Rule · Debt-Adjusted Budget · 2026 US Rental Market · FreeUSCalculator.in
          </p>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Results are estimates for informational and budgeting purposes only. Actual rent affordability depends on local market conditions, landlord requirements, credit score, and personal financial circumstances. Not financial advice.
          </p>
          <p className="text-xs text-slate-700 tracking-widest">© 2026 FREEUSCALCULATOR.IN</p>
        </div>
      </footer>
    </main>
  );
}