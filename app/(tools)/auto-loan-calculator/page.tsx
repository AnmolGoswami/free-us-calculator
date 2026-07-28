import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import AutoLoanCalculator from "@/components/calculators/AutoLoanCalculator";
import {
  Car,
  ChevronRight,
  Calculator,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Zap,
  BookOpen,
  Building,
  Key
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Auto Loan Calculator with Taxes & Fees | 2026 Car Payment",
  description: "Calculate your true out-the-door monthly car payment. Includes trade-in tax savings, dealership fees, and amortization schedules for car buyers.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/auto-loan-calculator",
  },
  keywords: ["auto loan calculator", "car payment calculator", "out the door car price", "car loan tax and fees", "trade in tax savings"],
  openGraph: {
    title: "Auto Loan Calculator 2026",
    description: "Calculate your true out-the-door monthly car payment including trade-ins, sales tax, and dealership fees.",
    url: "https://www.freeuscalculator.in/auto-loan-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Loan Calculator (2026)",
    description: "Calculate your true out-the-door monthly car payment including trade-ins, sales tax, and dealership fees.",
  },
};

// ─── Static JSON-LD ───────────────────────────────────────────────────────────
const SCHEMA_WEBAPP = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Auto Loan Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates monthly car payments including the impact of trade-ins, sales tax, and dealership fees.",
  url: "https://www.freeuscalculator.in/auto-loan-calculator",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Cost Tools", item: "https://www.freeuscalculator.in/cost-calculators" },
    { "@type": "ListItem", position: 3, name: "Auto Loan Calculator", item: "https://www.freeuscalculator.in/auto-loan-calculator" },
  ],
});

