import { cn } from '@/lib/utils';

type SonopizzaPickTileProps = {
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

// Casilla blanca de la vista "Elige tu pizza": un título con su ayuda y,
// debajo, las opciones
export function SonopizzaPickTile({
  title,
  subtitle,
  className,
  children
}: SonopizzaPickTileProps) {
  return (
    <section className={cn('sp-tile', className)}>
      <header className="sp-tile__head">
        <h2 className="sp-tile__title">{title}</h2>
        {subtitle && <p className="sp-tile__sub">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}
