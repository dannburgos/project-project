import { cn } from '@/lib/utils';

type PlantiSizeOption = {
  key: string;
  label: string;
};

type PlantiSizeSliderProps = {
  sizes: readonly PlantiSizeOption[];
  // Cuál tamaño está elegido (ninguno, hasta que se elige)
  selectedKey: string | null;
};

// El tamaño de la planta: una foto de la misma escena en la que la planta crece
// o se encoge y, debajo, un deslizador con tres paradas. En el recorrido la
// bolita se desliza sola hasta el tamaño elegido.
export function PlantiSizeSlider({
  sizes,
  selectedKey
}: PlantiSizeSliderProps) {
  return (
    <div className={cn('planti-size', `planti-size--${selectedKey ?? 'none'}`)}>
      <div className="planti-size__stage" aria-hidden="true">
        {sizes.map(size => (
          <img
            key={size.key}
            src={`/planti/size-${size.key}.webp`}
            alt=""
            className={cn(
              'planti-size__photo',
              `planti-size__photo--${size.key}`
            )}
          />
        ))}
      </div>
      <div className="planti-size__track" aria-hidden="true">
        <span className="planti-size__fill" />
        <span className="planti-size__thumb" />
      </div>
      <ul className="planti-size__stops">
        {sizes.map(size => (
          <li
            key={size.key}
            className={cn(
              'planti-size__stop',
              `planti-size__stop--${size.key}`,
              size.key === selectedKey && 'planti-size__stop--active'
            )}
          >
            {size.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
