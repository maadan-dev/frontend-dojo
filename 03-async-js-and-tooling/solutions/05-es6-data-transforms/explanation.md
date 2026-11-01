# Explanation: Drill 05 — Modern ES6+ Syntax & Data Transformation

## Why `??` Beats `||` for Configuration Objects

Consider:
```javascript
const temp = config.temperature || 0.7;
```
If a user deliberately configures a temperature of `0` (for completely deterministic, factual AI extraction):
- In JavaScript, `0` is **falsy**.
- The `||` operator sees a falsy value and discards it, incorrectly resetting the temperature to `0.7`!
- **Nullish Coalescing (`??`)** only triggers if the value is strictly `null` or `undefined`, allowing `0`, `""`, and `false` to pass through correctly.
