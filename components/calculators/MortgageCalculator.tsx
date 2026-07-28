"use client";

import React, { useState, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Home, DollarSign, Percent, AlertCircle, TrendingUp, Building } from "lucide-react";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState<number>(400000);
  
  // Down payment can be toggled between % and $
  const [downPaymentMode, setDownPaymentMode] = useState<"percent" | "amount">("percent");
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [downPaymentAmount, setDownPaymentAmount] = useState<number>(80000);
  
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTerm, setLoanTerm] = useState<number>(30); // years
  
  // Taxes and Insurance
  const [propertyTaxAnnual, setPropertyTaxAnnual] = useState<number>(4800); // $400/mo
  const [homeInsuranceAnnual, setHomeInsuranceAnnual] = useState<number>(1200); // $100/mo
  const [hoaMonthly, setHoaMonthly] = useState<number>(0);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

  // Sync down payment fields
  const handleDownPaymentPercentChange = (val: number) => {
    setDownPaymentPercent(val);
    setDownPaymentAmount(Math.round(homePrice * (val / 100)));
  };

  const handleDownPaymentAmountChange = (val: number) => {
    setDownPaymentAmount(val);
    if (homePrice > 0) {
      setDownPaymentPercent(Number(((val / homePrice) * 100).toFixed(2)));
    }
  };

  const handleHomePriceChange = (val: number) => {
    setHomePrice(val);
    if (downPaymentMode === "percent") {
      setDownPaymentAmount(Math.round(val * (downPaymentPercent / 100)));
    } else {
      setDownPaymentPercent(Number(((downPaymentAmount / val) * 100).toFixed(2)));
    }
  };

  const calcResults = useMemo(() => {
    const loanAmount = Math.max(0, homePrice - downPaymentAmount);
    
    // Principal & Interest (P&I)
    let monthlyPI = 0;
    if (loanAmount > 0 && interestRate > 0) {
      const monthlyRate = interestRate / 100 / 12;
      const numPayments = loanTerm * 12;
      monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    } else if (loanAmount > 0 && interestRate === 0) {
      monthlyPI = loanAmount / (loanTerm * 12);
    }

    // Property Tax
    const monthlyTax = propertyTaxAnnual / 12;
    
    // Homeowners Insurance
    const monthlyInsurance = homeInsuranceAnnual / 12;

    // PMI (Private Mortgage Insurance)
    let monthlyPMI = 0;
    if (downPaymentPercent < 20 && loanAmount > 0) {
      // Estimate PMI at 0.5% of loan amount annually
      monthlyPMI = (loanAmount * 0.005) / 12;
    }

    const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI + hoaMonthly;

    // Amortization insight
    const totalPayments = monthlyPI * (loanTerm * 12);
    const totalInterest = Math.max(0, totalPayments - loanAmount);

    const chartData = [
      { name: "Principal & Interest", value: Math.round(monthlyPI), color: "#6366f1" },
      { name: "Property Tax", value: Math.round(monthlyTax), color: "#0ea5e9" },
      { name: "Home Insurance", value: Math.round(monthlyInsurance), color: "#10b981" },
    ];
    if (monthlyPMI > 0) chartData.push({ name: "PMI", value: Math.round(monthlyPMI), color: "#f59e0b" });
    if (hoaMonthly > 0) chartData.push({ name: "HOA Fees", value: Math.round(hoaMonthly), color: "#8b5cf6" });

    return {
      loanAmount,
      monthlyPI,
      monthlyTax,
      monthlyInsurance,
      monthlyPMI,
      totalMonthly,
      totalInterest,
      chartData: chartData.filter(d => d.value > 0),
    };
  }, [homePrice, downPaymentAmount, downPaymentPercent, interestRate, loanTerm, propertyTaxAnnual, homeInsuranceAnnual, hoaMonthly]);

  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden font-sans">
      <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
        {/* LEFT COLUMN: Inputs */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
              <Home size={20} />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg">Property Details</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enter Loan Info</p>
            </div>
          </div>

          <div className="space-y-6">
            
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                Home Price
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => handleHomePriceChange(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide">
                  Down Payment
                </label>
                <div className="flex bg-slate-200/50 rounded-lg p-0.5">
                  <button
                    onClick={() => setDownPaymentMode("percent")}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${downPaymentMode === "percent" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    %
                  </button>
                  <button
                    onClick={() => setDownPaymentMode("amount")}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${downPaymentMode === "amount" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    $
                  </button>
                </div>
              </div>
              
              <div className="relative">
                {downPaymentMode === "amount" ? (
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                ) : (
                  <Percent className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                )}
                <input
                  type="number"
                  value={downPaymentMode === "percent" ? downPaymentPercent : downPaymentAmount}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (downPaymentMode === "percent") handleDownPaymentPercentChange(val);
                    else handleDownPaymentAmountChange(val);
                  }}
                  className={`w-full bg-white border border-slate-300 rounded-xl py-3 text-slate-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none transition-all shadow-sm ${downPaymentMode === "amount" ? "pl-10 pr-4" : "pl-4 pr-10"}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Interest Rate</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-4 pr-8 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none shadow-sm"
                  />
                  <Percent className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Loan Term</label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none shadow-sm appearance-none"
                >
                  <option value={30}>30 Years</option>
                  <option value={20}>20 Years</option>
                  <option value={15}>15 Years</option>
                  <option value={10}>10 Years</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-4">Taxes, Insurance & Fees</h4>
              
              <div className="space-y-4">
                <div className="grid grid-cols-[1fr_120px] items-center gap-4">
                  <label className="text-sm font-semibold text-slate-600">Property Tax (Annual)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input
                      type="number"
                      value={propertyTaxAnnual}
                      onChange={(e) => setPropertyTaxAnnual(Number(e.target.value))}
                      className="w-full bg-white border border-slate-300 rounded-lg pl-8 pr-3 py-2 text-slate-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-[1fr_120px] items-center gap-4">
                  <label className="text-sm font-semibold text-slate-600">Home Insurance (Annual)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input
                      type="number"
                      value={homeInsuranceAnnual}
                      onChange={(e) => setHomeInsuranceAnnual(Number(e.target.value))}
                      className="w-full bg-white border border-slate-300 rounded-lg pl-8 pr-3 py-2 text-slate-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-[1fr_120px] items-center gap-4">
                  <label className="text-sm font-semibold text-slate-600">HOA Fees (Monthly)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input
                      type="number"
                      value={hoaMonthly}
                      onChange={(e) => setHoaMonthly(Number(e.target.value))}
                      className="w-full bg-white border border-slate-300 rounded-lg pl-8 pr-3 py-2 text-slate-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {calcResults.monthlyPMI > 0 && (
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex gap-3">
                <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs font-semibold text-amber-800 leading-relaxed">
                  Because your down payment is less than 20%, you will likely need to pay Private Mortgage Insurance (PMI). We've estimated this at {formatCurrency(calcResults.monthlyPMI)}/mo.
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
                  <Building size={14} /> Estimated Monthly Payment
                </p>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {formatCurrency(calcResults.totalMonthly)}
                </h2>
                <p className="text-slate-500 text-sm font-medium mt-2">
                  Total Loan Amount: <span className="font-black text-slate-700">{formatCurrency(calcResults.loanAmount)}</span>
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
            
            <div className="mt-10 p-5 bg-slate-50 border border-slate-100 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp size={16} className="text-slate-400" />
                <h4 className="font-bold text-slate-700 text-sm">Amortization Insight</h4>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Over the {loanTerm}-year life of this loan, you will pay a total of <strong className="text-slate-700">{formatCurrency(calcResults.totalInterest)}</strong> in interest alone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
