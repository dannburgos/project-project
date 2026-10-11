import { cn } from '@/lib/utils';

type PlaceholderProps = {
  label: string;
  variant?: 'image' | 'wide' | 'block';
  className?: string;
};

// Caja gris que marca dónde irá una imagen o un contenido real.
export function Placeholder({
  label,
  variant = 'block',
  className
}: PlaceholderProps) {
  return (
    <div
      className={cn(
        'placeholder',
        variant === 'image' && 'placeholder--image',
        variant === 'wide' && 'placeholder--wide',
        className
      )}
    >
      <span className="placeholder__label">{label}</span>
    </div>
  );
}
