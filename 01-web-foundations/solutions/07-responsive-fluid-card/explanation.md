# Explanation: Drill 07 — Responsive UI & Fluid Typography with Clamp

## Key Principles

1. **`clamp(MIN, VAL, MAX)`**:
   - `MIN` is the floor. No matter how small the phone screen is, the text won't shrink smaller than this.
   - `VAL` is the fluid scaling rate. `4vw + 1rem` mixes viewport width with base font rems, ensuring the user's browser default zoom preference is still respected.
   - `MAX` is the ceiling. Prevents massive unreadable text on ultra-wide desktop monitors.

2. **Mobile-First Paradigm**:
   - Phones have the least compute, memory, and screen space.
   - By declaring mobile rules outside media queries, mobile browsers parse simple rules with zero media-query matching overhead.
   - Desktop screens progressively enhance with `min-width: 768px` and `min-width: 1024px`.
