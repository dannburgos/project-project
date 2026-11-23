import { cn } from '@/lib/utils';

type PetrideButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'lime' | 'ghost-light';
  isFull?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
};

// Botón de la app. En el tablero es una muestra: no dispara nada
export function PetrideButton({
  variant = 'primary',
  isFull = false,
  isDisabled = false,
  children
}: PetrideButtonProps) {
  return (
    <button
      type="button"
      disabled={isDisabled}
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
