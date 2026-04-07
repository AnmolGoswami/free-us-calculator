// app/privacy-policy/page.tsx
import Script from "next/script";

export const metadata = {
  title: "Privacy Policy | FreeUSCalculator",
  description: "Read our Privacy Policy. FreeUSCalculator is committed to protecting your privacy. We do not collect, store, or share any personal data.",
  keywords: ["privacy policy", "freeuscalculator privacy", "data protection", "financial calculator privacy"],
  alternates: {
    canonical: "https://freeuscalculator.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: "Privacy Policy",
    url: "https://freeuscalculator.com/privacy-policy",
    publisher: {
      "@type": "Organization",
      name: "FreeUSCalculator"
    }
  };

  return (
    <>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-zinc-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-slate-500">Last updated: April 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p className="text-xl">
              At FreeUSCalculator, your privacy is our top priority. We are committed to protecting your personal information 
              and ensuring complete transparency in how we handle data.
            </p>

            <h2>1. Information We Do NOT Collect</h2>
            <p>
              Unlike most online tools, FreeUSCalculator does <strong>not</strong> collect any personal information. 
              This includes:
            </p>
            <ul>
              <li>No email addresses</li>
              <li>No names or contact details</li>
              <li>No IP addresses stored</li>
              <li>No financial or tax data</li>
              <li>No cookies for tracking</li>
            </ul>

            <h2>2. How Our Calculators Work</h2>
            <p>
              All calculations happen directly in your browser (client-side). Your inputs never leave your device and are 
              not sent to our servers. This means we have zero access to the numbers you enter.
            </p>

            <h2>3. Anonymous Usage Data</h2>
            <p>
              We may collect very basic, anonymized analytics (such as which tools are most popular) to improve our service. 
              This data cannot be linked back to any individual user.
            </p>

            <h2>4. Third-Party Services</h2>
            <p>
              We use minimal third-party services only for essential functionality (such as hosting and basic analytics). 
              These services are privacy-friendly and do not receive any personal data from our users.
            </p>

            <h2>5. Children’s Privacy</h2>
            <p>
              Our website is not directed at children under 13. We do not knowingly collect data from children.
            </p>

            <h2>6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated 
              "Last updated" date.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:support@freeuscalculator.com" className="text-indigo-600 hover:underline">
                support@freeuscalculator.com
              </a>.
            </p>

            <div className="mt-16 p-8 bg-emerald-50 border border-emerald-100 rounded-3xl">
              <p className="text-center font-medium text-emerald-700">
                ✅ Your privacy is protected. We built FreeUSCalculator to be one of the most private financial tools on the internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}