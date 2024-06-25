import { Text, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText type="title">Explore</ThemedText>
    </View>
  );
}