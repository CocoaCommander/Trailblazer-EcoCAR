import React from 'react';
import { View, TextInput, SafeAreaView} from 'react-native';
import { styles } from './styles.js';

export default function locationInput() {
    const locationInput = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput 
                    value={fromText}
                    onTextChange={setFromText}
                    style={styles.textInput} 
                    placeholder="From" 
                />
                { <TextInput 
                    value={destinationText}
                    onTextChange={setDestinationText}
                    style={styles.textInput} 
                    placeholder="Where to?" 
                />
            }</View>
        </SafeAreaView>
    );
    }
}