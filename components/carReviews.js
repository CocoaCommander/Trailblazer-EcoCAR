import React from 'react';
import { Text, View, Button, Image, Images } from 'react-native';

function carReviews() {
    return (
        <View> {/*Details*/}
            <View> 
                <Image />{/*image of car*/}
                <Text>2019 Chevrolet Blazer {/* replace for modularity later */} </Text>
                <Button />{/*Chevrolet*/}
                <Images/>{/*5 star rating*/}
                <Text>{/* Car info*/}</Text>
            </View>
        </View>
    )
}

