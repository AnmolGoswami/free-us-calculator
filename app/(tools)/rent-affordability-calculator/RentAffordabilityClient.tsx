"use client";

import { useState, useMemo } from "react";
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend
} from "recharts";
import { Copy, Check, TrendingUp, Info, Activity, Wallet, Landmark, ShieldCheck, Home } from "lucide-react";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import { calculateRentAffordability, RentResult } from "@/lib/rentUtils";
import InputField from "@/components/ui/InputField";

const COLORS = ["#3b82f6", "#64748b", "#10b981"]; // Blue, Slate, Emerald

// Enhanced money formatter with K/M/B abbreviation
const formatMoney = (num: number): string => {
  if (!num || !isFinite(num)) return "$0";

  const absNum = Math.abs(Math.round(num));

  if (absNum >= 1_000_000_000) {
    return `$${(absNum / 1_000_000_000).toFixed(2)}B`;
  } else if (absNum >= 1_000_000) {
    return `$${(absNum / 1_000_000).toFixed(2)}M`;
  } else if (absNum >= 10_000) {
    return `$${(absNum / 1_000).toFixed(1)}K`;
  } else {
    return `$${absNum.toLocaleString("en-US")}`;
  }
};

// Copy all numbers as clean text
const copyAllResults = (result: RentResult, debt: number) => {
  const summary = `
Rent Affordability Analysis
---------------------------
Recommended Rent Price     : ${formatMoney(result.recommendedRent)}
Conservative Tier          : ${formatMoney(result.conservativeRent)}
Aggressive Tier            : ${formatMoney(result.aggressiveRent)}
Net Monthly Income         : ${formatMoney(result.monthlyNet)}
Gross Monthly Income       : ${formatMoney(result.monthlyGross)}
Monthly Debt               : ${formatMoney(debt)}
Front-End DTI              : ${result.frontEndDTI}%
Back-End DTI               : ${result.backEndDTI}%
28% Rule Max Rent          : ${formatMoney(result.maxRent28Rule)}
36% Combined Debt Cap      : ${formatMoney(result.maxRent36Rule)}
Status                     : ${result.status.toUpperCase()}
  `.trim();

  navigator.clipboard.writeText(summary);
};

