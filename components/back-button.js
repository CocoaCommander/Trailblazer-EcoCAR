import React from 'react';
import { Text, View } from 'react-native';
import { IoArrowBack } from "react-icons/io5";

export default function back() {
    return (
        <View style={styles.backButton}>
            <Button>
                < IoArrowBack 
                    color="#333333" 
                    style={{minWidth:'1.8rem', marginLeft:2}}/>
             </Button>
        </View>
    );
}