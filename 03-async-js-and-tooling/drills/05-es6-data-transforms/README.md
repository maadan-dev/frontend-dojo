# Drill 05: Modern ES6+ Syntax & Data Transformation 🧩

## 🎯 Objective
Master modern JavaScript syntax features: Destructuring with aliases and defaults, Spread & Rest parameters, Optional Chaining (`?.`), and Nullish Coalescing (`??`).

## 📝 Background
Writing verbose checks like `if (res && res.data && res.data.choices && ...)` clutter code and breed bugs. ES6+ syntax provides concise, bulletproof primitives for traversing and reshaping complex nested API payloads.

## 📋 Requirements
Inside `exercise.js`:

1. `parseModelResponse(response)`:
   - Uses nested destructuring with defaults to extract `{ role, content, totalTokens }` from standard AI API responses:
     ```javascript
     {
       choices: [{ message: { role: 'assistant', content: 'Hello' } }],
       usage: { total_tokens: 150 }
     }
     ```
   - If `total_tokens` is missing, defaults to `0`.
2. `mergeConfigs(defaultConfig, userOverrides)`:
   - Uses the spread operator (`...`) to return a new object where `userOverrides` override `defaultConfig`.
3. `extractToolName(payload)`:
   - Uses **Optional Chaining (`?.`)** to extract `payload?.agent?.tool?.name`. Returns `null` if not found.
4. `getEffectiveTemperature(config)`:
   - Uses **Nullish Coalescing (`??`)** to return `config?.temperature ?? 0.7`.
   - **Crucial Rule**: If `config.temperature` is explicitly `0` (zero creativity/deterministic), it must return `0`, NOT the default `0.7`!

## 🧪 Verification
```bash
npx vitest 03-async-js-and-tooling/drills/05-es6-data-transforms
```
