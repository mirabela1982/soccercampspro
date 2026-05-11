## Diagnóstico

La sección actual `ThreePhases` interpreta mal la referencia (https://goal-trip-dream.lovable.app). En esa página las 3 fases NO son etapas técnicas dentro de la semana de entrenamiento (Foundation / Development / Performance), sino un **journey narrativo del jugador**:

- **Phase 1 — Soccer Camp:** la semana del campamento local (Jacksonville).
- **Phase 2 — Get an Invitation:** los mejores jugadores reciben una invitación para continuar el viaje.
- **Phase 3 — Madrid:** los seleccionados viven la experiencia final en Madrid (World Challenge / Clinic).

Es un storytelling que conecta camp local → selección → experiencia internacional. Es exactamente la promesa que ya intentamos contar con `PathwayToLondon`, pero con un formato más narrativo y emocional, dividido en 3 capítulos claros.

## Propuesta para Arsenal Austin

Reemplazar la `ThreePhases` actual (Foundation/Development/Performance) y absorber `PathwayToLondon` en una sola sección `JourneyToLondon` con el mismo concepto de la referencia, adaptada a Arsenal Austin.

### Estructura de las 3 fases

**Phase 01 · Austin Soccer Camp**
- Título: "Train at Home in Austin"
- Subtítulo: la semana de campamento Arsenal en Austin (fechas, edades, sede).
- Bullets: metodología Arsenal, coaches oficiales, valores del club, sesiones técnicas/tácticas.
- Imagen: la actual `austin-arsenal-training.jpg`.

**Phase 02 · Get an Invitation to London**
- Título: "Stand Out and Get Invited"
- Texto: al final de la semana, los jugadores que destaquen por nivel, actitud y valores Arsenal pueden recibir una invitación para continuar su camino en Londres.
- 3 mini-beneficios (cards numeradas 1/2/3 como la referencia):
  1. A Unique Arsenal Experience
  2. Arsenal Methodology with elite coaches
  3. The London Experience at the Emirates

**Phase 03 · Live the Experience in London**
- Título: "Train Where Arsenal Trains"
- Texto: los seleccionados viajan a Londres a vivir la metodología Arsenal en sus instalaciones, combinando fútbol, valores y una experiencia internacional inolvidable.
- 2 sub-bloques tipo referencia:
  - **Arsenal World Challenge** — torneo internacional con equipos de los camps Arsenal.
  - **Arsenal Soccer Clinic in London** — semana de entrenamiento all-inclusive en las instalaciones del club.

### Diseño visual

- Cada fase como un bloque grande full-width con etiqueta "Phase 0X · …" en lima sobre navy, título display grande y narrativa.
- Alternar lado imagen / lado texto entre fases para ritmo editorial.
- Línea vertical o numeración grande conectando las 3 fases (sensación de viaje).
- Cards numeradas 1·2·3 en Phase 02, dos cards lado a lado en Phase 03.
- CTA "Register and start the journey to London" al final de la sección.
- Mantener tokens del design system (primary navy, accent lime, cta).

### Cambios en el archivo

`src/routes/soccer-camp-austin-arsenal.tsx`:
- Eliminar el componente `ThreePhases` actual.
- Eliminar `PathwayToLondon` (su contenido se integra en la nueva sección como Phase 02 + 03).
- Crear nuevo componente `JourneyToLondon` con las 3 fases descritas.
- Actualizar el orden en `AustinArsenalPage`:
  ```
  Hero → CampFacts → Intro → TrainingProgram → Includes → Benefits → JourneyToLondon → Trust → Important → FinalCTA
  ```
- No tocar Header, Footer, Hero, ni demás secciones.
- No crear nuevas rutas ni borrar imágenes existentes.

### Fuera de alcance

- No se generan nuevas imágenes (reutilizamos las actuales de Austin).
- No se cambia el resto de la página ni el menú.
