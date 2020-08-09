import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { GlobalProvider } from './context/GlobalState'
import { SafeAreaView, View, FlatList } from 'react-native'
import tailwind from 'tailwind-rn'
import Header from './components/header'

import TodoList from './components/todoList'
import AddTodo from './components/addTodo'
import { uuidv4 } from './utils/uuid'

export default function App() {

  // const [todos, setTodos] = useState([
  //   { text: "Buy coffee", key: uuidv4() },
  //   { text: "Create an app", key: uuidv4() },
  //   { text: "Meditate", key: uuidv4() },
  // ])

  // const submitHandler = (text) => {
  //   const newTodo = { text: text, id: uuidv4() }
  //   console.log(newTodo.id)
  //   setTodos(prevTodos => {
  //     return [newTodo, ...prevTodos]
  //   })
  // }

  return (
    <GlobalProvider>
      <SafeAreaView style={tailwind('flex-1')}>
        <Header />
        <View style={tailwind('p-6')}>
          <AddTodo />
          <TodoList />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </GlobalProvider>
  );
}