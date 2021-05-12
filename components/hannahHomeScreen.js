import React from 'react';
import { Text, View, Keyboard } from 'react-native';
import Hamburger from './hamburger.js';
import GreetingCard from './greetingCard.js';
import { styles } from './styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function HomeScreen({ navigation }) {
    return (
        
        <View style={styles.container}>
            {/* background Map image */}
            {/* <Image
                style = {styles.profile}
                source = {{uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' }}
            /> */}
                <View style={styles.hamburger}>
                    <Hamburger />  
                </View>
                <Pressable onPress={() => navigation.navigate("SearchLocations")}>
                    <Text>Map goes here (placeholder)</Text>
                </Pressable>
                <View style={styles.greetingCard}>
                    <GreetingCard navigation={navigation} />
                </View>
            {/* <Hamburger style={styles.menuIcon} /> */}
        </View>

    );
}