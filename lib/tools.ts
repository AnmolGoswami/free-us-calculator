// lib/tools.ts
// Central Tools Registry - SEO Optimized & Scalable

export interface Tool {
  slug: string;                    // URL-friendly slug
  title: string;                   // Main display title
  shortTitle?: string;             // Shorter title for cards
  description: string;             // Short description for cards
  longDescription?: string;        // Optional detailed description for tool page
  category: "tax" | "earning" | "cost" | "retirement";
  
  // SEO Fields (Very Important for Google Ranking & AdSense)
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  
  lastUpdated: string;             // "March 2026" or "2026"
  popularity: number;              // 1-10 scale for sorting
  featured?: boolean;              // Show on homepage hero or featured section
  estimatedTime?: string;          // "30 sec", "1 min" etc.
  
  // Future proofing
  icon?: string;                   // Can be used later for custom icons
  tags?: string[];
}

export const allTools: Tool[] = [
  // ==================== TAX TOOLS ====================
  {
    slug: "self-employment-tax-calculator-usa",
    title: "Self Employment Tax Calculator USA 2026",
    shortTitle: "Self Employment Tax",
    description: "Calculate your full self-employment tax including Social Security and Medicare with latest 2026 rates.",
    category: "tax",
    metaTitle: "Self Employment Tax Calculator 2026 - Free SE Tax Tool",
    metaDescription: "Free 2026 self-employment tax calculator. Instantly calculate SE tax, Social Security, Medicare, and deductible portion.",
    keywords: ["self employment tax calculator", "se tax calculator 2026", "self employed tax", "1099 tax calculator"],
    lastUpdated: "March 2026",
    popularity: 10,
    featured: true,
    estimatedTime: "45 sec",
  },
  {
    slug: "salary-after-tax-calculator",
    title: "Salary After Tax Calculator 2026",
    shortTitle: "Salary After Tax",
    description: "See exactly how much you'll take home after federal, state, and FICA taxes in 2026.",
    category: "tax",
    metaTitle: "Salary After Tax Calculator 2026 - Take Home Pay Estimator",
    metaDescription: "Calculate your net paycheck after taxes using 2026 federal and state tax brackets.",
    keywords: ["salary after tax calculator", "take home pay calculator", "net salary calculator"],
    lastUpdated: "March 2026",
    popularity: 10,
    featured: true,
    estimatedTime: "30 sec",
  },
  {
    slug: "paycheck-calculator",
    title: "Paycheck Calculator 2026",
    shortTitle: "CA Paycheck Calculator",
    description: "Accurate Usa paycheck estimator with state tax, SDI, and local deductions.",
    category: "tax",
    metaTitle: "Paycheck Calculator 2026 - Free CA Pay Stub Tool",
    metaDescription: "Best free California paycheck calculator for 2026 with state income tax, SDI, and FICA deductions.",
    keywords: ["paycheck calculator usa", "usa paycheck calculator", "ca pay stub calculator"],
    lastUpdated: "March 2026",
    popularity: 9,
    featured: true,
    estimatedTime: "40 sec",
  },

  // ==================== EARNING TOOLS ====================
  {
    slug: "uber-earnings-calculator",
    title: "Uber Earnings Calculator 2026",
    shortTitle: "Uber Earnings",
    description: "Estimate real earnings as an Uber driver after expenses, gas, and fees.",
    category: "earning",
    metaTitle: "Uber Earnings Calculator 2026 - Driver Income Estimator",
    metaDescription: "Calculate your actual Uber driver earnings after expenses, bonuses, and platform fees in 2026.",
    keywords: ["uber earnings calculator", "uber driver pay calculator", "uber income estimator"],
    lastUpdated: "March 2026",
    popularity: 9,
    estimatedTime: "1 min",
  },
  {
    slug: "doordash-earnings-calculator",
    title: "DoorDash Earnings Calculator 2026",
    shortTitle: "DoorDash Earnings",
    description: "Estimate your real income as a DoorDash dasher including tips and peak hours.",
    category: "earning",
    metaTitle: "DoorDash Earnings Calculator 2026 - Dasher Pay Estimator",
    metaDescription: "Free DoorDash earnings calculator for 2026. Calculate weekly and monthly income accurately.",
    keywords: ["doordash earnings calculator", "doordash dasher pay", "door dash income calculator"],
    lastUpdated: "March 2026",
    popularity: 8,
    estimatedTime: "50 sec",
  },
  {
    slug: "hourly-to-salary-calculator",
    title: "Hourly to Salary Calculator",
    shortTitle: "Hourly to Salary",
    description: "Convert hourly wage to annual salary with overtime, benefits, and taxes.",
    category: "earning",
    metaTitle: "Hourly to Salary Calculator - Free Wage Converter 2026",
    metaDescription: "Convert your hourly rate to yearly salary including overtime and benefits.",
    keywords: ["hourly to salary calculator", "hourly wage to salary"],
    lastUpdated: "March 2026",
    popularity: 7,
  },

  // ==================== COST & SAVINGS TOOLS ====================
  {
    slug: "rent-affordability-calculator",
    title: "Rent Affordability Calculator 2026",
    shortTitle: "Rent Affordability",
    description: "Find out how much rent you can safely afford based on your income.",
    category: "cost",
    metaTitle: "Rent Affordability Calculator - How Much Rent Can I Afford?",
    metaDescription: "Free rent affordability calculator using 30% rule and realistic budgeting for 2026.",
    keywords: ["rent affordability calculator", "how much rent can i afford"],
    lastUpdated: "March 2026",
    popularity: 9,
  },
  {
    slug: "loan-calculator",
    title: "Loan EMI Calculator 2026",
    shortTitle: "Loan Calculator",
    description: "Calculate monthly EMI, total interest, and full repayment schedule.",
    category: "cost",
    metaTitle: "Loan Calculator & EMI Calculator 2026",
    metaDescription: "Free loan EMI calculator for personal, car, and home loans with amortization schedule.",
    keywords: ["loan calculator", "emi calculator", "monthly loan payment calculator"],
    lastUpdated: "March 2026",
    popularity: 9,
  },
  {
    slug: "savings-calculator",
    title: "Savings & Compound Interest Calculator 2026",
    shortTitle: "Savings Calculator",
    description: "See how fast your savings will grow with compound interest.",
    category: "cost",
    metaTitle: "Compound Interest & Savings Calculator 2026",
    metaDescription: "Calculate future savings value with monthly contributions and compound interest.",
    keywords: ["savings calculator", "compound interest calculator"],
    lastUpdated: "March 2026",
    popularity: 8,
  },

  // Add more high-value tools (Recommended)
  {
    slug: "401k-calculator",
    title: "401(k) Retirement Calculator 2026",
    shortTitle: "401k Calculator",
    description: "Plan your retirement savings with employer match and compound growth.",
    category: "retirement",
    metaTitle: "401(k) Calculator 2026 - Retirement Savings Planner",
    metaDescription: "Free 401k calculator to plan your retirement with employer matching and growth projections.",
    keywords: ["401k calculator", "retirement calculator", "401k savings calculator"],
    lastUpdated: "March 2026",
    popularity: 8,
  },
];

export const popularTools = allTools
  .filter(tool => tool.featured || tool.popularity >= 8)
  .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
  .slice(0, 6);

export const taxTools = allTools.filter(tool => tool.category === "tax");
export const earningTools = allTools.filter(tool => tool.category === "earning");
export const costTools = allTools.filter(tool => tool.category === "cost");
export const retirementTools = allTools.filter(tool => tool.category === "retirement");

export const getToolBySlug = (slug: string): Tool | undefined => {
  return allTools.find(tool => tool.slug === slug);
};