import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { GlobalProvider } from './context/GlobalState'
import { SafeAreaView, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import tailwind from 'tailwind-rn'
import Header from './components/header'

import TodoList from './components/todoList'
import AddTodo from './components/addTodo'

export default function App() {

  return (
    <GlobalProvider>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
        console.log("Dismissed keyboard")
      }}>
        <SafeAreaView style={tailwind('flex-1')}>
          <Header />
          <View style={tailwind('p-6')}>
            <AddTodo />
            <TodoList />
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </GlobalProvider>
  );
}