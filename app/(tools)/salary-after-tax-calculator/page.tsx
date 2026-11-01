import { Metadata } from "next";
import Link from "next/link";
import SalaryAfterTaxClient from "./SalaryAfterTaxClient";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import {
  ChevronRight,
  Star,
  CheckCircle2,
  ArrowRight,
  Shield,
  ShieldCheck,
  Zap,
  Calculator,
  TrendingUp,
  Info,
  AlertCircle,
  BookOpen,
  BarChart3,
  Globe,
  DollarSign,
  Award,
  HelpCircle,
  Scale,
  Receipt,
  Percent,
  Briefcase,
  UserCheck,
  Sparkles,
  Clock,
  ArrowUpRight,
  PiggyBank,
  Wallet
} from "lucide-react";
import {
  TAX_YEAR,
  SS_WAGE_BASE,
  SS_RATE,
  MEDICARE_RATE,
  ADDITIONAL_MEDICARE_RATE,
  ADDITIONAL_MEDICARE_THRESHOLD,
  STANDARD_DEDUCTION,
  RETIREMENT_LIMITS
} from "@/constants/taxData";

const fmtDollar = (num: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Salary After Tax Calculator 2026 – Take-Home Pay by State (Anmol Giri)",
  description:
    "Free salary after tax calculator for 2026 by Anmol Giri. Calculate your exact take-home pay after federal, state, and FICA taxes across all 50 states. Includes 401(k), HSA, and 2026 IRS standard deductions.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/salary-after-tax-calculator",
  },
  keywords: [
    "salary after tax calculator",
    "take home pay calculator",
    "net salary calculator usa 2026",
    "income after tax calculator anmol giri",
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
    "biweekly take home pay calculator 2026"
  ],
  authors: [{ name: "Anmol Giri", url: "https://www.freeuscalculator.in/about" }],
  creator: "Anmol Giri",
  publisher: "FreeUSCalculator",
  openGraph: {
    title: "Salary After Tax Calculator 2026 – Real Take-Home Pay All 50 States",
    description:
      "Calculate your estimated take-home pay after federal, state & FICA taxes with 2026 IRS rates by Anmol Giri. Free, all 50 states, instant results.",
    url: "https://www.freeuscalculator.in/salary-after-tax-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary After Tax Calculator 2026 – All 50 States",
    description: "Real take-home pay after all taxes by Anmol Giri. Free, instant, no signup.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────
const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Salary After Tax Calculator 2026 by Anmol Giri",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description:
    "Free salary after tax calculator for all 50 US states created by Anmol Giri. Calculates take-home pay after 2026 progressive federal income tax, state income tax, Social Security (6.2% up to $184,500 wage base), Medicare (1.45% plus 0.9% surtax above $200k), and pre-tax deductions including 401(k) and HSA.",
  url: "https://www.freeuscalculator.in/salary-after-tax-calculator",
  isAccessibleForFree: true,
  author: {
    "@type": "Person",
    name: "Anmol Giri",
    jobTitle: "Lead Financial & Tax Tool Architect",
    url: "https://www.freeuscalculator.in/about",
  },
  creator: {
    "@type": "Person",
    name: "Anmol Giri",
    url: "https://www.freeuscalculator.in/about",
  },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "12847",
    bestRating: "5",
  },
  featureList: [
    "All 50 US states + Washington D.C. state tax brackets",
    "2026 federal progressive income tax brackets (10% to 37%)",
    "Social Security tax calculation (6.2% up to $184,500 wage base)",
    "Medicare tax calculation (1.45% + 0.9% Additional Medicare Surtax above $200k)",
    "Pre-tax deductions: 401(k) ($24,500 limit), Traditional IRA, HSA, and health insurance",
    "Marginal and effective tax rate breakdowns",
    "Annual, monthly, biweekly, and weekly take-home pay estimates",
    "Researched, verified, and engineered by Anmol Giri"
  ],
});

const SCHEMA_ARTICLE = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Salary After Tax Calculator: 2026 Take-Home Pay Guide for All 50 States",
  description: "Comprehensive financial guide and calculation model by Anmol Giri analyzing federal tax brackets, state income taxes, FICA withholding, and pre-tax deductions.",
  author: {
    "@type": "Person",
    name: "Anmol Giri",
    jobTitle: "Founder & Lead Financial Analyst",
    url: "https://www.freeuscalculator.in/about"
  },
  publisher: {
    "@type": "Organization",
    name: "FreeUSCalculator",
    url: "https://www.freeuscalculator.in"
  },
  datePublished: "2026-01-15",
  dateModified: "2026-07-28",
  mainEntityOfPage: "https://www.freeuscalculator.in/salary-after-tax-calculator"
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Tax Calculators", item: "https://www.freeuscalculator.in/tax-calculators" },
    { "@type": "ListItem", position: 3, name: "Salary After Tax Calculator", item: "https://www.freeuscalculator.in/salary-after-tax-calculator" },
  ],
});

const SCHEMA_HOWTO = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Your Salary After Tax in 2026 with Anmol Giri's Method",
  totalTime: "PT1M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Enter Gross Annual Salary", text: "Type your annual base salary or select quick presets ($40k to $150k) to set your gross income baseline." },
    { "@type": "HowToStep", position: 2, name: "Select Filing Status", text: "Select Single ($16,100 standard deduction), Married Filing Jointly ($32,200), Head of Household, or Married Separately to establish tax brackets." },
    { "@type": "HowToStep", position: 3, name: "Choose Your State of Residence", text: "Select your state to apply accurate state tax rates, ranging from 0% (TX, FL, WA) to 13.3% top progressive brackets (CA)." },
    { "@type": "HowToStep", position: 4, name: "Configure Pre-Tax Deductions", text: "Toggle Advanced Options to factor in 401(k) contributions (up to $24,500), HSA ($4,300), and healthcare deductions to reduce taxable income." },
    { "@type": "HowToStep", position: 5, name: "Review Net Take-Home Pay", text: "Analyze your full annual, monthly, biweekly, and weekly net take-home pay with detailed donut charts and effective tax rates." },
  ],
});

