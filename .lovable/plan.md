## Objetivo

Rediseñar **únicamente la Home** de Soccer Camps Pro manteniendo intactos su contenido, propuesta y negocio (campamentos de fútbol juvenil, búsqueda por país/ciudad/club, clubs internacionales, soccer trips, confianza para familias), pero aplicando el lenguaje visual de **Premier Padel Academy**: paleta azul marino + acento lima/coral, tipografía display moderna, curvas/ondas en el background del hero, cards editoriales premium y composición limpia y aspiracional.

No se crea backend, login, pagos ni reservas. Datos mock cuando haga falta. Solo la Home (`/`).

---

## Sistema visual (inspirado en Premier Padel Academy)

**Paleta** (definida en `src/styles.css` como tokens semánticos en oklch):
- `background`: crema muy claro / off-white (fondo principal cálido)
- `primary`: azul marino profundo (header, footer, títulos, bloques oscuros)
- `accent`: lima / amarillo-verde brillante (subrayados, badges, highlights)
- `cta` (destructive slot reutilizado): coral / rojo-naranja para botones principales (Search Camps, Find Your Camp, Subscribe)
- `muted`: gris frío suave para textos secundarios y bordes de cards
- Modo claro únicamente (la referencia es light)

**Tipografía**: par sans-serif moderno cargado vía Google Fonts en `__root.tsx`:
- Display/headings: **Sora** o **Manrope** 700–800, tracking ajustado (lo más cercano a la display de Premier Padel Academy)
- Body: **Inter** 400–500
- Headings muy grandes en hero (text-5xl → text-7xl), mayúsculas selectivas, jerarquía editorial

**Lenguaje visual**:
- Curva/onda SVG decorativa en el background del hero (wave inferior y blob superior, en azul marino con acento lima)
- Cards con `rounded-2xl`, sombra sutil, badge superior izquierdo de color, imagen 16:9 arriba
- Botones: `rounded-full` en CTA principales (estilo Premier Padel), variante coral sólida y variante outline azul marino
- Mucho espacio en blanco, secciones con padding generoso (`py-20 md:py-28`)
- Mobile-first, breakpoints `md` y `lg`

---

## Estructura de archivos

```text
src/
  routes/
    __root.tsx              (añadir Google Fonts + meta SEO de marca)
    index.tsx               (Home: orquesta todas las secciones)
  components/
    site/
      Header.tsx            (logo SCP + nav + CTA + menú móvil)
      Footer.tsx            (footer azul marino estilo Premier Padel)
      HeroWave.tsx          (hero con SVG de curva/onda)
      SearchBar.tsx         (buscador premium - card flotante)
      FeaturedCamps.tsx     (cards de camps destacados)
      TopClubs.tsx          (Arsenal / PSG / Bayern)
      ExperienceCards.tsx   (Camps / Trips / Club Programs)
      WhyUs.tsx              (4 valores con iconos)
      TripsBlock.tsx        (bloque editorial Soccer Trips)
      LatestNews.tsx        (3 cards de noticias)
      Newsletter.tsx        (captación email)
      WaveDivider.tsx       (SVG reutilizable de onda entre secciones)
  data/
    mockData.ts             (camps, clubs, news mock)
  styles.css                (tokens de color + fuentes)
```

Bun add: `lucide-react` (si no está) para iconos limpios estilo Premier Padel.

---

## Detalle de cada sección de la Home

**1. Header** — Fondo blanco/crema con leve borde inferior. Logo "Soccer Camps Pro" (texto + pelota SVG simple en color accent). Nav: Camps, Trips, Clubs, Blog, Contact. CTA pill coral "Find Your Camp". En móvil, hamburguesa con sheet lateral.

**2. Hero con curva** — Fondo azul marino con SVG wave decorativa abajo (transición a la sección siguiente) y blob lima sutil arriba a la derecha. Eyebrow lima en mayúsculas: "OFFICIAL YOUTH SOCCER CAMPS". H1 grande blanco: *"Find the Best Youth Soccer Camps"*. Subtítulo gris claro: *"Discover official and trusted soccer camps across North America from top international clubs."* Dos CTAs: "Explore Camps" (coral sólido) + "View Clubs" (outline blanco). A la derecha (desktop) imagen grande de entrenamiento juvenil con `rounded-3xl`. En móvil: stack vertical, imagen debajo.

