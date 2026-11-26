// Contenido del caso Pulso by Qubo Bank. Todo es serializable: la página
// (servidor) se lo pasa a los capítulos como props. El texto completo y las
// fuentes están en .claude/knowledge/qubo-bank/qubo-bank-pulso-caso-de-estudio.md

// Imagen del caso: mientras no exista `src`, se muestra una caja gris con la
// etiqueta que dice qué imagen va ahí
export type QuboVisual = {
  label: string;
  src?: string;
};

export type QuboFact = {
  label: string;
  value: string;
};

export type QuboItem = {
  title: string;
  text?: string;
};

export type QuboTable = {
  columns: readonly string[];
  rows: readonly (readonly string[])[];
};

// Encabezado de un capítulo: número, eyebrow, titular y bajada
export type QuboHead = {
  number: string;
  eyebrow: string;
  // Sin título, el capítulo se anuncia solo con su eyebrow (y lo lee el lector de pantalla)
  title?: string;
  lead?: string;
};

export type QuboSection = {
  id: string;
  number: string;
  name: string;
  // Id del capítulo del que cuelga, si es un sub-capítulo (Usuario, dentro de Research)
  parentId?: string;
};

export type QuboLabels = {
  navigation: string;
  menu: string;
};

export type QuboCover = {
  eyebrow: string;
  title: string;
  byline: string;
  tagline: string;
  visual: QuboVisual;
};

// 01 · Resumen y oportunidad
export type QuboOpportunity = {
  head: QuboHead;
  statement: string;
  opportunityLabel: string;
  opportunity: string;
};

// 02 · El problema, replanteado
export type QuboProblem = {
  head: QuboHead;
  insightLabel: string;
  insight: string;
  hypothesisNote: string;
  hmwLabel: string;
  hmw: string;
  visual: QuboVisual;
};

export type QuboHypothesis = {
  title: string;
  signal: string;
  evidence: string;
  decision: string;
  status: string;
};

// 03 · Research
export type QuboResearch = {
  head: QuboHead;
  comparisonLabel: string;
  comparison: QuboTable;
  hypothesesLabel: string;
  hypothesis: QuboHypothesis;
  hypothesisLabels: {
    signal: string;
    evidence: string;
    decision: string;
  };
};

// Rasgo de la persona, dicho en primera persona
export type QuboPersonaTrait = {
  label: string;
  text: string;
};

export type QuboPersona = {
  name: string;
  role: string;
  photo: QuboVisual;
  quote: string;
  traits: readonly QuboPersonaTrait[];
};

export type QuboUser = {
  head: QuboHead;
  persona: QuboPersona;
};

// 05 · Estrategia y principios
// Paso del ciclo del negocio, con la decisión de diseño que lo respalda
export type QuboCycleStep = {
  title: string;
  text: string;
  decision: string;
};

export type QuboStrategy = {
  head: QuboHead;
  valueLabel: string;
  value: string;
  earnLabel: string;
  decisionLabel: string;
  earn: readonly QuboCycleStep[];
};

// Nodo del mapa de la app. `kind` dice cómo interviene Pulso: nuevo con
// Pulso, existente que Pulso toca, o sin cambios.
export type QuboNodeKind = 'new' | 'touch' | 'plain';

export type QuboSiteNode = {
  label: string;
  kind: QuboNodeKind;
  screen?: string;
};

export type QuboSiteGroup = {
  label?: string;
  nodes: readonly QuboSiteNode[];
};

export type QuboSiteBranch = {
  node: QuboSiteNode;
  groups: readonly QuboSiteGroup[];
};

// 06 · Arquitectura de la información
export type QuboArchitecture = {
  head: QuboHead;
  root: string;
  branches: readonly QuboSiteBranch[];
  legendLabel: string;
  legend: Record<QuboNodeKind, string>;
};

// Camino alterno que cuelga debajo de un paso (un error, un rechazo…)
export type QuboFlowBranch = {
  steps: readonly QuboFlowStep[];
  // Si vuelve a un paso anterior de la misma fila: cuántas columnas atrás
  loopBack?: number;
  // A dónde lleva al terminar, cuando no se dibuja el regreso
  goes?: string;
};

// Paso del user flow, con la pantalla donde se ve
export type QuboFlowStep = {
  label: string;
  screens?: string;
  note?: string;
  isStart?: boolean;
  branch?: QuboFlowBranch;
};

