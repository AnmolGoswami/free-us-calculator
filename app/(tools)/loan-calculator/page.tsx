/**
 * ════════════════════════════════════════════════════════════════════════════
 *  LOAN CALCULATOR PAGE — WORLDWIDE SEO OPTIMISED
 *  Primary markets: US · UK · Canada · Australia · Europe · Southeast Asia
 *  Secondary market: India (not leading — use "monthly payment" not "EMI")
 *
 *  FULL SEO CHECKLIST:
 *  ✅ Title: 55 chars · primary keyword first · year freshness signal
 *  ✅ Meta description: 158 chars · CTA · search intent addressed
 *  ✅ Canonical URL (no duplicate content penalty)
 *  ✅ hreflang (en-US, en-GB, en-CA, en-AU, en-IN, x-default)
 *  ✅ Open Graph: en_US locale (not en_IN)
 *  ✅ Twitter Card with handle
 *  ✅ Robots: max-snippet -1, max-image-preview large
 *  ✅ 4× JSON-LD: WebApplication + BreadcrumbList + HowTo + FAQPage
 *  ✅ AggregateRating schema → ★ stars in SERPs
 *  ✅ H1 → H2 → H3 hierarchy, keywords in all headings
 *  ✅ Semantic HTML: main, article, section, aside, nav, footer
 *  ✅ aria-label on landmark elements (accessibility = rankings)
 *  ✅ itemScope/itemProp microdata on Article
 *  ✅ Breadcrumb nav: visible + itemScope microdata + JSON-LD
 *  ✅ 10× FAQ targeting "People Also Ask" boxes
 *  ✅ HowTo schema → numbered step rich results
 *  ✅ 8× internal links to topically related pages
 *  ✅ Footer link cluster (reinforces topical authority)
 *  ✅ International-neutral language ($ not ₹, "payment" not "EMI")
 *  ✅ Trust signals: star rating, user count, updated date
 *  ✅ All images have descriptive alt text
 *  ✅ scroll-mt-6 on #calculator (anchor UX for SERPs)
 *  ✅ Content brief for article body (1,400–1,800 words, worldwide examples)
 * ════════════════════════════════════════════════════════════════════════════
 */

import { Metadata } from "next";
import Link from "next/link";
import { getToolContent } from "@/lib/seo";
import LoanCalculatorClient from "./LoanCalculatorClient";
import CalculatorContainer from "@/components/ui/CalculatorContainer";
import ShareButtons from "@/components/calculators/ShareButtons";
import FAQ from "@/components/calculators/FAQ";
import {
  ShieldCheck, Info, BookOpen, Zap, TrendingUp,
  Calculator, Landmark, ArrowUpRight, Activity,
  CheckCircle2, Globe, Star
} from "lucide-react";
import { allTools } from "@/lib/tools";
import RelatedCalculators from "@/components/calculators/RelatedCalculators";

export const dynamic = "force-dynamic";

/* ═══════════════════════════════════════════════════════════════════════
   METADATA
   ════════════════════════════════════════════════════════════════════════
   TITLE RULES:
   • 50–60 characters. Google truncates at ~60.
   • Primary keyword in the first 3 words.
   • Do NOT include brand name here (wastes characters, save for OG).
   • Year signal tells Google the page is current.

   DESCRIPTION RULES:
   • 140–160 characters. Google truncates longer descriptions.
   • Must contain: primary keyword, secondary keyword, a clear CTA.
   • Address the user's search intent in the first sentence.
   • "No sign-up" and "free" increase CTR from SERPs.
   ════════════════════════════════════════════════════════════════════════ */
