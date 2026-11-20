import { cn } from '@/lib/utils';

import type {
  SonopizzaPhoto,
  SonopizzaTurn
} from '../../types/sonopizza.types';

const PHOTO_SRC: Record<SonopizzaPhoto, string> = {
  pepperoni: '/sonopizza/app/pizza-pepperoni.webp',
  veggie: '/sonopizza/app/pizza-veggie.webp'
};

const TURN_CLASS: Record<SonopizzaTurn, string> = {
  0: 'sp-pizza--turn-0',
  1: 'sp-pizza--turn-1',
  2: 'sp-pizza--turn-2',
  3: 'sp-pizza--turn-3'
};

type SonopizzaPizzaPhotoProps = {
  photo: SonopizzaPhoto;
  turn?: SonopizzaTurn;
  // Gira despacio, como en una vitrina (inicio y detalle)
  isSpinning?: boolean;
  className?: string;
};

// Foto de una pizza vista desde arriba, sin fondo. Es decorativa: el nombre
// del producto siempre la acompaña
export function SonopizzaPizzaPhoto({
  photo,
  turn = 0,
  isSpinning = false,
  className
}: SonopizzaPizzaPhotoProps) {
  return (
    <img
      src={PHOTO_SRC[photo]}
      alt=""
      className={cn(
        'sp-pizza',
        TURN_CLASS[turn],
        isSpinning && 'sp-pizza--spin',
        className
      )}
      draggable={false}
    />
  );
}
