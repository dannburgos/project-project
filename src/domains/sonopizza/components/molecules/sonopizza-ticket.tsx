import { Banknote } from 'lucide-react';

import { formatPrice } from '@/utils/price.util';

type SonopizzaTicketRow = {
  label: string;
  value: number;
};

type SonopizzaTicketProps = {
  title: string;
  rows: readonly SonopizzaTicketRow[];
  totalLabel: string;
  total: number;
  note: string;
};

// Resumen del pedido como el ticket de la caja (elemento de marca): papel
// blanco con el borde de abajo dentado, cada valor y el total grande
export function SonopizzaTicket({
  title,
  rows,
  totalLabel,
  total,
  note
}: SonopizzaTicketProps) {
  return (
    <section className="sp-ticket" aria-label={title}>
      <div className="sp-ticket__head">
        <h2 className="sp-label">{title}</h2>
        <p className="sp-ticket__note">
          <Banknote aria-hidden="true" />
          {note}
        </p>
      </div>
      <dl className="sp-ticket__rows">
        {rows.map(row => (
          <div key={row.label} className="sp-ticket__row">
            <dt>{row.label}</dt>
            <dd>{formatPrice(row.value)}</dd>
          </div>
        ))}
        <div className="sp-ticket__row sp-ticket__row--total">
          <dt>{totalLabel}</dt>
          <dd className="sp-display">{formatPrice(total)}</dd>
        </div>
      </dl>
    </section>
  );
}
