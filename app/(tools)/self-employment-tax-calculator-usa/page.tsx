import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import AdBanner from "@/components/common/AdBanner";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import { getToolContent } from "@/lib/seo";
import SelfEmploymentTaxClient from "./SelfEmploymentTaxClient";
import { Sparkles, Briefcase, Calculator, ShieldCheck, DollarSign, RefreshCw, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Self-Employment Tax Calculator 2026 | SE Tax & Quarterly Estimator",
  description: "Accurately calculate your self-employment tax, Social Security, Medicare, and estimated federal income tax for 2026. Perfect for freelancers, contractors, and small business owners.",
  alternates: { canonical: "https://freeuscalculator.com/self-employment-tax-calculator" },
  keywords: ["self employment tax calculator", "SE tax calculator 2026", "quarterly estimated tax", "freelancer tax calculator", "self employed tax estimator", "1099 tax calculator"],
};

export default function SelfEmploymentTaxPage() {
  const seoContent = getToolContent("self-employment-tax-calculator");

  const faqs = [
    { 
      q: "What is Self-Employment Tax?", 
      a: "Self-employment tax is 15.3% (12.4% Social Security + 2.9% Medicare) on your net business profit. You only pay it on 92.35% of your net earnings." 
    },
    { 
      q: "Can I deduct half of my SE tax?", 
      a: "Yes. You can deduct 50% of your self-employment tax as an above-the-line deduction, which lowers your income tax." 
    },
    { 
      q: "Do I need to pay quarterly estimated taxes?", 
      a: "Yes. Most self-employed individuals must pay estimated taxes quarterly to avoid underpayment penalties." 
    },
    { 
      q: "Does this calculator include Additional Medicare Tax?", 
      a: "Yes. It automatically calculates the extra 0.9% Medicare tax for high earners (over $200k single / $250k married joint)." 
    },
    { 
      q: "Is QBI deduction included?", 
      a: "You can enter it under Additional Deductions. The 20% Qualified Business Income deduction is very beneficial for most self-employed people." 
    },
  ];

  return (
    <main className="bg-[#f8fafc] min-h-screen overflow-x-hidden">
      
      {/* 🚀 HERO SECTION */}
      <section className="relative pt-12 pb-12 md:pt-20 md:pb-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-amber-50/60 -z-10 blur-3xl rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-amber-600 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles size={12} className="fill-amber-600" /> 2026 Tax Engine
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-[1.1]">
            Self-Employment <span className="text-amber-600">Tax Master</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto font-medium">
            Calculate your full SE tax, quarterly payments, and total tax burden instantly for 2026.
          </p>
        </div>

        {/* MAIN CALCULATOR CARD */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-amber-900/5 border border-white p-2 md:p-4">
            <CalculatorContainer 
              title="Self-Employment Tax Calculator" 
              description="2026 SE Tax + Federal Income Tax Estimator" 
              category="Taxes & Finance" 
              lastUpdated="April 2026"
            >
              <SelfEmploymentTaxClient />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      {/* 💎 FEATURE GRID */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { l: "SE Tax", i: <Calculator size={20} />, c: "text-amber-500" },
            { l: "Quarterly Tax", i: <DollarSign size={20} />, c: "text-red-500" },
            { l: "1099 Ready", i: <Briefcase size={20} />, c: "text-blue-500" },
            { l: "Tax Deductions", i: <ShieldCheck size={20} />, c: "text-emerald-500" },
          ].map((item) => (
            <div key={item.l} className="bg-white/60 backdrop-blur-sm p-4 rounded-3xl border border-white flex flex-col items-center text-center shadow-sm">
              <div className={`${item.c} mb-2`}>{item.i}</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 📝 CONTENT SECTION */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* SEO CONTENT */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
                <div className="bg-slate-50/50 px-8 py-6 border-b border-slate-100 flex items-center gap-3">
                  <div className="bg-amber-600 p-2 rounded-xl text-white">
                    <BookOpen size={20} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Complete 2026 Guide</h2>
                </div>
                
                <div className="p-8 md:p-12">
                  <article className="prose prose-slate prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-strong:text-amber-600">
                    <div dangerouslySetInnerHTML={{ __html: seoContent }} />
                  </article>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="w-full lg:w-80 xl:w-96 shrink-0 flex flex-col gap-6">
              
              {/* Insight Card */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-300">Pro Tip 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Save Thousands</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    Properly tracking expenses and maximizing QBI deduction can reduce your effective tax rate by 10-15%.
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all" />
              </div>

              {/* Advertisement */}
              <div className="bg-white rounded-[2rem] p-4 border border-slate-200 shadow-sm flex flex-col items-center">
                <span className="text-[9px] font-black text-slate-300 uppercase mb-3">Advertisement</span>
                <AdBanner />
              </div>

              {/* Share */}
              <div className="bg-amber-50/50 rounded-[2rem] p-6 border border-amber-100/50">
                <h4 className="text-xs font-black text-amber-900 uppercase tracking-widest mb-4 text-center">Share This Tool</h4>
                <ShareButtons 
                  title="2026 Self-Employment Tax Calculator" 
                  url="https://freeuscalculator.com/self-employment-tax-calculator" 
                />
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="bg-white border-t border-slate-100 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="bg-slate-50/50 rounded-[3rem] p-6 md:p-12 border border-slate-100">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* 🔗 RELATED CALCULATORS */}
      <section className="bg-slate-950 py-24 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <span className="text-amber-500 font-black text-xs uppercase tracking-[0.4em] mb-4">MORE TAX TOOLS</span>
            <h2 className="text-3xl md:text-5xl font-black text-center tracking-tight">Tax & Finance Suite</h2>
          </div>
          <RelatedCalculators currentTool="self-employment-tax-calculator" />
        </div>
      </section>
    </main>
  );
}