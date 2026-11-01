import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as drill1 from './solutions/01-types-and-immutability/solution.js';
import * as drill2 from './solutions/02-execution-context-and-hoisting/solution.js';
import * as drill3 from './solutions/03-closure-state-machine/solution.js';
import * as drill4 from './solutions/04-array-transforms-map-filter-reduce/solution.js';
import * as drill5 from './solutions/05-dom-element-builder/solution.js';
import * as drill6 from './solutions/06-event-delegation-action-hub/solution.js';

describe('Solutions Audit: Phase 2 — Core JavaScript & The DOM Engine', () => {
  it('01-types-and-immutability solution passes', () => {
    const originalArr = ['a', 'b'];
    const newArr = drill1.addModelSafely(originalArr, 'c');
    expect(newArr).toEqual(['a', 'b', 'c']);
    expect(newArr).not.toBe(originalArr);

    const originalObj = { x: 1 };
    const newObj = drill1.updateAgentConfig(originalObj, 'x', 2);
    expect(newObj.x).toBe(2);
    expect(originalObj.x).toBe(1);

    const nested = { a: { b: 1 } };
    const cloned = drill1.deepCloneContext(nested);
    cloned.a.b = 99;
    expect(nested.a.b).toBe(1);
  });

  it('02-execution-context-and-hoisting solution passes', () => {
    expect(drill2.traceExecution()).toEqual({
      hoistedVarValue: undefined,
      finalReturnValue: 20,
    });
    expect(drill2.safeComputeWithTDZ(6)).toBe(12);
    expect(drill2.isFunctionDeclarationHoisted()).toBe(true);
  });

  it('03-closure-state-machine solution passes', () => {
    const budget = drill3.createTokenBudget(50);
    expect(budget.remaining).toBeUndefined();
    expect(budget.consume(20)).toEqual({ allowed: true, remaining: 30 });
    expect(budget.consume(40)).toEqual({ allowed: false, remaining: 30 });
    budget.reset();
    expect(budget.getRemaining()).toBe(50);

    const fn = vi.fn((x) => x);
    const limited = drill3.createRateLimiter(fn, 1);
    expect(limited(10)).toBe(10);
    expect(limited(20)).toBeNull();
  });

  it('04-array-transforms-map-filter-reduce solution passes', () => {
    const traces = [
      { id: '1', model: 'm1', tokens: { prompt: 10, completion: 20 }, latencyMs: 100, status: 'SUCCESS', costUsd: 0.01 },
      { id: '2', model: 'm1', tokens: { prompt: 5, completion: 5 }, latencyMs: 50, status: 'ERROR', costUsd: 0.005 },
      { id: '3', model: 'm2', tokens: { prompt: 20, completion: 30 }, latencyMs: 1200, status: 'SUCCESS', costUsd: 0.02 },
    ];

    expect(drill4.filterSuccessfulTraces(traces).length).toBe(2);
    expect(drill4.extractModelMetrics(traces)[0]).toEqual({ id: '1', totalTokens: 30, latencySec: 0.1 });
    expect(drill4.calculateTotalCost(traces)).toBe(0.035);
    expect(drill4.groupCostByModel(traces)).toEqual({ m1: 0.015, m2: 0.02 });
    expect(drill4.hasSlowRequests(traces, 1000)).toBe(true);
    expect(drill4.isAllWithinBudget(traces, 0.05)).toBe(true);
  });

  it('05-dom-element-builder solution passes', () => {
    const msg = { id: 'x', sender: 'assistant', text: 'Safe <script>alert(1)</script>', timestamp: '12:00' };
    const node = drill5.createMessageNode(msg);
    expect(node.classList.contains('chat-card')).toBe(true);
    expect(node.querySelector('.message-body').textContent).toBe(msg.text);
    expect(node.querySelector('script')).toBeNull();

    const parent = document.createElement('div');
    drill5.mountMessageList([msg], parent);
    expect(parent.querySelectorAll('.chat-card').length).toBe(1);
  });

  it('06-event-delegation-action-hub solution passes', () => {
    const parent = document.createElement('div');
    parent.innerHTML = `
      <div class="tool-card" data-id="calc">
        <button data-action="run">Run</button>
      </div>
    `;
    const spy = vi.fn();
    const cleanup = drill6.setupToolHub(parent, spy);

    parent.querySelector('button').click();
    expect(spy).toHaveBeenCalledWith({ action: 'run', toolId: 'calc' });

    cleanup();
    parent.querySelector('button').click();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
