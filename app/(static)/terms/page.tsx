
// app/terms/page.tsx
import Link from "next/link";
import {
  ShieldCheck, Scale, AlertTriangle, FileText, Ban,
  Lock, RefreshCw, Globe, Mail, ChevronRight,
  CheckCircle2, Info,
} from "lucide-react";
import type { Metadata } from "next";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Terms of Service | FreeUSCalculator – Legal Terms & Conditions",
  description:
    "Terms of Service for FreeUSCalculator. Our free 2026 financial calculators are provided for estimation purposes only — not financial, tax, or legal advice. Read before using.",
  keywords: [
    "freeuscalculator terms of service",
    "financial calculator terms",
    "calculator disclaimer legal",
    "free tax calculator terms",
    "2026 calculator legal terms",
    "estimation tool disclaimer",
  ],
  alternates: { canonical: "https://www.freeuscalculator.in/terms" },
  robots: { index: true, follow: true },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service – FreeUSCalculator",
  description:
    "Terms of Service for FreeUSCalculator. Calculators are for estimation only and do not constitute financial, tax, or legal advice.",
  url: "https://www.freeuscalculator.in/terms",
  dateModified: "2026-05-28",
  publisher: {
    "@type": "Organization",
    name: "FreeUSCalculator",
    url: "https://www.freeuscalculator.in",
  },
});

