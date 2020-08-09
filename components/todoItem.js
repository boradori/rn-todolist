import React, { useContext } from 'react'
import { Text } from 'react-native'
import tailwind from 'tailwind-rn'
import styled from 'styled-components/native'
import { getColor } from 'tailwind-rn'

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
      style={tailwind('justify-center rounded-lg h-12 mt-4 p-8 bg-pink-300')}
      onPress={() => deleteTodo(item._id)}
    >
      <Text style={tailwind('text-white self-center text-2xl font-bold')}>{item.text}</Text>
    </Button>
  )
}

export default TodoItem