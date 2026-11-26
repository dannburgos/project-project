# Pulso by Qubo Bank
### El crédito que late con tu tienda

> Documento base del caso de estudio para portafolio (14 módulos aprobados).
> Las líneas marcadas como *Visual sugerido* son guías para construir el caso, no parte del texto final.
> Al final hay una lista de **pendientes antes de publicar**.

---

## 0. Resumen

Pulso es un crédito para microcomercios que se paga con un porcentaje de cada venta. Lo diseñé para Qubo Bank, un banco ficticio, como alternativa formal al gota a gota.

> "Rediseñé el crédito para que se adapte al ritmo de caja diario del tendero, y no al revés."

| | |
|---|---|
| **Rol** | Product Designer: estrategia, research, UX y UI |
| **Tipo** | Proyecto conceptual · Fintech, crédito para microcomercios |
| **Plataforma** | App móvil del comercio (Android primero) y vista web interna de Qubo |
| **Herramientas** | Figma · Claude |
| **Entregables** | Estrategia de producto, flujos, prototipo en alta fidelidad, mini design system, plan de validación |

*Visual sugerido:* mockup del celular con la pantalla del Pulso avanzando (pantalla 7), junto a la tarjeta de la oferta (pantalla 2).

---

## 1. Contexto y oportunidad

Los microcomercios en Colombia ya cobran de forma digital, pero siguen financiándose de manera informal. Esa brecha es la oportunidad.

