import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const Header = () => {
  return (
    <View style={tailwind('p-8 bg-pink-300 justify-center')}>
      <Text style={tailwind('text-white text-2xl font-bold')}>My Todos</Text>
    </View>
  )
}

export default Header