// Contenido del caso de Sonopizza, contado como recorrido por pasos. Cada
// módulo sigue el orden del documento maestro del proyecto.

export type SonoTextPart = {
  text: string;
  isStrong?: boolean;
};

export type SonoLabeledText = {
  title: string;
  text: string;
};

export type SonoFlow = {
  number: string;
  title: string;
  steps: readonly string[];
};

export type SonoSection = {
  title: string;
  items: readonly string[];
};

export type SonoSwatch = {
  name: string;
  hex: string;
};

export type SonoTypeface = {
  name: string;
  role: string;
  sample: string;
};

export type SonopizzaStory = {
  // Nombres de las secciones, para la navegación con cuadrados
  sections: readonly string[];
  cover: {
    eyebrow: string;
    wordmark: readonly string[];
    tagline: string;
    facts: readonly SonoLabeledText[];
    disclaimer: string;
    photoLabel: string;
    mascotAlt: string;
  };
  challenge: {
    number: string;
    name: string;
    title: string;
    context: SonoLabeledText;
    opportunity: SonoLabeledText;
    challengeLabel: string;
    challenge: string;
    goal: SonoLabeledText;
    scopeTitle: string;
    scope: readonly string[];
  };
  audit: {
    number: string;
    name: string;
    subtitle: string;
    title: string;
    // Cinco capturas: la primera es la principal (la del centro)
    captures: readonly string[];
    dimensions: readonly SonoLabeledText[];
    note: string;
  };
  benchmark: {
    subtitle: string;
    title: string;
    references: readonly string[];
    captureLabel: string;
    dimensionsTitle: string;
    dimensions: readonly string[];
    note: string;
  };
  synthesis: {
    subtitle: string;
    title: string;
    opportunities: readonly SonoLabeledText[];
    direction: string;
  };
  concept: {
    number: string;
    name: string;
    subtitle: string;
    verticalTitle: string;
    title: string;
    text: string;
    principlesTitle: string;
    principles: readonly string[];
    synthesis: readonly string[];
    photoLabel: string;
  };
  persona: {
    subtitle: string;
    name: string;
    portraitLabel: string;
    facts: readonly SonoLabeledText[];
    context: string;
    note: string;
  };
  journey: {
    subtitle: string;
    title: string;
    stages: readonly string[];
    note: string;
  };
  architecture: {
    subtitle: string;
    title: string;
    sections: readonly SonoSection[];
    navigation: string;
  };
  flows: {
    subtitle: string;
    title: string;
    items: readonly SonoFlow[];
    note: string;
  };
  visual: {
    number: string;
    name: string;
    title: string;
    personality: readonly string[];
    paletteTitle: string;
    palette: readonly SonoSwatch[];
    paletteNote: string;
    typeTitle: string;
    typefaces: readonly SonoTypeface[];
    brandTitle: string;
    logoLabel: string;
    mascotText: string;
    photographyTitle: string;
    photography: readonly string[];
  };
};