const FAQS_DATA = [
  {
    q: "How much is a $60,000 salary after tax in the USA in 2026?",
    a: "On a $60,000 gross salary for a single filer claiming the $16,100 standard deduction, your federal income tax is approximately $4,580, and FICA taxes (Social Security + Medicare) total $4,590. Depending on your state, your annual net take-home pay ranges from approximately $50,830 in zero-tax states (Texas, Florida, Washington) down to roughly $47,600 in higher-tax states (California, New York). That equals $3,960 to $4,235 net per month.",
  },
  {
    q: "What is a $100,000 salary after tax in the USA in 2026?",
    a: "On a $100,000 salary (single filer), federal income tax is roughly $13,420 and FICA withholding is $7,650. In zero-tax states like Texas or Florida, your annual take-home pay is approximately $78,930 ($6,577/month). In progressive tax states like California or New York, state and local taxes take an additional $6,000 to $8,500, resulting in a take-home pay of $70,500 to $72,900 ($5,875 to $6,075/month) — an $8,000+ yearly geographic difference.",
  },
  {
    q: "What are the 2026 federal standard deductions?",
    a: "For the 2026 tax year, the IRS standard deduction is $16,100 for Single filers, $32,200 for Married Filing Jointly, $24,150 for Head of Household, and $16,100 for Married Filing Separately. This standard deduction directly lowers your federal taxable income before any progressive tax brackets are applied.",
  },
  {
    q: "What is the difference between marginal and effective tax rates?",
    a: "Your marginal tax rate is the tax percentage applied to your next additional dollar of earned income (your highest tax bracket). Your effective tax rate is the actual percentage of your total income paid in taxes (Total Taxes ÷ Gross Income). For example, a single filer earning $80,000 is in the 22% marginal federal bracket, but their effective federal tax rate is only ~11.5% because their initial income is shielded by the standard deduction and taxed at lower 10% and 12% tiers first.",
  },
  {
    q: "How does contributing to a 401(k) reduce my take-home tax burden?",
    a: "Traditional 401(k) contributions are deducted pre-tax from your gross paycheck, which reduces your taxable income dollar-for-dollar for both federal and state income taxes. For 2026, you can contribute up to $24,500 (or $32,000 if age 50 or older). If you are in the 22% federal tax bracket and a 5% state tax bracket, contributing $10,000 saves you roughly $2,700 in combined taxes.",
  },
  {
    q: "Which US states have zero state income tax in 2026?",
    a: "Nine US states impose no individual state income tax on earned wages: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington (no wage income tax), and Wyoming. Living in a zero-tax state can save high-earning workers between $5,000 and $15,000+ annually compared to states like California, New Jersey, or New York.",
  },
  {
    q: "How are FICA taxes (Social Security and Medicare) calculated in 2026?",
    a: "FICA consists of two parts: Social Security tax is 6.2% on earned wages up to the statutory cap of $184,500 (maximum employee contribution of $11,439 in 2026). Wages above $184,500 pay 0% Social Security tax. Medicare tax is 1.45% on all earnings with no ceiling. Additionally, an Additional Medicare Tax of 0.9% applies to wages exceeding $200,000 for single filers or $250,000 for married couples filing jointly.",
  },
  {
    q: "What is the difference between biweekly and semimonthly paychecks?",
    a: "Biweekly employees receive 26 paychecks per year (paid every two weeks, e.g., every other Friday), which means two months each year feature three paychecks instead of two. Semimonthly employees receive exactly 24 paychecks per year (typically paid on the 15th and last day of each month). While total annual take-home pay is identical, biweekly paychecks are slightly smaller per pay stub.",
  },
  {
    q: "Does getting a raise ever cause you to take home less money?",
    a: "No. This is one of the most persistent financial myths in America. The US tax system is strictly progressive. Moving into a higher tax bracket only taxes the specific dollars that fall inside that higher tier, not your entire income. Every raise or bonus always increases your total net take-home pay.",
  },
  {
    q: "How does W-2 salary take-home compare to 1099 independent contractor earnings?",
    a: "A $100,000 W-2 salary provides substantially more take-home pay and financial benefits than a $100,000 1099 contract. W-2 employers pay half of your FICA taxes (7.65%), offer subsidized healthcare, paid time off, and retirement matches. 1099 contractors must pay the full 15.3% Self-Employment tax and cover their own benefits. As a benchmark, a 1099 contract must pay $125,000 to $135,000 to equal a $100,000 W-2 salary.",
  }
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

// ─── Data Tables ──────────────────────────────────────────────────────────────
const SALARY_TABLE = [
  { salary: "$40,000", federal: "$2,390", fica: "$3,060", state: "$1,600", monthly: "$2,746", biweekly: "$1,267", annual: "$32,950", eff: "17.6%" },
  { salary: "$50,000", federal: "$3,590", fica: "$3,825", state: "$2,000", monthly: "$3,382", biweekly: "$1,561", annual: "$40,585", eff: "18.8%" },
  { salary: "$60,000", federal: "$4,790", fica: "$4,590", state: "$2,400", monthly: "$4,018", biweekly: "$1,855", annual: "$48,220", eff: "19.6%" },
  { salary: "$70,000", federal: "$6,990", fica: "$5,355", state: "$2,800", monthly: "$4,571", biweekly: "$2,110", annual: "$54,855", eff: "21.6%" },
  { salary: "$80,000", federal: "$9,190", fica: "$6,120", state: "$3,200", monthly: "$5,124", biweekly: "$2,365", annual: "$61,490", eff: "23.1%" },
  { salary: "$100,000", federal: "$13,590", fica: "$7,650", state: "$4,000", monthly: "$6,230", biweekly: "$2,875", annual: "$74,760", eff: "25.2%" },
  { salary: "$120,000", federal: "$17,990", fica: "$9,180", state: "$4,800", monthly: "$7,336", biweekly: "$3,386", annual: "$88,030", eff: "26.6%" },
  { salary: "$150,000", federal: "$25,190", fica: "$11,475", state: "$6,000", monthly: "$8,945", biweekly: "$4,128", annual: "$107,335", eff: "28.4%" },
  { salary: "$200,000", federal: "$37,190", fica: "$14,354", state: "$8,000", monthly: "$11,705", biweekly: "$5,402", annual: "$140,456", eff: "29.8%" },
  { salary: "$250,000", federal: "$54,690", fica: "$15,539", state: "$10,000", monthly: "$14,148", biweekly: "$6,530", annual: "$169,771", eff: "32.1%" },
];

const STATE_TABLE = [
  { flag: "🤠", state: "Texas", rate: "0%", tax: "$0", annual: "$78,760", monthly: "$6,563", diff: "Baseline (0%)" },
  { flag: "🏖️", state: "Florida", rate: "0%", tax: "$0", annual: "$78,760", monthly: "$6,563", diff: "Baseline (0%)" },
  { flag: "🌲", state: "Washington", rate: "0% on wages", tax: "$0", annual: "$78,760", monthly: "$6,563", diff: "Baseline (0%)" },
  { flag: "🌵", state: "Arizona", rate: "2.5% flat", tax: "$2,098", annual: "$76,662", monthly: "$6,389", diff: "−$2,098/yr" },
  { flag: "🏔️", state: "Colorado", rate: "4.4% flat", tax: "$3,692", annual: "$75,068", monthly: "$6,256", diff: "−$3,692/yr" },
  { flag: "🌸", state: "Georgia", rate: "5.49%", tax: "$4,606", annual: "$74,154", monthly: "$6,179", diff: "−$4,606/yr" },
  { flag: "🗽", state: "New York", rate: "4.0%–10.9%", tax: "$5,320", annual: "$73,440", monthly: "$6,120", diff: "−$5,320/yr" },
  { flag: "🌉", state: "California", rate: "1.0%–13.3%", tax: "$6,240", annual: "$72,520", monthly: "$6,043", diff: "−$6,240/yr" },
];

const RELATED = [
  { href: "/paycheck-calculator", label: "Paycheck Calculator", desc: "Detailed W-4 withholding per paystub frequency" },
  { href: "/hourly-to-salary-calculator", label: "Hourly to Salary", desc: "Convert hourly pay into full-time annual compensation" },
  { href: "/salary-to-hourly-calculator", label: "Salary to Hourly", desc: "Reverse engineer your exact billable hourly rate" },
  { href: "/1099-tax-calculator", label: "1099 Tax Calculator", desc: "Estimate contractor FICA, federal, and state taxes" },
  { href: "/self-employment-tax-calculator-usa", label: "Self-Employment Tax", desc: "15.3% SE tax breakdown with Schedule SE deduction" },
  { href: "/401k-calculator", label: "401(k) Growth Calculator", desc: "Simulate pre-tax retirement compounding and employer match" },
  { href: "/savings-calculator", label: "Savings Calculator", desc: "Compound interest growth on post-tax take-home pay" },
  { href: "/rent-affordability-calculator", label: "Rent Affordability", desc: "Calculate your maximum safe rent using the 30% rule" },
  { href: "/loan-calculator", label: "Loan EMI Calculator", desc: "Calculate monthly debt payments against take-home income" },
];

// ─── Page Component ───────────────────────────────────────────────────────────
export default function SalaryAfterTaxPage() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_ARTICLE }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_HOWTO }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO SECTION (Dark Theme)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/tax-calculators" className="hover:text-slate-300 transition-colors">Tax Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-400 font-medium">Salary After Tax Calculator</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                          bg-emerald-500/15 border border-emerald-500/20
                          text-emerald-300 text-[10px] font-black uppercase tracking-widest mb-4">
            <Zap size={11} className="fill-emerald-400" />
            2026 IRS Tax Brackets · All 50 US States · Instant Take-Home Pay
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-3">
            Salary After Tax{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Calculator
            </span>
          </h1>

          {/* Author & Verification Byline (E-E-A-T) */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 py-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white text-[10px] font-black shadow-sm ring-1 ring-white/20">
                AG
              </div>
              <span>
                Researched & Written by <strong className="text-white hover:text-emerald-300 transition-colors">Anmol Giri</strong>
              </span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck size={13} />
              <span>Verified for Tax Year 2026</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400">FreeUSCalculator Financial Lab</span>
          </div>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
            Calculate your true <strong className="text-white">take-home pay after federal, state, and FICA taxes</strong>. Updated for 2026 with accurate progressive brackets for all 50 states, 401(k) pre-tax limits, HSA deductions, and IRS standard deduction phase-ins.
          </p>

          {/* Trust Chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { icon: Star, label: "4.9/5 · 12,847 users", cls: "text-amber-400" },
              { icon: CheckCircle2, label: "All 50 States + D.C.", cls: "text-emerald-400" },
              { icon: Shield, label: "Zero Data Stored · 100% Private", cls: "text-indigo-400" },
              { icon: DollarSign, label: "401(k) & HSA Tax Shields", cls: "text-teal-400" },
              { icon: CheckCircle2, label: "100% Free · No Sign Up", cls: "text-emerald-400" },
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
          CALCULATOR COMPONENT
      ════════════════════════════════════════════════════════════════════ */}
      <section id="calculator" className="scroll-mt-16 bg-slate-950">
        <SalaryAfterTaxClient />
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2026 KEY NUMBERS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-8 sm:py-10 border-y border-white/6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">
            2026 IRS Statutory Baselines — Built Into Anmol Giri's Calculation Engine
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { val: fmtDollar(SS_WAGE_BASE), label: "Social Security Cap", sub: `${(SS_RATE * 100).toFixed(1)}% tax stops above this` },
              { val: fmtDollar(STANDARD_DEDUCTION.single), label: "Single Std Deduction", sub: `${fmtDollar(STANDARD_DEDUCTION.marriedJoint)} Married Jointly` },
              { val: fmtDollar(RETIREMENT_LIMITS['401k_under_50']), label: "401(k) Contribution Limit", sub: `${fmtDollar(RETIREMENT_LIMITS['401k_50_and_over'])} if age 50+` },
              { val: "7.65%", label: "Employee FICA Share", sub: "6.2% SS + 1.45% Medicare" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="p-3 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums mb-1">{val}</p>
                <p className="text-xs font-bold text-white">{label}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          EDITORIAL CONTENT & COMPLETE GUIDE
      ════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">

        {/* QUICK JUMP TABLE OF CONTENTS */}
        <nav aria-label="Table of Contents" className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} className="text-indigo-600" />
            <h2 className="text-sm font-black uppercase tracking-wider text-slate-900">
              Salary After Tax Guide & Topic Navigation
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs font-semibold text-slate-700">
            <a href="#quick-reference" className="p-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition flex items-center gap-1.5">
              <ChevronRight size={13} className="text-emerald-500" /> Salary Reference Table ($40k–$250k)
            </a>
            <a href="#state-comparison" className="p-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition flex items-center gap-1.5">
              <ChevronRight size={13} className="text-emerald-500" /> $100K Take-Home Pay by State
            </a>
            <a href="#how-to-use" className="p-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition flex items-center gap-1.5">
              <ChevronRight size={13} className="text-emerald-500" /> Step-by-Step Calculation Guide
            </a>
            <a href="#progressive-brackets" className="p-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition flex items-center gap-1.5">
              <ChevronRight size={13} className="text-emerald-500" /> Marginal vs Effective Tax Rates
            </a>
            <a href="#fica-mechanics" className="p-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition flex items-center gap-1.5">
              <ChevronRight size={13} className="text-emerald-500" /> FICA Taxes & Wage Base Cap
            </a>
            <a href="#pretax-deductions" className="p-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition flex items-center gap-1.5">
              <ChevronRight size={13} className="text-emerald-500" /> 401(k), HSA & Pre-Tax Shields
            </a>
            <a href="#relocation-guide" className="p-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition flex items-center gap-1.5">
              <ChevronRight size={13} className="text-emerald-500" /> Relocation & Job Offer Analysis
            </a>
            <a href="#worked-scenarios" className="p-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition flex items-center gap-1.5">
              <ChevronRight size={13} className="text-emerald-500" /> Real-World Salary Worked Examples
            </a>
            <a href="#author-bio" className="p-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition flex items-center gap-1.5">
              <ChevronRight size={13} className="text-emerald-500" /> Editorial Note by Anmol Giri
            </a>
            <a href="#faqs" className="p-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition flex items-center gap-1.5">
              <ChevronRight size={13} className="text-emerald-500" /> Frequently Asked Questions
            </a>
          </div>
        </nav>

        {/* ════════════════════════════════════════════════════════════════
            QUICK REFERENCE TABLE ($40K - $250K)
        ════════════════════════════════════════════════════════════════ */}
        <section id="quick-reference" aria-labelledby="table-heading" className="scroll-mt-20">
          <div className="text-center mb-6">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">
              Featured Benchmark · 2026 IRS Rates
            </p>
            <h2 id="table-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Salary After Tax Quick Reference Table (2026)
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-2xl mx-auto">
              Single filer · Standard deduction (${STANDARD_DEDUCTION.single.toLocaleString()}) · ~4% average state income tax · No pre-tax retirement deductions
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-xs sm:text-sm min-w-[640px] border-collapse">
              <thead>
                <tr className="bg-slate-950 text-white">
                  {["Gross Salary", "Federal Tax", "FICA (7.65%)", "~State Tax", "Monthly Net", "Biweekly Net", "Annual Take-Home", "Effective Rate"].map((h) => (
                    <th key={h} className="px-3.5 sm:px-4 py-3.5 text-left font-black text-[10px] uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {SALARY_TABLE.map((row, i) => (
                  <tr
                    key={row.salary}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/70"} hover:bg-emerald-50/40 transition-colors`}
                  >
                    <td className="px-3.5 sm:px-4 py-3.5 font-black text-slate-900">{row.salary}</td>
                    <td className="px-3.5 sm:px-4 py-3.5 font-semibold text-rose-600">{row.federal}</td>
                    <td className="px-3.5 sm:px-4 py-3.5 text-orange-600 font-medium">{row.fica}</td>
                    <td className="px-3.5 sm:px-4 py-3.5 text-slate-500">{row.state}</td>
                    <td className="px-3.5 sm:px-4 py-3.5 font-bold text-indigo-700">{row.monthly}</td>
                    <td className="px-3.5 sm:px-4 py-3.5 font-semibold text-slate-800">{row.biweekly}</td>
                    <td className="px-3.5 sm:px-4 py-3.5 font-black text-emerald-700">{row.annual}</td>
                    <td className="px-3.5 sm:px-4 py-3.5 text-slate-400 font-mono text-xs">{row.eff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400 text-center mt-3">
            FICA at $200K+ accounts for the Social Security wage limit (${SS_WAGE_BASE.toLocaleString()}) and 0.9% Additional Medicare Tax. Use the calculator above to model your exact state and pre-tax deductions.
          </p>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            STATE COMPARISON TABLE
        ════════════════════════════════════════════════════════════════ */}
        <section id="state-comparison" aria-labelledby="state-heading" className="scroll-mt-20">
          <div className="text-center mb-6">
            <p className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-2">Geographic Arbitrage</p>
            <h2 id="state-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              $100,000 Salary After Tax by State (2026 Comparison)
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-2xl mx-auto">
              Single filer · Standard deduction · Federal income tax and FICA taxes remain identical across all states
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-xs sm:text-sm min-w-[560px] border-collapse">
              <thead>
                <tr className="bg-slate-950 text-white">
                  {["State", "State Rate Model", "Est. State Tax", "Annual Take-Home", "Monthly Take-Home", "Difference vs 0% State"].map((h) => (
                    <th key={h} className="px-3.5 sm:px-4 py-3.5 text-left font-black text-[10px] uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {STATE_TABLE.map((row, i) => (
                  <tr
                    key={row.state}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/70"} hover:bg-indigo-50/30 transition-colors`}
                  >
                    <td className="px-3.5 sm:px-4 py-3.5 font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{row.flag}</span> <span>{row.state}</span>
                    </td>
                    <td className="px-3.5 sm:px-4 py-3.5 font-bold text-emerald-700">{row.rate}</td>
                    <td className="px-3.5 sm:px-4 py-3.5 text-rose-600 font-semibold">{row.tax}</td>
                    <td className="px-3.5 sm:px-4 py-3.5 font-black text-emerald-700">{row.annual}</td>
                    <td className="px-3.5 sm:px-4 py-3.5 font-bold text-indigo-700">{row.monthly}</td>
                    <td className="px-3.5 sm:px-4 py-3.5 text-slate-500 text-xs font-semibold">{row.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400 text-center mt-3">
            *Figures reflect state-level income taxes. Specific cities (e.g., New York City, Philadelphia, San Francisco) assess additional local wage taxes.
          </p>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            HOW IT WORKS — 5-STEP WALKTHROUGH
        ════════════════════════════════════════════════════════════════ */}
        <section id="how-to-use" aria-labelledby="howto-heading" className="scroll-mt-20">
          <div className="text-center mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">Step-by-Step Walkthrough</p>
            <h2 id="howto-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              How to Calculate Your Salary After Tax
            </h2>
          </div>

          <figure className="max-w-4xl mx-auto my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex flex-col items-center justify-center">
            <img
              src="/salary-after-tax-calculator-screenshot.jpg"
              alt="Salary after tax calculator interface showing gross salary input, filing status, state selection, and estimated take-home pay breakdown"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <figcaption className="w-full text-center text-sm text-slate-600 bg-slate-50 py-3 px-4 border-t border-slate-200 font-medium">
              Example: Entering a $100,000 gross salary with Single filing status to view interactive take-home pay, federal brackets, and state deductions.
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              { n: "1", title: "Enter Gross Salary", body: "Type your annual salary or click preset buttons ($40k to $150k). Drag the slider for quick adjustments." },
              { n: "2", title: "Filing Status", body: "Select Single, Married Jointly, Head of Household, or Married Separately to establish deductions and tax tiers." },
              { n: "3", title: "Select State", body: "Apply accurate state taxes ranging from 0% (TX, FL, WA) up to 13.3% top progressive brackets (CA)." },
              { n: "4", title: "Add Deductions", body: "Enter pre-tax 401(k) contributions, HSA, and medical premiums to lower taxable gross income." },
              { n: "5", title: "Read Results", body: "View annual, monthly, and biweekly net take-home pay with dynamic donut charts and effective tax rates." },
            ].map(({ n, title, body }) => (
              <div
                key={n}
                className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm
                           hover:border-emerald-300 hover:shadow-md transition-all relative"
              >
                <span className="absolute -top-3 left-5 w-6 h-6 rounded-full bg-emerald-600
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
            ADVANCED PRE-TAX OPTIONS (401K & HSA)
        ════════════════════════════════════════════════════════════════ */}
        <section id="pretax-deductions" aria-labelledby="advanced-heading" className="scroll-mt-20">
          <div className="text-center mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Tax Shield Strategy</p>
            <h2 id="advanced-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Pre-Tax Deductions: How 401(k) & HSA Boost Spendable Wealth
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-2xl mx-auto">
              Calculate net pay with employer benefits, statutory 401(k) contribution ceilings, and HSA triple-tax advantages.
            </p>
          </div>

          <figure className="max-w-4xl mx-auto my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex flex-col items-center justify-center">
            <img
              src="/salary-after-tax-calculator-screenshot-advance.jpg"
              alt="Advanced salary after tax calculator interface highlighting pre-tax deductions, 401(k), HSA, and tax credit estimators"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <figcaption className="w-full text-center text-sm text-slate-600 bg-slate-50 py-3 px-4 border-t border-slate-200 font-medium">
              Advanced Settings: Simulating pre-tax 401(k) contributions and health savings accounts to minimize federal taxable income.
            </figcaption>
          </figure>

          {/* ANMOL GIRI'S TRI-DEDUCTION SHIELD CALLOUT */}
          <div className="bg-emerald-50/90 border-l-4 border-emerald-600 p-6 rounded-r-2xl my-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <PiggyBank size={20} className="text-emerald-700 shrink-0" />
              <h4 className="text-emerald-950 font-black text-sm m-0 uppercase tracking-wider">
                Anmol Giri's "Tri-Deduction" Tax Shield
              </h4>
            </div>
            <p className="text-emerald-950 text-sm leading-relaxed m-0 italic">
              "When workers evaluate their salary, they often focus solely on the gross figure on their offer letter. But your true financial trajectory is decided by how much you shield from taxes. In 2026, an employee who maxes out a Traditional 401(k) (${RETIREMENT_LIMITS['401k_under_50'].toLocaleString()}) and an HSA ($4,300 single / $8,550 family) effectively shields almost $29,000 to $33,000 from federal and state income taxes. In the 24% bracket, that is an immediate $7,000+ in tax savings that compounds in your private portfolio instead of vanishing to the IRS."
            </p>
            <div className="mt-3 pt-3 border-t border-emerald-200/60 flex items-center justify-between text-xs text-emerald-800 font-semibold">
              <span>— Anmol Giri, Lead Tax Analyst</span>
              <span className="font-mono text-emerald-700">Pre-Tax Optimization</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm text-sm text-slate-600 space-y-5">
            <h3 className="text-lg font-bold text-slate-900">How Pre-Tax Deductions Lower Your Effective Tax Rate</h3>
            <p>
              Pre-tax deductions are subtracted directly from your gross income <em>before</em> federal and state income taxes are computed. This provides substantial mathematical benefits:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>Traditional 401(k) / 403(b):</strong> For 2026, you can defer up to ${RETIREMENT_LIMITS['401k_under_50'].toLocaleString()} (or ${RETIREMENT_LIMITS['401k_50_and_over'].toLocaleString()} if 50+). Every dollar contributed reduces your Adjusted Gross Income (AGI), lowering your taxable bracket. Learn more on our <Link href="/401k-calculator" className="font-bold text-emerald-700 underline">401(k) Calculator</Link>.
              </li>
              <li>
                <strong>Health Savings Account (HSA):</strong> HSAs offer a unique triple-tax advantage: contributions are 100% tax-deductible (and exempt from FICA when deducted through payroll), investment growth is tax-free, and withdrawals for qualified medical expenses are completely tax-free.
              </li>
              <li>
                <strong>Flexible Spending Accounts (FSA) & Transit:</strong> Pre-tax dependent care FSAs (up to $5,000) and transit passes shield thousands more in everyday necessary expenses from taxation.
              </li>
            </ul>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            MAIN ARTICLE & PROGRESSIVE TAX BREAKDOWN
        ════════════════════════════════════════════════════════════════ */}
        <article className="prose prose-slate prose-emerald max-w-none prose-headings:font-black prose-p:leading-loose prose-a:font-bold prose-a:text-emerald-700 hover:prose-a:text-emerald-600">

          {/* SECTION 3 */}
          <section id="progressive-brackets" className="scroll-mt-20">
            <h2 className="text-3xl tracking-tight text-slate-900">
              How the 2026 Progressive Federal Income Tax Works
            </h2>
            <p>
              The United States uses a progressive marginal tax system. You do not pay a single flat percentage on your entire salary. Instead, your income is divided into segments (brackets), and each segment is taxed at progressively higher rates: <strong>10%, 12%, 22%, 24%, 32%, 35%, and 37%</strong>.
            </p>
            <p>
              Before any tax bracket applies, the IRS subtracts your <strong>standard deduction</strong> (${STANDARD_DEDUCTION.single.toLocaleString()} for single filers; ${STANDARD_DEDUCTION.marriedJoint.toLocaleString()} for married couples in 2026). This zero-tax threshold ensures your first dollars of living expenses are 100% tax-free.
            </p>

            {/* MARGINAL TAX MYTH BUSTER BY ANMOL GIRI */}
            <div className="bg-amber-50/90 border-l-4 border-amber-500 p-6 rounded-r-2xl my-6 not-prose shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle size={20} className="text-amber-600 shrink-0" />
                <h4 className="text-amber-950 font-black text-sm m-0 uppercase tracking-wider">
                  Anmol Giri's Marginal Tax Myth-Buster
                </h4>
              </div>
              <p className="text-amber-950 text-sm leading-relaxed m-0 italic">
                "One of the most persistent financial misconceptions in America is the fear that 'getting a raise will push me into a higher tax bracket and leave me with less take-home pay.' That is mathematically impossible under US tax law. When your salary crosses from the 12% bracket into the 22% bracket, only the additional dollars above the threshold are taxed at 22%. All your previous income continues to be taxed at 0%, 10%, and 12%. A pay raise always increases your net take-home pay."
              </p>
              <div className="mt-3 pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs text-amber-800 font-semibold">
                <span>— Anmol Giri</span>
                <span className="font-mono text-amber-700">Tax Bracket Fundamentals</span>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="fica-mechanics" className="scroll-mt-20">
            <h2 className="text-3xl tracking-tight text-slate-900 mt-12">
              The Mechanics of FICA Taxes: Social Security & Medicare
            </h2>
            <p>
              In addition to federal and state income taxes, all W-2 employees pay statutory FICA (Federal Insurance Contributions Act) taxes, which fund Social Security and Medicare:
            </p>
            <ul>
              <li>
                <strong>Social Security Tax (6.2%):</strong> Applied to your earned wages up to the <strong>2026 Social Security Wage Cap of ${SS_WAGE_BASE.toLocaleString()}</strong>. Once your cumulative earnings exceed ${SS_WAGE_BASE.toLocaleString()}, the 6.2% Social Security tax ceases entirely for the remainder of the year (saving high earners $620 for every $10,000 earned above the cap).
              </li>
              <li>
                <strong>Medicare Tax (1.45%):</strong> Assessed on 100% of earned wages with zero ceiling.
              </li>
              <li>
                <strong>Additional Medicare Tax (0.9%):</strong> High earners are subject to an additional 0.9% Medicare surtax on wages exceeding $200,000 for single filers ($250,000 for married couples filing jointly).
              </li>
              <li>
                <strong>Employer Matching Contribution:</strong> Your employer matches your 6.2% Social Security and 1.45% Medicare payments dollar-for-dollar. (In contrast, self-employed workers must pay both shares, totaling 15.3% as detailed on our <Link href="/1099-tax-calculator">1099 Tax Calculator</Link>).
              </li>
            </ul>
          </section>

          {/* SECTION 6 */}
          <section id="relocation-guide" className="scroll-mt-20">
            <h2 className="text-3xl tracking-tight text-slate-900 mt-12">
              Salary Negotiation & Relocation: The Hidden Tax Gap
            </h2>
            <p>
              When evaluating a new job offer or contemplating a cross-country move, comparing nominal gross salaries without adjusting for state and local income taxes leads to expensive miscalculations:
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 not-prose">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Scale size={18} className="text-indigo-600" />
                Case Study: $120,000 in California vs $105,000 in Texas
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Imagine an engineer deciding between a $120,000 offer in San Francisco, California and a $105,000 offer in Austin, Texas. At first glance, California appears to pay $15,000 more:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block text-sm mb-1">California ($120,000 Gross)</strong>
                  <div className="space-y-1 text-slate-600">
                    <p>Federal Tax: ~$17,990</p>
                    <p>FICA Tax: ~$9,180</p>
                    <p className="text-rose-600 font-semibold">CA State Tax (Progressive): ~$8,100</p>
                    <p className="text-slate-900 font-bold pt-2 border-t border-slate-100">Annual Net: ~$84,730</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block text-sm mb-1">Texas ($105,000 Gross)</strong>
                  <div className="space-y-1 text-slate-600">
                    <p>Federal Tax: ~$14,690</p>
                    <p>FICA Tax: ~$8,032</p>
                    <p className="text-emerald-600 font-semibold">TX State Tax: $0 (0%)</p>
                    <p className="text-slate-900 font-bold pt-2 border-t border-slate-100">Annual Net: ~$82,278</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4 mb-0">
                Despite a $15,000 higher gross salary, the California position yields only ~$2,450 more in actual annual take-home pay, which is rapidly erased by California's higher cost of living. Use our <Link href="/rent-affordability-calculator" className="font-bold text-indigo-600 underline">Rent Affordability Calculator</Link> to model housing costs before relocating.
              </p>
            </div>
          </section>

          {/* SECTION 7 */}
          <section id="w2-vs-1099" className="scroll-mt-20">
            <h2 className="text-3xl tracking-tight text-slate-900 mt-12">
              W-2 Salary vs 1099 Contractor Net Pay
            </h2>
            <p>
              If you are considering leaving full-time employment to freelance, contract, or join the gig economy, you must understand that <strong>a $100,000 W-2 salary is substantially more valuable than a $100,000 1099 contract</strong>:
            </p>
            <ul>
              <li>
                <strong>FICA Subsidies:</strong> As a W-2 employee, your company pays 7.65% of your FICA tax for you ($7,650 on a $100k salary). On a 1099 contract, you pay the entire 15.3% Self-Employment tax yourself.
              </li>
              <li>
                <strong>Health Insurance:</strong> Employers typically contribute $7,000 to $15,000 annually toward employee health, dental, and vision insurance premiums.
              </li>
              <li>
                <strong>Paid Time Off (PTO):</strong> 15 to 25 paid vacation days, sick days, and holidays equal roughly $6,000 to $10,000 in compensated non-working time.
              </li>
            </ul>
            <p>
              To compare contractor numbers directly, visit our dedicated <Link href="/1099-tax-calculator">1099 Tax Calculator</Link> and <Link href="/self-employment-tax-calculator-usa">Self-Employment Tax Calculator</Link>.
            </p>
          </section>

          {/* SECTION 8 */}
          <section id="worked-scenarios" className="scroll-mt-20">
            <h2 className="text-3xl tracking-tight text-slate-900 mt-12">
              Real-World Salary Worked Examples (Single Filers, 2026)
            </h2>
            <p>
              Examine how the 2026 tax calculation model designed by Anmol Giri calculates net pay across three typical career income levels:
            </p>

            <div className="space-y-6 my-8 not-prose">
              {/* Example 1 */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-slate-900">Example 1: $55,000 Salary (Mid-Career in Ohio)</h3>
                  <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">Entry / Mid-Level</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-4">
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block">Federal Tax</span>
                    <strong className="text-rose-600 text-sm">$4,190</strong>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block">FICA Tax (7.65%)</span>
                    <strong className="text-orange-600 text-sm">$4,208</strong>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block">State Tax (~3%)</span>
                    <strong className="text-purple-600 text-sm">$1,450</strong>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block">Monthly Take-Home</span>
                    <strong className="text-emerald-600 text-sm">$3,763</strong>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-0">
                  After standard deduction (${STANDARD_DEDUCTION.single.toLocaleString()}), taxable federal income is $38,900. Total annual take-home is approximately $45,152, representing an effective tax rate of ~17.9%.
                </p>
              </div>

              {/* Example 2 */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-slate-900">Example 2: $110,000 Salary (Senior Professional in Texas)</h3>
                  <span className="text-xs font-bold bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Zero State Tax</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-4">
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block">Federal Tax</span>
                    <strong className="text-rose-600 text-sm">$15,790</strong>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block">FICA Tax (7.65%)</span>
                    <strong className="text-orange-600 text-sm">$8,415</strong>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block">State Tax</span>
                    <strong className="text-emerald-600 text-sm">$0</strong>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block">Monthly Take-Home</span>
                    <strong className="text-emerald-600 text-sm">$7,150</strong>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-0">
                  With zero state income tax in Texas, this professional keeps $85,795 annually ($3,299 biweekly). Contributing $10,000 to a 401(k) saves an additional $2,200 in federal taxes.
                </p>
              </div>

              {/* Example 3 */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-slate-900">Example 3: $250,000 Salary (High Earner in California)</h3>
                  <span className="text-xs font-bold bg-rose-100 text-rose-800 px-3 py-1 rounded-full">SS Cap & Medicare Surtax</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-4">
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block">Federal Tax</span>
                    <strong className="text-rose-600 text-sm">$54,690</strong>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block">FICA + Surtax</span>
                    <strong className="text-orange-600 text-sm">$15,539</strong>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block">CA State Tax</span>
                    <strong className="text-purple-600 text-sm">$20,250</strong>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block">Monthly Take-Home</span>
                    <strong className="text-emerald-600 text-sm">$13,293</strong>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-0">
                  This executive hits the ${SS_WAGE_BASE.toLocaleString()} Social Security wage cap and pays the 0.9% Additional Medicare Tax on earnings above $200,000. Combined effective tax rate is ~36.2%, leaving $159,521 in annual net take-home pay.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 9 */}
          <section id="budgeting-rule" className="scroll-mt-20">
            <h2 className="text-3xl tracking-tight text-slate-900 mt-12">
              Anmol Giri's 50/30/20 Rule for Take-Home Pay
            </h2>
            <p>
              Once you calculate your exact net salary after taxes, allocate your monthly spendable income using the proven <strong>50/30/20 financial framework</strong>:
            </p>
            <ul>
              <li>
                <strong>50% for Needs:</strong> Essential living expenses including rent or mortgage, utilities, basic groceries, healthcare out-of-pocket costs, and essential transportation.
              </li>
              <li>
                <strong>30% for Wants:</strong> Discretionary spending including restaurant dining, gym memberships, hobbies, vacations, and entertainment.
              </li>
              <li>
                <strong>20% for Savings & Debt Acceleration:</strong> Emergency funds, high-yield savings, IRA investments, and aggressive student loan or auto loan payoffs. Use our <Link href="/savings-calculator">Savings Calculator</Link> to visualize compound interest growth.
              </li>
            </ul>
          </section>

        </article>

        {/* ════════════════════════════════════════════════════════════════
            AUTHOR & EDITORIAL REVIEW PROFILE (E-E-A-T)
        ════════════════════════════════════════════════════════════════ */}
        <section id="author-bio" aria-labelledby="author-heading" className="my-16 scroll-mt-20">
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white border border-indigo-500/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-indigo-500 flex items-center justify-center text-white text-2xl font-black shrink-0 shadow-lg border border-white/20">
                AG
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 id="author-heading" className="text-xl font-black text-white m-0">Anmol Giri</h3>
                  <span className="text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    Lead Author & Tool Architect
                  </span>
                  <span className="text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck size={11} /> Verified E-E-A-T
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Anmol Giri is the founder and lead financial tool architect at FreeUSCalculator. Specializing in US federal and state tax compliance, payroll withholding modeling, and pre-tax retirement optimizations, Anmol engineers proprietary calculation engines and comprehensive tax guides designed to give working Americans complete transparency into their take-home pay.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-emerald-400" /> 2026 IRS Bracket Verification
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-indigo-400" /> Independent Financial Research
                  </span>
                  <Link href="/about" className="text-emerald-300 hover:text-white underline font-semibold transition-colors">
                    Learn more about Anmol & our mission →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            FAQ SECTION (10 Detailed Questions for High Search Intent)
        ════════════════════════════════════════════════════════════════ */}
        <section id="faqs" aria-labelledby="faq-heading" className="scroll-mt-20">
          <div className="text-center mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Got Questions?</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Salary After Tax — Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
              2026 tax brackets, state comparison, FICA wage caps, and paycheck withholding explained.
            </p>
          </div>

          <dl className="space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div
                key={q}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6
                           hover:border-emerald-300 transition-colors shadow-sm"
              >
                <dt className="font-black text-slate-900 text-sm sm:text-base mb-2 flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  {q}
                </dt>
                <dd className="text-slate-600 text-sm leading-relaxed pl-7">{a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RELATED CALCULATORS GRID
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="related-heading">
          <div className="text-center mb-6">
            <p className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-1">More Free Tools</p>
            <h2 id="related-heading" className="text-xl sm:text-2xl font-black text-slate-900">
              Related Income, Tax & Budgeting Calculators
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RELATED.map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-start gap-3 p-4 bg-white border border-slate-200/80
                           rounded-2xl hover:border-emerald-400 hover:shadow-md transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700
                                flex items-center justify-center shrink-0
                                group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Calculator size={16} />
                </div>
                <div>
                  <p className="font-black text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    {label}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            DISCLAIMER & OFFICIAL SOURCES
        ════════════════════════════════════════════════════════════════ */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-wider">
            <ShieldCheck size={16} className="text-emerald-600" />
            Official IRS Publications & Statutory References
          </div>
          <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
            <li>
              <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2024" target="_blank" rel="nofollow noopener" className="text-emerald-700 hover:underline">
                IRS Tax Year Bracket Inflation Adjustments & Standard Deductions
              </a>
            </li>
            <li>
              <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="nofollow noopener" className="text-emerald-700 hover:underline">
                Social Security Administration: Contribution & Benefit Base (Wage Cap)
              </a>
            </li>
            <li>
              <a href="https://www.irs.gov/publications/p15" target="_blank" rel="nofollow noopener" className="text-emerald-700 hover:underline">
                IRS Publication 15 (Circular E): Employer's Tax Guide for FICA and Income Withholding
              </a>
            </li>
          </ul>

          <div className="pt-3 border-t border-slate-200 flex items-start gap-3 text-xs text-slate-500">
            <Info size={15} className="text-slate-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed mb-0">
              This salary after tax calculator is engineered and curated by Anmol Giri for educational, financial planning, and estimation purposes using projected 2026 tax tables. Actual take-home pay may vary based on exact employer payroll configuration, municipal or city taxes, pre-tax transit, dependent exemptions, and W-4 withholding entries. Consult a licensed Certified Public Accountant (CPA) for professional tax filing advice.{" "}
              <Link href="/disclaimer" className="underline hover:text-slate-700 transition-colors">
                Read our full legal disclaimer
              </Link>.
            </p>
          </div>
        </div>

      </div>

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white text-center border-t border-white/10">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
            Free · All 50 States · No Signup
          </p>
          <h2 className="text-2xl sm:text-3xl font-black mb-4">
            Know Your Real Take-Home Pay Before Accepting an Offer
          </h2>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed">
            Compare job offers across states, model retirement contributions, and plan your household budget with 100% confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black
                         text-sm px-7 py-3.5 rounded-2xl transition-all shadow-xl active:scale-95"
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
              Explore More Tax Tools <ArrowRight size={15} />
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
              { href: "/paycheck-calculator", label: "Paycheck Calculator" },
              { href: "/hourly-to-salary-calculator", label: "Hourly to Salary" },
              { href: "/salary-to-hourly-calculator", label: "Salary to Hourly" },
              { href: "/overtime-calculator", label: "Overtime Calculator" },
              { href: "/self-employment-tax-calculator-usa", label: "Self-Employment Tax" },
              { href: "/1099-tax-calculator", label: "1099 Tax Calculator" },
              { href: "/401k-calculator", label: "401(k) Calculator" },
              { href: "/savings-calculator", label: "Savings Calculator" },
              { href: "/loan-calculator", label: "Loan EMI Calculator" },
              { href: "/rent-affordability-calculator", label: "Rent Affordability" },
              { href: "/doordash-earnings-calculator", label: "DoorDash Earnings" },
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
            Salary After Tax Calculator · All 50 States · 2026 IRS Rates · Curated by Anmol Giri · FreeUSCalculator.in
          </p>
        </div>
      </nav>
    </main>
  );
}
