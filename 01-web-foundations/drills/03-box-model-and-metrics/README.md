# Drill 03: The CSS Box Model & Sizing Metrics 📦

## 🎯 Objective
Master the CSS box model calculation, fix an element overflow bug caused by `content-box`, and configure universal `border-box` sizing.

## 📝 Background
In HTML, default element sizing (`box-sizing: content-box`) adds padding and border onto the specified `width`. For instance, if an element is set to `width: 50%` with `padding: 16px` and `border: 2px solid`, its actual rendered width is `50% + 32px + 4px`, which immediately causes two 50% columns to wrap onto separate lines or overflow parent containers!

## 📋 Requirements
Inside `styles.css`:

1. **Universal Box-Sizing Reset**:
   - Apply `box-sizing: border-box` globally to all elements (`*`), including `*::before` and `*::after`.
2. **Container**:
   - The `.container` must have a maximum width of `800px`, be centered horizontally using `margin: 0 auto;`, have `padding: 24px`, and have a visible border of `2px solid #ccc`.
3. **Card Metrics**:
   - `.card` components must each take up exactly `50%` width in a 2-column layout.
   - Each card must have:
     - `padding: 20px;`
     - `border: 1px solid #000;`
     - `background-color: #f9f9f9;`
4. **Zero Overflow**:
   - Because `border-box` is applied, two `.card` elements placed side by side must not exceed `100%` total width of their parent container.

## 🧪 Verification
Run tests in your terminal:
```bash
npm test 01-web-foundations/drills/03-box-model-and-metrics
```