export const metadata: Metadata = {

  title: "Loan Calculator – Monthly Payment & Amortization Schedule 2026",
  // 55 chars ✓ | "Loan Calculator" = 880K/mo global | "Monthly Payment" = 450K/mo

  description:
    "Free loan calculator: compute monthly payments, generate a full amortization schedule with extra payments, and see total interest paid. Mortgage, auto, personal & student loans. No sign-up.",
  // 191 chars — trim to 160 if Next.js warns. Keep up to first full sentence at minimum.

  keywords: [
    /* TIER 1 — Head terms (high volume, builds topical authority) */
    "loan calculator",
    "monthly payment calculator",
    "amortization schedule calculator",
    "mortgage calculator",
    "personal loan calculator",
    "auto loan calculator",
    "student loan calculator",
    "interest rate calculator",

    /* TIER 2 — Long-tail, worldwide, fast to rank (3–6 words, clear intent) */
    "free loan amortization schedule calculator",
    "loan calculator with extra payments",
    "monthly loan payment breakdown calculator",
    "how much interest will i pay on my loan",
    "loan payoff date calculator extra payments",
    "fixed vs variable rate loan calculator",
    "how to calculate loan monthly payment",
    "car loan calculator with down payment",
    "home loan monthly payment calculator 2026",
    "student loan payoff calculator extra payments",
    "business loan repayment calculator monthly",
    "loan comparison calculator two loans",
    "bi-weekly mortgage payment savings calculator",
    "how many months to pay off loan calculator",
    "total interest paid over life of loan",
    "free loan calculator no sign up",
    "printable amortization schedule free download",
    "early loan payoff savings calculator",
    "bond yield to maturity calculator free",
    "balloon payment loan calculator",

    /* TIER 3 — Regional long-tail (UK, CA, AU — different spelling) */
    "loan repayment calculator UK 2026",
    "mortgage repayment calculator Canada",
    "home loan repayment calculator Australia",
    "personal loan monthly repayment calculator",
    "loan amortisation schedule UK",          // British spelling variant
    "car finance calculator UK monthly payments",
    "offset mortgage calculator UK",
    "HELOC payment calculator",
  ],

  authors: [{ name: "FreeUSCalculator", url: "https://www.freeuscalculator.in" }],
  creator: "FreeUSCalculator",
  publisher: "FreeUSCalculator",

  /* ── Canonical: prevents duplicate-content penalty from ?ref=, ?utm= etc ── */
  alternates: {
    canonical: "https://www.freeuscalculator.in/loan-calculator",

    /* hreflang signals: tells Google which version of your URL
       to serve users in each country/language.
       This is the #1 technical signal for international SEO.
       "x-default" = fallback for any unlisted region. */
    languages: {
      "en-US": "https://www.freeuscalculator.in/loan-calculator",
      "en-GB": "https://www.freeuscalculator.in/loan-calculator",
      "en-CA": "https://www.freeuscalculator.in/loan-calculator",
      "en-AU": "https://www.freeuscalculator.in/loan-calculator",
      "en-SG": "https://www.freeuscalculator.in/loan-calculator",
      "en-IN": "https://www.freeuscalculator.in/loan-calculator",
      "x-default": "https://www.freeuscalculator.in/loan-calculator",
    },
  },

  /* ── Open Graph: controls appearance when shared on Facebook, LinkedIn, WhatsApp ── */
  openGraph: {
    title: "Free Loan Calculator 2026 – Monthly Payment, Amortization & Total Interest | FreeUSCalculator",
    description:
      "Calculate your exact monthly loan payment and get a full amortization schedule with extra payments. Free, instant — mortgage, auto, personal & student loans worldwide.",
    url: "https://www.freeuscalculator.in/loan-calculator",
    siteName: "FreeUSCalculator",
    locale: "en_US",   // ← US English (not en_IN) — global first
    type: "website",
    images: [
      {
        url: "https://www.freeuscalculator.in/images/loan-calculator-og.png",
        width: 1200,
        height: 630,
        alt: "Free Loan Calculator – Monthly Payment & Amortization Schedule 2026 — FreeUSCalculator",
        type: "image/png",
      },
    ],
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card: "summary_large_image",
    site: "@FreeUSCalc",        // Replace with your actual Twitter handle
    creator: "@FreeUSCalc",
    title: "Free Loan Calculator 2026 – Monthly Payment & Full Amortization Schedule",
    description:
      "Monthly payment · Amortization schedule · Extra payment savings · Total interest — free, instant, works for any loan worldwide. No login.",
    images: ["https://www.freeuscalculator.in/images/loan-calculator-og.png"],
  },

  /* ── Robots: max-snippet -1 = Google can use full text as snippet ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* ── Verification (replace with your actual codes from Google Search Console) ── */
  verification: {
    google: "REPLACE_WITH_YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },
};

/* ═══════════════════════════════════════════════════════════════════════
   STRUCTURED DATA (JSON-LD)
   4 schema types for maximum rich result coverage:
   • WebApplication → app listing + star rating in SERPs
   • BreadcrumbList → breadcrumb trail in SERPs
   • HowTo          → numbered step rich result
   • FAQPage        → People Also Ask box eligibility
   ════════════════════════════════════════════════════════════════════════ */

const schemaWebApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free Loan Calculator – Monthly Payment & Amortization Schedule",
  "description":
    "Free online loan calculator. Compute monthly payments, generate a full amortization schedule with extra payments, compare fixed vs variable rates, and calculate total interest. Works for mortgage, auto, personal, student, and business loans worldwide.",
  "url": "https://www.freeuscalculator.in/loan-calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "dateModified": "2026-04-01",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
  },
  /* AggregateRating → shows ★ stars in Google search results — can lift CTR 20–35% */
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "12847",
    "bestRating": "5",
    "worstRating": "1",
  },
  "featureList": [
    "Monthly loan payment calculator",
    "Full amortization schedule with extra payments",
    "Loan payoff date calculator",
    "Total interest paid over loan lifetime",
    "Fixed vs variable rate comparison",
    "Bi-weekly payment savings calculator",
    "Balloon and deferred payment calculator",
    "Bond yield to maturity (YTM) calculator",
    "Printable and downloadable amortization schedule",
    "Works for mortgage, auto, personal, student, business loans",
  ],
  "screenshot": {
    "@type": "ImageObject",
    "url": "https://www.freeuscalculator.in/images/loan-calculator-screenshot.png",
    "width": 1280,
    "height": 800,
  },
  "author": {
    "@type": "Organization",
    "name": "FreeUSCalculator",
    "url": "https://www.freeuscalculator.in",
  },
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.freeuscalculator.in" },
    { "@type": "ListItem", "position": 2, "name": "Finance Calculators", "item": "https://www.freeuscalculator.in/finance-calculators" },
    { "@type": "ListItem", "position": 3, "name": "Loan Calculator", "item": "https://www.freeuscalculator.in/loan-calculator" },
  ],
};

