"use client";

import React, { useState, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Car, DollarSign, Percent, Calendar, AlertCircle, TrendingUp, Key } from "lucide-react";

export default function AutoLoanCalculator() {
  // Vehicle Inputs
  const [carPrice, setCarPrice] = useState<number>(35000);
  const [tradeInValue, setTradeInValue] = useState<number>(5000);
  const [downPayment, setDownPayment] = useState<number>(3000);
  
  // Financing
  const [interestRate, setInterestRate] = useState<number>(7.5);
  const [loanTerm, setLoanTerm] = useState<number>(60); // months
  
  // Taxes & Fees
  const [salesTaxRate, setSalesTaxRate] = useState<number>(7);
  const [dealerFees, setDealerFees] = useState<number>(800); // Title, Reg, Doc

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

  const calcResults = useMemo(() => {
    // Math logic for out-the-door
    // Most states deduct trade-in value before calculating sales tax
    const taxableAmount = Math.max(0, carPrice - tradeInValue);
    const salesTaxAmount = taxableAmount * (salesTaxRate / 100);
    
    const outTheDoorPrice = carPrice - tradeInValue + salesTaxAmount + dealerFees;
    const loanAmount = Math.max(0, outTheDoorPrice - downPayment);
    
    // Monthly Payment (P&I)
    let monthlyPayment = 0;
    if (loanAmount > 0 && interestRate > 0) {
      const monthlyRate = interestRate / 100 / 12;
      monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
    } else if (loanAmount > 0 && interestRate === 0) {
      monthlyPayment = loanAmount / loanTerm;
    }

    const totalInterest = Math.max(0, (monthlyPayment * loanTerm) - loanAmount);
    const totalCostOfCar = outTheDoorPrice + totalInterest + tradeInValue + downPayment;

    const chartData = [
      { name: "Principal (Car Value)", value: loanAmount, color: "#3b82f6" },
      { name: "Total Interest", value: Math.round(totalInterest), color: "#f59e0b" },
      { name: "Taxes & Fees", value: Math.round(salesTaxAmount + dealerFees), color: "#10b981" },
    ].filter(d => d.value > 0);

    return {
      salesTaxAmount,
      outTheDoorPrice,
      loanAmount,
      monthlyPayment,
      totalInterest,
      totalCostOfCar,
      chartData,
    };
  }, [carPrice, tradeInValue, downPayment, interestRate, loanTerm, salesTaxRate, dealerFees]);

  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden font-sans">
      <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
        {/* LEFT COLUMN: Inputs */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
              <Car size={20} />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg">Vehicle Details</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Out-the-Door Price</p>
            </div>
          </div>

          <div className="space-y-6">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                  Car Price
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="number"
                    value={carPrice}
                    onChange={(e) => setCarPrice(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                  Trade-in Value
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="number"
                    value={tradeInValue}
                    onChange={(e) => setTradeInValue(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm text-emerald-600"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                Cash Down Payment
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
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
                    className="w-full bg-white border border-slate-300 rounded-xl pl-4 pr-8 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                  />
                  <Percent className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Loan Term</label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none shadow-sm appearance-none"
                >
                  <option value={36}>36 Months</option>
                  <option value={48}>48 Months</option>
                  <option value={60}>60 Months</option>
                  <option value={72}>72 Months</option>
                  <option value={84}>84 Months</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-4">Taxes & Dealership Fees</h4>
              
              <div className="space-y-4">
                <div className="grid grid-cols-[1fr_120px] items-center gap-4">
                  <label className="text-sm font-semibold text-slate-600">Sales Tax Rate</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      value={salesTaxRate}
                      onChange={(e) => setSalesTaxRate(Number(e.target.value))}
                      className="w-full bg-white border border-slate-300 rounded-lg pl-3 pr-8 py-2 text-slate-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                    />
                    <Percent className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                  </div>
                </div>

                <div className="grid grid-cols-[1fr_120px] items-center gap-4">
                  <label className="text-sm font-semibold text-slate-600">Title, Reg & Doc Fees</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input
                      type="number"
                      value={dealerFees}
                      onChange={(e) => setDealerFees(Number(e.target.value))}
                      className="w-full bg-white border border-slate-300 rounded-lg pl-8 pr-3 py-2 text-slate-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {tradeInValue > 0 && (
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 flex gap-3 mt-2">
                <TrendingUp size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs font-semibold text-emerald-800 leading-relaxed">
                  In most states, trading in a car reduces your taxable amount. Your trade-in is saving you <strong className="text-emerald-900 font-black">{formatCurrency(tradeInValue * (salesTaxRate / 100))}</strong> in sales tax!
                </p>
              </div>
            )}
            
            {loanTerm >= 72 && (
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex gap-3 mt-2">
                <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs font-semibold text-amber-800 leading-relaxed">
                  Long-term loans (72-84 months) result in much higher total interest, and you risk being "upside down" (owing more than the car is worth).
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
                  <Key size={14} /> Estimated Monthly Payment
                </p>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {formatCurrency(calcResults.monthlyPayment)}
                </h2>
                <p className="text-slate-500 text-sm font-medium mt-2">
                  Financed Amount: <span className="font-black text-slate-700">{formatCurrency(calcResults.loanAmount)}</span>
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
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Out-the-Door Price</p>
                <p className="text-lg font-black text-slate-900">{formatCurrency(calcResults.outTheDoorPrice)}</p>
                <p className="text-xs text-slate-500 mt-1">Car + Tax + Fees - Trade</p>
              </div>
              <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl">
                <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Total Interest Paid</p>
                <p className="text-lg font-black text-amber-700">{formatCurrency(calcResults.totalInterest)}</p>
                <p className="text-xs text-amber-600 mt-1">Over {loanTerm} months</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
