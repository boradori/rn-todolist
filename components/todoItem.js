import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import styled from 'styled-components/native'
import { getColor } from 'tailwind-rn'
import { AntDesign } from '@expo/vector-icons'

import { GlobalContext } from '../context/GlobalState'

const Button = styled.TouchableOpacity`
  border-style: dashed;
  border-width: 2px;
  border-color: ${getColor('gray-500')};
`

const TodoItem = ({ item }) => {
  const { deleteTodo } = useContext(GlobalContext)

  return (
    <Button
      style={tailwind('justify-center rounded-lg h-12 mt-4 px-4 py-6 bg-pink-300')}
      onPress={() => deleteTodo(item._id)}
    >
      <View style={tailwind("flex-row justify-between items-center")}>
        <Text style={tailwind('text-white self-center text-2xl font-bold')}>{item.text}</Text>
        <AntDesign name="delete" size={24} color="white" />
      </View>
    </Button>
  )
}

export default TodoItem