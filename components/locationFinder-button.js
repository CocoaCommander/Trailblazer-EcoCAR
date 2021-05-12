import React from 'react';
import { Text, View } from 'react-native';
import { IoNavigateOutline } from "react-icons/io5";

export default function locationFinder() {
    return (
        <View style={styles.locationFinderButton}>
             <Button>
                < IoNavigateOutline 
                    color="#333333"
                    style={{minWidth:'1.29rem', marginLeft:1}}/>
             </Button>
        </View>
    );
}