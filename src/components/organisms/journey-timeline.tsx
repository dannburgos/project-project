'use client';

import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

import { JourneyLaneSlot } from '@/components/molecules/journey-lane-slot';
import { JourneyStageCard } from '@/components/molecules/journey-stage-card';
import { JourneyYearCounter } from '@/components/molecules/journey-year-counter';
import { journeyContent, journeyYears } from '@/content/journey';
import { useJourneyScroll } from '@/hooks/use-journey-scroll';
import { useJourneyIntro } from '@/hooks/use-journey-intro';
import { useStableSlots } from '@/hooks/use-stable-slots';
import { useStageSelection } from '@/hooks/use-stage-selection';
import { cn } from '@/lib/utils';
import {
  getAxisWidthRem,
  getYearAtRem,
  getYearStartRem,
  pickActiveAcademic,
  pickActiveProfessional
} from '@/utils/journey-axis.util';

// Distancia (en rem) a la que una marca de año empieza a reaccionar al centro.
const TICK_REACH_REM = 14;

// Puntos donde actúa el imán al dejar de hacer scroll: el inicio de cada año.
const YEAR_SNAP_POINTS_REM = journeyYears.map(getYearStartRem);

// Secuencia de entrada (en ms desde que carga la página):
// el año gira como un odómetro desde 2000 hasta el año actual y frena; luego
// la línea sale disparada desde el centro encendiendo cada año a su paso, y al
// final se despliega la primera tarjeta.
const INTRO_COUNTER_FROM = 2000;
const INTRO_COUNTER = { start: 150, duration: 1700 };
// La línea sale en cuanto el contador se lee en su año final (cuando le falta
// menos de este margen para llegar), sin esperar a que termine de asentarse.
const INTRO_ARRIVAL_MARGIN = 0.1;
// Primero aparece la marca del primer año; un instante después, la línea
// horizontal crece desde ella hasta el borde de la pantalla.
const INTRO_LINE_DELAY = 280;
const INTRO_LINE_DURATION = 1300;
// La primera tarjeta se despliega mientras la línea termina de crecer.
const INTRO_CARDS_DELAY = 1000;

// Momento (en ms) en que el contador se lee en el año final. Inverso de la
// curva de la cuenta (easeOutQuart).
function getCounterArrivalMs(targetYear: number) {
  const distance = Math.max(
    INTRO_ARRIVAL_MARGIN,
    targetYear - INTRO_COUNTER_FROM
  );
  const progress = 1 - Math.pow(INTRO_ARRIVAL_MARGIN / distance, 1 / 4);
  return INTRO_COUNTER.start + INTRO_COUNTER.duration * progress;
}

function easeOutQuart(value: number) {
  return 1 - Math.pow(1 - value, 4);
}

function easeInOutCubic(value: number) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function getIntroProgress(
  elapsed: number,
  { start, duration }: { start: number; duration: number },
  ease: (value: number) => number = easeOutQuart
) {
  return ease(Math.min(1, Math.max(0, (elapsed - start) / duration)));
}

// Línea de tiempo de dos carriles.
// Escritorio: una línea limpia con solo los años, medidos con escala de tiempo
// real (con el tramo sin experiencia profesional comprimido). Empieza en el
// primer trabajo, en el centro de la pantalla, y avanza con el scroll; la etapa
// que dura mientras el centro pasa por ahí se abre en una tarjeta fija
// (profesional arriba de la línea, académico abajo). El encabezado de la página
// queda dentro del área fija para que título, botones y línea se vean sin bajar.
// Móvil: columnas por año, de arriba hacia abajo.
type JourneyTimelineProps = {
  header: ReactNode;
};

