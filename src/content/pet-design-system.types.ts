// Sistema de diseño de la app de PetRide (modo claro). Se documenta dentro
// del caso, que es oscuro, en hojas claras que muestran la interfaz real.

export type PetDsSwatchId =
  | 'night'
  | 'indigo'
  | 'lime'
  | 'peri'
  | 'cloud'
  | 'ink'
  | 'hint'
  | 'border'
  | 'surface'
  | 'card'
  | 'lilac'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export type PetDsSwatch = {
  id: PetDsSwatchId;
  name: string;
  hex: string;
  use: string;
};

export type PetDsColorGroup = {
  title: string;
  swatches: readonly PetDsSwatch[];
};

export type PetDsTypeId =
  | 'display'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'label'
  | 'note';

export type PetDsTypeStep = {
  id: PetDsTypeId;
  name: string;
  spec: string;
};

export type PetDsToken = {
  name: string;
  value: string;
};

export type PetDsIconId =
  | 'paw'
  | 'dog'
  | 'cat'
  | 'pin'
  | 'car'
  | 'chat'
  | 'star'
  | 'bell'
  | 'clock'
  | 'shield'
  | 'route'
  | 'user';

export type PetDsIcon = {
  id: PetDsIconId;
  name: string;
};

export type PetDsMotionDemoId = 'press' | 'sheet' | 'arrival';

export type PetDsMotionDemo = {
  id: PetDsMotionDemoId;
  name: string;
  spec: string;
};

export type PetDsSheetHead = {
  title: string;
  note?: string;
};

export type PetDsButtonVariant = 'primary' | 'secondary' | 'ghost';
export type PetDsButtonState = 'default' | 'pressed' | 'disabled' | 'loading';

export type PetDsFieldState = 'empty' | 'focus' | 'filled' | 'error';

export type PetDsFieldSample = {
  state: PetDsFieldState;
  caption: string;
  value: string;
  message: string;
};

export type PetDsOverlayId = 'toast' | 'banner' | 'modal' | 'sheet';

// Los textos con {llaves} son plantillas: se llenan con fillTemplate
export type PetDesignSystem = {
  title: string;
  lead: string;
  groups: {
    foundations: string;
    components: string;
  };
  foundations: {
    color: PetDsSheetHead & {
      groups: readonly PetDsColorGroup[];
      copyLabel: string;
      copiedLabel: string;
    };
    type: PetDsSheetHead & {
      family: string;
      tryLabel: string;
      tryPlaceholder: string;
      steps: readonly PetDsTypeStep[];
    };
    shape: PetDsSheetHead & {
      spacingTitle: string;
      spacing: readonly number[];
      radiusTitle: string;
      radii: readonly PetDsToken[];
      shadowTitle: string;
      shadows: readonly PetDsToken[];
    };
    icons: PetDsSheetHead & { icons: readonly PetDsIcon[] };
    motion: PetDsSheetHead & {
      rules: readonly PetDsMotionDemo[];
    };
  };
  components: {
    buttons: PetDsSheetHead & {
      label: string;
      variants: readonly { id: PetDsButtonVariant; name: string }[];
      states: readonly { id: PetDsButtonState; name: string }[];
    };
    fields: PetDsSheetHead & {
      label: string;
      placeholder: string;
      samples: readonly PetDsFieldSample[];
      tryTitle: string;
      helper: string;
      submitLabel: string;
      requiredMessage: string;
      tooLongMessage: string;
      maxLength: number;
      savedMessage: string;
    };
    cards: PetDsSheetHead & {
      pet: { name: string; detail: string; tag: string };
      driver: { name: string; rating: string; vehicle: string; tag: string };
      trip: { route: string; date: string; price: string; tag: string };
    };
    navigation: PetDsSheetHead & {
      back: string;
      header: string;
      stepLabel: string;
      stepCount: number;
      previousLabel: string;
      nextLabel: string;
      tabs: readonly string[];
    };
    feedback: PetDsSheetHead & {
      screenTitle: string;
      screenText: string;
      triggers: readonly { id: PetDsOverlayId; label: string }[];
      closeLabel: string;
      toast: string;
      banner: string;
      modal: { title: string; text: string; confirm: string; dismiss: string };
      sheet: { title: string; text: string; action: string };
    };
    screens: PetDsSheetHead & {
      empty: { title: string; text: string; action: string };
      loading: { title: string; text: string };
      error: { title: string; text: string; action: string };
    };
  };
};
