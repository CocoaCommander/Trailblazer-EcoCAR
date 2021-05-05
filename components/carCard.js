import React from 'react';
import { Text, View, Button, Image, Images } from 'react-native';

function oneCard() {
    return (
        <View> {/*Details*/}
            <View>
                <Image />{/*image of car*/}
                <Text>2019 Chevrolet Blazer {/* replace for modularity later */} </Text>
                <Images/>{/*5 star rating*/}
                <Text>{/* Distance*/}</Text>
                <Text>{/* Car info*/}</Text>
                <Button />{/*Chevrolet*/}
            </View>
        </View>
    )
}


export default function carCard() {
    return (
        <View>
            {/* Search box here */}
            <View> {/* Main Info View */}
                <oneCard />
            </View>
        </View>
    );
}