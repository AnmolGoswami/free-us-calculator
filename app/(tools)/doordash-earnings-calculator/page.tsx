import { Metadata } from "next";
import DoorDashCalculatorClient from "./DoorDashCalculatorClient";
import FAQ from "@/components/calculators/FAQ";
import AdBanner from "@/components/common/AdBanner";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";
import ShareButtons from "@/components/calculators/ShareButtons";
import { getToolContent } from "@/lib/seo";

export const metadata: Metadata = {
  title: "DoorDash Earnings Calculator 2026 – Realistic Take-Home Pay Estimator",
  description: "Free DoorDash earnings calculator 2026. Calculate real take-home pay after gas, vehicle expenses, and self-employment tax.",
  keywords: ["doordash earnings calculator", "doordash pay calculator 2026", "doordash driver income", "how much do doordash drivers make"],
};

export default function DoorDashPage() {
  const seoContent = getToolContent("doordash-earnings-calculator");

  const faqs = [
    {
      q: "How accurate is this DoorDash earnings calculator?",
      a: "It is very accurate for estimation. It uses 2026 IRS mileage rates and standard self-employment tax.",
    },
    {
      q: "Does this include gas and vehicle expenses?",
      a: "Yes. You can adjust the cost per mile. Default is based on current IRS rate.",
    },
    {
      q: "What tax rate should DoorDash drivers use?",
      a: "We default to 15.3% self-employment tax. You can change it anytime.",
    },
  ];

  return (
    <>
      {/* Main Calculator */}
      <DoorDashCalculatorClient />

      {/* SEO Rich Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 prose prose-gray prose-lg">
        <div dangerouslySetInnerHTML={{ __html: seoContent }} />
      </div>

      {/* FAQ */}
      <FAQ title="Frequently Asked Questions" faqs={faqs} />

      {/* Extra Spacing Before Share Buttons */}
      <div className="h-12 md:h-20" />

      {/* Share Buttons - Fixed with proper spacing */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <ShareButtons
          title="DoorDash Earnings Calculator 2026"
          url="https://freeuscalculator.com/doordash-earnings-calculator"
        />
      </div>

      {/* Ad Banner */}
      <AdBanner />

      {/* Related Calculators */}
      <RelatedCalculators 
        currentTool="doordash-earnings-calculator"
        title="Other Useful Gig Economy Tools"
      />

      {/* Footer Spacing */}
      <div className="h-16 md:h-24" />
    </>
  );
}