// components/ui/InputField.tsx
import React from "react";

type InputFieldProps = {
  label: string;
  value: number | string;
  onChange: (value: number) => void;
  placeholder?: string;
  prefix?: string;           // e.g., "$", "%"
  suffix?: string;           // e.g., "/hr", "USD"
  type?: "number" | "text";
  min?: number;
  max?: number;
  step?: number;
  className?: string;
};

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
  prefix,
  suffix,
  type = "number",
  min,
  max,
  step = 1,
  className = "",
}: InputFieldProps) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
            {prefix}
          </span>
        )}
        
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          className={`w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-lg
            ${prefix ? "pl-9" : ""} 
            ${suffix ? "pr-12" : ""}`}
        />

        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}