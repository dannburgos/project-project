import { cn } from '@/lib/utils';

import { petrideMessages } from '../../messages';

type PetrideTextFieldProps = {
  label: string;
  value: string;
  suffix?: string;
  isOptional?: boolean;
  isMultiline?: boolean;
};

// Campo de texto del formulario, mostrado lleno para el tablero
export function PetrideTextField({
  label,
  value,
  suffix,
  isOptional = false,
  isMultiline = false
}: PetrideTextFieldProps) {
  return (
    <div className="petride-field">
      <span className="petride-field__label">
        {label}
        {isOptional && (
          <span className="petride-field__optional">
            {petrideMessages.common.optional}
          </span>
        )}
      </span>
      <span
        className={cn(
          'petride-field__box',
          isMultiline && 'petride-field__box--multiline'
        )}
      >
        <span className="petride-field__value">{value}</span>
        {suffix && <span className="petride-field__suffix">{suffix}</span>}
      </span>
    </div>
  );
}
