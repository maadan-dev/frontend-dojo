import { describe, it, expect } from 'vitest';
import { runToolsParallel, runToolsResilient } from './exercise.js';

describe('Drill 03: Parallel AI Tool Execution', () => {
  const toolA = { name: 'calculator', run: async (q) => 42 };
  const toolB = { name: 'search', run: async (q) => ['res1', 'res2'] };
  const toolFail = {
    name: 'vectorDb',
    run: async () => {
      throw new Error('Connection timeout');
    },
  };

  it('runToolsParallel executes all tools concurrently', async () => {
    const results = await runToolsParallel([toolA, toolB], 'test');
    expect(results).toEqual([
      { tool: 'calculator', result: 42 },
      { tool: 'search', result: ['res1', 'res2'] },
    ]);
  });

  it('runToolsParallel rejects completely if one tool throws', async () => {
    await expect(runToolsParallel([toolA, toolFail], 'test')).rejects.toThrow('Connection timeout');
  });

  it('runToolsResilient isolates failures without crashing the batch', async () => {
    const output = await runToolsResilient([toolA, toolFail, toolB], 'test');

    expect(output.successes).toEqual([
      { tool: 'calculator', result: 42 },
      { tool: 'search', result: ['res1', 'res2'] },
    ]);
    expect(output.failures).toEqual([
      { tool: 'vectorDb', error: 'Connection timeout' },
    ]);
  });
});
