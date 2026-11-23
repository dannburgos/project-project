import type { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

import { PlantiInputField } from './planti-input-field';

type PlantiSelectOption = {
  key: string;
  label: string;
};

type PlantiSelectFieldProps = {
  icon: LucideIcon;
  placeholder: string;
  options: readonly PlantiSelectOption[];
  // La opción elegida (ninguna, hasta que se elige)
  selectedKey?: string;
  // La lista está abierta debajo del campo
  isOpen?: boolean;
  onToggle?: () => void;
  onSelect?: (key: string) => void;
};

// Campo desplegable: al tocarlo se abre una lista con las opciones y la elegida
// se marca con un check antes de cerrarse
export function PlantiSelectField({
  icon,
  placeholder,
  options,
  selectedKey,
  isOpen = false,
  onToggle,
  onSelect
}: PlantiSelectFieldProps) {
  const selected = options.find(option => option.key === selectedKey);

  return (
    <div className={cn('planti-select', isOpen && 'planti-select--open')}>
      <PlantiInputField
        icon={icon}
        placeholder={placeholder}
        value={selected?.label}
        hasChevron
        isTapped={isOpen}
        onClick={onToggle}
      />
      {isOpen && (
        <ul className="planti-select__menu" role="listbox">
          {options.map(option => {
            const isPicked = option.key === selectedKey;

            return (
              <li
                key={option.key}
                role="option"
                aria-selected={isPicked}
                onClick={onSelect ? () => onSelect(option.key) : undefined}
                className={cn(
                  'planti-select__option',
                  isPicked && 'planti-select__option--picked'
                )}
              >
                {option.label}
                {isPicked && <Check aria-hidden="true" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
