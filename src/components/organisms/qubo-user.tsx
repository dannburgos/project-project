import { QuboVisual } from '@/components/atoms/qubo-visual';
import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboHead } from '@/components/molecules/qubo-head';
import type { QuboUser as QuboUserContent } from '@/content/qubo-story.types';

type QuboUserProps = {
  id: string;
  user: QuboUserContent;
};

// 04 · Usuario. La proto-persona en una tarjeta morada: a un lado la foto y
// al otro su nombre, su frase y lo que dice de sí misma en primera persona.
export function QuboUser({ id, user }: QuboUserProps) {
  const titleId = `${id}-title`;
  const { persona } = user;

  return (
    <QuboChapter id={id} titleId={titleId} tone="tint">
      <QuboHead head={user.head} titleId={titleId} />

      <article className="qb-persona" data-qb-reveal>
        <QuboVisual visual={persona.photo} className="qb-persona__photo" />

        <div className="qb-persona__body">
          <header className="qb-persona__head">
            <h3 className="qb-persona__name">{persona.name}</h3>
            <p className="qb-persona__role">{persona.role}</p>
          </header>

          <blockquote className="qb-persona__quote">{persona.quote}</blockquote>

          <dl className="qb-persona__traits">
            {persona.traits.map(trait => (
              <div key={trait.label} className="qb-persona__trait">
                <dt className="qb-persona__label">{trait.label}</dt>
                <dd className="qb-persona__value">{trait.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
    </QuboChapter>
  );
}
