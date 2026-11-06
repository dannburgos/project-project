import { Pause, Play, RotateCcw } from 'lucide-react';

import { cn } from '@/lib/utils';

import { PlantiButton } from './planti-button';

type PlantiSequenceButtonProps = {
  kind: 'start' | 'pause' | 'resume' | 'replay';
  label: string;
  onClick: () => void;
  // Solo el ícono, redondo; el texto queda para los lectores de pantalla
  isIconOnly?: boolean;
};

const ICONS = {
  start: Play,
  pause: Pause,
  resume: Play,
  replay: RotateCcw
} as const;

// Botón para iniciar, pausar, seguir o repetir el recorrido, fuera del celular
export function PlantiSequenceButton({
  kind,
  label,
  onClick,
  isIconOnly = false
}: PlantiSequenceButtonProps) {
  const Icon = ICONS[kind];

  return (
    <PlantiButton
      className={cn(
        'planti-sequence-button',
        isIconOnly && 'planti-sequence-button--icon'
      )}
      onClick={onClick}
      aria-label={isIconOnly ? label : undefined}
    >
      <Icon aria-hidden="true" />
      {!isIconOnly && label}
    </PlantiButton>
  );
}
