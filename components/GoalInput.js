import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = text => {
    setEnteredGoal(text)
  }

  return (
    <View style={styles.inputContainerStye}>
      <TextInput style={styles.inputStyle}
        placeholder="Course Goal"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainerStye: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  }
})

export default GoalInput;