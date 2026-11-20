import { Pencil, Trash2 } from 'lucide-react';

import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { formatPrice } from '@/utils/price.util';

import { SONOPIZZA_EXTRAS, findSonopizzaProduct } from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import type { SonopizzaCartLine as SonopizzaCartLineData } from '../../types/sonopizza.types';
import { SonopizzaPizzaPhoto } from '../atoms/sonopizza-pizza-photo';
import { SonopizzaStepper } from '../atoms/sonopizza-stepper';

type SonopizzaCartLineProps = {
  line: SonopizzaCartLineData;
};

// Un producto del carrito: la foto, el nombre, cómo se pidió (tamaño, lo que
// se quitó y los extras), el precio de la línea, la cantidad y las acciones
// de editar y eliminar a la vista
export function SonopizzaCartLine({ line }: SonopizzaCartLineProps) {
  const copy = sonopizzaMessages;
  const product = findSonopizzaProduct(line.productId);
  if (!product) return null;

  const details = [
    copy.sizes[line.size],
    ...line.removed.map(ingredient =>
      fillTemplate(copy.custom.removedTemplate, {
        name: copy.ingredients[ingredient].toLowerCase()
      })
    ),
    ...SONOPIZZA_EXTRAS.filter(extra => line.extras.includes(extra.id)).map(
      extra => `+ ${extra.name}`
    )
  ];

  return (
    <li className="sp-line">
      <span className="sp-line__thumb">
        <SonopizzaPizzaPhoto photo={product.photo} turn={product.turn} />
      </span>
      <div className="sp-line__body">
        <div className="sp-line__head">
          <p className="sp-line__name">{product.name}</p>
          <span className="sp-line__actions">
            <button
              type="button"
              className="sp-line__action"
              aria-label={copy.common.edit}
            >
              <Pencil aria-hidden="true" />
            </button>
            <button
              type="button"
              className="sp-line__action"
              aria-label={copy.common.remove}
            >
              <Trash2 aria-hidden="true" />
            </button>
          </span>
        </div>
        <ul className="sp-chips sp-chips--wrap">
          {details.map(detail => (
            <li key={detail} className="sp-chip sp-chip--mini">
              {detail}
            </li>
          ))}
        </ul>
        <div className="sp-line__foot">
          <span className="sp-line__price">
            {formatPrice(line.unitPrice * line.quantity)}
          </span>
          <SonopizzaStepper
            count={line.quantity}
            decreaseLabel={copy.common.decrease}
            increaseLabel={copy.common.increase}
            isSmall
          />
        </div>
      </div>
    </li>
  );
}
