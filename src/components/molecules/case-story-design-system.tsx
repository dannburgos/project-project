import { CaseStoryOpener } from '@/components/atoms/case-story-opener';
import type { CaseStory } from '@/content/case-story.types';

type CaseStoryDesignSystemProps = {
  designSystem: CaseStory['designSystem'];
  sectionName: string;
};

// 06 · Sistema de diseño en el mundo verde, justo antes de las pantallas. Por
// ahora solo lleva el título; el contenido llega después
export function CaseStoryDesignSystem({
  designSystem,
  sectionName
}: CaseStoryDesignSystemProps) {
  return (
    <div
      className="story-view story-design-system"
      data-view="design-system"
      data-section="5"
    >
      <CaseStoryOpener number="06" name={sectionName} />
      <h2 className="story-title-xl" data-part="title">
        {designSystem.title}
      </h2>
    </div>
  );
}
