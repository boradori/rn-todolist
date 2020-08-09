import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const Header = () => {
  return (
    <View style={tailwind('h-24 pt-10 bg-pink-300')}>
      <Text style={tailwind('text-white self-center text-2xl font-bold')}>My Todos</Text>
    </View>
  )
}

export default Header