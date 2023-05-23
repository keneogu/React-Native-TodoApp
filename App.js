import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1'},
    { text: 'create a crate', key: '2'},
    { text: 'study the good news', key: '3'},
  ])

  const pressHandler = (key) => {
    setTodos((prev) => {
      return prev.filter((item) => item.key !== key)
    })
  }

  const addTodo = (item) => {
    setTodos((prev) => {
      return [...prev, { text: item, key: Math.random().toString()}]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo addTodo={addTodo}/>
        <View style={styles.list}>
          <FlatList data={todos} renderItem={({item}) => (
            <TodoList item={item} pressHandler={pressHandler}/>
          )} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 8,
  }
});
