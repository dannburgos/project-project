import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

// Claro (blanco con borde), oscuro (sobre fotos o fondos azules) o naranja
type SonopizzaIconButtonTone = 'light' | 'glass' | 'orange';

const TONE_CLASS: Record<SonopizzaIconButtonTone, string> = {
  light: 'sp-icon-button--light',
  glass: 'sp-icon-button--glass',
  orange: 'sp-icon-button--orange'
};

type SonopizzaIconButtonProps = {
  icon: LucideIcon;
  label: string;
  tone?: SonopizzaIconButtonTone;
  className?: string;
};

// Botón redondo de 44 px con un ícono (volver, favoritos, buscar, sumar…)
export function SonopizzaIconButton({
  icon: Icon,
  label,
  tone = 'light',
  className
}: SonopizzaIconButtonProps) {
  return (
    <button
      type="button"
      className={cn('sp-icon-button', TONE_CLASS[tone], className)}
      aria-label={label}
    >
      <Icon aria-hidden="true" />
    </button>
  );
}
