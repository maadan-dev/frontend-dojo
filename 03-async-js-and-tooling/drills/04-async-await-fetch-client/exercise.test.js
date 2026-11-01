import { describe, it, expect, vi, beforeEach } from 'vitest';
import { sendInferenceRequest } from './exercise.js';

describe('Drill 04: Production Fetch Client with Async/Await & AbortController', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('successfully posts JSON payload and parses response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ output: 'Model response here' }),
    });

    const res = await sendInferenceRequest('/api/infer', { prompt: 'Hi' });

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/infer',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: 'Hi' }),
      })
    );
    expect(res).toEqual({ output: 'Model response here' });
  });

  it('throws descriptive error when response.ok is false', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 429,
      text: async () => 'Rate limit exceeded',
    });

    await expect(sendInferenceRequest('/api/infer', {})).rejects.toThrow(
      'HTTP 429: Rate limit exceeded'
    );
  });

  it('aborts request on timeout', async () => {
    global.fetch = vi.fn().mockImplementation((url, opts) => {
      return new Promise((resolve, reject) => {
        opts.signal.addEventListener('abort', () => {
          reject(new Error('Request aborted'));
        });
      });
    });

    await expect(
      sendInferenceRequest('/api/infer', {}, { timeoutMs: 50 })
    ).rejects.toThrow('Request aborted');
  });
});
