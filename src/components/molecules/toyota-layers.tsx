import type { ToyotaLayer } from '@/content/toyota-story.types';

type ToyotaLayersProps = {
  layers: readonly ToyotaLayer[];
};

// Las cuatro capas de la estrategia de IA como plano técnico (referencia:
// S-2K): cajas sobre una retícula, unidas por una línea que se dibuja de
// izquierda a derecha mientras cada capa llega en orden. Cada capa lleva
// abajo lo que garantiza para que la experiencia sea confiable.
export function ToyotaLayers({ layers }: ToyotaLayersProps) {
  return (
    <figure className="ty-layers" data-ty-group>
      <span className="ty-layers__line" aria-hidden="true" data-ty-line />
      <ol className="ty-layers__list">
        {layers.map(layer => (
          <li key={layer.name} className="ty-layers__item" data-ty-item>
            <span className="ty-layers__number">{layer.number}</span>
            <p className="ty-layers__name">{layer.name}</p>
            <p className="ty-layers__text">{layer.text}</p>
            <ul className="ty-layers__guarantees">
              {layer.guarantees.map(guarantee => (
                <li key={guarantee} className="ty-layers__guarantee">
                  {guarantee}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </figure>
  );
}
