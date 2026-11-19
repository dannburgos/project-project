import { cn } from '@/lib/utils';

type PetrideButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'lime' | 'ghost-light';
  isFull?: boolean;
  children: React.ReactNode;
};

// Botón de la app. En el tablero es una muestra: no dispara nada
export function PetrideButton({
  variant = 'primary',
  isFull = false,
  children
}: PetrideButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'petride-button',
        `petride-button--${variant}`,
        isFull && 'petride-button--full'
      )}
    >
      {children}
    </button>
  );
}
