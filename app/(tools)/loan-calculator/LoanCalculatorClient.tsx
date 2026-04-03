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
      desc: "EMI-based Loans",
      icon: <Landmark size={18} />,
    },
    {
      key: "deferred",
      label: "Deferred",
      desc: "Single Maturity",
      icon: <Timer size={18} />,
    },
    {
      key: "bond",
      label: "Bond Yield",
      desc: "Return Analysis",
      icon: <TrendingUp size={18} />,
    },
  ] as const;

  return (
    <div className="w-full max-w-7xl mx-auto space-y-10 py-10 px-4">
      
      {/* HEADER: Matching the premium card style */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full text-blue-600 border border-blue-100">
           <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Financial Intelligence v3</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 leading-none">
          Loan & Yield <span className="text-blue-600">Engine</span>
        </h1>
        <p className="text-sm font-medium text-slate-500 max-w-lg mx-auto leading-relaxed italic">
          Professional-grade calculations for EMIs, maturity growth, and bond performance.
        </p>
      </div>

      {/* TABS: Modern Segmented UI */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center bg-slate-100/50 p-2 rounded-[2rem] border border-slate-200/60 max-w-3xl mx-auto backdrop-blur-sm">
        {tabs.map((item) => {
          const isActive = tab === item.key;

          return (
            <button
              key={item.key}
              onClick={() => setTab(item.key)}
              className={`
                w-full sm:flex-1 flex items-center gap-4 px-6 py-4 rounded-[1.5rem] transition-all duration-300
                ${isActive
                  ? "bg-white text-blue-600 shadow-xl shadow-blue-100 scale-[1.02] ring-1 ring-slate-200"
                  : "text-slate-500 hover:bg-white/50 hover:text-slate-800"}
              `}
            >
              <div className={`p-2 rounded-xl transition-colors ${isActive ? "bg-blue-50 text-blue-600" : "bg-slate-200/50 text-slate-400"}`}>
                {item.icon}
              </div>
              <div className="text-left">
                <div className="text-[11px] font-black uppercase tracking-widest leading-none mb-1">{item.label}</div>
                <div className={`text-[10px] font-bold ${isActive ? "text-slate-400" : "text-slate-400/70"}`}>
                  {item.desc}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* CONTENT AREA: Smooth fade-in */}
      <div className="animate-in fade-in zoom-in-95 duration-500 ease-out">
        {tab === "amortized" && <AmortizedLoan />}
        {tab === "deferred" && <DeferredLoan />}
        {tab === "bond" && <BondCalculator />}
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center pt-8 border-t border-slate-100">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
          End-to-End Financial Calculation Engine
        </p>
      </div>
    </div>
  );
}