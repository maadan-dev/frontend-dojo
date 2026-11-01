import { describe, it, expect } from 'vitest';
import { traceExecution, safeComputeWithTDZ, isFunctionDeclarationHoisted } from './exercise.js';

describe('Drill 02: Execution Context, Hoisting & The TDZ', () => {
  it('traceExecution returns exact hoisting predictions', () => {
    const result = traceExecution();
    expect(result).toEqual({
      hoistedVarValue: undefined,
      finalReturnValue: 20,
    });
  });

  it('safeComputeWithTDZ computes correctly without throwing ReferenceError', () => {
    expect(safeComputeWithTDZ(5)).toBe(10);
    expect(safeComputeWithTDZ(12)).toBe(24);
  });

  it('verifies function declaration hoisting characteristics', () => {
    expect(isFunctionDeclarationHoisted()).toBe(true);
  });
});
