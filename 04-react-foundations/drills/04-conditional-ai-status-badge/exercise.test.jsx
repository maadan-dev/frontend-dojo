import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AgentStatusBadge } from './exercise.jsx';

describe('Drill 04: Conditional UI Rendering', () => {
  it('renders thinking state correctly', () => {
    render(<AgentStatusBadge status="THINKING" />);
    expect(screen.getByText('Thinking...')).toBeInTheDocument();
  });

  it('renders streaming state correctly', () => {
    render(<AgentStatusBadge status="STREAMING" />);
    expect(screen.getByText('Streaming Tokens...')).toBeInTheDocument();
  });

  it('renders error state and includes retryCount when > 0', () => {
    render(<AgentStatusBadge status="ERROR" retryCount={2} />);
    expect(screen.getByText('Failed to respond')).toBeInTheDocument();
    expect(screen.getByTestId('retry-info')).toHaveTextContent('Retries left: 2');
  });

  it('hides retryCount when retryCount is 0', () => {
    render(<AgentStatusBadge status="ERROR" retryCount={0} />);
    expect(screen.getByText('Failed to respond')).toBeInTheDocument();
    expect(screen.queryByTestId('retry-info')).not.toBeInTheDocument();
  });

  it('renders complete and idle states', () => {
    const { rerender } = render(<AgentStatusBadge status="COMPLETE" />);
    expect(screen.getByText('Done')).toBeInTheDocument();

    rerender(<AgentStatusBadge status="IDLE" />);
    expect(screen.getByText('Standby')).toBeInTheDocument();
  });
});
