"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { calculateDoorDashEarnings } from "@/lib/earningUtils";
import {
  RotateCcw,
  Copy,
  AlertTriangle,
  TrendingUp,
  Wallet,
  ReceiptText,
  ChevronRight,
} from "lucide-react";
import CalculationInputField from "@/components/ui/CalculationInputField";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function DoorDashCalculatorClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // ================= STATE =================
  const [ordersPerHour, setOrdersPerHour] = useState<number>(() => Number(searchParams.get("oph")) || 2.5);
  const [earningPerOrder, setEarningPerOrder] = useState<number>(() => Number(searchParams.get("epo")) || 11.5);
  const [hoursPerDay, setHoursPerDay] = useState<number>(() => Number(searchParams.get("hpd")) || 7);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(() => Number(searchParams.get("dpw")) || 6);
  const [milesPerOrder, setMilesPerOrder] = useState<number>(() => Number(searchParams.get("mpo")) || 3);
  const [costPerMile, setCostPerMile] = useState<number>(() => Number(searchParams.get("cpm")) || 0.67);
  const [taxRate, setTaxRate] = useState<number>(() => Number(searchParams.get("tr")) || 15.3);

  const [toast, setToast] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  // ================= CALC =================
  const result = useMemo(() => calculateDoorDashEarnings({
    ordersPerHour,
    earningPerOrder,
    hoursPerDay,
    daysPerWeek,
    milesPerOrder,
    costPerMile,
    taxRate,
  }), [ordersPerHour, earningPerOrder, hoursPerDay, daysPerWeek, milesPerOrder, costPerMile, taxRate]);

  // ================= SMART WARNINGS =================
  const realismWarnings = useMemo(() => {
    const warnings: { type: "info" | "warning" | "danger"; message: string }[] = [];

    if (ordersPerHour > 4 && ordersPerHour <= 6) {
      warnings.push({
        type: "warning",
        message: "High efficiency 🚀 — above average for most Dashers.",
      });
    }

    if (ordersPerHour > 6) {
      warnings.push({
        type: "danger",
        message: "Unrealistic input ⚠️ — extremely unlikely in real-world conditions.",
      });
    }

    if (hoursPerDay > 10) {
      warnings.push({
        type: "info",
        message: "Long working hours 💡 — fatigue & downtime may affect results.",
      });
    }

    if (result.net.hourly > 50) {
      warnings.push({
        type: "warning",
        message: "Very high profit 💰 — double-check assumptions.",
      });
    }

    return warnings;
  }, [ordersPerHour, hoursPerDay, result.net.hourly]);

  // ================= URL =================
  useEffect(() => {
    const t = setTimeout(() => {
      const p = new URLSearchParams();
      p.set("oph", ordersPerHour.toString());
      p.set("epo", earningPerOrder.toString());
      p.set("hpd", hoursPerDay.toString());
      p.set("dpw", daysPerWeek.toString());
      p.set("mpo", milesPerOrder.toString());
      p.set("cpm", costPerMile.toString());
      p.set("tr", taxRate.toString());
      router.replace(`?${p.toString()}`, { scroll: false });
    }, 400);
    return () => clearTimeout(t);
  }, [ordersPerHour, earningPerOrder, hoursPerDay, daysPerWeek, milesPerOrder, costPerMile, taxRate]);

  // ================= HELPERS =================
  const formatSmart = (n: number) => {
    const abs = Math.abs(n);
    if (abs >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
    if (abs >= 1000) return `$${(n / 1000).toFixed(1)}K`;
    return `$${n.toFixed(0)}`;
  };

  const copyResults = () => {
    navigator.clipboard.writeText(
      `DoorDash Earnings:
Net: $${result.net.hourly}/hr
Monthly: ${formatSmart(result.net.monthly)}
Yearly: ${formatSmart(result.net.yearly)}`
    );
    setToast("Copied!");
    setTimeout(() => setToast(""), 2000);
  };

  const reset = () => {
    setOrdersPerHour(2.5);
    setEarningPerOrder(11.5);
    setHoursPerDay(7);
    setDaysPerWeek(6);
    setMilesPerOrder(3);
    setCostPerMile(0.67);
    setTaxRate(15.3);
  };

  const scenarios = [
    { label: "Low", value: 1.8 },
    { label: "Avg", value: 2.5 },
    { label: "High", value: 3.8 },
  ];

  const chartData = [
    { name: "Take Home", value: Math.max(0, result.net.monthly) },
    { name: "Expenses", value: result.expenses.monthly },
    { name: "Taxes", value: result.tax.monthly },
  ];

  const COLORS = ["#10b981", "#ef4444", "#f59e0b"];

  // ================= UI =================
  return (
    <div className="w-full max-w-7xl mx-auto p-3 sm:p-6 lg:p-12">

      <div className="grid lg:grid-cols-12 gap-6">

        {/* LEFT PANEL */}
        <div className="lg:col-span-5 space-y-6">

          <div>
            <h2 className="text-3xl font-extrabold">Earnings Pro</h2>
            <p className="text-slate-500">Real-world profit calculator</p>
          </div>

          {/* SCENARIOS */}
          <div className="bg-slate-100 p-1 rounded-xl flex gap-1">
            {scenarios.map((s) => (
              <button key={s.label}
                onClick={() => setOrdersPerHour(s.value)}
                className="flex-1 py-2 rounded-lg bg-white shadow text-sm font-bold">
                {s.label}
              </button>
            ))}
          </div>

          {/* INPUTS */}
          <div className="bg-white p-5 rounded-2xl shadow space-y-5">
            <h3 className="text-xs font-bold text-slate-400">WORK</h3>

            <CalculationInputField label="Orders/hr" value={ordersPerHour} onChange={(v) => setOrdersPerHour(Number(v))} />
            <CalculationInputField label="Earning/order" value={earningPerOrder} onChange={(v) => setEarningPerOrder(Number(v))} />
            <CalculationInputField label="Hours/day" value={hoursPerDay} onChange={(v) => setHoursPerDay(Number(v))} />
            <CalculationInputField label="Days/week" value={daysPerWeek} onChange={(v) => setDaysPerWeek(Number(v))} />

            <h3 className="text-xs font-bold text-slate-400 pt-4">COST</h3>

            <CalculationInputField label="Miles/order" value={milesPerOrder} onChange={(v) => setMilesPerOrder(Number(v))} />
            <CalculationInputField label="Cost/mile" value={costPerMile} onChange={(v) => setCostPerMile(Number(v))} />
            <CalculationInputField label="Tax %" value={taxRate} onChange={(v) => setTaxRate(Number(v))} />
          </div>

          <div className="flex gap-3">
            <button onClick={reset} className="flex-1 py-3 bg-gray-100 rounded-xl font-bold">Reset</button>
            <button onClick={copyResults} className="flex-1 py-3 bg-black text-white rounded-xl font-bold">Copy</button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:col-span-7 space-y-6">

          {/* WARNINGS */}
          {realismWarnings.length > 0 && (
            <div className="space-y-3">
              {realismWarnings.map((w, i) => (
                <div key={i}
                  className={`p-4 rounded-2xl border flex gap-3 text-sm font-medium
                  ${w.type === "danger"
                      ? "bg-red-50 border-red-200 text-red-700"
                      : w.type === "warning"
                      ? "bg-amber-50 border-amber-200 text-amber-700"
                      : "bg-blue-50 border-blue-200 text-blue-700"
                    }`}>
                  <AlertTriangle size={18} />
                  {w.message}
                </div>
              ))}
            </div>
          )}

          {/* HERO */}
          <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-8 rounded-3xl">
            <p className="text-xs uppercase">Net Hourly</p>
            <h1 className="text-5xl font-black">${result.net.hourly}/hr</h1>

            <div className="flex gap-6 mt-4 text-sm">
              <div>Gross ${result.gross.hourly}</div>
              <div>Cost -${result.expenses.hourly}</div>
            </div>
          </div>

          {/* QUICK STATS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="text-xs text-gray-400">Weekly</p>
              <p className="font-bold">{formatSmart(result.net.weekly)}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="text-xs text-gray-400">Monthly</p>
              <p className="font-bold">{formatSmart(result.net.monthly)}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="text-xs text-gray-400">Yearly</p>
              <p className="font-bold">{formatSmart(result.net.yearly)}</p>
            </div>
          </div>

          {/* CHART */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="font-bold mb-3">Allocation</h3>
            {isMounted && (
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={chartData} dataKey="value" innerRadius={50} outerRadius={70}>
                    {chartData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* BREAKDOWN */}
          <div className="bg-black text-white p-6 rounded-2xl">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              Business Breakdown <ChevronRight size={16} />
            </h3>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><p className="text-gray-400">Annual Gross</p><p>{formatSmart(result.gross.yearly)}</p></div>
              <div><p className="text-gray-400">Expenses</p><p>-{formatSmart(result.expenses.yearly)}</p></div>
              <div><p className="text-gray-400">Taxes</p><p>-{formatSmart(result.tax.yearly)}</p></div>
              <div><p className="text-gray-400">Orders/week</p><p>{result.ordersPerWeek}</p></div>
              <div><p className="text-gray-400">Miles/week</p><p>{result.milesPerWeek}</p></div>
              <div><p className="text-gray-400">Daily Profit</p><p>${result.net.daily}</p></div>
            </div>
          </div>

          {/* WARNINGS FROM UTIL */}
          {result.metadata.warnings.length > 0 && (
            <div className="bg-yellow-100 p-3 rounded-xl flex gap-2 text-sm">
              <AlertTriangle size={16} />
              {result.metadata.warnings.join(", ")}
            </div>
          )}
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm">
          {toast}
        </div>
      )}
    </div>
  );
}