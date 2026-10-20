import type { ExpoConfig } from 'expo/config';

// Configuración de la app. Las variables EXPO_PUBLIC_* de .env se leen en el
// código de la app (process.env.EXPO_PUBLIC_...), no aquí. Ver .env.example.
const config: ExpoConfig = {
  name: 'Classence',
  slug: 'classence',
  version: '0.0.1',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'classence',
  userInterfaceStyle: 'automatic',
  android: {
    // Identificador provisional: solo queda fijo al publicar en Google Play.
    package: 'com.classence.app',
    adaptiveIcon: {
      backgroundColor: '#E6F4FE',
      foregroundImage: './assets/images/android-icon-foreground.png',
      backgroundImage: './assets/images/android-icon-background.png',
      monochromeImage: './assets/images/android-icon-monochrome.png',
    },
    predictiveBackGestureEnabled: false,
  },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#208AEF',
        image: './assets/images/splash-icon.png',
        imageWidth: 76,
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
};

export default config;
