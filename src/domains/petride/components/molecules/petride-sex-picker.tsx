import { Mars, Venus } from 'lucide-react';

import { cn } from '@/lib/utils';

import type { PetrideSex } from '../../types/petride.types';

const OPTIONS: readonly { value: PetrideSex; icon: typeof Venus }[] = [
  { value: 'Hembra', icon: Venus },
  { value: 'Macho', icon: Mars }
];

type PetrideSexPickerProps = {
  label: string;
  selected: PetrideSex;
};

// Hembra o macho, en un selector compacto que va junto al nombre
export function PetrideSexPicker({ label, selected }: PetrideSexPickerProps) {
  return (
    <div className="petride-field petride-sex">
      <span className="petride-field__label">{label}</span>
      <span
        className="petride-sex__options"
        role="radiogroup"
        aria-label={label}
      >
        {OPTIONS.map(({ value, icon: Icon }) => {
          const isOn = value === selected;
          return (
            <span
              key={value}
              role="radio"
              aria-checked={isOn}
              className={cn(
                'petride-sex__option',
                isOn && 'petride-sex__option--on'
              )}
            >
              <Icon aria-hidden="true" />
              {value}
            </span>
          );
        })}
      </span>
    </div>
  );
}
