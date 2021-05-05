import React from 'react';
import { Pressable, View, Text } from 'react-native';
import LocationInput from './locationInput.js';
import { styles } from './styles';
import { Calendar } from './calendar'

export default function SearchLocationScreen({ navigation }) {
    return (
        <View style={styles.container2}>
            <LocationInput />
            {/* cancel button*/}
            <Calendar />
            <Pressable style={styles.container} onPress={() => navigation.navigate("Results")}>
                <Text style={styles.locationFinder}>Temp Link</Text>
            </Pressable>
        </View>
    );
}