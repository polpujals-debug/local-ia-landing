# Handoff: LocalIA — Landing Page

## Overview
Landing page de **LocalIA**, una agencia de IA que vende automatizaciones, chatbots/agentes y SaaS a medida a pequeñas y medianas empresas. La página presenta la propuesta de valor, el proceso de trabajo, los servicios, una demo animada de un agente de chat, casos de éxito, testimonios y un formulario de contacto. Es **trilingüe** (Catalán / Español / Inglés) con cambio de idioma en vivo.

## About the Design Files
Los archivos de este paquete son **referencias de diseño creadas en HTML** — un prototipo de alta fidelidad que muestra el aspecto y comportamiento previstos, **no** código de producción para copiar tal cual.

El archivo principal, `LocalIA.dc.html`, está escrito como un "Design Component" y depende de un runtime propio (`support.js`, no incluido y no necesario). Sirve como **fuente de verdad visual y de comportamiento**. La tarea es **recrear este diseño en el entorno del proyecto destino** (React/Next.js, Vue, Astro, etc.) usando sus patrones y librerías. Si no existe entorno todavía, recomiendo **Next.js + React** (o Astro si se prioriza una landing estática rápida), con CSS plano o Tailwind.

> Nota técnica: en el prototipo, los estilos están en línea y la lógica vive en una clase `Component`. Al recrearlo, conviene extraer los **design tokens** (abajo) a variables CSS o a la config de Tailwind, y los textos de los 3 idiomas a archivos de i18n.

## Fidelity
**Alta fidelidad (hifi).** Colores, tipografía, espaciado e interacciones son finales. Recrear la UI de forma fiel al píxel usando las librerías del codebase destino.

## Design Tokens

### Colores (tema oscuro único)
| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#0A0A0B` | Fondo base de la página |
| `--surface` | `#131316` | Fondo de secciones alternas (services, work, contact) |
| `--surface-2` | `#1B1B20` | Inputs, burbujas de chat del bot, avatares |
| `--fg` | `#F5F5F2` | Texto principal |
| `--muted` | `#8B8B86` | Texto secundario, labels, navegación |
| `--border` | `rgba(255,255,255,0.12)` | Bordes, separadores |
| `--accent` | `#D4FF3A` | Color de acento (lima); CTAs, números activos, métricas |
| `--accent-ink` | `#0A0A0B` | Texto sobre el acento |
| `--grid` | `rgba(255,255,255,0.035)` | Líneas de la rejilla de fondo del hero |
| online dot | `#3ECF8E` | Punto verde "en línea" del chat |

### Tipografía
3 familias (Google Fonts):
- **Newsreader** (serif) — titulares, párrafos de cuerpo, citas. Pesos 300/400/500/600 + itálicas 300/400.
- **IBM Plex Mono** (monoespaciada) — labels, navegación, botones, métricas pequeñas, etiquetas tipo `// texto`. Pesos 400/500/600.
- **Space Grotesk** (sans) — únicamente el wordmark "local ia". Pesos 400–700.

Escala de titulares (con `clamp` fluido):
- H1 hero: `clamp(42px, 6vw, 82px)`, weight 600, line-height .98, letter-spacing −.025em, `text-wrap: balance`
- H2 sección: `clamp(32px, 4vw, 52px)`, weight 600, line-height 1.04, letter-spacing −.02em
- H2 contacto: `clamp(34px, 4.4vw, 58px)`, weight 600
- H3 tarjeta: 23–30px, weight 500
- Cuerpo: 16–21px, line-height 1.5–1.55, `text-wrap: pretty`
- Labels mono: 11–12px, uppercase, letter-spacing .18em (.06–.16em según contexto)

### Espaciado, radios, otros
- Contenedor central: `max-width: 1180px`, padding lateral `32px`
- Padding vertical de secciones: `110px 0` (hero `160px 0 110px`)
- `--radius`: `4px` base. Tarjetas usan `calc(--radius * 2)` = 8px. Tarjeta de chat 18px. Pills/badges 100px.
- Sombra de la tarjeta de chat: `0 30px 60px -30px rgba(0,0,0,.5)`
- Header fijo: `backdrop-filter: blur(14px)`, fondo `color-mix(in srgb, var(--bg) 78%, transparent)`, borde inferior 1px

## Screens / Views
Es una **única página** de scroll vertical con header fijo. Secciones en orden:

### 1. Header (fijo, z-index 50)
- Izquierda: logo SVG (nodo con ondas) + wordmark "local ia" (Space Grotesk 600, 19px).
- Centro: nav con 4 enlaces ancla (Procés/Serveis/Feina/Contacte) en mono 12px uppercase, color muted → fg en hover.
- Derecha: **selector de idioma** segmentado (CA / ES / EN). El activo tiene fondo `--fg` y texto `--bg`; inactivos transparentes con texto muted. (El antiguo selector de tema fue eliminado.)

### 2. Hero (`#top`)
- Fondo con **rejilla** (dos `linear-gradient` de líneas, `background-size: 56px 56px`).
- Grid 2 columnas `1.15fr .85fr`, gap 48px.
- Col izq: badge con punto lima parpadeante + label mono → H1 → párrafo → 2 CTAs (primario lima sólido con flecha →, secundario con borde). Animación de entrada al cargar (`heroIn`: fade + translateY 26px, 1s).
- Col der: **SVG animado** — grafo de nodos conectados; líneas, un pentágono punteado lima con `stroke-dashoffset` animado (dash 6s loop), nodos que laten (pulse 2.4s).

