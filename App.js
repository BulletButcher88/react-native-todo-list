import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = text => {
    setEnteredGoal(text)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={{ padding: 40 }}>
      <View style={styles.inputContainerStye}>
        <TextInput style={styles.inputStyle}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        data={courseGoals}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text style={styles.text}>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  },
  listItem: {
    padding: 4,
    marginVertical: 10,
    backgroundColor: '#fcf',
  },
  text: {
    fontSize: 22
  }
});
