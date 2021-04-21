import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './components/styles.js';
import CarInfo from './components/carInfo';

export default function App() {
  return (
    <View >
      <CarInfo />
      <StatusBar style="auto" />
    </View>
  );
}
