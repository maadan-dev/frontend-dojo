import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Drill 06: Modern Layouts — The CSS Grid AI Metrics Dashboard', () => {
  let cssContent;

  beforeEach(() => {
    const cssPath = path.resolve(__dirname, 'dashboard.css');
    cssContent = fs.readFileSync(cssPath, 'utf-8');
  });

  it('configures .dashboard-container with grid and two columns (250px and 1fr)', () => {
    expect(cssContent).toMatch(/\.dashboard-container\s*\{[^}]*display\s*:\s*grid/is);
    expect(cssContent).toMatch(/\.dashboard-container\s*\{[^}]*grid-template-columns\s*:\s*250px\s+1fr/is);
  });

  it('makes .dashboard-header span all columns (1 / -1)', () => {
    expect(cssContent).toMatch(/\.dashboard-header\s*\{[^}]*grid-column\s*:\s*1\s*\/\s*-1/is);
  });

  it('configures .metrics-grid with repeat(auto-fit, minmax(220px, 1fr))', () => {
    expect(cssContent).toMatch(/repeat\(\s*auto-fit\s*,\s*minmax\(\s*220px\s*,\s*1fr\s*\)\s*\)/i);
  });

  it('makes .metric-card.featured span 2 columns', () => {
    expect(cssContent).toMatch(/\.metric-card\.featured\s*\{[^}]*grid-column\s*:\s*span\s+2/is);
  });
});
