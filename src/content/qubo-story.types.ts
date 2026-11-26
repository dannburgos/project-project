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
  // Columna que se resalta (la de Pulso en las comparaciones)
  highlightColumn?: number;
};

// Encabezado de un capítulo: número, eyebrow, titular y bajada
export type QuboHead = {
  number: string;
  eyebrow: string;
  title: string;
  lead?: string;
};

export type QuboSection = {
  id: string;
  number: string;
  name: string;
};

export type QuboLabels = {
  navigation: string;
  menu: string;
  pending: string;
  pendingNote: string;
  note: string;
  open: string;
  sources: string;
  limitations: string;
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
  number: string;
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
  gap: readonly QuboItem[];
  otherReferences: string;
  hypothesesLabel: string;
  hypotheses: readonly QuboHypothesis[];
  hypothesisLabels: {
    signal: string;
    evidence: string;
    decision: string;
  };
  methodsLabel: string;
  methods: QuboTable;
  questionsLabel: string;
  questions: readonly string[];
  findingsLabel: string;
  findingsFormat: readonly string[];
};

export type QuboPersona = {
  name: string;
  role: string;
  hypothesisTag: string;
  facts: readonly QuboFact[];
};

// 04 · Usuario
export type QuboUser = {
  head: QuboHead;
  primary: QuboFact;
  secondary: QuboFact;
  jobLabel: string;
  job: string;
  dimensions: readonly QuboItem[];
  hiresLabel: string;
  hires: string;
  persona: QuboPersona;
  unknownLabel: string;
  unknown: readonly string[];
};

export type QuboPrinciple = {
  number: string;
  title: string;
  meaning: string;
  discards: string;
  where: string;
  from: string;
};

// 05 · Estrategia y principios
export type QuboStrategy = {
  head: QuboHead;
  valueLabel: string;
  value: string;
  whyLabel: string;
  why: readonly QuboItem[];
  earnLabel: string;
  earn: readonly QuboItem[];
  northStarLabel: string;
  northStar: string;
  rulesLabel: string;
  rulesNote: string;
  rules: QuboTable;
  risksLabel: string;
  risks: readonly QuboItem[];
  tensionLabel: string;
  tension: string;
  outLabel: string;
  out: readonly string[];
  cycleLabel: string;
  cycle: readonly string[];
  principlesHead: QuboHead;
  principles: readonly QuboPrinciple[];
  principleLabels: {
    discards: string;
    where: string;
    from: string;
  };
};

export type QuboOption = {
  label: string;
  text: string;
  isChosen?: boolean;
};

export type QuboDecision = {
  number: string;
  tag: string;
  title: string;
  options: readonly QuboOption[];
  why: string;
  assume: string;
  validate: string;
  extras?: readonly QuboFact[];
};

// 06 · Decisiones clave
export type QuboDecisions = {
  head: QuboHead;
  decisions: readonly QuboDecision[];
  labels: {
    options: string;
    chosen: string;
    why: string;
    assume: string;
    validate: string;
  };
};

export type QuboMoment = {
  number: string;
  name: string;
  tagline: string;
  steps: readonly string[];
  branches?: readonly {
    condition: string;
    steps: readonly string[];
  }[];
};

// 07 · Flujos y arquitectura
export type QuboFlows = {
  head: QuboHead;
  moments: readonly QuboMoment[];
  edgeLabel: string;
  edge: QuboTable;
  architectureLabel: string;
  architectureLead: string;
  tabs: QuboTable;
  architectureWhy: string;
  internalLabel: string;
  internal: readonly string[];
  visual: QuboVisual;
};

export type QuboScreen = {
  number: string;
  name: string;
  solves: string;
  micro: string;
  level: 'A' | 'B';
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

export type QuboScreenMoment = {
  name: string;
  tagline: string;
  screens: readonly QuboScreen[];
};

// 08 · Diseño final
export type QuboDesign = {
  head: QuboHead;
  levelsLabel: string;
  levels: readonly QuboItem[];
  moments: readonly QuboScreenMoment[];
  screenLabels: {
    solves: string;
    micro: string;
    levelA: string;
    levelB: string;
  };
  heroLabel: string;
  heroLead: string;
  heroes: readonly QuboHeroScreen[];
  hotspotHint: string;
  edgeLabel: string;
  edge: readonly string[];
  supportLabel: string;
  support: readonly string[];
  total: string;
  priority: string;
};

export type QuboSwatch = {
  name: string;
  hex: string;
  use: string;
  // Color del texto sobre el muestrario, para que se lea
  onColor: string;
};

// 09 · Mini design system y accesibilidad
export type QuboSystem = {
  head: QuboHead;
  baseLabel: string;
  base: readonly QuboSwatch[];
  addedLabel: string;
  addedLead: string;
  added: readonly QuboSwatch[];
  limeLabel: string;
  lime: string;
  limeRule: string;
  contrastsLabel: string;
  contrasts: QuboTable;
  adjustmentsLabel: string;
  adjustments: QuboTable;
  typeLabel: string;
  typeSample: string;
  typeSampleNote: string;
  typeRules: readonly string[];
  shapeLabel: string;
  shape: readonly QuboItem[];
  iconsLabel: string;
  icons: string;
  componentsLabel: string;
  components: QuboTable;
  accessibilityLabel: string;
  accessibility: readonly QuboItem[];
};

// 10 · Validación, impacto y aprendizajes
export type QuboValidation = {
  head: QuboHead;
  testLabel: string;
  test: readonly QuboFact[];
  tasksLabel: string;
  tasks: QuboTable;
  rulesLabel: string;
  rules: QuboTable;
  planBLabel: string;
  planB: string;
  iterationsLabel: string;
  iterations: QuboTable;
  iterationsHint: string;
  metricsLabel: string;
  northStarLabel: string;
  northStar: string;
  northStarWhy: string;
  stagesLabel: string;
  stages: QuboTable;
  protectionLabel: string;
  protection: QuboTable;
  impactLabel: string;
  businessLabel: string;
  business: readonly string[];
  merchantLabel: string;
  merchant: readonly string[];
  eventsLabel: string;
  events: readonly string[];
  measureNote: string;
};

export type QuboLink = {
  title: string;
  url: string;
};

export type QuboLearnings = {
  head: QuboHead;
  learningsLabel: string;
  learningsFormat: readonly string[];
  differentLabel: string;
  differentHint: string;
  nextLabel: string;
  nextLead: string;
  next: QuboTable;
  aiLabel: string;
  ai: QuboTable;
  notDelegatedLabel: string;
  notDelegated: string;
  sourcesLabel: string;
  sources: readonly QuboLink[];
  limitationsLabel: string;
  limitations: readonly string[];
  closing: string;
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
  decisions: QuboDecisions;
  flows: QuboFlows;
  design: QuboDesign;
  system: QuboSystem;
  validation: QuboValidation;
  learnings: QuboLearnings;
};
