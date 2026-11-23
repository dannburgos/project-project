// Contenido del caso del sistema de diseño (por ahora de ejemplo). Arriba, un
// mosaico de tarjetas que se arma al bajar (referencia: brand.dropbox.com);
// debajo, la documentación de cada tema.

export type DsTopicId =
  | 'color'
  | 'voice'
  | 'typography'
  | 'iconography'
  | 'spacing'
  | 'components'
  | 'motion'
  | 'accessibility';

export type DsTopic = {
  id: DsTopicId;
  group: string;
  name: string;
  summary: string;
};

export type DsSwatch = {
  name: string;
  hex: string;
  role: string;
};

export type DsTypeStep = {
  name: string;
  size: string;
  sample: string;
};

export type DsRule = {
  title: string;
  text: string;
};

export type DsDoDont = {
  isDo: boolean;
  label: string;
  text: string;
};

export type DsMotionToken = {
  name: string;
  value: string;
  use: string;
};

export type DesignSystemStory = {
  labels: {
    example: string;
    pending: string;
    topicsNav: string;
    goTo: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    hint: string;
    mark: string;
  };
  docsIntro: {
    title: string;
    text: string;
  };
  topics: readonly DsTopic[];
  color: { swatches: readonly DsSwatch[] };
  typography: { family: string; steps: readonly DsTypeStep[] };
  iconography: { names: readonly string[]; rules: readonly DsRule[] };
  spacing: { steps: readonly number[]; rules: readonly DsRule[] };
  components: {
    buttons: readonly string[];
    states: readonly string[];
    inputLabel: string;
    inputPlaceholder: string;
    inputHelp: string;
  };
  voice: { principles: readonly DsRule[]; examples: readonly DsDoDont[] };
  motion: { tokens: readonly DsMotionToken[] };
  accessibility: { rules: readonly DsRule[] };
};
