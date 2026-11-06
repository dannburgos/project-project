import { Leaf } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';

// Hojas que se abren en el tallo, de abajo hacia arriba
const LEAVES = ['first', 'second', 'third', 'fourth'] as const;
// Chispas que suelta la planta cuando termina de brotar
const SPARKS = [1, 2, 3, 4, 5, 6] as const;

// Buscar, entre "Cuéntanos más" y "¿Es alguna de estas?": mientras Planti busca
// las coincidencias brota una planta, el texto cuenta qué está revisando y una
// barra muestra cuánto falta
export function PlantiSearchLoadingScreen() {
  const { loading } = plantiMessages.search;

  return (
    <div className="planti-screen planti-loading" role="status">
      <div className="planti-loading__sprout" aria-hidden="true">
        <span className="planti-loading__soil" />
        <span className="planti-loading__stem" />
        {LEAVES.map(leaf => (
          <Leaf
            key={leaf}
            className={cn(
              'planti-loading__leaf',
              `planti-loading__leaf--${leaf}`
            )}
          />
        ))}
        {SPARKS.map(spark => (
          <span key={spark} className="planti-loading__spark" />
        ))}
      </div>
      <ul className="planti-loading__messages">
        {loading.messages.map(message => (
          <li key={message} className="planti-loading__message">
            {message}
          </li>
        ))}
      </ul>
      <div className="planti-loading__bar" aria-hidden="true">
        <span className="planti-loading__fill" />
      </div>
    </div>
  );
}
