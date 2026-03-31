"use client";

import { useState, useEffect } from "react";
import InputField from "@/components/ui/InputField";
import ResultBox from "@/components/ui/ResultBox";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import { calculateDoorDashEarnings } from "@/lib/earningUtils";

export default function DoorDashCalculatorClient() {
  const [ordersPerHour, setOrdersPerHour] = useState(2);
  const [earningPerOrder, setEarningPerOrder] = useState(8);
  const [hoursPerDay, setHoursPerDay] = useState(6);
  const [daysPerWeek, setDaysPerWeek] = useState(5);

  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const res = calculateDoorDashEarnings(
      ordersPerHour,
      earningPerOrder,
      hoursPerDay,
      daysPerWeek
    );

    setResult(res);
  }, [ordersPerHour, earningPerOrder, hoursPerDay, daysPerWeek]);

  return (
    <div className="grid lg:grid-cols-2 gap-10 p-8">
      
      {/* INPUTS */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Enter Your Work Details
        </h2>

        <InputField label="Orders per hour" value={ordersPerHour} onChange={setOrdersPerHour} />
        <InputField label="Earning per order ($)" value={earningPerOrder} onChange={setEarningPerOrder} />
        <InputField label="Hours per day" value={hoursPerDay} onChange={setHoursPerDay} />
        <InputField label="Days per week" value={daysPerWeek} onChange={setDaysPerWeek} />
      </div>

      {/* RESULTS */}
      <div className="space-y-6">
        {result && (
          <>
            {/* MAIN RESULT */}
            <ResultBox
              title="Monthly Take-Home"
              value={`$${result.net.monthly.toFixed(0)}`}
              highlight
              color="green"
            />

            {/* SECONDARY */}
            <ResultBox
              title="Weekly Take-Home"
              value={`$${result.net.weekly.toFixed(0)}`}
            />

            <ResultBox
              title="Gross Monthly"
              value={`$${result.gross.monthly.toFixed(0)}`}
            />

            {/* BREAKDOWN TABLE */}
            <BreakdownTable
              title="Detailed Breakdown"
              data={[
                {
                  label: "Gross Monthly",
                  value: `$${result.gross.monthly.toFixed(0)}`,
                },
                {
                  label: "Expenses",
                  value: `$${result.expenses.monthly.toFixed(0)}`,
                  color: "red",
                },
                {
                  label: "Estimated Tax",
                  value: `$${result.tax.monthly.toFixed(0)}`,
                  color: "red",
                },
                {
                  label: "Net Monthly",
                  value: `$${result.net.monthly.toFixed(0)}`,
                  highlight: true,
                  color: "green",
                },
              ]}
            />

            {/* INFO */}
            <div className="bg-gray-50 p-4 rounded-xl text-xs text-gray-500">
              Includes fuel cost (IRS mileage rate) and estimated 15.3% self-employment tax.
            </div>
          </>
        )}
      </div>
    </div>
  );
}