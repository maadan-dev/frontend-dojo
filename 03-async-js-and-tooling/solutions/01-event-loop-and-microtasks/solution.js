/**
 * Master Solution: Drill 01 — The Event Loop & Microtask Queue
 */

export function predictExecutionOrder() {
  return [
    '1: Sync Start',
    '6: Sync End',
    '3: Microtask Promise 1',
    '4: Microtask Queue',
    '5: Microtask Promise 2',
    '2: Macrotask Timer',
  ];
}

export function scheduleMicrotask(callback) {
  queueMicrotask(callback);
}
