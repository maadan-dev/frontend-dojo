import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

describe('Drill 01: Semantic DOM Tree Architecture', () => {
  let dom;
  let document;

  beforeEach(() => {
    const htmlPath = path.resolve(__dirname, 'index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    dom = new JSDOM(htmlContent);
    document = dom.window.document;
  });

  it('contains proper lang, charset, viewport, and title', () => {
    expect(document.documentElement.getAttribute('lang')).toBe('en');
    const charset = document.querySelector('meta[charset]');
    expect(charset).not.toBeNull();
    const viewport = document.querySelector('meta[name="viewport"]');
    expect(viewport).not.toBeNull();
    expect(document.title.trim().length).toBeGreaterThan(0);
  });

  it('has a semantic header with an h1 and an accessible nav', () => {
    const header = document.querySelector('body > header, header');
    expect(header).not.toBeNull();

    const h1 = header.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1.textContent).toContain('AI Model Gateway');

    const nav = header.querySelector('nav');
    expect(nav).not.toBeNull();
    expect(nav.getAttribute('aria-label')).toBe('Main Navigation');

    const links = nav.querySelectorAll('a');
    expect(links.length).toBeGreaterThanOrEqual(3);
    const linkTexts = Array.from(links).map((l) => l.textContent.trim());
    expect(linkTexts).toContain('Dashboard');
    expect(linkTexts).toContain('Playground');
    expect(linkTexts).toContain('Documentation');
  });

  it('has a single main tag containing an article and aside', () => {
    const mainTags = document.querySelectorAll('main');
    expect(mainTags.length).toBe(1);

    const main = mainTags[0];
    const article = main.querySelector('article');
    expect(article).not.toBeNull();

    const h2 = article.querySelector('h2');
    expect(h2).not.toBeNull();
    expect(h2.textContent).toContain('Gemini 3.8 Architecture Overview');

    const paragraphs = article.querySelectorAll('p');
    expect(paragraphs.length).toBeGreaterThanOrEqual(2);

    const aside = main.querySelector('aside');
    expect(aside).not.toBeNull();
    expect(aside.querySelector('h3')).not.toBeNull();
  });

  it('has a semantic footer with small copyright tag', () => {
    const footer = document.querySelector('footer');
    expect(footer).not.toBeNull();
    const small = footer.querySelector('small');
    expect(small).not.toBeNull();
  });
});
