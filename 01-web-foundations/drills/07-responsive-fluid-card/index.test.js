import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Drill 07: Responsive UI & Fluid Typography with Clamp', () => {
  let cssContent;

  beforeEach(() => {
    const cssPath = path.resolve(__dirname, 'responsive.css');
    cssContent = fs.readFileSync(cssPath, 'utf-8');
  });

  it('uses clamp() for .hero-title fluid typography', () => {
    expect(cssContent).toMatch(/clamp\(\s*1\.5rem\s*,\s*4vw\s*\+\s*1rem\s*,\s*3rem\s*\)/i);
  });

  it('defines mobile-first .card-deck with column direction', () => {
    expect(cssContent).toMatch(/\.card-deck\s*\{[^}]*flex-direction\s*:\s*column/is);
  });

  it('includes min-width 768px media query with row flex-direction', () => {
    expect(cssContent).toMatch(/@media\s*\(\s*min-width\s*:\s*768px\s*\)\s*\{[^}]*flex-direction\s*:\s*row/is);
  });

  it('includes min-width 1024px media query with 33.333% cards', () => {
    expect(cssContent).toMatch(/@media\s*\(\s*min-width\s*:\s*1024px\s*\)/i);
    expect(cssContent).toMatch(/calc\(\s*33\.333%\s*-\s*16px\s*\)/i);
  });
});
