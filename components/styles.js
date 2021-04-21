import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    profile: {
      alignSelf: 'center',
      width: 100,
      height: 100,
    },

    name: {
      textAlign: 'center',
      fontSize: 50,
    },

    icons: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center"
    },

    button: {
        backgroundColor: "white",
        padding: 5,
        alignItems: 'center'
    }

  });
