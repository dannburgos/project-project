import { Leaf } from 'lucide-react';

import { cn } from '@/lib/utils';

type PlantiSizeOption = {
  key: string;
  label: string;
};

type PlantiSizeSliderProps = {
  sizes: readonly PlantiSizeOption[];
  // Cuál tamaño está elegido (ninguno, hasta que se elige)
  selectedKey: string | null;
  // Frase que explica el tamaño elegido, o la invitación a elegir
  hint: string;
};

// El tamaño de la planta: una tarjeta con la planta que crece o se encoge y,
// debajo, un deslizador con tres paradas. En el recorrido la bolita se desliza
// sola hasta el tamaño elegido.
export function PlantiSizeSlider({
  sizes,
  selectedKey,
  hint
}: PlantiSizeSliderProps) {
  return (
    <div className={cn('planti-size', `planti-size--${selectedKey ?? 'none'}`)}>
      <div className="planti-size__stage" aria-hidden="true">
        <Leaf />
      </div>
      <div className="planti-size__track" aria-hidden="true">
        <span className="planti-size__fill" />
        <span className="planti-size__thumb" />
      </div>
      <ul className="planti-size__stops">
        {sizes.map(size => (
          <li
            key={size.key}
            className={cn(
              'planti-size__stop',
              size.key === selectedKey && 'planti-size__stop--active'
            )}
          >
            {size.label}
          </li>
        ))}
      </ul>
      <p className="planti-size__hint">{hint}</p>
    </div>
  );
}
