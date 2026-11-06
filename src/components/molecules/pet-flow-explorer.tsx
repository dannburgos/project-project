'use client';

import { ArrowDownRight, CircleDot, Flag, GitFork } from 'lucide-react';

import type { PetUserFlow } from '@/content/petride-story.types';
import { usePetFlowExplorer } from '@/hooks/use-pet-flow-explorer';
import { cn } from '@/lib/utils';

type PetFlowExplorerProps = {
  flows: readonly PetUserFlow[];
  hint: string;
  branchLabel: string;
};

const NODE_ICON = {
  step: CircleDot,
  decision: GitFork,
  end: Flag
} as const;

// Los tres user flows como diagramas que se recorren: una pestaña por flujo,
// cada paso es un botón y al elegirlo se cuenta qué pasa en él. Las
// decisiones muestran su camino alterno debajo.
export function PetFlowExplorer({
  flows,
  hint,
  branchLabel
}: PetFlowExplorerProps) {
  const { flow, node, handleFlowChange, handleNodeSelect, handleTabKeyDown } =
    usePetFlowExplorer(flows.length);
  const current = flows[flow];
  const selected = current?.nodes[node];

  if (!current || !selected) return null;

  return (
    <div className="pet-flows">
      <div
        className="pet-flows__tabs"
        role="tablist"
        aria-label={hint}
        onKeyDown={handleTabKeyDown}
      >
        {flows.map((item, index) => (
          <button
            key={item.number}
            type="button"
            role="tab"
            id={`pet-flow-tab-${index}`}
            aria-selected={index === flow}
            aria-controls="pet-flow-panel"
            tabIndex={index === flow ? 0 : -1}
            className={cn(
              'pet-flows__tab',
              index === flow && 'pet-flows__tab--current'
            )}
            onClick={() => handleFlowChange(index)}
          >
            <span className="pet-flows__tab-number">{item.number}</span>
            {item.name}
          </button>
        ))}
      </div>

      <div
        id="pet-flow-panel"
        role="tabpanel"
        aria-labelledby={`pet-flow-tab-${flow}`}
        className="pet-flows__panel"
      >
        <p className="pet-flows__goal">{current.goal}</p>
        <ol key={current.number} className="pet-flows__track">
          {current.nodes.map((item, index) => {
            const Icon = NODE_ICON[item.kind];
            return (
              <li key={item.label} className="pet-flows__step">
                <button
                  type="button"
                  className={cn(
                    'pet-flows__node',
                    `pet-flows__node--${item.kind}`,
                    index === node && 'pet-flows__node--current'
                  )}
                  aria-pressed={index === node}
                  onClick={() => handleNodeSelect(index)}
                >
                  <Icon className="pet-flows__icon" aria-hidden="true" />
                  {item.label}
                </button>
                {item.branch && (
                  <span className="pet-flows__branch">
                    <ArrowDownRight
                      className="pet-flows__branch-icon"
                      aria-hidden="true"
                    />
                    <span>
                      {branchLabel}: {item.branch}
                    </span>
                  </span>
                )}
              </li>
            );
          })}
        </ol>
        <div className="pet-flows__detail" aria-live="polite">
          <div key={`${flow}-${node}`} className="pet-flows__detail-body">
            <p className="pet-flows__detail-title">{selected.label}</p>
            <p className="pet-flows__detail-text">{selected.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
