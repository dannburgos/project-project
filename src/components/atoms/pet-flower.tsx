import { PawPrint } from 'lucide-react';

import { cn } from '@/lib/utils';

type PetFlowerProps = {
  className?: string;
  hasPaw?: boolean;
};

const PETALS = Array.from({ length: 8 }, (_, index) => index);

// Flor de la marca PetRide (pétalos índigo, centro periwinkle), con la huella
// en el centro. Es decorativa.
export function PetFlower({ className, hasPaw = true }: PetFlowerProps) {
  return (
    <span className={cn('pet-flower', className)} aria-hidden="true">
      <svg className="pet-flower__svg" viewBox="0 0 200 200">
        {PETALS.map(petal => (
          <circle
            key={petal}
            className="pet-flower__petal"
            cx={100 + Math.cos((petal * Math.PI) / 4) * 52}
            cy={100 + Math.sin((petal * Math.PI) / 4) * 52}
            r="40"
          />
        ))}
        <circle className="pet-flower__core" cx="100" cy="100" r="58" />
      </svg>
      {hasPaw && <PawPrint className="pet-flower__paw" />}
    </span>
  );
}
