import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { router } from 'expo-router';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleLogin() {
    if (!isValidEmail(email)) {
      setEmailError('Email inválido');
      return;
    }

    setEmailError('');
    router.replace('/(auth)/success');
  }

  function handleEmailChange(text: string) {
    setEmail(text);
    if (emailError) {
      setEmailError(isValidEmail(text) ? '' : 'Email inválido');
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.inner}>
        <View style={styles.logoRow}>
          <View style={styles.logoIcon}>
            <Text style={styles.logoIconText}>◎</Text>
          </View>
          <Text style={styles.logoName}>Locus</Text>
          <Text style={styles.logoTagline}>O teu espaço</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Entrar</Text>

          <View style={styles.field}>
            <Text style={styles.label}>EMAIL</Text>
            <TextInput
              testID="email-input"
              style={[styles.input, emailError ? styles.inputError : null]}
              placeholder="o.teu@email.com"
              placeholderTextColor="#555"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={handleEmailChange}
            />
            {emailError ? (
              <Text testID="email-error" style={styles.errorText}>
                {emailError}
              </Text>
            ) : null}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>PALAVRA-PASSE</Text>
            <TextInput
              testID="password-input"
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#555"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity
            testID="login-button"
            style={styles.btnPrimary}
            onPress={handleLogin}
            activeOpacity={0.85}
          >
            <Text style={styles.btnPrimaryText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    paddingHorizontal: 24,
  },
  logoRow: {
    alignItems: 'center',
    marginBottom: 32,
    gap: 6,
  },
  logoIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#208AEF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  logoIconText: {
    fontSize: 28,
    color: '#fff',
  },
  logoName: {
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    fontSize: 32,
    color: '#fff',
    letterSpacing: -0.5,
  },
  logoTagline: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.35)',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 24,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 24,
    gap: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  field: {
    gap: 6,
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: 1.5,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.12)',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    color: '#fff',
    fontSize: 15,
  },
  inputError: {
    borderColor: '#E24B4A',
  },
  errorText: {
    fontSize: 12,
    color: '#E24B4A',
    marginTop: 2,
  },
  btnPrimary: {
    backgroundColor: '#208AEF',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  btnPrimaryText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
