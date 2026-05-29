// app/blog/page.tsx
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | FreeUSCalculator – 2026 Tax, Salary, Housing & Earnings Guides",
  description:
    "Free 2026 financial guides: paycheck tax breakdown, rent affordability, loan payments, DoorDash earnings, hourly to salary, India CTC, self-employment tax, savings planning. Real IRS-verified data.",
  alternates: { canonical: "https://www.freeuscalculator.in/blog" },
  openGraph: {
    title: "FreeUSCalculator Blog – 2026 Financial Guides",
    description: "12 in-depth guides on taxes, salary, rent, loans, gig income, and savings. IRS-verified, updated for 2026.",
    url: "https://www.freeuscalculator.in/blog",
    type: "website",
  },
};

export const dynamic = "force-dynamic";

// ─── ALL POSTS ───────────────────────────────────────────────────────────────
const POSTS = [
  {
    slug: "doordash-earnings-guide-2026",
    title: "How Much Do DoorDash Drivers Really Make in 2026?",
    excerpt: "Median gross $11.26/hr, real net $8–$15/hr after gas and taxes. Every IRS deduction, quarterly deadline, and three strategies top Dashers use to hit $16–$22/hr — based on 115,771-driver Gridwise data.",
    category: "Gig Economy",
    categoryAccent: "#3b82f6",
    categoryBg: "rgba(59,130,246,0.08)",
    readTime: "12 min",
    date: "May 2026",
    tags: ["DoorDash", "IRS Mileage", "1099 Tax"],
    relatedTool: { label: "DoorDash Calculator", href: "/doordash-earnings-calculator" },
    stats: [
      { value: "$11.26/hr", label: "Median gross" },
      { value: "$0.725/mi", label: "IRS 2026 rate" },
      { value: "15.3%", label: "SE tax rate" },
    ],
    featured: true,
    accentColor: "#3b82f6",
    bullets: [
      "Real data from 115,771 Gridwise Dashers",
      "2026 IRS mileage rate $0.725/mile verified",
      "Quarterly tax deadlines + reserve formula",
      "Gas vs hybrid vs EV vehicle comparison",
      "Every Schedule C deduction itemised",
    ],
    sources: "Gridwise Analytics 2026 · IRS Rev. Proc. 2025-18",
  },
  {
    slug: "paycheck-calculator-guide-2026",
    title: "Paycheck Calculator Guide 2026 – Take-Home Pay & All 50 States",
    excerpt: "Federal brackets, FICA rates, W-4 control, 401(k) and HSA savings, state tax comparison for all 50 states, California vs Texas, and NYC local tax. Real 2026 IRS numbers.",
    category: "Payroll & Tax",
    categoryAccent: "#f59e0b",
    categoryBg: "rgba(245,158,11,0.08)",
    readTime: "15 min",
    date: "May 2026",
    tags: ["Paycheck", "Federal Tax", "FICA", "50 States"],
    relatedTool: { label: "Paycheck Calculator", href: "/paycheck-calculator" },
    stats: [
      { value: "$184,500", label: "SS wage base" },
      { value: "$24,500", label: "401(k) limit" },
      { value: "9 states", label: "Zero income tax" },
    ],
    featured: false,
    accentColor: "#f59e0b",
    bullets: [],
    sources: "",
  },
  {
    slug: "salary-after-tax-guide-2026",
    title: "Salary After Tax 2026 – Take-Home Pay, Brackets & One Big Beautiful Bill",
    excerpt: "How much is $60K, $75K, or $100K after tax? Federal brackets, One Big Beautiful Bill deductions, state comparison for all 50 states, and how 401(k)/HSA cut your real tax bill.",
    category: "Taxes",
    categoryAccent: "#10b981",
    categoryBg: "rgba(16,185,129,0.08)",
    readTime: "13 min",
    date: "May 2026",
    tags: ["Salary", "Take-Home Pay", "OBBB 2026"],
    relatedTool: { label: "Salary After Tax Calculator", href: "/salary-after-tax-calculator" },
    stats: [
      { value: "$16,100", label: "Std. deduction" },
      { value: "7", label: "Fed brackets" },
      { value: "$25,000", label: "OBBB tips cap" },
    ],
    featured: false,
    accentColor: "#10b981",
    bullets: [],
    sources: "",
  },
  {
    slug: "rent-affordability-guide-2026",
    title: "Rent Affordability Guide 2026 – How Much Rent Can You Actually Afford?",
    excerpt: "The 30% rule explained, gross income illusion exposed, salary-to-rent tables ($25K–$150K), 13-city affordability guide, landlord income requirements, and what to do in expensive markets.",
    category: "Housing",
    categoryAccent: "#6366f1",
    categoryBg: "rgba(99,102,241,0.08)",
    readTime: "14 min",
    date: "May 2026",
    tags: ["Rent", "30% Rule", "City Guide", "DTI"],
    relatedTool: { label: "Rent Calculator", href: "/rent-affordability-calculator" },
    stats: [
      { value: "$1,900", label: "Avg US rent" },
      { value: "3×", label: "Landlord req." },
      { value: "36%", label: "DTI ceiling" },
    ],
    featured: false,
    accentColor: "#6366f1",
    bullets: [],
    sources: "",
  },
  {
    slug: "self-employment-tax-guide-2026",
    title: "Self-Employment Tax 2026 – 15.3% SE Tax, Quarterly Payments & Every Deduction",
    excerpt: "How freelancers and 1099 workers are taxed in 2026: the 15.3% SE tax step-by-step, every Schedule C deduction, QBI deduction worth up to 20%, quarterly deadlines, and S-Corp strategy.",
    category: "1099 & Freelance",
    categoryAccent: "#f97316",
    categoryBg: "rgba(249,115,22,0.08)",
    readTime: "14 min",
    date: "May 2026",
    tags: ["1099", "SE Tax", "QBI Deduction", "Schedule C"],
    relatedTool: { label: "SE Tax Calculator", href: "/self-employment-tax-calculator-usa" },
    stats: [
      { value: "15.3%", label: "SE tax rate" },
      { value: "92.35%", label: "Taxable base" },
      { value: "20%", label: "QBI deduction" },
    ],
    featured: false,
    accentColor: "#f97316",
    bullets: [],
    sources: "",
  },
  {
    slug: "savings-calculator-guide-2026",
    title: "Savings Calculator Guide 2026 – Compound Interest, Monthly Goals & Retirement",
    excerpt: "Saving $500/month at 7% for 30 years grows to $615,461. Compound interest with real tables, emergency fund targets, savings by age benchmarks, FIRE number calculator, and 5 strategies that build real wealth.",
    category: "Savings & Investing",
    categoryAccent: "#059669",
    categoryBg: "rgba(5,150,105,0.08)",
    readTime: "13 min",
    date: "May 2026",
    tags: ["Compound Interest", "FIRE", "Retirement", "Emergency Fund"],
    relatedTool: { label: "Savings Calculator", href: "/savings-calculator" },
    stats: [
      { value: "$615K", label: "$500/mo × 30yr" },
      { value: "4–5.2%", label: "HYSA rate 2026" },
      { value: "25×", label: "FIRE multiplier" },
    ],
    featured: false,
    accentColor: "#059669",
    bullets: [],
    sources: "",
  },
  {
    slug: "loan-calculator-guide-2026",
    title: "Loan Calculator Guide 2026 – Monthly Payment, Amortization & Extra Payment Savings",
    excerpt: "How to calculate monthly loan payments, read an amortization schedule, and save $74,000+ with extra payments. Current rates across US, UK, Canada, Australia, and India.",
    category: "Loans & Mortgage",
    categoryAccent: "#64748b",
    categoryBg: "rgba(100,116,139,0.08)",
    readTime: "14 min",
    date: "May 2026",
    tags: ["Mortgage", "Amortization", "Extra Payments"],
    relatedTool: { label: "Loan Calculator", href: "/loan-calculator" },
    stats: [
      { value: "$74,000", label: "Saved extra $200/mo" },
      { value: "6.39%", label: "US 30-yr rate" },
      { value: "APR", label: "Compare this" },
    ],
    featured: false,
    accentColor: "#64748b",
    bullets: [],
    sources: "",
  },
  {
    slug: "hourly-to-salary-guide-2026",
    title: "Hourly to Annual Salary Guide – $15, $20, $25, $30/hr Explained (2026)",
    excerpt: "How much is $20/hr per year? Every US hourly wage $10–$100/hr converted to annual, monthly, biweekly, and weekly. Includes overtime at 1.5×, after-tax take-home, and gross vs net breakdown.",
    category: "Salary",
    categoryAccent: "#8b5cf6",
    categoryBg: "rgba(139,92,246,0.08)",
    readTime: "10 min",
    date: "May 2026",
    tags: ["Hourly Pay", "Annual Salary", "Overtime"],
    relatedTool: { label: "Hourly to Salary Calculator", href: "/hourly-to-salary-calculator" },
    stats: [
      { value: "$41,600", label: "$20/hr annually" },
      { value: "2,080", label: "Work hours/yr" },
      { value: "1.5×", label: "Overtime rate" },
    ],
    featured: false,
    accentColor: "#8b5cf6",
    bullets: [],
    sources: "",
  },
  {
    slug: "india-salary-guide-2026",
    title: "India Salary Guide 2026 – CTC to In-Hand, NRI Comparison & Freelancer Rates",
    excerpt: "CTC ≠ your salary. ₹12 LPA gives only ₹85,500/month in-hand. Full breakdown of old vs new tax regime, NRI salary comparison across UAE/US/UK, and freelancer USD rates.",
    category: "India & Global",
    categoryAccent: "#f59e0b",
    categoryBg: "rgba(245,158,11,0.08)",
    readTime: "15 min",
    date: "May 2026",
    tags: ["India", "CTC", "NRI Salary", "₹ to $"],
    relatedTool: { label: "India Salary Calculator", href: "/india-salary-calculator" },
    stats: [
      { value: "₹85,500", label: "₹12 LPA in-hand" },
      { value: "₹84/$", label: "Apr 2026 rate" },
      { value: "2", label: "Tax regimes" },
    ],
    featured: false,
    accentColor: "#f59e0b",
    bullets: [],
    sources: "",
  },
  {
    slug: "uber-eats-earnings-guide-2026",
    title: "Uber Eats Driver Earnings 2026 – Real Take-Home After All Costs",
    excerpt: "Uber Eats pays $24.68/hr gross in dense urban markets. After gas, the $0.725/mile IRS deduction, and 15.3% SE tax, here's what you actually keep — with vehicle comparison tables.",
    category: "Gig Economy",
    categoryAccent: "#3b82f6",
    categoryBg: "rgba(59,130,246,0.08)",
    readTime: "11 min",
    date: "May 2026",
    tags: ["Uber Eats", "Gig Workers", "IRS Mileage"],
    relatedTool: { label: "Uber Eats Calculator", href: "/uber-eats-earnings-calculator" },
    stats: [
      { value: "$24.68/hr", label: "Gross (urban)" },
      { value: "23%", label: "US market share" },
      { value: "$0.725/mi", label: "IRS deduction" },
    ],
    featured: false,
    accentColor: "#3b82f6",
    bullets: [],
    sources: "",
  },
  {
    slug: "loan-emi-guide-2026",
    title: "Loan EMI Guide 2026 – Save Thousands by Comparing Loan Offers Correctly",
    excerpt: "A 1% rate difference on a $30,000 car loan saves $1,600+ in total interest. Amortization explained, APR vs interest rate, how to compare loan offers, and what actually matters in the fine print.",
    category: "Loans",
    categoryAccent: "#64748b",
    categoryBg: "rgba(100,116,139,0.08)",
    readTime: "7 min",
    date: "April 2026",
    tags: ["EMI", "Car Loan", "APR vs Rate"],
    relatedTool: { label: "Loan EMI Calculator", href: "/loan-emi-calculator" },
    stats: [
      { value: "$1,600+", label: "Saved per 1% drop" },
      { value: "360", label: "Months in 30yr" },
      { value: "APR", label: "Compare this" },
    ],
    featured: false,
    accentColor: "#64748b",
    bullets: [],
    sources: "",
  },
];

