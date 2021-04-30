import React from 'react';
import { Text, View, Button, Image, Pressable } from 'react-native';
import { styles } from './styles'

export default function CarReviews(props) {
    return (
        <Pressable style={styles.reviewContainer} onPress={() => props.navigation.navigate("CarDetail")}>
                <Image source={require('./Assets/blazer-1.png')}/>
                <View>
                    <Text>2019 Chevrolet Blazer 
                        {/* replace for modularity later */} 
                    </Text>

                    {/*Chevrolet*/}
                    <Image/>
                    {/*5 star rating*/}
                    <Text>
                        {/* Car info*/}
                        TEST TEST
                    </Text>
                </View>
        </Pressable>
        
    )
}

