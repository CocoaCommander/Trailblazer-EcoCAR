import React from 'react';
import { Text, View, Button, Image } from 'react-native';

function BlueShelf() {
    return (
        <View> {/* Blue shelf */}
            <View> {/* year make model close button */}
                <Text>2019 Chevrolet Blazer {/* replace for modularity later */} </Text>
                <Button />
            </View>
            <View>
                <View> {/* license plate box */}
                    <Text>AJD 583</Text>
                </View>
                {/* Review Info component */}
                <Image /> {/* pic of car */}
            </View>
        </View>
    )
}

function WhiteShelf() {
    <View> {/* white shelf */}

    </View>
}

export default function CarInfo() {
    return (
        <View>
            {/* Map View here */}
            {/* Menu button here */}
            {/* Location button here */}
            <View> {/* Main Info View */}
                <BlueShelf />
                <WhiteShelf />
            </View>
        </View>
    );
}