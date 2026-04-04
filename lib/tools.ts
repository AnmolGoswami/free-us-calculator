// lib/tools.ts
// Central Tools Registry - SEO Optimized & Scalable

export interface Tool {
  slug: string;                    // URL-friendly slug (must match folder name)
  title: string;                   // Main display title
  shortTitle?: string;             // Shorter title for cards
  description: string;             // Short description for cards
  longDescription?: string;        // Optional detailed description for tool page
  category: "tax" | "earning" | "cost" | "retirement";
  
  // SEO Fields
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  
  lastUpdated: string;             // "April 2026"
  popularity: number;              // 1-10 scale
  featured?: boolean;              // Show on homepage
  estimatedTime?: string;          // "30 sec", "1 min"
  
  icon?: string;
  tags?: string[];
}

export const allTools: Tool[] = [
  // ==================== EARNING TOOLS ====================

  {
    slug: "hourly-to-salary-calculator",
    title: "Hourly to Salary Calculator 2026",
    shortTitle: "Hourly to Salary",
    description: "Convert hourly wage to annual salary with overtime, benefits, and taxes.",
    category: "earning",
    metaTitle: "Hourly to Salary Calculator 2026 - Free Wage Converter",
    metaDescription: "Convert your hourly rate to yearly, monthly, weekly salary including overtime and tax estimates for 2026.",
    keywords: ["hourly to salary calculator", "hourly wage to salary", "hourly to annual salary", "2026 salary calculator"],
    lastUpdated: "April 2026",
    popularity: 9,
    featured: true,
    estimatedTime: "30 sec",
  },

  {
    slug: "salary-to-hourly",
    title: "Salary to Hourly Calculator 2026",
    shortTitle: "Salary to Hourly",
    description: "Convert annual salary to hourly wage with accurate breakdowns and tax estimates.",
    category: "earning",
    metaTitle: "Salary to Hourly Calculator 2026 | Convert Annual to Hourly Wage",
    metaDescription: "Instantly convert your yearly salary to hourly rate with tax and overtime options for 2026.",
    keywords: ["salary to hourly calculator", "annual salary to hourly wage", "convert salary to hourly"],
    lastUpdated: "April 2026",
    popularity: 9,
    featured: true,
    estimatedTime: "30 sec",
  },

  {
    slug: "overtime",
    title: "Overtime Pay Calculator 2026",
    shortTitle: "Overtime Pay",
    description: "Calculate 1.5x time and half + 2x double time overtime pay with tax estimates.",
    category: "earning",
    metaTitle: "Overtime Pay Calculator 2026 – 1.5x Time & Half + Double Pay",
    metaDescription: "Free overtime calculator for 1.5x and 2x rates with weekly, monthly, and yearly earnings breakdowns.",
    keywords: ["overtime calculator", "overtime pay calculator", "1.5x overtime", "time and half calculator", "double time pay"],
    lastUpdated: "April 2026",
    popularity: 9,
    featured: true,
    estimatedTime: "40 sec",
  },

  {
    slug: "time-and-half",
    title: "Time and a Half Calculator 2026",
    shortTitle: "Time & Half",
    description: "Accurate 1.5x overtime pay calculator with tax and full earnings breakdown.",
    category: "earning",
    metaTitle: "Time and a Half Calculator 2026 | 1.5x Overtime Pay",
    metaDescription: "Calculate time and a half (1.5x) overtime earnings instantly with tax estimates for 2026.",
    keywords: ["time and a half calculator", "1.5x overtime pay", "time and half pay calculator"],
    lastUpdated: "April 2026",
    popularity: 8,
    featured: true,
    estimatedTime: "35 sec",
  },

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
    shortTitle: "Paycheck Calculator",
    description: "Accurate USA paycheck estimator with state tax, SDI, and local deductions.",
    category: "tax",
    metaTitle: "Paycheck Calculator 2026 - Free Pay Stub Tool",
    metaDescription: "Best free paycheck calculator for 2026 with state income tax, SDI, and FICA deductions.",
    keywords: ["paycheck calculator usa", "usa paycheck calculator"],
    lastUpdated: "March 2026",
    popularity: 9,
    featured: true,
    estimatedTime: "40 sec",
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

  // ==================== RETIREMENT TOOLS ====================
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
  {
  slug: "doordash-earnings-calculator",
  title: "DoorDash Earnings Calculator 2026",
  shortTitle: "DoorDash Calculator",
  description: "Estimate your DoorDash earnings based on hours, orders, tips, and expenses.",
  category: "earning",
  metaTitle: "DoorDash Earnings Calculator 2026 – Driver Income Estimator",
  metaDescription: "Calculate how much you can earn with DoorDash. Include tips, hourly rate, expenses, and net profit.",
  keywords: [
    "doordash calculator",
    "doordash earnings calculator",
    "dasher income calculator",
    "gig economy earnings calculator",
    "delivery driver earnings"
  ],
  lastUpdated: "March 2026",
  popularity: 9,
}
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