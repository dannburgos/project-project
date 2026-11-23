import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export type SonopizzaSegmentOption = {
  id: string;
  label: string;
  // Una nota debajo del nombre (por ejemplo, cuánto demora)
  note?: string;
  icon?: LucideIcon;
};

type SonopizzaSegmentProps = {
  label: string;
  options: readonly SonopizzaSegmentOption[];
  selectedId: string;
};

// Selector segmentado: las opciones lado a lado dentro de una píldora gris y la
// elegida en azul. Para decidir entre pocas opciones de un vistazo
export function SonopizzaSegment({
  label,
  options,
  selectedId
}: SonopizzaSegmentProps) {
  return (
    <div className="sp-segment" role="radiogroup" aria-label={label}>
      {options.map(({ id, label: name, note, icon: Icon }) => {
        const isOn = id === selectedId;

        return (
          <span
            key={id}
            role="radio"
            aria-checked={isOn}
            className={cn(
              'sp-segment__option',
              isOn && 'sp-segment__option--on'
            )}
          >
            {Icon && <Icon aria-hidden="true" />}
            <span className="sp-segment__text">
              <span className="sp-segment__label">{name}</span>
              {note && <span className="sp-segment__note">{note}</span>}
            </span>
          </span>
        );
      })}
    </div>
  );
}
