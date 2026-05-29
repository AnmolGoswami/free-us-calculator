"use client";

import { useState, useEffect } from "react";
import {
  Copy, Check, Zap, PiggyBank, Target,
  Calculator, TrendingUp, Clock, ChevronDown,
} from "lucide-react";
import { calculateSavingsGoal, formatCompact } from "@/lib/savingsCalculatorUtils";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmt(v: number) {
  return v.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function CopyBtn({ value }: { value: number }) {
  const [copied, setCopied] = useState(false);
  const handle = async () => {
    await navigator.clipboard.writeText(String(value));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handle}
      title="Copy"
      className="p-1 rounded-md hover:bg-white/20 transition-colors shrink-0"
    >
      {copied
        ? <Check size={12} className="text-emerald-300" />
        : <Copy size={12} className="text-white/40 hover:text-white/70" />}
    </button>
  );
}

// ─── Donut SVG (no Recharts — no layout shift on mobile) ─────────────────────
function DonutChart({
  initial, contributions, interest,
}: { initial: number; contributions: number; interest: number }) {
  const total = initial + contributions + interest;
  if (!total) return null;
  const r    = 46;
  const circ = 2 * Math.PI * r;
  const segs = [
    { val: initial,       color: "#22c55e" },
    { val: contributions, color: "#6366f1" },
    { val: interest,      color: "#f59e0b" },
  ];
  let off = 0;
  const arcs = segs.map((s) => {
    const pct  = s.val / total;
    const dash = pct * circ;
    const gap  = circ - dash;
    const rot  = off * 360 - 90;
    off += pct;
    return { ...s, dash, gap, rot };
  });
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24 shrink-0">
      {arcs.map((a, i) => (
        <circle
          key={i} cx="50" cy="50" r={r} fill="none"
          stroke={a.color} strokeWidth="10"
          strokeDasharray={`${a.dash} ${a.gap}`}
          style={{ transform: `rotate(${a.rot}deg)`, transformOrigin: "50px 50px" }}
        />
      ))}
      <circle cx="50" cy="50" r="33" fill="#0f172a" />
      <text x="50" y="46" textAnchor="middle" fill="#94a3b8"
        fontSize="7" fontWeight="700" fontFamily="sans-serif">TOTAL</text>
      <text x="50" y="58" textAnchor="middle" fill="#22c55e"
        fontSize="8" fontWeight="900" fontFamily="sans-serif">
        ${formatCompact(total)}
      </text>
    </svg>
  );
}

// ─── Number slider input ──────────────────────────────────────────────────────
function SliderInput({
  label, value, onChange, min, max, step, prefix = "$", sublabel,
}: {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step: number; prefix?: string; sublabel?: string;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
        <span className="text-sm font-black text-white">{prefix}{fmt(value)}</span>
      </div>
      {sublabel && <p className="text-[10px] text-slate-600 leading-snug">{sublabel}</p>}
      <input
        type="number"
        value={value || ""}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="w-full bg-slate-900 border border-white/10 focus:border-emerald-500
                   rounded-xl px-3 py-2.5 text-sm font-bold text-white
                   outline-none transition-all placeholder:text-slate-600"
        min={min} max={max} step={step}
      />
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-emerald-500 cursor-pointer h-1.5"
      />
      <div className="flex justify-between text-[9px] text-slate-600">
        <span>{prefix}{min >= 1000 ? formatCompact(min) : min}</span>
        <span>{prefix}{max >= 1000 ? formatCompact(max) : max}</span>
      </div>
    </div>
  );
}

