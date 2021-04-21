import React from 'react';
import { Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { styles } from './styles';

export default function Menu() {
    return (
        <View>
            <Image
                style = {styles.profile}
                source = {{uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' }}
            />
            <Text>Name</Text>

            <View style = {styles.icons}>
                <MaterialIcons name="notifications" size={24} color="black" />
                <Text>Notifications</Text>
            </View>
            
            <View style = {styles.icons}>
                <MaterialIcons name="card-giftcard" size={24} color="black" />
                <Text>Get $5 free</Text>
            </View>

            <View style = {styles.icons}>
                <MaterialIcons name="history" size={24} color="black" />
                <Text>Ride history</Text>
            </View>
        
            <View style = {styles.icons}>
                <MaterialIcons name="payment" size={24} color="black" />
                <Text>Payment</Text>
            </View>
            
            <View style = {styles.icons}>
                <MaterialIcons name="auto-awesome" size={24} color="black" /> 
                <Text>Promos</Text>
            </View>
            
            <View style = {styles.icons}>
                <MaterialIcons name="school" size={24} color="black" />
                <Text>Onboarding</Text> 
            </View>

            <View style = {styles.icons}>
                <MaterialIcons name="import-contacts" size={24} color="black" />
                <Text>Car Manual</Text>    
            </View>

            <View style = {styles.icons}>
                <MaterialIcons name="question-answer" size={24} color="black" />
                <Text>FAQs</Text>   
            </View>

            <View style = {styles.icons}>
                <MaterialIcons name="settings" size={24} color="black" />
                <Text>Settings</Text> 
            </View>
            
        </View>
    );
}