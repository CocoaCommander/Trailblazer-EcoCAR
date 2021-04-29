import React, {useEffect, useState} from 'react';
import { View, TextInput, SafeAreaView} from 'react-native';
import { styles } from './styles.js';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function locationInput() {
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput 
                    value={fromText}
                    onTextChange={setFromText}
                    style={styles.textInput} 
                    placeholder="From" 
                />
                <TextInput 
                    value={destinationText}
                    onTextChange={setDestinationText}
                    style={styles.textInput} 
                    placeholder="Where to?" 
                />

                {/* <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    onPress={(data: GooglePlaceData, details : GooglePlaceDetail | null) => {
                        setOriginPlace(value: {data, details})
                    }}
                    styles={{
                        textInput: styles.textInput,
                    }}
                    fetchDetails
                    query={{
                        key: 'YOUR API KEY', //figure out google dev - Google Places API not showing up
                        language: 'en',
                    }}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data: GooglePlaceData, details : GooglePlaceDetail | null) => {
                        setDestinationPlace(value: {data, details})
                    }}
                    styles={{
                        textInput: styles.textInput,
                    }}
                    fetchDetails
                    query={{
                        key: 'YOUR API KEY', //figure out google dev - Google Places API not showing up
                        language: 'en',
                    }}
                /> */}
            </View>
        </SafeAreaView>
    }
//}

/* uber clone: https://www.youtube.com/watch?v=sIRcN0MeZVU&ab_channel=VadimSavin
    google places autocomplete: https://www.npmjs.com/package/react-native-google-places-autocomplete */
