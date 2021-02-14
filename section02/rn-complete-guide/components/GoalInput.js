import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Text,
} from 'react-native';

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={props.onCancel}>
            <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAdd} onPress={addGoalHandler}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: '#CDCDCD',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '80%',
    height: 44,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonCancel: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 44,
    borderRadius: 10,
    margin: 5,
  },
  buttonAdd: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2CD1F5',
    height: 44,
    borderRadius: 10,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
