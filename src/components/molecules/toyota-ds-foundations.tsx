'use client';

import type { CSSProperties } from 'react';

import type {
  ToyotaDesignItem,
  ToyotaDesignSample
} from '@/content/toyota-story.types';
import { useReplay, useTypeSample } from '@/hooks/use-design-specimen';
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
    case 'grid':
      return <GridSpecimen sample={sample.grid} />;
    case 'shape':
      return <ShapeSpecimen sample={sample.shape} />;
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
      {item.specs
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
        {item.specs.map((spec, index) => (
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

const COLUMN_COUNT = 12;

// Retícula, escala de espacio y esquinas rectas
function GridSpecimen({ sample }: { sample: ToyotaDesignSample['grid'] }) {
  return (
    <div className="ty-dsx-grid">
      <div className="ty-dsx-grid__frame">
        <span className="ty-dsx-grid__tag ty-dsx-grid__tag--margin">
          {sample.marginLabel}
        </span>
        <div className="ty-dsx-grid__columns" aria-hidden="true">
          {Array.from({ length: COLUMN_COUNT }, (_, index) => (
            <span key={index} className="ty-dsx-grid__column" />
          ))}
        </div>
        <span className="ty-dsx-grid__tag">{sample.columnLabel}</span>
        <span className="ty-dsx-grid__content">{sample.contentLabel}</span>
      </div>

      <div className="ty-dsx-grid__row">
        <div className="ty-dsx-grid__block">
          <p className="ty-dsx-label">{sample.spacingLabel}</p>
          <ul className="ty-dsx-grid__spacing">
            {sample.spacing.map(size => (
              <li key={size} className="ty-dsx-grid__step">
                <span
                  className={cn(
                    'ty-dsx-grid__bar',
                    `ty-dsx-grid__bar--${size}`
                  )}
                />
                <span className="ty-dsx-grid__size">{size}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="ty-dsx-grid__block">
          <p className="ty-dsx-label">{sample.cornersLabel}</p>
          <div className="ty-dsx-grid__corners">
            <span className="ty-dsx-grid__corner ty-dsx-grid__corner--square">
              {sample.squareLabel}
            </span>
            <span className="ty-dsx-grid__corner ty-dsx-grid__corner--rounded">
              {sample.roundedLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Las cuatro formas del sistema, grandes
function ShapeSpecimen({ sample }: { sample: ToyotaDesignSample['shape'] }) {
  return (
    <ul className="ty-dsx-shape">
      <li className="ty-dsx-shape__tile">
        <div className="ty-dsx-shape__art">
          <span className="ty-dsx-shape__square ty-dsx-shape__square--on" />
          <span className="ty-dsx-shape__square ty-dsx-shape__square--on" />
          <span className="ty-dsx-shape__square" />
          <span className="ty-dsx-shape__square" />
          <span className="ty-dsx-shape__square" />
        </div>
        <p className="ty-dsx-label">{sample.squareLabel}</p>
      </li>
      <li className="ty-dsx-shape__tile">
        <div className="ty-dsx-shape__art ty-dsx-shape__art--arrow">→</div>
        <p className="ty-dsx-label">{sample.arrowLabel}</p>
      </li>
      <li className="ty-dsx-shape__tile">
        <div className="ty-dsx-shape__art">
          <span className="ty-dsx-shape__tag">{sample.tag}</span>
        </div>
        <p className="ty-dsx-label">{sample.tagLabel}</p>
      </li>
      <li className="ty-dsx-shape__tile">
        <div className="ty-dsx-shape__art ty-dsx-shape__art--cross">+</div>
        <p className="ty-dsx-label">{sample.crossLabel}</p>
      </li>
    </ul>
  );
}

// La entrada escalonada, la curva y el botón que se rellena; se repite
function MotionSpecimen({ sample }: { sample: ToyotaDesignSample['motion'] }) {
  const { playKey, handleReplay } = useReplay();

  return (
    <div className="ty-dsx-motion">
      <div className="ty-dsx-motion__stage">
        <ul key={playKey} className="ty-dsx-motion__cards">
          {sample.cards.map((card, index) => (
            <li
              key={card}
              className="ty-dsx-motion__card"
              style={{ '--i': index } as CSSProperties}
            >
              <span className="ty-dsx-motion__number">
                {String(index + 1).padStart(2, '0')}
              </span>
              {card}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="ty-dsx-motion__replay"
          onClick={handleReplay}
        >
          {sample.replay}
        </button>
      </div>
      <div className="ty-dsx-motion__row">
        <div className="ty-dsx-motion__block">
          <p className="ty-dsx-label">{sample.curveLabel}</p>
          <svg
            className="ty-dsx-motion__curve"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <path
              d="M0 100 L100 100 M0 0 L0 100"
              className="ty-dsx-motion__axis"
            />
            <path d="M0 100 C16 0 30 0 100 0" className="ty-dsx-motion__path" />
          </svg>
        </div>
        <div className="ty-dsx-motion__block">
          <p className="ty-dsx-label">{sample.buttonLabel}</p>
          <span className="ty-dsx-button ty-dsx-button--primary">
            {sample.buttonText}
          </span>
        </div>
      </div>
    </div>
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
