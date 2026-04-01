"use client";

import { useState, useMemo } from "react";
import InputField from "@/components/ui/InputField";
import BreakdownTable from "@/components/calculators/BreakdownTable";

import { calculateBond } from "@/lib/loanCalculator";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#2563eb", "#10b981"];

type Currency = "USD" | "INR" | "EUR" | "GBP";

export default function BondCalculator() {
  // ================= STATE =================
  const [faceValue, setFaceValue] = useState(100000);
  const [couponRate, setCouponRate] = useState(5);
  const [years, setYears] = useState(10);
  const [price, setPrice] = useState(95000);

  const [currency, setCurrency] = useState<Currency>("INR");

  // ================= CURRENCY =================
  const exchangeRates: Record<Currency, number> = {
    INR: 1,
    USD: 83,
    EUR: 90,
    GBP: 105,
  };

  const convertToDisplay = (num: number): number => {
    return num * (exchangeRates[currency] ?? 1);
  };

  const formatCurrency = (num: number = 0) =>
    new Intl.NumberFormat(
      currency === "INR" ? "en-IN" : currency === "USD" ? "en-US" : currency === "EUR" ? "de-DE" : "en-GB",
      {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      }
    ).format(num);

  const currencySymbol =
    currency === "INR" ? "₹" : currency === "USD" ? "$" : currency === "EUR" ? "€" : "£";

  // ================= CALC =================
  const result = useMemo(() => {
    return calculateBond({
      faceValue,
      yearsToMaturity: years,
      annualRate: couponRate,        // Assuming this matches your lib (coupon rate)
      // If your calculateBond uses different param names, adjust here
    });
  }, [faceValue, couponRate, years]);

  // ================= DERIVED =================
  const displayPrice = convertToDisplay(price);
  const displayFaceValue = convertToDisplay(faceValue);

  const annualCoupon = faceValue * (couponRate / 100);
  const totalCoupon = annualCoupon * years;
  const maturityValue = faceValue + totalCoupon;
  const profit = maturityValue - price;

  const displayProfit = convertToDisplay(profit);
  const displayMaturityValue = convertToDisplay(maturityValue);

  // ================= CHART DATA =================
  const pieData = [
    { name: "Investment (Market Price)", value: displayPrice },
    { name: "Total Return (Profit)", value: displayProfit },
  ];

  const breakdownData = [
    { label: "Face Value", value: formatCurrency(displayFaceValue) },
    { label: "Market Price", value: formatCurrency(displayPrice) },
    {
      label: "Yield to Maturity",
      value: `${result.yieldToMaturity?.toFixed(2) || "N/A"}%`,
      highlight: true,
    },
    {
      label: "Total Return",
      value: `${result.totalReturn?.toFixed(2) || "N/A"}%`,
      highlight: true,
    },
    {
      label: "Total Coupon Earned",
      value: formatCurrency(convertToDisplay(totalCoupon)),
    },
    {
      label: "Net Profit",
      value: formatCurrency(displayProfit),
      color: "indigo" as const,
    },
  ];

  // ================= INSIGHTS =================
  const insights = [
    `You earn ${formatCurrency(displayProfit)} over ${years} years`,
    `Effective yield (YTM) is approximately ${result.yieldToMaturity?.toFixed(2) || "N/A"}% annually`,
    price < faceValue
      ? "Bond is trading at a discount — potentially good buying opportunity"
      : price > faceValue
      ? "Bond is trading at a premium"
      : "Bond is trading at par",
  ];

  // ================= UI =================
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid lg:grid-cols-2 gap-10">

        {/* LEFT SIDE - INPUTS */}
        <div className="space-y-6">
          {/* CURRENCY SWITCH */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-2xl w-fit">
            {(["INR", "USD", "EUR", "GBP"] as const).map((cur) => (
              <button
                key={cur}
                onClick={() => setCurrency(cur)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  currency === cur
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-600 hover:bg-white"
                }`}
              >
                {cur}
              </button>
            ))}
          </div>

          {/* INPUT CARD */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <InputField
              label="Face Value"
              value={faceValue}
              onChange={setFaceValue}
              prefix={currencySymbol}
              type="number"
            />

            <InputField
              label="Coupon Rate (%)"
              value={couponRate}
              onChange={setCouponRate}
              step={0.1}
              type="number"
            />

            <InputField
              label="Years to Maturity"
              value={years}
              onChange={setYears}
              type="number"
            />

            <InputField
              label="Market Price"
              value={price}
              onChange={setPrice}
              prefix={currencySymbol}
              type="number"
            />
          </div>
        </div>

        {/* RIGHT SIDE - RESULTS (Balanced) */}
        <div className="space-y-6">

          {/* MAIN YTM CARD */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-3xl shadow-lg">
            <p className="text-blue-100 text-sm tracking-wide">YIELD TO MATURITY (YTM)</p>
            <h2 className="text-5xl font-bold mt-2 tracking-tight">
              {result.yieldToMaturity?.toFixed(2) || "N/A"}%
            </h2>
            <p className="text-blue-100 text-sm mt-2">
              Annualized return if held to maturity
            </p>
          </div>

          {/* SUMMARY CARDS */}
          <div className="grid grid-cols-2 gap-4">
            <Card 
              title="Total Return" 
              value={`${result.totalReturn?.toFixed(2) || "N/A"}%`} 
            />
            <Card 
              title="Net Profit" 
              value={formatCurrency(displayProfit)} 
              color="text-emerald-600"
            />
            <Card title="Maturity Value" value={formatCurrency(displayMaturityValue)} />
            <Card title="Years to Maturity" value={years} />
          </div>

          {/* CHART + BREAKDOWN - Unified */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h3 className="font-semibold text-lg mb-6">Investment vs Return Breakdown</h3>
            
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={75}
                  outerRadius={110}
                  dataKey="value"
                  nameKey="name"
                >
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                
                <Tooltip
                  formatter={(value: any, name: any) => {
                    const num = Number(value ?? 0);
                    const total = pieData.reduce((sum, entry) => sum + (entry.value || 0), 0);
                    const percent = total > 0 ? ((num / total) * 100).toFixed(1) : "0";
                    return [`${formatCurrency(num)} (${percent}%)`, name || "Amount"];
                  }}
                  contentStyle={{
                    borderRadius: "14px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    padding: "14px 18px",
                  }}
                />
                
                <Legend verticalAlign="bottom" height={40} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-10">
              <BreakdownTable title="Bond Details" data={breakdownData} />
            </div>
          </div>

          {/* INSIGHTS */}
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-3xl">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              💡 Key Insights
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {insights.map((text, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

// ================= HELPER COMPONENTS =================
function Card({ title, value, color = "text-gray-900" }: { 
  title: string; 
  value: string | number; 
  color?: string;
}) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow transition-shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-2xl font-semibold mt-2 ${color}`}>{value}</p>
    </div>
  );
}