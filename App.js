import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './components/styles.js';
import greetingCard from "./components/greetingCard"

export default function App() {
  return (
    <View style={styles.container}>
      <greetingCard></greetingCard>
      <StatusBar style="auto" />
    </View>
  );
}