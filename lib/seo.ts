// lib/seo.ts
import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'data/content');

/**
 * Get SEO-optimized content for a tool page
 */
export function getToolContent(slug: string): string {
  try {
    const filePath = path.join(contentDir, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return `<p>Content for this calculator is being updated. Please check back soon.</p>`;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Better Markdown to HTML conversion
    let html = content
      // Headers
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-10 mb-5 text-gray-900">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-6 text-gray-900">$1</h1>')
      
      // Bold & Italic
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      
      // Lists
      .replace(/^\- (.*$)/gm, '<li class="ml-6 mb-2">$1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li class="ml-6 mb-2">$1</li>')
      
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-900 text-gray-100 p-5 rounded-2xl overflow-auto my-6"><code>$1</code></pre>')
      
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
      
      // Paragraphs
      .replace(/\n\n/g, '</p><p class="mb-6 leading-relaxed">')
      .replace(/^/gm, '<p class="mb-6 leading-relaxed">')
      .replace(/<\/p>$/gm, '');

    // Wrap lists properly
    html = html.replace(/<li/g, '<ul class="list-disc mb-6 space-y-2">$&');
    html = html.replace(/<\/li>(?!\s*<li>)/g, '</li></ul>');

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

    return fs.readdirSync(contentDir)
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));
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