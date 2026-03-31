// components/ui/CalculatorContainer.tsx
import React from "react";
import Link from "next/link";

interface CalculatorContainerProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  backLink?: string;           // Optional back button
  lastUpdated?: string;
}

export default function CalculatorContainer({
  children,
  title,
  description,
  backLink = "/tax-calculators",
  lastUpdated = "2026",
}: CalculatorContainerProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      {/* Back Button */}
      <Link
        href={backLink}
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 group"
      >
        ← Back to All Tools
      </Link>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          {title}
        </h1>
        
        {description && (
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-green-600 font-medium">
          <span>✅ Updated for {lastUpdated}</span>
          <span className="text-gray-300">•</span>
          <span>⚡ Real-time Results</span>
        </div>
      </div>

      {/* Main Calculator Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {children}
      </div>

      {/* Trust Footer */}
      <p className="text-center text-xs text-gray-500 mt-8">
        Calculations run in your browser • No data is saved • Not affiliated with IRS
      </p>
    </div>
  );
}