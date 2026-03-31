import Link from "next/link";

// components/ui/CalculatorContainer.tsx
interface CalculatorContainerProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  backLink?: string;
  lastUpdated?: string;
  category?: string;
  keywords?: string;        // ← Added (for future use)
}

export default function CalculatorContainer({
  children,
  title,
  description,
  backLink = "/earning-calculators",
  lastUpdated = "March 2026",
  category = "Earnings",
  keywords,                 // ← Added
}: CalculatorContainerProps) {
  // You can ignore keywords here or use it later for meta tags
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      {/* Back Button */}
      <Link
        href={backLink}
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 group transition-colors"
      >
        ← Back to Calculators
      </Link>

      {/* Header */}
      <div className="text-center mb-12">
        {category && (
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            {category} Tool
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter mb-5">
          {title}
        </h1>

        {description && (
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex items-center justify-center gap-3 mt-8 text-sm">
          <span className="flex items-center gap-1.5 text-green-600 font-medium">
            <span>✅</span> Updated for {lastUpdated}
          </span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-600">⚡ Instant Results</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {children}
      </div>

      <p className="text-center text-xs text-gray-500 mt-10">
        All calculations run locally in your browser • No data stored • For estimation purposes only
      </p>
    </div>
  );
}