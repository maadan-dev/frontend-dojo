import { describe, it, expect, vi } from 'vitest';
import { processPromptPipeline } from './exercise.js';

describe('Drill 02: Promise Chaining, Error Handling & Finally', () => {
  it('processes valid prompt and executes cleanup', async () => {
    const fetchFn = vi.fn().mockResolvedValue({ id: 'p1', text: 'Analyze this code' });
    const cleanupFn = vi.fn();

    const result = await processPromptPipeline(fetchFn, 'p1', cleanupFn);

    expect(result).toEqual({
      id: 'p1',
      text: 'Analyze this code [ENRICHED]',
      status: 'SUCCESS',
    });
    expect(cleanupFn).toHaveBeenCalledTimes(1);
  });

  it('catches validation error, formats error object, and still executes cleanup', async () => {
    const fetchFn = vi.fn().mockResolvedValue({ id: 'p2', text: 'Hi' }); // Too short (< 5 chars)
    const cleanupFn = vi.fn();

    const result = await processPromptPipeline(fetchFn, 'p2', cleanupFn);

    expect(result).toEqual({
      id: 'p2',
      status: 'ERROR',
      message: 'Prompt too short',
    });
    expect(cleanupFn).toHaveBeenCalledTimes(1);
  });

  it('catches network rejection and still executes cleanup', async () => {
    const fetchFn = vi.fn().mockRejectedValue(new Error('Network failure'));
    const cleanupFn = vi.fn();

    const result = await processPromptPipeline(fetchFn, 'p3', cleanupFn);

    expect(result).toEqual({
      id: 'p3',
      status: 'ERROR',
      message: 'Network failure',
    });
    expect(cleanupFn).toHaveBeenCalledTimes(1);
  });
});
