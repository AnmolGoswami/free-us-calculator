"use client";

import { useState, useEffect } from "react";
import InputField from "@/components/ui/InputField";
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
      <div className="bg-gray-50 rounded-3xl p-8 border">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Salary Breakdown
        </h2>

        {result && (
          <div className="space-y-8">
            
            {/* MAIN RESULT */}
            <div className="border-b pb-4">
              <p className="text-sm text-gray-500">Yearly Take-Home Salary</p>
              <p className="text-3xl font-bold text-green-600">
                ${result.net.yearly.toFixed(0)}
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 gap-6 text-sm">
              
              <div>
                <p className="text-gray-500">Weekly Gross</p>
                <p className="font-semibold">
                  ${result.gross.weekly.toFixed(0)}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Weekly Tax</p>
                <p className="font-semibold text-red-600">
                  ${result.tax.weekly.toFixed(0)}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Monthly Salary</p>
                <p className="font-semibold">
                  ${result.net.monthly.toFixed(0)}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Yearly Gross</p>
                <p className="font-semibold">
                  ${result.gross.yearly.toFixed(0)}
                </p>
              </div>
            </div>

            {/* EXTRA INFO */}
            <div className="bg-white rounded-xl p-4 text-xs text-gray-500">
              Includes overtime pay (1.5× after 40 hours/week) and estimated US tax (~22%).
            </div>
          </div>
        )}
      </div>
    </div>
  );
}