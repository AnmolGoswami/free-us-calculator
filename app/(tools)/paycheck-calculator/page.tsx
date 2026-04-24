import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import { getToolContent } from "@/lib/seo";
import PaycheckCalculatorClient from "./PaycheckCalculatorClient";
import { Sparkles, Landmark, Wallet, Calculator, ShieldCheck, Sun, BookOpen, FileText } from "lucide-react";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "USA Paycheck Calculator (2026) – Take Home Pay, Federal & State Tax Estimator",

  description:
    "Free USA paycheck calculator for all 50 states. Calculate your take-home pay after federal, state, and FICA taxes with accurate 2026 salary and hourly breakdowns.",

  alternates: {
    canonical: "https://www.freeuscalculator.in/paycheck-calculator",
  },

  keywords: [
    // 🔥 PRIMARY (HIGH TRAFFIC)
    "paycheck calculator",
    "usa paycheck calculator",
    "take home pay calculator",
    "salary after tax calculator",
    "net pay calculator",

    // ⚡ LONG-TAIL (FAST RANKING)
    "paycheck calculator all states USA",
    "take home pay calculator 2026 federal and state",
    "salary after tax calculator USA 2026",
    "hourly paycheck calculator USA",
    "biweekly paycheck calculator USA",

    // 💰 HIGH INTENT (MONEY KEYWORDS)
    "real take home pay calculator",
    "net salary after tax USA",
    "income after tax calculator USA",
    "paycheck after tax calculator",
    "true net pay calculator",

    // 🚀 ULTRA LOW COMPETITION (FAST TRAFFIC)
    "what is 70000 salary after tax USA",
    "100k salary take home pay USA",
    "how much tax on 60000 salary USA",
    "salary after tax monthly USA",
    "paycheck per hour calculator USA",

    // 🧠 SEMANTIC SEO (AI + GOOGLE SGE)
    "federal state fica tax calculator",
    "payroll tax calculator USA",
    "gross to net salary calculator USA",
    "income tax breakdown USA",
    "tax withholding calculator USA",

    // 📈 BROAD TRAFFIC EXPANSION
    "income calculator",
    "salary calculator",
    "earnings calculator",
    "tax calculator",
    "financial calculator",

    // 🎯 STATE COVERAGE (BIG SEO BOOST)
    "california paycheck calculator",
    "texas paycheck calculator",
    "new york paycheck calculator",
    "florida paycheck calculator",
    "illinois paycheck calculator",

    // 🔥 LONG-TAIL CLUSTER DOMINATION
    "how to calculate paycheck after tax USA step by step",
    "best paycheck calculator 2026 free online USA",
    "calculate net pay after federal state and fica taxes",
    "accurate paycheck calculator with deductions and benefits USA",
    "real paycheck breakdown weekly biweekly monthly yearly USA",
  ],

  openGraph: {
    title: "USA Paycheck Calculator 2026 – Calculate Your Real Take Home Pay",
    description:
      "Estimate your take-home pay after federal, state, and FICA taxes for all 50 US states instantly.",
    url: "https://www.freeuscalculator.in/paycheck-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "USA Paycheck Calculator (2026)",
    description:
      "Calculate your real salary after tax across all US states.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function PaycheckCaliforniaPage() {
  const seoContent = getToolContent("paycheck-calculator");

  const faqs = [
    { 
      q: "What is the California State Disability Insurance (SDI) rate for 2026?", 
      a: "For 2026, the SDI rate is applied to your gross wages. California recently removed the taxable wage limit for SDI, meaning all covered wages are subject to the tax." 
    },
    { 
      q: "How many tax brackets does California have?", 
      a: "California has one of the most progressive tax systems in the US, with 10 tax brackets ranging from 1% to 13.3% for the highest earners." 
    },
    { 
      q: "Does California tax Social Security benefits?", 
      a: "No. California is one of the states that does not tax Social Security retirement benefits, providing significant relief for seniors." 
    },
    { 
      q: "What is the Mental Health Services Act tax?", 
      a: "California imposes an additional 1% surcharge (often called the 'Millionaire's Tax') on personal taxable income in excess of $1 million." 
    },
  ];

  return (
    <main className="bg-[#f8fafc] min-h-screen overflow-x-hidden">
      
      {/* 🚀 PREMIUM HERO SECTION */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 px-4">
        {/* California Golden Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-amber-50/50 -z-10 blur-[120px] rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-amber-600 text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
            <Sun size={14} className="fill-amber-500 text-amber-500" /> STATE TAX ENGINE 2026
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
            California <span className="text-amber-500">Paycheck</span> <br />
            Estimator.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Precise take-home pay analysis including CA State Tax, SDI, and updated 2026 Federal brackets.
          </p>
        </div>

        {/* MAIN CALCULATOR CARD */}
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-[3.5rem] blur-2xl opacity-75 transition duration-1000 group-hover:opacity-100"></div>
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-white p-2 md:p-4">
              <CalculatorContainer 
                title="California Paycheck Calculator" 
                description="2026 State & Federal Tax Withholding" 
                category="Payroll & Salary" 
                lastUpdated="April 2026"
              >
                <PaycheckCalculatorClient />
              </CalculatorContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 💎 FEATURE GRID */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { l: "CA State Tax", d: "1% - 13.3% Brackets", i: <Landmark size={24} />, c: "text-amber-600", bg: "bg-amber-50" },
            { l: "SDI & VDI", d: "Updated 2026 Rates", i: <ShieldCheck size={24} />, c: "text-blue-600", bg: "bg-blue-50" },
            { l: "FICA Logic", i: <Calculator size={24} />, d: "SS & Medicare", c: "text-emerald-600", bg: "bg-emerald-50" },
            { l: "Net Income", i: <Wallet size={24} />, d: "True Take-Home", c: "text-purple-600", bg: "bg-purple-50" },
          ].map((item) => (
            <div key={item.l} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
              <div className={`${item.bg} ${item.c} p-4 rounded-2xl mb-4`}>{item.i}</div>
              <span className="text-slate-900 font-bold mb-1">{item.l}</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 📝 CONTENT SECTION */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
            
            {/* SEO ARTICLE AREA */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
                <div className="bg-slate-50/80 px-10 py-8 border-b border-slate-100 flex items-center gap-4">
                  <div className="bg-amber-500 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">CA Tax Filing Guide</h2>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mastering California Payroll</p>
                  </div>
                </div>
                
                <div className="p-10 md:p-16">
                  {/* ✅ CORRECTED PROSE RENDERING */}
                  <article className="prose prose-slate lg:prose-xl max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-strong:text-amber-600 prose-a:text-amber-600">
                    <div dangerouslySetInnerHTML={{ __html: seoContent }} />
                  </article>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="w-full lg:w-[400px] shrink-0 space-y-8">
              
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-amber-400 mb-6 block">PRO TIP 2026</span>
                  <h3 className="text-2xl font-black mb-4">SDI Changes</h3>
                  <p className="text-slate-400 leading-relaxed text-sm mb-6">
                    As of 2024 and continuing through 2026, California has eliminated the wage cap on SDI contributions. High earners will notice a larger deduction than in previous years.
                  </p>
                  <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-widest">
                    Tax Law Alert <FileText size={16} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-6 border border-slate-200 shadow-sm text-center">
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-4">Advertisement</span>
                
              </div>

              <div className="bg-amber-50/50 rounded-[2.5rem] p-10 border border-amber-100 text-center">
                <h4 className="text-xs font-black text-amber-900 uppercase tracking-[0.2em] mb-6">Share This Tool</h4>
                <ShareButtons 
                  title="California Paycheck Calculator 2026" 
                  url="https://www.freeuscalculator.in/paycheck-calculator-california" 
                />
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="bg-white border-t border-slate-100 py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Frequently Asked Questions</h2>
          </div>
          <div className="bg-slate-50/50 rounded-[3rem] p-10 md:p-20 border border-slate-100">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* 🔗 RELATED CALCULATORS */}
      <section className="bg-slate-950 py-32 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">California <span className="text-amber-500">Toolkit.</span></h2>
            <div className="h-px bg-white/10 flex-1 hidden md:block"></div>
          </div>
          <RelatedCalculators currentTool="paycheck-calculator-california" />
        </div>
      </section>
    </main>
  );
}