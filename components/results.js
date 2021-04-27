
import React from 'react';
import { Text, View, Button, Image, Images } from 'react-native';
import DestinationDate from "./destinationDate"
import carReviews from "./carReviews"

export default function myComponent() {
    return (
        <View>
            <DestinationDate/>
            <carReviews/>
            <carReviews/>
            <carReviews/>
            <carReviews/>
            <carReviews/>
            <carReviews/>
        </View>
    );
}