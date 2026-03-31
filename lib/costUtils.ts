// lib/costUtils.ts
// Real US Financial Calculators - Accurate & Trusted (2026 Standards)

/** ====================== INTERFACES ====================== */

export interface LoanEMIResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  principal: number;
  interestPercentage: number;
}

export interface SavingsFutureValueResult {
  futureValue: number;
  totalContributions: number;
  totalInterest: number;
  interestPercentage: number;
}

export interface RentAffordabilityResult {
  recommendedRent: number;
  maxBy30Rule: number;
  maxBy35Rule: number;
  safeRent: number;           // Conservative recommendation
  monthlyIncome: number;
  otherDebts: number;
}

export interface RentVsBuyResult {
  monthlyMortgage: number;
  totalRentCost: number;
  totalMortgageCost: number;
  totalDifference: number;
  monthlyDifference: number;
  verdict: "buy" | "rent" | "neutral";
}

/** ====================== CORE FUNCTIONS ====================== */

/**
 * Loan EMI Calculator (Mortgage, Personal Loan, Auto Loan)
 * Most accurate standard formula used by Bankrate, NerdWallet, etc.
 */
export function calculateLoanEMI(
  principal: number,
  annualInterestRate: number = 6.5,   // Default ~ current 30-yr mortgage rate 2026
  tenureYears: number = 30
): LoanEMIResult {
  if (principal <= 0 || tenureYears <= 0) {
    throw new Error("Principal and tenure must be positive");
  }

  const monthlyRate = annualInterestRate / 12 / 100;
  const numberOfMonths = tenureYears * 12;

  let monthlyPayment: number;

  if (monthlyRate === 0) {
    monthlyPayment = principal / numberOfMonths;
  } else {
    const power = Math.pow(1 + monthlyRate, numberOfMonths);
    monthlyPayment = (principal * monthlyRate * power) / (power - 1);
  }

  const totalPayment = monthlyPayment * numberOfMonths;
  const totalInterest = totalPayment - principal;

  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    principal,
    interestPercentage: totalPayment > 0 
      ? Math.round((totalInterest / totalPayment) * 100 * 100) / 100 
      : 0,
  };
}

/**
 * Savings / Investment Future Value Calculator
 * Used for Emergency Fund, Retirement, College Savings
 */
export function calculateSavingsFutureValue(
  monthlyContribution: number,
  annualInterestRate: number = 7.0,   // Realistic long-term stock market return ~7%
  years: number = 10
): SavingsFutureValueResult {
  if (monthlyContribution < 0 || years <= 0) {
    throw new Error("Invalid input values");
  }

  const monthlyRate = annualInterestRate / 12 / 100;
  const totalMonths = years * 12;

  let futureValue: number;

  if (monthlyRate === 0) {
    futureValue = monthlyContribution * totalMonths;
  } else {
    futureValue = monthlyContribution * 
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
  }

  const totalContributions = monthlyContribution * totalMonths;
  const totalInterest = futureValue - totalContributions;

  return {
    futureValue: Math.round(futureValue * 100) / 100,
    totalContributions: Math.round(totalContributions * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    interestPercentage: futureValue > 0 
      ? Math.round((totalInterest / futureValue) * 100 * 100) / 100 
      : 0,
  };
}

/**
 * Rent Affordability Calculator (Real US Guidelines 2026)
 * Uses 30% rule + conservative approach (most trusted by financial experts)
 */
export function calculateRentAffordability(
  monthlyIncome: number,
  otherDebts: number = 0
): RentAffordabilityResult {
  const maxBy30Rule = monthlyIncome * 0.30;
  const maxBy35Rule = Math.max(0, monthlyIncome - otherDebts) * 0.35;

  // Conservative safe recommendation (most recommended in 2026)
  const safeRent = Math.floor(Math.min(maxBy30Rule, maxBy35Rule) * 0.9);

  return {
    recommendedRent: Math.round(safeRent),
    maxBy30Rule: Math.round(maxBy30Rule * 100) / 100,
    maxBy35Rule: Math.round(maxBy35Rule * 100) / 100,
    safeRent,
    monthlyIncome,
    otherDebts,
  };
}

/**
 * Rent vs Buy Analyzer (Realistic US Version)
 * Based on current 2026 mortgage rates (~6.5%)
 */
export function calculateRentVsBuy(
  monthlyRent: number,
  homePrice: number,
  downPaymentPercent: number = 20,
  annualInterestRate: number = 6.5,   // Current average 2026 rate
  loanYears: number = 30,
  annualPropertyTaxRate: number = 1.1, // Average US property tax
  annualInsuranceRate: number = 0.35   // Home insurance estimate
): RentVsBuyResult {
  const downPayment = (homePrice * downPaymentPercent) / 100;
  const loanAmount = homePrice - downPayment;

  const emiResult = calculateLoanEMI(loanAmount, annualInterestRate, loanYears);

  // Add property tax + insurance (real homeownership cost)
  const monthlyTax = (homePrice * annualPropertyTaxRate / 100) / 12;
  const monthlyInsurance = (homePrice * annualInsuranceRate / 100) / 12;
  const totalMonthlyOwnership = emiResult.monthlyPayment + monthlyTax + monthlyInsurance;

  const totalRentCost = monthlyRent * 12 * loanYears;
  const totalMortgageCost = totalMonthlyOwnership * 12 * loanYears;

  const totalDifference = totalMortgageCost - totalRentCost;
  const monthlyDifference = Math.round(totalDifference / (loanYears * 12));

  let verdict: "buy" | "rent" | "neutral" = "neutral";
  if (totalDifference < -5000) verdict = "buy";
  else if (totalDifference > 5000) verdict = "rent";

  return {
    monthlyMortgage: Math.round(totalMonthlyOwnership * 100) / 100,
    totalRentCost: Math.round(totalRentCost),
    totalMortgageCost: Math.round(totalMortgageCost),
    totalDifference: Math.round(totalDifference),
    monthlyDifference,
    verdict,
  };
}