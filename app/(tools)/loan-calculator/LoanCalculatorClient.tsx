"use client";

import { useState } from "react";
import AmortizedLoan from "./AmortizedLoan";
import DeferredLoan from "./DeferredLoan";
import BondCalculator from "./BondCalculator";
import { Landmark, Timer, TrendingUp } from "lucide-react";

export default function LoanCalculatorClient() {
  const [tab, setTab] = useState<"amortized" | "deferred" | "bond">("amortized");

  const tabs = [
    {
      key: "amortized",
      label: "Amortized",
      desc: "EMI",
      icon: <Landmark size={14} />,
    },
    {
      key: "deferred",
      label: "Deferred",
      desc: "Maturity",
      icon: <Timer size={14} />,
    },
    {
      key: "bond",
      label: "Bond",
      desc: "Yield",
      icon: <TrendingUp size={14} />,
    },
  ] as const;

  return (
    <div className="w-full min-w-0 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-10 py-4 md:py-10 px-3 sm:px-4 lg:px-6">
        
        {/* HEADER */}
        <div className="text-center space-y-2 md:space-y-3 px-2">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-blue-600 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">Engine v3.0</span>
          </div>
          <h1 className="text-2xl md:text-5xl font-black tracking-tighter text-slate-900 leading-tight">
            Loan & Yield <span className="text-blue-600">Engine</span>
          </h1>
        </div>

        {/* TABS - Improved mobile scrolling + touch */}
        <div className="px-1">
          <div className="flex p-1 bg-slate-100/80 rounded-2xl md:rounded-[2rem] border border-slate-200/60 max-w-2xl mx-auto backdrop-blur-sm overflow-x-auto no-scrollbar snap-x snap-mandatory scrollbar-hide">
            {tabs.map((item) => {
              const isActive = tab === item.key;

              return (
                <button
                  key={item.key}
                  onClick={() => setTab(item.key)}
                  className={`
                    flex-1 flex items-center justify-center gap-2 md:gap-3 
                    px-4 py-3 md:py-4 rounded-xl md:rounded-[1.5rem] 
                    transition-all duration-300 min-w-[110px] snap-start
                    ${isActive
                      ? "bg-white text-blue-600 shadow-lg shadow-blue-100 ring-1 ring-slate-200/70"
                      : "text-slate-500 hover:text-slate-700 active:bg-slate-50"
                    }
                  `}
                >
                  <div className={`p-1.5 rounded-lg transition-colors flex-shrink-0
                    ${isActive 
                      ? "bg-blue-50 text-blue-600" 
                      : "bg-slate-200/60 text-slate-400"
                    }`}>
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-xs md:text-sm font-bold tracking-tight">
                      {item.label}
                    </div>
                    <div className="text-[10px] md:text-xs font-medium text-slate-500/80 hidden xs:block">
                      {item.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN CONTENT - Critical fixes for result cards & graphs */}
        <div className="px-1 md:px-2 min-w-0 overflow-hidden">
          <div className="w-full max-w-full overflow-hidden">
            {tab === "amortized" && <AmortizedLoan />}
            {tab === "deferred" && <DeferredLoan />}
            {tab === "bond" && <BondCalculator />}
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center pt-6 md:pt-8 border-t border-slate-100 px-2">
          <p className="text-[8px] md:text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
            Institutional Accuracy Guaranteed
          </p>
        </div>
      </div>
    </div>
  );
}