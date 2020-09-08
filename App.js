import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, FlatList } from 'react-native';
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput'
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalText => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalText }
    ]);
  };

  return (
    <View style={{ padding: 40 }}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => <GoalItems title={itemData.item.value} />}
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
  }
});