export type QuboFlowStage = {
  name: string;
  tagline: string;
  steps: readonly QuboFlowStep[];
};

// 07 · User flow
export type QuboUserFlow = {
  head: QuboHead;
  stages: readonly QuboFlowStage[];
};

export type QuboHotspot = {
  // Posición del punto dentro de la imagen, en porcentaje
  x: number;
  y: number;
  title: string;
  text: string;
};

export type QuboHeroScreen = {
  number: string;
  tag: string;
  name: string;
  principle: string;
  visual: QuboVisual;
  hotspots: readonly QuboHotspot[];
};

// 09 · Prototipo: las pantallas héroe, con puntos que explican cada parte
export type QuboPrototype = {
  head: QuboHead;
  heroes: readonly QuboHeroScreen[];
  hotspotHint: string;
};

export type QuboSwatch = {
  name: string;
  hex: string;
  use: string;
};

export type QuboTypeStyle = {
  name: string;
  sample: string;
  spec: string;
};

export type QuboSwatchGroup = {
  title: string;
  swatches: readonly QuboSwatch[];
};

export type QuboIconId =
  | 'store'
  | 'wallet'
  | 'qr'
  | 'sales'
  | 'percent'
  | 'receipt'
  | 'calendar'
  | 'shield'
  | 'chat'
  | 'bell'
  | 'user'
  | 'help';

export type QuboOption = {
  id: string;
  name: string;
};

export type QuboFieldState = 'empty' | 'focus' | 'filled' | 'error';

export type QuboFieldSample = {
  state: QuboFieldState;
  caption: string;
  value: string;
  message: string;
};

export type QuboScreenState = {
  caption: string;
  title: string;
  text: string;
  action?: string;
};

export type QuboSystemFoundations = {
  title: string;
  color: {
    title: string;
    note: string;
    groups: readonly QuboSwatchGroup[];
  };
  type: {
    title: string;
    family: string;
    weights: string;
    steps: readonly QuboTypeStyle[];
  };
  shape: {
    title: string;
    spacingTitle: string;
    spacing: readonly number[];
    radiusTitle: string;
    radii: readonly QuboFact[];
    shadowTitle: string;
    shadows: readonly QuboFact[];
  };
  icons: {
    title: string;
    icons: readonly { id: QuboIconId; name: string }[];
  };
  motion: {
    title: string;
    rules: readonly (QuboOption & { spec: string })[];
  };
};

export type QuboSystemComponents = {
  title: string;
  buttons: {
    title: string;
    label: string;
    variants: readonly QuboOption[];
    states: readonly QuboOption[];
  };
  fields: {
    title: string;
    label: string;
    placeholder: string;
    samples: readonly QuboFieldSample[];
  };
  cards: {
    title: string;
    pulse: { label: string; amount: string; progress: number; note: string };
    offer: {
      tag: string;
      rows: readonly QuboFact[];
      note: string;
    };
    sale: { title: string; date: string; amount: string; tag: string };
  };
  navigation: {
    title: string;
    back: string;
    header: string;
    step: string;
    stepCount: number;
    currentStep: number;
    tabs: readonly { id: QuboIconId; name: string }[];
  };
  feedback: {
    title: string;
    toast: { caption: string; text: string };
    banner: { caption: string; text: string; action: string };
    modal: {
      caption: string;
      title: string;
      text: string;
      confirm: string;
      dismiss: string;
    };
    sheet: { caption: string; title: string; text: string; action: string };
  };
  screens: {
    title: string;
    states: readonly QuboScreenState[];
  };
};

// 07 · Sistema de diseño: la app es en modo oscuro. Mismas categorías y
// cantidad de elementos que el de PetRide.
export type QuboSystem = {
  head: QuboHead;
  foundations: QuboSystemFoundations;
  components: QuboSystemComponents;
};

export type QuboStory = {
  sections: readonly QuboSection[];
  labels: QuboLabels;
  cover: QuboCover;
  opportunity: QuboOpportunity;
  problem: QuboProblem;
  research: QuboResearch;
  user: QuboUser;
  strategy: QuboStrategy;
  architecture: QuboArchitecture;
  userFlow: QuboUserFlow;
  system: QuboSystem;
  prototype: QuboPrototype;
};
