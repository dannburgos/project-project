import type { PetUserFlow } from '@/content/petride-story.types';
import { getFlowChartLayout } from '@/lib/case-story/flow-chart';
import { cn } from '@/lib/utils';

type PetFlowChartProps = {
  flows: readonly PetUserFlow[];
  hint: string;
  yesLabel: string;
  noLabel: string;
};

type FlowPathProps = {
  id: string;
  d: string;
  className: string;
  markerId: string;
  width: number;
  height: number;
};

// Una línea que el scroll puede "hacer crecer": el trazo real va tapado por una
// máscara cuyo trazo blanco se dibuja de a poco. Así crece igual una línea
// continua que una punteada, y la punta de la flecha aparece al final.
function FlowPath({
  id,
  d,
  className,
  markerId,
  width,
  height
}: FlowPathProps) {
  return (
    <g data-fc-line>
      <mask
        id={id}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={width}
        height={height}
      >
        <path
          className="pet-flowchart__reveal"
          d={d}
          pathLength={1}
          data-fc-reveal
        />
      </mask>
      <path
        className={className}
        d={d}
        markerEnd={`url(#${markerId})`}
        mask={`url(#${id})`}
      />
    </g>
  );
}

// Los tres user flows como diagramas de flujo verticales, uno junto al otro:
// cápsula de inicio, rectángulos, rombos para las decisiones, flechas con su
// "Sí" y "No", y el regreso de cada desvío. El diagrama es un dibujo; para
// lectores de pantalla va la misma información como lista.
export function PetFlowChart({
  flows,
  hint,
  yesLabel,
  noLabel
}: PetFlowChartProps) {
  return (
    <div
      className="pet-flowchart"
      role="group"
      aria-label={hint}
      data-pet-flowchart
    >
      {flows.map((flow, flowIndex) => {
        const layout = getFlowChartLayout(flow);
        const markerId = `pet-flow-arrow-${flowIndex}`;
        return (
          <figure key={flow.name} className="pet-flowchart__flow">
            <svg
              className="pet-flowchart__svg"
              viewBox={`0 0 ${layout.width} ${layout.height}`}
              aria-hidden="true"
            >
              <defs>
                <marker
                  id={markerId}
                  viewBox="0 0 8 8"
                  refX="7"
                  refY="4"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path className="pet-flowchart__head" d="M1 1 L7 4 L1 7" />
                </marker>
              </defs>
              <g data-fc-start>
                <rect
                  className="pet-flowchart__start"
                  x={layout.start.x}
                  y={layout.start.y}
                  width={layout.start.width}
                  height={layout.start.height}
                  rx={layout.start.height / 2}
                />
                <text
                  className="pet-flowchart__start-text"
                  x={layout.start.x + layout.start.width / 2}
                  y={layout.start.y + layout.start.height / 2 + 3.4}
                >
                  {layout.start.label}
                </text>
              </g>
              {layout.nodes.map((node, index) => {
                const cx = node.x + node.width / 2;
                const cy = node.y + node.height / 2;
                const branch = layout.branches.find(
                  item => item.nodeIndex === index
                );
                const yes = layout.yes.find(item => item.nodeIndex === index);
                return (
                  <g key={node.label} data-fc-step>
                    <FlowPath
                      id={`pet-flow-${flowIndex}-link-${index}`}
                      d={layout.links[index]}
                      className="pet-flowchart__link"
                      markerId={markerId}
                      width={layout.width}
                      height={layout.height}
                    />
                    <g data-fc-node>
                      {node.kind === 'decision' ? (
                        <path
                          className="pet-flowchart__decision"
                          d={`M${cx} ${node.y} L${node.x + node.width} ${cy} L${cx} ${node.y + node.height} L${node.x} ${cy} Z`}
                        />
                      ) : (
                        <rect
                          className={cn(
                            'pet-flowchart__step',
                            node.kind === 'end' && 'pet-flowchart__step--end'
                          )}
                          x={node.x}
                          y={node.y}
                          width={node.width}
                          height={node.height}
                          rx={5}
                        />
                      )}
                      <text
                        className={cn(
                          'pet-flowchart__label',
                          node.kind === 'decision' &&
                            'pet-flowchart__label--decision'
                        )}
                        x={cx}
                        y={cy + 3.3}
                      >
                        {node.label}
                      </text>
                    </g>
                    {yes && (
                      <text
                        className="pet-flowchart__tag"
                        x={yes.x}
                        y={yes.y}
                        data-fc-tag
                      >
                        {yesLabel}
                      </text>
                    )}
                    {branch && (
                      <g data-fc-branch>
                        <FlowPath
                          id={`pet-flow-${flowIndex}-alt-${index}`}
                          d={branch.arrow}
                          className="pet-flowchart__alt"
                          markerId={markerId}
                          width={layout.width}
                          height={layout.height}
                        />
                        <text
                          className="pet-flowchart__tag pet-flowchart__tag--center"
                          x={branch.noX}
                          y={branch.noY}
                          data-fc-tag
                        >
                          {noLabel}
                        </text>
                        <g data-fc-leaf>
                          <rect
                            className="pet-flowchart__leaf"
                            x={branch.x}
                            y={branch.y}
                            width={branch.width}
                            height={branch.height}
                            rx={5}
                          />
                          <text
                            className="pet-flowchart__leaf-text"
                            x={branch.x + branch.width / 2}
                            y={branch.y + branch.height / 2 + 2.8}
                          >
                            {branch.label}
                          </text>
                        </g>
                        {branch.back && (
                          <FlowPath
                            id={`pet-flow-${flowIndex}-back-${index}`}
                            d={branch.back}
                            className="pet-flowchart__alt"
                            markerId={markerId}
                            width={layout.width}
                            height={layout.height}
                          />
                        )}
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
            <figcaption className="sr-only">{flow.name}</figcaption>
            <ol className="sr-only">
              {flow.nodes.map(node => (
                <li key={node.label}>
                  {node.label}
                  {node.branch ? `. ${noLabel}: ${node.branch}` : ''}
                </li>
              ))}
            </ol>
          </figure>
        );
      })}
    </div>
  );
}
