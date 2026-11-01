import { describe, it, expect, vi } from 'vitest';
import * as drill1 from './solutions/01-event-loop-and-microtasks/solution.js';
import * as drill2 from './solutions/02-promise-pipeline/solution.js';
import * as drill3 from './solutions/03-parallel-ai-tool-runner/solution.js';
import * as drill4 from './solutions/04-async-await-fetch-client/solution.js';
import * as drill5 from './solutions/05-es6-data-transforms/solution.js';

describe('Solutions Audit: Phase 3 — Asynchronous JS & Modern Tooling', () => {
  it('01-event-loop-and-microtasks solution passes', () => {
    expect(drill1.predictExecutionOrder().length).toBe(6);
  });

  it('02-promise-pipeline solution passes', async () => {
    const fetchFn = vi.fn().mockResolvedValue({ id: '1', text: 'Valid prompt text' });
    const cleanFn = vi.fn();
    const res = await drill2.processPromptPipeline(fetchFn, '1', cleanFn);
    expect(res.status).toBe('SUCCESS');
    expect(cleanFn).toHaveBeenCalled();
  });

  it('03-parallel-ai-tool-runner solution passes', async () => {
    const t1 = { name: 't1', run: async () => 'r1' };
    const t2 = { name: 't2', run: async () => { throw new Error('fail'); } };
    const resilient = await drill3.runToolsResilient([t1, t2], 'q');
    expect(resilient.successes[0].result).toBe('r1');
    expect(resilient.failures[0].error).toBe('fail');
  });

  it('04-async-await-fetch-client solution passes', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ res: 'ok' }),
    });
    const data = await drill4.sendInferenceRequest('/test', { a: 1 });
    expect(data.res).toBe('ok');
  });

  it('05-es6-data-transforms solution passes', () => {
    expect(drill5.getEffectiveTemperature({ temperature: 0 })).toBe(0);
    expect(drill5.getEffectiveTemperature({})).toBe(0.7);
    expect(drill5.extractToolName({ agent: { tool: { name: 'grep' } } })).toBe('grep');
  });
});
