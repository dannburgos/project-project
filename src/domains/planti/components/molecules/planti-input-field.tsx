import type { LucideIcon } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

type PlantiInputFieldProps = {
  icon: LucideIcon;
  placeholder: string;
  value?: string;
  hasCaret?: boolean;
  hasChevron?: boolean;
  isTapped?: boolean;
};

export function PlantiInputField({
  icon: Icon,
  placeholder,
  value,
  hasCaret = false,
  hasChevron = false,
  isTapped = false
}: PlantiInputFieldProps) {
  const isEmpty = !value;

  return (
    <div
      className={cn(
        'planti-input',
        isEmpty && 'planti-input--empty',
        isTapped && 'planti-input--tapped'
      )}
    >
      <Icon aria-hidden="true" />
      <span className="planti-input__text">
        {isEmpty ? placeholder : value}
        {hasCaret && (
          <span className="planti-field__caret" aria-hidden="true" />
        )}
      </span>
      {hasChevron && <ChevronDown aria-hidden="true" />}
    </div>
  );
}
