/**
 * Master Solution: Drill 05 — Modern ES6+ Syntax & Data Transformation
 */

export function parseModelResponse(response) {
  const {
    choices: [{ message: { role = 'assistant', content = '' } = {} } = []] = [],
    usage: { total_tokens: totalTokens = 0 } = {},
  } = response || {};

  return { role, content, totalTokens };
}

export function mergeConfigs(defaultConfig, userOverrides) {
  return {
    ...defaultConfig,
    ...userOverrides,
  };
}

export function extractToolName(payload) {
  return payload?.agent?.tool?.name ?? null;
}

export function getEffectiveTemperature(config) {
  // ?? only falls back if null or undefined, preserving 0
  return config?.temperature ?? 0.7;
}
