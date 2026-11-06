import { cn } from '@/lib/utils';

type PetFillTextProps = {
  text: string;
  className?: string;
};

// Párrafo que se pinta palabra por palabra con el scroll
export function PetFillText({ text, className }: PetFillTextProps) {
  return (
    <p className={cn('pet-fill', className)} data-pet-fill>
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="pet-word">
          {word}{' '}
        </span>
      ))}
    </p>
  );
}
