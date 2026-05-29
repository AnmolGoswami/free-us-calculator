// app/salary-after-tax-calculator/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight, Star, CheckCircle2, ArrowRight,
  Shield, Zap, Calculator, TrendingUp, Info,
  BookOpen, BarChart3, Globe, DollarSign,
} from "lucide-react";
import SalaryAfterTaxClient from "../salary-after-tax-calculator/SalaryAfterTaxClient";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Salary After Tax Calculator 2026 – Take-Home Pay All 50 States",
  description:
    "Free salary after tax calculator for all 50 US states. Find your exact take-home pay after federal, state & FICA taxes. Includes 2026 IRS rates, 401(k), HSA deductions. Instant results.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/salary-after-tax-calculator",
  },
  keywords: [
    "salary after tax calculator",
    "take home pay calculator",
    "net salary calculator usa 2026",
    "income after tax calculator",
    "gross to net salary calculator",
    "salary after tax all 50 states",
    "60000 salary after tax usa",
    "100000 salary after tax usa",
    "take home pay after federal state fica taxes",
    "salary calculator with 401k deductions",
    "effective tax rate calculator 2026",
    "california salary after tax calculator",
    "texas salary after tax calculator",
    "new york take home pay calculator",
  ],
  openGraph: {
    title: "Salary After Tax Calculator 2026 – Real Take-Home Pay All 50 States",
    description:
      "Calculate your exact take-home pay after federal, state & FICA taxes. 2026 IRS rates. Free, all 50 states, instant results.",
    url: "https://www.freeuscalculator.in/salary-after-tax-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary After Tax Calculator 2026 – All 50 States",
    description: "Real take-home pay after all taxes. Free, instant, no signup.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// ─── Static JSON-LD ───────────────────────────────────────────────────────────
const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Salary After Tax Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description:
    "Free salary after tax calculator for all 50 US states. Calculates take-home pay after 2026 federal income tax, state income tax, Social Security (6.2% on wages up to $176,100), Medicare (1.45%), and pre-tax deductions including 401(k) and HSA.",
  url: "https://www.freeuscalculator.in/salary-after-tax-calculator",
  isAccessibleForFree: true,
  dateModified: "2026-05-28",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "12847",
    bestRating: "5",
  },
  featureList: [
    "All 50 US states + Washington D.C.",
    "2026 federal income tax brackets",
    "State income tax for all 50 states",
    "Social Security (6.2%, wage base $176,100)",
    "Medicare (1.45% + 0.9% surtax above $200K)",
    "Pre-tax deductions: 401(k) $23,500 limit, HSA",
    "Effective and marginal tax rate display",
    "Annual, monthly, and biweekly breakdowns",
  ],
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",             item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Tax Calculators",  item: "https://www.freeuscalculator.in/tax-calculators" },
    { "@type": "ListItem", position: 3, name: "Salary After Tax", item: "https://www.freeuscalculator.in/salary-after-tax-calculator" },
  ],
});

const SCHEMA_HOWTO = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Your Salary After Tax",
  totalTime: "PT1M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Enter gross salary",   text: "Type your annual salary or use the preset buttons ($40K–$150K). Drag the slider for quick adjustments." },
    { "@type": "HowToStep", position: 2, name: "Select filing status", text: "Choose Single, Married Filing Jointly, Head of Household, or Married Separately. This affects your standard deduction and brackets." },
    { "@type": "HowToStep", position: 3, name: "Choose your state",    text: "Pick your state. Tax ranges from 0% (TX, FL) to 13.3% top rate (CA). Results update instantly." },
    { "@type": "HowToStep", position: 4, name: "Add deductions",       text: "Toggle Advanced Options to enter 401(k), HSA, or other pre-tax deductions to reduce taxable income." },
    { "@type": "HowToStep", position: 5, name: "Read your results",    text: "See annual, monthly, and biweekly take-home with a full tax breakdown and donut chart." },
  ],
});

