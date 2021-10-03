import React, { useState } from 'react';
import { StyleSheet, Alert, Text, View, TextInput, Button, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import SandBox from './components/sandBox';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [todos, setTodos] = useState([
    { text: "Welcome to my new App!", key: '1'}
  ]);

  
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OUPS!', 'A todo must be over 3 chars long.', [
        { text: 'Understood' }
      ])
    }
  }
  return (
    // <SandBox/>
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}> 
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    backgroundColor: '#ddd',
    padding: 40,
    flex: 1,

  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
