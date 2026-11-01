import { Metadata } from "next";
import Link from "next/link";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import SelfEmploymentTaxClient from "./SelfEmploymentTaxClient";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Briefcase,
  BookOpen,
  ChevronRight,
  Clock,
  AlertCircle,
  Calculator,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  MapPin,
  Landmark,
  Receipt
} from "lucide-react";

export const dynamic = "force-dynamic";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Self-Employment Tax Calculator 2026 – Estimate SE Tax, 1099, & Quarterly Payments",
  description:
    "Free self-employment tax calculator to estimate SE tax (15.3%), Social Security, Medicare, and quarterly taxes. Perfect for freelancers, 1099 workers, and gig economy workers in 2026.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/self-employment-tax-calculator-usa",
  },
  keywords: [
    "self employment tax calculator",
    "self employed tax calculator",
    "freelancer tax calculator",
    "1099 tax calculator",
    "SE tax calculator 2026",
    "how to calculate self employment tax",
    "estimate quarterly taxes for self employed",
    "uber driver tax calculator",
    "doordash tax calculator"
  ],
  openGraph: {
    title: "Self-Employment Tax Calculator 2026 – Free 1099 SE Tax Estimator",
    description:
      "Calculate your self-employment tax, Social Security, Medicare, and quarterly taxes instantly. Built for freelancers and 1099 workers.",
    url: "https://www.freeuscalculator.in/self-employment-tax-calculator-usa",
    siteName: "Free US Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Employment Tax Calculator (2026)",
    description: "Estimate your freelance taxes, SE tax (15.3%), and quarterly payments instantly.",
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
  name: "Self-Employment Tax Calculator 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: "Calculates total Self-Employment Tax (SE Tax), including Social Security and Medicare, and estimates total tax burden for 1099 freelancers in 2026.",
  url: "https://www.freeuscalculator.in/self-employment-tax-calculator-usa",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const SCHEMA_BREADCRUMB = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.freeuscalculator.in" },
    { "@type": "ListItem", position: 2, name: "Tax Calculators", item: "https://www.freeuscalculator.in/tax-calculators" },
    { "@type": "ListItem", position: 3, name: "Self-Employment Tax", item: "https://www.freeuscalculator.in/self-employment-tax-calculator-usa" },
  ],
});

