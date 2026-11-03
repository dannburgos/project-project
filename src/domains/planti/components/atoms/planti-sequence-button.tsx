import { Pause, Play, RotateCcw } from 'lucide-react';

import { PlantiButton } from './planti-button';

type PlantiSequenceButtonProps = {
  kind: 'start' | 'pause' | 'resume' | 'replay';
  label: string;
  onClick: () => void;
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
  onClick
}: PlantiSequenceButtonProps) {
  const Icon = ICONS[kind];

  return (
    <PlantiButton className="planti-sequence-button" onClick={onClick}>
      <Icon aria-hidden="true" />
      {label}
    </PlantiButton>
  );
}
