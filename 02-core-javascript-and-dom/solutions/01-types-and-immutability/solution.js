/**
 * Master Solution: Drill 01 — Types & Immutability Patterns
 */

export function addModelSafely(modelsArray, newModel) {
  // Use array spread syntax to allocate a fresh array in the heap
  return [...modelsArray, newModel];
}

export function updateAgentConfig(agentObject, key, value) {
  // Use object spread syntax to create a shallow copy with the overridden key
  return {
    ...agentObject,
    [key]: value,
  };
}

export function deepCloneContext(context) {
  // structuredClone is the modern, native, spec-compliant standard in JS (Node 17+, all modern browsers)
  if (typeof structuredClone === 'function') {
    return structuredClone(context);
  }
  return JSON.parse(JSON.stringify(context));
}
