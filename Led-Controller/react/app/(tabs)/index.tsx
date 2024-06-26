import { Text, View } from 'react-native';


import {
  StyleSheet,
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';

import { ThemedText } from '@/components/ThemedText';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText type="title">Explore</ThemedText>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
  );
}