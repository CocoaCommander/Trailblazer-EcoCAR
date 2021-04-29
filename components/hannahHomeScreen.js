import React from 'react';
import { Image, View } from 'react-native';
import Hamburger from './hamburger.js';
import greetingCard from './greetingCard.js';
import { styles } from './styles';


export default function HomeScreen() {
    return (
        <View>
            {/* background Map image */}
             {/* <Image
                style = {styles.profile}
                source = {{uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' }}
            /> */}
            <Hamburger />
            <greetingCard />
            {/* <Hamburger style={styles.menuIcon} /> */}
        </View>
    );
}