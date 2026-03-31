"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import InputField from "@/components/ui/InputField";
import { calculateDoorDashEarnings } from "@/lib/earningUtils";
import { Info, RotateCcw, Copy } from "lucide-react";

export default function DoorDashCalculatorClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [ordersPerHour, setOrdersPerHour] = useState(() => Number(searchParams.get("oph")) || 2.5);
  const [earningPerOrder, setEarningPerOrder] = useState(() => Number(searchParams.get("epo")) || 9);
  const [hoursPerDay, setHoursPerDay] = useState(() => Number(searchParams.get("hpd")) || 6);
  const [daysPerWeek, setDaysPerWeek] = useState(() => Number(searchParams.get("dpw")) || 5);
  const [milesPerOrder, setMilesPerOrder] = useState(() => Number(searchParams.get("mpo")) || 3);
  const [costPerMile, setCostPerMile] = useState(() => Number(searchParams.get("cpm")) || 0.67);
  const [taxRate, setTaxRate] = useState(() => Number(searchParams.get("tr")) || 15.3);

  const [toast, setToast] = useState("");

  const result = useMemo(() => 
    calculateDoorDashEarnings({ ordersPerHour, earningPerOrder, hoursPerDay, daysPerWeek, milesPerOrder, costPerMile, taxRate }),
    [ordersPerHour, earningPerOrder, hoursPerDay, daysPerWeek, milesPerOrder, costPerMile, taxRate]
  );

  // Update URL
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      params.set("oph", ordersPerHour.toFixed(1));
      params.set("epo", earningPerOrder.toFixed(1));
      params.set("hpd", hoursPerDay.toFixed(1));
      params.set("dpw", daysPerWeek.toFixed(1));
      params.set("mpo", milesPerOrder.toFixed(1));
      params.set("cpm", costPerMile.toFixed(2));
      params.set("tr", taxRate.toFixed(1));
      router.replace(`?${params.toString()}`, { scroll: false });
    }, 700);
    return () => clearTimeout(timer);
  }, [ordersPerHour, earningPerOrder, hoursPerDay, daysPerWeek, milesPerOrder, costPerMile, taxRate, router]);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };

  const copyShareableLink = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast("✅ Link copied! You can now share this estimate.");
  };

  const resetToDefault = () => {
    setOrdersPerHour(2.5); setEarningPerOrder(9); setHoursPerDay(6);
    setDaysPerWeek(5); setMilesPerOrder(3); setCostPerMile(0.67); setTaxRate(15.3);
    showToast("Reset to default values");
  };

  const loadScenario = (type: "low" | "average" | "high") => {
    if (type === "low") {
      setOrdersPerHour(1.8); setEarningPerOrder(7); setHoursPerDay(5); setDaysPerWeek(4);
    } else if (type === "average") {
      setOrdersPerHour(2.5); setEarningPerOrder(9); setHoursPerDay(6); setDaysPerWeek(5);
    } else {
      setOrdersPerHour(3.8); setEarningPerOrder(11.5); setHoursPerDay(7); setDaysPerWeek(6);
    }
    showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} scenario loaded`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

        {/* ==================== INPUTS ==================== */}
        <div className="space-y-8 md:space-y-10">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Your Delivery Stats</h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Results update live as you adjust</p>
          </div>

          {/* Quick Scenarios */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <button onClick={() => loadScenario("low")} className="px-5 py-2.5 text-sm border rounded-full hover:bg-gray-50 active:bg-gray-100 transition">Low Earnings</button>
            <button onClick={() => loadScenario("average")} className="px-5 py-2.5 text-sm border border-blue-200 text-blue-700 rounded-full hover:bg-blue-50 active:bg-blue-100 transition">Average Driver</button>
            <button onClick={() => loadScenario("high")} className="px-5 py-2.5 text-sm border rounded-full hover:bg-gray-50 active:bg-gray-100 transition">High Earnings</button>
          </div>

          {/* Delivery Performance Card */}
          <div className="bg-pink-50 border border-pink-100 rounded-3xl p-6 md:p-8">
            <h3 className="font-semibold text-pink-700 mb-6 text-lg">Delivery Performance</h3>
            <div className="space-y-6">
              <InputField label="Orders per Hour" value={ordersPerHour} onChange={setOrdersPerHour} min={0.5} max={10} step={0.1} tooltip="Realistic range: 1.5 – 4.5 orders/hour" />
              <InputField label="Hours per Day" value={hoursPerDay} onChange={setHoursPerDay} min={1} max={16} step={0.5} tooltip="Typical shift length" />
              <InputField label="Days per Week" value={daysPerWeek} onChange={setDaysPerWeek} min={1} max={7} step={1} tooltip="How many days you dash" />
              <InputField label="Miles per Order" value={milesPerOrder} onChange={setMilesPerOrder} min={0.5} max={20} step={0.1} tooltip="Pickup + delivery distance" />
            </div>
          </div>

          {/* Costs & Tax Card */}
          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 md:p-8">
            <h3 className="font-semibold text-blue-700 mb-6 text-lg">Vehicle Costs & Tax</h3>
            <div className="space-y-6">
              <InputField label="Cost per Mile ($)" value={costPerMile} onChange={setCostPerMile} min={0.1} max={2} step={0.01} tooltip="Gas + maintenance (IRS 2026 ≈ $0.67)" />
              <InputField label="Self-Employment Tax Rate (%)" value={taxRate} onChange={setTaxRate} min={0} max={40} step={0.1} tooltip="Standard rate is 15.3%" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={resetToDefault}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 border rounded-2xl hover:bg-gray-50 transition text-sm font-medium"
            >
              <RotateCcw className="w-4 h-4" /> Reset to Default
            </button>
            <button
              onClick={copyShareableLink}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition text-sm font-medium"
            >
              <Copy className="w-4 h-4" /> Copy & Share This Estimate
            </button>
          </div>
        </div>

        {/* ==================== RESULTS ==================== */}
        <div className="space-y-8">
          {/* Net Hourly Rate - Big Card */}
          <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-3xl p-8 md:p-10 shadow-2xl">
            <p className="uppercase text-xs md:text-sm tracking-widest opacity-90">YOUR NET HOURLY RATE</p>
            <p className="text-5xl md:text-7xl font-bold mt-4 leading-none">
              ${result.net.hourly.toFixed(2)}<span className="text-2xl md:text-3xl font-medium">/hr</span>
            </p>
            <p className="mt-4 text-orange-100 text-sm md:text-base">
              Gross: ${result.gross.hourly.toFixed(2)}/hr (before expenses & tax)
            </p>
            <p className="text-xs md:text-sm mt-5 opacity-80">
              {ordersPerHour.toFixed(1)} orders/hr × ${earningPerOrder} × {hoursPerDay} hrs/day
            </p>
          </div>

          {/* Weekly & Monthly Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
              <p className="text-xs md:text-sm text-gray-500">WEEKLY TAKE-HOME</p>
              <p className="text-4xl md:text-5xl font-bold text-green-600 mt-3">${result.net.weekly.toFixed(0)}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
              <p className="text-xs md:text-sm text-gray-500">MONTHLY TAKE-HOME</p>
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mt-3">${result.net.monthly.toFixed(0)}</p>
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
            <h3 className="font-semibold mb-6 text-lg">Detailed Breakdown</h3>
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex justify-between"><span>Gross Monthly</span><span>${result.gross.monthly.toFixed(0)}</span></div>
              <div className="flex justify-between"><span>Vehicle Expenses</span><span className="text-red-600">-${result.expenses.monthly.toFixed(0)}</span></div>
              <div className="flex justify-between"><span>Self-Employment Tax ({taxRate}%)</span><span className="text-red-600">-${result.tax.monthly.toFixed(0)}</span></div>
              <hr />
              <div className="flex justify-between text-base md:text-lg font-semibold"><span>Net Monthly Take-Home</span><span className="text-green-600">${result.net.monthly.toFixed(0)}</span></div>
            </div>
          </div>

          {/* How it's Calculated */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-8 text-sm">
            <h4 className="font-semibold mb-4">How this is calculated:</h4>
            <div className="space-y-2 text-gray-600 text-[13px] leading-relaxed">
              <p>• Gross = Orders/hour × Earning/order × Hours/day × Days/week</p>
              <p>• Expenses = Total miles × Cost per mile</p>
              <p>• Tax = Profit × Tax rate</p>
              <p>• Net = Gross − Expenses − Tax</p>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3.5 rounded-2xl shadow-2xl z-50 text-sm">
          {toast}
        </div>
      )}
    </div>
  );
}