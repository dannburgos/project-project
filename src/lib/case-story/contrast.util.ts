// Contraste entre dos colores hex, según la fórmula de WCAG (de 1 a 21)
function channelToLinear(value: number) {
  const channel = value / 255;
  return channel <= 0.03928
    ? channel / 12.92
    : ((channel + 0.055) / 1.055) ** 2.4;
}

function getLuminance(hex: string) {
  const clean = hex.replace('#', '');
  const [red, green, blue] = [0, 2, 4].map(start =>
    channelToLinear(parseInt(clean.slice(start, start + 2), 16))
  );
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

export function getContrastRatio(foreground: string, background: string) {
  const first = getLuminance(foreground);
  const second = getLuminance(background);
  const lighter = Math.max(first, second);
  const darker = Math.min(first, second);
  return (lighter + 0.05) / (darker + 0.05);
}

// «4,6 : 1», con coma decimal
export function formatContrastRatio(ratio: number) {
  const rounded = Math.round(ratio * 10) / 10;
  return `${String(rounded).replace('.', ',')} : 1`;
}
