import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/price.util';

import type { SonopizzaExtra } from '../../types/sonopizza.types';

type SonopizzaAdditionRowProps = {
  extra: SonopizzaExtra;
  isOn: boolean;
};

// Adición con casilla: el nombre y lo que suma al total
export function SonopizzaAdditionRow({
  extra,
  isOn
}: SonopizzaAdditionRowProps) {
  return (
    <li
      role="checkbox"
      aria-checked={isOn}
      className={cn('sp-addition', isOn && 'sp-addition--on')}
    >
      <span className="sp-addition__box" aria-hidden="true">
        {isOn && <Check />}
      </span>
      <span className="sp-addition__name">{extra.name}</span>
      <span className="sp-addition__price">+{formatPrice(extra.price)}</span>
    </li>
  );
}
