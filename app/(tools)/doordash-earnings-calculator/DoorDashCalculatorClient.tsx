"use client";

/**
 * DoorDash Earnings Calculator – Client Component
 *
 * SEO-informed design decisions:
 *  • US selected by default (68 % of traffic is US; highest CPC for AdSense)
 *  • Data labels match the exact long-tail queries users search:
 *    "net hourly rate", "after gas and taxes", "IRS $0.725/mile", "15.3% SE tax"
 *  • Real Gridwise 2025/26 benchmarks embedded so Google sees E-E-A-T signals
 *  • aria-label / role / aria-live everywhere → accessibility = Core Web Vitals score
 *  • Animated counters trigger re-engagement → lowers bounce rate
 *  • Vehicle presets are unique interactive differentiator competitors lack
 *  • Mobile tab bar keeps LCP fast on phones (Google's #1 ranking signal in 2026)
 */

import {
  useState, useMemo, useEffect,
  useCallback, useRef,
} from "react";
import { useRouter } from "next/navigation";
import { calculateDoorDashEarnings, type DoorDashInputs } from "@/lib/earningUtils";
import {
  RotateCcw, Copy, AlertTriangle, Info,
  TrendingUp, Clock, DollarSign,
  Zap, CheckCircle, XCircle, ChevronDown, Car,
} from "lucide-react";
import {
  PieChart, Pie, Cell, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
type Region      = "US" | "IN" | "OTHER";
type VehicleKey  = "gas" | "hybrid" | "ev" | "moto";
type MobileTab   = "inputs" | "results";

interface VehicleCfg {
  key: VehicleKey; emoji: string; label: string;
  sub: string; cpm: number; save?: string;
  border: string; bg: string; text: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────────────────────────────────────
const VEHICLES: VehicleCfg[] = [
  { key:"gas",   emoji:"🚗", label:"Gas Car",   sub:"Sedan / SUV",   cpm:0.725,        border:"border-gray-300",   bg:"bg-gray-50",    text:"text-gray-700"    },
  { key:"hybrid",emoji:"🔋", label:"Hybrid",    sub:"Prius / Ioniq", cpm:0.52, save:"−28%", border:"border-emerald-400",bg:"bg-emerald-50", text:"text-emerald-700" },
  { key:"ev",    emoji:"⚡", label:"Full EV",   sub:"Tesla / Bolt",  cpm:0.38, save:"−48%", border:"border-blue-400",  bg:"bg-blue-50",    text:"text-blue-700"    },
  { key:"moto",  emoji:"🏍️", label:"Moto/Bike", sub:"Urban only",    cpm:0.29, save:"−60%", border:"border-violet-400",bg:"bg-violet-50",  text:"text-violet-700"  },
];

const REGIONS = [
  { value:"US",    flag:"🇺🇸", label:"United States" },
  { value:"IN",    flag:"🇮🇳", label:"India"         },
  { value:"OTHER", flag:"🌍",  label:"Other"         },
] as const;

// Real Gridwise 2025/26 benchmark – shown as social proof (E-E-A-T)
const BENCHMARKS = [
  { stat:"$11.26/hr", label:"Median gross (Gridwise 2025)", sub:"before expenses" },
  { stat:"$3.66",     label:"Median tip per delivery",      sub:"≈ 49 % of order pay" },
  { stat:"68 %",      label:"DoorDash US market share",     sub:"more orders than Uber Eats" },
  { stat:"$0.725",    label:"IRS mileage rate 2026",        sub:"per mile standard deduction" },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function fmtFull(n: number, currency: string, dec = 2): string {
  return new Intl.NumberFormat("en-US", {
    style:"currency", currency,
    minimumFractionDigits: dec, maximumFractionDigits: dec,
  }).format(Math.max(0, n));
}

function fmtShort(n: number, currency: string): string {
  const s = currency === "INR" ? "₹" : "$";
  const a = Math.abs(n);
  if (a >= 1_000_000) return s + (n / 1_000_000).toFixed(1) + "M";
  if (a >= 10_000)    return s + (n / 1_000).toFixed(1) + "K";
  return fmtFull(n, currency, 0);
}

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATED COUNTER HOOK
// ─────────────────────────────────────────────────────────────────────────────
function useCounter(target: number, ms = 520): number {
  const [val, setVal]   = useState(target);
  const raf  = useRef(0);
  const from = useRef(target);
  const t0   = useRef(0);

  useEffect(() => {
    from.current = val;
    t0.current   = performance.now();
    cancelAnimationFrame(raf.current);

    const tick = (now: number) => {
      const p = Math.min((now - t0.current) / ms, 1);
      const e = 1 - Math.pow(1 - p, 3);           // ease-out-cubic
      setVal(from.current + (target - from.current) * e);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return val;
}

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SLIDER
// ─────────────────────────────────────────────────────────────────────────────
interface SliderProps {
  label: string; hint?: string;
  value: number; min: number; max: number; step: number;
  onChange: (v: number) => void;
  display: string;
}
function Slider({ label, hint, value, min, max, step, onChange, display }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="group/sl">
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-semibold text-gray-700 select-none leading-none">
            {label}
          </span>
          <span className="text-[12px] font-black text-white bg-gray-900 px-2.5 py-1 rounded-lg tabular-nums leading-none">
            {display}
          </span>
        </div>
      )}

      {/* Track + thumb */}
      <div className="relative flex items-center h-7">
        {/* Filled track */}
        <div className="absolute inset-y-0 flex items-center w-full pointer-events-none">
          <div className="w-full h-[5px] bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${pct}%`,
                background: "linear-gradient(90deg,#2563eb,#7c3aed)",
                transition: "width 60ms linear",
              }}
            />
          </div>
        </div>

        {/* Invisible range */}
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="relative w-full h-7 opacity-0 cursor-pointer z-10"
          aria-label={label}
          aria-valuenow={value} aria-valuemin={min} aria-valuemax={max}
        />

        {/* Visible thumb */}
        <div
          className="absolute w-[18px] h-[18px] rounded-full bg-white border-2 border-blue-600
                     shadow-[0_2px_8px_rgba(37,99,235,0.35)] pointer-events-none
                     transition-transform duration-100 group-hover/sl:scale-110
                     group-active/sl:scale-95"
          style={{ left: `calc(${pct}% - 9px)` }}
        />
      </div>

      {hint && (
        <p className="text-[10px] text-gray-400 mt-1.5 font-medium">{hint}</p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG RING METER
// ─────────────────────────────────────────────────────────────────────────────
function Ring({ pct, color, size = 88, stroke = 8 }: {
  pct: number; color: string; size?: number; stroke?: number;
}) {
  const r    = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (Math.min(pct, 100) / 100) * circ;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
      className="-rotate-90" aria-hidden="true">
      <circle cx={size/2} cy={size/2} r={r} fill="none"
        stroke="#e2e8f0" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none"
        stroke={color} strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={`${dash} ${circ}`}
        style={{ transition: "stroke-dasharray .65s cubic-bezier(.4,0,.2,1)" }}
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PIE TOOLTIP
// ─────────────────────────────────────────────────────────────────────────────
function PieTip({ active, payload, currency }: {
  active?: boolean;
  payload?: Array<{ name: string; value: number }>;
  currency: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-100 shadow-xl rounded-xl px-3 py-2.5 text-[12px]">
      <p className="font-semibold text-gray-500">{payload[0].name}</p>
      <p className="font-black text-gray-900 mt-0.5">
        {fmtFull(payload[0].value, currency)}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROFITABILITY CONFIG
// ─────────────────────────────────────────────────────────────────────────────
type Tier = "elite"|"top"|"solid"|"fair"|"low";

const TIER: Record<Tier,{ label:string; color:string; ring:string; glow:string }> = {
  elite:{ label:"Elite Dasher 🏆",  color:"#7c3aed", ring:"ring-violet-300", glow:"shadow-violet-200/60" },
  top:  { label:"Top 20% Dasher ⭐", color:"#059669", ring:"ring-emerald-300", glow:"shadow-emerald-200/60" },
  solid:{ label:"Solid Earner",      color:"#2563eb", ring:"ring-blue-300",    glow:"shadow-blue-200/60"    },
  fair: { label:"Getting There",     color:"#d97706", ring:"ring-amber-300",   glow:"shadow-amber-200/60"   },
  low:  { label:"Below Average",     color:"#dc2626", ring:"ring-red-300",     glow:"shadow-red-200/60"     },
};

function getTier(netHr: number): Tier {
  if (netHr >= 20) return "elite";
  if (netHr >= 14) return "top";
  if (netHr >= 9)  return "solid";
  if (netHr >= 5)  return "fair";
  return "low";
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function DoorDashCalculatorClient() {
  const router = useRouter();

  // ── State — US default ─────────────────────────────────────────────────
  const [region,    setRegion]    = useState<Region>("US");
  const [vehicle,   setVehicle]   = useState<VehicleKey>("gas");
  const [oph,  setOph]   = useState(2.2);   // orders per hour
  const [epo,  setEpo]   = useState(11.0);  // earning per order
  const [hpd,  setHpd]   = useState(7);     // hours per day
  const [dpw,  setDpw]   = useState(5);     // days per week
  const [mpo,  setMpo]   = useState(3.5);   // miles per order
  const [cpm,  setCpm]   = useState(0.725); // cost per mile
  const [tax,  setTax]   = useState(22);    // tax rate %

  const [mounted,   setMounted]   = useState(false);
  const [toast,     setToast]     = useState("");
  const [mTab,      setMTab]      = useState<MobileTab>("inputs");
  const [taxOpen,   setTaxOpen]   = useState(false);
  const [mileOpen,  setMileOpen]  = useState(false);

  // ── URL bootstrap ──────────────────────────────────────────────────────
  useEffect(() => {
    const p   = new URLSearchParams(window.location.search);
    const num = (k: string) => { const v = Number(p.get(k)); return isNaN(v) ? null : v; };

    // Region — default to US unless URL explicitly overrides
    const r = p.get("region") as Region | null;
    if (r && (["US","IN","OTHER"] as Region[]).includes(r)) {
      setRegion(r);
      setTax(r === "US" ? 22 : r === "IN" ? 18 : 20);
      if (r !== "US") setCpm(0.55);
    }

    const _oph = num("oph"); if (_oph && _oph > 0)   setOph(_oph);
    const _epo = num("epo"); if (_epo && _epo > 0)   setEpo(_epo);
    const _hpd = num("hpd"); if (_hpd && _hpd > 0)   setHpd(_hpd);
    const _dpw = num("dpw"); if (_dpw && _dpw > 0)   setDpw(_dpw);
    const _mpo = num("mpo"); if (_mpo && _mpo > 0)   setMpo(_mpo);
    const _cpm = num("cpm"); if (_cpm && _cpm > 0)   setCpm(_cpm);
    const _tax = num("tr");  if (_tax !== null && _tax >= 0) setTax(_tax);

    setMounted(true);
  }, []);

  // ── URL sync ───────────────────────────────────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => {
      const p = new URLSearchParams();
      p.set("region", region);
      p.set("oph", oph.toFixed(1));
      p.set("epo", epo.toFixed(1));
      p.set("hpd", hpd.toString());
      p.set("dpw", dpw.toString());
      p.set("mpo", mpo.toFixed(1));
      p.set("cpm", cpm.toFixed(3));
      p.set("tr",  tax.toFixed(1));
      router.replace(`?${p.toString()}`, { scroll: false });
    }, 600);
    return () => clearTimeout(t);
  }, [region, oph, epo, hpd, dpw, mpo, cpm, tax, router]);

  const currency = region === "IN" ? "INR" : "USD";

  // ── Calculation ────────────────────────────────────────────────────────
  const inputs: DoorDashInputs = useMemo(() => ({
    ordersPerHour: oph, earningPerOrder: epo,
    hoursPerDay: hpd, daysPerWeek: dpw,
    milesPerOrder: mpo, costPerMile: cpm,
    taxRate: tax, currency, region,
    includeSelfEmploymentTax: region === "US",
    additionalWeeklyExpenses: 0,
  }), [oph, epo, hpd, dpw, mpo, cpm, tax, currency, region]);

  const res = useMemo(
    () => calculateDoorDashEarnings(inputs, { timestamp: new Date().toISOString() }),
    [inputs]
  );

  // ── Animated display values ────────────────────────────────────────────
  const dHr  = useCounter(res.net.hourly);
  const dWk  = useCounter(res.net.weekly);
  const dMo  = useCounter(res.net.monthly);
  const dYr  = useCounter(res.net.yearly);

  // ── Derived ────────────────────────────────────────────────────────────
  const tier   = getTier(res.net.hourly);
  const tm     = TIER[tier];
  const effPct = Math.min(
    Math.round((res.net.hourly / Math.max(res.gross.hourly, 0.01)) * 100), 100
  );
  const rpm         = mpo > 0 ? epo / mpo : 0;          // $/mile
  const orderGrade  = rpm >= 2.5 ? "great" : rpm >= 2.0 ? "ok" : "poor";
  const wkHours     = hpd * dpw;

  // ── Warnings ───────────────────────────────────────────────────────────
  const warnings = useMemo(() => {
    const list: { level:"err"|"warn"; msg: string }[] = [];
    if (oph > 6)          list.push({ level:"err",  msg:"6+ orders/hr is extremely rare. Platform data shows 2–4/hr as the peak ceiling." });
    if (oph > 4 && oph <=6) list.push({ level:"warn", msg:"Above the national median. Cross-check against your real Dasher app history." });
    if (hpd > 10)         list.push({ level:"warn", msg:"10+ hour shifts raise accident risk — IRS may also flag unusually high claimed hours." });
    if (res.net.hourly > 35) list.push({ level:"warn", msg:"Net $35+/hr is exceptional. Verify your average order value and mileage inputs." });
    res.validation.issues.forEach(i =>
      list.push({ level: i.severity === "error" ? "err" : "warn", msg: i.message })
    );
    return list;
  }, [oph, hpd, res]);

  // ── Handlers ───────────────────────────────────────────────────────────
  const applyVehicle = useCallback((v: VehicleCfg) => {
    setVehicle(v.key); setCpm(v.cpm);
  }, []);

  const changeRegion = useCallback((r: Region) => {
    setRegion(r);
    setTax(r === "US" ? 22 : r === "IN" ? 18 : 20);
    if (r === "US") setCpm(0.725);
    else if (r !== "IN") setCpm(0.55);
  }, []);

  const reset = useCallback(() => {
    setOph(2.2); setEpo(11); setHpd(7); setDpw(5);
    setMpo(3.5); setVehicle("gas");
    setCpm(region === "US" ? 0.725 : 0.55);
    setTax(region === "US" ? 22 : region === "IN" ? 18 : 20);
  }, [region]);

  const copyReport = useCallback(async () => {
    const lines = [
      "── DoorDash Earnings Report (freeuscalculator.in) ──",
      `Net/hr    : ${fmtFull(res.net.hourly, currency)}/hr  ← your real take-home`,
      `Net/week  : ${fmtFull(res.net.weekly, currency)}`,
      `Net/month : ${fmtFull(res.net.monthly, currency)}`,
      `Net/year  : ${fmtFull(res.net.yearly, currency)}`,
      "────────────────────────────────────────────────────",
      `Gross/yr     : ${fmtFull(res.gross.yearly, currency)}`,
      `Expenses/yr  : -${fmtFull(res.expenses.yearly, currency)}`,
      `Taxes/yr     : -${fmtFull(res.tax.yearly, currency)}`,
      `Orders/wk    : ${res.metrics.ordersPerWeek.toFixed(0)}`,
      `Miles/wk     : ${res.metrics.milesPerWeek.toFixed(0)}`,
      `$/mile       : ${rpm.toFixed(2)}`,
      `Region       : ${region} · ${currency}`,
    ].join("\n");
    await navigator.clipboard.writeText(lines);
    setToast("✅ Report copied!");
    setTimeout(() => setToast(""), 2500);
  }, [res, currency, region, rpm]);

  // Pie data
  const pieData = [
    { name:"Take-Home", value: Math.max(0, res.net.monthly),  fill:"#10b981" },
    { name:"Expenses",  value: res.expenses.monthly,          fill:"#f43f5e" },
    { name:"Taxes",     value: res.tax.monthly,               fill:"#f59e0b" },
  ];

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">

      {/* ═══════════════════════════════════════════════════════════════════
          STICKY HEADER
      ═══════════════════════════════════════════════════════════════════ */}
      <header
        className="sticky top-0 z-30 border-b border-gray-200/70"
        style={{ background:"rgba(255,255,255,0.96)", backdropFilter:"blur(14px)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-[54px] flex items-center justify-between gap-4">

          {/* Brand */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0"
              style={{ background:"linear-gradient(135deg,#1d4ed8,#6d28d9)" }}>
              <DollarSign size={15} className="text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <p className="text-[13px] font-black text-gray-900 tracking-tight">
                DoorDash Calculator
              </p>
              <p className="text-[10px] font-bold text-blue-600 mt-0.5">
                2026 · Net Pay After Gas &amp; Tax
              </p>
            </div>
          </div>

          {/* Region switcher */}
          <nav aria-label="Currency region" className="flex items-center gap-0.5 bg-gray-100 rounded-xl p-1">
            {REGIONS.map(r => (
              <button key={r.value}
                onClick={() => changeRegion(r.value as Region)}
                aria-pressed={region === r.value}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-bold
                            transition-all duration-200 ${
                  region === r.value
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <span>{r.flag}</span>
                <span className="hidden sm:inline">{r.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO RESULTS STRIP  (dark, cinematic)
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Your earnings summary"
        className="relative overflow-hidden"
        style={{ background:"linear-gradient(150deg,#060d1f 0%,#0c1e46 55%,#060d1f 100%)" }}
      >
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-40%] left-[20%] w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: tm.color }} />
          <div className="absolute bottom-[-30%] right-[10%] w-[300px] h-[300px] rounded-full blur-3xl opacity-15"
            style={{ background:"#2563eb" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-7 sm:py-9">

          {/* Tier badge row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                            ring-1 ${tm.ring} bg-white/10 backdrop-blur-sm`}>
              <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
                style={{ background: tm.color }} />
              <span className="text-[11px] font-black text-white tracking-wide">
                {tm.label}
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium">
              {(res.metadata.confidenceScore * 100).toFixed(0)}% model confidence ·{" "}
              {wkHours}h/week
            </span>
          </div>

          {/* Main 4-card grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">

            {/* NET HOURLY — hero card */}
            <div
              aria-label="Net hourly earnings"
              className={`col-span-2 sm:col-span-1 rounded-2xl p-5 ring-1 ${tm.ring}
                         shadow-xl ${tm.glow}`}
              style={{ background:"rgba(255,255,255,0.07)", backdropFilter:"blur(12px)" }}
            >
              <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500 mb-2">
                Net / Hour
              </p>
              <p className="text-[42px] sm:text-[36px] lg:text-[42px] font-black
                            tracking-tighter text-white leading-none tabular-nums">
                {fmtFull(dHr, currency)}
              </p>
              <div className="mt-3 flex items-center gap-1.5">
                <TrendingUp size={11} className="text-emerald-400 flex-shrink-0" />
                <span className="text-[10px] text-emerald-400 font-bold">
                  after gas, depreciation &amp; tax
                </span>
              </div>
            </div>

            {/* WEEKLY */}
            <div className="rounded-2xl p-4 ring-1 ring-white/10"
              style={{ background:"rgba(255,255,255,0.05)", backdropFilter:"blur(8px)" }}>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1.5">
                Weekly Net
              </p>
              <p className="text-[28px] font-black text-white tracking-tight
                            leading-none tabular-nums">
                {fmtShort(dWk, currency)}
              </p>
              <p className="text-[10px] text-slate-600 mt-1.5">{wkHours}h worked</p>
            </div>

            {/* MONTHLY */}
            <div className="rounded-2xl p-4 ring-1 ring-white/10"
              style={{ background:"rgba(255,255,255,0.05)", backdropFilter:"blur(8px)" }}>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1.5">
                Monthly Net
              </p>
              <p className="text-[28px] font-black text-white tracking-tight
                            leading-none tabular-nums">
                {fmtShort(dMo, currency)}
              </p>
              <p className="text-[10px] text-slate-600 mt-1.5">take-home</p>
            </div>

            {/* YEARLY */}
            <div className="rounded-2xl p-4 ring-1 ring-white/10"
              style={{ background:"rgba(255,255,255,0.05)", backdropFilter:"blur(8px)" }}>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1.5">
                Yearly Net
              </p>
              <p className="text-[28px] font-black text-white tracking-tight
                            leading-none tabular-nums text-emerald-400">
                {fmtShort(dYr, currency)}
              </p>
              <p className="text-[10px] text-emerald-600 mt-1.5 font-bold">annual profit</p>
            </div>
          </div>

          {/* Gross / Expenses / Tax row */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { label:"Gross/hr",    val:res.gross.hourly,    col:"text-blue-400"  },
              { label:"Expenses/hr", val:res.expenses.hourly, col:"text-rose-400"  },
              { label:"Tax/hr",      val:res.tax.hourly,      col:"text-amber-400" },
            ].map(item => (
              <div key={item.label}
                className="rounded-xl px-3 py-2 ring-1 ring-white/8
                           flex items-center justify-between gap-1"
                style={{ background:"rgba(255,255,255,0.04)" }}
              >
                <span className="text-[10px] text-slate-600 font-semibold leading-none">
                  {item.label}
                </span>
                <span className={`text-[11px] font-black ${item.col} tabular-nums leading-none`}>
                  {fmtFull(item.val, currency)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LIVE BENCHMARK STRIP  (SEO: real Gridwise data = E-E-A-T)
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center">
            {BENCHMARKS.map(b => (
              <div key={b.stat} className="py-1.5">
                <p className="text-[15px] sm:text-[18px] font-black text-blue-400 tabular-nums leading-none">
                  {b.stat}
                </p>
                <p className="text-[9px] font-bold text-gray-500 mt-0.5 uppercase tracking-wide leading-tight">
                  {b.label}
                </p>
                <p className="text-[9px] text-gray-600 mt-0.5 leading-none">{b.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[9px] text-gray-700 mt-1 font-medium">
            Source: Gridwise 115,771-driver dataset 2025 · IRS Rev. Proc. 2025-18
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE TAB BAR
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        className="sm:hidden sticky z-20 flex border-b border-gray-200 bg-white shadow-sm"
        style={{ top:"54px" }}
        role="tablist"
        aria-label="Calculator sections"
      >
        {(["inputs","results"] as MobileTab[]).map(t => (
          <button key={t} role="tab"
            aria-selected={mTab === t}
            onClick={() => setMTab(t)}
            className={`flex-1 py-3 text-[11px] font-black uppercase tracking-widest
                        transition-colors ${
              mTab === t
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-400 hover:text-gray-700"
            }`}
          >
            {t === "inputs" ? "⚙️  Adjust" : "📊  Results"}
          </button>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MAIN BODY
      ═══════════════════════════════════════════════════════════════════ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 items-start">

          {/* ──────────────────────────────────────────────────────────────
              LEFT — INPUTS
          ────────────────────────────────────────────────────────────── */}
          <div className={`space-y-4 ${mTab === "results" ? "hidden sm:block" : ""}`}>

            {/* ░░ VEHICLE SELECTOR ░░ */}
            <section aria-labelledby="veh-hd"
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 pt-5 pb-4">
                <h3 id="veh-hd"
                  className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400 mb-4">
                  🚘 Your Vehicle — sets cost per mile
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {VEHICLES.map(v => (
                    <button key={v.key}
                      onClick={() => applyVehicle(v)}
                      aria-pressed={vehicle === v.key}
                      className={`relative rounded-xl border-2 p-3.5 text-left
                                  transition-all duration-200 cursor-pointer focus:outline-none
                                  focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        vehicle === v.key
                          ? `${v.border} ${v.bg} shadow-sm scale-[1.02]`
                          : "border-gray-100 bg-gray-50/80 hover:border-gray-200 hover:scale-[1.01]"
                      }`}
                    >
                      <span className="text-[26px] leading-none block">{v.emoji}</span>
                      <span className={`text-[12px] font-black block mt-2 leading-none ${
                        vehicle === v.key ? v.text : "text-gray-900"
                      }`}>
                        {v.label}
                      </span>
                      <span className="text-[10px] text-gray-400 block mt-0.5 leading-none">
                        {v.sub}
                      </span>
                      <span className="text-[10px] font-black text-gray-500 block mt-1">
                        ${v.cpm}/mi
                      </span>
                      {v.save && (
                        <span className={`absolute top-2 right-2 text-[8px] font-black
                                         px-1.5 py-0.5 rounded-full ${v.bg} ${v.text}
                                         border ${v.border}`}>
                          {v.save}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* ░░ WORK METRICS ░░ */}
            <section aria-labelledby="wk-hd"
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-5">
              <h3 id="wk-hd"
                className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">
                ⏱ Work Metrics
              </h3>

              <Slider label="Orders per hour"
                value={oph} min={0.5} max={8} step={0.1}
                onChange={setOph}
                display={oph.toFixed(1)}
                hint="US median: 2.2/hr · Real peak ceiling: ~4/hr (Gridwise data)"
              />
              <Slider
                label={`Avg earning per order (${currency === "INR" ? "₹" : "$"})`}
                value={epo} min={3} max={30} step={0.5}
                onChange={setEpo}
                display={fmtFull(epo, currency, 2)}
                hint="Include base pay + tips · Median tip is $3.66 (Gridwise 2025)"
              />
              <Slider label="Hours per day"
                value={hpd} min={1} max={14} step={0.5}
                onChange={setHpd}
                display={`${hpd}h`}
              />
              <Slider label="Days per week"
                value={dpw} min={1} max={7} step={1}
                onChange={setDpw}
                display={`${dpw}d/wk`}
              />

              {/* Quick stat pills */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-50">
                {[
                  { label:"Orders/wk", val: res.metrics.ordersPerWeek.toFixed(0) },
                  { label:"Hours/wk",  val: wkHours + "h"                        },
                  { label:"Miles/wk",  val: res.metrics.milesPerWeek.toFixed(0)  },
                ].map(s => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-2.5 text-center">
                    <p className="text-[9px] uppercase tracking-widest text-gray-400 font-black">
                      {s.label}
                    </p>
                    <p className="text-[17px] font-black text-gray-900 mt-0.5 tabular-nums">
                      {s.val}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ░░ EXPENSES & TAX ░░ */}
            <section aria-labelledby="exp-hd"
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-5">
              <h3 id="exp-hd"
                className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">
                💸 Expenses &amp; Tax
              </h3>

              <Slider label="Miles per order"
                value={mpo} min={0.5} max={15} step={0.1}
                onChange={setMpo}
                display={`${mpo.toFixed(1)} mi`}
                hint="Total: drive to restaurant + delivery. US average ≈ 3.5 mi"
              />

              {/* Cost per mile */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] font-semibold text-gray-700 leading-none">
                    Cost per mile
                  </span>
                  <div className="flex items-center gap-2">
                    {region === "US" && (
                      <span className="text-[9px] bg-emerald-50 text-emerald-700 font-black
                                       px-2 py-0.5 rounded-full border border-emerald-200">
                        IRS 2026 = $0.725
                      </span>
                    )}
                    <button onClick={() => setMileOpen(s => !s)}
                      aria-label="IRS mileage rate explanation"
                      className="text-gray-300 hover:text-blue-500 transition-colors">
                      <Info size={13} />
                    </button>
                  </div>
                </div>

                {mileOpen && (
                  <div className="mb-3 bg-blue-50 border border-blue-100 rounded-xl p-3
                                  text-[11px] text-blue-800 leading-relaxed">
                    The 2026 IRS standard mileage rate is <strong>$0.725/mile</strong>.
                    It covers fuel, maintenance, insurance, and vehicle depreciation in one
                    number — no need to track each receipt separately. Most drivers save
                    more with this method than tracking actuals. On 15,000 annual miles
                    that's a <strong>$10,875 tax deduction</strong>.
                  </div>
                )}

                <Slider label=""
                  value={cpm} min={0.10} max={1.50} step={0.005}
                  onChange={setCpm}
                  display={`$${cpm.toFixed(3)}`}
                />
              </div>

              {/* Tax rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] font-semibold text-gray-700 leading-none">
                    Effective tax rate
                  </span>
                  <button onClick={() => setTaxOpen(s => !s)}
                    aria-label="Tax rate guidance"
                    className="text-gray-300 hover:text-blue-500 transition-colors">
                    <ChevronDown size={14}
                      className={`transition-transform duration-200 ${taxOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {taxOpen && (
                  <div className="mb-3 bg-amber-50 border border-amber-100 rounded-xl p-3
                                  text-[11px] text-amber-900 space-y-1.5 leading-relaxed">
                    <p><strong>🇺🇸 US Dashers:</strong> 15.3% self-employment tax (Social Security + Medicare)
                       + federal income bracket. Most Dashers pay 22–28% combined effective rate.</p>
                    <p><strong>🇮🇳 India:</strong> Income slab rate — 18–30% for most gig earners.</p>
                    <p className="font-bold text-amber-700">
                      2026 IRS quarterly deadlines: Apr 15 · Jun 16 · Sep 15 · Jan 15, 2027
                    </p>
                  </div>
                )}

                <Slider label=""
                  value={tax} min={0} max={50} step={0.5}
                  onChange={setTax}
                  display={`${tax.toFixed(1)}%`}
                />
              </div>

              {/* Quarterly reserve callout */}
              {region === "US" && (
                <div className="flex items-start gap-3 bg-amber-50 border border-amber-200
                                rounded-xl p-3.5">
                  <Clock size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[12px] font-black text-amber-900">
                      Quarterly tax reserve
                    </p>
                    <p className="text-[11px] text-amber-800 mt-0.5 leading-relaxed">
                      Transfer <strong>{fmtFull(res.tax.weekly, currency)}/week</strong> to
                      savings → pay <strong>{fmtFull(res.tax.yearly / 4, currency)}</strong> each
                      quarter to avoid IRS penalties.
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* ░░ ACTION BUTTONS ░░ */}
            <div className="flex gap-2.5">
              <button onClick={reset}
                aria-label="Reset all inputs to defaults"
                className="flex items-center justify-center gap-1.5 px-4 py-3
                           bg-white border border-gray-200 text-gray-600 rounded-xl
                           text-[12px] font-bold hover:bg-gray-50
                           transition-all active:scale-95 focus-visible:ring-2
                           focus-visible:ring-blue-500 focus:outline-none">
                <RotateCcw size={13} /> Reset
              </button>
              <button onClick={copyReport}
                aria-label="Copy earnings report to clipboard"
                className="flex-1 flex items-center justify-center gap-1.5 py-3
                           text-white rounded-xl text-[13px] font-black
                           transition-all active:scale-[0.97] shadow-md
                           focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none"
                style={{ background:"linear-gradient(135deg,#1d4ed8,#6d28d9)" }}>
                <Copy size={13} /> Copy Full Report
              </button>
            </div>
          </div>

          {/* ──────────────────────────────────────────────────────────────
              RIGHT — RESULTS
          ────────────────────────────────────────────────────────────── */}
          <div className={`space-y-4 ${mTab === "inputs" ? "hidden sm:block" : ""}`}>

            {/* ░░ WARNINGS ░░ */}
            {warnings.length > 0 && (
              <div className="space-y-2" role="alert" aria-live="polite">
                {warnings.map((w, i) => (
                  <div key={i}
                    className={`flex gap-2.5 items-start p-3.5 rounded-xl border
                                text-[12px] leading-relaxed ${
                      w.level === "err"
                        ? "bg-red-50 border-red-200 text-red-800"
                        : "bg-amber-50 border-amber-200 text-amber-800"
                    }`}>
                    <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
                    <p>{w.msg}</p>
                  </div>
                ))}
              </div>
            )}

            {/* ░░ ORDER QUALITY BADGE ░░ */}
            <div className={`rounded-2xl border p-4 flex items-center gap-3.5 ${
              orderGrade === "great" ? "bg-emerald-50 border-emerald-200" :
              orderGrade === "ok"    ? "bg-blue-50 border-blue-200"       :
                                      "bg-red-50 border-red-200"
            }`}>
              {orderGrade === "poor"
                ? <XCircle size={22} className="text-red-500 flex-shrink-0" />
                : <CheckCircle size={22} className={`flex-shrink-0 ${
                    orderGrade === "great" ? "text-emerald-500" : "text-blue-500"
                  }`} />
              }
              <div>
                <p className={`text-[12px] font-black ${
                  orderGrade === "great" ? "text-emerald-800" :
                  orderGrade === "ok"    ? "text-blue-800" : "text-red-800"
                }`}>
                  {orderGrade === "great"
                    ? "Excellent $/mile — cherry-picker strategy working"
                    : orderGrade === "ok"
                    ? "Acceptable — right at the profitable threshold"
                    : "Below $2/mile — top earners decline these orders"}
                </p>
                <p className="text-[10px] text-gray-500 mt-0.5">
                  {rpm.toFixed(2)}/mile · Expert target: $2.50+/mi for top earners
                </p>
              </div>
            </div>

            {/* ░░ EFFICIENCY RING ░░ */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5
                            flex items-center gap-5">
              <div className="relative flex-shrink-0">
                {mounted && <Ring pct={effPct} color={tm.color} size={90} stroke={9} />}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[17px] font-black text-gray-900">
                    {effPct}%
                  </span>
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">
                  Earnings Efficiency
                </p>
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  You keep <strong className="text-gray-900">{effPct}%</strong> of gross.
                  <br/>Top dashers achieve <strong>55–65%</strong>.
                </p>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: tm.color }} />
                  <span className="text-[11px] font-black" style={{ color: tm.color }}>
                    {tm.label}
                  </span>
                </div>
              </div>
            </div>

            {/* ░░ PIE CHART ░░ */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-1">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">
                  Monthly Breakdown
                </p>
                <span className="text-[10px] text-gray-400 font-semibold tabular-nums">
                  {fmtFull(res.gross.monthly, currency)} gross
                </span>
              </div>
              {mounted && (
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name"
                      innerRadius={52} outerRadius={75} paddingAngle={3}>
                      {pieData.map((e, i) => (
                        <Cell key={i} fill={e.fill} />
                      ))}
                    </Pie>
                    <Tooltip content={
                      <PieTip currency={currency} />
                    } />
                    <Legend iconType="circle" iconSize={8}
                      formatter={v => (
                        <span className="text-[11px] font-semibold text-gray-600">{v}</span>
                      )}
                    />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* ░░ BREAKDOWN TABLE ░░ */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              role="table" aria-label="Earnings breakdown by time period">

              {/* Column headers */}
              <div className="grid grid-cols-5 px-4 py-2.5 bg-gray-50 border-b border-gray-100"
                role="row">
                <span role="columnheader"
                  className="col-span-2 text-[9px] font-black uppercase tracking-wider text-gray-400">
                  Category
                </span>
                {["Hour","Week","Month","Year"].map(h => (
                  <span key={h} role="columnheader"
                    className="text-[9px] font-black uppercase tracking-wider text-gray-400 text-right">
                    {h}
                  </span>
                ))}
              </div>

              {/* Rows */}
              {[
                { label:"Gross Revenue", type:"pos",
                  hourly:res.gross.hourly,    weekly:res.gross.weekly,
                  monthly:res.gross.monthly,  yearly:res.gross.yearly },
                { label:"− Expenses",    type:"neg",
                  hourly:res.expenses.hourly, weekly:res.expenses.weekly,
                  monthly:res.expenses.monthly, yearly:res.expenses.yearly },
                { label:"− Taxes",       type:"neg",
                  hourly:res.tax.hourly,      weekly:res.tax.weekly,
                  monthly:res.tax.monthly,    yearly:res.tax.yearly },
                { label:"Net Take-Home", type:"hero",
                  hourly:res.net.hourly,      weekly:res.net.weekly,
                  monthly:res.net.monthly,    yearly:res.net.yearly },
              ].map((row, idx) => (
                <div key={row.label}
                  className={`grid grid-cols-5 px-4 py-3
                              border-b border-gray-50 last:border-0 ${
                    row.type === "hero" ? "bg-emerald-50" :
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                  }`}
                  role="row">
                  <span role="cell"
                    className={`col-span-2 text-[11px] ${
                      row.type === "hero" ? "font-black text-emerald-800" :
                      row.type === "neg"  ? "font-semibold text-gray-500" :
                                           "font-semibold text-gray-700"
                    }`}>
                    {row.label}
                  </span>
                  {[row.hourly, row.weekly, row.monthly, row.yearly].map((v, i) => (
                    <span key={i} role="cell"
                      className={`text-[11px] text-right tabular-nums ${
                        row.type === "hero" ? "font-black text-emerald-700" :
                        row.type === "neg"  ? "font-semibold text-rose-500" :
                                             "font-semibold text-gray-800"
                      }`}>
                      {fmtFull(v, currency, 0)}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            {/* ░░ EV NUDGE ░░ */}
            {vehicle === "gas" && (
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4
                              flex items-start gap-3">
                <Zap size={15} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-blue-800 leading-relaxed">
                  <strong>Hybrid saves $100+/month.</strong> Gas → hybrid cuts
                  per-mile cost from $0.725 to ~$0.52 — that's{" "}
                  <strong>$1,200–$1,500 more net income per year</strong>.
                  Try the vehicle selector.
                </p>
              </div>
            )}

            {/* ░░ ANNUAL HERO CARD ░░ */}
            <div className="relative overflow-hidden rounded-2xl p-6 text-white shadow-xl"
              style={{ background:"linear-gradient(150deg,#060d1f 0%,#0c1e46 60%,#060d1f 100%)" }}>

              {/* Glows */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-2xl opacity-30
                              pointer-events-none"
                style={{ background: tm.color }} />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-2xl opacity-20
                              pointer-events-none bg-emerald-500" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Car size={13} className="text-emerald-400" />
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">
                    Annual Net Profit · After All Deductions
                  </span>
                </div>

                <p className="text-[52px] sm:text-[58px] font-black tracking-tighter
                              text-emerald-400 leading-none tabular-nums">
                  {fmtShort(dYr, currency)}
                </p>
                <p className="text-[10px] text-slate-600 mt-2">
                  {dpw}d/wk · {hpd}h/day · {wkHours}h total/week
                </p>

                <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
                  {[
                    { icon:<TrendingUp size={12}/>, label:"Gross/yr",    val:fmtShort(res.gross.yearly, currency),    col:"#60a5fa" },
                    { icon:<Car size={12}/>,        label:"Expenses/yr", val:fmtShort(res.expenses.yearly, currency), col:"#fb7185" },
                    { icon:<DollarSign size={12}/>, label:"Taxes/yr",    val:fmtShort(res.tax.yearly, currency),      col:"#fbbf24" },
                  ].map(item => (
                    <div key={item.label}>
                      <div className="flex items-center justify-center gap-1 mb-1"
                        style={{ color: item.col }}>
                        {item.icon}
                        <span className="text-[8px] font-black uppercase tracking-wider">
                          {item.label}
                        </span>
                      </div>
                      <p className="font-black text-[15px] tabular-nums"
                        style={{ color: item.col }}>
                        {item.val}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ═══════════════════════════════════════════════════════════════════
          TOAST
      ═══════════════════════════════════════════════════════════════════ */}
      {toast && (
        <div
          role="status" aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50
                     bg-gray-950 text-white text-[12px] font-bold
                     px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5"
        >
          <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
          {toast}
        </div>
      )}
    </div>
  );
}