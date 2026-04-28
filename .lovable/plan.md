## Diagnosis

El home de la app está **funcionando correctamente**:

- El dev server responde `HTTP 200` en `/`.
- No hay errores de runtime ni de consola.
- Todos los archivos (`Hero.tsx`, `SearchBar.tsx`, `logo.svg`, `hero-soccer.jpg`, `index.tsx`) existen y compilan.
- No hay errores en los logs de Vite (el warning de `tailwind.config.ts` es inofensivo — Tailwind v4 usa `styles.css` directamente).

La pantalla **"Page not found"** que estás viendo es el `notFoundComponent` de TanStack Router en `src/routes/__root.tsx`. Solo aparece cuando la URL del navegador **no coincide con ninguna ruta** definida. Esta app solo tiene una ruta: `/`. Si el preview carga en `/algo-distinto` (pasa a veces tras editar el shell o por una URL del preview que quedó colgada), se dispara la 404.

## Solución

Como esta es una home de una sola página, hacer que la 404 **redirija automáticamente a `/`** elimina el problema para siempre sin que el usuario tenga que hacer clic en nada. La pantalla de 404 mostrará un mensaje breve "Redirigiendo…" y volverá al home.

## Cambios

- `src/routes/__root.tsx`: añadir un `useEffect` dentro de `NotFoundComponent` que llame a `navigate({ to: "/", replace: true })` al montarse. Mantener el botón "Go home" como fallback por si JS está deshabilitado. Importar `useEffect` de React y `useNavigate` de `@tanstack/react-router`.
