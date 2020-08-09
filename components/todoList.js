import React, { useContext } from 'react'
import { View, FlatList } from 'react-native'
import tailwind from 'tailwind-rn'
import TodoItem from './todoItem'

import { GlobalContext } from '../context/GlobalState'

const TodoList = () => {
  const { todos } = useContext(GlobalContext)

  return (
    <View style={tailwind('mt-0')}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item._id}
        // style={tailwind('bg-indigo-300')}
        renderItem={({ item }) => (
          <TodoItem item={item} />
        )}
      />
    </View>
  ) 
}

export default TodoList