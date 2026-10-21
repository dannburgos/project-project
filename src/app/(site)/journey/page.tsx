import Link from 'next/link';

import { RevealText } from '@/components/atoms/reveal-text';
import { JourneyTimeline } from '@/components/organisms/journey-timeline';
import { journeyContent } from '@/content/journey';
import { siteContent } from '@/content/site';

export default function JourneyPage() {
  return (
    <div className="journey-page">
      <JourneyTimeline
        header={
          <header className="journey-header">
            <h1 className="page__title">
              <RevealText text={journeyContent.title} step={0} />
            </h1>
            <div className="journey-header__actions">
              <a href="#" className="button button--outline button--lg">
                {journeyContent.cvLabel}
              </a>
              <a
                href={`mailto:${siteContent.closingContact.email}`}
                className="button button--default button--lg"
              >
                {journeyContent.contactLabel}
              </a>
            </div>
          </header>
        }
      />

      {/* Móvil: el cierre va debajo de la línea. En escritorio vive al final
          de la línea de tiempo y esta sección queda vacía. */}
      <section id="journey-end" className="journey-end">
        <div className="journey-end__content">
          <Link
            href={journeyContent.endHref}
            className="button button--default button--lg"
          >
            {journeyContent.endLink}
          </Link>
        </div>
      </section>
    </div>
  );
}
