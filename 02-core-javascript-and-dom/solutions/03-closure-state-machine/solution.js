/**
 * Master Solution: Drill 03 — Closures, Lexical Scope & Private State
 */

export function createTokenBudget(maxTokens) {
  // Lexically scoped private variable in outer execution context
  let remaining = maxTokens;

  return {
    consume(tokens) {
      if (tokens <= remaining) {
        remaining -= tokens;
        return { allowed: true, remaining };
      }
      return { allowed: false, remaining };
    },
    getRemaining() {
      return remaining;
    },
    reset() {
      remaining = maxTokens;
    },
  };
}

export function createRateLimiter(fn, maxCalls) {
  let callCount = 0;

  return function rateLimitedWrapper(...args) {
    if (callCount < maxCalls) {
      callCount++;
      return fn(...args);
    }
    return null;
  };
}
