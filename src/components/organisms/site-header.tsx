'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties
} from 'react';

import { BrandSymbol } from '@/components/atoms/brand-symbol';
import { useSurfaceUnder } from '@/hooks/use-surface-under';
import { siteContent } from '@/content/site';
import { cn } from '@/lib/utils';

// Navegación visible en todas las páginas: una pastilla flotante y centrada,
// sin franja de fondo, que deja ver el contenido por debajo. El logo y "Home"
// llevan a Home. En móvil, las opciones viven en un menú hamburguesa: un solo
// botón cuyas rayas se transforman en una X, y una tarjeta centrada que se abre
// debajo de la pastilla con toda la información para moverse entre las internas.
export function SiteHeader() {
  const pathname = usePathname();
  // El menú queda abierto solo para la página en la que se abrió: al navegar
  // a otra, se cierra solo.
  const [openFor, setOpenFor] = useState<string | null>(null);
  const isMenuOpen = openFor === pathname;

  // El logo y la pastilla se adaptan al fondo que tienen debajo: blancos
  // sobre superficies oscuras y oscuros sobre las claras
  const logoRef = useRef<HTMLAnchorElement>(null);
  const logoSurface = useSurfaceUnder(logoRef, pathname);
  const barRef = useRef<HTMLDivElement>(null);
  const barSurface = useSurfaceUnder(barRef, pathname);

  // Píldora de "exclusión" (referencia: rauno.me/craft/exclusion-tabs): una
  // píldora blanca con mezcla "exclusion" se desliza hasta la opción activa,
  // estirándose, y el texto que cubre se invierte.
  const navRef = useRef<HTMLElement>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(
    null
  );
  const [isPillReady, setIsPillReady] = useState(false);

  // Home ("/") coincide solo con la ruta exacta; las demás, con sus subrutas.
  const checkIsActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const activeHref = siteContent.navigation.find(item =>
    checkIsActive(item.href)
  )?.href;

  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const measure = () => {
      const link = activeHref
        ? nav.querySelector<HTMLElement>(`[data-href="${activeHref}"]`)
        : null;
      setPill(link ? { left: link.offsetLeft, width: link.offsetWidth } : null);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    return () => observer.disconnect();
  }, [activeHref]);

  // La primera vez la píldora aparece en su lugar sin deslizarse desde cero
  useEffect(() => {
    if (!pill || isPillReady) return;
    const frameId = requestAnimationFrame(() => setIsPillReady(true));
    return () => cancelAnimationFrame(frameId);
  }, [pill, isPillReady]);

  const handleToggleMenu = () => setOpenFor(isMenuOpen ? null : pathname);
  const handleCloseMenu = () => setOpenFor(null);

  // Escape cierra el menú abierto.
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenFor(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <Link
        ref={logoRef}
        href="/"
        className="site-header__logo"
        data-surface-dark={logoSurface === 'dark'}
        data-surface-light={logoSurface === 'light'}
        aria-label={siteContent.brand}
      >
        <BrandSymbol className="site-header__symbol" />
        <span className="site-header__brand" aria-hidden="true">
          {siteContent.brand.split(' ').map(word => (
            <span key={word}>{word}</span>
          ))}
        </span>
      </Link>
      <header
        className="site-header"
        data-surface-light={barSurface === 'light'}
      >
        <div className="site-header__bar">
          <div ref={barRef} className="site-header__inner">
            <nav
              ref={navRef}
              aria-label="Principal"
              className="site-header__nav"
            >
              {siteContent.navigation.map(item => {
                const isActive = checkIsActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'site-header__link',
                      isActive && 'site-header__link--active'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {pill && (
                <span
                  aria-hidden="true"
                  className="site-header__pill"
                  data-ready={isPillReady}
                  style={{ width: pill.width, translate: `${pill.left}px 0` }}
                />
              )}
            </nav>

            <button
              type="button"
              className="site-header__menu-button"
              aria-label={
                isMenuOpen ? siteContent.menu.close : siteContent.menu.open
              }
              aria-expanded={isMenuOpen}
              aria-controls="site-menu"
              onClick={handleToggleMenu}
            >
              <span
                className="menu-icon"
                data-open={isMenuOpen}
                aria-hidden="true"
              >
                <span className="menu-icon__bar" />
                <span className="menu-icon__bar" />
                <span className="menu-icon__bar" />
              </span>
            </button>
          </div>

          {isMenuOpen && (
            <div id="site-menu" className="site-menu">
              <nav
                aria-label={siteContent.menu.title}
                className="site-menu__nav"
              >
                <ul className="site-menu__list">
                  {siteContent.navigation.map((item, index) => {
                    const isActive = checkIsActive(item.href);
                    return (
                      <li
                        key={item.href}
                        className="site-menu__item"
                        style={{ '--menu-index': index } as CSSProperties}
                      >
                        <Link
                          href={item.href}
                          aria-current={isActive ? 'page' : undefined}
                          className={cn(
                            'site-menu__link',
                            isActive && 'site-menu__link--active'
                          )}
                          onClick={handleCloseMenu}
                        >
                          <span className="site-menu__label">{item.label}</span>
                          <span className="site-menu__description">
                            {item.description}
                          </span>
                          <ArrowRight
                            aria-hidden="true"
                            className="site-menu__arrow"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
