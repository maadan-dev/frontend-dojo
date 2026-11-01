import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LogAnalyzer } from './exercise.jsx';

describe('Drill 03: Performance Optimization with useMemo & useCallback', () => {
  it('renders log count and triggers onSelectLog with stable callback', () => {
    const handleSelect = vi.fn();
    const logs = [
      { id: 'l1', text: 'Token 10', tokens: 10 },
      { id: 'l2', text: 'Token 20', tokens: 20 },
    ];

    render(<LogAnalyzer logs={logs} onSelectLog={handleSelect} />);

    expect(screen.getByTestId('total-tokens')).toHaveTextContent('30');

    // Click tick button (forces parent re-render)
    fireEvent.click(screen.getByTestId('btn-tick'));
    expect(screen.getByTestId('tick-count')).toHaveTextContent('1');

    // Click log item
    fireEvent.click(screen.getByTestId('log-l1'));
    expect(handleSelect).toHaveBeenCalledWith('l1');
  });
});
