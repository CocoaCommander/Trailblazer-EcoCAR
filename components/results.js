
import React from 'react';
import { View, ScrollView } from 'react-native';
import DestinationDate from "./destinationDate"
import CarReviews from "./CarReviews"
import { styles } from './styles'

export default function Results(props) {
    return (
        <View style={styles.container}>
            <View>
                <DestinationDate />
            </View>
            {/* replace w FLatList once we get API calls good to go */}
            <ScrollView>
                <CarReviews navigation={props.navigation}/>
                <CarReviews navigation={props.navigation}/>
                <CarReviews navigation={props.navigation}/>
                <CarReviews navigation={props.navigation}/>
                <CarReviews navigation={props.navigation}/>
                <CarReviews navigation={props.navigation}/>
                <CarReviews navigation={props.navigation}/>
                <CarReviews navigation={props.navigation}/>
                <CarReviews navigation={props.navigation}/>
                <CarReviews navigation={props.navigation}/>
                <CarReviews navigation={props.navigation}/>
                <CarReviews navigation={props.navigation}/>
            </ScrollView>
            
        </View>
    );
}