import React, { useState, useMemo, useCallback, memo } from 'react';

/**
 * Master Solution: Drill 03 — Performance Optimization with useMemo, useCallback & React.memo
 */

export const LogItem = memo(({ log, onSelect }) => {
  return (
    <div data-testid={`log-${log.id}`} onClick={() => onSelect(log.id)}>
      {log.text}
    </div>
  );
});

export function LogAnalyzer({ logs = [], onSelectLog }) {
  const [tick, setTick] = useState(0);

  // Cache heavy calculation; only recompute when logs array reference changes
  const totalTokens = useMemo(() => {
    return logs.reduce((sum, item) => sum + item.tokens, 0);
  }, [logs]);

  // Preserve stable function reference across re-renders to prevent memoized child re-renders
  const handleSelect = useCallback(
    (id) => {
      if (typeof onSelectLog === 'function') {
        onSelectLog(id);
      }
    },
    [onSelectLog]
  );

  return (
    <div>
      <div>
        Total Tokens: <span data-testid="total-tokens">{totalTokens}</span>
      </div>
      <div>
        Ticks: <span data-testid="tick-count">{tick}</span>
      </div>
      <button data-testid="btn-tick" onClick={() => setTick((t) => t + 1)}>
        Tick
      </button>

      <div className="log-list">
        {logs.map((log) => (
          <LogItem key={log.id} log={log} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
}
