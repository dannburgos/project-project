import { BarChart3, ImageIcon, Quote } from 'lucide-react';

import { CaseBenchmark } from '@/components/molecules/case-benchmark';
import { CaseCards } from '@/components/molecules/case-cards';
import { CaseFlow } from '@/components/molecules/case-flow';
import { CaseGap } from '@/components/molecules/case-gap';
import { CaseList } from '@/components/molecules/case-list';
import { CaseNavigationMap } from '@/components/molecules/case-navigation-map';
import { CaseNote } from '@/components/molecules/case-note';
import { CaseProfile } from '@/components/molecules/case-profile';
import { CasePrototype } from '@/components/molecules/case-prototype';
import { CaseScope } from '@/components/molecules/case-scope';
import { CaseSequence } from '@/components/molecules/case-sequence';
import { CaseStatement } from '@/components/molecules/case-statement';
import type {
  CaseBlock as CaseBlockContent,
  CaseBlockTone
} from '@/content/case-study.types';
import { cn } from '@/lib/utils';

type CaseBlockProps = {
  block: CaseBlockContent;
};

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

// Tarjeta que envuelve un bloque: plana o con un degradado sutil del color de
// acento del proyecto
const surfaceClass = (tone: CaseBlockTone) =>
  cn('case-surface', tone === 'tint' && 'case-surface--tint');

// Bloque de contenido de un capítulo. Todo va en tarjetas: los bloques simples
// en una tarjeta propia (cada párrafo de un texto, en la suya) y los compuestos
// en varias. Los de imagen, gráfica, cita, antes y después, galería y resultado
// son espacios de ejemplo para los proyectos que aún no tienen contenido.
export function CaseBlock({ block }: CaseBlockProps) {
  switch (block.type) {
    case 'text':
      return (
        <div className="case-text">
          {block.paragraphs.map(paragraph => (
            <p
              key={paragraph}
              className={cn(
                surfaceClass(block.tone ?? 'flat'),
                'case-text__paragraph'
              )}
            >
              {paragraph}
            </p>
          ))}
        </div>
      );

    case 'statement':
      return (
        <div className={surfaceClass(block.tone ?? 'tint')}>
          <CaseStatement text={block.text} />
          {block.subtitle && (
            <p className="case-statement__subtitle">{block.subtitle}</p>
          )}
        </div>
      );

    case 'cards':
      return <CaseCards title={block.title} items={block.items} />;

    case 'gap':
      return <CaseGap {...block} />;

    case 'sequence':
      return <CaseSequence title={block.title} items={block.items} />;

    case 'list':
      return (
        <div className={surfaceClass(block.tone ?? 'flat')}>
          <CaseList title={block.title} items={block.items} />
        </div>
      );

    case 'note':
      return (
        <div className={surfaceClass(block.tone ?? 'flat')}>
          <CaseNote label={block.label} text={block.text} />
        </div>
      );

    case 'profile':
      return <CaseProfile {...block} />;

    case 'benchmark':
      return <CaseBenchmark {...block} />;

    case 'scope':
      return <CaseScope {...block} />;

    case 'navigation':
      return <CaseNavigationMap {...block} />;

    case 'flow':
      return <CaseFlow {...block} />;

    case 'prototype':
      return <CasePrototype src={block.src} title={block.title} />;

    case 'image':
      return <MediaCard label={block.label} />;

    case 'chart':
      return (
        <figure className="case-block__media case-block__media--chart">
          <BarChart3 aria-hidden="true" />
          <figcaption>{block.label}</figcaption>
        </figure>
      );

    case 'quote':
      return (
        <blockquote className="case-block case-block--quote">
          <Quote aria-hidden="true" />
          <p>{block.text}</p>
          <footer>{block.source}</footer>
        </blockquote>
      );

    case 'beforeAfter':
      return (
        <div className="case-block case-block--pair">
          <MediaCard label={block.before} />
          <MediaCard label={block.after} />
        </div>
      );

    case 'gallery':
      return (
        <div className="case-block case-block--gallery">
          {block.labels.map((label, index) => (
            <MediaCard key={`${label}-${index}`} label={label} />
          ))}
        </div>
      );

    case 'result':
      return (
        <dl className="case-block case-block--result">
          {block.metrics.map((metric, index) => (
            <div
              key={`${metric.label}-${index}`}
              className="case-block__metric"
            >
              <dt className="case-block__metric-label">{metric.label}</dt>
              <dd className="case-block__metric-value">{metric.value}</dd>
            </div>
          ))}
        </dl>
      );
  }
}
