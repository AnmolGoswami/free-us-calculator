// app/blog/page.tsx
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import {
  Clock, TrendingUp, ArrowRight, Calculator,
  ChevronRight, Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | FreeUSCalculator – 2026 Tax Guides, Gig Earnings & Salary Guides",
  description:
    "Free 2026 financial guides: loan calculator, DoorDash & Uber Eats earnings, hourly to salary, India CTC, self-employment tax, salary after tax, and rent affordability. Real data, IRS-verified.",
  alternates: {
    canonical: "https://www.freeuscalculator.in/blog",
  },
};

export const dynamic = "force-dynamic";

// ─────────────────────────────────────────────────────────────────────────────
// ALL POSTS
// To add a new post: add an entry here + create app/blog/[slug]/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
const POSTS = [
  {
    slug: "doordash-earnings-guide-2026",
    title: "How Much Do DoorDash Drivers Really Make in 2026?",
    excerpt:
      "Median gross $11.26/hr, real net $8–$15/hr after gas and taxes. Every IRS deduction, quarterly tax deadline, and the three strategies top Dashers use to hit $16–$22/hr — based on 115,771-driver Gridwise data.",
    category: "Gig Economy",
    categoryColor: "text-blue-700 bg-blue-50 border-blue-100",
    date: "May 2026",
    readTime: "12 min",
    tags: ["DoorDash", "IRS Mileage", "Self-Employment Tax"],
    relatedTool: { label: "DoorDash Earnings Calculator", href: "/doordash-earnings-calculator" },
    stats: [
      { value: "$11.26/hr", label: "Median gross" },
      { value: "$0.725/mi", label: "IRS 2026 rate" },
      { value: "15.3%",     label: "SE tax" },
    ],
    featured: true,
    bulletPoints: [
      "Real Gridwise data from 115,771 Dashers",
      "2026 IRS mileage rate $0.725/mile (IRS Rev. Proc. 2025-18)",
      "Quarterly tax deadlines + weekly reserve formula",
      "Vehicle comparison: gas vs hybrid vs EV",
      "Every Schedule C deduction explained",
    ],
    sources: "Gridwise Analytics 2026 · IRS Rev. Proc. 2025-18 · IRS Pub. 463",
  },
  {
    slug: "loan-calculator-guide-2026",
    title: "Loan Calculator Guide 2026 – Monthly Payment, Amortization & Extra Payment Savings",
    excerpt:
      "How to calculate monthly loan payments, read an amortization schedule, and save $74,000+ with extra payments. Current rates in US, UK, Canada, Australia, and India. Covers mortgages, auto, personal, and student loans.",
    category: "Finance · Loans",
    categoryColor: "text-slate-700 bg-slate-50 border-slate-200",
    date: "May 2026",
    readTime: "14 min",
    tags: ["Loans", "Mortgage", "Amortization", "Extra Payments"],
    relatedTool: { label: "Loan Calculator", href: "/loan-calculator" },
    stats: [
      { value: "$74,000", label: "Saved with $200/mo extra" },
      { value: "$90,000", label: "Saved bi-weekly ($400K)" },
      { value: "6.39%",   label: "US 30-yr rate May 2026" },
    ],
    featured: false,
    bulletPoints: [],
    sources: "",
  },
  {
    slug: "hourly-to-salary-guide-2026",
    title: "Hourly to Annual Salary Guide – $15, $20, $25, $30/hr Explained (US 2026)",
    excerpt:
      "How much is $20 an hour per year? Every US hourly wage from $10–$100/hr converted to annual, monthly, biweekly, and weekly pay. Includes overtime at 1.5×, after-tax take-home, and gross vs net breakdown.",
    category: "Finance",
    categoryColor: "text-violet-700 bg-violet-50 border-violet-100",
    date: "May 2026",
    readTime: "10 min",
    tags: ["Hourly Pay", "Annual Salary", "Overtime"],
    relatedTool: { label: "Hourly to Salary Calculator", href: "/hourly-to-salary-calculator" },
    stats: [
      { value: "$41,600", label: "$20/hr annually" },
      { value: "2,080",   label: "Hours in a work year" },
      { value: "1.5×",    label: "FLSA overtime rate" },
    ],
    featured: false,
    bulletPoints: [],
    sources: "",
  },
  {
    slug: "india-salary-guide-2026",
    title: "India Salary Guide 2026 – CTC to In-Hand, NRI Comparison & Freelancer Rates",
    excerpt:
      "CTC ≠ your salary. ₹12 LPA gives ₹85,500/month in-hand. Full breakdown of old vs new regime, ₹50K–₹1L in-hand figures, NRI salary comparison across UAE/US/UK, and freelancer USD rates for 2026.",
    category: "India · Global",
    categoryColor: "text-amber-700 bg-amber-50 border-amber-100",
    date: "May 2026",
    readTime: "15 min",
    tags: ["India", "CTC", "NRI", "Freelancer Rates"],
    relatedTool: { label: "India Salary Calculator", href: "/india-salary-calculator" },
    stats: [
      { value: "₹85,500", label: "₹12 LPA in-hand/mo" },
      { value: "₹84/$",   label: "Apr 2026 rate" },
      { value: "2",       label: "Tax regimes compared" },
    ],
    featured: false,
    bulletPoints: [],
    sources: "",
  },
  {
    slug: "uber-eats-earnings-guide-2026",
    title: "Uber Eats Driver Earnings in 2026 – Real Take-Home After All Costs",
    excerpt:
      "Uber Eats pays $24.68/hr gross in dense urban markets — but after gas, the $0.725/mile IRS deduction, and 15.3% SE tax, your real net is much lower. Full breakdown with vehicle comparisons.",
    category: "Gig Economy",
    categoryColor: "text-blue-700 bg-blue-50 border-blue-100",
    date: "May 2026",
    readTime: "11 min",
    tags: ["Uber Eats", "Gig Workers", "IRS Mileage"],
    relatedTool: { label: "Uber Eats Earnings Calculator", href: "/uber-eats-earnings-calculator" },
    stats: [
      { value: "$24.68/hr", label: "Gross (urban)" },
      { value: "23%",       label: "US market share" },
      { value: "$0.725/mi", label: "IRS deduction" },
    ],
    featured: false,
    bulletPoints: [],
    sources: "",
  },
  {
    slug: "self-employment-tax-guide-2026",
    title: "Self-Employment Tax in 2026 – Complete Guide for 1099 Workers",
    excerpt:
      "As a 1099 contractor you pay both halves of Social Security and Medicare — 15.3% total. Step-by-step calculation, every deduction that reduces it, and all four quarterly payment deadlines.",
    category: "Taxes",
    categoryColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    date: "April 2026",
    readTime: "10 min",
    tags: ["1099", "Self-Employment", "Quarterly Taxes"],
    relatedTool: { label: "Self-Employment Tax Calculator", href: "/self-employment-tax-calculator" },
    stats: [
      { value: "15.3%",  label: "SE tax rate" },
      { value: "92.35%", label: "Taxable base" },
      { value: "Apr 15", label: "Q1 deadline" },
    ],
    featured: false,
    bulletPoints: [],
    sources: "",
  },
  {
    slug: "salary-after-tax-guide-2026",
    title: "Salary After Tax in 2026 – What You Actually Take Home",
    excerpt:
      "Your $75,000 salary is not your take-home pay. After federal brackets, FICA, and state tax, the real number can be 25–35% lower. Exact deductions shown for every income level.",
    category: "Taxes",
    categoryColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    date: "April 2026",
    readTime: "9 min",
    tags: ["Salary", "Federal Tax", "FICA", "2026 Brackets"],
    relatedTool: { label: "Salary After Tax Calculator", href: "/salary-after-tax-calculator" },
    stats: [
      { value: "$15,000", label: "Std. deduction (single)" },
      { value: "7",       label: "Federal brackets" },
      { value: "37%",     label: "Top marginal rate" },
    ],
    featured: false,
    bulletPoints: [],
    sources: "",
  },
  {
    slug: "rent-affordability-guide-2026",
    title: "How Much Rent Can I Afford in 2026? Beyond the 30% Rule",
    excerpt:
      "The 30% rule is outdated in most US cities. Most financial experts now recommend housing under 25–28% of take-home pay. Here is how to calculate your real affordable rent number.",
    category: "Personal Finance",
    categoryColor: "text-rose-700 bg-rose-50 border-rose-100",
    date: "April 2026",
    readTime: "8 min",
    tags: ["Rent", "Budgeting", "Affordability"],
    relatedTool: { label: "Rent Affordability Calculator", href: "/rent-affordability-calculator" },
    stats: [
      { value: "25–28%", label: "Recommended housing %" },
      { value: "30%",    label: "Old rule of thumb" },
      { value: "3×",     label: "Rent-to-income ratio" },
    ],
    featured: false,
    bulletPoints: [],
    sources: "",
  },
  {
    slug: "loan-emi-guide-2026",
    title: "Loan EMI Calculator Guide 2026 – Save Thousands on Interest",
    excerpt:
      "A 1% difference in interest rate on a $30,000 car loan saves over $1,600 in total interest. Amortization explained, how to compare loan offers, and what actually matters in the fine print.",
    category: "Loans",
    categoryColor: "text-slate-700 bg-slate-50 border-slate-200",
    date: "April 2026",
    readTime: "7 min",
    tags: ["Loans", "EMI", "Amortization", "Interest Rate"],
    relatedTool: { label: "Loan EMI Calculator", href: "/loan-emi-calculator" },
    stats: [
      { value: "$1,600+", label: "Saved per 1% rate drop" },
      { value: "360",     label: "Months in a 30yr loan" },
      { value: "APR",     label: "Compare this, not rate" },
    ],
    featured: false,
    bulletPoints: [],
    sources: "",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FEATURED POST
// ─────────────────────────────────────────────────────────────────────────────
function FeaturedPost({ post }: { post: typeof POSTS[0] }) {
  return (
    <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm
                    hover:shadow-md transition-shadow bg-white">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[52%] p-8 md:p-10 flex flex-col justify-between"
          style={{ background: "linear-gradient(150deg,#060d1f 0%,#0c1e46 60%,#060d1f 100%)" }}>
          <div>
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className={`px-3 py-1 rounded-full border text-[10px] font-black
                               uppercase tracking-widest ${post.categoryColor}`}>
                {post.category}
              </span>
              <span className="text-blue-400 text-[10px] font-black uppercase
                               tracking-widest bg-blue-500/20 px-2.5 py-1 rounded-full">
                Featured
              </span>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl md:text-3xl font-black leading-[1.2] text-white
                              mb-4 hover:text-blue-300 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-slate-400 text-[14px] leading-relaxed mb-6">{post.excerpt}</p>
            <div className="grid grid-cols-3 gap-3 mb-7">
              {post.stats.map((s) => (
                <div key={s.label}
                  className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
                  <p className="font-black text-blue-400 text-base tabular-nums
                                 leading-none mb-1">{s.value}</p>
                  <p className="text-[10px] text-slate-500 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Link href={`/blog/${post.slug}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600
                         hover:bg-blue-500 text-white font-black text-[13px]
                         transition-colors group">
              Read guide
              <ArrowRight size={13}
                className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href={post.relatedTool.href}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border
                         border-white/20 text-white/70 hover:text-white
                         hover:border-white/40 font-semibold text-[13px] transition-colors">
              <Calculator size={13} />
              {post.relatedTool.label}
            </Link>
          </div>
        </div>

        <div className="lg:w-[48%] bg-slate-50 p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 text-[12px] text-slate-400 mb-6">
              <span className="flex items-center gap-1.5">
                <Clock size={12} /> {post.readTime} read
              </span>
            </div>
            <p className="text-[11px] font-black uppercase tracking-widest
                           text-slate-400 mb-3">What&apos;s inside</p>
            <div className="space-y-2.5 mb-7">
              {post.bulletPoints.map((pt) => (
                <div key={pt}
                  className="flex items-center gap-2.5 text-[13px] text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  {pt}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200
                             text-slate-600 text-[11px] font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {post.sources && (
            <div className="mt-7 pt-5 border-t border-slate-200">
              <p className="text-[11px] text-slate-400">Sources: {post.sources}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// POST CARD
// ─────────────────────────────────────────────────────────────────────────────
function PostCard({ post }: { post: typeof POSTS[0] }) {
  return (
    <article className="rounded-2xl bg-white border border-slate-200 shadow-sm
                        hover:shadow-md hover:border-blue-100 transition-all
                        overflow-hidden flex flex-col">
      <div className="h-1 bg-gradient-to-r from-blue-600 to-violet-600" />
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className={`px-2.5 py-1 rounded-full border text-[10px] font-black
                           uppercase tracking-wider ${post.categoryColor}`}>
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <Clock size={11} /> {post.readTime}
          </span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-black text-slate-900 text-[16px] leading-snug mb-3
                          hover:text-blue-700 transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="text-slate-500 text-[13px] leading-relaxed mb-5 flex-1">
          {post.excerpt}
        </p>

        <div className="grid grid-cols-3 gap-2 mb-5">
          {post.stats.map((s) => (
            <div key={s.label}
              className="rounded-lg bg-slate-50 border border-slate-100 p-2.5 text-center">
              <p className="font-black text-blue-700 text-[12px] tabular-nums
                             leading-none mb-0.5">{s.value}</p>
              <p className="text-[9px] text-slate-400 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {post.tags.map((tag) => (
            <span key={tag}
              className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500
                         text-[10px] font-semibold">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <Link href={post.relatedTool.href}
            className="text-[11px] text-slate-400 hover:text-blue-600 transition-colors
                       flex items-center gap-1">
            <Calculator size={11} />
            {post.relatedTool.label}
          </Link>
          <Link href={`/blog/${post.slug}`}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600
                       hover:bg-blue-500 text-white font-black text-[12px]
                       transition-colors group">
            Read guide
            <ArrowRight size={11}
              className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "FreeUSCalculator Blog",
    url: "https://www.freeuscalculator.in/blog",
    description:
      "Practical 2026 guides on gig worker earnings, loan payments, amortization, IRS mileage, self-employment tax, Indian salaries, hourly-to-salary conversions, and personal finance — each paired with a free calculator.",
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

  const featuredPost = POSTS.find((p) => p.featured)!;
  const regularPosts = POSTS.filter((p) => !p.featured);

  return (
    <>
      <Script id="json-ld-blog" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-zinc-50">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section
          className="relative text-white overflow-hidden pt-20 pb-28 lg:pt-32 lg:pb-40"
          style={{ background: "linear-gradient(135deg,#0a0f1e 0%,#0c1e46 50%,#0a0f1e 100%)" }}
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }} />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <nav className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-8 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={11} />
              <span className="text-slate-400">Blog</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-blue-500/20 border
                            border-blue-400/30 px-4 py-2 rounded-full text-[10px]
                            font-black uppercase tracking-widest text-blue-300 mb-7">
              <TrendingUp size={13} className="animate-pulse" />
              {POSTS.length} guides · Updated May 2026
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter
                            leading-[0.92] mb-6 text-white">
              Free US Calculator{" "}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg,#60a5fa,#a78bfa)" }}>
                Blog
              </span>
            </h1>

            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Practical guides for gig workers, freelancers, employees, borrowers, and NRIs.
              Real data, IRS-verified rates, no fluff.
            </p>

            <div className="flex flex-wrap gap-2 mt-7">
              {[
                "Loan Calculator Guide", "DoorDash Earnings", "Uber Eats Pay",
                "Hourly to Salary", "India CTC Guide", "Self-Employment Tax",
                "IRS Mileage 2026", "Salary After Tax", "Rent Affordability",
              ].map((topic) => (
                <span key={topic}
                  className="px-3 py-1.5 rounded-full bg-white/8 border border-white/15
                             text-[11px] text-slate-400 font-semibold">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

          {/* ── FEATURED ───────────────────────────────────────────────── */}
          <section>
            <div className="flex items-center gap-3 mb-7">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Featured Guide
              </p>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
            <FeaturedPost post={featuredPost} />
          </section>

          {/* ── ALL POSTS ──────────────────────────────────────────────── */}
          <section>
            <div className="flex items-center gap-3 mb-7">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                All Guides
              </p>
              <div className="h-px flex-1 bg-slate-200" />
              <p className="text-[11px] text-slate-400">
                {POSTS.length} guides · Updated for 2026
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────────────────── */}
          <section
            className="rounded-3xl p-12 md:p-16 text-center text-white
                        overflow-hidden relative"
            style={{ background: "linear-gradient(135deg,#1d4ed8 0%,#7c3aed 100%)" }}
          >
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full
                            bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full
                            bg-black/10 blur-3xl pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                Ready to calculate your real numbers?
              </h2>
              <p className="text-blue-100 mb-10 max-w-lg mx-auto text-[15px]
                             leading-relaxed">
                Every guide on this blog has a free calculator attached.
                100% free, no sign-up, updated for 2026.
              </p>
              <Link
                href="/tax-calculators"
                className="inline-flex items-center gap-3 bg-white text-blue-700
                           font-black text-[15px] px-8 py-4 rounded-2xl
                           hover:bg-blue-50 transition-colors shadow-xl group"
              >
                Explore 85+ Free Calculators
                <Zap size={18}
                  className="group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}