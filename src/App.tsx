import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, StatusBar } from 'react-native'
import Routes from './routes'


const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#4A4654" />
      <View style={{flex: 1, backgroundColor: '#4A4654'}}>
        <Routes />
      </View>
    </NavigationContainer>
  )
}

export default App
