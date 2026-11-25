'use client';

import type { ToyotaDesignSystem as ToyotaDesignSystemContent } from '@/content/toyota-story.types';
import { ToyotaDsEssential } from '@/components/molecules/toyota-ds-essentials';
import { ToyotaDsFoundation } from '@/components/molecules/toyota-ds-foundations';
import { useDesignInspector } from '@/hooks/use-design-inspector';
import { cn } from '@/lib/utils';

type ToyotaDesignSystemProps = {
  system: ToyotaDesignSystemContent;
};

// Sistema de diseño interactivo (referencias: los sistemas de Sonopizza y
// PetRide, hojas con muestras vivas): a la izquierda, el menú de fundamentos y
// esenciales; a la derecha, la hoja del elemento elegido, con su muestra en
// grande.
export function ToyotaDesignSystem({ system }: ToyotaDesignSystemProps) {
  const { active, copiedValue, handleSelect, handleCopy } = useDesignInspector(
    system.items
  );

  const groups = [
    { label: system.foundationsLabel, group: 'foundation' as const },
    { label: system.essentialsLabel, group: 'essential' as const }
  ];

  return (
    <div className="ty-ds">
      <nav className="ty-ds__index" aria-label={system.indexLabel}>
        {groups.map(({ label, group }) => (
          <div key={group} className="ty-ds__group">
            <h4 className="ty-ds__group-label">{label}</h4>
            <ul className="ty-ds__list">
              {system.items
                .filter(item => item.group === group)
                .map(item => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={cn(
                        'ty-ds__item',
                        item.id === active.id && 'ty-ds__item--on'
                      )}
                      aria-pressed={item.id === active.id}
                      onClick={() => handleSelect(item.id)}
                    >
                      <span className="ty-ds__number">{item.number}</span>
                      {item.name}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </nav>

      <section className="ty-ds__sheet" aria-live="polite">
        <header className="ty-ds__sheet-head">
          <p className="ty-ds__spec-number">
            {active.group === 'foundation'
              ? system.foundationsLabel
              : system.essentialsLabel}{' '}
            · {active.number}
          </p>
          <h4 className="ty-ds__sheet-name">{active.name}</h4>
        </header>

        <div className="ty-ds__specimen">
          {active.group === 'foundation' ? (
            <ToyotaDsFoundation
              item={active}
              sample={system.sample}
              copiedValue={copiedValue}
              copyLabel={system.labels.copy}
              copiedLabel={system.labels.copied}
              onCopy={handleCopy}
            />
          ) : (
            <ToyotaDsEssential item={active} sample={system.sample} />
          )}
        </div>
      </section>
    </div>
  );
}
