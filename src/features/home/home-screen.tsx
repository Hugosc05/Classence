import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getAppVersion } from '@/lib/app-info';

// Pantalla provisional del Sprint 1: solo demuestra que la app arranca.
// Los colores definitivos llegan con el sistema de diseño (Sprint 3).
export default function HomeScreen() {
  const dark = useColorScheme() === 'dark';
  const fg = dark ? '#E6ECF1' : '#16202A';
  const muted = dark ? '#9AA6B2' : '#5A6672';

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: dark ? '#12171C' : '#F4F6F8' }]}>
      <View style={styles.content}>
        <Text accessibilityRole="header" style={[styles.title, { color: fg }]}>
          Classence
        </Text>
        <Text style={[styles.subtitle, { color: fg }]}>Hola Classence</Text>
        <Text style={[styles.version, { color: muted }]}>Versión {getAppVersion()}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8, padding: 24 },
  title: { fontSize: 34, fontWeight: '700' },
  subtitle: { fontSize: 18 },
  version: { fontSize: 14 },
});
