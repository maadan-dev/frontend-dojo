import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Drill 04: CSS Selectors, Combinators & Specificity', () => {
  let cssContent;

  beforeEach(() => {
    const cssPath = path.resolve(__dirname, 'selectors.css');
    cssContent = fs.readFileSync(cssPath, 'utf-8');
  });

  it('does not contain !important', () => {
    expect(cssContent).not.toMatch(/!important/i);
  });

  it('uses child combinator to style direct li children of .agent-list', () => {
    expect(cssContent).toMatch(/\.agent-list\s*>\s*li\s*\{[^}]*padding\s*:\s*12px/is);
  });

  it('uses adjacent sibling combinator to style p immediately after h2', () => {
    expect(cssContent).toMatch(/h2\s*\+\s*p\s*\{[^}]*font-weight\s*:\s*bold/is);
  });

  it('uses attribute selector to target type="password" inputs', () => {
    expect(cssContent).toMatch(/input\[type=(["']?)password\1\]\s*\{[^}]*border\s*:/is);
  });

  it('uses :disabled pseudo-class on buttons', () => {
    expect(cssContent).toMatch(/button:disabled\s*\{[^}]*cursor\s*:\s*not-allowed/is);
  });

  it('uses :nth-child(even) on table rows', () => {
    expect(cssContent).toMatch(/tbody\s+tr:nth-child\(\s*even\s*\)\s*\{[^}]*background-color\s*:/is);
  });
});
