import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { cn } from '@/lib/utils';
import { toyotaAdvisorMessages as copy, fillTemplate } from '../../messages';
import { TOYOTA_MODELS } from '../../toyota-catalog';
import { formatPrice } from '../../toyota-score.util';
import { TaVisual } from '../atoms/ta-visual';
import { TaAdvisorBar } from '../molecules/ta-advisor-bar';

// Variante «Estos se acercan a lo que buscas»: ninguno cumple todo. Dos
// caminos enfrentados; cada uno marca qué de lo pedido cumple y qué no
export function TaNearScreen() {
  const text = copy.near;

  return (
    <div className="ta-variant">
      <TaAdvisorBar tone="light" />
      <header className="ta-variant__head">
        <p className="ta-eyebrow ta-eyebrow--red">
          <span className="ta-eyebrow__line" aria-hidden="true" />
          {text.eyebrow}
        </p>
        <h2 className="ta-variant__title">{text.title}</h2>
        <p className="ta-variant__lead">{text.lead}</p>
        <p className="ta-variant__asked">
          <span>{text.asked}</span>
          {text.requests.map(request => (
            <b key={request}>{request}</b>
          ))}
        </p>
      </header>

      <div className="ta-near">
        {text.cards.map((card, index) => {
          const model = TOYOTA_MODELS.find(item => item.id === card.id);
          return (
            <article key={card.id} className="ta-near__card">
              <p className="ta-near__priority">{card.priority}</p>
              <div className="ta-near__top">
                <TaVisual
                  label={fillTemplate(copy.result.smallVisual, {
                    model: model?.name ?? ''
                  })}
                  className="ta-near__visual"
                />
                <div>
                  <h3 className="ta-near__name">{model?.name}</h3>
                  <p className="ta-near__price">
                    {copy.result.from}{' '}
                    <b>{model ? formatPrice(model.priceFrom) : ''}</b>
                  </p>
                  <ul className="ta-near__requests">
                    {text.requests.map((request, requestIndex) => (
                      <li
                        key={request}
                        className={cn(
                          'ta-near__request',
                          card.requestsMet[requestIndex] &&
                            'ta-near__request--met'
                        )}
                      >
                        <ToyotaIcon
                          name={
                            card.requestsMet[requestIndex] ? 'check' : 'close'
                          }
                          className="size-3.5"
                        />
                        {request}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="ta-near__lists">
                <div>
                  <p className="ta-near__list-title">{text.meetsTitle}</p>
                  <ul className="ta-near__list">
                    {card.meets.map(item => (
                      <li key={item}>
                        <ToyotaIcon name="check" className="size-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="ta-near__list-title">{text.differsTitle}</p>
                  <ul className="ta-near__list ta-near__list--differs">
                    {card.differs.map(item => (
                      <li key={item}>
                        <ToyotaIcon name="close" className="size-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a href="#" className="ta-button ta-button--text">
                {copy.result.detail}
                <ToyotaIcon
                  name="arrow-right"
                  className="ta-button__arrow size-4"
                />
              </a>
              {index === 0 && (
                <span className="ta-near__or" aria-hidden="true">
                  {text.or}
                </span>
              )}
            </article>
          );
        })}
      </div>

      <footer className="ta-variant__actions">
        <a href="#" className="ta-button ta-button--primary">
          {text.compare}
          <ToyotaIcon name="compare" className="size-5" />
        </a>
        <a href="#" className="ta-button ta-button--outline">
          {text.adjust}
        </a>
      </footer>
    </div>
  );
}
