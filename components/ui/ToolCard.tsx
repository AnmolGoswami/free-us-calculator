// components/ui/ToolCard.tsx
import Link from "next/link";
import { Tool } from "@/types";

interface ToolCardProps {
  tool: Tool;
  className?: string; // Added to support layout flexibility
}

export default function ToolCard({ tool, className = "" }: ToolCardProps) {
  // Mapping categories to specific styles for better visual recognition
  const categoryStyles = {
    tax: { emoji: "💰", color: "bg-blue-100 text-blue-700", border: "hover:border-blue-500" },
    earning: { emoji: "💵", color: "bg-emerald-100 text-emerald-700", border: "hover:border-emerald-500" },
    cost: { emoji: "📈", color: "bg-indigo-100 text-indigo-700", border: "hover:border-indigo-500" },
    retirement: { emoji: "🏦", color: "bg-amber-100 text-amber-700", border: "hover:border-amber-500" },
  };

  const currentStyle = categoryStyles[tool.category as keyof typeof categoryStyles] || categoryStyles.tax;

  return (
    <Link 
      href={`/${tool.slug}`}
      className={`group relative bg-white border border-slate-200 rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] ${currentStyle.border} ${className}`}
    >
      {/* Visual Header */}
      <div className="relative h-40 flex items-center justify-center overflow-hidden bg-slate-50">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-100/50 to-slate-200/30 group-hover:scale-110 transition-transform duration-700" />
        
        {/* Floating Icon with Shadow */}
        <div className="relative z-10 text-6xl drop-shadow-xl transition-all duration-500 group-hover:scale-125 group-hover:-rotate-6">
          {currentStyle.emoji}
        </div>

        {/* Decorative Badge */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md border border-white px-3 py-1 rounded-full shadow-sm">
          <span className="text-[10px] font-bold text-slate-500 tracking-tighter uppercase italic">Verified 2026</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-7 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-lg ${currentStyle.color}`}>
            {tool.category}
          </span>
          <div className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="text-[11px] font-bold text-slate-400 uppercase">3 min read</span>
        </div>

        {/* SEO Title: Using h3 is crucial for page hierarchy */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-3">
          {tool.title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
          {tool.description}
        </p>

        {/* Features Preview (Small visual cues for utility) */}
        <div className="mt-auto flex flex-wrap gap-2">
           <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
             ⚡ FAST
           </div>
           <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
             🛡️ PRIVATE
           </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-7 py-5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between group-hover:bg-white transition-colors duration-300">
        <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
          Calculate Now
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2 text-blue-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}