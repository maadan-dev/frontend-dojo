# Drill 02: Accessible AI Prompt Form & Live Regions ♿

## 🎯 Objective
Build a fully accessible, keyboard-navigable form for configuring and submitting an AI prompt, including an `aria-live` region for streaming responses.

## 📝 Background
In enterprise AI applications, forms control parameters like prompt text, model selection, and temperature. If forms lack proper labels, ARIA associations, or focus states, they fail WCAG 2.1 compliance and cannot be used by individuals relying on screen readers or keyboard navigation.

## 📋 Requirements
Inside `index.html`, construct a form conforming to the following specification:

1. **Heading**:
   - An `<h2>` with `id="form-title"` containing: "AI Inference Playground".
2. **Form Element**:
   - A `<form>` element associated with the title via `aria-labelledby="form-title"`.
3. **Prompt Textarea & Accessible Description**:
   - A `<label>` with `for="prompt-input"` and text: "User Prompt".
   - A `<textarea>` with `id="prompt-input"`, `name="prompt"`, `required`, and `aria-describedby="prompt-hint"`.
   - A `<p id="prompt-hint">` providing input guidance (e.g., "Enter up to 2000 characters for the model to analyze").
4. **Model Selection**:
   - A `<label>` with `for="model-select"` and text: "Select Model Architecture".
   - A `<select>` with `id="model-select"`, `name="model"`, containing at least 2 `<option>` elements (e.g. `gemini-3.8-flash`, `gemini-3.8-pro`).
5. **Temperature Slider**:
   - A `<label>` with `for="temperature-slider"` and text: "Temperature (Creativity)".
   - An `<input type="range">` with `id="temperature-slider"`, `name="temperature"`, `min="0"`, `max="2"`, `step="0.1"`, and `value="0.7"`.
6. **Submit Button**:
   - A native `<button type="submit">` containing "Execute Inference".
7. **Streaming Live Region**:
   - A container with `id="streaming-output"`, `aria-live="polite"`, and `aria-atomic="true"`.
   - This ensures screen readers automatically announce tokens as they stream in without cutting off existing speech.

## 🧪 Verification
Run tests in your terminal:
```bash
npm test 01-web-foundations/drills/02-accessible-ai-prompt-form
```
