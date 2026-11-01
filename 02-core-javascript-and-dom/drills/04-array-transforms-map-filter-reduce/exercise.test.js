import { describe, it, expect } from 'vitest';
import {
  filterSuccessfulTraces,
  extractModelMetrics,
  calculateTotalCost,
  groupCostByModel,
  hasSlowRequests,
  isAllWithinBudget,
} from './exercise.js';

const mockTraces = [
  {
    id: 'tr-1',
    model: 'gemini-3.8-flash',
    tokens: { prompt: 100, completion: 50 },
    latencyMs: 350,
    status: 'SUCCESS',
    costUsd: 0.0015,
  },
  {
    id: 'tr-2',
    model: 'claude-3-7-sonnet',
    tokens: { prompt: 500, completion: 200 },
    latencyMs: 1400,
    status: 'SUCCESS',
    costUsd: 0.012,
  },
  {
    id: 'tr-3',
    model: 'gemini-3.8-flash',
    tokens: { prompt: 80, completion: 0 },
    latencyMs: 120,
    status: 'ERROR',
    costUsd: 0.0005,
  },
  {
    id: 'tr-4',
    model: 'claude-3-7-sonnet',
    tokens: { prompt: 400, completion: 300 },
    latencyMs: 2100,
    status: 'SUCCESS',
    costUsd: 0.015,
  },
];

describe('Drill 04: The Big 5 Higher-Order Array Transformations', () => {
  it('filterSuccessfulTraces filters out error status', () => {
    const res = filterSuccessfulTraces(mockTraces);
    expect(res.length).toBe(3);
    expect(res.every((t) => t.status === 'SUCCESS')).toBe(true);
  });

  it('extractModelMetrics formats token sum and latency in seconds', () => {
    const res = extractModelMetrics(mockTraces);
    expect(res[0]).toEqual({
      id: 'tr-1',
      totalTokens: 150,
      latencySec: 0.35,
    });
    expect(res[1]).toEqual({
      id: 'tr-2',
      totalTokens: 700,
      latencySec: 1.4,
    });
  });

  it('calculateTotalCost accumulates sum correctly', () => {
    const total = calculateTotalCost(mockTraces);
    expect(total).toBeCloseTo(0.029, 3);
  });

  it('groupCostByModel groups totals by model name', () => {
    const groups = groupCostByModel(mockTraces);
    expect(groups['gemini-3.8-flash']).toBeCloseTo(0.002, 3);
    expect(groups['claude-3-7-sonnet']).toBeCloseTo(0.027, 3);
  });

  it('hasSlowRequests checks threshold using .some()', () => {
    expect(hasSlowRequests(mockTraces, 2000)).toBe(true); // tr-4 is 2100ms
    expect(hasSlowRequests(mockTraces, 3000)).toBe(false);
  });

  it('isAllWithinBudget checks maximum budget using .every()', () => {
    expect(isAllWithinBudget(mockTraces, 0.02)).toBe(true);
    expect(isAllWithinBudget(mockTraces, 0.01)).toBe(false); // tr-2 and tr-4 violate
  });
});
