import React from 'react'
import { ScrollView, View } from 'react-native'
import {
  Container,
  ContainerColeta,
  SwitchContainer,
  Switch,
  TitleSwitch
} from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Coletar: React.FC = () => {
  return (
    <>
      <ScrollView>
        <Container>
          <Input name="lote" icon="zap" placeholder="Lote Exame" />
          <Input name="datavalidade" icon="calendar" placeholder="Data Validade" />
        </Container>
        <ContainerColeta>
          <SwitchContainer>
            <TitleSwitch>Sintomas</TitleSwitch>
            <Switch />
          </SwitchContainer>
          <SwitchContainer>
            <TitleSwitch style={{fontSize:14}}>Contato com alguem Positivo nos ultimos 10 dias</TitleSwitch>
            <Switch />
          </SwitchContainer>
          <SwitchContainer>
            <TitleSwitch>Febre</TitleSwitch>
            <Switch />
          </SwitchContainer>
          <SwitchContainer>
            <TitleSwitch>Fadiga</TitleSwitch>
            <Switch />
          </SwitchContainer>
          <SwitchContainer>
            <TitleSwitch>Corriza</TitleSwitch>
            <Switch />
          </SwitchContainer>
          <SwitchContainer>
            <TitleSwitch>Tosse</TitleSwitch>
            <Switch />
          </SwitchContainer>
          <SwitchContainer>
            <TitleSwitch>Falta de Ar</TitleSwitch>
            <Switch />
          </SwitchContainer>
          <SwitchContainer>
            <TitleSwitch>Dor de Cabeça</TitleSwitch>
            <Switch />
          </SwitchContainer>
          <SwitchContainer>
            <TitleSwitch>Perda de Olfato</TitleSwitch>
            <Switch />
          </SwitchContainer>
          <SwitchContainer>
            <TitleSwitch>Perda de Paladar</TitleSwitch>
            <Switch />
          </SwitchContainer>
          <SwitchContainer>
            <TitleSwitch>Dor no Corpo</TitleSwitch>
            <Switch />
          </SwitchContainer>
          <SwitchContainer>
            <TitleSwitch>Calafrios</TitleSwitch>
            <Switch />
          </SwitchContainer>
        </ContainerColeta>
        <View style={{alignItems:'center', justifyContent:'center', marginBottom: 25}}>
        <Button
            onPress={() =>{
              console.log('Foto Exame')
            }}
          >Foto Exame</Button>

        </View>

      </ScrollView>
    </>
  )
}

export default Coletar
