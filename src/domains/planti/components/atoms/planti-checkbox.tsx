import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

type PlantiCheckboxProps = {
  label: string;
  isChecked: boolean;
};

export function PlantiCheckbox({ label, isChecked }: PlantiCheckboxProps) {
  return (
    <div
      className={cn('planti-checkbox', isChecked && 'planti-checkbox--checked')}
    >
      <span className="planti-checkbox__box" aria-hidden="true">
        <Check />
      </span>
      <span className="planti-checkbox__label">{label}</span>
    </div>
  );
}
