// lib/tools.ts
// Central registry for all calculators - Easy to maintain and scale

export interface Tool {
  slug: string;                    // Used in URL: /self-employment-tax-calculator-usa
  title: string;                   // Display title on cards and pages
  shortTitle?: string;             // Optional shorter version for cards
  description: string;             // Short description for homepage cards
  category: "tax" | "earning" | "cost";
  metaTitle: string;               // SEO-optimized page title
  metaDescription: string;         // SEO meta description (important for Google)
  keywords: string[];              // Additional keywords for better ranking
  lastUpdated: string;             // "2026" or full date
  popularity?: number;             // Optional: for sorting popular tools (1-10)
}

// All Tools Registry
export const allTools: Tool[] = [
  {
    slug: "self-employment-tax-calculator-usa",
    title: "Self Employment Tax Calculator USA 2026",
    shortTitle: "Self Employment Tax",
    description: "Calculate your 15.3% self-employment tax including Social Security and Medicare with 2026 rates.",
    category: "tax",
    metaTitle: "Self Employment Tax Calculator USA 2026 (Free Tool)",
    metaDescription: "Free self-employment tax calculator for 2026. Instantly calculate SE tax, Social Security, and Medicare for freelancers and small business owners.",
    keywords: ["self employment tax calculator", "se tax calculator 2026", "self employed tax usa"],
    lastUpdated: "2026",
    popularity: 10,
  },
  {
    slug: "salary-after-tax-calculator",
    title: "Salary After Tax Calculator 2026",
    shortTitle: "Salary After Tax",
    description: "See your take-home pay after federal taxes, FICA, and deductions using 2026 tax brackets.",
    category: "tax",
    metaTitle: "Salary After Tax Calculator 2026 - Free Take Home Pay Estimator",
    metaDescription: "Calculate your net salary after federal income tax, Social Security, and Medicare. Updated for 2026 tax brackets.",
    keywords: ["salary after tax calculator", "take home pay calculator", "net salary calculator 2026"],
    lastUpdated: "2026",
    popularity: 9,
  },
  {
    slug: "paycheck-calculator-california",
    title: "Paycheck Calculator California 2026",
    shortTitle: "CA Paycheck Calculator",
    description: "California-specific paycheck estimator with state tax, SDI, and local deductions.",
    category: "tax",
    metaTitle: "Paycheck Calculator California 2026 - Free CA Pay Stub Estimator",
    metaDescription: "Accurate California paycheck calculator for 2026 including state income tax, Social Security, Medicare, and SDI.",
    keywords: ["paycheck calculator california", "ca paycheck calculator", "california pay stub"],
    lastUpdated: "2026",
    popularity: 8,
  },
  {
    slug: "uber-earnings-calculator",
    title: "Uber Earnings Calculator 2026",
    shortTitle: "Uber Earnings",
    description: "Estimate weekly and monthly earnings as an Uber driver including tips, bonuses, and expenses.",
    category: "earning",
    metaTitle: "Uber Earnings Calculator - Driver Pay Estimator 2026",
    metaDescription: "Calculate your real Uber driver earnings after expenses, gas, and platform fees. Perfect for Uber drivers in 2026.",
    keywords: ["uber earnings calculator", "uber driver pay", "uber income calculator"],
    lastUpdated: "2026",
    popularity: 9,
  },
  {
    slug: "doordash-earnings-calculator",
    title: "DoorDash Earnings Calculator 2026",
    shortTitle: "DoorDash Earnings",
    description: "Estimate your DoorDash dasher pay including base pay, tips, promotions, and peak hours.",
    category: "earning",
    metaTitle: "DoorDash Earnings Calculator - Dasher Pay Estimator 2026",
    metaDescription: "Free DoorDash earnings calculator. Estimate your weekly and monthly income as a DoorDash driver in 2026.",
    keywords: ["doordash earnings calculator", "doordash dasher pay", "door dash income"],
    lastUpdated: "2026",
    popularity: 8,
  },
  {
    slug: "hourly-to-salary-calculator",
    title: "Hourly to Salary Calculator",
    shortTitle: "Hourly to Salary",
    description: "Convert your hourly wage to annual salary with overtime and benefits consideration.",
    category: "earning",
    metaTitle: "Hourly to Salary Calculator - Free Wage Converter",
    metaDescription: "Easily convert hourly rate to yearly salary. Includes overtime, paid time off, and benefits estimates.",
    keywords: ["hourly to salary calculator", "hourly wage to salary"],
    lastUpdated: "2026",
    popularity: 7,
  },
  {
    slug: "salary-to-hourly-calculator",
    title: "Salary to Hourly Calculator",
    shortTitle: "Salary to Hourly",
    description: "Convert your annual salary into equivalent hourly rate for comparison.",
    category: "earning",
    metaTitle: "Salary to Hourly Calculator - Free Converter",
    metaDescription: "Convert yearly salary to hourly rate instantly. Useful for job negotiations and part-time comparisons.",
    keywords: ["salary to hourly calculator", "annual salary to hourly"],
    lastUpdated: "2026",
    popularity: 7,
  },
  {
    slug: "rent-affordability-calculator",
    title: "Rent Affordability Calculator",
    shortTitle: "Rent Affordability",
    description: "Find out how much rent you can realistically afford based on the 30% rule and your income.",
    category: "cost",
    metaTitle: "Rent Affordability Calculator - How Much Rent Can I Afford?",
    metaDescription: "Free rent affordability calculator using the 30% rule. See how much monthly rent fits your budget in 2026.",
    keywords: ["rent affordability calculator", "how much rent can i afford"],
    lastUpdated: "2026",
    popularity: 8,
  },
  {
    slug: "loan-calculator",
    title: "Loan Calculator 2026",
    shortTitle: "Loan Calculator",
    description: "Calculate monthly EMI, total interest, and repayment schedule for personal, auto, or home loans.",
    category: "cost",
    metaTitle: "Free Loan Calculator - EMI Calculator 2026",
    metaDescription: "Calculate monthly loan payments, total interest, and amortization schedule. Supports different loan types.",
    keywords: ["loan calculator", "emi calculator", "monthly loan payment"],
    lastUpdated: "2026",
    popularity: 9,
  },
  {
    slug: "savings-calculator",
    title: "Savings Calculator 2026",
    shortTitle: "Savings Calculator",
    description: "Calculate compound interest and future value of your monthly savings with different interest rates.",
    category: "cost",
    metaTitle: "Savings Calculator - Compound Interest & Future Value 2026",
    metaDescription: "Plan your savings growth with our free compound interest calculator. See how your money grows over time.",
    keywords: ["savings calculator", "compound interest calculator", "future value calculator"],
    lastUpdated: "2026",
    popularity: 7,
  },
];

// Helper functions for easy access
export const popularTools = allTools
  .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
  .slice(0, 6);

export const taxTools = allTools.filter(tool => tool.category === "tax");
export const earningTools = allTools.filter(tool => tool.category === "earning");
export const costTools = allTools.filter(tool => tool.category === "cost");

export const getToolBySlug = (slug: string): Tool | undefined => {
  return allTools.find(tool => tool.slug === slug);
};