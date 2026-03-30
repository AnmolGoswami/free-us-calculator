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
          Estimated Earnings
        </h2>

        {result && (
          <div className="space-y-6">
            
            <div className="border-b pb-4">
              <p className="text-sm text-gray-500">Hourly Earnings</p>
              <p className="text-3xl font-bold text-indigo-600">
                ${result.hourly}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-lg">
              <div>
                <p className="text-gray-500 text-sm">Daily</p>
                <p className="font-semibold">${result.daily}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Weekly</p>
                <p className="font-semibold">${result.weekly}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Monthly</p>
                <p className="font-semibold">${result.monthly}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}