import React from 'react';
import HomeScreen from './components/hannahHomeScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchLocationScreen from './components/searchLocationScreen.js';
import Results from './components/results'
import CarDetail from './components/CarDetail'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      {/* screenOptions={{headerShown: false}} goes after "Home"*/}
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SearchLocations" component={SearchLocationScreen} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="CarDetail" component={CarDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
