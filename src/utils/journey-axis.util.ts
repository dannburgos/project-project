import { journeyContent, type JourneyStage } from '@/content/journey';

// Escala de la línea de tiempo de escritorio. Todo se mide en rem para que
// el diseño se ajuste al tamaño de letra de la persona.

// Ancho de un mes de la línea.
export const MONTH_WIDTH_REM = 2.4;
// Ancho al que se comprime el tramo sin experiencia profesional.
export const GAP_WIDTH_REM = 12;
// Ancho mínimo durante el cual una etapa permanece abierta, aunque haya sido
// corta (por ejemplo, Di Paola duró 3 meses).
export const MIN_DWELL_REM = 18;

const { firstYear, lastYear } = journeyContent;

// Índice del inicio de un mes, contado desde enero del primer año.
function monthBoundary(year: number, month: number) {
  return (year - firstYear) * 12 + (month - 1);
}

// La línea empieza en el primer trabajo (julio de 2018), no en enero.
const AXIS_START_MONTH = monthBoundary(firstYear, 7);

// Tramo sin experiencia profesional: de junio de 2024 a marzo de 2026.
// Se comprime para que no alargue el recorrido.
const GAP_START_MONTH = monthBoundary(2024, 6);
const GAP_END_MONTH = monthBoundary(2026, 4);
const GAP_START_REM = GAP_START_MONTH * MONTH_WIDTH_REM;
const GAP_END_REM = GAP_START_REM + GAP_WIDTH_REM;
const TOTAL_MONTHS = (lastYear - firstYear + 1) * 12;

// Posición sobre la escala completa (desde enero del primer año).
function rawMonthToRem(month: number) {
  if (month <= GAP_START_MONTH) return month * MONTH_WIDTH_REM;
  if (month >= GAP_END_MONTH) {
    return GAP_END_REM + (month - GAP_END_MONTH) * MONTH_WIDTH_REM;
  }
  const gapProgress =
    (month - GAP_START_MONTH) / (GAP_END_MONTH - GAP_START_MONTH);
  return GAP_START_REM + gapProgress * GAP_WIDTH_REM;
}

function rawRemToMonth(rem: number) {
  if (rem <= GAP_START_REM) return rem / MONTH_WIDTH_REM;
  if (rem >= GAP_END_REM) {
    return GAP_END_MONTH + (rem - GAP_END_REM) / MONTH_WIDTH_REM;
  }
  const gapProgress = (rem - GAP_START_REM) / GAP_WIDTH_REM;
  return GAP_START_MONTH + gapProgress * (GAP_END_MONTH - GAP_START_MONTH);
}

const AXIS_START_REM = rawMonthToRem(AXIS_START_MONTH);

export function monthToRem(month: number) {
  return rawMonthToRem(month) - AXIS_START_REM;
}

export function remToMonth(rem: number) {
  return rawRemToMonth(rem + AXIS_START_REM);
}

export function getAxisWidthRem() {
  return monthToRem(TOTAL_MONTHS);
}

// La marca del primer año queda al inicio de la línea.
export function getYearStartRem(year: number) {
  return Math.max(0, monthToRem(monthBoundary(year, 1)));
}

export function getYearAtRem(rem: number) {
  const year = firstYear + Math.floor(remToMonth(rem) / 12);
  return Math.min(lastYear, Math.max(firstYear, year));
}

export type StageSpan = { startRem: number; endRem: number };

// Tramo de la línea que ocupa una etapa. En lo profesional, de su mes de
// inicio al de fin; en lo académico, del primer al último año.
export function getStageSpanRem(stage: JourneyStage): StageSpan {
  const hasMonths =
    stage.startMonth !== undefined && stage.endMonth !== undefined;
  const start = monthBoundary(stage.startYear, stage.startMonth ?? 1);
  const end = hasMonths
    ? monthBoundary(stage.endYear, (stage.endMonth ?? 12) + 1)
    : monthBoundary(stage.endYear + 1, 1);
  return { startRem: monthToRem(start), endRem: monthToRem(end) };
}

export function getSpanCenterRem({ startRem, endRem }: StageSpan) {
  return (startRem + endRem) / 2;
}

// Una etapa está abierta mientras el centro de la pantalla pasa por su tramo,
// ampliado si es muy corto para que dé tiempo de leerla.
function isCenterInStage(stage: JourneyStage, centerRem: number) {
  const span = getStageSpanRem(stage);
  const extra = Math.max(
    0,
    (MIN_DWELL_REM - (span.endRem - span.startRem)) / 2
  );
  return centerRem >= span.startRem - extra && centerRem <= span.endRem + extra;
}

// En lo profesional solo una etapa está abierta a la vez: la más cercana.
export function pickActiveProfessional(
  stages: readonly JourneyStage[],
  centerRem: number
) {
  const candidates = stages.filter(stage => isCenterInStage(stage, centerRem));
  if (candidates.length === 0) return undefined;
  const distance = (stage: JourneyStage) =>
    Math.abs(getSpanCenterRem(getStageSpanRem(stage)) - centerRem);
  return candidates.reduce((best, stage) =>
    distance(stage) < distance(best) ? stage : best
  );
}

// En lo académico pueden coincidir varias (por ejemplo, dos cursos de 2023).
export function pickActiveAcademic(
  stages: readonly JourneyStage[],
  centerRem: number
) {
  return stages.filter(stage => isCenterInStage(stage, centerRem));
}
