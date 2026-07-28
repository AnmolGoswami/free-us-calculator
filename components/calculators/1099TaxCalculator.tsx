"use client";

import React, { useState, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Calculator, DollarSign, Target, TrendingUp, HelpCircle, Briefcase, FileText } from "lucide-react";

// Simplified 2026 Federal Brackets
const FEDERAL_BRACKETS = {
  single: {
    standardDeduction: 16100,
    brackets: [
      { start: 0, rate: 0.10 },
      { start: 12400, rate: 0.12 },
      { start: 50400, rate: 0.22 },
      { start: 105700, rate: 0.24 },
      { start: 201775, rate: 0.32 },
      { start: 256225, rate: 0.35 },
      { start: 640600, rate: 0.37 },
    ],
  },
  married: {
    standardDeduction: 32200,
    brackets: [
      { start: 0, rate: 0.10 },
      { start: 24800, rate: 0.12 },
      { start: 100800, rate: 0.22 },
      { start: 211400, rate: 0.24 },
      { start: 403550, rate: 0.32 },
      { start: 512450, rate: 0.35 },
      { start: 768700, rate: 0.37 },
    ],
  }
};

const STATE_RATES: Record<string, number> = {
  "None (TX, FL, NV, etc.)": 0.0,
  "Low (approx 3%)": 0.03,
  "Medium (approx 5%)": 0.05,
  "High (CA, NY, etc. approx 8%)": 0.08,
};

export default function ContractorTaxCalculator() {
  const [grossIncome, setGrossIncome] = useState<number>(100000);
  const [expenses, setExpenses] = useState<number>(15000);
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");
  const [stateTaxLevel, setStateTaxLevel] = useState<string>("Medium (approx 5%)");

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

  const calcResults = useMemo(() => {
    const netBusinessIncome = Math.max(0, grossIncome - expenses);

    // 1. SE Tax (15.3% on 92.35% of net income)
    const seTaxableIncome = netBusinessIncome * 0.9235;
    const socialSecurityTax = Math.min(seTaxableIncome, 184500) * 0.124; // 12.4% up to SS limit
    const medicareTax = seTaxableIncome * 0.029; // 2.9%
    const totalSETax = socialSecurityTax + medicareTax;

    // 2. Federal Income Tax
    const halfSETax = totalSETax / 2;
    const qbiDeduction = Math.max(0, (netBusinessIncome - halfSETax) * 0.20); // Simplified 20% QBI
    const config = FEDERAL_BRACKETS[filingStatus];
    
    let taxableIncome = Math.max(0, netBusinessIncome - halfSETax - qbiDeduction - config.standardDeduction);
    let federalTax = 0;
    
    for (let i = 0; i < config.brackets.length; i++) {
      const lower = config.brackets[i].start;
      const rate = config.brackets[i].rate;
      const upper = i + 1 < config.brackets.length ? config.brackets[i + 1].start : Infinity;
      const inBracket = Math.min(taxableIncome, upper) - lower;
      if (inBracket > 0) federalTax += inBracket * rate;
    }

    // 3. State Tax
    const stateRate = STATE_RATES[stateTaxLevel];
    const stateTax = netBusinessIncome * stateRate;

    // 4. Totals
    const totalTaxes = totalSETax + federalTax + stateTax;
    const netTakeHome = netBusinessIncome - totalTaxes;
    const effectiveTaxRate = netBusinessIncome > 0 ? (totalTaxes / netBusinessIncome) * 100 : 0;

    const chartData = [
      { name: "Take-Home Pay", value: Math.round(netTakeHome), color: "#10b981" },
      { name: "Federal Tax", value: Math.round(federalTax), color: "#6366f1" },
      { name: "Self-Employment Tax", value: Math.round(totalSETax), color: "#f59e0b" },
      { name: "State Tax", value: Math.round(stateTax), color: "#0ea5e9" },
    ];

    return {
      netBusinessIncome,
      totalSETax,
      federalTax,
      stateTax,
      totalTaxes,
      netTakeHome,
      effectiveTaxRate,
      chartData: chartData.filter(d => d.value > 0), // hide empty slices
    };
  }, [grossIncome, expenses, filingStatus, stateTaxLevel]);

  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden font-sans">
      <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
        {/* LEFT COLUMN: Inputs */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-sm">
              <Briefcase size={20} />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg">1099 Profile</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enter Your Earnings</p>
            </div>
          </div>

          <div className="space-y-6">
            
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide flex justify-between">
                Gross 1099 Income
                <span className="text-indigo-600 font-black">2026</span>
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="number"
                  value={grossIncome}
                  onChange={(e) => setGrossIncome(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide flex items-center gap-1">
                Business Expenses <HelpCircle size={12} className="text-slate-400" />
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="number"
                  value={expenses}
                  onChange={(e) => setExpenses(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-sm"
                />
              </div>
              <p className="text-[10px] text-slate-500 font-semibold mt-1">Tools, software, travel, home office, etc.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Filing Status</label>
                <select
                  value={filingStatus}
                  onChange={(e) => setFilingStatus(e.target.value as any)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm appearance-none"
                >
                  <option value="single">Single</option>
                  <option value="married">Married (Joint)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">State Tax</label>
                <select
                  value={stateTaxLevel}
                  onChange={(e) => setStateTaxLevel(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm appearance-none text-sm"
                >
                  {Object.keys(STATE_RATES).map((lvl) => (
                    <option key={lvl} value={lvl}>{lvl}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-4 border border-indigo-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-1">Net Business Income</p>
                <p className="text-xl font-black text-indigo-700">{formatCurrency(calcResults.netBusinessIncome)}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-1">Taxable Base</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Results & Chart */}
        <div className="lg:col-span-7 flex flex-col bg-white">
          <div className="p-6 sm:p-8 flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-2">
                  <FileText size={14} /> Total Estimated Taxes
                </p>
                <h2 className="text-4xl sm:text-5xl font-black text-rose-600 tracking-tight">
                  {formatCurrency(calcResults.totalTaxes)}
                </h2>
                <p className="text-slate-500 text-sm font-medium mt-2">
                  Effective Tax Rate: <span className="font-black text-slate-700">{calcResults.effectiveTaxRate.toFixed(1)}%</span>
                </p>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-left sm:text-right min-w-[160px]">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-1">Net Take-Home</p>
                <p className="text-2xl font-black text-emerald-600">{formatCurrency(calcResults.netTakeHome)}</p>
              </div>
            </div>

            {/* Breakdown Chart */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center mt-6">
              <div className="w-full" style={{ minHeight: '220px' }}>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={calcResults.chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {calcResults.chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: any) => formatCurrency(Number(value))}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4">
                {calcResults.chartData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm font-bold text-slate-600">{item.name}</span>
                    </div>
                    <span className="text-sm font-black text-slate-900">{formatCurrency(item.value)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-xl text-amber-800 text-sm flex items-start gap-3">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <p className="font-medium">
                <strong>Remember:</strong> Unlike W2 employees, 1099 contractors must pay both the employer and employee portion of FICA taxes (15.3%). Be sure to save this money aside for quarterly estimated payments!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Temporary AlertCircle component since it wasn't imported from lucide-react in the original list
function AlertCircle({ className, size }: { className?: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  );
}
