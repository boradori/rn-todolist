import React, { useState, useContext } from 'react'
import { Text, View, TextInput, Alert } from 'react-native'
import tailwind from 'tailwind-rn'
import styled from 'styled-components/native'
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
    if (text !== "" && text.length > 3) {
      addTodo({ text: text, _id: uuidv4() })

      textInput.clear()
      setText("")
    } else {
      Alert.alert("Oops!", "Todos must be over 3 characters long", [
        {text: "Understood", onPress: () => console.log("alert closed")},
        {text: "Cancel", onPress: () => console.log("Cancel pressed"), style: "cancel"}
      ], { cancelable: false })
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
        style={tailwind('justify-center rounded-lg my-4 p-4 bg-gray-100')}
        onPress={submitTodo}
      >
        <Text style={tailwind('text-gray-600 self-center text-2xl font-bold')}>Add Todo</Text>
      </Button>
    </View>
  )
}

export default AddTodo