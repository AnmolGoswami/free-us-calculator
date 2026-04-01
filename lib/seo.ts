// lib/seo.ts
import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "data/content");

/**
 * Convert Markdown → Styled HTML (SEO Optimized)
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
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-10 mb-5 text-gray-900">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-6 text-gray-900">$1</h1>');

    /* -------------------------------
    BOLD / ITALIC
    --------------------------------*/
    html = html
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");

    /* -------------------------------
    TABLE SUPPORT (🔥 FIXED)
    --------------------------------*/
    html = html.replace(/((\|.*\|[\r\n])+)/g, (match) => {
      const rows = match.trim().split("\n");

      if (rows.length < 2) return match;

      const headers = rows[0]
        .split("|")
        .map((h) => h.trim())
        .filter(Boolean);

      const bodyRows = rows.slice(2); // skip header + separator

      let table = `
      <div class="overflow-x-auto my-6">
        <table class="w-full border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <thead class="bg-gray-100">
            <tr>
              ${headers
                .map(
                  (h) =>
                    `<th class="text-left px-4 py-3 text-sm font-semibold text-gray-700 border-b">${h}</th>`
                )
                .join("")}
            </tr>
          </thead>
          <tbody>`;

      bodyRows.forEach((row) => {
        const cols = row
          .split("|")
          .map((c) => c.trim())
          .filter(Boolean);

        table += `
          <tr class="border-b odd:bg-white even:bg-gray-50">
            ${cols
              .map(
                (c) =>
                  `<td class="px-4 py-3 text-sm text-gray-700">${c}</td>`
              )
              .join("")}
          </tr>`;
      });

      table += `
          </tbody>
        </table>
      </div>`;

      return table;
    });

    /* -------------------------------
    LISTS
    --------------------------------*/
    html = html
      .replace(/^\- (.*$)/gm, '<li class="ml-6 mb-2">$1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li class="ml-6 mb-2">$1</li>');

    html = html.replace(/(<li.*<\/li>)/g, '<ul class="list-disc mb-6 space-y-2">$1</ul>');

    /* -------------------------------
    CODE BLOCKS
    --------------------------------*/
    html = html.replace(
      /```([\s\S]*?)```/g,
      '<pre class="bg-gray-900 text-gray-100 p-5 rounded-2xl overflow-auto my-6"><code>$1</code></pre>'
    );

    /* -------------------------------
    INLINE CODE
    --------------------------------*/
    html = html.replace(
      /`([^`]+)`/g,
      '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>'
    );

    /* -------------------------------
    PARAGRAPHS (LAST STEP)
    --------------------------------*/
    html = html
      .split("\n\n")
      .map((block) => {
        // skip if already HTML block
        if (
          block.startsWith("<h") ||
          block.startsWith("<ul") ||
          block.startsWith("<div") ||
          block.startsWith("<pre")
        ) {
          return block;
        }

        return `<p class="mb-6 leading-relaxed text-gray-700">${block}</p>`;
      })
      .join("");

    return html;
  } catch (error) {
    console.error(`Error loading content for ${slug}:`, error);

    return `
      <p class="text-gray-600">
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