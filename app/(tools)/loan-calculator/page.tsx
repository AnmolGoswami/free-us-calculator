import { Metadata } from "next";
import Link from "next/link";
import { getToolContent } from "@/lib/seo";
import LoanCalculatorClient from "./LoanCalculatorClient";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import ShareButtons from "@/components/calculators/ShareButtons";
import FAQ from "@/components/calculators/FAQ";
import { 
  ShieldCheck, Info, BookOpen, Zap, TrendingUp, 
  Calculator, Landmark, ArrowUpRight, Home, Wallet, Briefcase, Activity
} from "lucide-react";

import { allTools } from "@/lib/tools"; // Import central registry
import RelatedCalculators from "@/components/calculators/RelatedCalculators";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Advanced Loan & Finance Calculator 2026 – EMI, Amortization, Bonds & Deferred Payments",
  description: "Free advanced financial calculator for 2026. Calculate loan EMI, amortization schedules, deferred payments, bond valuation, interest breakdown, and investment returns with high-precision results.",
  keywords: [
    "finance calculator 2026", "loan calculator emi amortization", "amortization schedule calculator",
    "deferred payment calculator", "bond calculator", "loan interest calculator", "mortgage calculator 2026",
    // ... keep your full list
  ],
  authors: [{ name: "FreeUSCalculator", url: "https://www.freeuscalculator.in" }],
  creator: "FreeUSCalculator",
  publisher: "FreeUSCalculator",
  alternates: { canonical: "https://www.freeuscalculator.in/loan-calculator" },
  openGraph: {
    title: "Advanced Finance Calculator 2026 – Loans, Bonds, Amortization & Investment Tools",
    description: "All-in-one financial calculator for 2026. Compute EMI, amortization, deferred payments, bonds instantly.",
    url: "https://www.freeuscalculator.in/loan-calculator",
    siteName: "FreeUSCalculator",
    images: [{ url: "/images/finance-calculator-og.jpg", width: 1200, height: 630, alt: "Advanced Finance Calculator 2026" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/finance-calculator-og.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function LoanCalculatorPage() {
  const seoContent = getToolContent("loan-calculator");
  const currentToolId = "loan-calculator";

  // Use central registry for related tools (more maintainable)
  const relatedTools = allTools
    .filter(tool => tool.slug !== currentToolId && 
      (tool.category === "cost" || tool.popularity >= 8))
    .slice(0, 6);

  const faqs = [
    { q: "How is monthly loan interest calculated?", a: "Most loans use a simple interest formula applied to the remaining principal balance. Each month, the interest is calculated by multiplying the balance by the monthly interest rate." },
    { q: "What is an Amortization Schedule?", a: "It is a complete table of periodic loan payments, showing the amount of principal and interest that comprise each payment until the loan is paid off." },
  ];

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://www.schema.org",
    "@type": "WebApplication",
    "name": "Loan Precision Scheduler 2026",
    "description": "Advanced EMI, amortization and financial calculator with institutional-grade accuracy.",
    "url": "https://www.freeuscalculator.in/loan-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": ["EMI Calculator", "Amortization Schedule", "Early Payoff Analysis", "Total Interest Breakdown"]
  };

  const faqJsonLd = {
    "@context": "https://www.schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <main className="bg-zinc-50 min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO + CALCULATOR */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white rounded-2xl border border-slate-200 text-blue-600 text-sm font-semibold tracking-widest mb-8 shadow-sm">
            <Activity size={16} className="animate-pulse" /> 2026 FINANCIAL ENGINE
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-950 leading-none mb-6">
            Loan <span className="text-blue-600">Precision</span> Scheduler
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Advanced EMI, amortization &amp; yield calculations with institutional-grade accuracy.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-3 sm:px-0">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <CalculatorContainer
              title="Institutional Loan Calculator"
              description="Advanced EMI & Interest Amortization"
              category="Banking Suite"
              lastUpdated="April 2026"
            >
              <LoanCalculatorClient />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      {/* FEATURES - Fully Responsive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { label: "Full Amortization", icon: <TrendingUp size={26} />, color: "text-blue-600", bg: "bg-blue-50", desc: "Month-by-month schedule" },
            { label: "Early Payoff Savings", icon: <Zap size={26} />, color: "text-amber-600", bg: "bg-amber-50", desc: "See how much you save" },
            { label: "Bank-Grade Accuracy", icon: <ShieldCheck size={26} />, color: "text-emerald-600", bg: "bg-emerald-50", desc: "2026 compliant rates" },
            { label: "Total Cost Analysis", icon: <Landmark size={26} />, color: "text-purple-600", bg: "bg-purple-50", desc: "Lifetime breakdown" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex gap-5 items-start hover:shadow transition-all duration-300">
              <div className={`p-4 rounded-2xl ${item.bg} ${item.color} flex-shrink-0`}>
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1 text-lg">{item.label}</h4>
                <p className="text-slate-600 text-[15px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT + SIDEBAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* Article Content - Server Rendered */}
          <div className="flex-1 min-w-0 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 md:px-10 py-8 border-b bg-slate-50 flex items-center gap-5">
              <div className="bg-blue-600 text-white p-4 rounded-2xl">
                <BookOpen size={28} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-950 tracking-tight">The 2026 Loan Guide</h2>
                <p className="text-slate-600">Smart borrowing strategies explained</p>
              </div>
            </div>

            <div className="p-6 md:p-12 prose prose-slate max-w-none text-[15.5px] leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: seoContent || "<p>Content coming soon...</p>" }} />
            </div>

            <div className="border-t px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-slate-500">
                <Info size={20} className="text-blue-500" />
                <span className="font-medium">Algorithm v2.6 — Institutional Grade</span>
              </div>
              <ShareButtons title="Loan Precision Calculator 2026" url="https://www.freeuscalculator.in/loan-calculator" />
            </div>
          </div>

          {/* Sidebar - Responsive */}
          <aside className="w-full lg:w-96 shrink-0 space-y-8">
            <div className="bg-gradient-to-br from-blue-950 to-slate-950 text-white rounded-3xl p-8 shadow-2xl">
              <div className="uppercase text-blue-400 text-xs font-bold tracking-widest mb-4">SMART TIP</div>
              <h3 className="text-2xl font-bold leading-tight mb-5">Bi-Weekly Payments Hack</h3>
              <p className="text-blue-100 leading-relaxed">
                Pay bi-weekly and make one extra full payment per year — saving thousands in interest.
              </p>
            </div>

            {/* Advertisement Placeholder */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm min-h-[200px] flex items-center justify-center text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Advertisement</p>
            </div>

            {/* Related Tools using central registry */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-center mb-6 text-slate-900">More Financial Tools</h4>
              <div className="space-y-3">
                {relatedTools.slice(0, 4).map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    className="group flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl group-hover:scale-110 transition-transform">
                        <Calculator size={20} />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800 group-hover:text-blue-700 block">{tool.shortTitle || tool.title}</span>
                        <span className="text-xs text-slate-500">{tool.category}</span>
                      </div>
                    </div>
                    <ArrowUpRight size={18} className="text-slate-400 group-hover:text-blue-600" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Calculators Section (using your component) */}
      <RelatedCalculators
        currentTool="loan-calculator"
        title="More Useful Finance Calculators"
        tools={relatedTools.map(t => ({
          slug: t.slug,
          title: t.title,
          description: t.description
        }))}
      />

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-950 mb-12 text-center">Loan Essentials</h2>
          <div className="bg-zinc-50 rounded-3xl p-8 md:p-14 border border-slate-100">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-16 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xs opacity-60 tracking-widest font-medium">
            Precision Calculation Suite — Legal &amp; Financial Compliance 2026
          </p>
        </div>
      </footer>
    </main>
  );
}