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
  title: string;
  // El título puede quedar solo para lectores de pantalla y para el salto del
  // menú, sin verse en la página
  hideTitle?: boolean;
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
  // Paso al que vuelve ese camino alterno (el nombre de otro paso del flujo)
  returnTo?: string;
};

export type PetUserFlow = {
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
    // Logo de PetRide, que acompaña al nombre en la portada
    logo: PetImage;
    tagline: string;
    facts: readonly PetLabeledText[];
    coverLabel: string;
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
  architecture: {
    head: PetChapterHead;
    siteMapTitle: string;
    siteMapCenter: string;
    siteMap: readonly PetSiteGroup[];
    flowsTitle: string;
    flowsLead: string;
    flowsHint: string;
    // Rótulos de las flechas que salen de una decisión
    flowYes: string;
    flowNo: string;
    flows: readonly PetUserFlow[];
  };
  design: {
    head: PetChapterHead;
    wireframesTitle: string;
    wireframeCount: number;
    flowTitle: string;
    flowScreens: readonly PetFlowScreen[];
    systemTitle: string;
    systemText: string;
  };
};
