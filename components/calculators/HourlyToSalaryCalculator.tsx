"use client";

import { useState, useMemo, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Copy, Check, Info, DollarSign, RotateCcw } from "lucide-react";
import InputField from "@/components/ui/InputField";
import { calculateEarnings, CurrencyCode } from "@/lib/hourlyEarningCalculator";

interface HourlyToSalaryCalculatorProps {
  defaultHourly?: string;
}

export default function HourlyToSalaryCalculator({
  defaultHourly = "25",
}: HourlyToSalaryCalculatorProps) {
  const [isClient, setIsClient] = useState(false);
  const [taxMode, setTaxMode] = useState<"flat" | "progressive">("flat");
  const [hourlyRate, setHourlyRate] = useState(defaultHourly);
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [taxRate, setTaxRate] = useState("20");
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [toast, setToast] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNumberInput = (setter: (val: string) => void) => (value: string) => {
    setter(value.replace(/[^0-9.]/g, ""));
  };

  const result = useMemo(() => {
    try {
      return calculateEarnings({
        mode: "hourly-to-salary",
        hourlyRate: parseFloat(hourlyRate) || 0,
        annualSalary: 0,
        hoursPerWeek: parseFloat(hoursPerWeek) || 40,
        overtimeHours: 0,
        overtimeMultiplier: 1.5,
        taxRatePercent: parseFloat(taxRate) || 0,
        taxMode,
        currency,
      });
    } catch (err) {
      console.error("Calculation Error:", err);
      return {
        gross: { yearly: 0, monthly: 0, weekly: 0, hourly: 0, daily: 0 },
        tax: { yearly: 0, monthly: 0, weekly: 0, hourly: 0, daily: 0 },
        net: { yearly: 0, monthly: 0, weekly: 0, hourly: 0, daily: 0 },
        currency: { symbol: "$", locale: "en-US" },
      };
    }
  }, [hourlyRate, hoursPerWeek, taxRate, currency, taxMode]);

  const formatSmart = (num: number): string => {
    if (!num || isNaN(num)) return "0";
    const absNum = Math.abs(num);
    if (absNum >= 1_000_000_000) return (num / 1_000_000_000).toFixed(2) + "B";
    if (absNum >= 1_000_000) return (num / 1_000_000).toFixed(2) + "M";
    if (absNum >= 10_000) return (num / 1_000).toFixed(1) + "K";
    return new Intl.NumberFormat(result.currency?.locale || "en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const copyToClipboard = (text: string | number, id: string) => {
    const copyText = typeof text === "number" ? text.toFixed(2) : String(text);
    navigator.clipboard.writeText(copyText);
    setCopiedId(id);
    setToast("Copied to clipboard!");
    setTimeout(() => {
      setCopiedId(null);
      setToast("");
    }, 1800);
  };

  const chartData = [
    { name: "Net Pay", value: Math.max(0, result.net?.yearly || 0), color: "#10b981" },
    { name: "Tax", value: Math.max(0, result.tax?.yearly || 0), color: "#ef4444" },
  ];

  const reset = () => {
    setHourlyRate("25");
    setHoursPerWeek("40");
    setTaxRate("20");
    setTaxMode("flat");
  };

  if (!isClient) {
    return (
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 w-full">
        <div className="w-full h-96 bg-white/60 rounded-3xl animate-pulse" />
      </div>
    );
  }

  return (
    <div className="bg-transparent w-full">
      <div className="w-full">
        {/* Header - Streamlined for specific tool */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-3 bg-white/80 rounded-full px-5 py-2 shadow-sm border border-slate-200/60 mb-4">
            <DollarSign className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-slate-700 text-sm sm:text-base">Hourly to Salary Converter</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 px-2">
            Calculate Your True Take-Home Pay
          </h2>
        </div>

        {/* Currency Selector */}
        <div className="flex justify-center mb-6 px-2">
          <div className="flex flex-wrap justify-center gap-2 bg-white rounded-2xl p-1.5 shadow-sm border border-slate-100">
            {["USD", "INR", "EUR", "GBP"].map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c as CurrencyCode)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all active:scale-95 ${
                  currency === c
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Controls - NO TABS */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-black/5 border border-slate-100/50">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-semibold text-xl text-slate-900">Your Pay Rate</h3>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 active:scale-95"
                >
                  <RotateCcw size={18} /> Reset
                </button>
              </div>

              <div className="space-y-7">
                <InputField
                  label="Base Hourly Rate"
                  value={hourlyRate}
                  onChange={handleNumberInput(setHourlyRate)}
                  prefix={result.currency?.symbol || "$"}
                  className="text-2xl font-black"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField
                    label="Hours per Week"
                    value={hoursPerWeek}
                    onChange={handleNumberInput(setHoursPerWeek)}
                  />
                  
                  {taxMode === "flat" ? (
                    <InputField
                      label="Tax Rate (%)"
                      value={taxRate}
                      onChange={handleNumberInput(setTaxRate)}
                      suffix="%"
                    />
                  ) : (
                    <div className="text-sm text-slate-500 flex items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                      Using progressive tax rates
                    </div>
                  )}
                </div>

                {/* Tax Mode Toggle */}
                <div className="flex gap-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setTaxMode("flat")}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                      taxMode === "flat"
                        ? "bg-slate-900 text-white shadow-md"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    Flat Tax Estimate
                  </button>
                  <button
                    onClick={() => setTaxMode("progressive")}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                      taxMode === "progressive"
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    Progressive US Tax
                  </button>
                </div>
              </div>
            </div>
            
            <button
                onClick={() => { navigator.clipboard.writeText(window.location.href); setToast("Link copied!"); }}
                className="w-full py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold rounded-2xl flex items-center justify-center gap-3 transition-colors active:scale-[0.985]"
              >
                <Copy size={20} /> Share This Estimate
            </button>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">
            {/* LIVE Result Card */}
            <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-black text-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/30 border border-slate-800">
              <div className="relative p-8 sm:p-10 md:p-12">
                <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono tracking-wider text-emerald-400">LIVE</span>
                </div>

                <div className="text-center pt-2">
                  <div className="text-emerald-400 text-xs font-bold tracking-widest mb-3 flex items-center justify-center gap-1.5 uppercase">
                    <DollarSign className="w-4 h-4" /> Estimated Net Salary
                  </div>

                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter tabular-nums break-all leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                      {result.currency?.symbol || "$"}{formatSmart(result.net?.yearly || 0)}
                    </span>
                    <button
                      onClick={() => copyToClipboard(result.net?.yearly || 0, "yearly")}
                      className="p-2 hover:bg-white/10 rounded-xl transition active:scale-90"
                    >
                      {copiedId === "yearly" ? <Check className="w-6 h-6 text-emerald-400" /> : <Copy className="w-6 h-6 text-white/50 hover:text-white" />}
                    </button>
                  </div>
                  <p className="text-slate-400 text-sm font-medium tracking-wide">
                    per year • after tax
                  </p>
                </div>

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <p className="text-[10px] text-slate-400 tracking-widest uppercase font-bold">Gross Salary</p>
                    <p className="text-xl sm:text-2xl font-bold mt-1 text-white">
                      {result.currency?.symbol}{formatSmart(result.gross?.yearly || 0)}
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <p className="text-[10px] text-rose-400 tracking-widest uppercase font-bold">Estimated Tax</p>
                    <p className="text-xl sm:text-2xl font-bold mt-1 text-rose-400">
                      {result.currency?.symbol}{formatSmart(result.tax?.yearly || 0)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-blue-500 via-emerald-400 to-teal-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pay Breakdown */}
              <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-10 border border-slate-100/50 shadow-xl shadow-black/5">
                <h3 className="font-semibold text-xl mb-6 text-slate-900">Net Breakdown</h3>
                <div className="space-y-6">
                  {[
                    { label: "Monthly", value: result.net?.monthly || 0, id: "monthly-net" },
                    { label: "Bi-weekly", value: (result.net?.weekly || 0) * 2, id: "biweekly-net" },
                    { label: "Weekly", value: result.net?.weekly || 0, id: "weekly-net" },
                  ].map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{item.label}</p>
                        <p className="text-xl font-bold text-slate-900 mt-1">
                          {result.currency?.symbol || "$"}{formatSmart(item.value)}
                        </p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(item.value, item.id)}
                        className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400 hover:text-blue-600"
                      >
                        {copiedId === item.id ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pie Chart & Insight */}
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 border border-slate-100/50 shadow-xl shadow-black/5 flex flex-col items-center justify-center">
                  <h3 className="font-semibold text-sm mb-4 text-slate-500 uppercase tracking-widest">Take-Home Ratio</h3>
                  <div style={{ width: "160px", height: "160px" }}>
                    <ResponsiveContainer width="100%" height="100%" initialDimension={{ width: 160, height: 160 }}>
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          innerRadius="65%"
                          outerRadius="100%"
                          dataKey="value"
                          paddingAngle={3}
                          isAnimationActive={true}
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center gap-4 mt-4 w-full">
                    {chartData.map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-xs text-slate-600 font-medium">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50/80 backdrop-blur-xl rounded-[2.5rem] p-8 flex gap-5 border border-blue-100/50">
                  <Info className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-base text-blue-900 mb-2">Effective Hourly Net</p>
                    <p className="text-blue-800/80 text-sm leading-relaxed">
                      After taxes, you effectively take home <strong className="text-blue-700">{result.currency?.symbol}{formatSmart(result.net?.hourly || 0)}/hr</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-[100]">
          <Check className="w-5 h-5 text-emerald-400" />
          {toast}
        </div>
      )}
    </div>
  );
}
