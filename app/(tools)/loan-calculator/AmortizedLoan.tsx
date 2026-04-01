"use client";

import { useState, useMemo, useEffect } from "react";
import InputField from "@/components/ui/InputField";
import BreakdownTable from "@/components/calculators/BreakdownTable";

import {
  calculateAdvancedLoan,
  PaymentFrequency,
  CompoundFrequency,
} from "@/lib/loanCalculator";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type Currency = "USD" | "INR" | "EUR" | "GBP";

const COLORS = ["#2563eb", "#10b981"];

export default function AmortizedLoan() {
  // ================= STATE - NOW IN DISPLAY CURRENCY =================
  const [principal, setPrincipal] = useState(500000); // default in current currency
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [months, setMonths] = useState(0);

  const [paymentFrequency, setPaymentFrequency] = useState<PaymentFrequency>("monthly");
  const [compoundFrequency, setCompoundFrequency] = useState<CompoundFrequency>("monthly");

  const [extraPayment, setExtraPayment] = useState(0);
  const [balloonPayment, setBalloonPayment] = useState(0);
  const [deferMonths, setDeferMonths] = useState(0);
  const [accrueInterestDuringDefer, setAccrueInterestDuringDefer] = useState(true);

  const [currency, setCurrency] = useState<Currency>("INR");

  // Live rates: INR per 1 unit of foreign currency (how many INR = 1 EUR/USD/GBP)
  const [ratesToINR, setRatesToINR] = useState<Record<Currency, number>>({
    INR: 1,
    USD: 93.8,
    EUR: 108.5,
    GBP: 124,
  });
  const [ratesLoading, setRatesLoading] = useState(true);

  // ================= FETCH RATES (Fixed endpoint) =================
  useEffect(() => {
    const fetchRates = async () => {
      try {
        setRatesLoading(true);
        const res = await fetch(
          "https://api.frankfurter.dev/v1/latest?base=INR&symbols=USD,EUR,GBP"
        );
        if (!res.ok) throw new Error();

        const data = await res.json();
        const apiRates = data.rates || {};

        setRatesToINR({
          INR: 1,
          USD: apiRates.USD ? 1 / apiRates.USD : 93.8,
          EUR: apiRates.EUR ? 1 / apiRates.EUR : 108.5,
          GBP: apiRates.GBP ? 1 / apiRates.GBP : 124,
        });
      } catch {
        console.warn("Using fallback exchange rates");
      } finally {
        setRatesLoading(false);
      }
    };
    fetchRates();
  }, []);

  const rateToINR = ratesToINR[currency] ?? 1;

  const convertToDisplay = (amountInINR: number): number => amountInINR / rateToINR;
  const convertToINR = (displayAmount: number): number => displayAmount * rateToINR;

  const formatCurrency = (num: number = 0) =>
    new Intl.NumberFormat(
      currency === "INR"
        ? "en-IN"
        : currency === "USD"
        ? "en-US"
        : currency === "EUR"
        ? "de-DE"
        : "en-GB",
      { style: "currency", currency, maximumFractionDigits: 0 }
    ).format(num);

  const currencySymbol =
    currency === "INR" ? "₹" : currency === "USD" ? "$" : currency === "EUR" ? "€" : "£";

  // ================= INPUT HANDLERS =================
  const handlePrincipalChange = (displayValue: number) => {
    setPrincipal(displayValue);
  };

  const handleExtraPaymentChange = (displayValue: number) => {
    setExtraPayment(displayValue);
  };

  const handleBalloonPaymentChange = (displayValue: number) => {
    setBalloonPayment(displayValue);
  };

  // ================= CALCULATION (Now uses display currency) =================
  const result = useMemo(() => {
    return calculateAdvancedLoan({
      principal: principal,                    // now in display currency
      annualRate: rate,
      years: years + months / 12,
      paymentFrequency,
      compoundFrequency,
      extraPayment: extraPayment,
      balloonPayment: balloonPayment,
      deferMonths,
      accrueInterestDuringDefer,
      includeSchedule: false,
    });
  }, [
    principal,
    rate,
    years,
    months,
    paymentFrequency,
    compoundFrequency,
    extraPayment,
    balloonPayment,
    deferMonths,
    accrueInterestDuringDefer,
  ]);

  if (!result) {
    return <div className="p-8 text-center text-red-600">Invalid calculation parameters</div>;
  }

  // All values from result are now already in the selected display currency
  const displayPrincipal = principal;
  const displayPeriodicPayment = result.periodicPayment;
  const displayTotalPayment = result.totalPayment;
  const displayInterest = result.totalInterest;

  const pieData = [
    { name: "Principal", value: displayPrincipal },
    { name: "Total Interest", value: displayInterest },
  ];

  const breakdownData = [
    { label: "Loan Amount", value: formatCurrency(displayPrincipal) },
    { label: "EMI / Periodic Payment", value: formatCurrency(displayPeriodicPayment), highlight: true },
    { label: "Total Payment", value: formatCurrency(displayTotalPayment), highlight: true },
    { label: "Total Interest", value: formatCurrency(displayInterest), color: "red" as const },
    { label: "Effective Rate", value: `${result.effectiveInterestRate.toFixed(2)}%` },
    { label: "Payoff Date", value: result.payoffDate },
    { label: "Risk Level", value: result.riskLevel.toUpperCase() },
  ];

  const formattedInsights = [
    `Total Interest Paid: ${formatCurrency(displayInterest)}`,
    `Total Repayment: ${formatCurrency(displayTotalPayment)}`,
    `You pay ${result.interestToPrincipalRatio.toFixed(1)}% more than principal`,
    `Loan will be paid off in ${result.totalYears.toFixed(1)} years`,
  ];

  if (extraPayment > 0 && result.monthsSaved) {
    formattedInsights.push(
      `Extra payments saved ${formatCurrency(result.interestSaved || 0)} and reduced tenure by ${result.monthsSaved} periods`
    );
  }
  if (deferMonths > 0) {
    formattedInsights.push(
      `Deferred for ${deferMonths} months (${accrueInterestDuringDefer ? "interest accrued" : "no interest"})`
    );
  }
  if (balloonPayment > 0) {
    formattedInsights.push(`Balloon payment of ${formatCurrency(balloonPayment)} applied at end`);
  }

  // ================= UI =================
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* LEFT SIDE - INPUTS */}
        <div className="space-y-6">
          <div className="flex gap-2 bg-gray-100 p-1 rounded-2xl w-fit">
            {(["INR", "USD", "EUR", "GBP"] as const).map((cur) => (
              <button
                key={cur}
                onClick={() => setCurrency(cur)}
                disabled={ratesLoading}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  currency === cur ? "bg-blue-600 text-white shadow" : "text-gray-600 hover:bg-white"
                }`}
              >
                {cur}
              </button>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <InputField
              label="Loan Amount"
              value={displayPrincipal}
              onChange={handlePrincipalChange}
              prefix={currencySymbol}
              type="number"
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField label="Years" value={years} onChange={setYears} type="number" />
              <InputField label="Additional Months" value={months} onChange={setMonths} type="number" />
            </div>

            <InputField
              label="Annual Interest Rate (%)"
              value={rate}
              onChange={setRate}
              step={0.01}
              type="number"
            />

            <InputField
              label="Extra Payment (per period)"
              value={extraPayment}
              onChange={handleExtraPaymentChange}
              prefix={currencySymbol}
              type="number"
            />

            <InputField
              label="Balloon Payment (at end)"
              value={balloonPayment}
              onChange={handleBalloonPaymentChange}
              prefix={currencySymbol}
              type="number"
            />

            <InputField
              label="Defer Period (Months)"
              value={deferMonths}
              onChange={setDeferMonths}
              type="number"
            />

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={accrueInterestDuringDefer}
                onChange={(e) => setAccrueInterestDuringDefer(e.target.checked)}
                className="w-5 h-5 accent-blue-600"
              />
              <label className="text-sm text-gray-700">Accrue interest during deferral</label>
            </div>

            <div className="pt-4 border-t space-y-6">
              <Select
                label="Payment Frequency"
                value={paymentFrequency}
                onChange={(v) => setPaymentFrequency(v as PaymentFrequency)}
                options={["monthly", "biweekly", "weekly", "quarterly", "semimonthly", "semiannually", "yearly"]}
              />
              <Select
                label="Compound Frequency"
                value={compoundFrequency}
                onChange={(v) => setCompoundFrequency(v as CompoundFrequency)}
                options={["monthly", "daily", "continuous", "quarterly", "semiannually", "yearly", "weekly", "biweekly", "semimonthly"]}
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - RESULTS */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-3xl shadow-lg">
            <p className="text-blue-100 text-sm tracking-wide">YOUR PERIODIC PAYMENT</p>
            <h2 className="text-5xl font-bold mt-2 tracking-tight">
              {formatCurrency(displayPeriodicPayment)}
            </h2>
            <p className="text-blue-100 text-sm mt-1">
              {paymentFrequency.charAt(0).toUpperCase() + paymentFrequency.slice(1)} •{" "}
              {result.totalYears.toFixed(1)} years
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card title="Total Repayment" value={formatCurrency(displayTotalPayment)} />
            <Card title="Total Interest" value={formatCurrency(displayInterest)} color="text-red-600" />
            <Card title="Payoff Date" value={result.payoffDate} />
            <Card title="Risk Level" value={result.riskLevel.toUpperCase()} />
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h3 className="font-semibold text-lg mb-6">Principal vs Interest Breakdown</h3>
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
                    const total = pieData.reduce((s, e) => s + (e.value || 0), 0);
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
              <BreakdownTable title="Detailed Summary" data={breakdownData} />
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-3xl">
            <h3 className="font-semibold mb-4 flex items-center gap-2">💡 Key Insights</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {formattedInsights.map((insight, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Card and Select components
function Card({ title, value, color = "text-gray-900" }: { title: string; value: string | number; color?: string }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow transition-shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-2xl font-semibold mt-2 ${color}`}>{value}</p>
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="text-sm text-gray-600 mb-1.5 block font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-2xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      >
        {options.map((op) => (
          <option key={op} value={op}>
            {op.charAt(0).toUpperCase() + op.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}