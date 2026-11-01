import { describe, it, expect } from 'vitest';
import {
  parseModelResponse,
  mergeConfigs,
  extractToolName,
  getEffectiveTemperature,
} from './exercise.js';

describe('Drill 05: Modern ES6+ Syntax & Data Transformation', () => {
  it('parseModelResponse extracts role, content, and defaults tokens', () => {
    const raw = {
      choices: [{ message: { role: 'assistant', content: 'Completed plan' } }],
    };
    expect(parseModelResponse(raw)).toEqual({
      role: 'assistant',
      content: 'Completed plan',
      totalTokens: 0,
    });
  });

  it('mergeConfigs merges without mutating original defaults', () => {
    const defaults = { model: 'flash', temperature: 0.7, maxTokens: 1000 };
    const overrides = { temperature: 0.2 };
    const merged = mergeConfigs(defaults, overrides);

    expect(merged).toEqual({ model: 'flash', temperature: 0.2, maxTokens: 1000 });
    expect(defaults.temperature).toBe(0.7);
  });

  it('extractToolName uses optional chaining safely', () => {
    expect(extractToolName({ agent: { tool: { name: 'python' } } })).toBe('python');
    expect(extractToolName({})).toBeNull();
    expect(extractToolName(null)).toBeNull();
  });

  it('getEffectiveTemperature uses ?? and does NOT override temperature: 0', () => {
    expect(getEffectiveTemperature({ temperature: 0 })).toBe(0);
    expect(getEffectiveTemperature({ temperature: 0.5 })).toBe(0.5);
    expect(getEffectiveTemperature({})).toBe(0.7);
    expect(getEffectiveTemperature(null)).toBe(0.7);
  });
});
