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
  const [currency, setCurrency] = useState("GBP");
  
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
        
        {/* LEFT */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-10 shadow-sm space-y-8">
            
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Currency
              </span>

              <div className="flex bg-slate-100 p-1 rounded-xl overflow-x-auto">
                {Object.keys(currencyConfig).map((cur) => (
                  <button 
                    key={cur} 
                    onClick={() => setCurrency(cur)} 
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black whitespace-nowrap ${
                      currency === cur 
                        ? "bg-white text-blue-600 shadow-sm" 
                        : "text-slate-400"
                    }`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div>

            <InputField
              label="Maturity Face Value"
              value={faceValue}
              onChange={(v) => setFaceValue(Number(v) || 0)}
              prefix={current.symbol}
              type="number"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Years" value={years} onChange={(v) => setYears(Number(v) || 0)} type="number" />
              <InputField label="Months" value={months} onChange={(v) => setMonths(Number(v) || 0)} type="number" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Yield Rate %"
                value={annualRate}
                onChange={(v) => setAnnualRate(Number(v) || 0)}
                step={0.1}
                type="number"
              />

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">
                  Compounding
                </label>
                <select
                  value={compoundFrequency}
                  onChange={(e) => setCompoundFrequency(e.target.value as any)}
                  className="w-full border-2 border-slate-50 rounded-2xl p-4 bg-slate-50/50 font-bold text-sm outline-none"
                >
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="continuous">Continuous</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-7 space-y-6">
          {result && (
            <>
              {/* HERO */}
              <div className="max-w-md mx-auto w-full bg-blue-600 text-white rounded-[2.5rem] p-8 shadow-xl">
                <div className="flex justify-between mb-6">
                  <p className="text-[10px] uppercase text-blue-100">Price Today</p>
                  <div className="flex gap-2">
                    <button onClick={() => setShowModal(true)}><Maximize2 size={16}/></button>
                    <button onClick={() => handleCopy(result.amountReceived)}>
                      {copied ? <Check size={16}/> : <Copy size={16}/>}
                    </button>
                  </div>
                </div>

                <h2 className="font-black text-2xl sm:text-3xl break-words mb-6">
                  {formatUI(result.amountReceived)}
                </h2>

                <div className="grid grid-cols-2 gap-4 border-t pt-4">
                  <div>
                    <p className="text-xs text-blue-200">Total Gain</p>
                    <p className="text-sm text-green-300 font-bold">{formatUI(result.totalInterest)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-blue-200">Maturity Date</p>
                    <p className="text-sm font-bold whitespace-nowrap">{result.maturityDate}</p>
                  </div>
                </div>
              </div>

              {/* CARD */}
              <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-sm max-w-2xl mx-auto w-full">

                <div className="flex flex-col md:flex-row gap-8 items-center mb-10">

                  <div className="w-40 h-40 shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={[
                          {name: 'PV', value: result.amountReceived}, 
                          {name: 'Gain', value: result.totalInterest}
                        ]} dataKey="value">
                          {COLORS.map((c, i) => <Cell key={i} fill={c} />)}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="w-full space-y-1 min-w-0">
                    <SummaryRow label="Maturity Value" value={formatUI(faceValue)} />
                    <SummaryRow label="Interest Gain" value={formatUI(result.totalInterest)} color="text-green-600" />
                    <SummaryRow label="Risk Assessment" value={result.riskLevel.toUpperCase()} isLast />
                  </div>
                </div>

                <div className="pt-6 border-t grid gap-4">
                  {result.insights.map((text, i) => (
                    <div key={i} className="flex gap-3">
                      <Lightbulb size={18}/>
                      <p className="text-sm break-words">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* MODAL */}
      {showModal && result && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-sm">
            <button onClick={() => setShowModal(false)}><X /></button>
            <p className="font-bold mt-4">
              {current.symbol}{formatExact(result.amountReceived)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ✅ FINAL FIX */
function SummaryRow({ label, value, color = "text-slate-900", isLast = false }: any) {
  return (
    <div className={`flex justify-between items-center gap-4 py-3 ${!isLast ? "border-b border-slate-50" : ""}`}>
      
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
        {label}
      </span>

      <span className={`text-sm sm:text-base font-black text-right whitespace-nowrap ${color}`}>
        {value}
      </span>

    </div>
  );
}