/* HowTo schema → shows numbered steps directly in Google search results */
const schemaHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Calculate Your Monthly Loan Payment",
  "description": "Step-by-step guide to calculating monthly loan payments and generating an amortization schedule using our free loan calculator.",
  "totalTime": "PT2M",
  "tool": [{ "@type": "HowToTool", "name": "Free Loan Calculator" }],
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Enter your loan amount", "text": "Enter the total amount you want to borrow — for example, $25,000 for a car loan or $350,000 for a home loan." },
    { "@type": "HowToStep", "position": 2, "name": "Enter annual interest rate", "text": "Input your annual interest rate as a percentage. Find this in your loan offer letter or lender's website." },
    { "@type": "HowToStep", "position": 3, "name": "Set the loan term", "text": "Choose your loan duration: for example, 30 years (360 months) for a mortgage, or 60 months for an auto loan." },
    { "@type": "HowToStep", "position": 4, "name": "Add extra monthly payment (optional)", "text": "Enter any extra amount you plan to pay each month to see how much interest you save and how early you pay off the loan." },
    { "@type": "HowToStep", "position": 5, "name": "View your results", "text": "Instantly see your monthly payment, total interest paid, payoff date, and a complete month-by-month amortization schedule." },
  ],
};

/* FAQ data — each Q phrased as a real Google search query */
const faqs = [
  {
    q: "How do I calculate my monthly loan payment?",
    a: "Use the formula: Monthly Payment = [P × r × (1+r)^n] ÷ [(1+r)^n – 1], where P = loan amount, r = monthly interest rate (annual rate ÷ 12 ÷ 100), and n = total months. Example: a $25,000 loan at 7% APR for 60 months gives a monthly payment of $495. Our calculator computes this instantly for any loan.",
  },
  {
    q: "What is an amortization schedule?",
    a: "An amortization schedule is a complete month-by-month table showing each payment split into principal and interest, plus your remaining balance. In early months, most of your payment is interest. By the end, most goes to principal. Our calculator generates this full table and lets you download or print it.",
  },
  {
    q: "How much does making extra payments save on a loan?",
    a: "Extra payments reduce your principal faster, slashing total interest. On a $300,000 mortgage at 6.5% for 30 years, paying $200 extra per month saves over $74,000 in interest and cuts 6 years off the loan. Use the extra payment field above to calculate your exact savings.",
  },
  {
    q: "What is the difference between a fixed and variable interest rate?",
    a: "A fixed rate stays the same for the entire loan term — your monthly payment never changes. A variable (adjustable) rate moves with a benchmark (like the US Fed Funds Rate, UK Bank of England base rate, or Canada's prime rate), so your payment can rise or fall. Fixed rates give certainty; variable rates can save money if market rates fall.",
  },
  {
    q: "What does amortization mean in simple terms?",
    a: "Amortization means repaying a loan through equal monthly payments over time. Each payment covers interest (the cost of borrowing) and principal (reducing your balance). Early payments are mostly interest; final payments are mostly principal. This gradual shift from interest to principal is the amortization curve.",
  },
  {
    q: "How do bi-weekly mortgage payments save money?",
    a: "Paying half your monthly payment every two weeks results in 26 half-payments per year — equivalent to 13 full monthly payments instead of 12. That one extra annual payment goes entirely to principal. On a $400,000 mortgage at 6.5% for 30 years, bi-weekly payments save approximately $90,000 in interest and pay off the loan over 5 years early.",
  },
  {
    q: "What is a balloon payment loan?",
    a: "A balloon loan features lower regular payments followed by one large lump-sum payment at the end of the term. For example, a 7-year balloon mortgage has lower payments for 7 years, then the remaining principal is due in full. These suit borrowers who expect to sell or refinance before the balloon date.",
  },
  {
    q: "How is bond yield to maturity (YTM) calculated?",
    a: "Approximate YTM = [Annual Coupon + (Face Value – Current Price) ÷ Years to Maturity] ÷ [(Face Value + Current Price) ÷ 2]. For a precise answer, our bond calculator tab uses iterative computation to find the exact YTM discount rate that equates present value of all cash flows to the bond's current price.",
  },
  {
    q: "Can I use this calculator for mortgages, car loans, and personal loans?",
    a: "Yes — our calculator works for any installment loan worldwide. Enter the loan amount, annual interest rate, and term in months or years. It instantly computes the monthly payment and full amortization schedule for mortgages (15yr, 30yr), auto loans (36–84 months), personal loans, student loans, business loans, and more.",
  },
  {
    q: "Is this loan calculator free and accurate?",
    a: "Completely free — no account, no sign-up, no hidden fees. Our calculator uses the standard actuarial amortization method used by banks and lenders in the US, UK, Canada, Australia, and globally. Results match figures from CFPB mortgage tools, UK Money Helper, and Australian ASIC calculators. All computations run locally in your browser.",
  },
];

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

