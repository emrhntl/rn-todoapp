import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    margin:10
  },
  title: {
    color: '#FFA500',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 10,
    textAlign: 'left',
  },
  count: {
    color: '#FFA500',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'right',
    marginRight: 10,
  },
});

export {styles};
