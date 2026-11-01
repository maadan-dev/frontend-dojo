import { describe, it, expect, vi } from 'vitest';
import { predictExecutionOrder, scheduleMicrotask } from './exercise.js';

describe('Drill 01: The Event Loop & Microtask Queue', () => {
  it('predictExecutionOrder returns exact order', () => {
    expect(predictExecutionOrder()).toEqual([
      '1: Sync Start',
      '6: Sync End',
      '3: Microtask Promise 1',
      '4: Microtask Queue',
      '5: Microtask Promise 2',
      '2: Macrotask Timer',
    ]);
  });

  it('scheduleMicrotask executes before setTimeout macrotask', async () => {
    const order = [];
    setTimeout(() => order.push('macro'), 0);
    scheduleMicrotask(() => order.push('micro'));

    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(order).toEqual(['micro', 'macro']);
  });
});
