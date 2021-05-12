import React from 'react';
import { Text, View } from 'react-native';
import locationInput from './locationInput.js';
import calendar from './calednar.js';
import { styles } from './styles';
import { IoCloseOutline } from "react-icons/io5";

export default function searchLocationScreen() {
    return (
        <View>
            <locationInput />
            <calendar />
            <Button>
                < IoCloseOutline onClick={hannahHomeScreen}
                    color="#333333" 
                    style={{minWidth:'1.29rem', marginLeft:2}}/>
             </Button>
        </View>
    );
}