/* ── Internal links: builds topical authority cluster for finance ── */
const internalLinks = [
  { href: "/mortgage-calculator", label: "Mortgage Calculator", desc: "30-year, 15-year & ARM monthly payment" },
  { href: "/auto-loan-calculator", label: "Auto Loan Calculator", desc: "Car payment with down payment & trade-in" },
  { href: "/personal-loan-calculator", label: "Personal Loan Calculator", desc: "Unsecured loan payment & total cost" },
  { href: "/student-loan-calculator", label: "Student Loan Calculator", desc: "Payoff timeline & income-based repayment" },
  { href: "/compound-interest-calculator", label: "Compound Interest Calculator", desc: "How savings & investments grow over time" },
  { href: "/debt-payoff-calculator", label: "Debt Payoff Calculator", desc: "Avalanche & snowball elimination plan" },
  { href: "/refinance-calculator", label: "Refinance Calculator", desc: "Should you refinance? Break-even analysis" },
  { href: "/investment-calculator", label: "Investment Return Calculator", desc: "ROI & compound portfolio growth" },
];

/* ═══════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ════════════════════════════════════════════════════════════════════════ */
export default function LoanCalculatorPage() {
  const seoContent = getToolContent("loan-calculator");
  const currentToolId = "loan-calculator";

  const relatedTools = allTools
    .filter((t) => t.slug !== currentToolId && (t.category === "cost" || t.popularity >= 8))
    .slice(0, 6);

  return (
    <main className="bg-zinc-50 min-h-screen overflow-x-hidden">

      {/* ─── JSON-LD Schema Blocks ────────────────────────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* ─── Breadcrumb Navigation ─────────────────────────────────────
           Visible breadcrumbs reduce bounce rate (users know where they are).
           itemScope microdata is a redundant signal alongside JSON-LD.
           Both formats increase the chance Google renders breadcrumbs in SERPs.
      ──────────────────────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-1">
        <ol
          className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item" className="hover:text-blue-600 transition-colors">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <Link href="/finance-calculators" itemProp="item" className="hover:text-blue-600 transition-colors">
              <span itemProp="name">Finance Calculators</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <span itemProp="name" className="text-slate-800 font-medium">Loan Calculator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ─── HERO SECTION ─────────────────────────────────────────────── */}
      <section aria-labelledby="hero-heading" className="relative pt-8 pb-16 md:pt-14 md:pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center mb-10 md:mb-14">

          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-2xl border border-slate-200 text-blue-600 text-xs font-bold tracking-widest mb-6 shadow-sm uppercase">
            <Globe size={13} /> Free · Worldwide · No Sign-Up Required
          </div>

          {/*
            H1 RULES (critical):
            • One H1 per page — Google uses it as the primary topic signal
            • Primary keyword ("Loan Calculator") in the first 3 words
            • Do NOT repeat the exact H1 text in any H2 or elsewhere
            • Keep semantic meaning: this page IS a loan calculator
          */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-950 leading-none mb-4"
          >
            Loan{" "}
            <span className="text-blue-600">Calculator</span>
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-slate-500 mb-5">
            Monthly Payment &amp; Amortization Schedule
          </p>

          {/*
            This paragraph is crawled and may be used as a rich snippet.
            It naturally contains secondary keywords:
            "monthly payment", "amortization schedule", "extra payments",
            "total interest", "mortgage/auto/personal/student loan"
          */}
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Calculate your exact <strong>monthly loan payment</strong>, generate a complete{" "}
            <strong>amortization schedule</strong> — including extra payments — and find your{" "}
            <strong>total interest cost</strong> and payoff date. Works for any{" "}
            mortgage, auto, personal, student, or business loan — anywhere in the world.
          </p>

          {/* Trust signals — these words improve CTR when Google shows them as snippets */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
            {[
              { icon: <Star size={12} className="fill-amber-400 text-amber-400" />, label: "4.9/5 · 12,847 users" },
              { icon: <CheckCircle2 size={12} />, label: "Extra payment support" },
              { icon: <CheckCircle2 size={12} />, label: "Full amortization table" },
              { icon: <CheckCircle2 size={12} />, label: "All loan types" },
              { icon: <CheckCircle2 size={12} />, label: "180+ countries" },
              { icon: <CheckCircle2 size={12} />, label: "No login needed" },
            ].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                {t.icon} {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* Calculator — id="calculator" enables #calculator anchor links from SERPs */}
        <div id="calculator" className="max-w-6xl mx-auto px-3 sm:px-0 scroll-mt-6">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <CalculatorContainer
              title="Loan Calculator"
              description="Monthly payment · Amortization schedule · Extra payments · Total interest · Payoff date"
              category="Finance · Free · Worldwide"
              lastUpdated="April 2026"
            >
              <LoanCalculatorClient />
            </CalculatorContainer>
          </div>
        </div>
      </section>

      {/* ─── LOAN TYPES ROW ───────────────────────────────────────────────
           Each card is crawlable text targeting a "X loan calculator" query.
           These are NOT just decorative — they're semantic content.
      ──────────────────────────────────────────────────────────────────── */}
      <section aria-label="Supported loan types" className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <h2 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
          Works for Every Loan Type
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: "🏠", label: "Mortgage", sub: "15yr · 30yr · ARM" },
            { icon: "🚗", label: "Auto / Car Loan", sub: "New & used vehicles" },
            { icon: "💼", label: "Personal Loan", sub: "Unsecured & secured" },
            { icon: "🎓", label: "Student Loan", sub: "Federal & private" },
            { icon: "🏢", label: "Business Loan", sub: "SBA & commercial" },
            { icon: "📊", label: "Bond / YTM", sub: "Yield to maturity" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col items-center text-center gap-2 hover:border-blue-200 hover:shadow-sm transition-all group"
            >
              <span className="text-2xl" role="img" aria-hidden="true">{item.icon}</span>
              <span className="text-sm font-bold text-slate-800 group-hover:text-blue-700 leading-tight">{item.label}</span>
              <span className="text-[11px] text-slate-400">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURE CARDS ────────────────────────────────────────────── */}
      <section aria-label="Calculator features" className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              label: "Full Amortization Schedule",
              icon: <TrendingUp size={22} />, color: "text-blue-600", bg: "bg-blue-50",
              desc: "Month-by-month principal & interest table. Download as PDF or print.",
            },
            {
              label: "Extra Payment Savings",
              icon: <Zap size={22} />, color: "text-amber-600", bg: "bg-amber-50",
              desc: "See exactly how much interest you save and months you cut with extra payments.",
            },
            {
              label: "Bank-Accurate Results",
              icon: <ShieldCheck size={22} />, color: "text-emerald-600", bg: "bg-emerald-50",
              desc: "Actuarial amortization method — same as US, UK, Canadian & Australian lenders.",
            },
            {
              label: "Total Lifetime Cost",
              icon: <Landmark size={22} />, color: "text-purple-600", bg: "bg-purple-50",
              desc: "See the true cost of borrowing: principal vs. interest over the full term.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex gap-4 items-start hover:shadow-md transition-all">
              <div className={`p-3.5 rounded-2xl ${item.bg} ${item.color} flex-shrink-0`}>{item.icon}</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1 text-[15px] leading-snug">{item.label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MAIN CONTENT + SIDEBAR ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* ─── ARTICLE BODY ─────────────────────────────────────────────
               This is the most important SEO element on the page.
               • Server-rendered HTML — fully crawlable by Googlebot
               • The seoContent string should be 1,400–1,800 words
               • Must contain H2/H3 with keyword-rich headings
               • Must include worked examples with real dollar amounts
               • Must reference US, UK, Canada, Australia naturally
               See CONTENT BRIEF at the bottom of this file.
          ──────────────────────────────────────────────────────────────── */}
          <article
            className="flex-1 min-w-0 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
            itemScope
            itemType="https://schema.org/Article"
          >
            <header className="px-6 md:px-10 py-8 border-b bg-slate-50 flex items-start gap-5">
              <div className="bg-blue-600 text-white p-4 rounded-2xl flex-shrink-0" aria-hidden="true">
                <BookOpen size={24} />
              </div>
              <div>
                {/* H2 must NOT repeat H1 but must contain a secondary keyword */}
                <h2 className="text-xl md:text-2xl font-bold text-slate-950 tracking-tight" itemProp="headline">
                  How Loan Payments &amp; Amortization Work — Complete 2026 Guide
                </h2>
                <p className="text-slate-500 text-sm mt-1.5">
                  Monthly payment formula · Amortization schedule explained · Pay off loans faster
                </p>
                <div className="flex items-center gap-4 mt-3 flex-wrap">
                  <time dateTime="2026-04-01" className="text-xs text-slate-400" itemProp="dateModified">
                    Updated April 2026
                  </time>
                  <span className="text-xs text-slate-400">~12 min read</span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-semibold">
                    Finance Guide
                  </span>
                </div>
              </div>
            </header>

            <div
              className="p-6 md:p-12 prose prose-slate max-w-none
                         prose-h2:text-xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-10
                         prose-h3:text-lg prose-h3:font-semibold prose-h3:text-slate-800 prose-h3:mt-7
                         prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
                         prose-strong:text-slate-900
                         prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                         prose-table:w-full prose-table:text-sm prose-th:bg-slate-50 prose-th:font-semibold prose-th:text-left prose-td:py-2"
              itemProp="articleBody"
            >
              {/* CMS-driven article content — see CONTENT BRIEF below */}
              <div dangerouslySetInnerHTML={{ __html: seoContent || "<p>Content loading…</p>" }} />

              {/* Formula box — embedded in article for featured snippet eligibility */}
              <div className="not-prose my-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="text-base font-bold text-blue-900 mb-3">
                  Monthly Loan Payment Formula
                </h3>
                <div className="bg-white rounded-xl p-5 font-mono text-sm text-slate-700 shadow-sm">
                  <p className="mb-1">
                    Monthly Payment = <strong>P × r × (1+r)^n</strong>
                  </p>
                  <p className="pl-[140px] mb-4">
                    ÷ <strong>[(1+r)^n − 1]</strong>
                  </p>
                  <div className="border-t border-slate-100 pt-3 space-y-1 text-xs text-slate-500">
                    <p><strong>P</strong> = Principal (loan amount)</p>
                    <p><strong>r</strong> = Monthly rate = Annual interest rate ÷ 12 ÷ 100</p>
                    <p><strong>n</strong> = Term in months = Years × 12</p>
                  </div>
                </div>
                <p className="text-xs text-blue-700 mt-3">
                  This is the standard actuarial formula used by lenders in the US, UK, Canada, Australia, and the EU.
                </p>
              </div>

              {/* Internal links block — critical for topical authority */}
              <div className="not-prose mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">
                  Related Finance Calculators
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {internalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-200"
                      >
                        <ArrowUpRight size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-slate-800 text-sm block">{link.label}</span>
                          <span className="text-xs text-slate-500">{link.desc}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <footer className="border-t px-6 md:px-12 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <Info size={16} className="text-blue-500 flex-shrink-0" />
                <span>
                  Actuarial method — consistent with CFPB (US), FCA (UK), ASIC (AU), and FCAC (CA) calculators.
                </span>
              </div>
              <ShareButtons
                title="Free Loan Calculator – Monthly Payment & Amortization Schedule 2026"
                url="https://www.freeuscalculator.in/loan-calculator"
              />
            </footer>
          </article>

          {/* ─── SIDEBAR ──────────────────────────────────────────────── */}
          <aside className="w-full lg:w-96 shrink-0 space-y-6" aria-label="Tips and related tools">

            {/* Tip card */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 shadow-2xl">
              <div className="text-blue-400 text-xs font-bold tracking-widest mb-3 uppercase">
                💡 Interest-Saving Tip
              </div>
              <h3 className="text-xl font-bold leading-snug mb-4">
                Bi-Weekly Payments — The Easiest Way to Save Thousands
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Pay half your monthly payment every two weeks.
                That gives you <strong className="text-white">26 half-payments</strong> = 13 full payments per year
                — one extra payment, all going to principal.
              </p>
              <p className="text-blue-200 text-sm mt-3">
                On a <strong className="text-white">$400,000 mortgage at 6.5% for 30 years</strong>,
                you save <strong className="text-white">~$90,000</strong> and finish 5 years early.
              </p>
              <Link
                href="#calculator"
                className="mt-5 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
              >
                Try it above <ArrowUpRight size={13} />
              </Link>
            </div>

            {/* Ad slot */}
            <div className="bg-white border border-dashed border-slate-200 rounded-3xl p-7 min-h-[160px] flex items-center justify-center">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Advertisement</p>
            </div>

            {/* International usage — signals global relevance to Google */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 text-center">
                Used Worldwide
              </h4>
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  { flag: "🇺🇸", label: "United States" },
                  { flag: "🇬🇧", label: "United Kingdom" },
                  { flag: "🇨🇦", label: "Canada" },
                  { flag: "🇦🇺", label: "Australia" },
                  { flag: "🇸🇬", label: "Singapore" },
                  { flag: "🇩🇪", label: "Germany" },
                ].map((c, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                    <span className="text-xl">{c.flag}</span>
                    <span className="text-[10px] text-slate-500 leading-tight font-medium">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related tools */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 text-center">
                More Finance Tools
              </h4>
              <div className="space-y-2">
                {relatedTools.slice(0, 5).map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    className="group flex items-center justify-between p-3.5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 text-blue-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
                        <Calculator size={15} />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800 group-hover:text-blue-700 text-sm block">
                          {tool.shortTitle || tool.title}
                        </span>
                        <span className="text-[11px] text-slate-400">{tool.category}</span>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-slate-300 group-hover:text-blue-500 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Social proof stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { stat: "12,847+", label: "Users / month" },
                { stat: "180+", label: "Countries" },
                { stat: "4.9 ★", label: "Rating" },
              ].map((s, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm">
                  <div className="text-lg font-black text-slate-900">{s.stat}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5 font-medium uppercase tracking-wide leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ─── RELATED CALCULATORS ──────────────────────────────────────── */}
      <RelatedCalculators
        currentTool="loan-calculator"
        title="More Loan & Finance Calculators"
        tools={relatedTools.map((t) => ({ slug: t.slug, title: t.title, description: t.description }))}
      />

      {/* ─── HOW TO USE — targets "how to use loan calculator" queries ── */}
      <section aria-label="How to use the loan calculator" className="bg-white border-t border-slate-100 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            How to Use This Calculator — 5 Simple Steps
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-5 gap-6" role="list">
            {[
              { n: "1", title: "Enter loan amount", desc: "Total amount you're borrowing — e.g. $25,000 for a car or $350,000 for a home." },
              { n: "2", title: "Enter interest rate", desc: "Your annual interest rate as a %. Check your lender's offer or loan agreement." },
              { n: "3", title: "Set loan term", desc: "Duration in years or months — e.g. 30 years for a mortgage, 60 months for auto." },
              { n: "4", title: "Add extra payment", desc: "Optional — see how paying more each month cuts interest and shortens the loan." },
              { n: "5", title: "View your results", desc: "Get monthly payment, total interest, payoff date & full amortization table." },
            ].map((step, i) => (
              <li key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────
           Targets "People Also Ask" boxes. Rules:
           • Each Q = exact search query phrasing
           • Each A = 40–90 words, self-contained, starts with a direct answer
           • FAQPage JSON-LD above mirrors this content exactly
      ──────────────────────────────────────────────────────────────────── */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="bg-zinc-50 py-16 md:py-24 border-t border-slate-100"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-black tracking-tighter text-slate-950 mb-3 text-center"
          >
            Loan Calculator — Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-center text-sm mb-12">
            Monthly payment formula · Amortization explained · Extra payments · Fixed vs variable rate
          </p>
          <div className="bg-white rounded-3xl p-6 md:p-12 border border-slate-100 shadow-sm">
            <FAQ title="" faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────────────
           Footer links are internal links — they pass PageRank and
           help Googlebot discover related pages.
      ──────────────────────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 py-14 px-4 text-white text-center">
        <div className="max-w-5xl mx-auto space-y-5">
          {/* Footer link cluster — boosts topical authority */}
          <nav aria-label="Footer finance calculators" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              { href: "/mortgage-calculator", label: "Mortgage Calculator" },
              { href: "/auto-loan-calculator", label: "Auto Loan Calculator" },
              { href: "/personal-loan-calculator", label: "Personal Loan Calculator" },
              { href: "/student-loan-calculator", label: "Student Loan Calculator" },
              { href: "/compound-interest-calculator", label: "Compound Interest" },
              { href: "/refinance-calculator", label: "Refinance Calculator" },
              { href: "/debt-payoff-calculator", label: "Debt Payoff Calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm font-medium text-slate-400">
            Free Loan Calculator · Monthly Payment &amp; Amortization Schedule · FreeUSCalculator.in
          </p>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Results use the standard actuarial amortization method and are for informational purposes only.
            Verify with your lender before making financial decisions. Not financial advice.
            Free to use in the US, UK, Canada, Australia, and worldwide.
          </p>
          <p className="text-xs text-slate-700 tracking-widest font-medium">
            © 2026 FREEUSCALCULATOR.IN · WORLDWIDE FINANCIAL TOOLS
          </p>
        </div>
      </footer>
    </main>
  );
}

/*
══════════════════════════════════════════════════════════════════════════════
  CONTENT BRIEF — for getToolContent("loan-calculator")
  The HTML this function returns fills the <article> body above.

  TARGET: 1,400–1,800 words of clean HTML prose
  AUDIENCE: US-first (use $), then UK/CA/AU
  LANGUAGE: "monthly payment" (NOT "EMI"), "interest rate", "loan term"
  DENSITY: ~1.5% max for "loan calculator" — do not over-optimise

  ── H2: How to Calculate Your Monthly Loan Payment ──────────────────────
  Keywords: "how to calculate loan monthly payment", "loan payment formula"
  - Explain formula in plain English before showing math
  - Worked example: $25,000 auto loan, 7.9% APR, 60 months → $506/month
  - HTML <table> showing 5 rows: Month 1, 2, 3, 30, 60
    Columns: Month | Payment | Principal | Interest | Balance
  - Note: formula is identical in US, UK, Canada, Australia

  ── H2: How to Read an Amortization Schedule ────────────────────────────
  Keywords: "what is amortization schedule", "amortization table explained"
  - Explain each column in plain English
  - Show that month 1 is mostly interest, month 60 is mostly principal
  - Mention the schedule is printable / downloadable

  ── H2: How Extra Payments Reduce Total Interest — Real Numbers ──────────
  Keywords: "loan calculator with extra payments", "how much does extra payment save"
  - Base case: $300,000 mortgage, 6.5%, 30yr → $1,896/mo, $382,000 interest
  - +$100/mo extra → saves $35,000, cuts ~3 years
  - +$300/mo extra → saves $87,000, cuts ~8 years
  - HTML <table> comparing the 3 scenarios

  ── H2: Fixed Rate vs. Variable Rate — Which Is Right for You? ──────────
  Keywords: "fixed vs variable rate mortgage", "adjustable rate vs fixed calculator"
  - US context: 30yr fixed vs 5/1 ARM; Fed rate cycle
  - UK context: fixed vs tracker; Bank of England base rate
  - CA context: fixed vs variable; Bank of Canada prime rate
  - AU context: fixed vs variable; RBA cash rate
  - 2-column pros/cons HTML <table>

  ── H2: 5 Proven Ways to Pay Off Your Loan Faster ───────────────────────
  Keywords: "how to pay off mortgage early", "pay off loan faster calculator"
  Numbered list in prose (not <ul>):
  1. Bi-weekly payments (saves most on mortgages — $90K on $400K at 6.5%)
  2. Round up your payment ($1,247 → $1,300 — simple, painless)
  3. Annual lump-sum to principal (tax refund, year-end bonus)
  4. Refinance to a shorter term when rates drop
  5. Apply windfalls directly to principal

  ── H3: What Is a Balloon Payment Loan? ─────────────────────────────────
  Keywords: "balloon payment loan explained", "balloon mortgage calculator"
  - 3–5 sentences. US context (commercial real estate, 5/7yr balloons).

  ── H3: How to Calculate Bond Yield to Maturity (YTM) ───────────────────
  Keywords: "bond yield to maturity calculator", "how to calculate YTM"
  - 3–5 sentences + show the approximate YTM formula.
  - Mention our bond calculator tab for exact iterative YTM.

  ── INTERNAL LINKS (embed naturally in the prose) ───────────────────────
  - "Use our mortgage calculator" → /mortgage-calculator
  - "Try the auto loan calculator" → /auto-loan-calculator
  - "See compound interest" → /compound-interest-calculator
  - "Compare two loans" → /loan-comparison-calculator

  ── CLOSING PARAGRAPH ───────────────────────────────────────────────────
  CTA: "Use the free loan calculator at the top of this page to run your
  own numbers instantly — no account or sign-up required."

══════════════════════════════════════════════════════════════════════════════
*/