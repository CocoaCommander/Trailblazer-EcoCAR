import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './components/styles';
import {Calendar} from './components/calendar';
import DestinationDate from './components/destDate';
import carReviews from "./components/carReviews"
import greetingCard from "./components/greetingCard"


export default function App() {
  return (
    <View style={styles.container}>
      <DestinationDate />
      <StatusBar style="auto" />
    </View>
  );
}