import { CaseStoryImage } from '@/components/atoms/case-story-image';
import { CaseStoryOpener } from '@/components/atoms/case-story-opener';
import type { CaseStory } from '@/content/case-story.types';
import { cn } from '@/lib/utils';

type CaseStoryPrototypeProps = {
  prototype: CaseStory['prototype'];
  sectionName: string;
};

// 07 · Prototipo: primero las pantallas de la app suben como una lluvia al
// revés (las principales grandes y al frente); después llega el celular con
// el prototipo interactivo
export function CaseStoryPrototype({
  prototype,
  sectionName
}: CaseStoryPrototypeProps) {
  return (
    <>
      <div className="story-view story-rain" data-view="rain" data-section="6">
        <CaseStoryOpener number="07" name={sectionName} />
        <div className="story-rain__stack">
          {prototype.screens.map(screen => (
            <CaseStoryImage
              key={screen.label}
              label={screen.label}
              variant="paper"
              className={cn(
                'story-rain__card',
                screen.isMain && 'story-rain__card--main'
              )}
              data-rain-card
            />
          ))}
        </div>
      </div>

      <div
        className="story-view story-prototype"
        data-view="prototype"
        data-section="6"
      >
        <p className="story-label" data-part="label">
          {prototype.title}
        </p>
        <div className="story-prototype__phone" data-part="phone">
          <iframe
            src={prototype.src}
            title={prototype.title}
            loading="lazy"
            className="story-prototype__screen"
          />
        </div>
      </div>
    </>
  );
}
