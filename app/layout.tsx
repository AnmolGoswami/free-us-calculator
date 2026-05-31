// app/layout.tsx
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import DisclaimerToast from "@/components/common/DisclaimerToast";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

// ─── Font ─────────────────────────────────────────────────────────────────────
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// ─── Site-wide Metadata ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "FreeUSCalculator – Free 2026 US Tax, Paycheck & Earnings Calculators",
    template: "%s | FreeUSCalculator",
  },
  description:
    "Free, accurate 2026 US calculators: self-employment tax, salary after tax, paycheck, Uber & DoorDash earnings, loan EMI, and rent affordability. Instant results. No signup.",
  keywords: [
    "free tax calculator 2026",
    "self employment tax calculator 2026",
    "salary after tax calculator",
    "paycheck calculator usa 2026",
    "uber earnings calculator",
    "doordash earnings calculator",
    "loan emi calculator",
    "rent affordability calculator",
    "2026 federal tax brackets",
    "gig worker tax calculator",
    "hourly to salary calculator",
    "overtime pay calculator",
    "take home pay calculator",
    "free us financial calculators",
    "1099 tax calculator",
  ],
  authors: [{ name: "FreeUSCalculator", url: "https://www.freeuscalculator.in" }],
  alternates: { canonical: "https://www.freeuscalculator.in" },
  openGraph: {
    title: "FreeUSCalculator – Best Free 2026 US Tax & Earnings Calculators",
    description:
      "Instant, accurate, and completely free calculators for Americans. Updated for 2026 tax year. No signup required.",
    url: "https://www.freeuscalculator.in",
    siteName: "FreeUSCalculator",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.freeuscalculator.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FreeUSCalculator – Free 2026 US Tax & Financial Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 2026 US Tax & Earnings Calculators | FreeUSCalculator",
    description:
      "Accurate paycheck, self-employment tax & gig work calculators. Updated for 2026. No signup needed.",
    images: ["https://www.freeuscalculator.in/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  applicationName: "FreeUSCalculator",
  category: "Finance",
};

// ─── Schema strings — static module-level constants (never use Date.now etc.) ─
const organizationSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FreeUSCalculator",
  url: "https://www.freeuscalculator.in",
  logo: "https://www.freeuscalculator.in/logo.png",
  description:
    "Free, accurate 2026 US financial calculators for tax, earnings, paycheck, loans, and rent.",
  sameAs: [],
});

const websiteSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FreeUSCalculator",
  url: "https://www.freeuscalculator.in",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.freeuscalculator.in/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
});

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are all calculators on FreeUSCalculator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every calculator on FreeUSCalculator is 100% free to use. No account, no signup, and no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Are the 2026 tax rates up to date?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All calculators are updated for Tax Year 2026, including federal income tax brackets, Social Security and Medicare (FICA) rates, and self-employment tax rates.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use these calculators on my phone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. All tools are fully mobile-optimized and work on any device — smartphone, tablet, or desktop.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is the self-employment tax calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our self-employment tax calculator uses the exact IRS formula: 15.3% on net earnings up to the Social Security wage base ($176,100 for 2026), and 2.9% Medicare tax above that, including the 0.9% Additional Medicare Tax where applicable.",
      },
    },
    {
      "@type": "Question",
      name: "Do you store my financial data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All calculations happen instantly in your browser. We never store, share, or transmit any financial data you enter.",
      },
    },
  ],
});

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      {/*
        NOTE: No <head> tag here at all.
        Next.js manages <head> automatically via the `metadata` export above.
        Adding a manual <head> block causes hydration mismatches.

        ADSENSE: Do NOT add AdSense here until your account is approved.
        Once approved, add it as a single <Script> tag in <body> like this:

          <Script
            id="adsense"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />

        Using strategy="afterInteractive" loads it after hydration and avoids
        all hydration mismatch issues.
      */}

      <body className={`${sora.variable} font-sans antialiased bg-white`}>
        {/*
          JSON-LD schema in <body> via Next.js <Script strategy="afterInteractive">.
          Google reads JSON-LD in <body> identically to <head>.
          Placing them here keeps them completely outside React's SSR head
          reconciliation, so there is zero risk of hydration mismatch.
        */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6927869283378042"
          crossOrigin="anonymous"></script>
        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: organizationSchema }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: websiteSchema }}
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: faqSchema }}
        />

        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <DisclaimerToast />
        <Analytics />
      </body>
    </html>
  );
}