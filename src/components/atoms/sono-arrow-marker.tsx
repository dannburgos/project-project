// Lo que la punta sobresale del final del camino, en unidades del lienzo
const TIP = 4;

type SonoArrowMarkerProps = {
  id: string;
  className?: string;
  // Tamaño en unidades del lienzo del diagrama
  size?: number;
};

// Punta de flecha de los diagramas de Sonopizza (sitemap y flujos): un
// triángulo con la base curva hacia adentro y las esquinas redondeadas (el
// color y el redondeo los pone el CSS de cada diagrama). Mide en unidades del
// lienzo, no crece con el grosor de la línea, y su punta siempre sobresale 4
// unidades del final del camino (tapa la terminación redonda de la línea y
// los caminos se calculan con esa medida).
export function SonoArrowMarker({
  id,
  className,
  size = 22
}: SonoArrowMarkerProps) {
  // La punta del dibujo está en x = 14 (de 16): el punto de anclaje se corre
  // para que sobresalga TIP unidades a cualquier tamaño
  const refX = 14 - (TIP * 16) / size;

  return (
    <marker
      id={id}
      className={className}
      viewBox="0 0 16 16"
      refX={refX}
      refY="8"
      markerWidth={size}
      markerHeight={size}
      markerUnits="userSpaceOnUse"
      orient="auto-start-reverse"
    >
      <path d="M2 2.5 L14 8 L2 13.5 L5.5 8 Z" />
    </marker>
  );
}
