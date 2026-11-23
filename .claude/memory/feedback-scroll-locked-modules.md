---
name: feedback-scroll-locked-modules
description: Modules with internal scroll interactions must freeze the page and consume the scroll until complete
metadata:
  node_type: memory
  type: feedback
  originSessionId: 9960531c-6a50-4587-8351-c71e0ea1e3fd
  modified: 2026-10-21T04:41:38.583Z
---

When a case-study module has its own scroll-driven interaction (e.g. Planti's "Tres fricciones"), the page must not keep moving: once the module is fully in view, page scroll freezes (content above stays put, content below doesn't rise), and wheel/trackpad/touch/keys advance the module's internal progress instead. Scrolling up reverses it; at 0 it releases upward. At 100% it releases downward and the next content (e.g. "El reto no es encontrar información…" + its side note) appears dynamically.

**Why:** Dann wants each module's scroll to be self-contained so it never impacts other information. A sticky section that lets the page scroll past (my first version) was rejected.

**How to apply:** Apply to every module with internal scroll interaction. Lock only when the module is fully in view; show subtle progress; avoid trackpad-inertia overshoot on release; support keyboard and touch; pause/resume Lenis smooth scroll; with prefers-reduced-motion, no lock (everything visible). Dann approved this behavior and these care details on 2026-10-21. Confirm understanding with her before executing such changes. Related: [[project-case-studies]]
