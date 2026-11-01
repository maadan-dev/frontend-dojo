import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';

import * as drill1 from './solutions/01-usereducer-agent-state-machine/agentReducer.js';
import * as drill2 from './solutions/02-context-api-agent-provider/AgentConfigContext.jsx';
import * as drill3 from './solutions/03-performance-memo-and-callback/solution.jsx';
import * as drill4 from './solutions/04-production-ai-chat-capstone/AIChatStudio.jsx';

describe('Solutions Audit: Phase 6 — Enterprise State & Performance', () => {
  it('01-usereducer-agent-state-machine solution passes', () => {
    const s = drill1.agentReducer(drill1.initialAgentState, { type: 'START_STREAM' });
    expect(s.status).toBe('STREAMING');
  });

  it('02-context-api-agent-provider solution passes', () => {
    function Consumer() {
      const { model } = drill2.useAgentConfig();
      return <div data-testid="c-model">{model}</div>;
    }
    render(
      <drill2.AgentConfigProvider initialModel="pro">
        <Consumer />
      </drill2.AgentConfigProvider>
    );
    expect(screen.getByTestId('c-model')).toHaveTextContent('pro');
  });

  it('03-performance-memo-and-callback solution passes', () => {
    render(<drill3.LogAnalyzer logs={[{ id: '1', text: 'a', tokens: 5 }]} />);
    expect(screen.getByTestId('total-tokens')).toHaveTextContent('5');
  });

  it('04-production-ai-chat-capstone solution passes', async () => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
    const mock = vi.fn(async (p, cb) => {
      cb('token');
      return 'full';
    });
    render(<drill4.AIChatStudio onGenerateStream={mock} />);
    fireEvent.change(screen.getByTestId('chat-input'), { target: { value: 'prompt' } });
    await act(async () => {
      fireEvent.click(screen.getByTestId('chat-send-btn'));
      await Promise.resolve();
    });
    expect(screen.getByText('full')).toBeInTheDocument();
  });
});
