import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput'
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalState, setModalState] = useState(false);

  const addGoalHandler = goalText => {
    if (goalText.length === 0) {
      return;
    }
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalText }
    ]);
    setModalState(false)
  };

  const removeGoal = id => {
    setCourseGoals(currentGoal => {
      return currentGoal.filter((goal) => goal.id !== id)
    })
  }

  const cancelModalHandler = () => {
    setModalState(false)
  }

  return (
    <View style={{ padding: 40 }}>
      <Button title="+" onPress={() => setModalState(true)} />
      <GoalInput modalVisible={modalState} onAddGoal={addGoalHandler} onCancel={cancelModalHandler} />
      <FlatList
        data={courseGoals}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <GoalItems id={itemData.item.id} onDelete={removeGoal} title={itemData.item.value} />
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
  }
});
