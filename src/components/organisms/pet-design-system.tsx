import { PetModuleTitle } from '@/components/molecules/pet-module-title';
import { PetDsComponents } from '@/components/organisms/pet-ds-components';
import { PetDsFoundations } from '@/components/organisms/pet-ds-foundations';
import type { PetDesignSystem as PetDesignSystemContent } from '@/content/pet-design-system.types';

type PetDesignSystemProps = {
  system: PetDesignSystemContent;
};

// Sistema de diseño de la app, en dos bloques: fundamentos y componentes
export function PetDesignSystem({ system }: PetDesignSystemProps) {
  const blocks = [
    {
      title: system.groups.foundations,
      content: <PetDsFoundations foundations={system.foundations} />
    },
    {
      title: system.groups.components,
      content: <PetDsComponents components={system.components} />
    }
  ];

  return (
    <div className="pet-module pet-ds">
      <PetModuleTitle text={system.title} />
      <p className="pet-module__lead" data-pet-rise>
        {system.lead}
      </p>
      {blocks.map((block, index) => (
        <section
          key={block.title}
          className="pet-ds__block"
          aria-label={block.title}
        >
          <h4 className="pet-ds__block-title" data-pet-rise>
            <span className="pet-ds__block-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            {block.title}
          </h4>
          {block.content}
        </section>
      ))}
    </div>
  );
}
