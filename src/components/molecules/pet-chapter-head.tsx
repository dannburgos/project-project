import { PetLetters } from '@/components/atoms/pet-letters';
import { cn } from '@/lib/utils';
import type { PetChapterHead as PetChapterHeadContent } from '@/content/petride-story.types';

type PetChapterHeadProps = {
  head: PetChapterHeadContent;
};

// Apertura de un capítulo de PetRide: palabra gigante de fondo que se desliza
// con el scroll y título que sube letra por letra. El título recibe
// el foco cuando se llega desde el submenú.
export function PetChapterHead({ head }: PetChapterHeadProps) {
  return (
    <header className="pet-head">
      <h2
        className={cn('pet-head__title', head.hideTitle && 'sr-only')}
        tabIndex={-1}
        data-pet-focus
      >
        <PetLetters text={head.title} />
      </h2>
      {head.lead && (
        <p className="pet-head__lead" data-pet-rise>
          {head.lead}
        </p>
      )}
    </header>
  );
}
