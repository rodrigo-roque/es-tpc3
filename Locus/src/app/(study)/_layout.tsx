import { Stack } from 'expo-router';

export default function StudyLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="create-session" />
      <Stack.Screen name="session-dashboard" />
    </Stack>
  );
}
