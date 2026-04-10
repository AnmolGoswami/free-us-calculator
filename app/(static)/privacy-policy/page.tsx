import Script from "next/script";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Privacy Policy | FreeUSCalculator – Data Protection & User Privacy",
  description:
    "Read the Privacy Policy for FreeUSCalculator. Learn how we handle data, cookies, analytics, and user privacy. We prioritize transparency and do not collect sensitive personal information.",

  keywords: [
    "privacy policy",
    "free calculator privacy policy",
    "data protection policy",
    "no data collection calculator",
    "financial calculator privacy",
    "cookie policy",
    "ad sense privacy policy",
    "user data protection",
  ],

  alternates: {
    canonical: "https://freeuscalculator.com/privacy-policy",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description: "Privacy Policy of FreeUSCalculator describing data handling, cookies, and analytics usage.",
    url: "https://freeuscalculator.com/privacy-policy",
    publisher: {
      "@type": "Organization",
      name: "FreeUSCalculator",
      url: "https://freeuscalculator.com",
    },
  };

  return (
    <>
      <Script
        id="json-ld-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">

          {/* HEADER */}
          <header className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm sm:text-base text-zinc-500">
              Last updated: April 2026
            </p>
          </header>

          {/* CONTENT */}
          <article className="prose prose-zinc max-w-none prose-h2:text-xl prose-h2:font-semibold prose-p:leading-relaxed">

            <p>
              This Privacy Policy explains how <strong>FreeUSCalculator</strong> ("we", "our", or "us") collects, uses,
              and protects information when you use our website and financial calculator tools.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We aim to provide privacy-focused financial tools. In most cases, we do not collect personally identifiable information.
              However, we may collect limited technical and usage data to improve performance and user experience.
            </p>

            <h3>1.1 Information You Do NOT Provide</h3>
            <ul>
              <li>We do not require account registration</li>
              <li>We do not collect names, phone numbers, or addresses</li>
              <li>We do not collect financial or tax input data from calculations</li>
            </ul>

            <h2>2. How Calculators Work</h2>
            <p>
              All calculations are performed locally in your browser (client-side processing). This means:
            </p>
            <ul>
              <li>Your inputs remain on your device</li>
              <li>No calculation data is transmitted to our servers</li>
              <li>We cannot view or store your financial inputs</li>
            </ul>

            <h2>3. Cookies & Tracking</h2>
            <p>
              We may use basic cookies or similar technologies for:
            </p>
            <ul>
              <li>Website performance optimization</li>
              <li>Anonymous usage analytics</li>
              <li>Preventing abuse or spam</li>
            </ul>
            <p>
              These cookies do not personally identify users.
            </p>

            <h2>4. Analytics</h2>
            <p>
              We may use privacy-friendly analytics tools to understand:
            </p>
            <ul>
              <li>Most used calculators</li>
              <li>Page performance</li>
              <li>General traffic trends</li>
            </ul>
            <p>
              All analytics data is aggregated and anonymized.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              We may use trusted third-party services such as hosting providers, analytics tools, or advertising platforms
              (e.g., Google AdSense). These services may collect limited non-personal data as required for functionality.
            </p>

            <h2>6. Advertising (Google AdSense)</h2>
            <p>
              We may display ads provided by Google AdSense. Google may use cookies to show relevant ads based on user activity.
              You can manage ad personalization through Google Ads Settings.
            </p>

            <h2>7. Data Security</h2>
            <p>
              We implement standard security measures to protect our website. However, since we do not store personal user data,
              risk of data exposure is minimal.
            </p>

            <h2>8. Children’s Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect data from children.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Updates will be posted on this page with a revised date.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions, contact us at{" "}
              <a className="text-indigo-600 hover:underline" href="mailto:support@freeuscalculator.com">
                support@freeuscalculator.com
              </a>.
            </p>

          </article>

          {/* TRUST BOX */}
          <div className="mt-14 p-6 sm:p-8 bg-zinc-50 border border-zinc-200 rounded-2xl text-center">
            <p className="text-sm sm:text-base text-zinc-700 font-medium">
              ✔ We prioritize user privacy and transparency. No personal financial data is stored or sold.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}