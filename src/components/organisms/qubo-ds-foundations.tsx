import type { CSSProperties } from 'react';

import { QuboIcon } from '@/components/atoms/qubo-icon';
import type { QuboSystemFoundations } from '@/content/qubo-story.types';
import { cn } from '@/lib/utils';

type QuboDsFoundationsProps = {
  foundations: QuboSystemFoundations;
};

// Fundamentos del sistema: color, tipografía, forma, iconografía y motion
export function QuboDsFoundations({ foundations }: QuboDsFoundationsProps) {
  const { color, type, shape, icons, motion } = foundations;

  return (
    <div className="qb-ds">
      <section className="qb-ds__sheet qb-ds__sheet--full" data-qb-reveal>
        <h4 className="qb-ds__title">{color.title}</h4>
        {color.groups.map(group => (
          <div key={group.title} className="qb-ds-colors">
            <p className="qb-ds__subtitle">{group.title}</p>
            <ul className="qb-ds-colors__list">
              {group.swatches.map(swatch => (
                <li key={swatch.name} className="qb-ds-color">
                  <span
                    className="qb-ds-color__dot"
                    style={{ backgroundColor: swatch.hex }}
                    aria-hidden="true"
                  />
                  <span className="qb-ds-color__text">
                    <span className="qb-ds-color__name">
                      {swatch.name} · {swatch.hex}
                    </span>
                    <span className="qb-ds-color__use">{swatch.use}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="qb-ds__note">{color.note}</p>
      </section>

      <section className="qb-ds__sheet" data-qb-reveal>
        <h4 className="qb-ds__title">{type.title}</h4>
        <p className="qb-ds-type__family">{type.family}</p>
        <p className="qb-ds-type__weights">{type.weights}</p>
        <dl className="qb-ds-type__scale">
          {type.steps.map((step, index) => (
            <div key={step.name} className="qb-ds-type__row">
              <dt className="qb-ds-type__spec">
                {step.name} · {step.spec}
              </dt>
              <dd
                className={cn(
                  'qb-ds-type__sample',
                  index === 0 && 'qb-ds-type__sample--figure',
                  index === 1 && 'qb-ds-type__sample--title',
                  index === 2 && 'qb-ds-type__sample--subtitle'
                )}
              >
                {step.sample}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="qb-ds__sheet" data-qb-reveal>
        <h4 className="qb-ds__title">{shape.title}</h4>
        <p className="qb-ds__subtitle">{shape.spacingTitle}</p>
        <ul className="qb-ds-spacing">
          {shape.spacing.map(size => (
            <li key={size} className="qb-ds-spacing__item">
              <span
                className="qb-ds-spacing__bar"
                style={{ '--size': `${size}px` } as CSSProperties}
                aria-hidden="true"
              />
              {size}
            </li>
          ))}
        </ul>
        <p className="qb-ds__subtitle">{shape.radiusTitle}</p>
        <ul className="qb-ds-radii">
          {shape.radii.map((radius, index) => (
            <li key={radius.label} className="qb-ds-radii__item">
              <span
                className={cn(
                  'qb-ds-radii__shape',
                  index === 0 && 'qb-ds-radii__shape--chip',
                  index === 1 && 'qb-ds-radii__shape--field',
                  index === 2 && 'qb-ds-radii__shape--card',
                  index === 3 && 'qb-ds-radii__shape--pill'
                )}
                aria-hidden="true"
              />
              <span>{radius.label}</span>
              <span className="qb-ds__muted">{radius.value}</span>
            </li>
          ))}
        </ul>
        <p className="qb-ds__subtitle">{shape.shadowTitle}</p>
        <ul className="qb-ds-shadows">
          {shape.shadows.map((shadow, index) => (
            <li
              key={shadow.label}
              className={cn(
                'qb-ds-shadows__item',
                index === 1 && 'qb-ds-shadows__item--float'
              )}
            >
              <span>{shadow.label}</span>
              <span className="qb-ds__muted">{shadow.value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="qb-ds__sheet" data-qb-reveal>
        <h4 className="qb-ds__title">{icons.title}</h4>
        <ul className="qb-ds-icons">
          {icons.icons.map(icon => (
            <li key={icon.id} className="qb-ds-icons__item">
              <QuboIcon id={icon.id} className="qb-ds-icons__glyph" />
              {icon.name}
            </li>
          ))}
        </ul>
      </section>

      <section className="qb-ds__sheet" data-qb-reveal>
        <h4 className="qb-ds__title">{motion.title}</h4>
        <ul className="qb-ds-motion">
          {motion.rules.map(rule => (
            <li key={rule.id} className="qb-ds-motion__item">
              <span
                className={cn(
                  'qb-ds-motion__dot',
                  rule.id === 'press' && 'qb-ds-motion__dot--press',
                  rule.id === 'sheet' && 'qb-ds-motion__dot--sheet',
                  rule.id === 'pulse' && 'qb-ds-motion__dot--pulse'
                )}
                aria-hidden="true"
              />
              <span className="qb-ds-motion__text">
                <span>{rule.name}</span>
                <span className="qb-ds__muted">{rule.spec}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
