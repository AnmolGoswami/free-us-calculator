"use client";

import { useState, useMemo } from "react";
import { 
  Copy, Check, Maximize2, ShieldCheck, 
  TrendingUp, Lightbulb, X, Info, ChevronDown 
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

import { calculateBond, CompoundFrequency } from "@/lib/loanCalculator";
import InputField from "@/components/ui/InputField";

const COLORS = ["#2563eb", "#10b981"];

export default function BondCalculator() {
  const [faceValue, setFaceValue] = useState(100000);
  const [annualRate, setAnnualRate] = useState(5.5);
  const [years, setYears] = useState(10);
  const [months, setMonths] = useState(0);
  const [compoundFrequency, setCompoundFrequency] = useState<CompoundFrequency>("monthly");
  const [currency, setCurrency] = useState("GBP"); // GBP back as default or option
  
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const currencyConfig: Record<string, { symbol: string, locale: string }> = {
    EUR: { symbol: "€", locale: "de-DE" },
    USD: { symbol: "$", locale: "en-US" },
    INR: { symbol: "₹", locale: "en-IN" },
    GBP: { symbol: "£", locale: "en-GB" }
  };

  const current = currencyConfig[currency];
  const totalYears = useMemo(() => years + (months / 12), [years, months]);

  const result = useMemo(() => {
    if (!faceValue || totalYears <= 0) return null;
    return calculateBond({
      faceValue,
      yearsToMaturity: totalYears,
      annualRate,
      compoundFrequency,
      currencySymbol: current.symbol,
    });
  }, [faceValue, totalYears, annualRate, compoundFrequency, current]);

  const formatUI = (val: number) => 
    new Intl.NumberFormat(current.locale, { 
      style: 'currency', 
      currency, 
      notation: val > 999999999 ? "compact" : "standard", 
      maximumFractionDigits: 0 
    }).format(val);

  const formatExact = (val: number) => 
    new Intl.NumberFormat(current.locale, { minimumFractionDigits: 2 }).format(val);

  const handleCopy = (value: any) => {
    navigator.clipboard.writeText(value.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 bg-[#fcfcfd] min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT: INPUTS */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-10 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Currency</span>
              <div className="flex bg-slate-100 p-1 rounded-xl overflow-x-auto">
                {Object.keys(currencyConfig).map((cur) => (
                  <button 
                    key={cur} 
                    onClick={() => setCurrency(cur)} 
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all ${currency === cur ? "bg-white text-blue-600 shadow-sm" : "text-slate-400"}`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div>

            <InputField label="Maturity Face Value" value={faceValue} onChange={setFaceValue} prefix={current.symbol} type="number" />
            
            <div className="grid grid-cols-2 gap-4">
              <InputField label="Years" value={years} onChange={setYears} type="number" />
              <InputField label="Months" value={months} onChange={setMonths} type="number" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InputField label="Yield Rate %" value={annualRate} onChange={setAnnualRate} step={0.1} type="number" />
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Compounding</label>
                <select 
                  value={compoundFrequency} 
                  onChange={(e) => setCompoundFrequency(e.target.value as any)} 
                  className="w-full border-2 border-slate-50 rounded-2xl p-4 bg-slate-50/50 font-bold text-sm outline-none appearance-none"
                >
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="continuous">Continuous</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: RESULTS & INSIGHTS */}
        <div className="lg:col-span-7 space-y-6">
          {result ? (
            <>
              {/* HERO CARD */}
              <div className="max-w-md mx-auto w-full bg-blue-600 text-white rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100">Price Today</p>
                    <div className="flex gap-2">
                      <button onClick={() => setShowModal(true)} className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all"><Maximize2 size={16} /></button>
                      <button onClick={() => handleCopy(result.amountReceived)} className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all">
                        {copied ? <Check size={16} className="text-green-300" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>

                  <h2 className="font-black tracking-tighter truncate leading-none mb-8" style={{ fontSize: 'clamp(1.8rem, 7vw, 3rem)' }}>
                    {formatUI(result.amountReceived)}
                  </h2>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                    <div>
                      <p className="text-[9px] font-black text-blue-200 uppercase tracking-widest">Total Gain</p>
                      <p className="text-sm font-black text-green-300">{formatUI(result.totalInterest)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-blue-200 uppercase tracking-widest">Maturity Date</p>
                      <p className="text-sm font-black">{result.maturityDate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* INSIGHTS CARD WITH OVERFLOW PROTECTION */}
              <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-10 shadow-sm max-w-2xl mx-auto w-full">
                 <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
                    <div className="w-40 h-40 shrink-0">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={[{name: 'PV', value: result.amountReceived}, {name: 'Gain', value: result.totalInterest}]} cx="50%" cy="50%" innerRadius={55} outerRadius={75} paddingAngle={5} dataKey="value">
                            {COLORS.map((c, i) => <Cell key={i} fill={c} stroke="none" />)}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="w-full space-y-1 overflow-hidden">
                       <SummaryRow label="Maturity Value" value={formatUI(faceValue)} />
                       <SummaryRow label="Interest Gain" value={formatUI(result.totalInterest)} color="text-green-600" />
                       <SummaryRow label="Risk Assessment" value={result.riskLevel.toUpperCase()} isLast />
                    </div>
                 </div>

                 {/* FINANCIAL INTELLIGENCE LIST - WITH TEXT WRAPPING FIX */}
                 <div className="pt-8 border-t border-slate-50 grid grid-cols-1 gap-4">
                    {result.insights.map((text, i) => (
                      <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex gap-4 overflow-hidden">
                        <Lightbulb className="text-blue-500 shrink-0 mt-0.5" size={18} />
                        {/* THE FIX: break-words and tabular-nums prevents the number from shooting out */}
                        <p className="text-[12px] text-slate-600 leading-relaxed font-medium break-words tabular-nums w-full">
                          {text}
                        </p>
                      </div>
                    ))}
                 </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      {/* MODAL */}
      {showModal && result && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-[2rem] p-8 w-full max-w-sm shadow-2xl space-y-6 relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full"><X size={20} /></button>
            <div className="flex items-center gap-3 text-blue-600"><Info size={20} /><h4 className="text-xs font-black uppercase tracking-widest">Full Amount</h4></div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-xl font-black text-slate-900 break-all tabular-nums leading-relaxed">
                {current.symbol}{formatExact(result.amountReceived)}
              </p>
            </div>
            <button onClick={() => handleCopy(result.amountReceived)} className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest">Copy Full Value</button>
          </div>
        </div>
      )}
    </div>
  );
}

function SummaryRow({ label, value, color = "text-slate-900", isLast = false }: any) {
  return (
    <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 gap-1 ${!isLast ? "border-b border-slate-50" : ""}`}>
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{label}</span>
      <span className={`text-sm sm:text-base font-black tracking-tight break-all tabular-nums text-left sm:text-right ${color}`}>{value}</span>
    </div>
  );
}