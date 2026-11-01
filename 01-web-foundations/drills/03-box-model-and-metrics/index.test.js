import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Drill 03: The CSS Box Model & Sizing Metrics', () => {
  let cssContent;

  beforeEach(() => {
    const cssPath = path.resolve(__dirname, 'styles.css');
    cssContent = fs.readFileSync(cssPath, 'utf-8');
  });

  it('declares universal box-sizing border-box reset', () => {
    // Should contain *, *::before, *::after with box-sizing: border-box
    expect(cssContent).toMatch(/box-sizing\s*:\s*border-box/i);
    expect(cssContent).toMatch(/\*\s*(,\s*\*(::|:)before\s*,\s*\*(::|:)after)?/i);
  });

  it('configures container max-width and center alignment', () => {
    expect(cssContent).toMatch(/max-width\s*:\s*800px/i);
    expect(cssContent).toMatch(/margin\s*:\s*0\s+auto/i);
  });

  it('configures card 50% width and padding', () => {
    expect(cssContent).toMatch(/\.card\s*\{[^}]*width\s*:\s*50%/is);
    expect(cssContent).toMatch(/\.card\s*\{[^}]*padding\s*:\s*20px/is);
    expect(cssContent).toMatch(/\.card\s*\{[^}]*border\s*:\s*1px/is);
  });
});
