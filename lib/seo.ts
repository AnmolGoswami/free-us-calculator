// lib/seo.ts
import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'data/content');

export function getToolContent(slug: string): string {
  try {
    const filePath = path.join(contentDir, `${slug}.md`);
    const content = fs.readFileSync(filePath, 'utf8');

    // Basic markdown to HTML conversion
    return content
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^# (.*$)/gm, '<h2>$1</h2>')
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/^\- (.*$)/gm, '<li>$1</li>')
      .replace(/\n\n/g, '</p><p>');
  } catch (error) {
    return `<p>SEO content for this calculator is being updated.</p>`;
  }
}