import { formatPrice } from '@/utils/price.util';

type SonopizzaPurchaseSummaryRow = {
  label: string;
  value: number;
};

type SonopizzaPurchaseSummaryProps = {
  title: string;
  rows: readonly SonopizzaPurchaseSummaryRow[];
  totalLabel: string;
  total: number;
};

// Resumen de compra: cada concepto con su valor, separados por líneas
// punteadas, y el total en grande al final
export function SonopizzaPurchaseSummary({
  title,
  rows,
  totalLabel,
  total
}: SonopizzaPurchaseSummaryProps) {
  return (
    <section className="sp-summary" aria-label={title}>
      <h2 className="sp-summary__title">{title}</h2>
      <dl className="sp-summary__rows">
        {rows.map(row => (
          <div key={row.label} className="sp-summary__row">
            <dt>{row.label}</dt>
            <dd>{formatPrice(row.value)}</dd>
          </div>
        ))}
        <div className="sp-summary__row sp-summary__row--total">
          <dt>{totalLabel}</dt>
          <dd className="sp-display sp-display--figures">
            {formatPrice(total)}
          </dd>
        </div>
      </dl>
    </section>
  );
}
