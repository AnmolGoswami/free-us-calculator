// components/ui/CalculationInputField.tsx
import React, { useState } from "react";
import { Info } from "lucide-react";

type CalculationInputFieldProps = {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  disabled?: boolean;
  tooltip?: string;
  error?: string;
};

export default function CalculationInputField({
  label,
  value,
  onChange,
  placeholder,
  prefix,
  suffix,
  min = 0,
  max,
  step = 0.01,
  className = "",
  disabled = false,
  tooltip,
  error,
}: CalculationInputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Allow temporary empty, decimal point, or negative sign
    if (inputValue === "" || inputValue === "." || inputValue === "-") {
      onChange(inputValue);
      return;
    }

    const cleanValue = inputValue.replace(/,/g, "");

    // Allow only valid number characters
    if (/^-?\d*\.?\d*$/.test(cleanValue)) {
      onChange(cleanValue);
    }
  };

  const handleBlur = () => {
    let currentValue = value.toString().trim();

    if (currentValue === "" || currentValue === "." || currentValue === "-") {
      onChange(min.toString());
      return;
    }

    let num = Number(currentValue);

    if (isNaN(num)) {
      onChange(min.toString());
      return;
    }

    // Clamp to min/max
    if (min !== undefined && num < min) num = min;
    if (max !== undefined && num > max) num = max;

    onChange(num.toString());
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

      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium pointer-events-none">
            {prefix}
          </span>
        )}

        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
          onBlur={() => {
            setIsFocused(false);
            handleBlur();
          }}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full border rounded-2xl px-4 py-4 text-lg transition-all duration-200
            ${error ? "border-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}
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

      {error && <p className="text-red-500 text-xs mt-1.5">{error}</p>}
    </div>
  );
}