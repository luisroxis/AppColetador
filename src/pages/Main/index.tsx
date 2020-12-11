import React from 'react'
import { Text, View, KeyboardAvoidingView, Platform } from 'react-native'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  PPaciente,
  CardPaciente,
  Card,
  CardTitle,
  CardContent,
  CardDoc,
  CardExame
} from './styles'

const Main: React.FC = () => {
  const navigation = useNavigation()
  return (
    <>
    <KeyboardAvoidingView
      style={{flex:1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined }
      enabled
    >
      <Container>
        <PPaciente>
          <Input
            keyboardType="number-pad"
            name="pesquisa"
            icon="user"
            placeholder="Pesquisar"
          />
          <Button
            onPress={()=>{
              console.log('Pesquisar')
            }}
          >Pesquisar</Button>
          </PPaciente>
        <CardPaciente>
          <Card onPress={()=>navigation.navigate('Paciente')}>
            <CardTitle>NomePaciente</CardTitle>
            <CardContent>
              <CardExame>ID Exame</CardExame>
              <CardDoc>xxx.xxx.xxx-xx</CardDoc>
            </CardContent>
          </Card>
        </CardPaciente>
      </Container>
      </KeyboardAvoidingView>
    </>
  )
}

export default Main
