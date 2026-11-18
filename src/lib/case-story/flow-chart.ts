import type { PetFlowNode, PetUserFlow } from '@/content/petride-story.types';

// Diagrama de flujo de un user flow en horizontal, en unidades de un lienzo
// SVG: arriba, el camino principal de izquierda a derecha (pasos en
// rectángulos, decisiones en rombos); abajo, el carril de desvíos, con el
// camino alterno de cada decisión justo debajo de ella y la flecha que vuelve
// al paso donde se corrige. Todo se calcula aquí; el componente solo dibuja.

// Ancho común: todos los flujos usan el mismo para que el texto se vea igual
export const FLOW_CHART_WIDTH = 1016;

const GAP = 22;
const STEP_WIDTH = 92;
const STEP_HEIGHT = 42;
const DIAMOND_WIDTH = 132;
const DIAMOND_HEIGHT = 68;
const MAIN_CENTER_Y = 40;
const LEAF_WIDTH = 112;
const LEAF_HEIGHT = 36;
const LEAF_Y = 124;
const PADDING_X = 2;
const BOTTOM = 14;
// Separación de las flechas que vuelven al mismo paso
const RETURN_SPREAD = 10;

export type FlowChartNode = {
  label: string;
  lines: string[];
  kind: PetFlowNode['kind'];
  x: number;
  y: number;
  width: number;
  height: number;
};

export type FlowChartBranch = {
  label: string;
  lines: string[];
  x: number;
  y: number;
  width: number;
  height: number;
  // Flecha de la decisión al desvío y, si lo hay, su regreso a un paso
  arrow: string;
  back: string | null;
  noX: number;
  noY: number;
  // Índice del paso (decisión) de donde sale
  nodeIndex: number;
};

export type FlowChartLayout = {
  width: number;
  height: number;
  nodes: FlowChartNode[];
  // Flecha que llega a cada paso desde el anterior (el primero no tiene)
  links: (string | null)[];
  yes: { x: number; y: number; nodeIndex: number }[];
  branches: FlowChartBranch[];
};

const isDecision = (node: PetFlowNode) => node.kind === 'decision';

function nodeSize(node: PetFlowNode) {
  return isDecision(node)
    ? { width: DIAMOND_WIDTH, height: DIAMOND_HEIGHT }
    : { width: STEP_WIDTH, height: STEP_HEIGHT };
}

// Parte el texto en hasta dos renglones, sin cortar palabras
function wrapLabel(label: string, maxChars: number) {
  const words = label.split(' ');
  const lines: string[] = [];
  let current = '';
  words.forEach(word => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });
  if (current) lines.push(current);
  return lines;
}

export function getFlowChartLayout(flow: PetUserFlow): FlowChartLayout {
  let cursor = PADDING_X;
  const nodes: FlowChartNode[] = flow.nodes.map(node => {
    const size = nodeSize(node);
    const placed = {
      label: node.label,
      lines: wrapLabel(node.label, isDecision(node) ? 10 : 12),
      kind: node.kind,
      x: cursor,
      y: MAIN_CENTER_Y - size.height / 2,
      ...size
    };
    cursor += size.width + GAP;
    return placed;
  });

  const centerX = (index: number) => nodes[index].x + nodes[index].width / 2;
  const bottomY = (index: number) => nodes[index].y + nodes[index].height;

  // Flechas horizontales de un paso al siguiente
  const links = nodes.map((node, index) =>
    index === 0
      ? null
      : `M${nodes[index - 1].x + nodes[index - 1].width} ${MAIN_CENTER_Y} L${node.x - 2} ${MAIN_CENTER_Y}`
  );

  const yes = flow.nodes.flatMap((node, index) =>
    isDecision(node) && index < nodes.length - 1
      ? [
          {
            x: nodes[index].x + nodes[index].width + GAP / 2,
            y: MAIN_CENTER_Y - 6,
            nodeIndex: index
          }
        ]
      : []
  );

  // Cuántas flechas vuelven a cada paso, para repartirlas sin encimarse
  const returnsByTarget = new Map<number, number[]>();
  flow.nodes.forEach((node, index) => {
    if (!node.branch || !node.returnTo) return;
    const target = flow.nodes.findIndex(item => item.label === node.returnTo);
    if (target < 0) return;
    returnsByTarget.set(target, [
      ...(returnsByTarget.get(target) ?? []),
      index
    ]);
  });

  const leafMidY = LEAF_Y + LEAF_HEIGHT / 2;
  const branches = flow.nodes.flatMap((node, index) => {
    if (!node.branch) return [];
    const cx = centerX(index);
    const leafX = cx - LEAF_WIDTH / 2;
    const targetIndex = node.returnTo
      ? flow.nodes.findIndex(item => item.label === node.returnTo)
      : -1;
    let back: string | null = null;
    if (targetIndex >= 0) {
      const sources = returnsByTarget.get(targetIndex) ?? [];
      const goesRight = centerX(targetIndex) > cx;
      const oppositeSide = sources.filter(
        source => centerX(source) > centerX(targetIndex) !== goesRight
      );
      // Con dos regresos al mismo paso, cada uno llega a un lado del centro
      const offset = oppositeSide.length > 0 ? RETURN_SPREAD : 0;
      const targetX = centerX(targetIndex) + (goesRight ? -offset : offset);
      const leafEdge = goesRight ? leafX + LEAF_WIDTH : leafX;
      back = `M${leafEdge} ${leafMidY} L${targetX} ${leafMidY} L${targetX} ${bottomY(targetIndex) + 3}`;
    }
    return [
      {
        label: node.branch,
        lines: wrapLabel(node.branch, 14),
        x: leafX,
        y: LEAF_Y,
        width: LEAF_WIDTH,
        height: LEAF_HEIGHT,
        arrow: `M${cx} ${bottomY(index)} L${cx} ${LEAF_Y - 3}`,
        back,
        noX: cx + 6,
        noY: (bottomY(index) + LEAF_Y) / 2 + 3,
        nodeIndex: index
      }
    ];
  });

  return {
    width: FLOW_CHART_WIDTH,
    height: LEAF_Y + LEAF_HEIGHT + BOTTOM,
    nodes,
    links,
    yes,
    branches
  };
}
