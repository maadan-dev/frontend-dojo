# Explanation: Drill 05 — Modern Layouts: The Flexbox AI Chat Shell

## Core Architectural Patterns

1. **`flex-shrink: 0` on Header and Input Bar**:
   - By default in Flexbox, `flex-shrink` is `1`.
   - When the message stream fills with thousands of chat tokens, if the header and input do not have `flex-shrink: 0`, the expanding message body will compress and crush the header and input into zero height!
   - Setting `flex-shrink: 0` locks their calculated height permanently.

2. **`flex: 1 1 auto` + `overflow-y: auto`**:
   - `flex: 1 1 auto` instructs the message stream to claim 100% of the remaining vertical space between header and footer.
   - `overflow-y: auto` enables native, smooth scrolling strictly inside the message container without moving the header or input bar.

3. **`align-self` for Individual Alignment**:
   - In a flex column, the cross axis is horizontal.
   - User messages use `align-self: flex-end` (snaps to right).
   - Assistant messages use `align-self: flex-start` (snaps to left).
