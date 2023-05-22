import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import { styles } from './ToDoCard.styles';

const ToDoCard = ({ work, toDoList, setToDoList }) => {
  const handlePress = () => {
    const updatedList = toDoList.map(item => {
      if (item.title === work.title) {
        return {
          ...item,
          isDone: !item.isDone
        };
      }
      return item;
    });
    setToDoList(updatedList);
  };

  const handleDelete = () => {
    Alert.alert('Dikkat!', `"${work.title}" silinecek.Emin misiniz?`, [
      { text: 'Evet', onPress: () => deleteItem(work) },
      { text: 'Hayır' },
    ]);
  };

  const deleteItem = work => {
    const updatedList = toDoList.filter(item => item.title !== work.title);
    setToDoList(updatedList);
  };

  return (
    <View style={work.isDone ? styles.containerDone : styles.container}>
      <TouchableOpacity onPress={handlePress} onLongPress={handleDelete}>
        <Text style={work.isDone ? styles.textDone : styles.text}>
          {work.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoCard;