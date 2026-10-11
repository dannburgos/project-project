import { BarChart3, ImageIcon, Quote } from 'lucide-react';

import { siteContent, type CaseStudyBlock } from '@/content/site';

type CaseBlockProps = {
  type: CaseStudyBlock;
};

const GALLERY_ITEMS = 3;
const RESULT_ITEMS = 3;

function MediaCard({
  label,
  className
}: {
  label: string;
  className?: string;
}) {
  return (
    <figure className={className ?? 'case-block__media'}>
      <ImageIcon aria-hidden="true" />
      <figcaption>{label}</figcaption>
    </figure>
  );
}

// Bloque de contenido de una etapa: texto, imagen, cita, gráfica, antes y
// después, galería o resultado. Por ahora con textos de ejemplo.
export function CaseBlock({ type }: CaseBlockProps) {
  const { stageText, blockLabels: labels } = siteContent.caseStudy;

  switch (type) {
    case 'text':
      return <p className="case-block case-block--text">{stageText}</p>;

    case 'image':
      return <MediaCard label={labels.image} />;

    case 'chart':
      return (
        <figure className="case-block__media case-block__media--chart">
          <BarChart3 aria-hidden="true" />
          <figcaption>{labels.chart}</figcaption>
        </figure>
      );

    case 'quote':
      return (
        <blockquote className="case-block case-block--quote">
          <Quote aria-hidden="true" />
          <p>{labels.quote}</p>
          <footer>{labels.quoteSource}</footer>
        </blockquote>
      );

    case 'beforeAfter':
      return (
        <div className="case-block case-block--pair">
          <MediaCard label={labels.before} />
          <MediaCard label={labels.after} />
        </div>
      );

    case 'gallery':
      return (
        <div className="case-block case-block--gallery">
          {Array.from({ length: GALLERY_ITEMS }, (_, index) => (
            <MediaCard key={index} label={labels.gallery} />
          ))}
        </div>
      );

    case 'result':
      return (
        <dl className="case-block case-block--result">
          {Array.from({ length: RESULT_ITEMS }, (_, index) => (
            <div key={index} className="case-block__metric">
              <dt className="case-block__metric-label">{labels.resultLabel}</dt>
              <dd className="case-block__metric-value">{labels.resultValue}</dd>
            </div>
          ))}
        </dl>
      );
  }
}
