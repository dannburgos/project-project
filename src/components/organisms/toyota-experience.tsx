import { ToyotaVisual } from '@/components/atoms/toyota-visual';
import { ToyotaChapter } from '@/components/molecules/toyota-chapter';
import { ToyotaChips } from '@/components/molecules/toyota-chips';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import { ToyotaOpener } from '@/components/molecules/toyota-opener';
import type { ToyotaExperience as ToyotaExperienceContent } from '@/content/toyota-story.types';

type ToyotaExperienceProps = {
  index: number;
  label: string;
  experience: ToyotaExperienceContent;
};

// 05 · Experience Design. El prototipo y las pantallas se construyen al final;
// mientras tanto, cada pantalla es una caja gris con su nombre, y el sistema
// visual muestra los colores de la marca.
export function ToyotaExperience({
  index,
  label,
  experience
}: ToyotaExperienceProps) {
  const { design } = experience;

  return (
    <ToyotaChapter index={index} world="light" label={label}>
      <ToyotaOpener opener={experience.opener} />

      <div className="ty-module">
        <ToyotaHead head={design.head} size="large" />
        <p className="ty-body ty-body--large ty-body--measure" data-ty-rise>
          {design.statement}
        </p>
        <ul className="ty-screens" data-ty-group>
          {design.screens.map(screen => (
            <li key={screen.label} className="ty-screens__item" data-ty-item>
              <ToyotaVisual visual={screen} className="ty-screens__visual" />
            </li>
          ))}
        </ul>
        <h4 className="ty-subtitle">{design.systemLabel}</h4>
        <ul className="ty-swatches" data-ty-group aria-hidden="true">
          <li
            className="ty-swatches__item ty-swatches__item--red"
            data-ty-item
          />
          <li
            className="ty-swatches__item ty-swatches__item--black"
            data-ty-item
          />
          <li
            className="ty-swatches__item ty-swatches__item--white"
            data-ty-item
          />
          <li
            className="ty-swatches__item ty-swatches__item--gray"
            data-ty-item
          />
        </ul>
        <ToyotaChips items={design.decisions} />
      </div>
    </ToyotaChapter>
  );
}
