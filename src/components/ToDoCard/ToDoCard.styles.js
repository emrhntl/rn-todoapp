import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 20,
    backgroundColor: '#7DA453',
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    borderRadius: 5,
  },
  containerDone: {
    height: Dimensions.get('window').height / 20,
    backgroundColor: '#34444C',
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 18,
  },
  textDone: {
    color: '#808080',
    paddingLeft: 10,
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
});

export {styles};
