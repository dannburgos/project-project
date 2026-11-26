import type { QuboTable as QuboTableContent } from '@/content/qubo-story.types';
import { cn } from '@/lib/utils';

type QuboTableProps = {
  table: QuboTableContent;
  label: string;
};

// Tabla del caso. En pantallas pequeñas se desplaza de lado; la columna de
// Pulso, cuando hay comparación, se resalta.
export function QuboTable({ table, label }: QuboTableProps) {
  return (
    <div className="qb-table" role="region" aria-label={label} tabIndex={0}>
      <table className="qb-table__grid">
        <thead>
          <tr>
            {table.columns.map((column, index) => (
              <th
                key={`${column}-${index}`}
                scope="col"
                className={cn(
                  'qb-table__head',
                  index === table.highlightColumn && 'qb-table__head--highlight'
                )}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, index) =>
                index === 0 ? (
                  <th
                    key={`${cell}-${index}`}
                    scope="row"
                    className={cn(
                      'qb-table__cell qb-table__cell--row',
                      index === table.highlightColumn &&
                        'qb-table__cell--highlight'
                    )}
                  >
                    {cell}
                  </th>
                ) : (
                  <td
                    key={`${cell}-${index}`}
                    className={cn(
                      'qb-table__cell',
                      index === table.highlightColumn &&
                        'qb-table__cell--highlight'
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
