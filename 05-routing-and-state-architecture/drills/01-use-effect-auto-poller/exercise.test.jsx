import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { ModelStatusPoller } from './exercise.jsx';

describe('Drill 01: Side Effects & Polling Cleanup with useEffect', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('polls on mount and at periodic intervals', async () => {
    const pollFn = vi.fn().mockResolvedValue('RUNNING');

    render(<ModelStatusPoller pollFn={pollFn} intervalMs={1000} />);

    await act(async () => {
      await Promise.resolve();
    });
    expect(pollFn).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('status-val')).toHaveTextContent('RUNNING');
    expect(screen.getByTestId('poll-count')).toHaveTextContent('1');

    // Advance time by 2000ms (2 ticks)
    await act(async () => {
      vi.advanceTimersByTime(2000);
      await Promise.resolve();
    });

    expect(pollFn).toHaveBeenCalledTimes(3);
    expect(screen.getByTestId('poll-count')).toHaveTextContent('3');
  });

  it('cleans up interval on unmount to prevent memory leaks', async () => {
    const pollFn = vi.fn().mockResolvedValue('OK');
    const { unmount } = render(
      <ModelStatusPoller pollFn={pollFn} intervalMs={1000} />
    );

    unmount();

    await act(async () => {
      vi.advanceTimersByTime(5000);
    });

    // Should only have been called once on initial mount, not during the 5000ms after unmount!
    expect(pollFn).toHaveBeenCalledTimes(1);
  });
});
