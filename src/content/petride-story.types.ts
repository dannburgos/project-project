// Contenido del caso de PetRide, contado con scroll libre. Cada capítulo
// sale del documento de definición del producto.

export type PetLabeledText = {
  title: string;
  text: string;
};

export type PetListBlock = {
  title: string;
  items: readonly string[];
};

export type PetChapterHead = {
  ghost: string;
  title: string;
  // La bajada es opcional: hay capítulos que abren solo con el título
  lead?: string;
};

export type PetImage = {
  src: string;
  alt: string;
};

export type PetCollagePhoto = {
  // Etiqueta del espacio gris mientras la foto no llega
  label: string;
  image?: PetImage;
};

export type PetCompetitorLogo = {
  src: string;
  alt: string;
  tone: 'cabify' | 'uber' | 'indrive';
};

export type PetBenchmarkState = 'yes' | 'partial' | 'no' | 'unknown';

export type PetBenchmarkCell = {
  state: PetBenchmarkState;
  note: string;
};

export type PetBenchmarkRow = {
  feature: string;
  cells: readonly PetBenchmarkCell[];
};

export type PetJourneyStage = {
  name: string;
  emotion: string;
  opportunity: string;
};

export type PetProblem = {
  problem: string;
  opportunity: string;
};

export type PetActor = {
  name: string;
  role: string;
};

export type PetSiteGroup = {
  name: string;
  screens: readonly string[];
};

export type PetFlowNodeKind = 'step' | 'decision' | 'end';

export type PetFlowNode = {
  label: string;
  kind: PetFlowNodeKind;
  detail: string;
  // Camino alterno que sale de una decisión
  branch?: string;
};

export type PetUserFlow = {
  number: string;
  name: string;
  goal: string;
  nodes: readonly PetFlowNode[];
};

export type PetFlowScreen = {
  label: string;
  title: string;
  text: string;
};

export type PetrideStory = {
  // Nombres de los capítulos, para el submenú lateral
  sections: readonly string[];
  labels: {
    nav: string;
    navOpen: string;
    jumping: string;
    placeholder: string;
  };
  intro: {
    wordmark: string;
    tagline: string;
    facts: readonly PetLabeledText[];
    coverLabel: string;
    marquee: readonly string[];
    processTitle: string;
    process: readonly PetLabeledText[];
  };
  research: {
    head: PetChapterHead;
    problemLabel: string;
    problem: string;
    opportunity: PetLabeledText;
    method: PetLabeledText;
    benchmarkTitle: string;
    benchmarkLead: string;
    benchmarkFeatureLabel: string;
    competitors: readonly string[];
    // Logo de cada app, en el mismo orden que las columnas del benchmark
    competitorLogos: readonly PetCompetitorLogo[];
    benchmarkStates: Record<PetBenchmarkState, string>;
    benchmark: readonly PetBenchmarkRow[];
    findingsTitle: string;
    findings: readonly string[];
    // Espacios para fotos de mascotas dentro del collage de hallazgos
    findingsPhotos: readonly PetCollagePhoto[];
    // Retrato que cierra el collage, en el lugar de la flor
    findingsPortrait: PetImage;
    // Versión corta de la oportunidad para la tarjeta del collage
    findingsOpportunity: string;
  };
  user: {
    head: PetChapterHead;
    personaName: string;
    personaTags: readonly string[];
    personaBio: string;
    personaPhoto: PetImage;
    personaBlocks: readonly PetListBlock[];
    empathyTitle: string;
    empathy: readonly PetListBlock[];
    journeyTitle: string;
    journeyLabels: {
      emotion: string;
      opportunity: string;
    };
    journey: readonly PetJourneyStage[];
  };
  solution: {
    head: PetChapterHead;
    problemsTitle: string;
    problems: readonly PetProblem[];
    solutionLabel: string;
    solution: string;
    actorsTitle: string;
    actors: readonly PetActor[];
    goalsTitle: string;
    goals: readonly string[];
    mvpTitle: string;
    mvp: readonly string[];
  };
  architecture: {
    head: PetChapterHead;
    siteMapTitle: string;
    siteMapLead: string;
    siteMapCenter: string;
    siteMap: readonly PetSiteGroup[];
    flowsTitle: string;
    flowsLead: string;
    flowsHint: string;
    branchLabel: string;
    flows: readonly PetUserFlow[];
  };
  design: {
    head: PetChapterHead;
    wireframesTitle: string;
    wireframeCount: number;
    flowGhost: string;
    flowTitle: string;
    flowLead: string;
    flowScreens: readonly PetFlowScreen[];
    systemGhost: string;
    systemTitle: string;
    systemText: string;
  };
};
