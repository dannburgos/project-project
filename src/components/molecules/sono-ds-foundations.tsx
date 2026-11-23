import {
  Check,
  Clock,
  Flame,
  House,
  type LucideIcon,
  MapPin,
  Minus,
  Pencil,
  Pizza,
  Plus,
  Search,
  ShoppingBag,
  Trash2
} from 'lucide-react';

import { SonoDsSheet } from '@/components/molecules/sono-ds-sheet';
import type {
  SonoDesignSystem,
  SonoDsIconId,
  SonoDsMotionId,
  SonoDsRadiusId,
  SonoDsShadowId,
  SonoDsTypeId
} from '@/content/sonopizza-design-system.types';
import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { cn } from '@/lib/utils';
import { isLightColor } from '@/utils/color.util';

const TYPE_CLASS: Record<SonoDsTypeId, string> = {
  display: 'sono-ds-type__sample--display',
  title: 'sono-ds-type__sample--title',
  subtitle: 'sono-ds-type__sample--subtitle',
  body: 'sono-ds-type__sample--body',
  price: 'sono-ds-type__sample--price',
  label: 'sono-ds-type__sample--label'
};

const RADIUS_CLASS: Record<SonoDsRadiusId, string> = {
  small: 'sono-ds-token__shape--radius-s',
  medium: 'sono-ds-token__shape--radius-m',
  large: 'sono-ds-token__shape--radius-l',
  pill: 'sono-ds-token__shape--radius-pill'
};

const SHADOW_CLASS: Record<SonoDsShadowId, string> = {
  button: 'sono-ds-token__shape--shadow-button',
  card: 'sono-ds-token__shape--shadow-card',
  highlight: 'sono-ds-token__shape--shadow-highlight',
  sheet: 'sono-ds-token__shape--shadow-sheet'
};

const MOTION_CLASS: Record<SonoDsMotionId, string> = {
  enter: 'sono-ds-motion__row--enter',
  pop: 'sono-ds-motion__row--pop',
  press: 'sono-ds-motion__row--press',
  slide: 'sono-ds-motion__row--slide'
};

const ICONS: Record<SonoDsIconId, LucideIcon> = {
  home: House,
  pizza: Pizza,
  search: Search,
  bag: ShoppingBag,
  plus: Plus,
  minus: Minus,
  check: Check,
  edit: Pencil,
  trash: Trash2,
  flame: Flame,
  clock: Clock,
  pin: MapPin
};

type SonoDsFoundationsProps = {
  foundations: SonoDesignSystem['foundations'];
};