const CATEGORIES = ["All", "Gig Economy", "Payroll & Tax", "Taxes", "Housing", "1099 & Freelance", "Savings & Investing", "Loans & Mortgage", "Salary", "India & Global", "Loans"];

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "FreeUSCalculator Blog",
    url: "https://www.freeuscalculator.in/blog",
    description:
      "Practical 2026 guides on paycheck taxes, rent affordability, loan payments, gig worker earnings, IRS mileage, self-employment tax, Indian salaries, savings planning, and hourly-to-salary conversions — each paired with a free calculator.",
    publisher: {
      "@type": "Organization",
      name: "FreeUSCalculator",
      url: "https://www.freeuscalculator.in",
      logo: { "@type": "ImageObject", url: "https://www.freeuscalculator.in/logo.png" },
    },
    blogPost: POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://www.freeuscalculator.in/blog/${p.slug}`,
      description: p.excerpt,
      datePublished: "2026-04-01",
      dateModified: "2026-05-01",
      author: { "@type": "Organization", name: "FreeUSCalculator" },
    })),
  };

  const featured = POSTS.find((p) => p.featured)!;
  const rest = POSTS.filter((p) => !p.featured);

  return (
    <>
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

        .blog-root {
          font-family: 'DM Sans', sans-serif;
          background: #f8f7f4;
          min-height: 100vh;
        }

        .blog-display { font-family: 'Syne', sans-serif; }

        /* ── Hero ── */
        .hero-wrap {
          background: #0b0e17;
          position: relative;
          overflow: hidden;
        }
        .hero-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .hero-glow-a {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          top: -200px; left: -100px;
          background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-glow-b {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          bottom: -200px; right: -50px;
          background: radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 24px 96px;
        }
        @media(min-width:768px) { .hero-content { padding: 112px 32px 128px; } }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.3);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #a5b4fc;
          margin-bottom: 28px;
        }
        .pulse-dot {
          width: 7px; height: 7px;
          background: #6366f1;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }

        .hero-h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.4rem, 7vw, 5.5rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
          color: #fff;
          margin-bottom: 20px;
        }
        .hero-h1 em {
          font-style: normal;
          background: linear-gradient(135deg, #818cf8 0%, #34d399 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-sub {
          color: #94a3b8;
          font-size: clamp(1rem, 2vw, 1.15rem);
          max-width: 540px;
          line-height: 1.65;
          margin-bottom: 36px;
        }
        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 56px;
        }
        .hero-tag {
          padding: 5px 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 100px;
          font-size: 11px;
          color: #94a3b8;
          font-weight: 500;
          white-space: nowrap;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
          max-width: 560px;
        }
        .hero-stat {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 16px 18px;
        }
        .hero-stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          line-height: 1;
          margin-bottom: 4px;
        }
        .hero-stat-label {
          font-size: 10px;
          color: #64748b;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        /* ── Main layout ── */
        .blog-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 64px 20px 96px;
        }
        @media(min-width:768px) { .blog-body { padding: 80px 32px 120px; } }

        .section-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .section-label-text {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #94a3b8;
          white-space: nowrap;
        }
        .section-label-line {
          height: 1px;
          flex: 1;
          background: linear-gradient(90deg, #e2e8f0 0%, transparent 100%);
        }
        .section-label-count {
          font-size: 10px;
          color: #94a3b8;
          font-weight: 600;
          white-space: nowrap;
        }

        /* ── Featured card ── */
        .featured-card {
          background: #0b0e17;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          display: grid;
          grid-template-columns: 1fr;
          margin-bottom: 80px;
          box-shadow: 0 32px 64px rgba(0,0,0,0.14), 0 0 0 1px rgba(255,255,255,0.04);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .featured-card:hover {
          box-shadow: 0 40px 80px rgba(0,0,0,0.2), 0 0 0 1px rgba(99,102,241,0.2);
          transform: translateY(-2px);
        }
        @media(min-width:900px) {
          .featured-card { grid-template-columns: 1fr 1fr; }
        }

        .featured-left {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 420px;
          position: relative;
          overflow: hidden;
        }
        @media(min-width:768px) { .featured-left { padding: 52px; } }

        .featured-left-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 20% 80%, rgba(59,130,246,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .featured-left-content { position: relative; z-index: 1; }

        .featured-badge-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .cat-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: 1px solid;
        }
        .featured-cat {
          background: rgba(59,130,246,0.12);
          border-color: rgba(59,130,246,0.3);
          color: #93c5fd;
        }
        .featured-label {
          background: rgba(99,102,241,0.15);
          border-color: rgba(99,102,241,0.3);
          color: #a5b4fc;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid;
        }

        .featured-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.5rem, 3.5vw, 2.1rem);
          font-weight: 800;
          line-height: 1.15;
          color: #fff;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
          text-decoration: none;
          display: block;
          transition: color 0.2s;
        }
        .featured-title:hover { color: #93c5fd; }

        .featured-excerpt {
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .featured-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 32px;
        }
        .featured-stat {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 14px 10px;
          text-align: center;
        }
        .featured-stat-v {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 800;
          color: #60a5fa;
          line-height: 1;
          margin-bottom: 4px;
        }
        .featured-stat-l {
          font-size: 9px;
          color: #475569;
          font-weight: 500;
          letter-spacing: 0.04em;
          line-height: 1.3;
        }

        .featured-btns {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          background: #3b82f6;
          color: #fff;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover { background: #2563eb; transform: translateY(-1px); }
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 11px 20px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: #94a3b8;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.1); color: #fff; }

        /* ── Featured right panel ── */
        .featured-right {
          background: #f8f7f4;
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        @media(min-width:768px) { .featured-right { padding: 52px; } }

        .fr-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .fr-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #94a3b8;
          font-weight: 500;
        }

        .fr-whats-inside-label {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 14px;
        }
        .fr-bullet {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid #e9e7e2;
          font-size: 13px;
          color: #374151;
          font-weight: 500;
          line-height: 1.4;
        }
        .fr-bullet:last-child { border-bottom: none; }
        .fr-bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3b82f6;
          margin-top: 5px;
          flex-shrink: 0;
        }

        .fr-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .fr-tag {
          padding: 4px 12px;
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 100px;
          font-size: 10px;
          color: #64748b;
          font-weight: 600;
        }

        .fr-sources {
          font-size: 10px;
          color: #94a3b8;
          border-top: 1px solid #e9e7e2;
          padding-top: 16px;
          line-height: 1.6;
        }

        /* ── Post grid ── */
        .posts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media(min-width:640px) { .posts-grid { grid-template-columns: repeat(2, 1fr); } }
        @media(min-width:1000px) { .posts-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ── Post card ── */
        .post-card {
          background: #fff;
          border-radius: 22px;
          border: 1px solid #e9e7e2;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
        }
        .post-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.08);
          border-color: rgba(99,102,241,0.2);
        }
        .post-card-accent {
          height: 3px;
          width: 100%;
        }
        .post-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .post-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
          gap: 8px;
          flex-wrap: wrap;
        }
        .post-cat {
          display: inline-flex;
          align-items: center;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid;
          white-space: nowrap;
        }
        .post-meta {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
        }
        .post-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
          margin-bottom: 10px;
          text-decoration: none;
          display: block;
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }
        .post-title:hover { color: #4f46e5; }
        .post-excerpt {
          font-size: 13px;
          color: #64748b;
          line-height: 1.65;
          margin-bottom: 18px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .post-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          margin-bottom: 16px;
        }
        .post-stat {
          background: #f8f7f4;
          border: 1px solid #edecea;
          border-radius: 10px;
          padding: 8px 6px;
          text-align: center;
        }
        .post-stat-v {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1;
          margin-bottom: 2px;
          letter-spacing: -0.01em;
        }
        .post-stat-l {
          font-size: 8px;
          color: #94a3b8;
          font-weight: 500;
          line-height: 1.2;
        }
        .post-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 18px;
        }
        .post-tag {
          padding: 3px 9px;
          background: #f1f5f9;
          border-radius: 100px;
          font-size: 9px;
          color: #64748b;
          font-weight: 600;
          letter-spacing: 0.03em;
        }
        .post-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid #f1f0ed;
          gap: 8px;
        }
        .post-tool-link {
          font-size: 10px;
          color: #94a3b8;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 500;
          transition: color 0.2s;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 55%;
        }
        .post-tool-link:hover { color: #4f46e5; }
        .post-read-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.15s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .post-read-btn:hover { opacity: 0.9; transform: translateX(2px); }

        /* ── Newsletter/CTA section ── */
        .cta-section {
          margin-top: 80px;
          border-radius: 28px;
          overflow: hidden;
          background: #0b0e17;
          border: 1px solid rgba(255,255,255,0.06);
          padding: 56px 40px;
          text-align: center;
          position: relative;
        }
        @media(min-width:768px) { .cta-section { padding: 72px 60px; } }
        .cta-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .cta-content { position: relative; z-index: 1; }
        .cta-eyebrow {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #818cf8;
          margin-bottom: 16px;
        }
        .cta-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 4vw, 3rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .cta-sub {
          color: #64748b;
          font-size: 15px;
          max-width: 460px;
          margin: 0 auto 36px;
          line-height: 1.65;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: #fff;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 32px rgba(99,102,241,0.35);
        }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(99,102,241,0.45); }

        /* ── Floating category bar ── */
        .category-bar {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
          margin-bottom: 40px;
          scrollbar-width: none;
        }
        .category-bar::-webkit-scrollbar { display: none; }
        .cat-pill {
          display: inline-flex;
          align-items: center;
          padding: 7px 16px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          border: 1px solid transparent;
          text-decoration: none;
          color: #64748b;
          background: #fff;
          border-color: #e2e8f0;
          transition: all 0.2s;
        }
        .cat-pill:hover { border-color: #a5b4fc; color: #4f46e5; background: #eef2ff; }
        .cat-pill-active {
          background: #0b0e17;
          color: #fff;
          border-color: #0b0e17;
        }
        .cat-pill-active:hover { background: #1e2332; color: #fff; border-color: #1e2332; }

        /* ── Reading time icon ── */
        .clock-icon { width: 11px; height: 11px; opacity: 0.6; }
        .calc-icon { width: 10px; height: 10px; opacity: 0.7; }
        .arrow-icon { width: 11px; height: 11px; }
        .zap-icon { width: 16px; height: 16px; }

        /* ── Responsive tweaks ── */
        @media(max-width:480px) {
          .featured-stats { grid-template-columns: repeat(3, 1fr); gap: 8px; }
          .featured-stat-v { font-size: 0.9rem; }
          .hero-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="blog-root">
        {/* ════ HERO ════ */}
        <header className="hero-wrap" role="banner">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-glow-a" aria-hidden="true" />
          <div className="hero-glow-b" aria-hidden="true" />
          <div className="hero-content">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-600 mb-8 flex-wrap">
              <a href="/" className="hover:text-slate-300 transition-colors">Home</a>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M3.5 2.5L6.5 5 3.5 7.5" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-slate-400">Blog</span>
            </nav>

            <div className="hero-badge">
              <span className="pulse-dot" aria-hidden="true" />
              {POSTS.length} guides · Updated May 2026
            </div>

            <h1 className="hero-h1 blog-display">
              Financial Guides <br />
              <em>Built to Rank.</em>
            </h1>
            <p className="hero-sub">
              Real IRS-verified data for gig workers, employees, renters, borrowers,
              and investors. No ads. No sign-up. No fluff.
            </p>

            <div className="hero-tags" role="list" aria-label="Guide topics">
              {["Paycheck Tax","Rent Affordability","Loan Calculator","DoorDash Earnings","Hourly to Salary","India CTC","Self-Employment Tax","Savings Planning","Salary After Tax","Uber Eats Income"].map((t) => (
                <span key={t} className="hero-tag" role="listitem">{t}</span>
              ))}
            </div>

            <div className="hero-stats" role="list" aria-label="Key statistics">
              {[
                { v: POSTS.length + " guides", l: "Published & indexed" },
                { v: "2026 IRS", l: "Rates & brackets" },
                { v: "100% free", l: "No login required" },
                { v: "50 states", l: "US coverage" },
              ].map((s) => (
                <div key={s.l} className="hero-stat" role="listitem">
                  <div className="hero-stat-value blog-display">{s.v}</div>
                  <div className="hero-stat-label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ════ BODY ════ */}
        <main className="blog-body">

          {/* ── Featured Post ── */}
          <section aria-labelledby="featured-heading">
            <div className="section-label">
              <span className="section-label-text" id="featured-heading">Featured Guide</span>
              <div className="section-label-line" />
            </div>

            <article className="featured-card" aria-label={`Featured: ${featured.title}`}>
              {/* Left — dark panel */}
              <div className="featured-left">
                <div className="featured-left-bg" aria-hidden="true" />
                <div className="featured-left-content">
                  <div className="featured-badge-row">
                    <span className="cat-badge featured-cat">{featured.category}</span>
                    <span className="featured-label">✦ Featured</span>
                  </div>

                  <a href={`/blog/${featured.slug}`} className="featured-title">
                    {featured.title}
                  </a>

                  <p className="featured-excerpt">{featured.excerpt}</p>

                  <div className="featured-stats" role="list" aria-label="Key stats">
                    {featured.stats.map((s) => (
                      <div key={s.label} className="featured-stat" role="listitem">
                        <div className="featured-stat-v blog-display">{s.value}</div>
                        <div className="featured-stat-l">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="featured-btns">
                    <a href={`/blog/${featured.slug}`} className="btn-primary" aria-label={`Read ${featured.title}`}>
                      Read Full Guide
                      <svg className="arrow-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href={featured.relatedTool.href} className="btn-ghost">
                      <svg className="calc-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M5 8h6M8 5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      {featured.relatedTool.label}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right — light panel */}
              <div className="featured-right">
                <div className="fr-meta">
                  <span className="fr-meta-item">
                    <svg className="clock-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {featured.readTime} read
                  </span>
                  <span className="fr-meta-item">
                    <svg className="clock-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M5 1.5v3M11 1.5v3M2 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {featured.date}
                  </span>
                </div>

                <div>
                  <p className="fr-whats-inside-label">What&apos;s inside</p>
                  <div role="list" aria-label="Guide contents">
                    {featured.bullets.map((b) => (
                      <div key={b} className="fr-bullet" role="listitem">
                        <div className="fr-bullet-dot" aria-hidden="true" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="fr-tags" role="list" aria-label="Tags">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="fr-tag" role="listitem">{tag}</span>
                  ))}
                </div>

                {featured.sources && (
                  <div className="fr-sources">
                    <strong>Sources:</strong> {featured.sources}
                  </div>
                )}
              </div>
            </article>
          </section>

          {/* ── All Posts ── */}
          <section aria-labelledby="all-guides-heading">
            <div className="section-label">
              <span className="section-label-text" id="all-guides-heading">All Guides</span>
              <div className="section-label-line" />
              <span className="section-label-count">{rest.length} articles · 2026</span>
            </div>

            <div className="posts-grid" role="list" aria-label="All guide articles">
              {rest.map((post) => (
                <article
                  key={post.slug}
                  className="post-card"
                  role="listitem"
                  aria-label={post.title}
                >
                  {/* Accent bar */}
                  <div
                    className="post-card-accent"
                    style={{ background: `linear-gradient(90deg, ${post.accentColor}, transparent)` }}
                    aria-hidden="true"
                  />

                  <div className="post-card-body">
                    {/* Top row */}
                    <div className="post-card-top">
                      <span
                        className="post-cat"
                        style={{
                          background: post.categoryBg,
                          borderColor: `${post.accentColor}40`,
                          color: post.accentColor,
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="post-meta">
                        <svg className="clock-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <a href={`/blog/${post.slug}`} className="post-title" aria-label={`Read: ${post.title}`}>
                      {post.title}
                    </a>

                    {/* Excerpt */}
                    <p className="post-excerpt">{post.excerpt}</p>

                    {/* Stats */}
                    <div className="post-stats" role="list" aria-label="Key statistics">
                      {post.stats.map((s) => (
                        <div key={s.label} className="post-stat" role="listitem">
                          <div
                            className="post-stat-v blog-display"
                            style={{ color: post.accentColor }}
                          >
                            {s.value}
                          </div>
                          <div className="post-stat-l">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="post-tags" role="list" aria-label="Tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="post-tag" role="listitem">{tag}</span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="post-footer">
                      <a
                        href={post.relatedTool.href}
                        className="post-tool-link"
                        aria-label={`Open ${post.relatedTool.label}`}
                      >
                        <svg className="calc-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M5 8h6M8 5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        {post.relatedTool.label}
                      </a>
                      <a
                        href={`/blog/${post.slug}`}
                        className="post-read-btn"
                        style={{ background: post.accentColor }}
                        aria-label={`Read full guide: ${post.title}`}
                      >
                        Read
                        <svg className="arrow-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="cta-section" aria-labelledby="cta-heading">
            <div className="cta-glow" aria-hidden="true" />
            <div className="cta-content">
              <p className="cta-eyebrow">Free · No Sign-Up · All 50 States</p>
              <h2 className="cta-title blog-display" id="cta-heading">
                Ready to calculate<br />your real numbers?
              </h2>
              <p className="cta-sub">
                Every guide pairs with a free calculator — 85+ tools updated for
                2026 IRS rates. Instant results, no account needed.
              </p>
              <a href="/tax-calculators" className="cta-btn" aria-label="Explore all free calculators">
                Explore 85+ Free Calculators
                <svg className="zap-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M13 3L4.5 13.5H12L11 21L19.5 10.5H12L13 3Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}