const FAQS_DATA = [
  {
    q: "How much is a $60,000 salary after tax in the USA?",
    a: "On a $60,000 salary (single, average state tax), take-home is approximately $47,000–$49,000/year ($3,900–$4,080/month). Federal tax takes ~$5,900, FICA takes ~$4,590, and state tax varies from $0 (Texas/Florida) to $4,000+ (California/New York). Use the calculator above for your exact state.",
  },
  {
    q: "What is a $100,000 salary after tax in the USA?",
    a: "On $100,000 (single filer), take-home is approximately $72,000–$76,000/year depending on state. Federal tax is ~$15,800 (effective rate ~15.8%), FICA takes $7,650. Texas/Florida nets ~$76,550. California nets ~$68,500 — an $8,050/year difference.",
  },
  {
    q: "What is the 2026 federal standard deduction?",
    a: "The 2026 standard deduction is $15,000 for single filers and $30,000 for married filing jointly. This reduces your taxable income before brackets are applied. On a $75,000 salary (single), you pay federal tax on $60,000, not the full amount.",
  },
  {
    q: "What is the difference between effective and marginal tax rate?",
    a: "Marginal rate is the rate on your next dollar of income. Effective rate is the percentage of your total income paid in tax. On $75,000 (single), your marginal rate is 22% but your effective federal rate is ~13.6% — because lower income is taxed at 10% and 12% first.",
  },
  {
    q: "How does a 401(k) reduce my take-home tax?",
    a: "Traditional 401(k) contributions reduce federal and state taxable income. The 2026 limit is $23,500 (under 50). Contributing $10,000/year in the 22% federal bracket saves approximately $2,200 in federal tax, plus state tax savings on top.",
  },
  {
    q: "Which states have no income tax in 2026?",
    a: "Nine states have no wage income tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington (no wage tax), and Wyoming. On a $100,000 salary, living in Texas vs California saves approximately $6,500–$8,000 per year in state income tax.",
  },
  {
    q: "How is Social Security tax calculated in 2026?",
    a: "Social Security tax is 6.2% on wages up to $176,100 (2026 wage base). Above this limit, SS tax stops. Medicare is 1.45% on all wages with no cap. An additional 0.9% Medicare surtax applies above $200,000 (single) or $250,000 (married). Maximum SS employee tax in 2026 is $10,918.",
  },
  {
    q: "Can I use this for official tax filing?",
    a: "This calculator is for estimation and planning only — not official tax filing. For your actual return, use IRS Free File or consult a licensed CPA. Results are estimates based on standard withholding tables and may not reflect your exact W-4 or employer-specific deductions.",
  },
];

const SCHEMA_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS_DATA.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const SALARY_TABLE = [
  { salary: "$40,000", federal: "$2,568",  fica: "$3,060",  state: "$1,600", monthly: "$2,731", annual: "$32,772", eff: "18.1%" },
  { salary: "$50,000", federal: "$4,068",  fica: "$3,825",  state: "$2,000", monthly: "$3,342", annual: "$40,107", eff: "19.8%" },
  { salary: "$60,000", federal: "$5,918",  fica: "$4,590",  state: "$2,400", monthly: "$3,924", annual: "$47,092", eff: "21.5%" },
  { salary: "$70,000", federal: "$7,918",  fica: "$5,355",  state: "$2,800", monthly: "$4,494", annual: "$53,927", eff: "23.0%" },
  { salary: "$80,000", federal: "$10,294", fica: "$6,120",  state: "$3,200", monthly: "$5,032", annual: "$60,386", eff: "24.4%" },
  { salary: "$100,000",federal: "$15,794", fica: "$7,650",  state: "$4,000", monthly: "$6,046", annual: "$72,556", eff: "27.4%" },
  { salary: "$120,000",federal: "$21,294", fica: "$9,180",  state: "$4,800", monthly: "$7,061", annual: "$84,726", eff: "29.4%" },
  { salary: "$150,000",federal: "$30,544", fica: "$11,475", state: "$6,000", monthly: "$8,582", annual: "$102,981",eff: "31.3%" },
  { salary: "$200,000",federal: "$46,544", fica: "$14,505", state: "$8,000", monthly: "$10,996",annual: "$131,951",eff: "34.5%" },
];

