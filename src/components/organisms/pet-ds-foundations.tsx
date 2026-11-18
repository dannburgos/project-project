'use client';

import {
  Bell,
  Car,
  Cat,
  Check,
  Clock,
  Copy,
  Dog,
  MapPin,
  MessageCircle,
  PawPrint,
  Route,
  ShieldCheck,
  Star,
  User,
  type LucideIcon
} from 'lucide-react';

import { PetDsMotion } from '@/components/molecules/pet-ds-motion';
import { PetDsSheet } from '@/components/molecules/pet-ds-sheet';
import type {
  PetDesignSystem,
  PetDsIconId
} from '@/content/pet-design-system.types';
import { usePetDsCopy } from '@/hooks/use-pet-ds-copy';
import { useTypeSample } from '@/hooks/use-type-sample';
import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { cn } from '@/lib/utils';

const ICONS: Record<PetDsIconId, LucideIcon> = {
  paw: PawPrint,
  dog: Dog,
  cat: Cat,
  pin: MapPin,
  car: Car,
  route: Route,
  clock: Clock,
  chat: MessageCircle,
  star: Star,
  shield: ShieldCheck,
  bell: Bell,
  user: User
};

type PetDsFoundationsProps = {
  foundations: PetDesignSystem['foundations'];
};

// Color, tipografía, forma, iconografía y motion de la app
export function PetDsFoundations({ foundations }: PetDsFoundationsProps) {
  const { color, type, shape, icons, motion } = foundations;
  const { copiedId, handleCopy } = usePetDsCopy();
  const { field, sample, maxLength } = useTypeSample();

  return (
    <div className="pet-ds__grid">
      <PetDsSheet title={color.title} note={color.note} isWide>
        <div className="pet-ds__palette">
          {color.groups.map(group => (
            <div key={group.title} className="pet-ds__palette-group">
              <h5 className="pet-ds__subtitle">{group.title}</h5>
              <ul className="pet-ds__swatches">
                {group.swatches.map(swatch => {
                  const isCopied = copiedId === swatch.id;
                  return (
                    <li key={swatch.id}>
                      <button
                        type="button"
                        className={cn(
                          'pet-ds__swatch',
                          `pet-ds__swatch--${swatch.id}`,
                          isCopied && 'is-copied'
                        )}
                        onClick={() => handleCopy(swatch.id, swatch.hex)}
                        aria-label={fillTemplate(color.copyLabel, {
                          name: swatch.name
                        })}
                      >
                        <span
                          className="pet-ds__swatch-copy"
                          aria-hidden="true"
                        >
                          {isCopied ? <Check /> : <Copy />}
                        </span>
                        <span className="pet-ds__swatch-name">
                          {swatch.name}
                        </span>
                        <span className="pet-ds__swatch-hex">
                          {isCopied ? color.copiedLabel : swatch.hex}
                        </span>
                        <span className="pet-ds__swatch-use">{swatch.use}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </PetDsSheet>

      <PetDsSheet title={type.title} badge={type.family}>
        <label className="pet-ds__tester">
          <span className="pet-ds__subtitle">{type.tryLabel}</span>
          <input
            className="pet-ds__input"
            placeholder={type.tryPlaceholder}
            maxLength={maxLength}
            autoComplete="off"
            {...field}
          />
        </label>
        <ul className="pet-ds__type">
          {type.steps.map(step => (
            <li key={step.id} className="pet-ds__type-row">
              <span
                className={cn(
                  'pet-ds__type-sample',
                  `pet-ds__type-sample--${step.id}`
                )}
              >
                {sample.trim() || step.name}
              </span>
              <span className="pet-ds__spec">
                {sample.trim() && `${step.name} · `}
                {step.spec}
              </span>
            </li>
          ))}
        </ul>
      </PetDsSheet>

      <PetDsSheet title={shape.title}>
        <div className="pet-ds__shape">
          <h5 className="pet-ds__subtitle">{shape.spacingTitle}</h5>
          <ul className="pet-ds__spacing">
            {shape.spacing.map(value => (
              <li key={value} className="pet-ds__space">
                <span
                  className={cn(
                    'pet-ds__space-bar',
                    `pet-ds__space-bar--${value}`
                  )}
                />
                <span className="pet-ds__spec">{value}</span>
              </li>
            ))}
          </ul>
          <h5 className="pet-ds__subtitle">{shape.radiusTitle}</h5>
          <ul className="pet-ds__radii">
            {shape.radii.map((radius, index) => (
              <li key={radius.name} className="pet-ds__radius">
                <span
                  className={cn(
                    'pet-ds__radius-box',
                    `pet-ds__radius-box--${index}`
                  )}
                />
                <span className="pet-ds__radius-name">{radius.name}</span>
                <span className="pet-ds__spec">{radius.value}</span>
              </li>
            ))}
          </ul>
          <h5 className="pet-ds__subtitle">{shape.shadowTitle}</h5>
          <ul className="pet-ds__shadows">
            {shape.shadows.map((shadow, index) => (
              <li
                key={shadow.name}
                className={cn('pet-ds__shadow', `pet-ds__shadow--${index}`)}
              >
                <span className="pet-ds__radius-name">{shadow.name}</span>
                <span className="pet-ds__spec">{shadow.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </PetDsSheet>

      <PetDsSheet title={icons.title} note={icons.note} isWide>
        <ul className="pet-ds__icons">
          {icons.icons.map(icon => {
            const Icon = ICONS[icon.id];
            return (
              <li key={icon.id} className="pet-ds__icon">
                <span className="pet-ds__icon-box">
                  <Icon aria-hidden="true" />
                </span>
                <span className="pet-ds__icon-name">{icon.name}</span>
              </li>
            );
          })}
        </ul>
      </PetDsSheet>

      <PetDsMotion motion={motion} />
    </div>
  );
}
