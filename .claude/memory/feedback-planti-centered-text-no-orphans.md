---
name: feedback-planti-centered-text-no-orphans
description: Centered text in Planti must never leave a single word alone on the last line
metadata:
  type: feedback
---

When text is centered in the Planti prototype, it must not end with a single word alone on the last line; the lines are balanced instead (`text-balance`).

**Why:** Dann asked for it as a general rule after seeing orphan words in centered texts (empty-state body, onboarding subtitles).

**How to apply:** add `text-balance` to every new centered block in Planti screens, and check the result in the browser. Related: [[feedback-planti-min-text-14]].
