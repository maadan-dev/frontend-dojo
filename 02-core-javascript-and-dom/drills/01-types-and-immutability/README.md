# Drill 01: JavaScript Types & Immutability Patterns 🛡️

## 🎯 Objective
Understand the difference between primitive stack values and heap-allocated reference types, avoid accidental state mutation, and implement safe immutable update functions.

## 📝 Background
In React and modern state management, components only re-render when object/array **references change**. If you mutate an object in place (`state.user.name = 'New'`), React's shallow equality check sees the exact same memory address and fails to update the screen.

## 📋 Requirements
Inside `exercise.js`, implement three immutable transformation functions:

1. `addModelSafely(modelsArray, newModel)`:
   - Takes an array of model strings and a new model string.
   - Returns a **new array** containing all original items plus `newModel` at the end.
   - **Must NOT mutate** the input `modelsArray` (original array must retain its original length).
2. `updateAgentConfig(agentObject, key, value)`:
   - Takes an agent config object (e.g. `{ id: 'agent-1', temperature: 0.5 }`), a string `key`, and a `value`.
   - Returns a **new object** with the updated key/value pair.
   - **Must NOT mutate** the input `agentObject`.
3. `deepCloneContext(context)`:
   - Takes a nested context object:
     ```javascript
     {
       sessionId: '123',
       user: { id: 'u1', preferences: { theme: 'dark' } },
       history: ['hi', 'hello']
     }
     ```
   - Returns an independent **deep clone** where modifying `cloned.user.preferences.theme` or pushing to `cloned.history` does **NOT** mutate the original object.

## 🧪 Verification
Run tests in your terminal:
```bash
npm test 02-core-javascript-and-dom/drills/01-types-and-immutability
```
