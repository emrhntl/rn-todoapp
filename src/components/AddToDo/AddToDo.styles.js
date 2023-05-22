import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      height: 100,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 25,
      backgroundColor: '#37474F',
      borderRadius: 10,
    },
    inputContainer: {
      flex: 2,
    },
    buttonContainer: {
      flex: 3,
      justifyContent: 'center',
    },
    input: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      paddingLeft: 25,
      color: '#FFA500',
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#808080',
      flex: 1,
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
    },
    active: {
      backgroundColor: '#FFA500'
    }
  })

