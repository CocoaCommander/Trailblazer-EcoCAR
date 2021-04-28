import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import carReviews from "./components/carReviews"
import greetingCard from "./components/greetingCard"
import results from "./results.js"
import Hamburger from './components/hamburger.js'
import {Calendar} from './components/calendar';
import DestinationDate from './components/destDate';
import { styles } from './components/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <greetingCard/>
      <Hamburger />
      <DestinationDate />
      <StatusBar style="auto" />
    </View>
  );
}