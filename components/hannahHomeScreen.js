import React from 'react';
import { Text, View } from 'react-native';
import Hamburger from './hamburger.js';
import GreetingCard from './greetingCard.js';
import { styles } from './styles';


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
            <Text>Map goes here (placeholder)</Text>
            <View style={styles.greetingCard}>
                <GreetingCard navigation={navigation}/>
            </View>
            
            {/* <Hamburger style={styles.menuIcon} /> */}
        </View>
    );
}