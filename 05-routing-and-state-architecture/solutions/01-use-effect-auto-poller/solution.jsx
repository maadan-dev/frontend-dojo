import React, { useState, useEffect } from 'react';

/**
 * Master Solution: Drill 01 — Side Effects & Polling Cleanup with useEffect
 */

export function ModelStatusPoller({ pollFn, intervalMs = 1000 }) {
  const [status, setStatus] = useState('IDLE');
  const [pollCount, setPollCount] = useState(0);

  useEffect(() => {
    let isSubscribed = true;

    const executePoll = async () => {
      try {
        const nextStatus = await pollFn();
        if (isSubscribed) {
          setStatus(nextStatus);
          setPollCount((prev) => prev + 1);
        }
      } catch (err) {
        if (isSubscribed) {
          setStatus('ERROR');
        }
      }
    };

    // Immediate initial poll on mount
    executePoll();

    // Setup periodic polling interval
    const timerId = setInterval(executePoll, intervalMs);

    // Guaranteed cleanup on unmount or intervalMs change
    return () => {
      isSubscribed = false;
      clearInterval(timerId);
    };
  }, [pollFn, intervalMs]);

  return (
    <div data-testid="poller-container">
      Status: <span data-testid="status-val">{status}</span>
      Polls: <span data-testid="poll-count">{pollCount}</span>
    </div>
  );
}
