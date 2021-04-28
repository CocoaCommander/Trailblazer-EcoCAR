import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Hamburger from './components/hamburger.js'
import { styles } from './components/styles';
import {Calendar} from './components/calendar';
import DestinationDate from './components/destDate';
export default function App() {
  return (
    <View style={styles.container}>
      <Hamburger />
      <DestinationDate />
      <StatusBar style="auto" />
    </View>
  );
}