// Fundamentos del sistema de diseño de Sonopizza: color, tipografía,
// espaciado, bordes, sombras, movimiento e iconografía, cada uno en su hoja
export function SonoDsFoundations({ foundations }: SonoDsFoundationsProps) {
  const { color, type, spacing, radius, shadows, motion, icons } = foundations;

  return (
    <div className="sono-ds__grid">
      <SonoDsSheet title={color.title} note={color.note} span="full">
        <ul className="sono-ds-swatches">
          {color.swatches.map(swatch => (
            <li
              key={swatch.hex}
              className={cn(
                'sono-ds-swatch',
                isLightColor(swatch.hex) && 'sono-ds-swatch--light'
              )}
            >
              <svg
                className="sono-ds-swatch__color"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <rect width="10" height="10" fill={swatch.hex} />
              </svg>
              <span className="sono-ds-swatch__name">{swatch.name}</span>
              <span className="sono-ds-swatch__hex">{swatch.hex}</span>
              <span className="sono-ds-swatch__role">{swatch.role}</span>
            </li>
          ))}
        </ul>
      </SonoDsSheet>

      <SonoDsSheet title={type.title} span="wide">
        <ul className="sono-ds-families">
          {type.families.map(family => (
            <li key={family.name} className="sono-ds-families__item">
              <span className="sono-ds-families__name">{family.name}</span>
              <span className="sono-ds-families__use">
                {family.value} · {family.use}
              </span>
            </li>
          ))}
        </ul>
        <ul className="sono-ds-type">
          {type.steps.map(step => (
            <li key={step.id} className="sono-ds-type__row">
              <span className={cn('sono-ds-type__sample', TYPE_CLASS[step.id])}>
                {step.sample}
              </span>
              <span className="sono-ds-type__spec">
                <b>{step.name}</b>
                {step.spec}
              </span>
            </li>
          ))}
        </ul>
      </SonoDsSheet>

      <SonoDsSheet title={spacing.title} note={spacing.note}>
        <ul className="sono-ds-spacing">
          {spacing.values.map(value => (
            <li key={value} className="sono-ds-spacing__row">
              <span className="sono-ds-spacing__value">
                {fillTemplate(spacing.valueTemplate, { value })}
              </span>
              <svg
                className="sono-ds-spacing__bar"
                viewBox="0 0 192 12"
                preserveAspectRatio="xMinYMid meet"
                aria-hidden="true"
              >
                <rect width={value * 4} height="12" rx="3" />
              </svg>
            </li>
          ))}
        </ul>
        <div className="sono-ds-touch">
          <span className="sono-ds-touch__area" aria-hidden="true">
            <span className="sono-ds-icon-button">
              <Plus />
            </span>
          </span>
          <span className="sono-ds-token__name">{spacing.touchLabel}</span>
        </div>
      </SonoDsSheet>

      <SonoDsSheet title={radius.title}>
        <ul className="sono-ds-tokens">
          {radius.tokens.map(token => (
            <li key={token.id} className="sono-ds-token">
              <span
                className={cn(
                  'sono-ds-token__shape sono-ds-token__shape--radius',
                  RADIUS_CLASS[token.id]
                )}
              />
              <span className="sono-ds-token__name">
                {token.name} ·{' '}
                <span className="sono-ds-token__value">{token.value}</span>
              </span>
              <span className="sono-ds-token__use">{token.use}</span>
            </li>
          ))}
        </ul>
      </SonoDsSheet>

      <SonoDsSheet title={shadows.title} note={shadows.note}>
        <ul className="sono-ds-tokens">
          {shadows.tokens.map(token => (
            <li key={token.id} className="sono-ds-token">
              <span
                className={cn(
                  'sono-ds-token__shape sono-ds-token__shape--shadow',
                  SHADOW_CLASS[token.id]
                )}
              />
              <span className="sono-ds-token__name">
                {token.name} ·{' '}
                <span className="sono-ds-token__value">{token.value}</span>
              </span>
              <span className="sono-ds-token__use">{token.use}</span>
            </li>
          ))}
        </ul>
      </SonoDsSheet>

      <SonoDsSheet title={motion.title} note={motion.note}>
        <ul className="sono-ds-motion">
          {motion.tokens.map(token => (
            <li key={token.id}>
              <button
                type="button"
                className={cn('sono-ds-motion__row', MOTION_CLASS[token.id])}
              >
                <span className="sono-ds-motion__stage" aria-hidden="true">
                  <span className="sono-ds-motion__actor" />
                </span>
                <span className="sono-ds-motion__text">
                  <span className="sono-ds-token__name">
                    {token.name} ·{' '}
                    <span className="sono-ds-token__value">{token.value}</span>
                  </span>
                  <span className="sono-ds-token__use">{token.use}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </SonoDsSheet>

      <SonoDsSheet title={icons.title} note={icons.note} span="full">
        <ul className="sono-ds-icons">
          {icons.items.map(icon => {
            const Icon = ICONS[icon.id];
            return (
              <li key={icon.id} className="sono-ds-icons__item">
                <span className="sono-ds-icon-badge">
                  <Icon aria-hidden="true" />
                </span>
                {icon.name}
              </li>
            );
          })}
        </ul>
      </SonoDsSheet>
    </div>
  );
}
