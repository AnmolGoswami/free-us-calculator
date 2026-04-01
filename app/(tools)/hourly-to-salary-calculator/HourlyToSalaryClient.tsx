"use client";

import { useState, useMemo } from "react";
import InputField from "@/components/ui/InputField";
import { calculateHourlyToSalary } from "@/lib/earningUtils";

const currencies = [
  { code: "USD", symbol: "$" },
  { code: "CAD", symbol: "C$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
];

const format = (n: number) =>
  new Intl.NumberFormat("en-US").format(Math.round(n || 0));

export default function SalaryCalculator() {
  const [mode, setMode] = useState<
    "hourly-to-salary" | "salary-to-hourly" | "time-and-half" | "overtime"
  >("hourly-to-salary");

  const [hourlyRate, setHourlyRate] = useState(20);
  const [annualSalary, setAnnualSalary] = useState(52000);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [overtimeHours, setOvertimeHours] = useState(5);
  const [taxRate, setTaxRate] = useState(22);
  const [currencyCode, setCurrencyCode] = useState("USD");

  const currentCurrency =
    currencies.find((c) => c.code === currencyCode) || currencies[0];

  const result = useMemo(() => {
    return calculateHourlyToSalary({
      mode,
      hourlyRate,
      annualSalary,
      hoursPerWeek,
      overtimeHours,
      taxRatePercent: taxRate,
      currency: currencyCode,
    });
  }, [mode, hourlyRate, annualSalary, hoursPerWeek, overtimeHours, taxRate, currencyCode]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-2 gap-10">

      {/* LEFT INPUTS */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Salary Calculator</h2>

        {/* MODE */}
        <div className="flex flex-wrap gap-2">
          {[
            ["hourly-to-salary", "Hourly → Salary"],
            ["salary-to-hourly", "Salary → Hourly"],
            ["time-and-half", "Time & Half"],
            ["overtime", "Overtime"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setMode(key as any)}
              className={`px-4 py-2 rounded-xl border ${
                mode === key ? "bg-blue-600 text-white" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="bg-white border rounded-2xl p-6 space-y-4">

          {(mode !== "salary-to-hourly") && (
            <InputField label="Hourly Rate" value={hourlyRate} onChange={setHourlyRate} prefix={currentCurrency.symbol} />
          )}

          {mode === "salary-to-hourly" && (
            <InputField label="Annual Salary" value={annualSalary} onChange={setAnnualSalary} prefix={currentCurrency.symbol} />
          )}

          {(mode === "hourly-to-salary" || mode === "salary-to-hourly") && (
            <InputField label="Hours / Week" value={hoursPerWeek} onChange={setHoursPerWeek} />
          )}

          {mode === "overtime" && (
            <InputField label="Overtime Hours" value={overtimeHours} onChange={setOvertimeHours} />
          )}

          <InputField label="Tax %" value={taxRate} onChange={setTaxRate} />

          {/* Currency */}
          <div>
            <p className="text-sm font-medium mb-2">Currency</p>
            <div className="flex gap-2">
              {currencies.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCurrencyCode(c.code)}
                  className={`px-3 py-2 rounded-lg border ${
                    currencyCode === c.code ? "bg-blue-100 border-blue-500" : ""
                  }`}
                >
                  {c.symbol}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT RESULTS */}
      <div className="space-y-6">

        {/* MAIN RESULT */}
        <div className="bg-green-600 text-white p-8 rounded-2xl">
          <p className="text-sm uppercase">Net Yearly</p>
          <p className="text-5xl font-bold mt-2">
            {currentCurrency.symbol}{format(result.net.yearly)}
          </p>
          <p className="mt-2 text-sm">
            Effective: {currentCurrency.symbol}{result.effectiveHourly.toFixed(2)} / hr
          </p>
        </div>

        {/* GRID RESULTS (🔥 IMPORTANT) */}
        <div className="grid grid-cols-2 gap-4">
          {[
            ["Hourly", result.summary.hourly],
            ["Weekly", result.summary.weekly],
            ["Monthly", result.summary.monthly],
            ["Yearly", result.summary.yearly],
          ].map(([label, value]) => (
            <div key={label} className="bg-white border p-5 rounded-xl">
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-2xl font-bold mt-1">
                {currentCurrency.symbol}{format(value as number)}
              </p>
            </div>
          ))}
        </div>

        {/* EXTRA INSIGHTS */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border p-5 rounded-xl">
            <p className="text-sm text-gray-500">Daily</p>
            <p className="text-xl font-bold">
              {currentCurrency.symbol}{format(result.summary.daily)}
            </p>
          </div>

          <div className="bg-white border p-5 rounded-xl">
            <p className="text-sm text-gray-500">Per Minute</p>
            <p className="text-xl font-bold">
              {currentCurrency.symbol}{result.extras.perMinute.toFixed(2)}
            </p>
          </div>

          <div className="bg-white border p-5 rounded-xl col-span-2">
            <p className="text-sm text-gray-500">Time to earn $100</p>
            <p className="text-xl font-bold">
              {Math.round(result.extras.timeToEarn100Minutes)} minutes
            </p>
          </div>
        </div>

        {/* BREAKDOWN */}
        <div className="bg-white border p-6 rounded-2xl">
          <div className="flex justify-between">
            <span>Gross</span>
            <span>{currentCurrency.symbol}{format(result.gross.yearly)}</span>
          </div>
          <div className="flex justify-between text-red-500">
            <span>Tax</span>
            <span>-{currentCurrency.symbol}{format(result.tax.yearly)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Net</span>
            <span>{currentCurrency.symbol}{format(result.net.yearly)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}