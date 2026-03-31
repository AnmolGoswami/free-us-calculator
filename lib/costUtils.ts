// lib/costUtils.ts
// Business logic for all Cost Calculators (Loan, Savings, Rent Affordability)

/**
 * Calculate Loan EMI (Equated Monthly Installment)
 * Formula: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
 */
export function calculateLoanEMI(
  principal: number,
  annualInterestRate: number,
  tenureYears: number
) {
  const monthlyRate = annualInterestRate / 12 / 100;
  const numberOfMonths = tenureYears * 12;

  if (monthlyRate === 0) {
    const monthlyPayment = principal / numberOfMonths;
    return {
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalPayment: Math.round(monthlyPayment * numberOfMonths * 100) / 100,
      totalInterest: 0,
      principalPortion: principal,
    };
  }

  const power = Math.pow(1 + monthlyRate, numberOfMonths);
  const monthlyPayment = (principal * monthlyRate * power) / (power - 1);

  const totalPayment = monthlyPayment * numberOfMonths;
  const totalInterest = totalPayment - principal;

  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    principalPortion: principal,
  };
}

/**
 * Savings / Compound Interest Calculator
 * Future Value of regular monthly savings
 */
export function calculateSavingsFutureValue(
  monthlyContribution: number,
  annualInterestRate: number,
  years: number,
  compoundingFrequency: "monthly" | "annual" = "monthly"
) {
  const monthlyRate = annualInterestRate / 12 / 100;
  const totalMonths = years * 12;

  if (monthlyRate === 0) {
    return {
      futureValue: monthlyContribution * totalMonths,
      totalContributions: monthlyContribution * totalMonths,
      totalInterest: 0,
    };
  }

  // Future value of annuity formula
  const futureValue =
    monthlyContribution *
    ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);

  const totalContributions = monthlyContribution * totalMonths;
  const totalInterest = futureValue - totalContributions;

  return {
    futureValue: Math.round(futureValue * 100) / 100,
    totalContributions: Math.round(totalContributions * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
  };
}

/**
 * Rent Affordability Calculator (30% Rule + Custom)
 */
export function calculateRentAffordability(
  monthlyIncome: number,
  otherDebts: number = 0,
  rulePercentage: number = 30 // Default 30% rule
) {
  const maxRentByRule = (monthlyIncome * rulePercentage) / 100;
  const maxRentAfterDebts = Math.max(0, monthlyIncome - otherDebts) * 0.35; // Conservative 35% after debts

  const recommendedRent = Math.min(maxRentByRule, maxRentAfterDebts);

  return {
    recommendedRent: Math.round(recommendedRent * 100) / 100,
    maxBy30Rule: Math.round(maxRentByRule * 100) / 100,
    maxAfterDebts: Math.round(maxRentAfterDebts * 100) / 100,
    monthlyIncome,
    otherDebts,
    rulePercentage,
  };
}

/**
 * Simple Future Value (One-time investment + compound interest)
 */
export function calculateFutureValue(
  principal: number,
  annualRate: number,
  years: number
) {
  const futureValue = principal * Math.pow(1 + annualRate / 100, years);

  return {
    futureValue: Math.round(futureValue * 100) / 100,
    totalInterest: Math.round((futureValue - principal) * 100) / 100,
    principal,
  };
}

/**
 * Break even analysis for renting vs buying (basic version)
 */
export function calculateRentVsBuy(
  monthlyRent: number,
  homePrice: number,
  downPaymentPercent: number = 20,
  annualInterestRate: number = 6.5,
  years: number = 30
) {
  const downPayment = (homePrice * downPaymentPercent) / 100;
  const loanAmount = homePrice - downPayment;

  // Simple approximation
  const monthlyMortgage = calculateLoanEMI(loanAmount, annualInterestRate, years).monthlyPayment;

  const totalRentOverYears = monthlyRent * 12 * years;
  const totalMortgageOverYears = monthlyMortgage * 12 * years;

  return {
    monthlyRent,
    monthlyMortgage: Math.round(monthlyMortgage * 100) / 100,
    totalRentCost: Math.round(totalRentOverYears),
    totalMortgageCost: Math.round(totalMortgageOverYears),
    yearlyDifference: Math.round((totalMortgageOverYears - totalRentOverYears) / years),
  };
}

