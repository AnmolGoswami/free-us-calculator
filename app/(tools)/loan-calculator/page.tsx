import AdBanner from "@/components/common/AdBanner";
import { getToolContent } from "@/lib/seo";
import LoanCalculatorClient from "./LoanCalculatorClient";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import ShareButtons from "@/components/calculators/ShareButtons";
import { ShieldCheck, Info, BookOpen, Sparkles, Zap, TrendingUp, Calculator } from "lucide-react";

export default function LoanCalculatorPage() {
  const seoContent = getToolContent("loan-calculator");

  return (
    <main className="bg-[#fcfcfd] min-h-screen overflow-x-hidden">
      
      {/* 🚀 1. PREMIUM HERO SECTION */}
      <section className="relative pt-12 pb-12 md:pt-20 md:pb-24 px-4">
        {/* Advanced Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-gradient-to-b from-blue-50/80 to-transparent -z-10 blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles size={12} className="fill-blue-600" /> 2026 Institutional Algorithm
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-[1.1]">
            Loan <span className="text-blue-600">Precision</span> 2026
          </h1>
          <p className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Calculate complex EMI structures, deferred interest, and total amortization with our 
            <span className="text-slate-900 font-bold"> verified 2026 financial engine.</span>
          </p>
        </div>

        {/* PRIMARY CALCULATOR CARD */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-white p-2 md:p-4">
            <CalculatorContainer
              title=""
              description=""
              category="Banking Suite"
              lastUpdated="April 2026"
            >
              <LoanCalculatorClient />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      {/* 💎 2. FEATURE & TRUST GRID (SEO Semantic Value) */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Amortization", icon: <TrendingUp className="text-blue-500" />, desc: "Full month-by-month table" },
            { label: "Early Payoff", icon: <Zap className="text-amber-500" />, desc: "Calculate interest savings" },
            { label: "Bank Verified", icon: <ShieldCheck className="text-emerald-500" />, desc: "Standard 2026 formulas" },
            { label: "Live Export", icon: <Calculator className="text-purple-500" />, desc: "Share & save results" },
          ].map((item) => (
            <div key={item.label} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="mb-3 p-3 bg-slate-50 rounded-2xl">{item.icon}</div>
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight mb-1">{item.label}</h4>
              <p className="text-[10px] text-slate-400 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📢 3. HIGH-CTR AD SECTION */}
      <div className="max-w-4xl mx-auto mb-20 px-4">
        <div className="bg-slate-50 rounded-[2rem] p-4 border border-slate-200 flex flex-col items-center">
            <span className="text-[9px] font-black text-slate-300 uppercase mb-3 tracking-[0.2em]">Institutional Sponsored Analysis</span>
            <AdBanner />
        </div>
      </div>

      {/* 📚 4. FINANCIAL GUIDE CARD (SEO Mastery) */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main SEO Article */}
          <div className="flex-1 bg-white border border-slate-200/60 rounded-[2.5rem] shadow-sm overflow-hidden">
            <div className="bg-slate-50/50 px-8 py-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-xl text-white">
                  <BookOpen size={20} />
                </div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Financial Guide</h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                <ShieldCheck size={14} />
                <span className="text-[9px] font-black uppercase">Expert Verified</span>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:p-16">
              <article className="prose prose-slate prose-sm sm:prose-base lg:prose-lg max-w-none 
                prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
                prose-strong:text-blue-600 prose-strong:font-black
                prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-2 prose-code:rounded">
                
                <div dangerouslySetInnerHTML={{ __html: seoContent }} />
              </article>

              <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3 text-slate-400">
                  <Info size={16} />
                  <p className="text-[10px] font-black uppercase tracking-widest">Algorithm V.2.6 — April 2026</p>
                </div>
                <ShareButtons
                  title="Free Institutional Loan Calculator 2026"
                  url="https://freeuscalculator.com/loan-calculator"
                />
              </div>
            </div>
          </div>

          {/* Sidebar (Tablet/Desktop Only Layout) */}
          <aside className="w-full lg:w-80 shrink-0 space-y-6">
             <div className="bg-blue-900 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <h4 className="text-blue-400 font-black text-[10px] uppercase mb-4 tracking-widest">Pro Tip</h4>
                  <p className="text-sm font-medium leading-relaxed mb-4">Making just one extra payment per year can reduce a 30-year loan by up to 4 years.</p>
                  <div className="w-10 h-1 bg-blue-500 rounded-full" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
             </div>
             
             <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm text-center">
                <p className="text-[10px] font-black text-slate-300 uppercase mb-4">Advertisement</p>
                <AdBanner />
             </div>
          </aside>
        </div>
      </section>

      {/* 🏁 5. FOOTER & COMPLIANCE */}
      <footer className="bg-slate-950 py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
            <AdBanner />
            <div className="mt-12 opacity-50 flex flex-col items-center gap-4">
              <div className="w-12 h-px bg-blue-500" />
              <p className="text-[9px] uppercase tracking-[0.5em] font-black">
                Precision Calculation Suite — Legal & Financial Compliance 2026
              </p>
            </div>
        </div>
      </footer>
    </main>
  );
}