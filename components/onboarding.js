import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function Onboarding() {
    return (
        <View> 
            <View>
                <Header />
                <ProgressBar />
                <OnboardingCard />
                <Next />
            </View>
        </View>
    );
}

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>
                Adaptive Cruise Control</Text>
        </View>
    )
}

function ProgressBar() {
    return (
        <View style={styles.progress}>
        </View>
    )
}

function OnboardingCard() {
    return (
        <View style={styles.card}>
            <View style={styles.border}></View>
            <View style={styles.volumeIcon}>
                <Ionicons name="volume-high" size={32} color='black'/>
            </View>
            <Text style={styles.title}>What's ACC?</Text>
            <Text style={styles.para}>The EcoCAR will
            default to Adaptive Cruise Control...
            </Text>
        </View>
    ) 
}

function Next() {
    return (
        <View style={styles.next}>
        <Button 
            titleStyle={{
                color: 'white',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 18,
            }}
            title = "Next"
            onPress = {() => Alert.alert('Simple Button pressed')}
            color='#FFFFFF'
        />
        </View>
    )
}