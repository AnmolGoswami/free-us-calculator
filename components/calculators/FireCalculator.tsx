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
  ReferenceLine,
} from "recharts";
import { Calculator, DollarSign, Target, TrendingUp, HelpCircle, Flame, Clock } from "lucide-react";

export default function FireCalculator() {
  // Inputs
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [currentPortfolio, setCurrentPortfolio] = useState<number>(50000);
  const [annualIncome, setAnnualIncome] = useState<number>(100000); // Post-tax
  const [annualExpenses, setAnnualExpenses] = useState<number>(60000);
  
  // Advanced Settings
  const [expectedReturn, setExpectedReturn] = useState<number>(7.0);
  const [safeWithdrawalRate, setSafeWithdrawalRate] = useState<number>(4.0); // The 4% Rule

  // Formatting helpers
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

  // Derived Metrics
  const annualSavings = Math.max(0, annualIncome - annualExpenses);
  const savingsRate = annualIncome > 0 ? (annualSavings / annualIncome) * 100 : 0;
  const fireNumber = annualExpenses / (safeWithdrawalRate / 100);

  // Calculation Logic
  const calcResults = useMemo(() => {
    let data = [];
    let balance = currentPortfolio;
    let age = currentAge;
    let fireAge = null;

    // Edge case: Already hit FIRE
    if (balance >= fireNumber) {
      fireAge = age;
      data.push({ age, balance: Math.round(balance) });
    } else if (annualSavings > 0 || (balance > 0 && expectedReturn > 0)) {
      // Loop until they hit FIRE or turn 100
      while (balance < fireNumber && age <= 100) {
        data.push({ age, balance: Math.round(balance) });
        
        // Compound for a year
        const growth = (balance + annualSavings / 2) * (expectedReturn / 100);
        balance += annualSavings + growth;
        age++;
        
        if (balance >= fireNumber && fireAge === null) {
          fireAge = age;
          data.push({ age, balance: Math.round(balance) }); // Push the final point
          break; // Stop charting once they hit FIRE
        }
      }
    }

    // Ensure we have at least one point
    if (data.length === 0) {
      data.push({ age: currentAge, balance: Math.round(currentPortfolio) });
    }

    return {
      fireAge,
      chartData: data,
    };
  }, [currentAge, currentPortfolio, annualSavings, annualExpenses, expectedReturn, safeWithdrawalRate, fireNumber]);

  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden font-sans">
      <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
        {/* LEFT COLUMN: Inputs */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-slate-50/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 shadow-sm">
              <Flame size={20} />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg">FIRE Numbers</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Adjust Your Path</p>
            </div>
          </div>

          <div className="space-y-6">
            
            {/* Age & Portfolio */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Current Age</label>
                <input
                  type="number"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-orange-500 outline-none transition-all shadow-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Portfolio</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                  <input
                    type="number"
                    value={currentPortfolio}
                    onChange={(e) => setCurrentPortfolio(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-8 pr-3 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-orange-500 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Income & Expenses */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                Annual Post-Tax Income
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="number"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-orange-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                Annual Expenses
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="number"
                  value={annualExpenses}
                  onChange={(e) => setAnnualExpenses(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-orange-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Savings Rate Display */}
            <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-orange-600 mb-1">Savings Rate</p>
                <p className="text-xl font-black text-orange-700">{savingsRate.toFixed(1)}%</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-widest text-orange-600 mb-1">Annual Savings</p>
                <p className="text-xl font-black text-orange-700">{formatCurrency(annualSavings)}</p>
              </div>
            </div>

            {/* Advanced Settings */}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1">
                  Safe Withdrawal <HelpCircle size={12} className="text-slate-400" />
                </label>
                <span className="text-[10px] font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full text-center">
                  {safeWithdrawalRate}%
                </span>
              </div>
              <input
                type="range"
                min="2.0"
                max="6.0"
                step="0.1"
                value={safeWithdrawalRate}
                onChange={(e) => setSafeWithdrawalRate(Number(e.target.value))}
                className="w-full accent-orange-600"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wide flex justify-between">
                <span>Expected Return</span>
                <span>{expectedReturn}%</span>
              </label>
              <input
                type="range"
                min="1.0"
                max="12.0"
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full accent-orange-600"
              />
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Results & Chart */}
        <div className="lg:col-span-8 flex flex-col bg-white">
          <div className="p-6 sm:p-8 flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2 flex items-center gap-2">
                  <Clock size={14} /> You Can Retire At Age
                </p>
                <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
                  {calcResults.fireAge !== null ? calcResults.fireAge : "100+"}
                </h2>
                {calcResults.fireAge !== null && (
                  <p className="text-slate-500 text-sm font-medium mt-2">
                    In {calcResults.fireAge - currentAge} years!
                  </p>
                )}
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left sm:text-right min-w-[160px]">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Your FIRE Number</p>
                <p className="text-2xl font-black text-slate-900">{formatCurrency(fireNumber)}</p>
                <p className="text-xs text-slate-500 mt-1">Based on {formatCurrency(annualExpenses)}/yr</p>
              </div>
            </div>

            {/* Growth Chart */}
            <div className="h-[300px] sm:h-[400px] w-full mt-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={calcResults.chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorFire" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="age" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                    tickFormatter={(val) => `Age ${val}`}
                    minTickGap={20}
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
                    formatter={(value: any, name: any) => [formatCurrency(Number(value)), 'Portfolio Balance']}
                    labelFormatter={(label) => `Age ${label}`}
                  />
                  
                  {/* The FIRE Line */}
                  <ReferenceLine y={fireNumber} stroke="#ef4444" strokeWidth={2} strokeDasharray="4 4" label={{ position: 'insideTopLeft', value: 'FIRE TARGET', fill: '#ef4444', fontSize: 11, fontWeight: '900' }} />
                  
                  <Area type="monotone" dataKey="balance" name="Portfolio Balance" stroke="#ea580c" strokeWidth={3} fill="url(#colorFire)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            {calcResults.fireAge === null && (
              <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-bold flex items-center justify-center gap-2">
                <Target size={16} /> Increase your savings rate or expected return to hit FIRE earlier!
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
