// app/(tools)/loan-calculator/page.tsx

import AdBanner from "@/components/common/AdBanner";
import { getToolContent } from "@/lib/seo";
import LoanCalculatorClient from "./LoanCalculatorClient";
import CalculatorContainer from "@/components/ui/CalculatorContainer";

export default function LoanCalculatorPage() {
  const seoContent = getToolContent("loan-calculator");

  return (
    <>
      <CalculatorContainer
        title="Free Loan Calculator 2026"
        description="Calculate monthly EMI, total interest, and repayment schedule instantly."
      >
        {/* 👇 Calculator UI */}
        <LoanCalculatorClient />
      </CalculatorContainer>

      {/* 👇 SEO Content (OUTSIDE container for better readability) */}
      <div className="mt-20 max-w-4xl mx-auto px-6 prose prose-gray">
        <div dangerouslySetInnerHTML={{ __html: seoContent }} />
      </div>

      <AdBanner />
    </>
  );
}