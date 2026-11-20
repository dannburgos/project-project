'use client';

import {
  Palette,
  Pizza,
  Route,
  Search,
  Smartphone,
  Target,
  type LucideIcon
} from 'lucide-react';

import { siteContent } from '@/content/site';
import { useSonoRailNav } from '@/hooks/use-sono-rail-nav';
import { cn } from '@/lib/utils';
import { formatSectionNumber } from '@/utils/section-number.util';

type SonoRailNavProps = {
  sections: readonly string[];
};

// Un ícono por sección, en el orden del caso: portada, el reto, lo que
// encontramos, la experiencia propuesta, la exploración visual y el
// producto en acción
const SECTION_ICONS: readonly LucideIcon[] = [
  Pizza,
  Target,
  Search,
  Route,
  Palette,
  Smartphone
];

// Submenú del caso de Sonopizza dentro de la barra naranja (en computador).
// Cada sección es su ícono; al pasar el cursor saca un sticker con su número
// y su nombre. La actual se marca con una píldora blanca (con su nombre
// girado) que viaja por la barra. Al tocar un ícono, rebota y el escenario
// salta a esa sección.
export function SonoRailNav({ sections }: SonoRailNavProps) {
  const { ref, pillRef, current, handleSelect } = useSonoRailNav();
  const { labels } = siteContent.caseStudy;

  return (
    <nav ref={ref} className="sono-rail" aria-label={labels.storyNavigation}>
      <span ref={pillRef} className="sono-rail__pill" aria-hidden="true" />
      <ol className="sono-rail__list">
        {sections.map((name, index) => {
          const Icon = SECTION_ICONS[index] ?? Pizza;
          const isCurrent = index === current;
          return (
            <li key={name} className="sono-rail__entry">
              <span
                className="sono-rail__ripple"
                aria-hidden="true"
                data-rail-ripple
              />
              <button
                type="button"
                className={cn(
                  'sono-rail__item',
                  isCurrent && 'sono-rail__item--current'
                )}
                aria-current={isCurrent ? 'step' : undefined}
                aria-label={name}
                onClick={() => handleSelect(index)}
                data-rail-item
              >
                <Icon className="sono-rail__icon" aria-hidden="true" />
                {isCurrent && (
                  <span
                    className="sono-rail__name"
                    aria-hidden="true"
                    data-rail-name
                  >
                    {name}
                  </span>
                )}
              </button>
              <span className="sono-rail__tip" aria-hidden="true">
                <b>{formatSectionNumber(index)}</b>
                {isCurrent ? labels.currentSection : name}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
