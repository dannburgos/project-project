import type { ToyotaLogicExample as ToyotaLogicExampleContent } from '@/content/toyota-story.types';
import { cn } from '@/lib/utils';

type ToyotaLogicExampleProps = {
  example: ToyotaLogicExampleContent;
};

// Un ejemplo de la regla en tres pasos: lo que responde la persona, lo que
// deja fuera el presupuesto y cómo se ordenan los modelos que quedan
export function ToyotaLogicExample({ example }: ToyotaLogicExampleProps) {
  return (
    <div className="ty-logic" data-ty-group>
      <p className="ty-logic__label" data-ty-item>
        {example.label}
      </p>
      <ol className="ty-logic__steps">
        <li className="ty-logic__step" data-ty-item>
          <span className="ty-logic__number">01</span>
          <p className="ty-logic__title">{example.answers.title}</p>
          <ul className="ty-logic__tags">
            {example.answers.tags.map(tag => (
              <li key={tag} className="ty-logic__tag">
                {tag}
              </li>
            ))}
          </ul>
        </li>
        <li className="ty-logic__step" data-ty-item>
          <span className="ty-logic__number">02</span>
          <p className="ty-logic__title">{example.budget.title}</p>
          <p className="ty-logic__text">{example.budget.text}</p>
        </li>
        <li className="ty-logic__step" data-ty-item>
          <span className="ty-logic__number">03</span>
          <p className="ty-logic__title">{example.ranking.title}</p>
          <ul className="ty-logic__models">
            {example.ranking.models.map(model => (
              <li
                key={model.name}
                className={cn(
                  'ty-logic__model',
                  model.isWinner && 'ty-logic__model--winner'
                )}
              >
                <span className="ty-logic__name">{model.name}</span>
                <span className="ty-logic__price">{model.price}</span>
                <span className="ty-logic__points">{model.points}</span>
              </li>
            ))}
          </ul>
          <p className="ty-logic__text">{example.ranking.note}</p>
        </li>
      </ol>
    </div>
  );
}
