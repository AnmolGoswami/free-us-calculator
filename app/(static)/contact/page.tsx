// app/contact/page.tsx
'use client';

import { useState } from "react";
import Link from "next/link";
import {
  Mail, Clock, MapPin, Send, ShieldCheck, TrendingUp,
  CheckCircle2, ChevronRight, Zap, MessageSquare,
  Calculator, Star, AlertCircle,
} from "lucide-react";

// ─── Metadata exported separately in a metadata.ts file (can't use in 'use client') ──
// Create app/contact/metadata.ts with the metadata export if needed.

const WEB3FORMS_KEY = "20a8e715-242c-4f61-9d17-19c89bdc4a09";

const INQUIRY_TYPES = [
  { value: "general",     label: "General Question",       emoji: "💬" },
  { value: "promotion",   label: "💰 Paid Promotion",       emoji: "💰" },
  { value: "feedback",    label: "Tool Feedback",           emoji: "⭐" },
  { value: "bug",         label: "Bug Report",              emoji: "🐛" },
  { value: "feature",     label: "Feature Request",         emoji: "💡" },
  { value: "partnership", label: "Partnership / Affiliate", emoji: "🤝" },
];

const CONTACT_INFO = [
  {
    icon: Mail,
    color: "bg-indigo-100 text-indigo-600",
    title: "Email Us",
    value: "support@freeuscalculator.com",
    href: "mailto:support@freeuscalculator.com",
  },
  {
    icon: Clock,
    color: "bg-emerald-100 text-emerald-600",
    title: "Response Time",
    value: "Within 24–48 business hours",
    href: null,
  },
  {
    icon: MapPin,
    color: "bg-amber-100 text-amber-600",
    title: "Team",
    value: "United States (Remote)",
    href: null,
  },
];

const HELP_TOPICS = [
  {
    icon: Calculator,
    color: "bg-indigo-50 text-indigo-600",
    title: "Tool Support",
    desc: "Having trouble with any calculator? Describe the issue and we'll fix it fast.",
  },
  {
    icon: Zap,
    color: "bg-amber-50 text-amber-600",
    title: "💰 Paid Promotion",
    desc: "Reach 75,000+ monthly US users. Tell us about your product and goals.",
  },
  {
    icon: Star,
    color: "bg-emerald-50 text-emerald-600",
    title: "Feature Requests",
    desc: "Want a new calculator? Many of our best tools came from user suggestions.",
  },
  {
    icon: TrendingUp,
    color: "bg-violet-50 text-violet-600",
    title: "Partnerships",
    desc: "Interested in affiliate or collaboration opportunities? Let's talk.",
  },
];

const FAQS = [
  {
    q: "How long does it take to get a reply?",
    a: "We aim to respond to all messages within 24–48 business hours. Paid promotion and partnership inquiries are typically handled within 12 hours.",
  },
  {
    q: "I'm interested in paid promotion. What's the process?",
    a: "Select 'Paid Promotion' as your inquiry type, describe your product and target audience, and we'll reply with traffic data, pricing, and placement options. We reach 75,000+ monthly US users across tax, earnings, and financial planning topics.",
  },
  {
    q: "Can I suggest a new calculator?",
    a: "Absolutely. Many of our best tools came from user suggestions. Use the Feature Request type and describe what you need — we read every submission.",
  },
  {
    q: "I found a bug. What information should I include?",
    a: "Please include: which calculator you were using, what values you entered, what result you got, and what you expected. A screenshot helps too. We prioritize bug fixes.",
  },
  {
    q: "Do you offer phone support?",
    a: "We currently offer email support only. This keeps our operating costs low so every calculator stays 100% free for users.",
  },
];

// ─── JSON-LD schema (static string to avoid hydration issues) ─────────────────
const JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact FreeUSCalculator",
  url: "https://www.freeuscalculator.in/contact",
  description:
    "Get in touch with the FreeUSCalculator team for support, feedback, paid promotion inquiries, or partnership opportunities.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@freeuscalculator.com",
    contactType: "Customer Service",
    areaServed: "US",
    availableLanguage: "English",
  },
});

