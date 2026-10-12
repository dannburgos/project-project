'use client';

import { useCountUp } from '@/hooks/use-count-up';

type HomeStatProps = {
  value: number;
  label: string;
  isActive: boolean;
  delay?: number;
};

// Dato suelto: un número grande que se cuenta al entrar en pantalla y su
// descripción.
export function HomeStat({ value, label, isActive, delay = 0 }: HomeStatProps) {
  const counted = useCountUp(value, isActive);

  return (
    <div
      className="home-stat"
      data-visible={isActive}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="home-stat__value" aria-label={String(value)}>
        <span aria-hidden="true">{counted}</span>
      </p>
      <p className="home-stat__label">{label}</p>
    </div>
  );
}
