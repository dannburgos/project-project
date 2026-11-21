import { formatPrice } from '@/utils/price.util';

type SonopizzaTotalBarProps = {
  label: string;
  total: number;
  // Lo que acompaña al total a la derecha (la cantidad…), si hace falta
  aside?: React.ReactNode;
  actionLabel: string;
};

// Barra de abajo, siempre a la vista: solo lo necesario para decidir. El total
// a la izquierda, algo de apoyo a la derecha y el botón principal debajo
export function SonopizzaTotalBar({
  label,
  total,
  aside,
  actionLabel
}: SonopizzaTotalBarProps) {
  return (
    <section className="sp-totalbar" aria-label={label}>
      <div className="sp-totalbar__row">
        <p className="sp-totalbar__value">
          <span className="sp-label">{label}</span>
          <b className="sp-display sp-display--figures sp-totalbar__price">
            {formatPrice(total)}
          </b>
        </p>
        {aside}
      </div>
      <span className="sp-button sp-button--primary sp-button--block">
        {actionLabel}
      </span>
    </section>
  );
}
