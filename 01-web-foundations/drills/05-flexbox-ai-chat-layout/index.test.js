import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Drill 05: Modern Layouts — The Flexbox AI Chat Shell', () => {
  let cssContent;

  beforeEach(() => {
    const cssPath = path.resolve(__dirname, 'chat.css');
    cssContent = fs.readFileSync(cssPath, 'utf-8');
  });

  it('configures .chat-shell as a vertical 100vh flex container', () => {
    expect(cssContent).toMatch(/\.chat-shell\s*\{[^}]*display\s*:\s*flex/is);
    expect(cssContent).toMatch(/\.chat-shell\s*\{[^}]*flex-direction\s*:\s*column/is);
    expect(cssContent).toMatch(/\.chat-shell\s*\{[^}]*height\s*:\s*100(vh|dvh)/is);
  });

  it('configures .chat-header with flex-shrink: 0 and space-between', () => {
    expect(cssContent).toMatch(/\.chat-header\s*\{[^}]*flex-shrink\s*:\s*0/is);
    expect(cssContent).toMatch(/\.chat-header\s*\{[^}]*justify-content\s*:\s*space-between/is);
  });

  it('configures .message-stream with flex-grow: 1 and overflow-y: auto', () => {
    expect(cssContent).toMatch(/\.message-stream\s*\{[^}]*(flex\s*:\s*1|flex-grow\s*:\s*1)/is);
    expect(cssContent).toMatch(/\.message-stream\s*\{[^}]*overflow-y\s*:\s*auto/is);
  });

  it('aligns user messages right and assistant messages left', () => {
    expect(cssContent).toMatch(/\.message\.user\s*\{[^}]*align-self\s*:\s*flex-end/is);
    expect(cssContent).toMatch(/\.message\.assistant\s*\{[^}]*align-self\s*:\s*flex-start/is);
  });

  it('configures prompt bar with flex-shrink: 0 and flexible input', () => {
    expect(cssContent).toMatch(/\.prompt-bar\s*\{[^}]*flex-shrink\s*:\s*0/is);
    expect(cssContent).toMatch(/\.prompt-input\s*\{[^}]*(flex\s*:\s*1|flex-grow\s*:\s*1)/is);
  });
});
