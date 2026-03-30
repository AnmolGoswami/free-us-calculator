// components/ui/InputField.tsx

type InputFieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
};

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-indigo-500"
      />
    </div>
  );
}