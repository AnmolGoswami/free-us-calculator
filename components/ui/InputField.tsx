// =========================
// components/ui/InputField.tsx (FINAL INDUSTRY VERSION)
// =========================
import React, { useState } from "react";
import { Info } from "lucide-react";

type InputFieldProps = {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  onNumberChange?: (value: number) => void; // ✅ optional number handler
  parseAsNumber?: boolean; // ✅ flag to control behavior
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  type?: "number" | "text";
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  disabled?: boolean;
  tooltip?: string;
  error?: string;
};

export default function InputField({
  label,
  value,
  onChange,
  onNumberChange,
  parseAsNumber = false,
  placeholder,
  prefix,
  suffix,
  type = "text",
  min = 0,
  max,
  step,
  className = "",
  disabled = false,
  tooltip,
  error,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Allow temporary states
    if (inputValue === "" || inputValue === "." || inputValue === "-") {
      onChange(inputValue);
      return;
    }

    const cleanValue = inputValue.replace(/,/g, "");
    const numValue = Number(cleanValue);

    // Prevent negative numbers
    if (!isNaN(numValue) && numValue < 0) return;

    // String mode (default)
    onChange(cleanValue);

    // Optional number mode callback
    if (parseAsNumber && onNumberChange && !isNaN(numValue)) {
      onNumberChange(numValue);
    }
  };

  const handleBlur = () => {
    const numValue = Number(value);

    if (!isNaN(numValue)) {
      let finalValue = numValue;

      if (min !== undefined && finalValue < min) finalValue = min;
      if (max !== undefined && finalValue > max) finalValue = max;

      onChange(finalValue.toString());

      if (parseAsNumber && onNumberChange) {
        onNumberChange(finalValue);
      }
    }

    setIsFocused(false);
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
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
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
