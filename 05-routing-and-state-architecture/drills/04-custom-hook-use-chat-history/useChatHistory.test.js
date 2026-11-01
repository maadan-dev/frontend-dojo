import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useChatHistory } from './useChatHistory.js';

describe('Drill 04: Custom Hooks — useChatHistory', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('initializes with empty array when no storage exists', () => {
    const { result } = renderHook(() => useChatHistory('test_chat'));
    expect(result.current.messages).toEqual([]);
  });

  it('adds messages and synchronizes with localStorage', () => {
    const { result } = renderHook(() => useChatHistory('test_chat'));

    act(() => {
      result.current.addMessage({ sender: 'user', text: 'Hello AI' });
    });

    expect(result.current.messages.length).toBe(1);
    expect(result.current.messages[0].text).toBe('Hello AI');

    const stored = JSON.parse(window.localStorage.getItem('test_chat'));
    expect(stored.length).toBe(1);
    expect(stored[0].text).toBe('Hello AI');
  });

  it('clears history from state and storage', () => {
    const { result } = renderHook(() => useChatHistory('test_chat'));

    act(() => {
      result.current.addMessage({ sender: 'user', text: 'To be cleared' });
    });
    expect(result.current.messages.length).toBe(1);

    act(() => {
      result.current.clearHistory();
    });
    expect(result.current.messages).toEqual([]);
    expect(JSON.parse(window.localStorage.getItem('test_chat'))).toEqual([]);
  });
});
