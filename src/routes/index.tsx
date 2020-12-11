import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Auth = createStackNavigator()
import SignIn from '../pages/SignIn'
import Main from '../pages/Main'
import Paciente from '../pages/Paciente'
import Exame from '../pages/Exame'
import Coletar from '../pages/Coletar'

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#4A4654'}
    }}
    initialRouteName='Paciente'
  >
    <Auth.Screen name="SignIn" component={SignIn}/>
    <Auth.Screen name="Main" component={Main} />
    <Auth.Screen name="Paciente" component={Paciente} />
    <Auth.Screen name="Exame" component={Exame} />
    <Auth.Screen name="Coletar" component={Coletar} />
  </Auth.Navigator>
)

export default AuthRoutes

