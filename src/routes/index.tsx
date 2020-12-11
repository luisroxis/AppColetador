import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Auth = createStackNavigator()
import SignIn from '../pages/SignIn'
import Main from '../pages/Main'

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#4A4654'}
    }}
    initialRouteName="Main"
  >
    <Auth.Screen name="SignIn" component={SignIn}/>
    <Auth.Screen name="Main" component={Main} />
  </Auth.Navigator>
)

export default AuthRoutes

