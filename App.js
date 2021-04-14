import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './components/styles.js';
import  ReviewInfo  from './components/review-info.js';

export default function App() {
  return (
    <View style={styles.container}>
      <ReviewInfo />
      <StatusBar style="auto" />
    </View>
  );
}
