import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './components/styles.js';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>locationInput</Text>
      <StatusBar style="auto" />
    </View>
  );
}