const FAQS_DATA = [
  {
    q: "What is the Self-Employment Tax Rate for 2026?",
    a: "The self-employment tax rate is 15.3%. This consists of two parts: 12.4% for Social Security (old-age, survivors, and disability insurance) and 2.9% for Medicare (hospital insurance). You pay this on your net earnings, not your gross income."
  },
  {
    q: "Do I have to pay both the employer and employee portion?",
    a: "Yes. When you are a W-2 employee, you pay 7.65% and your employer pays the other 7.65%. As a self-employed freelancer or 1099 contractor, you are both the employer and the employee, so you must pay the full 15.3% yourself."
  },
  {
    q: "Can I deduct half of my self-employment tax?",
    a: "Yes! The IRS allows you to deduct 50% of your self-employment tax as an adjustment to income on Form 1040. This is an 'above-the-line' deduction, meaning you don't have to itemize to claim it, and it lowers your overall income tax burden."
  },
  {
    q: "Do I pay self-employment tax on my gross income?",
    a: "No. You only pay SE tax on your net business profit (Gross Income minus Business Expenses). Furthermore, the IRS only applies the 15.3% tax rate to 92.35% of your net earnings."
  },
  {
    q: "What is the Social Security Wage Base limit for 2026?",
    a: "For 2026, the Social Security portion of the SE tax (12.4%) only applies to the first $184,500 of your earnings. However, the Medicare portion (2.9%) applies to all your net earnings, with an Additional Medicare Tax of 0.9% kicking in for high earners (over $200k Single or $250k Married)."
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
  { gross: "$25,000", expenses: "$5,000", net: "$20,000", seTax: "$2,825", deductible: "$1,413" },
  { gross: "$50,000", expenses: "$10,000", net: "$40,000", seTax: "$5,651", deductible: "$2,825" },
  { gross: "$75,000", expenses: "$15,000", net: "$60,000", seTax: "$8,477", deductible: "$4,238" },
  { gross: "$100,000", expenses: "$20,000", net: "$80,000", seTax: "$11,303", deductible: "$5,651" },
  { gross: "$150,000", expenses: "$25,000", net: "$125,000", seTax: "$17,661", deductible: "$8,830" },
  { gross: "$250,000", expenses: "$35,000", net: "$215,000", seTax: "$29,489", deductible: "$14,744" },
];

export default function SelfEmploymentTaxPage() {
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
            <Link href="/tax-calculators" className="hover:text-amber-600 transition-colors">Tax Calculators</Link>
            <ChevronRight size={11} />
            <span className="text-slate-900 font-medium">Self-Employment Tax</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black uppercase tracking-widest mb-6">
              <Landmark size={12} className="text-amber-600" />
              2026 Tax Year Ready
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Self-Employment Tax{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Calculator
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Calculate your full 15.3% SE tax, Social Security, Medicare, and find out exactly how much you should be setting aside for quarterly estimated taxes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: ShieldCheck, label: "1099 Ready" },
                { icon: Briefcase, label: "Gig Workers" },
                { icon: Calculator, label: "Quarterly Estimates" },
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
              title="Self-Employment Tax Calculator"
              description="Estimate your SE tax and total tax burden for 2026."
              category="Taxes & Finance"
              lastUpdated="2026"
            >
              <SelfEmploymentTaxClient />
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
            2026 IRS Rules & Thresholds
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "15.3%", label: "Total SE Tax Rate", sub: "12.4% SS + 2.9% Medicare" },
              { val: "$184,500", label: "SS Wage Base", sub: "SS tax caps out above this" },
              { val: "92.35%", label: "Taxable Portion", sub: "Multiplier on net earnings" },
              { val: "50%", label: "Deductible Portion", sub: "Reduces income tax burden" },
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
            QUICK REFERENCE TABLE
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="table-heading">
          <div className="text-center mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">
              Featured Reference
            </p>
            <h2 id="table-heading" className="text-2xl sm:text-3xl font-black text-slate-900">
              SE Tax by Income Level (2026)
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Example breakdown for a Single filer with standard business expenses.
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden rounded-[2rem] border border-slate-200/60 shadow-sm bg-white">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Gross Income
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest">
                    Net Profit
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-amber-700 text-[10px] uppercase tracking-widest">
                    Total SE Tax
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-black text-slate-600 text-[10px] uppercase tracking-widest hidden sm:table-cell">
                    Above-The-Line Deduction
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {TAX_TABLE.map((row, i) => (
                  <tr key={row.gross} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/30"} hover:bg-amber-50/50 transition-colors`}>
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">{row.gross}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-500">{row.net}</td>
                    <td className="py-4 px-4 sm:px-6 font-black text-amber-600">{row.seTax}</td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-500 hidden sm:table-cell text-green-600">+{row.deductible}</td>
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
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 id="guide-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    The Freelancer’s Guide to 1099 Taxes
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-2">Gig Economy · Sole Proprietor · Quarterly Taxes</p>
                </div>
              </div>

              <div className="prose prose-slate prose-amber max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:font-bold prose-a:text-amber-600 hover:prose-a:text-amber-700 prose-p:leading-loose">
                
                <p className="lead text-lg text-slate-700 font-medium bg-slate-50 border-l-4 border-amber-500 p-6 rounded-r-2xl">
                  If you drive for Uber, deliver for DoorDash, or run your own freelance business, your taxes are vastly different from a standard employee's. Because you don't have an employer withholding taxes from your paycheck, you are fully responsible for the dreaded 15.3% Self-Employment Tax.
                </p>

                <h3>How to Use the SE Tax Calculator</h3>
                <figure className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center min-h-[200px]">
                  <img 
                    src="/self-employment-tax-calculator-screenshot.jpg" 
                    alt="Self Employment Tax Calculator Interface" 
                    className="w-full h-auto object-cover"
                  />
                </figure>
                <p>
                  Simply enter your expected <strong>Gross Income</strong> and any <strong>Business Expenses</strong>. The calculator will instantly determine your Net Profit and calculate exactly how much you owe for the 15.3% SE tax, including the deductible portion for your 1040!
                </p>

                <h3>Why is SE Tax So High?</h3>
                <p>
                  When you work a W-2 job, the IRS requires your employer to pay 7.65% in payroll taxes on your behalf, and they deduct the other 7.65% directly from your <Link href="/paycheck-calculator">paycheck</Link>. 
                </p>
                <p>
                  When you are a freelancer or contractor, the IRS views you as <strong>both the employer and the employee</strong>. This means you must pay the full 15.3% burden yourself. This catches many new freelancers off guard at tax time, leading to massive, unexpected tax bills and underpayment penalties.
                </p>

                <h3>How the Calculation Actually Works</h3>
                <p>
                  You do not pay SE tax on your Gross Income. You pay it on your <strong>Net Profit</strong> (which is your income after all business deductions, like the 72.5¢/mile standard mileage rate in 2026).
                </p>
                <p>
                  Even then, the IRS applies a special multiplier. You only pay the 15.3% tax on <strong>92.35%</strong> of your Net Profit.
                </p>
                <p>
                  <code>(Net Profit × 0.9235) × 0.153 = Total SE Tax</code>
                </p>

                <div className="my-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 flex gap-4">
                  <TrendingUp className="text-blue-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-blue-900 font-bold mt-0 mb-2">The "Above-The-Line" Deduction</h4>
                    <p className="text-blue-800 text-sm m-0 leading-relaxed">
                      To help ease the burden of paying both sides of the tax, the IRS allows you to deduct exactly 50% of your Self-Employment tax from your adjusted gross income. You do not need to itemize deductions to claim this! It is an automatic adjustment that lowers your regular income tax burden.
                    </p>
                  </div>
                </div>

                <h3>Quarterly Estimated Taxes (Form 1040-ES)</h3>
                <p>
                  The US tax system is "pay-as-you-go". Because you don't have withholding, if you expect to owe more than $1,000 in taxes for the year, you are legally required to make quarterly estimated payments to the IRS. If you wait until April to pay your entire tax bill, the IRS will hit you with underpayment penalties and interest.
                </p>
                <p>
                  Our calculator automatically divides your total estimated tax liability by 4, giving you the exact amount you should send to the IRS every quarter (April 15, June 15, September 15, and January 15).
                </p>

                <h3>How to Legally Reduce Your Tax Burden</h3>
                <p>
                  The absolute best way to lower your SE tax is to track every single legitimate business expense. Every dollar you claim in expenses reduces your Net Profit, which reduces both your SE tax <em>and</em> your Income tax.
                </p>
                <ul>
                  <li><strong>Mileage:</strong> If you use your personal car for Uber, DoorDash, or driving to clients, track your miles. At 72.5 cents per mile in 2026, this is a massive deduction.</li>
                  <li><strong>Home Office:</strong> If you use a dedicated part of your home exclusively for business, you can deduct a portion of your rent or mortgage. (Check out our <Link href="/rent-affordability-calculator">Rent Calculator</Link> if you're planning a move).</li>
                  <li><strong>Retirement:</strong> Opening a SEP-IRA or Solo 401(k) allows you to shelter tens of thousands of dollars from income tax (though it does not reduce SE tax).</li>
                </ul>

                <h3>The S-Corp Strategy</h3>
                <p>
                  Once your freelance business is netting over $80,000 to $100,000 a year, you should consult a CPA about electing S-Corporation status. As an S-Corp, you can pay yourself a "reasonable salary" (which is subject to the 15.3% SE tax) and take the rest of the profit as an "owner's draw" or distribution (which is <strong>exempt</strong> from SE tax, saving you thousands of dollars). You can test different net take-home and state tax scenarios on our dedicated <Link href="/1099-tax-calculator" className="font-bold text-amber-600 underline">1099 Tax Calculator</Link>.
                </p>

              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-[340px] shrink-0 space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Callout Card */}
              <div className="bg-gradient-to-br from-amber-900 to-orange-950 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign size={16} className="text-amber-300" />
                    <span className="text-xs font-black uppercase tracking-widest text-amber-300">
                      W-2 vs 1099
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Going Full-Time?</h3>
                  <p className="text-sm text-amber-100/80 leading-relaxed mb-6">
                    If you accept a full-time salaried position, your employer will cover half of your FICA taxes, saving you 7.65%.
                  </p>
                  <Link href="/salary-after-tax-calculator" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-bold w-full justify-center">
                    Calculate Salary Tax <ArrowRight size={14} />
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
                    { title: "1099 Tax Calculator", href: "/1099-tax-calculator", icon: Receipt },
                    { title: "Salary After Tax", href: "/salary-after-tax-calculator", icon: DollarSign },
                    { title: "Hourly to Salary", href: "/hourly-to-salary-calculator", icon: Briefcase },
                    { title: "Paycheck Calculator", href: "/paycheck-calculator", icon: Landmark },
                    { title: "Overtime Calculator", href: "/overtime-calculator", icon: Clock },
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
                  title="Self Employment Tax Calculator 2026"
                  url="https://www.freeuscalculator.in/self-employment-tax-calculator-usa"
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
          <RelatedCalculators currentTool="self-employment-tax-calculator-usa" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="pt-8">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Self-Employment Tax Questions
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

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 to-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-4">
            100% Free · Accurate Math
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Avoid Tax Penalties
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-10 leading-relaxed">
            The IRS requires you to pay estimated taxes quarterly. Use our free tool to figure out exactly how much you owe so you don't get hit with massive fines next April.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-amber-900/50">
              <Calculator size={16} />
              Scroll to Calculator
            </a>
            <Link href="/paycheck-calculator" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-colors">
              W-2 Paycheck Calculator
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
              { href: "/paycheck-calculator",               label: "Paycheck Calculator"          },
              { href: "/hourly-to-salary-calculator",       label: "Hourly to Salary"             },
              { href: "/salary-to-hourly-calculator",       label: "Salary to Hourly"             },
              { href: "/overtime-calculator",               label: "Overtime Pay Calculator"      },
              { href: "/savings-calculator",                label: "Savings Calculator"           },
              { href: "/rent-affordability-calculator",     label: "Rent Affordability"           },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-500 hover:text-amber-400 transition-colors text-xs font-medium">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-[10px] text-slate-700">
            Self-Employment Tax Calculator · FreeUSCalculator.in · 2026 Guidelines
          </p>
        </div>
      </nav>
    </main>
  );
}