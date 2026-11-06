import type { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

type PlantiCareOptionProps = {
  icon: LucideIcon;
  name: string;
  text: string;
  isChecked?: boolean;
};

// Un cuidado recomendado que se puede programar: ícono, nombre, por qué
// sirve y un cuadro que se marca. Marcado, lleva el mismo contorno verde y
// sombra gris que las cartas elegidas de Buscar
export function PlantiCareOption({
  icon: Icon,
  name,
  text,
  isChecked = false
}: PlantiCareOptionProps) {
  return (
    <li
      className={cn(
        'planti-care-option',
        isChecked && 'planti-care-option--checked'
      )}
      aria-checked={isChecked}
      role="checkbox"
    >
      <span className="planti-care-option__icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="planti-care-option__text">
        <span className="planti-care-option__name">{name}</span>
        <span className="planti-care-option__detail">{text}</span>
      </span>
      <span className="planti-care-option__box" aria-hidden="true">
        <Check />
      </span>
    </li>
  );
}
