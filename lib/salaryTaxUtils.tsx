export function calculateSalaryAfterTax(
  annualSalary: number,
  stateTaxRate: number = 5
) {
  // FEDERAL TAX (simplified progressive)
  let federalTax = 0;

  if (annualSalary <= 11000) {
    federalTax = annualSalary * 0.1;
  } else if (annualSalary <= 44725) {
    federalTax = 11000 * 0.1 + (annualSalary - 11000) * 0.12;
  } else if (annualSalary <= 95375) {
    federalTax =
      11000 * 0.1 +
      (44725 - 11000) * 0.12 +
      (annualSalary - 44725) * 0.22;
  } else {
    federalTax =
      11000 * 0.1 +
      (44725 - 11000) * 0.12 +
      (95375 - 44725) * 0.22 +
      (annualSalary - 95375) * 0.24;
  }

  // FICA
  const socialSecurity = annualSalary * 0.062;
  const medicare = annualSalary * 0.0145;
  const fica = socialSecurity + medicare;

  // STATE TAX
  const stateTax = (annualSalary * stateTaxRate) / 100;

  const totalTax = federalTax + stateTax + fica;
  const net = annualSalary - totalTax;

  return {
    gross: {
      yearly: annualSalary,
      monthly: annualSalary / 12,
    },
    tax: {
      federal: federalTax,
      state: stateTax,
      fica,
      total: totalTax,
    },
    net: {
      yearly: net,
      monthly: net / 12,
    },
  };
}