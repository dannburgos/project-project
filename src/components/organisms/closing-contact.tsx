import { ArrowUp, ArrowUpRight, Download } from 'lucide-react';

import { CopyButton } from '@/components/atoms/copy-button';
import { siteContent } from '@/content/site';

// Cierre de contacto al final de Home, Work, los casos y About (referencia:
// karolinahess.com). Queda fijo al fondo de la ventana y la página sube como
// una cortina (PageCurtain) para descubrirlo. Solo se pinta dentro de su
// propio espacio, al final de la página (closing-contact-reveal): así nunca se
// asoma por detrás del contenido al hacer scroll. Fondo negro y elementos
// blancos mientras se define el sistema visual.
export function ClosingContact() {
  const { closingContact: contact } = siteContent;

  return (
    <div className="closing-contact-reveal">
      <section
        data-surface="dark"
        className="closing-contact"
        aria-labelledby="closing-contact-title"
      >
        <div className="closing-contact__body">
          <h2 id="closing-contact-title" className="closing-contact__title">
            <span>{contact.titleStart}</span>
            <span className="closing-contact__title-muted">
              {contact.titleEnd}
            </span>
          </h2>

          <div className="closing-contact__email">
            <p className="closing-contact__label">{contact.emailLabel}</p>
            <div className="closing-contact__email-row">
              <a
                href={`mailto:${contact.email}`}
                className="closing-contact__email-link"
              >
                {contact.email}
              </a>
              <CopyButton
                value={contact.email}
                label={contact.copyLabel}
                copiedLabel={contact.copiedLabel}
              />
            </div>
          </div>

          <ul className="closing-contact__links">
            <li>
              <a
                href={contact.linkedin.href}
                className="closing-contact__link"
                data-glass
              >
                {contact.linkedin.label}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={contact.cv.href}
                className="closing-contact__link"
                data-glass
              >
                {contact.cv.label}
                <Download aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="closing-contact__footer">
          <a href="#top" className="closing-contact__top">
            {contact.backToTop}
            <ArrowUp aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
