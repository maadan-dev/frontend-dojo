import React from 'react';

/**
 * Drill 03: Performance Optimization with useMemo, useCallback & React.memo
 */

export const LogItem = ({ log, onSelect }) => {
  // TODO: Wrap in React.memo
  return (
    <div data-testid={`log-${log.id}`} onClick={() => onSelect(log.id)}>
      {log.text}
    </div>
  );
};

export function LogAnalyzer({ logs, onSelectLog }) {
  // TODO: Implement useMemo for expensiveMetrics and useCallback for handleSelect
}
