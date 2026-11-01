/**
 * Master Solution: Drill 03 — Parallel AI Tool Execution
 */

export async function runToolsParallel(tools, query) {
  const promises = tools.map((tool) =>
    tool.run(query).then((result) => ({ tool: tool.name, result }))
  );
  return Promise.all(promises);
}

export async function runToolsResilient(tools, query) {
  const promises = tools.map((tool) =>
    tool
      .run(query)
      .then((result) => ({ tool: tool.name, result }))
      .catch((error) => {
        throw { tool: tool.name, error: error.message };
      })
  );

  const settled = await Promise.allSettled(promises);
  const successes = [];
  const failures = [];

  for (const item of settled) {
    if (item.status === 'fulfilled') {
      successes.push(item.value);
    } else {
      failures.push(item.reason);
    }
  }

  return { successes, failures };
}
