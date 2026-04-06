"use client";

import { useState, useMemo, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Clock, Wallet, Zap, Star, RotateCcw, Copy, Check, Info, DollarSign } from "lucide-react";
import InputField from "@/components/ui/InputField";
import { calculateEarnings, SalaryMode, CurrencyCode } from "@/lib/hourlyEarningCalculator";

type ExtendedMode = SalaryMode | "time-and-half";


interface SalaryCalculatorProps {
  defaultMode?: ExtendedMode;
  defaultHourly?: string;
}


export default function SalaryCalculator({
  defaultMode = "hourly-to-salary",
  defaultHourly = "25"
}: SalaryCalculatorProps) {

  const [isClient, setIsClient] = useState(false);
  const [mode, setMode] = useState<ExtendedMode>(defaultMode);
  const [taxMode, setTaxMode] = useState<"flat" | "progressive">("flat");


  useEffect(() => {
    setIsClient(true);

    const pathname = window.location.pathname.toLowerCase();
    let detected: ExtendedMode = "hourly-to-salary";

    if (pathname.includes("salary-to-hourly")) detected = "salary-to-hourly";
    else if (pathname.includes("overtime")) detected = "overtime";
    else if (pathname.includes("time-and-half") || pathname.includes("timeandhalf"))
      detected = "time-and-half";

    setMode(detected);
  }, []);

  const [hourlyRate, setHourlyRate] = useState(defaultHourly);
  const [annualSalary, setAnnualSalary] = useState("52000");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [overtimeHours, setOvertimeHours] = useState("0");
  const [overtimeMultiplier, setOvertimeMultiplier] = useState("1.5");
  const [taxRate, setTaxRate] = useState("20");
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [toast, setToast] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleNumberInput = (setter: (val: string) => void) => (value: string) => {
    setter(value.replace(/[^0-9.]/g, ""));
  };

  useEffect(() => {
    if (mode === "time-and-half") setOvertimeMultiplier("1.5");
  }, [mode]);

  const result = useMemo(() => {
    try {
      return calculateEarnings({
        mode: mode === "time-and-half" ? "overtime" : (mode as SalaryMode),
        hourlyRate: parseFloat(hourlyRate) || 0,
        annualSalary: parseFloat(annualSalary) || 0,
        hoursPerWeek: parseFloat(hoursPerWeek) || 40,
        overtimeHours: (mode === "overtime" || mode === "time-and-half")
          ? parseFloat(overtimeHours) || 0
          : 0,
        overtimeMultiplier: parseFloat(overtimeMultiplier) || 1.5,
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
  }, [
  mode,
  hourlyRate,
  annualSalary,
  hoursPerWeek,
  overtimeHours,
  overtimeMultiplier,
  taxRate,
  currency,
  taxMode, // ✅ THIS IS THE FIX
]);

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
    setAnnualSalary("52000");
    setHourlyRate("25");
    setHoursPerWeek("40");
    setTaxRate("20");
    setOvertimeHours("0");
    setOvertimeMultiplier("1.5");
  };

  const modes = [
    { id: "hourly-to-salary", label: "Hourly Pay", icon: Clock },
    { id: "salary-to-hourly", label: "Fixed Salary", icon: Wallet },
    { id: "overtime", label: "Overtime", icon: Zap },
    { id: "time-and-half", label: "Time & Half", icon: Star },
  ];

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 overflow-x-hidden">
        <div className="max-w-7xl mx-auto h-96 bg-white/60 rounded-3xl animate-pulse" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-6 px-4 sm:py-8 md:py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 shadow-sm mb-4">
            <DollarSign className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold text-slate-700 text-sm sm:text-base">Salary Calculator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-slate-900 px-2">
            Know Your Real Take-Home Pay
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-md mx-auto">
            Accurate • Transparent • Multi-currency
          </p>
        </div>

        {/* Currency Selector */}
        <div className="flex justify-center mb-6 px-2">
          <div className="flex flex-wrap justify-center gap-2 bg-white rounded-2xl p-1.5 shadow-sm border border-slate-100">
            {["USD", "INR", "EUR", "GBP"].map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c as CurrencyCode)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all active:scale-95 ${currency === c
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 overflow-x-hidden">
          {/* Left Controls */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            {/* Mode Selector */}
            <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100">
              <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-100">
                <div className="grid grid-cols-2 gap-2">
                  {modes.map((m) => {
                    const Icon = m.icon;
                    const isActive = mode === m.id;
                    return (
                      <a
                        key={m.id}
                        href={`/${m.id}-calculator`}
                        className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium transition-all active:scale-[0.97] ${isActive
                            ? "bg-emerald-600 text-white shadow-sm"
                            : "text-slate-700 hover:bg-slate-50"
                          }`}
                      >
                        <Icon
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? "text-white" : "text-slate-400"}`}
                        />
                        <span className="truncate leading-tight">{m.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Input Parameters */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-semibold text-xl text-slate-900">Parameters</h3>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 active:scale-95"
                >
                  <RotateCcw size={18} /> Reset
                </button>
              </div>

              <div className="space-y-7">
                {mode === "salary-to-hourly" ? (
                  <InputField
                    label="Annual Gross Salary"
                    value={annualSalary}
                    onChange={handleNumberInput(setAnnualSalary)}
                    prefix={result.currency?.symbol || "$"}
                    className="text-2xl"
                  />
                ) : (
                  <InputField
                    label="Base Hourly Rate"
                    value={hourlyRate}
                    onChange={handleNumberInput(setHourlyRate)}
                    prefix={result.currency?.symbol || "$"}
                    className="text-2xl"
                  />
                )}

                {/* Tax Mode Toggle */}
<div className="flex gap-2 mb-2">
  <button
    onClick={() => setTaxMode("flat")}
    className={`flex-1 py-2 rounded-xl text-sm font-medium transition ${
      taxMode === "flat"
        ? "bg-slate-900 text-white"
        : "bg-slate-100 text-slate-600"
    }`}
  >
    Simple Tax
  </button>

  <button
    onClick={() => setTaxMode("progressive")}
    className={`flex-1 py-2 rounded-xl text-sm font-medium transition ${
      taxMode === "progressive"
        ? "bg-emerald-600 text-white"
        : "bg-slate-100 text-slate-600"
    }`}
  >
    Real Tax
  </button>
</div>

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
    <div className="text-sm text-slate-500 flex items-center">
      Using progressive tax rates
    </div>
  )}
</div>

                {(mode === "overtime" || mode === "time-and-half") && (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                    <p className="uppercase text-emerald-700 text-xs font-bold tracking-widest mb-4">Overtime Configuration</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <InputField label="Overtime Hours (per week)" value={overtimeHours} onChange={handleNumberInput(setOvertimeHours)} />
                      <InputField
                        label="Overtime Multiplier"
                        value={overtimeMultiplier}
                        onChange={handleNumberInput(setOvertimeMultiplier)}
                        disabled={mode === "time-and-half"}
                      />
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => { navigator.clipboard.writeText(window.location.href); setToast("Link copied!"); }}
                className="mt-10 w-full py-4 bg-slate-900 hover:bg-black text-white font-semibold rounded-2xl flex items-center justify-center gap-3 active:scale-[0.985]"
              >
                <Copy size={20} /> Share This Estimate
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">

            {/* LIVE Result Card */}
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white rounded-2xl overflow-hidden shadow-xl">
              <div className="relative p-5 sm:p-6 md:p-7">
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono tracking-wider text-emerald-400">LIVE</span>
                </div>

                <div className="text-center">
                  <div className="text-emerald-400 text-xs font-semibold tracking-wider mb-2 flex items-center justify-center gap-1.5">
                    <DollarSign className="w-4 h-4" /> NET TAKE-HOME
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight tabular-nums break-all leading-none">
                      {result.currency?.symbol || "$"}{formatSmart(result.net?.yearly || 0)}
                    </span>

                    <button
                      onClick={() => copyToClipboard(result.net?.yearly || 0, "yearly")}
                      className="p-2 hover:bg-white/10 rounded-lg transition active:scale-90"
                    >
                      {copiedId === "yearly" ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    per year • after tax
                  </p>
                </div>

                <div className="my-5 h-px bg-white/10" />

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-[10px] text-slate-400 tracking-wider">GROSS</p>
                    <p className="text-lg sm:text-xl font-semibold mt-1">
                      {result.currency?.symbol}{formatSmart(result.gross?.yearly || 0)}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-rose-400 tracking-wider">TAX</p>
                    <p className="text-lg sm:text-xl font-semibold mt-1 text-rose-400">
                      {result.currency?.symbol}{formatSmart(result.tax?.yearly || 0)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400" />
            </div>

            {/* Pie Chart - More Reliable Version */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
              <h3 className="font-semibold text-base sm:text-lg mb-6 text-slate-900 text-center">
                Net vs Tax Breakdown
              </h3>

              <div className="mx-auto" style={{ width: "100%", maxWidth: "280px", height: "280px" }}>
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                  initialDimension={{ width: 280, height: 280 }}   // ← This fixes the -1 error
                  debounce={100}
                >
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius="58%"
                      outerRadius="88%"
                      dataKey="value"
                      paddingAngle={4}
                      isAnimationActive={true}
                      animationDuration={800}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="flex justify-center gap-6 mt-8">
                {chartData.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="w-3.5 h-3.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-slate-600 font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pay Breakdown */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
              <h3 className="font-semibold text-xl mb-8 text-slate-900">Pay Breakdown (After Tax)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { label: "Monthly Net", value: result.net?.monthly || 0, id: "monthly-net" },
                  { label: "Bi-weekly Net", value: (result.net?.weekly || 0) * 2, id: "biweekly-net" },
                  { label: "Weekly Net", value: result.net?.weekly || 0, id: "weekly-net" },
                  { label: "Effective Hourly", value: result.net?.hourly || 0, id: "effective-hourly" },
                ].map((item) => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                      <p className="text-3xl sm:text-4xl font-black tracking-tighter text-slate-900 mt-2">
                        {result.currency?.symbol || "$"}{formatSmart(item.value)}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(item.value, item.id)}
                      className="self-start p-2 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                      {copiedId === item.id ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5 text-slate-400" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Insight */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 flex gap-5 border border-slate-100">
              <Info className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg text-slate-900">Quick Insight</p>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  After taxes, you effectively earn{" "}
                  <span className="font-semibold text-emerald-700">
                    {result.currency?.symbol}{formatSmart(result.net?.hourly || 0)}/hr
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50">
          <Check className="w-5 h-5 text-emerald-400" />
          {toast}
        </div>
      )}
    </div>
  );
}