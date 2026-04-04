import { Metadata } from "next";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import FAQ from "@/components/calculators/FAQ";
import AdBanner from "@/components/common/AdBanner";
import ShareButtons from "@/components/calculators/ShareButtons";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import { getToolContent } from "@/lib/seo";
import SalaryCalculator from "./SalaryCalculator";
import { Sparkles, Zap, ShieldCheck, RefreshCw, Info, ArrowRight } from "lucide-react";

// ✅ 2026 PREMIUM SEO STRATEGY
export const metadata: Metadata = {
  title: "Hourly to Salary Calculator 2026 | Accurate Annual Wage Converter",
  description:
    "Convert your hourly wage to a yearly salary instantly. Includes 1.5x overtime, tax estimates, and detailed monthly/weekly breakdowns for 2026.",
  keywords: [
    "hourly to salary calculator",
    "hourly wage to annual salary",
    "convert hourly to yearly salary",
    "salary calculator with overtime",
    "take home pay calculator 2026",
  ],
  alternates: {
    canonical: "https://freeuscalculator.com/hourly-to-salary-calculator",
  },
  openGraph: {
    title: "Hourly to Salary Calculator 2026 | Accurate Wage Converter",
    description: "Convert hourly wage to yearly salary with overtime and tax estimates.",
    images: [{ url: "https://freeuscalculator.com/og-salary.jpg", width: 1200, height: 630 }],
  },
};

export default function HourlyToSalaryPage() {
  const seoContent = getToolContent("hourly-to-salary-calculator");

  const faqs = [
    {
      q: "How do I convert hourly wage to salary?",
      a: "Multiply your hourly rate by your weekly hours (usually 40) and then by 52 weeks per year. For example, $25/hr × 40 × 52 = $52,000 per year.",
    },
    {
      q: "Does this include overtime and bonuses?",
      a: "Yes. Our 2026 tool allows you to input overtime hours at 1.5× or custom rates to see your total projected annual income.",
    },
    {
      q: "Is the result gross or net income?",
      a: "The primary result is gross income, but you can input your estimated tax percentage to see your net 'take-home' pay instantly.",
    },
  ];

  return (
    <main className="bg-[#fcfcfd] min-h-screen">
      
      {/* 🚀 HERO & CALCULATOR SECTION */}
      <section className="relative pt-16 pb-24 overflow-hidden px-4">
        {/* Advanced UI Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-gradient-to-b from-blue-50/80 to-transparent -z-10 blur-3xl" />
        
        <div className="max-w-7xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} /> New for 2026 Fiscal Year
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">
            Wage <span className="text-blue-600 underline decoration-blue-200">Intelligence</span> 2026
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Professional-grade conversion from hourly rates to annual salary. 
            Includes <span className="text-slate-900 font-bold">1.5x Overtime</span> and 2026 tax projections.
          </p>
        </div>

        <CalculatorContainer
          title=""
          description=""
          category="Financial Tools"
          lastUpdated="April 2026"
        >
          <div className="w-full overflow-hidden">
            <SalaryCalculator defaultMode="hourly-to-salary" />
          </div>
        </CalculatorContainer>
      </section>

      {/* 💎 TRUST & FEATURE GRID */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Accurate Logic", icon: <Zap className="text-amber-500" />, text: "Real-time math engine" },
            { label: "Overtime Ready", icon: <ArrowRight className="text-blue-500" />, text: "1.5x & double-time support" },
            { label: "2026 Tax Rules", icon: <ShieldCheck className="text-emerald-500" />, text: "Updated federal brackets" },
            { label: "Instant Sync", icon: <RefreshCw className="text-purple-500" />, text: "Auto-saving parameters" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{item.label}</h4>
              <p className="text-xs text-slate-500 mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📝 DYNAMIC SEO & SIDEBAR SECTION */}
      <section className="bg-white border-y border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content Area */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Info size={20} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Financial Guide</h2>
              </div>
              
              <article className="prose prose-slate lg:prose-xl max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-blue-600 prose-strong:text-blue-700">
                <div dangerouslySetInnerHTML={{ __html: seoContent }} />
              </article>
            </div>

            {/* Premium Sidebar */}
            <aside className="w-full lg:w-96 shrink-0 space-y-8">
              <div className="sticky top-24 space-y-8">
                <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-blue-300 font-black mb-4 uppercase tracking-widest text-[10px]">2026 Market Analysis</h4>
                    <p className="text-sm text-blue-50/80 leading-relaxed mb-6 font-medium">
                      Average salaries in the US have shifted by 4.2% this year. Ensure your negotiations are based on current 2026 market data.
                    </p>
                    <div className="h-1 w-12 bg-blue-400 rounded-full" />
                  </div>
                  {/* Decorative Glow */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
                </div>

                <div className="bg-slate-50 rounded-[2rem] p-6 border border-slate-200">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 text-center">Sponsored Content</p>
                  <AdBanner />
                </div>

                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                   <p className="text-xs font-bold text-slate-500 mb-4 italic text-center">Share this calculator</p>
                   <ShareButtons
                    title="Hourly to Salary Calculator 2026"
                    url="https://freeuscalculator.com/hourly-to-salary-calculator"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ❓ EXPERT FAQ SECTION */}
      <section className="bg-[#fcfcfd] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Expert Salary Insights</h2>
            <p className="text-slate-500 font-medium">Navigating your 2026 paycheck with confidence.</p>
          </div>
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* 🔗 RELATED TOOLS FOOTER */}
      <section className="bg-slate-900 py-24 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <span className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-4">Precision Ecosystem</span>
            <h2 className="text-3xl md:text-5xl font-black text-center tracking-tight">Explore Professional Tools</h2>
          </div>
          <RelatedCalculators currentTool="hourly-to-salary-calculator" />
        </div>
      </section>
    </main>
  );
}