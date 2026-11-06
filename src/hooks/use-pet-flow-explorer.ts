'use client';

import { useState, type KeyboardEvent } from 'react';

// Explorador de los user flows de PetRide: qué flujo se ve y qué paso está
// elegido. Al cambiar de flujo se vuelve al primer paso. Las pestañas se
// recorren con las flechas, como pide el patrón de pestañas.
export function usePetFlowExplorer(flowCount: number) {
  const [flow, setFlow] = useState(0);
  const [node, setNode] = useState(0);

  const handleFlowChange = (index: number) => {
    setFlow(index);
    setNode(0);
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const step = event.key === 'ArrowRight' ? 1 : -1;
    const next = (flow + step + flowCount) % flowCount;
    handleFlowChange(next);
    event.currentTarget
      .querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [next]?.focus();
  };

  return {
    flow,
    node,
    handleFlowChange,
    handleNodeSelect: setNode,
    handleTabKeyDown
  };
}
