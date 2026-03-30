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
      className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-indigo-300 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="p-8 flex-1">
        <div className="flex items-center justify-between mb-6">
          <span className="text-4xl">
            {tool.category === "tax" && "💰"}
            {tool.category === "earning" && "🚀"}
            {tool.category === "cost" && "📊"}
          </span>
          <span className="text-xs font-medium uppercase tracking-widest px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
            {tool.category.toUpperCase()}
          </span>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-3">
          {tool.title}
        </h3>

        <p className="text-gray-600 text-[17px] leading-relaxed line-clamp-3">
          {tool.description}
        </p>
      </div>

      <div className="border-t border-gray-100 px-8 py-5 bg-gray-50 flex items-center justify-between text-sm">
        <span className="text-indigo-600 font-medium group-hover:underline">
          Use Calculator →
        </span>
        <span className="text-green-600 text-xs font-medium">FREE • 2026</span>
      </div>
    </Link>
  );
}