import { CaseStoryImage } from '@/components/atoms/case-story-image';
import { CaseStoryOpener } from '@/components/atoms/case-story-opener';
import type { CaseStory } from '@/content/case-story.types';
import { cn } from '@/lib/utils';

type CaseStoryBenchmarkProps = {
  benchmark: CaseStory['benchmark'];
  sectionName: string;
};

type Category = 'strengths' | 'gaps';

const CATEGORIES: readonly Category[] = ['strengths', 'gaps'];

// Cada categoría con su marca: llena (lo que resuelve) y vacía (lo que deja
// sin resolver)
const TITLE_CLASS: Record<Category, string> = {
  strengths: 'story-marker-title--strengths',
  gaps: 'story-marker-title--gaps'
};
const LIST_CLASS: Record<Category, string> = {
  strengths: 'story-list--strengths',
  gaps: 'story-list--gaps'
};

// 04 · Benchmark en dos vistas: las tres apps con lo que resuelven y lo que
// dejan sin resolver; luego, los hallazgos en grande (lo que podrían mejorar)
// y la frase que da paso a Planti
export function CaseStoryBenchmark({
  benchmark,
  sectionName
}: CaseStoryBenchmarkProps) {
  const labels: Record<Category, string> = {
    strengths: benchmark.strengthsLabel,
    gaps: benchmark.gapsLabel
  };

  return (
    <>
      <div
        className="story-view story-view--cover story-benchmark"
        data-view="benchmark"
        data-section="3"
      >
        <CaseStoryOpener number="04" name={sectionName} />
        <h2 className="story-title-lg story-benchmark__title" data-reveal>
          {benchmark.title}
        </h2>
        <div className="story-columns">
          {benchmark.apps.map(app => (
            <div
              key={app.name}
              className="story-column story-benchmark__app"
              data-part="column"
            >
              <div className="story-benchmark__head">
                <CaseStoryImage
                  label={app.name}
                  className="story-benchmark__icon"
                />
                <div>
                  <p className="story-title-md">{app.name}</p>
                  <p className="story-body">{app.focus}</p>
                </div>
              </div>
              {CATEGORIES.map(category => (
                <div key={category}>
                  <p
                    className={cn('story-marker-title', TITLE_CLASS[category])}
                    data-fade
                  >
                    {labels[category]}
                  </p>
                  <ul
                    className={cn('story-list', LIST_CLASS[category])}
                    data-fade
                  >
                    {app[category].map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        className="story-view story-view--centered"
        data-view="benchmark-findings"
        data-section="3"
      >
        <p className="story-label" data-part="label">
          {benchmark.findingsLabel}
        </p>
        <div className="story-columns story-findings">
          {benchmark.findings.map((finding, index) => (
            <div
              key={finding}
              className="story-column story-findings__item"
              data-part="finding"
            >
              <p className="story-number story-stripes">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="story-title-md">{finding}</p>
            </div>
          ))}
        </div>
        <p className="story-title-xl story-stripes" data-reveal>
          {benchmark.closing}
        </p>
      </div>
    </>
  );
}
