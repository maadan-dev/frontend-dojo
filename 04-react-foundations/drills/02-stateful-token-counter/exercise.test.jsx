import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TokenCounter } from './exercise.jsx';

describe('Drill 02: Stateful Token Counter & Functional Updates', () => {
  it('renders initial token count and calculated cost', () => {
    render(<TokenCounter initialTokens={100} costPerToken={0.002} />);

    expect(screen.getByTestId('token-count').textContent).toBe('100');
    expect(screen.getByTestId('total-cost').textContent).toBe('$0.2000');
  });

  it('increments tokens and calculates new cost', () => {
    render(<TokenCounter initialTokens={0} costPerToken={0.005} />);

    fireEvent.click(screen.getByTestId('btn-add-1'));
    expect(screen.getByTestId('token-count').textContent).toBe('1');
    expect(screen.getByTestId('total-cost').textContent).toBe('$0.0050');
  });

  it('correctly executes batch add 3 using functional state updates', () => {
    render(<TokenCounter initialTokens={10} />);

    fireEvent.click(screen.getByTestId('btn-batch-add-3'));
    expect(screen.getByTestId('token-count').textContent).toBe('13');
  });

  it('doubles tokens and resets properly', () => {
    render(<TokenCounter initialTokens={5} />);

    fireEvent.click(screen.getByTestId('btn-add-double'));
    expect(screen.getByTestId('token-count').textContent).toBe('10');

    fireEvent.click(screen.getByTestId('btn-reset'));
    expect(screen.getByTestId('token-count').textContent).toBe('5');
  });
});
