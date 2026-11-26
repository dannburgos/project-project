import type { QuboStory } from '@/content/qubo-story.types';

// Caso Pulso by Qubo Bank. Estructura tomada de armor-bd.com (píldora de
// navegación, frase grande con cifra, puntos sobre la imagen, funciones
// numeradas, FAQ) y de later.com/made-you-look (créditos, manifiesto y
// bloques con etiqueta, título y cita). Los 14 módulos del documento base se
// reparten en 10 capítulos. Lo que depende de entrevistas aún no hechas se
// marca «en curso».
export const quboStory: QuboStory = {
  sections: [
    { id: 'qb-ch-1', number: '01', name: 'Oportunidad' },
    { id: 'qb-ch-2', number: '02', name: 'Problema' },
    { id: 'qb-ch-3', number: '03', name: 'Research' },
    { id: 'qb-ch-4', number: '04', name: 'Usuario' },
    { id: 'qb-ch-5', number: '05', name: 'Estrategia' },
    { id: 'qb-ch-6', number: '06', name: 'Decisiones' },
    { id: 'qb-ch-7', number: '07', name: 'Flujos' },
    { id: 'qb-ch-8', number: '08', name: 'Pantallas' },
    { id: 'qb-ch-9', number: '09', name: 'Sistema' },
    { id: 'qb-ch-10', number: '10', name: 'Validación' }
  ],

  labels: {
    navigation: 'Capítulos del caso',
    menu: 'Capítulos',
    pending: 'En curso',
    pendingNote: 'Se completa tras las entrevistas con tenderos.',
    note: 'Nota',
    open: 'Ver detalle',
    sources: 'Fuentes',
    limitations: 'Limitaciones'
  },

  cover: {
    eyebrow: 'Caso de estudio · Fintech',
    title: 'Pulso',
    byline: 'by Qubo Bank',
    tagline: 'El crédito que late con tu tienda y se adapta a tu caja diaria.',
    visual: {
      label:
        'Imagen principal · celular con el Pulso avanzando (pantalla 7) junto a la tarjeta de la oferta (pantalla 2)'
    }
  },

  opportunity: {
    head: {
      number: '01',
      eyebrow: 'Contexto y oportunidad',
      title:
        'Ya cobran digital, pero se financian a la antigua. Esa brecha es la oportunidad.'
    },
    statement:
      'El 81,2% de los micronegocios decide no pedir crédito. Para ellos, el crédito formal no se siente hecho a su medida.',
    opportunityLabel: 'La oportunidad',
    opportunity:
      'Cada cobro por QR o Bre-B deja un rastro de ventas. Ese rastro puede convertirse en el historial crediticio que el tendero nunca tuvo, y en el canal por el que paga.'
  },

  problem: {
    head: {
      number: '02',
      eyebrow: 'El problema, replanteado',
      title: 'No les falta crédito. Les falta uno que se parezca a su caja',
      lead: 'El crédito formal no se siente hecho para ellos y no encaja con su ritmo de caja.'
    },
    insightLabel: 'Insight',
    insight:
      'Quien sí necesita plata acaba en el crédito informal, que cobra caro pero se sincroniza con su caja: plata el mismo día, sin papeles y con pagos al ritmo de las ventas.',
    hypothesisNote: 'Hipótesis que el research debe validar.',
    hmwLabel: 'How might we',
    hmw: '¿Cómo podríamos convertir las ventas diarias en historial crediticio y forma de pago?',
    visual: {
      label:
        'Pantalla partida · «el crédito del banco» con una cuota el día 15 frente a «la caja del tendero» con ventas distintas cada día'
    }
  },

  research: {
    head: {
      number: '03',
      eyebrow: 'Research',
      title: 'Tres competidores, un espacio libre'
    },
    comparisonLabel: 'Comparación con Pulso',
    comparison: {
      columns: ['', 'Gota a gota', 'Treinta', 'Nequi', 'Pulso'],
      rows: [
        [
          'Evalúa con',
          'Confianza personal',
          'Ventas registradas en la app',
          'Comportamiento de la persona',
          'Ventas cobradas con Qubo'
        ],
        [
          'Quién inicia',
          'El tendero lo busca',
          'El tendero compra en el marketplace',
          'Oferta preaprobada',
          'Oferta preaprobada'
        ],
        [
          'Cómo paga',
          'Cuota diaria o semanal fija',
          'Pago único a 15 días',
          'Cuotas fijas o pago a 30 días',
          '% de cada venta'
        ],
        [
          'Costo visible',
          'Oculto en la cuota',
          'Sin intereses',
          'Tasa + seguro',
          'Total en pesos'
        ],
        ['Uso', 'Libre', 'Solo inventario', 'Libre', 'Libre'],
        [
          'Regulación',
          'Ilegal',
          'No confirmada',
          'Vigilada por Superfinanciera',
          'Banco regulado'
        ]
      ],
      highlightColumn: 4
    },
    gap: [
      {
        title: 'Evalúa con las ventas reales',
        text: 'Las del comercio, no las de su cuenta personal.'
      },
      {
        title: 'Capital de libre uso',
        text: 'No solo para inventario.'
      },
      {
        title: 'Pago que sigue las ventas',
        text: 'Un % de cada venta, no cuota fija ni pago único.'
      },
      {
        title: 'Un banco regulado detrás',
        text: 'No un prestamista informal.'
      }
    ],
    otherReferences:
      'Otros referentes revisados: Monet, microcrédito de banca tradicional (Bancolombia, Bancamía) y fiado de proveedor. Quedan como mención, fuera del análisis comparativo.',
    hypothesesLabel: 'Hipótesis',
    hypotheses: [
      {
        number: 'H1',
        title:
          'El tendero no pide crédito por papeles, tiempo y porque siente que el banco no es para él',
        signal:
          'La mayoría menciona trámites o «no me lo aprueban» antes que el costo.',
        evidence:
          'La banca pide asesor, documentos y tiempo de operación; las fintechs digitalizan pero evalúan a la persona.',
        decision: 'El banco hace la oferta, el tendero no solicita.',
        status: 'Por validar'
      }
    ],
    hypothesisLabels: {
      signal: 'Señal que la valida',
      evidence: 'Evidencia del benchmark',
      decision: 'Decisión que alimenta'
    },
    methodsLabel: 'Métodos',
    methods: {
      columns: ['Método', 'Para qué', 'Alcance', 'Estado'],
      rows: [
        [
          'Desk research y análisis de competencia',
          'Dimensionar el problema, el contexto regulatorio y el espacio libre',
          'Prensa, Banco de la República, estudios, apps',
          'Hecho'
        ],
        [
          'Entrevistas',
          'Entender cómo se financian hoy y por qué',
          '6 dueños de microcomercios, 30 min, en su negocio',
          'Por hacer'
        ],
        [
          'Prueba del prototipo y test de comprensión',
          'Validar H3 y las decisiones de diseño',
          'Las mismas 6 personas, 15 min en la misma sesión',
          'Por hacer'
        ],
        [
          'Observación en tienda',
          'Ver el ritmo real de ventas, cobros y pagos',
          '1 jornada en 2 tiendas',
          'Opcional'
        ]
      ]
    },
    questionsLabel: 'Preguntas clave de la entrevista',
    questions: [
      'La última vez que necesitó plata para la tienda, ¿qué hizo?',
      '¿Cómo es una semana buena y una mala en ventas?',
      '¿Qué le hizo elegir ese préstamo y no otro?',
      'Si le ofrecen $2.000.000, ¿cuánto cree que devolvería?'
    ],
    findingsLabel: 'Hallazgos',
    findingsFormat: ['Lo que vimos', 'Qué significa', 'Qué decidimos']
  },

  user: {
    head: {
      number: '04',
      eyebrow: 'Usuario',
      title: 'Marta vende todos los días y decide sola',
      lead: 'Un comercio que cobra en efectivo, QR y transferencia, y que necesita plata hoy sin poner en riesgo el negocio.'
    },
    primary: {
      label: 'Usuario principal',
      value:
        'El dueño de un microcomercio de barrio (tienda, peluquería, venta de comida) que vende todos los días y decide solo sobre su plata.'
    },
    secondary: {
      label: 'Usuario secundario',
      value:
        'El analista de riesgo de Qubo, que ve la salud de la cartera Pulso en la vista interna.'
    },
    jobLabel: 'Job to be done',
    job: 'Cuando necesito surtir la tienda y no me alcanza la caja, quiero conseguir la plata hoy y pagarla a medida que vendo, para no poner en riesgo el negocio ni pasar pena con un cobrador.',
    dimensions: [
      {
        title: 'Funcional',
        text: 'Plata el mismo día, sin papeles, con un pago que se adapte a sus ventas.'
      },
      {
        title: 'Emocional',
        text: 'Tranquilidad: saber cuánto debe y que una mala semana no lo ahogue.'
      },
      {
        title: 'Social',
        text: 'Que no lo juzguen ni lo expongan frente a clientes o vecinos.'
      }
    ],
    hiresLabel: 'Qué «contrata» hoy',
    hires:
      'Gota a gota, fiado de proveedor, Treinta (para inventario), Nequi y préstamos de familiares. Todos resuelven una parte; ninguno resuelve las tres dimensiones a la vez.',
    persona: {
      name: 'Marta',
      role: 'Dueña de una tienda de barrio',
      hypothesisTag: 'Proto-persona · hipótesis a validar en entrevistas',
      facts: [
        {
          label: 'Contexto',
          value:
            'Atiende sola o con un familiar. Cobra en efectivo, QR y transferencia. Usa WhatsApp todo el día en un Android de gama media.'
        },
        {
          label: 'Hoy resuelve con',
          value: 'Gota a gota, proveedores que le fían, plata de la familia.'
        },
        {
          label: 'Dolores',
          value:
            'Trámites largos en el banco, miedo a no tener la cuota el día del pago, no entiende las tasas.'
        },
        {
          label: 'Valora',
          value: 'Rapidez, trato sin juicio, saber exactamente cuánto paga.'
        },
        {
          label: 'Momento crítico',
          value: 'La semana mala: ventas bajas y el cobrador igual llega.'
        }
      ]
    },
    unknownLabel: 'Lo que todavía no sabemos',
    unknown: [
      '¿Cuánta de su venta es efectivo? Si es mucha, Pulso verá solo una parte de su caja.',
      '¿Quién más decide sobre la plata del negocio: pareja, familia?',
      '¿Cómo vive una semana mala, y qué hace primero?'
    ]
  },

  strategy: {
    head: {
      number: '05',
      eyebrow: 'Estrategia y principios',
      title: 'Pulso gana si el comercio paga sin mora y vuelve',
      lead: 'Ese ciclo es el negocio. Cuatro principios deciden cada pantalla; si una propuesta rompe uno, se descarta.'
    },
    valueLabel: 'Propuesta de valor',
    value:
      'Plata hoy, sin papeles, que se paga sola con tus ventas. Sabes en pesos cuánto recibes y cuánto devuelves.',
    whyLabel: 'Por qué Qubo puede ganar',
    why: [
      {
        title: 'Frente al gota a gota',
        text: 'Mismo ritmo de pago, sin el costo abusivo ni la cobranza agresiva.'
      },
      {
        title: 'Frente a Treinta',
        text: 'Crédito de uso libre, no solo para inventario.'
      },
      {
        title: 'Frente a Nequi',
        text: 'Evalúa y cobra con las ventas del comercio. Ventaja a confirmar: Nequi ya tiene QR para negocios y podría moverse hacia allá.'
      }
    ],
    earnLabel: 'Cómo gana Qubo',
    earn: [
      {
        title: 'Cargo del crédito',
        text: 'Un cargo fijo en pesos, dentro del tope legal.'
      },
      {
        title: 'Más ventas por Qubo',
        text: 'Para acceder a montos mayores, el comercio concentra sus cobros en Qubo.'
      },
      {
        title: 'Datos de riesgo propios',
        text: 'Cada ciclo pagado mejora la evaluación y baja el costo de conocer al comercio.'
      }
    ],
    northStarLabel: 'North Star',
    northStar:
      '% de créditos Pulso pagados por completo sin mora mayor a 30 días.',
    rulesLabel: 'Reglas de negocio del MVP',
    rulesNote: 'Valores de referencia: son supuestos del prototipo.',
    rules: {
      columns: ['Regla', 'Valor propuesto'],
      rows: [
        ['Elegibilidad', 'Mínimo 90 días cobrando con Qubo'],
        ['Monto', 'Calculado sobre las ventas de los últimos 90 días'],
        ['Retención', '8% de cada venta cobrada por Qubo'],
        [
          'Piso semanal',
          'Pago mínimo por semana, para que el crédito no se congele'
        ],
        ['Plazo máximo', '6 meses; lo pendiente pasa a cuota fija'],
        ['Costo', 'Cargo fijo en pesos; tasa EA visible por regulación'],
        ['Créditos activos', 'Uno a la vez por comercio']
      ]
    },
    risksLabel: 'Riesgos y mitigación',
    risks: [
      {
        title: 'El comercio desvía ventas a otro canal para no pagar',
        text: 'Piso semanal y alerta si las ventas caen de golpe.'
      },
      {
        title: 'Sobreendeudamiento',
        text: 'Monto con tope sobre las ventas; un solo Pulso activo.'
      },
      {
        title: 'Nequi o Treinta replican el modelo',
        text: 'Diferenciarnos en pago por venta y costo en pesos, y cerrar el ciclo de recompra.'
      },
      {
        title: 'Fraude (ventas infladas, autotransferencias)',
        text: 'Detección de patrones y topes en el primer crédito.'
      },
      {
        title: 'Regulatorio',
        text: 'Tasa EA visible, tope de usura y consentimiento explícito de uso de datos (Habeas Data).'
      }
    ],
    tensionLabel: 'Tensión abierta · a validar con un experto regulatorio',
    tension:
      'Con un cargo fijo en pesos, si el comercio paga más rápido, la tasa efectiva anual sube, porque el mismo cargo se paga en menos tiempo. El diseño debe garantizar que, incluso en el pago más rápido, la tasa no supere el tope de usura. Por eso el producto necesita un cargo máximo o una tarifa escalonada.',
    outLabel: 'Fuera del MVP',
    out: [
      'Crédito para personas naturales',
      'Varios créditos simultáneos',
      'Ventas en efectivo como fuente de evaluación',
      'Integración con datáfonos de otros bancos'
    ],
    cycleLabel: 'El ciclo del negocio',
    cycle: [
      'Ventas con Qubo',
      'Mejor evaluación',
      'Mejor oferta',
      'Más ventas con Qubo'
    ],
    principlesHead: {
      number: '05.1',
      eyebrow: 'Principios de diseño',
      title: 'Cuatro reglas, una por decisión difícil'
    },
    principles: [
      {
        number: '01',
        title: 'Pesos, no tasas',
        meaning:
          'Todo costo se muestra primero en pesos. La tasa EA existe, pero nunca es lo principal.',
        discards: 'Mostrar la tasa EA como titular.',
        where: 'Pantalla 2: «Recibes $X, devuelves $Y».',
        from: 'Hipótesis H3 · la tasa EA no se entiende'
      },
      {
        number: '02',
        title: 'El ritmo lo pone el comercio',
        meaning:
          'Nada exige un monto fijo en una fecha fija si las ventas no lo permiten.',
        discards: 'Cuotas con fecha de castigo.',
        where: 'Pantallas 3 y 10: pago por venta y ajuste del piso.',
        from: 'Hipótesis H2 · la cuota fija es la barrera'
      },
      {
        number: '03',
        title: 'Avisar antes, no cobrar después',
        meaning:
          'El producto detecta el problema antes que el comercio y le ofrece salidas.',
        discards: 'Cobranza al entrar en mora.',
        where: 'Pantallas 9 a 11: alerta y opciones de ajuste.',
        from: 'El momento crítico de la persona: la semana mala'
      },
      {
        number: '04',
        title: 'Una mano, al sol, entre clientes',
        meaning:
          'Cada tarea se hace con el pulgar, en pantalla pequeña y con interrupciones.',
        discards: 'Formularios largos y pantallas densas.',
        where: 'Pantallas 4 y 5: resumen corto y selfie guiada.',
        from: 'El contexto de uso: celular Android, WhatsApp todo el día'
      }
    ],
    principleLabels: {
      discards: 'Lo que descarta',
      where: 'Dónde se ve',
      from: 'De dónde sale'
    }
  },

  decisions: {
    head: {
      number: '06',
      eyebrow: 'Decisiones clave',
      title: 'Cinco decisiones, cada una con lo que dejó atrás',
      lead: 'Cada decisión eligió una opción y renunció a otras. Aquí quedan las opciones, el porqué, lo que se asume y cómo se valida.'
    },
    labels: {
      options: 'Opciones',
      chosen: 'Elegida',
      why: 'Por qué',
      assume: 'Qué asumimos',
      validate: 'Cómo la validamos'
    },
    decisions: [
      {
        number: '1',
        tag: 'Decisión 1',
        title: 'Cómo se paga el crédito',
        options: [
          { label: 'A', text: 'Cuota fija mensual' },
          { label: 'B', text: 'Cuota fija diaria' },
          { label: 'C', text: '% de cada venta', isChosen: true }
        ],
        why: 'A ignora la caja del tendero. B copia al gota a gota y se vuelve una presión en un día malo. C sigue el ritmo de ventas (H2).',
        assume:
          'El plazo se vuelve variable. Se controla con piso semanal y plazo máximo de 6 meses.',
        validate:
          'Preferencia de frecuencia en entrevistas; comprensión de la pantalla 3, «Así se paga».'
      },
      {
        number: '2',
        tag: 'Decisión 2',
        title: 'Cómo se muestra el costo',
        options: [
          { label: 'A', text: 'Tasa EA como titular' },
          { label: 'B', text: 'Cuota en pesos por período' },
          {
            label: 'C',
            text: 'Total en pesos: «Recibes $X, devuelves $Y»',
            isChosen: true
          }
        ],
        why: 'Se entiende sin hacer cálculos (H3). A es el estándar del sector, pero es la que menos se comprende.',
        assume: 'La tasa EA sigue visible en el resumen legal, por regulación.',
        validate:
          'Test de comprensión: la mayoría responde bien cuánto devuelve (5 de 6).'
      },
      {
        number: '3',
        tag: 'Decisión 3',
        title: 'Quién inicia el crédito',
        options: [
          { label: 'A', text: 'Solicitud completa' },
          { label: 'B', text: 'Solicitud corta con botón «Pedir crédito»' },
          { label: 'C', text: 'Oferta preaprobada de Qubo', isChosen: true }
        ],
        why: 'Elimina papeles y espera (H1). Nequi muestra que el modelo funciona a escala: el 68% de sus créditos fue a personas con poca o nula experiencia crediticia.',
        assume:
          'Solo llega a quien ya cobra con Qubo. Hay riesgo de que se sienta como vigilancia, por eso el consentimiento sobre los datos va claro.',
        validate:
          'Tasa de aceptación; entrevistas sobre confianza en el uso de datos.'
      },
      {
        number: '4',
        tag: 'Decisión 4',
        title: 'Qué pasa en un mal día',
        options: [
          { label: 'A', text: 'Esperar la mora y cobrar' },
          { label: 'B', text: 'Recordatorio genérico' },
          {
            label: 'C',
            text: 'Alerta proactiva con opciones de ajuste',
            isChosen: true
          }
        ],
        why: 'Cumple el principio 3 y protege la relación y la cartera al mismo tiempo.',
        assume: 'Menos recaudo a corto plazo a cambio de menos mora.',
        validate:
          '% de alertas que terminan en ajuste frente a las que terminan en mora.'
      },
      {
        number: '5',
        tag: 'Decisión 5',
        title: 'Cómo se verifica la identidad',
        options: [
          {
            label: 'A',
            text: 'Subir foto de la cédula (frente y reverso) y llenar un formulario'
          },
          { label: 'B', text: 'Validación con un asesor' },
          {
            label: 'C',
            text: 'Selfie guiada de reconfirmación, sin pedir documentos otra vez',
            isChosen: true
          }
        ],
        why: 'El comercio ya pasó la verificación completa al abrir su cuenta Qubo, así que no se le pide lo que el banco ya sabe. Cumple el principio 4 y ataca la fricción de papeles (H1). La selfie sigue protegiendo el desembolso.',
        assume:
          'Compliance permite reconfirmar con biometría sobre una verificación previa (a validar). Una selfie puede fallar con poca luz o un celular antiguo.',
        validate:
          'Tasa de finalización de la verificación, tiempo que toma y causa de los fallos (luz, encuadre, cámara).',
        extras: [
          { label: 'Sin documentos', value: 'No los necesita.' },
          {
            label: 'Error de validación',
            value:
              'Reintento guiado (luz, encuadre) y, si persiste, ayuda humana.'
          },
          {
            label: 'Datos incompletos',
            value: 'Los campos llegan precargados desde el onboarding.'
          }
        ]
      }
    ]
  },

  flows: {
    head: {
      number: '07',
      eyebrow: 'Flujos y arquitectura',
      title: 'Un ciclo, no un embudo',
      lead: 'Cada crédito pagado abre la puerta a uno mayor. El flujo tiene dos momentos: la oferta y el día malo.'
    },
    moments: [
      {
        number: '1',
        name: 'La oferta',
        tagline: 'De «no sabía que podía» a «ya tengo la plata».',
        steps: [
          'Cobra con Qubo',
          'Recibe la oferta (1)',
          'Entiende el costo (2, 3 y 4)',
          'Verifica con selfie (5)',
          'Desembolso (6)'
        ]
      },
      {
        number: '2',
        name: 'El día malo',
        tagline: 'De «me van a cobrar» a «el banco me cubrió».',
        steps: ['Paga sola con sus ventas (7 y 8)', '¿Bajan las ventas?'],
        branches: [
          {
            condition: 'No',
            steps: [
              'Crédito pagado (12)',
              'Nueva oferta mayor',
              'Vuelve al inicio del ciclo'
            ]
          },
          {
            condition: 'Sí',
            steps: [
              'Qubo avisa antes de la mora (9)',
              'El comercio ajusta el plan (10 y 11)',
              'Sigue pagando'
            ]
          }
        ]
      }
    ],
    edgeLabel: 'Flujos alternos y casos borde',
    edge: {
      columns: ['Caso', 'Qué pasa'],
      rows: [
        [
          'No elegible todavía',
          'Muestra cuánto le falta (días cobrando con Qubo) y un avance visible'
        ],
        [
          'Rechaza la oferta',
          'Una pregunta corta de por qué, sin insistir; la oferta queda disponible un tiempo'
        ],
        ['Falla la selfie', 'Reintento guiado y, si persiste, ayuda humana'],
        [
          'Sin conexión',
          'La oferta y el progreso se ven guardados; las acciones esperan a que vuelva la conexión'
        ],
        [
          'Ventas en cero varios días',
          'Se activa el modo día malo automáticamente'
        ]
      ]
    },
    architectureLabel: 'Arquitectura de la app del comercio',
    architectureLead: 'Cuatro pestañas y una campana de notificaciones.',
    tabs: {
      columns: ['Pestaña', 'Contenido'],
      rows: [
        ['Inicio', 'Ventas del día, progreso de Pulso, ofertas'],
        ['Cobrar', 'QR y Bre-B'],
        ['Crédito', 'Detalle de Pulso, movimientos, ajustes'],
        ['Perfil', 'Datos del comercio, documentos, ayuda']
      ]
    },
    architectureWhy:
      'Cobrar es el hábito diario del tendero y la fuente de datos del crédito. Pulso vive dentro de lo que ya usa: una tarjeta en Inicio y el detalle en Crédito, sin una app aparte.',
    internalLabel: 'Vista interna de Qubo (desktop)',
    internal: [
      'Cartera Pulso',
      'Comercios en modo día malo',
      'Mora',
      'Detalle de un comercio'
    ],
    visual: {
      label:
        'Diagrama del ciclo en dos bandas (Momento 1 y Momento 2) y mapa de navegación de la app'
    }
  },

  design: {
    head: {
      number: '08',
      eyebrow: 'Diseño final',
      title: 'Doce pantallas y dos que lo cuentan todo',
      lead: 'Con la pantalla 2 y la 10, un reclutador entiende el caso. El resto sirve de respaldo.'
    },
    levelsLabel: 'Prioridad',
    levels: [
      {
        title: 'Nivel A',
        text: 'Pantallas héroe. Alta fidelidad completa, con todos sus estados. Se muestran grandes en el caso.'
      },
      {
        title: 'Nivel B',
        text: 'Alta fidelidad estándar, parte del prototipo.'
      }
    ],
    moments: [
      {
        name: 'Momento 1 · La oferta',
        tagline: 'De «no sabía que podía» a «ya tengo la plata».',
        screens: [
          {
            number: '1',
            name: 'Home del comercio',
            solves:
              'Mostrar la oferta sin interrumpir la operación: ventas del día y tarjeta de oferta.',
            micro: 'La tarjeta aparece con animación suave.',
            level: 'B'
          },
          {
            number: '2',
            name: 'Detalle de la oferta',
            solves:
              'Entender el trato en 5 segundos: «Recibes / devuelves» en pesos, % por venta y selector de monto.',
            micro: 'El total a devolver se recalcula al mover el selector.',
            level: 'A'
          },
          {
            number: '3',
            name: 'Así se paga',
            solves:
              'Quitar el miedo a la cuota: ejemplo de un día bueno y uno malo.',
            micro: 'Animación de una venta que descuenta el 8%.',
            level: 'A'
          },
          {
            number: '4',
            name: 'Resumen y consentimiento',
            solves:
              'Cumplir regulación sin abrumar: resumen simple; legal y tasa EA expandibles; uso de datos.',
            micro: 'El botón se activa solo tras aceptar.',
            level: 'B'
          },
          {
            number: '5',
            name: 'Verificación de identidad',
            solves:
              'Reconfirmar que es el titular con una selfie guiada, sin documentos.',
            micro:
              'Guía de encuadre en vivo; loading; error con reintento guiado.',
            level: 'B'
          },
          {
            number: '6',
            name: 'Desembolso',
            solves:
              'Dar certeza: monto recibido, dónde está la plata y qué sigue.',
            micro: 'Contador del dinero llegando.',
            level: 'B'
          }
        ]
      },
      {
        name: 'Momento 2 · El día malo',
        tagline: 'De «me van a cobrar» a «el banco me cubrió».',
        screens: [
          {
            number: '7',
            name: 'Pulso en el home',
            solves:
              'Ver el avance sin buscarlo: barra de progreso del crédito.',
            micro: 'La barra avanza con cada venta.',
            level: 'A'
          },
          {
            number: '8',
            name: 'Detalle del crédito',
            solves:
              'Dar control total: pagado, pendiente, fecha estimada y movimientos.',
            micro: 'La fecha estimada se ajusta al ritmo de ventas.',
            level: 'B'
          },
          {
            number: '9',
            name: 'Alerta proactiva',
            solves:
              'Avisar antes de que haya problema: «Tus ventas bajaron esta semana».',
            micro: 'Notificación push y banner en el home.',
            level: 'B'
          },
          {
            number: '10',
            name: 'Opciones de ajuste',
            solves:
              'Dar salidas sin culpa: pausar el piso una semana o extender el plazo, con el impacto en pesos.',
            micro: 'Comparador antes / después.',
            level: 'A'
          },
          {
            number: '11',
            name: 'Confirmación del ajuste',
            solves: 'Dar tranquilidad: nuevo plan y próxima revisión.',
            micro: 'Check animado.',
            level: 'B'
          },
          {
            number: '12',
            name: 'Crédito pagado',
            solves:
              'Cerrar el ciclo: celebración, historial ganado y nueva oferta mayor.',
            micro: 'Celebración breve que no bloquea.',
            level: 'B'
          }
        ]
      }
    ],
    screenLabels: {
      solves: 'Qué resuelve',
      micro: 'Microinteracción o estado',
      levelA: 'Nivel A',
      levelB: 'Nivel B'
    },
    heroLabel: 'Las dos pantallas héroe',
    heroLead:
      'Cada momento tiene una pantalla que muestra su principio en acción. Toca los puntos para ver qué resuelve.',
    heroes: [
      {
        number: '2',
        tag: 'Pantalla 2',
        name: 'Detalle de la oferta',
        principle: 'Pesos, no tasas',
        visual: {
          label:
            'Pantalla 2 · Detalle de la oferta con «Recibes / devuelves», % por venta y selector de monto'
        },
        hotspots: [
          {
            x: 50,
            y: 28,
            title: 'Recibes $X, devuelves $Y',
            text: 'El costo se lee en pesos, sin hacer cálculos. La tasa EA queda en el resumen legal.'
          },
          {
            x: 28,
            y: 52,
            title: '8% de cada venta',
            text: 'El pago sigue el ritmo de la caja, no una fecha fija.'
          },
          {
            x: 62,
            y: 74,
            title: 'Selector de monto',
            text: 'Slider con botones − y +. El total a devolver se recalcula al moverlo.'
          }
        ]
      },
      {
        number: '10',
        tag: 'Pantalla 10',
        name: 'Opciones de ajuste',
        principle: 'Avisar antes, no cobrar después',
        visual: {
          label:
            'Pantalla 10 · Opciones de ajuste con el comparador antes / después'
        },
        hotspots: [
          {
            x: 50,
            y: 24,
            title: 'Aviso sin culpa',
            text: 'Qubo detecta la semana floja antes de que haya mora y ofrece salidas.'
          },
          {
            x: 30,
            y: 52,
            title: 'Pausar el piso o extender el plazo',
            text: 'Dos salidas claras, cada una con su impacto en pesos.'
          },
          {
            x: 66,
            y: 72,
            title: 'Comparador antes / después',
            text: 'Se ve qué cambia en el plan antes de confirmar.'
          }
        ]
      }
    ],
    hotspotHint: 'Toca un punto',
    edgeLabel: 'Estados borde',
    edge: [
      'No elegible todavía (pantalla propia): qué le falta y un avance visible',
      'Error de verificación (pantalla propia): causa en lenguaje simple, reintento y ayuda humana',
      'Sin conexión: la oferta y el progreso se ven guardados; las acciones esperan',
      'Oferta rechazada: una pregunta corta de por qué, sin insistir',
      'Ventas en cero varios días: se activa el modo día malo'
    ],
    supportLabel: 'Pantallas de apoyo',
    support: [
      'Cobrar con QR o Bre-B',
      'Onboarding del comercio',
      'Centro de notificaciones, desde la campana',
      'Vista interna de Qubo (desktop): un frame con la salud de la cartera, comercios en modo día malo y mora'
    ],
    total:
      '12 pantallas principales, 2 de estado, 3 de apoyo y 1 frame desktop. Las de nivel A son cuatro: 2, 3, 7 y 10.',
    priority:
      'Si el tiempo aprieta: construir primero el nivel A (2, 3, 7 y 10) y el prototipo navegable del flujo. Después, el resto por orden de flujo.'
  },

  system: {
    head: {
      number: '09',
      eyebrow: 'Mini design system y accesibilidad',
      title: 'Un sistema que se lee al sol',
      lead: 'Parte de mi propio design system (colores, Manrope, botones e iconos) y se amplía con lo que Pulso necesita.'
    },
    baseLabel: 'Base del sistema',
    base: [
      {
        name: 'Azul oscuro',
        hex: '#2B2A6F',
        use: 'Títulos, hover, tarjeta de Pulso',
        onColor: '#FFFFFF'
      },
      {
        name: 'Azul principal',
        hex: '#5454EA',
        use: 'Botón default, enlaces',
        onColor: '#FFFFFF'
      },
      {
        name: 'Azul claro',
        hex: '#B5CAFF',
        use: 'Pistas, deshabilitado',
        onColor: '#04042A'
      },
      {
        name: 'Azul noche',
        hex: '#04042A',
        use: 'Texto principal',
        onColor: '#FFFFFF'
      },
      {
        name: 'Lima',
        hex: '#E1F44B',
        use: 'Acento: avance del crédito',
        onColor: '#04042A'
      },
      {
        name: 'Blanco',
        hex: '#FFFFFF',
        use: 'Superficies',
        onColor: '#04042A'
      }
    ],
    addedLabel: 'Colores que se suman',
    addedLead: 'Pulso necesita estados que el sistema original no tenía.',
    added: [
      {
        name: 'Éxito',
        hex: '#17794D',
        use: 'Confirmaciones y pagos · 5,4:1 sobre blanco',
        onColor: '#FFFFFF'
      },
      {
        name: 'Alerta (fondo)',
        hex: '#FEF3C7',
        use: 'Modo día malo, tono cálido · texto #92400E, 6,4:1',
        onColor: '#92400E'
      },
      {
        name: 'Error',
        hex: '#B3261E',
        use: 'Solo errores reales · 6,5:1 sobre blanco',
        onColor: '#FFFFFF'
      },
      {
        name: 'Texto secundario',
        hex: '#4A4A6A',
        use: 'Apoyo y etiquetas · 8,5:1 sobre blanco',
        onColor: '#FFFFFF'
      },
      {
        name: 'Borde de campos',
        hex: '#7C7C9E',
        use: 'Inputs y controles · 4,0:1 sobre blanco',
        onColor: '#FFFFFF'
      }
    ],
    limeLabel: 'Cómo se usa el lima',
    lime: 'La tarjeta de Pulso va en azul oscuro y la barra de progreso en lima. El contraste es de 10,4:1, se lee al sol y la barra se vuelve el elemento más llamativo de la pantalla. El lima queda reservado para el avance del crédito y para un solo énfasis por pantalla.',
    limeRule:
      'El lima nunca va sobre fondo claro. Sobre claro, la barra usa #5454EA sobre #B5CAFF.',
    contrastsLabel: 'Contrastes verificados',
    contrasts: {
      columns: ['Combinación', 'Contraste', 'Mínimo'],
      rows: [
        ['Texto #04042A sobre blanco', '19,9:1', '4,5:1'],
        ['Texto #2B2A6F sobre blanco', '12,6:1', '4,5:1'],
        ['Blanco sobre botón default #5454EA', '5,5:1', '4,5:1'],
        ['Blanco sobre hover #2B2A6F', '12,6:1', '4,5:1'],
        ['#04042A sobre lima #E1F44B', '16,3:1', '4,5:1'],
        ['Lima sobre #2B2A6F', '10,4:1', '3:1'],
        ['Barra #5454EA sobre pista #B5CAFF', '3,4:1', '3:1']
      ]
    },
    adjustmentsLabel: 'Tres ajustes sobre el sistema original',
    adjustments: {
      columns: ['Problema', 'Contraste', 'Decisión'],
      rows: [
        [
          'Botón deshabilitado: texto blanco sobre #B5CAFF',
          '1,6:1',
          'Texto #2B2A6F con opacidad, o un gris azulado, y el motivo a la vista («Acepta para continuar»)'
        ],
        [
          'Lima sobre blanco',
          '1,2:1',
          'El lima nunca va sobre fondo claro. Solo sobre azul oscuro o negro, o como fondo con texto oscuro encima'
        ],
        [
          '#5454EA sobre lima',
          '4,5:1',
          'Pasa justo. Mejor usar #04042A sobre lima'
        ]
      ]
    },
    typeLabel: 'Tipografía · Manrope',
    typeSample: '$2.000.000',
    typeSampleNote: 'ExtraBold, 32 a 40 sp, con formato colombiano',
    typeRules: [
      'Las cifras en pesos son lo más grande de cada pantalla.',
      'Texto base de 16 sp como mínimo, en Regular o Medium.',
      'Cifras tabulares (tnum) para que los montos alineen; por verificar en la versión de Manrope.'
    ],
    shapeLabel: 'Forma y espacio',
    shape: [
      { title: 'Escala', text: '4 y 8 px' },
      { title: 'Esquinas', text: '12 px' },
      { title: 'Sombras', text: 'Sin sombras pesadas: a pleno sol se pierden' }
    ],
    iconsLabel: 'Iconos',
    icons:
      'Set de línea fina para navegación y acciones. En celular pequeño y a pleno sol, el trazo más grueso disponible y siempre con etiqueta. Faltan los íconos de este caso: QR / cobrar, alerta, pausa y calendario.',
    componentsLabel: 'Componentes clave',
    components: {
      columns: ['Componente', 'Estados a diseñar'],
      rows: [
        ['Tarjeta de oferta', 'Normal, expirada'],
        [
          'Selector de monto (slider + botones − / +)',
          'Normal, en uso, deshabilitado'
        ],
        ['Barra de progreso Pulso', 'Avanzando, en pausa, completa'],
        ['Banner de alerta', 'Informativo, día malo'],
        ['Comparador antes / después', 'Normal'],
        [
          'Botón primario y secundario',
          'Normal, presionado, cargando, deshabilitado'
        ],
        ['Acordeón legal', 'Cerrado, abierto'],
        ['Guía de selfie', 'Buscando, encuadre correcto, error'],
        ['Toast de confirmación', 'Éxito, error'],
        ['Barra de pestañas (4)', 'Activa, inactiva, con insignia']
      ]
    },
    accessibilityLabel: 'Accesibilidad',
    accessibility: [
      {
        title: 'Color + texto o ícono',
        text: 'El color nunca es el único portador de significado.'
      },
      {
        title: 'Áreas táctiles de 48 × 48 dp',
        text: 'Como mínimo.'
      },
      {
        title: 'El slider tiene alternativa',
        text: 'Botones − y + para quien no pueda arrastrar con precisión.'
      },
      {
        title: 'Lector de pantalla',
        text: 'Las cifras se leen completas: «recibes dos millones de pesos».'
      },
      {
        title: 'Texto ampliado hasta 200%',
        text: 'Sin romper el layout.'
      },
      {
        title: 'Movimiento reducido',
        text: 'La celebración y las animaciones tienen versión estática.'
      },
      {
        title: 'Lenguaje claro',
        text: 'Frases cortas y sin jerga financiera.'
      }
    ]
  },

  validation: {
    head: {
      number: '10',
      eyebrow: 'Validación, impacto y aprendizajes',
      title:
        'Lo que se va a probar, y lo que haría falta para saber que funciona',
      lead: 'Con 6 personas los resultados son direccionales, no estadísticos. Se presentan como señales, no como porcentajes de mercado.'
    },
    testLabel: 'Cómo se prueba',
    test: [
      {
        label: 'Quién',
        value:
          '6 dueños de microcomercios (tiendas, peluquerías, venta de comida)'
      },
      {
        label: 'Dónde',
        value: 'En su negocio, con un celular Android real'
      },
      {
        label: 'Qué',
        value: 'Prototipo navegable en Figma de los dos momentos'
      },
      {
        label: 'Formato',
        value:
          'Una sesión de 45 minutos en dos partes: 30 de entrevista y 15 de prueba, hablando en voz alta'
      },
      {
        label: 'Cómo se mide',
        value:
          'Respuesta correcta (sí / no), tiempo, errores, valoración de facilidad del 1 al 7 y citas textuales'
      }
    ],
    tasksLabel: 'Tareas de la prueba',
    tasks: {
      columns: [
        '#',
        'Tarea',
        'Pantallas',
        'Decisión o hipótesis',
        'Señal de éxito'
      ],
      rows: [
        [
          '1',
          '«Dime cuánto recibes y cuánto devuelves»',
          '2',
          'D2 · H3',
          '5 de 6 responden bien, sin ayuda'
        ],
        [
          '2',
          '«Cuéntame con tus palabras cómo se paga»',
          '3',
          'D1 · H2',
          '5 de 6 lo explican correctamente'
        ],
        [
          '3',
          'Aceptar la oferta y recibir la plata',
          '1 a 6',
          'D3 · D5',
          'Lo completan sin ayuda; la selfie pasa a la primera en 5 de 6'
        ],
        [
          '4',
          '«Tus ventas bajaron: ¿qué harías?»',
          '9 a 11',
          'D4',
          'Encuentran la opción de ajuste y dicen qué pasa con su plata'
        ],
        [
          '5',
          '«¿Qué sientes de que el banco vea tus ventas?»',
          '4',
          'Riesgo de la decisión 3',
          'Sin señales fuertes de rechazo o vigilancia'
        ]
      ]
    },
    rulesLabel: 'Reglas de decisión: si pasa X, hacemos Y',
    rules: {
      columns: ['Si vemos', 'Entonces'],
      rows: [
        [
          'Menos de 4 de 6 entienden el costo',
          'Rediseñar la pantalla 2: ejemplo comparado y texto más corto'
        ],
        [
          '«Así se paga» no se entiende',
          'Reducirla a una sola animación y una frase'
        ],
        [
          'La selfie falla en 2 o más casos',
          'Reforzar la guía de encuadre y adelantar la ayuda humana'
        ],
        [
          'Sensación de vigilancia con los datos',
          'Reescribir el consentimiento: qué datos, para qué y cómo apagarlo'
        ]
      ]
    },
    planBLabel: 'Plan B',
    planB:
      'Probar con dueños de negocios pequeños del entorno. Se declara en el caso y los resultados se presentan como señales.',
    iterationsLabel: 'Registro de iteraciones',
    iterations: {
      columns: ['Ronda', 'Qué vimos', 'Qué cambiamos', 'Antes / después'],
      rows: [['1', 'Pendiente', 'Pendiente', 'Captura de pantalla']]
    },
    iterationsHint:
      'Cada cambio importante llevará una pareja de pantallas «antes / después» y la cita del tendero que lo motivó.',
    metricsLabel: 'Impacto esperado y métricas',
    northStarLabel: 'North Star',
    northStar:
      '% de créditos Pulso pagados por completo sin mora mayor a 30 días.',
    northStarWhy:
      'Es la única métrica que sirve a la vez al comercio (terminó de pagar sin ahogarse) y a Qubo (cartera sana). Como el proyecto es conceptual, el impacto se presenta como hipótesis medibles.',
    stagesLabel: 'Métricas por etapa del ciclo',
    stages: {
      columns: ['Etapa', 'Métrica', 'Qué dice'],
      rows: [
        [
          'Oferta',
          'Ofertas aceptadas / ofertas vistas',
          'Si la oferta atrae y se entiende'
        ],
        [
          'Comprensión',
          '% que responde bien cuánto devuelve',
          'Si «pesos, no tasas» funciona'
        ],
        [
          'Verificación',
          '% que completa la selfie a la primera',
          'Si la fricción de identidad quedó resuelta'
        ],
        [
          'Desembolso',
          'Minutos desde ver la oferta hasta recibir la plata',
          'Qué tan rápido es el flujo completo'
        ],
        [
          'Uso',
          '% de alertas de mal día que terminan en ajuste, no en mora',
          'Si «avisar antes» evita la mora'
        ],
        [
          'Cierre',
          'Créditos pagados sin mora mayor a 30 días (North Star)',
          'Si el modelo funciona'
        ],
        [
          'Retención',
          '% que toma un segundo Pulso',
          'Confianza y valor percibido'
        ]
      ]
    },
    protectionLabel: 'Métricas de protección',
    protection: {
      columns: ['Métrica', 'Qué evita'],
      rows: [
        ['Mora mayor a 30 días', 'Crecer aceptando más riesgo'],
        [
          'Peso del crédito sobre las ventas del comercio',
          'Sobreendeudamiento'
        ],
        [
          '% de comercios que revocan el uso de sus datos',
          'Sensación de vigilancia'
        ],
        [
          'Reclamos relacionados con costo o cobro',
          'Que «pesos, no tasas» oculte algo'
        ],
        [
          'Fallos de verificación por causa (luz, cámara, encuadre)',
          'Que la selfie excluya a quien tiene un celular modesto'
        ]
      ]
    },
    impactLabel: 'Impacto esperado',
    businessLabel: 'Para el negocio de Qubo',
    business: [
      'Cartera sana: menos mora que un microcrédito de cuota fija (hipótesis a comprobar en el piloto).',
      'Más ventas cobradas por Qubo: el comercio concentra sus cobros para acceder a montos mayores.',
      'Menor costo de evaluar: cada ciclo pagado mejora la información de riesgo.'
    ],
    merchantLabel: 'Para el comercio',
    merchant: [
      'Sustituir el gota a gota: auto-reporte en una encuesta tras cerrar el crédito.',
      'Ahorro en costo financiero: el total pagado con Pulso frente a lo que el comercio dice que pagaba antes.',
      'Menos estrés en semanas malas: valoración en la encuesta de cierre.'
    ],
    eventsLabel: 'Eventos de analítica a instrumentar',
    events: [
      'oferta_vista',
      'oferta_aceptada',
      'verificacion_completada',
      'verificacion_fallida',
      'desembolso',
      'pago_aplicado',
      'alerta_enviada',
      'ajuste_aplicado',
      'credito_cerrado',
      'segunda_oferta_aceptada'
    ],
    measureNote:
      'Cómo se mediría: un piloto con un grupo pequeño de comercios y revisión semanal de estas métricas. Las metas numéricas se fijan después de tener una línea base. Poner un número antes de medir sería inventarlo.'
  },

  learnings: {
    head: {
      number: '10.1',
      eyebrow: 'Aprendizajes, próximos pasos y uso de IA',
      title: 'Lo que cambia cuando hable con los tenderos'
    },
    learningsLabel: 'Aprendizajes',
    learningsFormat: ['Esperaba', 'Encontré', 'Cambié'],
    differentLabel: 'Qué haría distinto',
    differentHint:
      'Una sola idea honesta: algo que habría investigado antes o una decisión tomada con poca evidencia.',
    nextLabel: 'Próximos pasos del producto',
    nextLead: 'Escritos como hipótesis, no como promesas.',
    next: {
      columns: ['Paso', 'Por qué'],
      rows: [
        [
          'Sumar las ventas en efectivo como señal de evaluación',
          'Hoy Pulso solo ve lo que se cobra con Qubo; es su límite más grande'
        ],
        [
          'Pago automático con los débitos recurrentes de Bre-B, cuando estén disponibles',
          'Hoy están anunciados, no operando'
        ],
        [
          'Extender el modelo a otros segmentos (independientes, repartidores)',
          'Comparten el problema del ingreso irregular'
        ],
        [
          'Revisar la tarifa del cargo con un experto regulatorio',
          'Es la tensión abierta de la estrategia'
        ]
      ]
    },
    aiLabel: 'Cómo usé la IA',
    ai: {
      columns: ['Parte', 'Qué hizo la IA', 'Qué hice yo'],
      rows: [
        [
          'Investigación',
          'Buscó y resumió fuentes',
          'Revisé las cifras, descarté las que no tenían fuente y marqué las limitaciones'
        ],
        [
          'Estructura del caso',
          'Propuso módulos y alternativas',
          'Elegí, ajusté y descarté'
        ],
        [
          'Estrategia y decisiones',
          'Planteó opciones',
          'Tomé las decisiones y asumí los trade-offs'
        ],
        [
          'Accesibilidad',
          'Calculó los contrastes de color',
          'Ajusté mi design system con esos resultados'
        ],
        [
          'Validación con usuarios',
          'Nada',
          'Hice las entrevistas y las pruebas'
        ]
      ]
    },
    notDelegatedLabel: 'Lo que no delegué',
    notDelegated:
      'Hablar con los tenderos y decidir qué cambiar con lo que dijeron.',
    sourcesLabel: 'Fuentes',
    sources: [
      {
        title: 'Semana: tiendas de barrio',
        url: 'https://www.semana.com/especiales-multimedia/articulo/tiendas-de-barrio-pequenos-motores-que-impulsan-la-economia/202656/'
      },
      {
        title: 'Cambio: gota a gota financia al 14,2% de los micronegocios',
        url: 'https://cambiocolombia.com/economia/articulo/2023/3/gota-gota-fuente-de-financiamiento-del-142-por-ciento-de-los-micronegocios-en-colombia'
      },
      {
        title: 'Banco de la República: Bre-B cumple un año',
        url: 'https://banrep.gov.co/es/noticias/bre-b-cumple-un-anio-en-colombia'
      },
      {
        title: 'Portafolio: Bre-B supera los 100 millones de llaves',
        url: 'https://www.portafolio.co/economia/finanzas/en-seis-meses-bre-b-supera-las-100-millones-de-llaves-y-acelera-la-transformacion-de-pagos-en-colombia-492544'
      },
      {
        title: 'Vanguardia: Bre-B habilitará débitos recurrentes',
        url: 'https://www.vanguardia.com/colombia/2026/07/22/colombia-avanza-hacia-los-pagos-automaticos-bre-b-habilitara-debitos-recurrentes-sin-tarjetas/'
      },
      {
        title: 'Valora Analitik: Treinta ofrece crédito sin intereses',
        url: 'https://www.valoraanalitik.com/?p=411889'
      },
      {
        title: 'La República: Treinta lanza datáfono',
        url: 'https://www.larepublica.co/finanzas/app-treinta-lanzo-datafono-para-conectar-a-tenderos-y-aportar-a-la-inclusion-financiera-3403695'
      },
      {
        title: 'La República: Treinta, 1,4 millones de micronegocios',
        url: 'https://www.larepublica.co/empresas/contamos-1-4-millones-de-micronegocios-que-estan-presentes-en-nuestra-plataforma-3974531'
      },
      {
        title: 'RCN: cómo funcionan los gota a gota',
        url: 'https://noticiasrcn.com/economia/como-funcionan-los-gota-a-gota-el-panorama-de-prestamos-impagables-377973'
      },
      {
        title: 'Valora Analitik: Nequi opera como entidad independiente',
        url: 'https://www.valoraanalitik.com/?p=609252'
      },
      {
        title: 'Valora Analitik: Nequi QR para pequeños comercios',
        url: 'https://www.valoraanalitik.com/nequi-permitira-a-pequenos-comercios-recibir-pagos-desde-otros-bancos-y-sin-costo/'
      },
      {
        title: 'Tiendanube: Nequi Negocios',
        url: 'https://www.tiendanube.com/co/blog/nequi'
      },
      {
        title: 'Bloomberg Línea: Nequi y los créditos',
        url: 'https://www.bloomberglinea.com/latinoamerica/colombia/nequi-espera-entregar-cop5-billones-en-creditos-y-prepara-productos-de-inversion/'
      },
      {
        title: 'El País: préstamos de Nequi en 2026',
        url: 'https://www.elpais.com.co/economia/estos-son-los-prestamos-que-ofrece-nequi-en-2026-cuanto-pagaria-mes-a-mes-por-uno-de-25-millones-1948.html'
      },
      {
        title: 'Diario del Sur: créditos de Nequi 2026',
        url: 'https://www.diariodelsur.com.co/?p=541433'
      },
      {
        title: 'Bancolombia: microcrédito',
        url: 'https://www.bancolombia.com/negocios/productos-financieros/microcredito'
      }
    ],
    limitationsLabel: 'Limitaciones',
    limitations: [
      'Las cifras de micronegocios (81,2% y 14,2%) son de 2023 y no son exclusivas de tenderos.',
      'El número de tiendas de barrio varía según la fuente: de 266.000 (cifra antigua de Fenalco) a más de 500.000.',
      'La cifra de usuarios de Nequi varía entre 27 y 30 millones según la fuente.',
      'Las tasas de Nequi varían según la fuente y el programa. El 68% de créditos a personas con poca experiencia crediticia es una cifra reportada en prensa.',
      'Lo más reciente que encontré sobre el crédito de Treinta es de 2024.',
      'Las cifras de gota a gota son estimaciones de prensa.',
      '«Nadie combina las cuatro cosas» sale de lo que encontré, no de una revisión exhaustiva.'
    ],
    closing:
      'Diseñé un crédito que se adapta al ritmo de caja del tendero, para que el banco le gane al gota a gota.'
  }
};
