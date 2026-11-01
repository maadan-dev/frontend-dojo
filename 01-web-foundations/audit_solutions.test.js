import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

describe('Solutions Audit: Phase 1 — Web Foundations', () => {
  it('01-semantic-dom-tree solution passes all checks', () => {
    const htmlPath = path.resolve(__dirname, 'solutions/01-semantic-dom-tree/index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    const dom = new JSDOM(htmlContent);
    const doc = dom.window.document;

    expect(doc.documentElement.getAttribute('lang')).toBe('en');
    expect(doc.querySelector('body > header, header h1').textContent).toContain('AI Model Gateway');
    expect(doc.querySelector('nav').getAttribute('aria-label')).toBe('Main Navigation');
    expect(doc.querySelectorAll('main').length).toBe(1);
    expect(doc.querySelector('article h2').textContent).toContain('Gemini 3.8 Architecture Overview');
    expect(doc.querySelectorAll('article p').length).toBeGreaterThanOrEqual(2);
    expect(doc.querySelector('aside h3')).not.toBeNull();
    expect(doc.querySelector('footer small')).not.toBeNull();
  });

  it('02-accessible-ai-prompt-form solution passes all checks', () => {
    const htmlPath = path.resolve(__dirname, 'solutions/02-accessible-ai-prompt-form/index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    const dom = new JSDOM(htmlContent);
    const doc = dom.window.document;

    expect(doc.getElementById('form-title').textContent).toContain('AI Inference Playground');
    expect(doc.querySelector('form').getAttribute('aria-labelledby')).toBe('form-title');
    expect(doc.getElementById('prompt-input').hasAttribute('required')).toBe(true);
    expect(doc.getElementById('prompt-input').getAttribute('aria-describedby')).toBe('prompt-hint');
    expect(doc.querySelectorAll('#model-select option').length).toBeGreaterThanOrEqual(2);
    expect(doc.getElementById('temperature-slider').getAttribute('type')).toBe('range');
    expect(doc.querySelector('button[type="submit"]')).not.toBeNull();
    expect(doc.getElementById('streaming-output').getAttribute('aria-live')).toBe('polite');
  });

  it('03-box-model-and-metrics solution passes all checks', () => {
    const cssPath = path.resolve(__dirname, 'solutions/03-box-model-and-metrics/styles.css');
    const css = fs.readFileSync(cssPath, 'utf-8');

    expect(css).toMatch(/box-sizing\s*:\s*border-box/i);
    expect(css).toMatch(/max-width\s*:\s*800px/i);
    expect(css).toMatch(/margin\s*:\s*0\s+auto/i);
    expect(css).toMatch(/\.card\s*\{[^}]*width\s*:\s*50%/is);
  });

  it('04-css-selectors-and-specificity solution passes all checks', () => {
    const cssPath = path.resolve(__dirname, 'solutions/04-css-selectors-and-specificity/selectors.css');
    const css = fs.readFileSync(cssPath, 'utf-8');

    expect(css).not.toMatch(/!important/i);
    expect(css).toMatch(/\.agent-list\s*>\s*li/is);
    expect(css).toMatch(/h2\s*\+\s*p/is);
    expect(css).toMatch(/input\[type=(["']?)password\1\]/is);
    expect(css).toMatch(/button:disabled/is);
    expect(css).toMatch(/tbody\s+tr:nth-child\(\s*even\s*\)/is);
  });

  it('05-flexbox-ai-chat-layout solution passes all checks', () => {
    const cssPath = path.resolve(__dirname, 'solutions/05-flexbox-ai-chat-layout/chat.css');
    const css = fs.readFileSync(cssPath, 'utf-8');

    expect(css).toMatch(/\.chat-shell\s*\{[^}]*display\s*:\s*flex/is);
    expect(css).toMatch(/\.chat-shell\s*\{[^}]*height\s*:\s*100(vh|dvh)/is);
    expect(css).toMatch(/\.chat-header\s*\{[^}]*flex-shrink\s*:\s*0/is);
    expect(css).toMatch(/\.message-stream\s*\{[^}]*(flex\s*:\s*1|flex-grow\s*:\s*1)/is);
    expect(css).toMatch(/\.message\.user\s*\{[^}]*align-self\s*:\s*flex-end/is);
    expect(css).toMatch(/\.message\.assistant\s*\{[^}]*align-self\s*:\s*flex-start/is);
    expect(css).toMatch(/\.prompt-input\s*\{[^}]*(flex\s*:\s*1|flex-grow\s*:\s*1)/is);
  });

  it('06-css-grid-model-dashboard solution passes all checks', () => {
    const cssPath = path.resolve(__dirname, 'solutions/06-css-grid-model-dashboard/dashboard.css');
    const css = fs.readFileSync(cssPath, 'utf-8');

    expect(css).toMatch(/\.dashboard-container\s*\{[^}]*display\s*:\s*grid/is);
    expect(css).toMatch(/grid-template-columns\s*:\s*250px\s+1fr/is);
    expect(css).toMatch(/grid-column\s*:\s*1\s*\/\s*-1/is);
    expect(css).toMatch(/repeat\(\s*auto-fit\s*,\s*minmax\(\s*220px\s*,\s*1fr\s*\)\s*\)/i);
    expect(css).toMatch(/grid-column\s*:\s*span\s+2/is);
  });

  it('07-responsive-fluid-card solution passes all checks', () => {
    const cssPath = path.resolve(__dirname, 'solutions/07-responsive-fluid-card/responsive.css');
    const css = fs.readFileSync(cssPath, 'utf-8');

    expect(css).toMatch(/clamp\(\s*1\.5rem\s*,\s*4vw\s*\+\s*1rem\s*,\s*3rem\s*\)/i);
    expect(css).toMatch(/\.card-deck\s*\{[^}]*flex-direction\s*:\s*column/is);
    expect(css).toMatch(/@media\s*\(\s*min-width\s*:\s*768px\s*\)\s*\{[^}]*flex-direction\s*:\s*row/is);
    expect(css).toMatch(/calc\(\s*33\.333%\s*-\s*16px\s*\)/i);
  });
});
