import React from 'react'
import { ScrollView, Image, View, KeyboardAvoidingView, Platform } from 'react-native'

import { Container, LogonText } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Logo from '../../assets/logo.png'

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{flex:1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined }
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex:1}}
        >
        <Container>
          <Image source={Logo} />
          <View>
            <LogonText>Faça seu Logon</LogonText>
          </View>

          <Input
            name="email"
            icon="mail"
            placeholder="Email"

          />
          <Input
            name="password"
            icon="lock"
            placeholder="Senha"
          />

          <Button
            onPress={()=>{
              console.log('Login')
            }}
          >Entrar</Button>
        </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

export default SignIn
