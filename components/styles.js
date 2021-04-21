import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
    }
  });
