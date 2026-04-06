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
  const [showChart, setShowChart] = useState(false); // Prevents early render warning
  const [mode, setMode] = useState<ExtendedMode>(defaultMode);

  // Detect mode from URL + small delay for chart
  useEffect(() => {
    setIsClient(true);

    const pathname = window.location.pathname.toLowerCase();
    let detected: ExtendedMode = "hourly-to-salary";

    if (pathname.includes("salary-to-hourly")) detected = "salary-to-hourly";
    else if (pathname.includes("overtime")) detected = "overtime";
    else if (pathname.includes("time-and-half") || pathname.includes("timeandhalf")) 
      detected = "time-and-half";

    setMode(detected);

    // Small delay so layout stabilizes before chart mounts
    const timer = setTimeout(() => setShowChart(true), 150);
    return () => clearTimeout(timer);
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
  }, [mode, hourlyRate, annualSalary, hoursPerWeek, overtimeHours, overtimeMultiplier, taxRate, currency]);

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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
        <div className="max-w-7xl mx-auto h-96 bg-white/60 rounded-3xl animate-pulse" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-2 shadow-sm mb-4">
            <DollarSign className="w-6 h-6 text-emerald-600" />
            <span className="font-semibold text-slate-700">Salary & Earnings Calculator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
            Know Your Real Take-Home Pay
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-md mx-auto">
            Accurate calculations with tax, overtime & multiple currencies
          </p>
        </div>

        {/* Currency Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-3xl p-1.5 shadow-sm border border-slate-100">
            {["USD", "INR", "EUR", "GBP"].map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c as CurrencyCode)}
                className={`px-8 py-3 rounded-3xl text-sm font-semibold transition-all ${
                  currency === c ? "bg-slate-900 text-white shadow" : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 xl:gap-12">
          {/* Left Sidebar - Controls */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-8">
            {/* Mode Selector */}
            <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100">
              <div className="grid grid-cols-2 gap-2">
                {modes.map((m) => {
                  const Icon = m.icon;
                  const isActive = mode === m.id;
                  const href = `/${m.id}-calculator`;

                  return (
                    <a
                      key={m.id}
                      href={href}
                      className={`flex items-center gap-3 px-6 py-5 rounded-2xl text-sm font-medium transition-all duration-200 ${
                        isActive 
                          ? "bg-emerald-600 text-white shadow-md" 
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-400"}`} />
                      <span>{m.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Input Parameters */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-semibold text-2xl text-slate-900">Parameters</h3>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                  <RotateCcw size={18} />
                  Reset
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField 
                    label="Hours per Week" 
                    value={hoursPerWeek} 
                    onChange={handleNumberInput(setHoursPerWeek)} 
                  />
                  <InputField 
                    label="Tax Rate (%)" 
                    value={taxRate} 
                    onChange={handleNumberInput(setTaxRate)} 
                    suffix="%" 
                  />
                </div>

                {(mode === "overtime" || mode === "time-and-half") && (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-7 mt-4">
                    <p className="uppercase text-emerald-700 text-xs font-bold tracking-widest mb-5">
                      Overtime Configuration
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <InputField 
                        label="Overtime Hours (per week)" 
                        value={overtimeHours} 
                        onChange={handleNumberInput(setOvertimeHours)} 
                      />
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
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setToast("Link copied successfully!");
                }}
                className="mt-10 w-full py-4 bg-slate-900 hover:bg-black text-white font-semibold rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.985]"
              >
                <Copy size={20} /> Share This Estimate
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* Big Net Pay Card */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-8 right-8 text-emerald-400">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  LIVE
                </div>
              </div>

              <div className="mb-8">
                <p className="text-emerald-400 text-sm font-semibold tracking-widest">YOUR ESTIMATED NET INCOME</p>
                <div className="flex items-end gap-4 mt-4">
                  <span className="text-7xl md:text-8xl font-black tracking-tighter">
                    {result.currency?.symbol || "$"}{formatSmart(result.net?.yearly || 0)}
                  </span>
                  <button
                    onClick={() => copyToClipboard(result.net?.yearly || 0, "yearly")}
                    className="mb-3 p-3 hover:bg-white/10 rounded-2xl transition-colors"
                  >
                    {copiedId === "yearly" ? <Check className="w-7 h-7 text-emerald-400" /> : <Copy className="w-7 h-7" />}
                  </button>
                </div>
                <p className="text-slate-400 text-xl">per year</p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-slate-400 text-sm">Gross Annual</p>
                  <p className="text-3xl font-semibold mt-1">
                    {result.currency?.symbol || "$"}{formatSmart(result.gross?.yearly || 0)}
                  </p>
                </div>
                <div>
                  <p className="text-rose-400 text-sm">Total Tax</p>
                  <p className="text-3xl font-semibold mt-1 text-rose-400">
                    {result.currency?.symbol || "$"}{formatSmart(result.tax?.yearly || 0)}
                  </p>
                </div>
              </div>
            </div>

            {/* Pie Chart - FIXED */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="font-semibold text-xl mb-8 text-slate-900">Net vs Tax Breakdown</h3>
              
              <div className="flex justify-center py-6">
                <div 
                  className="w-full max-w-[360px] aspect-square md:max-w-[420px]"
                  style={{ minHeight: "360px" }}
                >
                  {showChart && (
                    <ResponsiveContainer 
                      width="100%" 
                      height="100%"
                      initialDimension={{ width: 360, height: 360 }}  // ← This eliminates the -1 warning
                    >
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          innerRadius="68%"
                          outerRadius="90%"
                          dataKey="value"
                          paddingAngle={5}
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>

              <div className="flex justify-center gap-8 mt-6">
                {chartData.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: item.color }} 
                    />
                    <span className="text-sm font-medium text-slate-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pay Breakdown Card */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-semibold text-xl text-slate-900 mb-8">Pay Breakdown (After Taxes)</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  { label: "Monthly Net", value: result.net?.monthly || 0, id: "monthly-net" },
                  { label: "Bi-weekly Net", value: (result.net?.weekly || 0) * 2, id: "biweekly-net" },
                  { label: "Weekly Net", value: result.net?.weekly || 0, id: "weekly-net" },
                  { label: "Effective Hourly", value: result.net?.hourly || 0, id: "effective-hourly" },
                ].map((item) => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                      <p className="text-4xl font-black tracking-tighter text-slate-900 mt-2">
                        {result.currency?.symbol || "$"}{formatSmart(item.value)}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {item.label.includes("Hourly") ? "After tax" : ""}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(item.value, item.id)}
                      className="self-start p-2 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-slate-400" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Insight Card */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 flex gap-5">
              <Info className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg text-slate-900">Quick Insight</p>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  After taxes, you effectively earn{" "}
                  <span className="font-semibold text-emerald-700">
                    {result.currency?.symbol || "$"}{formatSmart(result.net?.hourly || 0)}
                  </span>{" "}
                  per hour — that's what really matters for your time.
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