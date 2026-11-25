import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { toyotaAdvisorMessages as copy, fillTemplate } from '../../messages';
import { formatPrice } from '../../toyota-score.util';
import type { ToyotaModel } from '../../types/toyota-advisor.types';
import { TaVisual } from '../atoms/ta-visual';

type TaModelCardProps = {
  model: ToyotaModel;
};

// Tarjeta de un modelo en el catálogo: la foto sobre un escenario gris, su
// categoría, dos datos que deciden y el precio desde. Al pasar el cursor el
// vehículo avanza y aparece «Comparar»
export function TaModelCard({ model }: TaModelCardProps) {
  const catalog = copy.home.catalog;
  const isHybrid = model.tags.includes('hybrid');

  return (
    <article className="ta-card">
      <a href="#" className="ta-card__stage">
        <span className="ta-card__category">{model.category}</span>
        {isHybrid && (
          <span className="ta-card__hybrid">
            <ToyotaIcon name="hybrid" className="size-3.5" />
            {catalog.hybrid}
          </span>
        )}
        <TaVisual
          label={fillTemplate(catalog.visual, { model: model.name })}
          className="ta-card__visual"
        />
        <dl className="ta-card__specs">
          <div>
            <dt>{catalog.seats}</dt>
            <dd>{model.seats}</dd>
          </div>
          <div>
            <dt>{catalog.engine}</dt>
            <dd>{model.engine}</dd>
          </div>
        </dl>
        <span className="ta-card__go" aria-hidden="true">
          <ToyotaIcon name="arrow-right" className="size-5" />
        </span>
      </a>
      <div className="ta-card__info">
        <h3 className="ta-card__name">
          {model.name}
          <span>{model.body}</span>
        </h3>
        <label className="ta-card__compare">
          <input type="checkbox" />
          <span className="ta-card__box" aria-hidden="true">
            <ToyotaIcon name="check" className="size-3" />
          </span>
          {catalog.compare}
        </label>
      </div>
      <p className="ta-card__price">
        <span>{catalog.from}</span>
        <b>
          {formatPrice(model.priceFrom)}
          <sup>*</sup>
        </b>
      </p>
    </article>
  );
}
