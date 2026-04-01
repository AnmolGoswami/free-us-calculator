"use client";

import { useState, useMemo } from "react";
import InputField from "@/components/ui/InputField";
import BreakdownTable from "@/components/calculators/BreakdownTable";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#2563eb", "#10b981"];

export default function DeferredLoan() {
  // ================= STATE =================
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(3);

  // ================= FORMAT =================
  const formatCurrency = (num: number = 0) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);

  // ================= CALC =================
  const result = useMemo(() => {
    const amount = principal * Math.pow(1 + rate / 100, years);
    const interest = amount - principal;

    return { amount, interest };
  }, [principal, rate, years]);

  // ================= DATA =================
  const pieData = [
    { name: "Principal", value: principal },
    { name: "Interest", value: result.interest },
  ];

  const breakdownData = [
    { label: "Initial Loan", value: formatCurrency(principal) },
    {
      label: "Maturity Amount",
      value: formatCurrency(result.amount),
      highlight: true,
    },
    {
      label: "Total Interest",
      value: formatCurrency(result.interest),
      color: "red" as const,
    },
    {
      label: "Interest Rate",
      value: `${rate}%`,
      color: "indigo" as const,
    },
    {
      label: "Time Period",
      value: `${years} years`,
    },
  ];

  // ================= INSIGHTS =================
  const growthPercent = ((result.interest / principal) * 100).toFixed(1);

  const insights = [
    `Your loan grows by ₹${result.interest.toLocaleString("en-IN")} over ${years} years`,
    `Total increase is ${growthPercent}% of the original amount`,
    "No periodic payments — full amount is due at maturity",
    rate > 10
      ? "High interest rate — consider early repayment options"
      : "Moderate interest rate — manageable loan growth",
  ];

  // ================= UI =================
  return (
    <div className="grid lg:grid-cols-2 gap-10">

      {/* LEFT INPUT */}
      <div className="space-y-6">
        <div className="bg-white border rounded-2xl p-6 space-y-5">

          <InputField
            label="Loan Amount"
            value={principal}
            onChange={setPrincipal}
            prefix="₹"
          />

          <InputField
            label="Interest Rate (%)"
            value={rate}
            onChange={setRate}
            step={0.1}
          />

          <InputField
            label="Years"
            value={years}
            onChange={setYears}
          />

        </div>
      </div>

      {/* RIGHT RESULT */}
      <div className="space-y-6">

        {/* MAIN RESULT */}
        <div className="bg-blue-600 text-white p-8 rounded-2xl">
          <p className="uppercase text-sm">Maturity Amount</p>
          <h2 className="text-4xl font-bold mt-2">
            {formatCurrency(result.amount)}
          </h2>
        </div>

        {/* SUMMARY */}
        <div className="grid grid-cols-2 gap-4">
          <Card title="Total Interest" value={formatCurrency(result.interest)} />
          <Card title="Growth %" value={`${growthPercent}%`} />
          <Card title="Years" value={years} />
          <Card title="Final Value" value={formatCurrency(result.amount)} />
        </div>

        {/* BREAKDOWN */}
        <BreakdownTable title="Loan Breakdown" data={breakdownData} />

        {/* PIE CHART */}
        <div className="bg-white p-6 rounded-2xl border">
          <h3 className="font-semibold mb-4">
            Principal vs Interest Growth
          </h3>

          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius={70}
                outerRadius={110}
              >
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>

              <Tooltip formatter={(val) => formatCurrency(val as number)} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* INSIGHTS */}
        <div className="bg-white p-6 rounded-2xl border">
          <h3 className="font-semibold mb-3">Insights</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {insights.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

// ================= CARD =================
function Card({ title, value }: { title: string; value: any }) {
  return (
    <div className="bg-white border p-4 rounded-xl">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold mt-1">{value}</p>
    </div>
  );
}