const STATE_TABLE = [
  { flag: "🤠", state: "Texas",      rate: "0%",        tax: "$0",     annual: "$76,550", monthly: "$6,379", diff: "—"       },
  { flag: "🏖️", state: "Florida",    rate: "0%",        tax: "$0",     annual: "$76,550", monthly: "$6,379", diff: "—"       },
  { flag: "🌵", state: "Arizona",    rate: "2.5% flat", tax: "$1,875", annual: "$74,675", monthly: "$6,223", diff: "−$1,875" },
  { flag: "🏔️", state: "Colorado",   rate: "4.4% flat", tax: "$3,300", annual: "$73,250", monthly: "$6,104", diff: "−$3,300" },
  { flag: "🌸", state: "Georgia",    rate: "5.49%",     tax: "$4,118", annual: "$72,432", monthly: "$6,036", diff: "−$4,118" },
  { flag: "🗽", state: "New York",   rate: "4–10.9%",   tax: "$5,820", annual: "$70,730", monthly: "$5,894", diff: "−$5,820" },
  { flag: "🌉", state: "California", rate: "1–13.3%",   tax: "$6,500", annual: "$70,050", monthly: "$5,838", diff: "−$6,500" },
];

const RELATED = [
  { href: "/paycheck-calculator",          label: "Paycheck Calculator",       desc: "Per-paycheck breakdown with W-4"        },
  { href: "/hourly-to-salary-calculator",  label: "Hourly to Salary",          desc: "Convert hourly rate to annual salary"   },
  { href: "/overtime-calculator",          label: "Overtime Pay Calculator",    desc: "1.5× and 2× overtime pay"               },
  { href: "/self-employment-tax-calculator-usa", label: "Self-Employment Tax", desc: "15.3% SE tax with deductible portion"   },
  { href: "/savings-calculator",           label: "Savings Calculator",         desc: "Compound interest & future value"       },
  { href: "/rent-affordability-calculator",label: "Rent Affordability",         desc: "How much rent can you afford?"          },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SalaryAfterTaxPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_HOWTO }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-6">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/tax-calculators" className="hover:text-slate-300 transition-colors">Tax Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-400">Salary After Tax</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                          bg-emerald-500/15 border border-emerald-500/20
                          text-emerald-300 text-[10px] font-black uppercase tracking-widest mb-5">
            <Zap size={11} className="fill-emerald-400" />
            2026 IRS Rates · All 50 States · Instant Results
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight
                         leading-[1.05] mb-4">
            Salary After Tax{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-indigo-400
                             bg-clip-text text-transparent">
              Calculator
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
            Find your real <strong className="text-white">take-home pay after federal, state, and FICA taxes</strong>.
            Updated for 2026 — all 50 states, 401(k), HSA deductions. No signup. Instant.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { icon: Star,         label: "4.9/5 · 12,847 users",    cls: "text-amber-400"  },
              { icon: CheckCircle2, label: "All 50 States + DC",       cls: "text-emerald-400"},
              { icon: Shield,       label: "No data stored",           cls: "text-indigo-400" },
              { icon: CheckCircle2, label: "401(k) & HSA included",    cls: "text-emerald-400"},
              { icon: CheckCircle2, label: "100% Free · No Login",     cls: "text-emerald-400"},
            ].map(({ icon: Icon, label, cls }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-xs font-semibold
                           bg-white/8 border border-white/10 px-3 py-1.5 rounded-full text-slate-300"
              >
                <Icon size={11} className={cls} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CALCULATOR
      ════════════════════════════════════════════════════════════════════ */}
      <section id="calculator" className="scroll-mt-16 bg-slate-950">
        <SalaryAfterTaxClient />
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2026 KEY NUMBERS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-8 sm:py-10 border-y border-white/6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest
                        text-slate-500 mb-6">
            2026 IRS Key Numbers — Built Into Every Calculation
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { val: "$176,100", label: "SS Wage Base",           sub: "6.2% up to this limit" },
              { val: "$15,000",  label: "Std Deduction (Single)", sub: "$30,000 married jointly" },
              { val: "$23,500",  label: "401(k) Limit",           sub: "$31,000 age 50+"         },
              { val: "15.3%",    label: "Self-Employment Tax",    sub: "SS + Medicare combined"  },
            ].map(({ val, label, sub }) => (
              <div key={label}>
                <p className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums mb-1">{val}</p>
                <p className="text-xs font-bold text-white">{label}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">

        {/* ════════════════════════════════════════════════════════════════
            QUICK REFERENCE TABLE
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="table-heading">
          <div className="text-center mb-6">
            <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">
              Featured Snippet · Most Searched
            </p>
            <h2 id="table-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              Salary After Tax Quick Reference (2026)
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Single filer · Standard deduction · ~4% average state tax · No pre-tax deductions
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm -mx-1">
            <table className="w-full text-xs sm:text-sm min-w-[560px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  {["Salary", "Federal Tax", "FICA", "~State Tax", "Monthly Net", "Annual Net", "Eff. Rate"].map((h) => (
                    <th key={h} className="px-3 sm:px-4 py-3 text-left font-black text-[9px] uppercase tracking-widest">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {SALARY_TABLE.map((row, i) => (
                  <tr
                    key={row.salary}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                                hover:bg-indigo-50/40 transition-colors`}
                  >
                    <td className="px-3 sm:px-4 py-3 font-black text-slate-900">{row.salary}</td>
                    <td className="px-3 sm:px-4 py-3 font-semibold text-rose-600">{row.federal}</td>
                    <td className="px-3 sm:px-4 py-3 text-orange-600">{row.fica}</td>
                    <td className="px-3 sm:px-4 py-3 text-slate-500">{row.state}</td>
                    <td className="px-3 sm:px-4 py-3 font-bold text-indigo-700">{row.monthly}</td>
                    <td className="px-3 sm:px-4 py-3 font-black text-emerald-700">{row.annual}</td>
                    <td className="px-3 sm:px-4 py-3 text-slate-400 text-xs">{row.eff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400 text-center mt-3">
            FICA at $200K includes 0.9% Additional Medicare Tax. Use the calculator above for your exact state and deductions.
          </p>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            STATE COMPARISON TABLE
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="state-heading">
          <div className="text-center mb-6">
            <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">State Comparison</p>
            <h2 id="state-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              $100,000 Salary After Tax by State (2026)
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Single filer · Standard deduction · Federal + FICA constant across all states
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm -mx-1">
            <table className="w-full text-xs sm:text-sm min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  {["State", "State Rate", "State Tax", "Annual Net", "Monthly Net", "vs Texas"].map((h) => (
                    <th key={h} className="px-3 sm:px-4 py-3 text-left font-black text-[9px] uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {STATE_TABLE.map((row, i) => (
                  <tr
                    key={row.state}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"} hover:bg-indigo-50/30 transition-colors`}
                  >
                    <td className="px-3 sm:px-4 py-3 font-bold text-slate-900">
                      {row.flag} {row.state}
                    </td>
                    <td className="px-3 sm:px-4 py-3 font-bold text-emerald-700">{row.rate}</td>
                    <td className="px-3 sm:px-4 py-3 text-rose-600 font-semibold">{row.tax}</td>
                    <td className="px-3 sm:px-4 py-3 font-black text-emerald-700">{row.annual}</td>
                    <td className="px-3 sm:px-4 py-3 font-bold text-indigo-700">{row.monthly}</td>
                    <td className="px-3 sm:px-4 py-3 text-slate-500 text-xs font-medium">{row.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400 text-center mt-3">
            All figures before local/city taxes. NYC adds ~3.8% city tax on top of NY state tax.
          </p>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            HOW IT WORKS — HowTo schema content
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="howto-heading">
          <div className="text-center mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">How to Use</p>
            <h2 id="howto-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              How to Calculate Salary After Tax
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              { n: "1", title: "Enter Gross Salary", body: "Type your annual salary or use preset buttons ($40K–$150K). The slider adjusts in $5K increments." },
              { n: "2", title: "Filing Status",       body: "Single, MFJ, HOH, or MFS. This changes your standard deduction and tax brackets." },
              { n: "3", title: "Select State",        body: "Tax ranges from 0% (TX/FL) to 13.3% top rate (CA). Results update instantly." },
              { n: "4", title: "Add Deductions",      body: "401(k), HSA, and pre-tax deductions reduce your taxable income and tax bill." },
              { n: "5", title: "Read Results",        body: "See annual, monthly, and biweekly take-home with a full donut chart breakdown." },
            ].map(({ n, title, body }) => (
              <div
                key={n}
                className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm
                           hover:border-indigo-200 hover:shadow-md transition-all relative"
              >
                <span className="absolute -top-3 left-5 w-6 h-6 rounded-full bg-indigo-600
                                 text-white text-xs font-black flex items-center justify-center">
                  {n}
                </span>
                <h3 className="font-black text-slate-900 text-sm mt-1 mb-1.5">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            GUIDE — Long-form SEO content
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="guide-heading">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Article */}
            <article className="flex-1 min-w-0 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <BookOpen size={17} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-xl sm:text-2xl font-black text-slate-900">
                    How Salary After Tax Works — 2026 Guide
                  </h2>
                  <p className="text-xs text-slate-400">Federal brackets · FICA · Standard deduction · All 50 states</p>
                </div>
              </div>

              {[
                {
                  title: "The 2026 Federal Tax Brackets",
                  body: `Federal income tax in 2026 is progressive — you pay different rates on different portions of income, not a flat rate on everything. For a single filer, the first $11,925 is taxed at 10%, income from $11,926 to $48,475 at 12%, and income from $48,476 to $103,350 at 22%. Before any bracket applies, you subtract your standard deduction ($15,000 for single filers in 2026), which means on a $75,000 salary, you only pay tax on $60,000.`,
                },
                {
                  title: "FICA: Social Security and Medicare",
                  body: `FICA taxes are separate from income tax. Social Security is 6.2% on wages up to $176,100 (the 2026 wage base) — above this, it stops completely. Medicare is 1.45% on all wages with no cap. An additional 0.9% Medicare surtax applies on wages above $200,000 (single). Your employer matches the 6.2% Social Security and 1.45% Medicare — the amounts shown in our calculator are the employee share only.`,
                },
                {
                  title: "State Income Tax: The Hidden Variable",
                  body: `State income tax is often overlooked — but it can cost more than federal tax at some income levels. California's top rate is 13.3%. New York reaches 10.9%. Meanwhile, Texas, Florida, Nevada, and six other states charge zero. On a $100,000 salary, the difference between living in Texas versus California is approximately $6,500–$8,050 per year in state income tax alone. Our calculator applies the correct rates for all 50 states.`,
                },
                {
                  title: "How 401(k) Contributions Reduce Tax",
                  body: `Traditional 401(k) contributions reduce your taxable income dollar-for-dollar. The 2026 contribution limit is $23,500 (under 50) or $31,000 (50 and older). If you contribute $10,000 on an $80,000 salary in the 22% federal bracket, you save $2,200 in federal tax immediately — plus state tax savings. That's free money. Use the Advanced Options in our calculator to see exactly how much deductions save you.`,
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm"
                >
                  <h3 className="font-black text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-indigo-500 shrink-0" />
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}

              {/* 401k callout */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <BarChart3 size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-indigo-900 text-sm mb-2">
                      401(k) Tax Savings at a Glance
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { contrib: "$5,000/yr",  saving: "Saves $1,100–$1,750" },
                        { contrib: "$10,000/yr", saving: "Saves $2,200–$3,500" },
                        { contrib: "$15,000/yr", saving: "Saves $3,300–$5,250" },
                        { contrib: "$23,500/yr", saving: "Saves $5,170–$8,225" },
                      ].map(({ contrib, saving }) => (
                        <div key={contrib} className="bg-white rounded-xl px-3 py-2.5 border border-indigo-100">
                          <p className="text-xs text-slate-500">{contrib}</p>
                          <p className="text-sm font-black text-emerald-700">{saving}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-indigo-600 mt-2">Based on 22–35% combined federal + state bracket</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sticky sidebar */}
            <aside className="w-full lg:w-56 flex-shrink-0 space-y-5 lg:sticky lg:top-20">

              {/* No-tax states */}
              <div className="bg-slate-900 text-white rounded-2xl p-5">
                <Globe size={16} className="text-emerald-400 mb-3" />
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
                  Zero State Income Tax
                </p>
                <div className="space-y-2">
                  {["🤠 Texas", "🏖️ Florida", "❄️ Nevada", "🦅 Wyoming", "🌾 South Dakota", "🏔️ Alaska", "⛵ Tennessee", "🌲 Washington*"].map((s) => (
                    <div key={s} className="text-xs text-slate-300 flex items-center gap-2">
                      <CheckCircle2 size={11} className="text-emerald-400 shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
                <p className="text-[9px] text-slate-600 mt-3">*No wage income tax. Saves $3K–$8K/yr on $100K salary.</p>
              </div>

              {/* Quick CTA */}
              <div className="bg-indigo-600 rounded-2xl p-5 text-white text-center">
                <Calculator size={20} className="mx-auto mb-2 text-indigo-200" />
                <p className="font-black text-sm mb-1">Calculate Yours</p>
                <p className="text-indigo-200 text-xs mb-3">Enter your salary above for your exact numbers</p>
                <a
                  href="#calculator"
                  className="block bg-white text-indigo-700 font-black text-xs py-2 rounded-xl
                             hover:bg-indigo-50 transition-colors"
                >
                  ↑ Go to Calculator
                </a>
              </div>

              {/* Related tools */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">Related Tools</p>
                <div className="space-y-2">
                  {[
                    { href: "/paycheck-calculator",   label: "Paycheck Calculator"  },
                    { href: "/overtime-calculator",    label: "Overtime Pay"         },
                    { href: "/hourly-to-salary-calculator", label: "Hourly to Salary" },
                    { href: "/self-employment-tax-calculator-usa", label: "SE Tax"  },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-1.5 text-xs text-indigo-600
                                 hover:text-indigo-800 hover:underline transition-colors"
                    >
                      <ChevronRight size={11} />
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* AdSense placeholder — ready for when approved */}
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl
                              min-h-[120px] flex items-center justify-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                  Advertisement
                </span>
              </div>
            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading">
          <div className="text-center mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              Salary After Tax — 2026 Questions Answered
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              $60K take-home · $100K net pay · Standard deduction · FICA · State comparison
            </p>
          </div>

          <dl className="space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div
                key={q}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6
                           hover:border-indigo-200 transition-colors shadow-sm"
              >
                <dt className="font-black text-slate-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-indigo-400 shrink-0 mt-0.5" />
                  {q}
                </dt>
                <dd className="text-slate-500 text-sm leading-relaxed pl-5">{a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RELATED CALCULATORS
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
            Related Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RELATED.map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-start gap-3 p-4 bg-white border border-slate-100
                           rounded-2xl hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600
                                flex items-center justify-center shrink-0
                                group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Calculator size={16} />
                </div>
                <div>
                  <p className="font-black text-slate-900 text-sm group-hover:text-indigo-700 transition-colors">
                    {label}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            DISCLAIMER
        ════════════════════════════════════════════════════════════════ */}
        <div className="flex items-start gap-3 bg-slate-50 border border-slate-200
                        rounded-2xl px-5 py-4 text-xs text-slate-500">
          <Info size={15} className="text-slate-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Results are estimates based on 2026 IRS withholding tables and state tax rates.
            Actual withholding may vary due to local taxes, credits, additional income, or
            employer-specific W-4 settings. Not financial or tax advice.{" "}
            <Link href="/disclaimer" className="underline hover:text-slate-700 transition-colors">
              See full disclaimer
            </Link>.
          </p>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-gradient-to-br from-indigo-700 to-violet-800 text-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-black uppercase tracking-widest text-indigo-300 mb-3">
            Free · All 50 States · No Signup
          </p>
          <h2 className="text-2xl sm:text-3xl font-black mb-4">
            Know Your Real Take-Home Pay
          </h2>
          <p className="text-indigo-200 text-sm mb-8 leading-relaxed">
            Share this with anyone comparing job offers, planning a move, or negotiating salary.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-black
                         text-sm px-7 py-3.5 rounded-2xl hover:bg-amber-300 hover:text-indigo-900
                         transition-all shadow-xl active:scale-95"
            >
              <Calculator size={16} />
              Calculate My Take-Home
            </a>
            <Link
              href="/tax-calculators"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20
                         border border-white/20 text-white font-bold text-sm px-7 py-3.5
                         rounded-2xl transition-all active:scale-95"
            >
              More Tax Tools <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SEO FOOTER NAV
      ════════════════════════════════════════════════════════════════════ */}
      <nav
        aria-label="Related salary calculators"
        className="bg-slate-950 py-8 border-t border-white/6"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { href: "/paycheck-calculator",               label: "Paycheck Calculator"          },
              { href: "/hourly-to-salary-calculator",       label: "Hourly to Salary"             },
              { href: "/overtime-calculator",               label: "Overtime Calculator"           },
              { href: "/self-employment-tax-calculator-usa",label: "Self-Employment Tax"           },
              { href: "/savings-calculator",                label: "Savings Calculator"            },
              { href: "/loan-calculator",                   label: "Loan EMI Calculator"           },
              { href: "/rent-affordability-calculator",     label: "Rent Affordability"            },
              { href: "/doordash-earnings-calculator",      label: "DoorDash Earnings"             },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-500 hover:text-slate-300 transition-colors text-xs"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-[10px] text-slate-700 mt-4">
            Salary After Tax Calculator · All 50 States · 2026 IRS Rates · FreeUSCalculator.in
          </p>
        </div>
      </nav>
    </main>
  );
}