import Constants from 'expo-constants';

/** Versión de la app según app.config.ts, o 'dev' si no está disponible. */
export function getAppVersion(): string {
  return Constants.expoConfig?.version ?? 'dev';
}