// ─── Stat pill ────────────────────────────────────────────────────────────────
function Stat({
  label, value, sub, color = "white", copy,
}: { label: string; value: string; sub?: string; color?: string; copy?: number }) {
  const c: Record<string, string> = {
    green:  "bg-emerald-500/15 border-emerald-500/20 text-emerald-300",
    indigo: "bg-indigo-500/15  border-indigo-500/20  text-indigo-300",
    amber:  "bg-amber-500/15   border-amber-500/20   text-amber-300",
    white:  "bg-white/6        border-white/10       text-white",
  };
  return (
    <div className={`rounded-xl border p-3 ${c[color] ?? c.white}`}>
      <p className="text-[9px] font-bold uppercase tracking-widest opacity-60 mb-0.5">{label}</p>
      <div className="flex items-center gap-1">
        <p className="text-base font-black leading-tight break-all">{value}</p>
        {copy !== undefined && <CopyBtn value={copy} />}
      </div>
      {sub && <p className="text-[9px] opacity-50 mt-0.5 leading-snug">{sub}</p>}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function SavingsCalculatorClient() {
  const [goal,         setGoal]        = useState(50000);
  const [initial,      setInitial]     = useState(5000);
  const [monthly,      setMonthly]     = useState(500);
  const [rate,         setRate]        = useState(5);
  const [years,        setYears]       = useState(5);
  const [result,       setResult]      = useState<any>(null);
  const [tab,          setTab]         = useState<"summary" | "breakdown" | "milestones">("summary");
  const [showAdv,      setShowAdv]     = useState(false);

  useEffect(() => {
    if (goal >= 0) {
      setResult(calculateSavingsGoal(goal, initial, monthly, rate, years));
    }
  }, [goal, initial, monthly, rate, years]);

  const progressPct = result ? Math.min((result.finalAmount / goal) * 100, 100) : 0;
  const goalOk      = result?.goalAchieved;
  const alreadyDone = goalOk && result?.monthsToGoal === 0;

  // Milestone calculation (inline, no util dependency)
  const calcBalance = (y: number) => {
    const r = rate / 100 / 12;
    let bal = initial;
    for (let m = 0; m < y * 12; m++) bal = bal * (1 + r) + monthly;
    return bal;
  };

  return (
    <div className="bg-slate-950 text-white w-full">
      {/* ─── Two-column on lg, single column on mobile ─── */}
      <div className="flex flex-col lg:flex-row gap-0">

        {/* ══════════════════════════════════════════════
            INPUTS PANEL
        ══════════════════════════════════════════════ */}
        <div className="w-full lg:w-[48%] lg:border-r border-white/6 p-4 sm:p-6 space-y-5">

          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0">
              <PiggyBank size={17} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-black tracking-tight">Savings Goal Calculator</h2>
              <p className="text-[10px] text-slate-400">Compound Interest · 2026 Rates</p>
            </div>
          </div>

          {/* Goal presets */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Savings Goal
            </p>
            {/* Preset buttons — wrap on mobile */}
            <div className="flex flex-wrap gap-1.5">
              {[10000, 25000, 50000, 100000, 250000, 500000].map((v) => (
                <button
                  key={v} type="button" onClick={() => setGoal(v)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all border ${
                    goal === v
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "border-white/10 text-slate-400 hover:border-emerald-400 hover:text-white"
                  }`}
                >
                  ${formatCompact(v)}
                </button>
              ))}
            </div>
            <SliderInput
              label="" value={goal} onChange={setGoal}
              min={1000} max={1000000} step={1000}
            />
          </div>

          {/* Initial deposit */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <SliderInput
              label="Initial Deposit" value={initial} onChange={setInitial}
              min={0} max={100000} step={500}
              sublabel="Lump sum you're starting with today"
            />
          </div>

          {/* Monthly contribution */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <SliderInput
              label="Monthly Savings" value={monthly} onChange={setMonthly}
              min={0} max={10000} step={50}
              sublabel="Amount you'll add every month"
            />
          </div>

          {/* Rate + Years — stacked on mobile, side-by-side on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Rate */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Annual Rate (APY)
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[3, 5, 7, 10].map((r) => (
                  <button
                    key={r} type="button" onClick={() => setRate(r)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all ${
                      rate === r
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "border-white/10 text-slate-500 hover:border-emerald-400 hover:text-white"
                    }`}
                  >
                    {r}%
                  </button>
                ))}
              </div>
              <input
                type="number" value={rate || ""} min={0} max={30} step={0.1}
                onChange={(e) => setRate(Number(e.target.value) || 0)}
                className="w-full bg-slate-900 border border-white/10 focus:border-emerald-500
                           rounded-xl px-3 py-2 text-sm font-bold text-white outline-none"
              />
              <p className="text-[9px] text-slate-600">HYSA: 4–5% · S&P: 7–10%</p>
            </div>

            {/* Years */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Time Horizon
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[3, 5, 10, 20].map((y) => (
                  <button
                    key={y} type="button" onClick={() => setYears(y)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all ${
                      years === y
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "border-white/10 text-slate-500 hover:border-emerald-400 hover:text-white"
                    }`}
                  >
                    {y}yr
                  </button>
                ))}
              </div>
              <input
                type="number" value={years || ""} min={1} max={50} step={1}
                onChange={(e) => setYears(Number(e.target.value) || 0)}
                className="w-full bg-slate-900 border border-white/10 focus:border-emerald-500
                           rounded-xl px-3 py-2 text-sm font-bold text-white outline-none"
              />
              <p className="text-[9px] text-slate-600">1–50 years supported</p>
            </div>
          </div>

          {/* Rate context */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "HYSA 2026", r: 4.5 }, { label: "Bonds", r: 4 },
              { label: "S&P avg",   r: 8   }, { label: "Conservative", r: 3 },
            ].map(({ label, r }) => (
              <button
                key={label} type="button" onClick={() => setRate(r)}
                className="text-[9px] font-bold text-slate-500 hover:text-emerald-400
                           border border-white/8 hover:border-emerald-500/40
                           px-2.5 py-1 rounded-full transition-all"
              >
                {label} · {r}%
              </button>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            RESULTS PANEL
        ══════════════════════════════════════════════ */}
        <div className="w-full lg:w-[52%] p-4 sm:p-6 space-y-4 border-t lg:border-t-0 border-white/6">
          {result ? (
            <>
              {/* Status bar */}
              <div className={`rounded-xl px-4 py-2.5 text-[10px] font-black uppercase tracking-wider
                              flex items-center gap-2 ${
                alreadyDone ? "bg-blue-600/25 text-blue-300"
                : goalOk    ? "bg-emerald-600/20 text-emerald-300"
                :             "bg-amber-600/15 text-amber-300"
              }`}>
                <Target size={12} className="shrink-0" />
                {alreadyDone
                  ? "Goal already achieved!"
                  : goalOk
                  ? `Goal reached in ${result.monthsToGoal} months`
                  : "Increase savings or extend timeline to reach goal"}
              </div>

              {/* Main result */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: "linear-gradient(135deg,#052e16 0%,#0f172a 100%)" }}
              >
                <div className="p-4 sm:p-5">
                  {/* Value + donut — side by side, both shrink on mobile */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Total Balance in {years} Year{years !== 1 ? "s" : ""}
                      </p>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-2xl sm:text-3xl font-black text-emerald-400 leading-none tabular-nums">
                          ${formatCompact(result.finalAmount)}
                        </span>
                        <CopyBtn value={result.finalAmount} />
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">${fmt(result.finalAmount)} total</p>
                    </div>
                    <DonutChart
                      initial={initial}
                      contributions={result.totalContributions}
                      interest={result.totalInterestEarned}
                    />
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4 mb-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-slate-500">
                        Progress toward ${formatCompact(goal)}
                      </span>
                      <span className="text-[10px] font-black text-emerald-400">
                        {progressPct.toFixed(1)}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>

                  {/* Donut legend — 3 cols always */}
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {[
                      { label: "Initial",        val: initial,                  color: "text-emerald-400" },
                      { label: "Contributions",  val: result.totalContributions, color: "text-indigo-400" },
                      { label: "Interest",       val: result.totalInterestEarned,color: "text-amber-400" },
                    ].map(({ label, val, color }) => (
                      <div key={label} className="text-center">
                        <p className={`text-[9px] font-black uppercase tracking-wide ${color}`}>{label}</p>
                        <p className="text-xs font-black text-white">${formatCompact(val)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex border-t border-white/8">
                  {(["summary", "breakdown", "milestones"] as const).map((t) => (
                    <button
                      key={t} type="button" onClick={() => setTab(t)}
                      className={`flex-1 py-2 text-[9px] sm:text-[10px] font-black uppercase tracking-wider transition-all ${
                        tab === t ? "bg-emerald-600 text-white" : "text-slate-500 hover:text-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="p-4">
                  {tab === "summary" && (
                    <div className="grid grid-cols-2 gap-2">
                      <Stat
                        label="Interest Earned" color="green"
                        value={`$${formatCompact(result.totalInterestEarned)}`}
                        sub="Free compound growth"
                        copy={result.totalInterestEarned}
                      />
                      <Stat
                        label="Contributions" color="indigo"
                        value={`$${formatCompact(result.totalContributions)}`}
                        sub={`${years}yr × $${fmt(monthly)}/mo`}
                        copy={result.totalContributions}
                      />
                      <Stat
                        label="Monthly Needed" color="amber"
                        value={`$${formatCompact(result.monthlySavingsRequired)}`}
                        sub={`To hit $${formatCompact(goal)}`}
                      />
                      <Stat
                        label="You Invest" color="white"
                        value={`$${formatCompact(initial + result.totalContributions)}`}
                        sub="Principal total"
                      />
                    </div>
                  )}

                  {tab === "breakdown" && (
                    <div className="space-y-3">
                      {[
                        { label: "Initial Deposit",   val: initial,                   pct: (initial / result.finalAmount) * 100,                   cls: "bg-emerald-500" },
                        { label: "Contributions",     val: result.totalContributions,  pct: (result.totalContributions / result.finalAmount) * 100,  cls: "bg-indigo-500"  },
                        { label: "Compound Interest", val: result.totalInterestEarned, pct: (result.totalInterestEarned / result.finalAmount) * 100, cls: "bg-amber-500"   },
                      ].map(({ label, val, pct, cls }) => (
                        <div key={label}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] text-slate-400">{label}</span>
                            <span className="text-[10px] font-black text-white">
                              ${formatCompact(val)} ({pct.toFixed(1)}%)
                            </span>
                          </div>
                          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className={`h-full ${cls} rounded-full`} style={{ width: `${Math.min(pct, 100)}%` }} />
                          </div>
                        </div>
                      ))}
                      <div className="flex items-center justify-between border-t border-white/8 pt-3 mt-1">
                        <span className="text-[10px] font-black text-white">Total</span>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-black text-emerald-400">
                            ${formatCompact(result.finalAmount)}
                          </span>
                          <CopyBtn value={result.finalAmount} />
                        </div>
                      </div>
                    </div>
                  )}

                  {tab === "milestones" && (
                    <div className="space-y-2">
                      <p className="text-[9px] text-slate-500 mb-2">
                        ${fmt(monthly)}/mo · {rate}% APY · Goal: ${formatCompact(goal)}
                      </p>
                      {[1, 2, 3, 5, 10, 15, 20]
                        .filter((y) => y <= Math.max(years + 3, 10))
                        .map((y) => {
                          const bal = calcBalance(y);
                          const pct = Math.min((bal / goal) * 100, 100);
                          return (
                            <div key={y} className="flex items-center gap-2">
                              <span className="text-[10px] text-slate-500 w-8 text-right shrink-0">
                                {y}yr
                              </span>
                              <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${bal >= goal ? "bg-emerald-500" : "bg-indigo-500"}`}
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                              <span className={`text-[10px] font-black w-14 text-right shrink-0 tabular-nums ${bal >= goal ? "text-emerald-400" : "text-white"}`}>
                                ${formatCompact(bal)}
                              </span>
                            </div>
                          );
                        })}
                      <p className="text-[9px] text-slate-600 mt-2">
                        Green = goal reached
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom strip */}
                <div className="grid grid-cols-3 gap-px bg-white/5 border-t border-white/6">
                  {[
                    { label: "You Invest", val: initial + result.totalContributions, cls: "text-slate-300"   },
                    { label: "You Earn",   val: result.totalInterestEarned,           cls: "text-amber-400"  },
                    { label: "Total",      val: result.finalAmount,                   cls: "text-emerald-400"},
                  ].map(({ label, val, cls }) => (
                    <div key={label} className="bg-slate-900/50 px-2 py-3 text-center">
                      <p className="text-[8px] text-slate-500 font-bold uppercase">{label}</p>
                      <p className={`font-black text-xs sm:text-sm tabular-nums ${cls}`}>
                        ${formatCompact(val)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rule of 72 */}
              {rate > 0 && (
                <div className="bg-white/5 border border-white/8 rounded-xl px-4 py-3 flex items-start gap-2.5">
                  <Zap size={14} className="text-amber-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-black text-white leading-snug">
                      Rule of 72: your money doubles every{" "}
                      <span className="text-amber-400">{(72 / rate).toFixed(1)} years</span>{" "}
                      at {rate}% APY
                    </p>
                    <p className="text-[9px] text-slate-500 mt-0.5">72 ÷ rate = years to double</p>
                  </div>
                </div>
              )}

              <p className="text-[9px] text-slate-600 text-center leading-relaxed">
                Monthly compounding · Nominal returns · Estimation only · Not financial advice
              </p>
            </>
          ) : (
            <div className="flex items-center justify-center h-48 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-slate-500 text-sm">Enter values to calculate</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}