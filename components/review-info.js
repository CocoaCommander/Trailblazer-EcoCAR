import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

export default function ReviewInfo() {
    return (
        <View>
            <View style={styles.ratings}>
                <Text style={styles.avgRating}>5.0 </Text>
                <Stars />
            </View>
            
        </View>
    );
}

function Stars() {
    return (
        <View style={styles.stars}>
            <SingleStar />
        <View style={styles.stars}>
            <SingleStar />
        <View style={styles.stars}>
            <SingleStar />
        <View style={styles.stars}>
            <SingleStar />
        <View style={styles.stars}>
            <SingleStar />
        </View>
        </View>
        </View>
        </View>
        </View>
        
    )
}

function SingleStar() {
    return (
        <View>
        <   Ionicons name="star" size={32} color='#7BD68F'/>
        </View>
    )
}