import { cn } from '@/lib/utils';

// Iconos del sistema del caso Toyota: dibujados sobre una retícula de 24 px,
// con trazo de 2 px, esquinas rectas y sin relleno. Son propios (inspirados en
// el estilo recto de la marca); no son los iconos oficiales de Toyota.
const ICON_PATHS = {
  'arrow-right': 'M3 12h17 M14 6l6 6-6 6',
  'arrow-left': 'M21 12H4 M10 6l-6 6 6 6',
  plus: 'M12 4v16 M4 12h16',
  close: 'M5 5l14 14 M19 5L5 19',
  check: 'M4 12.5l5 5L20 6.5',
  search: 'M4 4h12v12H4z M16 16l5 5',
  compare: 'M3 8h15 M14 4l4 4-4 4 M21 16H6 M10 12l-4 4 4 4',
  info: 'M3 3h18v18H3z M12 10v7 M12 6.5v1.5',
  external: 'M14 3h7v7 M21 3l-9 9 M18 14v7H3V6h7',
  profile: 'M8 3h8v8H8z M4 21v-5h16v5',
  menu: 'M3 6h18 M3 12h18 M3 18h18',
  car: 'M3 17v-4l2-6h14l2 6v4z M3 13h18 M6 17v3 M18 17v3 M6 15h2 M16 15h2',
  hybrid: 'M4 20l2-8 8-8h6v6l-8 8z M4 20l9-9',
  quote: 'M5 3h14v18H5z M8 6h8v4H8z M8 14h2 M12 14h2 M8 18h2 M12 18h2 M16 14v4',
  'test-drive': 'M8 3h8l5 5v8l-5 5H8l-5-5V8z M3 12h5 M16 12h5 M12 12v9',
  city: 'M3 21V9h7v12 M10 21V3h11v18 M3 21h18 M14 7h3 M14 11h3 M14 15h3 M6 13h1 M6 17h1',
  space: 'M9 3H3v6 M15 3h6v6 M9 21H3v-6 M15 21h6v-6',
  saving: 'M4 21V3h10v18 M2 21h14 M7 7h4 M14 9h4l2 2v8',
  comfort: 'M7 3l3 12h8v6 M10 15l-2 6 M4 21h16',
  technology: 'M3 4h18v13H3z M9 21h6 M12 17v4 M8 10l3 3 5-5',
  power: 'M13 2L4 14h7l-1 8 9-12h-7z',
  versatility: 'M3 3h8v8H3z M13 3h8v8h-8z M3 13h8v8H3z M13 13h8v8h-8z',
  cargo: 'M3 8l9-5 9 5v10l-9 5-9-5z M3 8l9 5 9-5 M12 13v10',
  terrain: 'M2 20L9 7l4 7 3-4 6 10z',
  seven: 'M3 3h18v18H3z M8 8h8l-4 9',
  key: 'M3 9h8v6H3z M11 12h10 M17 12v4 M20 12v3',
  calendar: 'M3 5h18v16H3z M3 10h18 M8 3v4 M16 3v4 M7 14h2 M11 14h2 M15 14h2',
  family: 'M5 4h4v4H5z M15 4h4v4h-4z M3 21v-9h8v9 M13 21v-9h8v9 M10 21h4',
  road: 'M8 3L4 21 M16 3l4 18 M12 4v3 M12 10v4 M12 17v4',
  suitcase: 'M4 8h16v12H4z M9 8V4h6v4 M9 8v12 M15 8v12',
  bag: 'M4 8h16l-2 13H6z M9 8V5h6v3',
  pet: 'M6 6h3v3H6z M15 6h3v3h-3z M3 11h3v3H3z M18 11h3v3h-3z M8 13h8l2 7H6z',
  shield: 'M12 3l8 3v7l-8 8-8-8V6z M8 12l3 3 5-6',
  enter: 'M20 5v8H5 M9 9l-4 4 4 4'
} as const;

export type ToyotaIconName = keyof typeof ICON_PATHS;

type ToyotaIconProps = {
  name: string;
  className?: string;
};

export function ToyotaIcon({ name, className }: ToyotaIconProps) {
  const path = ICON_PATHS[name as ToyotaIconName];
  if (!path) return null;

  return (
    <svg
      className={cn('size-8', className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}
