'use client';

import { useState } from 'react';

// Pestaña activa de la barra inferior y paso actual de un flujo de pasos
export function usePetDsNavigation(stepCount: number) {
  const [activeTab, setActiveTab] = useState(0);
  const [step, setStep] = useState(2);

  return {
    activeTab,
    step,
    canGoBack: step > 1,
    canGoNext: step < stepCount,
    handleTab: setActiveTab,
    handlePrevious: () => setStep(value => Math.max(1, value - 1)),
    handleNext: () => setStep(value => Math.min(stepCount, value + 1))
  };
}
