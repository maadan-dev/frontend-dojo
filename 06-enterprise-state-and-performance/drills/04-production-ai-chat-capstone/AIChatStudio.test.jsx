import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { AIChatStudio } from './AIChatStudio.jsx';

describe('Drill 04 (Capstone): Production AI Streaming Chat Studio', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  it('submits user prompt, simulates token stream, and completes message', async () => {
    const mockStreamService = vi.fn(async (prompt, onToken) => {
      onToken('Hello');
      onToken(' world');
      return 'Hello world';
    });

    render(<AIChatStudio onGenerateStream={mockStreamService} />);

    const input = screen.getByTestId('chat-input');
    const sendBtn = screen.getByTestId('chat-send-btn');

    fireEvent.change(input, { target: { value: 'Explain attention' } });
    expect(sendBtn).not.toBeDisabled();

    await act(async () => {
      fireEvent.click(sendBtn);
      await Promise.resolve();
    });

    // User message should be rendered
    expect(screen.getByText('Explain attention')).toBeInTheDocument();

    // Assistant response should be rendered
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('handles streaming errors gracefully', async () => {
    const mockErrorService = vi.fn(async () => {
      throw new Error('API Quota Exceeded');
    });

    render(<AIChatStudio onGenerateStream={mockErrorService} />);

    const input = screen.getByTestId('chat-input');
    const sendBtn = screen.getByTestId('chat-send-btn');

    fireEvent.change(input, { target: { value: 'Test error' } });

    await act(async () => {
      fireEvent.click(sendBtn);
      await Promise.resolve();
    });

    expect(screen.getByTestId('error-banner')).toHaveTextContent('API Quota Exceeded');
  });
});
