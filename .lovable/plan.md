# Export HTML estático pixel-perfect para Elementor

Voy a generar un paquete `export-html.zip` (descargable desde el chat) con dos páginas HTML reescritas a mano, un único CSS limpio y todas las imágenes locales, listo para abrir en Claude Code y trocear por Elementor.

## Contenido del paquete

```text
export-html/
├── index.html                          (Home)
├── soccer-camp-austin-arsenal.html     (Landing Austin)
├── css/
│   └── styles.css                      (todos los tokens + estilos por sección)
├── images/
│   ├── hero-soccer.jpg
│   ├── stadium-arsenal.jpg
│   ├── stadium-psg.jpg
│   ├── stadium-bayern.jpg
│   ├── austin-arsenal-hero.jpg
│   ├── austin-arsenal-training.jpg
│   ├── austin-arsenal-players.jpg
│   ├── camp-arsenal.jpg                (descargado de Unsplash)
│   ├── camp-psg.jpg                    (descargado de Unsplash)
│   ├── camp-bayern.jpg                 (descargado de Unsplash)
│   ├── trips.jpg                       (descargado de Unsplash)
│   ├── news-1.jpg / news-2.jpg / news-3.jpg
│   ├── logo-arsenal.svg                (descargado de Wikipedia)
│   ├── logo-psg.svg
│   ├── logo-bayern.svg
│   └── logo-soccercampspro.svg
└── README.txt                          (notas de uso para Elementor)
```

Todas las rutas dentro del HTML serán relativas (`./css/styles.css`, `./images/xxx.jpg`), sin dependencias de CDN ni JS.

## Cómo lo voy a construir

1. **Reescribir las secciones a HTML semántico limpio**, una por una, replicando 1:1 lo que se ve en el preview:
   - Home: Header, Hero, SearchBar, TopClubs, FeaturedCamps, ExperienceCards, WhyUs, TripsBlock, LatestNews, Newsletter, Footer.
   - Austin: Header, Hero, CampFacts, Intro, TrainingProgram, PlayersBand, Includes, Benefits, PhaseTwoInvitation, PhaseThreeLondon, Trust, Important, FinalCTA, Footer.
   - Cada sección envuelta en `<section class="sc-hero">`, `<section class="sc-top-clubs">`, etc., con clases BEM-ish para que Elementor las pueda mapear a widgets.
2. **CSS único en `css/styles.css`** con los mismos tokens de `src/styles.css` (`--primary: #222B4D`, `--accent: #DDE383`, `--cta: #006D57`, etc.), tipografías Sora + Inter desde Google Fonts y media queries equivalentes a los breakpoints `md`/`lg` de Tailwind (768px / 1024px). Sin Tailwind compilado: clases legibles y editables.
3. **Iconos Lucide**: inlineados como `<svg>` directamente en el HTML (sin librería externa) para mantener el look exacto.
4. **Imágenes**:
   - Copiar las locales (`src/assets/*.jpg`, `public/images/*.jpg`) a `images/`.
   - Descargar con `curl` las imágenes de Unsplash (3 camps, trips, 3 news) y los 3 logos SVG de Wikipedia, guardarlos en `images/` con nombres estables.
   - Reemplazar todas las URLs por rutas relativas.
5. **Interactividad mínima**: el carrusel de "Featured Camps", el dropdown del Header y el formulario de Newsletter quedan como markup estático (3 cards visibles en grid, menú siempre desplegable en hover vía CSS, form sin submit). Esto es lo que Elementor espera de un import; cualquier comportamiento dinámico se reconstruye allí.
6. **QA visual**: tras generar los HTML, los abro con un screenshot a 1280px y 390px para verificar que coinciden con el preview actual antes de empaquetar.
7. **Empaquetar** con `zip -r /mnt/documents/export-html.zip export-html/` y entregarlo como artifact descargable.

## Detalles técnicos

- Sin React, sin Tailwind runtime, sin TanStack: HTML + CSS puro. Un único `<link rel="stylesheet" href="./css/styles.css">` por página.
- Google Fonts cargado con `<link>` (Sora 500/600/700/800, Inter 400/500/600/700). Si prefieres 100% offline, en el README explico cómo sustituirlo por `@font-face` local — pero por defecto lo dejo con CDN de fonts para que el peso del ZIP sea menor.
- Cada página tendrá su propio `<title>`, `<meta name="description">` y OG tags, replicando los actuales.
- Los anclas internos (`#camps`, `#clubs`, `#trips`, `#news`, `#contact`, `#search`) se conservan para que el menú del header siga haciendo scroll dentro de la página.
- El link del header "Arsenal Soccer Camp — Austin" apunta a `./soccer-camp-austin-arsenal.html` (ruta relativa).

## Lo que NO incluye (y por qué)

- No incluyo el carrusel funcional ni el dropdown con JS — Elementor los reemplaza con sus propios widgets, así que es mejor entregar el estado base estático.
- No incluyo los componentes `shadcn/ui` ni `routeTree.gen.ts`; son artefactos de React que no aportan nada al import a Elementor.
- No toco el proyecto React: el export vive solo en `/mnt/documents/export-html.zip`, sin modificar `src/`.

Cuando lo apruebes lo construyo y te dejo el ZIP listo para descargar.
