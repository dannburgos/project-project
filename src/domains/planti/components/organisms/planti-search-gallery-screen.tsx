import { Search } from 'lucide-react';

import { plantiMessages } from '../../messages';
import { PlantiMatchTile } from '../molecules/planti-match-tile';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

type PlantiSearchGalleryScreenProps = {
  // La planta correcta ya se resaltó
  isHighlighted?: boolean;
};

// Buscar, paso 3: "¿Es alguna de estas?". Las plantas que coinciden, con foto
// y una frase de cómo son; la última tarjeta es la salida si ninguna se parece.
export function PlantiSearchGalleryScreen({
  isHighlighted = true
}: PlantiSearchGalleryScreenProps) {
  const { gallery, title } = plantiMessages.search;

  return (
    <div className="planti-screen">
      <PlantiScreenHeader title={title} />
      <h2 className="planti-search-question">{gallery.question}</h2>
      <ul className="planti-summary-chips">
        {gallery.summary.map(item => (
          <li key={item} className="planti-summary-chips__item">
            {item}
          </li>
        ))}
      </ul>
      <div className="planti-match-grid">
        {gallery.items.map(item => (
          <PlantiMatchTile
            key={item.key}
            name={item.name}
            look={item.look}
            isActive={isHighlighted && 'isActive' in item}
          />
        ))}
        <article className="planti-match-tile planti-match-tile--none">
          <Search aria-hidden="true" />
          <p className="planti-match-tile__name">{gallery.none.title}</p>
          <p className="planti-match-tile__look">{gallery.none.action}</p>
        </article>
      </div>
    </div>
  );
}
