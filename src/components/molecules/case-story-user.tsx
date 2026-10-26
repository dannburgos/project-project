import { CaseStoryImage } from '@/components/atoms/case-story-image';
import { CaseStoryOpener } from '@/components/atoms/case-story-opener';
import type { CaseStory } from '@/content/case-story.types';

type CaseStoryUserProps = {
  user: CaseStory['user'];
  sectionName: string;
};

const ORBIT_PLANTS = ['north', 'east', 'south', 'west'] as const;

// 03 · Usuario con el eje invertido: la información a la izquierda (la frase
// de Laura, quién es y sus rasgos) y la imagen a la derecha. Con el siguiente
// gesto, los hallazgos reemplazan a los rasgos.
export function CaseStoryUser({ user, sectionName }: CaseStoryUserProps) {
  return (
    <div className="story-view story-user" data-view="user" data-section="2">
      <CaseStoryOpener number="03" name={sectionName} />
      <div className="story-axis-text story-axis-text--left" data-axis-text>
        <p className="story-user__quote" data-ax-lines>
          {user.quote}
        </p>
        <div className="story-user__who" data-ax>
          <div className="story-orbit" aria-hidden="true">
            <span className="story-orbit__avatar" />
            {ORBIT_PLANTS.map(position => (
              <span
                key={position}
                className="story-orbit__track"
                data-position={position}
              >
                <i className="story-orbit__plant" />
              </span>
            ))}
          </div>
          <div>
            <p className="story-title-md">{user.name}</p>
            <p className="story-body">{user.details}</p>
          </div>
        </div>
        <div className="story-user__swap">
          <div className="story-user__list" data-part="traits">
            {user.traits.map(trait => (
              <div key={trait.label} className="story-row" data-ax>
                <p className="story-label">{trait.label}</p>
                <p className="story-row__title">{trait.text}</p>
              </div>
            ))}
          </div>
          <div className="story-user__list" data-part="findings">
            <p className="story-label story-user__findings-label" data-fade>
              {user.findingsLabel}
            </p>
            {user.findings.map(finding => (
              <div key={finding.number} className="story-row" data-fade>
                <p className="story-label">{finding.number}</p>
                <div>
                  <p className="story-row__title">{finding.title}</p>
                  <p className="story-body">{finding.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CaseStoryImage
        label={user.imageLabel}
        className="story-axis-image story-axis-image--right"
        data-axis-image
      />
    </div>
  );
}
