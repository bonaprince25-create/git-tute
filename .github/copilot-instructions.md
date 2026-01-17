# Instrucciones rápidas para agentes AI (Copilot)

Resumen rápido
- Proyecto: sitio estático HTML/CSS/JS en la raíz (`index.html`, `login.html`, `forms.html`, etc.).
- No hay build system ni dependencias externas. Trabaja sobre archivos en `/Users/cash/HTML`.

Qué mirar primero
- `index.html` — punto de entrada ejemplo; incluye `style.css` y carga `script.js` al final del body.
- `script.js` — JavaScript global; actualmente contiene una sintaxis inválida que causa error en consola (reemplazar `console.log(HELLO WORLD);` por `console.log("HELLO WORLD");`).
- `style.css`, `style1.css` — reglas de diseño; observar clases `.wrapper`, `.input-box`, `.btn` para patrones de UI.
- `images/` — activos estáticos; algunos nombres contienen espacios (p. ej. `Captura de pantalla 2025-10-21 a las 17.45.30.png`) — evitar romper rutas URL.

Big picture / arquitectura
- Sitio totalmente estático: no hay servidor backend, APIs ni empaquetadores. Las páginas se sirven como archivos estáticos.
- Flujo de datos: interacción cliente -> DOM -> `script.js` (archivo global). No hay módulos ni importación ES module en el repo actual.
- Decisión estructural observable: CSS centralizado en `style.css` y `style1.css`, JS compacto en `script.js`; HTML multipágina (cada página independiente).

Convenciones y patrones específicos del repo
- Clases CSS reutilizadas: `.wrapper` centra el contenido y define el contenedor principal; `.input-box` y `.btn` tienen estilos consistentes (bordes redondeados, padding grande). Referirse a `style.css` para mantener la coherencia.
- Tipografía y colores: la hoja CSS usa fuentes como `Impact` y paleta morada/azul — favorece consistencia visual cuando añadas componentes.
- Inclusión de scripts: `script.js` se carga al final del `body` (patrón de carga simple para scripts globales).
- Imágenes: están en `images/`; ten en cuenta espacios en nombres — mejor renombrar a guiones bajos o usar codificación URL.

Flujos de trabajo de desarrollador (comandos y debugging)
- Abrir localmente (macOS zsh):

```bash
cd /Users/cash/HTML
open index.html    # abrir con el navegador por defecto
# o servir por HTTP (recomendado si vas a probar fetch o rutas relativas)
python3 -m http.server 8000
# luego abrir http://localhost:8000
```

- Debugging: usar DevTools del navegador. Si la consola está vacía, revisar `script.js` por errores de sintaxis (p. ej. el `console.log` sin comillas).

Qué evitar / riesgos detectados
- No asumir que hay herramientas de lint/build: no hay `package.json`, `webpack`, ni `make` en el repo.
- Archivos con espacios en nombres dentro de `images/` pueden romper referencias en HTML/CSS.
- `script.js` usa variables/literales no definidas — revisar antes de modificar otras páginas.

Ejemplos concretos para cambios rápidos
- Corregir `script.js`:
  - Actual: `console.log(HELLO WORLD);`
  - Sugerido: `console.log("HELLO WORLD");`
- Mantener estilos de componentes: cuando agregues campos de formulario, reutiliza `.input-box` y `.btn` para mantener el diseño.

Dónde dejar notas y cómo pedir clarificaciones
- Si necesitas comportamiento dinámico (formularios, validación, persistencia), pregunta si se desea:
  - mantener todo en el navegador (localStorage) o
  - añadir un backend/API (esto requerirá diseño adicional).

Si te piden cambios: aplica edits pequeños y ejecuta una comprobación rápida abriendo la página en el navegador y confirmando que no hay errores en la consola.

Preguntas útiles para el desarrollador humano
- ¿Desean que normalicemos nombres de archivo en `images/` (eliminar espacios)?
- ¿Quieren que dividamos `script.js` en módulos (ESM) o prefieren mantener un único archivo global?

Fin — pide aclaraciones si necesitas reglas más específicas o permiso para corregir `script.js` y renombrar imágenes.
