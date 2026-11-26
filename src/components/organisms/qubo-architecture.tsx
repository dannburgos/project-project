import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboHead } from '@/components/molecules/qubo-head';
import type {
  QuboArchitecture as QuboArchitectureContent,
  QuboNodeKind,
  QuboSiteNode
} from '@/content/qubo-story.types';
import { cn } from '@/lib/utils';

type QuboArchitectureProps = {
  id: string;
  architecture: QuboArchitectureContent;
};

type SiteNodeProps = {
  node: QuboSiteNode;
  legend: Record<QuboNodeKind, string>;
  isHead?: boolean;
};

// Un nodo del mapa. El color dice cómo interviene Pulso; el texto oculto lo
// dice también para el lector de pantalla (el color nunca va solo).
function SiteNode({ node, legend, isHead }: SiteNodeProps) {
  return (
    <div
      className={cn(
        'qb-node',
        node.kind === 'new' && 'qb-node--new',
        node.kind === 'touch' && 'qb-node--touch',
        isHead && 'qb-node--head'
      )}
    >
      <span className="qb-node__label">{node.label}</span>
      {node.screen && <span className="qb-node__screen">{node.screen}</span>}
      {node.kind !== 'plain' && (
        <span className="qb-sr"> · {legend[node.kind]}</span>
      )}
    </div>
  );
}

// 06 · Arquitectura de la información. El mapa de toda la app del comercio
// (pestañas, campana, onboarding), con Pulso señalado: nuevo con Pulso, o
// existente que Pulso toca.
export function QuboArchitecture({ id, architecture }: QuboArchitectureProps) {
  const titleId = `${id}-title`;
  const { legend } = architecture;

  return (
    <QuboChapter id={id} titleId={titleId} tone="tint">
      <QuboHead head={architecture.head} titleId={titleId} />

      <ul className="qb-legend" aria-label={architecture.legendLabel}>
        {(['new', 'touch', 'plain'] as const).map(kind => (
          <li key={kind} className="qb-legend__item">
            <span
              className={cn(
                'qb-legend__swatch',
                kind === 'new' && 'qb-legend__swatch--new',
                kind === 'touch' && 'qb-legend__swatch--touch'
              )}
              aria-hidden="true"
            />
            {legend[kind]}
          </li>
        ))}
      </ul>

      <div className="qb-site" data-qb-reveal>
        <p className="qb-site__root">{architecture.root}</p>
        <ol className="qb-site__branches">
          {architecture.branches.map(branch => (
            <li key={branch.node.label} className="qb-site__branch">
              <SiteNode node={branch.node} legend={legend} isHead />
              {branch.groups.map(group => (
                <div key={group.label ?? 'main'} className="qb-site__group">
                  {group.label && (
                    <p className="qb-site__group-label">{group.label}</p>
                  )}
                  <ul className="qb-site__nodes">
                    {group.nodes.map(node => (
                      <li key={node.label}>
                        <SiteNode node={node} legend={legend} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </QuboChapter>
  );
}
