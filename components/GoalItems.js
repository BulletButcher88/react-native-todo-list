import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const colorArrayRan = ['a', 'b', 'c', 'd', 'f']
const randomNum = () => {
  return Math.floor(Math.random() * 4)
}
const randomColor = () => {
  return `#${colorArrayRan[randomNum()]}c${colorArrayRan[randomNum()]}`
}

const GoalItems = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
      <View style={{
        backgroundColor: randomColor(), borderRadius: 10,
        padding: 4,
        marginVertical: 10,
      }}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
})

export default GoalItems;