import { PetLetters } from '@/components/atoms/pet-letters';
import { cn } from '@/lib/utils';

type PetModuleTitleProps = {
  text: string;
  as?: 'h2' | 'h3';
  className?: string;
};

// Título importante de un módulo de PetRide, con el estilo de las aperturas
// de capítulo: grueso, letra por letra, y el mismo texto gigante y tenue
// detrás, que se desliza con el scroll
export function PetModuleTitle({
  text,
  as: Tag = 'h3',
  className
}: PetModuleTitleProps) {
  return (
    <Tag className={cn('pet-module__title', className)}>
      <span className="pet-module__ghost" aria-hidden="true" data-pet-ghost>
        {text}
      </span>
      <PetLetters text={text} className="pet-module__letters" />
    </Tag>
  );
}
