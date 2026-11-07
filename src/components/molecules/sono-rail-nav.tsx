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
import { useCaseStoryCounter } from '@/hooks/use-case-story-counter';
import { cn } from '@/lib/utils';

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
// Cada sección es su ícono; la actual se abre en una píldora con su nombre
// girado. Al tocar una, el escenario salta a ella.
export function SonoRailNav({ sections }: SonoRailNavProps) {
  const { ref, section, handleJump } = useCaseStoryCounter();

  return (
    <nav
      ref={ref}
      className="sono-rail"
      aria-label={siteContent.caseStudy.labels.storyNavigation}
    >
      <ol className="sono-rail__list">
        {sections.map((name, index) => {
          const Icon = SECTION_ICONS[index] ?? Pizza;
          const isCurrent = index === section;
          return (
            <li key={name}>
              <button
                type="button"
                className={cn(
                  'sono-rail__item',
                  isCurrent && 'sono-rail__item--current'
                )}
                aria-current={isCurrent ? 'step' : undefined}
                aria-label={name}
                title={isCurrent ? undefined : name}
                onClick={() => handleJump(index)}
              >
                <Icon className="sono-rail__icon" aria-hidden="true" />
                {isCurrent && (
                  <span className="sono-rail__name" aria-hidden="true">
                    {name}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
