import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>Notifications</Text>
                </TouchableOpacity>
            </View>
            
            <View style = {styles.icons}>
                <MaterialIcons name="card-giftcard" size={24} color="black" />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text> Get $5 Free </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.icons}>
                <MaterialIcons name="history" size={24} color="black" />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>Ride History</Text>
                </TouchableOpacity>
            </View>
        
            <View style = {styles.icons}>
                <MaterialIcons name="payment" size={24} color="black" />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>Payment</Text>
                </TouchableOpacity>
            </View>
            
            <View style = {styles.icons}>
                <MaterialIcons name="auto-awesome" size={24} color="black" /> 
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>Promos</Text>
                </TouchableOpacity>
            </View>
            
            <View style = {styles.icons}>
                <MaterialIcons name="school" size={24} color="black" />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>Onboarding</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.icons}>
                <MaterialIcons name="import-contacts" size={24} color="black" />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>Car Manual</Text>
                </TouchableOpacity>  
            </View>

            <View style = {styles.icons}>
                <MaterialIcons name="question-answer" size={24} color="black" />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>FAQs</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.icons}>
                <MaterialIcons name="settings" size={24} color="black" />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>Settings</Text>
                </TouchableOpacity> 
            </View>
            
        </View>
    );
}