// ─── Contact Form Component ───────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    type: "general",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) return;
    setStatus("loading");

    const typeLabel =
      INQUIRY_TYPES.find((t) => t.value === form.type)?.label ?? form.type;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          subject: `${typeLabel} from ${form.firstName} – FreeUSCalculator`,
          message: `Inquiry Type: ${typeLabel}\nName: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`,
          from_name: `${form.firstName} ${form.lastName}`.trim(),
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) {
        setForm({ firstName: "", lastName: "", email: "", type: "general", message: "" });
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center px-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-200
                        flex items-center justify-center">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-2xl font-black text-slate-900">Message Sent!</h3>
        <p className="text-slate-500 max-w-sm leading-relaxed">
          Thanks for reaching out. We'll get back to you at{" "}
          <strong className="text-slate-700">{form.email || "your email"}</strong>{" "}
          within 24–48 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 font-semibold
                     underline underline-offset-2 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 p-6 sm:p-8 md:p-10">
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
          Send Us a Message
        </h2>
        <p className="text-sm text-slate-500">We read and reply to every message.</p>
      </div>

      {/* Inquiry type pills */}
      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
          What's this about?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {INQUIRY_TYPES.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => set("type", t.value)}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold text-left transition-all border ${
                form.type === t.value
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-100"
                  : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Promotion callout */}
        {form.type === "promotion" && (
          <div className="mt-3 flex items-start gap-2.5 bg-amber-50 border border-amber-200
                          rounded-xl px-4 py-3">
            <Zap size={14} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-700 leading-relaxed">
              We reach <strong>75,000+ monthly US users</strong> across tax, salary, gig economy,
              and financial planning topics. Describe your product and we'll send placement options and pricing.
            </p>
          </div>
        )}
      </div>

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
            First Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => set("firstName", e.target.value)}
            placeholder="John"
            required
            disabled={status === "loading"}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm
                       focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
                       transition-all disabled:opacity-60 bg-white text-slate-900
                       placeholder:text-slate-400"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
            Last Name
          </label>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => set("lastName", e.target.value)}
            placeholder="Doe"
            disabled={status === "loading"}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm
                       focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
                       transition-all disabled:opacity-60 bg-white text-slate-900
                       placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
          Email Address <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@example.com"
            required
            disabled={status === "loading"}
            className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl text-sm
                       focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
                       transition-all disabled:opacity-60 bg-white text-slate-900
                       placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
          Message <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <MessageSquare size={14} className="absolute left-3.5 top-3.5 text-slate-400 pointer-events-none" />
          <textarea
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder={
              form.type === "promotion"
                ? "Tell us about your product, target audience, budget range, and promotion goals…"
                : form.type === "bug"
                ? "Which calculator? What values did you enter? What happened vs what you expected?"
                : form.type === "feature"
                ? "Describe the calculator or feature you'd like to see…"
                : "How can we help you?"
            }
            required
            rows={6}
            disabled={status === "loading"}
            className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl text-sm
                       focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
                       transition-all resize-none disabled:opacity-60 bg-white text-slate-900
                       placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading" || !form.firstName || !form.email || !form.message}
        className="w-full flex items-center justify-center gap-2.5 bg-indigo-600
                   hover:bg-indigo-700 active:bg-indigo-800 disabled:opacity-50
                   disabled:cursor-not-allowed text-white font-black text-sm py-4
                   rounded-xl transition-all shadow-lg shadow-indigo-100
                   hover:shadow-indigo-200 hover:-translate-y-px"
      >
        {status === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200
                        rounded-xl px-4 py-3 text-sm">
          <AlertCircle size={15} className="shrink-0" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <p className="text-center text-xs text-slate-400">
        We usually reply within 24–48 hours ·{" "}
        <a href="mailto:support@freeuscalculator.com" className="text-indigo-500 hover:underline">
          support@freeuscalculator.com
        </a>
      </p>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSONLD }}
      />

      <div className="min-h-screen bg-slate-50">

        {/* ══════════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#0a0f1e] text-white relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,#3730a340,transparent)]" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-14 sm:pb-20 text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mb-8">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <ChevronRight size={11} />
              <span className="text-slate-400">Contact</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                            bg-white/8 border border-white/10 text-xs font-bold
                            uppercase tracking-widest text-indigo-300 mb-6">
              <MessageSquare size={12} />
              Get in Touch
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight
                           leading-[1.06] mb-5">
              Contact{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400
                               bg-clip-text text-transparent">
                FreeUSCalculator
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Questions, feedback, bug reports, or interested in reaching{" "}
              <strong className="text-white">75,000+ monthly US users</strong> through paid promotion?
              We read and reply to every message.
            </p>

            {/* Quick stat row */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {[
                { icon: Clock,      label: "Reply within 24–48h"      },
                { icon: ShieldCheck,label: "Every message read by us"  },
                { icon: Zap,        label: "75K+ monthly US users"     },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-slate-400">
                  <Icon size={15} className="text-indigo-400" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            MAIN GRID
        ══════════════════════════════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* ── FORM ─────────────────────────────────────────────────── */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <ContactForm />
              </div>
            </div>

            {/* ── SIDEBAR ──────────────────────────────────────────────── */}
            <div className="lg:col-span-5 space-y-5">

              {/* Contact details */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="font-black text-slate-900 text-lg mb-5">Contact Details</h2>
                <div className="space-y-4">
                  {CONTACT_INFO.map(({ icon: Icon, color, title, value, href }) => (
                    <div key={title} className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          {title}
                        </p>
                        {href ? (
                          <a href={href} className="text-sm font-semibold text-indigo-600 hover:underline">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-slate-700">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How can we help */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="font-black text-slate-900 text-lg mb-4">How Can We Help?</h2>
                <div className="space-y-3">
                  {HELP_TOPICS.map(({ icon: Icon, color, title, desc }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{title}</p>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promotion highlight card */}
              <div className="rounded-2xl overflow-hidden border border-indigo-100 shadow-sm">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-5 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={14} className="text-indigo-200" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-200">
                      Paid Promotion
                    </span>
                  </div>
                  <p className="font-black text-base leading-snug mb-1">
                    Reach 75,000+ monthly US users
                  </p>
                  <p className="text-indigo-200 text-xs leading-relaxed">
                    Our audience actively searches for tax, salary, gig economy,
                    and financial planning tools — high intent, high conversion.
                  </p>
                </div>
                <div className="bg-white px-5 py-4 flex flex-wrap gap-3">
                  {["Tax Tools", "Gig Economy", "Paycheck", "Loan EMI", "Rent Planning"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wide text-indigo-600
                                 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Trust note */}
              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100
                              rounded-2xl px-5 py-4">
                <ShieldCheck size={20} className="text-emerald-600 shrink-0" />
                <p className="text-sm text-emerald-700 font-medium">
                  We never sell your data. Every message is handled by our team directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="bg-white py-14 sm:py-20 border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-2">FAQ</p>
              <h2 id="faq-heading" className="text-3xl sm:text-4xl font-black text-slate-900">
                Common Questions
              </h2>
            </div>

            <dl className="space-y-4">
              {FAQS.map(({ q, a }) => (
                <div
                  key={q}
                  className="border border-slate-200 rounded-2xl p-5 sm:p-6
                             hover:border-indigo-200 transition-colors"
                >
                  <dt className="font-black text-slate-900 text-sm sm:text-base mb-2
                                  flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                    {q}
                  </dt>
                  <dd className="text-slate-500 text-sm leading-relaxed pl-6">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-700 to-violet-800 text-white text-center">
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Prefer Email Directly?</h2>
            <p className="text-indigo-200 mb-8 leading-relaxed">
              Skip the form and email us directly. We read every message.
            </p>
            <a
              href="mailto:support@freeuscalculator.com"
              className="inline-flex items-center gap-3 bg-white text-indigo-700 font-black
                         text-sm px-8 py-4 rounded-2xl hover:bg-amber-300 hover:text-indigo-900
                         transition-all shadow-xl active:scale-95"
            >
              <Mail size={18} />
              support@freeuscalculator.com
            </a>
            <p className="text-indigo-300 text-xs mt-4">Response within 24–48 business hours</p>
          </div>
        </section>
      </div>
    </>
  );
}