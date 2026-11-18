import { PetDsMotionShape } from '@/components/atoms/pet-ds-motion-shape';
import { PetDsSheet } from '@/components/molecules/pet-ds-sheet';
import type { PetDesignSystem } from '@/content/pet-design-system.types';
import { cn } from '@/lib/utils';

type PetDsMotionProps = {
  motion: PetDesignSystem['foundations']['motion'];
};

// Tres reglas de movimiento, cada una con su duración, su curva y una demo
// que se repite sola
export function PetDsMotion({ motion }: PetDsMotionProps) {
  return (
    <PetDsSheet title={motion.title} note={motion.note} isWide>
      <ul className="pet-ds__demos">
        {motion.rules.map(rule => (
          <li key={rule.id} className="pet-ds__demo">
            <span
              className={cn(
                'pet-ds__demo-stage',
                `pet-ds__demo-stage--${rule.id}`
              )}
              aria-hidden="true"
            >
              <PetDsMotionShape id={rule.id} />
            </span>
            <span className="pet-ds__radius-name">{rule.name}</span>
            <span className="pet-ds__spec">{rule.spec}</span>
          </li>
        ))}
      </ul>
    </PetDsSheet>
  );
}
