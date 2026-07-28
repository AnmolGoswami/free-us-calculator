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
  Legend
} from "recharts";
import { TrendingUp, DollarSign, Percent, Calendar, AlertCircle } from "lucide-react";

export default function CompoundInterestCalculator() {
  const [initialInvestment, setInitialInvestment] = useState<number>(10000);
  const [contribution, setContribution] = useState<number>(500);
  const [contributionFrequency, setContributionFrequency] = useState<"monthly" | "annually">("monthly");
  const [years, setYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8); // 8% historical average
  
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

  const calcResults = useMemo(() => {
    let currentBalance = initialInvestment;
    let totalPrincipal = initialInvestment;
    
    const chartData = [];
    const monthlyRate = interestRate / 100 / 12;
    const annualRate = interestRate / 100;

    chartData.push({
      year: 0,
      "Total Principal": initialInvestment,
      "Total Interest": 0,
      balance: initialInvestment,
    });

    for (let y = 1; y <= years; y++) {
      if (contributionFrequency === "monthly") {
        for (let m = 0; m < 12; m++) {
          currentBalance += contribution;
          totalPrincipal += contribution;
          currentBalance *= (1 + monthlyRate);
        }
      } else {
        currentBalance += contribution;
        totalPrincipal += contribution;
        currentBalance *= (1 + annualRate);
      }

      chartData.push({
        year: y,
        "Total Principal": Math.round(totalPrincipal),
        "Total Interest": Math.round(currentBalance - totalPrincipal),
        balance: Math.round(currentBalance),
      });
    }

    const finalBalance = currentBalance;
    const totalInterest = finalBalance - totalPrincipal;

    return {
      finalBalance,
      totalPrincipal,
      totalInterest,
      chartData,
    };
  }, [initialInvestment, contribution, contributionFrequency, years, interestRate]);

  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden font-sans">
      <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
        {/* LEFT COLUMN: Inputs */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-slate-50/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
              <TrendingUp size={20} />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg">Growth Engine</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Investment Details</p>
            </div>
          </div>

          <div className="space-y-6">
            
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                Initial Investment
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="number"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide">
                  Regular Contribution
                </label>
                <div className="flex bg-slate-200/50 rounded-lg p-0.5">
                  <button
                    onClick={() => setContributionFrequency("monthly")}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${contributionFrequency === "monthly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    /mo
                  </button>
                  <button
                    onClick={() => setContributionFrequency("annually")}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${contributionFrequency === "annually" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    /yr
                  </button>
                </div>
              </div>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="number"
                  value={contribution}
                  onChange={(e) => setContribution(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Return Rate</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-4 pr-8 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm"
                  />
                  <Percent className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Years to Grow</label>
                <div className="relative">
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-4 pr-8 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 flex gap-3 mt-4">
              <AlertCircle size={16} className="text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs font-semibold text-emerald-800 leading-relaxed">
                The S&P 500 has historically returned an average of about 10% annually before inflation (or 7-8% adjusted for inflation).
              </p>
            </div>
            
          </div>
        </div>

        {/* RIGHT COLUMN: Results & Chart */}
        <div className="lg:col-span-8 flex flex-col bg-white">
          <div className="p-6 sm:p-8 flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                  Future Portfolio Value
                </p>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  {formatCurrency(calcResults.finalBalance)}
                </h2>
              </div>
              
              <div className="flex gap-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Total Principal</p>
                  <p className="text-lg font-black text-slate-700">{formatCurrency(calcResults.totalPrincipal)}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-1">Interest Earned</p>
                  <p className="text-lg font-black text-emerald-600">+{formatCurrency(calcResults.totalInterest)}</p>
                </div>
              </div>
            </div>

            {/* Stacked Area Chart */}
            <div className="w-full mt-6" style={{ minHeight: '350px' }}>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={calcResults.chartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPrincipal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.2}/>
                    </linearGradient>
                    <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="year" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600 }}
                    tickFormatter={(val) => `Yr ${val}`}
                    minTickGap={30}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600 }}
                    tickFormatter={(val) => `$${(val / 1000)}k`}
                    width={60}
                  />
                  <Tooltip
                    formatter={(value: any) => formatCurrency(Number(value))}
                    labelFormatter={(label) => `Year ${label}`}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                    itemStyle={{ fontWeight: 800 }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '14px', fontWeight: 700 }} />
                  <Area 
                    type="monotone" 
                    dataKey="Total Principal" 
                    stackId="1" 
                    stroke="#64748b" 
                    fill="url(#colorPrincipal)" 
                    strokeWidth={3}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="Total Interest" 
                    stackId="1" 
                    stroke="#10b981" 
                    fill="url(#colorInterest)" 
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-8 text-center px-4">
              <p className="text-sm font-semibold text-slate-500">
                In year {years}, your money earns <strong className="text-emerald-600">{formatCurrency(calcResults.chartData[calcResults.chartData.length - 1]["Total Interest"] - calcResults.chartData[calcResults.chartData.length - 2]["Total Interest"])}</strong> in interest alone! This is the power of compounding.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
