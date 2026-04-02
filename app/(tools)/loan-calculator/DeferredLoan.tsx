"use client";

import { useState, useMemo } from "react";
import InputField from "@/components/ui/InputField";
import { Copy, Check, Lightbulb, ChevronDown, Wallet, Percent as PercentIcon, Landmark, Calendar, TrendingUp } from "lucide-react";
import { calculateDeferredLoan, CompoundFrequency } from "@/lib/loanCalculator";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

type Currency = "USD" | "INR" | "EUR" | "GBP";
const COLORS = ["#2563eb", "#ef4444"];

export default function DeferredLoan() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(3);
  const [compoundFrequency, setCompoundFrequency] = useState<CompoundFrequency>("monthly");
  const [currency, setCurrency] = useState<Currency>("INR");
  const [copied, setCopied] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  const formatCurrency = (num: number = 0) => {
    return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
      style: "currency", currency, maximumFractionDigits: 0
    }).format(num);
  };

  const currencySymbol = currency === "INR" ? "₹" : "$";

  const result = useMemo(() => {
    if (!principal || !years) return null;
    return calculateDeferredLoan({ principal, annualRate: rate, years, compoundFrequency, currencySymbol });
  }, [principal, rate, years, compoundFrequency, currencySymbol]);

  const handleCopy = () => {
    if (!result) return;
    const text = `Deferred Loan: ${formatCurrency(principal)} | Maturity Amount: ${formatCurrency(result.amountDueAtMaturity)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* INPUTS */}
        <div className="space-y-6 w-full">
          <div className="flex gap-2 bg-gray-100 p-1.5 rounded-2xl w-fit">
            {(["INR", "USD", "EUR", "GBP"] as const).map((cur) => (
              <button key={cur} onClick={() => setCurrency(cur)} className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${currency === cur ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-white"}`}>
                {cur}
              </button>
            ))}
          </div>
          <div className="bg-white border border-gray-200 rounded-[2.5rem] p-6 sm:p-10 shadow-sm space-y-6">
            <InputField label="Loan Amount" value={principal} onChange={setPrincipal} prefix={currencySymbol} type="number" />
            <InputField label="Interest Rate (%)" value={rate} onChange={setRate} step={0.1} type="number" />
            <InputField label="Years" value={years} onChange={setYears} type="number" />
            <div className="pt-4 border-t border-gray-100">
              <label className="text-[10px] font-black text-gray-400 uppercase mb-2 block tracking-widest">Compound Frequency</label>
              <select value={compoundFrequency} onChange={(e) => setCompoundFrequency(e.target.value as any)} className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 font-bold text-sm outline-none">
                {["monthly", "daily", "continuous", "yearly", "quarterly"].map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <div className="space-y-6 w-full min-w-0">
          {result && (
            <>
              <div className="bg-blue-600 text-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Maturity Amount</p>
                    <button onClick={handleCopy} className="p-3 bg-white/10 rounded-xl hover:bg-white/20 active:scale-90 transition-all">
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-black tracking-tighter break-all">{formatCurrency(result.amountDueAtMaturity)}</h2>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 p-6 rounded-3xl flex items-center gap-4 shadow-sm">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><TrendingUp size={24}/></div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Growth %</p>
                    <p className="text-lg font-bold">{(result.interestToPrincipalRatio * 100).toFixed(1)}%</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-3xl flex items-center gap-4 shadow-sm">
                  <div className="p-3 bg-red-50 text-red-600 rounded-2xl"><PercentIcon size={24}/></div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Interest</p>
                    <p className="text-lg font-bold text-red-600">{formatCurrency(result.totalInterest)}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-[2.5rem] shadow-sm overflow-hidden">
                <button onClick={() => setIsDetailsOpen(!isDetailsOpen)} className="w-full flex items-center justify-between p-6 sm:p-8 hover:bg-gray-50 border-b border-gray-100 transition-all">
                  <div className="flex items-center gap-3">
                    <Wallet className="text-blue-600" size={20} />
                    <h3 className="text-sm font-black uppercase tracking-widest">Loan Breakdown</h3>
                  </div>
                  <div className={`bg-gray-100 p-2 rounded-full transition-transform ${isDetailsOpen ? 'rotate-180' : ''}`}><ChevronDown size={20} /></div>
                </button>
                {isDetailsOpen && (
                  <div className="p-6 sm:p-10 space-y-6">
                    <SummaryRow label="Initial Loan" value={formatCurrency(principal)} />
                    <SummaryRow label="Maturity Date" value={result.maturityDate} />
                    <SummaryRow label="Risk Assessment" value={result.riskLevel.toUpperCase()} valueClass={result.riskLevel === 'low' ? 'text-green-600' : 'text-orange-600'} isLast />
                    <div className="h-[250px] pt-6">
                      <ResponsiveContainer><PieChart><Pie data={[{ name: "Principal", value: principal }, { name: "Interest", value: result.totalInterest }]} cx="50%" cy="50%" innerRadius={60} outerRadius={85} paddingAngle={5} dataKey="value">{COLORS.map((col, i) => <Cell key={i} fill={col} stroke="none" />)}</Pie><Tooltip contentStyle={{ borderRadius: '15px' }} /><Legend verticalAlign="bottom" /></PieChart></ResponsiveContainer>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value, valueClass = "text-gray-900", isLast = false }: any) {
  return (
    <div className={`flex justify-between items-center py-4 ${!isLast ? "border-b border-gray-50" : ""} gap-4`}>
      <span className="text-[13px] font-bold text-gray-500">{label}</span>
      <span className={`text-sm sm:text-base font-bold break-all ${valueClass}`}>{value}</span>
    </div>
  );
}