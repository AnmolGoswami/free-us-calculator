import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import ContractorTaxCalculator from "@/components/calculators/1099TaxCalculator";
import {
  ShieldCheck,
  Briefcase,
  ChevronRight,
  Calculator,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  Landmark,
  BookOpen
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "1099 Tax Calculator 2026 | Freelance & Independent Contractor",
  description: "Estimate your 1099 taxes for 2026. Instantly calculate Federal, State, and Self-Employment taxes to find your true freelance net income.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/1099-tax-calculator",
  },
  keywords: ["1099 tax calculator", "freelance tax calculator", "independent contractor tax calculator 2026", "self employment tax estimate", "gig worker tax calculator"],
  openGraph: {
    title: "1099 Tax Calculator 2026",
    description: "Calculate your total 1099 taxes including Federal, State, and Self-Employment tax.",
    url: "https://www.freeuscalculator.in/1099-tax-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1099 Tax Calculator (2026)",
    description: "Instantly calculate Federal, State, and Self-Employment taxes to find your true freelance net income.",
  },
};

// ─── Static JSON-LD ───────────────────────────────────────────────────────────
const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "1099 Tax Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates total 1099 taxes including Federal, State, and Self-Employment tax for freelancers and contractors.",
  url: "https://www.freeuscalculator.in/1099-tax-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Tax Calculators", item: "https://www.freeuscalculator.in/tax-calculators" },
    { "@type": "ListItem", position: 3, name: "1099 Tax Calculator", item: "https://www.freeuscalculator.in/1099-tax-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "What is the 1099 tax rate for 2026?",
    a: "As a 1099 contractor, you must pay the Self-Employment Tax rate of 15.3% (12.4% for Social Security and 2.9% for Medicare). In addition to this, you also owe standard Federal and State Income taxes based on your tax bracket.",
  },
  {
    q: "How do business expenses reduce my taxes?",
    a: "Business expenses directly lower your 'Net Business Income'. Since both your Self-Employment Tax and Federal Income Tax are calculated based on your net income, claiming valid business deductions (like software, travel, or home office) is the best way to reduce your total tax bill.",
  },
  {
    q: "Do I have to pay quarterly taxes?",
    a: "Yes. If you expect to owe more than $1,000 in taxes for the year, the IRS requires you to make quarterly estimated tax payments. If you don't pay enough throughout the year, you may face underpayment penalties at tax time.",
  },
  {
    q: "What is the QBI Deduction?",
    a: "The Qualified Business Income (QBI) deduction allows many self-employed individuals to deduct up to 20% of their net business income before calculating their federal income tax, lowering their overall tax burden.",
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

export default function ContractorTaxPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-indigo-200 selection:text-indigo-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/tax-calculators" className="hover:text-indigo-600 transition-colors">Tax Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">1099 Tax Calculator</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Landmark size={12} className="text-indigo-600" />
              2026 Tax Year Ready
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              1099 Tax{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Calculate your total 1099 taxes including Federal, State, and Self-Employment tax. See your true net take-home pay.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: ShieldCheck, label: "1099 Ready" },
                { icon: Briefcase, label: "Gig Workers" },
                { icon: Calculator, label: "Quarterly Estimates" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-indigo-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="1099 Freelance Tax Calculator"
              description="Estimate your total freelance tax burden for 2026."
              category="Tax Calculators"
              lastUpdated="2026"
            >
              <ContractorTaxCalculator />
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
            1099 IRS Rules & Thresholds
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "15.3%", label: "Total SE Tax Rate", sub: "Paid entirely by you" },
              { val: "$16,100", label: "Standard Deduction", sub: "For Single filers in 2026" },
              { val: "20%", label: "QBI Deduction", sub: "Potential business deduction" },
              { val: "4", label: "Quarterly Payments", sub: "Required if owing >$1k" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-indigo-400 mb-2">{val}</p>
                <p className="text-sm font-bold text-white mb-1">{label}</p>
                <p className="text-[11px] text-slate-400 leading-tight">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20 pb-20">
        
        {/* ════════════════════════════════════════════════════════════════
            COMPREHENSIVE GUIDE WITH INTERNAL LINKS
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="guide-heading">
          <div className="flex flex-col lg:flex-row gap-10 items-start max-w-6xl mx-auto">
            
            {/* Main Article */}
            <article className="flex-1 min-w-0 space-y-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    The Freelancer’s Guide to 1099 Taxes
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">Gig Economy · Sole Proprietor · Quarterly Taxes</p>
                </div>
              </div>

              <div className="prose prose-slate prose-indigo max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-indigo-600 hover:prose-a:text-indigo-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-indigo-500 p-6 rounded-r-2xl">
                  When you work as a W2 employee, your employer automatically deducts taxes from your paycheck and pays half of your FICA taxes. As a 1099 Independent Contractor, no taxes are withheld for you, and you must calculate and pay your own estimated taxes.
                </p>

                <h3>W2 vs 1099 Taxes</h3>
                <p>
                  As a <strong>1099 Independent Contractor</strong>, you are considered both the employee and the employer, meaning you must pay the <strong>full 15.3% Self-Employment Tax</strong> yourself. This catches many new freelancers off guard at tax time.
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0 mt-6">
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-indigo-100">
                    <CheckCircle2 size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700">Calculate net business income (Gross - Expenses)</span>
                  </li>
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-indigo-100">
                    <CheckCircle2 size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700">Calculate 15.3% Self-Employment Tax</span>
                  </li>
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-indigo-100">
                    <CheckCircle2 size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700">Calculate standard Federal & State Income Tax</span>
                  </li>
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-indigo-100">
                    <CheckCircle2 size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700">Pay quarterly estimated taxes to the IRS</span>
                  </li>
                </ul>

                <div className="my-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 flex gap-4">
                  <TrendingUp className="text-blue-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-blue-900 font-bold mt-0 mb-2">The "Above-The-Line" Deduction</h4>
                    <p className="text-blue-800 text-sm m-0 leading-relaxed">
                      To help ease the burden of paying both sides of the tax, the IRS allows you to deduct exactly 50% of your Self-Employment tax from your adjusted gross income. You do not need to itemize deductions to claim this!
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign size={16} className="text-indigo-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-indigo-300">
                      W-2 vs 1099
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Going Full-Time?</h3>
                  <p className="text-sm text-indigo-100/80 leading-relaxed mb-6">
                    If you accept a full-time salaried position, your employer will cover half of your FICA taxes, saving you 7.65%.
                  </p>
                  <Link href="/salary-after-tax-calculator" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Calculate Salary Tax <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />
              </div>

              {/* Internal Related Links */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Self-Employment Tax", href: "/self-employment-tax-calculator-usa", icon: Landmark },
                    { title: "Salary After Tax", href: "/salary-after-tax-calculator", icon: DollarSign },
                    { title: "Uber Earnings", href: "/uber-earnings-calculator", icon: Briefcase },
                    { title: "Paycheck Calculator", href: "/paycheck-calculator", icon: Calculator },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition-colors group">
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-indigo-200 group-hover:text-indigo-700 transition-colors text-slate-500">
                        <item.icon size={16} />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-indigo-700 text-sm">{item.title}</span>
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
                  title="1099 Tax Calculator 2026"
                  url="https://www.freeuscalculator.in/1099-tax-calculator"
                />
              </div>
            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RELATED CALCULATORS GRID (FULL WIDTH)
        ════════════════════════════════════════════════════════════════ */}
        <div className="pt-10">
          <RelatedCalculators currentTool="1099-tax-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              1099 Tax Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-indigo-300 transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-indigo-500 shrink-0 mt-0.5" />
                  {q}
                </dt>
                <dd className="text-slate-500 text-sm sm:text-base leading-relaxed pl-8">{a}</dd>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
