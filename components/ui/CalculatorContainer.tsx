// components/ui/CalculatorContainer.tsx
import React from "react";

interface CalculatorContainerProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function CalculatorContainer({
  children,
  title,
  description,
}: CalculatorContainerProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Common Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <p className="text-sm text-green-600 mt-4 font-medium">
          Updated for 2026 • Real-time Results • No Signup
        </p>
      </div>

      {/* Tool Content Area */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        {children}
      </div>
    </div>
  );
}