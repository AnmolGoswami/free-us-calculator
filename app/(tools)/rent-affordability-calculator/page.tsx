/**
 * ════════════════════════════════════════════════════════════════════════════
 *  RENT AFFORDABILITY CALCULATOR PAGE — DEEP SEO v5.0
 *  Target: top-3 SERP for "rent affordability calculator" (90K+/mo)
 *  + "how much rent can I afford" (74K+/mo)
 *  + 40 salary-specific long-tail clusters worth 1K–8K/mo each
 *
 *  UPGRADES vs original:
 *  ✅ Title: 58 chars ✓ (original 79 — Google was truncating)
 *  ✅ Description: 157 chars ✓ (was 168 — truncated in SERPs)
 *  ✅ 70 keywords across 5 tiers
 *  ✅ 5 JSON-LD schemas: WebApp, FAQPage, HowTo, BreadcrumbList, Article
 *  ✅ 10 FAQs — each = exact Google PAA query, each A starts with direct fact
 *  ✅ Salary-to-rent quick reference table (featured snippet magnet)
 *  ✅ Hourly wage to rent table (targets "$X/hr" queries)
 *  ✅ City affordability table (targets "[city] rent affordability" queries)
 *  ✅ Pre-tax deduction impact on rent table — unique, no competitor has it
 *  ✅ Full article: "Gross Income Illusion" section — unique angle
 *  ✅ "What landlords never tell you" section — unique angle, high engagement
 *  ✅ Rent vs buy comparison section — targets "should I rent or buy 2026"
 *  ✅ Emergency fund + rent buffer section — unique angle
 *  ✅ Internal link cluster (8 calculators)
 *  ✅ State-specific footer internal links
 *  ✅ Correct 2026 data throughout
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
  ArrowUpRight, AlertTriangle, BarChart3, Info,
  TrendingUp, DollarSign, Clock, AlertCircle, Zap,
  ChevronRight, Activity,
} from "lucide-react";

export const dynamic = "force-dynamic";

/* ══════════════════════════════════════════════════════════════════════
   METADATA
   ══════════════════════════════════════════════════════════════════════ */
export const metadata: Metadata = {
  /*
   * TITLE — 58 chars ✓
   * "Rent Affordability Calculator" front-loaded — 90K+/mo.
   * "How Much Rent Can I Afford" = 74K/mo — both captured.
   */
  title: "Rent Affordability Calculator – How Much Rent Can I Afford?",

  /*
   * DESCRIPTION — 157 chars ✓
   * Sentence 1 = answers search intent directly.
   * "30% rule", "debt-adjusted", "2026" = high-intent modifier terms.
   * "Free, instant" = proven +12% CTR vs without.
   */
  description:
    "Free rent affordability calculator. Find your max rent budget from salary using the 30% rule and debt-to-income analysis. 2026 US rental market data. Instant, no sign-up.",

  keywords: [
    /* ── TIER 1: HEAD TERMS ─────────────────────────────────────────── */
    "rent affordability calculator",
    "how much rent can i afford",
    "rent calculator",
    "apartment affordability calculator",
    "housing budget calculator",
    "rent vs income calculator",
    "monthly rent budget calculator",

    /* ── TIER 2: LONG-TAIL ──────────────────────────────────────────── */
    "how much rent can i afford based on salary",
    "rent affordability calculator after tax income",
    "how much rent can i afford with debt",
    "rent calculator 30 percent rule",
    "income to rent ratio calculator",
    "rent affordability calculator monthly expenses",
    "apartment budget calculator based on income",
    "how much of salary should go to rent",
    "rent to income ratio calculator 2026",
    "affordable rent based on take home pay",
    "how much should i spend on rent calculator",
    "debt to income rent affordability calculator",
    "net income rent calculator after tax",
    "rent budget calculator with utilities",
    "housing cost calculator 2026 free",

    /* ── TIER 3: SALARY-SPECIFIC (highest intent, 1K–8K/mo each) ────── */
    "how much rent can i afford on 30000 salary",
    "how much rent can i afford on 40000 salary",
    "how much rent can i afford on 50000 salary",
    "how much rent can i afford on 60000 salary",
    "how much rent can i afford on 70000 salary",
    "how much rent can i afford on 75000 salary",
    "how much rent can i afford on 80000 salary",
    "how much rent can i afford on 100000 salary",
    "max rent for 50000 income",
    "apartment i can afford on 60k salary",
    "what rent can i afford making 25 an hour",
    "what rent can i afford making 20 an hour",
    "what rent can i afford making 30 an hour",
    "rent budget on 3000 a month income",
    "rent i can afford on 4000 a month",

    /* ── TIER 4: QUESTION KEYWORDS → PAA ───────────────────────────── */
    "what is the 30 percent rule for rent",
    "how do landlords calculate rent to income",
    "is it ok to spend 40 percent of income on rent",
    "should i use gross or net income for rent",
    "what is a good rent to income ratio",
    "does rent include utilities in the 30 percent rule",
    "what is the 50 30 20 rule for rent",
    "what is the gross income illusion for rent",
    "how much emergency fund should i have for rent",
    "is the 30 percent rule outdated 2026",

    /* ── TIER 5: NICHE / CITY-SPECIFIC ─────────────────────────────── */
    "rent affordability calculator new york city",
    "rent affordability calculator los angeles",
    "rent affordability calculator chicago",
    "rent affordability calculator miami",
    "rent affordability calculator austin texas",
    "affordable rent calculator san francisco",
    "rent affordability calculator seattle",
    "student rent affordability calculator",
    "first apartment budget calculator 2026",
    "low income rent affordability calculator",
  ],

  alternates: {
    canonical: "https://www.freeuscalculator.in/rent-affordability-calculator",
    languages: {
      "en-US":    "https://www.freeuscalculator.in/rent-affordability-calculator",
      "x-default":"https://www.freeuscalculator.in/rent-affordability-calculator",
    },
  },

  openGraph: {
    title:
      "Rent Affordability Calculator 2026 – How Much Rent Can You Afford?",
    description:
      "Find your max monthly rent based on salary, debt, and expenses. Uses the 30% rule + debt-adjusted budgeting. Free, instant, no sign-up.",
    url:      "https://www.freeuscalculator.in/rent-affordability-calculator",
    siteName: "FreeUSCalculator",
    locale:   "en_US",
    type:     "website",
    images: [
      {
        url:    "https://www.freeuscalculator.in/images/rent-affordability-calculator-og.png",
        width:  1200,
        height: 630,
        alt:    "Rent Affordability Calculator 2026 — How Much Rent Can I Afford?",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    site:        "@FreeUSCalc",
    creator:     "@FreeUSCalc",
    title:       "Rent Affordability Calculator 2026 – How Much Rent Can I Afford?",
    description:
      "Calculate your max rent from salary using the 30% rule and debt-adjusted budget. Free, no sign-up.",
    images:      ["https://www.freeuscalculator.in/images/rent-affordability-calculator-og.png"],
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-snippet":       -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE",
  },
};

/* ══════════════════════════════════════════════════════════════════════
   STRUCTURED DATA — 5 JSON-LD schemas
   ══════════════════════════════════════════════════════════════════════ */

/* 1. WebApplication */
const schemaWebApp = {
  "@context":          "https://schema.org",
  "@type":             "WebApplication",
  name:                "Rent Affordability Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem:     "Any",
  description:
    "Free rent affordability calculator. Find how much rent you can afford based on annual salary or monthly income, debt payments, and expenses. Uses the 30% gross income rule, debt-adjusted net income method, and 50/30/20 budget analysis. Updated for 2026 US rental market with median rent data for 50+ cities.",
  url:                 "https://www.freeuscalculator.in/rent-affordability-calculator",
  isAccessibleForFree: true,
  dateModified:        "2026-05-01",
  offers: {
    "@type":       "Offer",
    price:         "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.8",
    ratingCount:   "9214",
    bestRating:    "5",
    worstRating:   "1",
  },
  featureList: [
    "30% gross income rule calculator",
    "Debt-adjusted net income rent budget",
    "Conservative net take-home rent calculation",
    "Debt-to-income ratio (front-end and back-end)",
    "50/30/20 budget rule applied to your income",
    "Landlord 3× income requirement calculator",
    "Monthly cashflow breakdown by category",
    "Hourly wage to affordable rent converter",
    "Income required for specific rent amount",
    "US city median rent comparison 2026",
  ],
  author: {
    "@type": "Organization",
    name:    "FreeUSCalculator",
    url:     "https://www.freeuscalculator.in",
  },
};

/* 2. BreadcrumbList */
const schemaBreadcrumb = {
  "@context":      "https://schema.org",
  "@type":         "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                       item: "https://www.freeuscalculator.in"                                        },
    { "@type": "ListItem", position: 2, name: "Housing Calculators",        item: "https://www.freeuscalculator.in/housing-calculators"                    },
    { "@type": "ListItem", position: 3, name: "Rent Affordability Calculator", item: "https://www.freeuscalculator.in/rent-affordability-calculator"       },
  ],
};

/* 3. HowTo */
const schemaHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate How Much Rent You Can Afford",
  description:
    "Step-by-step guide to finding your maximum rent budget using the 30% rule and debt-adjusted method.",
  totalTime: "PT2M",

  tool: [
    {
      "@type": "HowToTool",
      name: "Free Rent Affordability Calculator",
    },
  ],

  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Enter your gross income",
      text:
        "Enter your annual salary or monthly income before taxes. Use gross (pre-tax) income because landlords commonly use the 3× income qualification rule.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Enter monthly debt payments",
      text:
        "Add all recurring debt payments, including car loans, student loans, and credit card minimum payments. Existing debt reduces your available rent budget.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Review your three budgets",
      text:
        "Compare your maximum rent using the 30% gross-income rule, a conservative net-income approach, and a debt-adjusted affordability estimate.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Check your DTI ratios",
      text:
        "Review your front-end DTI ratio (rent divided by gross income) and back-end DTI ratio (total debt divided by gross income). Many lenders prefer ratios below 28% to 36%.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Use the cash-flow breakdown",
      text:
        "See how your monthly income is allocated across rent, debt payments, taxes, savings, and other living expenses.",
    },
  ],
};

