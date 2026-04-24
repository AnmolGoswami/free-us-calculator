import DoorDashCalculatorClient from "./DoorDashCalculatorClient";
import FAQ from "@/components/calculators/FAQ";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import ShareButtons from "@/components/calculators/ShareButtons";
import {  getToolContentAdvanced } from "@/lib/seo";
import { Sparkles, BookOpen, Target, ShieldCheck, Activity, Landmark, PieChart } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "DoorDash Earnings Calculator 2026 – Real Profit After Gas, Mileage & Taxes",

  description:
    "Free DoorDash earnings calculator for 2026. Estimate your real profit after gas, mileage, IRS deductions, and self-employment tax. Calculate hourly, weekly, and monthly Dasher income instantly.",

  alternates: {
    canonical: "https://www.freeuscalculator.in/doordash-earnings-calculator",
  },

  keywords: [
    // 🔥 PRIMARY (HIGH TRAFFIC)
    "doordash earnings calculator",
    "doordash profit calculator",
    "doordash pay calculator",
    "dasher income calculator",
    "doordash salary calculator",

    // ⚡ LONG-TAIL (FAST RANKING)
    "doordash earnings calculator after gas",
    "doordash earnings calculator after taxes",
    "real doordash profit calculator 2026",
    "doordash hourly pay calculator",
    "doordash weekly earnings calculator",

    // 💰 HIGH INTENT (USER READY TO USE TOOL)
    "how much do doordash drivers make after expenses",
    "doordash net income calculator",
    "true doordash earnings after mileage",
    "calculate doordash income after tax",
    "real take home doordash pay",

    // 🚀 ULTRA LOW COMPETITION (FAST TRAFFIC)
    "doordash earnings per hour after gas",
    "how much is 1000 doordash income after tax",
    "doordash profit per delivery calculator",
    "is doordash worth it after expenses",
    "doordash earnings breakdown example",

    // 🧠 SEMANTIC SEO (AI + GOOGLE SGE)
    "gig economy earnings calculator",
    "delivery driver income calculator",
    "1099 contractor earnings calculator",
    "self employment tax doordash calculator",
    "mileage deduction calculator doordash",

    // 📈 FEATURE-BASED (BOOST CTR)
    "doordash calculator with mileage",
    "doordash calculator with IRS rate",
    "doordash calculator with expenses",
    "doordash calculator with tax estimate",
    "doordash earnings breakdown calculator",

    // 🎯 NICHE TARGETING (EASY WINS)
    "uber eats vs doordash earnings calculator",
    "gig worker income calculator 2026",
    "delivery driver profit calculator",
    "part time doordash earnings calculator",
    "full time dasher income estimator",

    // 🔥 REAL USER SEARCHES
    "how much do doordash drivers make 2026",
    "average doordash earnings per hour",
    "doordash income after gas and maintenance",
    "doordash pay per delivery calculator",
    "doordash tip income calculator",

    // 🧩 FORMULA + EDUCATIONAL
    "doordash profit formula",
    "net earnings = income minus expenses doordash",
    "how to calculate delivery profit",
    "doordash cost per mile calculation",
    "earnings after self employment tax calculator",

    // 🏆 LONG-TAIL CLUSTER DOMINATION
    "best doordash earnings calculator 2026 free online",
    "calculate doordash profit after gas mileage and taxes",
    "accurate doordash income calculator with full breakdown",
    "real hourly rate doordash after expenses calculator",
    "complete doordash earnings breakdown weekly monthly yearly",
  ],

  openGraph: {
    title: "DoorDash Earnings Calculator 2026 – Calculate Real Profit",
    description:
      "Estimate your real DoorDash income after gas, mileage, and taxes instantly.",
    url: "https://www.freeuscalculator.in/doordash-earnings-calculator",
    siteName: "Free US Calculator",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DoorDash Earnings Calculator (2026)",
    description:
      "Find your real DoorDash profit after expenses and taxes.",
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

export default function DoorDashPage() {
  const { html: seoContent, toc, faqs: autoFaqs } = getToolContentAdvanced("doordash-earnings-calculator");

  const manualFaqs  = [
    {
      q: "How accurate is this DoorDash earnings calculator?",
      a: "This tool utilizes the 2026 IRS standard mileage rate and localized tax logic to provide institutional-grade net income projections.",
    },
    {
      q: "Does this include gas and vehicle maintenance?",
      a: "Yes. The 'Operating Cost' field integrates fuel, insurance, and depreciation based on current 2026 market volatility.",
    },

    
  ];
  function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // remove punctuation
    .replace(/\s+/g, " ")    // normalize spaces
    .trim();
}

const combinedFaqs = [
  ...manualFaqs,
  ...autoFaqs.map((f) => ({
    q: f.question,
    a: f.answer,
  })),
];

const faqsMap = new Map();

combinedFaqs.forEach((f) => {
  const key = normalize(f.q);
  if (!faqsMap.has(key)) {
    faqsMap.set(key, f);
  }
});

const faqs = Array.from(faqsMap.values());

  return (
    <main className="bg-[#f8fafc] w-full overflow-x-hidden relative selection:bg-blue-500/20">
      {faqs.length > 0 && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://www.schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      }),
    }}
  />
)}


      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-24 md:pb-32 overflow-hidden border-b border-slate-200">
        {/* Abstract Data Grid Background */}
        <div className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl">
            <Activity size={14} className="text-blue-400" /> System Status: Online 2026
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-slate-950 tracking-[-0.04em] mb-6 leading-[0.9]">
            DoorDash <span className="text-blue-600">Earnings</span><span className="text-slate-300">.v3</span>
          </h1>

          <p className="text-slate-500 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto font-bold leading-relaxed px-2 uppercase tracking-tight">
            Institutional-grade yield analysis for the <span className="text-slate-950 underline decoration-blue-500 underline-offset-4">Gig Economy</span>
          </p>
        </div>

        {/* CALCULATOR MOUNT */}
        <div className="w-full max-w-6xl mx-auto px-4 box-border">
          <div className="w-full bg-white rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-slate-200 p-2">
            <Suspense fallback={<div className="p-10 text-center">Loading calculator...</div>}>
              <DoorDashCalculatorClient />
            </Suspense>
          </div>
        </div>
      </section>

      {/* 2. ANALYTICS & INSIGHTS */}
      <section className="py-12 md:py-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-start">

            {/* LEFT: STRATEGIC BENCHMARKS */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 md:space-y-8 min-w-0">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600">
                  <Activity size={16} strokeWidth={3} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Market Intelligence</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter leading-none">
                  STRATEGY <br className="hidden md:block" /> <span className="text-slate-400 uppercase">Guide 2026</span>
                </h2>
              </div>

              <div className="flex flex-row lg:flex-col gap-3 md:gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide touch-pan-x">
                {[
                  { icon: <Target size={18} />, title: "IRS COMPLIANCE", value: "2026 Standard", color: "text-blue-600" },
                  { icon: <ShieldCheck size={18} />, title: "TAX LIABILITY", value: "15.3% SE Tax", color: "text-emerald-600" },
                  { icon: <BookOpen size={18} />, title: "METHODOLOGY", value: "Net-Yield", color: "text-violet-600" },
                ].map((item, i) => (
                  <div key={i} className="min-w-[150px] md:min-w-0 flex-1 p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-200/60 transition-all">
                    <div className={`mb-3 ${item.color}`}>{item.icon}</div>
                    <p className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.title}</p>
                    <p className="text-xs md:text-sm font-bold text-slate-900 truncate">{item.value}</p>
                  </div>
                ))}
              </div>
            </aside>

            {/* RIGHT: THE ARTICLE CARD */}
            <div className="lg:col-span-8 w-full min-w-0">
              <div className="relative bg-white border border-slate-900/10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-slate-200/50">

                {/* Institutional Header Strip */}
                <div className="bg-slate-950 px-6 py-8 md:px-12 md:py-10 rounded-t-[2rem] md:rounded-t-[2.5rem]">
                  <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-6">
                    <span className="px-2 py-0.5 rounded-md bg-blue-500 text-[8px] md:text-[10px] font-black text-white uppercase tracking-widest">
                      Document 2026-DD
                    </span>
                    <span className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-500" />
                      Verified Financial Data
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-[1.2] break-words">
                    Maximizing Net Yield: <br className="hidden sm:block" />
                    <span className="text-slate-400 font-medium italic sm:not-italic">The 2026 Dasher Profitability Framework</span>
                  </h2>
                </div>

                {/* Article Body */}
                <div className="p-6 sm:p-10 md:p-16 overflow-hidden">
                  {toc.length > 0 && (
  <div className="mb-10 p-6 bg-slate-50 rounded-2xl">
    <h3 className="font-bold mb-4">Contents</h3>
    <ul className="space-y-2">
      {toc.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} className="text-blue-600 hover:underline">
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}
                  <article
                    className="prose prose-slate max-w-none break-words
                      prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tighter
                      prose-h2:text-lg sm:prose-h2:text-2xl prose-h2:border-l-4 prose-h2:border-blue-600 prose-h2:pl-4 prose-h2:mt-8
                      prose-p:text-slate-600 prose-p:text-sm sm:prose-p:text-lg prose-p:leading-relaxed prose-p:font-medium
                      prose-strong:text-slate-900 prose-strong:font-black
                      prose-ul:list-none prose-ul:pl-0
                      prose-li:text-sm sm:prose-li:text-base prose-li:relative prose-li:pl-6 prose-li:before:content-['→'] prose-li:before:absolute prose-li:before:left-0 prose-li:before:text-blue-600"
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: seoContent }}
                      className="selection:bg-blue-100 overflow-x-hidden"
                    />
                  </article>

                  {/* Signature Footer */}
                  <div className="mt-12 md:mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-blue-400 font-black text-[10px]">
                        FUC
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-black text-slate-900 uppercase">Editorial Board</p>
                        <p className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest truncate">Free US Calculator Analysts</p>
                      </div>
                    </div>
                    <div className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] italic self-end sm:self-auto">
                      Ref: 4492-DD-2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em]">Knowledge Base</span>
            <h2 className="text-4xl font-black mt-4 tracking-tight">Technical FAQs</h2>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 md:p-16">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* 4. SHARE */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-400 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4 tracking-tight">Distribute Reports</h3>
              <p className="text-blue-100 mb-10 max-w-md mx-auto font-medium">
                Standardize profit reporting across the driver community. Share the OS.
              </p>
              <div className="flex justify-center">
                <ShareButtons
                  title="2026 Institutional DoorDash Profit Calculator"
                  url="https://www.freeuscalculator.in/doordash-earnings-calculator"
                />
              </div>
            </div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* 5. RELATED TOOLS */}
      <section className="pb-24 pt-12 border-t border-slate-200 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <RelatedCalculators currentTool="doordash-earnings-calculator" title="Terminal Access / Additional Tools" />
        </div>
      </section>
    </main>
  );
}