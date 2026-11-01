/**
 * Master Solution: Drill 04 — The Big 5 Higher-Order Array Transformations
 */

export function filterSuccessfulTraces(traces) {
  return traces.filter((trace) => trace.status === 'SUCCESS');
}

export function extractModelMetrics(traces) {
  return traces.map((trace) => ({
    id: trace.id,
    totalTokens: trace.tokens.prompt + trace.tokens.completion,
    latencySec: trace.latencyMs / 1000,
  }));
}

export function calculateTotalCost(traces) {
  const sum = traces.reduce((acc, trace) => acc + trace.costUsd, 0);
  return Number(sum.toFixed(4));
}

export function groupCostByModel(traces) {
  return traces.reduce((acc, trace) => {
    acc[trace.model] = (acc[trace.model] || 0) + trace.costUsd;
    return acc;
  }, {});
}

export function hasSlowRequests(traces, thresholdMs) {
  return traces.some((trace) => trace.latencyMs > thresholdMs);
}

export function isAllWithinBudget(traces, maxCostPerRequest) {
  return traces.every((trace) => trace.costUsd <= maxCostPerRequest);
}
