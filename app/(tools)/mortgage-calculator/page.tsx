import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import MortgageCalculator from "@/components/calculators/MortgageCalculator";
import {
  ShieldCheck,
  Building,
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
  title: "Mortgage Calculator with Taxes & Insurance | 2026 PITI Estimator",
  description: "Estimate your total monthly mortgage payment (PITI). Automatically calculates PMI, property taxes, and amortization schedules for 2026 homebuyers.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/mortgage-calculator",
  },
  keywords: ["mortgage calculator", "home loan calculator", "PITI calculator", "mortgage payment with taxes and insurance", "PMI calculator 2026"],
  openGraph: {
    title: "Mortgage Calculator 2026",
    description: "Calculate your true monthly mortgage payment including principal, interest, property taxes, homeowners insurance, and PMI.",
    url: "https://www.freeuscalculator.in/mortgage-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Calculator (2026)",
    description: "Estimate your total monthly mortgage payment (PITI). Automatically calculates PMI, property taxes, and amortization schedules.",
  },
};

// ─── Static JSON-LD ───────────────────────────────────────────────────────────
const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Mortgage Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates total monthly mortgage payment including principal, interest, property taxes, homeowners insurance, and PMI.",
  url: "https://www.freeuscalculator.in/mortgage-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Cost Tools", item: "https://www.freeuscalculator.in/cost-calculators" },
    { "@type": "ListItem", position: 3, name: "Mortgage Calculator", item: "https://www.freeuscalculator.in/mortgage-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "What does PITI stand for?",
    a: "PITI stands for Principal, Interest, Taxes, and Insurance. These four components make up your total monthly mortgage payment. Many basic calculators only show Principal and Interest, which can be dangerously misleading when budgeting for a home.",
  },
  {
    q: "What is PMI and how do I avoid it?",
    a: "PMI (Private Mortgage Insurance) is required by lenders if your down payment is less than 20% of the home's purchase price. It protects the lender if you default on the loan. You can avoid PMI by making a 20% down payment, or request to have it removed once you build 20% equity in the home.",
  },
  {
    q: "How does the loan term affect my payment?",
    a: "A 15-year mortgage will have significantly higher monthly payments than a 30-year mortgage, but you will pay far less total interest over the life of the loan. A 30-year mortgage offers lower monthly payments, giving you more flexibility in your monthly budget.",
  },
  {
    q: "Are property taxes and home insurance included in my mortgage?",
    a: "Usually, yes. Most lenders require you to pay a portion of your annual property taxes and homeowners insurance each month along with your mortgage payment. The lender holds these funds in an escrow account and pays the bills on your behalf when they are due.",
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

export default function MortgageCalculatorPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_WEBAPP }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_BREADCRUMB }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_FAQ }} />

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200/60 pt-8 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/cost-calculators" className="hover:text-amber-600 transition-colors">Cost Tools</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Mortgage Calculator</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Building size={12} className="text-amber-600" />
              Real Estate & Housing
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Mortgage{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Calculate your true monthly mortgage payment including principal, interest, property taxes, homeowners insurance, and PMI.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: ShieldCheck, label: "PITI Accurate" },
                { icon: TrendingUp, label: "Amortization" },
                { icon: Calculator, label: "Auto-PMI Logic" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-amber-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="Advanced Mortgage Calculator"
              description="Estimate your total home loan cost for 2026."
              category="Real Estate"
              lastUpdated="2026"
            >
              <MortgageCalculator />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      <div className="h-40" />

      {/* ════════════════════════════════════════════════════════════════════
          FACTS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-10 sm:py-12 border-y border-slate-800 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8">
            Mortgage Rules of Thumb
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "20%", label: "Ideal Down Payment", sub: "To avoid paying PMI" },
              { val: "30%", label: "Affordability Rule", sub: "Max % of income for housing" },
              { val: "1-2%", label: "Property Tax", sub: "Typical annual rate in US" },
              { val: "Escrow", label: "Tax & Insurance", sub: "Often bundled in payment" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-amber-400 mb-2">{val}</p>
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
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Understanding Your Mortgage Payment
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">PITI · Escrow · Private Mortgage Insurance</p>
                </div>
              </div>

              <div className="prose prose-slate prose-amber max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-amber-600 hover:prose-a:text-amber-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-amber-500 p-6 rounded-r-2xl">
                  When you buy a home, your monthly mortgage payment consists of much more than just the loan amount. A basic calculator that only looks at "Principal and Interest" will severely underestimate your actual monthly costs. You need to calculate PITI.
                </p>

                <h3>How to Use the Mortgage Calculator</h3>
                <figure className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center min-h-[200px]">
                  <img 
                    src="/mortgage-calculator-screenshot.jpg" 
                    alt="Mortgage Calculator Interface" 
                    className="w-full h-auto object-cover"
                  />
                </figure>
                <p>
                  Simply enter your <strong>Home Price</strong>, <strong>Down Payment</strong>, <strong>Interest Rate</strong>, and <strong>Loan Term</strong>. The calculator will automatically estimate your Property Taxes, Homeowners Insurance, and even calculate Private Mortgage Insurance (PMI) if your down payment is below 20%. You get a perfect breakdown of your exact monthly cost!
                </p>

                <h3>What is PITI?</h3>
                <p>
                  PITI is an acronym that stands for <strong>Principal, Interest, Taxes, and Insurance</strong>. Lenders use this figure to determine if you can afford the loan.
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0 mt-6">
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-amber-100">
                    <CheckCircle2 size={18} className="text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700"><strong>Principal:</strong> The portion going to pay down your loan balance.</span>
                  </li>
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-amber-100">
                    <CheckCircle2 size={18} className="text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700"><strong>Interest:</strong> The fee the bank charges to lend you the money.</span>
                  </li>
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-amber-100">
                    <CheckCircle2 size={18} className="text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700"><strong>Taxes:</strong> Annual property taxes assessed by your local county.</span>
                  </li>
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-amber-100">
                    <CheckCircle2 size={18} className="text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700"><strong>Insurance:</strong> Homeowners insurance to protect the property.</span>
                  </li>
                </ul>

                <div className="my-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 flex gap-4">
                  <TrendingUp className="text-blue-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-blue-900 font-bold mt-0 mb-2">Escrow Accounts</h4>
                    <p className="text-blue-800 text-sm m-0 leading-relaxed">
                      Instead of making you pay a massive tax and insurance bill once a year, lenders will usually divide these annual costs by 12 and add them to your monthly payment. They hold this money in an "Escrow" account and pay the bills for you when they are due.
                    </p>
                  </div>
                </div>

                <h3>The PMI Trap</h3>
                <p>
                  If you put down less than 20% of the home's purchase price, the lender will force you to pay <strong>Private Mortgage Insurance (PMI)</strong>. This insurance protects the lender (not you!) in case you stop making payments.
                </p>
                <p>
                  PMI typically costs between 0.5% and 1.5% of the total loan amount every year, divided into monthly payments. Our calculator automatically estimates this cost if you enter a down payment of less than 20%. The good news? You can ask your lender to remove PMI once you have paid off enough of the loan to reach 20% equity.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-amber-900 to-slate-900 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Building size={16} className="text-amber-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-amber-300">
                      Renting vs Buying
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Is Renting Better?</h3>
                  <p className="text-sm text-amber-100/80 leading-relaxed mb-6">
                    Use our 30% rule calculator to see exactly how much rent you can safely afford based on your current income.
                  </p>
                  <Link href="/rent-affordability-calculator" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Rent Affordability <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl" />
              </div>

              {/* Internal Related Links */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Loan EMI", href: "/loan-calculator", icon: Landmark },
                    { title: "Salary After Tax", href: "/salary-after-tax-calculator", icon: DollarSign },
                    { title: "Rent Affordability", href: "/rent-affordability-calculator", icon: Building },
                    { title: "Paycheck Calculator", href: "/paycheck-calculator", icon: Calculator },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 border border-transparent hover:border-amber-100 transition-colors group">
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-amber-200 group-hover:text-amber-700 transition-colors text-slate-500">
                        <item.icon size={16} />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-amber-700 text-sm">{item.title}</span>
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
                  title="Mortgage Calculator 2026"
                  url="https://www.freeuscalculator.in/mortgage-calculator"
                />
              </div>
            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RELATED CALCULATORS GRID (FULL WIDTH)
        ════════════════════════════════════════════════════════════════ */}
        <div className="pt-10">
          <RelatedCalculators currentTool="mortgage-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Mortgage Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-amber-300 transition-colors shadow-sm">
                <dt className="font-black text-slate-900 text-base sm:text-lg mb-2 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-amber-500 shrink-0 mt-0.5" />
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
