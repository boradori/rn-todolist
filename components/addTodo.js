import React, { useState, useContext } from 'react'
import { Text, View, TextInput } from 'react-native'
import tailwind from 'tailwind-rn'
import styled from 'styled-components'
import { getColor } from 'tailwind-rn'
import { uuidv4 } from '../utils/uuid'

import { GlobalContext } from '../context/GlobalState'

const Button = styled.TouchableOpacity`
  border-width: 2px;
  border-color: ${getColor('pink-300')};
`

const AddTodo = () => {
  const { addTodo } = useContext(GlobalContext)
  const [text, setText] = useState("")

  const submitTodo = () => {
    setText("")
    textInput.clear()
    if (text !== "") {
      addTodo({ text: text, _id: uuidv4() })
    }
  }

  return (
    <View>
      <TextInput
        ref={input => { textInput = input }}
        style={tailwind("mb-4 px-3 py-2 border-b border-gray-400")}
        placeholder="New todo..."
        onChangeText={(val) => setText(val)}
        onSubmitEditing={submitTodo}
      />
      <Button
        style={tailwind('justify-center rounded-lg h-12 my-4 p-4 bg-gray-200')}
        onPress={submitTodo}
      >
        <Text style={tailwind('text-gray-600 self-center text-2xl font-bold')}>Add Todo</Text>
      </Button>
    </View>
  )
}

export default AddTodo