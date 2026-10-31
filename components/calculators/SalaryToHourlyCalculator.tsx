
"use client";

import React, { useState, useMemo, useEffect } from "react";
import { calculateEarnings, CurrencyCode } from "@/lib/hourlyEarningCalculator";
import {
  Copy, Check, Info, Wallet, Clock
} from "lucide-react";

// ─── Formatters ───────────────────────────────────────────────────────────────
function fmt(v: number) {
  return v.toLocaleString("en-US", { maximumFractionDigits: 2 });
}
function fmtCompact(v: number) {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(2)}M`;
  if (v >= 1_000)     return `${(v / 1_000).toFixed(1)}K`;
  return v.toFixed(2);
}
function pct(v: number, total: number) {
  if (!total) return "0.0";
  return ((v / total) * 100).toFixed(1);
}

// ─── Copy button ──────────────────────────────────────────────────────────────
function CopyBtn({ value }: { value: number }) {
  const [copied, setCopied] = useState(false);
  const handle = async () => {
    await navigator.clipboard.writeText(fmt(value));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handle}
      title="Copy value"
      className="p-1.5 rounded-lg hover:bg-white/20 transition-colors flex-shrink-0"
    >
      {copied
        ? <Check size={13} className="text-emerald-300" />
        : <Copy size={13} className="text-white/50 hover:text-white/80" />}
    </button>
  );
}

// ─── Donut ring ───────────────────────────────────────────────────────────────
function DonutRing({
  netPct, taxPct
}: {
  netPct: number; taxPct: number;
}) {
  const r = 52;
  const circ = 2 * Math.PI * r;

  const segments = [
    { pct: netPct,   color: "#22c55e" }, // Emerald-500
    { pct: taxPct,   color: "#f43f5e" }, // Rose-500
  ];

  let offset = 0;
  const arcs = segments.map((s) => {
    const dash = (s.pct / 100) * circ;
    const gap  = circ - dash;
    const rotate = (offset / 100) * 360 - 90;
    offset += s.pct;
    return { ...s, dash, gap, rotate };
  });

  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-32 sm:h-32">
      {arcs.map((a, i) => (
        <circle
          key={i}
          cx="60" cy="60" r={r}
          fill="none"
          stroke={a.color}
          strokeWidth="12"
          strokeDasharray={`${a.dash} ${a.gap}`}
          strokeLinecap="butt"
          style={{ transform: `rotate(${a.rotate}deg)`, transformOrigin: "60px 60px" }}
        />
      ))}
      <circle cx="60" cy="60" r="40" fill="#0f1a2e" />
    </svg>
  );
}

// ─── Pill select ──────────────────────────────────────────────────────────────
function PillSelect<T extends string>({
  label, value, onChange, options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string; short?: string }[];
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
        {label}
      </label>
      <div className="grid grid-cols-2 gap-1.5">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border text-center ${
              value === o.value
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                : "border-white/10 text-slate-400 hover:border-indigo-400 hover:text-white"
            }`}
          >
            {o.short ?? o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Stat card ────────────────────────────────────────────────────────────────
function StatCard({
  label, value, sub, color = "slate", copyVal,
}: {
  label: string; value: string; sub?: string;
  color?: "green" | "red" | "orange" | "purple" | "slate" | "blue";
  copyVal?: number;
}) {
  const colors = {
    green:  "bg-emerald-500/15 border-emerald-500/20 text-emerald-300",
    red:    "bg-rose-500/15 border-rose-500/20 text-rose-300",
    orange: "bg-orange-500/15 border-orange-500/20 text-orange-300",
    purple: "bg-purple-500/15 border-purple-500/20 text-purple-300",
    blue:   "bg-blue-500/15 border-blue-500/20 text-blue-300",
    slate:  "bg-white/5 border-white/10 text-white",
  };
  return (
    <div className={`rounded-2xl border p-3 sm:p-4 ${colors[color]}`}>
      <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">{label}</p>
      <div className="flex items-center gap-1.5">
        <p className="text-base sm:text-xl font-black leading-none">{value}</p>
        {copyVal !== undefined && <CopyBtn value={copyVal} />}
      </div>
      {sub && <p className="text-[10px] opacity-50 mt-1">{sub}</p>}
    </div>
  );
}

interface SalaryToHourlyCalculatorProps {
  defaultSalary?: string;
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function SalaryToHourlyCalculator({
  defaultSalary = "60000",
}: SalaryToHourlyCalculatorProps) {
  const [isClient, setIsClient] = useState(false);
  const [taxMode, setTaxMode] = useState<"flat" | "progressive">("flat");
  const [annualSalary, setAnnualSalary] = useState(defaultSalary);
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [taxRate, setTaxRate] = useState("20");
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [activeTab, setActiveTab] = useState<"hourly" | "weekly" | "monthly" | "annual">("hourly");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const result = useMemo(() => {
    try {
      return calculateEarnings({
        mode: "salary-to-hourly",
        hourlyRate: 0,
        annualSalary: parseFloat(annualSalary) || 0,
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
  }, [annualSalary, hoursPerWeek, taxRate, currency, taxMode]);

  const numSalary = parseFloat(annualSalary) || 0;
  
  let currentGross = result.gross.hourly;
  let currentTax = result.tax.hourly;
  let currentNet = result.net.hourly;
  let period = "/hr";

  if (activeTab === "annual") {
    currentGross = result.gross.yearly;
    currentTax = result.tax.yearly;
    currentNet = result.net.yearly;
    period = "/yr";
  } else if (activeTab === "monthly") {
    currentGross = result.gross.monthly;
    currentTax = result.tax.monthly;
    currentNet = result.net.monthly;
    period = "/mo";
  } else if (activeTab === "weekly") {
    currentGross = result.gross.weekly;
    currentTax = result.tax.weekly;
    currentNet = result.net.weekly;
    period = "/wk";
  }

  const netPct = numSalary > 0 ? (result.net.yearly / result.gross.yearly) * 100 : 0;
  const taxPct = numSalary > 0 ? (result.tax.yearly / result.gross.yearly) * 100 : 0;
  
  const sym = result.currency?.symbol || "$";

  if (!isClient) {
    return (
      <div className="w-full">
        <div className="w-full h-96 bg-white/5 rounded-3xl animate-pulse" />
      </div>
    );
  }

  return (
    <div className="w-full text-white">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* ════════════════════════════════════════════════════════════
              LEFT — INPUTS
          ════════════════════════════════════════════════════════════ */}
          <div className="space-y-5">

            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                <Clock size={18} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg font-black tracking-tight">
                  Salary to Hourly Calculator
                </h2>
                <p className="text-xs text-slate-400">Convert Salary to True Hourly Wage</p>
              </div>
            </div>

            {/* Gross salary */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Annual Gross Salary
              </label>

              {/* Quick preset buttons */}
              <div className="flex flex-wrap gap-2 mb-3">
                {[40000, 60000, 80000, 100000, 120000, 150000].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setAnnualSalary(v.toString())}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all border ${
                      parseInt(annualSalary) === v
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "border-white/10 text-slate-400 hover:border-indigo-400 hover:text-white"
                    }`}
                  >
                    ${(v / 1000).toFixed(0)}K
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">{sym}</span>
                <input
                  type="number"
                  value={annualSalary}
                  onChange={(e) => setAnnualSalary(e.target.value.replace(/[^0-9.]/g, ""))}
                  className="w-full bg-slate-900 border border-white/10 focus:border-indigo-500
                             rounded-xl pl-8 pr-4 py-3.5 text-xl font-black text-white
                             outline-none transition-all placeholder:text-slate-600"
                  placeholder="Enter salary"
                  min={0}
                />
              </div>
            </div>

            {/* Hours Per Week */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Hours per Week
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(e.target.value.replace(/[^0-9.]/g, ""))}
                  className="w-full bg-slate-900 border border-white/10 focus:border-indigo-500
                             rounded-xl px-4 py-3.5 text-xl font-black text-white
                             outline-none transition-all placeholder:text-slate-600"
                  min={1}
                />
              </div>
            </div>

            {/* Tax Settings */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
              <PillSelect
                label="Tax Estimation"
                value={taxMode}
                onChange={setTaxMode}
                options={[
                  { value: "flat", label: "Flat Tax Rate" },
                  { value: "progressive", label: "US Progressive" },
                ]}
              />

              {taxMode === "flat" && (
                <div className="mt-4">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Flat Tax Rate (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={taxRate}
                      onChange={(e) => setTaxRate(e.target.value.replace(/[^0-9.]/g, ""))}
                      className="w-full bg-slate-900 border border-white/10 focus:border-indigo-500
                                 rounded-xl px-4 py-3 font-black text-white outline-none transition-all"
                      min={0} max={100}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
                  </div>
                </div>
              )}
            </div>

            {/* Currency Settings */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
              <PillSelect
                label="Currency"
                value={currency}
                onChange={setCurrency}
                options={[
                  { value: "USD", label: "USD ($)" },
                  { value: "EUR", label: "EUR (€)" },
                  { value: "GBP", label: "GBP (£)" },
                  { value: "INR", label: "INR (₹)" },
                ]}
              />
            </div>

          </div>

          {/* ════════════════════════════════════════════════════════════
              RIGHT — RESULTS
          ════════════════════════════════════════════════════════════ */}
          <div className="space-y-4">
            {numSalary > 0 ? (
              <>
                {/* HERO RESULT CARD */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                  style={{ background: "linear-gradient(135deg,#1e3a5f 0%,#0f1a2e 100%)" }}>

                  {/* Top — net hourly pay */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                          Net Hourly Rate
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-4xl sm:text-5xl md:text-6xl font-black text-emerald-400 tabular-nums leading-none">
                            {sym}{fmtCompact(result.net.hourly)}
                          </span>
                          <CopyBtn value={result.net.hourly} />
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          After estimated taxes
                        </p>
                      </div>

                      {/* Donut */}
                      <div className="flex-shrink-0">
                        <DonutRing
                          netPct={netPct}
                          taxPct={taxPct}
                        />
                      </div>
                    </div>

                    {/* Donut legend */}
                    <div className="flex gap-4 mt-4 justify-start">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="text-slate-400">Take-Home</span>
                        <span className="font-bold text-white">{netPct.toFixed(1)}%</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                        <span className="text-slate-400">Taxes</span>
                        <span className="font-bold text-white">{taxPct.toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Period tabs */}
                  <div className="flex border-t border-white/8">
                    {(["hourly", "weekly", "monthly", "annual"] as const).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-2.5 text-xs font-black uppercase tracking-wider transition-all ${
                          activeTab === tab
                            ? "bg-indigo-600 text-white"
                            : "text-slate-500 hover:text-white"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Period values */}
                  <div className="grid grid-cols-3 gap-px bg-white/5 border-t border-white/8">
                    {[
                      { label: "Gross",  val: currentGross,  color: "text-slate-300" },
                      { label: "Taxes",  val: currentTax,    color: "text-rose-400"  },
                      { label: "Net",    val: currentNet,    color: "text-emerald-400" },
                    ].map(({ label, val, color }) => (
                      <div key={label} className="bg-slate-900/50 px-3 py-3 text-center">
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">{label}</p>
                        <p className={`font-black text-sm sm:text-base tabular-nums ${color}`}>
                          {sym}{fmtCompact(val)}
                        </p>
                        <p className="text-[9px] text-slate-600">{period}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4-stat grid */}
                <div className="grid grid-cols-2 gap-3">
                  <StatCard
                    label="Gross Hourly Rate"
                    value={`${sym}${fmt(result.gross.hourly)}`}
                    sub="Before deductions"
                    color="slate"
                    copyVal={result.gross.hourly}
                  />
                  <StatCard
                    label="Total Yearly Hours"
                    value={fmtCompact(result.gross.yearly / result.gross.hourly)}
                    sub={`${hoursPerWeek} hrs/wk`}
                    color="blue"
                  />
                  <StatCard
                    label="Weekly Net"
                    value={`${sym}${fmtCompact(result.net.weekly)}`}
                    sub="Take-home per week"
                    color="green"
                    copyVal={result.net.weekly}
                  />
                  <StatCard
                    label="Effective Tax"
                    value={`${taxPct.toFixed(1)}%`}
                    sub="of total income"
                    color="red"
                  />
                </div>

                {/* Footer note */}
                <p className="text-[10px] text-slate-600 text-center leading-relaxed">
                  Based on a standard 52-week year · Results are estimates and for informational purposes only
                </p>
              </>
            ) : (
              <div className="flex items-center justify-center h-64 rounded-3xl bg-white/5 border border-white/10">
                <p className="text-slate-500 text-sm">Enter a salary to calculate</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
