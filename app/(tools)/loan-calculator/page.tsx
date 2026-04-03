import AdBanner from "@/components/common/AdBanner";
import { getToolContent } from "@/lib/seo";
import LoanCalculatorClient from "./LoanCalculatorClient";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import ShareButtons from "@/components/calculators/ShareButtons";
import { ShieldCheck, Info, BookOpen } from "lucide-react";

export default function LoanCalculatorPage() {
  const seoContent = getToolContent("loan-calculator");

  return (
    <>
      {/* 1. PRIMARY CALCULATOR INTERFACE */}
      <CalculatorContainer
        title="Institutional Loan Engine 2026"
        description="Calculate high-precision EMIs, Deferred Maturity, and Bond Yields with advanced financial intelligence."
      >
        <LoanCalculatorClient />
      </CalculatorContainer>

      {/* 2. AD PLACEMENT (High CTR Position) */}
      <div className="max-w-4xl mx-auto my-12 px-6">
        <AdBanner />
      </div>

      {/* 3. PROFESSIONAL CONTENT SECTION (For AdSense Approval) */}
      <section className="mt-20 max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-sm relative overflow-hidden">
          
          {/* Quality Badge for EEAT */}
          <div className="flex items-center gap-2 mb-10 text-blue-600 bg-blue-50 w-fit px-4 py-2 rounded-2xl border border-blue-100">
            <ShieldCheck size={18} />
            <span className="text-[10px] font-black uppercase tracking-widest">Verified Financial Accuracy 2026</span>
          </div>

          {/* SEO Content Injection */}
          <div className="prose prose-slate max-w-none 
            prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900
            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
            prose-strong:text-slate-900 prose-strong:font-black
            prose-ul:list-disc prose-li:text-slate-600
            prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:rounded">
            
            <div dangerouslySetInnerHTML={{ __html: seoContent }} />
          </div>

          {/* Interactive Footer for Content Section */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4 text-slate-400">
              <Info size={16} />
              <p className="text-[10px] font-black uppercase tracking-[0.2em]">Data Updated: April 2026</p>
            </div>
            
            <ShareButtons
              title="Free Institutional Loan Calculator 2026"
              url="https://freeuscalculator.com/loan-calculator"
            />
          </div>

          {/* Subtle Background Detail */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        </div>
      </section>

      {/* 4. FINAL AD BANNER (Sticky Bottom or Footer) */}
      <div className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
            <AdBanner />
            <p className="text-center text-[9px] text-slate-400 mt-8 uppercase tracking-[0.4em] font-black">
                End of Calculator Logic & Documentation
            </p>
        </div>
      </div>
    </>
  );
}