'use client';

import type { CSSProperties } from 'react';

import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import type {
  ToyotaDesignItem,
  ToyotaDesignSample
} from '@/content/toyota-story.types';
import { useTypeSample } from '@/hooks/use-design-specimen';
import {
  formatContrastRatio,
  getContrastRatio
} from '@/lib/case-story/contrast.util';
import { cn } from '@/lib/utils';

type ToyotaDsFoundationProps = {
  item: ToyotaDesignItem;
  sample: ToyotaDesignSample;
  copiedValue: string | null;
  copyLabel: string;
  copiedLabel: string;
  onCopy: (value: string) => void;
};

// Muestras vivas de los fundamentos: cada uno se ve en grande, con los
// valores reales del prototipo
export function ToyotaDsFoundation({
  item,
  sample,
  copiedValue,
  copyLabel,
  copiedLabel,
  onCopy
}: ToyotaDsFoundationProps) {
  switch (item.id) {
    case 'color':
      return (
        <ColorSpecimen
          item={item}
          copiedValue={copiedValue}
          copyLabel={copyLabel}
          copiedLabel={copiedLabel}
          onCopy={onCopy}
        />
      );
    case 'type':
      return <TypeSpecimen item={item} sample={sample.type} />;
    case 'icons':
      return <IconsSpecimen sample={sample.icons} />;
    case 'motion':
      return <MotionSpecimen sample={sample.motion} />;
    case 'access':
      return <AccessSpecimen sample={sample.access} />;
    default:
      return null;
  }
}

type ColorSpecimenProps = Pick<
  ToyotaDsFoundationProps,
  'item' | 'copiedValue' | 'copyLabel' | 'copiedLabel' | 'onCopy'
>;

// Cuatro bloques grandes: el nombre, el hex (se copia al tocar) y su uso
function ColorSpecimen({
  item,
  copiedValue,
  copyLabel,
  copiedLabel,
  onCopy
}: ColorSpecimenProps) {
  return (
    <ul className="ty-dsx-color">
      {(item.specs ?? [])
        .filter(spec => spec.swatch)
        .map(spec => {
          const hex = spec.swatch ?? '';
          return (
            <li key={spec.label} className="ty-dsx-color__item">
              <button
                type="button"
                className={cn(
                  'ty-dsx-color__block',
                  `ty-dsx-color__block--${hex.replace('#', '')}`
                )}
                onClick={() => onCopy(hex)}
              >
                <span className="ty-dsx-color__name">{spec.label}</span>
                <span className="ty-dsx-color__hex">{hex.toUpperCase()}</span>
                <span className="ty-dsx-color__use">{spec.value}</span>
                <span className="ty-dsx-color__copy">
                  {copiedValue === hex ? copiedLabel : copyLabel}
                </span>
              </button>
            </li>
          );
        })}
    </ul>
  );
}

// La escala completa con el estilo real de cada rol; el texto se puede cambiar
function TypeSpecimen({
  item,
  sample
}: {
  item: ToyotaDesignItem;
  sample: ToyotaDesignSample['type'];
}) {
  const { text, value, handleChange } = useTypeSample(sample.text);

  return (
    <div className="ty-dsx-type">
      <label className="ty-dsx-type__field">
        <span className="ty-dsx-label">{sample.fieldLabel}</span>
        <input
          className="ty-dsx-type__input"
          type="text"
          value={value}
          placeholder={sample.placeholder}
          onChange={handleChange}
        />
      </label>
      <ul className="ty-dsx-type__list">
        {(item.specs ?? []).map((spec, index) => (
          <li key={spec.label} className="ty-dsx-type__row">
            <p className="ty-dsx-type__caption">
              <span className="ty-dsx-label">{spec.label}</span>
              <span className="ty-dsx-type__spec">{spec.value}</span>
            </p>
            <p
              className={cn(
                'ty-dsx-type__sample',
                `ty-dsx-type__sample--${index}`
              )}
            >
              {text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Los iconos del sistema, por grupos: cada uno con su nombre
function IconsSpecimen({ sample }: { sample: ToyotaDesignSample['icons'] }) {
  return (
    <div className="ty-dsx-icons">
      {sample.groups.map(group => (
        <div key={group.label} className="ty-dsx-icons__group">
          <p className="ty-dsx-label">{group.label}</p>
          <ul className="ty-dsx-icons__grid">
            {group.items.map(item => (
              <li key={item.id} className="ty-dsx-icons__tile">
                <span className="ty-dsx-icons__art">
                  <ToyotaIcon name={item.id} />
                </span>
                <span className="ty-dsx-icons__name">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Tres reglas de movimiento (como en el sistema de PetRide): cada una con su
// demo que se repite sola, su nombre y su duración
function MotionSpecimen({ sample }: { sample: ToyotaDesignSample['motion'] }) {
  return (
    <ul className="ty-dsx-motion">
      {sample.demos.map(demo => (
        <li key={demo.id} className="ty-dsx-motion__demo">
          <span
            className={cn(
              'ty-dsx-motion__stage',
              `ty-dsx-motion__stage--${demo.id}`
            )}
            aria-hidden="true"
          >
            <MotionShape id={demo.id} label={demo.label} />
          </span>
          <span className="ty-dsx-motion__name">{demo.name}</span>
          <span className="ty-dsx-motion__spec">{demo.spec}</span>
        </li>
      ))}
    </ul>
  );
}

const MOTION_PIECES = 4;
const MOTION_STEPS = 5;

// Las piezas que se mueven en cada demo; la animación la pone el CSS
function MotionShape({ id, label }: { id: string; label?: string }) {
  if (id === 'fill') {
    return (
      <span className="ty-dsx-button ty-dsx-button--primary ty-dsx-motion__button">
        {label}
      </span>
    );
  }
  if (id === 'enter') {
    return (
      <span className="ty-dsx-motion__pieces">
        {Array.from({ length: MOTION_PIECES }, (_, index) => (
          <span
            key={index}
            className="ty-dsx-motion__piece"
            style={{ '--i': index } as CSSProperties}
          />
        ))}
      </span>
    );
  }
  return (
    <span className="ty-dsx-motion__steps">
      <span className="ty-dsx-motion__line" />
      {Array.from({ length: MOTION_STEPS }, (_, index) => (
        <span
          key={index}
          className="ty-dsx-motion__mark"
          style={{ '--i': index } as CSSProperties}
        />
      ))}
    </span>
  );
}

// Contrastes calculados, foco visible y alto del botón
function AccessSpecimen({ sample }: { sample: ToyotaDesignSample['access'] }) {
  return (
    <div className="ty-dsx-access">
      <ul className="ty-dsx-access__pairs">
        {sample.pairs.map(pair => (
          <li
            key={pair.name}
            className="ty-dsx-access__pair"
            style={
              { '--pair-fg': pair.fg, '--pair-bg': pair.bg } as CSSProperties
            }
          >
            <span className="ty-dsx-access__ratio">
              {formatContrastRatio(getContrastRatio(pair.fg, pair.bg))}
            </span>
            <span className="ty-dsx-access__name">{pair.name}</span>
          </li>
        ))}
      </ul>
      <div className="ty-dsx-motion__row">
        <div className="ty-dsx-motion__block">
          <p className="ty-dsx-label">{sample.focusLabel}</p>
          <span className="ty-dsx-button ty-dsx-button--primary ty-dsx-button--focus">
            {sample.focusText}
          </span>
        </div>
        <div className="ty-dsx-motion__block">
          <p className="ty-dsx-label">{sample.touchLabel}</p>
          <span className="ty-dsx-access__touch">52 px</span>
        </div>
      </div>
    </div>
  );
}
