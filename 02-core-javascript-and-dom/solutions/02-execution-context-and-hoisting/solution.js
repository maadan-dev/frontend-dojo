/**
 * Master Solution: Drill 02 — Execution Context, Hoisting & The TDZ
 */

export function traceExecution() {
  return {
    hoistedVarValue: undefined,
    finalReturnValue: 20,
  };
}

export function safeComputeWithTDZ(value) {
  // Ensure declaration precedes usage to avoid Temporal Dead Zone (TDZ)
  const multiplier = 2;
  return value * multiplier;
}

export function isFunctionDeclarationHoisted() {
  // Can be called prior to declaration line
  return canCallBeforeDeclaration();

  function canCallBeforeDeclaration() {
    return true;
  }
}
