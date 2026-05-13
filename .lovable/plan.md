## Cambios en la sección "A week designed to make players better"

Archivo: `src/routes/soccer-camp-austin-arsenal.tsx` (componente `TrainingProgram`)

### 1. Equilibrar el encuadre de la foto
- Quitar `objectPosition: "left center"` del `<img>`.
- Usar un `objectPosition` centrado y ligeramente desplazado para dejar márgenes pequeños y simétricos a izquierda y derecha de las cinco jugadoras (aprox. `"55% center"`, ajustando si hace falta tras revisar el preview).
- Mantener `object-cover` y la columna a `md:col-span-6` para que el texto siga teniendo su espacio.

### 2. Mover el badge "Daily structure" debajo de la foto
- Sacarlo del contenedor `relative` con posición absoluta sobre la imagen.
- Renderizarlo justo debajo del `<img>`, dentro de la misma columna izquierda, como una pequeña tarjeta alineada (probablemente con un pequeño padding lateral para que no quede pegada al borde de la sección que va a sangre).
- Mantener el estilo actual (fondo `bg-cta`, texto en `text-cta-foreground`, tipografías y tamaños iguales).

### 3. Verificación
- Tras el cambio, hacer screenshot del preview en desktop para confirmar:
  - Las cinco jugadoras se ven completas, con margen visual equilibrado a ambos lados.
  - El badge ya no se superpone a la imagen.
  - El bloque de texto a la derecha sigue respirando bien.

No se tocan otras secciones ni la lógica del componente.
