// app/terms/page.tsx
import Script from "next/script";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Terms of Service | FreeUSCalculator",
  description: "Read the Terms of Service for using FreeUSCalculator. Our free 2026 financial calculators are provided as-is for estimation purposes only.",
  keywords: ["terms of service", "freeuscalculator terms", "calculator disclaimer", "legal terms"],
  alternates: {
    canonical: "https://freeuscalculator.com/terms",
  },
};

export default function TermsOfService() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    url: "https://freeuscalculator.com/terms",
  };

  return (
    <>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-zinc-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
            <p className="text-slate-500">Last updated: April 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p>
              Welcome to FreeUSCalculator. By accessing or using our website and calculators, you agree to be bound by these Terms of Service.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              These Terms constitute a legally binding agreement between you and FreeUSCalculator. Please read them carefully before using our services.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              FreeUSCalculator provides free online financial calculators for educational and estimation purposes only. 
              All tools are provided "as is" without any warranty.
            </p>

            <h2>3. Important Disclaimer</h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-8 my-8">
              <p className="font-medium text-amber-800">
                Our calculators are for estimation and planning purposes only. They are not intended to provide financial, tax, or legal advice. 
                Results are approximate and may vary based on individual circumstances. Always consult a qualified professional for official advice.
              </p>
            </div>

            <h2>4. Accuracy of Information</h2>
            <p>
              While we strive to keep all calculators accurate and up-to-date with 2026 tax rules, we make no guarantees about the completeness, 
              reliability, or accuracy of the results. Tax laws can change, and individual situations vary.
            </p>

            <h2>5. No Professional Advice</h2>
            <p>
              The information provided by FreeUSCalculator does not constitute professional tax, accounting, legal, or financial advice. 
              You should consult licensed professionals for your specific situation.
            </p>

            <h2>6. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our service for any illegal purpose</li>
              <li>Attempt to reverse engineer or copy our tools</li>
              <li>Interfere with the proper functioning of the website</li>
            </ul>

            <h2>7. Limitation of Liability</h2>
            <p>
              FreeUSCalculator shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our calculators.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of the United States.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:support@freeuscalculator.com" className="text-indigo-600 hover:underline">
                support@freeuscalculator.com
              </a>.
            </p>

            <div className="mt-16 p-8 bg-slate-100 rounded-3xl text-center">
              <p className="text-slate-600">
                Thank you for using FreeUSCalculator. We are committed to providing accurate, free, and trustworthy financial tools for all Americans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}