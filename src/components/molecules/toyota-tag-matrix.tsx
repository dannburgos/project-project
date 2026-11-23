import type { ToyotaTagMatrix as ToyotaTagMatrixContent } from '@/content/toyota-story.types';
import { cn } from '@/lib/utils';

type ToyotaTagMatrixProps = {
  title: string;
  matrix: ToyotaTagMatrixContent;
};

// Matriz de modelos por etiqueta: cada punto es una etiqueta que el modelo
// tiene en su ficha. Los puntos llegan fila por fila con el scroll, y al
// final de cada fila se suma cuántas tiene.
export function ToyotaTagMatrix({ title, matrix }: ToyotaTagMatrixProps) {
  return (
    <div className="ty-matrix" data-ty-cells>
      <table className="ty-matrix__grid">
        <caption className="ty-matrix__caption">{title}</caption>
        <thead>
          <tr>
            <th scope="col" className="ty-matrix__corner">
              {matrix.modelsLabel}
            </th>
            {matrix.tags.map(tag => (
              <th key={tag} scope="col" className="ty-matrix__tag">
                <span>{tag}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrix.models.map(model => (
            <tr key={model.name} className="ty-matrix__row">
              <th scope="row" className="ty-matrix__model">
                <span className="ty-matrix__name">{model.name}</span>
                <span className="ty-matrix__price">{model.price}</span>
              </th>
              {matrix.tags.map(tag => {
                const hasTag = model.tags.includes(tag);
                return (
                  <td key={tag} className="ty-matrix__cell">
                    <span
                      className={cn(
                        'ty-matrix__dot',
                        hasTag && 'ty-matrix__dot--on'
                      )}
                      data-ty-cell={hasTag ? '' : undefined}
                      aria-hidden="true"
                    />
                    <span className="sr-only">{hasTag ? tag : '—'}</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
