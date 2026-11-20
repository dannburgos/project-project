import { ArrowBigUp, Delete } from 'lucide-react';

import { sonopizzaMessages } from '../../messages';

// Teclado del celular mientras se busca (solo de muestra). La tecla de buscar
// lleva el naranja de la marca
export function SonopizzaKeyboard() {
  const copy = sonopizzaMessages.search;
  const [top = '', middle = '', bottom = ''] = copy.keyboard;

  return (
    <div className="sp-keyboard" aria-hidden="true">
      <div className="sp-keyboard__row">
        {Array.from(top).map(key => (
          <span key={key} className="sp-keyboard__key">
            {key}
          </span>
        ))}
      </div>
      <div className="sp-keyboard__row">
        {Array.from(middle).map(key => (
          <span key={key} className="sp-keyboard__key">
            {key}
          </span>
        ))}
      </div>
      <div className="sp-keyboard__row">
        <span className="sp-keyboard__key sp-keyboard__key--wide">
          <ArrowBigUp />
        </span>
        {Array.from(bottom).map(key => (
          <span key={key} className="sp-keyboard__key">
            {key}
          </span>
        ))}
        <span className="sp-keyboard__key sp-keyboard__key--wide">
          <Delete />
        </span>
      </div>
      <div className="sp-keyboard__row">
        <span className="sp-keyboard__key sp-keyboard__key--mode">123</span>
        <span className="sp-keyboard__key sp-keyboard__key--space">
          {copy.space}
        </span>
        <span className="sp-keyboard__key sp-keyboard__key--go">
          {copy.searchKey}
        </span>
      </div>
    </div>
  );
}
