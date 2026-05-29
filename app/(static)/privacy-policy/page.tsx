// app/privacy-policy/page.tsx
import Link from "next/link";
import {
  ShieldCheck, Lock, Eye, Cookie, BarChart2, Globe,
  Mail, ChevronRight, CheckCircle2, AlertCircle, Zap,
} from "lucide-react";
import type { Metadata } from "next";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Privacy Policy | FreeUSCalculator – How We Protect Your Data",
  description:
    "FreeUSCalculator's Privacy Policy. All calculations run in your browser — no financial data is ever stored or transmitted. Learn how we handle cookies, analytics, and advertising.",
  keywords: [
    "freeuscalculator privacy policy",
    "financial calculator privacy",
    "no data collection calculator",
    "browser-based calculator privacy",
    "google adsense privacy policy",
    "cookie policy financial tools",
    "data protection free calculator",
  ],
  alternates: { canonical: "https://www.freeuscalculator.in/privacy-policy" },
  robots: { index: true, follow: true },
};

// ─── JSON-LD (static string — no hydration issues) ────────────────────────────
const JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy – FreeUSCalculator",
  description:
    "Privacy policy explaining how FreeUSCalculator handles data, cookies, analytics, and advertising. All calculations are browser-side — no financial data is stored.",
  url: "https://www.freeuscalculator.in/privacy-policy",
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
    id: "information-we-collect",
    icon: Eye,
    color: "bg-indigo-100 text-indigo-600",
    accent: "border-indigo-200",
    title: "1. Information We Collect",
    content: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          We built FreeUSCalculator to be private by design. In most cases, we collect
          <strong className="text-slate-800"> no personally identifiable information</strong> whatsoever.
          Here's exactly what we do and don't collect:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "No registration required",              yes: false },
            { label: "No names or phone numbers",             yes: false },
            { label: "No financial inputs stored",            yes: false },
            { label: "Anonymous analytics (aggregated only)", yes: true  },
            { label: "Basic server logs (IP, browser type)",  yes: true  },
            { label: "Performance monitoring data",           yes: true  },
          ].map(({ label, yes }) => (
            <div
              key={label}
              className={`flex items-center gap-2.5 rounded-xl px-4 py-3 border text-sm font-medium ${
                yes
                  ? "bg-amber-50 border-amber-100 text-amber-800"
                  : "bg-emerald-50 border-emerald-100 text-emerald-800"
              }`}
            >
              {yes
                ? <AlertCircle size={14} className="text-amber-500 shrink-0" />
                : <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />}
              {label}
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "how-calculators-work",
    icon: Lock,
    color: "bg-emerald-100 text-emerald-600",
    accent: "border-emerald-200",
    title: "2. How Our Calculators Work",
    content: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Every calculator on FreeUSCalculator runs entirely in your browser using
          JavaScript. This is a deliberate architectural decision — not a marketing claim.
        </p>
        <div className="space-y-3">
          {[
            { icon: Lock,        text: "Your tax inputs, salary figures, and loan numbers never leave your device" },
            { icon: ShieldCheck, text: "No data is transmitted to our servers when you use a calculator"           },
            { icon: Eye,         text: "We cannot view, access, or store what you calculate"                       },
            { icon: Zap,         text: "Results appear instantly because everything computes locally"               },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
              <Icon size={15} className="text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "cookies",
    icon: Cookie,
    color: "bg-amber-100 text-amber-600",
    accent: "border-amber-200",
    title: "3. Cookies & Tracking Technologies",
    content: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          We use minimal, standard cookies. None of them store your financial data or personally identify you.
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-xs sm:text-sm min-w-[400px]">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-4 py-2.5 text-left font-black text-[9px] uppercase tracking-widest">Cookie Type</th>
                <th className="px-4 py-2.5 text-left font-black text-[9px] uppercase tracking-widest">Purpose</th>
                <th className="px-4 py-2.5 text-left font-black text-[9px] uppercase tracking-widest">Personal?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { type: "Performance",   purpose: "Page speed & error monitoring",     personal: "No" },
                { type: "Analytics",     purpose: "Anonymous traffic trends",          personal: "No" },
                { type: "Advertising",   purpose: "Google AdSense ad relevance",       personal: "Opt-out available" },
                { type: "Functional",    purpose: "Remembering UI preferences",        personal: "No" },
              ].map((row, i) => (
                <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                  <td className="px-4 py-2.5 font-bold text-slate-900">{row.type}</td>
                  <td className="px-4 py-2.5 text-slate-600">{row.purpose}</td>
                  <td className="px-4 py-2.5">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      row.personal === "No"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}>
                      {row.personal}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 mt-3">
          You can disable cookies in your browser settings at any time. Some site features may be affected.
        </p>
      </>
    ),
  },
  {
    id: "analytics",
    icon: BarChart2,
    color: "bg-violet-100 text-violet-600",
    accent: "border-violet-200",
    title: "4. Analytics",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        We use analytics tools to understand how our calculators are used — which tools are
        most popular, where traffic comes from, and how pages perform. All analytics data is{" "}
        <strong className="text-slate-800">aggregated and anonymized</strong>. We cannot
        identify individual users from this data. Analytics help us decide which new
        calculators to build and which existing ones to improve.
      </p>
    ),
  },
  {
    id: "advertising",
    icon: Globe,
    color: "bg-rose-100 text-rose-600",
    accent: "border-rose-200",
    title: "5. Advertising – Google AdSense",
    content: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          We display ads through <strong className="text-slate-800">Google AdSense</strong> to
          keep all calculators free. This is important to understand:
        </p>
        <div className="space-y-3 mb-4">
          {[
            "Google may use cookies to show ads relevant to your browsing history",
            "We do not pass your financial inputs to Google — ads and calculators are completely separate",
            "Google's advertising cookies are governed by Google's own Privacy Policy",
            "You can opt out of personalized ads at g.co/adsettings",
          ].map((point) => (
            <div key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
              {point}
            </div>
          ))}
        </div>
        <a
          href="https://g.co/adsettings"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600
                     hover:text-indigo-800 underline underline-offset-2 transition-colors"
        >
          Manage Google Ad Settings →
        </a>
      </>
    ),
  },
  {
    id: "third-party",
    icon: Globe,
    color: "bg-sky-100 text-sky-600",
    accent: "border-sky-200",
    title: "6. Third-Party Services",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        We use trusted third-party infrastructure services including web hosting, CDN delivery,
        and performance monitoring. These services may collect standard server-side data such as
        IP addresses and browser types for security and performance purposes. We select providers
        with strong privacy standards and do not authorize them to use your data for their own
        marketing purposes.
      </p>
    ),
  },
  {
    id: "data-security",
    icon: ShieldCheck,
    color: "bg-emerald-100 text-emerald-600",
    accent: "border-emerald-200",
    title: "7. Data Security",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        We implement industry-standard security practices including HTTPS encryption on all pages,
        secure infrastructure, and access controls. Because we do not store personal financial data,
        the risk surface is minimal. Your tax figures, salary numbers, and loan inputs are never
        on our servers — they exist only in your browser session.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    icon: ShieldCheck,
    color: "bg-slate-100 text-slate-600",
    accent: "border-slate-200",
    title: "8. Children's Privacy",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        Our services are not directed to children under the age of 13. We do not knowingly
        collect any data from children. If you believe a child has provided us with personal
        information, please contact us and we will delete it promptly.
      </p>
    ),
  },
  {
    id: "changes",
    icon: AlertCircle,
    color: "bg-amber-100 text-amber-600",
    accent: "border-amber-200",
    title: "9. Changes to This Policy",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        We may update this Privacy Policy from time to time. When we do, we will update the
        "Last updated" date at the top of this page. Continued use of the site after changes
        constitutes your acceptance of the updated policy. We encourage you to review this
        page periodically.
      </p>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    color: "bg-indigo-100 text-indigo-600",
    accent: "border-indigo-200",
    title: "10. Contact Us",
    content: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          If you have any questions about this Privacy Policy or how your data is handled,
          please reach out:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:support@freeuscalculator.com"
            className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700
                       text-white font-bold text-sm rounded-xl transition-all"
          >
            <Mail size={15} />
            support@freeuscalculator.com
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-slate-200
                       hover:border-indigo-300 text-slate-700 font-bold text-sm rounded-xl
                       transition-all hover:text-indigo-600"
          >
            Use Contact Form →
          </Link>
        </div>
      </>
    ),
  },
];

