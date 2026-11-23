import type Lenis from 'lenis';

// El desplazador suave de la página (Lenis), para que quien necesite mover la
// página a un punto (un salto, acomodar una escena) lo haga con el mismo
// deslizamiento que el resto del scroll. Sin él (por ejemplo, con "reducir
// movimiento"), se usa el scroll del navegador.
let scroller: Lenis | null = null;

export function setPageScroller(next: Lenis | null) {
  scroller = next;
}

type ScrollPageOptions = {
  // Segundos que dura el desplazamiento
  duration?: number;
  // Curva del desplazamiento (de 0 a 1)
  easing?: (progress: number) => number;
  onComplete?: () => void;
};

// Desliza la página hasta un punto
export function scrollPageTo(
  top: number,
  { duration = 0.9, easing, onComplete }: ScrollPageOptions = {}
) {
  if (scroller) {
    // force: también si el scroll suave está pausado (durante un salto)
    // programmatic: false para que el scroll suave tome este punto como su
    // nuevo destino: si no, el siguiente giro de rueda se suma a un destino
    // viejo y la página salta
    scroller.scrollTo(top, {
      duration,
      easing,
      force: true,
      programmatic: false,
      onComplete
    });
    return;
  }
  window.scrollTo({ top, behavior: 'smooth' });
  if (onComplete) window.setTimeout(onComplete, duration * 1000);
}

// Lleva la página a un punto al instante (por ejemplo, tapada por una
// transición)
export function jumpPageTo(top: number) {
  if (scroller) {
    scroller.scrollTo(top, { immediate: true, force: true });
    return;
  }
  window.scrollTo(0, top);
}
