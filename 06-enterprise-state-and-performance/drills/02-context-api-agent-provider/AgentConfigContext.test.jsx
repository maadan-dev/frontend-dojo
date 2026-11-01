import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AgentConfigProvider, useAgentConfig } from './AgentConfigContext.jsx';

function TestConsumer() {
  const { model, setModel, temperature, setTemperature } = useAgentConfig();
  return (
    <div>
      <span data-testid="model-display">{model}</span>
      <span data-testid="temp-display">{temperature}</span>
      <button data-testid="btn-update-model" onClick={() => setModel('claude-3-7-sonnet')}>
        Update Model
      </button>
      <button data-testid="btn-update-temp" onClick={() => setTemperature(0.2)}>
        Update Temp
      </button>
    </div>
  );
}

describe('Drill 02: Global State with Context API & Custom Provider', () => {
  it('provides global state to child consumers and supports updates', () => {
    render(
      <AgentConfigProvider initialModel="gemini-3.8-flash" initialTemp={0.7}>
        <TestConsumer />
      </AgentConfigProvider>
    );

    expect(screen.getByTestId('model-display')).toHaveTextContent('gemini-3.8-flash');
    expect(screen.getByTestId('temp-display')).toHaveTextContent('0.7');

    fireEvent.click(screen.getByTestId('btn-update-model'));
    expect(screen.getByTestId('model-display')).toHaveTextContent('claude-3-7-sonnet');

    fireEvent.click(screen.getByTestId('btn-update-temp'));
    expect(screen.getByTestId('temp-display')).toHaveTextContent('0.2');
  });

  it('throws helpful error if useAgentConfig is called outside Provider', () => {
    expect(() => render(<TestConsumer />)).toThrow(
      'useAgentConfig must be used within an AgentConfigProvider'
    );
  });
});
