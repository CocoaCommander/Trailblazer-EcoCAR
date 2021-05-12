import React from 'react';
import { Text, View } from 'react-native';
import locationInput from './locationInput.js';
import { styles } from './styles';
import { IoCloseOutline } from "react-icons/io5";

export default function searchLocationScreen() {
    return (
        <View>
            <locationInput />
            <Button>
                < IoCloseOutline onClick={hannahHomeScreen}
                    color="#333333" 
                    style={{minWidth:'1.29rem', marginLeft:2}}/>
             </Button>
             {/* figure out how we're going to go to the next screen - button, tapping on location, etc */}
        </View>
    );
}