**3. Buscador premium (sección crítica)** — Card blanca grande con `rounded-2xl` y sombra notable, **superpuesta visualmente al final del hero** (margin-top negativo en desktop). Título interno "FIND YOUR CAMP". Cinco campos en grid: Country, City, Club, Age Group, Month — selects con estilo limpio, label arriba en mayúsculas pequeño, fondo gris muy claro. Botón "Search Camps" coral grande a la derecha (desktop) o full-width abajo (móvil). En móvil columna única, en desktop fila de 5 + botón.

**4. Featured Soccer Camps** — Título grande con subrayado lima decorativo. Grid de 3 cards (mock): imagen 16:9, badge coral arriba-izquierda con el club, contenido: club, city, date, venue, age group, price destacado, CTA "Learn More" en azul con flecha →. Estilo idéntico al de eventos de Premier Padel Academy.

**5. Train With Top International Clubs** — Fondo crema. 3 cards horizontales premium para Arsenal, PSG, FC Bayern: cuadrado grande con imagen del club arriba, nombre, descripción breve, "X camps · Y cities", CTA "View Camps". Al hacer hover, ligero lift.

**6. Choose Your Soccer Experience** — Bloque sobre fondo azul marino (tipo sección oscura de Premier Padel). 3 cards grandes lado a lado en blanco/crema: Soccer Camps, Soccer Trips, Club Programs. Cada una con icono lima, título, descripción y enlace.

**7. Why Soccer Camps Pro** — Fondo claro. Grid 2x2 (móvil) / 4 columnas (desktop) con iconos lucide en círculo lima: Verified Camps, Top Club Methodologies, Trusted by Families, International Soccer Experiences. Texto corto bajo cada uno.

**8. Soccer Trips ("Go Beyond the Camp")** — Bloque editorial: imagen grande a la izquierda (familia/jóvenes viajando con kit de fútbol), texto a la derecha con eyebrow lima, H2, párrafo y CTA coral "Explore Trips". En móvil, imagen arriba y texto abajo.

**9. Latest Soccer Camp News** — "Latest Soccer Camp News" + link "View all news →" a la derecha. 3 cards con imagen, fecha en gris pequeño mayúsculas, título bold, extracto, "Read More →" en coral.

**10. Newsletter** — Sección con fondo azul marino y curva superior. Título blanco grande centrado: "Get the Latest Camp Updates". Subtítulo. Input email + botón coral "Subscribe" en una pill alargada (estilo formulario de Premier Padel). Sin backend: handler local muestra toast de confirmación.

**11. Footer** — Fondo azul marino oscuro. 4 columnas: branding SCP + tagline + iconos sociales / Programs (Camps, Trips, Clubs) / Company (Blog, Contact, About) / Legal (Privacy Policy, Terms). Línea inferior con copyright. Headings en lima, links en blanco con hover.

---

## SEO y metadatos

`__root.tsx` con title, description, og:title/og:description y og:image apuntando a la imagen del hero (camps juveniles), siguiendo la convención de TanStack Start. Marca: "Soccer Camps Pro — Find the Best Youth Soccer Camps".

---

## Notas técnicas (sección breve para revisión)

- Stack respetado: TanStack Start v1 + React 19 + TS + Tailwind v4 + Vite. Sin backend.
- Tokens de color añadidos a `:root` en `src/styles.css` en `oklch(...)` y registrados en `@theme inline`.
- Fuentes vía `<link>` de Google Fonts en `head()` del root y aplicadas por utilidades Tailwind `font-display` / `font-sans` (extender el theme).
- Curvas/ondas como SVG inline (sin librerías) para máximo control y rendimiento.
- Imágenes: usar Unsplash/placeholder URLs temáticas de fútbol juvenil; fácilmente reemplazables.
- Todo en `/` — no se tocan ni se crean otras rutas.
- Mobile-first con `sm/md/lg` y verificación de hamburguesa en header.

Resultado esperado: una Home que se sienta como **"Premier Padel Academy, pero para Soccer Camps Pro"** — premium, deportiva, internacional, aspiracional, moderna y orientada a conversión, sin perder la identidad ni el contenido del negocio actual.