import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type PlantiIconChoiceProps = {
  icon: LucideIcon;
  isSelected?: boolean;
  onSelect?: () => void;
  children: React.ReactNode;
};

// Una opción entre varias en forma de tarjeta pequeña con ícono (cuánta luz
// recibe). La elegida lleva el contorno verde y la sombra gris, igual que las
// cartas de Buscar, para que no se confunda con un botón
export function PlantiIconChoice({
  icon: Icon,
  isSelected = false,
  onSelect,
  children
}: PlantiIconChoiceProps) {
  return (
    <li
      className={cn(
        'planti-icon-choice',
        isSelected && 'planti-icon-choice--selected'
      )}
      aria-current={isSelected ? 'true' : undefined}
      onClick={onSelect}
    >
      <Icon aria-hidden="true" />
      {children}
    </li>
  );
}
