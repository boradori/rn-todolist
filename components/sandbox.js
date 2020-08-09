import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const Sandbox = () => {
  return (
    <View style={tailwind("flex-row justify-around items-end pt-12 bg-indigo-200")}>
      <Text style={tailwind("flex-1 bg-purple-400 p-6")}>one</Text>
      <Text style={tailwind("flex-1 bg-red-400 p-8")}>two</Text>
      <Text style={tailwind("flex-1 bg-yellow-400 p-10")}>three</Text>
      <Text style={tailwind("flex-1 bg-teal-400 p-12")}>four</Text>
    </View>
  )
}

export default Sandbox