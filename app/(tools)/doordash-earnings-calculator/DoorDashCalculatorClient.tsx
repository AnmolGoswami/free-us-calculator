"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { calculateDoorDashEarnings, type DoorDashInputs } from "@/lib/earningUtils";
import { RotateCcw, Copy, AlertTriangle, ChevronRight, Info } from "lucide-react";
import CalculationInputField from "@/components/ui/CalculationInputField";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function DoorDashCalculatorClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // ================= STATE =================
  const [ordersPerHour, setOrdersPerHour] = useState<number>(() => Number(searchParams.get("oph")) || 2.2);
  const [earningPerOrder, setEarningPerOrder] = useState<number>(() => Number(searchParams.get("epo")) || 11.0);
  const [hoursPerDay, setHoursPerDay] = useState<number>(() => Number(searchParams.get("hpd")) || 7);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(() => Number(searchParams.get("dpw")) || 6);
  const [milesPerOrder, setMilesPerOrder] = useState<number>(() => Number(searchParams.get("mpo")) || 3.5);
  const [costPerMile, setCostPerMile] = useState<number>(() => Number(searchParams.get("cpm")) || 0.85);
  const [taxRate, setTaxRate] = useState<number>(() => Number(searchParams.get("tr")) || 18);
  const [region, setRegion] = useState<'US' | 'IN' | 'OTHER'>(
    () => (searchParams.get("region") as 'US' | 'IN' | 'OTHER') || 'IN'
  );

  const [toast, setToast] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  // ================= INPUTS & CALCULATION =================
  const inputs: DoorDashInputs = {
    ordersPerHour,
    earningPerOrder,
    hoursPerDay,
    daysPerWeek,
    milesPerOrder,
    costPerMile,
    taxRate,
    currency: region === 'IN' ? "INR" : "USD",
    region,
    includeSelfEmploymentTax: region === 'US',
    additionalWeeklyExpenses: 0,
  };

  const result = useMemo(() =>
    calculateDoorDashEarnings(inputs, { timestamp: new Date().toISOString() }),
    [inputs]
  );

  const currency = inputs.currency;

  // ================= WARNINGS =================
  const allWarnings = useMemo(() => {
    const warnings: Array<{ type: "info" | "warning" | "danger"; message: string }> = [];

    if (ordersPerHour > 4 && ordersPerHour <= 6) {
      warnings.push({ type: "warning", message: "High efficiency — above average for most Dashers." });
    }
    if (ordersPerHour > 6) {
      warnings.push({ type: "danger", message: "Unrealistic orders per hour — difficult to sustain." });
    }
    if (hoursPerDay > 10) {
      warnings.push({ type: "warning", message: "Long hours may lead to fatigue." });
    }
    if (result.net.hourly > 35) {
      warnings.push({ type: "warning", message: "Very high net hourly — verify inputs." });
    }

    result.validation.issues.forEach((issue) => {
      warnings.push({
        type: issue.severity === 'error' ? "danger" : "warning",
        message: issue.message
      });
    });

    result.metadata.warnings.forEach((w) => {
      warnings.push({ type: "warning", message: w.message });
    });

    return warnings;
  }, [ordersPerHour, hoursPerDay, result]);

  // ================= URL SYNC =================
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      params.set("oph", ordersPerHour.toFixed(1));
      params.set("epo", earningPerOrder.toFixed(1));
      params.set("hpd", hoursPerDay.toString());
      params.set("dpw", daysPerWeek.toString());
      params.set("mpo", milesPerOrder.toFixed(1));
      params.set("cpm", costPerMile.toFixed(2));
      params.set("tr", taxRate.toFixed(1));
      params.set("region", region);
      router.replace(`?${params.toString()}`, { scroll: false });
    }, 600);

    return () => clearTimeout(timer);
  }, [ordersPerHour, earningPerOrder, hoursPerDay, daysPerWeek, milesPerOrder, costPerMile, taxRate, region, router]);

  // ================= FINTECH FORMATTERS =================
  const formatCompactCurrency = (value: number, curr: string, decimals = 2): string => {
    const abs = Math.abs(value);
    if (abs >= 1_000_000_000) return (value / 1_000_000_000).toFixed(decimals) + (curr === "INR" ? "B" : "B");
    if (abs >= 1_000_000) return (value / 1_000_000).toFixed(decimals) + (curr === "INR" ? "M" : "M");
    if (abs >= 10_000) return (value / 1_000).toFixed(decimals) + (curr === "INR" ? "K" : "K");

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: curr,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(Math.max(0, value));
  };

  const formatFullCurrency = (value: number, curr: string, decimals = 2): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: curr,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(Math.max(0, value));
  };

  // ================= COPY FULL REPORT =================
  const copyResults = async () => {
    const text = `DoorDash Earnings Pro\n\n` +
      `Net Hourly     : ${formatFullCurrency(result.net.hourly, currency, 2)}\n` +
      `Net Weekly     : ${formatFullCurrency(result.net.weekly, currency)}\n` +
      `Net Monthly    : ${formatFullCurrency(result.net.monthly, currency)}\n` +
      `Net Yearly     : ${formatFullCurrency(result.net.yearly, currency)}\n\n` +
      `Gross Yearly   : ${formatFullCurrency(result.gross.yearly, currency)}\n` +
      `Expenses Yearly: ${formatFullCurrency(result.expenses.yearly, currency)}\n` +
      `Taxes Yearly   : ${formatFullCurrency(result.tax.yearly, currency)}\n\n` +
      `Orders / Week  : ${result.metrics.ordersPerWeek.toFixed(1)}\n` +
      `Miles / Week   : ${result.metrics.milesPerWeek.toFixed(0)}\n` +
      `Confidence     : ${(result.metadata.confidenceScore * 100).toFixed(0)}%\n` +
      `Region         : ${region} | ${currency}`;

    await navigator.clipboard.writeText(text);
    setToast("Full detailed report copied!");
    setTimeout(() => setToast(""), 2000);
  };

  const resetToRealistic = () => {
    setOrdersPerHour(2.2);
    setEarningPerOrder(11.0);
    setHoursPerDay(7);
    setDaysPerWeek(6);
    setMilesPerOrder(3.5);
    setCostPerMile(0.85);
    setTaxRate(region === 'US' ? 22 : 18);
  };

  const chartData = [
    { name: "Net Take-Home", value: Math.max(0, result.net.monthly), fill: "#10b981" },
    { name: "Expenses", value: result.expenses.monthly, fill: "#ef4444" },
    { name: "Taxes", value: result.tax.monthly, fill: "#f59e0b" },
  ];

  // ================= UI =================
  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Earnings Pro</h1>
          <p className="text-muted-foreground text-sm mt-1">Stripe-grade DoorDash / Gig Profit Calculator</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* INPUT PANEL */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value as 'US' | 'IN' | 'OTHER')}
                className="flex-1 bg-white border border-gray-300 rounded-2xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-blue-500"
              >
                <option value="IN">🇮🇳 India</option>
                <option value="US">🇺🇸 United States</option>
                <option value="OTHER">🌍 Other Region</option>
              </select>

              <button
                onClick={resetToRealistic}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white border border-gray-300 hover:bg-gray-100 rounded-2xl font-medium transition-colors text-sm"
              >
                <RotateCcw size={17} /> Realistic Defaults
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-6">
              <div>
                <h3 className="uppercase text-xs tracking-widest text-gray-500 font-semibold mb-4">WORK METRICS</h3>
                <div className="space-y-5">
                  <CalculationInputField label="Orders per hour" value={ordersPerHour} onChange={(v) => setOrdersPerHour(Number(v) || 0)} step={0.1} />
                  <CalculationInputField label="Avg. earning per order" value={earningPerOrder} onChange={(v) => setEarningPerOrder(Number(v) || 0)} prefix={currency === "INR" ? "₹" : "$"} step={0.5} />
                  <CalculationInputField label="Hours per day" value={hoursPerDay} onChange={(v) => setHoursPerDay(Number(v) || 0)} step={0.5} />
                  <CalculationInputField label="Days per week" value={daysPerWeek} onChange={(v) => setDaysPerWeek(Number(v) || 0)} step={1} />
                </div>
              </div>

              <div>
                <h3 className="uppercase text-xs tracking-widest text-gray-500 font-semibold mb-4">EXPENSES & TAX</h3>
                <div className="space-y-5">
                  <CalculationInputField label="Miles per order" value={milesPerOrder} onChange={(v) => setMilesPerOrder(Number(v) || 0)} step={0.1} />
                  <CalculationInputField label="Cost per mile" value={costPerMile} onChange={(v) => setCostPerMile(Number(v) || 0)} prefix={currency === "INR" ? "₹" : "$"} step={0.01} />
                  <CalculationInputField label="Tax rate (%)" value={taxRate} onChange={(v) => setTaxRate(Number(v) || 0)} step={0.5} />
                </div>
              </div>
            </div>

            <button
              onClick={copyResults}
              className="w-full py-3.5 bg-black hover:bg-zinc-800 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.985]"
            >
              <Copy size={18} /> Copy Full Report
            </button>
          </div>

          {/* RESULTS PANEL */}
          <div className="lg:col-span-7 space-y-5">

            {/* Main Net Result */}
            <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-black text-white px-4 py-5 sm:px-6 sm:py-6">

              {/* Label */}
              <p className="text-[10px] sm:text-xs uppercase tracking-wide text-zinc-500">
                Net Hourly Earnings
              </p>

              {/* Main Value */}
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight truncate max-w-full">
                  {formatFullCurrency(result.net.hourly, currency, 2)}
                </span>
                <span className="text-xs sm:text-sm text-zinc-400">
                  /hr
                </span>
              </div>

              {/* Breakdown */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm">

                <div className="flex justify-between sm:flex-col bg-zinc-800/40 rounded-lg px-3 py-2">
                  <span className="text-zinc-500">Gross</span>
                  <span className="font-medium truncate">
                    {formatFullCurrency(result.gross.hourly, currency)}
                  </span>
                </div>

                <div className="flex justify-between sm:flex-col bg-zinc-800/40 rounded-lg px-3 py-2">
                  <span className="text-red-400">Expenses</span>
                  <span className="font-medium text-red-400 truncate">
                    -{formatFullCurrency(result.expenses.hourly, currency)}
                  </span>
                </div>

                <div className="flex justify-between sm:flex-col bg-zinc-800/40 rounded-lg px-3 py-2">
                  <span className="text-amber-400">Tax</span>
                  <span className="font-medium text-amber-400 truncate">
                    -{formatFullCurrency(result.tax.hourly, currency)}
                  </span>
                </div>

              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-4 text-xs sm:text-sm">
                <span className="text-zinc-500">
                  Confidence
                </span>
                <span className="font-semibold text-emerald-400">
                  {(result.metadata.confidenceScore * 100).toFixed(0)}%
                </span>
              </div>

            </div>

            {/* Warnings */}
            {allWarnings.length > 0 && (
              <div className="space-y-3">
                {allWarnings.map((w, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-2xl flex gap-3 text-sm border ${w.type === "danger" ? "bg-red-50 border-red-200 text-red-800" :
                      w.type === "warning" ? "bg-amber-50 border-amber-200 text-amber-800" :
                        "bg-blue-50 border-blue-200 text-blue-800"
                      }`}
                  >
                    <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" />
                    <p>{w.message}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Period Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Weekly Net", value: result.net.weekly },
                { label: "Monthly Net", value: result.net.monthly },
                { label: "Yearly Net", value: result.net.yearly },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-6 text-center shadow-sm">
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-3xl font-semibold mt-2 tracking-tighter">
                    {formatCompactCurrency(item.value, currency)}
                  </p>
                </div>
              ))}
            </div>

            {/* Pie Chart */}
            <div className="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                Monthly Breakdown <Info size={15} className="text-gray-400" />
              </h3>
              {isMounted && (
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie
                      data={chartData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={65}
                      outerRadius={88}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: unknown) => {
                        const num = typeof value === "number"
                          ? value
                          : Number(value);

                        if (isNaN(num)) return "—";
                        
                        return formatFullCurrency(num, currency);
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Detailed Breakdown */}
            {/* Full Business Breakdown - Attractive & Responsive */}
            <div className="bg-zinc-900 text-white p-7 sm:p-8 rounded-3xl shadow-xl border border-zinc-800">
              <h3 className="font-semibold text-lg flex items-center gap-3 mb-6">
                Full Business Breakdown
                <ChevronRight size={20} className="text-zinc-500" />
              </h3>

              <div className="space-y-6">
                {/* Top Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-zinc-800/50 rounded-2xl p-5 text-center border border-zinc-700">
                    <p className="text-xs text-zinc-400">Annual Gross</p>
                    <p className="text-2xl font-semibold text-white mt-2">
                      {formatCompactCurrency(result.gross.yearly, currency)}
                    </p>
                  </div>

                  <div className="bg-zinc-800/50 rounded-2xl p-5 text-center border border-zinc-700">
                    <p className="text-xs text-zinc-400">Total Expenses</p>
                    <p className="text-2xl font-semibold text-red-400 mt-2">
                      -{formatCompactCurrency(result.expenses.yearly, currency)}
                    </p>
                  </div>

                  <div className="bg-zinc-800/50 rounded-2xl p-5 text-center border border-zinc-700">
                    <p className="text-xs text-zinc-400">Estimated Taxes</p>
                    <p className="text-2xl font-semibold text-amber-400 mt-2">
                      -{formatCompactCurrency(result.tax.yearly, currency)}
                    </p>
                  </div>
                </div>

                {/* Net Profit - Highlighted */}
                <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/30 rounded-3xl p-6 text-center">
                  <p className="text-sm text-emerald-400 font-medium tracking-widest">YOUR ESTIMATED NET PROFIT</p>
                  <p className="text-4xl sm:text-5xl font-bold text-emerald-400 mt-3 tracking-tighter">
                    {formatCompactCurrency(result.net.yearly, currency)}
                  </p>
                  <p className="text-xs text-emerald-500/70 mt-2">per year • after all expenses & taxes</p>
                </div>

                {/* Detailed Breakdown List */}
                <div className="pt-4 border-t border-zinc-800 text-sm">
                  <div className="space-y-3">

                    {/* Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 p-3 rounded-xl bg-zinc-900/40 hover:bg-zinc-900/60 transition">
                      <span className="text-zinc-400 text-xs sm:text-sm">
                        Annual Gross Revenue
                      </span>
                      <span className="font-semibold text-white text-sm sm:text-base truncate max-w-full sm:max-w-[55%] text-left sm:text-right">
                        {formatFullCurrency(result.gross.yearly, currency)}
                      </span>
                    </div>

                    {/* Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 p-3 rounded-xl bg-zinc-900/40 hover:bg-zinc-900/60 transition">
                      <span className="text-zinc-400 text-xs sm:text-sm">
                        Total Operating Expenses
                      </span>
                      <span className="text-red-400 font-semibold text-sm sm:text-base truncate max-w-full sm:max-w-[55%] text-left sm:text-right">
                        -{formatFullCurrency(result.expenses.yearly, currency)}
                      </span>
                    </div>

                    {/* Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 p-3 rounded-xl bg-zinc-900/40 hover:bg-zinc-900/60 transition">
                      <span className="text-zinc-400 text-xs sm:text-sm">
                        Estimated Tax Liability
                      </span>
                      <span className="text-amber-400 font-semibold text-sm sm:text-base truncate max-w-full sm:max-w-[55%] text-left sm:text-right">
                        -{formatFullCurrency(result.tax.yearly, currency)}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-2" />

                    {/* Net Profit */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 border border-emerald-500/20">
                      <span className="text-white text-sm sm:text-base font-medium">
                        Net Annual Profit
                      </span>
                      <span className="text-emerald-400 font-bold text-lg sm:text-xl truncate max-w-full sm:max-w-[55%] text-left sm:text-right">
                        {formatFullCurrency(result.net.yearly, currency)}
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-6 py-3 rounded-2xl shadow-2xl text-sm flex items-center gap-2 z-50">
          ✅ {toast}
        </div>
      )}
    </div>
  );
}