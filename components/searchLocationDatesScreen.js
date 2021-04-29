import React from 'react';
import { Text, View } from 'react-native';
import locationInput from './locationInput.js';
import calendar from './calednar.js';
import { styles } from './styles';

export default function searchLocationScreen() {
    return (
        <View>
            <locationInput />
            <calendar />
            {/* cancel button*/}
        </View>
    );
}