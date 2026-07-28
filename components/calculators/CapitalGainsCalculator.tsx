"use client";

import React, { useState, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DollarSign, AlertCircle, TrendingUp, Key, Banknote, Calendar } from "lucide-react";

// 2025/2026 Estimated Tax Brackets
const BRACKETS_ORDINARY = {
  single: [
    { upTo: 11925, rate: 0.10 },
    { upTo: 48475, rate: 0.12 },
    { upTo: 103350, rate: 0.22 },
    { upTo: 197300, rate: 0.24 },
    { upTo: 250525, rate: 0.32 },
    { upTo: 626350, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
  married: [
    { upTo: 23850, rate: 0.10 },
    { upTo: 96950, rate: 0.12 },
    { upTo: 206700, rate: 0.22 },
    { upTo: 394600, rate: 0.24 },
    { upTo: 501050, rate: 0.32 },
    { upTo: 751600, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
  hoh: [
    { upTo: 17000, rate: 0.10 },
    { upTo: 64850, rate: 0.12 },
    { upTo: 103350, rate: 0.22 },
    { upTo: 197300, rate: 0.24 },
    { upTo: 250525, rate: 0.32 },
    { upTo: 626350, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
};

const BRACKETS_LONG_TERM = {
  single: [
    { upTo: 48350, rate: 0 },
    { upTo: 533400, rate: 0.15 },
    { upTo: Infinity, rate: 0.20 },
  ],
  married: [
    { upTo: 96700, rate: 0 },
    { upTo: 600050, rate: 0.15 },
    { upTo: Infinity, rate: 0.20 },
  ],
  hoh: [
    { upTo: 64750, rate: 0 },
    { upTo: 566700, rate: 0.15 },
    { upTo: Infinity, rate: 0.20 },
  ],
};

const NIIT_THRESHOLDS = {
  single: 200000,
  married: 250000,
  hoh: 200000,
};

function calculateProgressiveTax(income: number, brackets: { upTo: number, rate: number }[]) {
  let tax = 0;
  let previousLimit = 0;
  for (const bracket of brackets) {
    if (income > previousLimit) {
      const taxableAmountInBracket = Math.min(income, bracket.upTo) - previousLimit;
      tax += taxableAmountInBracket * bracket.rate;
      previousLimit = bracket.upTo;
    } else {
      break;
    }
  }
  return tax;
}

export default function CapitalGainsCalculator() {
  const [purchasePrice, setPurchasePrice] = useState<number>(10000);
  const [salePrice, setSalePrice] = useState<number>(25000);
  const [holdDuration, setHoldDuration] = useState<"short" | "long">("long");
  const [filingStatus, setFilingStatus] = useState<"single" | "married" | "hoh">("single");
  const [annualIncome, setAnnualIncome] = useState<number>(85000);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

  const calcResults = useMemo(() => {
    const totalGain = Math.max(0, salePrice - purchasePrice);
    if (totalGain === 0) {
      return {
        totalGain: 0,
        taxOwed: 0,
        netProfit: 0,
        effectiveRate: 0,
        chartData: [{ name: "Principal (No Gain)", value: purchasePrice, color: "#64748b" }]
      };
    }

    let taxOwed = 0;
    const totalIncomeIncludingGain = annualIncome + totalGain;

    if (holdDuration === "short") {
      // Short term: taxed as ordinary income
      const taxOnBaseIncome = calculateProgressiveTax(annualIncome, BRACKETS_ORDINARY[filingStatus]);
      const taxOnTotalIncome = calculateProgressiveTax(totalIncomeIncludingGain, BRACKETS_ORDINARY[filingStatus]);
      taxOwed = taxOnTotalIncome - taxOnBaseIncome;
    } else {
      // Long term: progressive capital gains brackets
      const brackets = BRACKETS_LONG_TERM[filingStatus];
      
      let baseTax = 0;
      let previousLimit = 0;
      for (const bracket of brackets) {
        if (annualIncome > previousLimit) {
          const taxableAmountInBracket = Math.min(annualIncome, bracket.upTo) - previousLimit;
          baseTax += taxableAmountInBracket * bracket.rate;
          previousLimit = bracket.upTo;
        } else {
          break;
        }
      }

      let totalTax = 0;
      previousLimit = 0;
      for (const bracket of brackets) {
        if (totalIncomeIncludingGain > previousLimit) {
          const taxableAmountInBracket = Math.min(totalIncomeIncludingGain, bracket.upTo) - previousLimit;
          totalTax += taxableAmountInBracket * bracket.rate;
          previousLimit = bracket.upTo;
        } else {
          break;
        }
      }

      taxOwed = totalTax - baseTax;
    }

    // Net Investment Income Tax (NIIT) - 3.8%
    const threshold = NIIT_THRESHOLDS[filingStatus];
    if (totalIncomeIncludingGain > threshold) {
      const amountOverThreshold = totalIncomeIncludingGain - threshold;
      const niitBase = Math.min(totalGain, amountOverThreshold);
      taxOwed += niitBase * 0.038;
    }

    const netProfit = totalGain - taxOwed;
    const effectiveRate = (taxOwed / totalGain) * 100;

    const chartData = [
      { name: "Initial Investment", value: purchasePrice, color: "#3b82f6" }, // blue
      { name: "Net Profit", value: netProfit, color: "#10b981" }, // emerald
      { name: "Taxes Paid", value: taxOwed, color: "#ef4444" }, // red
    ].filter(d => d.value > 0);

    return {
      totalGain,
      taxOwed,
      netProfit,
      effectiveRate,
      chartData,
    };
  }, [purchasePrice, salePrice, holdDuration, filingStatus, annualIncome]);

  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden font-sans">
      <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
        {/* LEFT COLUMN: Inputs */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center shrink-0 shadow-sm">
              <Banknote size={20} />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg">Asset Details</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Stock, Crypto, or Real Estate</p>
            </div>
          </div>

          <div className="space-y-6">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                  Purchase Price
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="number"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-violet-500 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                  Sale Price
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="number"
                    value={salePrice}
                    onChange={(e) => setSalePrice(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-violet-500 outline-none transition-all shadow-sm text-emerald-600"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                Hold Duration
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setHoldDuration("short")}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${holdDuration === "short" ? "border-violet-600 bg-violet-50 text-violet-700" : "border-slate-200 bg-white text-slate-500 hover:border-violet-200"}`}
                >
                  <span className="font-bold text-sm">{"< 1 Year"}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider opacity-80">Short-Term</span>
                </button>
                <button
                  onClick={() => setHoldDuration("long")}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${holdDuration === "long" ? "border-emerald-600 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-white text-slate-500 hover:border-emerald-200"}`}
                >
                  <span className="font-bold text-sm">{"> 1 Year"}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider opacity-80">Long-Term</span>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                <Key size={14} className="text-violet-500" />
                Tax Bracket Info
              </h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Filing Status</label>
                  <select
                    value={filingStatus}
                    onChange={(e) => setFilingStatus(e.target.value as any)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-violet-500 outline-none shadow-sm appearance-none"
                  >
                    <option value="single">Single</option>
                    <option value="married">Married Filing Jointly</option>
                    <option value="hoh">Head of Household</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                    Annual Ordinary Income
                  </label>
                  <p className="text-[11px] text-slate-500 mb-2 leading-tight">Your regular income determines your exact capital gains tax bracket.</p>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="number"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(Number(e.target.value))}
                      className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-violet-500 outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {holdDuration === "short" ? (
              <div className="bg-rose-50 rounded-xl p-4 border border-rose-100 flex gap-3 mt-4">
                <AlertCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                <p className="text-xs font-semibold text-rose-800 leading-relaxed">
                  <strong>Short-Term Warning:</strong> Selling before holding for 1 year taxes your gains as ordinary income, which can push you into a much higher bracket!
                </p>
              </div>
            ) : (
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 flex gap-3 mt-4">
                <TrendingUp size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs font-semibold text-emerald-800 leading-relaxed">
                  <strong>Long-Term Advantage:</strong> Holding for over a year unlocks significantly lower capital gains rates (0%, 15%, or 20%).
                </p>
              </div>
            )}
            
          </div>
        </div>

        {/* RIGHT COLUMN: Results & Chart */}
        <div className="lg:col-span-7 flex flex-col bg-white">
          <div className="p-6 sm:p-8 flex-1">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-2">
                  <Calendar size={14} /> Estimated Tax Owed
                </p>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight text-rose-600">
                  {formatCurrency(calcResults.taxOwed)}
                </h2>
                <p className="text-slate-500 text-sm font-medium mt-2">
                  Effective Tax Rate: <span className="font-black text-slate-700">{calcResults.effectiveRate.toFixed(1)}%</span>
                </p>
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
                      innerRadius={65}
                      outerRadius={95}
                      paddingAngle={4}
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
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Capital Gain</p>
                <p className="text-lg font-black text-slate-900">{formatCurrency(calcResults.totalGain)}</p>
                <p className="text-xs text-slate-500 mt-1">Before Taxes</p>
              </div>
              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Net Profit</p>
                <p className="text-lg font-black text-emerald-700">{formatCurrency(calcResults.netProfit)}</p>
                <p className="text-xs text-emerald-600 mt-1">In Your Pocket</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
