import { StyleSheet } from 'react-native';
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

    destDate: {
      flex: 0.05,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width: 300,
      borderRadius: 10,
      shadowColor: '#000000',
      shadowOffset: {
        height: 0,
        width: 0
      },
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
    },

    destDateChild: {
      flex: 1,
      padding: 1,
      alignItems: 'center'
    }
        textInput: {
      padding: 10,
      backgroundColor: '#eee',
      marginVertical: 5,

    }
  });

  export default styles;
