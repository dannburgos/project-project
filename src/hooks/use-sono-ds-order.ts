'use client';

import { useState } from 'react';

import type { SonoDesignSystem } from '@/content/sonopizza-design-system.types';
import { useSonoDsCounter } from '@/hooks/use-sono-ds-counter';

type SonoDsConfigurator = SonoDesignSystem['components']['configurator'];

function toggle(list: readonly string[], name: string) {
  return list.includes(name)
    ? list.filter(item => item !== name)
    : [...list, name];
}

// Personalización de muestra del sistema de diseño de Sonopizza: el tamaño es
// obligatorio, los ingredientes se pueden quitar y los extras suman a la base.
// El total se recalcula con cada elección y con la cantidad
export function useSonoDsOrder({ sizes, extras }: SonoDsConfigurator) {
  const [sizeIndex, setSizeIndex] = useState<number | null>(null);
  const [removed, setRemoved] = useState<readonly string[]>([]);
  const [chosenExtras, setChosenExtras] = useState<readonly string[]>([]);
  const counter = useSonoDsCounter();

  const base = sizeIndex === null ? 0 : (sizes[sizeIndex]?.price ?? 0);
  const extrasTotal = extras
    .filter(extra => chosenExtras.includes(extra.name))
    .reduce((sum, extra) => sum + extra.price, 0);

  return {
    sizeIndex,
    removed,
    chosenExtras,
    quantity: counter.count,
    canDecrease: counter.canDecrease,
    canIncrease: counter.canIncrease,
    hasSize: sizeIndex !== null,
    base: base * counter.count,
    extrasTotal: extrasTotal * counter.count,
    total: (base + extrasTotal) * counter.count,
    handleSize: setSizeIndex,
    handleIngredient: (name: string) => setRemoved(list => toggle(list, name)),
    handleExtra: (name: string) => setChosenExtras(list => toggle(list, name)),
    handleDecrease: counter.handleDecrease,
    handleIncrease: counter.handleIncrease
  };
}
