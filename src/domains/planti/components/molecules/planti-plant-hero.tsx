import { Leaf } from 'lucide-react';

import { cn } from '@/lib/utils';

type PlantiPlantHeroProps = {
  size: 'tall' | 'large';
  // Foto de la planta; sin ella se muestra una hoja
  image?: string;
  // Rótulo sobre la planta (opcional)
  children?: React.ReactNode;
};

// Panel con la foto de la planta, recortada sobre fondo crema. Mientras no
// esté la foto, lleva una hoja.
export function PlantiPlantHero({
  size,
  image,
  children
}: PlantiPlantHeroProps) {
  return (
    <div
      className={cn(
        'planti-plant-hero',
        `planti-plant-hero--${size}`,
        image && 'planti-plant-hero--photo'
      )}
      aria-hidden="true"
    >
      {image ? (
        <img src={image} alt="" className="planti-plant-hero__photo" />
      ) : (
        <Leaf />
      )}
      {children}
    </div>
  );
}
