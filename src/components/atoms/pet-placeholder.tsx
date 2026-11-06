import { cn } from '@/lib/utils';

type PetPlaceholderProps = {
  label: string;
  className?: string;
};

// Espacio gris del caso de PetRide para una imagen o pantalla que aún no
// llega. Su etiqueta dice qué va ahí.
export function PetPlaceholder({ label, className }: PetPlaceholderProps) {
  return (
    <div
      className={cn('pet-placeholder', className)}
      role="img"
      aria-label={label}
    >
      <span className="pet-placeholder__label" aria-hidden="true">
        {label}
      </span>
    </div>
  );
}
