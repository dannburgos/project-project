'use client';

import {
  Camera,
  ChevronsUpDown,
  CircleAlert,
  CircleCheck,
  CircleMinus,
  Flame,
  IdCard,
  Image as ImageIcon,
  LayoutGrid,
  LayoutList,
  Lightbulb,
  ListChecks,
  Lock,
  type LucideIcon,
  MapPin,
  Receipt,
  Ruler,
  Search,
  Shapes,
  Store
} from 'lucide-react';

import type {
  SonoBenchmarkIcon,
  SonoBenchmarkSignal,
  SonopizzaStory
} from '@/content/sonopizza-story.types';
import { SonoSlideNav } from '@/components/molecules/sono-slide-nav';
import { useSonoSlides } from '@/hooks/use-sono-slides';
import { BENCHMARK_SLIDES_MOTION } from '@/lib/case-story/sonopizza-benchmark';
import { cn } from '@/lib/utils';
import { formatSectionNumber } from '@/utils/section-number.util';
import { formatSlidePanelId, formatSlideTabId } from '@/utils/slide-ids.util';

// Prefijo de los ids de pestañas y slides
const ID_PREFIX = 'sono-bench';

const ICONS: Record<SonoBenchmarkIcon, LucideIcon> = {
  'layout-list': LayoutList,
  image: ImageIcon,
  flame: Flame,
  'id-card': IdCard,
  search: Search,
  ruler: Ruler,
  store: Store,
  lock: Lock,
  'list-checks': ListChecks,
  receipt: Receipt,
  'chevrons-up-down': ChevronsUpDown,
  'map-pin': MapPin,
  camera: Camera,
  shapes: Shapes,
  'layout-grid': LayoutGrid
};

// Cada observación es un bloque con el color de su veredicto (fondo y raya
// a la izquierda) y, abajo, el veredicto con su símbolo: chulo para la
// fortaleza, alerta para la fricción y raya para lo neutral
const VERDICT_ICONS: Record<SonoBenchmarkSignal, LucideIcon> = {
  strength: CircleCheck,
  friction: CircleAlert,
  neutral: CircleMinus
};
const BLOCK_TONE: Record<SonoBenchmarkSignal, string> = {
  strength: 'sono-bench__block--strength',
  friction: 'sono-bench__block--friction',
  neutral: 'sono-bench__block--neutral'
};

type SonoBenchmarkSlidesProps = {
  benchmark: SonopizzaStory['benchmark'];
};

// Benchmark y hallazgos de Sonopizza: tres slides que se pasan con clic. Cada
// una compara un par de aspectos en una tarjeta por marca (con el sello "Lo
// tomamos" en la que inspira la decisión) y cierra con su hallazgo y lo que
// se lleva a Sonopizza. El cambio entre slides lo arma useSonoSlides con
// BENCHMARK_SLIDES_MOTION.
export function SonoBenchmarkSlides({ benchmark }: SonoBenchmarkSlidesProps) {
  const { brands, slides, signals } = benchmark;
  const { ref, current, goTo, handleNext, handlePrevious, handleNavKeyDown } =
    useSonoSlides<HTMLDivElement>(slides.length, BENCHMARK_SLIDES_MOTION);
  const total = formatSectionNumber(slides.length);

  return (
    <div ref={ref} className="sono-bench">
      <div className="sono-bench__top" data-sono-in="0">
        <p className="sono-eyebrow">{benchmark.eyebrow}</p>
        <SonoSlideNav
          idPrefix={ID_PREFIX}
          titles={slides.map(slide => slide.title)}
          current={current}
          label={benchmark.navLabel}
          previousLabel={benchmark.previousLabel}
          nextLabel={benchmark.nextLabel}
          onSelect={goTo}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onKeyDown={handleNavKeyDown}
        />
      </div>

      <div className="sono-bench__stack" data-sono-in="0">
        {slides.map((slide, index) => (
          <section
            key={slide.title}
            id={formatSlidePanelId(ID_PREFIX, index)}
            role="tabpanel"
            aria-labelledby={formatSlideTabId(ID_PREFIX, index)}
            className="sono-bench__slide"
            data-bench-slide
          >
            <header className="sono-bench__intro" data-bench-intro>
              <p className="sono-bench__number">
                <b>{formatSectionNumber(index, 1)}</b>
                <span>/{total}</span>
              </p>
              <div className="sono-bench__heading">
                <p className="sono-label">{slide.aspects}</p>
                <h3 className="sono-display sono-display--md">{slide.title}</h3>
              </div>
            </header>

            <ul className="sono-bench__cards">
              {brands.map((brand, brandIndex) => {
                const card = slide.cards[brandIndex];
                if (!card) return null;
                const isTaken = slide.takenFrom === brandIndex;
                return (
                  <li
                    key={brand.name}
                    className={cn(
                      'sono-bench__card',
                      isTaken && 'sono-bench__card--taken'
                    )}
                    data-bench-card
                  >
                    {isTaken && (
                      <span className="sono-bench__sticker" data-bench-sticker>
                        {benchmark.takeLabel}
                      </span>
                    )}
                    <div className="sono-bench__brand">
                      {/* El nombre va al lado: el logo es decorativo */}
                      <span
                        className={cn(
                          'sono-bench__logo',
                          brand.logo.isCard && 'sono-bench__logo--card'
                        )}
                      >
                        <img src={brand.logo.src} alt="" />
                      </span>
                      <span className="sono-bench__name">{brand.name}</span>
                    </div>
                    {card.palette && (
                      <div className="sono-bench__block">
                        <p className="sono-bench__aspect">
                          {benchmark.paletteLabel}
                        </p>
                        <ul className="sono-bench__palette">
                          {card.palette.map(hex => (
                            <li key={hex} className="sono-bench__swatch">
                              <svg viewBox="0 0 24 24" aria-hidden="true">
                                <circle cx="12" cy="12" r="11" fill={hex} />
                              </svg>
                              <span>{hex}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {card.rows.map((row, rowIndex) => {
                      const Icon = ICONS[row.icon];
                      const VerdictIcon = VERDICT_ICONS[row.signal];
                      return (
                        <div
                          key={row.text}
                          className={cn(
                            'sono-bench__block',
                            BLOCK_TONE[row.signal]
                          )}
                        >
                          <p className="sono-bench__aspect">
                            {slide.rowLabels[rowIndex]}
                          </p>
                          <p className="sono-bench__observation">
                            <span className="sono-bench__badge">
                              <Icon aria-hidden="true" />
                            </span>
                            {row.text}
                          </p>
                          <p className="sono-bench__verdict">
                            <VerdictIcon aria-hidden="true" />
                            {signals[row.signal]}
                          </p>
                        </div>
                      );
                    })}
                  </li>
                );
              })}
            </ul>

            <div className="sono-bench__finding" data-bench-finding>
              <span className="sono-bench__bulb">
                <Lightbulb aria-hidden="true" />
              </span>
              <div className="sono-bench__finding-text">
                <p className="sono-label">
                  {benchmark.findingLabel} {formatSectionNumber(index, 1)}
                </p>
                <p className="sono-bench__finding-title">{slide.finding}</p>
              </div>
              <div className="sono-bench__decision">
                <p className="sono-label">{benchmark.forSonopizzaLabel}</p>
                <p>{slide.decision}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
