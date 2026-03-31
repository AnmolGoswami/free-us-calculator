// components/ui/ToolCard.tsx
import Link from "next/link";
import { Tool } from "@/types";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link 
      href={`/${tool.slug}`}
      className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-blue-500 hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
    >
      {/* Top Icon Section */}
      <div className="h-48 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center relative overflow-hidden">
        <div className="text-7xl transition-transform duration-300 group-hover:scale-110">
          {tool.category === "tax" && "💰"}
          {tool.category === "earning" && "💵"}
          {tool.category === "cost" && "📈"}
          {tool.category === "retirement" && "🏦"}
        </div>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full">
            {tool.category.toUpperCase()}
          </span>
          <span className="text-xs text-green-600 font-medium">• FREE • 2026</span>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight mb-4 line-clamp-2">
          {tool.title}
        </h3>

        <p className="text-gray-600 text-[17px] leading-relaxed flex-1 line-clamp-3">
          {tool.description}
        </p>
      </div>

      {/* Footer / CTA */}
      <div className="mt-auto border-t border-gray-100 px-8 py-6 bg-gray-50 flex items-center justify-between text-sm font-medium">
        <span className="text-blue-600 group-hover:text-blue-700 flex items-center gap-2 transition-colors">
          Open Calculator 
          <span className="group-hover:translate-x-1 transition">→</span>
        </span>
        <span className="text-emerald-600 text-xs font-semibold">INSTANT</span>
      </div>
    </Link>
  );
}