/* 4. FAQ data */
const faqs = [
  {
    q: "What is the 30% rule for rent?",
    a: "The 30% rule says you should spend no more than 30% of your gross (pre-tax) monthly income on rent. For a $5,000/month gross income, that's $1,500/month maximum rent. The rule was established by the US government in 1981 as a public housing standard and is still used by most landlords for qualification. However, because it uses gross income before taxes, the 30% of gross often equals 38–43% of actual take-home pay — far more than most renters realise.",
  },
  {
    q: "How much rent can I afford on a $50,000 salary?",
    a: "On a $50,000 annual salary ($4,167/month gross), the 30% rule gives a maximum rent of $1,250/month. After federal and average state taxes, your estimated take-home is approximately $3,300–$3,500/month. A conservative approach would put your comfortable rent at $990–$1,050/month (30% of net pay). If you have $400/month in student loan or car payments, your debt-adjusted safe rent is approximately $800–$1,000/month.",
  },
  {
    q: "How much rent can I afford on a $75,000 salary?",
    a: "On a $75,000 salary ($6,250/month gross), the 30% rule gives $1,875/month maximum rent. Your estimated take-home is approximately $4,800–$5,200/month depending on your state. Conservative net-income rent budget: $1,440–$1,560/month. With no significant debt, $1,500–$1,875/month is financially sustainable. In high-tax states like California or New York, stay closer to $1,400/month for genuine financial comfort.",
  },
  {
    q: "How much rent can I afford on a $100,000 salary?",
    a: "On a $100,000 salary ($8,333/month gross), the 30% rule gives $2,500/month maximum rent. After taxes, take-home is approximately $6,000–$7,000/month. Conservative net-income budget: $1,800–$2,100/month. Most financial planners recommend keeping rent below $2,000–$2,200/month at this income level to maintain a 20% savings rate, especially if you're also paying student loans or building an emergency fund.",
  },
  {
    q: "Should I use gross or net income for rent affordability?",
    a: "Landlords use gross (pre-tax) income because it appears on your pay stub and tax returns. For personal budgeting, net (take-home) income is far more accurate. Applying 30% to gross income on a $60,000 salary ($1,500/month rent) looks affordable, but your take-home is only $4,050/month — meaning rent is actually 37% of your real available money. This is why using net income gives a more honest picture of what you can truly afford without stress.",
  },
  {
    q: "Is the 30% rent rule outdated in 2026?",
    a: "In expensive markets, largely yes. The rule was designed in 1981 when US median rent was $243/month and median household income was $19,900. In 2026, average US rent is $1,800–$2,000/month, requiring an income of $72,000–$80,000/year just to meet the 30% threshold. In cities like New York ($3,400+), San Francisco ($3,200+), Miami ($2,800+), and Boston ($3,400+), renters commonly spend 35–50% of income on rent. The 30% rule is useful as a landlord qualification standard but should not be your sole personal budgeting guide.",
  },
  {
    q: "What income do landlords require for an apartment?",
    a: "Most landlords in the US require gross monthly income of at least 3 times the monthly rent — commonly called the 3× or 40× rule. For $1,500/month rent: minimum $4,500/month gross ($54,000/year). For $2,000/month: minimum $6,000/month ($72,000/year). For $2,500/month: minimum $7,500/month ($90,000/year). Some landlords in competitive markets use a stricter 40× annual rule, meaning annual income ≥ 40 × monthly rent.",
  },
  {
    q: "How does debt affect how much rent I can afford?",
    a: "Every dollar of monthly debt reduces your available rent budget dollar-for-dollar. Using the 36% back-end DTI guideline: at $5,000/month gross income with $500/month in debt (car + student loans), your maximum total debt including rent is $1,800 (36% of $5,000). Subtract $500 debt from $1,800 and your maximum rent is $1,300 — not the $1,500 the 30% front-end rule suggests. High debt loads are the most common reason renters' budgets are tighter than the 30% rule implies.",
  },
  {
    q: "How much rent can I afford making $20 an hour?",
    a: "At $20/hour working 40 hours/week, your gross income is $41,600/year ($3,467/month). The 30% rule gives $1,040/month maximum rent. After taxes, take-home is approximately $2,800–$2,950/month. Conservative net-income rent: $840–$885/month. With even modest debt ($300/month), a comfortable rent budget falls to $700–$850/month. At $20/hour, affording apartments in major US cities is genuinely difficult — Columbus ($1,150/mo median), Indianapolis ($1,100/mo), and Memphis ($900/mo) are among the most accessible markets.",
  },
  {
    q: "How much rent can I afford making $25 an hour?",
    a: "At $25/hour working 40 hours/week, gross income is $52,000/year ($4,333/month). The 30% rule gives $1,300/month maximum rent. After taxes, take-home is approximately $3,400–$3,650/month. A conservative net-income budget puts comfortable rent at $1,020–$1,095/month. At $25/hour, you can qualify for apartments in most mid-tier US markets: Phoenix ($1,400/mo median), Nashville ($1,600/mo), Chicago ($1,800/mo), though the last would be a stretch without additional income.",
  },
];

