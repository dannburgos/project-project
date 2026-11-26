import type { QuboStory } from '@/content/qubo-story.types';

// Caso Pulso by Qubo Bank. Estructura tomada de armor-bd.com (píldora de
// navegación, frase grande con cifra, puntos sobre la imagen, funciones
// numeradas, FAQ) y de later.com/made-you-look (créditos, manifiesto y
// bloques con etiqueta, título y cita). Los 14 módulos del documento base se
// reparten en 10 capítulos. Lo que depende de entrevistas aún no hechas se
// marca «en curso».
export const quboStory: QuboStory = {
  sections: [
    { id: 'qb-ch-1', number: '01', name: 'Contexto' },
    { id: 'qb-ch-2', number: '02', name: 'Problema' },
    { id: 'qb-ch-3', number: '03', name: 'Research' },
    { id: 'qb-ch-4', number: '03.1', name: 'Usuario', parentId: 'qb-ch-3' },
    { id: 'qb-ch-5', number: '04', name: 'Estrategia' },
    { id: 'qb-ch-6', number: '05', name: 'Arquitectura' },
    { id: 'qb-ch-7', number: '06', name: 'User flow' },
    { id: 'qb-ch-8', number: '07', name: 'Sistema' },
    { id: 'qb-ch-9', number: '08', name: 'Prototipo' }
  ],

  labels: {
    navigation: 'Capítulos del caso',
    menu: 'Capítulos'
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
    comparisonLabel: 'Comparación de la competencia',
    comparison: {
      columns: ['', 'Gota a gota', 'Treinta', 'Nequi'],
      rows: [
        [
          'Evalúa con',
          'Confianza personal',
          'Ventas registradas en la app',
          'Comportamiento de la persona'
        ],
        [
          'Quién inicia',
          'El tendero lo busca',
          'El tendero compra en el marketplace',
          'Oferta preaprobada'
        ],
        [
          'Cómo paga',
          'Cuota diaria o semanal fija',
          'Pago único a 15 días',
          'Cuotas fijas o pago a 30 días'
        ],
        [
          'Costo visible',
          'Oculto en la cuota',
          'Sin intereses',
          'Tasa + seguro'
        ],
        ['Uso', 'Libre', 'Solo inventario', 'Libre'],
        [
          'Regulación',
          'Ilegal',
          'No confirmada',
          'Vigilada por Superfinanciera'
        ]
      ]
    },
    hypothesesLabel: 'Hipótesis',
    hypothesis: {
      title:
        'El tendero no pide crédito por papeles, tiempo y porque siente que el banco no es para él',
      signal:
        'La mayoría menciona trámites o «no me lo aprueban» antes que el costo.',
      evidence:
        'La banca pide asesor, documentos y tiempo de operación; las fintechs digitalizan pero evalúan a la persona.',
      decision: 'El banco hace la oferta, el tendero no solicita.',
      status: 'Por validar'
    },
    hypothesisLabels: {
      signal: 'Señal que la valida',
      evidence: 'Evidencia del benchmark',
      decision: 'Decisión que alimenta'
    }
  },

  user: {
    head: {
      number: '03.1',
      eyebrow: 'Usuario'
    },
    persona: {
      name: 'Marta',
      role: 'Marta vende todos los días y decide sola',
      photo: {
        label:
          'Foto de Marta · dueña de una tienda de barrio atendiendo su negocio'
      },
      quote:
        'Si me falta plata para surtir, la necesito hoy y quiero pagarla a medida que vendo, sin poner en riesgo la tienda ni pasar pena con un cobrador.',
      traits: [
        {
          label: 'Quién es',
          text: 'Atiendo sola o con un familiar, con un Android de gama media y WhatsApp todo el día. Cobro en efectivo, QR y transferencia.'
        },
        {
          label: 'Hoy resuelve con',
          text: 'Cuando me falta plata recurro al gota a gota, a proveedores que me fían o a mi familia.'
        },
        {
          label: 'Dolores',
          text: 'Los trámites largos del banco me cansan, me da miedo no tener la cuota el día del pago y no entiendo las tasas.'
        },
        {
          label: 'Valora',
          text: 'Valoro la rapidez, un trato sin juicio y saber exactamente cuánto pago.'
        },
        {
          label: 'Momento crítico',
          text: 'En la semana mala vendo poco y el cobrador igual llega.'
        },
        {
          label: 'Lo que busca',
          text: 'Plata hoy, sin papeles y con un pago que siga mis ventas. Tranquilidad en la semana mala y que nadie me juzgue frente a mis vecinos.'
        }
      ]
    }
  },

  strategy: {
    head: {
      number: '04',
      eyebrow: 'Estrategia',
      title: 'Pulso gana si el comercio paga sin mora y vuelve'
    },
    valueLabel: 'Propuesta de valor',
    value:
      'Plata hoy, sin papeles, que se paga sola con tus ventas. Sabes en pesos cuánto recibes y cuánto devuelves.',
    earnLabel: 'Cómo gana Qubo',
    decisionLabel: 'Decisión',
    earn: [
      {
        title: 'Ventas con Qubo',
        text: 'Retiene el 8% de cada venta, con piso semanal y plazo de 6 meses; el resto pasa a cuota fija.',
        decision: 'Se paga con un % de cada venta'
      },
      {
        title: 'Mejor evaluación',
        text: 'Cada ciclo pagado mejora la evaluación y abarata conocer al comercio.',
        decision: 'La oferta es preaprobada por Qubo'
      },
      {
        title: 'Mejor oferta',
        text: 'Montos mayores sobre sus ventas, con cargo fijo en pesos dentro del tope legal.',
        decision: 'Costo total en pesos y selfie guiada'
      },
      {
        title: 'Más ventas con Qubo',
        text: 'Para subir de monto concentra sus cobros en Qubo. Entra con 90 días cobrando; un crédito a la vez.',
        decision: 'Alerta antes de la mora en un mal día'
      }
    ]
  },

  architecture: {
    head: {
      number: '05',
      eyebrow: 'Arquitectura de la información',
      title: 'Dónde vive Pulso dentro de la app'
    },
    root: 'App del comercio · Android primero',
    branches: [
      {
        node: { label: 'Onboarding', kind: 'touch' },
        groups: [
          {
            nodes: [
              { label: 'Verificación completa', kind: 'touch' },
              { label: 'Datos precargados', kind: 'touch' }
            ]
          }
        ]
      },
      {
        node: { label: 'Inicio', kind: 'touch' },
        groups: [
          {
            nodes: [
              { label: 'Ventas del día', kind: 'plain' },
              {
                label: 'Tarjeta de oferta',
                kind: 'new',
                screen: 'Pantalla 1'
              },
              {
                label: 'Progreso de Pulso',
                kind: 'new',
                screen: 'Pantalla 7'
              },
              {
                label: 'Banner de alerta',
                kind: 'new',
                screen: 'Pantalla 9'
              }
            ]
          }
        ]
      },
      {
        node: { label: 'Cobrar', kind: 'touch' },
        groups: [
          {
            nodes: [{ label: 'Cobrar con QR o Bre-B', kind: 'touch' }]
          }
        ]
      },
      {
        node: { label: 'Crédito', kind: 'new' },
        groups: [
          {
            label: 'La oferta',
            nodes: [
              {
                label: 'Detalle de la oferta',
                kind: 'new',
                screen: 'Pantalla 2'
              },
              { label: 'Así se paga', kind: 'new', screen: 'Pantalla 3' },
              {
                label: 'Resumen y consentimiento',
                kind: 'new',
                screen: 'Pantalla 4'
              },
              {
                label: 'Verificación de identidad',
                kind: 'new',
                screen: 'Pantalla 5'
              },
              { label: 'Desembolso', kind: 'new', screen: 'Pantalla 6' }
            ]
          },
          {
            label: 'Mi crédito',
            nodes: [
              {
                label: 'Detalle del crédito',
                kind: 'new',
                screen: 'Pantalla 8'
              },
              {
                label: 'Opciones de ajuste',
                kind: 'new',
                screen: 'Pantalla 10'
              },
              {
                label: 'Confirmación del ajuste',
                kind: 'new',
                screen: 'Pantalla 11'
              },
              {
                label: 'Crédito pagado',
                kind: 'new',
                screen: 'Pantalla 12'
              }
            ]
          },
          {
            label: 'Estados',
            nodes: [
              { label: 'No elegible todavía', kind: 'new' },
              { label: 'Error de verificación', kind: 'new' }
            ]
          }
        ]
      },
      {
        node: { label: 'Perfil', kind: 'touch' },
        groups: [
          {
            nodes: [
              { label: 'Datos del comercio', kind: 'plain' },
              { label: 'Documentos', kind: 'plain' },
              { label: 'Ayuda humana', kind: 'touch' },
              { label: 'Uso de mis datos', kind: 'new' }
            ]
          }
        ]
      },
      {
        node: { label: 'Campana', kind: 'touch' },
        groups: [
          {
            nodes: [
              { label: 'Centro de notificaciones', kind: 'touch' },
              {
                label: 'Alerta de ventas bajas',
                kind: 'new',
                screen: 'Pantalla 9'
              }
            ]
          }
        ]
      }
    ],
    legendLabel: 'Marcas del mapa',
    legend: {
      new: 'Nuevo con Pulso',
      touch: 'Existente que Pulso toca',
      plain: 'Sin cambios'
    }
  },

  userFlow: {
    head: {
      number: '06',
      eyebrow: 'User flow',
      title: 'De la oferta al nuevo crédito'
    },
    stages: [
      {
        name: 'La oferta',
        tagline: 'De «no sabía que podía» a «ya tengo la plata».',
        steps: [
          {
            label: 'Cobra con Qubo',
            isStart: true,
            branch: {
              steps: [
                {
                  label: 'Aún no es elegible',
                  note: 'Ve cuánto le falta y su avance'
                }
              ],
              goes: 'Sigue cobrando'
            }
          },
          { label: 'Recibe la oferta', screens: 'Pantalla 1' },
          {
            label: 'Entiende el costo',
            screens: 'Pantallas 2 y 3',
            branch: {
              steps: [
                { label: 'Rechaza la oferta' },
                { label: 'Dice por qué', note: 'Una pregunta corta' }
              ],
              goes: 'La oferta queda disponible'
            }
          },
          { label: 'Resumen y consentimiento', screens: 'Pantalla 4' },
          { label: 'Selfie guiada', screens: 'Pantalla 5' },
          {
            label: 'Validación',
            branch: {
              steps: [
                { label: 'Error' },
                { label: 'Reintento guiado', note: 'Luz y encuadre' },
                { label: 'Ayuda humana' }
              ],
              loopBack: 1,
              goes: 'Vuelve a la selfie'
            }
          },
          { label: 'Desembolso', screens: 'Pantalla 6' }
        ]
      },
      {
        name: 'El día malo',
        tagline: 'De «me van a cobrar» a «el banco me cubrió».',
        steps: [
          {
            label: 'Paga sola con sus ventas',
            screens: 'Pantallas 7 y 8',
            note: 'Sin conexión ve guardados la oferta y el progreso'
          },
          {
            label: 'Bajan las ventas',
            note: 'Varios días en cero activan el modo día malo',
            branch: {
              steps: [
                { label: 'Ventas estables' },
                { label: 'Crédito pagado', screens: 'Pantalla 12' },
                { label: 'Nueva oferta mayor' }
              ],
              goes: 'Vuelve a «Recibe la oferta»'
            }
          },
          {
            label: 'Qubo avisa antes de la mora',
            screens: 'Pantalla 9'
          },
          {
            label: 'Opciones de ajuste',
            screens: 'Pantalla 10',
            branch: {
              steps: [{ label: 'No ajusta' }, { label: 'Sigue con su plan' }],
              goes: 'Vuelve a pagar con sus ventas'
            }
          },
          { label: 'Confirmación del ajuste', screens: 'Pantalla 11' },
          { label: 'Sigue pagando' }
        ]
      }
    ]
  },

  system: {
    head: {
      number: '07',
      eyebrow: 'Sistema de diseño',
      title: 'Modo oscuro, una fuente y cinco colores'
    },
    foundations: {
      title: 'Fundamentos',
      color: {
        title: 'Color',
        note: 'Blanco sobre verde da 3,6:1: solo en texto grande.',
        groups: [
          {
            title: 'Marca',
            swatches: [
              {
                name: 'Menta',
                hex: '#55D396',
                use: 'Acento y botón principal'
              },
              { name: 'Verde', hex: '#169A50', use: 'Superficies de marca' },
              { name: 'Grafito', hex: '#272C2A', use: 'Tarjetas y barras' },
              { name: 'Negro', hex: '#040605', use: 'Fondo de la app' },
              { name: 'Blanco', hex: '#FFFFFF', use: 'Texto principal' }
            ]
          },
          {
            title: 'Neutros',
            swatches: [
              { name: 'Niebla', hex: '#A3ADA8', use: 'Texto secundario' },
              { name: 'Ceniza', hex: '#6B7570', use: 'Placeholder e íconos' },
              { name: 'Línea', hex: '#3A403D', use: 'Bordes y divisores' },
              { name: 'Carbón', hex: '#141816', use: 'Campos y bloques' },
              { name: 'Elevada', hex: '#323835', use: 'Hojas y modales' }
            ]
          },
          {
            title: 'Estados',
            swatches: [
              { name: 'Éxito', hex: '#55D396', use: 'Abonos y confirmaciones' },
              { name: 'Alerta', hex: '#F5B544', use: 'Ventas a la baja' },
              { name: 'Error', hex: '#F2555A', use: 'Fallos y bloqueos' },
              { name: 'Info', hex: '#7AB8F5', use: 'Avisos del crédito' }
            ]
          }
        ]
      },
      type: {
        title: 'Tipografía',
        family: 'General Sans',
        weights: 'Regular · Medium',
        steps: [
          { name: 'Cifra', sample: '$2.000.000', spec: '40 · Medium · 44' },
          { name: 'Título', sample: 'Tu Pulso', spec: '28 · Medium · 32' },
          {
            name: 'Subtítulo',
            sample: 'Recibes y devuelves',
            spec: '20 · Medium · 26'
          },
          {
            name: 'Cuerpo',
            sample: 'Se paga solo con tus ventas.',
            spec: '16 · Regular · 24'
          },
          {
            name: 'Etiqueta',
            sample: '8 % por venta',
            spec: '14 · Medium · 20'
          },
          {
            name: 'Nota',
            sample: 'Hoy, 10:42 a. m.',
            spec: '12 · Regular · 16'
          }
        ]
      },
      shape: {
        title: 'Forma',
        spacingTitle: 'Espaciado',
        spacing: [4, 8, 12, 16, 24, 32, 48],
        radiusTitle: 'Radios',
        radii: [
          { label: 'Chip', value: '8' },
          { label: 'Campo', value: '12' },
          { label: 'Tarjeta', value: '16' },
          { label: 'Botón', value: 'Píldora' }
        ],
        shadowTitle: 'Sombras',
        shadows: [
          { label: 'Tarjeta', value: 'Borde 1 · 8%' },
          { label: 'Flotante', value: '0 12 32 · 40%' }
        ]
      },
      icons: {
        title: 'Iconografía',
        icons: [
          { id: 'store', name: 'Tienda' },
          { id: 'wallet', name: 'Crédito' },
          { id: 'qr', name: 'Cobrar' },
          { id: 'sales', name: 'Ventas' },
          { id: 'percent', name: 'Por venta' },
          { id: 'receipt', name: 'Abono' },
          { id: 'calendar', name: 'Fechas' },
          { id: 'shield', name: 'Seguridad' },
          { id: 'chat', name: 'Chat' },
          { id: 'bell', name: 'Avisos' },
          { id: 'user', name: 'Perfil' },
          { id: 'help', name: 'Ayuda' }
        ]
      },
      motion: {
        title: 'Motion',
        rules: [
          { id: 'press', name: 'Responde al toque', spec: 'Rápida · 160 ms' },
          { id: 'sheet', name: 'Acompaña el cambio', spec: 'Lenta · 400 ms' },
          { id: 'pulse', name: 'Late con cada abono', spec: 'Media · 240 ms' }
        ]
      }
    },
    components: {
      title: 'Componentes',
      buttons: {
        title: 'Botones',
        label: 'Aceptar',
        variants: [
          { id: 'primary', name: 'Principal' },
          { id: 'secondary', name: 'Secundario' },
          { id: 'ghost', name: 'Texto' }
        ],
        states: [
          { id: 'default', name: 'Normal' },
          { id: 'pressed', name: 'Presionado' },
          { id: 'disabled', name: 'Inactivo' },
          { id: 'loading', name: 'Cargando' }
        ]
      },
      fields: {
        title: 'Campos',
        label: 'Monto que necesitas',
        placeholder: '$500.000',
        samples: [
          {
            state: 'empty',
            caption: 'Vacío',
            value: '',
            message: 'Hasta $2.000.000'
          },
          {
            state: 'focus',
            caption: 'Foco',
            value: '$1.200',
            message: 'Hasta $2.000.000'
          },
          {
            state: 'filled',
            caption: 'Lleno',
            value: '$1.200.000',
            message: 'Hasta $2.000.000'
          },
          {
            state: 'error',
            caption: 'Error',
            value: '$3.000.000',
            message: 'Tu tope hoy es $2.000.000'
          }
        ]
      },
      cards: {
        title: 'Tarjetas',
        pulse: {
          label: 'Tu Pulso',
          amount: '$2.000.000',
          progress: 62,
          note: 'Llevas el 62 % pagado'
        },
        offer: {
          tag: 'Preaprobado',
          rows: [
            { label: 'Recibes', value: '$2.000.000' },
            { label: 'Devuelves', value: '$2.240.000' }
          ],
          note: '8 % de cada venta'
        },
        sale: {
          title: 'Venta con QR',
          date: 'Hoy, 10:42 a. m.',
          amount: '+$45.000',
          tag: 'Abonó $3.600'
        }
      },
      navigation: {
        title: 'Navegación',
        back: 'Volver',
        header: 'Pedir Pulso',
        step: 'Paso 2 de 3',
        stepCount: 3,
        currentStep: 2,
        tabs: [
          { id: 'store', name: 'Inicio' },
          { id: 'qr', name: 'Cobrar' },
          { id: 'wallet', name: 'Crédito' }
        ]
      },
      feedback: {
        title: 'Avisos',
        toast: { caption: 'Toast', text: 'Abono registrado' },
        banner: {
          caption: 'Banner',
          text: 'Tus ventas bajaron',
          action: 'Ver opciones'
        },
        modal: {
          caption: 'Modal',
          title: '¿Pausar los abonos?',
          text: 'Tu crédito sigue activo.',
          confirm: 'Pausar',
          dismiss: 'Seguir'
        },
        sheet: {
          caption: 'Hoja inferior',
          title: 'Elige tu monto',
          text: 'Puedes cambiarlo antes de aceptar.',
          action: 'Listo'
        }
      },
      screens: {
        title: 'Estados de pantalla',
        states: [
          {
            caption: 'Vacío',
            title: 'Aún no tienes oferta',
            text: 'Vende con Qubo y pronto verás la tuya.',
            action: 'Ver cómo funciona'
          },
          {
            caption: 'Cargando',
            title: 'Calculando tu oferta',
            text: 'Revisamos tus ventas de 90 días.'
          },
          {
            caption: 'Error',
            title: 'No cargó tu crédito',
            text: 'Revisa tu conexión.',
            action: 'Reintentar'
          }
        ]
      }
    }
  },

  prototype: {
    head: {
      number: '08',
      eyebrow: 'Prototipo',
      title: 'Dos pantallas que lo cuentan todo'
    },
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
    hotspotHint: 'Toca un punto'
  }
};
