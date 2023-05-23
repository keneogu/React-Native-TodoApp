import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState("Shaun");
  const [person, setPerson] = useState({name: 'mario', age: 40});
  const changeName = () => {
    setName('chun-li')
    setPerson({name: 'kene', age: 29})
  }
  return ( 
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World</Text>
      </View>
      <View style={styles.body}>
        <Text>My name is {name}</Text>
        <Text>New name is {person.name}</Text>
        <Text>I am {person.age} year old</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="update NAme" onPress={changeName} />
      </View>
      <StatusBar style="auto" />
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
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  }
});
