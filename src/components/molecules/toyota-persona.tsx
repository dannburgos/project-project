import { ToyotaVisual } from '@/components/atoms/toyota-visual';
import { ToyotaChips } from '@/components/molecules/toyota-chips';
import type { ToyotaDiscovery } from '@/content/toyota-story.types';

type ToyotaPersonaProps = {
  user: ToyotaDiscovery['user'];
};

// La persona usuaria en un solo bloque. A un lado, su foto; al otro, quiénes
// son (segmentos con su necesidad), dónde se traban (puntos de dolor) y el
// trabajo que quieren lograr, con Cuando / quiero / para en rojo.
export function ToyotaPersona({ user }: ToyotaPersonaProps) {
  return (
    <div className="ty-user">
      <ToyotaVisual visual={user.visual} className="ty-user__visual" />
      <div className="ty-user__info">
        <section className="ty-user__block">
          <h4 className="ty-user__label">{user.segmentsLabel}</h4>
          <ul className="ty-user__segments" data-ty-group>
            {user.segments.map(segment => (
              <li key={segment.title} className="ty-user__segment" data-ty-item>
                <p className="ty-user__segment-title">{segment.title}</p>
                <p className="ty-user__segment-text">{segment.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <ToyotaChips items={user.pains} label={user.painsLabel} />

        <section className="ty-user__block">
          <h4 className="ty-user__label">{user.jobLabel}</h4>
          <p className="ty-user__job" data-ty-group>
            {user.job.map(part => (
              <span key={part.title} className="ty-user__job-part" data-ty-item>
                <b className="ty-user__job-key">{part.title}</b> {part.text}
              </span>
            ))}
          </p>
        </section>
      </div>
    </div>
  );
}
