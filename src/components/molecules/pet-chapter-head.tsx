import { PetLetters } from '@/components/atoms/pet-letters';
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
      <span className="pet-head__ghost" aria-hidden="true" data-pet-ghost>
        {head.ghost}
      </span>
      <h2 className="pet-head__title" tabIndex={-1} data-pet-focus>
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