function PremiumCard({ title, value, subtitle, gradient, icon }: any) {
  const [copied, setCopied] = useState(false);

  const displayValue = formatMoney(value);

  return (
    <div className={`relative overflow-hidden rounded-[2rem] p-6 text-white shadow-lg bg-gradient-to-br ${gradient} group`}>
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">{title}</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter break-all">
              {displayValue}
            </h2>
          </div>
          <div className="bg-white/10 p-2 rounded-xl">
            {icon}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
          <p className="text-[11px] font-medium opacity-80 italic">{subtitle}</p>
          <button
            onClick={() => {
              navigator.clipboard.writeText(String(Math.round(value)));
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-[10px] font-bold uppercase tracking-wider"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
      {/* Abstract Background Shapes */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
    </div>
  );
}

// DTI VISUALIZER (unchanged)
function DTIBar({ value }: { value: number }) {
  const color =
    value < 30 ? "bg-emerald-500" :
    value < 36 ? "bg-amber-500" :
    "bg-rose-500";

  return (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
      <div className="flex justify-between items-end mb-3">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">Debt-to-Income Ratio</p>
          <p className="text-2xl font-black text-slate-900">{value.toFixed(1)}%</p>
        </div>
        <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${color.replace('bg-', 'text-')} bg-white border border-current opacity-80`}>
          {value < 36 ? "Healthy" : "High Risk"}
        </span>
      </div>
      <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden flex">
        <div className={`${color} h-full transition-all duration-1000 ease-out`} style={{ width: `${Math.min(value, 100)}%` }} />
      </div>
    </div>
  );
}

export default function RentAffordabilityClient() {
  const [incomeStr, setIncomeStr] = useState("95000");
  const [debtStr, setDebtStr] = useState("450");
  const [incomeType, setIncomeType] = useState<"monthly" | "yearly">("yearly");
  const [allCopied, setAllCopied] = useState(false);

  const income = Number(incomeStr.replace(/[^0-9.]/g, "")) || 0;
  const debt = Number(debtStr.replace(/[^0-9.]/g, "")) || 0;

  const result: RentResult = useMemo(() => {
    return calculateRentAffordability({
      incomeValue: income,
      incomeType,
      monthlyDebt: debt,
    });
  }, [income, debt, incomeType]);

  const pieData = [
    { name: "Rent Allocation", value: result.recommendedRent },
    { name: "Monthly Debt", value: debt },
    { name: "Disposable/Savings", value: Math.max(0, result.monthlyNet - result.recommendedRent - debt) },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12 space-y-12 bg-white">
      
      {/* 🟢 DASHBOARD HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
            <Activity size={14} /> Affordability Analysis 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
            Rent <span className="text-blue-600">Intelligence.</span>
          </h1>
        </div>
        <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="text-right">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-wider">Net Monthly</p>
            <p className="text-xl font-bold text-slate-900">{formatMoney(result.monthlyNet)}</p>
          </div>
          <Wallet className="text-blue-500" size={24} />
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">

        {/* 🟡 INPUT CONTROLS - Unchanged */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Landmark size={20} className="text-blue-600" /> Income Parameters
            </h3>

            <div className="space-y-6">
              <div className="space-y-3">
                <InputField
                  label="Gross Total Income"
                  value={incomeStr}
                  onChange={(v) => setIncomeStr(v)}
                  onNumberChange={(v) => setIncomeStr(v.toString())}
                  parseAsNumber={true}
                  prefix="$"
                />
                <div className="grid grid-cols-2 gap-2">
                  {["yearly", "monthly"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setIncomeType(t as any)}
                      className={`py-2 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all border ${
                        incomeType === t
                          ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20"
                          : "bg-white text-slate-400 border-slate-200 hover:border-blue-300"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <InputField
                label="Total Monthly Debt"
                value={debtStr}
                onChange={(v) => setDebtStr(v)}
                onNumberChange={(v) => setDebtStr(v.toString())}
                parseAsNumber={true}
                prefix="$"
                suffix="/mo"
              />
              
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                <Info size={14} className="inline mr-1 mb-1 text-blue-500" />
                Monthly debt includes car payments, student loans, and credit card minimums.
              </div>
            </div>
          </div>
        </div>

        {/* 🔵 RESULTS ENGINE */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Copy All Button */}
          <div className="flex justify-end">
            <button
              onClick={() => {
                copyAllResults(result, debt);
                setAllCopied(true);
                setTimeout(() => setAllCopied(false), 2000);
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-black text-white rounded-2xl text-sm font-semibold transition-all active:scale-95"
            >
              {allCopied ? (
                <>
                  <Check size={18} />
                  All Numbers Copied
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy All Numbers
                </>
              )}
            </button>
          </div>

          {/* PRIMARY RENT CARD */}
          <PremiumCard
            title="Recommended Rent Price"
            value={result.recommendedRent}
            subtitle="Calculated for long-term financial stability"
            gradient="from-blue-600 to-indigo-700"
            icon={<Home size={28} />}
          />

          {/* SECONDARY TIERS */}
          <div className="grid sm:grid-cols-2 gap-6">
            <PremiumCard
              title="Conservative Tier"
              value={result.conservativeRent}
              subtitle="Safest, high-savings path"
              gradient="from-emerald-500 to-teal-600"
              icon={<ShieldCheck size={20} />}
            />
            <PremiumCard
              title="Aggressive Tier"
              value={result.aggressiveRent}
              subtitle="Maximum market stretch"
              gradient="from-slate-800 to-slate-950"
              icon={<TrendingUp size={20} />}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* CHARTING */}
            <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm">
  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">
    Cashflow Allocation
  </h3>

  <ResponsiveContainer width="100%" height={250}>
    <PieChart>
      <Pie 
        data={pieData} 
        dataKey="value" 
        innerRadius={65} 
        outerRadius={85} 
        paddingAngle={8}
        stroke="none"
      >
        {pieData.map((_, i) => (
          <Cell key={i} fill={COLORS[i]} />
        ))}
      </Pie>

      <Tooltip 
        formatter={(v) => formatMoney(Number(v))}
        contentStyle={{
          borderRadius: '16px',
          border: 'none',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
        }}
      />

      <Legend 
        iconType="circle"
        wrapperStyle={{
          fontSize: '11px',
          fontWeight: 'bold',
          paddingTop: '20px'
        }}
      />
    </PieChart>
  </ResponsiveContainer>
</div>

            {/* FINANCIAL HEALTH */}
            <div className="space-y-6">
              <DTIBar value={result.backEndDTI} />

              <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full animate-pulse ${
                    result.status === "excellent" ? "bg-emerald-500" : "bg-amber-500"
                  }`} />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                    Strategy: {result.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-medium italic">
                  "{result.suggestedAction}"
                </p>
              </div>
            </div>
          </div>

          {/* TABULAR DATA */}
          <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden">
            <div className="px-8 py-6 bg-slate-50/50 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Rule-Based Breakdown</h3>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">Standard 2026 Metrics</span>
            </div>
            <div className="p-8">
              <BreakdownTable
                data={[
                  { label: "Gross Monthly Income", value: formatMoney(result.monthlyGross) },
                  { label: "Net Take-Home Estimate", value: formatMoney(result.monthlyNet) },
                  { label: "Front-End DTI Ratio", value: `${result.frontEndDTI}%` },
                  { label: "28% Rule Max Rent", value: formatMoney(result.maxRent28Rule) },
                  { label: "36% Combined Debt Cap", value: formatMoney(result.maxRent36Rule) },
                ]}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}