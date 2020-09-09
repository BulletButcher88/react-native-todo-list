import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const GoalItems = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 10,
    padding: 4,
    marginVertical: 10,
    backgroundColor: '#fcf',
  },
  text: {
    fontSize: 22
  }
})

export default GoalItems;