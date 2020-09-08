import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const GoalItems = props => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 4,
    marginVertical: 10,
    backgroundColor: '#fcf',
  },
  text: {
    fontSize: 22
  }
})

export default GoalItems;