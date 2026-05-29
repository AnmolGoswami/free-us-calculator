// app/blog/salary-after-tax-guide-2026/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Calculator, Calendar, Clock, CheckCircle2,
  ChevronRight, AlertTriangle, TrendingUp, Star,
  Wallet, ShieldCheck, Zap, Landmark, DollarSign,
  BarChart2, AlertCircle, Globe,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
//
// Tool page = transactional: "salary after tax calculator", "take home pay calculator"
//
// This blog page = informational (captures different SERP positions):
//   "how much is $60,000 salary after tax USA"
//   "what is $100k salary after tax"
//   "one big beautiful bill tax deductions 2026"
//   "effective vs marginal tax rate explained"
//   "how does 401k reduce my salary tax"
//   "which states have no income tax 2026"
//   "salary after tax by state comparison"
//   "2026 federal income tax brackets salary"
//   "how is salary after tax calculated step by step"
//
// Two URLs targeting both intent clusters = two SERP positions for same keywords.
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Salary After Tax Guide 2026 – Take-Home Pay, Brackets & One Big Beautiful Bill",
  description:
    "How much is $60,000, $75,000, or $100,000 after tax in 2026? Complete guide: federal brackets, One Big Beautiful Bill deductions, effective vs marginal rate, 401(k) savings, state comparison for all 50 states. Real IRS numbers.",
  alternates: {
    canonical:
      "https://www.freeuscalculator.in/blog/salary-after-tax-guide-2026",
  },
  keywords: [
    "60000 salary after tax USA 2026",
    "100000 salary after tax USA 2026",
    "salary after tax guide 2026",
    "one big beautiful bill tax deductions 2026",
    "effective vs marginal tax rate explained",
    "how does 401k reduce salary tax 2026",
    "states with no income tax 2026",
    "2026 federal income tax brackets explained",
    "how is salary after tax calculated step by step",
    "salary after tax by state comparison 2026",
    "75000 salary after tax monthly",
    "what is take home pay on 80000 salary",
    "pre-tax deductions salary calculator 2026",
    "social security wage base 2026",
    "standard deduction 2026 salary",
  ],
  openGraph: {
    title:
      "Salary After Tax Guide 2026 – Take-Home Pay, Brackets & One Big Beautiful Bill",
    description:
      "Federal brackets, One Big Beautiful Bill deductions, state tax comparison for all 50 states, and how 401(k)/HSA cut your real tax bill. Every salary from $40K–$200K with real 2026 IRS numbers.",
    url: "https://www.freeuscalculator.in/blog/salary-after-tax-guide-2026",
    type: "article",
    publishedTime: "2026-04-01T00:00:00Z",
    modifiedTime: "2026-05-01T00:00:00Z",
    authors: ["FreeUSCalculator"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD — Article + FAQPage
// Tool page uses WebApplication + HowTo schemas — different types across URLs
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
          name: "Salary After Tax Guide 2026",
          item: "https://www.freeuscalculator.in/blog/salary-after-tax-guide-2026" },
      ],
    },
    {
      "@type": "Article",
      headline:
        "Salary After Tax Guide 2026 – Take-Home Pay, Brackets & One Big Beautiful Bill",
      description:
        "Complete 2026 guide to salary after tax: federal brackets, One Big Beautiful Bill deductions, $40K–$200K take-home tables, state tax comparison for all 50 states, effective vs marginal rate, and how 401(k) and HSA cut your real tax bill.",
      url: "https://www.freeuscalculator.in/blog/salary-after-tax-guide-2026",
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
        "https://www.freeuscalculator.in/salary-after-tax-calculator",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much is a $60,000 salary after tax in the USA in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On a $60,000 salary filing single, your take-home pay is approximately $47,092/year ($3,924/month) after federal tax ($5,918), FICA ($4,590), and average state tax (~$2,400). In a zero-tax state like Texas or Florida, take-home rises to approximately $49,492/year ($4,124/month). In California, state tax reduces take-home to roughly $44,500/year.",
          },
        },
        {
          "@type": "Question",
          name: "What is a $100,000 salary after tax in the USA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On a $100,000 salary filing single, take-home pay is approximately $72,556/year ($6,046/month) after federal tax ($15,794), FICA ($7,650), and average state tax (~$4,000). In Texas or Florida (no state tax): ~$76,556/year ($6,380/month). In California: ~$70,056/year ($5,838/month) after state tax (~$6,500).",
          },
        },
        {
          "@type": "Question",
          name: "What are the One Big Beautiful Bill deductions for 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The One Big Beautiful Bill (passed 2025, effective 2025–2028) introduced: (1) Qualified tips deduction: up to $25,000/year for eligible tipped workers, phasing out above $150,000 income. (2) Overtime premium deduction: the extra 0.5× portion of overtime pay, up to $12,500 single/$25,000 joint. (3) Enhanced senior deduction for taxpayers 65+. These stack on top of the standard deduction and expire December 31, 2028.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between effective and marginal tax rate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your marginal rate is the rate on your highest dollar of income (your bracket). Your effective rate is actual total tax divided by total income — always lower than marginal. On a $75,000 salary, single filer in 2026: after the $16,100 standard deduction, taxable income is $58,900. You pay 10% on the first $11,925, 12% on the next $36,549, and 22% on the rest. Total federal tax: $7,872. Effective rate: 10.5% — not 22%.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a 401(k) contribution reduce my salary tax?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional 401(k) contributions reduce your federal and state taxable income dollar-for-dollar. The 2026 limit is $23,500 (under 50) or $31,000 (50+). A $10,000 annual contribution on an $80,000 salary in the 22% federal bracket saves approximately $2,200 in federal tax alone. Add California state tax (9.3%) and FICA, and the total tax savings on $10,000 contributed reaches $3,130+.",
          },
        },
        {
          "@type": "Question",
          name: "Which states have the highest and lowest take-home pay in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Highest take-home pay: Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Washington, Wyoming (no income tax on wages). On a $100,000 salary, Texas nets ~$76,556/year vs California at ~$70,056 — a $6,500/year difference. Lowest take-home: California (top rate 13.3%), Hawaii (11%), Oregon (9.9%), New Jersey (10.75%), New York (10.9% on upper incomes). New York City adds an additional 3.078%–3.876% city tax.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA TABLES
// ─────────────────────────────────────────────────────────────────────────────

// $40K–$200K take-home table
const TAKEHOME_TABLE = [
  ["$40,000",  "$2,568",  "$3,060",  "$1,600",  "$2,731",  "$32,772",  "18.1%"],
  ["$50,000",  "$4,068",  "$3,825",  "$2,000",  "$3,342",  "$40,107",  "19.8%"],
  ["$60,000",  "$5,918",  "$4,590",  "$2,400",  "$3,924",  "$47,092",  "21.5%"],
  ["$65,000",  "$6,843",  "$4,973",  "$2,600",  "$4,215",  "$50,584",  "22.2%"],
  ["$70,000",  "$7,918",  "$5,355",  "$2,800",  "$4,494",  "$53,927",  "23.0%"],
  ["$75,000",  "$7,872",  "$5,738",  "$3,000",  "$4,868",  "$58,390",  "23.1%"],
  ["$80,000",  "$10,294", "$6,120",  "$3,200",  "$5,032",  "$60,386",  "24.4%"],
  ["$90,000",  "$12,794", "$6,885",  "$3,600",  "$5,560",  "$66,721",  "25.9%"],
  ["$100,000", "$15,794", "$7,650",  "$4,000",  "$6,046",  "$72,556",  "27.4%"],
  ["$120,000", "$21,294", "$9,180",  "$4,800",  "$7,061",  "$84,726",  "29.4%"],
  ["$150,000", "$30,544", "$11,475", "$6,000",  "$8,582",  "$102,981", "31.3%"],
  ["$200,000", "$46,544", "$14,505", "$8,000",  "$10,996", "$131,951", "34.5%"],
];

// State tax comparison at $100K
const STATE_TABLE = [
  ["🤠 Texas",         "0%",         "$0",     "$76,556", "$6,380", "—",       "bg-emerald-50"],
  ["🏖️ Florida",      "0%",         "$0",     "$76,556", "$6,380", "—",       "bg-emerald-50"],
  ["❄️ Nevada",        "0%",         "$0",     "$76,556", "$6,380", "—",       "bg-emerald-50"],
  ["🌲 Washington",    "0%*",        "$0",     "$76,556", "$6,380", "—",       "bg-emerald-50"],
  ["🌵 Arizona",       "2.5% flat",  "$1,875", "$74,681", "$6,223", "−$1,875", ""],
  ["Pennsylvania",     "3.07% flat", "$2,303", "$74,253", "$6,188", "−$2,303", ""],
  ["🏔️ Colorado",      "4.4% flat",  "$3,300", "$73,256", "$6,105", "−$3,300", ""],
  ["🌾 Michigan",      "4.05% flat", "$4,050", "$72,506", "$6,042", "−$4,050", ""],
  ["🌸 Georgia",       "5.49%",      "$4,118", "$72,438", "$6,037", "−$4,118", ""],
  ["🗽 New York",      "4–10.9%",    "$5,820", "$70,736", "$5,895", "−$5,820", ""],
  ["🏙️ New Jersey",   "1.4–10.75%", "$5,525", "$71,031", "$5,919", "−$5,525", ""],
  ["🌉 California",    "1–13.3%",    "$6,500", "$70,056", "$5,838", "−$6,500", "bg-rose-50"],
  ["☁️ Oregon",        "4.75–9.9%",  "$7,200", "$69,356", "$5,780", "−$7,200", "bg-rose-50"],
];

// 401(k) savings scenarios
const KFOUR_TABLE = [
  ["$80,000",  "$5,000",  "22%",  "$1,100+",  "$1,565+",  "$3,435"],
  ["$80,000",  "$10,000", "22%",  "$2,200+",  "$3,130+",  "$6,870"],
  ["$80,000",  "$23,500", "22%",  "$5,170+",  "$7,356+",  "$16,144"],
  ["$120,000", "$10,000", "24%",  "$2,400+",  "$3,330+",  "$6,670"],
  ["$120,000", "$23,500", "24%",  "$5,640+",  "$7,827+",  "$15,673"],
  ["$200,000", "$23,500", "32%",  "$7,520+",  "$8,786+",  "$14,714"],
];

// 2026 federal brackets
const BRACKETS = [
  ["10%",  "$0 – $11,925",         "$0 – $23,850 (MFJ)"],
  ["12%",  "$11,926 – $48,475",    "$23,851 – $96,950 (MFJ)"],
  ["22%",  "$48,476 – $103,350",   "$96,951 – $206,700 (MFJ)"],
  ["24%",  "$103,351 – $197,300",  "$206,701 – $394,600 (MFJ)"],
  ["32%",  "$197,301 – $250,525",  "$394,601 – $501,050 (MFJ)"],
  ["35%",  "$250,526 – $626,350",  "$501,051 – $751,600 (MFJ)"],
  ["37%",  "Over $626,350",        "Over $751,600 (MFJ)"],
];

const TOC = [
  { id: "how-calculated",    label: "How salary after tax is calculated — step by step" },
  { id: "brackets-2026",     label: "2026 federal income tax brackets" },
  { id: "marginal-vs-eff",   label: "Effective vs marginal tax rate — the number that matters" },
  { id: "fica-explained",    label: "FICA: Social Security & Medicare in 2026" },
  { id: "takehome-table",    label: "Salary after tax: $40K–$200K quick reference table" },
  { id: "state-comparison",  label: "Salary after tax by state — all 50 states" },
  { id: "no-tax-states",     label: "No-income-tax states — the real dollar difference" },
  { id: "one-big-beautiful",  label: "One Big Beautiful Bill — new deductions for 2026" },
  { id: "401k-savings",      label: "How 401(k) and HSA cut your actual tax bill" },
  { id: "pre-tax-breakdown", label: "Pre-tax deduction impact table" },
  { id: "state-specific",    label: "Salary after tax in California, Texas, NY, and Florida" },
  { id: "calculator",        label: "Use the free salary after tax calculator" },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-black tracking-tight text-slate-900
                 border-l-4 border-green-600 pl-4 mt-14 mb-5 scroll-mt-6"
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
          ? "linear-gradient(135deg,#16a34a 0%,#059669 100%)"
          : "linear-gradient(135deg,#0f1f0f 0%,#14532d 100%)",
      }}
    >
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full
                      bg-green-500/10 blur-3xl pointer-events-none" />
      <div
        className="relative flex flex-col sm:flex-row items-start
                   sm:items-center justify-between gap-5"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Calculator size={15} className="text-green-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-green-300">
              Free Tool · All 50 States · 2026 IRS Rates
            </span>
          </div>
          <p className="text-white font-black text-lg leading-snug mb-1">
            {isEnd
              ? "Calculate your exact take-home pay by salary and state"
              : "Get your exact number — salary, state, and deductions"}
          </p>
          <p className="text-green-200 text-[13px] leading-relaxed max-w-sm">
            {isEnd
              ? "Enter your salary, state, filing status, and 401(k). See annual, monthly, and biweekly take-home with every tax line itemised — 2026 IRS rates, One Big Beautiful Bill included."
              : "Federal + state + FICA · 401(k) & HSA deductions · One Big Beautiful Bill · Effective tax rate · All 50 states."}
          </p>
        </div>
        <Link
          href="/salary-after-tax-calculator"
          className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-green-500 hover:bg-green-400 text-white font-black text-[14px]
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
export default function SalaryAfterTaxGuidePage() {
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
          <span className="text-slate-600">Salary After Tax Guide 2026</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        bg-green-50 border border-green-100 text-green-700
                        text-[10px] font-black uppercase tracking-widest mb-5">
          <DollarSign size={11} />
          US Salary · All 50 States · One Big Beautiful Bill · 2026
        </div>

        <h1
          className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]
                     text-slate-900 mb-6"
        >
          Salary After Tax{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg,#16a34a,#059669)" }}
          >
            Guide
          </span>{" "}
          2026
          <br className="hidden sm:block" />
          <span className="text-slate-500 text-xl md:text-2xl font-bold">
            Take-Home Pay, Tax Brackets & One Big Beautiful Bill
          </span>
        </h1>

        <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed mb-7 max-w-2xl">
          Your $100,000 salary is not $100,000. After federal income tax, FICA, and
          state tax, the real number in most states is{" "}
          <strong className="text-slate-900">$70,000–$76,000</strong>. This guide
          shows exactly where the money goes, every deduction available in 2026
          including the new One Big Beautiful Bill provisions, and how much each
          state costs you on identical salaries.
        </p>

        {/* Hero stat strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
          {[
            { value: "$184,500", label: "SS wage base 2026" },
            { value: "$16,100",  label: "Std. deduction single" },
            { value: "$23,500",  label: "401(k) limit <50" },
            { value: "$25,000",  label: "OBBB tips deduction cap" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-green-50 border border-green-100 p-4 text-center"
            >
              <p className="text-xl font-black text-green-700 tabular-nums leading-none mb-1">
                {s.value}
              </p>
              <p className="text-[10px] text-green-600 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 pb-7
                        border-b border-slate-100 text-[12px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} /> Updated May 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> 13 min read
          </span>
          <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
            <CheckCircle2 size={12} />
            IRS Pub. 15-T · $184,500 SS base · One Big Beautiful Bill 2025–2028
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
                    <span className="text-[10px] text-green-600 font-black w-5 h-5
                                     rounded-full bg-green-50 flex items-center
                                     justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <a
                      href={`#${item.id}`}
                      className="text-green-700 hover:underline text-[13px] font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* ─── SECTION 1 ─── */}
            <H2 id="how-calculated">
              How salary after tax is calculated — step by step
            </H2>

            <p>
              Every US salary goes through the same sequence of deductions before
              reaching your bank account. Understanding each step puts you on equal
              footing with the IRS, your employer's payroll department, and anyone
              quoting you a salary figure.
            </p>

            <div className="not-prose my-6 p-5 bg-slate-50 rounded-2xl border
                            border-slate-100 font-mono text-[13px] text-slate-700">
              <p className="font-black text-slate-900 mb-3 not-italic text-[14px]">
                The salary-after-tax formula:
              </p>
              <p className="leading-relaxed">
                <strong>Step 1:</strong> Gross Salary<br />
                <strong>Step 2:</strong> − Pre-Tax Deductions (401k, HSA, health insurance)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= Adjusted Gross Income (AGI)<br />
                <strong>Step 3:</strong> − Standard Deduction ($16,100 single / $32,200 MFJ)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= Taxable Income<br />
                <strong>Step 4:</strong> Apply progressive federal brackets → Federal Tax<br />
                <strong>Step 5:</strong> Social Security 6.2% (up to $184,500) + Medicare 1.45%<br />
                <strong>Step 6:</strong> State income tax (varies 0%–13.3%)<br />
                <strong>Step 7:</strong> Net Take-Home = Gross − All of the above
              </p>
            </div>

            <p>
              The key insight most people miss: steps 1–3 happen before federal and
              state taxes are calculated. Every dollar into a pre-tax 401(k), HSA, or
              Section 125 health insurance plan reduces your taxable income at step 3,
              which directly lowers the tax calculated at step 4. This is why pre-tax
              contributions save you more than their face value.
            </p>

            {/* ─── SECTION 2 ─── */}
            <H2 id="brackets-2026">2026 federal income tax brackets</H2>

            <p>
              The US uses a progressive bracket system — only the income within each
              bracket is taxed at that rate, never your entire salary. The IRS adjusts
              brackets annually for inflation; 2026 brackets increased approximately
              2.8–4% from 2025.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200 my-5">
              <table className="w-full text-[12px] min-w-[440px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Rate</th>
                    <th className="px-4 py-3 text-left font-black">Single Filer</th>
                    <th className="px-4 py-3 text-left font-black">Married Filing Jointly</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {BRACKETS.map(([rate, single, mfj], i) => (
                    <tr key={rate} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-2.5 font-black text-green-700">{rate}</td>
                      <td className="px-4 py-2.5 text-slate-600">{single}</td>
                      <td className="px-4 py-2.5 text-slate-500 text-[11px]">{mfj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[12px] text-slate-400">
              Standard deduction: $16,100 (single) · $32,200 (MFJ) · $24,150 (HoH).
              Applied before the brackets — your taxable income is always lower than gross salary.
            </p>

            {/* ─── SECTION 3 ─── */}
            <H2 id="marginal-vs-eff">
              Effective vs marginal tax rate — the number that actually matters
            </H2>

            <p>
              This is the most misunderstood concept in personal tax planning. Your{" "}
              <strong>marginal rate</strong> is the rate on your last dollar of income
              — your "bracket." Your <strong>effective rate</strong> is total tax
              divided by total income — what you actually pay as a percentage.
              The effective rate is always lower than the marginal rate.
            </p>

            {/* Worked example */}
            <div className="not-prose my-7 p-6 bg-green-50 rounded-2xl border border-green-100">
              <p className="font-black text-green-900 text-[14px] mb-4">
                Worked example: $75,000 salary, single filer, 2026
              </p>
              <div className="bg-white rounded-xl p-5 font-mono text-[13px]
                              text-slate-700 shadow-sm space-y-1.5">
                <p>Gross salary:                  <strong>$75,000</strong></p>
                <p>− Standard deduction:           <strong>$16,100</strong></p>
                <p>Taxable income:                 <strong>$58,900</strong></p>
                <div className="border-t border-slate-100 pt-3 mt-2 space-y-1">
                  <p>10% on first $11,925:         <strong className="text-rose-600">$1,193</strong></p>
                  <p>12% on $11,926–$48,475:       <strong className="text-rose-600">$4,386</strong></p>
                  <p>22% on $48,476–$58,900:       <strong className="text-rose-600">$2,293</strong></p>
                </div>
                <div className="border-t border-slate-100 pt-3 mt-2">
                  <p>Total federal tax:             <strong className="text-rose-600">$7,872</strong></p>
                  <p>Marginal rate (top bracket):   <strong>22%</strong></p>
                  <p>Effective rate (actual):        <strong className="text-green-700">10.5%</strong> ($7,872 ÷ $75,000)</p>
                </div>
              </div>
              <p className="text-[11px] text-green-700 mt-3">
                You are in the "22% bracket" but your effective federal rate is only 10.5% because
                only the last $10,425 of taxable income is taxed at 22%. Every dollar below that
                threshold is taxed at 10% or 12%.
              </p>
            </div>

            <p>
              This distinction matters enormously for 401(k) decisions. When someone
              says "contributing to my 401(k) saves me 22% in taxes," that's only true
              for contributions that reduce income in the 22% bracket. Contributions
              that reduce income in the 12% bracket save 12%, not 22%.
            </p>

            {/* ─── SECTION 4 ─── */}
            <H2 id="fica-explained">FICA: Social Security & Medicare in 2026</H2>

            <p>
              FICA (Federal Insurance Contributions Act) is mandatory and cannot be
              reduced by the standard deduction or most pre-tax contributions. It
              applies to gross wages and funds Social Security and Medicare.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200 my-5">
              <table className="w-full text-[12px] min-w-[420px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-4 py-3 text-left font-black">Tax</th>
                    <th className="px-4 py-3 text-left font-black">Rate</th>
                    <th className="px-4 py-3 text-left font-black">2026 Wage Cap</th>
                    <th className="px-4 py-3 text-left font-black">Max Employee Tax</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Social Security (OASDI)", "6.2%",  "$184,500",         "$11,439"],
                    ["Medicare (HI)",           "1.45%", "No cap",           "Unlimited"],
                    ["Additional Medicare",     "0.9%",  ">$200K (single)/$250K (MFJ)", "Varies"],
                  ].map(([tax, rate, cap, max], i) => (
                    <tr key={tax} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-2.5 font-bold text-slate-900">{tax}</td>
                      <td className="px-4 py-2.5 font-black text-green-700">{rate}</td>
                      <td className="px-4 py-2.5 text-slate-600">{cap}</td>
                      <td className="px-4 py-2.5 font-semibold text-slate-800">{max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl border border-blue-100 bg-blue-50 p-5 my-5">
              <p className="font-black text-blue-900 text-[13px] mb-1.5">
                The SS wage base paycheck jump
              </p>
              <p className="text-blue-800 text-[13px] leading-relaxed">
                Once your wages reach $184,500 in the calendar year, Social Security
                withholding stops completely. Workers earning above this threshold see a
                noticeable paycheck increase — at $184,500 salary, that's approximately
                $435 extra per bi-weekly paycheck from that point forward.
              </p>
            </div>

            {/* ─── SECTION 5 — TAKE-HOME TABLE ─── */}
            <H2 id="takehome-table">
              Salary after tax: $40K–$200K quick reference (2026)
            </H2>

            <p className="mb-5">
              Single filer · Standard deduction applied · No pre-tax deductions ·
              US average state tax (~4%). Your actual take-home varies by state —
              use the calculator for your exact number.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200
                            shadow-sm my-2">
              <table className="w-full text-[11px] text-slate-700 bg-white min-w-[600px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Salary</th>
                    <th className="px-3 py-3 text-left font-black">Federal Tax</th>
                    <th className="px-3 py-3 text-left font-black">FICA</th>
                    <th className="px-3 py-3 text-left font-black">Avg State</th>
                    <th className="px-3 py-3 text-left font-black">Monthly Net</th>
                    <th className="px-3 py-3 text-left font-black">Annual Net</th>
                    <th className="px-3 py-3 text-left font-black">Eff. Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {TAKEHOME_TABLE.map(([salary, fed, fica, state, mo, yr, eff], i) => (
                    <tr
                      key={salary}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                                  hover:bg-green-50/20 transition-colors`}
                    >
                      <td className="px-3 py-2.5 font-black text-slate-900">{salary}</td>
                      <td className="px-3 py-2.5 text-rose-600 font-semibold">{fed}</td>
                      <td className="px-3 py-2.5 text-orange-600">{fica}</td>
                      <td className="px-3 py-2.5 text-slate-500">{state}</td>
                      <td className="px-3 py-2.5 font-bold text-blue-700">{mo}</td>
                      <td className="px-3 py-2.5 font-black text-green-700">{yr}</td>
                      <td className="px-3 py-2.5 text-slate-400">{eff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              †FICA at $200K includes 0.9% Additional Medicare Tax. State estimated at 4%.
            </p>

            {/* MID-ARTICLE CTA */}
            <CalculatorCTA variant="mid" />

            {/* ─── SECTION 6 — STATE COMPARISON ─── */}
            <H2 id="state-comparison">
              Salary after tax by state — $100,000 salary comparison (2026)
            </H2>

            <p className="mb-5">
              Federal tax is identical regardless of where you live. State tax is the
              variable that most dramatically changes your take-home pay — and the one
              most people underestimate when evaluating job offers.
            </p>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200
                            shadow-sm my-2">
              <table className="w-full text-[11px] min-w-[540px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">State</th>
                    <th className="px-3 py-3 text-left font-black">Rate</th>
                    <th className="px-3 py-3 text-left font-black">State Tax</th>
                    <th className="px-3 py-3 text-left font-black">Annual Net</th>
                    <th className="px-3 py-3 text-left font-black">Monthly Net</th>
                    <th className="px-3 py-3 text-left font-black">vs Texas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {STATE_TABLE.map(([state, rate, tax, annual, monthly, diff, rowBg], i) => (
                    <tr
                      key={state}
                      className={rowBg || (i % 2 === 0 ? "bg-white" : "bg-slate-50/50")}
                    >
                      <td className="px-3 py-2.5 font-bold text-slate-900 text-[12px]">
                        {state}
                      </td>
                      <td className={`px-3 py-2.5 font-bold text-[11px] ${
                        rate === "0%" || rate === "0%*" ? "text-green-700" : "text-amber-700"
                      }`}>{rate}</td>
                      <td className={`px-3 py-2.5 font-semibold ${
                        tax === "$0" ? "text-green-700" : "text-rose-600"
                      }`}>{tax}</td>
                      <td className="px-3 py-2.5 font-black text-blue-700">{annual}</td>
                      <td className="px-3 py-2.5 font-semibold text-slate-600">{monthly}</td>
                      <td className={`px-3 py-2.5 font-bold text-[11px] ${
                        diff === "—" ? "text-slate-400" : "text-rose-500"
                      }`}>{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              *Washington has no wage income tax but levies 7% capital gains tax above $270,000.
              NYC adds 3.078%–3.876% city tax on top of NY state tax. All figures single filer,
              $100,000 salary, standard deduction only.
            </p>

            {/* ─── SECTION 7 — NO TAX STATES ─── */}
            <H2 id="no-tax-states">
              No-income-tax states — the real dollar difference on your salary
            </H2>

            <p>
              Nine US states collect no broad-based wage income tax. The financial impact
              is significant and permanent — not a one-time benefit, but a recurring
              annual advantage that compounds over a career.
            </p>

            <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
              {[
                { state: "🤠 Texas",        note: "No income tax — $6,500+/yr more than CA at $100K" },
                { state: "🏖️ Florida",     note: "No income tax — warm weather, zero state withholding" },
                { state: "❄️ Nevada",       note: "No income tax — popular with remote workers" },
                { state: "❄️ Alaska",       note: "No income tax + no statewide sales tax" },
                { state: "🌾 South Dakota", note: "No income tax — low overall tax burden" },
                { state: "🦅 Wyoming",      note: "No income tax — low cost of living" },
                { state: "⛵ Tennessee",    note: "No wage income tax (Hall Tax ended 2022)" },
                { state: "🌿 N. Hampshire", note: "No wage income tax" },
                { state: "🌲 Washington",   note: "No wage tax — 7% capital gains above $270K" },
              ].map(({ state, note }) => (
                <div
                  key={state}
                  className="rounded-xl bg-green-50 border border-green-100 p-3.5"
                >
                  <p className="font-black text-slate-900 text-[13px] mb-0.5">{state}</p>
                  <p className="text-[11px] text-green-700 font-medium leading-snug">{note}</p>
                </div>
              ))}
            </div>

            <p>
              At a $100,000 salary, relocating from California to Texas adds{" "}
              <strong>$6,500/year in take-home pay</strong> — approximately $541/month
              more, every month, for as long as you live there. Over 20 years invested
              at 7% average annual return, that difference compounds to{" "}
              <strong>approximately $335,000 in additional wealth</strong>.
            </p>

            {/* ─── SECTION 8 — ONE BIG BEAUTIFUL BILL ─── */}
            <H2 id="one-big-beautiful">
              One Big Beautiful Bill — new deductions that change your 2026 tax picture
            </H2>

            <p>
              The One Big Beautiful Bill, signed into law on July 4, 2025, introduced
              several new above-the-line deductions for tax years 2025–2028. These stack
              on top of the standard deduction and can significantly reduce taxable income
              for eligible workers.
            </p>

            <div className="not-prose space-y-4 my-6">
              {[
                {
                  title: "1. Qualified Tips Deduction — up to $25,000/year",
                  color: "border-green-100 bg-green-50",
                  textColor: "text-green-800",
                  body: "Eligible tipped workers — restaurant servers, bartenders, hair stylists, hotel staff, valets, and others in customarily tipped occupations — can deduct up to $25,000 in qualifying tip income from federal taxable income. The deduction phases out above $150,000 adjusted gross income ($300,000 for married filing jointly). A server earning $45,000 base salary plus $20,000 in tips could reduce their federal taxable income by up to $20,000 under this provision.",
                  note: "Expiry: December 31, 2028, unless extended by Congress.",
                },
                {
                  title: "2. Overtime Premium Deduction — up to $12,500 single / $25,000 joint",
                  color: "border-blue-100 bg-blue-50",
                  textColor: "text-blue-800",
                  body: "The extra 0.5× premium portion of overtime pay (the amount above the regular rate) is deductible up to $12,500 for single filers and $25,000 for married filing jointly. This does not include your regular pay — only the overtime premium itself. A worker earning $25/hour who works 200 overtime hours annually earns a premium of $2,500 ($25 × 0.5 × 200 hours), which would be fully deductible. Workers with higher overtime earnings see proportionally larger benefits.",
                  note: "Applies to hours worked in excess of 40/week under FLSA. Expiry: December 31, 2028.",
                },
                {
                  title: "3. Enhanced Senior Deduction for 65+ taxpayers",
                  color: "border-violet-100 bg-violet-50",
                  textColor: "text-violet-800",
                  body: "Taxpayers aged 65 and older receive an enhanced additional standard deduction on top of the regular standard deduction. This provision particularly benefits retirees with Social Security income and pension distributions. The exact amounts interact with existing senior deduction rules — consult a CPA for your specific situation.",
                  note: "Expiry: December 31, 2028, unless extended.",
                },
              ].map((s) => (
                <div key={s.title} className={`rounded-2xl border p-5 ${s.color}`}>
                  <p className={`font-black text-[13px] mb-2 ${s.textColor}`}>{s.title}</p>
                  <p className="text-slate-600 text-[13px] leading-relaxed mb-2">{s.body}</p>
                  <p className={`text-[11px] font-bold italic ${s.textColor} opacity-80`}>
                    {s.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="not-prose rounded-2xl border border-amber-100 bg-amber-50
                            p-5 my-5 flex gap-3">
              <AlertTriangle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-amber-900 text-[13px] mb-1">
                  Important: expiry date matters for planning
                </p>
                <p className="text-amber-800 text-[13px] leading-relaxed">
                  All One Big Beautiful Bill provisions expire December 31, 2028 unless
                  Congress acts to extend them. This creates a planning window —
                  workers in eligible occupations should maximize these deductions
                  through 2028 and plan conservatively for 2029 and beyond.
                </p>
              </div>
            </div>

            {/* ─── SECTION 9 — 401(k) ─── */}
            <H2 id="401k-savings">
              How 401(k) and HSA cut your actual tax bill in 2026
            </H2>

            <p>
              Pre-tax deductions are the most powerful tool available to most US workers
              for legally reducing their tax bill. Unlike tax credits that reduce tax owed,
              pre-tax deductions reduce the income that is taxed in the first place —
              which is particularly valuable in higher brackets.
            </p>

            <H3>401(k) tax savings by salary and contribution (2026)</H3>
            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200 my-5">
              <table className="w-full text-[12px] min-w-[520px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Salary</th>
                    <th className="px-3 py-3 text-left font-black">Contribution</th>
                    <th className="px-3 py-3 text-left font-black">Bracket</th>
                    <th className="px-3 py-3 text-left font-black">Fed Tax Saved</th>
                    <th className="px-3 py-3 text-left font-black">Total Tax Saved*</th>
                    <th className="px-3 py-3 text-left font-black">Real Cost to You</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {KFOUR_TABLE.map(([salary, contrib, bracket, fed, total, cost], i) => (
                    <tr key={salary + contrib} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2.5 font-bold text-slate-900">{salary}</td>
                      <td className="px-3 py-2.5 text-blue-700 font-semibold">{contrib}</td>
                      <td className="px-3 py-2.5 text-amber-700">{bracket}</td>
                      <td className="px-3 py-2.5 text-green-700 font-bold">{fed}</td>
                      <td className="px-3 py-2.5 text-green-800 font-black">{total}</td>
                      <td className="px-3 py-2.5 font-black text-slate-900">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              *Total includes estimated federal + state income tax savings (using 4% avg state rate).
              401(k) does not reduce FICA — Health/HSA/FSA benefits through Section 125 plans also reduce FICA.
            </p>

            <H3>The HSA triple tax advantage</H3>
            <p>
              A Health Savings Account (HSA) paired with a High Deductible Health Plan
              offers something no other account type provides: contributions are pre-tax
              (reducing both income tax and FICA), growth is tax-free, and qualified
              withdrawals are tax-free. The 2026 limits are{" "}
              <strong>$4,300 (self-only)</strong> and{" "}
              <strong>$8,550 (family)</strong>. Unlike FSAs, HSA balances roll over
              indefinitely — making them also an effective supplemental retirement account.
            </p>

            {/* ─── SECTION 10 — PRE-TAX BREAKDOWN ─── */}
            <H2 id="pre-tax-breakdown">
              Pre-tax deduction impact on salary after tax — full table
            </H2>

            <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200 my-5">
              <table className="w-full text-[11px] min-w-[520px]">
                <thead>
                  <tr className="bg-slate-950 text-white text-[9px] uppercase tracking-widest">
                    <th className="px-3 py-3 text-left font-black">Deduction</th>
                    <th className="px-3 py-3 text-left font-black">2026 Limit</th>
                    <th className="px-3 py-3 text-left font-black">Reduces Taxable Income</th>
                    <th className="px-3 py-3 text-left font-black">Also Reduces FICA?</th>
                    <th className="px-3 py-3 text-left font-black">Effective Saving (22% bracket)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Traditional 401(k)", "$23,500 (<50) / $31,000 (50+)", "Yes — federal & state", "No", "22–32% of each dollar"],
                    ["HSA (self-only)",     "$4,300",          "Yes — federal & state", "Yes — saves FICA too", "~28–30% of each dollar"],
                    ["HSA (family)",        "$8,550",          "Yes — federal & state", "Yes — saves FICA too", "~28–30% of each dollar"],
                    ["Health ins (§125)",   "Varies by plan",  "Yes — federal & state", "Yes — saves FICA too", "~29–32% of each dollar"],
                    ["FSA (health)",        "$3,300",          "Yes — federal & state", "Yes — saves FICA too", "~28–30% of each dollar"],
                    ["Commuter Benefits",   "$325/mo transit",  "Yes",                  "Yes",                 "~28–30% of each dollar"],
                    ["Dep. Care FSA",       "$5,000/yr",       "Yes — federal",         "Yes",                 "~22–32% of each dollar"],
                    ["Roth 401(k)",         "$23,500 (<50)",   "No — post-tax",         "No",                  "$0 now (tax-free later)"],
                  ].map(([ded, limit, reduces, fica, saving], i) => (
                    <tr key={ded} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2.5 font-bold text-slate-900">{ded}</td>
                      <td className="px-3 py-2.5 text-blue-700 font-semibold">{limit}</td>
                      <td className="px-3 py-2.5 text-slate-600">{reduces}</td>
                      <td className={`px-3 py-2.5 font-semibold text-[11px] ${
                        fica.startsWith("Yes") ? "text-green-700" : "text-slate-400"
                      }`}>{fica}</td>
                      <td className="px-3 py-2.5 font-bold text-green-700">{saving}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ─── SECTION 11 — STATE SPECIFIC ─── */}
            <H2 id="state-specific">
              Salary after tax in California, Texas, New York, and Florida
            </H2>

            <p>
              These four states generate the most searches for salary-after-tax
              comparisons — and they represent the extreme ends of the spectrum.
            </p>

            <div className="not-prose space-y-4 my-6">
              {[
                {
                  state: "🌉 California — highest state tax burden",
                  color: "border-rose-100 bg-rose-50",
                  textColor: "text-rose-800",
                  facts: [
                    "Top marginal rate: 13.3% (highest in the US)",
                    "SDI (State Disability Insurance): ~1.1% on wages",
                    "$60K salary: take-home ~$44,500/year after CA + federal + FICA",
                    "$100K salary: take-home ~$70,056/year ($5,838/month)",
                    "$150K salary: take-home ~$100,000/year — effectively a 33% total tax rate",
                    "NYC comparison: California higher for $150K+, New York higher for $200K+ including city tax",
                  ],
                },
                {
                  state: "🤠 Texas — zero state income tax",
                  color: "border-green-100 bg-green-50",
                  textColor: "text-green-800",
                  facts: [
                    "No state income tax on any type of income",
                    "$60K salary: take-home ~$49,492/year — $4,992 more than California",
                    "$100K salary: take-home ~$76,556/year ($6,380/month)",
                    "$150K salary: take-home ~$110,000/year — approximately $10,000 more than California",
                    "Note: Texas has higher property taxes (avg 1.6–2.4% of assessed value) — factor in if buying a home",
                    "Remote workers relocating to Texas from California save $4,000–$12,000+/year depending on income",
                  ],
                },
                {
                  state: "🗽 New York — state + NYC city tax",
                  color: "border-blue-100 bg-blue-50",
                  textColor: "text-blue-800",
                  facts: [
                    "State rate: progressive 4%–10.9% on upper incomes",
                    "NYC adds: 3.078%–3.876% city income tax for NYC residents",
                    "$100K salary in NY state (outside NYC): take-home ~$70,736/year",
                    "$100K salary in NYC: take-home ~$67,000/year after state + city tax",
                    "NYC is consistently one of the highest-tax jurisdictions in the US for workers",
                    "Commuters who live in NJ/CT pay NY state tax on NY income (reciprocity rules apply)",
                  ],
                },
                {
                  state: "🏖️ Florida — zero state income tax",
                  color: "border-cyan-100 bg-cyan-50",
                  textColor: "text-cyan-800",
                  facts: [
                    "No state income tax on any type of income",
                    "Identical take-home to Texas on all salary levels",
                    "$100K salary: take-home ~$76,556/year ($6,380/month)",
                    "No statewide income tax since Florida's constitution prohibits it",
                    "Popular relocation destination for high-income workers from NY, NJ, and CA",
                    "No reciprocity issues — Florida residents working remotely for out-of-state employers pay no FL income tax",
                  ],
                },
              ].map((s) => (
                <div key={s.state} className={`rounded-2xl border ${s.color} p-5`}>
                  <p className={`font-black text-[14px] mb-3 ${s.textColor}`}>{s.state}</p>
                  <ul className="space-y-1.5">
                    {s.facts.map((fact) => (
                      <li key={fact} className="flex gap-2 text-[12px] text-slate-600">
                        <span className="text-slate-300 flex-shrink-0 mt-0.5">›</span> {fact}
                      </li>
                    ))}
                  </ul>
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
                All calculations based on 2026 IRS Publication 15-T withholding tables,
                IRS Revenue Procedure 2025-32, and state tax authority publications as of
                May 2026. One Big Beautiful Bill provisions based on the law as enacted
                July 4, 2025 — verify current law before tax filing. Estimates may differ
                from actual withholding based on local taxes, W-4 elections, and
                employer-specific payroll configurations. Not financial or tax advice —
                consult a licensed CPA or enrolled agent for your specific situation.
              </p>
              <p className="text-[11px] text-slate-400 mt-2">Last updated: May 2026</p>
            </div>
          </article>

          {/* ── STICKY SIDEBAR ──────────────────────────────────────────── */}
          <aside className="w-full lg:w-[260px] flex-shrink-0 space-y-5 lg:sticky lg:top-6">

            {/* Primary CTA */}
            <div className="rounded-2xl overflow-hidden border border-green-100 shadow-sm">
              <div
                className="px-5 py-4 text-white"
                style={{ background: "linear-gradient(135deg,#16a34a,#059669)" }}
              >
                <Wallet size={18} className="mb-2 text-green-200" />
                <p className="font-black text-[14px] leading-snug mb-1">
                  Free Salary After Tax Calculator
                </p>
                <p className="text-green-200 text-[11px] leading-relaxed">
                  All 50 states · Federal + state + FICA · 401(k) · HSA ·
                  One Big Beautiful Bill · 2026 IRS rates.
                </p>
              </div>
              <Link
                href="/salary-after-tax-calculator"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white
                           border-t border-green-100 text-green-700 font-black
                           text-[13px] hover:bg-green-50 transition-colors group"
              >
                Open Calculator
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>

            {/* IRS Key Numbers 2026 */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest
                             text-slate-500 mb-4">2026 IRS Key Numbers</p>
              <div className="space-y-2.5">
                {[
                  { label: "SS wage base",         value: "$184,500" },
                  { label: "Max SS tax (employee)", value: "$11,439" },
                  { label: "401(k) limit <50",      value: "$23,500" },
                  { label: "401(k) limit 50+",      value: "$31,000" },
                  { label: "HSA self-only",          value: "$4,300" },
                  { label: "HSA family",             value: "$8,550" },
                  { label: "Std. ded. single",       value: "$16,100" },
                  { label: "Std. ded. married",      value: "$32,200" },
                  { label: "OBBB tips deduction",    value: "Up to $25,000" },
                  { label: "FICA total rate",        value: "7.65%" },
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

            {/* One Big Beautiful Bill quick ref */}
            <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Star size={13} className="text-green-600 fill-green-600" />
                <p className="font-black text-green-900 text-[12px]">
                  One Big Beautiful Bill (2025–2028)
                </p>
              </div>
              <div className="space-y-2">
                {[
                  ["Tips deduction", "Up to $25,000/yr"],
                  ["Overtime premium", "Up to $12,500 (single)"],
                  ["Phases out above", "$150K income"],
                  ["Expires", "Dec 31, 2028"],
                ].map(([l, v]) => (
                  <div
                    key={l}
                    className="flex items-center justify-between text-[11px]
                               border-b border-green-100 pb-1.5 last:border-0"
                  >
                    <span className="text-green-800">{l}</span>
                    <span className="font-black text-green-900">{v}</span>
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
                  { label: "Paycheck Calculator",        href: "/paycheck-calculator" },
                  { label: "Overtime Pay Calculator",    href: "/overtime-calculator" },
                  { label: "Hourly to Salary",           href: "/hourly-to-salary-calculator" },
                  { label: "Bonus Tax Calculator",       href: "/bonus-tax-calculator" },
                  { label: "401(k) Calculator",          href: "/401k-calculator" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center gap-1.5 text-[12px] text-green-700
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
                  { label: "Paycheck Calculator Guide 2026",    href: "/blog/paycheck-calculator-guide-2026" },
                  { label: "Self-Employment Tax Guide 2026",    href: "/blog/self-employment-tax-guide-2026" },
                  { label: "Hourly to Salary Guide 2026",      href: "/blog/hourly-to-salary-guide-2026" },
                  { label: "Rent Affordability Guide 2026",    href: "/blog/rent-affordability-guide-2026" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center gap-1.5 text-[12px] text-green-700
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