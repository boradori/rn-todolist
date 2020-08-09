import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
import styled from 'styled-components'
import { getColor } from 'tailwind-rn'

const Button = styled.TouchableOpacity`
  border-style: dashed;
  border-width: 2px;
  border-color: ${getColor('gray-500')};
`

const TodoItem = ({ item, pressHandler }) => {
  return (
    <Button
      style={tailwind('justify-center rounded-lg h-12 mt-4 p-8 bg-pink-300')}
      onPress={() => pressHandler(item.key)}
    >
      <Text style={tailwind('text-white self-center text-2xl font-bold')}>{item.text}</Text>
    </Button>
  )
}

export default TodoItem