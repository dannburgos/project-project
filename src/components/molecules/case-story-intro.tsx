import { CaseStoryImage } from '@/components/atoms/case-story-image';
import { CaseStoryOpener } from '@/components/atoms/case-story-opener';
import type { CaseStory } from '@/content/case-story.types';

type CaseStoryIntroProps = {
  intro: CaseStory['intro'];
  sectionName: string;
};

// 01 · Introducción con eje central: la imagen crece desde el eje hacia la
// izquierda y el nombre, el titular y la ficha se destapan hacia la derecha
export function CaseStoryIntro({ intro, sectionName }: CaseStoryIntroProps) {
  return (
    <div className="story-view story-intro" data-view="intro" data-section="0">
      <CaseStoryOpener number="01" name={sectionName} />
      <CaseStoryImage
        label={intro.imageLabel}
        className="story-axis-image"
        data-axis-image
      />
      <div className="story-axis-text story-axis-text--right" data-axis-text>
        <h1 className="story-brand story-stripes" data-ax>
          {intro.name}
        </h1>
        <p className="story-title-md" data-ax>
          {intro.tagline}
        </p>
        <p className="story-title-lg story-intro__headline" data-ax-lines>
          {intro.headline}
        </p>
        <p className="story-body" data-ax>
          {intro.text}
        </p>
        <dl className="story-intro__facts" data-ax>
          {intro.facts.map(fact => (
            <div key={fact.label}>
              <dt className="story-label">{fact.label}</dt>
              <dd className="story-intro__fact">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
