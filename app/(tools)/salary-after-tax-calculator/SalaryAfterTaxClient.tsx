"use client";

import React, { useState, useEffect, useCallback } from "react";
import InputField from "@/components/ui/InputField";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import {
  calculateSalaryAfterTax,
  type FilingStatus,
  type StateCode,
} from "@/lib/salaryTaxUtils";
import { ALL_US_STATES } from "@/constants/taxBrackets";
import {
  Copy, Check, TrendingUp, DollarSign, Percent,
  Calendar, ChevronDown, Info, Wallet, PiggyBank,
  BarChart3, ArrowUpRight, ArrowDownRight,
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
  netPct, fedPct, statePct, ficaPct,
}: {
  netPct: number; fedPct: number; statePct: number; ficaPct: number;
}) {
  const r = 52;
  const circ = 2 * Math.PI * r;

  const segments = [
    { pct: netPct,   color: "#22c55e" },
    { pct: fedPct,   color: "#f43f5e" },
    { pct: statePct, color: "#f97316" },
    { pct: ficaPct,  color: "#a855f7" },
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
      <circle cx="60" cy="60" r="40" fill="#0f172a" />
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
      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
        {label}
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border text-center ${
              value === o.value
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                : "bg-white text-slate-500 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
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

// ─── Main component ───────────────────────────────────────────────────────────
export default function SalaryAfterTaxClient() {
  const [salary,           setSalary]           = useState<number>(85000);
  const [filingStatus,     setFilingStatus]      = useState<FilingStatus>("single");
  const [stateCode,        setStateCode]         = useState<StateCode>("TX");
  const [preTaxDeductions, setPreTaxDeductions]  = useState<number>(0);
  const [taxCredits,       setTaxCredits]        = useState<number>(0);
  const [result,           setResult]            = useState<any>(null);
  const [showAdvanced,     setShowAdvanced]      = useState(false);
  const [activeTab,        setActiveTab]         = useState<"annual" | "monthly" | "biweekly">("annual");

  useEffect(() => {
    if (salary > 0) {
      setResult(
        calculateSalaryAfterTax(salary, filingStatus, stateCode, preTaxDeductions, taxCredits)
      );
    }
  }, [salary, filingStatus, stateCode, preTaxDeductions, taxCredits]);

  const selectedState = ALL_US_STATES.find((s) => s.code === stateCode);

  // Multipliers for tabs
  const multiplier = activeTab === "annual" ? 1 : activeTab === "monthly" ? 1 / 12 : 1 / 26;
  const period     = activeTab === "annual" ? "/yr" : activeTab === "monthly" ? "/mo" : "/bi-wk";

  const netPct   = result ? parseFloat(pct(result.net.yearly, salary))      : 0;
  const fedPct   = result ? parseFloat(pct(result.tax.federal, salary))     : 0;
  const statePct = result ? parseFloat(pct(result.tax.state, salary))       : 0;
  const ficaPct  = result ? parseFloat(pct(result.tax.fica, salary))        : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* ════════════════════════════════════════════════════════════
              LEFT — INPUTS
          ════════════════════════════════════════════════════════════ */}
          <div className="space-y-5">

            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                <Wallet size={18} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg font-black tracking-tight">
                  Salary After Tax Calculator
                </h2>
                <p className="text-xs text-slate-400">2026 IRS Rates · All 50 States</p>
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
                    onClick={() => setSalary(v)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all border ${
                      salary === v
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
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">$</span>
                <input
                  type="number"
                  value={salary || ""}
                  onChange={(e) => setSalary(Number(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-white/10 focus:border-indigo-500
                             rounded-xl pl-8 pr-4 py-3.5 text-xl font-black text-white
                             outline-none transition-all placeholder:text-slate-600"
                  placeholder="Enter salary"
                  min={0}
                />
              </div>

              {/* Slider */}
              <input
                type="range"
                min={10000}
                max={500000}
                step={5000}
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full mt-3 accent-indigo-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-600 mt-1">
                <span>$10K</span>
                <span>$500K</span>
              </div>
            </div>

            {/* Filing status — pills */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
              <PillSelect
                label="Filing Status"
                value={filingStatus}
                onChange={setFilingStatus}
                options={[
                  { value: "single",          label: "Single",             short: "Single"   },
                  { value: "marriedJoint",     label: "Married Jointly",    short: "MFJ"      },
                  { value: "headOfHousehold",  label: "Head of Household",  short: "HOH"      },
                  { value: "marriedSeparate",  label: "Married Separately", short: "MFS"      },
                ]}
              />
            </div>

            {/* State */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                State
              </label>
              <div className="relative">
                <select
                  value={stateCode}
                  onChange={(e) => setStateCode(e.target.value as StateCode)}
                  className="w-full appearance-none bg-slate-900 border border-white/10
                             focus:border-indigo-500 rounded-xl px-4 py-3 pr-10 text-sm
                             font-semibold text-white outline-none transition-all cursor-pointer"
                >
                  {ALL_US_STATES.map((s) => (
                    <option key={s.code} value={s.code}>
                      {s.name} ({s.code})
                    </option>
                  ))}
                </select>
                <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
              </div>

              {selectedState?.hasLocalTax && (
                <div className="mt-2 flex items-center gap-2 text-amber-400 bg-amber-500/10
                                border border-amber-500/20 rounded-xl px-3 py-2">
                  <Info size={13} className="shrink-0" />
                  <span className="text-xs font-medium">Local taxes may apply in this state</span>
                </div>
              )}
            </div>

            {/* Advanced toggle */}
            <button
              type="button"
              onClick={() => setShowAdvanced((v) => !v)}
              className="flex items-center gap-2 text-xs font-bold text-indigo-400
                         hover:text-indigo-300 transition-colors w-full"
            >
              <div className={`w-8 h-4 rounded-full transition-colors ${showAdvanced ? "bg-indigo-600" : "bg-slate-700"} relative`}>
                <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${showAdvanced ? "translate-x-4" : "translate-x-0.5"}`} />
              </div>
              Advanced Options (Deductions & Credits)
            </button>

            {showAdvanced && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Pre-Tax Deductions
                  </label>
                  <p className="text-[10px] text-slate-500 mb-2">401(k), HSA, health insurance premiums</p>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                    <input
                      type="number"
                      value={preTaxDeductions || ""}
                      onChange={(e) => setPreTaxDeductions(Number(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-white/10 focus:border-indigo-500
                                 rounded-xl pl-8 pr-4 py-3 text-sm font-semibold text-white
                                 outline-none transition-all"
                      placeholder="0"
                      min={0}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Tax Credits
                  </label>
                  <p className="text-[10px] text-slate-500 mb-2">Child tax credit, education credit, etc.</p>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                    <input
                      type="number"
                      value={taxCredits || ""}
                      onChange={(e) => setTaxCredits(Number(e.target.value) || 0)}
                      className="w-full bg-slate-900 border border-white/10 focus:border-indigo-500
                                 rounded-xl pl-8 pr-4 py-3 text-sm font-semibold text-white
                                 outline-none transition-all"
                      placeholder="0"
                      min={0}
                    />
                  </div>
                </div>

                {(preTaxDeductions > 0) && result && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3">
                    <p className="text-xs font-bold text-emerald-300">
                      💡 Pre-tax deductions save you{" "}
                      <span className="text-emerald-200">
                        ~${fmt(preTaxDeductions * (parseFloat(result.effectiveRate) / 100))}
                      </span>{" "}
                      in taxes this year
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ════════════════════════════════════════════════════════════
              RIGHT — RESULTS
          ════════════════════════════════════════════════════════════ */}
          <div className="space-y-4">
            {result ? (
              <>
                {/* HERO RESULT CARD */}
                <div className="rounded-3xl overflow-hidden"
                  style={{ background: "linear-gradient(135deg,#1e3a5f 0%,#0f1a2e 100%)" }}>

                  {/* Top — net pay */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                          Take-Home Pay (Net)
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-3xl sm:text-4xl font-black text-emerald-400 tabular-nums leading-none">
                            ${fmtCompact(result.net.yearly)}
                          </span>
                          <CopyBtn value={result.net.yearly} />
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          ${fmt(result.net.yearly)} per year
                        </p>
                      </div>

                      {/* Donut */}
                      <div className="flex-shrink-0">
                        <DonutRing
                          netPct={netPct}
                          fedPct={fedPct}
                          statePct={statePct}
                          ficaPct={ficaPct}
                        />
                      </div>
                    </div>

                    {/* Donut legend */}
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {[
                        { label: "Take-Home", pct: netPct,   color: "bg-emerald-500" },
                        { label: "Federal",   pct: fedPct,   color: "bg-rose-500"    },
                        { label: "State",     pct: statePct, color: "bg-orange-500"  },
                        { label: "FICA",      pct: ficaPct,  color: "bg-purple-500"  },
                      ].map(({ label, pct: p, color }) => (
                        <div key={label} className="flex items-center gap-2 text-xs">
                          <span className={`w-2.5 h-2.5 rounded-full ${color} shrink-0`} />
                          <span className="text-slate-400">{label}</span>
                          <span className="font-bold text-white ml-auto">{p.toFixed(1)}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Period tabs */}
                  <div className="flex border-t border-white/8">
                    {(["annual", "monthly", "biweekly"] as const).map((tab) => (
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
                      { label: "Gross",  val: salary * multiplier,              color: "text-slate-300" },
                      { label: "Taxes",  val: result.tax.total * multiplier,    color: "text-rose-400"  },
                      { label: "Net",    val: result.net.yearly * multiplier,   color: "text-emerald-400" },
                    ].map(({ label, val, color }) => (
                      <div key={label} className="bg-slate-900/50 px-3 py-3 text-center">
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">{label}</p>
                        <p className={`font-black text-sm sm:text-base tabular-nums ${color}`}>
                          ${fmtCompact(val)}
                        </p>
                        <p className="text-[9px] text-slate-600">{period}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4-stat grid */}
                <div className="grid grid-cols-2 gap-3">
                  <StatCard
                    label="Federal Tax"
                    value={`$${fmtCompact(result.tax.federal)}`}
                    sub={`${pct(result.tax.federal, salary)}% of gross`}
                    color="red"
                    copyVal={result.tax.federal}
                  />
                  <StatCard
                    label="State Tax"
                    value={`$${fmtCompact(result.tax.state)}`}
                    sub={`${selectedState?.name ?? stateCode}`}
                    color="orange"
                    copyVal={result.tax.state}
                  />
                  <StatCard
                    label="FICA (SS + Medicare)"
                    value={`$${fmtCompact(result.tax.fica)}`}
                    sub="7.65% total"
                    color="purple"
                    copyVal={result.tax.fica}
                  />
                  <StatCard
                    label="Effective Tax Rate"
                    value={`${result.effectiveRate}%`}
                    sub="of total income"
                    color="blue"
                  />
                </div>

                {/* Taxable income strip */}
                <div className="bg-white/5 border border-white/8 rounded-2xl px-5 py-4
                                flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">
                      Taxable Income
                    </p>
                    <p className="font-black text-lg text-white">${fmt(result.taxableIncome)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">
                      Total Tax
                    </p>
                    <p className="font-black text-lg text-rose-400">${fmt(result.tax.total)}</p>
                  </div>
                  {/* Visual bar */}
                  <div className="flex-1 hidden sm:block">
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-rose-500 to-orange-500"
                        style={{ width: `${Math.min(parseFloat(result.effectiveRate), 50) * 2}%` }}
                      />
                    </div>
                    <p className="text-[9px] text-slate-600 text-center mt-1">Effective rate</p>
                  </div>
                </div>

                {/* Monthly breakdown */}
                <div className="bg-white/5 border border-white/8 rounded-2xl p-4 sm:p-5">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                    Monthly Breakdown
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "Federal Tax",  val: result.monthlyBreakdown.federal, color: "bg-rose-500",    pct_: pct(result.tax.federal, salary)    },
                      { label: "State Tax",    val: result.monthlyBreakdown.state,   color: "bg-orange-500",  pct_: pct(result.tax.state, salary)      },
                      { label: "FICA",         val: result.monthlyBreakdown.fica,    color: "bg-purple-500",  pct_: pct(result.tax.fica, salary)       },
                      { label: "Net Pay",      val: result.monthlyBreakdown.net,     color: "bg-emerald-500", pct_: pct(result.net.yearly, salary)     },
                    ].map(({ label, val, color, pct_ }) => (
                      <div key={label}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-slate-400 font-medium">{label}</span>
                          <span className="text-xs font-black text-white">${fmt(val)}/mo</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${color}`}
                            style={{ width: `${Math.min(parseFloat(pct_), 100)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Estimated state tax warning */}
                {result.estimatedStateTax && (
                  <div className="flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/20
                                  rounded-xl px-4 py-3 text-xs text-amber-300 font-medium">
                    <Info size={14} className="shrink-0" />
                    State tax is estimated — actual withholding may vary based on local rules.
                  </div>
                )}

                {/* Footer note */}
                <p className="text-[10px] text-slate-600 text-center leading-relaxed">
                  Includes federal + FICA · Standard deduction applied · 2026 IRS rates · Estimation only
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