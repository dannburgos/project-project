import { siteContent } from '@/content/site';

// Veces que se repiten los logos en cada mitad de la tira: así cada mitad es
// más ancha que cualquier pantalla y el recorrido nunca deja un hueco.
const REPEATS_PER_HALF = 3;

// Herramientas que domina Dann: una franja de logos en gris que se desliza
// lento, de derecha a izquierda, y se desvanece en los bordes. La tira tiene
// dos mitades iguales para que el recorrido sea continuo. Los lectores de
// pantalla solo leen la primera aparición de cada herramienta. Por ahora, los
// nombres escritos hasta que lleguen los logos en alta.
export function AboutTools() {
  const { tools } = siteContent.about;

  return (
    <section className="about-tools" aria-labelledby="about-tools-title">
      {/* Sin título visible (pedido de Dann): solo lo leen los lectores de
          pantalla, para que la sección siga teniendo nombre */}
      <h2 id="about-tools-title" className="sr-only">
        {tools.title}
      </h2>

      <div className="about-tools__band">
        <div className="about-tools__track">
          {[0, 1].map(half => (
            <ul
              key={half}
              className="about-tools__list"
              aria-hidden={half === 1 ? 'true' : undefined}
            >
              {Array.from({ length: REPEATS_PER_HALF }, (_, repeat) =>
                tools.items.map(tool => (
                  <li
                    key={`${repeat}-${tool.name}`}
                    className="about-tools__item"
                    aria-hidden={repeat > 0 ? 'true' : undefined}
                  >
                    {tool.name}
                  </li>
                ))
              )}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
