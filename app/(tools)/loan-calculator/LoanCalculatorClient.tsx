// app/(tools)/loan-calculator/LoanCalculatorClient.tsx
"use client";

import { useState, useEffect } from "react";
import { calculateLoanEMI } from "@/lib/costUtils";

export default function LoanCalculatorClient() {
  const [principal, setPrincipal] = useState<number>(25000);
  const [annualRate, setAnnualRate] = useState<number>(6.5);
  const [tenureYears, setTenureYears] = useState<number>(5);

  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
    principalPortion: number;
  } | null>(null);

  useEffect(() => {
    if (principal > 0 && annualRate >= 0 && tenureYears > 0) {
      const emiResult = calculateLoanEMI(principal, annualRate, tenureYears);
      setResult(emiResult);
    }
  }, [principal, annualRate, tenureYears]);

  return (
    <div className="grid lg:grid-cols-5 gap-10">
      {/* Input Section */}
      <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-2xl font-semibold mb-8 text-gray-900">Loan Details</h2>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount ($)</label>
            <div className="relative">
              <span className="absolute left-5 top-4 text-gray-500 font-medium">$</span>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Math.max(1000, Number(e.target.value) || 1000))}
                className="w-full pl-10 pr-6 py-4 text-2xl border border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500"
              />
            </div>
            <input
              type="range"
              min="1000"
              max="500000"
              step="1000"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full mt-4 accent-indigo-600 cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
              <span>$1,000</span>
              <span>$500,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Annual Interest Rate (%)</label>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={annualRate}
                onChange={(e) => setAnnualRate(Math.max(0, Number(e.target.value) || 0))}
                step="0.1"
                className="w-28 px-5 py-4 text-2xl border border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500"
              />
              <input
                type="range"
                min="0.1"
                max="30"
                step="0.1"
                value={annualRate}
                onChange={(e) => setAnnualRate(Number(e.target.value))}
                className="flex-1 accent-indigo-600 cursor-pointer"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Loan Tenure (Years)</label>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={tenureYears}
                onChange={(e) => setTenureYears(Math.max(1, Math.min(40, Number(e.target.value) || 1)))}
                className="w-28 px-5 py-4 text-2xl border border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500"
              />
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="flex-1 accent-indigo-600 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="lg:col-span-3">
        {result && (
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 sticky top-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Your Loan Summary</h2>
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b pb-6">
                <div>
                  <p className="text-gray-500 text-sm">Monthly Payment (EMI)</p>
                  <p className="text-5xl font-bold text-indigo-600 mt-1">
                    ${result.monthlyPayment.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Total Payable</p>
                  <p className="font-semibold text-xl">${result.totalPayment.toLocaleString()}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-gray-500">Principal Amount</p>
                  <p className="font-semibold text-lg">${principal.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-500">Total Interest</p>
                  <p className="font-semibold text-lg text-red-600">
                    ${result.totalInterest.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Interest Rate</p>
                  <p className="font-semibold text-lg">{annualRate}% per year</p>
                </div>
                <div>
                  <p className="text-gray-500">Tenure</p>
                  <p className="font-semibold text-lg">
                    {tenureYears} years ({tenureYears * 12} months)
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Payment Breakdown</h3>
                <div className="bg-gray-50 rounded-2xl p-6 text-sm space-y-4">
                  <div className="flex justify-between">
                    <span>Principal</span>
                    <span className="font-medium">${result.principalPortion.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Interest</span>
                    <span className="font-medium text-red-600">${result.totalInterest.toLocaleString()}</span>
                  </div>
                  <div className="pt-4 border-t flex justify-between font-semibold">
                    <span>Total Amount Payable</span>
                    <span>${result.totalPayment.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}