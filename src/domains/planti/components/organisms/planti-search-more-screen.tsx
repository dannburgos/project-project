'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiSwatch } from '../atoms/planti-swatch';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';
import { PlantiSizeSlider } from '../molecules/planti-size-slider';

type PlantiSearchMoreScreenProps = {
  hasSize?: boolean;
  hasColor?: boolean;
  // El botón se está pulsando (en el recorrido)
  isPressed?: boolean;
  // Se puede elegir tamaño y color (en el tablero)
  isInteractive?: boolean;
};

// Buscar, paso 2: "Cuéntanos más". El tamaño, con la planta que cambia y un
// deslizador (comparado con el cuerpo), y el color de las hojas, en muestras
// redondas; todo en palabras que cualquiera entiende.
export function PlantiSearchMoreScreen({
  hasSize = false,
  hasColor = true,
  isPressed = false,
  isInteractive = false
}: PlantiSearchMoreScreenProps) {
  const { more } = plantiMessages.search;
  const [sizeKey, setSizeKey] = useState<string>(
    more.sizes.find(size => 'isSelected' in size)?.key ?? more.sizes[0].key
  );
  const [colorKey, setColorKey] = useState<string>(
    more.colors.find(color => 'isSelected' in color)?.key ?? ''
  );
  // La barra siempre parte de la primera parada; al elegir, llega a la elegida
  const chosenSize = isInteractive
    ? more.sizes.find(size => size.key === sizeKey)
    : hasSize
      ? more.sizes.find(size => 'isSelected' in size)
      : more.sizes[0];

  return (
    <div className="planti-screen">
      <PlantiScreenHeader title={more.title} />
      <section className="planti-option-group">
        <h2 className="planti-search-question">{more.sizeLabel}</h2>
        <PlantiSizeSlider
          sizes={more.sizes}
          selectedKey={chosenSize?.key ?? null}
          onSelect={isInteractive ? setSizeKey : undefined}
        />
      </section>
      <section className="planti-option-group">
        <h2 className="planti-search-question">{more.colorLabel}</h2>
        <ul className="planti-swatch-list">
          {more.colors.map(color => (
            <PlantiSwatch
              key={color.key}
              tone={color.key}
              label={color.label}
              isSelected={
                isInteractive
                  ? color.key === colorKey
                  : hasColor && 'isSelected' in color
              }
              onSelect={
                isInteractive ? () => setColorKey(color.key) : undefined
              }
            />
          ))}
        </ul>
      </section>
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {more.action}
        </PlantiButton>
      </div>
    </div>
  );
}
