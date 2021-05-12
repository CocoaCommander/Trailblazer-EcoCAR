import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import locationInput from './locationInput';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      height: '100%',
    },

    textInput: {
      padding: 10,
      backgroundColor: '#eee',
      marginVertical: 5,
    },

    findCarButton: {
      backgroundColor: #274690,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 10,
    },

    locationFinderButton: {
      backgroundColor: '#ffff',
      position: absolute,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 10,
      // boxShadow: 0px 4px 20px rgba(0,0,0,0.25),
    },

    backButton: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 10,
    }

  });

  export default styles;
