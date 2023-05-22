import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  Alert
} from 'react-native';

import styles from './AddToDo.styles';
import Seperator from '../Seperator';

const AddToDo = ({ toDoList, setToDoList }) => {
  const [addToDo, setAddToDo] = useState('');

  const handleSave = () => {
    if (addToDo === '') {
      return Alert.alert('Dikkat', 'Yapılacak iş boş olamaz!');
    } else {
      const titleExists = toDoList.some(item => item.title === addToDo);
      if (titleExists) {
        setAddToDo('');
        Keyboard.dismiss();
        return Alert.alert('Dikkat', 'Eklemek istediğiniz iş zaten listede var!');
      } else {
        const newToDo = { title: addToDo, isDone: false };
        setToDoList(prevToDoList => [...prevToDoList, newToDo]);
        setAddToDo('');
        Keyboard.dismiss();
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Yapılacak iş ekleyin..."
          placeholderTextColor="#808080"
          selectionColor="#FFA500"
          onChangeText={setAddToDo}
          value={addToDo}
        />
      </View>
      <Seperator />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, addToDo.length !== 0 && styles.active]}
          onPress={handleSave}
        >
          <Text style={styles.buttonText}>Ekle</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddToDo;