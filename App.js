import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { SafeAreaView, Text, View, FlatList, TouchableHighlight, TouchableOpacity, Dimensions } from 'react-native'
import tailwind from 'tailwind-rn'
import styled from 'styled-components/native'
import Header from './components/header'

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy coffee", key: '1' },
    { text: "Create an app", key: '2' },
    { text: "Meditate", key: '3' },
  ])

  return (
    <SafeAreaView style={tailwind('flex-1')}>
      <Header />
      <View style={tailwind('p-12')}>
        {/* form */}
        <View style={tailwind('mt-6')}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Text>
                { item.text }
              </Text>
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}