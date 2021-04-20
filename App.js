import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './components/styles.js';
import carReviews from "./components/carReviews"

export default function App() {
  return (
    <View style={styles.container}>
      <carReviews></carReviews>
      <StatusBar style="auto" />
    </View>
  );
}
