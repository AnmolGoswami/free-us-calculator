"use client";

import { useState, useMemo } from "react";
import { Copy, Check, Lightbulb, ChevronDown, Wallet, Landmark, Percent, TrendingUp } from "lucide-react";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

import InputField from "@/components/ui/InputField";
import {
  calculateAdvancedLoan,
  PaymentFrequency,
  CompoundFrequency,
} from "@/lib/loanCalculator";

type Currency = "USD" | "INR" | "EUR" | "GBP";

const COLORS = ["#3b82f6", "#ef4444"];

export default function AmortizedLoan() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [months, setMonths] = useState(0);
  const [paymentFrequency, setPaymentFrequency] = useState<PaymentFrequency>("monthly");
  const [compoundFrequency, setCompoundFrequency] = useState<CompoundFrequency>("monthly");
  const [extraPayment, setExtraPayment] = useState(0);
  const [balloonPayment, setBalloonPayment] = useState(0);
  const [deferMonths, setDeferMonths] = useState(0);
  const [accrueInterestDuringDefer, setAccrueInterestDuringDefer] = useState(true);
  const [currency, setCurrency] = useState<Currency>("INR");
  const [copied, setCopied] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  const formatLargeNumber = (num: number, currencyCode: Currency): string => {
    const absNum = Math.abs(num);
    let formatted: string;

    if (absNum >= 1_000_000_000) {
      formatted = (absNum / 1_000_000_000).toFixed(2).replace(/\.00$/, "") + "B";
    } else if (absNum >= 1_000_000) {
      formatted = (absNum / 1_000_000).toFixed(2).replace(/\.00$/, "") + "M";
    } else if (absNum >= 10_000) {
      formatted = (absNum / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      formatted = absNum.toLocaleString();
    }

    const symbol = currencyCode === "INR" ? "₹" : currencyCode === "USD" ? "$" : currencyCode === "EUR" ? "€" : "£";
    return symbol + formatted;
  };

  const formatFullCurrency = (num: number = 0) => {
    return new Intl.NumberFormat(
      currency === "INR" ? "en-IN" : currency === "USD" ? "en-US" : currency === "EUR" ? "de-DE" : "en-GB",
      { style: "currency", currency, maximumFractionDigits: 0 }
    ).format(num);
  };

  const result = useMemo(() => {
    if (!principal || (years === 0 && months === 0)) return null;
    try {
      return calculateAdvancedLoan({
        principal,
        annualRate: rate || 0,
        years: (years || 0) + (months || 0) / 12,
        paymentFrequency,
        compoundFrequency,
        extraPayment: extraPayment || 0,
        balloonPayment: balloonPayment || 0,
        deferMonths: deferMonths || 0,
        accrueInterestDuringDefer,
        includeSchedule: false,
      });
    } catch (e) {
      console.error(e);
      return null;
    }
  }, [principal, rate, years, months, paymentFrequency, compoundFrequency, extraPayment, balloonPayment, deferMonths, accrueInterestDuringDefer]);

  const handleCopy = () => {
    if (!result) return;
    const text = `Loan Summary
Principal: ${formatFullCurrency(principal)}
Periodic Payment: ${formatFullCurrency(result.periodicPayment)}
Total Interest: ${formatFullCurrency(result.totalInterest)}
Total Payment: ${formatFullCurrency(result.totalPayment)}
Payoff Date: ${result.payoffDate}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-full overflow-hidden py-6 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-white rounded-2xl shadow-sm border border-slate-200 mb-6">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-slate-600 tracking-wide">PREMIUM LOAN ANALYZER</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900">
            Smart Loan Calculator
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 max-w-md mx-auto px-2">
            Advanced EMI with extra payments, deferral &amp; precise compounding
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* INPUTS SECTION */}
          <div className="lg:col-span-5 space-y-6">
            {/* Currency Selector */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-1.5 flex gap-1">
              {(["INR", "USD", "EUR", "GBP"] as const).map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className={`flex-1 py-3.5 rounded-2xl text-sm font-semibold transition-all ${currency === cur
                    ? "bg-blue-600 text-white shadow"
                    : "text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  {cur}
                </button>
              ))}
            </div>

            {/* Main Input Form */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-9 space-y-8">
              <InputField
                label="Loan Principal"
                value={principal}
                onChange={(v) => setPrincipal(Number(v) || 0)}
                prefix={currency === "INR" ? "₹" : currency === "USD" ? "$" : currency === "EUR" ? "€" : "£"}
                type="number"
              />

              <div className="grid grid-cols-2 gap-5">
                <InputField
                  label="Years"
                  value={years}
                  onChange={(v) => setYears(Number(v) || 0)}
                  type="number"
                />
                <InputField
                  label="Extra Months"
                  value={months}
                  onChange={(v) => setMonths(Number(v) || 0)}
                  type="number"
                />
              </div>

              <InputField
                label="Annual Interest Rate (%)"
                value={rate}
                onChange={(v) => setRate(Number(v) || 0)}
                type="number"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField
                  label="Extra Payment per Period"
                  value={extraPayment}
                  onChange={(v) => setExtraPayment(Number(v) || 0)}
                  prefix={currency === "INR" ? "₹" : currency === "USD" ? "$" : currency === "EUR" ? "€" : "£"}
                  type="number"
                />
                <InputField
                  label="Balloon Payment"
                  value={balloonPayment}
                  onChange={(v) => setBalloonPayment(Number(v) || 0)}
                  prefix={currency === "INR" ? "₹" : currency === "USD" ? "$" : currency === "EUR" ? "€" : "£"}
                  type="number"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2.5">Payment Frequency</label>
                  <select
                    value={paymentFrequency}
                    onChange={(e) => setPaymentFrequency(e.target.value as PaymentFrequency)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {["monthly", "biweekly", "weekly", "quarterly", "yearly", "semimonthly", "semiannually"].map((op) => (
                      <option key={op} value={op}>
                        {op.charAt(0).toUpperCase() + op.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2.5">Compound Frequency</label>
                  <select
                    value={compoundFrequency}
                    onChange={(e) => setCompoundFrequency(e.target.value as CompoundFrequency)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {["monthly", "daily", "continuous", "quarterly", "yearly", "semiannually", "weekly"].map((op) => (
                      <option key={op} value={op}>
                        {op.charAt(0).toUpperCase() + op.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <InputField
                  label="Defer Period (Months)"
                  value={deferMonths}
                  onChange={(v) => setDeferMonths(Number(v) || 0)}
                  type="number"
                />

                <label className="flex items-center gap-4 bg-slate-50 border border-slate-300 px-6 py-5 rounded-3xl cursor-pointer flex-1 hover:bg-slate-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={accrueInterestDuringDefer}
                    onChange={(e) => setAccrueInterestDuringDefer(e.target.checked)}
                    className="w-5 h-5 accent-blue-600"
                  />
                  <div>
                    <p className="font-medium text-slate-700">Accrue Interest</p>
                    <p className="text-sm text-slate-500">During deferral</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* RESULTS SECTION */}
          <div className="lg:col-span-7 space-y-6">
            {!result ? (
              <div className="bg-white min-h-[420px] rounded-3xl shadow-sm border border-slate-200 flex items-center justify-center p-8 text-center">
                <div>
                  <TrendingUp className="w-16 h-16 mx-auto text-slate-300 mb-6" />
                  <p className="text-xl font-medium text-slate-500">Enter loan details to see results</p>
                </div>
              </div>
            ) : (
              <>
                {/* Hero Payment Card */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
                  <div className="absolute top-6 right-6">
                    <button
                      onClick={handleCopy}
                      className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur rounded-2xl transition-all active:scale-95"
                    >
                      {copied ? <Check size={22} /> : <Copy size={22} />}
                    </button>
                  </div>

                  <p className="uppercase tracking-widest text-blue-100 text-xs font-medium mb-1">PERIODIC PAYMENT</p>
                  <div className="text-5xl md:text-6xl font-semibold tracking-tighter mb-1">
                    {formatLargeNumber(result.periodicPayment, currency)}
                  </div>
                  <p className="text-blue-100 text-lg">per {paymentFrequency}</p>

                  <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="opacity-75 text-xs">Total Repayment</p>
                      <p className="font-semibold mt-1">{formatLargeNumber(result.totalPayment, currency)}</p>
                    </div>
                    <div>
                      <p className="opacity-75 text-xs">Total Interest</p>
                      <p className="font-semibold mt-1 text-red-100">{formatLargeNumber(result.totalInterest, currency)}</p>
                    </div>
                    <div>
                      <p className="opacity-75 text-xs">Payoff Date</p>
                      <p className="font-semibold mt-1">{result.payoffDate}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                        <Landmark className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Principal Amount</p>
                        <p className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                          {formatLargeNumber(principal, currency)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                        <Percent className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Total Interest</p>
                        <p className="text-2xl font-bold text-red-600 tracking-tight mt-1">
                          {formatFullCurrency(Math.round(result.totalInterest))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
  <button
    onClick={() => setIsDetailsOpen(!isDetailsOpen)}
    className="w-full px-5 md:px-7 py-5 md:py-6 flex items-center justify-between hover:bg-slate-50 transition-colors border-b"
  >
    <div className="flex items-center gap-3 md:gap-4">
      <Wallet className="text-blue-600" size={24} />
      <div className="text-left">
        <h3 className="font-semibold text-slate-900 text-sm md:text-base">
          Principal vs Interest Breakdown
        </h3>
        <p className="text-xs md:text-sm text-slate-500">
          Visual split of repayment
        </p>
      </div>
    </div>
    <ChevronDown
      className={`transition-transform ${isDetailsOpen ? "rotate-180" : ""}`}
      size={22}
    />
  </button>

  {isDetailsOpen && (
    <div className="p-4 md:p-8 overflow-hidden">
      <div className="w-full max-w-[340px] sm:max-w-[380px] mx-auto">
        
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={[
                { name: "Principal", value: principal || 0 },
                { name: "Interest", value: result?.totalInterest || 0 },
              ]}
              cx="50%"
              cy="45%"                 // 👈 move slightly up for legend space
              innerRadius="55%"        // 👈 responsive instead of fixed px
              outerRadius="80%"        // 👈 prevents overflow
              paddingAngle={3}
              dataKey="value"
            >
              {COLORS.map((color, i) => (
                <Cell key={i} fill={color} />
              ))}
            </Pie>

            <Tooltip
              content={({ active, payload }) => {
                if (active && payload?.length) {
                  const data = payload[0];
                  return (
                    <div className="bg-white rounded-xl shadow px-3 py-2 border border-slate-200">
                      <p className="text-xs text-slate-500">{data.name}</p>
                      <p className="font-semibold text-slate-900 text-sm">
                        {formatFullCurrency(Number(data.value))}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />

            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              wrapperStyle={{
                fontSize: "12px",
                paddingTop: 12,
              }}
            />
          </PieChart>
        </ResponsiveContainer>

      </div>
    </div>
  )}
</div>

                {/* Financial Insights */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-7 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-amber-100 rounded-2xl">
                      <Lightbulb className="text-amber-600" size={26} />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900">Financial Insights</h4>
                  </div>

                  <div className="space-y-5 text-slate-600 text-[15px]">
                    <div className="flex gap-4">
                      <div className="mt-2 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                      Interest is <span className="font-semibold text-slate-900">{result.interestToPrincipalRatio.toFixed(1)}%</span> of principal.
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-2 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                      Loan will be paid off by <span className="font-semibold text-slate-900">{result.payoffDate}</span>.
                    </div>

                    {extraPayment > 0 && result.monthsSaved && (
                      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mt-4">
                        <p className="text-emerald-700 font-semibold flex items-center gap-2">
                          Extra payments are helping you save!
                        </p>
                        <p className="mt-2 text-emerald-600">
                          You will finish the loan <strong>{result.monthsSaved}</strong> periods earlier.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}