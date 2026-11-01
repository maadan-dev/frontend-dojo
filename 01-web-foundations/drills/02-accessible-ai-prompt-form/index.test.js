import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

describe('Drill 02: Accessible AI Prompt Form & Live Regions', () => {
  let dom;
  let document;

  beforeEach(() => {
    const htmlPath = path.resolve(__dirname, 'index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    dom = new JSDOM(htmlContent);
    document = dom.window.document;
  });

  it('has a form labelled by form-title heading', () => {
    const heading = document.getElementById('form-title');
    expect(heading).not.toBeNull();
    expect(heading.textContent).toContain('AI Inference Playground');

    const form = document.querySelector('form');
    expect(form).not.toBeNull();
    expect(form.getAttribute('aria-labelledby')).toBe('form-title');
  });

  it('has an accessible required prompt textarea with description hint', () => {
    const label = document.querySelector('label[for="prompt-input"]');
    expect(label).not.toBeNull();
    expect(label.textContent).toContain('User Prompt');

    const textarea = document.getElementById('prompt-input');
    expect(textarea).not.toBeNull();
    expect(textarea.tagName.toLowerCase()).toBe('textarea');
    expect(textarea.hasAttribute('required')).toBe(true);
    expect(textarea.getAttribute('aria-describedby')).toBe('prompt-hint');

    const hint = document.getElementById('prompt-hint');
    expect(hint).not.toBeNull();
  });

  it('has an accessible model select dropdown', () => {
    const label = document.querySelector('label[for="model-select"]');
    expect(label).not.toBeNull();

    const select = document.getElementById('model-select');
    expect(select).not.toBeNull();
    const options = select.querySelectorAll('option');
    expect(options.length).toBeGreaterThanOrEqual(2);
  });

  it('has a temperature range slider with min, max, and step', () => {
    const label = document.querySelector('label[for="temperature-slider"]');
    expect(label).not.toBeNull();

    const slider = document.getElementById('temperature-slider');
    expect(slider).not.toBeNull();
    expect(slider.getAttribute('type')).toBe('range');
    expect(slider.getAttribute('min')).toBe('0');
    expect(slider.getAttribute('max')).toBe('2');
  });

  it('has a native submit button and an aria-live output region', () => {
    const submitBtn = document.querySelector('button[type="submit"]');
    expect(submitBtn).not.toBeNull();
    expect(submitBtn.textContent.trim().length).toBeGreaterThan(0);

    const liveRegion = document.getElementById('streaming-output');
    expect(liveRegion).not.toBeNull();
    expect(liveRegion.getAttribute('aria-live')).toBe('polite');
    expect(liveRegion.getAttribute('aria-atomic')).toBe('true');
  });
});
