import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { styles } from './styles'
import ReviewInfo from './review-info';

function CarInfo() {
    return (
        <View style={styles.carInfoMain}>
            <View style={styles.carInfoMainHeader}>

                {/* Header */}
                <Text style={styles.carInfoMainHeaderText}>2019 Chevrolet Blazer</Text>
                <Pressable>
                    <Image source={require('./Assets/cancel-icon.png')}/>
                </Pressable>
            </View>

            {/* SubHeader */}
            <View style={styles.carInfoMainHeader}>
                <Text>AJD 583</Text>
                <ReviewInfo />
                <Image source={require('./Assets/blazer-1.png')}/>
            </View>

        </View>
    );
}

export default CarInfo;
