import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import * as drill1 from './solutions/01-jsx-and-fragment-cards/solution.jsx';
import * as drill2 from './solutions/02-stateful-token-counter/solution.jsx';
import * as drill3 from './solutions/03-dynamic-message-feed/solution.jsx';
import * as drill4 from './solutions/04-conditional-ai-status-badge/solution.jsx';
import * as drill5 from './solutions/05-interactive-prompt-studio/solution.jsx';

describe('Solutions Audit: Phase 4 — React Foundations', () => {
  it('01-jsx-and-fragment-cards solution passes', () => {
    render(<drill1.ModelCard modelName="GPT-4o" provider="OpenAI" />);
    expect(screen.getByText('GPT-4o')).toBeInTheDocument();
  });

  it('02-stateful-token-counter solution passes', () => {
    render(<drill2.TokenCounter initialTokens={10} />);
    fireEvent.click(screen.getByTestId('btn-batch-add-3'));
    expect(screen.getByTestId('token-count')).toHaveTextContent('13');
  });

  it('03-dynamic-message-feed solution passes', () => {
    render(<drill3.MessageFeed initialMessages={[{ id: '1', sender: 'User', text: 'Hi' }]} />);
    expect(screen.getByTestId('msg-1')).toHaveTextContent('Hi');
  });

  it('04-conditional-ai-status-badge solution passes', () => {
    render(<drill4.AgentStatusBadge status="ERROR" retryCount={3} />);
    expect(screen.getByTestId('retry-info')).toHaveTextContent('Retries left: 3');
  });

  it('05-interactive-prompt-studio solution passes', () => {
    const spy = vi.fn();
    render(<drill5.PromptStudio onSubmitPrompt={spy} />);
    fireEvent.change(screen.getByTestId('prompt-input'), { target: { value: 'test' } });
    fireEvent.submit(screen.getByTestId('prompt-form'));
    expect(spy).toHaveBeenCalledWith('test');
  });
});
