import type { QuboTable as QuboTableContent } from '@/content/qubo-story.types';

type QuboTableProps = {
  table: QuboTableContent;
  label: string;
};

// Tabla del caso. En pantallas pequeñas se desplaza de lado.
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
                className="qb-table__head"
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
                    className="qb-table__cell qb-table__cell--row"
                  >
                    {cell}
                  </th>
                ) : (
                  <td key={`${cell}-${index}`} className="qb-table__cell">
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
