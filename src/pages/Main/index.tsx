import React from 'react'
import { Text, View, KeyboardAvoidingView, Platform } from 'react-native'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, PPaciente, CardPaciente } from './styles'

const Main: React.FC = () => {
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
          <Button
            style={{width: 100, backgroundColor: '#569c5c'}}
            onPress={()=>{
              console.log('Detalhes do Paciente')
            }}
          >Detalhes</Button>
          <Button
            style={{width: 100, backgroundColor: '#4363f1'}}
            onPress={()=>{
              console.log('Coletar Exame')
            }}
          >Coleta</Button>
        </CardPaciente>

      </Container>
      </KeyboardAvoidingView>
    </>
  )
}

export default Main
