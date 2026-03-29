import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { router } from 'expo-router';

export default function SessionDashboardScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.inner}>
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>📍</Text>
        </View>

        <Text testID="session-active-title" style={styles.title}>
          Sessão Ativa!
        </Text>
        <Text style={styles.subtitle}>
          O teu pin foi colocado no mapa. Os colegas próximos podem ver a tua sessão.
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>DESCRIÇÃO</Text>
          <Text style={styles.infoValue}>Calculus Prep</Text>
          <View style={styles.divider} />
          <Text style={styles.infoLabel}>PARTICIPANTES</Text>
          <Text style={styles.infoValue}>1 / 4</Text>
        </View>

        <TouchableOpacity
          testID="end-session-button"
          style={styles.btnDanger}
          onPress={() => router.replace('/(study)/create-session')}
          activeOpacity={0.85}
        >
          <Text style={styles.btnDangerText}>Terminar Sessão</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0a0f1e',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    gap: 16,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(32,138,239,0.15)',
    borderWidth: 1.5,
    borderColor: '#208AEF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  iconText: {
    fontSize: 36,
  },
  title: {
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    fontSize: 30,
    color: '#fff',
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.4)',
    textAlign: 'center',
    lineHeight: 22,
  },
  infoCard: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 20,
    gap: 6,
    marginTop: 8,
  },
  infoLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.35)',
    letterSpacing: 1.5,
  },
  infoValue: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  divider: {
    height: 0.5,
    backgroundColor: 'rgba(255,255,255,0.08)',
    marginVertical: 8,
  },
  btnDanger: {
    marginTop: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(226,75,74,0.4)',
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 32,
  },
  btnDangerText: {
    color: '#E24B4A',
    fontSize: 14,
    fontWeight: '500',
  },
});
