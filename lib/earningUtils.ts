// lib/earningUtils.ts

// ===============================
// 🚗 DoorDash Earnings Calculator
// ===============================
// lib/earningUtils.ts
// lib/earningUtils.ts
// lib/earningUtils.ts
export function calculateDoorDashEarnings({
  ordersPerHour,
  earningPerOrder,
  hoursPerDay,
  daysPerWeek,
  milesPerOrder,
  costPerMile,
  taxRate,
}: {
  ordersPerHour: number;
  earningPerOrder: number;
  hoursPerDay: number;
  daysPerWeek: number;
  milesPerOrder: number;
  costPerMile: number;
  taxRate: number;
}) {
  const hoursPerWeek = hoursPerDay * daysPerWeek;
  const ordersPerWeek = ordersPerHour * hoursPerWeek;

  const weeklyGross = ordersPerWeek * earningPerOrder;
  const monthlyGross = weeklyGross * 4.345;
  const yearlyGross = weeklyGross * 52;

  const weeklyMiles = ordersPerWeek * milesPerOrder;
  const weeklyExpenses = weeklyMiles * costPerMile;
  const monthlyExpenses = weeklyExpenses * 4.345;
  const yearlyExpenses = weeklyExpenses * 52;

  const weeklyProfit = weeklyGross - weeklyExpenses;
  const monthlyProfit = monthlyGross - monthlyExpenses;
  const yearlyProfit = yearlyGross - yearlyExpenses;

  const weeklyTax = weeklyProfit * (taxRate / 100);
  const monthlyTax = monthlyProfit * (taxRate / 100);
  const yearlyTax = yearlyProfit * (taxRate / 100);

  const weeklyNet = weeklyProfit - weeklyTax;
  const monthlyNet = monthlyProfit - monthlyTax;
  const yearlyNet = yearlyProfit - yearlyTax;

  const hourlyGross = ordersPerHour * earningPerOrder;
  const hourlyNet = hoursPerWeek > 0 ? weeklyNet / hoursPerWeek : 0;

  return {
    gross: { hourly: hourlyGross, weekly: weeklyGross, monthly: monthlyGross, yearly: yearlyGross },
    expenses: { weekly: weeklyExpenses, monthly: monthlyExpenses, yearly: yearlyExpenses },
    tax: { weekly: weeklyTax, monthly: monthlyTax, yearly: yearlyTax },
    net: { hourly: hourlyNet, weekly: weeklyNet, monthly: monthlyNet, yearly: yearlyNet },
    ordersPerWeek,
    milesPerWeek: weeklyMiles,
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