import { describe, it, expect, vi } from 'vitest';
import { createTokenBudget, createRateLimiter } from './exercise.js';

describe('Drill 03: Closures, Lexical Scope & Private State', () => {
  it('createTokenBudget manages private balance without exposing raw property', () => {
    const budget = createTokenBudget(100);

    expect(budget.remaining).toBeUndefined();
    expect(budget.getRemaining()).toBe(100);

    const res1 = budget.consume(40);
    expect(res1).toEqual({ allowed: true, remaining: 60 });
    expect(budget.getRemaining()).toBe(60);

    // Overdraft attempt
    const res2 = budget.consume(80);
    expect(res2).toEqual({ allowed: false, remaining: 60 });
    expect(budget.getRemaining()).toBe(60);

    budget.reset();
    expect(budget.getRemaining()).toBe(100);
  });

  it('createRateLimiter limits execution count', () => {
    const mockFn = vi.fn((x) => x * 2);
    const limited = createRateLimiter(mockFn, 2);

    expect(limited(5)).toBe(10);
    expect(limited(7)).toBe(14);
    expect(limited(9)).toBeNull();
    expect(limited(10)).toBeNull();

    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
