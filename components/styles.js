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
    },

    destDateChild: {
      flex: 1,
      padding: 1,
      alignItems: 'center'
    },
    carInfoMain: {
      backgroundColor: '#274690',
      marginTop: 200,
      borderTopRightRadius: 35,
      borderTopLeftRadius: 35
    },
    carInfoSecondary: {
      backgroundColor: "white",
      borderTopRightRadius: 35,
      borderTopLeftRadius: 35
    },
    carInfoHeader: {
      flex: 1,
      flexDirection: "row"
    },
    testDark: {
      backgroundColor: "black"
    }
  });
