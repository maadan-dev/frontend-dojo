# Drill 02: Execution Context, Hoisting & The TDZ ⚙️

## 🎯 Objective
Understand JavaScript's two-phase execution cycle (Creation Phase vs. Execution Phase), diagnose hoisting anomalies, and respect the Temporal Dead Zone (TDZ).

## 📝 Background
In languages like Python, code is strictly evaluated line-by-line from top to bottom. In JavaScript, the engine first scans the file during the **Creation Phase**, registering identifiers in memory before executing a single line. Understanding this prevents tricky `undefined` or `ReferenceError: Cannot access 'x' before initialization` bugs.

## 📋 Requirements
Inside `exercise.js`:

1. `traceExecution(mode)`:
   - Given this snippet:
     ```javascript
     var x = 10;
     function test() {
       // What is x here?
       var x = 20;
       return x;
     }
     ```
   - Return the object: `{ hoistedVarValue: undefined, finalReturnValue: 20 }`.
2. `safeComputeWithTDZ(value)`:
   - Fix a function that previously attempted to reference a `const` or `let` variable before its lexical binding.
   - Return `value * 2` safely without triggering a `ReferenceError`.
3. `isFunctionDeclarationHoisted()`:
   - Demonstrate that function declarations (`function foo() {}`) can be invoked before their line of definition, while function expressions assigned to `const` cannot.
   - Return `true`.

## 🧪 Verification
Run tests in your terminal:
```bash
npm test 02-core-javascript-and-dom/drills/02-execution-context-and-hoisting
```
