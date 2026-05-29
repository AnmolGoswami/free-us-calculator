// app/blog/self-employment-tax-guide-2026/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Calculator, Calendar, Clock, CheckCircle2,
  ChevronRight, AlertTriangle, TrendingUp, Briefcase,
  Wallet, ShieldCheck, Zap, DollarSign, BarChart2,
  AlertCircle, Star, Receipt,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
//
// Tool page = transactional: "self employment tax calculator", "1099 tax calculator"
//
// This blog page = informational (distinct SERP positions):
//   "how to calculate self employment tax 2026"
//   "what is the self employment tax rate 2026"
//   "how much tax do freelancers pay"
//   "1099 contractor tax deductions list 2026"
//   "quarterly estimated tax deadlines 2026"
//   "what is QBI deduction self employed"
//   "how to reduce self employment tax legally"
//   "self employment tax vs regular employee tax"
//   "schedule C deductions list freelancer"
//   "social security and medicare for self employed"
//
// Two URLs across both intent clusters = two SERP positions for same keywords.
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Self-Employment Tax Guide 2026 – 15.3% SE Tax, Quarterly Payments & Every Deduction",
  description:
    "How much tax do freelancers actually pay in 2026? Complete guide: 15.3% SE tax explained, step-by-step calculation, every Schedule C deduction, QBI deduction, quarterly payment deadlines, and how to legally reduce your self-employment tax. Real numbers.",
  alternates: {
    canonical:
      "https://www.freeuscalculator.in/blog/self-employment-tax-guide-2026",
  },
  keywords: [
    "how to calculate self employment tax 2026",
    "self employment tax rate 2026",
    "how much tax do freelancers pay",
    "1099 contractor tax deductions list 2026",
    "quarterly estimated tax deadlines 2026",
    "QBI deduction self employed 2026",
    "how to reduce self employment tax legally",
    "self employment tax vs employee tax comparison",
    "schedule C deductions freelancer list",
    "social security medicare self employed 2026",
    "self employed tax guide complete 2026",
    "freelancer quarterly tax calculator guide",
    "1099 tax planning strategies 2026",
    "self employment tax 92.35 percent explained",
    "home office deduction self employed 2026",
  ],
  openGraph: {
    title:
      "Self-Employment Tax Guide 2026 – 15.3% SE Tax, Quarterly Deadlines & Every Deduction",
    description:
      "How freelancers and 1099 workers are taxed in 2026: the 15.3% SE tax calculation, every Schedule C deduction, QBI deduction, quarterly deadlines, and strategies to legally cut your tax bill. Real worked examples.",
    url: "https://www.freeuscalculator.in/blog/self-employment-tax-guide-2026",
    type: "article",
    publishedTime: "2026-04-01T00:00:00Z",
    modifiedTime: "2026-05-01T00:00:00Z",
    authors: ["FreeUSCalculator"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD — Article + FAQPage
// Tool page uses WebApplication schema — different type = stronger topical authority.
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
          name: "Self-Employment Tax Guide 2026",
          item: "https://www.freeuscalculator.in/blog/self-employment-tax-guide-2026" },
      ],
    },
    {
      "@type": "Article",
      headline:
        "Self-Employment Tax Guide 2026 – 15.3% SE Tax, Quarterly Payments & Every Deduction",
      description:
        "Complete guide to self-employment taxes in 2026: how the 15.3% SE tax is calculated, every Schedule C deduction, QBI deduction worth up to 20%, quarterly payment deadlines, and legal strategies to reduce your tax bill.",
      url: "https://www.freeuscalculator.in/blog/self-employment-tax-guide-2026",
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
      relatedLink:
        "https://www.freeuscalculator.in/self-employment-tax-calculator-usa",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the self-employment tax rate in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The self-employment tax rate in 2026 is 15.3%, consisting of 12.4% Social Security (OASDI) and 2.9% Medicare (HI). However, this rate applies to only 92.35% of your net self-employment income, not 100%. On $100,000 net profit, taxable SE income is $92,350, and SE tax is $14,130 (15.3% × $92,350). Social Security applies only up to the $184,500 wage base; Medicare applies to all net earnings.",
          },
        },
        {
          "@type": "Question",
          name: "How is self-employment tax calculated step by step?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Step 1: Calculate net profit (gross revenue minus business expenses). Step 2: Multiply net profit by 92.35% to get SE taxable income. Step 3: Multiply SE taxable income by 15.3% (or 2.9% Medicare only on income above $184,500). Step 4: Deduct 50% of SE tax as an above-the-line deduction. Step 5: Calculate federal income tax on adjusted gross income. Total tax = SE tax + federal income tax. Example: $80,000 net profit → $73,880 SE taxable income → $11,304 SE tax → deduct $5,652 from AGI → calculate federal income tax on $74,348.",
          },
        },
        {
          "@type": "Question",
          name: "What are the quarterly estimated tax deadlines for 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 2026 quarterly estimated tax deadlines are: Q1 (Jan 1–Mar 31) → due April 15, 2026. Q2 (Apr 1–May 31) → due June 16, 2026. Q3 (Jun 1–Aug 31) → due September 15, 2026. Q4 (Sep 1–Dec 31) → due January 15, 2027. If you expect to owe $1,000 or more in tax for the year, you are required to make quarterly payments to avoid underpayment penalties.",
          },
        },
        {
          "@type": "Question",
          name: "What is the QBI deduction and how does it help self-employed workers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Qualified Business Income (QBI) deduction under Section 199A allows most self-employed individuals to deduct up to 20% of their qualified business income from their taxable income. On $80,000 net profit, that's up to $16,000 deducted before calculating federal income tax. The deduction phases out for high earners in certain service businesses (law, consulting, finance) above $197,300 (single) or $394,600 (MFJ) in 2026. The QBI deduction does not reduce SE tax — only federal income tax.",
          },
        },
        {
          "@type": "Question",
          name: "What expenses can I deduct as a self-employed worker?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common Schedule C deductions for self-employed workers: Home office (dedicated workspace — actual expense or $5/sq ft simplified method up to 300 sq ft = $1,500 max). Vehicle: IRS mileage rate $0.725/mile (2026) or actual expenses. Health insurance premiums (100% deductible above the line if not eligible for employer plan). Self-employed retirement contributions (SEP-IRA up to 25% of net, max $70,000 in 2026; Solo 401k up to $70,000). Equipment, software, subscriptions directly used in business. Professional development, courses, certifications. Business phone and internet (business-use percentage). Marketing, advertising, website costs.",
          },
        },
        {
          "@type": "Question",
          name: "How does self-employment tax compare to being a W-2 employee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A W-2 employee pays 7.65% FICA (6.2% SS + 1.45% Medicare) and their employer pays a matching 7.65% — total 15.3%. A self-employed person pays the full 15.3% themselves, but can deduct 50% of that SE tax from their gross income. Additionally, W-2 employees have payroll taxes automatically withheld; self-employed workers must calculate and pay quarterly estimates. Self-employed workers also have access to more deductions (home office, vehicle, health insurance, retirement) that W-2 employees cannot claim.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

// SE Tax step-by-step worked examples
const WORKED_EXAMPLES = [
  {
    income: "$60,000 net profit",
    seBase: "$55,410",
    seTax: "$8,478",
    halfDeduction: "$4,239",
    agi: "$55,761",
    federalTax: "~$5,642",
    totalTax: "~$14,120",
    effectiveRate: "~23.5%",
    quarterly: "~$3,530/quarter",
  },
  {
    income: "$80,000 net profit",
    seBase: "$73,880",
    seTax: "$11,304",
    halfDeduction: "$5,652",
    agi: "$74,348",
    federalTax: "~$9,256",
    totalTax: "~$20,560",
    effectiveRate: "~25.7%",
    quarterly: "~$5,140/quarter",
  },
  {
    income: "$120,000 net profit",
    seBase: "$110,820",
    seTax: "$16,955",
    halfDeduction: "$8,478",
    agi: "$111,522",
    federalTax: "~$18,792",
    totalTax: "~$35,747",
    effectiveRate: "~29.8%",
    quarterly: "~$8,937/quarter",
  },
  {
    income: "$200,000 net profit",
    seBase: "$184,500 (SS cap)",
    seTax: "$23,302",
    halfDeduction: "$11,651",
    agi: "$188,349",
    federalTax: "~$41,140",
    totalTax: "~$64,442",
    effectiveRate: "~32.2%",
    quarterly: "~$16,110/quarter",
  },
];

// Schedule C deductions
const SCHEDULE_C_DEDUCTIONS = [
  {
    category: "Home Office",
    deduction: "Actual expenses OR $5/sq ft (max 300 sq ft = $1,500)",
    limit: "Must be used regularly and exclusively for business",
    impact: "High — reduces both income tax AND SE tax",
    color: "border-blue-100 bg-blue-50 text-blue-800",
  },
  {
    category: "Vehicle / Mileage",
    deduction: "$0.725/mile (2026 IRS rate) OR actual vehicle expenses",
    limit: "Must track mileage with a log. Business-use only.",
    impact: "High — especially for delivery, sales, client visits",
    color: "border-emerald-100 bg-emerald-50 text-emerald-800",
  },
  {
    category: "Self-Employed Health Insurance",
    deduction: "100% of premiums — above-the-line deduction",
    limit: "Cannot exceed net self-employment income. Not available if eligible for employer plan.",
    impact: "High — reduces AGI, not just taxable income",
    color: "border-violet-100 bg-violet-50 text-violet-800",
  },
  {
    category: "SEP-IRA / Solo 401(k)",
    deduction: "SEP-IRA: 25% of net, max $70,000. Solo 401(k): up to $70,000 total.",
    limit: "Must be funded before tax filing deadline (+ extensions for SEP-IRA).",
    impact: "Very high — largest deduction available to most self-employed workers",
    color: "border-amber-100 bg-amber-50 text-amber-800",
  },
  {
    category: "Equipment & Technology",
    deduction: "Section 179: 100% first-year deduction for qualifying property",
    limit: "$1,160,000 limit (2026). Must be used >50% for business.",
    impact: "High — computers, cameras, tools, machinery all qualify",
    color: "border-rose-100 bg-rose-50 text-rose-800",
  },
  {
    category: "Professional Development",
    deduction: "Courses, books, certifications, conferences",
    limit: "Must be directly related to your current business, not a new career",
    impact: "Medium — often overlooked, consistently deductible",
    color: "border-cyan-100 bg-cyan-50 text-cyan-800",
  },
  {
    category: "Phone & Internet",
    deduction: "Business-use percentage of total bill",
    limit: "Must track and document business-use percentage",
    impact: "Medium — track carefully, average 60–80% deductible for most freelancers",
    color: "border-slate-200 bg-slate-50 text-slate-800",
  },
  {
    category: "Meals (Business)",
    deduction: "50% of business meals with clients/colleagues",
    limit: "Must document: who, what, where, business purpose",
    impact: "Low-medium — 50% limit reduced impact vs full deduction",
    color: "border-orange-100 bg-orange-50 text-orange-800",
  },
];

// Quarterly deadlines 2026
const QUARTERLY_DEADLINES = [
  {
    quarter: "Q1 2026",
    period: "Jan 1 – Mar 31, 2026",
    deadline: "April 15, 2026",
    note: "Same as individual tax filing deadline",
    color: "bg-blue-600",
  },
  {
    quarter: "Q2 2026",
    period: "Apr 1 – May 31, 2026",
    deadline: "June 16, 2026",
    note: "Only 2 months of income covered",
    color: "bg-violet-600",
  },
  {
    quarter: "Q3 2026",
    period: "Jun 1 – Aug 31, 2026",
    deadline: "September 15, 2026",
    note: "3 months of income",
    color: "bg-amber-600",
  },
  {
    quarter: "Q4 2026",
    period: "Sep 1 – Dec 31, 2026",
    deadline: "January 15, 2027",
    note: "Final payment for 2026 tax year",
    color: "bg-emerald-600",
  },
];

// SE vs W-2 comparison
const SE_VS_W2 = [
  ["FICA rate paid",          "7.65% (employer pays other 7.65%)", "15.3% (pays both sides)"],
  ["Tax withholding",         "Automatic each paycheck",           "Must calculate & pay quarterly"],
  ["Standard deduction",      "Same ($16,100 single, 2026)",       "Same ($16,100 single, 2026)"],
  ["Home office deduction",   "Not available (W-2 workers)",       "Yes — Schedule C"],
  ["Vehicle deduction",       "Not available (W-2 workers)",       "Yes — $0.725/mile (2026)"],
  ["Health insurance ded.",   "Limited (only if itemizing)",       "100% above-the-line deduction"],
  ["Retirement contribution", "Employee limit: $23,500",           "SEP-IRA up to $70,000 (2026)"],
  ["QBI deduction",           "Not available",                     "Up to 20% of net income"],
  ["50% SE tax deduction",    "Not applicable",                    "Yes — deducted from AGI"],
  ["Gross income needed",     "Lower (employer covers SS/Med)",    "Higher (must cover both halves)"],
];

const TOC = [
  { id: "what-is-se-tax",        label: "What is self-employment tax and who pays it" },
  { id: "se-tax-formula",        label: "How SE tax is calculated — the exact formula" },
  { id: "worked-examples",       label: "Worked examples: $60K–$200K net profit" },
  { id: "se-vs-w2",              label: "Self-employed vs W-2 employee tax comparison" },
  { id: "quarterly-deadlines",   label: "2026 quarterly estimated tax deadlines" },
  { id: "how-much-to-set-aside", label: "How much to set aside from every payment received" },
  { id: "schedule-c-deductions", label: "Every Schedule C deduction — complete list" },
  { id: "qbi-deduction",         label: "The QBI deduction — up to 20% off your taxable income" },
  { id: "sep-ira",               label: "SEP-IRA and Solo 401(k) — the biggest tax shelter available" },
  { id: "reduce-se-tax",         label: "5 legal strategies to reduce your self-employment tax" },
  { id: "common-mistakes",       label: "The costliest mistakes 1099 workers make" },
  { id: "calculator",            label: "Use the free SE tax calculator" },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-black tracking-tight text-slate-900
                 border-l-4 border-amber-500 pl-4 mt-14 mb-5 scroll-mt-6"
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
          ? "linear-gradient(135deg,#d97706 0%,#b45309 100%)"
          : "linear-gradient(135deg,#1c0a00 0%,#431407 100%)",
      }}
    >
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full
                      bg-amber-500/10 blur-3xl pointer-events-none" />
      <div
        className="relative flex flex-col sm:flex-row items-start
                   sm:items-center justify-between gap-5"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Briefcase size={15} className="text-amber-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-300">
              Free Tool · 1099 & Freelancers · 2026 IRS Rates
            </span>
          </div>
          <p className="text-white font-black text-lg leading-snug mb-1">
            {isEnd
              ? "Calculate your exact SE tax, quarterly payments, and take-home"
              : "Get your SE tax estimate in 30 seconds — with every deduction"}
          </p>
          <p className="text-amber-200 text-[13px] leading-relaxed max-w-sm">
            {isEnd
              ? "Enter gross revenue, business expenses, and filing status. See SE tax, federal income tax, quarterly voucher amount, and net take-home — all itemised."
              : "SE tax (15.3%) · QBI deduction · Quarterly estimates · Profit allocation breakdown."}
          </p>
        </div>
        <Link
          href="/self-employment-tax-calculator-usa"
          className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-amber-500 hover:bg-amber-400 text-white font-black text-[14px]
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
export default function SelfEmploymentTaxGuidePage() {
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
          <span className="text-slate-600">Self-Employment Tax Guide 2026</span>
        </nav>

        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                      bg-amber-50 border border-amber-100 text-amber-700
                      text-[10px] font-black uppercase tracking-widest mb-5"
        >
          <Briefcase size={11} />
          1099 · Freelancers · Contractors · 2026 IRS Rates
        </div>

        <h1
          className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]
                     text-slate-900 mb-6"
        >
          Self-Employment Tax{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg,#d97706,#b45309)" }}
          >
            Guide
          </span>{" "}
          2026
          <br className="hidden sm:block" />
          <span className="text-slate-500 text-xl md:text-2xl font-bold">
            15.3% SE Tax, Quarterly Deadlines & Every Deduction
          </span>
        </h1>

        <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-7 max-w-2xl">
          Freelancers, independent contractors, and gig workers pay both the
          employee and employer halves of FICA — a total of{" "}
          <strong className="text-slate-900">15.3% in self-employment tax</strong>
          {" "}on top of federal and state income tax. This guide shows the exact
          calculation, every deduction available to reduce it, and what to set
          aside from each invoice to avoid a tax bill shock in April.
        </p>

        {/* Hero stat strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
          {[
            { value: "15.3%",    label: "SE tax rate (SS 12.4% + Medicare 2.9%)" },
            { value: "92.35%",   label: "Of net profit that SE tax applies to" },
            { value: "20%",      label: "QBI deduction for most self-employed" },
            { value: "4 dates",  label: "Quarterly payment deadlines per year" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-amber-50 border border-amber-100 p-4 text-center"
            >
              <p className="text-xl font-black text-amber-700 tabular-nums leading-none mb-1">
                {s.value}
              </p>
              <p className="text-[10px] text-amber-600 leading-snug">{s.label}</p>
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
          <span className="text-amber-600 font-semibold flex items-center gap-1.5">
            <CheckCircle2 size={12} />
            IRS Rev. Proc. 2025-32 · Schedule C · SE tax 92.35% rule · QBI deduction
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
                    <span className="text-[10px] text-amber-600 font-black w-5 h-5
                                     rounded-full bg-amber-50 flex items-center
                                     justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <a
                      href={`#${item.id}`}
                      className="text-amber-700 hover:underline text-[13px] font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* ─── SECTION 1 ─── */}
            <H2 id="what-is-se-tax">
              What is self-employment tax and who pays it
            </H2>

            <p>
              When you work as a W-2 employee, your employer withholds 7.65% of your
              wages for Social Security and Medicare (FICA), and your employer pays a
              matching 7.65% on top — for a total of 15.3% contributed to the federal
              social insurance system.
            </p>

            <p className="mt-4">
              When you are self-employed — as a freelancer, independent contractor,
              sole proprietor, or single-member LLC — there is no employer. You pay
              both halves yourself. That's the self-employment tax: the full 15.3% of
              your net business profit, applied to fund Social Security (12.4%) and
              Medicare (2.9%).
            </p>

            <p className="mt-4">
              <strong>Who must pay SE tax:</strong> any person with net
              self-employment income of $400 or more in a tax year. This includes
              freelancers, consultants, Uber and DoorDash drivers, Etsy sellers,
              content creators, real estate agents, tutors, and anyone else receiving
              1099 income from services rendered.
            </p>

            <div className="not-prose my-6 rounded-2xl border border-amber-100
                            bg-amber-50 p-5 flex gap-3">
              <AlertCircle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-amber-900 text-[13px] mb-1">
                  SE tax is separate from income tax — you pay both
                </p>
                <p className="text-amber-800 text-[13px] leading-relaxed">
                  Many first-time freelancers are shocked to discover that the 15.3%
                  SE tax is added on top of their regular income tax obligation. A
                  freelancer earning $80,000 net profit in the 22% federal bracket
                  pays approximately $11,304 in SE tax PLUS $9,256 in federal income
                  tax — a total of $20,560 before state taxes.
                </p>
              </div>
            </div>

            {/* ─── SECTION 2 ─── */}
            <H2 id="se-tax-formula">
              How SE tax is calculated — the exact IRS formula
            </H2>

            <p>
              The SE tax calculation has two important nuances that reduce the actual
              dollar amount below what 15.3% of gross self-employment income would
              suggest:
            </p>

            <div className="not-prose my-6 p-5 bg-slate-900 rounded-2xl text-white
                            font-mono text-[13px]">
              <p className="font-black text-amber-400 mb-4 not-italic text-[14px]">
                The SE tax formula — step by step:
              </p>
              <p className="text-slate-300 leading-relaxed space-y-2">
                <span className="block"><strong className="text-white">Step 1:</strong> Net profit = Gross revenue − Business expenses</span>
                <span className="block"><strong className="text-white">Step 2:</strong> SE taxable income = Net profit × 92.35%</span>
                <span className="block text-slate-400 text-[12px]">&nbsp;&nbsp;(IRS allows 7.65% reduction — equivalent to the "employer share" deduction)</span>
                <span className="block"><strong className="text-white">Step 3:</strong> SE tax = SE taxable income × 15.3%</span>
                <span className="block text-slate-400 text-[12px]">&nbsp;&nbsp;(12.4% SS on up to $184,500 + 2.9% Medicare on all net earnings)</span>
                <span className="block"><strong className="text-white">Step 4:</strong> Above-line deduction = SE tax × 50%</span>
                <span className="block text-slate-400 text-[12px]">&nbsp;&nbsp;(you deduct half of SE tax from your gross income)</span>
                <span className="block"><strong className="text-white">Step 5:</strong> Adjusted Gross Income = Net profit − (SE tax × 50%) − other deductions</span>
                <span className="block"><strong className="text-white">Step 6:</strong> Federal income tax = Applied to AGI via regular brackets</span>
                <span className="block mt-2 text-amber-400"><strong>Total tax = SE tax + federal income tax + state income tax</strong></span>
              </p>
            </div>

            <H3>Why SE tax applies to 92.35%, not 100% of net profit</H3>
            <p>
              The 92.35% factor (technically 1 minus 0.0765) represents the IRS's
              acknowledgment that half of the SE tax is theoretically paid by an
              "employer." Since you are both employer and employee, the IRS reduces
              the taxable base by the equivalent of the employer's share before
              calculating the SE tax. On $100,000 net profit, SE tax applies to
              $92,350 — saving $1,169 compared to applying it to the full $100,000.
            </p>

            {/* ─── SECTION 3 ─── */}
            <H2 id="worked-examples">
              Worked examples: SE tax at $60K–$200K net profit (2026)
            </H2>

            <p className="mb-5">
              Single filer · Standard deduction applied · No additional deductions ·
              No QBI deduction applied (see section 8 to add that saving).
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200
                            shadow-sm my-4">
              <table className="w-full text-[11px] text-slate-700 bg-white min-w-[620px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Net Profit</th>
                    <th className="px-3 py-3 text-left font-black">SE Taxable Base (92.35%)</th>
                    <th className="px-3 py-3 text-left font-black">SE Tax (15.3%)</th>
                    <th className="px-3 py-3 text-left font-black">Half SE Deduction</th>
                    <th className="px-3 py-3 text-left font-black">Federal Income Tax</th>
                    <th className="px-3 py-3 text-left font-black">Total Tax</th>
                    <th className="px-3 py-3 text-left font-black">Quarterly Payment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {WORKED_EXAMPLES.map((row, i) => (
                    <tr
                      key={row.income}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                                  hover:bg-amber-50/20 transition-colors`}
                    >
                      <td className="px-3 py-2.5 font-black text-slate-900">{row.income}</td>
                      <td className="px-3 py-2.5 text-slate-500">{row.seBase}</td>
                      <td className="px-3 py-2.5 font-bold text-rose-600">{row.seTax}</td>
                      <td className="px-3 py-2.5 text-emerald-700 font-semibold">{row.halfDeduction}</td>
                      <td className="px-3 py-2.5 text-rose-500">{row.federalTax}</td>
                      <td className="px-3 py-2.5 font-black text-rose-700">{row.totalTax}</td>
                      <td className="px-3 py-2.5 font-black text-amber-700">{row.quarterly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Federal income tax assumes standard deduction ($16,100 single, 2026).
              No QBI deduction, no additional deductions. State taxes not included.
              Use the calculator for your exact numbers.
            </p>

            {/* ─── SECTION 4 ─── */}
            <H2 id="se-vs-w2">
              Self-employed vs W-2 employee — the real tax difference
            </H2>

            <p className="mb-5">
              Understanding the full comparison shows both where self-employed workers
              pay more — and where the tax code gives them significant advantages that
              W-2 employees cannot access.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200
                            shadow-sm my-4">
              <table className="w-full text-[12px] min-w-[520px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Tax Factor</th>
                    <th className="px-3 py-3 text-left font-black">W-2 Employee</th>
                    <th className="px-3 py-3 text-left font-black">Self-Employed (1099)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {SE_VS_W2.map(([factor, w2, se], i) => (
                    <tr key={factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2.5 font-bold text-slate-900">{factor}</td>
                      <td className="px-3 py-2.5 text-slate-600 text-[11px]">{w2}</td>
                      <td className={`px-3 py-2.5 text-[11px] font-semibold ${
                        i < 2 ? "text-rose-600" : "text-emerald-700"
                      }`}>{se}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl bg-slate-900 text-white p-5 my-5">
              <p className="font-black text-[13px] text-amber-400 mb-1">
                The hidden cost: equivalent gross income comparison
              </p>
              <p className="text-slate-300 text-[13px] leading-relaxed">
                A W-2 employee earning $100,000 costs their employer $107,650 (salary
                + employer FICA). A self-employed contractor billing $100,000 gross
                keeps only what's left after paying both employee AND employer FICA
                themselves. To match a W-2 employee's net take-home, a freelancer
                must bill approximately{" "}
                <strong className="text-white">$110,000–$115,000</strong> gross —
                factoring in SE tax and no employer-paid benefits.
              </p>
            </div>

            {/* MID-ARTICLE CTA */}
            <CalculatorCTA variant="mid" />

            {/* ─── SECTION 5 ─── */}
            <H2 id="quarterly-deadlines">
              2026 quarterly estimated tax deadlines — never miss one
            </H2>

            <p>
              If you expect to owe $1,000 or more in federal tax for the year, the
              IRS requires you to make quarterly estimated payments. Missing or
              underpaying triggers an underpayment penalty — calculated as the
              federal short-term interest rate plus 3 percentage points on the
              shortfall. In 2026, that's approximately 7–8% annualized.
            </p>

            <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
              {QUARTERLY_DEADLINES.map((q) => (
                <div
                  key={q.quarter}
                  className="rounded-2xl bg-white border border-slate-200 p-5 flex gap-4"
                >
                  <div
                    className={`w-1.5 rounded-full flex-shrink-0 self-stretch ${q.color}`}
                  />
                  <div>
                    <p className="font-black text-slate-900 text-[14px] mb-0.5">
                      {q.quarter}
                    </p>
                    <p className="text-[12px] text-slate-500 mb-2">{q.period}</p>
                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg
                                   text-[11px] font-black text-white ${q.color}`}
                    >
                      <Calendar size={11} /> Due: {q.deadline}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2">{q.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="not-prose rounded-2xl border border-blue-100 bg-blue-50 p-5 my-5">
              <p className="font-black text-blue-900 text-[13px] mb-1.5">
                Safe harbor rule — avoid penalties regardless of actual income
              </p>
              <p className="text-blue-800 text-[13px] leading-relaxed">
                You can avoid underpayment penalties entirely if you pay at least:{" "}
                <strong>100% of your prior year's tax liability</strong> (or 110% if
                prior year AGI exceeded $150,000). This "safe harbor" approach means
                you base quarterly payments on last year's tax return, not this year's
                income — removing guesswork from volatile freelance income.
              </p>
            </div>

            {/* ─── SECTION 6 ─── */}
            <H2 id="how-much-to-set-aside">
              How much to set aside from every client payment
            </H2>

            <p>
              The single most practical rule for freelancers: set aside a percentage
              of every payment received into a dedicated tax savings account
              immediately. Don't wait until Q1 — many first-year freelancers spend
              money they owe.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200 my-5">
              <table className="w-full text-[12px] min-w-[400px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Annual Net Income</th>
                    <th className="px-4 py-3 text-left font-black">Recommended Set-Aside %</th>
                    <th className="px-4 py-3 text-left font-black">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Under $30,000",     "20–25%", "SE tax + low income bracket = lower total rate"],
                    ["$30,000–$60,000",   "25–30%", "SE tax + 12–22% federal + state tax"],
                    ["$60,000–$100,000",  "28–32%", "22% bracket + SE tax + state tax"],
                    ["$100,000–$160,000", "30–35%", "24% bracket + SE tax hitting upper levels"],
                    ["Over $160,000",     "35–40%", "32%+ bracket, additional Medicare, high state tax"],
                  ].map(([range, pct, why], i) => (
                    <tr key={range} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-2.5 font-bold text-slate-900">{range}</td>
                      <td className="px-4 py-2.5 font-black text-amber-700 text-[14px]">{pct}</td>
                      <td className="px-4 py-2.5 text-slate-500 text-[11px]">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Keep this money in a dedicated high-yield savings account (earning
              4–5% APY in 2026) separate from your operating funds. The interest it
              earns while waiting for tax deadlines is a bonus — and the psychological
              separation prevents accidental spending.
            </p>

            {/* ─── SECTION 7 ─── */}
            <H2 id="schedule-c-deductions">
              Every Schedule C deduction — complete list for 2026
            </H2>

            <p>
              Business deductions reduce your net profit — which reduces both your
              SE tax AND your federal income tax. This double benefit makes business
              deductions exceptionally valuable for self-employed workers.
            </p>

            <div className="not-prose space-y-3 my-6">
              {SCHEDULE_C_DEDUCTIONS.map((d) => (
                <div key={d.category} className={`rounded-2xl border p-5 ${d.color}`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="font-black text-[13px]">{d.category}</p>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full
                                      bg-white/60 flex-shrink-0`}>
                      {d.impact}
                    </span>
                  </div>
                  <p className="text-[12px] font-semibold mb-1 opacity-90">
                    Deduction: {d.deduction}
                  </p>
                  <p className="text-[11px] opacity-70">Limit: {d.limit}</p>
                </div>
              ))}
            </div>

            <div className="not-prose rounded-2xl border border-amber-100 bg-amber-50
                            p-5 my-5 flex gap-3">
              <AlertTriangle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-amber-900 text-[13px] mb-1">
                  Document everything — the IRS requires proof
                </p>
                <p className="text-amber-800 text-[13px] leading-relaxed">
                  Every deduction requires substantiation: receipts, bank statements,
                  mileage logs, and business-purpose documentation. In an audit, the
                  burden of proof is on you. Use accounting software (QuickBooks Self-
                  Employed, FreshBooks, or even a dedicated spreadsheet) to categorize
                  every expense throughout the year. Reconstructing records at tax
                  time is error-prone and stressful.
                </p>
              </div>
            </div>

            {/* ─── SECTION 8 ─── */}
            <H2 id="qbi-deduction">
              The QBI deduction — up to 20% off your taxable income
            </H2>

            <p>
              Section 199A, the Qualified Business Income deduction, is the most
              underutilized tax benefit available to self-employed workers. It allows
              most freelancers and contractors to deduct{" "}
              <strong>up to 20% of their qualified business income</strong> from
              federal taxable income — on top of the standard deduction.
            </p>

            <div className="not-prose my-7 p-6 bg-amber-50 rounded-2xl border border-amber-100">
              <p className="font-black text-amber-900 text-[14px] mb-4">
                QBI deduction worked example: $80,000 net profit, single filer
              </p>
              <div className="bg-white rounded-xl p-5 font-mono text-[13px]
                              text-slate-700 shadow-sm space-y-1.5">
                <p>Net profit (Schedule C):        <strong>$80,000</strong></p>
                <p>Minus half SE tax deduction:    <strong>−$5,652</strong></p>
                <p>Adjusted Gross Income:          <strong>$74,348</strong></p>
                <p>Minus standard deduction:       <strong>−$16,100</strong></p>
                <p>Before QBI deduction:           <strong>$58,248</strong></p>
                <div className="border-t border-slate-100 pt-3 mt-2">
                  <p className="text-emerald-700">QBI deduction (20% of $80,000):  <strong>−$16,000</strong></p>
                  <p>Taxable income after QBI:        <strong className="text-blue-700">$42,248</strong></p>
                </div>
                <div className="border-t border-slate-100 pt-3 mt-2">
                  <p>Federal income tax (without QBI): <strong className="text-rose-600">$9,256</strong></p>
                  <p>Federal income tax (with QBI):    <strong className="text-emerald-700">$5,490</strong></p>
                  <p className="text-emerald-800 font-black">QBI saves you:                     <strong>$3,766 in federal tax</strong></p>
                </div>
              </div>
              <p className="text-[11px] text-amber-700 mt-3">
                The QBI deduction does NOT reduce SE tax — only federal income tax.
                But $3,766 in annual tax savings is substantial and completely legal.
              </p>
            </div>

            <H3>Who qualifies for the full QBI deduction?</H3>
            <p>
              Most self-employed workers qualify for the full 20% deduction below
              income thresholds. However, workers in "Specified Service Trades or
              Businesses" (SSTBs) — including consultants, attorneys, financial
              advisors, and physicians — face phase-outs beginning at{" "}
              <strong>$197,300 (single) or $394,600 (MFJ)</strong> in 2026.
              Trades and crafts, technology workers outside consulting, real estate,
              and most freelance creative work are NOT SSTBs and get the full benefit.
            </p>

            {/* ─── SECTION 9 ─── */}
            <H2 id="sep-ira">
              SEP-IRA and Solo 401(k) — the biggest tax shelter for self-employed
            </H2>

            <p>
              The retirement account options available to self-employed workers are
              dramatically more powerful than what most W-2 employees have access to.
              Both SEP-IRA and Solo 401(k) contributions reduce your net taxable income,
              which reduces both SE tax and federal income tax.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200 my-5">
              <table className="w-full text-[12px] min-w-[500px]">
                <caption className="text-left text-[11px] text-slate-500 mb-2 px-1">
                  SEP-IRA vs Solo 401(k) — key differences for 2026
                </caption>
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Factor</th>
                    <th className="px-3 py-3 text-left font-black">SEP-IRA</th>
                    <th className="px-3 py-3 text-left font-black">Solo 401(k)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["2026 max contribution", "Up to 25% of net, max $70,000", "Up to $70,000 total ($77,500 age 50+)"],
                    ["Employee contribution limit", "Only employer-side (25%)", "$23,500 employee + $46,500 employer-side"],
                    ["Admin complexity", "Very simple — one form", "More complex — plan document required"],
                    ["Deadline to contribute", "Tax filing + extensions", "Must open by Dec 31, fund by tax deadline"],
                    ["Roth option", "No",  "Yes — Roth Solo 401(k) available"],
                    ["Loan provision", "No", "Yes — can borrow from account"],
                    ["Best for", "Simplicity, higher income workers", "Lower income earners (higher % contribution), those wanting Roth"],
                  ].map(([factor, sep, solo], i) => (
                    <tr key={factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2.5 font-bold text-slate-900">{factor}</td>
                      <td className="px-3 py-2.5 text-slate-600 text-[11px]">{sep}</td>
                      <td className="px-3 py-2.5 text-emerald-700 font-semibold text-[11px]">{solo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              At $120,000 net profit, contributing $30,000 to a SEP-IRA reduces
              federal income tax by approximately $6,600 (at 22% bracket) AND reduces
              QBI-eligible income, which cascades into further savings. The real
              after-tax cost of a $30,000 SEP-IRA contribution is closer to{" "}
              <strong>$21,000–$23,000</strong> — and the full $30,000 grows tax-deferred.
            </p>

            {/* ─── SECTION 10 ─── */}
            <H2 id="reduce-se-tax">
              5 legal strategies to reduce your self-employment tax
            </H2>

            <div className="not-prose space-y-4 my-6">
              {[
                {
                  n: "1", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-100",
                  title: "Maximize every legitimate business deduction",
                  body: "Every dollar of Schedule C business expenses directly reduces net profit — which is the base for SE tax calculation. $10,000 more in legitimate deductions reduces SE tax by $1,413 (15.3% × 92.35% × $10,000) AND reduces federal income tax by $2,200 (at 22% bracket). Track and document every business expense meticulously throughout the year.",
                  saving: "Each $1,000 in deductions = ~$141 SE tax savings + federal income tax savings",
                },
                {
                  n: "2", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-100",
                  title: "Contribute to a SEP-IRA or Solo 401(k) before the deadline",
                  body: "Retirement contributions for self-employed workers are made on Schedule 1, reducing AGI before any other calculations. A $20,000 SEP-IRA contribution on $100,000 net profit reduces the net taxable profit for income tax purposes and creates a large above-the-line deduction. Note: retirement contributions do NOT reduce SE tax — they reduce income tax only.",
                  saving: "$20,000 SEP-IRA at 22% bracket = $4,400 in federal income tax savings",
                },
                {
                  n: "3", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-100",
                  title: "Claim the QBI deduction (Section 199A)",
                  body: "Most freelancers and contractors qualify for the 20% Qualified Business Income deduction. This is an automatic above-the-line-style deduction that requires no special account or additional spending — just proper business structure and income below the phase-out thresholds. It reduces federal income tax substantially without any cash outflow.",
                  saving: "$80,000 net profit → QBI saves approximately $3,766 in federal income tax",
                },
                {
                  n: "4", color: "text-violet-700", bg: "bg-violet-50", border: "border-violet-100",
                  title: "Deduct self-employed health insurance premiums",
                  body: "If you pay for your own health insurance and are not eligible for employer-sponsored coverage, you can deduct 100% of premiums for yourself, your spouse, and dependents as an above-the-line deduction. In 2026, average individual market premiums run $400–$800/month ($4,800–$9,600/year). At a 22% bracket, deducting $7,200/year saves $1,584 in federal income tax.",
                  saving: "$600/month premium deduction = $1,584/year in federal tax savings (22% bracket)",
                },
                {
                  n: "5", color: "text-rose-700", bg: "bg-rose-50", border: "border-rose-100",
                  title: "Consider an S-Corp election for higher income earners",
                  body: "At net profits above $60,000–$80,000, electing S-Corporation status can significantly reduce SE tax. As an S-Corp owner-employee, you pay SE tax (payroll tax) only on a 'reasonable salary' — not on the full net profit. Profit distributions above the salary are not subject to SE tax, potentially saving $3,000–$15,000/year. This strategy requires additional complexity: payroll setup, separate business account, corporate formalities, and typically a CPA.",
                  saving: "$120K net profit as S-Corp with $70K salary → saves ~$7,645 in SE tax vs sole proprietor",
                },
              ].map((s) => (
                <div key={s.title} className={`rounded-2xl border ${s.border} p-5 flex gap-4`}>
                  <div
                    className={`${s.bg} ${s.color} w-9 h-9 rounded-xl flex items-center
                                 justify-center flex-shrink-0 font-black text-[14px]`}
                  >
                    {s.n}
                  </div>
                  <div>
                    <p className={`font-black text-[13px] mb-1.5 ${s.color}`}>{s.title}</p>
                    <p className="text-slate-600 text-[13px] leading-relaxed mb-2">{s.body}</p>
                    <p className={`text-[11px] font-bold ${s.color} opacity-80`}>
                      → {s.saving}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ─── SECTION 11 ─── */}
            <H2 id="common-mistakes">
              The costliest mistakes 1099 workers make with taxes
            </H2>

            <div className="not-prose space-y-3 my-6">
              {[
                {
                  title: "Not making quarterly payments — then getting hit with penalties AND a large bill",
                  body: "The most common first-year freelancer mistake. Federal income taxes are pay-as-you-go. If you wait until April and owe more than $1,000, you'll pay both the tax AND an underpayment penalty. In 2026, that penalty runs approximately 7–8% annualized on the shortfall amount. On a $20,000 tax bill paid 10 months late (missing 4 quarters), the penalty is approximately $1,200–$1,600.",
                  color: "text-rose-700 bg-rose-50 border-rose-100",
                },
                {
                  title: "Mixing business and personal finances",
                  body: "Commingling personal and business expenses creates an audit risk and makes expense tracking inaccurate. The IRS can disallow deductions it cannot clearly trace as business expenses. Use a dedicated business bank account and credit card from day one. The cost (often $0 for basic business checking) is insignificant against the deductions it helps you track and defend.",
                  color: "text-amber-700 bg-amber-50 border-amber-100",
                },
                {
                  title: "Ignoring the home office deduction out of fear",
                  body: "Many freelancers skip the home office deduction because they've heard it triggers audits. This is outdated information. The simplified method ($5/sq ft, max 300 sq ft = $1,500 deduction) is straightforward, well-documented, and not an audit red flag for legitimate home-based workers. A $1,500 deduction at 22% bracket saves $333 in income tax and also reduces QBI-eligible income.",
                  color: "text-violet-700 bg-violet-50 border-violet-100",
                },
                {
                  title: "Not tracking mileage throughout the year",
                  body: "The IRS mileage rate is $0.725/mile in 2026. For a freelancer driving 10,000 business miles annually, that's $7,250 in deductions — worth $1,595 in tax savings at 22%. But you must have a contemporaneous mileage log (date, destination, purpose, miles). Reconstructed logs created at tax time are frequently disallowed in audits. Use a mileage tracking app (MileIQ, Everlance) from the start.",
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
                All calculations based on 2026 IRS Publication 15, Schedule SE
                instructions, IRS Rev. Proc. 2025-32, and the Social Security
                Administration's 2026 wage base of $184,500. SE tax rates (15.3%),
                QBI deduction thresholds ($197,300/$394,600), and retirement plan
                limits ($70,000 SEP-IRA/Solo 401k) reflect official 2026 IRS guidance.
                S-Corporation strategies are simplified for illustration and should
                be evaluated with a licensed CPA for your specific situation. This
                guide is for informational and educational purposes only and does
                not constitute tax or legal advice. Consult a licensed tax professional
                for your specific filing situation.
              </p>
              <p className="text-[11px] text-slate-400 mt-2">Last updated: May 2026</p>
            </div>
          </article>

          {/* ── STICKY SIDEBAR ──────────────────────────────────────────── */}
          <aside className="w-full lg:w-[260px] flex-shrink-0 space-y-5 lg:sticky lg:top-6">

            {/* Primary CTA */}
            <div className="rounded-2xl overflow-hidden border border-amber-100 shadow-sm">
              <div
                className="px-5 py-4 text-white"
                style={{ background: "linear-gradient(135deg,#d97706,#b45309)" }}
              >
                <Receipt size={18} className="mb-2 text-amber-200" />
                <p className="font-black text-[14px] leading-snug mb-1">
                  Free SE Tax Calculator
                </p>
                <p className="text-amber-200 text-[11px] leading-relaxed">
                  SE tax + federal income tax + quarterly estimates + profit
                  breakdown — all in one free 2026 calculator.
                </p>
              </div>
              <Link
                href="/self-employment-tax-calculator-usa"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white
                           border-t border-amber-100 text-amber-700 font-black
                           text-[13px] hover:bg-amber-50 transition-colors group"
              >
                Open Calculator
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>

            {/* SE tax quick formula */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">SE Tax Quick Formula</p>
              <div className="space-y-2 font-mono text-[11px] text-slate-700">
                <p className="font-bold text-slate-900">Net Profit × 92.35%</p>
                <p className="text-slate-400">= SE taxable income</p>
                <p className="font-bold text-slate-900 mt-2">SE taxable × 15.3%</p>
                <p className="text-slate-400">= SE tax owed</p>
                <p className="font-bold text-amber-700 mt-2">SE tax × 50%</p>
                <p className="text-slate-400">= above-line deduction</p>
                <div className="border-t border-slate-100 pt-2 mt-3">
                  <p className="text-[10px] text-slate-400">
                    SS portion (12.4%) applies up to $184,500 wage base.
                    Medicare (2.9%) applies to all net earnings.
                    Additional 0.9% Medicare above $200K (single).
                  </p>
                </div>
              </div>
            </div>

            {/* Quarterly deadlines */}
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-amber-700 mb-3">2026 Quarterly Deadlines</p>
              <div className="space-y-2">
                {[
                  { q: "Q1", due: "April 15, 2026",   color: "text-blue-700" },
                  { q: "Q2", due: "June 16, 2026",    color: "text-violet-700" },
                  { q: "Q3", due: "Sept 15, 2026",    color: "text-amber-700" },
                  { q: "Q4", due: "Jan 15, 2027",     color: "text-emerald-700" },
                ].map((d) => (
                  <div
                    key={d.q}
                    className="flex items-center justify-between text-[11px]
                               border-b border-amber-100 pb-1.5 last:border-0"
                  >
                    <span className="font-black text-amber-900">{d.q}</span>
                    <span className={`font-bold ${d.color}`}>{d.due}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-amber-600 mt-2 font-semibold">
                Owe $1,000+/year? You must pay quarterly.
              </p>
            </div>

            {/* 2026 key limits */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">2026 SE Tax Key Numbers</p>
              <div className="space-y-2.5">
                {[
                  { label: "SE tax rate",          value: "15.3%" },
                  { label: "SS portion",           value: "12.4%" },
                  { label: "Medicare portion",     value: "2.9%" },
                  { label: "SE taxable base",      value: "92.35% of net" },
                  { label: "SS wage base",         value: "$184,500" },
                  { label: "Additional Medicare",  value: "0.9% > $200K" },
                  { label: "SEP-IRA max",          value: "$70,000" },
                  { label: "Solo 401(k) max",      value: "$70,000" },
                  { label: "QBI deduction",        value: "Up to 20%" },
                  { label: "Mileage rate (2026)",  value: "$0.725/mile" },
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
                  { label: "Salary After Tax Calculator",  href: "/salary-after-tax-calculator" },
                  { label: "Paycheck Calculator",          href: "/paycheck-calculator" },
                  { label: "DoorDash Earnings Calculator", href: "/doordash-earnings-calculator" },
                  { label: "Income Tax Calculator",        href: "/tax-calculator" },
                  { label: "Savings Calculator",           href: "/savings-calculator" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center gap-1.5 text-[12px] text-amber-700
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
                  { label: "DoorDash Earnings Guide 2026",  href: "/blog/doordash-earnings-guide-2026" },
                  { label: "Paycheck Calculator Guide",     href: "/blog/paycheck-calculator-guide-2026" },
                  { label: "Savings Calculator Guide",      href: "/blog/savings-calculator-guide-2026" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center gap-1.5 text-[12px] text-amber-700
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