// app/blog/rent-affordability-guide-2026/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Calculator, Calendar, Clock, CheckCircle2,
  ChevronRight, AlertTriangle, TrendingUp, Home,
  Wallet, ShieldCheck, Zap, Landmark, DollarSign,
  BarChart2, AlertCircle, MapPin, Activity,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
//
// Tool page = transactional: "rent affordability calculator", "how much rent can I afford"
//
// This blog page = informational (distinct SERP positions):
//   "what is the 30 percent rule for rent"
//   "how much rent can I afford on $50,000 salary"
//   "is the 30% rule outdated 2026"
//   "gross vs net income for rent"
//   "what income do landlords require"
//   "how much rent can I afford making $25 an hour"
//   "salary needed to rent in NYC"
//   "debt-to-income ratio rent"
//
// The two URLs dominate different SERP intent clusters for the same keywords.
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Rent Affordability Guide 2026 – How Much Rent Can You Actually Afford?",
  description:
    "Complete 2026 rent affordability guide: the 30% rule explained, gross income illusion, salary-specific rent budgets ($30K–$150K), hourly wage to rent table, city affordability guide for 50+ US metros, landlord income requirements, and DTI ratios. Real numbers.",
  alternates: {
    canonical:
      "https://www.freeuscalculator.in/blog/rent-affordability-guide-2026",
  },
  keywords: [
    "how much rent can I afford 2026",
    "what is the 30 percent rule for rent",
    "rent affordability by salary 2026",
    "gross vs net income for rent calculation",
    "is the 30 percent rule outdated 2026",
    "how much rent can I afford on 50000 salary",
    "what income do landlords require",
    "debt to income ratio for renting",
    "rent affordability calculator guide",
    "what rent can I afford making 25 an hour",
    "salary needed to rent in NYC 2026",
    "how much rent on 75000 salary",
    "rent affordability all 50 states 2026",
    "50 30 20 rule for rent",
    "apartment emergency fund renters",
    "how to qualify for an apartment income requirement",
  ],
  openGraph: {
    title:
      "Rent Affordability Guide 2026 – How Much Rent Can You Actually Afford?",
    description:
      "The 30% rule explained, gross income illusion, salary-specific rent budgets, hourly wage guide, 15-city affordability table, and what landlords never tell you. Real 2026 numbers.",
    url: "https://www.freeuscalculator.in/blog/rent-affordability-guide-2026",
    type: "article",
    publishedTime: "2026-04-01T00:00:00Z",
    modifiedTime: "2026-05-01T00:00:00Z",
    authors: ["FreeUSCalculator"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD — Article + FAQPage
// Tool page uses WebApplication + HowTo — different schema types across URLs
// = stronger topical authority signal to Google.
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
          name: "Rent Affordability Guide 2026",
          item: "https://www.freeuscalculator.in/blog/rent-affordability-guide-2026" },
      ],
    },
    {
      "@type": "Article",
      headline:
        "Rent Affordability Guide 2026 – How Much Rent Can You Actually Afford?",
      description:
        "Complete guide to rent affordability in 2026: the 30% rule, the gross income illusion, salary-to-rent reference tables, city-by-city guide, landlord income requirements, and DTI analysis.",
      url: "https://www.freeuscalculator.in/blog/rent-affordability-guide-2026",
      datePublished: "2026-04-01",
      dateModified: "2026-05-01",
      author: { "@type": "Organization", name: "FreeUSCalculator",
        url: "https://www.freeuscalculator.in" },
      publisher: { "@type": "Organization", name: "FreeUSCalculator",
        url: "https://www.freeuscalculator.in" },
      relatedLink:
        "https://www.freeuscalculator.in/rent-affordability-calculator",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the 30% rule for rent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 30% rule says you should spend no more than 30% of your gross (pre-tax) monthly income on rent. For a $5,000/month gross income, that's $1,500/month maximum. The rule was established by the US government in 1981 as a public housing benchmark. However, because it uses gross income before taxes, the 30% of gross often equals 37–43% of actual take-home pay — far more than most renters realize.",
          },
        },
        {
          "@type": "Question",
          name: "How much rent can I afford on a $50,000 salary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On a $50,000 annual salary ($4,167/month gross), the 30% rule gives a maximum rent of $1,250/month. After federal and average state taxes, your estimated take-home is approximately $3,300–$3,500/month. A conservative approach using net income gives $990–$1,050/month (30% of take-home). With $400/month in debt payments, your debt-adjusted safe rent is approximately $800–$1,000/month.",
          },
        },
        {
          "@type": "Question",
          name: "How much rent can I afford making $25 an hour?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At $25/hour working 40 hours/week, gross income is $52,000/year ($4,333/month). The 30% rule gives $1,300/month maximum rent. After taxes, take-home is approximately $3,400–$3,650/month. A conservative budget puts comfortable rent at $1,020–$1,095/month (30% of net). At $25/hour, markets like Phoenix ($1,400/mo median), Nashville ($1,600/mo), and Chicago ($1,800/mo) are feasible, though Chicago would be a stretch.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use gross or net income for rent affordability?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Landlords use gross (pre-tax) income — it appears on your pay stub and tax returns. For personal budgeting, net (take-home) income is more accurate. Applying 30% to gross on a $60,000 salary gives $1,500/month, but your take-home is only $4,050/month — making rent actually 37% of your real available money. Use gross income to check if you qualify for an apartment; use net income to decide if you can actually afford it.",
          },
        },
        {
          "@type": "Question",
          name: "What income do landlords require to rent an apartment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most US landlords require gross monthly income of at least 3 times the monthly rent (the '3× rule'). For $1,500/month rent: minimum $4,500/month gross ($54,000/year). For $2,000/month: minimum $6,000/month ($72,000/year). In NYC, Boston, and San Francisco, some landlords use a stricter 40× annual rule: annual income must equal 40 × monthly rent, so $2,000/month requires $80,000/year.",
          },
        },
        {
          "@type": "Question",
          name: "Is the 30% rent rule outdated in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In expensive markets, largely yes. The rule was designed in 1981 when US median rent was $243/month. In 2026, average US rent is $1,800–$2,000/month, requiring a $72,000–$80,000 income to meet the 30% threshold. In New York ($3,400+), San Francisco ($3,200+), Miami ($2,800+), and Boston ($3,400+), renters routinely spend 35–50% of income on rent. The 30% rule is useful as a landlord qualification standard but should not be your only personal budgeting guide.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA TABLES
// ─────────────────────────────────────────────────────────────────────────────

const SALARY_TABLE = [
  ["$25,000",  "$2,083",  "$625",   "$1,700", "$510–$595",   "$28,800"],
  ["$30,000",  "$2,500",  "$750",   "$2,050", "$615–$718",   "$36,000"],
  ["$40,000",  "$3,333",  "$1,000", "$2,730", "$820–$955",   "$43,200"],
  ["$50,000",  "$4,167",  "$1,250", "$3,400", "$1,020–$1,190","$54,000"],
  ["$60,000",  "$5,000",  "$1,500", "$4,050", "$1,215–$1,418","$64,800"],
  ["$75,000",  "$6,250",  "$1,875", "$4,950", "$1,485–$1,733","$72,000"],
  ["$80,000",  "$6,667",  "$2,000", "$5,250", "$1,575–$1,838","$90,000"],
  ["$100,000", "$8,333",  "$2,500", "$6,500", "$1,950–$2,275","$108,000"],
  ["$120,000", "$10,000", "$3,000", "$7,700", "$2,310–$2,695","$126,000"],
  ["$150,000", "$12,500", "$3,750", "$9,500", "$2,850–$3,325","$144,000"],
];

const HOURLY_TABLE = [
  ["$15/hr (min wage)", "$31,200",  "$780",   "$2,100", "$630",    "Midwest/South low-cost markets only"],
  ["$18/hr",            "$37,440",  "$936",   "$2,500", "$750",    "Affordable in lower-cost markets"],
  ["$20/hr",            "$41,600",  "$1,040", "$2,800", "$840",    "Tight in most metro areas"],
  ["$22/hr",            "$45,760",  "$1,144", "$3,050", "$915",    "Comfortable in mid-tier cities"],
  ["$25/hr",            "$52,000",  "$1,300", "$3,450", "$1,035",  "Feasible in most US cities"],
  ["$30/hr",            "$62,400",  "$1,560", "$4,100", "$1,230",  "Comfortable in most markets"],
  ["$35/hr",            "$72,800",  "$1,820", "$4,750", "$1,425",  "Good flexibility in most markets"],
  ["$40/hr",            "$83,200",  "$2,080", "$5,400", "$1,620",  "Comfortably affords most 1BR units"],
  ["$50/hr",            "$104,000", "$2,600", "$6,700", "$2,010",  "Affords most 2BR across the US"],
];

const CITY_TABLE = [
  ["🌆 New York City, NY",  "$3,400", "$10,200/mo", "$122,400", "bg-rose-50",    "text-rose-600",    "Unaffordable on $75K"],
  ["🌉 San Francisco, CA",  "$3,200", "$9,600/mo",  "$115,200", "bg-rose-50",    "text-rose-600",    "Unaffordable on $75K"],
  ["🌊 Boston, MA",         "$3,400", "$10,200/mo", "$122,400", "bg-rose-50",    "text-rose-600",    "Unaffordable on $75K"],
  ["🌴 Miami, FL",          "$2,800", "$8,400/mo",  "$100,800", "bg-orange-50",  "text-orange-600",  "Very stretched"],
  ["☀️ Los Angeles, CA",    "$2,600", "$7,800/mo",  "$93,600",  "bg-orange-50",  "text-orange-600",  "Very stretched"],
  ["🌧️ Seattle, WA",        "$2,300", "$6,900/mo",  "$82,800",  "bg-amber-50",   "text-amber-600",   "Stretched on $75K"],
  ["🤠 Austin, TX",         "$1,700", "$5,100/mo",  "$61,200",  "bg-yellow-50",  "text-yellow-700",  "Borderline"],
  ["🏙️ Chicago, IL",        "$1,800", "$5,400/mo",  "$64,800",  "bg-yellow-50",  "text-yellow-700",  "Borderline"],
  ["🌸 Atlanta, GA",        "$1,600", "$4,800/mo",  "$57,600",  "bg-emerald-50", "text-emerald-600", "Affordable ✓"],
  ["🌵 Phoenix, AZ",        "$1,400", "$4,200/mo",  "$50,400",  "bg-emerald-50", "text-emerald-600", "Affordable ✓"],
  ["🎸 Nashville, TN",      "$1,600", "$4,800/mo",  "$57,600",  "bg-emerald-50", "text-emerald-600", "Affordable ✓"],
  ["🌾 Columbus, OH",       "$1,150", "$3,450/mo",  "$41,400",  "bg-blue-50",    "text-blue-600",    "Very Affordable ✓"],
  ["🌊 Indianapolis, IN",   "$1,100", "$3,300/mo",  "$39,600",  "bg-blue-50",    "text-blue-600",    "Very Affordable ✓"],
];

const LANDLORD_3X = [
  ["$800/mo",   "$2,400/mo",  "$28,800"],
  ["$1,000/mo", "$3,000/mo",  "$36,000"],
  ["$1,200/mo", "$3,600/mo",  "$43,200"],
  ["$1,500/mo", "$4,500/mo",  "$54,000"],
  ["$2,000/mo", "$6,000/mo",  "$72,000"],
  ["$2,500/mo", "$7,500/mo",  "$90,000"],
  ["$3,000/mo", "$9,000/mo",  "$108,000"],
  ["$3,500/mo", "$10,500/mo", "$126,000"],
];

const TOC = [
  { id: "what-is-30-rule",     label: "The 30% rule — where it came from and what it really means" },
  { id: "gross-income-illusion","label": "The gross income illusion no one tells you about" },
  { id: "three-methods",       label: "Three ways to calculate your rent budget" },
  { id: "salary-table",        label: "How much rent by salary: $25K–$150K reference table" },
  { id: "hourly-table",        label: "How much rent by hourly wage: $15–$50/hr table" },
  { id: "city-table",          label: "What salary you need in 13 major US cities" },
  { id: "landlord-rules",      label: "What landlords require — the 3× rule and what they don't tell you" },
  { id: "dti-ratios",          label: "Debt-to-income ratios: front-end and back-end explained" },
  { id: "50-30-20",            label: "The 50/30/20 rule applied to rent" },
  { id: "emergency-fund",      label: "The renter's emergency fund rule nobody mentions" },
  { id: "high-cost-cities",    label: "When you can't afford the 30% rule — what to do" },
  { id: "calculator",          label: "Use the free rent affordability calculator" },
];

// ─────────────────────────────────────────────────────────────────────────────
// SHARED COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-black tracking-tight text-slate-900
                 border-l-4 border-blue-600 pl-4 mt-14 mb-5 scroll-mt-6"
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
          ? "linear-gradient(135deg,#1d4ed8 0%,#0891b2 100%)"
          : "linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)",
      }}
    >
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full
                      bg-blue-500/10 blur-3xl pointer-events-none" />
      <div
        className="relative flex flex-col sm:flex-row items-start
                   sm:items-center justify-between gap-5"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Home size={15} className="text-blue-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-300">
              Free Tool · 3 Methods · Instant
            </span>
          </div>
          <p className="text-white font-black text-lg leading-snug mb-1">
            {isEnd
              ? "Calculate your exact rent budget — debt-adjusted"
              : "Get your real rent budget in 30 seconds"}
          </p>
          <p className="text-slate-400 text-[13px] leading-relaxed max-w-sm">
            {isEnd
              ? "Enter your salary, monthly debt, and see all three methods: 30% gross rule, conservative net income, and debt-adjusted budget. Plus landlord qualification check."
              : "30% rule · Conservative net income · Debt-adjusted method · DTI analysis · 50/30/20 breakdown."}
          </p>
        </div>
        <Link
          href="/rent-affordability-calculator"
          className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-blue-500 hover:bg-blue-400 text-white font-black text-[14px]
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
export default function RentAffordabilityGuidePage() {
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
          <span className="text-slate-600">Rent Affordability Guide 2026</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        bg-blue-50 border border-blue-100 text-blue-700
                        text-[10px] font-black uppercase tracking-widest mb-5">
          <Home size={11} />
          Housing · US Rental Market 2026 · 50+ Cities
        </div>

        <h1
          className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]
                     text-slate-900 mb-6"
        >
          Rent Affordability{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg,#1d4ed8,#0891b2)" }}
          >
            Guide
          </span>{" "}
          2026
          <br className="hidden sm:block" />
          <span className="text-slate-500 text-xl md:text-2xl font-bold">
            How Much Rent Can You Actually Afford?
          </span>
        </h1>

        <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-7 max-w-2xl">
          The 30% rule says spend 30% of gross income on rent. On a $50,000 salary,
          that's $1,250/month — which sounds reasonable. But{" "}
          <strong className="text-slate-900">
            your actual take-home is only $3,300–$3,500/month
          </strong>
          , meaning that $1,250 is 36–38% of real money in your pocket. This guide
          shows the full picture: three calculation methods, salary-specific tables,
          city-by-city data, and what landlords never tell you.
        </p>

        {/* Hero stat strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
          {[
            { value: "$1,900",   label: "Average US rent 2026" },
            { value: "$70K+",    label: "Income needed at avg rent" },
            { value: "3×",       label: "Landlord income requirement" },
            { value: "36%",      label: "Back-end DTI safe ceiling" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-center"
            >
              <p className="text-xl font-black text-blue-700 tabular-nums leading-none mb-1">
                {s.value}
              </p>
              <p className="text-[10px] text-blue-600 leading-snug">{s.label}</p>
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
            Zillow · Rent.com · CoStar 2026 data · 13 US cities
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
                    <a
                      href={`#${item.id}`}
                      className="text-blue-600 hover:underline text-[13px] font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* ─── SECTION 1 ─── */}
            <H2 id="what-is-30-rule">
              The 30% rule — where it came from and what it really means
            </H2>

            <p>
              The 30% rule has been the standard benchmark for rent affordability since
              1981, when the US government established it as the threshold for "affordable
              housing" in federal housing assistance programmes. The idea is simple: spend
              no more than 30% of your gross monthly income on rent.
            </p>

            <p className="mt-4">
              On a $5,000/month gross income, the 30% rule gives $1,500/month maximum
              rent. On $6,250/month, it gives $1,875. On $8,333/month, it gives $2,500.
              The math is easy, which is exactly why landlords love it — they can check
              your income quickly and make a decision.
            </p>

            <p className="mt-4">
              But here's what the rule was never designed to do: accurately reflect what
              you can genuinely afford after taxes, debt, and real living costs. It was
              created as a public housing eligibility benchmark, not as personal financial
              advice. Understanding this distinction is the key to making smarter housing
              decisions.
            </p>

            {/* ─── SECTION 2 ─── */}
            <H2 id="gross-income-illusion">
              The gross income illusion no one tells you about
            </H2>

            <p>
              Here is the most important thing most rent guides skip entirely: the 30%
              rule uses{" "}
              <strong>gross income — your salary before any taxes are deducted</strong>.
              After federal income tax, FICA (Social Security 6.2% + Medicare 1.45%),
              and state income tax, most US workers take home only 70–80% of their gross
              pay. This means that 30% of gross is actually{" "}
              <strong>37–43% of your real take-home money</strong>.
            </p>

            {/* Gross income illusion table */}
            <div className="not-prose my-7 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="font-black text-blue-900 text-[14px] mb-4 flex items-center gap-2">
                <AlertCircle size={15} className="text-blue-600" />
                The gross income illusion — what 30% really costs you
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    label: "$50,000/yr ($4,167/mo gross)",
                    rule30: "$1,250/mo",
                    takehome: "$3,300–$3,500/mo",
                    real: "36–38% of take-home",
                    color: "bg-orange-50 border-orange-100",
                  },
                  {
                    label: "$75,000/yr ($6,250/mo gross)",
                    rule30: "$1,875/mo",
                    takehome: "$4,800–$5,200/mo",
                    real: "36–39% of take-home",
                    color: "bg-orange-50 border-orange-100",
                  },
                  {
                    label: "$100,000/yr ($8,333/mo gross)",
                    rule30: "$2,500/mo",
                    takehome: "$6,000–$7,000/mo",
                    real: "36–42% of take-home",
                    color: "bg-rose-50 border-rose-100",
                  },
                  {
                    label: "$30,000/yr ($2,500/mo gross)",
                    rule30: "$750/mo",
                    takehome: "$2,050–$2,150/mo",
                    real: "35–37% of take-home",
                    color: "bg-amber-50 border-amber-100",
                  },
                ].map((r) => (
                  <div key={r.label} className={`p-4 rounded-xl border ${r.color}`}>
                    <p className="font-bold text-slate-800 text-[12px] mb-2">{r.label}</p>
                    <p className="text-[12px] text-slate-600">
                      30% rule: <strong className="text-blue-700">{r.rule30}</strong>
                    </p>
                    <p className="text-[12px] text-slate-600">Take-home: {r.takehome}</p>
                    <p className="text-[11px] font-bold text-rose-600 mt-1">
                      Real cost: {r.real}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-blue-700 mt-4">
                This is why using net income (30% of take-home, not gross) gives a more
                honest picture of what you can afford without financial stress. Use our
                calculator to see both figures side by side.
              </p>
            </div>

            {/* ─── SECTION 3 ─── */}
            <H2 id="three-methods">
              Three ways to calculate your rent budget — which to use and when
            </H2>

            <p>
              There is no single universally correct answer to how much rent you can
              afford. The right method depends on what you're trying to do:
            </p>

            <div className="not-prose space-y-4 my-6">
              {[
                {
                  n: "01", border: "border-l-blue-500",
                  badge: "bg-blue-100 text-blue-700",
                  title: "The 30% Gross Income Rule",
                  when: "Use when: applying for an apartment",
                  body: "This is the standard landlords use. Most rental applications require gross monthly income of at least 3× the monthly rent — roughly equivalent to the 30% gross threshold. You'll need to meet this to qualify, regardless of your actual budget. On a $5,000/month gross income, your maximum qualifying rent is $1,500/month.",
                  limit: "Limitation: doesn't account for taxes, debt, savings goals, or high-cost-of-living states.",
                },
                {
                  n: "02", border: "border-l-emerald-500",
                  badge: "bg-emerald-100 text-emerald-700",
                  title: "Conservative Net Income Method",
                  when: "Use when: personal budgeting and deciding whether you can actually afford it",
                  body: "Calculate your actual monthly take-home after all taxes, then apply 30% to that figure. This gives a rent budget that genuinely leaves room for savings, debt repayment, and living expenses. It's typically $200–$400/month lower than the gross-income rule — and far more sustainable long-term.",
                  limit: "Limitation: landlords don't use this. It's for your planning, not your application.",
                },
                {
                  n: "03", border: "border-l-violet-500",
                  badge: "bg-violet-100 text-violet-700",
                  title: "Debt-Adjusted Budget Method",
                  when: "Use when: you have student loans, car payments, or credit card debt",
                  body: "Start with net take-home. Subtract all monthly debt payments. Subtract a minimum savings target (20% of net is the standard). The remainder, minus a buffer for utilities and necessities, is your true available rent budget. Every dollar of debt you carry reduces your rent budget by approximately that same dollar.",
                  limit: "Limitation: requires accurate knowledge of all monthly debt obligations — which changes as you pay debt down.",
                },
              ].map((m) => (
                <div
                  key={m.n}
                  className={`bg-white border border-slate-200 border-l-4 ${m.border} rounded-xl p-5`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-black text-slate-200 flex-shrink-0
                                     leading-none mt-0.5">{m.n}</span>
                    <div>
                      <h4 className="font-black text-slate-900 text-[14px] mb-1">
                        {m.title}
                      </h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md
                                        inline-block mb-2 ${m.badge}`}>
                        {m.when}
                      </span>
                      <p className="text-[13px] text-slate-600 leading-relaxed mb-2">
                        {m.body}
                      </p>
                      <p className="text-[11px] text-slate-400 italic">{m.limit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ─── SECTION 4 — SALARY TABLE ─── */}
            <H2 id="salary-table">
              How much rent can I afford by salary? ($25K–$150K)
            </H2>
            <p className="mb-5">
              All figures assume no pre-existing debt. The conservative column uses 30%
              of estimated net take-home (after federal + average state tax).
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200
                            shadow-sm my-2">
              <table className="w-full text-[11px] text-slate-700 bg-white min-w-[600px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Annual Salary</th>
                    <th className="px-3 py-3 text-left font-black">Monthly Gross</th>
                    <th className="px-3 py-3 text-left font-black">30% Rule Max</th>
                    <th className="px-3 py-3 text-left font-black">Est. Take-Home</th>
                    <th className="px-3 py-3 text-left font-black">Conservative Rent</th>
                    <th className="px-3 py-3 text-left font-black">Income Needed (3×)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {SALARY_TABLE.map(([salary, gross, max30, takehome, cons, need], i) => (
                    <tr
                      key={salary}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                                  hover:bg-blue-50/20 transition-colors`}
                    >
                      <td className="px-3 py-2.5 font-black text-slate-900">{salary}</td>
                      <td className="px-3 py-2.5 text-slate-500">{gross}</td>
                      <td className="px-3 py-2.5 font-black text-blue-700">{max30}/mo</td>
                      <td className="px-3 py-2.5 text-slate-500">{takehome}/mo</td>
                      <td className="px-3 py-2.5 font-bold text-emerald-700">{cons}/mo</td>
                      <td className="px-3 py-2.5 text-slate-400 text-[10px]">{need}/yr</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Conservative rent = 30% of estimated net take-home (federal + avg state tax).
              Income needed uses the landlord 3× monthly rent rule.
            </p>

            {/* MID-ARTICLE CTA */}
            <CalculatorCTA variant="mid" />

            {/* ─── SECTION 5 — HOURLY TABLE ─── */}
            <H2 id="hourly-table">
              What rent can I afford by hourly wage? ($15–$50/hr)
            </H2>
            <p className="mb-5">
              Based on 40 hours/week × 52 weeks/year. After-tax figures assume
              national average effective rate.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200
                            shadow-sm my-2">
              <table className="w-full text-[11px] text-slate-700 bg-white min-w-[580px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Hourly Wage</th>
                    <th className="px-3 py-3 text-left font-black">Annual Gross</th>
                    <th className="px-3 py-3 text-left font-black">Max Rent (30%)</th>
                    <th className="px-3 py-3 text-left font-black">Est. Take-Home/mo</th>
                    <th className="px-3 py-3 text-left font-black">Conservative</th>
                    <th className="px-3 py-3 text-left font-black">Market Reality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {HOURLY_TABLE.map(([wage, annual, max30, takehome, cons, reality], i) => (
                    <tr
                      key={wage}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                                  hover:bg-blue-50/20 transition-colors`}
                    >
                      <td className="px-3 py-2.5 font-bold text-slate-900">{wage}</td>
                      <td className="px-3 py-2.5 text-slate-500">{annual}</td>
                      <td className="px-3 py-2.5 font-black text-blue-700">{max30}/mo</td>
                      <td className="px-3 py-2.5 text-slate-500">{takehome}/mo</td>
                      <td className="px-3 py-2.5 font-bold text-emerald-700">{cons}/mo</td>
                      <td className="px-3 py-2.5 text-[10px] text-slate-400 italic">
                        {reality}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Average US rent in 2026: $1,800–$2,000/month. Workers earning under $30/hr
              face significant affordability challenges in major metro areas.
            </p>

            {/* ─── SECTION 6 — CITY TABLE ─── */}
            <H2 id="city-table">
              What salary do you need in 13 major US cities? (2026)
            </H2>
            <p className="mb-5">
              Based on median 1-bedroom rent · 30% gross income rule · standard 3×
              landlord qualification. Affordability assessed against a $75,000 annual
              salary.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200
                            shadow-sm my-2">
              <table className="w-full text-[11px] min-w-[520px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">City</th>
                    <th className="px-3 py-3 text-left font-black">Median 1BR Rent</th>
                    <th className="px-3 py-3 text-left font-black">Income Needed (3×)</th>
                    <th className="px-3 py-3 text-left font-black">Annual Salary Required</th>
                    <th className="px-3 py-3 text-left font-black">At $75K Salary</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {CITY_TABLE.map(([city, rent, income3x, salary, rowBg, textColor, status], i) => (
                    <tr key={city} className={rowBg || (i % 2 === 0 ? "bg-white" : "bg-slate-50/50")}>
                      <td className="px-3 py-2.5 font-bold text-slate-900 text-[12px]">
                        {city}
                      </td>
                      <td className="px-3 py-2.5 font-black text-blue-700">{rent}</td>
                      <td className="px-3 py-2.5 text-slate-600">{income3x}</td>
                      <td className="px-3 py-2.5 font-bold text-slate-800">{salary}/yr</td>
                      <td className={`px-3 py-2.5 font-bold text-[11px] ${textColor}`}>
                        {status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Sources: Zillow, Rent.com, CoStar 2026 estimates. Rents change rapidly —
              verify current rates before making housing decisions.
            </p>

            {/* ─── SECTION 7 — LANDLORD RULES ─── */}
            <H2 id="landlord-rules">
              What landlords require — the 3× rule and what they don't tell you
            </H2>

            <p>
              The 3× income rule — your gross monthly income must be at least three
              times the monthly rent — is not a law. It's an industry convention that
              landlords use because it correlates with lower default rates. Understanding
              its nuances can make or break your apartment search.
            </p>

            <H3>Standard 3× income requirement by rent level</H3>
            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200 my-5">
              <table className="w-full text-[12px] min-w-[360px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Monthly Rent</th>
                    <th className="px-4 py-3 text-left font-black">Required Monthly Gross</th>
                    <th className="px-4 py-3 text-left font-black">Required Annual Income</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {LANDLORD_3X.map(([rent, monthly, annual], i) => (
                    <tr key={rent} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-2.5 font-bold text-slate-900">{rent}</td>
                      <td className="px-4 py-2.5 font-bold text-blue-700">{monthly}</td>
                      <td className="px-4 py-2.5 text-emerald-700 font-semibold">{annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H3>What landlords never tell you</H3>
            <div className="not-prose space-y-3 my-5">
              {[
                {
                  title: "NYC and Boston use 40× annual rule",
                  body: "In highly competitive markets, some landlords require annual income ≥ 40× monthly rent. For $2,000/month: 40 × $2,000 = $80,000/year — stricter than the 3× rule ($72,000). Know which standard your target landlord uses before applying.",
                  color: "border-orange-100 bg-orange-50 text-orange-700",
                },
                {
                  title: "Roommates' incomes are combined",
                  body: "For a $3,000/month shared apartment with two roommates, each person only needs to qualify at $1,500/month rent — requiring $54,000/year individually, not $108,000. This makes shared housing dramatically more accessible.",
                  color: "border-emerald-100 bg-emerald-50 text-emerald-700",
                },
                {
                  title: "Guarantors can cover income gaps",
                  body: "If your income doesn't meet the threshold, a co-signer (guarantor) with sufficient income — often 5× or 6× the monthly rent — can vouch for your lease. Common for students and recent graduates. Some landlords accept institutional guarantors like Insurent for a fee.",
                  color: "border-blue-100 bg-blue-50 text-blue-700",
                },
                {
                  title: "Self-employed income is evaluated differently",
                  body: "Freelancers and contractors typically need 2 years of tax returns showing consistent net income. Landlords use Schedule C net profit, not gross revenue. If your business expenses are high, your qualifying income may be far lower than your total invoiced revenue.",
                  color: "border-violet-100 bg-violet-50 text-violet-700",
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-xl border p-4 ${item.color}`}>
                  <p className="font-black text-[13px] mb-1">{item.title}</p>
                  <p className="text-[12px] leading-relaxed opacity-90">{item.body}</p>
                </div>
              ))}
            </div>

            {/* ─── SECTION 8 — DTI ─── */}
            <H2 id="dti-ratios">
              Debt-to-income ratios: front-end and back-end explained
            </H2>

            <p>
              Your debt-to-income ratio (DTI) is the most accurate measure of rent
              affordability. Mortgage lenders use it as their primary qualification
              metric — and it works just as well for renting.
            </p>

            <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
              {[
                {
                  title: "Front-End DTI (Housing Ratio)",
                  formula: "Monthly rent ÷ gross monthly income",
                  example: "$1,500 ÷ $5,000 gross = 30% ✓",
                  tiers: [
                    { label: "Below 28%", verdict: "Excellent", color: "text-emerald-700" },
                    { label: "28–33%", verdict: "Acceptable (landlord threshold)", color: "text-amber-700" },
                    { label: "Above 33%", verdict: "May not qualify", color: "text-rose-700" },
                  ],
                  bg: "border-blue-100 bg-blue-50",
                  textColor: "text-blue-900",
                },
                {
                  title: "Back-End DTI (All Debt)",
                  formula: "(Rent + all monthly debt) ÷ gross monthly income",
                  example: "($1,500 + $400 debt) ÷ $5,000 = 38% ⚠",
                  tiers: [
                    { label: "Below 36%", verdict: "Financially healthy", color: "text-emerald-700" },
                    { label: "36–43%", verdict: "Stretched but manageable", color: "text-amber-700" },
                    { label: "Above 43%", verdict: "High stress — reconsider", color: "text-rose-700" },
                  ],
                  bg: "border-emerald-100 bg-emerald-50",
                  textColor: "text-emerald-900",
                },
              ].map((dti) => (
                <div key={dti.title} className={`p-5 rounded-2xl border ${dti.bg}`}>
                  <h4 className={`font-black text-[13px] mb-2 ${dti.textColor}`}>
                    {dti.title}
                  </h4>
                  <p className={`text-[11px] font-bold mb-1 ${dti.textColor} opacity-80`}>
                    Formula: {dti.formula}
                  </p>
                  <p className={`text-[11px] mb-3 ${dti.textColor} opacity-70`}>
                    Example: {dti.example}
                  </p>
                  <div className="space-y-1.5">
                    {dti.tiers.map((t) => (
                      <p key={t.label} className={`text-[11px] font-semibold ${t.color}`}>
                        {t.label} → {t.verdict}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p>
              <strong>The real-world impact of debt on rent budget:</strong> If you
              earn $5,000/month gross and carry $500/month in debt (car loan + student
              loans), your back-end DTI at the 36% ceiling is{" "}
              <strong>$1,800 total (rent + debt)</strong>. Subtract $500 debt and your
              maximum safe rent is $1,300 — not the $1,500 the 30% front-end rule
              suggests. Higher debt directly compresses your rent ceiling.
            </p>

            {/* ─── SECTION 9 — 50/30/20 ─── */}
            <H2 id="50-30-20">
              The 50/30/20 rule applied to rent — the budget framework that actually works
            </H2>

            <p>
              The 50/30/20 rule, popularized by Senator Elizabeth Warren in her book
              "All Your Worth," divides net take-home pay into three buckets. Applied
              to rent, it gives a clearer framework than the 30% gross rule because it
              uses real money — what you actually have available to spend.
            </p>

            <div className="not-prose space-y-4 my-6">
              {[
                {
                  pct: "50% — Needs",
                  color: "bg-blue-600",
                  bg: "bg-blue-50 border-blue-100",
                  textColor: "text-blue-900",
                  items: [
                    "Rent, utilities, groceries, transport, insurance",
                    "Minimum debt payments",
                    "Rent alone should be under 30% of this 50% bucket",
                    "If rent is at 50% of take-home, you have zero buffer for any other needs",
                  ],
                  warning: "At $3,500/mo take-home: needs bucket = $1,750/mo. Rent should ideally be under $1,050/mo to leave room for all other needs.",
                },
                {
                  pct: "30% — Wants",
                  color: "bg-violet-500",
                  bg: "bg-violet-50 border-violet-100",
                  textColor: "text-violet-900",
                  items: [
                    "Dining out, entertainment, travel, hobbies",
                    "Subscriptions, clothing, personal care beyond basics",
                    "This is the first category to disappear if rent is too high",
                    "Many renters in high-cost cities have zero want budget",
                  ],
                  warning: "If your rent alone consumes 40%+ of take-home, this bucket is effectively gone — every dollar of excess rent comes from somewhere.",
                },
                {
                  pct: "20% — Savings & debt payoff",
                  color: "bg-emerald-500",
                  bg: "bg-emerald-50 border-emerald-100",
                  textColor: "text-emerald-900",
                  items: [
                    "Emergency fund (3–6 months of expenses)",
                    "Retirement contributions (401k, IRA)",
                    "Extra debt payments above minimums",
                    "This is the category that compounds into long-term wealth",
                  ],
                  warning: "Never let rent eat into this permanently. Every $100/month you can't save compounds to $80,000+ less at retirement over 30 years (7% annual return).",
                },
              ].map((s) => (
                <div
                  key={s.pct}
                  className={`rounded-2xl border ${s.bg} p-5 flex gap-4`}
                >
                  <div
                    className={`w-1.5 rounded-full flex-shrink-0 self-stretch ${s.color}`}
                  />
                  <div>
                    <p className={`font-black text-[14px] mb-2 ${s.textColor}`}>{s.pct}</p>
                    <ul className="space-y-1 mb-3">
                      {s.items.map((item) => (
                        <li key={item} className="flex gap-2 text-[12px] text-slate-600">
                          <span className="text-slate-300 flex-shrink-0">›</span> {item}
                        </li>
                      ))}
                    </ul>
                    <p className={`text-[11px] font-bold italic ${s.textColor} opacity-80`}>
                      {s.warning}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ─── SECTION 10 — EMERGENCY FUND ─── */}
            <H2 id="emergency-fund">
              The renter's emergency fund rule nobody mentions
            </H2>

            <p>
              Most personal finance guides tell you to build a 3–6 month emergency
              fund. What they don't specify: renters need a{" "}
              <strong>specifically sized renter's emergency fund</strong> before they
              even move in, plus ongoing reserves for scenarios unique to renters.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200 my-5">
              <table className="w-full text-[12px] min-w-[400px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Cost</th>
                    <th className="px-4 py-3 text-left font-black">Typical Amount</th>
                    <th className="px-4 py-3 text-left font-black">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Security deposit",    "1–2 months rent",          "Often non-refundable if you break lease early"],
                    ["First month upfront", "1 month rent",             "Due at lease signing, before you move in"],
                    ["Last month buffer",   "2 months rent",            "Cover rent if you lose income while job searching"],
                    ["Moving costs (local)","$1,000–$2,500",            "Professional movers for 1BR in 2026"],
                    ["Moving (interstate)", "$4,000–$10,000",           "Cross-country move with full-service movers"],
                    ["Lease break penalty", "1–3 months rent typically","Varies by lease — know this before signing"],
                    ["Total move-in fund",  "4–5 months rent + moving", "Absolute minimum before committing to a lease"],
                  ].map(([cost, amount, note], i) => (
                    <tr key={cost} className={i === 6 ? "bg-blue-50 font-black" : i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-2.5 font-bold text-slate-900">{cost}</td>
                      <td className="px-4 py-2.5 font-bold text-blue-700">{amount}</td>
                      <td className="px-4 py-2.5 text-slate-500 text-[11px]">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl bg-slate-900 text-white p-5 my-5">
              <p className="font-black text-[13px] text-amber-400 mb-1">
                The renter's rule of thumb
              </p>
              <p className="text-slate-300 text-[13px] leading-relaxed">
                Before signing any lease, ensure you have at least{" "}
                <strong className="text-white">4–5 months of rent in liquid savings</strong>.
                This covers move-in costs (security deposit + first month), a buffer for
                job disruption (2 months), and minor emergencies — without touching your
                long-term investments or retirement accounts.
              </p>
            </div>

            {/* ─── SECTION 11 — HIGH COST CITIES ─── */}
            <H2 id="high-cost-cities">
              When you can't afford the 30% rule — what to do
            </H2>

            <p>
              In New York, San Francisco, Boston, Miami, and Los Angeles, the 30% rule
              is practically impossible for workers earning below $80,000–$120,000.
              Renters in these markets routinely spend 35–50% of income on housing —
              not from financial failure, but from market reality. Here are the options
              that actually work:
            </p>

            <div className="not-prose space-y-4 my-6">
              {[
                {
                  title: "Roommates — the most effective tool",
                  body: "Sharing a $3,000/month apartment with one roommate brings your per-person cost to $1,500/month — a $54,000/year income qualifies. With two roommates: $1,000/month, requiring only $36,000/year. Roommates can reduce your effective housing cost by 33–50% without changing your income.",
                  color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100",
                },
                {
                  title: "Commuter suburbs — the time-money tradeoff",
                  body: "Living 30–45 minutes outside major metros can reduce rent by $600–$1,500/month. Calculate the total cost: commuting adds time (30 min × 2 × 250 days = 250 hours/year) and money ($150–$400/month in transit or gas). The net savings are often still $400–$800/month, which compounds significantly.",
                  color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100",
                },
                {
                  title: "Pre-tax deductions to effectively increase take-home for rent",
                  body: "Maximizing your 401(k) reduces federal and state taxable income, lowering your tax bill. The after-tax cost of a $500/month 401(k) contribution is only $350–$380 (depending on your bracket) — meaning you save $120–$150/month in taxes. This money could go toward rent. Health insurance premiums through a Section 125 plan also reduce FICA, creating additional take-home for housing.",
                  color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100",
                },
                {
                  title: "Negotiate rent — more effective in 2026 than ever",
                  body: "In markets where rental vacancy rates have risen (Sun Belt cities, suburban metros), landlords have increased negotiating flexibility. Offering a longer lease (18 or 24 months), paying several months upfront, or being a verifiably excellent tenant (high credit score, stable employment) can often negotiate $100–$300/month off listed rent.",
                  color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100",
                },
              ].map((s) => (
                <div key={s.title} className={`rounded-2xl border ${s.border} p-5`}>
                  <p className={`font-black text-[13px] mb-2 ${s.color}`}>{s.title}</p>
                  <p className="text-slate-600 text-[13px] leading-relaxed">{s.body}</p>
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
                Rent data sourced from Zillow, Rent.com, and CoStar 2026 estimates.
                City median rents change rapidly — verify current rates before making
                housing decisions. Take-home estimates use 2026 IRS federal tax brackets
                and national average state tax rate. Individual results vary by state,
                filing status, deductions, and employer benefits. Not financial or legal
                advice. Consult a licensed financial advisor or housing counselor for
                major housing decisions.
              </p>
              <p className="text-[11px] text-slate-400 mt-2">Last updated: May 2026</p>
            </div>
          </article>

          {/* ── STICKY SIDEBAR ──────────────────────────────────────────── */}
          <aside className="w-full lg:w-[260px] flex-shrink-0 space-y-5 lg:sticky lg:top-6">

            {/* Primary CTA */}
            <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-sm">
              <div
                className="px-5 py-4 text-white"
                style={{ background: "linear-gradient(135deg,#1d4ed8,#0891b2)" }}
              >
                <Home size={18} className="mb-2 text-blue-200" />
                <p className="font-black text-[14px] leading-snug mb-1">
                  Free Rent Affordability Calculator
                </p>
                <p className="text-blue-200 text-[11px] leading-relaxed">
                  3 methods · DTI analysis · Landlord check · 50/30/20 budget · Instant.
                </p>
              </div>
              <Link
                href="/rent-affordability-calculator"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white
                           border-t border-blue-100 text-blue-700 font-black
                           text-[13px] hover:bg-blue-50 transition-colors group"
              >
                Open Calculator
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>

            {/* Is 30% rule outdated? */}
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={14} className="text-amber-600" />
                <p className="font-black text-amber-900 text-[12px]">
                  Is the 30% Rule Outdated?
                </p>
              </div>
              <p className="text-amber-800 text-[12px] leading-relaxed">
                Created in <strong>1981</strong> when median US rent was{" "}
                <strong>$243/month</strong>. In 2026, average rent is{" "}
                <strong>$1,800–$2,000/month</strong> — requiring $70K+ income just
                to meet the 30% threshold. In NYC, SF, Boston, and Miami, it's
                practically impossible on median salaries.
              </p>
              <p className="text-amber-700 text-[11px] mt-2 font-semibold">
                Use as a landlord qualification guide only —
                not as your personal financial rule.
              </p>
            </div>

            {/* Landlord 3× quick ref */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">
                Landlord Income Requirement (3×)
              </p>
              <div className="space-y-2">
                {LANDLORD_3X.slice(0, 6).map(([rent, monthly, annual]) => (
                  <div
                    key={rent}
                    className="flex items-center justify-between text-[11px]
                               border-b border-slate-50 pb-2 last:border-0"
                  >
                    <span className="font-bold text-slate-700">{rent}</span>
                    <div className="text-right">
                      <span className="font-black text-blue-700 block">{monthly}</span>
                      <span className="text-slate-400 text-[10px]">{annual}/yr</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related calculators */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-3">
                Related Calculators
              </p>
              <div className="space-y-2">
                {[
                  { label: "Paycheck Calculator",         href: "/paycheck-calculator" },
                  { label: "Mortgage Calculator",         href: "/mortgage-calculator" },
                  { label: "Budget Calculator",           href: "/budget-calculator" },
                  { label: "Debt Payoff Calculator",      href: "/debt-payoff-calculator" },
                  { label: "Savings Calculator",          href: "/compound-interest-calculator" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center gap-1.5 text-[12px] text-blue-600
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
                             text-slate-500 mb-3">
                Related Guides
              </p>
              <div className="space-y-2">
                {[
                  { label: "Paycheck Calculator Guide 2026",    href: "/blog/paycheck-calculator-guide-2026" },
                  { label: "Salary After Tax Guide 2026",       href: "/blog/salary-after-tax-guide-2026" },
                  { label: "Hourly to Salary Guide 2026",       href: "/blog/hourly-to-salary-guide-2026" },
                  { label: "Loan Calculator Guide 2026",        href: "/blog/loan-calculator-guide-2026" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center gap-1.5 text-[12px] text-blue-600
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