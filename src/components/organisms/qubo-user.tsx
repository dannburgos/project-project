import { QuboBlock } from '@/components/molecules/qubo-block';
import { QuboCards } from '@/components/molecules/qubo-cards';
import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboFacts } from '@/components/molecules/qubo-facts';
import { QuboHead } from '@/components/molecules/qubo-head';
import type { QuboUser as QuboUserContent } from '@/content/qubo-story.types';

type QuboUserProps = {
  id: string;
  user: QuboUserContent;
};

// 04 · Usuario. Quién es, el trabajo que quiere resolver (frase grande), la
// proto-persona y lo que todavía no se sabe.
export function QuboUser({ id, user }: QuboUserProps) {
  const titleId = `${id}-title`;

  return (
    <QuboChapter id={id} titleId={titleId} tone="tint">
      <QuboHead head={user.head} titleId={titleId} />

      <div className="qb-pair">
        {[user.primary, user.secondary].map(person => (
          <article key={person.label} className="qb-pair__item" data-qb-reveal>
            <p className="qb-pair__label">{person.label}</p>
            <p className="qb-pair__text">{person.value}</p>
          </article>
        ))}
      </div>

      <figure className="qb-manifesto qb-manifesto--light" data-qb-reveal>
        <figcaption className="qb-manifesto__label">{user.jobLabel}</figcaption>
        <blockquote className="qb-manifesto__text">{user.job}</blockquote>
      </figure>

      <QuboCards items={user.dimensions} className="qb-cards--three" />

      <QuboBlock title={user.hiresLabel}>
        <p className="qb-copy">{user.hires}</p>
      </QuboBlock>

      <article className="qb-persona" data-qb-reveal>
        <header className="qb-persona__head">
          <p className="qb-persona__tag">{user.persona.hypothesisTag}</p>
          <h3 className="qb-persona__name">{user.persona.name}</h3>
          <p className="qb-persona__role">{user.persona.role}</p>
        </header>
        <QuboFacts facts={user.persona.facts} />
      </article>

      <QuboBlock title={user.unknownLabel}>
        <ul className="qb-unknown">
          {user.unknown.map(question => (
            <li key={question} className="qb-unknown__item">
              {question}
            </li>
          ))}
        </ul>
      </QuboBlock>
    </QuboChapter>
  );
}