| Dato | Qué significa para el proyecto |
|---|---|
| **+450.000** tiendas de barrio; **+85%** usa el celular para trabajar ([Semana](https://www.semana.com/especiales-multimedia/articulo/tiendas-de-barrio-pequenos-motores-que-impulsan-la-economia/202656/); informe de Servipunto) | Un segmento enorme y ya conectado |
| **81,2%** de los micronegocios decide no pedir crédito; **14,2%** usa gota a gota ([Asomicrofinanzas y Universidad de La Salle, vía Cambio](https://cambiocolombia.com/economia/articulo/2023/3/gota-gota-fuente-de-financiamiento-del-142-por-ciento-de-los-micronegocios-en-colombia)) | La barrera es la autoexclusión: el crédito formal no se siente hecho para ellos |
| **Bre-B** opera desde oct. 2025, con **+100 millones de llaves** ([Banco de la República](https://banrep.gov.co/es/noticias/bre-b-cumple-un-anio-en-colombia), [Portafolio](https://www.portafolio.co/economia/finanzas/en-seis-meses-bre-b-supera-las-100-millones-de-llaves-y-acelera-la-transformacion-de-pagos-en-colombia-492544)) y débitos recurrentes en camino ([Vanguardia](https://www.vanguardia.com/colombia/2026/07/22/colombia-avanza-hacia-los-pagos-automaticos-bre-b-habilitara-debitos-recurrentes-sin-tarjetas/)) | Ya existe la infraestructura para cobrar y pagar al instante |

**Oportunidad:** cada cobro por QR o Bre-B deja un rastro de ventas. Ese rastro puede convertirse en el historial crediticio que el tendero nunca tuvo, y en el canal por el que paga.

<sub>Las cifras de micronegocios son de 2023 y no son exclusivas de tenderos. Falta una cifra nacional de tiendas con pagos digitales. El número de tiendas varía según la fuente (de 266.000 a más de 500.000).</sub>

---

## 2. El problema, replanteado

El problema no es que los tenderos no tengan acceso a crédito. Es que el crédito formal no se siente hecho para ellos, y no encaja con su ritmo de caja.

| | Problema obvio | Problema real |
|---|---|---|
| **Lectura** | "Los tenderos no tienen acceso a crédito" | "La mayoría ni lo intenta: el crédito formal no se siente para ellos" |
| **Ritmo** | Se asume ingreso mensual fijo | Vende y gasta todos los días |
| **Barrera** | Falta de historial | Papeles, tiempo y miedo a la cuota fija del mes |
| **Competencia** | Otros bancos | El gota a gota y los fiados de proveedor |

**Insight:** el 81,2% de los micronegocios decide no pedir crédito. Quien sí lo necesita acaba en el informal, que cobra caro pero se sincroniza con su caja: plata el mismo día, sin papeles, pagos en el ritmo de las ventas. *(Hipótesis que el research debe validar.)*

> **How Might We:** ¿Cómo podríamos convertir las ventas diarias de un microcomercio en su historial crediticio y en su forma de pago, para que el crédito se adapte a su ritmo de caja?

*Visual sugerido:* pantalla partida con dos líneas de tiempo. A la izquierda, "el crédito del banco" con una cuota el día 15; a la derecha, "la caja del tendero" con ventas distintas cada día. La distancia entre ambas es el problema.

---

## 3. Research

El research parte del análisis de competencia, de ahí salen las hipótesis y estas se validan con tenderos.

### 3.1 Análisis de competencia

Tres competidores, analizados con el mismo formato.

#### Treinta · la plataforma que ya tiene los datos

| | |
|---|---|
| **Qué es** | App de gestión para micronegocios: ventas, gastos e inventario. Más datáfono y marketplace B2B |
| **Escala** | 1,4 millones de usuarios en Colombia (oct. 2024) ([La República](https://www.larepublica.co/empresas/contamos-1-4-millones-de-micronegocios-que-estan-presentes-en-nuestra-plataforma-3974531)); 1 de cada 5 tenderos digitalizado con Treinta y más de 40.000 surtiéndose en su marketplace (La Nota Económica, fecha sin confirmar) |
| **Crédito** | Para inventario, sin intereses, pago único a 15 días, desde el marketplace (nov. 2024) ([Valora Analitik](https://www.valoraanalitik.com/?p=411889)) |
| **Hace bien** | Está en el día a día del tendero y conoce sus ventas reales |
| **Se queda corto** | El crédito solo sirve para surtir, está atado a su marketplace y se paga de una vez. No encontré una licencia bancaria propia |

#### Gota a gota · el competidor real

| | |
|---|---|
| **Qué es** | Préstamo informal e ilegal, de montos bajos (hasta $1 millón) |
| **Escala** | El 14,2% de los micronegocios lo usa, y el 81,2% decide no pedir crédito ([Cambio](https://cambiocolombia.com/economia/articulo/2023/3/gota-gota-fuente-de-financiamiento-del-142-por-ciento-de-los-micronegocios-en-colombia)) |
| **Cómo cobra** | Cuotas diarias, semanales o quincenales |
| **Costo** | 20% a 30% mensual; con el 20%, unos 792% anuales ([RCN](https://noticiasrcn.com/economia/como-funcionan-los-gota-a-gota-el-panorama-de-prestamos-impagables-377973)); interés sobre interés si hay atraso |
| **Hace bien** | Se sincroniza con la caja, es inmediato y sin trámites *(hipótesis a validar con tenderos)* |
| **Se queda corto** | Costo abusivo, cobranza agresiva y no construye historial formal *(inferencia)* |

#### Nequi · el que más hay que vigilar

| | |
|---|---|
| **Qué es** | Billetera digital de 27 a 30 millones de usuarios según la fuente; desde sept. 2026 opera como compañía de financiamiento vigilada por la Superfinanciera ([Valora Analitik](https://www.valoraanalitik.com/?p=609252)) |
| **Para negocios** | QR Negocios: el comercio cobra a clientes de otros bancos y recibe al instante, sin costo ([Valora Analitik](https://www.valoraanalitik.com/nequi-permitira-a-pequenos-comercios-recibir-pagos-desde-otros-bancos-y-sin-costo/)). También tiene un "Crédito Negocios" de libre inversión ([Tiendanube](https://www.tiendanube.com/co/blog/nequi)) |
| **Crédito** | Entre enero y septiembre de 2025 desembolsó más de 590.000 créditos, con ticket promedio de $2,4 millones; el 68% de quienes accedieron tenía poca o nula experiencia crediticia. Tiene más de $10 billones preaprobados ([Bloomberg Línea](https://www.bloomberglinea.com/latinoamerica/colombia/nequi-espera-entregar-cop5-billones-en-creditos-y-prepara-productos-de-inversion/)) |
| **Cómo evalúa** | Comportamiento dentro de la app e historial; preaprobación visible en la app |
| **Costo** | Bajo monto: 1,79% a 4,13% mensual, más seguro de vida obligatorio ([El País](https://www.elpais.com.co/economia/estos-son-los-prestamos-que-ofrece-nequi-en-2026-cuanto-pagaria-mes-a-mes-por-uno-de-25-millones-1948.html)) |
| **Hace bien** | Oferta preaprobada, desembolso en minutos y base masiva |
| **Se queda corto** | Evalúa a la persona, no hay evidencia de que use las ventas del negocio, y el pago es fijo o a 30 días. El costo total es difícil de leer |

#### Comparación con Pulso

| | Gota a gota | Treinta | Nequi | **Pulso** |
|---|---|---|---|---|
| **Evalúa con** | Confianza personal | Ventas registradas en la app | Comportamiento de la persona | **Ventas cobradas con Qubo** |
| **Quién inicia** | El tendero lo busca | El tendero compra en el marketplace | Oferta preaprobada | **Oferta preaprobada** |
| **Cómo paga** | Cuota diaria o semanal fija | Pago único a 15 días | Cuotas fijas o pago a 30 días | **% de cada venta** |
| **Costo visible** | Oculto en la cuota | Sin intereses | Tasa + seguro | **Total en pesos** |
| **Uso** | Libre | Solo inventario | Libre | **Libre** |
| **Regulación** | Ilegal | No confirmada | Vigilada por Superfinanciera | **Banco regulado** |

#### Lo que aprendemos

- **Nequi valida la oferta preaprobada:** funciona a escala y llega a gente con poco historial. Respalda que Qubo haga la oferta en vez de pedir una solicitud.
- **Nequi es el riesgo competitivo:** ya tiene QR para comercios, así que podría evaluar con ventas. No encontré las condiciones de su Crédito Negocios. Lo que lo separa de Pulso sería el pago como % de cada venta y el costo en pesos.
- **Treinta se acerca en datos, pero no en producto:** sabe las ventas, pero su crédito es solo para inventario.

#### El espacio libre

Con la información disponible, nadie combina estas cuatro cosas:

1. **Evalúa con las ventas reales** del comercio, no con su cuenta personal.
2. **Capital de libre uso**, no solo inventario.
3. **Pago que sigue las ventas** (% de cada venta), no cuota fija ni pago único.
4. **Un banco regulado** detrás, no un prestamista informal.

*Otros referentes revisados:* Monet, microcrédito de banca tradicional (Bancolombia, Bancamía) y fiado de proveedor. Quedan como mención, fuera del análisis comparativo.

### 3.2 Hipótesis

Tres hipótesis guían el research. Cada una tiene una señal que la valida o la descarta, la evidencia que ya dio el benchmark y la decisión de diseño que alimenta.

| # | Hipótesis | Señal que la valida | Evidencia del benchmark | Decisión que alimenta | Estado |
|---|---|---|---|---|---|
| H1 | El tendero no pide crédito por papeles, tiempo y porque siente que el banco no es para él | La mayoría menciona trámites o "no me lo aprueban" antes que el costo | La banca pide asesor, documentos y tiempo de operación; las fintechs digitalizan pero evalúan a la persona | El banco hace la oferta, el tendero no solicita | Por validar |
| H2 | La barrera principal es la cuota fija mensual | Prefieren pagar a diario o semanal, aunque el total sea igual | Solo el gota a gota cobra con frecuencia; los demás usan cuota mensual o pago único | Pago como % de cada venta | Por validar |
| H3 | La tasa EA no se entiende y genera desconfianza | Menos del 50% calcula bien cuánto devolvería con una tasa EA | El gota a gota habla en mensual, la banca en EA y Nequi suma seguro; una fuente advierte que intereses, seguros y cargos elevan el total ([Diario del Sur](https://www.diariodelsur.com.co/?p=541433)) | Costo en pesos, no en tasa | Por validar |

### 3.3 Métodos

| Método | Para qué | Alcance | Estado |
|---|---|---|---|
| Desk research y análisis de competencia | Dimensionar el problema, el contexto regulatorio y el espacio libre | Prensa, Banco de la República, estudios, apps | Hecho |
| Entrevistas | Entender cómo se financian hoy y por qué | 6 dueños de microcomercios, 30 min, en su negocio | Por hacer |
| Prueba del prototipo y test de comprensión | Validar H3 y las decisiones de diseño (ver módulo 11) | Mismas 6 personas, 15 min en la misma sesión | Por hacer |
| Observación en tienda | Ver el ritmo real de ventas, cobros y pagos | 1 jornada en 2 tiendas | Opcional, si el tiempo lo permite |

**Preguntas clave de la entrevista:**

1. La última vez que necesitó plata para la tienda, ¿qué hizo?
2. ¿Cómo es una semana buena y una mala en ventas?
3. ¿Qué le hizo elegir ese préstamo y no otro?
4. Si le ofrecen $2.000.000, ¿cuánto cree que devolvería?

### 3.4 Hallazgos

*Pendiente: se completan tras las entrevistas.* Formato por hallazgo: **Lo que vimos → Qué significa → Qué decidimos.**

---

## 4. Usuario

**Usuario principal:** el dueño de un microcomercio de barrio (tienda, peluquería, venta de comida) que vende todos los días y decide solo sobre su plata.

**Usuario secundario:** el analista de riesgo de Qubo, que ve la salud de la cartera Pulso en la vista interna.

**Job to be done:**

> Cuando necesito surtir la tienda y no me alcanza la caja, quiero conseguir la plata hoy y pagarla a medida que vendo, para no poner en riesgo el negocio ni pasar pena con un cobrador.

| Dimensión | Qué busca |
|---|---|
| **Funcional** | Plata el mismo día, sin papeles, con un pago que se adapte a sus ventas |
| **Emocional** | Tranquilidad: saber cuánto debe y que una mala semana no lo ahogue |
| **Social** | Que no lo juzguen ni lo expongan frente a clientes o vecinos |

**Qué "contrata" hoy para este trabajo:** gota a gota, fiado de proveedor, Treinta (para inventario), Nequi y préstamos de familiares. Todos resuelven una parte; ninguno resuelve las tres dimensiones a la vez.

**Proto-persona** *(hipótesis a validar en entrevistas)*

**Marta, dueña de una tienda de barrio**

| | |
|---|---|
| **Contexto** | Atiende sola o con un familiar. Cobra en efectivo, QR y transferencia. Usa WhatsApp todo el día en un Android de gama media |
| **Hoy resuelve con** | Gota a gota, proveedores que le fían, plata de la familia |
| **Dolores** | Trámites largos en el banco, miedo a no tener la cuota el día del pago, no entiende las tasas |
| **Valora** | Rapidez, trato sin juicio, saber exactamente cuánto paga |
| **Momento crítico** | La semana mala: ventas bajas y el cobrador igual llega |

**Lo que todavía no sabemos** (preguntas para las entrevistas):

- ¿Cuánta de su venta es efectivo? Si es mucha, Pulso verá solo una parte de su caja.
- ¿Quién más decide sobre la plata del negocio: pareja, familia?
- ¿Cómo vive una semana mala, y qué hace primero?

---

## 5. Estrategia de producto

Pulso gana si el comercio termina de pagar sin mora y vuelve por otro crédito. Ese ciclo es el negocio.

**Propuesta de valor:** plata hoy, sin papeles, que se paga sola con tus ventas. Sabes en pesos cuánto recibes y cuánto devuelves.

**Por qué Qubo puede ganar (donde otros no):**

- **Frente al gota a gota:** mismo ritmo de pago, sin el costo abusivo ni la cobranza agresiva.
- **Frente a Treinta:** crédito de uso libre, no solo para inventario.
- **Frente a Nequi:** evalúa y cobra con las ventas del comercio, no con el comportamiento personal. *(Ventaja a confirmar: Nequi ya tiene QR para negocios y podría moverse hacia allá.)*

**Cómo gana Qubo:**

- **Cargo del crédito:** un cargo fijo en pesos, dentro del tope legal.
- **Más ventas por Qubo:** para acceder a montos mayores, el comercio concentra sus cobros en Qubo.
- **Datos de riesgo propios:** cada ciclo pagado mejora la evaluación y baja el costo de conocer al comercio.

**North Star:** % de créditos Pulso pagados por completo sin mora mayor a 30 días.

**Reglas de negocio del MVP** *(valores de referencia: supuestos del prototipo)*

| Regla | Valor propuesto |
|---|---|
| Elegibilidad | Mínimo 90 días cobrando con Qubo |
| Monto | Calculado sobre las ventas de los últimos 90 días |
| Retención | 8% de cada venta cobrada por Qubo |
| Piso semanal | Pago mínimo por semana, para que el crédito no se congele |
| Plazo máximo | 6 meses; lo pendiente pasa a cuota fija |
| Costo | Cargo fijo en pesos; tasa EA visible por regulación |
| Créditos activos | Uno a la vez por comercio |

**Riesgos y mitigación:**

| Riesgo | Mitigación |
|---|---|
| El comercio desvía ventas a otro canal para no pagar | Piso semanal y alerta si las ventas caen de golpe |
| Sobreendeudamiento | Monto con tope sobre las ventas; un solo Pulso activo |
| Nequi o Treinta replican el modelo | Diferenciarnos en pago por venta y costo en pesos; cerrar el ciclo de recompra |
| Fraude (ventas infladas, autotransferencias) | Detección de patrones y topes en el primer crédito |
| Regulatorio | Tasa EA visible, tope de usura, consentimiento explícito de uso de datos (Habeas Data) |

**Tensión abierta, a validar con un experto regulatorio:** con un cargo fijo en pesos, si el comercio paga más rápido, la tasa efectiva anual sube, porque el mismo cargo se paga en menos tiempo. El diseño debe garantizar que, incluso en el pago más rápido, la tasa no supere el tope de usura. Por eso el producto necesita un cargo máximo o una tarifa escalonada.

**Fuera del MVP:** crédito para personas naturales, varios créditos simultáneos, ventas en efectivo como fuente de evaluación, integración con datáfonos de otros bancos.

*Visual sugerido:* ciclo de cuatro pasos: ventas con Qubo → mejor evaluación → mejor oferta → más ventas con Qubo.

---

## 6. Principios de diseño

Cuatro reglas deciden cada pantalla. Si una propuesta rompe una, se descarta.

| # | Principio | Qué significa | Lo que descarta | Dónde se ve |
|---|---|---|---|---|
| 1 | **Pesos, no tasas** | Todo costo se muestra primero en pesos. La tasa EA existe, pero nunca es lo principal | Mostrar la tasa EA como titular | Pantalla 2: "Recibes $X, devuelves $Y" |
| 2 | **El ritmo lo pone el comercio** | Nada exige un monto fijo en una fecha fija si las ventas no lo permiten | Cuotas con fecha de castigo | Pantallas 3 y 10: pago por venta y ajuste del piso |
| 3 | **Avisar antes, no cobrar después** | El producto detecta el problema antes que el comercio y le ofrece salidas | Cobranza al entrar en mora | Pantallas 9 a 11: alerta y opciones de ajuste |
| 4 | **Una mano, al sol, entre clientes** | Cada tarea se hace con el pulgar, en pantalla pequeña y con interrupciones | Formularios largos y pantallas densas | Pantallas 4 y 5: resumen corto y selfie guiada |

**Cómo se conectan con el research:**

- Principio 1 ← hipótesis H3 (la tasa EA no se entiende)
- Principio 2 ← hipótesis H2 (la cuota fija es la barrera)
- Principio 3 ← el momento crítico de la persona: la semana mala
- Principio 4 ← el contexto de uso: celular Android, WhatsApp todo el día

*Visual sugerido:* cuatro tarjetas con el principio en grande y, debajo, un mini ejemplo de pantalla que lo cumple y otro que lo rompe.

---

## 7. Decisiones clave

Cada decisión eligió una opción y renunció a otras. Formato: opciones, elegida, por qué, qué asumimos y cómo la validamos.

### Decisión 1 · Cómo se paga el crédito

| | |
|---|---|
| **Opciones** | A. Cuota fija mensual · B. Cuota fija diaria · **C. % de cada venta** |
| **Por qué C** | A ignora la caja del tendero. B copia al gota a gota y se vuelve una presión en un día malo. C sigue el ritmo de ventas (H2) |
| **Qué asumimos** | El plazo se vuelve variable. Se controla con piso semanal y plazo máximo de 6 meses |
| **Cómo lo validamos** | Preferencia de frecuencia en entrevistas; comprensión de la pantalla 3 ("Así se paga") |

### Decisión 2 · Cómo se muestra el costo

| | |
|---|---|
| **Opciones** | A. Tasa EA como titular · B. Cuota en pesos por período · **C. Total en pesos: "Recibes $X, devuelves $Y"** |
| **Por qué C** | Se entiende sin hacer cálculos (H3). A es el estándar del sector, pero es la que menos se comprende |
| **Qué asumimos** | La tasa EA sigue visible en el resumen legal, por regulación |
| **Cómo lo validamos** | Test de comprensión: la mayoría responde bien cuánto devuelve (5 de 6) |

### Decisión 3 · Quién inicia el crédito

| | |
|---|---|
| **Opciones** | A. Solicitud completa · B. Solicitud corta con botón "Pedir crédito" · **C. Oferta preaprobada de Qubo** |
| **Por qué C** | Elimina papeles y espera (H1). Nequi muestra que el modelo funciona a escala: el 68% de sus créditos fue a personas con poca o nula experiencia crediticia |
| **Qué asumimos** | Solo llega a quien ya cobra con Qubo. Hay riesgo de que se sienta como vigilancia, por eso el consentimiento sobre los datos va claro |
| **Cómo lo validamos** | Tasa de aceptación; entrevistas sobre confianza en el uso de datos |

### Decisión 4 · Qué pasa en un mal día

| | |
|---|---|
| **Opciones** | A. Esperar la mora y cobrar · B. Recordatorio genérico · **C. Alerta proactiva con opciones de ajuste** |
| **Por qué C** | Cumple el principio 3 y protege la relación y la cartera al mismo tiempo |
| **Qué asumimos** | Menos recaudo a corto plazo a cambio de menos mora |
| **Cómo lo validamos** | % de alertas que terminan en ajuste vs. en mora |

### Decisión 5 · Cómo se verifica la identidad

| | |
|---|---|
| **Opciones** | A. Subir foto de la cédula (frente y reverso) y llenar un formulario · B. Validación con un asesor · **C. Selfie guiada de reconfirmación, sin pedir documentos otra vez** |
| **Por qué C** | El comercio ya pasó la verificación completa al abrir su cuenta Qubo, así que no se le pide lo que el banco ya sabe. Cumple el principio 4 y ataca la fricción de papeles (H1). La selfie sigue protegiendo el desembolso |
| **Casos borde que resuelve** | **Sin documentos:** no los necesita. **Error de validación:** reintento guiado (luz, encuadre) y, si persiste, ayuda humana. **Datos incompletos:** los campos llegan precargados desde el onboarding |
| **Qué asumimos** | Compliance permite reconfirmar con biometría sobre una verificación previa *(a validar)*. Una selfie puede fallar con poca luz o un celular antiguo |
| **Cómo lo validamos** | Tasa de finalización de la verificación, tiempo que toma y causa de los fallos (luz, encuadre, cámara) |

*Visual sugerido:* una tarjeta por decisión, con las opciones descartadas atenuadas y la elegida resaltada.

---

## 8. Flujos y arquitectura

El producto es un ciclo, no un embudo: cada crédito pagado abre la puerta a uno mayor.

### Flujo principal

**Momento 1 · La oferta**
Cobra con Qubo → recibe la oferta (pantalla 1) → entiende el costo (2, 3 y 4) → verifica con selfie (5) → desembolso (6)

**Momento 2 · El día malo**
Paga sola con sus ventas (7 y 8) → ¿bajan las ventas?

- **No:** crédito pagado (12) → nueva oferta mayor → vuelve al inicio del ciclo
- **Sí:** Qubo avisa antes de la mora (9) → el comercio ajusta el plan (10 y 11) → sigue pagando

### Flujos alternos y casos borde

| Caso | Qué pasa |
|---|---|
| **No elegible todavía** | Muestra cuánto le falta (días cobrando con Qubo) y un avance visible |
| **Rechaza la oferta** | Una pregunta corta de por qué, sin insistir; la oferta queda disponible un tiempo |
| **Falla la selfie** | Reintento guiado y, si persiste, ayuda humana |
| **Sin conexión** | La oferta y el progreso se ven guardados; las acciones esperan a que vuelva la conexión |
| **Ventas en cero varios días** | Se activa el modo día malo automáticamente |

### Arquitectura de la app del comercio

Cuatro pestañas y una campana de notificaciones:

| Pestaña | Contenido |
|---|---|
| **Inicio** | Ventas del día, progreso de Pulso, ofertas |
| **Cobrar** | QR y Bre-B |
| **Crédito** | Detalle de Pulso, movimientos, ajustes |
| **Perfil** | Datos del comercio, documentos, ayuda |

**Por qué así:** cobrar es el hábito diario del tendero y la fuente de datos del crédito. Pulso vive dentro de lo que ya usa: una tarjeta en Inicio y el detalle en Crédito, sin una app aparte.

### Vista interna de Qubo (desktop)

Cartera Pulso · Comercios en modo día malo · Mora · Detalle de un comercio

*Visual sugerido:* diagrama del ciclo en dos bandas (Momento 1 y Momento 2) y un mapa de navegación de la app.

---

## 9. Diseño final (pantallas)

Las pantallas se construyen en el proyecto; aquí queda qué resuelve cada una. Prioridad:

- **Nivel A:** pantallas héroe. Alta fidelidad completa, con todos sus estados. Se muestran grandes en el caso.
- **Nivel B:** alta fidelidad estándar, parte del prototipo.

### Momento 1 · La oferta
*De "no sabía que podía" a "ya tengo la plata".*

| # | Pantalla | Qué resuelve (contenido clave) | Microinteracción o estado | Nivel |
|---|---|---|---|---|
| 1 | Home del comercio | Mostrar la oferta sin interrumpir la operación: ventas del día y tarjeta de oferta | La tarjeta aparece con animación suave | B |
| 2 | **Detalle de la oferta** | Entender el trato en 5 segundos: "Recibes / devuelves" en pesos, % por venta y selector de monto | El total a devolver se recalcula al mover el selector | **A** |
| 3 | **Así se paga** | Quitar el miedo a la cuota: ejemplo de un día bueno y uno malo | Animación de una venta que descuenta el 8% | **A** |
| 4 | Resumen y consentimiento | Cumplir regulación sin abrumar: resumen simple; legal y tasa EA expandibles; uso de datos | El botón se activa solo tras aceptar | B |
| 5 | Verificación de identidad | Reconfirmar que es el titular con una selfie guiada, sin documentos | Guía de encuadre en vivo; loading; error con reintento guiado | B |
| 6 | Desembolso | Dar certeza: monto recibido, dónde está la plata y qué sigue | Contador del dinero llegando | B |

### Momento 2 · El día malo
*De "me van a cobrar" a "el banco me cubrió".*

| # | Pantalla | Qué resuelve (contenido clave) | Microinteracción o estado | Nivel |
|---|---|---|---|---|
| 7 | **Pulso en el home** | Ver el avance sin buscarlo: barra de progreso del crédito | La barra avanza con cada venta | **A** |
| 8 | Detalle del crédito | Dar control total: pagado, pendiente, fecha estimada y movimientos | La fecha estimada se ajusta al ritmo de ventas | B |
| 9 | Alerta proactiva | Avisar antes de que haya problema: "Tus ventas bajaron esta semana" | Notificación push y banner en el home | B |
| 10 | **Opciones de ajuste** | Dar salidas sin culpa: pausar el piso una semana o extender el plazo, con el impacto en pesos | Comparador antes / después | **A** |
| 11 | Confirmación del ajuste | Dar tranquilidad: nuevo plan y próxima revisión | Check animado | B |
| 12 | Crédito pagado | Cerrar el ciclo: celebración, historial ganado y nueva oferta mayor | Celebración breve que no bloquea | B |

### Estados borde
Se diseñan como estados dentro de las pantallas, no como pantallas completas, salvo los dos primeros.

- **No elegible todavía** (pantalla propia): qué le falta y un avance visible.
- **Error de verificación** (pantalla propia): causa en lenguaje simple, reintento y ayuda humana.
- **Sin conexión:** la oferta y el progreso se ven guardados; las acciones esperan.
- **Oferta rechazada:** una pregunta corta de por qué, sin insistir.
- **Ventas en cero varios días:** se activa el modo día malo.

### Pantallas de apoyo

- **Cobrar con QR o Bre-B** (B)
- **Onboarding del comercio** (B)
- **Centro de notificaciones**, desde la campana (B)
- **Vista interna de Qubo (desktop):** un solo frame de dashboard con la salud de la cartera Pulso, comercios en modo día malo y mora (B)

**Total:** 12 pantallas principales, 2 de estado, 3 de apoyo y 1 frame desktop. Las de nivel A son cuatro: **2, 3, 7 y 10**.

### Los dos momentos de verdad en el caso

| Momento | Pantalla héroe | Qué se ve |
|---|---|---|
| La oferta | **2. Detalle de la oferta** | El principio "pesos, no tasas" en acción |
| El día malo | **10. Opciones de ajuste** | El principio "avisar antes, no cobrar después" en acción |

Con eso, un reclutador entiende el caso con solo dos pantallas, y el resto sirve de respaldo.

**Si el tiempo aprieta:** construir primero el nivel A (pantallas 2, 3, 7 y 10) y el prototipo navegable del flujo. Después, el resto por orden de flujo.

---

## 10. Mini design system y accesibilidad

El sistema parte de mi propio design system (colores, Manrope, botones e iconos) y se amplía con lo que Pulso necesita.

### Base del sistema

| Elemento | Valor |
|---|---|
| Azul oscuro (títulos, hover, tarjeta de Pulso) | `#2B2A6F` |
| Azul principal (botón default, enlaces) | `#5454EA` |
| Azul claro (pistas, deshabilitado) | `#B5CAFF` |
| Azul noche (texto principal) | `#04042A` |
| Lima (acento) | `#E1F44B` |
| Blanco | `#FFFFFF` |
| Tipografía | Manrope (Light a ExtraBold) |
| Botones | Default, hover, click y deshabilitado |
| Iconos | Set de línea fina |

### Contrastes verificados

| Combinación | Contraste | Mínimo |
|---|---|---|
| Texto `#04042A` sobre blanco | 19,9:1 | 4,5:1 |
| Texto `#2B2A6F` sobre blanco | 12,6:1 | 4,5:1 |
| Blanco sobre botón default `#5454EA` | 5,5:1 | 4,5:1 |
| Blanco sobre hover `#2B2A6F` | 12,6:1 | 4,5:1 |
| `#04042A` sobre lima `#E1F44B` | 16,3:1 | 4,5:1 |
| Lima sobre `#2B2A6F` | 10,4:1 | 3:1 |
| Barra `#5454EA` sobre pista `#B5CAFF` | 3,4:1 | 3:1 |

### Tres ajustes sobre el sistema original

| Problema | Contraste | Decisión |
|---|---|---|
| **Botón deshabilitado:** texto blanco sobre `#B5CAFF` | 1,6:1 | Usar texto `#2B2A6F` con opacidad, o un gris azulado, y agregar el motivo ("Acepta para continuar") |
| **Lima sobre blanco** | 1,2:1 | El lima **nunca** va sobre fondo claro. Solo sobre azul oscuro o negro, o como fondo con texto oscuro encima |
| **`#5454EA` sobre lima** | 4,5:1 | Pasa justo. Mejor usar `#04042A` sobre lima |

### Colores que se suman (Pulso necesita estados que el sistema original no tenía)

| Token | Valor | Contraste | Uso |
|---|---|---|---|
| Éxito | `#17794D` | 5,4:1 sobre blanco | Confirmaciones y pagos |
| Alerta (texto / fondo) | `#92400E` / `#FEF3C7` | 6,4:1 | Modo día malo, tono cálido |
| Error | `#B3261E` | 6,5:1 sobre blanco | Solo errores reales |
| Texto secundario | `#4A4A6A` | 8,5:1 sobre blanco | Apoyo y etiquetas |
| Borde de campos | `#7C7C9E` | 4,0:1 sobre blanco | Inputs y controles |

### Cómo se usa el lima en Pulso

**La tarjeta de Pulso va en azul oscuro `#2B2A6F` y la barra de progreso en lima.** El contraste es de 10,4:1, se lee al sol y la barra se vuelve el elemento más llamativo de la pantalla. El lima queda reservado para el avance del crédito y para un solo énfasis por pantalla. Sobre fondo claro, la barra usa `#5454EA` sobre `#B5CAFF`.

### Tipografía

- **Manrope.** Las cifras en pesos son lo más grande de cada pantalla (32 a 40 sp) en ExtraBold, con formato colombiano: **$2.000.000**.
- Texto base de 16 sp como mínimo, en Regular o Medium.
- Verificar que la versión de Manrope soporte cifras tabulares (función `tnum`) para que los montos alineen.

### Iconos

El set de línea fina sirve para navegación y acciones. En celular pequeño y a pleno sol, usar el trazo más grueso disponible y acompañar siempre el ícono con una etiqueta. Faltan los íconos de este caso: **QR / cobrar, alerta, pausa y calendario.**

### Forma y espacio

Escala de 4 y 8 px, esquinas de 12 px, sin sombras pesadas (a pleno sol se pierden).

### Componentes clave

| Componente | Estados a diseñar |
|---|---|
| Tarjeta de oferta | Normal, expirada |
| Selector de monto (slider + botones − / +) | Normal, en uso, deshabilitado |
| Barra de progreso Pulso | Avanzando, en pausa, completa |
| Banner de alerta | Informativo, día malo |
| Comparador antes / después | Normal |
| Botón primario y secundario | Normal, presionado, cargando, deshabilitado |
| Acordeón legal | Cerrado, abierto |
| Guía de selfie | Buscando, encuadre correcto, error |
| Toast de confirmación | Éxito, error |
| Barra de pestañas (4) | Activa, inactiva, con insignia |

### Accesibilidad

- **Color + texto o ícono:** el color nunca es el único portador de significado.
- **Áreas táctiles de 48 × 48 dp** como mínimo.
- **El slider tiene alternativa:** botones − y + para quien no pueda arrastrar con precisión.
- **Lector de pantalla:** las cifras se leen completas ("recibes dos millones de pesos").
- **Texto ampliado** del sistema hasta 200% sin romper el layout.
- **Movimiento reducido:** la celebración y las animaciones tienen versión estática.
- **Lenguaje claro:** frases cortas y sin jerga financiera.

---

## 11. Validación e iteraciones

### Cómo se prueba

| | |
|---|---|
| **Quién** | 6 dueños de microcomercios (tiendas, peluquerías, venta de comida) |
| **Dónde** | En su negocio, con un celular Android real |
| **Qué** | Prototipo navegable en Figma de los dos momentos |
| **Formato** | Una sola sesión de 45 minutos en dos partes: 30 de entrevista y 15 de prueba, hablando en voz alta |
| **Cómo se mide** | Respuesta correcta (sí / no), tiempo, errores, valoración de facilidad del 1 al 7 y citas textuales |

Con 6 personas los resultados son direccionales, no estadísticos. Se presentan como "señales", no como porcentajes de mercado.

### Tareas de la prueba

| # | Tarea | Pantallas | Decisión o hipótesis | Señal de éxito |
|---|---|---|---|---|
| 1 | "Dime cuánto recibes y cuánto devuelves" | 2 | D2 · H3 | 5 de 6 responden bien, sin ayuda |
| 2 | "Cuéntame con tus palabras cómo se paga" | 3 | D1 · H2 | 5 de 6 lo explican correctamente |
| 3 | Aceptar la oferta y recibir la plata | 1 a 6 | D3 · D5 | Lo completan sin ayuda; la selfie pasa a la primera en 5 de 6 |
| 4 | "Tus ventas bajaron: ¿qué harías?" | 9 a 11 | D4 | Encuentran la opción de ajuste y dicen qué pasa con su plata |
| 5 | "¿Qué sientes de que el banco vea tus ventas?" | 4 | Riesgo de la decisión 3 | Sin señales fuertes de rechazo o vigilancia |

### Reglas de decisión (si pasa X, hacemos Y)

| Si vemos | Entonces |
|---|---|
| Menos de 4 de 6 entienden el costo | Rediseñar la pantalla 2: ejemplo comparado y texto más corto |
| "Así se paga" no se entiende | Reducirla a una sola animación y una frase |
| La selfie falla en 2 o más casos | Reforzar la guía de encuadre y adelantar la ayuda humana |
| Sensación de vigilancia con los datos | Reescribir el consentimiento: qué datos, para qué y cómo apagarlo |

### Plan B si no hay acceso a tenderos

Probar con dueños de negocios pequeños del entorno. Se declara en el caso y los resultados se presentan como señales.

### Registro de iteraciones *(se completa tras cada ronda)*

| Ronda | Qué vimos | Qué cambiamos | Antes / después |
|---|---|---|---|
| 1 | Pendiente | Pendiente | Captura de pantalla |

*Visual sugerido:* una pareja de pantallas "antes / después" por cada cambio importante, con la cita del tendero que lo motivó.

---

## 12. Impacto esperado y métricas

Como el proyecto es conceptual, el impacto se presenta como **hipótesis medibles**.

**North Star:** % de créditos Pulso pagados por completo sin mora mayor a 30 días.

Es la única métrica que sirve a la vez al comercio (terminó de pagar sin ahogarse) y a Qubo (cartera sana).

### Métricas por etapa del ciclo

| Etapa | Métrica | Qué dice |
|---|---|---|
| Oferta | Ofertas aceptadas / ofertas vistas | Si la oferta atrae y se entiende |
| Comprensión | % que responde bien cuánto devuelve | Si "pesos, no tasas" funciona |
| Verificación | % que completa la selfie a la primera | Si la fricción de identidad quedó resuelta |
| Desembolso | Minutos desde ver la oferta hasta recibir la plata | Qué tan rápido es el flujo completo |
| Uso | % de alertas de mal día que terminan en ajuste, no en mora | Si "avisar antes" evita la mora |
| Cierre | Créditos pagados sin mora mayor a 30 días (North Star) | Si el modelo funciona |
| Retención | % que toma un segundo Pulso | Confianza y valor percibido |

### Métricas de protección

| Métrica | Qué evita |
|---|---|
| Mora mayor a 30 días | Crecer aceptando más riesgo |
| Peso del crédito sobre las ventas del comercio | Sobreendeudamiento |
| % de comercios que revocan el uso de sus datos | Sensación de vigilancia |
| Reclamos relacionados con costo o cobro | Que "pesos, no tasas" oculte algo |
| Fallos de verificación por causa (luz, cámara, encuadre) | Que la selfie excluya a quien tiene un celular modesto |

### Impacto para el negocio de Qubo

- Cartera sana: menos mora que un microcrédito de cuota fija. *(Hipótesis a comprobar en el piloto.)*
- Más ventas cobradas por Qubo: el comercio concentra sus cobros para acceder a montos mayores.
- Menor costo de evaluar: cada ciclo pagado mejora la información de riesgo.

### Impacto para el comercio

- Sustituir el gota a gota: auto-reporte en una encuesta tras cerrar el crédito.
- Ahorro en costo financiero: el total pagado con Pulso frente a lo que el comercio dice que pagaba antes.
- Menos estrés en semanas malas: valoración en la encuesta de cierre.

### Eventos de analítica a instrumentar

`oferta_vista` · `oferta_aceptada` · `verificacion_completada` · `verificacion_fallida` · `desembolso` · `pago_aplicado` · `alerta_enviada` · `ajuste_aplicado` · `credito_cerrado` · `segunda_oferta_aceptada`

**Cómo se mediría:** un piloto con un grupo pequeño de comercios y revisión semanal de estas métricas. Las metas numéricas se fijan después de tener una línea base. Poner un número antes de medir sería inventarlo.

---

## 13. Aprendizajes, próximos pasos y uso de IA

### Aprendizajes *(se completa tras la validación)*

Tres aprendizajes con formato fijo. El más valioso es el que contradijo una hipótesis propia.

| Esperaba | Encontré | Cambié |
|---|---|---|
| Lo que creía antes de probar | Lo que dijo o hizo el tendero | La decisión o pantalla que ajusté |

### Qué haría distinto *(se completa al final)*

Una sola idea honesta: algo que habría investigado antes o una decisión tomada con poca evidencia.

### Próximos pasos del producto

Escritos como hipótesis, no como promesas.

| Paso | Por qué |
|---|---|
| Sumar las ventas en efectivo como señal de evaluación | Hoy Pulso solo ve lo que se cobra con Qubo; es su límite más grande |
| Pago automático con los débitos recurrentes de Bre-B, cuando estén disponibles | Hoy están anunciados, no operando |
| Extender el modelo a otros segmentos (independientes, repartidores) | Comparten el problema del ingreso irregular |
| Revisar la tarifa del cargo con un experto regulatorio | Es la tensión abierta de la estrategia |

### Cómo usé la IA

| Parte | Qué hizo la IA | Qué hice yo |
|---|---|---|
| Investigación | Buscó y resumió fuentes | Revisé las cifras, descarté las que no tenían fuente y marqué las limitaciones |
| Estructura del caso | Propuso módulos y alternativas | Elegí, ajusté y descarté |
| Estrategia y decisiones | Planteó opciones | Tomé las decisiones y asumí los trade-offs |
| Accesibilidad | Calculó los contrastes de color | Ajusté mi design system con esos resultados |
| Validación con usuarios | Nada | Hice las entrevistas y las pruebas |

**Lo que no delegué:** hablar con los tenderos y decidir qué cambiar con lo que dijeron.

*Nota:* este bloque debe ser cierto. Se ajusta según lo que de verdad hiciste y verificaste.

### Fuentes y limitaciones

**Fuentes**

- [Semana: tiendas de barrio](https://www.semana.com/especiales-multimedia/articulo/tiendas-de-barrio-pequenos-motores-que-impulsan-la-economia/202656/)
- [Cambio: gota a gota financia al 14,2% de los micronegocios](https://cambiocolombia.com/economia/articulo/2023/3/gota-gota-fuente-de-financiamiento-del-142-por-ciento-de-los-micronegocios-en-colombia)
- [Banco de la República: Bre-B cumple un año](https://banrep.gov.co/es/noticias/bre-b-cumple-un-anio-en-colombia)
- [Portafolio: Bre-B supera los 100 millones de llaves](https://www.portafolio.co/economia/finanzas/en-seis-meses-bre-b-supera-las-100-millones-de-llaves-y-acelera-la-transformacion-de-pagos-en-colombia-492544)
- [Vanguardia: Bre-B habilitará débitos recurrentes](https://www.vanguardia.com/colombia/2026/07/22/colombia-avanza-hacia-los-pagos-automaticos-bre-b-habilitara-debitos-recurrentes-sin-tarjetas/)
- [Valora Analitik: Treinta ofrece crédito sin intereses](https://www.valoraanalitik.com/?p=411889)
- [La República: Treinta lanza datáfono](https://www.larepublica.co/finanzas/app-treinta-lanzo-datafono-para-conectar-a-tenderos-y-aportar-a-la-inclusion-financiera-3403695)
- [La República: Treinta, 1,4 millones de micronegocios](https://www.larepublica.co/empresas/contamos-1-4-millones-de-micronegocios-que-estan-presentes-en-nuestra-plataforma-3974531)
- [RCN: cómo funcionan los gota a gota](https://noticiasrcn.com/economia/como-funcionan-los-gota-a-gota-el-panorama-de-prestamos-impagables-377973)
- [Valora Analitik: Nequi opera como entidad independiente](https://www.valoraanalitik.com/?p=609252)
- [Valora Analitik: Nequi QR para pequeños comercios](https://www.valoraanalitik.com/nequi-permitira-a-pequenos-comercios-recibir-pagos-desde-otros-bancos-y-sin-costo/)
- [Tiendanube: Nequi Negocios](https://www.tiendanube.com/co/blog/nequi)
- [Bloomberg Línea: Nequi y los créditos](https://www.bloomberglinea.com/latinoamerica/colombia/nequi-espera-entregar-cop5-billones-en-creditos-y-prepara-productos-de-inversion/)
- [El País: préstamos de Nequi en 2026](https://www.elpais.com.co/economia/estos-son-los-prestamos-que-ofrece-nequi-en-2026-cuanto-pagaria-mes-a-mes-por-uno-de-25-millones-1948.html)
- [Diario del Sur: créditos de Nequi 2026](https://www.diariodelsur.com.co/?p=541433)
- [Bancolombia: microcrédito](https://www.bancolombia.com/negocios/productos-financieros/microcredito)

**Limitaciones**

- Las cifras de micronegocios (81,2% y 14,2%) son de 2023 y no son exclusivas de tenderos.
- El número de tiendas de barrio varía según la fuente: de 266.000 (cifra antigua de Fenalco) a más de 500.000.
- La cifra de usuarios de Nequi varía entre 27 y 30 millones según la fuente.
- Las tasas de Nequi varían según la fuente y el programa. El 68% de créditos a personas con poca experiencia crediticia es una cifra reportada en prensa.
- Lo más reciente que encontré sobre el crédito de Treinta es de 2024.
- Las cifras de gota a gota son estimaciones de prensa.
- "Nadie combina las cuatro cosas" sale de lo que encontré, no de una revisión exhaustiva.

### Cierre

> Diseñé un crédito que se adapta al ritmo de caja del tendero, para que el banco le gane al gota a gota.

---

## Pendientes antes de publicar *(no forma parte del caso)*

- [ ] Pasar el hex del botón en estado **click** de tu design system y verificar su contraste.
- [ ] Hacer las entrevistas y la prueba del prototipo; completar **hallazgos** (módulo 3), **registro de iteraciones** (módulo 11) y **aprendizajes** (módulo 13).
- [ ] Verificar en la app las condiciones del **Crédito Negocios de Nequi** (montos, tasas, requisitos).
- [ ] Revisar el estado actual de **Treinta** en 2026 (app o comunicados).
- [ ] Confirmar con un experto regulatorio la **tensión del cargo fijo vs. tope de usura** y la reconfirmación biométrica.
- [ ] Confirmar que **Manrope** soporte cifras tabulares (`tnum`).
- [ ] Ubicar la fuente original del dato **+85% de tenderos usa el celular** (informe de Servipunto) y del **68%** de Nequi.
- [ ] Ajustar el bloque de **uso de IA** a lo que de verdad hiciste.
- [ ] Dibujar los íconos faltantes: QR / cobrar, alerta, pausa y calendario.
