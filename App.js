import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { styles } from './components/styles.js';
import HomeScreen from './components/hannahHomeScreen.js';
import  ReviewInfo  from './components/review-info.js';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
<NavigationContainer>
  <HomeScreen/>
</NavigationContainer>
  );
}
