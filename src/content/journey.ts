// Contenido real de Trayectoria, tomado del CV de Dann.
// Las frases y etiquetas fueron redactadas a partir del CV y de la información
// pública de cada curso, y aprobadas por Dann. Colectivo23 y Edison no se
// pudieron contrastar en internet.

export type JourneyLane = 'professional' | 'academic';

export type JourneyStage = {
  id: string;
  lane: JourneyLane;
  // Año (y mes) en que la etapa aparece en la línea de tiempo. Solo la
  // experiencia profesional tiene meses conocidos; en lo académico solo el año.
  startYear: number;
  endYear: number;
  startMonth?: number;
  endMonth?: number;
  period: string;
  title: string;
  organization: string;
  tags: readonly string[];
  summary: string;
};

export const journeyContent = {
  title: 'Trayectoria profesional',
  cvLabel: 'Descargar CV',
  // Ya no hay página de Contact: el botón abre el correo de Dann
  contactLabel: 'Escríbeme',
  // Etiqueta que distingue cada tipo de etapa (en móvil, donde todas las
  // tarjetas van en la misma columna).
  typeLabels: {
    professional: 'Experiencia laboral',
    academic: 'Estudios'
  },
  detail: {
    open: 'Ver detalle',
    close: 'Cerrar detalle'
  },
  skipLabel: 'Saltar la línea de tiempo',
  progressLabel: 'Progreso del recorrido',
  // Cierre del recorrido: invita al siguiente paso (Work). "Escríbeme" ya está
  // siempre arriba, junto a "Descargar CV".
  endLink: 'Ver mis proyectos',
  endHref: '/work',
  firstYear: 2018,
  lastYear: 2026,
  stages: [
    {
      id: '3k-concept-events',
      lane: 'professional',
      startYear: 2018,
      endYear: 2019,
      startMonth: 7,
      endMonth: 3,
      period: 'Jul 2018 – Mar 2019',
      title: 'Diseñadora gráfica',
      organization: '3k Concept Events',
      tags: ['Branding', 'Eventos', 'Redes sociales'],
      summary:
        'Diseñé piezas para eventos y redes, y aprendí a traducir una marca en un lenguaje visual coherente.'
    },
    {
      id: 'jorge-tadeo-lozano',
      lane: 'academic',
      // Estudió de 2015 a 2019. La línea de tiempo no empieza en 2015, así que
      // se ubica en 2019, el año en que terminó.
      startYear: 2019,
      endYear: 2019,
      period: '2015 – 2019',
      title: 'Diseño Gráfico',
      organization: 'Universidad Jorge Tadeo Lozano',
      tags: ['Composición', 'Tipografía', 'Color', 'Identidad'],
      summary: 'Fundamentos visuales que hoy guían mis decisiones de interfaz.'
    },
    {
      id: 'di-paola',
      lane: 'professional',
      startYear: 2019,
      endYear: 2019,
      startMonth: 7,
      endMonth: 9,
      period: 'Jul 2019 – Sep 2019',
      title: 'Diseñadora gráfica',
      organization: 'Di Paola',
      tags: ['Marketing digital', 'Campañas', 'Métricas'],
      summary:
        'Ajusté campañas digitales según su desempeño: mi primer paso para decidir con datos y no solo con intuición.'
    },
    {
      id: 'psigma-corp',
      lane: 'professional',
      startYear: 2019,
      endYear: 2021,
      startMonth: 10,
      endMonth: 7,
      period: 'Oct 2019 – Jul 2021',
      title: 'Diseñadora gráfica',
      organization: 'Psigma Corp',
      tags: ['Web', 'Comunicación interna', 'Identidad visual'],
      summary:
        'Diseñé piezas web y campañas iteradas con feedback, donde la claridad y la jerarquía se volvieron mi punto de partida.'
    },
    {
      id: 'coder-house',
      lane: 'academic',
      startYear: 2021,
      endYear: 2021,
      period: '2021',
      title: 'Diseño UX/UI',
      organization: 'Coder House',
      tags: ['Research', 'Arquitectura de información', 'Prototipado'],
      summary: 'Diseñar de principio a fin: de la investigación al prototipo.'
    },
    {
      id: 'kushki',
      lane: 'professional',
      startYear: 2021,
      endYear: 2022,
      startMonth: 9,
      endMonth: 10,
      period: 'Sep 2021 – Oct 2022',
      title: 'UX/UI Designer',
      organization: 'Kushki',
      tags: ['Fintech', 'Pagos', 'Usabilidad', 'Ágil'],
      summary:
        'Diseñé flujos de pago validados con usuarios y aprendí a simplificar lo complejo validando temprano.'
    },
    {
      id: 'uxcel',
      lane: 'academic',
      startYear: 2022,
      endYear: 2022,
      period: '2022',
      title: 'Diseño UI',
      organization: 'Uxcel',
      tags: ['UI', 'Sistemas de diseño', 'Accesibilidad'],
      summary: 'Construir interfaces consistentes, accesibles y adaptables.'
    },
    {
      id: 'mercado-libre',
      lane: 'professional',
      startYear: 2022,
      endYear: 2024,
      startMonth: 11,
      endMonth: 5,
      period: 'Nov 2022 – May 2024',
      title: 'UX/UI Designer',
      organization: 'Mercado Libre',
      tags: ['E-commerce', 'Research', 'User testing', 'Stakeholders'],
      summary:
        'Optimicé flujos validando hipótesis con usuarios, convirtiendo evidencia en decisiones y defendiéndolas ante stakeholders.'
    },
    {
      id: 'colectivo23',
      lane: 'academic',
      startYear: 2023,
      endYear: 2023,
      period: '2023',
      title: 'UX Estratégico',
      organization: 'Colectivo23',
      tags: ['Estrategia', 'Hipótesis', 'Métricas'],
      summary: 'Alinear decisiones de diseño con objetivos de negocio.'
    },
    {
      id: 'edison',
      lane: 'academic',
      startYear: 2023,
      endYear: 2023,
      period: '2023',
      title: 'UX Writing: Diseña experiencias con storytelling',
      organization: 'Edison',
      tags: ['UX Writing', 'Storytelling', 'Microcopy'],
      summary: 'Guiar a las personas con lenguaje claro y narrativa.'
    },
    {
      id: 'anthropic-ai-fluency',
      lane: 'academic',
      startYear: 2025,
      endYear: 2025,
      period: '2025',
      title: 'Fluidez en IA: Marco y fundamentos',
      organization: 'Anthropic',
      tags: ['IA', 'Delegación', 'Evaluación'],
      summary: 'Qué delegar, cómo pedirlo y cómo evaluar el resultado.'
    },
    {
      id: 'omnicom-production',
      lane: 'professional',
      startYear: 2026,
      endYear: 2026,
      // La tarjeta aparece apenas la línea llega a 2026 (el texto conserva abril)
      startMonth: 1,
      // "Actualidad": la barra llega hasta el final de la línea
      endMonth: 12,
      period: 'Abr 2026 – Actualidad',
      title: 'UX/UI Designer',
      organization: 'Omnicom Production',
      tags: ['Agencia', 'Multi-industria', 'IA', 'Workshops'],
      summary:
        'Diseño productos para clientes de distintas industrias, del discovery al QA, con la IA integrada al proceso.'
    },
    {
      id: 'idf-ai-for-designers',
      lane: 'academic',
      startYear: 2026,
      endYear: 2026,
      period: '2026',
      title: 'AI for Designers',
      organization: 'Interaction Design Foundation',
      tags: ['IA', 'Research', 'Prototipado', 'Testing'],
      summary: 'Usar IA sin perder el foco en las personas.'
    }
  ] satisfies readonly JourneyStage[]
} as const;

export const journeyYears = Array.from(
  { length: journeyContent.lastYear - journeyContent.firstYear + 1 },
  (_, index) => journeyContent.firstYear + index
);
