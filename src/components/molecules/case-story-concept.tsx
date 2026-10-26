import { CaseStoryImage } from '@/components/atoms/case-story-image';
import { CaseStoryOpener } from '@/components/atoms/case-story-opener';
import type { CaseStory } from '@/content/case-story.types';

type CaseStoryConceptProps = {
  concept: CaseStory['concept'];
  sectionName: string;
};

// 05 · Concepto en el mundo verde: la idea en una placa troquelada (las letras
// dejan ver la imagen de atrás) junto al logo; luego, lo que hace Planti y su
// navegación, todo centrado
export function CaseStoryConcept({
  concept,
  sectionName
}: CaseStoryConceptProps) {
  return (
    <>
      <div
        className="story-view story-concept"
        data-view="concept"
        data-section="4"
      >
        <CaseStoryOpener number="05" name={sectionName} />
        <CaseStoryImage
          label={concept.logoLabel}
          className="story-concept__logo"
          data-part="logo"
        />
        <div className="story-concept__idea" data-part="idea">
          <h2
            className="story-title-xl story-plate"
            data-part="plate"
            data-ax-lines
          >
            {concept.idea}
          </h2>
          <p className="story-body story-concept__subtitle" data-ax>
            {concept.subtitle}
          </p>
        </div>
      </div>

      <div
        className="story-view story-capabilities"
        data-view="capabilities"
        data-section="4"
      >
        <p className="story-label story-capabilities__title" data-part="head">
          {concept.capabilitiesTitle}
        </p>
        <div className="story-columns">
          {concept.pillars.map(pillar => (
            <div
              key={pillar.number}
              className="story-column story-capabilities__pillar"
              data-part="column"
            >
              <p className="story-number">{pillar.number}</p>
              <div>
                <p className="story-label">{pillar.label}</p>
                <p className="story-title-md story-capabilities__question">
                  {pillar.question}
                </p>
                <ul className="story-list story-list--improvements story-list--centered">
                  {pillar.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="story-capabilities__navigation" data-part="navigation">
          <p className="story-label">{concept.navigationTitle}</p>
          <div className="story-capabilities__tabs">
            {concept.navigation.map(item => (
              <div key={item.name}>
                <p className="story-title-md">{item.name}</p>
                <p className="story-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
