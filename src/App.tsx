import React from 'react'
import { StatusBar } from 'react-native'
import { View } from 'react-native'

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" translucent />
      <View style={{flex: 1, backgroundColor: '#4A4654'}} />
    </>
  )
}