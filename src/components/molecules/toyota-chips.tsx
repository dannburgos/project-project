type ToyotaChipsProps = {
  items: readonly string[];
  label?: string;
};

// Etiquetas cortas en fila (criterios, principios, mecanismos)
export function ToyotaChips({ items, label }: ToyotaChipsProps) {
  return (
    <div className="ty-chips" data-ty-group>
      {label && <p className="ty-chips__label">{label}</p>}
      <ul className="ty-chips__list">
        {items.map(item => (
          <li key={item} className="ty-chips__item" data-ty-item>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
