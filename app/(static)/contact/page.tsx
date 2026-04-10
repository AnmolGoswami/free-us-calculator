// app/contact/page.tsx
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, TrendingUp, CheckCircle2 } from "lucide-react";
import Script from "next/script";

export const metadata = {
  title: "Contact FreeUSCalculator – Get in Touch with Us",
  description: "Have questions about our 2026 financial calculators? Need help or want to share feedback? Contact the FreeUSCalculator team. We're here to help.",
  keywords: [
    "contact freeuscalculator",
    "free tax calculator support",
    "contact financial tools",
    "2026 tax calculator help",
    "gig economy calculator feedback",
  ],
  alternates: {
    canonical: "https://freeuscalculator.com/contact",
  },
};

export const dynamic = "force-dynamic";
export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact FreeUSCalculator",
    url: "https://freeuscalculator.com/contact",
    description: "Get in touch with the FreeUSCalculator team for support, feedback, or inquiries about our free 2026 financial calculators.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@freeuscalculator.com",
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "English"
    }
  };

  return (
    <>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-zinc-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-950 to-indigo-950 text-white py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have questions about our 2026 calculators? Want to share feedback or suggest a new tool? 
              We'd love to hear from you.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
                <h2 className="text-3xl font-semibold mb-8">Send Us a Message</h2>
                
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:border-indigo-500 transition"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:border-indigo-500 transition"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:border-indigo-500 transition"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <select className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:border-indigo-500 transition bg-white">
                      <option>General Inquiry</option>
                      <option>Tool Feedback / Suggestion</option>
                      <option>Technical Support</option>
                      <option>Bug Report</option>
                      <option>Partnership / Collaboration</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                    <textarea 
                      rows={7}
                      className="w-full px-5 py-4 border border-slate-200 rounded-3xl focus:outline-none focus:border-indigo-500 transition resize-y"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-2xl transition flex items-center justify-center gap-3"
                  >
                    Send Message
                    <Send size={20} />
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    We usually reply within 24-48 hours during business days.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info & FAQ */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Contact Details */}
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="font-semibold text-2xl mb-8">Get in Touch</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-indigo-600" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Email Us</p>
                      <a href="mailto:support@freeuscalculator.com" className="text-indigo-600 hover:underline">
                        support@freeuscalculator.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="text-emerald-600" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Response Time</p>
                      <p className="text-slate-600">Usually within 24-48 business hours</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-amber-600" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Location</p>
                      <p className="text-slate-600">United States (Remote Team)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="font-semibold text-2xl mb-6">How Can We Help?</h3>
                <div className="space-y-6 text-slate-600">
                  <div className="flex gap-4">
                    <ShieldCheck className="text-emerald-500 mt-1" size={22} />
                    <div>
                      <p className="font-medium">Tool Support</p>
                      <p className="text-sm">Having trouble with any calculator? Let us know.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-emerald-500 mt-1" size={22} />
                    <div>
                      <p className="font-medium">Feature Requests</p>
                      <p className="text-sm">Want a new calculator? Suggest it here.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <TrendingUp className="text-emerald-500 mt-1" size={22} />
                    <div>
                      <p className="font-medium">Partnerships</p>
                      <p className="text-sm">Interested in collaborating or affiliate opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Note */}
              <div className="text-center text-sm text-slate-500">
                <ShieldCheck className="inline-block mb-2 text-emerald-500" size={28} />
                <p>We value your feedback and take every message seriously.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              {[
                {
                  q: "How long does it take to get a reply?",
                  a: "We aim to respond to all messages within 24-48 business hours. High-priority support requests are handled faster."
                },
                {
                  q: "Can I suggest a new calculator?",
                  a: "Absolutely! We love hearing from our users. Many of our best tools were suggested by the community."
                },
                {
                  q: "Do you offer phone support?",
                  a: "Currently we provide support via email only. This helps us keep costs low so we can continue offering all tools for free."
                },
                {
                  q: "I found a bug in one of your calculators. What should I do?",
                  a: "Please describe the issue in detail (including which calculator and what went wrong) and we'll fix it as quickly as possible."
                }
              ].map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-3xl p-8">
                  <h3 className="font-semibold text-xl mb-4">{item.q}</h3>
                  <p className="text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="py-20 bg-zinc-900 text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-slate-400 mb-10">
              Our team is ready to help you get the most out of FreeUSCalculator.
            </p>
            <a 
              href="mailto:support@freeuscalculator.com"
              className="inline-flex items-center gap-3 bg-white text-zinc-900 font-semibold px-10 py-4 rounded-2xl hover:bg-amber-300 transition"
            >
              Email Us Directly <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}