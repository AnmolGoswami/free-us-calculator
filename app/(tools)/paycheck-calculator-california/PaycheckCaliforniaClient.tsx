"use client";

import { useState, useEffect } from "react";
import InputField from "@/components/ui/InputField";
import { calculateCaliforniaPaycheck } from "@/lib/taxUtils";

export default function PaycheckCaliforniaClient() {
  const [salary, setSalary] = useState(80000);
  const [payFrequency, setPayFrequency] = useState(12); // monthly default

  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const res = calculateCaliforniaPaycheck(salary, payFrequency);
    setResult(res);
  }, [salary, payFrequency]);

  return (
    <div className="grid lg:grid-cols-2 gap-10 p-8">

      {/* INPUTS */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Enter Salary Details
        </h2>

        <InputField
          label="Annual Salary ($)"
          value={salary}
          onChange={setSalary}
        />

        {/* PAY FREQUENCY */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Pay Frequency
          </label>
          <select
            value={payFrequency}
            onChange={(e) => setPayFrequency(Number(e.target.value))}
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value={52}>Weekly</option>
            <option value={26}>Bi-Weekly</option>
            <option value={24}>Semi-Monthly</option>
            <option value={12}>Monthly</option>
          </select>
        </div>
      </div>

      {/* RESULTS */}
      <div className="bg-gray-50 rounded-3xl p-8 border">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Paycheck Breakdown
        </h2>

        {result && (
          <div className="space-y-8">

            {/* NET PAY */}
            <div className="border-b pb-4">
              <p className="text-sm text-gray-500">Take Home Pay</p>
              <p className="text-3xl font-bold text-green-600">
                ${result.net.toFixed(0)}
              </p>
            </div>

            {/* BREAKDOWN */}
            <div className="grid grid-cols-2 gap-6 text-sm">

              <div>
                <p className="text-gray-500">Gross Pay</p>
                <p className="font-semibold">
                  ${result.gross.toFixed(0)}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Federal Tax</p>
                <p className="font-semibold text-red-600">
                  ${result.federalTax.toFixed(0)}
                </p>
              </div>

              <div>
                <p className="text-gray-500">California Tax</p>
                <p className="font-semibold text-red-600">
                  ${result.stateTax.toFixed(0)}
                </p>
              </div>

              <div>
                <p className="text-gray-500">FICA (SS + Medicare)</p>
                <p className="font-semibold text-red-600">
                  ${result.fica.toFixed(0)}
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl text-xs text-gray-500">
              Includes federal income tax, California state tax, Social Security (6.2%) and Medicare (1.45%).
            </div>
          </div>
        )}
      </div>
    </div>
  );
}