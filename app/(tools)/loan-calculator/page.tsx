import { Metadata } from "next";
import Link from "next/link";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import LoanCalculatorClient from "./LoanCalculatorClient";
import {
  Banknote,
  ChevronRight,
  Briefcase,
  PiggyBank,
  TrendingDown,
  CheckCircle2
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Loan EMI Calculator 2026: Mortgage, Auto, Personal & Bonds",
  description:
    "Free loan calculator for amortization schedules, extra payment savings, and monthly EMIs. Compare mortgage, auto, personal, and student loans.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/loan-calculator",
  },
};

const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Loan EMI Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Advanced loan calculator supporting mortgages, auto loans, personal loans, student loans, and bonds. Calculates EMIs, total interest, and full amortization schedules.",
  url: "https://www.freeuscalculator.in/loan-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Finance Calculators", item: "https://www.freeuscalculator.in/cost-calculators" },
    { "@type": "ListItem", position: 3, name: "Loan Calculator", item: "https://www.freeuscalculator.in/loan-calculator" },
  ],
});

export default function LoanCalculatorPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO (DARK MODE)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 pt-8 pb-32 px-4 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-900/40 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/cost-calculators" className="hover:text-white transition-colors">Finance Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-white font-medium">Loan EMI</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/30 text-blue-300 text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-500/20">
              <Banknote size={12} className="text-blue-400" />
              Global Amortization Math (2026)
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Loan EMI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              Calculate exact monthly payments, total interest costs, and view full amortization schedules for mortgages, auto loans, and personal loans.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Briefcase, label: "Mortgages", cls: "text-blue-400" },
                { icon: PiggyBank, label: "Extra Payments", cls: "text-emerald-400" },
                { icon: TrendingDown, label: "Amortization", cls: "text-purple-400" },
              ].map(({ icon: Icon, label, cls }) => (
                <div key={label} className="flex items-center gap-2 bg-white/5 text-slate-300 px-4 py-2 rounded-full text-xs font-bold border border-white/10">
                  <Icon size={14} className={cls} />
                  {label}
                </div>
              ))}
            </div>
          </div>
          
          {/* CALCULATOR WRAPPER (DARK BACKGROUND CONTINUES) */}
          <div className="max-w-5xl mx-auto relative z-20 -mb-40">
            <LoanCalculatorClient />
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
              <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">How to Use</p>
              <h2 id="howto-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                How to Calculate Your Loan Cost
              </h2>
            </div>

            <figure className="max-w-4xl mx-auto my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center min-h-[200px]">
              <img 
                src="/loan-calculator-screenshot.jpg" 
                alt="Loan Calculator interface showing the Amortization schedule and extra payment comparison" 
                className="w-full h-auto object-cover"
              />
              <figcaption className="text-center text-sm text-slate-500 bg-slate-50 py-3 border-t border-slate-200 font-medium">
                Example: See how much extra principal payments can save you on total interest.
              </figcaption>
            </figure>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-8">
              {[
                { n: "1", title: "Amount", body: "Enter total loan amount you are borrowing." },
                { n: "2", title: "Rate", body: "Enter your annual interest rate." },
                { n: "3", title: "Term", body: "Set the duration of the loan in years or months." },
                { n: "4", title: "Extra", body: "Add extra payments to see your interest savings." },
                { n: "5", title: "Review", body: "Check the full amortization schedule for exact breakdown." }
              ].map((step) => (
                <div key={step.n} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center flex flex-col items-center group hover:shadow-md hover:border-indigo-100 transition-all">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 font-black flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    {step.n}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </section>

          <article className="prose prose-slate prose-lg max-w-none text-slate-600">
            <h2 className="text-3xl tracking-tight text-slate-900 mt-12">How Does Amortization Work?</h2>
            <p>
              When you take out a standard instalment loan (like a mortgage or an auto loan), your monthly payment is fixed. However, the <em>split</em> between interest and principal changes every month. This process is called <strong>amortization</strong>.
            </p>
            <p>
              In the early years of a 30-year mortgage, almost your entire payment goes toward paying off the interest. Very little goes toward reducing your actual balance (the principal). Over time, as your balance slowly decreases, the interest portion shrinks, and more of your payment starts paying down the principal.
            </p>

            <div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-6 sm:p-8 my-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl -z-10 translate-x-10 -translate-y-10" />
              <h3 className="text-blue-900 font-black flex items-center gap-2 mb-3 mt-0 text-xl">
                <CheckCircle2 size={24} className="text-blue-600" />
                The Power of Extra Payments
              </h3>
              <p className="text-blue-800 text-base leading-relaxed m-0">
                Because interest is calculated based on your remaining balance, any extra money you pay goes <strong>100% toward principal</strong>. This immediately lowers your balance, which means you get charged less interest next month. On a $300,000 mortgage at 7% over 30 years, paying just <strong>$100 extra per month</strong> saves you roughly <strong>$41,000 in total interest</strong> and pays off the loan almost 4 years early! Use the "Extra Payment" field in the calculator to see your exact savings.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          RELATED CALCULATORS
      ════════════════════════════════════════════════════════════════ */}
      <div className="bg-slate-50 border-t border-slate-200">
        <RelatedCalculators currentTool="loan-calculator" />
      </div>

    </main>
  );
}
