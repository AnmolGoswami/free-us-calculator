// lib/seo.ts
import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "data/content");

/* -----------------------------------
UTILS
----------------------------------- */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* -----------------------------------
CORE PARSER
----------------------------------- */
function parseContent(slug: string) {
  try {
    const filePath = path.join(contentDir, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      return {
        html: `<p>Content is being updated.</p>`,
        toc: [],
        faqs: [],
      };
    }

    let content = fs.readFileSync(filePath, "utf8");
    let html = content;

    const toc: { id: string; text: string }[] = [];
    const faqs: { question: string; answer: string }[] = [];

    /* -----------------------------------
    READING TIME + LAST UPDATED
    ----------------------------------- */
    const words = content.split(/\s+/).length;
    const readingTime = Math.ceil(words / 200);

    const lastUpdated = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });

    html =
      `<p class="text-sm text-slate-500 mb-2">⏱ ${readingTime} min read</p>` +
      `<p class="text-sm text-slate-500 mb-6">Last updated: ${lastUpdated}</p>` +
      html;

    /* -----------------------------------
    IMAGES
    ----------------------------------- */
    html = html.replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      `<img src="$2" alt="$1" loading="lazy" class="rounded-2xl my-6 w-full" />`
    );

    /* -----------------------------------
    LINKS
    ----------------------------------- */
    html = html.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      (_, text, link) => {
        const isExternal = link.startsWith("http");
        return `<a href="${link}" ${
          isExternal ? 'target="_blank" rel="noopener noreferrer"' : ""
        } class="text-blue-600 underline">${text}</a>`;
      }
    );

    /* -----------------------------------
    AUTO INTERNAL LINKS
    ----------------------------------- */
    const internalLinks: Record<string, string> = {
      "uber eats calculator": "/uber-eats-calculator",
      "grubhub calculator": "/grubhub-calculator",
      "gig tax calculator": "/gig-tax-calculator",
    };

    Object.entries(internalLinks).forEach(([keyword, url]) => {
      const regex = new RegExp(`\\b(${keyword})\\b`, "gi");
      html = html.replace(
        regex,
        `<a href="${url}" class="text-blue-600 underline">$1</a>`
      );
    });

    /* -----------------------------------
    HEADINGS + TOC
    ----------------------------------- */
    html = html.replace(/^### (.*$)/gm, (_, text) => {
      const id = slugify(text);
      return `<h3 id="${id}" class="text-xl font-semibold mt-8 mb-4">${text}</h3>`;
    });

    html = html.replace(/^## (.*$)/gm, (_, text) => {
      const id = slugify(text);
      toc.push({ id, text });
      return `<h2 id="${id}" class="text-2xl font-bold mt-10 mb-6">${text}</h2>`;
    });

    html = html.replace(/^# (.*$)/gm, (_, text) => {
      const id = slugify(text);
      return `<h1 id="${id}" class="text-3xl font-bold mt-8 mb-6">${text}</h1>`;
    });

    /* -----------------------------------
    BOLD / ITALIC
    ----------------------------------- */
    html = html
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");

    /* -----------------------------------
    TABLES
    ----------------------------------- */
    html = html.replace(/((\|.*\|[\r\n])+)/g, (match) => {
      const rows = match.trim().split("\n");
      if (rows.length < 2) return match;

      const headers = rows[0].split("|").map((h) => h.trim()).filter(Boolean);
      const bodyRows = rows.slice(2);

      let tableHTML = `<div class="overflow-x-auto my-6"><table class="w-full text-sm"><thead><tr>`;

      tableHTML += headers.map((h) => `<th class="px-3 py-2 text-left">${h}</th>`).join("");

      tableHTML += `</tr></thead><tbody>`;

      bodyRows.forEach((row) => {
        const cols = row.split("|").map((c) => c.trim()).filter(Boolean);
        tableHTML += `<tr>${cols
          .map((c) => `<td class="px-3 py-2">${c}</td>`)
          .join("")}</tr>`;
      });

      tableHTML += `</tbody></table></div>`;
      return tableHTML;
    });

    /* -----------------------------------
    LISTS
    ----------------------------------- */
    html = html
      .replace(/^\- (.*$)/gm, "<li>$1</li>")
      .replace(/^\d+\. (.*$)/gm, "<li>$1</li>");

    html = html.replace(/((<li>.*<\/li>\s*)+)/g, "<ul>$1</ul>");

    /* -----------------------------------
    CODE
    ----------------------------------- */
    html = html.replace(/```([\s\S]*?)```/g, `<pre><code>$1</code></pre>`);
    html = html.replace(/`([^`]+)`/g, `<code>$1</code>`);

    /* -----------------------------------
    PARAGRAPHS
    ----------------------------------- */
    html = html
      .split("\n\n")
      .map((block) => {
        const t = block.trim();

        if (
          t.startsWith("<h") ||
          t.startsWith("<ul") ||
          t.startsWith("<pre") ||
          t.startsWith("<div") ||
          t.startsWith("<img") ||
          t === ""
        ) {
          return block;
        }

        return `<p>${t}</p>`;
      })
      .join("");

    html = html.replace(/<p>\s*<\/p>/g, "");

    /* -----------------------------------
    FAQ EXTRACTION
    ----------------------------------- */
    /* -----------------------------------
FAQ EXTRACTION (FIXED)
----------------------------------- */
const faqRegex = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;

let match;
while ((match = faqRegex.exec(html)) !== null) {
  const question = match[1].replace(/<[^>]+>/g, "").trim();
  const answer = match[2].replace(/<[^>]+>/g, "").trim();

  if (question.endsWith("?")) {
    faqs.push({ question, answer });
  }
}

    return { html, toc, faqs };
  } catch (error) {
    console.error(error);
    return {
      html: `<p>Error loading content.</p>`,
      toc: [],
      faqs: [],
    };
  }
}

/* -----------------------------------
OLD FUNCTION (NO CHANGE NEEDED)
----------------------------------- */
export function getToolContent(slug: string): string {
  return parseContent(slug).html;
}

/* -----------------------------------
ADVANCED FUNCTION
----------------------------------- */
export function getToolContentAdvanced(slug: string) {
  return parseContent(slug);
}

/* -----------------------------------
UTILS
----------------------------------- */
export function getAllToolSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];

  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

export function hasToolContent(slug: string): boolean {
  return fs.existsSync(path.join(contentDir, `${slug}.md`));
}