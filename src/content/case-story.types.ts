// Contenido de un caso contado como recorrido: un escenario fijo donde cada
// gesto de scroll trae el siguiente módulo (en celular, todo en columna).
// Cada proyecto arma el suyo con su marca; Planti es el primero.

import type { CaseFact } from '@/content/case-study.types';

export type CaseStoryLabeledText = {
  label: string;
  text: string;
};

export type CaseStoryNumberedText = {
  number: string;
  title: string;
  text: string;
};

export type CaseStoryFriction = {
  number: string;
  title: string;
  question: string;
  // Qué la provoca, en una línea
  text: string;
  // Cómo la vive el perfil, con su propia voz (llega como un mensaje)
  voice: string;
};

export type CaseStoryApp = {
  name: string;
  focus: string;
  strengths: readonly string[];
  gaps: readonly string[];
};

export type CaseStoryPillar = {
  number: string;
  label: string;
  question: string;
  items: readonly string[];
};

export type CaseStoryNavigationItem = {
  name: string;
  description: string;
};

// Pantalla de la lluvia del prototipo: las principales van grandes y al frente
export type CaseStoryScreen = {
  label: string;
  isMain?: boolean;
};

export type CaseStory = {
  // Nombres de las secciones, en el orden del recorrido (el contador)
  sections: readonly string[];
  intro: {
    name: string;
    tagline: string;
    headline: string;
    text: string;
    facts: readonly CaseFact[];
  };
  respiteLabel: string;
  problem: {
    headline: string;
    known: CaseStoryLabeledText;
    done: CaseStoryLabeledText;
    frictionsLabel: string;
    frictions: readonly CaseStoryFriction[];
    // Nombre de quien escribe en el chat de las fricciones
    voiceName: string;
    challenge: string;
    references: readonly string[];
  };
  user: {
    quote: string;
    name: string;
    details: string;
    traits: readonly CaseStoryLabeledText[];
    findingsLabel: string;
    findings: readonly CaseStoryNumberedText[];
    imageLabel: string;
  };
  benchmark: {
    title: string;
    strengthsLabel: string;
    gapsLabel: string;
    apps: readonly CaseStoryApp[];
    findingsLabel: string;
    findings: readonly string[];
    closing: string;
  };
  concept: {
    idea: string;
    subtitle: string;
    logoLabel: string;
    capabilitiesTitle: string;
    pillars: readonly CaseStoryPillar[];
    navigationTitle: string;
    navigation: readonly CaseStoryNavigationItem[];
  };
  flows: {
    title: string;
    imageLabel: string;
    items: readonly CaseStoryNumberedText[];
  };
  prototype: {
    title: string;
    src: string;
    screens: readonly CaseStoryScreen[];
  };
};
