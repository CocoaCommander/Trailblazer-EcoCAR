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

    button: {
        backgroundColor: "white",
        width: 45,
        height: 45,
        borderRadius: 200 / 2,
        borderWidth: 1,
        borderColor: "gray",
        alignItems: 'center',
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
    },
    textInput: {
      padding: 10,
      backgroundColor: '#eee',
      marginVertical: 5
    },

    
    header: {
      // flexDirection: 'row',
      // alignItems: 'stretch',
      height: 62,
      width: 414,
      left: 0,
      top: -50,
      backgroundColor: '#274690',
    },

    headerText: {
      alignSelf: 'center',
      textAlign: 'center',
      position: 'absolute',
      width: 375,
      top: 15,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 26,
      lineHeight: 35,
      color: '#FFFFFF',
    },

    progress: {
      // alignItems: 'stretch',
      width: 41.4,
      height: 8,
      left: 0,
      top: -50,
      backgroundColor: 'rgba(39, 70, 144, 0.5)',
    },

    // border: {
    //   width: 346,
    //   height: 561,
    //   left: 15,
    //   top: -50,
    //   borderRadius: 10,
    //   shadowOffset: { 
    //     width: 10,
    //     height: 10
    //   },
    //   shadowColor: 'black',
    //   shadowOpacity: 1.0,
    // },

    card: {
      // marginTop: 30,
      // marginBottom: 200,
      width: "95%",
      height: 550,
      // left: 17,
      alignSelf: 'center',
      top: -30,
      // left: 15,
      // top: -50,
      // flexDirection: 'row',

      // alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowOffset: {
        width: 2,
        height: 4,
      },
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOpacity: 0.3,
      borderColor: 'rgba(0, 0, 0, 0.25)',
      borderWidth: 1,

    },

    title: {
      alignSelf: 'center',
      textAlign: 'center',
      width: 344,
      height: 30,
      top: 20,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 22,
      color: '#21252B',
    },

    para: {
      top: 50,
      fontSize: 18,
      lineHeight: 25,
      alignSelf: 'center',
      color: '#21252B',
    },

    next: {
      alignSelf: 'center',
      width: "95%",
      height: 50,
      // marginTop: 5,
      top: 10,
      borderRadius: 10,
      backgroundColor: '#274690',
    },

    volumeIcon: {
      position: 'absolute',
      marginLeft: 15,
      marginTop: 15,
    },

    stars: {
      flexDirection: 'row',
    },

    ratings: {
      flexDirection: 'row',
      fontSize: 26,
    },

    avgRatings: {
      flexDirection: 'row',
      top: -30,
    }
  });

  export default styles;