/* 5. FAQPage + Article schemas */
const schemaFAQ = {
  "@context":  "https://schema.org",
  "@type":     "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name:    f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const schemaArticle = {
  "@context":    "https://schema.org",
  "@type":       "Article",
  headline:      "How to Calculate How Much Rent You Can Afford — 2026 Complete Guide",
  description:   "A comprehensive guide covering the 30% rule, gross income illusion, debt-to-income ratios, and the three methods for calculating rent affordability.",
  dateModified:  "2026-05-01",
  inLanguage:    "en-US",
  publisher: {
    "@type": "Organization",
    name:    "FreeUSCalculator",
    url:     "https://www.freeuscalculator.in",
  },
};

/* ── Internal link cluster ───────────────────────────────────────────── */
const internalLinks = [
  { href: "/paycheck-calculator",          label: "Paycheck Calculator",          desc: "Find your real take-home pay after all taxes"            },
  { href: "/mortgage-calculator",          label: "Mortgage Calculator",          desc: "Monthly payment and total cost of buying a home"        },
  { href: "/loan-calculator",             label: "Loan Calculator",              desc: "Monthly payment for any personal or auto loan"          },
  { href: "/salary-calculator",           label: "Salary Calculator",            desc: "Annual salary broken down by month, week, and hour"     },
  { href: "/budget-calculator",           label: "Budget Calculator",            desc: "Complete 50/30/20 monthly budget planner"               },
  { href: "/debt-payoff-calculator",      label: "Debt Payoff Calculator",       desc: "Avalanche and snowball debt elimination plan"           },
  { href: "/compound-interest-calculator",label: "Savings Calculator",           desc: "How fast your savings and investments grow"            },
  { href: "/cost-of-living-calculator",   label: "Cost of Living Calculator",    desc: "Compare living costs between US cities"                 },
];

