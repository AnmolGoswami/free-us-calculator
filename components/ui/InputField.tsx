// components/ui/InputField.tsx
import React, { useState } from "react";
import { Info } from "lucide-react";

type InputFieldProps = {
  label: string;
  value: number | string;
  onChange: (value: number) => void;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  type?: "number" | "text";
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  disabled?: boolean;
  tooltip?: string;           // ← New: Tooltip explanation
  error?: string;             // ← New: Error message
};

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
  prefix,
  suffix,
  type = "number",
  min = 0,
  max,
  step = 0.1,
  className = "",
  disabled = false,
  tooltip,
  error,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let numValue = e.target.value === "" ? 0 : Number(e.target.value);

    // Strong validation: Prevent negative values
    if (numValue < 0) numValue = 0;

    // Clamp within min/max if provided
    if (min !== undefined && numValue < min) numValue = min;
    if (max !== undefined && numValue > max) numValue = max;

    onChange(numValue);
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-2.5">
        <label className="block text-sm font-semibold text-gray-700">
          {label}
        </label>
        
        {tooltip && (
          <div className="group relative">
            <Info className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-help transition-colors" />
            <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-60 bg-gray-900 text-white text-xs rounded-xl p-3 shadow-xl z-50">
              {tooltip}
            </div>
          </div>
        )}
      </div>

      <div className="relative group">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium pointer-events-none">
            {prefix}
          </span>
        )}

        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full border rounded-2xl px-4 py-4 text-lg transition-all duration-200
            ${error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}
            ${prefix ? "pl-10" : ""}
            ${suffix ? "pr-12" : ""}
            ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
            ${isFocused ? "shadow-sm" : ""}
          `}
          aria-label={label}
        />

        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium pointer-events-none">
            {suffix}
          </span>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-xs mt-1.5">{error}</p>
      )}
    </div>
  );
}