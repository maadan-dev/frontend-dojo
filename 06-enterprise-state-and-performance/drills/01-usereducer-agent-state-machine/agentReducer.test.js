import { describe, it, expect } from 'vitest';
import { initialAgentState, agentReducer } from './agentReducer.js';

describe('Drill 01: State Machines & useReducer for Streaming AI', () => {
  it('handles START_STREAM transition', () => {
    const next = agentReducer(initialAgentState, { type: 'START_STREAM' });
    expect(next).toEqual({
      status: 'STREAMING',
      tokens: '',
      error: null,
    });
  });

  it('handles APPEND_CHUNK sequentially', () => {
    let state = { status: 'STREAMING', tokens: 'Hello', error: null };
    state = agentReducer(state, { type: 'APPEND_CHUNK', payload: ' world' });
    expect(state.tokens).toBe('Hello world');
    expect(state.status).toBe('STREAMING');
  });

  it('handles COMPLETE_STREAM transition', () => {
    const state = { status: 'STREAMING', tokens: 'Finished answer', error: null };
    const next = agentReducer(state, { type: 'COMPLETE_STREAM' });
    expect(next.status).toBe('SUCCESS');
    expect(next.tokens).toBe('Finished answer');
  });

  it('handles FAIL_STREAM with error payload', () => {
    const state = { status: 'STREAMING', tokens: 'Halfway', error: null };
    const next = agentReducer(state, {
      type: 'FAIL_STREAM',
      payload: 'Rate limit exceeded',
    });
    expect(next.status).toBe('ERROR');
    expect(next.error).toBe('Rate limit exceeded');
  });

  it('handles RESET', () => {
    const state = { status: 'ERROR', tokens: 'Bad', error: 'Err' };
    const next = agentReducer(state, { type: 'RESET' });
    expect(next).toEqual(initialAgentState);
  });
});
