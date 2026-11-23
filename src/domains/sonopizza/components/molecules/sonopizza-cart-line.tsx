import { Pencil, Trash2 } from 'lucide-react';

import { formatPrice } from '@/utils/price.util';

import { findSonopizzaProduct } from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import { describeSonopizzaCartLine } from '../../sonopizza-order.util';
import type { SonopizzaCartLine as SonopizzaCartLineData } from '../../types/sonopizza.types';
import { SonopizzaPizzaPhoto } from '../atoms/sonopizza-pizza-photo';

type SonopizzaCartLineProps = {
  line: SonopizzaCartLineData;
  // Versión compacta y solo de lectura (en el checkout): la foto, el nombre y
  // el precio, sin detalles ni íconos de editar y eliminar
  isCompact?: boolean;
};

// Un producto del carrito: la foto, el nombre, cómo se pidió (tamaño, lo que
// se quitó y los extras), el precio de la línea y las acciones de editar y
// eliminar a la vista. En el checkout va compacto: solo la foto, el nombre y
// el precio
export function SonopizzaCartLine({
  line,
  isCompact = false
}: SonopizzaCartLineProps) {
  const copy = sonopizzaMessages;
  const product = findSonopizzaProduct(line.productId);
  if (!product) return null;

  const price = formatPrice(line.unitPrice * line.quantity);

  if (isCompact) {
    return (
      <li className="sp-line sp-line--compact">
        <span className="sp-line__thumb">
          <SonopizzaPizzaPhoto photo={product.photo} turn={product.turn} />
        </span>
        <p className="sp-line__name">{product.name}</p>
        <span className="sp-display sp-display--figures sp-line__price">
          {price}
        </span>
      </li>
    );
  }

  const details = describeSonopizzaCartLine(line);

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
          <span className="sp-display sp-display--figures sp-line__price">
            {price}
          </span>
        </div>
      </div>
    </li>
  );
}
