/**
 * Master Solution: Drill 02 — Promise Chaining, Error Handling & Finally
 */

export function processPromptPipeline(fetchFn, promptId, cleanupFn) {
  return fetchFn(promptId)
    .then((payload) => {
      if (!payload.text || payload.text.trim().length < 5) {
        throw new Error('Prompt too short');
      }
      return {
        id: payload.id,
        text: `${payload.text} [ENRICHED]`,
        status: 'SUCCESS',
      };
    })
    .catch((error) => {
      return {
        id: promptId,
        status: 'ERROR',
        message: error.message,
      };
    })
    .finally(() => {
      if (typeof cleanupFn === 'function') {
        cleanupFn();
      }
    });
}
