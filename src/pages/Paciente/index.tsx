import React from 'react'
import { View, ScrollView } from 'react-native'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Title,
  Doc,
  Email,
  PacienteDetail,
  Raca,
  SexoContainer,
  SwitchContainer,
  SwitchContainerRaca,
  Switch,
  TitleSwitch,
  TextSwitch,
  Pesquisa,
  Sobre,
  Saude
} from './styles'


const Paciente: React.FC = () => {
  const navigation = useNavigation()
  return (
      <>
      <ScrollView>
        <PacienteDetail>
          <Title>Nome Paciente</Title>
          <Doc>xxx.xxx.xxx-xx</Doc>
          <Email>ze@ze.com.br</Email>
        </PacienteDetail>

          <SexoContainer>
            <SwitchContainer>
              <TextSwitch>Masculino</TextSwitch>
              <Switch />

              <TextSwitch>Feminino</TextSwitch>
              <Switch />
            </SwitchContainer>
          </SexoContainer>
          <Raca>
            <SwitchContainerRaca>
              <TextSwitch >Amarela</TextSwitch>
              <Switch />

              <TextSwitch >Branca</TextSwitch>
              <Switch />

              <TextSwitch >Indigena</TextSwitch>
              <Switch />

              <TextSwitch >Negra</TextSwitch>
              <Switch />

              <TextSwitch >Parda</TextSwitch>
              <Switch />
            </SwitchContainerRaca>
          </Raca>

        <Pesquisa>
          <Sobre>
            <TextSwitch style={{fontSize:10}} >Profissional de Saude</TextSwitch>
            <Switch />
            <TextSwitch >Profissional de Segurança</TextSwitch>
            <Switch />
          </Sobre>

          <Saude>
            <Title>Saude do Paciente</Title>

            <TextSwitch >Doença Cardiaca</TextSwitch>
            <Switch />
            <Input name="doencacardica" placeholder="Doença Cardiaca" />

            <TextSwitch >Doença Cardiaca</TextSwitch>
            <Switch />
            <Input name="doencacardica" placeholder="Doença Cardiaca" />

            <TextSwitch >Doença Cardiaca</TextSwitch>
            <Switch />
            <Input name="doencacardica" placeholder="Doença Cardiaca" />

            <TextSwitch >Doença Cardiaca</TextSwitch>
            <Switch />
            <Input name="doencacardica" placeholder="Doença Cardiaca" />

            <TextSwitch >Doença Cardiaca</TextSwitch>
            <Switch />
            <Input name="doencacardica" placeholder="Doença Cardiaca" />

            <TextSwitch >Doença Cardiaca</TextSwitch>
            <Switch />
            <Input name="doencacardica" placeholder="Doença Cardiaca" />

            <TextSwitch >Doença Cardiaca</TextSwitch>
            <Switch />
            <Input name="doencacardica" placeholder="Doença Cardiaca" />

          </Saude>
        </Pesquisa>
        <View style={{alignItems:'center', justifyContent:'center', marginBottom: 25}}>
          <Button
            onPress={() =>navigation.navigate('Coletar')}
          >Coletar</Button>
        </View>


        </ScrollView>
      </>


  )
}

export default Paciente
