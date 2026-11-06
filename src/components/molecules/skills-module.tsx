import { cn } from '@/lib/utils';

export type SkillsModuleItem = {
  title: string;
  text: string;
};

type SkillsModuleProps = {
  id: string;
  lead: string;
  statement: string;
  items: readonly SkillsModuleItem[];
  tone?: 'light' | 'dark';
  // Para ubicar el módulo en la página (por ejemplo, su papel en la cortina)
  className?: string;
};

// Módulo de skills (referencia: la web de Fixa): título en dos tonos (una
// línea gris y una frase grande) y tres tarjetas de vidrio con el nombre y su
// texto. Lo usan las skills profesionales (claro) y las skills como persona
// (oscuro): la misma diagramación en los dos modos.
export function SkillsModule({
  id,
  lead,
  statement,
  items,
  tone = 'light',
  className
}: SkillsModuleProps) {
  return (
    <section
      aria-labelledby={id}
      data-surface={tone === 'dark' ? 'dark' : undefined}
      className={cn(
        'skills-module',
        tone === 'light' && 'skills-module--light',
        tone === 'dark' && 'skills-module--dark',
        className
      )}
    >
      <div className="skills-module__inner">
        <h2 id={id} className="skills-module__heading">
          <span className="skills-module__lead">{lead}</span>
          <span className="skills-module__statement">{statement}</span>
        </h2>

        <ul className="skills-module__cards">
          {items.map(item => (
            <li key={item.title} className="skills-module__card" data-glass>
              <h3 className="skills-module__title">{item.title}</h3>
              <p className="skills-module__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
