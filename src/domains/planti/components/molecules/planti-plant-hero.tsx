import { Leaf } from 'lucide-react';

import { cn } from '@/lib/utils';

type PlantiPlantHeroProps = {
  size: 'tall' | 'large';
  // Rótulo sobre la planta (opcional)
  children?: React.ReactNode;
};

// Panel con la foto de la planta, recortada sobre fondo crema. Mientras no
// esté la foto, lleva una hoja.
export function PlantiPlantHero({ size, children }: PlantiPlantHeroProps) {
  return (
    <div
      className={cn('planti-plant-hero', `planti-plant-hero--${size}`)}
      aria-hidden="true"
    >
      <Leaf />
      {children}
    </div>
  );
}
