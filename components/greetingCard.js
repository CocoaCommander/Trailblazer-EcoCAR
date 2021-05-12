import React, {useEffect, useState} from 'react';
import { View, TextInput, SafeAreaView} from 'react-native';
import { styles } from "./styles";
//import { StackNavigator } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

export default function GreetingCard({ navigation }) {
    //const navigation = useNavigation();
    const [text, onChangeText] = React.useState("Where are you wanting to go?");


    return (
        <View >
            <Text>"Happy Thursday, John"</Text>
            <View >
                
                <TextInput 
                    value={text}
                    onChangeText={onChangeText}
                    style={styles.textInput} 
                    placeholder="Where are you wanting to go?" 
                    buttonOnPress={() => navigation.navigate("SearchLocations")}
                />

                </View>
        </View>
    );

}