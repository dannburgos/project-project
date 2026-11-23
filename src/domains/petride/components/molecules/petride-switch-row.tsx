import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type PetrideSwitchRowProps = {
  icon: LucideIcon;
  label: string;
  isOn: boolean;
};

// Pregunta de sí o no con ícono e interruptor, mostrada en un estado fijo
export function PetrideSwitchRow({
  icon: Icon,
  label,
  isOn
}: PetrideSwitchRowProps) {
  return (
    <div className="petride-switch-field">
      <span className="petride-switch-field__label">
        <Icon aria-hidden="true" />
        {label}
      </span>
      <span
        role="switch"
        aria-checked={isOn}
        aria-label={label}
        className={cn('petride-switch', isOn && 'petride-switch--on')}
      />
    </div>
  );
}
