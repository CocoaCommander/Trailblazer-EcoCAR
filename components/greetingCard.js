import React, {useEffect, useState} from 'react';
import { View, TextInput,KeyboardAvoidingView, SafeAreaView} from 'react-native';
import { styles } from "./styles";
//import { StackNavigator } from 'react-navigation';
import BottomDrawer from 'rn-bottom-drawer'
import { useNavigation } from '@react-navigation/native';

export default function GreetingCard({ navigation }) {
    //const navigation = useNavigation();
    const [text, onChangeText] = React.useState("Where are you wanting to go?");


    return (
        <View >
            <BottomDrawer>
                <Text>"Happy Thursday, John"</Text>

                <View >

                    <KeyboardAvoidingView style={{flex:1}} behavior="padding">               \
                    <TextInput 
                        value={text}
                        onChangeText={onChangeText}
                        style={styles.textInput} 
                        placeholder="Where are you wanting to go?" 
                        buttonOnPress={() => navigation.navigate("SearchLocations")}
                    />
                </KeyboardAvoidingView>
            </View>
            </BottomDrawer>
        </View>
    );

}