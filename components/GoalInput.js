import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = text => {
    setEnteredGoal(text)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal('')
  }


  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View style={styles.inputContainerStye}>
        <TextInput style={styles.inputStyle}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.buttons}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal >
  )
}

const styles = StyleSheet.create({
  inputContainerStye: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: {
    height: 45,
    width: "80%",
    fontSize: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 20,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: "80%"
  },
  buttons: {
    width: '30%'
  }
})

export default GoalInput;