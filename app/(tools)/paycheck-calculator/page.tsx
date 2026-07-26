import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import PaycheckCalculatorClient from "./PaycheckCalculatorClient";
import {
  Briefcase,
  BookOpen,
  ChevronRight,
  Clock,
  Calculator,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  MapPin,
  Landmark,
  Building,
  PiggyBank
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Paycheck Calculator 2026 – Take-Home Pay for All 50 US States",
  description:
    "Free paycheck calculator using 2026 IRS federal & state tax brackets. Instantly calculate your exact net take-home pay, FICA, and deductions for all 50 US states.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/paycheck-calculator",
  },
  keywords: [
    "paycheck calculator",
    "take home pay calculator",
    "net pay calculator",
    "salary paycheck calculator",
    "paycheck calculator 2026",
    "california paycheck calculator",
    "texas take home pay",
    "calculate paycheck after taxes",
    "paycheck calculator all 50 states"
  ],
  openGraph: {
    title: "Paycheck Calculator 2026 – Free Take-Home Pay Estimator",
    description:
      "Find out exactly how much you'll take home after federal and state taxes. Accurate for all 50 US states with 2026 IRS tax brackets.",
    url: "https://www.freeuscalculator.in/paycheck-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paycheck Calculator (2026)",
    description: "Calculate your exact take-home pay after taxes for any state.",
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
  name: "Paycheck Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates net take-home pay by deducting federal, state, and FICA taxes from gross wages.",
  url: "https://www.freeuscalculator.in/paycheck-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Tax Calculators", item: "https://www.freeuscalculator.in/tax-calculators" },
    { "@type": "ListItem", position: 3, name: "Paycheck Calculator", item: "https://www.freeuscalculator.in/paycheck-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "How much tax is taken out of my paycheck?",
    a: "For most workers in 2026, total withholdings (federal, state, and FICA) fall between 18% and 35% of gross pay. At $50,000 in a moderate-tax state, expect 20-24% withholding. At $100,000, expect 27-32%."
  },
  {
    q: "What is the Social Security wage base for 2026?",
    a: "The Social Security wage base for 2026 is $184,500. You pay the 6.2% Social Security tax on every dollar up to this amount. Once your wages exceed this in a calendar year, Social Security withholding stops."
  },
  {
    q: "What is the 2026 standard deduction?",
    a: "The 2026 federal standard deduction is $16,100 for single filers, $32,200 for married filing jointly, and $24,150 for head of household."
  },
  {
    q: "How does a 401(k) contribution affect my paycheck?",
    a: "Every dollar you put into a traditional (pre-tax) 401(k) reduces your federal and state taxable income. Contributing $7,500 saves approximately $1,650 in federal income tax (at the 22% bracket) plus state tax savings. Your paycheck decreases, but by less than your contribution amount."
  },
  {
    q: "Which states have no income tax in 2026?",
    a: "Nine states collect no broad-based wage income tax: Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Wyoming, Washington, and New Hampshire."
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const TAX_TABLE = [
  { salary: "$40,000", fed: "$2,568", fica: "$3,060", takeHome: "$34,372" },
  { salary: "$60,000", fed: "$5,918", fica: "$4,590", takeHome: "$49,492" },
  { salary: "$80,000", fed: "$10,294", fica: "$6,120", takeHome: "$63,586" },
  { salary: "$100,000", fed: "$15,794", fica: "$7,650", takeHome: "$76,556" },
  { salary: "$120,000", fed: "$21,294", fica: "$9,180", takeHome: "$89,526" },
  { salary: "$150,000", fed: "$30,544", fica: "$11,475", takeHome: "$107,981" },
];

export default function PaycheckCalculatorPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-emerald-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/tax-calculators" className="hover:text-emerald-600 transition-colors">Tax Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Paycheck Calculator</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Landmark size={12} className="text-emerald-600" />
              All 50 US States · 2026 Brackets
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Paycheck{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Find out exactly how much you'll take home after federal taxes, state taxes, and FICA. Perfect for comparing job offers across different states.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Building, label: "W-2 Employees" },
                { icon: MapPin, label: "State Comparisons" },
                { icon: Calculator, label: "Pre-Tax Deductions" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-emerald-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="Paycheck Calculator"
              description="Calculate your exact take-home pay."
              category="Taxes & Finance"
              lastUpdated="2026"
            >
              <PaycheckCalculatorClient />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      <div className="h-40" />

      {/* ════════════════════════════════════════════════════════════════════
          2026 TAX FACTS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-10 sm:py-12 border-y border-slate-800 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8">
            2026 IRS Key Numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "7.65%", label: "Total FICA Tax", sub: "Automatically withheld" },
              { val: "$16,100", label: "Standard Deduction", sub: "For Single Filers" },
              { val: "9", label: "No-Tax States", sub: "0% state income tax" },
              { val: "$24,500", label: "401(k) Limit", sub: "Pre-tax contribution limit" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-emerald-400 mb-2">{val}</p>
                <p className="text-sm font-bold text-white mb-1">{label}</p>
                <p className="text-[11px] text-slate-400 leading-tight">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20 pb-20">
        
        {/* ════════════════════════════════════════════════════════════════
            QUICK REFERENCE TABLE
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="table-heading">
          <div className="text-center mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">
              Featured Reference
            </p>
            <h2 id="table-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              Federal Tax & Take-Home (Zero State Tax)
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Example breakdown for a Single filer in a state with 0% income tax (like Texas or Florida).
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden rounded-[2rem] border border-slate-200/60 shadow-sm bg-white">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Gross Salary
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest hidden sm:table-cell">
                    Federal Tax
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest hidden sm:table-cell">
                    FICA (7.65%)
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-emerald-700 text-[10px] uppercase tracking-widest">
                    Annual Take-Home
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {TAX_TABLE.map((row, i) => (
                  <tr key={row.salary} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/30"} hover:bg-emerald-50/50 transition-colors`}>
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">{row.salary}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-500 hidden sm:table-cell text-red-500">-{row.fed}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-500 hidden sm:table-cell text-red-500">-{row.fica}</td>
                    <td className="py-4 px-4 sm:px-6 font-black text-emerald-600">{row.takeHome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            COMPREHENSIVE GUIDE WITH INTERNAL LINKS
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="guide-heading">
          <div className="flex flex-col lg:flex-row gap-10 items-start max-w-6xl mx-auto">
            
            {/* Main Article */}
            <article className="flex-1 min-w-0 space-y-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Where Does Your Paycheck Go?
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">FICA · Federal Taxes · State Income Tax</p>
                </div>
              </div>

              <div className="prose prose-slate prose-emerald max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-emerald-600 hover:prose-a:text-emerald-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                  Getting a job offer and wondering what you'll actually bring home? The gap between your gross salary and your net take-home pay trips up millions of Americans every year — and in high-tax states like California or New York, that gap can be genuinely shocking.
                </p>

                <h3>How Your Paycheck is Calculated</h3>
                <p>
                  Every paycheck follows the same basic equation. It's not complicated once you see it laid out clearly:
                </p>
                <p>
                  <code>Net Pay = Gross Pay − Federal Tax − State Tax − FICA − Pre-Tax Deductions</code>
                </p>

                <ul>
                  <li><strong>Gross Pay:</strong> Your total earnings before anything is removed.</li>
                  <li><strong>Federal Income Tax:</strong> Calculated using progressive brackets based on your taxable income.</li>
                  <li><strong>State Income Tax:</strong> Depends entirely on where you live. Nine states collect zero. California goes up to 13.3%.</li>
                  <li><strong>FICA:</strong> Social Security (6.2%) and Medicare (1.45%).</li>
                </ul>

                <div className="my-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 flex gap-4">
                  <PiggyBank className="text-blue-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-blue-900 font-bold mt-0 mb-2">The Power of Pre-Tax Deductions</h4>
                    <p className="text-blue-800 text-sm m-0 leading-relaxed">
                      Pre-tax deductions (like 401(k) contributions, HSA deposits, and health insurance premiums) come out <em>before</em> taxes are calculated. This means they reduce your taxable income, lowering your tax bill at the exact same time you are saving for retirement or paying for healthcare.
                    </p>
                  </div>
                </div>

                <h3>FICA Taxes: Social Security & Medicare</h3>
                <p>
                  FICA stands for Federal Insurance Contributions Act. These are mandatory — there's no way to reduce or avoid them through deductions or filing status (unless you are a non-resident alien on a specific visa). Both you and your employer each pay half of the total FICA obligation.
                </p>
                <p>
                  If you earn $184,500 or more in 2026, your Social Security withholding stops once you hit that threshold. Your last paychecks of the year will be noticeably larger. However, if you are a freelancer, you must pay the full 15.3% yourself. Check out our <Link href="/self-employment-tax-calculator-usa">Self Employment Tax Calculator</Link> for details.
                </p>

                <h3>State Taxes: Texas vs California</h3>
                <p>
                  State income tax is the most variable part of your paycheck. On a $100,000 salary, a single filer in California will pay approximately $5,750 in state income tax and another $1,400 in SDI. In Texas, Florida, or Nevada, they will pay <strong>$0</strong>.
                </p>
                <p>
                  That's over $500 more per month in take-home pay just from living in Texas instead of California. This is why it is so crucial to calculate your exact take-home pay before accepting a job offer in a new state.
                </p>

                <h3>Hourly Workers & Overtime</h3>
                <p>
                  If you are paid by the hour, calculating your annual take-home pay requires multiplying your rate by the actual hours you work (usually 2,080 for a full-time year). If you work overtime, you must calculate that separately at 1.5x. For precise overtime math, use our <Link href="/time-and-half-calculator">Time and a Half Calculator</Link> or our generic <Link href="/hourly-to-salary-calculator">Hourly to Salary Converter</Link>.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-emerald-900 to-teal-950 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign size={16} className="text-emerald-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-300">
                      Bottom Line
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Net Salary Calculator</h3>
                  <p className="text-sm text-emerald-100/80 leading-relaxed mb-6">
                    Looking for a fast, straightforward way to just see your final take-home salary after taxes without digging into the per-paycheck details?
                  </p>
                  <Link href="/salary-after-tax-calculator" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Calculate Net Salary <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
              </div>

              {/* Internal Related Links */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Salary After Tax", href: "/salary-after-tax-calculator", icon: DollarSign },
                    { title: "Hourly to Salary", href: "/hourly-to-salary-calculator", icon: Briefcase },
                    { title: "Self-Employment Tax", href: "/self-employment-tax-calculator-usa", icon: Landmark },
                    { title: "Overtime Calculator", href: "/overtime-calculator", icon: Clock },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-colors group">
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-emerald-200 group-hover:text-emerald-700 transition-colors text-slate-500">
                        <item.icon size={16} />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-emerald-700 text-sm">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6 text-center">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Share This Tool
                </h4>
                <ShareButtons
                  title="Paycheck Calculator 2026"
                  url="https://www.freeuscalculator.in/paycheck-calculator"
                />
              </div>

              {/* AdSense Placeholder */}
              <div className="bg-slate-50 border border-dashed border-slate-300 rounded-[2rem] h-[250px] flex items-center justify-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Advertisement
                </span>
              </div>

            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RELATED CALCULATORS GRID (FULL WIDTH)
        ════════════════════════════════════════════════════════════════ */}
        <div className="pt-10">
          <RelatedCalculators currentTool="paycheck-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Paycheck & Tax Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-emerald-300 transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                  {q}
                </dt>
                <dd className="text-slate-500 text-sm sm:text-base leading-relaxed pl-8">{a}</dd>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 to-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-4">
            100% Free · Accurate Math
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Negotiate Better Salaries
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-10 leading-relaxed">
            Don't get caught off guard by state taxes or FICA withholdings. Calculate exactly what will hit your bank account every two weeks before you sign that offer letter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-emerald-900/50">
              <Calculator size={16} />
              Scroll to Calculator
            </a>
            <Link href="/salary-to-hourly-calculator" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-colors">
              Salary to Hourly Converter
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SEO FOOTER NAV
      ════════════════════════════════════════════════════════════════════ */}
      <nav aria-label="Related calculators navigation" className="bg-slate-950 py-10 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6">
            {[
              { href: "/salary-after-tax-calculator",       label: "Salary After Tax"             },
              { href: "/hourly-to-salary-calculator",       label: "Hourly to Salary"             },
              { href: "/salary-to-hourly-calculator",       label: "Salary to Hourly"             },
              { href: "/overtime-calculator",               label: "Overtime Pay Calculator"      },
              { href: "/self-employment-tax-calculator-usa",label: "Self-Employment Tax"          },
              { href: "/savings-calculator",                label: "Savings Calculator"           },
              { href: "/rent-affordability-calculator",     label: "Rent Affordability"           },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-500 hover:text-emerald-400 transition-colors text-xs font-medium">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-[10px] text-slate-700">
            Paycheck Calculator · FreeUSCalculator.in · 2026 Guidelines
          </p>
        </div>
      </nav>
    </main>
  );
}