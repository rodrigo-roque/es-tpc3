import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Platform, Modal,
} from 'react-native';
import { router } from 'expo-router';

const SIMULATE_GPS_DISABLED = true;

export default function CreateSessionScreen() {
  const [description, setDescription] = useState('');
  const [limit, setLimit] = useState('');
  const [gpsError, setGpsError] = useState(false);

  function handleStart() {
    if (SIMULATE_GPS_DISABLED) {
      setGpsError(true);
      return;
    }
    router.replace('/(study)/session-dashboard');
  }

  return (
    <View style={styles.root}>
      <View style={styles.inner}>
        <View style={styles.logoRow}>
          <View style={styles.logoIcon}><Text style={styles.logoIconText}>◎</Text></View>
          <Text style={styles.logoName}>Locus</Text>
          <Text style={styles.logoTagline}>O teu espaço</Text>
        </View>
        <View style={styles.card}>
          <Text testID="create-session-title" style={styles.cardTitle}>Nova Sessão</Text>
          <View style={styles.field}>
            <Text style={styles.label}>DESCRIÇÃO</Text>
            <TextInput testID="description-input" style={styles.input} placeholder="ex: Calculus Prep" placeholderTextColor="#555" value={description} onChangeText={setDescription} />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>LIMITE DE PARTICIPANTES</Text>
            <TextInput testID="limit-input" style={styles.input} placeholder="ex: 4" placeholderTextColor="#555" keyboardType="number-pad" value={limit} onChangeText={setLimit} />
          </View>
          <TouchableOpacity testID="start-button" style={styles.btnPrimary} onPress={handleStart} activeOpacity={0.85}>
            <Text style={styles.btnPrimaryText}>Iniciar Sessão</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal transparent visible={gpsError} animationType="fade" onRequestClose={() => setGpsError(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalIconCircle}><Text style={styles.modalIcon}>⚠</Text></View>
            <Text testID="gps-error-title" style={styles.modalTitle}>Localização necessária</Text>
            <Text testID="gps-error-message" style={styles.modalMessage}>Location required to drop a pin. Please enable GPS.</Text>
            <TouchableOpacity testID="gps-error-dismiss" style={styles.modalBtn} onPress={() => setGpsError(false)} activeOpacity={0.85}>
              <Text style={styles.modalBtnText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0a0f1e' },
  inner: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 },
  logoRow: { alignItems: 'center', marginBottom: 32, gap: 6 },
  logoIcon: { width: 56, height: 56, borderRadius: 16, backgroundColor: '#208AEF', alignItems: 'center', justifyContent: 'center', marginBottom: 4 },
  logoIconText: { fontSize: 28, color: '#fff' },
  logoName: { fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif', fontSize: 32, color: '#fff', letterSpacing: -0.5 },
  logoTagline: { fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: 2, textTransform: 'uppercase' },
  card: { width: '100%', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 24, borderWidth: 0.5, borderColor: 'rgba(255,255,255,0.1)', padding: 24, gap: 16 },
  cardTitle: { fontSize: 20, fontWeight: '600', color: '#fff', marginBottom: 4 },
  field: { gap: 6 },
  label: { fontSize: 10, fontWeight: '600', color: 'rgba(255,255,255,0.4)', letterSpacing: 1.5 },
  input: { backgroundColor: 'rgba(255,255,255,0.05)', borderWidth: 0.5, borderColor: 'rgba(255,255,255,0.12)', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 13, color: '#fff', fontSize: 15 },
  btnPrimary: { backgroundColor: '#208AEF', borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 4 },
  btnPrimaryText: { color: '#fff', fontSize: 15, fontWeight: '600', letterSpacing: 0.3 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  modalCard: { width: '100%', backgroundColor: '#111827', borderRadius: 24, borderWidth: 0.5, borderColor: 'rgba(255,255,255,0.1)', padding: 28, alignItems: 'center', gap: 12 },
  modalIconCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(239,158,39,0.15)', borderWidth: 1.5, borderColor: '#EF9F27', alignItems: 'center', justifyContent: 'center', marginBottom: 4 },
  modalIcon: { fontSize: 28, color: '#EF9F27' },
  modalTitle: { fontSize: 18, fontWeight: '600', color: '#fff', textAlign: 'center' },
  modalMessage: { fontSize: 14, color: 'rgba(255,255,255,0.5)', textAlign: 'center', lineHeight: 22 },
  modalBtn: { marginTop: 8, backgroundColor: '#208AEF', borderRadius: 12, paddingVertical: 12, paddingHorizontal: 40 },
  modalBtnText: { color: '#fff', fontSize: 15, fontWeight: '600' },
});
