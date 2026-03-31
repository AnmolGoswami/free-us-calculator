// lib/earningUtils.ts

// ===============================
// 🚗 DoorDash Earnings Calculator
// ===============================
export function calculateDoorDashEarnings(
  ordersPerHour: number,
  earningPerOrder: number,
  hoursPerDay: number,
  daysPerWeek: number,
  milesPerOrder: number = 3,
  costPerMile: number = 0.67, // IRS standard mileage rate (approx)
  taxRate: number = 0.153 // 15.3% self-employment tax
) {
  // ===== GROSS EARNINGS =====
  const hourly = ordersPerHour * earningPerOrder;
  const daily = hourly * hoursPerDay;
  const weekly = daily * daysPerWeek;
  const monthly = weekly * 4.33; // US average
  const yearly = weekly * 52;

  // ===== EXPENSES =====
  const totalOrdersPerWeek = ordersPerHour * hoursPerDay * daysPerWeek;
  const weeklyMiles = totalOrdersPerWeek * milesPerOrder;

  const weeklyExpenses = weeklyMiles * costPerMile;
  const monthlyExpenses = weeklyExpenses * 4.33;
  const yearlyExpenses = weeklyExpenses * 52;

  // ===== PROFIT BEFORE TAX =====
  const weeklyProfit = weekly - weeklyExpenses;
  const monthlyProfit = monthly - monthlyExpenses;
  const yearlyProfit = yearly - yearlyExpenses;

  // ===== TAXES =====
  const weeklyTax = weeklyProfit * taxRate;
  const monthlyTax = monthlyProfit * taxRate;
  const yearlyTax = yearlyProfit * taxRate;

  // ===== NET (TAKE HOME) =====
  const weeklyNet = weeklyProfit - weeklyTax;
  const monthlyNet = monthlyProfit - monthlyTax;
  const yearlyNet = yearlyProfit - yearlyTax;

  return {
    gross: {
      hourly,
      daily,
      weekly,
      monthly,
      yearly,
    },
    expenses: {
      weekly: weeklyExpenses,
      monthly: monthlyExpenses,
      yearly: yearlyExpenses,
    },
    tax: {
      weekly: weeklyTax,
      monthly: monthlyTax,
      yearly: yearlyTax,
    },
    net: {
      weekly: weeklyNet,
      monthly: monthlyNet,
      yearly: yearlyNet,
    },
  };
}

// ======================================
// 💼 Hourly → Salary Calculator (US PRO)
// ======================================
export function calculateHourlyToSalary(
  hourlyRate: number,
  hoursPerWeek: number,
  weeksPerYear: number = 52,
  taxRate: number = 0.22 // average US effective tax
) {
  // ===== OVERTIME LOGIC =====
  const regularHours = Math.min(hoursPerWeek, 40);
  const overtimeHours = Math.max(hoursPerWeek - 40, 0);

  const overtimeRate = hourlyRate * 1.5; // US standard

  // ===== GROSS =====
  const weeklyGross =
    regularHours * hourlyRate +
    overtimeHours * overtimeRate;

  const monthlyGross = weeklyGross * 4.33;
  const yearlyGross = weeklyGross * weeksPerYear;

  // ===== TAX =====
  const weeklyTax = weeklyGross * taxRate;
  const monthlyTax = monthlyGross * taxRate;
  const yearlyTax = yearlyGross * taxRate;

  // ===== NET =====
  const weeklyNet = weeklyGross - weeklyTax;
  const monthlyNet = monthlyGross - monthlyTax;
  const yearlyNet = yearlyGross - yearlyTax;

  return {
    gross: {
      weekly: weeklyGross,
      monthly: monthlyGross,
      yearly: yearlyGross,
    },
    tax: {
      weekly: weeklyTax,
      monthly: monthlyTax,
      yearly: yearlyTax,
    },
    net: {
      weekly: weeklyNet,
      monthly: monthlyNet,
      yearly: yearlyNet,
    },
  };
}