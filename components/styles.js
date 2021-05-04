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

    locationFinder: {
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 10,
    },

    backButton: {
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 10,
    }

  });

  export default styles;
