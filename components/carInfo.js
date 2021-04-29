import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { styles } from './styles'

function WhiteShelf() {
    let onPressBook = () => { return };
    return (
        <View style={styles.carInfoSecondary}>
            {/* specs */}
            <View>
                <Text>Specs</Text>
                <View>
                    <Text>Gas Mileage</Text>
                    <Text>20/47+ MPG</Text>
                </View>
                <View>
                    <Text>Seats</Text>
                    <Text>5 Adults</Text>
                </View>
                <View>
                    <Text>Bluetooth</Text>
                    <Text>Compatible</Text>
                </View>
                <View>
                    <Text>4G LTE Wi-Fi</Text>
                    <Text>Capable</Text>
                </View>
                <View>
                    <Text>Active Noise Cancellation</Text>
                    <Text>Capable</Text>
                </View>
            </View>
            {/* Location */}
            <View>
                <Text>Location</Text>
                {/* Some location icon component */}
                <View>
                    {/* Pin icon */}
                    <Text>3540 NE 110th Street Seattle, WA, 98125</Text>
                </View>
            </View>
            {/* Payment Method */}
            <View>
                <Text>Payment Method</Text>
                <View>
                    <Text>.... 3673</Text>
                    {/* Component to get CC icon */}
                </View>
            </View>
            {/* Dates */}
            <View>
                {/* Calendar Icon */}
                <Text>Jan 28-Feb 4</Text>
            </View>
            {/* Map View here */}
            <View>
                <View>
                    <Text>$40.00</Text>
                    <Text>Per day</Text>
                </View>
                <Pressable onPress={onPressBook}>
                    <Text>Book now</Text>
                </Pressable>
            </View>
        </View>
    )
}

function BlueShelf() {
    let onPressClose = () => { return };
    return (
        <View>
            <View >
                {/* year make model close button */}
                {/* replace for modularity later */}
                <Text>2019 Chevrolet Blazer</Text>
                {/* change to pressable */}
                <Pressable onPress={onPressClose}>
                    <Image source={require("./Assets/cancel-icon.png")}/>
                </Pressable>
            </View>
            <View >
                <View>
                    <Text>AJD 583</Text>
                </View>
                {/* Review Info component */}
                {/* pic of car */}
                <Image source={require("/Users/ryanlee/Desktop/EcoCAR/Trailblazer-EcoCAR/components/Assets/blazer-1.png")}/>
            </View>
            <WhiteShelf />
        </View>
    )
}



function CarInfo() {
    return (
        <View>
            {/* Map View here */}
            {/* Menu button here */}
            {/* Location button here */}
            <View style={styles.carInfoMain}>
                <BlueShelf />
                {/* <WhiteShelf /> */}
            </View>
        </View>
    );
}

export default CarInfo;
