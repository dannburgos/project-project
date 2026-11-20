'use client';

import { SonoArrowMarker } from '@/components/atoms/sono-arrow-marker';
import { SonoSlideNav } from '@/components/molecules/sono-slide-nav';
import type {
  SonoFlowNodeKind,
  SonopizzaStory
} from '@/content/sonopizza-story.types';
import { useSonoSlides } from '@/hooks/use-sono-slides';
import { FLOW_SLIDES_MOTION } from '@/lib/case-story/sonopizza-flows';
import { cn } from '@/lib/utils';
import { formatSlidePanelId } from '@/utils/slide-ids.util';

// Prefijo de los ids de pestañas y diagramas
const ID_PREFIX = 'sono-flow';

const NODE_KIND_CLASS: Record<SonoFlowNodeKind, string> = {
  start: 'sono-flowmap__node--start',
  step: 'sono-flowmap__node--step',
  decision: 'sono-flowmap__node--decision',
  alt: 'sono-flowmap__node--alt',
  end: 'sono-flowmap__node--end'
};

type SonoFlowMapsProps = {
  flows: SonopizzaStory['flows'];
};

// Flujos principales de Sonopizza: un diagrama por flujo, uno encima de
// otro. Al entrar a la escena se revela el primero (lo anima el escenario) y los
// demás se ven con las flechas o las pestañas; el scroll sigue a la escena
// siguiente. El cambio entre flujos lo arma useSonoSlides con
// FLOW_SLIDES_MOTION.
export function SonoFlowMaps({ flows }: SonoFlowMapsProps) {
  const { ref, current, goTo, handleNext, handlePrevious, handleNavKeyDown } =
    useSonoSlides<HTMLDivElement>(flows.items.length, FLOW_SLIDES_MOTION);

  return (
    <div ref={ref} className="sono-flowmaps__body">
      <div className="sono-flowmaps__head" data-sono-in="0">
        <h2 className="sono-display sono-display--md">{flows.title}</h2>
        <SonoSlideNav
          idPrefix={ID_PREFIX}
          titles={flows.items.map(flow => flow.title)}
          current={current}
          label={flows.navLabel}
          previousLabel={flows.previousLabel}
          nextLabel={flows.nextLabel}
          isDark
          onSelect={goTo}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onKeyDown={handleNavKeyDown}
        />
      </div>
      <div className="sono-flowmaps__stage">
        {flows.items.map((flow, index) => (
          <section
            key={flow.number}
            id={formatSlidePanelId(ID_PREFIX, index)}
            className="sono-flowmap"
            aria-labelledby={`${ID_PREFIX}-title-${index}`}
            data-flow-map={index}
          >
            <div className="sono-flowmap__intro" data-flow-intro>
              <span className="sono-flowmap__number">{flow.number}</span>
              <div>
                <h3
                  id={`${ID_PREFIX}-title-${index}`}
                  className="sono-flowmap__title"
                >
                  {flow.title}
                </h3>
                <p className="sono-flowmap__goal">{flow.goal}</p>
              </div>
            </div>
            <div className="sono-flowmap__canvas">
              <svg
                className="sono-flowmap__lines"
                viewBox="0 0 1400 520"
                aria-hidden="true"
                data-flow-lines
              >
                <defs>
                  <SonoArrowMarker id={`${ID_PREFIX}-arrow-${index}`} />
                  <SonoArrowMarker
                    id={`${ID_PREFIX}-arrow-alt-${index}`}
                    className="sono-flowmap__arrow--alt"
                  />
                </defs>
                {flow.map.edges.map(edge => (
                  <g key={edge.path}>
                    <path
                      className={cn(
                        'sono-flowmap__edge',
                        edge.isAlt && 'sono-flowmap__edge--alt'
                      )}
                      d={edge.path}
                      markerEnd={
                        edge.isAlt
                          ? `url(#${ID_PREFIX}-arrow-alt-${index})`
                          : `url(#${ID_PREFIX}-arrow-${index})`
                      }
                    />
                    {edge.label && (
                      <text
                        className="sono-flowmap__edge-label"
                        x={edge.labelX}
                        y={edge.labelY}
                      >
                        {edge.label}
                      </text>
                    )}
                  </g>
                ))}
              </svg>
              <ol className="sono-flowmap__nodes">
                {flow.map.nodes.map(node => (
                  <li
                    key={node.label}
                    className="sono-flowmap__spot"
                    data-flow-spot
                    data-x={node.x}
                    data-y={node.y}
                    data-w={node.width}
                  >
                    <span
                      className={cn(
                        'sono-flowmap__node',
                        NODE_KIND_CLASS[node.kind]
                      )}
                      data-flow-node
                    >
                      <span className="sono-flowmap__label">{node.label}</span>
                      {node.detail && (
                        <span className="sono-flowmap__detail">
                          {node.detail}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
