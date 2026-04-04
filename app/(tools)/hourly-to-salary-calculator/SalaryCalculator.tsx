"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/ui/InputField";
import { calculateEarnings, CurrencyCode } from "@/lib/hourlyEarningCalculator";

// 🌍 Currency
const currencies: { code: CurrencyCode; symbol: string }[] = [
  { code: "USD", symbol: "$" },
  { code: "INR", symbol: "₹" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
];

type Mode =
  | "hourly-to-salary"
  | "salary-to-hourly"
  | "overtime"
  | "time-and-half";

export default function SalaryCalculator({
  defaultMode = "hourly-to-salary",
}: {
  defaultMode?: Mode;
}) {
  const router = useRouter();

  const [mode, setMode] = useState<Mode>(defaultMode);

  // ✅ STORE AS STRING (IMPORTANT)
  const [hourlyRate, setHourlyRate] = useState("20");
  const [annualSalary, setAnnualSalary] = useState("52000");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [daysPerWeek, setDaysPerWeek] = useState("5");
  const [overtimeHours, setOvertimeHours] = useState("5");
  const [overtimeMultiplier, setOvertimeMultiplier] = useState("1.5");
  const [taxRate, setTaxRate] = useState("20");
  const [currency, setCurrency] = useState<CurrencyCode>("USD");

  // 🔥 Time & half auto
  useEffect(() => {
    if (mode === "time-and-half") {
      setOvertimeMultiplier("1.5");
    }
  }, [mode]);

  // 🔥 URL change (SEO)
  useEffect(() => {
    if (mode === "hourly-to-salary") {
      router.replace("/hourly-to-salary-calculator");
    }
    if (mode === "salary-to-hourly") {
      router.replace("/salary-to-hourly-calculator");
    }
    if (mode === "overtime") {
      router.replace("/overtime-calculator");
    }
    if (mode === "time-and-half") {
      router.replace("/time-and-a-half-calculator");
    }
  }, [mode, router]);

  const currentCurrency =
    currencies.find((c) => c.code === currency) || currencies[0];

  // 🔥 Convert string → number SAFELY
  const toNumber = (val: string) => {
    const n = Number(val);
    return isNaN(n) ? 0 : n;
  };

  // 🔥 CALCULATION
  const result = useMemo(() => {
    return calculateEarnings({
      mode: mode === "time-and-half" ? "overtime" : mode,
      hourlyRate: toNumber(hourlyRate),
      annualSalary: toNumber(annualSalary),
      hoursPerWeek: toNumber(hoursPerWeek),
      daysPerWeek: toNumber(daysPerWeek),
      overtimeHours: toNumber(overtimeHours),
      overtimeMultiplier: toNumber(overtimeMultiplier),
      taxRatePercent: toNumber(taxRate),
      currency,
    });
  }, [
    mode,
    hourlyRate,
    annualSalary,
    hoursPerWeek,
    daysPerWeek,
    overtimeHours,
    overtimeMultiplier,
    taxRate,
    currency,
  ]);

  const format = (n: number) =>
    new Intl.NumberFormat().format(Math.round(n || 0));

  return (
    <div className="grid lg:grid-cols-2 gap-10">

      {/* LEFT */}
      <div className="space-y-6">

        {/* MODE */}
        <div className="flex flex-wrap gap-2">
          {[
            ["hourly-to-salary", "Hourly → Salary"],
            ["salary-to-hourly", "Salary → Hourly"],
            ["overtime", "Overtime"],
            ["time-and-half", "Time & Half"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setMode(key as Mode)}
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
            <InputField
              label="Hourly Rate"
              value={hourlyRate}
              onChange={setHourlyRate}
              prefix={currentCurrency.symbol}
              type="text"
            />
          )}

          {mode === "salary-to-hourly" && (
            <InputField
              label="Annual Salary"
              value={annualSalary}
              onChange={setAnnualSalary}
              prefix={currentCurrency.symbol}
            />
          )}

          {(mode === "hourly-to-salary" || mode === "salary-to-hourly") && (
            <InputField
              label="Hours / Week"
              value={hoursPerWeek}
              onChange={setHoursPerWeek}
            />
          )}

          {(mode === "overtime" || mode === "time-and-half") && (
            <>
              <InputField
                label="Overtime Hours"
                value={overtimeHours}
                onChange={setOvertimeHours}
              />
              <InputField
                label="Multiplier"
                value={overtimeMultiplier}
                onChange={setOvertimeMultiplier}
              />
            </>
          )}

          <InputField
            label="Days / Week"
            value={daysPerWeek}
            onChange={setDaysPerWeek}
          />

          <InputField
            label="Tax %"
            value={taxRate}
            onChange={setTaxRate}
          />

          {/* Currency */}
          <div>
            <p className="text-sm font-medium mb-2">Currency</p>
            <div className="flex gap-2">
              {currencies.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCurrency(c.code)}
                  className={`px-3 py-2 rounded-lg border ${
                    currency === c.code ? "bg-blue-100 border-blue-500" : ""
                  }`}
                >
                  {c.symbol}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="space-y-6">

        <div className="bg-green-600 text-white p-8 rounded-2xl">
          <p className="text-sm uppercase">Net Yearly</p>
          <p className="text-5xl font-bold mt-2">
            {currentCurrency.symbol}{format(result.net.yearly)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            ["Hourly", result.summary.hourly],
            ["Weekly", result.summary.weekly],
            ["Monthly", result.summary.monthly],
            ["Yearly", result.summary.yearly],
          ].map(([label, value]) => (
            <div key={label} className="bg-white border p-5 rounded-xl">
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-2xl font-bold">
                {currentCurrency.symbol}{format(value as number)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}