// app/(tools)/loan-calculator/page.tsx
// This is a SERVER COMPONENT

import AdBanner from "@/components/common/AdBanner";
import { getToolContent } from "@/lib/seo";
import LoanCalculatorClient from "./LoanCalculatorClient";

export default function LoanCalculatorPage() {
  const seoContent = getToolContent("loan-calculator");

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* SEO Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Free Loan Calculator 2026
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Calculate monthly EMI, total interest, and repayment schedule instantly.
        </p>
        <p className="text-sm text-green-600 mt-4 font-medium">
          Updated for 2026 • Real-time Results • No Signup
        </p>
      </div>

      {/* Client Component for interactivity */}
      <LoanCalculatorClient />

      {/* SEO Content from markdown */}
      <div 
        className="mt-20 max-w-4xl mx-auto prose prose-gray"
        dangerouslySetInnerHTML={{ __html: seoContent }}
      />

      <AdBanner />
    </div>
  );
}