"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { calculateDoorDashEarnings } from "@/lib/earningUtils";
import { RotateCcw, Copy, AlertTriangle, TrendingUp, Wallet, Car, ReceiptText, ChevronRight } from "lucide-react";
import CalculationInputField from "@/components/ui/CalculationInputField";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DoorDashCalculatorClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [ordersPerHour, setOrdersPerHour] = useState<number>(() => Number(searchParams.get("oph")) || 2.5);
  const [earningPerOrder, setEarningPerOrder] = useState<number>(() => Number(searchParams.get("epo")) || 9);
  const [hoursPerDay, setHoursPerDay] = useState<number>(() => Number(searchParams.get("hpd")) || 6);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(() => Number(searchParams.get("dpw")) || 5);
  const [milesPerOrder, setMilesPerOrder] = useState<number>(() => Number(searchParams.get("mpo")) || 3);
  const [costPerMile, setCostPerMile] = useState<number>(() => Number(searchParams.get("cpm")) || 0.67);
  const [taxRate, setTaxRate] = useState<number>(() => Number(searchParams.get("tr")) || 15.3);

  const [toast, setToast] = useState("");
  const [showFullNumbers, setShowFullNumbers] = useState(false);

  const result = useMemo(() => 
    calculateDoorDashEarnings({
      ordersPerHour,
      earningPerOrder,
      hoursPerDay,
      daysPerWeek,
      milesPerOrder,
      costPerMile,
      taxRate,
    }),
    [ordersPerHour, earningPerOrder, hoursPerDay, daysPerWeek, milesPerOrder, costPerMile, taxRate]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      params.set("oph", ordersPerHour.toString());
      params.set("epo", earningPerOrder.toString());
      params.set("hpd", hoursPerDay.toString());
      params.set("dpw", daysPerWeek.toString());
      params.set("mpo", milesPerOrder.toString());
      params.set("cpm", costPerMile.toString());
      params.set("tr", taxRate.toString());
      router.replace(`?${params.toString()}`, { scroll: false });
    }, 500);
    return () => clearTimeout(timer);
  }, [ordersPerHour, earningPerOrder, hoursPerDay, daysPerWeek, milesPerOrder, costPerMile, taxRate, router]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const reset = () => {
    setOrdersPerHour(2.5);
    setEarningPerOrder(9);
    setHoursPerDay(6);
    setDaysPerWeek(5);
    setMilesPerOrder(3);
    setCostPerMile(0.67);
    setTaxRate(15.3);
  };

  const scenario = (type: "low" | "avg" | "high") => {
    if (type === "low") {
      setOrdersPerHour(1.8); setEarningPerOrder(7);
      setHoursPerDay(5); setDaysPerWeek(4);
    } else if (type === "avg") {
      setOrdersPerHour(2.5); setEarningPerOrder(9);
      setHoursPerDay(6); setDaysPerWeek(5);
    } else {
      setOrdersPerHour(3.8); setEarningPerOrder(11.5);
      setHoursPerDay(7); setDaysPerWeek(6);
    }
  };

  const handleNumber = (setter: any) => (val: string) => {
    const n = Number(val);
    setter(isNaN(n) ? 0 : n);
  };

  const format = (n: number) =>
    showFullNumbers
      ? `$${n.toLocaleString()}`
      : n > 1000
      ? `$${(n / 1000).toFixed(1)}K`
      : `$${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

  const chartData = [
    { name: "Take Home", value: result.net.monthly },
    { name: "Expenses", value: result.expenses.monthly },
    { name: "Taxes", value: result.tax.monthly },
  ];

  const COLORS = ["#10b981", "#ef4444", "#f59e0b"];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12 bg-slate-50 min-h-screen">
      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Inputs */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">Earnings Pro</h2>
            <p className="text-slate-500 font-medium">Calculate your real DoorDash take-home pay after expenses.</p>
          </div>

          {/* SCENARIOS TOGGLE */}
          <div className="bg-slate-200/50 p-1 rounded-xl flex gap-1">
            {["low", "avg", "high"].map((s) => (
              <button 
                key={s}
                onClick={() => scenario(s as any)} 
                className="flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all capitalize hover:bg-white active:scale-95 active:bg-white shadow-sm"
              >
                {s}
              </button>
            ))}
          </div>

          {/* INPUT GROUP */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-5">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Work Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CalculationInputField label="Orders/hr" value={ordersPerHour} onChange={handleNumber(setOrdersPerHour)} />
              <CalculationInputField label="Earning/order ($)" value={earningPerOrder} onChange={handleNumber(setEarningPerOrder)} />
              <CalculationInputField label="Hours/day" value={hoursPerDay} onChange={handleNumber(setHoursPerDay)} />
              <CalculationInputField label="Days/week" value={daysPerWeek} onChange={handleNumber(setDaysPerWeek)} />
            </div>
            
            <div className="pt-4 border-t border-slate-100">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Vehicle & Tax</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CalculationInputField label="Miles/order" value={milesPerOrder} onChange={handleNumber(setMilesPerOrder)} />
                <CalculationInputField label="Cost/mile ($)" value={costPerMile} onChange={handleNumber(setCostPerMile)} />
                <CalculationInputField label="Tax (%)" value={taxRate} onChange={handleNumber(setTaxRate)} />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button onClick={reset} className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-all flex-1">
              <RotateCcw size={18}/> Reset
            </button>
            <button onClick={() => {navigator.clipboard.writeText(window.location.href); showToast("Link copied!");}} className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg flex-[2]">
              <Copy size={18}/> Share Results
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Results */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* PRIMARY HERO CARD */}
          <div className="bg-gradient-to-br from-red-500 via-orange-500 to-amber-500 text-white p-10 rounded-[2.5rem] shadow-xl shadow-orange-200 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-orange-100 font-semibold mb-1 uppercase tracking-wider text-xs">Estimated Net Hourly</p>
                  <h1 className="text-6xl font-black mb-4">${result.net.hourly.toFixed(2)}<span className="text-2xl opacity-80">/hr</span></h1>
                </div>
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                   <TrendingUp size={32} />
                </div>
              </div>
              
              <div className="flex gap-6 mt-6 pt-6 border-t border-white/20">
                <div>
                  <p className="text-orange-100 text-xs font-bold uppercase">Gross</p>
                  <p className="text-xl font-bold">${result.gross.hourly.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-orange-100 text-xs font-bold uppercase">Expenses</p>
                  <p className="text-xl font-bold">-${result.expenses.hourly.toFixed(2)}</p>
                </div>
              </div>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* QUICK STATS */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl"><Wallet /></div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-tight">Weekly Net</p>
                  <h2 className="text-2xl font-bold text-slate-800">{format(result.net.weekly)}</h2>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><ReceiptText /></div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-tight">Monthly Net</p>
                  <h2 className="text-2xl font-bold text-slate-800">{format(result.net.monthly)}</h2>
                </div>
              </div>
            </div>

            {/* CHART */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800">Allocation</h3>
                <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-full uppercase font-bold">Monthly</span>
              </div>
              <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                  <Pie data={chartData} dataKey="value" innerRadius={45} outerRadius={60} paddingAngle={8}>
                    {chartData.map((_, i) => <Cell key={i} fill={COLORS[i]} strokeWidth={0} />)}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-2">
                 {chartData.map((item, i) => (
                   <div key={i} className="flex items-center gap-1.5">
                     <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[i]}} />
                     <span className="text-[10px] font-bold text-slate-500 uppercase">{item.name}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          {/* DETAILED LIST */}
          <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-lg">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              Detailed Breakdown <ChevronRight size={20} className="text-slate-500" />
            </h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
              <div className="space-y-1">
                <p className="text-slate-400 text-xs font-bold uppercase">Volume</p>
                <p className="font-semibold">{result.ordersPerWeek} orders/week</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400 text-xs font-bold uppercase">Distance</p>
                <p className="font-semibold">{result.milesPerWeek} miles/week</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400 text-xs font-bold uppercase">Gross Monthly</p>
                <p className="font-semibold text-emerald-400">${result.gross.monthly.toLocaleString()}</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400 text-xs font-bold uppercase">Expenses/Tax</p>
                <p className="font-semibold text-red-400">-${(result.expenses.monthly + result.tax.monthly).toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* WARNINGS */}
          {result.metadata.warnings.length > 0 && (
            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 text-amber-800 text-sm flex items-start gap-3">
              <AlertTriangle className="mt-0.5 shrink-0" size={18}/> 
              <p className="font-medium">{result.metadata.warnings.join(", ")}</p>
            </div>
          )}
        </div>
      </div>

      {/* TOAST */}
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl animate-bounce font-bold text-sm">
          {toast}
        </div>
      )}
    </div>
  );
}