const TOC = SECTIONS.map(({ id, title }) => ({ id, label: title }));

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PrivacyPolicyPage() {
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
              <span className="text-slate-400">Privacy Policy</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                            bg-white/8 border border-white/10 text-xs font-bold
                            uppercase tracking-widest text-emerald-300 mb-5">
              <ShieldCheck size={12} />
              Privacy First · Browser-Side Calculations
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
              Privacy{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
              We built FreeUSCalculator to be private by default. Your financial inputs never
              leave your browser. Here's everything we do — and don't — collect.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: Lock,        label: "No financial data stored"    },
                { icon: ShieldCheck, label: "Browser-side calculations"   },
                { icon: Eye,         label: "No personal data sold"       },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/8 border border-white/10
                             rounded-full px-4 py-2 text-xs font-semibold text-slate-300"
                >
                  <Icon size={13} className="text-emerald-400" />
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

          {/* Last updated + effective date */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8
                          bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span><strong className="text-slate-900">Last updated:</strong> May 28, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <ShieldCheck size={16} className="text-indigo-500" />
              <span><strong className="text-slate-900">Effective:</strong> April 1, 2026</span>
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
            <article className="flex-1 min-w-0 space-y-6">

              {/* Intro card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  This Privacy Policy applies to <strong>FreeUSCalculator</strong> ("we", "our", "us")
                  and all calculator tools available at{" "}
                  <strong>freeuscalculator.in</strong>. By using our site, you agree to the practices
                  described here. If you disagree, please discontinue use and contact us with any concerns.
                </p>
              </div>

              {/* Sections */}
              {SECTIONS.map(({ id, icon: Icon, color, accent, title, content }) => (
                <div
                  key={id}
                  id={id}
                  className={`bg-white border ${accent} rounded-2xl p-6 sm:p-7 shadow-sm scroll-mt-20`}
                >
                  {/* Section header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={18} />
                    </div>
                    <h2 className="text-base sm:text-lg font-black text-slate-900">{title}</h2>
                  </div>
                  {content}
                </div>
              ))}

              {/* GDPR note */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <Globe size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-indigo-900 text-sm mb-1">
                      GDPR & International Users
                    </p>
                    <p className="text-indigo-800 text-sm leading-relaxed">
                      We serve users globally. If you are located in the EU, UK, or California (CCPA),
                      you have additional rights regarding your data — including the right to access,
                      correct, or delete any information we hold. Since we collect minimal data, these
                      rights rarely apply. For any requests, contact{" "}
                      <a href="mailto:support@freeuscalculator.com" className="underline font-semibold">
                        support@freeuscalculator.com
                      </a>.
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
                  Contents
                </p>
                <ol className="space-y-2">
                  {TOC.map(({ id, label }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="text-xs text-indigo-600 hover:text-indigo-800 hover:underline
                                   transition-colors leading-snug block"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Privacy summary card */}
              <div className="bg-emerald-600 rounded-2xl p-5 text-white">
                <ShieldCheck size={20} className="mb-3 text-emerald-200" />
                <p className="font-black text-sm mb-2">Privacy in 3 Lines</p>
                <ul className="space-y-1.5 text-xs text-emerald-100">
                  <li className="flex items-start gap-1.5">
                    <span className="shrink-0">✓</span>
                    Calculations run in your browser
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="shrink-0">✓</span>
                    No financial data stored
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="shrink-0">✓</span>
                    Ads via Google AdSense only
                  </li>
                </ul>
              </div>

              {/* Related links */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">
                  Related Pages
                </p>
                <div className="space-y-2">
                  {[
                    { label: "Terms of Use",  href: "/terms"       },
                    { label: "Disclaimer",    href: "/disclaimer"  },
                    { label: "Contact Us",    href: "/contact"     },
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
            TRUST FOOTER STRIP
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white border-t border-slate-100 py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">
              Our Privacy Commitments
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Lock,        label: "No financial data stored",     color: "text-indigo-600 bg-indigo-50 border-indigo-100" },
                { icon: ShieldCheck, label: "Browser-side calculations",    color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
                { icon: Eye,         label: "No personal data sold",        color: "text-violet-600 bg-violet-50 border-violet-100" },
                { icon: Globe,       label: "GDPR & CCPA aware",            color: "text-sky-600 bg-sky-50 border-sky-100" },
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
            <ShieldCheck size={32} className="text-indigo-300 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-black mb-3">Questions About Privacy?</h2>
            <p className="text-indigo-200 text-sm mb-7 leading-relaxed">
              We're a small, transparent team. Email us directly — a real person will reply.
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