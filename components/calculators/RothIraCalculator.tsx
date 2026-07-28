"use client";

import React, { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Calculator, DollarSign, Target, TrendingUp, HelpCircle, AlertCircle } from "lucide-react";

export default function RothIraCalculator() {
  // Inputs
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [currentBalance, setCurrentBalance] = useState<number>(5000);
  const [annualContribution, setAnnualContribution] = useState<number>(7000);
  const [annualReturn, setAnnualReturn] = useState<number>(7.0);

  // Formatting helpers
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

  // Calculation Logic
  const chartData = useMemo(() => {
    let data = [];
    let balance = currentBalance;
    let totalPrincipal = currentBalance;
    let totalGrowth = 0;

    for (let age = currentAge; age <= retirementAge; age++) {
      if (age === currentAge) {
        data.push({
          age,
          balance: Math.round(balance),
          totalPrincipal: Math.round(totalPrincipal),
          totalGrowth: Math.round(totalGrowth),
        });
        continue;
      }

      // Assume contributions are made monthly, so they grow roughly half the year on average
      const growth = (balance + annualContribution / 2) * (annualReturn / 100);

      balance = balance + annualContribution + growth;
      totalPrincipal += annualContribution;
      totalGrowth += growth;

      data.push({
        age,
        balance: Math.round(balance),
        totalPrincipal: Math.round(totalPrincipal),
        totalGrowth: Math.round(totalGrowth),
      });
    }
    return data;
  }, [currentAge, retirementAge, currentBalance, annualContribution, annualReturn]);

  const finalData = chartData[chartData.length - 1] || { balance: 0, totalPrincipal: 0, totalGrowth: 0 };
  const yearsToGrow = retirementAge - currentAge;

  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden font-sans">
      <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
        {/* LEFT COLUMN: Inputs */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-slate-50/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center shrink-0 shadow-sm">
              <Calculator size={20} />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg">Roth IRA Details</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Adjust Your Numbers</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Age */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Current Age</label>
                <input
                  type="number"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all shadow-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Retire Age</label>
                <input
                  type="number"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Balances */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Current IRA Balance</label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="number"
                  value={currentBalance}
                  onChange={(e) => setCurrentBalance(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide">Annual Contribution</label>
                <span className="text-[10px] font-bold text-violet-500 bg-violet-100 px-2 py-0.5 rounded-full">Max $7,000</span>
              </div>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="number"
                  value={annualContribution}
                  onChange={(e) => setAnnualContribution(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all shadow-sm"
                />
              </div>
              {annualContribution > 7000 && annualContribution <= 8000 && (
                <p className="text-xs text-amber-600 font-medium flex items-center gap-1 mt-2">
                  <AlertCircle size={12} /> Limit is $8,000 only if age 50+
                </p>
              )}
              {annualContribution > 8000 && (
                <p className="text-xs text-amber-600 font-medium flex items-center gap-1 mt-2">
                  <AlertCircle size={12} /> The IRS contribution limit is $7,000 for 2026.
                </p>
              )}
            </div>

            {/* Advanced */}
            <div className="pt-4 border-t border-slate-200">
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide flex items-center gap-1">
                Expected Annual Return <HelpCircle size={12} className="text-slate-400" />
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={annualReturn}
                  onChange={(e) => setAnnualReturn(Number(e.target.value))}
                  step="0.1"
                  className="w-full bg-white border border-slate-300 rounded-xl pr-6 pl-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-violet-500 outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Results & Chart */}
        <div className="lg:col-span-8 flex flex-col bg-white">
          <div className="p-6 sm:p-8 flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-violet-500 mb-2 flex items-center gap-2">
                  <Target size={14} /> Future Projection
                </p>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {formatCurrency(finalData.balance)}
                </h2>
                <p className="text-slate-500 text-sm font-medium mt-2">
                  Estimated balance at age {retirementAge} ({yearsToGrow > 0 ? `${yearsToGrow} years from now` : "Now"})
                </p>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-left sm:text-right min-w-[160px]">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-1">Total Tax-Free Growth</p>
                <p className="text-xl font-black text-emerald-700">{formatCurrency(finalData.totalGrowth)}</p>
                <p className="text-xs text-emerald-600/80 mt-1">100% tax-free at withdrawal</p>
              </div>
            </div>

            {/* Growth Chart */}
            <div className="h-[300px] sm:h-[400px] w-full mt-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorGrowthRoth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPrincipalRoth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="age" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                    tickFormatter={(val) => `Age ${val}`}
                    minTickGap={30}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                    tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                    width={60}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: any) => formatCurrency(Number(value))}
                    labelFormatter={(label) => `Age ${label}`}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 600, paddingTop: '20px' }} />
                  <Area type="monotone" dataKey="totalGrowth" name="Tax-Free Growth" stackId="1" stroke="#8b5cf6" strokeWidth={2} fill="url(#colorGrowthRoth)" />
                  <Area type="monotone" dataKey="totalPrincipal" name="Your Contributions" stackId="1" stroke="#3b82f6" strokeWidth={2} fill="url(#colorPrincipalRoth)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Breakdown Footer */}
          <div className="bg-slate-50 border-t border-slate-100 p-6 sm:p-8 grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Total Contributions</p>
              </div>
              <p className="text-lg sm:text-xl font-black text-slate-900">{formatCurrency(finalData.totalPrincipal)}</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Already taxed</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Total Tax-Free Growth</p>
              </div>
              <p className="text-lg sm:text-xl font-black text-slate-900">{formatCurrency(finalData.totalGrowth)}</p>
              <p className="text-xs text-emerald-600 font-medium mt-1">100% yours to keep</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
