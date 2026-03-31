"use client";

import { useState, useEffect } from "react";
import InputField from "@/components/ui/InputField";
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

        <InputField
          label="Orders per hour"
          value={ordersPerHour}
          onChange={setOrdersPerHour}
        />

        <InputField
          label="Earning per order ($)"
          value={earningPerOrder}
          onChange={setEarningPerOrder}
        />

        <InputField
          label="Hours per day"
          value={hoursPerDay}
          onChange={setHoursPerDay}
        />

        <InputField
          label="Days per week"
          value={daysPerWeek}
          onChange={setDaysPerWeek}
        />
      </div>

      {/* RESULTS */}
      <div className="bg-gray-50 rounded-3xl p-8 border">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Earnings Breakdown
        </h2>

        {result && (
          <div className="space-y-8">
            
            {/* NET (MAIN) */}
            <div className="border-b pb-4">
              <p className="text-sm text-gray-500">Monthly Take-Home</p>
              <p className="text-3xl font-bold text-green-600">
                ${result.net.monthly.toFixed(0)}
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 gap-6 text-sm">
              
              <div>
                <p className="text-gray-500">Gross Monthly</p>
                <p className="font-semibold">
                  ${result.gross.monthly.toFixed(0)}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Expenses</p>
                <p className="font-semibold text-orange-600">
                  ${result.expenses.monthly.toFixed(0)}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Estimated Tax</p>
                <p className="font-semibold text-red-600">
                  ${result.tax.monthly.toFixed(0)}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Weekly Take-Home</p>
                <p className="font-semibold">
                  ${result.net.weekly.toFixed(0)}
                </p>
              </div>
            </div>

            {/* EXTRA INFO */}
            <div className="bg-white rounded-xl p-4 text-xs text-gray-500">
              Includes fuel cost (IRS rate) and estimated 15.3% self-employment tax.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}