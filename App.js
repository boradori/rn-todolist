import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { SafeAreaView, Text, View, FlatList, TouchableHighlight, TouchableOpacity, Dimensions } from 'react-native'
import tailwind from 'tailwind-rn'
import styled from 'styled-components/native'
import Header from './components/header'
import TodoItem from './components/todoItem'

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy coffee", key: '1' },
    { text: "Create an app", key: '2' },
    { text: "Meditate", key: '3' },
  ])

  const pressHandler = key => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !== key)
    })
  }

  return (
    <SafeAreaView style={tailwind('flex-1')}>
      <Header />
      <View style={tailwind('p-6')}>
        {/* form */}
        <View style={tailwind('mt-0')}>
          <FlatList
            data={todos}
            // style={tailwind('bg-indigo-300')}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}