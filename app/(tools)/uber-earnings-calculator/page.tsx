import { Metadata } from "next";
import Link from "next/link";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import UberEarningsClient from "./UberEarningsClient";
import {
  Car,
  ChevronRight,
  DollarSign,
  Fuel,
  TrendingDown,
  CheckCircle2
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Uber Earnings Calculator 2026: Real Take-Home Pay After Gas & Taxes",
  description:
    "Free Uber driver calculator using 2026 IRS 72.5¢ mileage rate. Calculate your exact net profit after gas, depreciation, Uber fees, and self-employment taxes.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/uber-earnings-calculator",
  },
};

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

export default function UberEarningsCalculatorPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO (DARK MODE)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 pt-8 pb-32 px-4 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-900/40 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/earning-calculators" className="hover:text-white transition-colors">Earning Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-white font-medium">Uber Earnings</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-900/30 text-amber-300 text-[10px] font-black uppercase tracking-widest mb-6 border border-amber-500/20">
              <Car size={12} className="text-amber-400" />
              2026 IRS Mileage Rules
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Uber Earnings{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              Stop guessing. Calculate your exact net profit per hour after gas, hidden vehicle depreciation, and 15.3% self-employment taxes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Fuel, label: "Gas & Maintenance", cls: "text-amber-400" },
                { icon: TrendingDown, label: "Depreciation", cls: "text-rose-400" },
                { icon: DollarSign, label: "Net Hourly Wage", cls: "text-emerald-400" },
              ].map(({ icon: Icon, label, cls }) => (
                <div key={label} className="flex items-center gap-2 bg-white/5 text-slate-300 px-4 py-2 rounded-full text-xs font-bold border border-white/10">
                  <Icon size={14} className={cls} />
                  {label}
                </div>
              ))}
            </div>
          </div>
          
          {/* CALCULATOR WRAPPER */}
          <div className="max-w-5xl mx-auto relative z-20 -mb-40">
            <UberEarningsClient />
          </div>
        </div>
      </section>

      <div className="h-40" />

      {/* ════════════════════════════════════════════════════════════════════
          CONTENT SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        
        <div>
          {/* HOW TO USE CARDS */}
          <section aria-labelledby="howto-heading" className="mb-16">
            <div className="text-center mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-amber-500 mb-2">How to Use</p>
              <h2 id="howto-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Calculate Your Real Rideshare Income
              </h2>
            </div>

            <figure className="max-w-4xl mx-auto my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center min-h-[200px]">
              <img 
                src="/uber-earnings-calculator-screenshot.jpg" 
                alt="Uber Earnings Calculator interface showing deductions for self-employment tax and vehicle expenses" 
                className="w-full h-auto object-cover"
              />
              <figcaption className="text-center text-sm text-slate-500 bg-slate-50 py-3 border-t border-slate-200 font-medium">
                Example: See your true take-home pay after the IRS 72.5¢ mileage deduction and 15.3% SE tax.
              </figcaption>
            </figure>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-8">
              {[
                { n: "1", title: "Hours", body: "Enter the total hours you spent driving (including wait times)." },
                { n: "2", title: "Gross", body: "Enter your gross payout from Uber before any costs." },
                { n: "3", title: "Tips", body: "Input the tips you received from riders." },
                { n: "4", title: "Expenses", body: "Deduct your estimated fuel and maintenance costs." },
                { n: "5", title: "Review", body: "Check your net hourly wage to see if driving is profitable." }
              ].map((step) => (
                <div key={step.n} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center flex flex-col items-center group hover:shadow-md hover:border-amber-100 transition-all">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 font-black flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                    {step.n}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </section>

          <article className="prose prose-slate prose-lg max-w-none text-slate-600">
            <h2 className="text-3xl tracking-tight text-slate-900 mt-12">The Hidden Costs of Driving for Uber</h2>
            <p>
              When Uber tells you that you made $1,000 this week, that is <em>gross revenue</em>, not profit. Before you can figure out your true hourly wage, you must deduct the hidden costs of running your vehicle as a business.
            </p>
            <p>
              The IRS standard mileage rate for 2026 is <strong>72.5 cents per mile</strong>. This single deduction is designed to cover gas, oil changes, tire wear, insurance, and the massive hidden cost of <strong>vehicle depreciation</strong>. Every mile you drive lowers the resale value of your car.
            </p>

            <div className="bg-amber-50/50 border border-amber-100 rounded-3xl p-6 sm:p-8 my-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/40 rounded-full blur-3xl -z-10 translate-x-10 -translate-y-10" />
              <h3 className="text-amber-900 font-black flex items-center gap-2 mb-3 mt-0 text-xl">
                <CheckCircle2 size={24} className="text-amber-600" />
                Don't Forget the 15.3% SE Tax!
              </h3>
              <p className="text-amber-800 text-base leading-relaxed m-0">
                Because Uber drivers are classified as 1099 Independent Contractors, you are responsible for paying the <strong>Self-Employment (SE) tax</strong>. This tax covers both the employer and employee portions of Medicare and Social Security, totaling <strong>15.3%</strong> of your net profit. Our calculator automatically estimates this tax burden so you aren't surprised when you file your taxes next year.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          RELATED CALCULATORS
      ════════════════════════════════════════════════════════════════ */}
      <div className="bg-slate-50 border-t border-slate-200">
        <RelatedCalculators currentTool="uber-earnings-calculator" />
      </div>

    </main>
  );
}
