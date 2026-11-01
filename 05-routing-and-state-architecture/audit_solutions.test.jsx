import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, renderHook, act } from '@testing-library/react';

import * as drill1 from './solutions/01-use-effect-auto-poller/solution.jsx';
import * as drill2 from './solutions/02-use-ref-auto-scroller/solution.jsx';
import * as drill3 from './solutions/03-custom-hook-use-debounce/useDebounce.js';
import * as drill4 from './solutions/04-custom-hook-use-chat-history/useChatHistory.js';

describe('Solutions Audit: Phase 5 — Routing & State Architecture', () => {
  it('01-use-effect-auto-poller solution passes', async () => {
    const fn = vi.fn().mockResolvedValue('IDLE');
    render(<drill1.ModelStatusPoller pollFn={fn} />);
    expect(screen.getByTestId('status-val')).toBeInTheDocument();
  });

  it('02-use-ref-auto-scroller solution passes', () => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
    render(<drill2.AutoScrollChat messages={[{ id: '1', text: 'hi' }]} />);
    expect(screen.getByTestId('bottom-sentinel')).toBeInTheDocument();
  });

  it('03-custom-hook-use-debounce solution passes', () => {
    const { result } = renderHook(() => drill3.useDebounce('query', 100));
    expect(result.current).toBe('query');
  });

  it('04-custom-hook-use-chat-history solution passes', () => {
    window.localStorage.clear();
    const { result } = renderHook(() => drill4.useChatHistory('test_key'));
    act(() => {
      result.current.addMessage({ sender: 'bot', text: 'Hello' });
    });
    expect(result.current.messages.length).toBe(1);
  });
});
