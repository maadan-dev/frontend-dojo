import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDebounce } from './useDebounce.js';

describe('Drill 03: Custom Hooks — useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('delays updating value until delayMs passes without new inputs', () => {
    const { result, rerender } = renderHook(
      ({ val, delay }) => useDebounce(val, delay),
      {
        initialProps: { val: 'prompt', delay: 300 },
      }
    );

    expect(result.current).toBe('prompt');

    // Fast keystrokes: 'prompt1', 'prompt12', 'prompt123'
    rerender({ val: 'prompt1', delay: 300 });
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(result.current).toBe('prompt'); // Not yet updated

    rerender({ val: 'prompt12', delay: 300 });
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(result.current).toBe('prompt'); // Still cancelled and reset

    rerender({ val: 'prompt123', delay: 300 });
    act(() => {
      vi.advanceTimersByTime(300); // Full delay elapsed!
    });
    expect(result.current).toBe('prompt123');
  });
});
