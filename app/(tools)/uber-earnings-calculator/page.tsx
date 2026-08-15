import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import UberEarningsClient from "./UberEarningsClient";
import {
  Car,
  BookOpen,
  ChevronRight,
  Calculator,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Fuel,
  TrendingDown,
  Wrench,
  AlertCircle
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Uber Earnings Calculator 2026: Real Take-Home Pay After Gas & Taxes",
  description:
    "Free Uber driver calculator using 2026 IRS 72.5¢ mileage rate. Calculate your exact net profit after gas, depreciation, Uber fees, and self-employment taxes.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/uber-earnings-calculator",
  },
  keywords: [
    "uber earnings calculator",
    "how much do uber drivers make",
    "uber take home pay",
    "uber driver tax calculator",
    "IRS mileage rate 2026",
    "uber gas calculator",
    "is uber worth it 2026",
    "gig economy tax calculator"
  ],
  openGraph: {
    title: "Uber Earnings Calculator 2026 – Free Driver Take-Home Estimator",
    description:
      "Find out exactly how much you're really making driving for Uber after fuel, maintenance, and 15.3% SE tax.",
    url: "https://www.freeuscalculator.in/uber-earnings-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uber Earnings Calculator (2026)",
    description: "Calculate your true Uber driver profit after the 72.5¢/mile IRS deduction.",
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
  name: "Uber Earnings Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates net profit for Uber drivers by subtracting fuel, maintenance, depreciation (via IRS standard mileage rate), and self-employment taxes from gross rideshare revenue.",
  url: "https://www.freeuscalculator.in/uber-earnings-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Earning Calculators", item: "https://www.freeuscalculator.in/earning-calculators" },
    { "@type": "ListItem", position: 3, name: "Uber Earnings Calculator", item: "https://www.freeuscalculator.in/uber-earnings-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "Is Uber driving worth it in 2026?",
    a: "It depends on your city, your vehicle, and your discipline with expenses. In a high-demand metro with a fuel-efficient car during peak hours, it can net $14-$20/hr after all expenses and taxes. In rural markets with an SUV, you may be operating at a loss."
  },
  {
    q: "How much should I set aside for taxes as an Uber driver?",
    a: "The standard guidance is 30-35% of every payout. This covers self-employment tax (15.3%) and federal income tax (10-22%). If you're in a high-tax state like California, set aside closer to 40%."
  },
  {
    q: "What is the IRS standard mileage rate for 2026?",
    a: "The 2026 standard mileage rate is 72.5 cents per mile ($0.725/mile). This single deduction covers fuel, oil, maintenance, insurance, and depreciation."
  },
  {
    q: "Does Uber track my deductible mileage for me?",
    a: "Uber logs miles while passengers are in the car, but this is usually less than your actual deductible miles (which include miles driving to a pickup or waiting for pings). You should use a third-party mileage tracking app."
  },
  {
    q: "Can I deduct my car loan payment as an Uber driver?",
    a: "No, not if you use the standard mileage deduction. The mileage rate already includes a depreciation allowance for the vehicle."
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
  { driver: "Casual", hours: "10 hrs", gross: "$180", expenses: "$55", taxes: "$35", net: "$90" },
  { driver: "Part-time", hours: "20 hrs", gross: "$380", expenses: "$95", taxes: "$72", net: "$213" },
  { driver: "Serious", hours: "30 hrs", gross: "$650", expenses: "$140", taxes: "$120", net: "$390" },
  { driver: "Full-time", hours: "45 hrs", gross: "$1,100", expenses: "$210", taxes: "$198", net: "$692" },
  { driver: "Top earner", hours: "45 hrs", gross: "$1,600", expenses: "$230", taxes: "$290", net: "$1,080" },
];

