import React from 'react';
import { Text, View } from 'react-native';
import CarInfo from './carInfo'
import { styles } from './styles'

export default function CarDetails() {
    return (
        <View style={styles.carDetails}>
            {/* Map View here */}
            {/* Menu button here */}
            {/* Location button here */}
            <CarInfo />
        </View>
    );
}