const FAQS_DATA = [
  {
    q: "Does a trade-in reduce my sales tax?",
    a: "In most US states, yes! If you buy a $30,000 car and trade in a $10,000 car, you only pay sales tax on the $20,000 difference. This is a massive hidden benefit of trading in your car at the dealership rather than selling it privately.",
  },
  {
    q: "What is an 'Out-The-Door' price?",
    a: "The Out-The-Door (OTD) price is the absolute final total you will pay to drive the car off the lot. It includes the negotiated price of the car, plus state sales tax, title/registration fees, and dealership documentation fees, minus your trade-in value.",
  },
  {
    q: "Should I take a 72 or 84 month loan?",
    a: "Financial experts strongly recommend against loans longer than 60 months. While a 72 or 84-month loan lowers your monthly payment, the interest rate is usually much higher. More importantly, cars depreciate quickly, meaning you risk being 'upside down' (owing more than the car is worth) for years.",
  },
  {
    q: "What are dealership 'Doc Fees'?",
    a: "Documentation fees (Doc Fees) are what the dealership charges to process the paperwork for your sale. Some states legally cap this fee (e.g., California caps it at $85), while in other states (like Florida), dealerships routinely charge $800 to $1,200.",
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

export default function AutoLoanPage() {
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
            <Link href="/cost-calculators" className="hover:text-blue-600 transition-colors">Cost Tools</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Auto Loan</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Car size={12} className="text-blue-600" />
              Automotive & Finance
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Auto Loan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Calculate your true out-the-door monthly car payment including trade-in tax savings, sales tax, and dealership fees.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Key, label: "Out-The-Door Price" },
                { icon: DollarSign, label: "Trade-in Tax Savings" },
                { icon: Calculator, label: "Dealership Fees" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-xs font-bold border border-slate-200/50">
                  <Icon size={14} className="text-blue-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto -mb-40 relative z-20">
            <CalculatorContainer
              title="Advanced Car Payment Estimator"
              description="Calculate the true cost of financing a vehicle."
              category="Auto Finance"
              lastUpdated="2026"
            >
              <AutoLoanCalculator />
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
            Car Buying Rules of Thumb
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "20%", label: "Ideal Down Payment", sub: "Prevents being underwater" },
              { val: "60 Mo", label: "Max Loan Term", sub: "Avoid 72+ month loans" },
              { val: "10%", label: "Transportation Rule", sub: "Max % of income for car+ins" },
              { val: "Pre-Approval", label: "Dealer Leverage", sub: "Bring your own bank rate" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="relative">
                <p className="text-2xl sm:text-3xl font-black text-blue-400 mb-2">{val}</p>
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
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Never Negotiate the Monthly Payment
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">Trade-Ins · Taxes · Out-The-Door Prices</p>
                </div>
              </div>

              <div className="prose prose-slate prose-blue max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                  The biggest mistake you can make at a dealership is answering the question: "What monthly payment are you looking for?" Dealerships use the "Four Square" method to manipulate loan terms, interest rates, and trade-in values to hit your monthly payment, usually resulting in you paying thousands more for the car.
                </p>

                <h3>Always Negotiate the "Out-The-Door" Price</h3>
                <p>
                  You should only negotiate one number: the <strong>Out-The-Door (OTD) price</strong>. This is the final amount required to buy the car, including the negotiated car price, your trade-in, state sales tax, title fees, and the dealership's doc fee.
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0 mt-6">
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-blue-100">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700"><strong>Get Pre-Approved:</strong> Bring an interest rate from your local bank or credit union before walking into the dealership.</span>
                  </li>
                  <li className="flex items-start gap-2 m-0 p-3 bg-white rounded-xl border border-blue-100">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700"><strong>Separate the Trade:</strong> Negotiate the price of the new car <em>first</em>, then discuss your trade-in.</span>
                  </li>
                </ul>

                <div className="my-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex gap-4">
                  <Zap className="text-emerald-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-emerald-900 font-bold mt-0 mb-2">The Hidden Trade-In Tax Advantage</h4>
                    <p className="text-emerald-800 text-sm m-0 leading-relaxed">
                      In over 40 US states, trading in your vehicle at the dealership provides a massive tax break. You only pay sales tax on the <em>difference</em> between the new car price and your trade-in. For example, trading in a $10,000 car with a 7% state tax rate saves you $700 in pure cash. Our calculator automatically factors this in!
                    </p>
                  </div>
                </div>

                <h3>The Trap of 72 and 84-Month Loans</h3>
                <p>
                  To keep monthly payments low on increasingly expensive cars, dealerships now push 72 and 84-month (7-year) loans. This is extremely dangerous. Cars depreciate quickly. If you take out a 7-year loan with a small down payment, you will likely be "upside down" (owing more than the car is worth) by year two. If the car is totaled or you want to sell it, you will have to write a massive check to the bank just to get rid of it.
                </p>
                <p>
                  Aim to follow the <strong>20/4/10 Rule</strong>: Put 20% down, finance for no longer than 4 years (48 months), and keep total car expenses (payment + insurance) under 10% of your gross income.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Building size={16} className="text-blue-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-blue-300">
                      Housing vs Cars
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Buying a House?</h3>
                  <p className="text-sm text-blue-100/80 leading-relaxed mb-6">
                    A large car payment will significantly reduce the amount of mortgage you can qualify for. Check your housing budget first.
                  </p>
                  <Link href="/mortgage-calculator" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Mortgage Calculator <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              </div>

              {/* Internal Related Links */}
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] p-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Mortgage Calculator", href: "/mortgage-calculator", icon: Building },
                    { title: "Loan EMI", href: "/loan-calculator", icon: DollarSign },
                    { title: "Rent Affordability", href: "/rent-affordability-calculator", icon: Key },
                    { title: "Salary After Tax", href: "/salary-after-tax-calculator", icon: Calculator },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-colors group">
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-blue-200 group-hover:text-blue-700 transition-colors text-slate-500">
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
                  title="Auto Loan Calculator 2026"
                  url="https://www.freeuscalculator.in/auto-loan-calculator"
                />
              </div>
            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RELATED CALCULATORS GRID (FULL WIDTH)
        ════════════════════════════════════════════════════════════════ */}
        <div className="pt-10">
          <RelatedCalculators currentTool="auto-loan-calculator" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Auto Financing Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_DATA.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 hover:border-blue-300 transition-colors shadow-sm">
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
    </main>
  );
}
