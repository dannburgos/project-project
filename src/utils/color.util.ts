// Canal sRGB (0 a 1) a su valor lineal, para medir luminancia real
function toLinear(channel: number) {
  return channel <= 0.04045
    ? channel / 12.92
    : ((channel + 0.055) / 1.055) ** 2.4;
}

// Si un color HEX es claro (para poner texto oscuro encima): luminancia
// relativa por encima de 0.5. Así los naranjas de Sonopizza llevan texto
// blanco, como pide la marca, y el blanco hueso lleva texto azul marino
export function isLightColor(hex: string) {
  const value = hex.replace('#', '');
  const [red = 0, green = 0, blue = 0] = [0, 2, 4].map(start =>
    toLinear(parseInt(value.slice(start, start + 2), 16) / 255)
  );
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue > 0.5;
}
