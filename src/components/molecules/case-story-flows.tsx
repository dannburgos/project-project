import { CaseStoryImage } from '@/components/atoms/case-story-image';
import { CaseStoryOpener } from '@/components/atoms/case-story-opener';
import type { CaseStory } from '@/content/case-story.types';

type CaseStoryFlowsProps = {
  flows: CaseStory['flows'];
  sectionName: string;
};

// 06 · Flujos con eje central: las pantallas a la izquierda y los tres
// momentos a la derecha
export function CaseStoryFlows({ flows, sectionName }: CaseStoryFlowsProps) {
  return (
    <div className="story-view story-flows" data-view="flows" data-section="5">
      <CaseStoryOpener number="06" name={sectionName} />
      <CaseStoryImage
        label={flows.imageLabel}
        variant="paper"
        className="story-axis-image"
        data-axis-image
      />
      <div className="story-axis-text story-axis-text--right" data-axis-text>
        <h2 className="story-title-lg" data-ax-lines>
          {flows.title}
        </h2>
        <div className="story-flows__list">
          {flows.items.map(item => (
            <div
              key={item.number}
              className="story-row story-flows__row"
              data-part="row"
              data-ax
            >
              <p className="story-label">{item.number}</p>
              <div>
                <p className="story-row__title">{item.title}</p>
                <p className="story-body">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