// ─── Section data ─────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    id: "acceptance",
    icon: FileText,
    color: "bg-indigo-100 text-indigo-600",
    border: "border-indigo-100",
    title: "1. Acceptance of Terms",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        By accessing or using FreeUSCalculator and any of its calculator tools, you agree to
        be bound by these Terms of Service. If you do not agree to these terms, please
        discontinue use of the site immediately. These Terms apply to all visitors, users,
        and anyone who accesses or uses the service.
      </p>
    ),
  },
  {
    id: "service",
    icon: Info,
    color: "bg-sky-100 text-sky-600",
    border: "border-sky-100",
    title: "2. Description of Service",
    content: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          FreeUSCalculator provides free online financial calculators for educational and
          estimation purposes. Our tools cover areas including but not limited to:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            "Self-employment tax", "Salary after tax", "Paycheck estimation",
            "Hourly to salary",   "Uber/DoorDash earnings", "Loan EMI",
            "Rent affordability", "Overtime pay",      "Savings growth",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 bg-slate-50 border border-slate-100
                         rounded-xl px-3 py-2 text-xs font-medium text-slate-700"
            >
              <CheckCircle2 size={12} className="text-indigo-500 shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-xs mt-4">
          All tools are provided <strong>"as is"</strong> without any warranty of fitness
          for a particular purpose.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    icon: AlertTriangle,
    color: "bg-amber-100 text-amber-600",
    border: "border-amber-200",
    title: "3. Important Disclaimer — Not Professional Advice",
    content: (
      <>
        {/* Highlighted disclaimer box */}
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 sm:p-5 mb-5">
          <div className="flex items-start gap-3">
            <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed font-medium">
              FreeUSCalculator tools are for <strong>estimation and planning purposes only</strong>.
              They are not intended to provide financial, tax, accounting, or legal advice.
              Results are approximate and may not reflect your exact situation. Always consult
              a licensed CPA, tax attorney, or financial advisor for decisions that affect
              your finances.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            "Tax laws and IRS rules change frequently — our calculators may not reflect the latest updates at all times",
            "Individual circumstances vary significantly — results are estimates, not guarantees",
            "State and local tax rules differ — our tools focus on federal estimates unless otherwise stated",
            "Gig economy earnings vary widely — our Uber/DoorDash calculators use typical averages",
          ].map((point) => (
            <div key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
              {point}
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "accuracy",
    icon: CheckCircle2,
    color: "bg-emerald-100 text-emerald-600",
    border: "border-emerald-100",
    title: "4. Accuracy of Information",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        We work to keep all calculators accurate and aligned with current IRS rules, tax
        brackets, and financial formulas for 2026. However, we make no guarantees about
        completeness, reliability, or real-time accuracy. Tax law is complex and subject
        to change. We update our tools regularly but cannot guarantee immediate reflection
        of every IRS or legislative change. Use results as a starting point — not a final answer.
      </p>
    ),
  },
  {
    id: "conduct",
    icon: Ban,
    color: "bg-rose-100 text-rose-600",
    border: "border-rose-100",
    title: "5. Acceptable Use",
    content: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          You may use FreeUSCalculator freely for personal and educational purposes.
          You agree not to:
        </p>
        <div className="space-y-2.5">
          {[
            { text: "Use the service for any illegal or unauthorized purpose",               bad: true },
            { text: "Attempt to reverse engineer, scrape, or copy our calculator code",      bad: true },
            { text: "Interfere with or disrupt the website's servers or infrastructure",     bad: true },
            { text: "Reproduce our calculators commercially without written permission",     bad: true },
            { text: "Use automated tools to access the site at excessive rates",             bad: true },
            { text: "Use calculators for personal financial planning and education",         bad: false },
            { text: "Share calculator links for informational purposes",                     bad: false },
          ].map(({ text, bad }) => (
            <div
              key={text}
              className={`flex items-center gap-2.5 rounded-xl px-4 py-2.5 border text-sm ${
                bad
                  ? "bg-rose-50 border-rose-100 text-rose-800"
                  : "bg-emerald-50 border-emerald-100 text-emerald-800"
              }`}
            >
              {bad
                ? <Ban size={13} className="text-rose-500 shrink-0" />
                : <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />}
              {text}
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "liability",
    icon: Scale,
    color: "bg-violet-100 text-violet-600",
    border: "border-violet-100",
    title: "6. Limitation of Liability",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        To the fullest extent permitted by applicable law, FreeUSCalculator and its operators
        shall not be liable for any indirect, incidental, special, consequential, or punitive
        damages — including financial loss, missed tax deadlines, incorrect filings, or any
        other damages — arising from your use of or reliance on our calculators. Your use of
        the service is entirely at your own risk. We strongly recommend verifying all results
        with a qualified professional before making financial decisions.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    icon: Lock,
    color: "bg-slate-100 text-slate-600",
    border: "border-slate-100",
    title: "7. Intellectual Property",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        All content on FreeUSCalculator — including calculator logic, design, copy, and
        branding — is the property of FreeUSCalculator and protected by applicable intellectual
        property laws. You may not reproduce, distribute, or create derivative works without
        our express written consent. Linking to our tools for informational purposes is
        permitted and encouraged.
      </p>
    ),
  },
  {
    id: "changes",
    icon: RefreshCw,
    color: "bg-indigo-100 text-indigo-600",
    border: "border-indigo-100",
    title: "8. Changes to These Terms",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        We reserve the right to update or modify these Terms at any time without prior notice.
        Changes take effect immediately upon posting. Continued use of FreeUSCalculator after
        any changes constitutes your acceptance of the new Terms. We recommend reviewing this
        page periodically. The "Last updated" date at the top of this page reflects the most
        recent revision.
      </p>
    ),
  },
  {
    id: "governing-law",
    icon: Globe,
    color: "bg-sky-100 text-sky-600",
    border: "border-sky-100",
    title: "9. Governing Law",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        These Terms of Service shall be governed by and construed in accordance with the
        laws of the United States, without regard to conflict of law provisions. Any disputes
        arising from these Terms or your use of the service shall be subject to the exclusive
        jurisdiction of the applicable courts.
      </p>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    color: "bg-indigo-100 text-indigo-600",
    border: "border-indigo-100",
    title: "10. Contact Us",
    content: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          If you have questions about these Terms or need clarification on any section,
          please reach out — we're a real team and we read every message.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:support@freeuscalculator.com"
            className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600
                       hover:bg-indigo-700 text-white font-bold text-sm rounded-xl
                       transition-all"
          >
            <Mail size={15} />
            support@freeuscalculator.com
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white border
                       border-slate-200 hover:border-indigo-300 text-slate-700
                       hover:text-indigo-600 font-bold text-sm rounded-xl transition-all"
          >
            Use Contact Form →
          </Link>
        </div>
      </>
    ),
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSONLD }}
      />

      <div className="min-h-screen bg-slate-50">

        {/* ══════════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#0a0f1e] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,#3730a330,transparent)]" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-12 sm:pb-16 text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <ChevronRight size={11} />
              <span className="text-slate-400">Terms of Service</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                            bg-white/8 border border-white/10 text-xs font-bold
                            uppercase tracking-widest text-indigo-300 mb-5">
              <Scale size={12} />
              Legal · Terms of Use
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
              Terms of{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
              By using FreeUSCalculator you agree to these terms. The short version:
              our tools are free, for estimation only, and not a substitute for
              professional financial advice.
            </p>

            {/* Key summary chips */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: ShieldCheck,   label: "Free to use"            },
                { icon: AlertTriangle, label: "Estimation only"        },
                { icon: Scale,         label: "Not legal/tax advice"   },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/8 border border-white/10
                             rounded-full px-4 py-2 text-xs font-semibold text-slate-300"
                >
                  <Icon size={13} className="text-indigo-300" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            CONTENT
        ══════════════════════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

          {/* Meta bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8
                          bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span><strong className="text-slate-900">Last updated:</strong> May 28, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Globe size={16} className="text-indigo-500" />
              <span><strong className="text-slate-900">Jurisdiction:</strong> United States</span>
            </div>
            <a
              href="mailto:support@freeuscalculator.com"
              className="text-xs text-indigo-600 hover:underline font-semibold"
            >
              Questions? Email us →
            </a>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* ── ARTICLE ──────────────────────────────────────────────── */}
            <article className="flex-1 min-w-0 space-y-5">

              {/* Intro */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Welcome to <strong>FreeUSCalculator</strong>. These Terms of Service govern
                  your use of our website at <strong>freeuscalculator.in</strong> and all
                  calculator tools we provide. Please read these terms carefully. By using
                  our service, you acknowledge that you have read, understood, and agree to
                  be bound by these Terms.
                </p>
              </div>

              {/* Sections */}
              {SECTIONS.map(({ id, icon: Icon, color, border, title, content }) => (
                <div
                  key={id}
                  id={id}
                  className={`bg-white border ${border} rounded-2xl p-5 sm:p-7 shadow-sm scroll-mt-20`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={18} />
                    </div>
                    <h2 className="text-base sm:text-lg font-black text-slate-900">{title}</h2>
                  </div>
                  {content}
                </div>
              ))}

              {/* Final agreement note */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-indigo-900 text-sm mb-1">
                      By using FreeUSCalculator, you agree to these Terms
                    </p>
                    <p className="text-indigo-700 text-sm leading-relaxed">
                      Thank you for using FreeUSCalculator. We're committed to providing
                      accurate, free, and trustworthy financial estimation tools for Americans.
                      These terms exist to protect both you and us — not to create barriers.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* ── SIDEBAR ──────────────────────────────────────────────── */}
            <aside className="w-full lg:w-56 flex-shrink-0 space-y-5 lg:sticky lg:top-20">

              {/* TOC */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">
                  Sections
                </p>
                <ol className="space-y-2">
                  {SECTIONS.map(({ id, title }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="text-xs text-indigo-600 hover:text-indigo-800
                                   hover:underline transition-colors leading-snug block"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Quick summary */}
              <div className="bg-slate-900 rounded-2xl p-5 text-white">
                <Scale size={18} className="mb-3 text-indigo-300" />
                <p className="font-black text-sm mb-3">Terms in Plain English</p>
                <ul className="space-y-2 text-xs text-slate-300">
                  {[
                    "Free to use, always",
                    "Estimation only — not advice",
                    "Verify with a professional",
                    "We update tools regularly",
                    "No liability for decisions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <CheckCircle2 size={11} className="text-emerald-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related links */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">
                  Related Pages
                </p>
                <div className="space-y-2">
                  {[
                    { label: "Privacy Policy", href: "/privacy-policy" },
                    { label: "Disclaimer",     href: "/disclaimer"     },
                    { label: "Contact Us",     href: "/contact"        },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-1.5 text-xs text-indigo-600
                                 hover:text-indigo-800 hover:underline transition-colors"
                    >
                      <ChevronRight size={11} />
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            TRUST STRIP
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white border-t border-slate-100 py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-6">
              What These Terms Mean For You
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: ShieldCheck,   label: "Always 100% free",       color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
                { icon: AlertTriangle, label: "Estimates, not guarantees", color: "text-amber-600 bg-amber-50 border-amber-100"   },
                { icon: Scale,         label: "US law governed",         color: "text-indigo-600 bg-indigo-50 border-indigo-100"  },
                { icon: RefreshCw,     label: "Terms updated regularly", color: "text-violet-600 bg-violet-50 border-violet-100" },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border ${color}`}
                >
                  <Icon size={20} />
                  <p className="text-xs font-bold text-center leading-snug text-slate-700">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-14 bg-gradient-to-br from-indigo-700 to-violet-800 text-white text-center">
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            <Scale size={32} className="text-indigo-300 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-black mb-3">Questions About These Terms?</h2>
            <p className="text-indigo-200 text-sm mb-7 leading-relaxed">
              We keep our terms straightforward. If anything is unclear, just ask.
            </p>
            <a
              href="mailto:support@freeuscalculator.com"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-black
                         text-sm px-7 py-3.5 rounded-2xl hover:bg-amber-300 hover:text-indigo-900
                         transition-all shadow-xl active:scale-95"
            >
              <Mail size={16} />
              support@freeuscalculator.com
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
