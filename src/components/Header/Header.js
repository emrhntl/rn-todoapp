import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './Header.styles';

function Header({ toDoList }) {

  const count = toDoList.filter(item => {
    if (item.isDone === false) return item;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.count}>{count.length}</Text>
    </View>
  );
}

export default Header;
