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

  lastUpdated: string;             // "April 2026" — display only
  lastModified: Date;              // Exact date for sitemap — update whenever you change the tool
  popularity: number;              // 1-10 scale
  featured?: boolean;              // Show on homepage
  estimatedTime?: string;          // "30 sec", "1 min"

  icon?: string;
  tags?: string[];
}

export const allTools: Tool[] = [
  // ==================== EARNING TOOLS ====================

  {
    slug: "capital-gains-tax-calculator",
    title: "Capital Gains Tax Calculator 2026 – Stock & Crypto Taxes",
    shortTitle: "Capital Gains Calculator",
    description: "Calculate your short-term and long-term capital gains tax for stocks, crypto, and real estate investments.",
    category: "tax",
    metaTitle: "Capital Gains Tax Calculator 2026 | Stock & Crypto Tax Estimator",
    metaDescription: "Estimate your 2026 capital gains tax. Calculate taxes on stocks, cryptocurrency, and real estate. Compares short-term vs long-term tax rates.",
    keywords: ["capital gains tax calculator", "crypto tax calculator", "stock tax calculator", "short term vs long term capital gains", "investment tax calculator"],
    lastUpdated: "July 2026",
    lastModified: new Date("2026-07-28"),
    popularity: 9,
    featured: true,
    estimatedTime: "2 min",
  },
  {
    slug: "hourly-to-salary-calculator",
    title: "Hourly to Salary Calculator – Convert Hourly Wage to Annual Salary Instantly",
    shortTitle: "Hourly to Salary",
    description: "Convert hourly wage to annual salary instantly. Calculate yearly, monthly, and weekly income with overtime, taxes, and real take-home estimates.",
    category: "earning",
    metaTitle: "Hourly to Salary Calculator (2026) – Convert Hourly Wage to Annual Salary",
    metaDescription: "Free hourly to salary calculator. Convert hourly pay to yearly, monthly, and weekly income with overtime, taxes, and real take-home estimates. Fast & accurate.",
    keywords: [
      "hourly to salary calculator",
      "hourly wage to annual salary",
      "convert hourly to yearly salary",
      "hourly to monthly salary calculator",
      "hourly to weekly pay calculator",
      "salary calculator hourly rate",
      "convert hourly wage to salary",
      "take home pay hourly to salary",
      "overtime hourly to salary calculator",
      "2026 salary calculator",
    ],
    lastUpdated: "July 2026",
    lastModified: new Date("2026-07-23"),
    popularity: 9,
    featured: true,
    estimatedTime: "30 sec",
  },

  {
    slug: "salary-to-hourly-calculator",
    title: "Salary to Hourly Calculator 2026",
    shortTitle: "Salary to Hourly",
    description: "Convert annual salary to hourly wage with accurate breakdowns and tax estimates.",
    category: "earning",
    metaTitle: "Salary to Hourly Calculator 2026 | Convert Annual to Hourly Wage",
    metaDescription: "Instantly convert your yearly salary to hourly rate with tax and overtime options for 2026.",
    keywords: ["salary to hourly calculator", "annual salary to hourly wage", "convert salary to hourly"],
    lastUpdated: "July 2026",
    lastModified: new Date("2026-07-23"),
    popularity: 9,
    featured: true,
    estimatedTime: "30 sec",
  },

  {
    slug: "overtime-calculator",
    title: "Overtime Pay Calculator 2026",
    shortTitle: "Overtime Pay",
    description: "Calculate 1.5x time and half + 2x double time overtime pay with tax estimates.",
    category: "earning",
    metaTitle: "Overtime Pay Calculator 2026 – 1.5x Time & Half + Double Pay",
    metaDescription: "Free overtime calculator for 1.5x and 2x rates with weekly, monthly, and yearly earnings breakdowns.",
    keywords: ["overtime calculator", "overtime pay calculator", "1.5x overtime", "time and half calculator", "double time pay"],
    lastUpdated: "July 2026",
    lastModified: new Date("2026-07-23"),
    popularity: 9,
    featured: true,
    estimatedTime: "40 sec",
  },

  {
    slug: "time-and-half-calculator",
    title: "Time and a Half Calculator 2026",
    shortTitle: "Time & Half",
    description: "Accurate 1.5x overtime pay calculator with tax and full earnings breakdown.",
    category: "earning",
    metaTitle: "Time and a Half Calculator 2026 | 1.5x Overtime Pay",
    metaDescription: "Calculate time and a half (1.5x) overtime earnings instantly with tax estimates for 2026.",
    keywords: ["time and a half calculator", "1.5x overtime pay", "time and half pay calculator"],
    lastUpdated: "July 2026",
    lastModified: new Date("2026-07-23"),
    popularity: 8,
    featured: true,
    estimatedTime: "35 sec",
  },

  {
    slug: "uber-earnings-calculator",
    title: "Uber Earnings Calculator 2026",
    shortTitle: "Uber Calculator",
    description: "Estimate your Uber driver earnings after expenses, taxes, and platform fees.",
    category: "earning",
    metaTitle: "Uber Earnings Calculator 2026 - Driver Income Estimator",
    metaDescription: "Calculate your Uber earnings, expenses, and net profit with our free Uber driver calculator.",
    keywords: [
      "uber earnings calculator",
      "uber driver income",
      "uber profit calculator",
      "rideshare earnings calculator",
      "uber salary estimator",
    ],
    lastUpdated: "March 2026",
    lastModified: new Date("2026-03-10"),
    popularity: 9,
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
      "delivery driver earnings",
    ],
    lastUpdated: "March 2026",
    lastModified: new Date("2026-03-10"),
    popularity: 9,
  },

  // ==================== TAX TOOLS ====================

  {
    slug: "self-employment-tax-calculator-usa",
    title: "Self-Employment Tax Calculator 2026 (1099 & Freelance)",
    shortTitle: "Self-Employment Tax",
    description: "Calculate your 2026 IRS self-employment tax, including Medicare and Social Security for 1099 contractors.",
    category: "tax",
    metaTitle: "Self-Employment Tax Calculator 2026 | Free 1099 IRS Tools",
    metaDescription: "Instantly calculate your 2026 self-employment tax. See exact IRS Schedule SE math, Medicare, and Social Security for 1099 independent contractors.",
    keywords: ["self employment tax calculator", "1099 tax calculator", "freelance tax calculator", "schedule se calculator 2026", "independent contractor tax"],
    lastUpdated: "July 2026",
    lastModified: new Date("2026-07-28"),
    popularity: 10,
    featured: true,
    estimatedTime: "2 min",
  },
  
  {
    slug: "1099-tax-calculator",
    title: "1099 Tax Calculator 2026 – Freelance & Contractor Taxes",
    shortTitle: "1099 Tax Calculator",
    description: "Calculate your total 1099 taxes including Federal, State, and Self-Employment tax. See your true net take-home pay.",
    category: "tax",
    metaTitle: "1099 Tax Calculator 2026 | Freelance & Independent Contractor",
    metaDescription: "Estimate your 1099 taxes for 2026. Instantly calculate Federal, State, and Self-Employment taxes to find your true freelance net income.",
    keywords: ["1099 tax calculator", "freelance tax calculator", "independent contractor tax calculator 2026", "self employment tax estimate", "gig worker tax calculator"],
    lastUpdated: "July 2026",
    lastModified: new Date("2026-07-28"),
    popularity: 9,
    featured: true,
    estimatedTime: "3 min",
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
    lastModified: new Date("2026-03-15"),
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
    lastModified: new Date("2026-03-15"),
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
    lastModified: new Date("2026-03-20"),
    popularity: 9,
  },

  {
    slug: "auto-loan-calculator",
    title: "Auto Loan Calculator 2026 – Out-The-Door Car Payment",
    shortTitle: "Auto Loan Calculator",
    description: "Calculate your true out-the-door monthly car payment including trade-ins, sales tax, and dealership fees.",
    category: "cost",
    metaTitle: "Auto Loan Calculator with Taxes & Fees | 2026 Car Payment Estimator",
    metaDescription: "Estimate your total monthly car payment. Automatically calculates trade-in tax savings, dealership fees, and amortization schedules for 2026 car buyers.",
    keywords: ["auto loan calculator", "car payment calculator", "car loan tax and fees calculator", "out the door car price calculator", "car loan amortization"],
    lastUpdated: "July 2026",
    lastModified: new Date("2026-07-28"),
    popularity: 9,
    featured: true,
    estimatedTime: "2 min",
  },
  {
    slug: "mortgage-calculator",
    title: "Mortgage Calculator 2026 – PITI, Taxes & Insurance",
    shortTitle: "Mortgage Calculator",
    description: "Calculate your true monthly mortgage payment including principal, interest, property taxes, homeowners insurance, and PMI.",
    category: "cost",
    metaTitle: "Mortgage Calculator with Taxes & Insurance | 2026 PITI Estimator",
    metaDescription: "Estimate your total monthly mortgage payment (PITI). Automatically calculates PMI, property taxes, and amortization schedules for 2026 homebuyers.",
    keywords: ["mortgage calculator", "home loan calculator", "PITI calculator", "mortgage payment with taxes and insurance", "PMI calculator 2026"],
    lastUpdated: "July 2026",
    lastModified: new Date("2026-07-28"),
    popularity: 9,
    featured: true,
    estimatedTime: "3 min",
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
    lastModified: new Date("2026-03-20"),
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
    lastModified: new Date("2026-03-20"),
    popularity: 8,
  },

  // ==================== RETIREMENT TOOLS ====================

  {
    slug: "401k-calculator",
    title: "401(k) Calculator & Employer Match Estimator 2026",
    shortTitle: "401(k) Calculator",
    description: "Calculate your future 401(k) balance, investment growth, and see how much free money you get from your employer match.",
    category: "retirement",
    metaTitle: "401(k) Calculator 2026 - Employer Match & Growth Estimator",
    metaDescription: "Free 401(k) retirement calculator. Estimate your future balance, employer match contributions, and compound interest growth over time.",
    keywords: ["401k calculator", "employer match calculator", "retirement calculator", "401k growth calculator", "401k match"],
    lastUpdated: "July 2026",
    lastModified: new Date("2026-07-28"),
    popularity: 10,
    featured: true,
    estimatedTime: "1 min",
  },

  {
    slug: "roth-ira-calculator",
    title: "Roth IRA Calculator 2026 – Tax-Free Growth Estimator",
    shortTitle: "Roth IRA Calculator",
    description: "Estimate your Roth IRA balance at retirement. See how your tax-free compound interest grows over decades.",
    category: "retirement",
    metaTitle: "Roth IRA Calculator 2026 | Tax-Free Retirement Growth",
    metaDescription: "Free Roth IRA calculator. Estimate your future retirement balance and see how tax-free compound interest accelerates your wealth.",
    keywords: ["roth ira calculator", "roth ira growth calculator", "tax-free retirement calculator", "roth ira contribution limit 2026", "ira investment calculator"],
    lastUpdated: "July 2026",
    lastModified: new Date("2026-07-28"),
    popularity: 9,
    featured: true,
    estimatedTime: "1 min",
  },

  {
    slug: "compound-interest-calculator",
    title: "Compound Interest Calculator 2026 – Investment Growth Estimator",
    shortTitle: "Compound Interest",
    description: "Calculate how your money can grow over time with the power of compound interest. See the impact of regular contributions and returns.",
    category: "retirement",
    metaTitle: "Compound Interest Calculator | Daily, Monthly, Yearly Growth",
    metaDescription: "Free compound interest calculator. Discover how your investments will grow over time with regular contributions, daily or monthly compounding.",
    keywords: ["compound interest calculator", "investment growth calculator", "future value calculator", "compound interest formula", "wealth calculator"],
    lastUpdated: "July 2026",
    lastModified: new Date("2026-07-28"),
    popularity: 9,
    featured: true,
    estimatedTime: "2 min",
  },

  {
    slug: "retirement-goal-calculator",
    title: "How Much Do I Need to Retire? Calculator (FIRE 2026)",
    shortTitle: "Retirement Goal Calculator",
    description: "Calculate exactly how much money you need to retire based on the 4% rule, accounting for inflation and investment returns.",
    category: "retirement",
    metaTitle: "How Much Do I Need to Retire? Calculator | FIRE 2026",
    metaDescription: "Calculate exactly how much money you need to retire based on the 4% rule. Find your FIRE number and see how much you need to save per month.",
    keywords: ["how much do i need to retire", "retirement number calculator", "fire calculator", "4% rule calculator", "retirement goal calculator", "early retirement calculator"],
    lastUpdated: "July 2026",
    lastModified: new Date("2026-07-28"),
    popularity: 9,
    featured: true,
    estimatedTime: "2 min",
  },

  {
    slug: "fire-calculator",
    title: "FIRE Calculator (Financial Independence, Retire Early)",
    shortTitle: "FIRE Calculator",
    description: "Find out exactly what age you can retire. Discover your FIRE number and see how your savings rate accelerates your path to freedom.",
    category: "retirement",
    metaTitle: "FIRE Calculator 2026 | When Can I Retire Early?",
    metaDescription: "The ultimate FIRE (Financial Independence, Retire Early) calculator. Find out exactly what age you can quit your job based on your savings rate.",
    keywords: ["fire calculator", "financial independence retire early", "when can i retire", "early retirement calculator", "lean fire calculator", "fat fire calculator"],
    lastUpdated: "July 2026",
    lastModified: new Date("2026-07-28"),
    popularity: 10,
    featured: true,
    estimatedTime: "2 min",
  },
];

export const popularTools = allTools
  .filter((tool) => tool.featured || tool.popularity >= 8)
  .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
  .slice(0, 6);

export const taxTools = allTools.filter((tool) => tool.category === "tax");
export const earningTools = allTools.filter((tool) => tool.category === "earning");
export const costTools = allTools.filter((tool) => tool.category === "cost");
export const retirementTools = allTools.filter((tool) => tool.category === "retirement");

export const getToolBySlug = (slug: string): Tool | undefined => {
  return allTools.find((tool) => tool.slug === slug);
};