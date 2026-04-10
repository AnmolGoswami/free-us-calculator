"use client";

import { useState, useMemo } from "react";
import { Copy, Check, Lightbulb, ChevronDown, Wallet, Landmark, Percent, TrendingUp, Award } from "lucide-react";
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

  // Smart formatter
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white rounded-2xl shadow-sm border border-slate-200 mb-6">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-slate-600 tracking-wide">PREMIUM LOAN ANALYZER</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tighter text-slate-900">
            Smart Loan Calculator
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-md mx-auto">
            Advanced EMI calculation with deferral, extra payments, balloon &amp; precise compounding
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* INPUTS SECTION */}
          <div className="xl:col-span-5 space-y-8">
            {/* Currency Selector */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-2 flex gap-2">
              {(["INR", "USD", "EUR", "GBP"] as const).map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className={`flex-1 py-4 rounded-2xl text-sm font-semibold transition-all ${currency === cur
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  {cur}
                </button>
              ))}
            </div>

            {/* Main Input Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="p-10 space-y-9">
                <InputField
                  label="Loan Principal"
                  value={principal}
                  onChange={(v) => setPrincipal(Number(v) || 0)}
                  prefix={currency === "INR" ? "₹" : currency === "USD" ? "$" : currency === "EUR" ? "€" : "£"}
                  type="number"
                />

                <div className="grid grid-cols-2 gap-6">
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
                  // Fixed: Now properly passed as string
                  type="number"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-3">Payment Frequency</label>
                    <select
                      value={paymentFrequency}
                      onChange={(e) => setPaymentFrequency(e.target.value as PaymentFrequency)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      {["monthly", "biweekly", "weekly", "quarterly", "yearly", "semimonthly", "semiannually"].map((op) => (
                        <option key={op} value={op}>
                          {op.charAt(0).toUpperCase() + op.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-3">Compound Frequency</label>
                    <select
                      value={compoundFrequency}
                      onChange={(e) => setCompoundFrequency(e.target.value as CompoundFrequency)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      {["monthly", "daily", "continuous", "quarterly", "yearly", "semiannually", "weekly"].map((op) => (
                        <option key={op} value={op}>
                          {op.charAt(0).toUpperCase() + op.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
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
                      <p className="text-sm text-slate-500">During deferral period</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* RESULTS SECTION */}
          <div className="xl:col-span-7 space-y-8">
            {!result ? (
              <div className="bg-white min-h-[560px] rounded-3xl shadow-xl border border-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-20 h-20 mx-auto text-slate-300 mb-6" />
                  <p className="text-2xl font-medium text-slate-500">Fill in the details to see results</p>
                  <p className="text-slate-400 mt-2">Your loan breakdown will appear here instantly</p>
                </div>
              </div>
            ) : (
              <>
                {/* Hero Payment Card */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-8 right-8">
                    <button
                      onClick={handleCopy}
                      className="p-4 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-2xl transition-all active:scale-95 border border-white/30"
                    >
                      {copied ? <Check size={26} /> : <Copy size={26} />}
                    </button>
                  </div>

                  <p className="uppercase tracking-[3px] text-blue-100 text-sm font-medium mb-2">PERIODIC PAYMENT</p>
                  <div className="text-6xl font-semibold tracking-tighter mb-2">
                    {formatLargeNumber(result.periodicPayment, currency)}
                  </div>
                  <p className="text-blue-100 text-xl">per {paymentFrequency}</p>

                  <div className="mt-10 pt-8 border-t border-white/20 grid grid-cols-3 gap-6 text-sm">
                    <div>
                      <p className="opacity-75">Total Repayment</p>
                      <p className="font-semibold text-lg mt-1">{formatLargeNumber(result.totalPayment, currency)}</p>
                    </div>
                    <div>
                      <p className="opacity-75">Total Interest</p>
                      <p className="font-semibold text-lg mt-1 text-red-100">{formatLargeNumber(result.totalInterest, currency)}</p>
                    </div>
                    <div>
                      <p className="opacity-75">Payoff Date</p>
                      <p className="font-semibold text-lg mt-1">{result.payoffDate}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

  {/* Principal Card */}
  <div className="group relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-blue-200 via-blue-100 to-transparent hover:from-blue-400 hover:via-blue-200 transition-all duration-300">
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-lg border border-white/60 group-hover:shadow-2xl transition-all duration-300">

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/10 blur-2xl"></div>

      <div className="relative flex items-center gap-4 min-w-0">

        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition">
          <Landmark className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide">
            Principal Amount
          </p>

          <p className="
            mt-1 font-bold text-slate-900 tracking-tight
            whitespace-nowrap leading-tight
            text-[clamp(14px,2.2vw,28px)]
          ">
            {formatLargeNumber(principal, currency)}
          </p>
        </div>

      </div>
    </div>
  </div>


  {/* Interest Card */}
  <div className="group relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-red-200 via-red-100 to-transparent hover:from-red-400 hover:via-red-200 transition-all duration-300">
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-lg border border-white/60 group-hover:shadow-2xl transition-all duration-300">

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-red-500/10 blur-2xl"></div>

      <div className="relative flex items-center gap-4 min-w-0">

        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-md group-hover:scale-110 transition">
          <Percent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide">
            Total Interest
          </p>

          {/* 🔥 FINAL FIX */}
          <p className="
            mt-1 font-bold text-red-600 tracking-tight
            whitespace-nowrap leading-tight
            text-[clamp(14px,2.2vw,28px)]
          ">
            {formatFullCurrency(Math.round(result.totalInterest))}
          </p>
        </div>

      </div>
    </div>
  </div>

</div>

                {/* Breakdown with Pie Chart */}
                <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">

                  {/* Header */}
                  <button
                    onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                    className="w-full px-10 py-7 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-100"
                  >
                    <div className="flex items-center gap-4">
                      <Wallet className="text-blue-600" size={28} />
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          Principal vs Interest Breakdown
                        </h3>
                        <p className="text-sm text-slate-500">
                          Visual split of your repayment
                        </p>
                      </div>
                    </div>

                    <ChevronDown
                      className={`transition-transform duration-300 ${isDetailsOpen ? "rotate-180" : ""
                        }`}
                      size={28}
                    />
                  </button>

                  {/* Content */}
                  {isDetailsOpen && (
                    <div className="p-12 min-w-0">

                      {/* FIX: removed h-[380px] */}
                      <div className="w-full min-w-0">

                        {/* FIX: use fixed height instead of 100% */}
                        <ResponsiveContainer width="100%" height={380}>
                          <PieChart>

                            <Pie
                              data={[
                                { name: "Principal", value: principal || 0 },
                                { name: "Total Interest", value: result?.totalInterest || 0 },
                              ]}
                              cx="50%"
                              cy="50%"
                              innerRadius={105}
                              outerRadius={155}
                              paddingAngle={6}
                              dataKey="value"
                              isAnimationActive
                            >
                              {COLORS.map((color, i) => (
                                <Cell key={i} fill={color} />
                              ))}
                            </Pie>

                            <Tooltip
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  const data = payload[0];
                                  return (
                                    <div className="bg-white rounded-xl shadow-lg px-4 py-3 border border-slate-200">
                                      <p className="text-sm text-slate-500">{data.name}</p>
                                      <p className="text-lg font-semibold text-slate-900">
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
                              iconType="circle"
                              wrapperStyle={{ paddingTop: "20px" }}
                            />

                          </PieChart>
                        </ResponsiveContainer>

                      </div>
                    </div>
                  )}
                </div>

                {/* Insights */}
                <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-amber-100 rounded-2xl">
                      <Lightbulb className="text-amber-600" size={28} />
                    </div>
                    <h4 className="text-2xl font-semibold text-slate-900">Financial Insights</h4>
                  </div>

                  <div className="space-y-6 text-slate-600 text-[15.5px]">
                    <div className="flex gap-4">
                      <div className="mt-2 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                      Interest equals <span className="font-semibold text-slate-900">{result.interestToPrincipalRatio.toFixed(1)}%</span> of your principal.
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-2 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                      This loan will be fully paid off by <span className="font-semibold text-slate-900">{result.payoffDate}</span>.
                    </div>

                    {extraPayment > 0 && result.monthsSaved && (
                      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-7 mt-6">
                        <p className="text-emerald-700 font-semibold flex items-center gap-2 text-lg">
                          <Check size={22} /> Extra payments are helping you save!
                        </p>
                        <p className="mt-3 text-emerald-600">
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