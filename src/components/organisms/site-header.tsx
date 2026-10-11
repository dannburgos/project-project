'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type CSSProperties } from 'react';

import { siteContent } from '@/content/site';
import { cn } from '@/lib/utils';

// Navegación visible en todas las páginas. El logo y "Home" llevan a Home.
// En móvil, las opciones viven en un menú hamburguesa: un solo botón cuyas
// rayas se transforman en una X, y un panel debajo de la barra con toda la
// información para moverse entre las internas.
export function SiteHeader() {
  const pathname = usePathname();
  // El menú queda abierto solo para la página en la que se abrió: al navegar
  // a otra, se cierra solo.
  const [openFor, setOpenFor] = useState<string | null>(null);
  const isMenuOpen = openFor === pathname;
  const headerRef = useRef<HTMLElement>(null);

  // Publica el alto de la barra como variable de CSS (--site-header-height)
  // para que las pantallas completas descuenten ese espacio y, junto con la
  // barra, midan exactamente lo que se ve de la ventana.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const publishHeight = () =>
      document.documentElement.style.setProperty(
        '--site-header-height',
        `${header.offsetHeight}px`
      );
    publishHeight();
    const observer = new ResizeObserver(publishHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Home ("/") coincide solo con la ruta exacta; las demás, con sus subrutas.
  const checkIsActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const handleToggleMenu = () => setOpenFor(isMenuOpen ? null : pathname);
  const handleCloseMenu = () => setOpenFor(null);

  // Con el menú abierto: la página de atrás no se desplaza y Escape lo cierra.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenFor(null);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className="site-header">
      <p className="site-header__notice">{siteContent.prototypeNotice}</p>
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo">
          {siteContent.brand}
        </Link>

        <nav aria-label="Principal" className="site-header__nav">
          {siteContent.navigation.map(item => {
            const isActive = checkIsActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
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
          <span className="menu-icon" data-open={isMenuOpen} aria-hidden="true">
            <span className="menu-icon__bar" />
            <span className="menu-icon__bar" />
            <span className="menu-icon__bar" />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div id="site-menu" className="site-menu">
          <nav aria-label={siteContent.menu.title} className="site-menu__nav">
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
    </header>
  );
}