export function JourneyTimeline({ header }: JourneyTimelineProps) {
  const {
    sectionRef,
    viewportRef,
    trackRef,
    progress,
    shift,
    rootFontSize,
    viewportWidth,
    mobileFocusedYear,
    scrollToAxis
  } = useJourneyScroll(journeyContent.firstYear, YEAR_SNAP_POINTS_REM);
  const introElapsed = useJourneyIntro();
  const { pinnedId, handleTogglePin } = useStageSelection();
  const { stages, skipLabel, progressLabel } = journeyContent;

  const professionalStages = stages.filter(
    stage => stage.lane === 'professional'
  );
  const academicStages = stages.filter(stage => stage.lane === 'academic');

  // Escritorio: punto de la línea que está en el centro de la pantalla.
  const axisWidthRem = getAxisWidthRem();
  // Se limita al ancho de la línea: al medir en px puede sobrar una fracción.
  const centerRem = Math.min(
    axisWidthRem,
    Math.max(0, (progress * shift) / rootFontSize)
  );
  const axisYear = getYearAtRem(centerRem);
  const activeProfessional = pickActiveProfessional(
    professionalStages,
    centerRem
  );
  const activeAcademic = pickActiveAcademic(academicStages, centerRem);
  // Entrada: el contador gira de forma continua hasta el año actual; en
  // cuanto se lee ese año, la línea sale y enciende los años a su paso.
  const counterIntro = getIntroProgress(introElapsed, INTRO_COUNTER);
  const counterValue =
    INTRO_COUNTER_FROM + (axisYear - INTRO_COUNTER_FROM) * counterIntro;
  const counterArrivalMs = getCounterArrivalMs(axisYear);
  // La línea crece a un ritmo visible solo por la parte que se ve en
  // pantalla (del inicio hasta el borde derecho); el resto, fuera de la vista,
  // se completa al final de golpe.
  const lineGrowth = getIntroProgress(
    introElapsed,
    {
      start: counterArrivalMs + INTRO_LINE_DELAY,
      duration: INTRO_LINE_DURATION
    },
    easeInOutCubic
  );
  const visibleReachRem = Math.min(
    axisWidthRem,
    centerRem + viewportWidth / rootFontSize / 2 + 2
  );
  const lineFrontRem =
    lineGrowth >= 1 ? axisWidthRem : visibleReachRem * lineGrowth;
  const lineIntro = lineFrontRem / axisWidthRem;
  const areCardsReady = introElapsed >= counterArrivalMs + INTRO_CARDS_DELAY;
  const academicSlots = useStableSlots(areCardsReady ? activeAcademic : [], 2);

  // Valores que cambian con el scroll: se pasan al CSS como variables.
  const scrollStyle = {
    '--journey-shift': `${shift}px`,
    '--journey-progress': progress
  } as CSSProperties;

  return (
    <section
      ref={sectionRef}
      aria-label={journeyContent.title}
      className="journey"
      style={scrollStyle}
    >
      <a href="#journey-end" className="journey__skip">
        {skipLabel}
      </a>

      <div ref={viewportRef} className="journey__viewport">
        <div className="journey__header">{header}</div>

        {/* Escritorio */}
        <div className="journey__stage">
          {/* Año grande: fijo en la mitad izquierda, a la altura de la línea,
              donde nunca lo tapan las tarjetas */}
          <span className="journey__backdrop" aria-hidden="true">
            <JourneyYearCounter
              value={counterValue}
              fromYear={INTRO_COUNTER_FROM}
              isLive={counterIntro >= 1}
            />
          </span>

          <div ref={trackRef} className="journey-axis-track">
            <div
              className="journey-axis"
              style={
                {
                  width: `${axisWidthRem}rem`,
                  '--intro-line': lineIntro
                } as CSSProperties
              }
            >
              <div
                className="journey-axis__line"
                role="progressbar"
                aria-label={progressLabel}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress * 100)}
              >
                <div className="journey-axis__fill" />
              </div>

              {/* Chispa que dibuja la línea al cargar */}
              {lineIntro > 0 && lineIntro < 1 && (
                <span className="journey-axis__spark" aria-hidden="true" />
              )}

              {/* Punta de la línea: un punto en el centro de la pantalla */}
              {lineIntro >= 1 && (
                <span className="journey-axis__head" aria-hidden="true" />
              )}

              {journeyYears.map(year => {
                const tickRem = getYearStartRem(year);
                // El primer año aparece cuando el contador llega a él; cada
                // año siguiente, solo cuando la línea llega a su punto.
                const isLit =
                  introElapsed >= counterArrivalMs &&
                  lineFrontRem >= tickRem - 0.1;
                // Qué tan cerca está el año del centro: la marca crece al
                // acercarse y vuelve a su tamaño al alejarse.
                const nearness = Math.max(
                  0,
                  1 - Math.abs(tickRem - centerRem) / TICK_REACH_REM
                );
                return (
                  <span
                    key={year}
                    className={cn(
                      'journey-axis__tick',
                      isLit && 'journey-axis__tick--lit',
                      year === axisYear && 'journey-axis__tick--focused'
                    )}
                    style={
                      {
                        left: `${tickRem}rem`,
                        '--tick-nearness': nearness
                      } as CSSProperties
                    }
                    aria-hidden="true"
                  >
                    <span className="journey-axis__tick-mark" />
                    <span className="journey-axis__tick-label">{year}</span>
                  </span>
                );
              })}

              <div className="journey-axis__closing">
                <Link
                  href={journeyContent.endHref}
                  className="button button--default button--lg"
                  onFocus={() => scrollToAxis(axisWidthRem * rootFontSize)}
                >
                  {journeyContent.endLink}
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjetas fijas en el centro de la pantalla. Se despliegan desde
              la línea, cambian su contenido rodando y se recogen al quedar
              vacías. Lo académico tiene dos lugares (en 2023 coinciden dos). */}
          <div className="journey__cards" aria-live="polite">
            <div className="journey__cards-group journey__cards-group--professional">
              <JourneyLaneSlot
                stage={areCardsReady ? (activeProfessional ?? null) : null}
                align="center"
              />
            </div>
            <div className="journey__cards-group journey__cards-group--academic">
              {academicSlots.map((stage, slot) => (
                <JourneyLaneSlot
                  key={slot}
                  stage={stage}
                  align={slot === 0 ? 'end' : 'start'}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Móvil: la línea a la izquierda y todas las tarjetas a la derecha */}
        <div className="journey__mobile">
          <div
            className="journey__line"
            role="progressbar"
            aria-label={progressLabel}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
          >
            <div className="journey__line-fill" />
          </div>

          {journeyYears.map((year, index) => {
            const yearStages = stages.filter(stage => stage.startYear === year);
            const hasOpenStage = yearStages.some(
              stage => stage.id === pinnedId
            );
            const isFocused = year === mobileFocusedYear;

            return (
              <div
                key={year}
                data-year={year}
                style={{ '--row-index': index } as CSSProperties}
                className={cn(
                  'journey-year',
                  isFocused && 'journey-year--focused',
                  hasOpenStage && 'journey-year--open',
                  year <= mobileFocusedYear && 'journey-year--reached'
                )}
              >
                <span className="journey-year__dot" aria-hidden="true" />
                <h2 className="journey-year__label">{year}</h2>

                {yearStages.length > 0 && (
                  <div className="journey-year__cards">
                    {yearStages.map(stage => (
                      <JourneyStageCard
                        key={stage.id}
                        stage={stage}
                        isPinned={stage.id === pinnedId}
                        onTogglePin={handleTogglePin}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
