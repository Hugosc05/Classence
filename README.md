# Classence

App móvil de estudio asistida por IA: organiza tus asignaturas, convierte tus PDF en resúmenes y tests
con referencias a la página de origen, y repasa con repetición espaciada.

> Estado: **Sprint 1 (cimientos)**. La app solo muestra una pantalla de inicio. El plan completo está en
> [`docs/PLAN_INICIAL.md`](docs/PLAN_INICIAL.md).

## Stack

| Pieza | Versión |
|---|---|
| Expo SDK | 58 |
| React Native | 0.88 |
| React | 19.3 |
| TypeScript | 6.0 (modo `strict`) |
| Navegación | Expo Router (rutas en `src/app/`) |
| Tests | Jest 30 + jest-expo + React Native Testing Library 14 |
| Lint y formato | ESLint 9 (`eslint-config-expo`) + Prettier 3 |

Solo Android en el MVP. Se usan *development builds* (`expo run:android`), no Expo Go.

## Requisitos (Windows)

| Herramienta | Versión | Comprobar |
|---|---|---|
| Node.js | 24 LTS (mínimo 22.13; no versiones impares) | `node -v` |
| Git | cualquiera reciente | `git --version` |
| JDK | 17 (el que recomienda React Native) | `java -version` |
| Android Studio | última estable | — |
| Android SDK Platform | 37 (`compileSdk` de React Native 0.88) | SDK Manager |
| Android SDK Build-Tools | 37.0.0 | SDK Manager |
| Emulador | AVD x86_64, imagen Google APIs API 36, ~3 GB de RAM | `adb devices` |

Variables de entorno de usuario:

- `ANDROID_HOME` = `%LOCALAPPDATA%\Android\Sdk`
- `JAVA_HOME` = carpeta del JDK 17
- Añadir a `Path`: `%LOCALAPPDATA%\Android\Sdk\platform-tools` y `%LOCALAPPDATA%\Android\Sdk\emulator`

El emulador necesita la virtualización de Windows (característica **Plataforma del hipervisor de Windows**).

## Instalación y ejecución

```powershell
git clone https://github.com/Hugosc05/Classence.git
cd Classence
npm ci
copy .env.example .env   # opcional en el Sprint 1: aún no se usa ninguna variable
```

Arranca el emulador (desde Android Studio → Device Manager, o con `emulator -avd <nombre>`) y después:

```powershell
npm run android
```

La primera vez compila la app nativa (varios minutos). Las siguientes veces basta con `npm start` y
abrir la app ya instalada en el emulador; los cambios en el código se recargan solos.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run android` | Compila e instala el *development build* en el emulador y arranca Metro |
| `npm start` | Arranca Metro (con la app ya instalada) |
| `npm run lint` | ESLint (incluye las reglas de Prettier) |
| `npm run format` / `format:check` | Formatea / comprueba el formato |
| `npm run typecheck` | TypeScript sin generar archivos |
| `npm test` | Tests con Jest |
| `npm run check` | Todo lo anterior seguido; es lo mismo que ejecuta la CI |

## Estructura

```text
src/
  app/         rutas de Expo Router (solo componen pantallas)
  features/    pantallas y casos de uso por funcionalidad
  lib/         utilidades
  __tests__/   tests
docs/          plan, decisiones (ADR) y sprints
```

Las carpetas `android/` e `ios/` se generan al compilar y no se suben al repositorio.

## Seguridad

- Nunca subas `.env` ni claves. Todo lo que empieza por `EXPO_PUBLIC_` acaba dentro de la app.
- Los PDF de prueba con derechos de terceros van en `fixtures/private/`, que Git ignora.

## Problemas conocidos al instalar

_Se completa durante la primera ejecución (Sprint 1, tarea S1-T4)._

## Licencia

Todos los derechos reservados. Ver [`LICENSE`](LICENSE).
