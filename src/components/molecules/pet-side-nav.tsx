'use client';

import { PetFlower } from '@/components/atoms/pet-flower';
import { usePetSideNav } from '@/hooks/use-pet-side-nav';
import { cn } from '@/lib/utils';

type PetSideNavProps = {
  sections: readonly string[];
  label: string;
  openLabel: string;
};

// Submenú del caso de PetRide: la flor de la marca a la izquierda. Cerrada,
// sus semillas marcan los capítulos (la actual en lima), gira según el
// capítulo y un anillo se llena con el avance. Con el cursor, el foco o un
// toque, los capítulos brotan en abanico y al elegir uno se salta a él.
export function PetSideNav({ sections, label, openLabel }: PetSideNavProps) {
  const { ref, section, isOpen, handleToggle, handleJump, handleKeyDown } =
    usePetSideNav();

  return (
    <nav
      ref={ref}
      className="pet-nav"
      aria-label={label}
      data-open={isOpen || undefined}
      data-section={section}
      onKeyDown={handleKeyDown}
    >
      <span className="pet-nav__pad" aria-hidden="true" />
      <button
        type="button"
        className="pet-nav__flower"
        aria-label={`${openLabel}: ${sections[section] ?? ''}`}
        aria-expanded={isOpen}
        aria-controls="pet-nav-list"
        onClick={handleToggle}
      >
        <svg className="pet-nav__ring" viewBox="0 0 64 64" aria-hidden="true">
          <circle className="pet-nav__ring-track" cx="32" cy="32" r="30" />
          <circle
            className="pet-nav__ring-fill"
            cx="32"
            cy="32"
            r="30"
            pathLength={1}
          />
        </svg>
        <PetFlower className="pet-nav__bloom" />
      </button>
      <ol id="pet-nav-list" className="pet-nav__list">
        {sections.map((name, index) => {
          const isCurrent = index === section;
          return (
            <li key={name} className="pet-nav__petal">
              <button
                type="button"
                className={cn(
                  'pet-nav__item',
                  isCurrent && 'pet-nav__item--current'
                )}
                aria-current={isCurrent ? 'step' : undefined}
                data-pet-nav-item
                onClick={() => handleJump(index)}
              >
                <span className="pet-nav__name" data-pet-section-name>
                  {name}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