export default function UberEarningsCalculatorPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-neutral-800 selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-neutral-200/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/earning-calculators" className="hover:text-black transition-colors">Earning Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Uber Earnings</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-widest mb-6">
              <Car size={12} className="text-white" />
              2026 IRS Mileage Rules
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Uber Earnings{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-black">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Stop guessing. Calculate your exact net profit per hour after gas, hidden vehicle depreciation, and 15.3% self-employment taxes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Fuel, label: "Gas & Maintenance" },
                { icon: TrendingDown, label: "Depreciation" },
                { icon: DollarSign, label: "Net Hourly Wage" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-black" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="Uber Take-Home Calculator"
              description="Enter your weekly stats to see your real net wage."
              category="Gig Economy"
              lastUpdated="2026"
            >
              <UberEarningsClient />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      <div className="h-40" />

      {/* ════════════════════════════════════════════════════════════════════
          2026 TAX FACTS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-black py-10 sm:py-12 border-y border-neutral-800 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-8">
            2026 Gig Economy Baselines
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "72.5¢", label: "IRS Mileage Rate", sub: "Standard deduction per mile" },
              { val: "15.3%", label: "SE Tax Rate", sub: "Required for gig workers" },
              { val: "20-28%", label: "Platform Fee", sub: "Average Uber take rate" },
              { val: "30%", label: "Tax Reserve", sub: "Recommended amount to save" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-white mb-2">{val}</p>
                <p className="text-sm font-bold text-neutral-300 mb-1">{label}</p>
                <p className="text-[11px] text-neutral-500 leading-tight">{sub}</p>
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
            <p className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-2">
              Featured Reference
            </p>
            <h2 id="table-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              Weekly Net Profit Scenarios
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Estimated breakdown of what different Uber drivers actually take home.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-[2rem] border border-slate-200/60 shadow-sm bg-white">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Driver Profile
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Gross / Wk
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest hidden sm:table-cell">
                    Expenses
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest hidden sm:table-cell">
                    Taxes
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-black text-[10px] uppercase tracking-widest">
                    Real Take-Home
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {TAX_TABLE.map((row, i) => (
                  <tr key={row.driver} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/30"} hover:bg-neutral-50/50 transition-colors`}>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="font-bold text-slate-900 block">{row.driver}</span>
                      <span className="text-[11px] text-slate-500">{row.hours}</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-700">{row.gross}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-500 hidden sm:table-cell text-red-500">-{row.expenses}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-500 hidden sm:table-cell text-red-500">-{row.taxes}</td>
                    <td className="py-4 px-4 sm:px-6 font-black text-black text-lg">{row.net}</td>
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
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-black flex items-center justify-center shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    The Hidden Costs of Driving for Uber
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">Gas · Depreciation · 15.3% Self Employment Tax</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-black hover:prose-a:text-neutral-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-black p-6 rounded-r-2xl">
                  There's a specific kind of disappointment that hits drivers when they do the math. Your weekly deposit is revenue, not income. What you actually keep — after fuel, wear, taxes, and Uber's cut — is a different and smaller number.
                </p>

                <h3>How to Use the Uber Earnings Calculator</h3>
                <figure className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-black flex items-center justify-center min-h-[200px]">
                  <img 
                    src="/uber-earnings-calculator-screenshot.jpg" 
                    alt="Uber Earnings Calculator Interface" 
                    className="w-full h-auto object-cover"
                  />
                </figure>
                <p>
                  Simply enter your <strong>Total Weekly Payout</strong> from the Uber app, the <strong>Total Miles Driven</strong> (including empty miles!), and how many hours you drove. The calculator strips away the hidden costs of driving—like fuel and depreciation—and factors in self-employment taxes to reveal your <strong>True Net Hourly Wage</strong>.
                </p>

                <h3>What Uber Actually Pays You</h3>
                <p>
                  Uber takes a service fee on every ride. The general range in 2026 is **20–28%** of the total fare. So if a rider pays $28, you might receive $20.16. You are starting the profitability calculation from a number that's already smaller than what the rider paid.
                </p>

                <h3>Fuel, Maintenance, and Depreciation</h3>
                <p>
                  Fuel is visible, but depreciation is the invisible killer. Every mile you put on your car reduces its resale value. The IRS 2026 mileage rate of **72.5¢ per mile** exists because the government recognises this cost is real. If you drive 20,000 miles for Uber this year, that's roughly $7,000 in vehicle value quietly disappearing.
                </p>

                <div className="my-8 bg-neutral-100 border border-neutral-300 rounded-2xl p-6 flex gap-4">
                  <Wrench className="text-black shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-black font-bold mt-0 mb-2">The Standard Mileage Deduction</h4>
                    <p className="text-neutral-700 text-sm m-0 leading-relaxed">
                      For 85–90% of Uber drivers, taking the IRS standard mileage deduction (72.5¢/mile) is vastly better than tracking actual expenses. It covers fuel, oil, maintenance, insurance, and depreciation in one sweep, and heavily reduces your taxable income.
                    </p>
                  </div>
                </div>

                <h3>The 15.3% Self-Employment Tax</h3>
                <p>
                  Because you are an independent contractor, you are responsible for the full 15.3% Self-Employment Tax (Social Security and Medicare). If you've only ever worked W-2 jobs, you're used to paying 7.65% while your employer paid the rest. As an Uber driver, you are both employee and employer.
                </p>
                <p>
                  Check out our detailed <Link href="/self-employment-tax-calculator-usa">Self-Employment Tax Calculator</Link> to understand exactly how this burden works and how you can deduct half of it on your Form 1040.
                </p>

                <h3>Quarterly Estimated Taxes</h3>
                <p>
                  The IRS requires gig workers to pay estimated taxes quarterly (April, June, September, and January). If you wait until tax season to pay the whole bill, you will be hit with underpayment penalties. Our calculator figures out exactly how much you should be setting aside into a tax reserve account each week.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-black to-neutral-800 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle size={16} className="text-neutral-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-neutral-300">
                      Tired of driving?
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">W-2 Job Equivalent</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    See what an Uber income actually translates to at a regular W-2 salaried job where the employer pays half your taxes.
                  </p>
                  <Link href="/hourly-to-salary-calculator" className="inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-200 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Hourly to Salary Converter <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-neutral-500/20 rounded-full blur-2xl" />
              </div>

              {/* Internal Related Links */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "DoorDash Calculator", href: "/doordash-earnings-calculator", icon: Fuel },
                    { title: "Self Employment Tax", href: "/self-employment-tax-calculator-usa", icon: DollarSign },
                    { title: "Paycheck Calculator", href: "/paycheck-calculator", icon: Calculator },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-colors group">
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-black group-hover:text-white transition-colors text-slate-500">
                        <item.icon size={16} />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-black text-sm">{item.title}</span>
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
                  title="Uber Earnings Calculator 2026"
                  url="https://www.freeuscalculator.in/uber-earnings-calculator"
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
          <RelatedCalculators currentTool="uber-earnings-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Uber Driver Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-black transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-black shrink-0 mt-0.5" />
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
      <section className="py-16 sm:py-24 bg-gradient-to-br from-neutral-900 to-black text-white text-center border-t border-neutral-800">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-4">
            Free Gig Economy Tool
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Track Every Mile
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mb-10 leading-relaxed">
            The difference between profitable drivers and drivers operating at a loss is accurate tracking. Start calculating your real take-home today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-black font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-black/50">
              <Calculator size={16} />
              Scroll to Calculator
            </a>
            <Link href="/doordash-earnings-calculator" className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-colors">
              DoorDash Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SEO FOOTER NAV
      ════════════════════════════════════════════════════════════════════ */}
      <nav aria-label="Related calculators navigation" className="bg-black py-10 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6">
            {[
              { href: "/doordash-earnings-calculator",      label: "DoorDash Calculator"          },
              { href: "/self-employment-tax-calculator-usa",label: "Self-Employment Tax"          },
              { href: "/paycheck-calculator",               label: "Paycheck Calculator"          },
              { href: "/salary-after-tax-calculator",       label: "Salary After Tax"             },
              { href: "/hourly-to-salary-calculator",       label: "Hourly to Salary"             },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-neutral-500 hover:text-white transition-colors text-xs font-medium">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-[10px] text-neutral-700">
            Uber Earnings Calculator · FreeUSCalculator.in · 2026 Guidelines
          </p>
        </div>
      </nav>
    </main>
  );
}