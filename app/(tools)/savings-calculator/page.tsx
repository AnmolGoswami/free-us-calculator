import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import AdBanner from "@/components/common/AdBanner";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import { getToolContent } from "@/lib/seo";
import SavingsCalculatorClient from "./SavingsCalculatorClient";
import { Sparkles, Target, TrendingUp, Calendar, ShieldCheck, RefreshCw, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Savings Goal Calculator 2026 | Compound Interest & Retirement Planner",
  description: "Plan your savings goals with accurate compound interest calculations. See how much you need to save monthly to reach your target in 2026.",
  alternates: { canonical: "https://freeuscalculator.com/savings-calculator" },
  keywords: ["savings goal calculator", "compound interest calculator", "retirement savings calculator", "monthly savings planner", "2026 savings calculator"],
};

export default function SavingsCalculatorPage() {
  const seoContent = getToolContent("savings-calculator");

  const faqs = [
    { 
      q: "How does compound interest work in this calculator?", 
      a: "Your savings grow faster over time because you earn interest on both your initial investment and the interest you've already earned." 
    },
    { 
      q: "What is a realistic annual interest rate for 2026?", 
      a: "High-yield savings accounts currently offer 4-5%, while stock market investments average 7-10% long term." 
    },
    { 
      q: "Can I use this for retirement planning?", 
      a: "Yes! This calculator is perfect for 401(k), IRA, or emergency fund planning. Just enter your target retirement amount." 
    },
    { 
      q: "Does it account for inflation?", 
      a: "Currently it shows nominal growth. You can manually reduce your interest rate by 2-3% to estimate real purchasing power." 
    },
  ];

  return (
    <main className="bg-[#f8fafc] min-h-screen overflow-x-hidden">
      
      {/* 🚀 HERO SECTION */}
      <section className="relative pt-12 pb-12 md:pt-20 md:pb-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-emerald-50/60 -z-10 blur-3xl rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles size={12} className="fill-emerald-600" /> 2026 Financial Planner
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-[1.1]">
            Savings <span className="text-emerald-600">Accelerator</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto font-medium">
            See exactly how much you need to save monthly to hit your financial goals with compound interest.
          </p>
        </div>

        {/* MAIN CALCULATOR CARD */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-emerald-900/5 border border-white p-2 md:p-4">
            <CalculatorContainer 
              title="Savings Goal Calculator" 
              description="Compound Interest & Future Value Planner" 
              category="Finance" 
              lastUpdated="April 2026"
            >
              <SavingsCalculatorClient />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      {/* 💎 FEATURE GRID */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { l: "Compound Interest", i: <TrendingUp size={20} />, c: "text-emerald-500" },
            { l: "Goal Tracking", i: <Target size={20} />, c: "text-blue-500" },
            { l: "Monthly Planner", i: <Calendar size={20} />, c: "text-amber-500" },
            { l: "Secure Planning", i: <ShieldCheck size={20} />, c: "text-purple-500" },
          ].map((item) => (
            <div key={item.l} className="bg-white/60 backdrop-blur-sm p-4 rounded-3xl border border-white flex flex-col items-center text-center shadow-sm">
              <div className={`${item.c} mb-2`}>{item.i}</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 📝 CONTENT BOXES SECTION */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* SEO CONTENT CARD */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
                <div className="bg-slate-50/50 px-8 py-6 border-b border-slate-100 flex items-center gap-3">
                  <div className="bg-emerald-600 p-2 rounded-xl text-white">
                    <BookOpen size={20} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Financial Guide 2026</h2>
                </div>
                
                <div className="p-8 md:p-12">
                  <article className="prose prose-slate prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-strong:text-emerald-600">
                    <div dangerouslySetInnerHTML={{ __html: seoContent }} />
                  </article>
                </div>
              </div>
            </div>

            {/* SIDEBAR CARDS */}
            <aside className="w-full lg:w-80 xl:w-96 shrink-0 flex flex-col gap-6">
              
              {/* Premium Insight Card */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300">2026 Insight</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Power of Compound Interest</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    Saving $500/month at 7% return for 20 years can grow to over $250,000. Start early!
                  </p>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-emerald-500 rounded-full" />
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all" />
              </div>

              {/* Ad Banner */}
              <div className="bg-white rounded-[2rem] p-4 border border-slate-200 shadow-sm flex flex-col items-center">
                <span className="text-[9px] font-black text-slate-300 uppercase mb-3">Advertisement</span>
                <AdBanner />
              </div>

              {/* Share Buttons */}
              <div className="bg-emerald-50/50 rounded-[2rem] p-6 border border-emerald-100/50">
                <h4 className="text-xs font-black text-emerald-900 uppercase tracking-widest mb-4 text-center">Share This Tool</h4>
                <ShareButtons 
                  title="2026 Savings Goal Calculator" 
                  url="https://freeuscalculator.com/savings-calculator" 
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

      {/* 🔗 RELATED TOOLS */}
      <section className="bg-slate-950 py-24 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.4em] mb-4">MORE TOOLS</span>
            <h2 className="text-3xl md:text-5xl font-black text-center tracking-tight">Financial Freedom Suite</h2>
          </div>
          <RelatedCalculators currentTool="savings-calculator" />
        </div>
      </section>
    </main>
  );
}