### 3. Process (`#process`)
- Grid `.8fr 1.2fr`. Col izq **sticky** (`top: 110px`) con label + H2 + sub.
- Col der: lista de 4 pasos (01–04) separados por borde superior. Click en un paso lo marca **activo**: su número y título pasan a color fg/acento y se despliega su descripción (fade-in). Por defecto activo el paso 0.

### 4. Services (`#services`) — fondo `--surface`
- Header (label + H2 + sub, max-width 640px) + grid de **3 tarjetas**.
- Cada tarjeta: borde, radio 8px, fondo `--bg`, padding 32/28, icono SVG lima (34px), H3 25px, párrafo. Hover: `translateY(-6px)` + borde lima.

### 5. Automations / Chat (`#automations`)
- Grid 2 col `1fr 1fr`, gap 56px.
- Col izq: label + H2 + sub + 2 métricas (`24/7` en lima, `<2s` en fg) con su caption mono.
- Col der: **tarjeta de chat** (radio 18px) con cabecera (avatar lima + "Agent LocalIA" + punto verde "en línea") y cuerpo que **reproduce en bucle** una conversación guionizada: aparece indicador de "escribiendo" (3 puntos parpadeantes), luego cada mensaje (burbujas user lima a la derecha, bot gris a la izquierda), se vacía y reinicia. Es una **animación demo**, no un chat real.

### 6. Work (`#work`) — fondo `--surface`
- Header (label + H2 + nota `// casos il·lustratius`) + grid de **3 tarjetas** de proyecto: cliente (mono) + badge de tipo (pill lima) + título + resultado destacado en lima sobre borde superior. Hover igual que services.

### 7. Testimonials (`#testimonials`)
- Header centrado + grid de **3 tarjetas** de cita: comilla grande lima, cita (Newsreader 19px), pie con avatar de iniciales + nombre + rol.

### 8. Contact (`#contact`) — fondo `--surface`
- Grid 2 col. Izq: label + H2 ("Explica'ns el teu problema" / "Cuéntanos tu reto" / "Tell us your challenge") + sub + email de contacto (`hola@localia.ai`, en lima).
- Der: **formulario** (nombre, email, mensaje textarea, botón enviar lima). Al enviar (preventDefault) muestra un estado de **éxito** (check lima + mensaje de gracias). Inputs con fondo `--surface-2`, foco → borde lima.

### 9. Footer
- Logo + wordmark, nota de marca, copyright `© 2026 LocalIA`. Borde superior.

## Interactions & Behavior
- **Cambio de idioma (CA/ES/EN):** re-renderiza TODOS los textos. Todos los strings de los 3 idiomas están en el objeto `T` de la clase `Component` (ver archivo). Al cambiar idioma, la demo de chat se reinicia.
- **Animaciones de scroll (reveal):** cada bloque entra con **fade + translateY** desde `--reveal-dist` (46px) al hacer scroll, con duración `--reveal-dur` (.9s) y easing `cubic-bezier(.2,.7,.2,1)`. Las tarjetas/columnas hermanas aparecen **escalonadas** (delay 0.1s × índice).
  - **Implementación recomendada en el destino:** usar `IntersectionObserver` (añadir clase `.in` al entrar). En el prototipo se usó un bucle `requestAnimationFrame` + `getBoundingClientRect` por una limitación del entorno de preview, pero en un navegador real `IntersectionObserver` es la opción correcta. Respetar `prefers-reduced-motion` (mostrar todo sin animar).
- **Pasos del proceso:** click cambia el paso activo (acordeón de descripción).
- **Demo de chat:** máquina de estados temporizada que añade mensajes uno a uno con indicador de "escribiendo", y reinicia en bucle.
- **Formulario:** `onSubmit` → `preventDefault` → estado `sent=true` → vista de agradecimiento. (Sin backend en el prototipo.)
- **Hover:** CTAs suben 2px (+ glow lima en el primario); tarjetas suben 6px + borde lima; nav e idioma cambian color.
- **Scroll suave** entre anclas (`scroll-behavior: smooth`, `scroll-margin-top: 90px` por el header fijo).

## State Management
Estado necesario (en el prototipo, `this.state`):
- `lang`: `'ca' | 'es' | 'en'` (idioma activo)
- `activeStep`: índice del paso de proceso desplegado
- `chatN`: nº de mensajes visibles en la demo de chat
- `chatTyping`: bool, indicador de escribiendo
- `sent`: bool, formulario enviado

Datos: el objeto `T` contiene toda la copy por idioma (nav, hero, process.steps, services a/b/c, chat.messages, work.projects, testimonials.items, contact, footer). **Extraer a i18n** (p. ej. `next-intl`, `react-i18next` o JSON por locale).

## Lo que falta para producción (fuera del diseño)
- **Formulario:** conectar a backend / servicio de email (el prototipo solo simula). Validación real de campos.
- **Chat:** opcionalmente convertir la demo en un agente real conectado a un LLM (hoy es guionizado).
- **i18n** real con detección/persistencia de idioma y rutas localizadas.
- **SEO/meta, analítica, hosting/dominio.**

## Assets
- **Iconos:** todos son SVG inline (logo de marca, iconos de servicios, check, avatar del chat, grafo del hero). No hay imágenes raster — se pueden recrear como componentes SVG.
- **Fuentes:** Google Fonts (Newsreader, IBM Plex Mono, Space Grotesk). Cargar vía `<link>` o `next/font`.
- No se usan assets de marca de terceros.

## Files
- `LocalIA.dc.html` — prototipo completo (markup + estilos en línea + clase de lógica `Component` con todos los textos en 3 idiomas y la lógica de chat/reveal/idioma). **Referencia principal.**
