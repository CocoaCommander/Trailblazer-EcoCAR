import React from 'react';
import { Text, View } from 'react-native';
import BottomSearchBar from 'react-native-bottom-search-bar'
import { styles } from "./styles"
//import { StackNavigator } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

export default function GreetingCard({ navigation }) {
    //const navigation = useNavigation();
    return (
        <View >
            <Text>"Happy Thursday, John"</Text>
            <BottomSearchBar
                openedHeight={800}
                placeHolderText="Where are you wanting to go?"
                cancelText="Close"
                buttonText="Go"
                buttonOnPress={() => navigation.navigate("SearchLocations")}
            />
        </View>
    );

}