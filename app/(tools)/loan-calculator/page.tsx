import { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/common/AdBanner";
import { getToolContent } from "@/lib/seo";
import LoanCalculatorClient from "./LoanCalculatorClient";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import ShareButtons from "@/components/calculators/ShareButtons";
import FAQ from "@/components/calculators/FAQ";
import { 
  ShieldCheck, Info, BookOpen, Sparkles, Zap, TrendingUp, 
  Calculator, Landmark, ArrowUpRight, Home, Wallet, Briefcase 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Loan Calculator 2026 – EMI, Amortization, Interest, Balloon & Deferred Payments",

  description:
    "Advanced loan calculator for 2026. Calculate EMI, total interest, amortization schedule, extra payments, deferred payments, and balloon payments. Perfect for home, auto, personal, and business loans.",

  alternates: {
    canonical: "https://freeuscalculator.com/loan-calculator",
  },

  keywords: [
    // 🔥 PRIMARY HIGH-VOLUME
    "loan calculator",
    "EMI calculator",
    "loan EMI calculator",
    "amortization calculator",
    "interest calculator",

    // ⚡ CORE FEATURES (VERY IMPORTANT FOR SEO)
    "loan calculator with amortization schedule",
    "loan calculator with extra payments",
    "loan calculator with balloon payment",
    "loan calculator with deferred payments",
    "advanced loan calculator 2026",

    // 💰 HIGH INTENT (MONEY KEYWORDS)
    "monthly loan payment calculator",
    "total interest on loan calculator",
    "loan repayment calculator",
    "true cost of loan calculator",
    "loan breakdown calculator",

    // 🚀 LONG-TAIL (FAST RANKING)
    "how to calculate EMI loan step by step",
    "loan EMI calculator with prepayment",
    "loan calculator with extra monthly payments",
    "amortization schedule calculator with extra payments",
    "loan calculator with deferment period",

    // 🧠 FORMULA + EDUCATIONAL (BOOST GOOGLE TRUST)
    "EMI formula calculator",
    "loan interest formula calculator",
    "reducing balance EMI calculator",
    "principal and interest calculator",
    "loan amortization formula",

    // 📈 BROAD TRAFFIC EXPANSION
    "mortgage calculator",
    "auto loan calculator",
    "personal loan calculator",
    "business loan calculator",
    "home loan EMI calculator",

    // 🎯 NICHE TARGETING (EASY WINS)
    "car loan EMI calculator 2026",
    "home loan calculator with amortization",
    "student loan calculator with deferment",
    "business loan repayment calculator",
    "simple loan calculator free online",

    // 🔥 REAL USER SEARCHES (VERY POWERFUL)
    "what is EMI on 50000 loan",
    "how much EMI for 5 lakh loan",
    "loan interest on 100000 for 5 years",
    "monthly payment on loan calculator",
    "loan EMI per month calculator",

    // 🧩 SEMANTIC SEO (AI + GOOGLE SGE)
    "gross loan vs net loan payment",
    "loan payment breakdown principal vs interest",
    "loan repayment schedule monthly yearly",
    "interest vs principal over time",
    "complete loan analysis calculator",

    // 🏆 COMPETITIVE EDGE (YOUR UNIQUE FEATURES)
    "loan calculator with extra and balloon payments",
    "loan calculator with defer and prepayment options",
    "full amortization schedule with extra payments",
    "loan calculator with interest savings analysis",
    "advanced EMI calculator with full breakdown",
  ],

  openGraph: {
    title: "Loan Calculator 2026 – EMI, Interest & Full Amortization Breakdown",
    description:
      "Calculate your loan EMI, interest, amortization schedule, and advanced payments instantly.",
    url: "https://freeuscalculator.com/loan-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Loan Calculator (2026)",
    description:
      "Advanced EMI calculator with amortization, extra payments, and full breakdown.",
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

export default function LoanCalculatorPage() {
  const seoContent = getToolContent("loan-calculator");
  const currentToolId = "loan-calculator";

  // INTERNAL RELATED TOOLS DATA
  const allTools = [
    { id: "loan-calculator", name: "Loan Precision", href: "/loan-calculator", icon: <Calculator size={18} />, color: "text-blue-500", bg: "bg-blue-50" },
    { id: "rent-affordability-calculator", name: "Rent Intelligence", href: "/rent-affordability-calculator", icon: <Home size={18} />, color: "text-emerald-500", bg: "bg-emerald-50" },
    { id: "paycheck-calculator-california", name: "CA Paycheck", href: "/paycheck-calculator-california", icon: <Wallet size={18} />, color: "text-amber-500", bg: "bg-amber-50" },
    { id: "self-employment-tax-calculator", name: "SE Tax Master", href: "/self-employment-tax-calculator", icon: <Briefcase size={18} />, color: "text-rose-500", bg: "bg-rose-50" },
  ];

  const relatedTools = allTools.filter(t => t.id !== currentToolId);

  const faqs = [
    { q: "How is monthly loan interest calculated?", a: "Most loans use a simple interest formula applied to the remaining principal balance. Each month, the interest is calculated by multiplying the balance by the monthly interest rate (Annual Rate / 12)." },
    { q: "What is an Amortization Schedule?", a: "It is a complete table of periodic loan payments, showing the amount of principal and the amount of interest that comprise each payment until the loan is paid off at the end of its term." },
    { q: "Can I save money by paying extra?", a: "Yes. Making additional principal payments reduces the balance faster, which significantly lowers the total interest you'll pay over the life of the loan and shortens the term." },
    { q: "What is the difference between Fixed and Variable rates?", a: "A fixed rate remains the same for the entire life of the loan. A variable rate can change based on market indices (like the Prime Rate), which can cause your monthly payment to fluctuate." },
  ];

  return (
    <main className="bg-[#f8fafc] min-h-screen overflow-x-hidden">
      
      {/* 🚀 1. HERO SECTION */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-blue-50/50 -z-10 blur-[120px] rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles size={14} className="fill-blue-600 animate-pulse" /> 2026 FINANCIAL ENGINE
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
            Loan <span className="text-blue-600">Precision</span> <br />
            Scheduler.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Calculate complex EMI structures and total amortization with our 
            <span className="text-slate-900 font-bold italic"> verified 2026 banking logic.</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-[3rem] blur-2xl opacity-75"></div>
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-white p-2 md:p-4">
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
        </div>
      </section>

      {/* 💎 2. FEATURE TRUST GRID */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Amortization", icon: <TrendingUp size={24} />, c: "text-blue-500", bg: "bg-blue-50", desc: "Month-by-month table" },
            { label: "Early Payoff", icon: <Zap size={24} />, c: "text-amber-500", bg: "bg-amber-50", desc: "Interest savings logic" },
            { label: "Bank Verified", icon: <ShieldCheck size={24} />, c: "text-emerald-500", bg: "bg-emerald-50", desc: "Standard 2026 rates" },
            { label: "Total Cost", icon: <Landmark size={24} />, c: "text-purple-500", bg: "bg-purple-50", desc: "Lifetime fee analysis" },
          ].map((item) => (
            <div key={item.label} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all">
              <div className={`mb-4 p-4 ${item.bg} ${item.c} rounded-2xl`}>{item.icon}</div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-1">{item.label}</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📚 3. CONTENT & SIDEBAR */}
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          
          <div className="flex-1 bg-white border border-slate-200/60 rounded-[2.5rem] shadow-sm overflow-hidden">
            <div className="bg-slate-50/80 px-10 py-8 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">The 2026 Loan Guide</h2>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Expert Borrowing Strategies</p>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-16">
              <article className="prose prose-slate lg:prose-xl max-w-none 
                prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tighter
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-strong:text-blue-600 prose-strong:font-bold
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
                <div dangerouslySetInnerHTML={{ __html: seoContent }} />
              </article>

              <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3 text-slate-400">
                  <Info size={20} className="text-blue-500" />
                  <p className="text-[11px] font-black uppercase tracking-[0.2em]">Algorithm v2.6 — Institutional Grade</p>
                </div>
                <ShareButtons title="Loan Precision Calculator 2026" url="https://freeuscalculator.com/loan-calculator" />
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="w-full lg:w-[400px] shrink-0 space-y-8">
             <div className="bg-blue-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl group">
                <div className="relative z-10">
                  <span className="text-blue-400 font-black text-[11px] uppercase mb-6 tracking-[0.3em] block">STRATEGY INSIGHT</span>
                  <h3 className="text-2xl font-black mb-4 leading-tight">Bi-Weekly Payment Hack</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-8">
                    Splitting your monthly payment into two bi-weekly halves results in 13 full payments per year, potentially saving you tens of thousands in interest.
                  </p>
                  <div className="w-12 h-1.5 bg-blue-500 rounded-full" />
                </div>
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all" />
             </div>
             
             <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm text-center">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4">Advertisement</p>
                <AdBanner />
             </div>

             {/* PERFECT RELATED TOOLS SECTION */}
             <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-8 text-center">Suite Explorer</h4>
                <div className="space-y-3">
                  {relatedTools.map((tool) => (
                    <Link 
                      key={tool.id} 
                      href={tool.href}
                      className="group flex items-center justify-between p-4 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`${tool.bg} ${tool.color} p-2.5 rounded-xl transition-colors group-hover:bg-blue-600 group-hover:text-white`}>
                          {tool.icon}
                        </div>
                        <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                          {tool.name}
                        </span>
                      </div>
                      <ArrowUpRight size={16} className="text-slate-300 group-hover:text-blue-500 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  ))}
                </div>
             </div>
          </aside>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="bg-white border-t border-slate-100 py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-16">Loan Essentials.</h2>
          <div className="bg-slate-50/50 rounded-[3rem] p-10 md:p-20 border border-slate-100 text-left">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-32 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
            <AdBanner />
            <div className="opacity-40 flex flex-col items-center gap-6">
              <div className="w-16 h-px bg-blue-500" />
              <p className="text-[10px] uppercase tracking-[0.5em] font-black leading-loose max-w-lg">
                Precision Calculation Suite — Legal & Financial Compliance 2026.
              </p>
            </div>
        </div>
      </footer>
    </main>
  );
}