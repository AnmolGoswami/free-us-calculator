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
import { Calculator, DollarSign, Target, Briefcase, TrendingUp, HelpCircle } from "lucide-react";

export default function Retirement401kCalculator() {
  // Inputs
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [currentBalance, setCurrentBalance] = useState<number>(10000);
  const [annualSalary, setAnnualSalary] = useState<number>(75000);
  const [annualRaise, setAnnualRaise] = useState<number>(2.0);
  const [contributionPercent, setContributionPercent] = useState<number>(6);
  const [employerMatchPercent, setEmployerMatchPercent] = useState<number>(100);
  const [employerMatchLimit, setEmployerMatchLimit] = useState<number>(4);
  const [annualReturn, setAnnualReturn] = useState<number>(7.0);

  // Formatting helpers
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

  // Calculation Logic
  const chartData = useMemo(() => {
    let data = [];
    let balance = currentBalance;
    let salary = annualSalary;
    let totalPrincipal = currentBalance;
    let totalEmployer = 0;
    let totalGrowth = 0;

    for (let age = currentAge; age <= retirementAge; age++) {
      if (age === currentAge) {
        data.push({
          age,
          balance: Math.round(balance),
          totalPrincipal: Math.round(totalPrincipal),
          totalEmployer: Math.round(totalEmployer),
          totalGrowth: Math.round(totalGrowth),
        });
        continue;
      }

      // Increase salary
      salary = salary * (1 + annualRaise / 100);
      
      const yourCont = salary * (contributionPercent / 100);
      
      // Calculate Match: employer matches X% up to Y% of salary
      const matchedSalaryPercent = Math.min(contributionPercent, employerMatchLimit);
      const employerCont = salary * (matchedSalaryPercent / 100) * (employerMatchPercent / 100);

      // Assume contributions are made monthly, so they grow roughly half the year on average
      const growth = (balance + (yourCont + employerCont) / 2) * (annualReturn / 100);

      balance = balance + yourCont + employerCont + growth;
      totalPrincipal += yourCont;
      totalEmployer += employerCont;
      totalGrowth += growth;

      data.push({
        age,
        balance: Math.round(balance),
        totalPrincipal: Math.round(totalPrincipal),
        totalEmployer: Math.round(totalEmployer),
        totalGrowth: Math.round(totalGrowth),
      });
    }
    return data;
  }, [currentAge, retirementAge, currentBalance, annualSalary, annualRaise, contributionPercent, employerMatchPercent, employerMatchLimit, annualReturn]);

  const finalData = chartData[chartData.length - 1] || { balance: 0, totalPrincipal: 0, totalEmployer: 0, totalGrowth: 0 };
  
  const yearsToGrow = retirementAge - currentAge;

  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden font-sans">
      <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
        {/* LEFT COLUMN: Inputs */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-slate-50/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-sm">
              <Calculator size={20} />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg">401(k) Details</h3>
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
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Retire Age</label>
                <input
                  type="number"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Balances */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Current 401(k) Balance</label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="number"
                  value={currentBalance}
                  onChange={(e) => setCurrentBalance(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Annual Salary</label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="number"
                  value={annualSalary}
                  onChange={(e) => setAnnualSalary(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Contributions */}
            <div className="pt-4 border-t border-slate-200">
              <label className="block text-xs font-bold text-slate-600 mb-4 uppercase tracking-wide">Your Contribution (%)</label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="1"
                  value={contributionPercent}
                  onChange={(e) => setContributionPercent(Number(e.target.value))}
                  className="flex-1 accent-indigo-600"
                />
                <div className="w-16 bg-white border border-slate-300 rounded-xl px-3 py-2 text-center text-slate-900 font-bold shadow-sm">
                  {contributionPercent}%
                </div>
              </div>
            </div>

            {/* Employer Match */}
            <div className="bg-indigo-50 rounded-2xl p-4 border border-indigo-100">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={16} className="text-indigo-600" />
                <h4 className="font-bold text-indigo-900 text-sm">Employer Match</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-indigo-700/70 mb-1 uppercase tracking-wide">Match %</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={employerMatchPercent}
                      onChange={(e) => setEmployerMatchPercent(Number(e.target.value))}
                      className="w-full bg-white border border-indigo-200 rounded-lg pr-6 pl-3 py-2 text-indigo-900 font-bold text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 font-bold text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-indigo-700/70 mb-1 uppercase tracking-wide">Up to Limit</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={employerMatchLimit}
                      onChange={(e) => setEmployerMatchLimit(Number(e.target.value))}
                      className="w-full bg-white border border-indigo-200 rounded-lg pr-6 pl-3 py-2 text-indigo-900 font-bold text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 font-bold text-sm">%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide flex items-center gap-1">
                  Annual Return <HelpCircle size={12} className="text-slate-400" />
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(Number(e.target.value))}
                    step="0.1"
                    className="w-full bg-white border border-slate-300 rounded-xl pr-6 pl-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Annual Raise</label>
                <div className="relative">
                  <input
                    type="number"
                    value={annualRaise}
                    onChange={(e) => setAnnualRaise(Number(e.target.value))}
                    step="0.1"
                    className="w-full bg-white border border-slate-300 rounded-xl pr-6 pl-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
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
                <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2 flex items-center gap-2">
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
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-1">Total Free Money</p>
                <p className="text-xl font-black text-emerald-700">{formatCurrency(finalData.totalEmployer)}</p>
                <p className="text-xs text-emerald-600/80 mt-1">from employer match</p>
              </div>
            </div>

            {/* Growth Chart */}
            <div className="h-[300px] sm:h-[400px] w-full mt-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorEmployer" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPrincipal" x1="0" y1="0" x2="0" y2="1">
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
                  <Area type="monotone" dataKey="totalGrowth" name="Investment Growth" stackId="1" stroke="#8b5cf6" strokeWidth={2} fill="url(#colorGrowth)" />
                  <Area type="monotone" dataKey="totalEmployer" name="Employer Match" stackId="1" stroke="#10b981" strokeWidth={2} fill="url(#colorEmployer)" />
                  <Area type="monotone" dataKey="totalPrincipal" name="Your Contributions" stackId="1" stroke="#3b82f6" strokeWidth={2} fill="url(#colorPrincipal)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Breakdown Footer */}
          <div className="bg-slate-50 border-t border-slate-100 p-6 sm:p-8 grid grid-cols-3 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">You Contributed</p>
              </div>
              <p className="text-lg sm:text-xl font-black text-slate-900">{formatCurrency(finalData.totalPrincipal)}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Employer Match</p>
              </div>
              <p className="text-lg sm:text-xl font-black text-slate-900">{formatCurrency(finalData.totalEmployer)}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Inv. Growth</p>
              </div>
              <p className="text-lg sm:text-xl font-black text-slate-900">{formatCurrency(finalData.totalGrowth)}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