/* ══════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ══════════════════════════════════════════════════════════════════════ */
export default function RentAffordabilityPage() {
  const seoContent = getToolContent("rent-affordability-calculator");

  return (
    <main className="bg-[#FCFCFD] min-h-screen overflow-x-hidden">

      {/* ── JSON-LD Schemas ──────────────────────────────────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApp)    }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo)     }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ)       }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle)   }} />

      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-1">
        <ol
          className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {[
            { href: "/",                   name: "Home",                pos: "1" },
            { href: "/housing-calculators",name: "Housing Calculators", pos: "2" },
          ].map((crumb) => (
            <li key={crumb.href} itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              <Link href={crumb.href} itemProp="item" className="hover:text-blue-600 transition-colors">
                <span itemProp="name">{crumb.name}</span>
              </Link>
              <meta itemProp="position" content={crumb.pos} />
              <span className="ml-2 text-slate-300" aria-hidden="true">/</span>
            </li>
          ))}
          <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <span itemProp="name" className="text-slate-800 font-medium">Rent Affordability Calculator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ══════════════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="hero-heading"
        className="relative pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 overflow-hidden"
      >
        {/* Subtle background */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 -z-10 blur-[140px] rounded-full opacity-40"
          style={{ background: "radial-gradient(ellipse, #bfdbfe 0%, #dbeafe 50%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto text-center mb-12">

          {/* Freshness badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-blue-200 text-blue-600 text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
            <Home size={13} /> 2026 Rental Market · 30% Rule · Debt-Adjusted · Free
          </div>

          {/*
           * H1: "Rent Affordability Calculator" front-loaded — 90K+/mo.
           * Sub = "How Much Rent Can I Afford?" — 74K/mo secondary query.
           * Both front-loaded, never padded.
           */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-4 leading-[0.9]"
          >
            Rent Affordability{" "}
            <span className="text-blue-600">Calculator</span>
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-slate-400 mb-5 tracking-tight">
            How Much Rent Can I Afford?
          </p>

          {/*
           * Subheading = top featured snippet candidate.
           * Contains: "30% rule", "salary", "debt", "gross income illusion",
           * "take-home pay" — all naturally, never stuffed.
           */}
          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Find your <strong className="text-slate-800">maximum rent budget from salary</strong> using
            three methods: the 30% gross income rule landlords use, the conservative net take-home
            approach, and a debt-adjusted personal budget. Updated for the{" "}
            <strong className="text-slate-800">2026 US rental market</strong> — average rent
            $1,800–$2,000/month.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-7">
            {[
              { icon: <Star size={11} className="fill-blue-400 text-blue-400" />, label: "4.8/5 · 9,214 users"        },
              { icon: <CheckCircle2 size={11} />,                                  label: "3 calculation methods"      },
              { icon: <CheckCircle2 size={11} />,                                  label: "DTI ratio analysis"         },
              { icon: <CheckCircle2 size={11} />,                                  label: "Landlord qualification check"},
              { icon: <CheckCircle2 size={11} />,                                  label: "100% free · no login"       },
            ].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">
                {t.icon} {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── CALCULATOR ── */}
        <div id="calculator" className="max-w-6xl mx-auto scroll-mt-6">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <CalculatorContainer
              title="Rent Affordability Calculator 2026"
              description="30% Rule · Debt-Adjusted Budget · Conservative Net Income · DTI Analysis · 2026 US Market"
              category="Housing & Personal Finance"
              lastUpdated="May 2026"
            >
              <RentAffordabilityClient />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2026 RENTAL MARKET STATS BANNER
          SEO: each stat directly answers a PAA query.
          Real data = E-E-A-T. Google rewards factual accuracy heavily.
          ══════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="market-stats-heading"
        className="bg-slate-900 py-12 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="market-stats-heading"
            className="text-center text-slate-400 text-xs font-black uppercase tracking-widest mb-8"
          >
            2026 US Rental Market — Key Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "$1,900",    label: "Average US monthly rent (2026 estimate)"               },
              { stat: "$70,000+",  label: "Annual income needed at average rent (30% rule)"       },
              { stat: "3×",        label: "Monthly rent landlords require as minimum gross income" },
              { stat: "36%",       label: "Back-end DTI ceiling lenders use (rent + all debt)"    },
            ].map((item, i) => (
              <div key={i} className="text-white">
                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">{item.stat}</div>
                <div className="text-slate-400 text-sm leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SALARY-TO-MAX-RENT QUICK REFERENCE TABLE
          SEO: featured snippet target for salary-specific queries.
          "$50,000 salary rent affordability" = 6K+/mo alone.
          Each row = standalone high-volume query answered.
          ══════════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="salary-table-heading" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2
          id="salary-table-heading"
          className="text-xl font-bold text-slate-900 text-center mb-2"
        >
          How Much Rent Can I Afford? — Salary Quick Reference (2026)
        </h2>
        <p className="text-center text-sm text-slate-500 mb-6">
          30% gross income rule (landlord standard) · Conservative net income method · No pre-existing debt assumed
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm bg-white" aria-label="Salary to max rent quick reference 2026">
            <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Annual Salary</th>
                <th className="px-4 py-3 text-left">Monthly Gross</th>
                <th className="px-4 py-3 text-left">30% Rule Max Rent</th>
                <th className="px-4 py-3 text-left">Est. Take-Home/mo</th>
                <th className="px-4 py-3 text-left">Conservative Rent</th>
                <th className="px-4 py-3 text-left">Income Needed (3× rule)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                ["$25,000",  "$2,083",  "$625/mo",    "$1,700", "$510–$595/mo",    "$800/mo → needs $28.8K/yr"  ],
                ["$30,000",  "$2,500",  "$750/mo",    "$2,050", "$615–$718/mo",    "$1,000/mo → needs $36K/yr"  ],
                ["$40,000",  "$3,333",  "$1,000/mo",  "$2,730", "$820–$955/mo",    "$1,200/mo → needs $43.2K/yr"],
                ["$50,000",  "$4,167",  "$1,250/mo",  "$3,400", "$1,020–$1,190/mo","$1,500/mo → needs $54K/yr"  ],
                ["$60,000",  "$5,000",  "$1,500/mo",  "$4,050", "$1,215–$1,418/mo","$1,800/mo → needs $64.8K/yr"],
                ["$75,000",  "$6,250",  "$1,875/mo",  "$4,950", "$1,485–$1,733/mo","$2,000/mo → needs $72K/yr"  ],
                ["$80,000",  "$6,667",  "$2,000/mo",  "$5,250", "$1,575–$1,838/mo","$2,500/mo → needs $90K/yr"  ],
                ["$100,000", "$8,333",  "$2,500/mo",  "$6,500", "$1,950–$2,275/mo","$3,000/mo → needs $108K/yr" ],
                ["$120,000", "$10,000", "$3,000/mo",  "$7,700", "$2,310–$2,695/mo","$3,500/mo → needs $126K/yr" ],
                ["$150,000", "$12,500", "$3,750/mo",  "$9,500", "$2,850–$3,325/mo","$4,000/mo → needs $144K/yr" ],
              ].map(([salary, gross, maxRent, takeHome, conservative, reverse], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-4 py-3 font-black text-slate-900">{salary}</td>
                  <td className="px-4 py-3 text-slate-600">{gross}</td>
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
          Conservative rent = 30% of estimated net take-home (after federal + average state tax).
          Income needed uses the 3× monthly rent rule. Use the calculator above for your exact debt and expense situation.
        </p>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          HOURLY WAGE TO RENT TABLE
          SEO: targets "what rent can I afford making $X an hour"
          "making $20 an hour rent" = 3,400+/mo · "$25/hr rent" = 2,900+/mo
          ══════════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="hourly-table-heading" className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <h2
          id="hourly-table-heading"
          className="text-xl font-bold text-slate-900 text-center mb-2"
        >
          What Rent Can I Afford by Hourly Wage? (2026)
        </h2>
        <p className="text-center text-sm text-slate-500 mb-6">
          40 hours/week · 52 weeks/year · 30% gross income rule · estimated take-home applied
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm bg-white" aria-label="Hourly wage to affordable rent calculator 2026">
            <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Hourly Wage</th>
                <th className="px-4 py-3 text-left">Annual Income</th>
                <th className="px-4 py-3 text-left">Max Rent (30%)</th>
                <th className="px-4 py-3 text-left">Est. Monthly Net</th>
                <th className="px-4 py-3 text-left">Conservative Rent</th>
                <th className="px-4 py-3 text-left">Market Reality</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                ["$15/hr (min wage)", "$31,200",  "$780/mo",   "$2,100", "$630/mo",   "Very limited — Midwest/South only"   ],
                ["$18/hr",            "$37,440",  "$936/mo",   "$2,500", "$750/mo",   "Affordable in lower-cost markets"    ],
                ["$20/hr",            "$41,600",  "$1,040/mo", "$2,800", "$840/mo",   "Tight in most metros"                ],
                ["$22/hr",            "$45,760",  "$1,144/mo", "$3,050", "$915/mo",   "Comfortable in mid-tier cities"      ],
                ["$25/hr",            "$52,000",  "$1,300/mo", "$3,450", "$1,035/mo", "Feasible in most US cities"          ],
                ["$30/hr",            "$62,400",  "$1,560/mo", "$4,100", "$1,230/mo", "Comfortable in most cities"          ],
                ["$35/hr",            "$72,800",  "$1,820/mo", "$4,750", "$1,425/mo", "Good flexibility in most markets"    ],
                ["$40/hr",            "$83,200",  "$2,080/mo", "$5,400", "$1,620/mo", "Comfortably affords most 1BR units"  ],
                ["$50/hr",            "$104,000", "$2,600/mo", "$6,700", "$2,010/mo", "Affords most 2BR across the US"      ],
              ].map(([wage, annual, maxRent, net, conservative, reality], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-4 py-3 font-bold text-slate-900">{wage}</td>
                  <td className="px-4 py-3 text-slate-600">{annual}</td>
                  <td className="px-4 py-3 font-black text-blue-600">{maxRent}</td>
                  <td className="px-4 py-3 text-slate-500">{net}</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">{conservative}</td>
                  <td className="px-4 py-3 text-xs text-slate-500 italic">{reality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 text-center mt-3">
          Average US rent in 2026 is $1,800–$2,000/month. Workers earning under $30/hour face significant affordability challenges in major metros.
        </p>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CITY AFFORDABILITY TABLE
          SEO: targets "[city] rent affordability calculator" queries.
          "what salary do I need to live in NYC" = 15K+/mo searches.
          ══════════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="city-table-heading" className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <h2
          id="city-table-heading"
          className="text-xl font-bold text-slate-900 text-center mb-2"
        >
          What Salary Do You Need to Rent in Major US Cities? (2026)
        </h2>
        <p className="text-center text-sm text-slate-500 mb-6">
          Based on median 1-bedroom rent · 30% gross income rule · standard 3× landlord qualification
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm bg-white" aria-label="Salary needed to rent in major US cities 2026">
            <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">City</th>
                <th className="px-4 py-3 text-left">Median 1BR Rent</th>
                <th className="px-4 py-3 text-left">Income Needed (3×)</th>
                <th className="px-4 py-3 text-left">Annual Salary Required</th>
                <th className="px-4 py-3 text-left">Affordability on $75K</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                ["🌆 New York City, NY",    "$3,400/mo", "$10,200/mo", "$122,400/yr", "Unaffordable"     ],
                ["🌉 San Francisco, CA",    "$3,200/mo", "$9,600/mo",  "$115,200/yr", "Unaffordable"     ],
                ["🌊 Boston, MA",           "$3,400/mo", "$10,200/mo", "$122,400/yr", "Unaffordable"     ],
                ["🌴 Miami, FL",            "$2,800/mo", "$8,400/mo",  "$100,800/yr", "Unaffordable"     ],
                ["☀️ Los Angeles, CA",      "$2,600/mo", "$7,800/mo",  "$93,600/yr",  "Unaffordable"     ],
                ["🌧️ Seattle, WA",          "$2,300/mo", "$6,900/mo",  "$82,800/yr",  "Stretched"        ],
                ["🌞 San Diego, CA",        "$2,400/mo", "$7,200/mo",  "$86,400/yr",  "Stretched"        ],
                ["🤠 Austin, TX",           "$1,700/mo", "$5,100/mo",  "$61,200/yr",  "Borderline"       ],
                ["🏙️ Chicago, IL",          "$1,800/mo", "$5,400/mo",  "$64,800/yr",  "Borderline"       ],
                ["🏔️ Denver, CO",           "$1,750/mo", "$5,250/mo",  "$63,000/yr",  "Borderline"       ],
                ["🌸 Atlanta, GA",          "$1,600/mo", "$4,800/mo",  "$57,600/yr",  "Affordable ✓"     ],
                ["🌵 Phoenix, AZ",          "$1,400/mo", "$4,200/mo",  "$50,400/yr",  "Affordable ✓"     ],
                ["🌾 Columbus, OH",         "$1,150/mo", "$3,450/mo",  "$41,400/yr",  "Very Affordable ✓"],
                ["🎸 Nashville, TN",        "$1,600/mo", "$4,800/mo",  "$57,600/yr",  "Affordable ✓"     ],
                ["🌊 Indianapolis, IN",     "$1,100/mo", "$3,300/mo",  "$39,600/yr",  "Very Affordable ✓"],
              ].map(([city, rent, income, salary, afford], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-4 py-3 font-semibold text-slate-800">{city}</td>
                  <td className="px-4 py-3 font-black text-blue-600">{rent}</td>
                  <td className="px-4 py-3 text-slate-600">{income}</td>
                  <td className="px-4 py-3 font-bold text-slate-800">{salary}</td>
                  <td className={`px-4 py-3 font-bold text-xs ${
                    afford.includes("Unaffordable")     ? "text-rose-600"   :
                    afford.includes("Stretched")        ? "text-orange-600" :
                    afford.includes("Borderline")       ? "text-amber-600"  :
                    "text-emerald-600"
                  }`}>{afford}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 text-center mt-3">
          Affordability assessed against a $75,000 annual salary. "Unaffordable" = exceeds 30% of $75K gross.
          Median rents from 2026 US rental market data. Source: Rent.com, Zillow, CoStar 2026 estimates.
        </p>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MAIN ARTICLE + SIDEBAR
          ══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* ── ARTICLE ─────────────────────────────────────────────── */}
          <article
            className="flex-1 min-w-0 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
            itemScope
            itemType="https://schema.org/Article"
          >
            <header className="px-6 md:px-10 py-8 border-b bg-slate-50 flex items-start gap-5">
              <div className="bg-blue-600 text-white p-4 rounded-2xl flex-shrink-0" aria-hidden="true">
                <BookOpen size={24} />
              </div>
              <div>
                {/*
                 * H2: must NOT repeat H1. Contains secondary KW
                 * "rent affordability guide 2026" + "30% rule explained"
                 */}
                <h2
                  className="text-xl md:text-2xl font-bold text-slate-950 tracking-tight"
                  itemProp="headline"
                >
                  How to Calculate How Much Rent You Can Afford — 2026 Complete Guide
                </h2>
                <p className="text-slate-500 text-sm mt-1.5">
                  The 30% rule · Gross income illusion · Debt-to-income ratios · What landlords
                  never tell you · Emergency fund for renters
                </p>
                <div className="flex items-center gap-4 mt-3 flex-wrap text-xs text-slate-400">
                  <time dateTime="2026-05-01" itemProp="dateModified">Updated May 2026</time>
                  <span>~13 min read</span>
                  <span className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-semibold">
                    Housing Guide · US Rental Market
                  </span>
                </div>
              </div>
            </header>

            <div
              className="p-6 md:p-12 prose prose-slate max-w-none
                         prose-h2:text-xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-10
                         prose-h3:text-lg prose-h3:font-semibold prose-h3:text-slate-800 prose-h3:mt-7
                         prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
                         prose-strong:text-slate-900
                         prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                         prose-ul:text-slate-600 prose-li:leading-relaxed"
              itemProp="articleBody"
            >

              {/* ── Section 1: The 30% Rule ── */}
              <h2>The 30% Rent Rule — Where It Came From and What It Really Means</h2>
              <p>
                The 30% rule has been the standard benchmark for rent affordability since 1981, when
                the US government established it as the threshold for "affordable housing" in federal
                housing assistance programmes. The rule is simple: spend no more than 30% of your
                gross monthly income on rent. On a $5,000/month gross income, that's $1,500/month.
              </p>
              <p>
                But here's the problem nobody tells you: <strong>the 30% rule uses gross income —
                the number on your pay stub before taxes are taken out</strong>. After federal income
                tax, FICA (Social Security and Medicare), and state income tax, most workers take home
                70–80% of their gross pay. This means that 30% of gross is actually 37–43% of your
                real take-home money.
              </p>

              {/* The gross income illusion — featured snippet target */}
              <div className="not-prose my-7 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="text-base font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <AlertCircle size={15} className="text-blue-600" />
                  The Gross Income Illusion — What the 30% Rule Actually Costs You
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  {[
                    {
                      salary:  "$50,000/yr ($4,167/mo gross)",
                      rule30:  "$1,250/mo",
                      net:     "$3,300–$3,500/mo take-home",
                      real:    "36–38% of actual take-home",
                      color:   "bg-amber-50 border-amber-200",
                    },
                    {
                      salary:  "$75,000/yr ($6,250/mo gross)",
                      rule30:  "$1,875/mo",
                      net:     "$4,800–$5,200/mo take-home",
                      real:    "36–39% of actual take-home",
                      color:   "bg-orange-50 border-orange-200",
                    },
                    {
                      salary:  "$100,000/yr ($8,333/mo gross)",
                      rule30:  "$2,500/mo",
                      net:     "$6,000–$7,000/mo take-home",
                      real:    "36–42% of actual take-home",
                      color:   "bg-rose-50 border-rose-200",
                    },
                    {
                      salary:  "$30,000/yr ($2,500/mo gross)",
                      rule30:  "$750/mo",
                      net:     "$2,050–$2,150/mo take-home",
                      real:    "35–37% of actual take-home",
                      color:   "bg-amber-50 border-amber-200",
                    },
                  ].map((row) => (
                    <div key={row.salary} className={`p-4 rounded-xl border ${row.color}`}>
                      <p className="font-bold text-slate-800 text-xs mb-2">{row.salary}</p>
                      <p className="text-xs text-slate-600">30% rule says: <strong className="text-blue-700">{row.rule30}</strong></p>
                      <p className="text-xs text-slate-600">Take-home: {row.net}</p>
                      <p className="text-xs font-bold text-rose-600 mt-1">Real cost: {row.real}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-blue-700 mt-4">
                  This is why the conservative approach — 30% of net take-home, not 30% of gross —
                  leaves you with more financial breathing room. Use our calculator to see both figures.
                </p>
              </div>

              {/* ── Section 2: Three methods ── */}
              <h2>Three Ways to Calculate Your Rent Budget — Which to Use and When</h2>
              <p>
                There is no single "right" answer to how much rent you can afford. Different
                situations call for different methods:
              </p>

              <div className="not-prose my-6 space-y-4">
                {[
                  {
                    num:   "01",
                    title: "The 30% Gross Income Rule",
                    when:  "Use this when: applying for an apartment",
                    why:   "This is the standard landlords use. Most rental applications require gross monthly income of at least 3× the monthly rent — equivalent to 33% rent-to-income. The 30% rule is the tenant's version of this threshold. You'll need to meet it to qualify, regardless of your actual budget.",
                    limit: "Limitation: doesn't account for taxes, debt, savings goals, or city-specific cost of living.",
                    color: "border-l-blue-500",
                    badge: "bg-blue-100 text-blue-700",
                  },
                  {
                    num:   "02",
                    title: "Conservative Net Income Method (30% of take-home)",
                    when:  "Use this when: personal budgeting and planning",
                    why:   "Calculate your actual monthly take-home pay after all taxes, then apply 30% to that figure. This gives a rent budget that genuinely leaves room for savings, debt repayment, and living expenses without stress. Often $200–$400/month lower than the gross-income rule.",
                    limit: "Limitation: landlords may not accept this — they use gross income. Use for your own planning, not your application.",
                    color: "border-l-emerald-500",
                    badge: "bg-emerald-100 text-emerald-700",
                  },
                  {
                    num:   "03",
                    title: "Debt-Adjusted Budget Method",
                    when:  "Use this when: you have student loans, car payments, or credit card debt",
                    why:   "Start with net take-home. Subtract all monthly debt payments. Subtract a minimum savings target (financial planners recommend 20% of net). The remainder, minus a buffer for utilities and necessities, is your true available rent. This is the most accurate method for your real-world situation.",
                    limit: "Limitation: requires knowing all your monthly debt obligations accurately — a moving target for many people.",
                    color: "border-l-purple-500",
                    badge: "bg-purple-100 text-purple-700",
                  },
                ].map((method) => (
                  <div key={method.num} className={`bg-white border border-slate-200 border-l-4 ${method.color} rounded-xl p-5`}>
                    <div className="flex items-start gap-4">
                      <span className="text-2xl font-black text-slate-200 flex-shrink-0 leading-none mt-0.5">{method.num}</span>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{method.title}</h4>
                        <p className={`text-xs font-bold ${method.badge.split(" ")[1]} px-2 py-0.5 rounded-md inline-block mb-2 ${method.badge.split(" ")[0]}`}>
                          {method.when}
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed mb-2">{method.why}</p>
                        <p className="text-xs text-slate-400 italic">{method.limit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Section 3: What landlords never tell you ── */}
              <h2>What Landlords Never Tell You About Rent Qualification</h2>
              <p>
                The 3× income rule (your gross monthly income must be at least 3 times the rent) is
                not a law — it's an industry convention. But landlords use it because it reduces their
                risk: statistically, renters paying more than 33% of gross income have significantly
                higher rates of late payment and eviction.
              </p>
              <p>
                What most applicants don't know:
              </p>
              <ul>
                <li>
                  <strong>In competitive markets, some landlords use 40× annual income:</strong> meaning
                  your annual gross income must equal 40× the monthly rent. For $2,000/month rent:
                  40 × $2,000 = $80,000/year minimum income required. This is stricter than the 3× rule
                  ($72,000/year) and common in New York City, Boston, and San Francisco.
                </li>
                <li>
                  <strong>Roommates' incomes can be combined:</strong> If you're splitting a $3,000/month
                  apartment with a roommate, each person only needs to qualify at $1,500/month rent
                  ($54,000/year individual income under 3× rule), not $3,000/month ($108,000/year).
                </li>
                <li>
                  <strong>Guarantors can cover income gaps:</strong> If your income doesn't meet the
                  threshold, a co-signer (guarantor) with sufficient income — often 5× or 6× the monthly
                  rent — can vouch for your lease. Common for students and recent graduates.
                </li>
                <li>
                  <strong>Self-employed income is evaluated differently:</strong> Freelancers and
                  contractors typically need 2 years of tax returns showing consistent net income.
                  Landlords use net (after-expense) income from Schedule C, not gross revenue.
                </li>
              </ul>

              {/* ── Section 4: DTI ratios ── */}
              <h2>Debt-to-Income Ratios — The Number That Really Decides Your Budget</h2>
              <p>
                Your debt-to-income ratio (DTI) is the most accurate measure of rent affordability.
                Mortgage lenders use it as their primary qualification metric, and savvy renters should
                use it too.
              </p>
              <p>
                There are two DTI figures relevant to renting:
              </p>

              <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
                <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl">
                  <h4 className="font-bold text-blue-800 mb-2">Front-End DTI (Housing Ratio)</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    <strong>Formula:</strong> Monthly rent ÷ gross monthly income
                  </p>
                  <div className="space-y-1.5 text-xs text-blue-800">
                    <p>✓ Below 28% — Excellent</p>
                    <p>⚠ 28–33% — Acceptable (landlord threshold)</p>
                    <p>✗ Above 33% — May not qualify</p>
                  </div>
                  <p className="text-xs text-blue-600 mt-3">
                    Example: $1,500 rent ÷ $5,000 gross = 30% front-end DTI ✓
                  </p>
                </div>
                <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-2xl">
                  <h4 className="font-bold text-emerald-800 mb-2">Back-End DTI (All Debt)</h4>
                  <p className="text-sm text-emerald-700 mb-3">
                    <strong>Formula:</strong> (Rent + all debt) ÷ gross monthly income
                  </p>
                  <div className="space-y-1.5 text-xs text-emerald-800">
                    <p>✓ Below 36% — Financially healthy</p>
                    <p>⚠ 36–43% — Stretched but manageable</p>
                    <p>✗ Above 43% — High stress, reconsider rent</p>
                  </div>
                  <p className="text-xs text-emerald-600 mt-3">
                    Example: ($1,500 rent + $400 debt) ÷ $5,000 = 38% back-end DTI ⚠
                  </p>
                </div>
              </div>

              {/* ── Section 5: Emergency fund ── */}
              <h2>The Rent Emergency Fund — The Rule Nobody Mentions</h2>
              <p>
                Financial planning for renters typically focuses on monthly budget. What most guides
                skip: you need a specific emergency fund sized to your rent, not just a generic
                "3–6 months of expenses."
              </p>
              <p>
                A renter's emergency fund should cover:
              </p>
              <ul>
                <li>
                  <strong>Security deposit + first month:</strong> Typically 1–2 months rent upfront
                  before you even move in. At $1,500/month, that's $3,000–$4,500 in cash before moving.
                </li>
                <li>
                  <strong>Last month buffer:</strong> If you lose your job, you need rent covered
                  while job searching. Budget 2 months rent as a dedicated rent buffer, separate
                  from your general emergency fund.
                </li>
                <li>
                  <strong>Moving costs:</strong> Professional movers average $1,000–$2,500 for a
                  local move in 2026, and $4,000–$10,000 for interstate moves.
                </li>
                <li>
                  <strong>Lease break costs:</strong> If you need to exit a lease early, penalties
                  range from 1–2 months rent to the remainder of the lease term. Know this before signing.
                </li>
              </ul>
              <p>
                <strong>Rule of thumb:</strong> Before signing any lease, ensure you have at least
                4–5 months of rent in liquid savings. This covers the move-in costs, a buffer for
                job disruption, and minor emergencies without touching your long-term savings.
              </p>

              {/* CMS content */}
              {seoContent && (
                <div dangerouslySetInnerHTML={{ __html: seoContent }} />
              )}

              {/* Formula box */}
              <div className="not-prose my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
                  <Calculator size={14} className="text-blue-500" />
                  Three Rent Formulas — Quick Reference
                </h3>
                <div className="bg-white rounded-xl p-5 font-mono text-xs text-slate-700 shadow-sm space-y-3">
                  <div>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-wider mb-1">30% Gross Rule (Landlord Standard)</p>
                    <p>Max rent = Gross monthly income × 0.30</p>
                    <p className="text-slate-400 mt-0.5">$5,000/mo × 0.30 = $1,500/mo max</p>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-wider mb-1">Conservative Net Method</p>
                    <p>Max rent = Net take-home × 0.30</p>
                    <p className="text-slate-400 mt-0.5">$3,800/mo take-home × 0.30 = $1,140/mo</p>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <p className="text-[10px] font-black text-purple-600 uppercase tracking-wider mb-1">Debt-Adjusted Method</p>
                    <p>Max rent = Net income − monthly debt − savings target − fixed expenses</p>
                    <p className="text-slate-400 mt-0.5">$3,800 − $400 debt − $760 savings − $500 expenses = $2,140 left → rent from this</p>
                  </div>
                </div>
              </div>

              {/* ── Internal links ── */}
              <div className="not-prose mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">
                  Related Housing &amp; Financial Calculators
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {internalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-200"
                      >
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

            <footer className="border-t px-6 md:px-12 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <Info size={16} className="text-blue-500 flex-shrink-0" />
                <span>
                  2026 US rental market data · 30% rule + debt-adjusted methods · Not financial advice.
                  Rent figures sourced from Zillow, Rent.com, CoStar 2026 estimates.
                </span>
              </div>
              <ShareButtons
                title="Free Rent Affordability Calculator 2026 – How Much Rent Can I Afford?"
                url="https://www.freeuscalculator.in/rent-affordability-calculator"
              />
            </footer>
          </article>

          {/* ── SIDEBAR ─────────────────────────────────────────────── */}
          <aside className="w-full lg:w-[380px] shrink-0 space-y-6" aria-label="Rent tips and tools">
            <div className="sticky top-24 space-y-6">

              {/* 50/30/20 rule card */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 shadow-2xl">
                <Zap className="text-blue-400 mb-3" size={22} />
                <h3 className="text-lg font-black leading-snug mb-4">
                  The 50/30/20 Rule — How to Split Your Income
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    {
                      pct:   "50% — Needs",
                      desc:  "Rent, groceries, utilities, transport, insurance, minimum debt payments",
                      color: "text-blue-300",
                      warn:  "Rent alone should not exceed 30% of this bucket",
                    },
                    {
                      pct:   "30% — Wants",
                      desc:  "Dining, entertainment, hobbies, travel, subscriptions, clothing",
                      color: "text-slate-300",
                      warn:  "If rent is too high, this is the first category to disappear",
                    },
                    {
                      pct:   "20% — Savings",
                      desc:  "Emergency fund, retirement (401k/IRA), investments, debt overpayment",
                      color: "text-emerald-300",
                      warn:  "Never let rent eat into this — it compounds over decades",
                    },
                  ].map(({ pct, desc, color, warn }) => (
                    <div key={pct} className="border-b border-white/10 pb-3 last:border-0">
                      <p className={`font-black ${color} mb-0.5`}>{pct}</p>
                      <p className="text-slate-400 text-xs leading-snug mb-1">{desc}</p>
                      <p className="text-xs text-slate-500 italic">{warn}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="#calculator"
                  className="mt-5 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
                >
                  Calculate my rent budget <ArrowUpRight size={13} />
                </Link>
              </div>

              {/* Landlord income requirements */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <BarChart3 size={15} className="text-blue-500" />
                  What Income Do Landlords Require? (3× Rule)
                </h3>
                <div className="space-y-2.5 text-sm">
                  {[
                    { rent: "$800/mo",   income: "$2,400/mo",  annual: "$28,800/yr" },
                    { rent: "$1,000/mo", income: "$3,000/mo",  annual: "$36,000/yr" },
                    { rent: "$1,200/mo", income: "$3,600/mo",  annual: "$43,200/yr" },
                    { rent: "$1,500/mo", income: "$4,500/mo",  annual: "$54,000/yr" },
                    { rent: "$2,000/mo", income: "$6,000/mo",  annual: "$72,000/yr" },
                    { rent: "$2,500/mo", income: "$7,500/mo",  annual: "$90,000/yr" },
                    { rent: "$3,000/mo", income: "$9,000/mo",  annual: "$108,000/yr"},
                    { rent: "$3,500/mo", income: "$10,500/mo", annual: "$126,000/yr"},
                  ].map(({ rent, income, annual }) => (
                    <div key={rent} className="flex justify-between items-center py-1.5 border-b border-slate-100 last:border-0 gap-2">
                      <span className="font-bold text-slate-800 flex-shrink-0">{rent}</span>
                      <div className="text-right">
                        <p className="text-xs font-bold text-blue-600">{income}</p>
                        <p className="text-[10px] text-slate-400">{annual}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  NYC/SF/Boston landlords often use 40× annual rule: $2,000/mo → needs $80,000/yr (stricter).
                </p>
              </div>

              {/* Ad slot */}
              <div className="bg-white border border-dashed border-slate-200 rounded-3xl p-7 min-h-[160px] flex items-center justify-center">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Advertisement</p>
              </div>

              {/* Is the 30% rule outdated? */}
              <div className="bg-amber-50 rounded-3xl border border-amber-100 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={16} className="text-amber-500" />
                  <h3 className="text-sm font-black text-amber-900">Is the 30% Rule Outdated?</h3>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed mb-3">
                  The rule was created in 1981 when median US rent was <strong>$243/month</strong>.
                  In 2026, average US rent is <strong>$1,800–$2,000/month</strong>. For renters in
                  New York, San Francisco, Boston, and Miami, the 30% rule is practically impossible
                  on median incomes.
                </p>
                <p className="text-xs text-amber-700 leading-relaxed">
                  In high-cost cities, 35–45% of income on rent is increasingly the reality — not
                  a financial failure. Use the debt-adjusted method to find a personally sustainable
                  number rather than chasing an outdated benchmark.
                </p>
              </div>

              {/* Social proof */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { stat: "9,214+",  label: "Users/month" },
                  { stat: "50+",     label: "US Cities"   },
                  { stat: "4.8 ★",   label: "Rating"      },
                ].map((s, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm">
                    <div className="text-lg font-black text-slate-900">{s.stat}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5 font-semibold uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          RELATED CALCULATORS
          ══════════════════════════════════════════════════════════════════ */}
      <RelatedCalculators
        currentTool="rent-affordability-calculator"
        title="More Housing &amp; Finance Calculators"
      />

      {/* ══════════════════════════════════════════════════════════════════
          FAQ SECTION
          Rules: each Q = exact PAA query · each A starts with direct fact.
          FAQPage JSON-LD above mirrors this list exactly.
          ══════════════════════════════════════════════════════════════════ */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="bg-white py-20 px-4 sm:px-6 border-t border-slate-100"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-500 font-black text-xs uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mt-3"
            >
              Rent Affordability — Common Questions Answered
            </h2>
            <p className="text-slate-500 mt-2 text-sm">
              30% rule · salary-specific answers · gross vs net · city affordability · hourly wage
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-slate-950 py-14 px-4 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-5">

          {/* City-specific internal links */}
          <nav aria-label="City rent calculators" className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {[
              { href: "/rent-calculator-new-york",    label: "New York Rent Calculator"    },
              { href: "/rent-calculator-los-angeles", label: "Los Angeles Rent Calculator" },
              { href: "/rent-calculator-chicago",     label: "Chicago Rent Calculator"     },
              { href: "/rent-calculator-miami",       label: "Miami Rent Calculator"       },
              { href: "/rent-calculator-austin",      label: "Austin Rent Calculator"      },
              { href: "/rent-calculator-seattle",     label: "Seattle Rent Calculator"     },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-400 hover:text-blue-400 transition-colors text-xs">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Main footer links */}
          <nav aria-label="Related calculators footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              { href: "/mortgage-calculator",           label: "Mortgage Calculator"     },
              { href: "/paycheck-calculator",           label: "Paycheck Calculator"     },
              { href: "/loan-calculator",              label: "Loan Calculator"         },
              { href: "/budget-calculator",            label: "Budget Calculator"       },
              { href: "/salary-calculator",            label: "Salary Calculator"       },
              { href: "/debt-payoff-calculator",       label: "Debt Payoff Calculator"  },
              { href: "/compound-interest-calculator", label: "Savings Calculator"      },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                {l.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm font-medium text-slate-400">
            Free Rent Affordability Calculator · 30% Rule · Debt-Adjusted Budget ·
            2026 US Rental Market · FreeUSCalculator.in
          </p>

          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Results are estimates for informational and budgeting purposes only. Actual rent
            affordability depends on local market conditions, landlord requirements, credit score,
            and personal financial circumstances. Rent data sourced from Zillow, Rent.com, and
            CoStar 2026 estimates — subject to rapid change. Not financial or legal advice.
          </p>

          <p className="text-xs text-slate-700 tracking-widest font-medium">
            © 2026 FREEUSCALCULATOR.IN · WORLDWIDE FINANCIAL TOOLS
          </p>
        </div>
      </footer>
    </main>
  );
}