import { cn } from '@/lib/utils';

type ToyotaFillTextProps = {
  text: string;
  className?: string;
};

// Párrafo que se enciende palabra por palabra con el scroll (de gris a tinta)
export function ToyotaFillText({ text, className }: ToyotaFillTextProps) {
  return (
    <p className={cn('ty-fill', className)} data-ty-fill>
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="ty-fill__word">
          {word}{' '}
        </span>
      ))}
    </p>
  );
}
