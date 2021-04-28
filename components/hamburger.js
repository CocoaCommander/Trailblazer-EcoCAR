import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { styles } from './styles';

export default function Hamburger() {
    return (
        <View>
            <TouchableOpacity
                    style={styles.button}
                >
                    <MaterialIcons name="menu" size={36} color="black" />
                </TouchableOpacity>
        </View>
    );
}