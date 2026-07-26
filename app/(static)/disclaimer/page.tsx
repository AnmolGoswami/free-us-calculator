import { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ChevronRight, Calculator, ShieldAlert, BadgeInfo } from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Disclaimer | FreeUSCalculator",
  description: "Important legal and financial disclaimer for users of FreeUSCalculator.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200/60 pt-10 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-6">
            <AlertTriangle size={24} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Financial Disclaimer
          </h1>
          <p className="text-slate-500 text-lg">
            Please read this important notice regarding the tools on our site.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm space-y-8">
          
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-1">
              <BadgeInfo size={20} />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-2">1. Educational Purposes Only</h2>
              <p className="text-slate-600 leading-relaxed">
                All calculators, articles, and tools provided on FreeUSCalculator are intended strictly for educational and informational purposes. They do not constitute financial, legal, tax, or professional advice of any kind.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
              <Calculator size={20} />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-2">2. Estimates and Accuracy</h2>
              <p className="text-slate-600 leading-relaxed">
                The results provided by our calculators are estimates based on standard mathematical formulas and the input variables you provide. While we strive to ensure the formulas are accurate and up-to-date (e.g., using current IRS mileage rates or standard tax brackets), we make no warranties regarding the accuracy, completeness, or reliability of these results. Your actual tax liability, loan payments, or financial obligations may differ.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-1">
              <ShieldAlert size={20} />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-2">3. No Professional Relationship</h2>
              <p className="text-slate-600 leading-relaxed">
                Your use of FreeUSCalculator does not create a client-advisor relationship. We strongly recommend that you consult with a certified financial planner (CFP), certified public accountant (CPA), or other qualified professional before making any significant financial, investment, or tax-related decisions.
              </p>
            </div>
          </div>
          
          <hr className="border-slate-100" />
          
          <div className="bg-slate-50 p-6 rounded-2xl text-sm text-slate-500 text-center">
            <p className="mb-4">
              By using this website, you agree that FreeUSCalculator and its operators shall not be held liable for any decisions made based on the information provided here.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Link href="/terms" className="text-amber-600 font-bold hover:underline flex items-center gap-1">
                View Terms of Service <ChevronRight size={14} />
              </Link>
              <Link href="/contact" className="text-slate-600 font-bold hover:underline flex items-center gap-1">
                Contact Us <ChevronRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
