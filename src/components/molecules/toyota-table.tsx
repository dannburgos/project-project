import type { ToyotaTable as ToyotaTableContent } from '@/content/toyota-story.types';
import { cn } from '@/lib/utils';

type ToyotaTableProps = {
  table: ToyotaTableContent;
  caption?: string;
  // Columna que lleva el acento de la marca (por ejemplo, la propuesta)
  accentColumn?: number;
  className?: string;
};

// Ficha técnica: filas separadas por líneas finas que llegan una tras otra.
// La primera columna es la etiqueta de cada fila.
export function ToyotaTable({
  table,
  caption,
  accentColumn,
  className
}: ToyotaTableProps) {
  return (
    <div className={cn('ty-table', className)} data-ty-group>
      <table className="ty-table__grid">
        {caption && <caption className="ty-table__caption">{caption}</caption>}
        <thead>
          <tr className="ty-table__row ty-table__row--head">
            {table.columns.map((column, index) => (
              <th
                key={column}
                scope="col"
                className={cn(
                  'ty-table__heading',
                  index === accentColumn && 'ty-table__heading--accent'
                )}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map(row => (
            <tr key={row.join('|')} className="ty-table__row" data-ty-item>
              {row.map((cell, index) =>
                index === 0 ? (
                  <th key={cell} scope="row" className="ty-table__label">
                    {cell}
                  </th>
                ) : (
                  <td
                    key={cell}
                    className={cn(
                      'ty-table__cell',
                      index === accentColumn && 'ty-table__cell--accent'
                    )}
                  >
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
