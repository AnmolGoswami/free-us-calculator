"use client";

import { useState, useId } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
export interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  title?: string;
  faqs: FAQItem[];
  /**
   * Whether to emit a FAQPage JSON-LD <script> tag.
   * Set to FALSE when the parent page already includes FAQPage
   * in its own @graph JSON-LD — having two FAQPage schemas on
   * one URL causes Google to ignore both.
   * Default: true
   */
  emitSchema?: boolean;
  /**
   * The canonical URL of the page this FAQ appears on.
   * Used inside the JSON-LD mainEntityOfPage field.
   * If omitted, the schema is still valid but less precise.
   */
  pageUrl?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Strips HTML tags from answer strings before embedding in JSON-LD. */
function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

/** Builds a valid FAQPage schema object from the FAQ items. */
function buildFaqSchema(faqs: FAQItem[], pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl ? { mainEntityOfPage: pageUrl } : {}),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(faq.a),
      },
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function FAQ({
  title = "Frequently Asked Questions",
  faqs,
  emitSchema = true,
  pageUrl,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // useId gives each instance a stable, unique prefix for aria attributes
  // so multiple FAQ sections on the same page don't collide
  const uid = useId();

  if (!faqs || faqs.length === 0) return null;

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/*
        JSON-LD — emitted only when emitSchema=true (the default).
        If the parent page already puts FAQPage inside its @graph,
        pass emitSchema={false} to this component to avoid the
        "two FAQPage schemas on one URL" issue that causes Google
        to ignore both.
      */}
      {emitSchema && faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildFaqSchema(faqs, pageUrl)),
          }}
        />
      )}

      <section
        aria-labelledby={`${uid}-faq-heading`}
        className="w-full"
      >
        {/* Only render the heading element when a title is supplied.
            This keeps the heading hierarchy valid when the parent
            page already has an <h2> nearby. */}
        {title && (
          <h2
            id={`${uid}-faq-heading`}
            className="text-3xl font-bold text-white text-center mb-10 tracking-tight"
          >
            {title}
          </h2>
        )}

        {/*
          role="list" is not needed — <dl> (definition list) is the
          semantically correct element for Q&A pairs, but an
          accessible accordion with role="region" + aria-expanded
          also satisfies WCAG 2.1 SC 4.1.2. We use the latter because
          it maps directly to the interactive accordion pattern.
        */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `${uid}-q-${index}`;
            const answerId   = `${uid}-a-${index}`;

            return (
              <div
                key={questionId}
                className={`
                  rounded-2xl border transition-all duration-200
                  ${isOpen
                    ? "border-white/20 bg-white/10"
                    : "border-white/10 bg-white/5 hover:border-white/15 hover:bg-white/8"
                  }
                `}
              >
                {/*
                  <button> is the correct element for an interactive
                  accordion toggle (keyboard accessible, screen-reader
                  announces "expanded/collapsed" via aria-expanded).
                  Do NOT use a <div onClick> here.
                */}
                <button
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggle(index)}
                  className="
                    w-full px-6 py-5 text-left flex justify-between
                    items-center gap-4 rounded-2xl
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-blue-400 focus-visible:ring-offset-2
                    focus-visible:ring-offset-transparent
                    transition-colors duration-150
                  "
                >
                  {/*
                    Question text is wrapped in a <span> rather than
                    another heading element. Screen readers already
                    announce the button role and its label — nesting
                    a heading inside a button creates a confusing
                    accessibility tree.
                  */}
                  <span className="font-semibold text-white text-[15px] leading-snug">
                    {faq.q}
                  </span>

                  {/* Visual indicator — hidden from screen readers
                      because aria-expanded already conveys state */}
                  <span
                    aria-hidden="true"
                    className={`
                      flex-shrink-0 w-6 h-6 rounded-full border border-white/20
                      flex items-center justify-center text-white/60
                      transition-transform duration-300
                      ${isOpen ? "rotate-180 border-blue-400/50 text-blue-400" : ""}
                    `}
                  >
                    <svg
                      width="12" height="12" viewBox="0 0 12 12"
                      fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 4L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {/*
                  The answer panel.

                  WHY hidden + aria-hidden instead of max-h-0:
                  max-h-0 hides the element visually but leaves it in
                  the accessibility tree, so screen readers read all
                  answers at once. Using hidden + aria-hidden correctly
                  removes collapsed answers from the a11y tree.

                  The CSS grid trick (grid-rows-[0fr]/[1fr]) animates
                  height without JavaScript and without the
                  max-height + large arbitrary value hack that breaks
                  on short screens. Requires Tailwind v3.3+.
                  For older Tailwind, fall back to the commented
                  max-h approach below.
                */}
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                  aria-hidden={!isOpen}
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1">
                      {/*
                        Answer text. Using <p> keeps it valid HTML.
                        If faq.a can contain HTML markup, sanitize it
                        before rendering (never use dangerouslySetInnerHTML
                        with user-supplied strings).
                      */}
                      <p className="text-slate-300 leading-relaxed text-[14px]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}