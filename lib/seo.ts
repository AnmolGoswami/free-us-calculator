// lib/seo.ts
import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "data/content");

/**
 * Convert Markdown → Beautiful Styled HTML for SEO Content
 * Optimized for mobile, tables, readability, and no right-side cutoff
 */
export function getToolContent(slug: string): string {
  try {
    const filePath = path.join(contentDir, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return `<p>Content for this calculator is being updated. Please check back soon.</p>`;
    }

    let content = fs.readFileSync(filePath, "utf8");
    let html = content;

    /* -------------------------------
    HEADINGS
    --------------------------------*/
    html = html
      .replace(/^### (.*$)/gm, '<h3 class="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-slate-900">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl sm:text-3xl font-bold mt-10 mb-6 text-slate-900 tracking-tight">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-6 text-slate-900 tracking-tight">$1</h1>');

    /* -------------------------------
    BOLD / ITALIC
    --------------------------------*/
    html = html
      .replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold text-slate-900'>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");

    /* -------------------------------
    TABLES - FULLY MOBILE OPTIMIZED (No right cutoff)
    --------------------------------*/
    html = html.replace(/((\|.*\|[\r\n])+)/g, (match) => {
      const rows = match.trim().split("\n");
      if (rows.length < 2) return match;

      const headers = rows[0]
        .split("|")
        .map((h) => h.trim())
        .filter(Boolean);

      const bodyRows = rows.slice(2); // Skip header and separator row

      let tableHTML = `
<div class="overflow-x-auto my-8 rounded-3xl border border-slate-200 shadow-sm bg-white -mx-1 sm:-mx-0">
  <table class="w-full min-w-[620px] divide-y divide-slate-200 text-sm">
    <thead class="bg-slate-50">
      <tr>
        ${headers
          .map(
            (h) =>
              `<th class="px-4 sm:px-6 py-4 text-left font-semibold text-slate-700 whitespace-nowrap border-b border-slate-200">${h}</th>`
          )
          .join("")}
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 bg-white">
      `;

      bodyRows.forEach((row) => {
        const cols = row
          .split("|")
          .map((c) => c.trim())
          .filter(Boolean);
        if (cols.length === 0) return;

        tableHTML += `
          <tr class="hover:bg-slate-50 transition-colors duration-150">
            ${cols
              .map(
                (c) =>
                  `<td class="px-4 sm:px-6 py-4 text-slate-600 align-top leading-relaxed whitespace-normal break-words">${c}</td>`
              )
              .join("")}
          </tr>`;
      });

      tableHTML += `
          </tbody>
        </table>
      </div>`;

      return tableHTML;
    });

    /* -------------------------------
    LISTS
    --------------------------------*/
    html = html
      .replace(/^\- (.*$)/gm, '<li class="mb-2.5 text-slate-600">• $1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li class="mb-2.5 text-slate-600">$1</li>');

    // Wrap consecutive <li> into <ul> or <ol>
    html = html.replace(
      /((<li[^>]*>.*?<\/li>\s*)+)/g,
      '<ul class="list-none mb-8 space-y-1 pl-2">$1</ul>'
    );

    /* -------------------------------
    CODE BLOCKS & INLINE CODE
    --------------------------------*/
    html = html.replace(
      /```([\s\S]*?)```/g,
      '<pre class="bg-slate-900 text-slate-100 p-6 rounded-2xl overflow-auto my-6 text-sm"><code>$1</code></pre>'
    );

    html = html.replace(
      /`([^`]+)`/g,
      '<code class="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-sm text-orange-700">$1</code>'
    );

    /* -------------------------------
    PARAGRAPHS (Final Step)
    --------------------------------*/
    html = html
      .split("\n\n")
      .map((block) => {
        const trimmed = block.trim();
        if (
          trimmed.startsWith("<h") ||
          trimmed.startsWith("<div") ||
          trimmed.startsWith("<ul") ||
          trimmed.startsWith("<pre") ||
          trimmed.startsWith("<table") ||
          trimmed === "" ||
          trimmed === "---"
        ) {
          return block;
        }
        return `<p class="mb-6 leading-relaxed text-slate-600">${trimmed}</p>`;
      })
      .join("");

    // Clean up empty paragraphs
    html = html.replace(/<p>\s*<\/p>/g, "");

    return html;
  } catch (error) {
    console.error(`Error loading content for ${slug}:`, error);
    return `
      <p class="text-slate-600">
        Detailed explanation and guide for this calculator is being prepared.
      </p>
    `;
  }
}

/**
 * Get list of all available tool content files
 */
export function getAllToolSlugs(): string[] {
  try {
    if (!fs.existsSync(contentDir)) {
      fs.mkdirSync(contentDir, { recursive: true });
      return [];
    }
    return fs
      .readdirSync(contentDir)
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(".md", ""));
  } catch (error) {
    console.error("Error reading tool slugs:", error);
    return [];
  }
}

/**
 * Check if content exists for a tool
 */
export function hasToolContent(slug: string): boolean {
  const filePath = path.join(contentDir, `${slug}.md`);
  return fs.existsSync(filePath);
}