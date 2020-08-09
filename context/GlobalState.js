import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import { uuidv4 } from '../utils/uuid'

// Initial state
const initialState = {
  todos: [
    { text: "Buy coffee", _id: uuidv4() },
    { text: "Create an app", _id: uuidv4() },
    { text: "Meditate", _id: uuidv4() },
  ]
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => { // children -> wrapped components
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  const deleteTodo = _id => {
    dispatch({
      type: 'DELETE_TODO',
      payload: _id
    })
  }

  const addTodo = todo => {
    dispatch({
      type: 'ADD_TODO',
      payload: todo
    })
  }

  return (
    <GlobalContext.Provider value={{
      todos: state.todos,
      deleteTodo,
      addTodo
    }}>
      {children}
    </GlobalContext.Provider>
  )
}