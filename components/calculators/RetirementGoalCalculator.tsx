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
  ReferenceLine,
} from "recharts";
import { Calculator, DollarSign, Target, TrendingUp, HelpCircle, Activity, Briefcase } from "lucide-react";

export default function RetirementGoalCalculator() {
  // Inputs
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [targetIncome, setTargetIncome] = useState<number>(60000); // Today's dollars
  const [currentSavings, setCurrentSavings] = useState<number>(25000);
  
  // Advanced Settings
  const [inflationRate, setInflationRate] = useState<number>(2.5);
  const [expectedReturn, setExpectedReturn] = useState<number>(7.0);
  const [safeWithdrawalRate, setSafeWithdrawalRate] = useState<number>(4.0); // The 4% Rule

  // Formatting helpers
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

  // Calculation Logic
  const calcResults = useMemo(() => {
    const yearsToGrow = Math.max(0, retirementAge - currentAge);
    
    if (yearsToGrow === 0) {
      const required = targetIncome / (safeWithdrawalRate / 100);
      return {
        yearsToGrow: 0,
        futureIncome: targetIncome,
        retirementGoal: required,
        monthlySavingsRequired: 0,
        chartData: [],
      };
    }

    // 1. Calculate Future Income Needed (Adjusted for Inflation)
    const futureIncome = targetIncome * Math.pow(1 + inflationRate / 100, yearsToGrow);

    // 2. The FIRE Number / Retirement Goal
    const retirementGoal = futureIncome / (safeWithdrawalRate / 100);

    // 3. Calculate Monthly Savings Required
    const monthlyRate = (expectedReturn / 100) / 12;
    const totalMonths = yearsToGrow * 12;

    const futureValueOfCurrentSavings = currentSavings * Math.pow(1 + monthlyRate, totalMonths);
    const shortfall = Math.max(0, retirementGoal - futureValueOfCurrentSavings);

    // PMT formula: P = (F * r) / ((1+r)^n - 1)
    let monthlySavingsRequired = 0;
    if (shortfall > 0 && monthlyRate > 0) {
      monthlySavingsRequired = (shortfall * monthlyRate) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    } else if (shortfall > 0 && monthlyRate === 0) {
      monthlySavingsRequired = shortfall / totalMonths;
    }

    // 4. Generate Chart Data
    let data = [];
    let currentBal = currentSavings;
    let totalContributed = currentSavings;

    for (let age = currentAge; age <= retirementAge; age++) {
      if (age === currentAge) {
        data.push({ age, balance: Math.round(currentBal), totalContributed: Math.round(totalContributed), goal: Math.round(retirementGoal) });
        continue;
      }

      // Add 12 months of savings & growth
      for (let m = 0; m < 12; m++) {
        currentBal = (currentBal + monthlySavingsRequired) * (1 + monthlyRate);
        totalContributed += monthlySavingsRequired;
      }

      data.push({
        age,
        balance: Math.round(currentBal),
        totalContributed: Math.round(totalContributed),
        goal: Math.round(retirementGoal),
      });
    }

    return {
      yearsToGrow,
      futureIncome,
      retirementGoal,
      monthlySavingsRequired,
      chartData: data,
    };
  }, [currentAge, retirementAge, targetIncome, currentSavings, inflationRate, expectedReturn, safeWithdrawalRate]);

  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden font-sans">
      <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
        {/* LEFT COLUMN: Inputs */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-slate-50/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center shrink-0 shadow-sm">
              <Calculator size={20} />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg">Your FIRE Plan</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Adjust Your Numbers</p>
            </div>
          </div>

          <div className="space-y-6">
            
            {/* Core Goals */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                Desired Annual Income (Today's $)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="number"
                  value={targetIncome}
                  onChange={(e) => setTargetIncome(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Current Age</label>
                <input
                  type="number"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-fuchsia-500 outline-none transition-all shadow-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Retire Age</label>
                <input
                  type="number"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-fuchsia-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Current Savings / Portfolio</label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="number"
                  value={currentSavings}
                  onChange={(e) => setCurrentSavings(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-fuchsia-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Advanced Settings */}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1">
                  Safe Withdrawal Rate <HelpCircle size={12} className="text-slate-400" />
                </label>
                <span className="text-[10px] font-bold text-fuchsia-600 bg-fuchsia-100 px-2 py-0.5 rounded-full text-center">
                  {safeWithdrawalRate}%
                </span>
              </div>
              <input
                type="range"
                min="2.0"
                max="8.0"
                step="0.1"
                value={safeWithdrawalRate}
                onChange={(e) => setSafeWithdrawalRate(Number(e.target.value))}
                className="w-full accent-fuchsia-600"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
                <span>Conservative (3%)</span>
                <span>The 4% Rule</span>
                <span>Aggressive (5%)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wide">Est. Inflation</label>
                <div className="relative">
                  <input
                    type="number"
                    value={inflationRate}
                    onChange={(e) => setInflationRate(Number(e.target.value))}
                    step="0.1"
                    className="w-full bg-white border border-slate-300 rounded-xl pr-6 pl-3 py-2 text-slate-900 font-bold focus:ring-2 focus:ring-fuchsia-500 outline-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">%</span>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wide">Expected Return</label>
                <div className="relative">
                  <input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    step="0.1"
                    className="w-full bg-white border border-slate-300 rounded-xl pr-6 pl-3 py-2 text-slate-900 font-bold focus:ring-2 focus:ring-fuchsia-500 outline-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">%</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Results & Chart */}
        <div className="lg:col-span-8 flex flex-col bg-white">
          <div className="p-6 sm:p-8 flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-fuchsia-500 mb-2 flex items-center gap-2">
                  <Target size={14} /> Your "FIRE" Number
                </p>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {formatCurrency(calcResults.retirementGoal)}
                </h2>
                <p className="text-slate-500 text-sm font-medium mt-2">
                  Required portfolio at age {retirementAge}
                </p>
              </div>
              
              <div className="bg-fuchsia-50 border border-fuchsia-100 rounded-2xl p-4 text-left sm:text-right min-w-[160px]">
                <p className="text-[10px] font-black uppercase tracking-widest text-fuchsia-600 mb-1">Required Savings</p>
                <p className="text-2xl font-black text-fuchsia-700">{formatCurrency(calcResults.monthlySavingsRequired)}</p>
                <p className="text-xs text-fuchsia-600/80 mt-1">per month to hit goal</p>
              </div>
            </div>

            {/* Growth Chart */}
            <div className="h-[300px] sm:h-[400px] w-full mt-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={calcResults.chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#d946ef" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#d946ef" stopOpacity={0}/>
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
                    tickFormatter={(val) => `$${(val / 1000000).toFixed(1)}M`}
                    width={60}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: any, name: any) => [formatCurrency(Number(value)), name === 'balance' ? 'Projected Balance' : 'Your Goal']}
                    labelFormatter={(label) => `Age ${label}`}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 600, paddingTop: '20px' }} />
                  
                  {/* The Goal Line */}
                  <ReferenceLine y={calcResults.retirementGoal} stroke="#f43f5e" strokeDasharray="3 3" label={{ position: 'insideTopLeft', value: 'Retirement Goal', fill: '#f43f5e', fontSize: 10, fontWeight: 'bold' }} />
                  
                  <Area type="monotone" dataKey="balance" name="Projected Balance" stackId="1" stroke="#d946ef" strokeWidth={3} fill="url(#colorBalance)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Breakdown Footer */}
          <div className="bg-slate-50 border-t border-slate-100 p-6 sm:p-8 grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase size={16} className="text-slate-400" />
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Future Income Needed</p>
              </div>
              <p className="text-lg sm:text-xl font-black text-slate-900">{formatCurrency(calcResults.futureIncome)} <span className="text-sm font-medium text-slate-500">/ yr</span></p>
              <p className="text-xs text-slate-500 font-medium mt-1">Due to {inflationRate}% inflation</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Activity size={16} className="text-slate-400" />
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Total Out of Pocket</p>
              </div>
              <p className="text-lg sm:text-xl font-black text-slate-900">{formatCurrency(currentSavings + (calcResults.monthlySavingsRequired * 12 * calcResults.yearsToGrow))}</p>
              <p className="text-xs text-emerald-600 font-medium mt-1">The rest is investment growth!</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
