import { describe, it, expect } from 'vitest';
import { addModelSafely, updateAgentConfig, deepCloneContext } from './exercise.js';

describe('Drill 01: Types & Immutability Patterns', () => {
  it('addModelSafely adds item without mutating original array', () => {
    const original = ['gemini-3.8-flash', 'claude-3-7-sonnet'];
    const result = addModelSafely(original, 'gpt-4o');

    expect(result).toEqual(['gemini-3.8-flash', 'claude-3-7-sonnet', 'gpt-4o']);
    expect(result).not.toBe(original);
    expect(original.length).toBe(2);
  });

  it('updateAgentConfig returns updated object without mutating original', () => {
    const original = { id: 'agent-01', temperature: 0.7, model: 'flash' };
    const result = updateAgentConfig(original, 'temperature', 0.2);

    expect(result.temperature).toBe(0.2);
    expect(original.temperature).toBe(0.7);
    expect(result).not.toBe(original);
  });

  it('deepCloneContext produces completely decoupled nested clone', () => {
    const original = {
      sessionId: 'sess-99',
      user: { id: 'u1', preferences: { theme: 'dark' } },
      history: ['prompt1', 'response1'],
    };

    const cloned = deepCloneContext(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.user).not.toBe(original.user);
    expect(cloned.user.preferences).not.toBe(original.user.preferences);
    expect(cloned.history).not.toBe(original.history);

    // Mutation test
    cloned.user.preferences.theme = 'light';
    cloned.history.push('prompt2');

    expect(original.user.preferences.theme).toBe('dark');
    expect(original.history.length).toBe(2);
  });
});
