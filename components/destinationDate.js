  
import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles'

export default function DestinationDate() {
    return (
        <View style={styles.destDate}>
            {/* <Image source={require("./Assets/next_icon.png")}/> */}
            <View style={styles.destDateChild} >
                <Text>Timberline Lodge</Text>
            </View>
            <View style={styles.destDateChild} >
                <Text>Jan 28 - Feb 4</Text>
            </View>
        </View>
    );
}