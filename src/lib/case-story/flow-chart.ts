import type { PetFlowNode, PetUserFlow } from '@/content/petride-story.types';

// Diagrama de flujo de un user flow, en unidades de un lienzo SVG vertical:
// una cápsula de inicio, los pasos en rectángulos, las decisiones en rombos y,
// al lado de cada decisión, su desvío con la flecha que vuelve al paso donde
// se corrige. Todo se calcula aquí; el componente solo dibuja.

export const FLOW_CHART_WIDTH = 270;

const CENTER_X = 84;
const NODE_WIDTH = 132;
const NODE_HEIGHT = 26;
const DIAMOND_WIDTH = 140;
const DIAMOND_HEIGHT = 44;
const FIRST_Y = 78;
const PITCH = 58;
const START_Y = 22;
const LEAF_X = 170;
const LEAF_WIDTH = 96;
const LEAF_HEIGHT = 24;

export type FlowChartNode = {
  label: string;
  kind: PetFlowNode['kind'];
  x: number;
  y: number;
  width: number;
  height: number;
};

export type FlowChartBranch = {
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  // Flecha del rombo al desvío y, si lo hay, su regreso a un paso
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
  start: { label: string; x: number; y: number; width: number; height: number };
  nodes: FlowChartNode[];
  links: string[];
  yes: { x: number; y: number; nodeIndex: number }[];
  branches: FlowChartBranch[];
};

const isDecision = (node: PetFlowNode) => node.kind === 'decision';

function nodeSize(node: PetFlowNode) {
  return isDecision(node)
    ? { width: DIAMOND_WIDTH, height: DIAMOND_HEIGHT }
    : { width: NODE_WIDTH, height: NODE_HEIGHT };
}

export function getFlowChartLayout(flow: PetUserFlow): FlowChartLayout {
  const startWidth = Math.min(NODE_WIDTH + 24, flow.name.length * 6 + 36);
  const start = {
    label: flow.name,
    x: CENTER_X - startWidth / 2,
    y: START_Y - 13,
    width: startWidth,
    height: 26
  };

  const nodes: FlowChartNode[] = flow.nodes.map((node, index) => {
    const size = nodeSize(node);
    const y = FIRST_Y + index * PITCH;
    return {
      label: node.label,
      kind: node.kind,
      x: CENTER_X - size.width / 2,
      y: y - size.height / 2,
      ...size
    };
  });

  const centerY = (index: number) => nodes[index].y + nodes[index].height / 2;

  // Flechas que bajan de un paso al siguiente
  const links = nodes.map((node, index) => {
    const fromY =
      index === 0
        ? start.y + start.height
        : nodes[index - 1].y + nodes[index - 1].height;
    return `M${CENTER_X} ${fromY} L${CENTER_X} ${node.y}`;
  });

  const yes = flow.nodes.flatMap((node, index) =>
    isDecision(node) && index < nodes.length - 1
      ? [
          {
            x: CENTER_X + 6,
            y: nodes[index].y + nodes[index].height + 14,
            nodeIndex: index
          }
        ]
      : []
  );

  const branches = flow.nodes.flatMap((node, index) => {
    if (!node.branch) return [];
    const from = nodes[index];
    const cy = centerY(index);
    const leafX = LEAF_X;
    const leafCenterX = leafX + LEAF_WIDTH / 2;
    const tipX = from.x + from.width;
    const targetIndex = node.returnTo
      ? flow.nodes.findIndex(item => item.label === node.returnTo)
      : -1;
    let back: string | null = null;
    if (targetIndex >= 0) {
      const ty = centerY(targetIndex);
      const leafEdgeY = ty < cy ? cy - LEAF_HEIGHT / 2 : cy + LEAF_HEIGHT / 2;
      const targetRight = nodes[targetIndex].x + nodes[targetIndex].width;
      back = `M${leafCenterX} ${leafEdgeY} L${leafCenterX} ${ty} L${targetRight + 3} ${ty}`;
    }
    return [
      {
        label: node.branch,
        x: leafX,
        y: cy - LEAF_HEIGHT / 2,
        width: LEAF_WIDTH,
        height: LEAF_HEIGHT,
        arrow: `M${tipX} ${cy} L${leafX - 3} ${cy}`,
        back,
        noX: (tipX + leafX) / 2,
        noY: cy - 5,
        nodeIndex: index
      }
    ];
  });

  const last = nodes[nodes.length - 1];
  return {
    width: FLOW_CHART_WIDTH,
    height: last.y + last.height + 10,
    start,
    nodes,
    links,
    yes,
    branches
  };
}
