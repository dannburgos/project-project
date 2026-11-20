---
name: feedback-planti-min-text-14
description: "In the Planti prototype no text goes below 16 px (raised from 14 on 2026-11-06), except the bottom nav labels (12 px)"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 9960531c-6a50-4587-8351-c71e0ea1e3fd
  modified: 2026-11-06T07:03:25.251Z
---

In the Planti prototype (375 x 750 screen), the smallest text size is 16 px on the screens of flows 1, 2 and 3. Exceptions: the bottom navigation labels (12 px) and the phone status bar clock. Review tools around the phone (board notes, timeline panel) are not app screens and keep their own sizes.

**Why:** first Dann set 14 px after seeing 12 px supporting text in Inicio; on 2026-11-06 she raised the floor to 16 px for all flows.

**How to apply:** use `text-base` (16 px, usually with `leading-6`) as the floor for every new Planti screen, including flow 3; check that tight spots (banner slides with fixed height, plant tiles, chips, facts next to the plant) still fit instead of going back to 14 px. Works together with [[feedback-even-sizes]].
