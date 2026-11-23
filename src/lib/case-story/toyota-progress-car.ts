import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { STORY_JUMP_EVENT } from '@/lib/case-story/motion';

// Velocidad del scroll (px/s) a la que la carrocería llega a su inclinación
// máxima, y esa inclinación en grados
const FULL_SPEED = 2400;
const MAX_PITCH = 4;
// Por debajo de esta velocidad (subiendo), el auto va en reversa
const REVERSE_SPEED = -40;
// Cuánto quedan encendidas las luces de freno al detenerse
const BRAKE_MS = 700;
// Viaje a un capítulo elegido: duración mínima, segundos extra por recorrer
// toda la línea y duración máxima
const DRIVE_MIN = 0.5;
const DRIVE_PER_TRACK = 1.1;
const DRIVE_MAX = 1.4;
// Momento del viaje (0 a 1) en que empieza a frenar
const DRIVE_BRAKE_AT = 0.55;
// Diámetro de la llanta respecto al ancho del auto (para que gire lo justo)
const WHEEL_SHARE = 0.172;

type ProgressCarOptions = {
  hasPhysics: boolean;
};

// El auto del avance reacciona a cómo se mueve la persona:
// - suspensión: al acelerar con el scroll la trompa sube; al frenar cabecea
//   hacia adelante y vuelve con un rebote (solo con movimiento)
// - luces de freno: se encienden al detenerse y mientras va en reversa
// - viaje: al elegir un capítulo lejano, la página salta al instante y el
//   auto maneja rápido por la línea hasta ese punto (acelera, frena y
//   cabecea al llegar). Mientras viaja, su posición va en --car-progress y el
//   giro extra de las llantas en --car-spin (solo con movimiento)
// Los estados van en data-* del auto, para que el CSS los pinte.
export function driveProgressCar(
  root: HTMLElement,
  { hasPhysics }: ProgressCarOptions
) {
  const road = root.querySelector<HTMLElement>('.ty-index__road');
  const car = road?.querySelector<HTMLElement>('.ty-index__car');
  const body = car?.querySelector<HTMLElement>('.ty-index__body');
  if (!road || !car || !body) return () => {};

  let brakeTimer = 0;
  let isDriving = false;
  let spin = 0;
  let drive: gsap.core.Timeline | null = null;

  const pitch = (degrees: number, ease = 'power2.out', duration = 0.35) => {
    if (!hasPhysics) return;
    gsap.to(body, { rotate: degrees, ease, duration, overwrite: true });
  };

  const lightBrakes = () => {
    car.setAttribute('data-braking', '');
    window.clearTimeout(brakeTimer);
    brakeTimer = window.setTimeout(
      () => car.removeAttribute('data-braking'),
      BRAKE_MS
    );
  };

  const brake = () => {
    lightBrakes();
    pitch(0, 'elastic.out(1, 0.35)', 1);
  };

  // Durante un viaje, el freno lo maneja el viaje, no el fin del scroll
  const handleStop = () => {
    if (!isDriving) brake();
  };

  const trigger = ScrollTrigger.create({
    trigger: root,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: self => {
      if (isDriving) return;
      const velocity = self.getVelocity();
      pitch(-gsap.utils.clamp(-1, 1, velocity / FULL_SPEED) * MAX_PITCH);
      car.toggleAttribute('data-reversing', velocity < REVERSE_SPEED);
    }
  });

  const finishDrive = () => {
    isDriving = false;
    drive = null;
    // El auto vuelve a seguir el avance real; las llantas conservan su giro
    road.style.removeProperty('--car-progress');
    car.removeAttribute('data-reversing');
    brake();
  };

  const driveTo = (from: number, to: number) => {
    const delta = to - from;
    if (Math.abs(delta) < 0.002) {
      finishDrive();
      return;
    }
    const direction = Math.sign(delta);
    const free = Math.max(1, road.clientWidth - car.offsetWidth);
    const turns =
      (Math.abs(delta) * free) / (Math.PI * car.offsetWidth * WHEEL_SHARE);
    const duration = gsap.utils.clamp(
      DRIVE_MIN,
      DRIVE_MAX,
      DRIVE_MIN + Math.abs(delta) * DRIVE_PER_TRACK
    );
    const state = { progress: from, spin };
    car.toggleAttribute('data-reversing', direction < 0);
    drive = gsap
      .timeline({ onComplete: finishDrive })
      .to(
        state,
        {
          progress: to,
          spin: spin + direction * turns * 360,
          duration,
          ease: 'power2.inOut',
          onUpdate: () => {
            spin = state.spin;
            road.style.setProperty('--car-progress', state.progress.toFixed(4));
            road.style.setProperty('--car-spin', state.spin.toFixed(1));
          }
        },
        0
      )
      // Arranca con la trompa arriba y, al frenar, cabecea hacia adelante
      .to(body, { rotate: -direction * MAX_PITCH, duration: duration * 0.3 }, 0)
      .add(lightBrakes, duration * DRIVE_BRAKE_AT)
      .to(
        body,
        {
          rotate: direction * MAX_PITCH * 0.75,
          duration: duration * (1 - DRIVE_BRAKE_AT),
          ease: 'power2.in'
        },
        duration * DRIVE_BRAKE_AT
      );
  };

  // Se escucha en captura para guardar dónde estaba el auto antes de que el
  // salto mueva la página; en el cuadro siguiente ya se sabe el destino
  const handleJump = () => {
    drive?.kill();
    const from = Number(root.style.getPropertyValue('--ty-progress')) || 0;
    isDriving = true;
    road.style.setProperty('--car-progress', String(from));
    requestAnimationFrame(() => driveTo(from, trigger.progress));
  };

  ScrollTrigger.addEventListener('scrollEnd', handleStop);
  if (hasPhysics) {
    root.addEventListener(STORY_JUMP_EVENT, handleJump, { capture: true });
  }

  return () => {
    trigger.kill();
    drive?.kill();
    ScrollTrigger.removeEventListener('scrollEnd', handleStop);
    root.removeEventListener(STORY_JUMP_EVENT, handleJump, { capture: true });
    window.clearTimeout(brakeTimer);
    gsap.killTweensOf(body);
    gsap.set(body, { clearProps: 'rotate' });
    road.style.removeProperty('--car-progress');
    road.style.removeProperty('--car-spin');
    car.removeAttribute('data-braking');
    car.removeAttribute('data-reversing');
  };
}
