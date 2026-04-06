import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import AdBanner from "@/components/common/AdBanner";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import { getToolContent } from "@/lib/seo";
import SalaryCalculator from "./SalaryCalculator";
import { Sparkles, Zap, ShieldCheck, RefreshCw, Info, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Hourly to Salary Calculator 2026 | Accurate Annual Wage Converter",
  description: "Convert your hourly wage to a yearly salary instantly. Includes 1.5x overtime, tax estimates, and detailed monthly/weekly breakdowns for 2026.",
  alternates: { canonical: "https://freeuscalculator.com/hourly-to-salary-calculator" },
};

export default function HourlyToSalaryPage() {
  const seoContent = getToolContent("hourly-to-salary-calculator");

  const faqs = [
    { q: "How do I convert hourly wage to salary?", a: "Multiply your hourly rate by your weekly hours (usually 40) and then by 52 weeks per year." },
    { q: "Does this include overtime and bonuses?", a: "Yes. Our 2026 tool allows you to input overtime hours at 1.5× or custom rates." },
    { q: "Is the result gross or net income?", a: "The primary result is gross income, but you can input tax percentages for net pay." },
  ];

  return (
    <main className="bg-[#f8fafc] min-h-screen overflow-x-hidden">
      
      {/* 🚀 HERO SECTION */}
      <section className="relative pt-12 pb-12 md:pt-20 md:pb-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-blue-50/50 -z-10 blur-3xl rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles size={12} className="fill-blue-600" /> 2026 Fiscal Engine
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-[1.1]">
            Wage <span className="text-blue-600">Intelligence</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto font-medium">
            The web's most precise hourly-to-salary converter with 2026 tax brackets.
          </p>
        </div>

        {/* MAIN CALCULATOR CARD */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-white p-2 md:p-4">
            <CalculatorContainer title="" description="" category="Finance" lastUpdated="2026">
              <SalaryCalculator defaultMode="hourly-to-salary" />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      {/* 💎 FEATURE GRID */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { l: "Precision", i: <Zap size={20} />, c: "text-amber-500" },
            { l: "Overtime", i: <ArrowRight size={20} />, c: "text-blue-500" },
            { l: "Tax Ready", i: <ShieldCheck size={20} />, c: "text-emerald-500" },
            { l: "Live Sync", i: <RefreshCw size={20} />, c: "text-purple-500" },
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
                  <div className="bg-blue-600 p-2 rounded-xl text-white">
                    <BookOpen size={20} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Financial Guide 2026</h2>
                </div>
                
                <div className="p-8 md:p-12">
                  <article className="prose prose-slate prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-strong:text-blue-600">
                    <div dangerouslySetInnerHTML={{ __html: seoContent }} />
                  </article>
                </div>
              </div>
            </div>

            {/* SIDEBAR CARDS */}
            <aside className="w-full lg:w-80 xl:w-96 shrink-0 flex flex-col gap-6">
              
              {/* Premium Market Card */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">Live Insight</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">2026 Wage Growth</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    Average US hourly rates increased by 4.2% since January. Keep your expectations aligned with the current market.
                  </p>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-blue-500 rounded-full" />
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all" />
              </div>

              {/* Ad Card */}
              <div className="bg-white rounded-[2rem] p-4 border border-slate-200 shadow-sm flex flex-col items-center">
                <span className="text-[9px] font-black text-slate-300 uppercase mb-3">Advertisement</span>
                <AdBanner />
              </div>

              {/* Social Share Card */}
              <div className="bg-blue-50/50 rounded-[2rem] p-6 border border-blue-100/50">
                <h4 className="text-xs font-black text-blue-900 uppercase tracking-widest mb-4 text-center">Share Engine</h4>
                <ShareButtons title="2026 Hourly to Salary" url="https://freeuscalculator.com/hourly-to-salary-calculator" />
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* ❓ FAQ CARD SECTION */}
      <section className="bg-white border-t border-slate-100 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Common Questions</h2>
          </div>
          <div className="bg-slate-50/50 rounded-[3rem] p-6 md:p-12 border border-slate-100">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* 🔗 RELATED TOOLS CARD */}
      <section className="bg-slate-950 py-24 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4">Ecosystem</span>
            <h2 className="text-3xl md:text-5xl font-black text-center tracking-tight">Professional Suite</h2>
          </div>
          <RelatedCalculators currentTool="hourly-to-salary-calculator" />
        </div>
      </section>
    </main>
  );
}