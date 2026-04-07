// components/ui/ToolCard.tsx
import Link from "next/link";
import { Tool } from "@/types";
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  PiggyBank, 
  ArrowRight, 
  Zap, 
  Shield, 
  Clock 
} from "lucide-react";

interface ToolCardProps {
  tool: Tool;
  className?: string;
}

export default function ToolCard({ tool, className = "" }: ToolCardProps) {
  
  const getCategoryStyle = (category: string) => {
    switch (category.toLowerCase()) {
      case 'tax':
        return {
          icon: Calculator,
          gradient: "from-blue-600 to-indigo-700",
          accent: "text-blue-600",
          light: "bg-blue-50",
        };
      case 'earning':
        return {
          icon: TrendingUp,
          gradient: "from-emerald-600 to-teal-700",
          accent: "text-emerald-600",
          light: "bg-emerald-50",
        };
      case 'cost':
        return {
          icon: DollarSign,
          gradient: "from-amber-600 to-orange-700",
          accent: "text-amber-600",
          light: "bg-amber-50",
        };
      case 'retirement':
        return {
          icon: PiggyBank,
          gradient: "from-purple-600 to-violet-700",
          accent: "text-purple-600",
          light: "bg-purple-50",
        };
      default:
        return {
          icon: Calculator,
          gradient: "from-indigo-600 to-blue-700",
          accent: "text-indigo-600",
          light: "bg-indigo-50",
        };
    }
  };

  const style = getCategoryStyle(tool.category);
  const IconComponent = style.icon;

  return (
    <Link 
      href={`/${tool.slug}`}
      className={`group relative bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:border-slate-300 ${className}`}
    >
      {/* Hero Visual Section */}
      <div className={`h-52 relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${style.gradient}`}>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:24px_24px]" />

        {/* Main Icon Container */}
        <div className="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-2xl rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6">
          <IconComponent className="w-14 h-14 text-white" strokeWidth={1.75} />
        </div>

        {/* Verified Badge */}
        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-2xl shadow-md flex items-center gap-2 text-xs font-semibold text-slate-700">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          2026
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-7 flex flex-col">
        {/* Category */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-semibold w-fit ${style.light} ${style.accent}`}>
          <IconComponent className="w-4 h-4" />
          {tool.category.toUpperCase()}
        </div>

        {/* Title - SEO Friendly */}
        <h3 className="mt-5 text-2xl font-semibold leading-tight text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-2 min-h-[3.2rem]">
          {tool.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-slate-600 text-[15.2px] leading-relaxed line-clamp-3 flex-1">
          {tool.description}
        </p>

        {/* Features Bar */}
        <div className="mt-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-slate-500">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Instant</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>Private</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>30 sec</span>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="px-7 py-6 border-t border-slate-100 bg-slate-50 group-hover:bg-slate-100 transition-colors flex items-center justify-between">
        <span className="font-semibold text-slate-900 group-hover:text-indigo-600 flex items-center gap-2 transition-colors">
          Open Calculator
        </span>
        
        <div className="flex items-center justify-center w-9 h-9 rounded-2xl bg-white shadow group-hover:bg-indigo-600 group-hover:text-white transition-all">
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}