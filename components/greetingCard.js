import React from 'react';
import { Text, View } from 'react-native';
import BottomSearchBar from 'bottomsearchbar'

export default function myComponent() {
    return (
        <View>
            <Text>Happy Thursday, John</Text>
            <BottomSearchBar
                openedHeight={800}
                placeHolderText="Where are you wanting to go?"
                cancelText="Close"

            />
        </View>
    );
}