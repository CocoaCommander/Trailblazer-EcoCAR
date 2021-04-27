  
import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles'

export default function DestinationDate() {
    return (
        <View style={styles.destDate}>
            <Pressable style={styles.destDateChild}>
                <Image source={require("./Assets/next_icon.png")}/>
            </Pressable>
            <Text style={styles.destDateChild}>Timberline Lodge</Text>
            <Text style={styles.destDateChild}>Jan 28 - Feb 4</Text>
        </View>
    );
}