"use client";

import { useState, useEffect } from "react";
import InputField from "@/components/ui/InputField";
import ResultBox from "@/components/ui/ResultBox";
import BreakdownTable from "@/components/calculators/BreakdownTable";
import { calculateHourlyToSalary } from "@/lib/earningUtils";

export default function HourlyToSalaryClient() {
  const [hourlyRate, setHourlyRate] = useState(20);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);

  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const res = calculateHourlyToSalary(hourlyRate, hoursPerWeek);
    setResult(res);
  }, [hourlyRate, hoursPerWeek]);

  return (
    <div className="grid lg:grid-cols-2 gap-10 p-8">
      
      {/* INPUTS */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Enter Your Work Details
        </h2>

        <InputField
          label="Hourly Rate ($)"
          value={hourlyRate}
          onChange={setHourlyRate}
        />

        <InputField
          label="Hours per Week"
          value={hoursPerWeek}
          onChange={setHoursPerWeek}
        />
      </div>

      {/* RESULTS */}
      <div className="space-y-6">
        {result && (
          <>
            {/* MAIN RESULT */}
            <ResultBox
              title="Yearly Take-Home Salary"
              value={`$${result.net.yearly.toFixed(0)}`}
              highlight
              color="green"
            />

            {/* SECONDARY */}
            <ResultBox
              title="Monthly Take-Home"
              value={`$${result.net.monthly.toFixed(0)}`}
            />

            <ResultBox
              title="Weekly Take-Home"
              value={`$${result.net.weekly.toFixed(0)}`}
            />

            {/* BREAKDOWN */}
            <BreakdownTable
              title="Salary Breakdown"
              data={[
                {
                  label: "Yearly Gross",
                  value: `$${result.gross.yearly.toFixed(0)}`,
                },
                {
                  label: "Estimated Tax",
                  value: `$${result.tax.yearly.toFixed(0)}`,
                  color: "red",
                },
                {
                  label: "Net Yearly Salary",
                  value: `$${result.net.yearly.toFixed(0)}`,
                  highlight: true,
                  color: "green",
                },
                {
                  label: "Weekly Gross",
                  value: `$${result.gross.weekly.toFixed(0)}`,
                },
              ]}
            />

            {/* INFO */}
            <div className="bg-gray-50 p-4 rounded-xl text-xs text-gray-500">
              Based on US full-time work (52 weeks/year). Includes overtime (1.5× after 40 hours/week) and estimated federal tax (~22%).
            </div>
          </>
        )}
      </div>
    </div>
  );
}