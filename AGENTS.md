# AGENTS.md

Guía de desarrollo y mantenimiento para agentes de IA y desarrolladores en este repositorio.

## 🚀 Visión General del Proyecto

Este proyecto es el sitio web y portafolio personal de **Nicolas Snider** (.NET Developer & Software Engineer). Está construido con:
- **Framework**: [Astro 7](https://astro.build/) (generación de sitio estático output: static)
- **UI Framework**: [React 19](https://react.dev/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Internacionalización**: Soporte bilingüe en paralelo (en en / y es en /es)
- **Gestor de paquetes**: pnpm 
- **Flujo de Trabajo Git**: Gitflow (main, develop, feature/*, hotfix/*, release/*)
- **Despliegue**: GitHub Pages mediante la acción .github/workflows/deploy.yml (withastro/action@v3)

---

## 🛠️ Comandos Principales

```bash
# Desarrollo local
pnpm run dev

# Compilar sitio estático para producción (salida en /dist)
pnpm run build

# Previsualizar la versión compilada
pnpm run preview

# Linter de código (ESLint)
pnpm run lint

# Análisis de código muerto / exportaciones no usadas (Knip)
pnpm run knip
```

---

## 🌿 Flujo de Trabajo y Ramificación (Gitflow)

Este repositorio sigue la metodología **Gitflow** para la gestión de código y despliegue:
- **`main`**: Rama de producción estable. Solo recibe merges verificados desde `develop` o `release/*` (y `hotfix/*` si aplica). Los commits en esta rama disparan el despliegue automático a GitHub Pages.
- **`develop`**: Rama principal de integración para el trabajo continuo de desarrollo.
- **`feature/<nombre-feature>`**: Ramas creadas desde `develop` para desarrollar nuevas funcionalidades o refactorizaciones. Se integran a `develop` mediante Pull Request.
- **`hotfix/<nombre-hotfix>`**: Ramas creadas desde `main` para correcciones urgentes en producción. Se fusionan tanto en `main` como en `develop`.
- **`release/<version>`**: Ramas de preparación de versión para congelamiento de código, pruebas finales y ajustes antes de hacer merge a `main`.

---

## 📁 Estructura del Código

```text
├── public/                  # Archivos estáticos de acceso directo
│   ├── Nicolas_Snider_CV_EN.pdf
│   ├── Nicolas_Snider_CV_ES.pdf
│   └── images/              # Imágenes de proyectos y OpenGraph
├── src/
│   ├── components/          # Componentes de React (Hero, Header, Projects, etc.)
│   ├── data/                # Datos centralizados y diccionario i18n
│   │   ├── ui.ts            # Textos e interfaz bilingüe (EN / ES)
│   │   ├── experience.ts    # Historial laboral
│   │   ├── education.ts     # Formación académica e idiomas
│   │   ├── projects.ts      # Proyectos destacados
│   │   └── skills.ts        # Habilidades y tecnologías
│   ├── layouts/
│   │   └── Layout.astro     # Layout base con metadatos SEO y Footer
│   ├── pages/
│   │   ├── index.astro      # Página principal (Inglés)
│   │   └── es/index.astro   # Página principal (Español)
│   ├── config.ts            # Constantes globales (nombre, email, links sociales)
│   └── types.ts             # Definiciones de TypeScript
```

---

## 🔒 Reglas de Mantenimiento y Buenas Prácticas

1. **Gitflow y Commits**:
   - Crear ramas de trabajo descriptivas (`feature/...`, `hotfix/...`).
   - Asegurar que todo PR pase las verificaciones automáticas de lint, knip y build antes del merge.

2. **Sin Magic Strings (Internacionalización)**:
   - Todo texto visible al usuario debe agregarse a src/data/ui.ts (o a su respectivo archivo en src/data/) tanto para en como para es.
   - No hardcodear textos ni URLs en los componentes React/Astro; utilizar src/config.ts o ui.ts.

3. **Privacidad y Datos Personales**:
   - **NUNCA** incluir número celular ni dirección de calle en los archivos de código o datos del repositorio.
   - La información de contacto pública se limita a: Email (AUTHOR_EMAIL), LinkedIn (AUTHOR_LINKEDIN), GitHub (AUTHOR_GITHUB) y la descarga de los PDF de CV desde public/.

4. **Archivos de CV**:
   - Los PDF oficiales se mantienen en public/Nicolas_Snider_CV_EN.pdf y public/Nicolas_Snider_CV_ES.pdf.
   - No guardar archivos PDF duplicados en la raíz del repositorio.

5. **Gestión de Paquetes**:
   - Utilizar únicamente pnpm. No subir package-lock.json ni yarn.lock.

6. **Calidad de Código**:
   - Antes de dar por finalizada cualquier tarea, ejecutar y verificar que pasen con 0 errores:
     - pnpm run lint
     - pnpm run knip
     - pnpm run build
