import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import LoanCalculatorClient from "./LoanCalculatorClient";
import {
  Banknote,
  BookOpen,
  ChevronRight,
  Calculator,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Briefcase,
  PiggyBank,
  TrendingDown,
  AlertCircle
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Loan EMI Calculator 2026: Mortgage, Auto, Personal & Bonds",
  description:
    "Free loan calculator for amortization schedules, extra payment savings, and monthly EMIs. Compare mortgage, auto, personal, and student loans.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/loan-calculator",
  },
  keywords: [
    "loan calculator",
    "emi calculator",
    "mortgage calculator 2026",
    "auto loan calculator",
    "personal loan calculator",
    "amortization schedule calculator",
    "extra payment savings",
    "student loan calculator"
  ],
  openGraph: {
    title: "Loan Calculator 2026 – EMI & Amortization Schedules",
    description:
      "Calculate your exact monthly payments and see how much extra payments can save you on your mortgage or auto loan.",
    url: "https://www.freeuscalculator.in/loan-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Calculator (2026)",
    description: "Calculate your true loan costs and view full amortization schedules.",
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

const FAQS_DATA = [
  {
    q: "How do I calculate my monthly loan payment?",
    a: "Use the standard amortization formula. Our calculator handles this automatically for any loan amount, rate, and term, applying standard actuarial methods."
  },
  {
    q: "How much do extra payments save on a mortgage?",
    a: "At 7% over 30 years, paying $200 extra per month on a $300,000 mortgage saves approximately $74,000 in total interest and cuts about 7 years off the loan term."
  },
  {
    q: "What is an amortization schedule and how do I read one?",
    a: "An amortization schedule is a month-by-month table showing each payment split into its interest and principal portions, plus the remaining balance. In early months, most of your payment is interest. In final months, most is principal."
  },
  {
    q: "Should I pay off my mortgage early or invest the extra money?",
    a: "Mathematically, if your expected investment return (e.g., 7-8% in index funds) exceeds your mortgage rate, investing theoretically wins. But paying off debt provides a guaranteed, risk-free return and peace of mind."
  },
  {
    q: "What happens to my Indian home loan EMI if I make a prepayment?",
    a: "Most Indian lenders offer two options: reduce your EMI (keeping tenure the same), or reduce your tenure (keeping the same EMI). Reducing tenure almost always saves more interest over the life of the loan."
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
const RATES_TABLE = [
  { type: "30-Year Fixed Mortgage", rate: "6.40% – 6.75%", term: "30 years" },
  { type: "15-Year Fixed Mortgage", rate: "5.75% – 6.15%", term: "15 years" },
  { type: "Auto Loan (New)", rate: "6.50% – 8.00%", term: "48–72 months" },
  { type: "Auto Loan (Used)", rate: "7.50% – 12.00%", term: "36–60 months" },
  { type: "Personal Loan (700 FICO)", rate: "10% – 22%", term: "1–7 years" },
];

export default function LoanCalculatorPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/cost-calculators" className="hover:text-blue-600 transition-colors">Finance Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Loan EMI</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Banknote size={12} className="text-blue-600" />
              Global Amortization Math (2026)
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Loan EMI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Calculate exact monthly payments, total interest costs, and view full amortization schedules for mortgages, auto loans, and personal loans.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Briefcase, label: "Mortgages" },
                { icon: PiggyBank, label: "Extra Payments" },
                { icon: TrendingDown, label: "Amortization" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-blue-600" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="Universal Loan Calculator"
              description="Enter your loan details to view the real cost of borrowing."
              category="Finance"
              lastUpdated="2026"
            >
              <LoanCalculatorClient />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      <div className="h-40" />

      {/* ════════════════════════════════════════════════════════════════════
          2026 FINANCE FACTS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-10 sm:py-12 border-y border-slate-950 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">
            2026 Loan Strategies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "$30k+", label: "Interest Saved", sub: "by adding 1 extra payment yearly" },
              { val: "<36%", label: "Target DTI Ratio", sub: "Max recommended debt-to-income" },
              { val: "60 Mo", label: "Max Auto Term", sub: "Avoid 72+ month car loans" },
              { val: "Fixed", label: "Mortgage Choice", sub: "Provides rate certainty" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-white mb-2">{val}</p>
                <p className="text-sm font-bold text-slate-300 mb-1">{label}</p>
                <p className="text-[11px] text-slate-400/80 leading-tight">{sub}</p>
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
            <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">
              Current Market Snapshot
            </p>
            <h2 id="table-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              Typical Interest Rates (May 2026)
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              US averages based on recent data from major lenders.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-[2rem] border border-slate-200/60 shadow-sm bg-white">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Loan Type
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Rate Range
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Typical Term
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {RATES_TABLE.map((row, i) => (
                  <tr key={row.type} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/30"} hover:bg-blue-50/50 transition-colors`}>
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">{row.type}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-blue-600">{row.rate}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-500">{row.term}</td>
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
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Understanding the Real Cost of Borrowing
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">Amortization · Extra Payments · 15 vs 30 Years</p>
                </div>
              </div>

              <div className="prose prose-slate prose-blue max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                  A low monthly payment doesn't mean a loan is affordable. It just means the pain is stretched out over a longer period, quietly racking up thousands in interest behind the scenes. Our tools expose these hidden costs.
                </p>

                <h3>What Is an Amortization Schedule?</h3>
                <p>
                  An amortization schedule is a month-by-month table showing every single payment split into its interest and principal components, plus your remaining loan balance. In Month 1 of a 30-year mortgage, your payment is almost entirely interest. In Month 360, it is almost entirely principal. This is not the bank cheating you; it's just math.
                </p>

                <div className="my-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-6 flex gap-4">
                  <AlertCircle className="text-indigo-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-indigo-900 font-bold mt-0 mb-2">The Power of Extra Payments</h4>
                    <p className="text-indigo-800 text-sm m-0 leading-relaxed">
                      Paying just $200 extra per month on a $300,000 mortgage at 7% saves approximately $74,000 in interest and cuts nearly 7 years off the loan. Extra principal payments compound dramatically.
                    </p>
                  </div>
                </div>

                <h3>Fixed vs Variable Rate Loans in 2026</h3>
                <p>
                  At current rates, choose <strong>fixed</strong> when you need budgeting certainty, are taking a loan term of 15+ years, or believe rates will stay high. Choose <strong>variable</strong> if you plan to sell or refinance within 3–5 years and can absorb potential payment increases.
                </p>

                <h3>The 72-Month Car Loan Trap</h3>
                <p>
                  72 and 84-month car loans are increasingly common, lowering monthly payments but costing 15–25% more in total interest than a standard 48-month loan. Furthermore, they keep you "underwater" (owing more than the car's value) for the first 2-3 years. Never take an auto loan longer than 60 months.
                </p>

                <h3>Checking Affordability</h3>
                <p>
                  If you want to know if you can afford the rent or mortgage in your city on your current salary, try our <Link href="/rent-affordability-calculator">Rent Affordability Calculator</Link> to ensure you aren't spreading your finances too thin.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <PiggyBank size={16} className="text-blue-200" />
                    <span className="text-xs font-black uppercase tracking-widest text-blue-200">
                      Savings Goals
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Save Before You Borrow</h3>
                  <p className="text-sm text-blue-100/90 leading-relaxed mb-6">
                    See how long it takes to save up a down payment to avoid Private Mortgage Insurance (PMI) altogether.
                  </p>
                  <Link href="/savings-calculator" className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Savings Calculator <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
              </div>

              {/* Internal Related Links */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Rent Affordability", href: "/rent-affordability-calculator", icon: PiggyBank },
                    { title: "Savings Calculator", href: "/savings-calculator", icon: Banknote },
                    { title: "Paycheck Calculator", href: "/paycheck-calculator", icon: Calculator },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-colors group">
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors text-slate-500">
                        <item.icon size={16} />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-blue-700 text-sm">{item.title}</span>
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
                  title="Loan EMI Calculator 2026"
                  url="https://www.freeuscalculator.in/loan-calculator"
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
          <RelatedCalculators currentTool="loan-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Borrowing Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-blue-400 transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" />
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
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 to-black text-white text-center border-t border-slate-800">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-4">
            Free Financial Tool
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Make Smarter Choices
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-10 leading-relaxed">
            See the exact impact of making an extra $100 payment per month on your mortgage. You will be shocked by the savings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-700 font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-black/50">
              <Calculator size={16} />
              Scroll to Calculator
            </a>
            <Link href="/rent-affordability-calculator" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-colors">
              Rent Affordability
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SEO FOOTER NAV
      ════════════════════════════════════════════════════════════════════ */}
      <nav aria-label="Related calculators navigation" className="bg-black py-10 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6">
            {[
              { href: "/savings-calculator",                label: "Savings Calculator"           },
              { href: "/rent-affordability-calculator",     label: "Rent Affordability"           },
              { href: "/paycheck-calculator",               label: "Paycheck Calculator"          },
              { href: "/salary-after-tax-calculator",       label: "Salary After Tax"             },
              { href: "/hourly-to-salary-calculator",       label: "Hourly to Salary"             },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-500 hover:text-white transition-colors text-xs font-medium">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-[10px] text-slate-700">
            Loan EMI Calculator · FreeUSCalculator.in · 2026 Guidelines
          </p>
        </div>
      </nav>
    </main>
  );
}