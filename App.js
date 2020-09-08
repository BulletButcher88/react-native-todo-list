import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Push the button');

  return (
    <View style={{ padding: 40 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextInput style={{ height: 45, width: "80%", fontSize: 20, borderBottomColor: "black", borderBottomWidth: 1, marginBottom: 20, textAlign: "center" }}
          placeholder="Course Goal" />
        <Button title="ADD" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
