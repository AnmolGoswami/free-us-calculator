"use client";

import { useState } from "react";
import AmortizedLoan from "./AmortizedLoan";
import DeferredLoan from "./DeferredLoan";
import BondCalculator from "./BondCalculator";

export default function LoanCalculatorClient() {
  const [tab, setTab] = useState<"amortized" | "deferred" | "bond">("amortized");

  const tabs = [
    {
      key: "amortized",
      label: "Amortized Loan",
      desc: "EMI-based loans (home, car, personal)",
    },
    {
      key: "deferred",
      label: "Deferred Loan",
      desc: "Single payment at maturity",
    },
    {
      key: "bond",
      label: "Bond",
      desc: "Yield & return calculation",
    },
  ] as const;

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">Loan & Investment Calculator</h2>
        <p className="text-gray-500 mt-2">
          Calculate EMI, maturity value, and bond returns with advanced insights.
        </p>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap gap-3 justify-center">
        {tabs.map((item) => {
          const isActive = tab === item.key;

          return (
            <button
              key={item.key}
              onClick={() => setTab(item.key)}
              className={`
                px-5 py-3 rounded-xl border transition-all duration-200 text-left
                ${isActive
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "bg-white hover:bg-gray-50"}
              `}
            >
              <div className="font-semibold">{item.label}</div>
              <div
                className={`text-xs mt-1 ${
                  isActive ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {item.desc}
              </div>
            </button>
          );
        })}
      </div>

      {/* CONTENT AREA */}
      <div className="transition-all duration-300">
        {tab === "amortized" && <AmortizedLoan />}
        {tab === "deferred" && <DeferredLoan />}
        {tab === "bond" && <BondCalculator />}
      </div>

    </div>
  );
}