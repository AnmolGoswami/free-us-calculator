// SERVER COMPONENT

import CalculatorContainer from "@/components/ui/CalculatorContainer";
import AdBanner from "@/components/common/AdBanner";
import { getToolContent } from "@/lib/seo";
import PaycheckCaliforniaClient from "./PaycheckCaliforniaClient";

export default function PaycheckCaliforniaPage() {
  const seoContent = getToolContent("paycheck-calculator-california");

  return (
    <>
      <CalculatorContainer
        title="California Paycheck Calculator (2026)"
        description="Calculate your take-home pay in California after federal tax, state tax, and FICA deductions."
      >
        <PaycheckCaliforniaClient />
      </CalculatorContainer>

      {/* SEO CONTENT */}
      <div
        className="mt-20 max-w-4xl mx-auto prose prose-gray px-6"
        dangerouslySetInnerHTML={{ __html: seoContent }}
      />

      <AdBanner />
    </>
  );
}