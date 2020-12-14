import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { RadioButton, Text } from 'react-native-paper';
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
  SwitchSexo,
  SwitchContainer,
  SwitchContainerRaca,
  SwitchContainerPesquisa,
  SwitchPesquisa,
  Pesquisa,
  Switch,
  TitleSwitch,
  TextSwitch,
  Sobre
} from './styles'


const Paciente: React.FC = () => {
  const navigation = useNavigation()
  const [value, setValue] = React.useState('masculino')
  return (
      <>
      <SafeAreaView>
      <ScrollView>
        <PacienteDetail>
          <Title>Nome Paciente</Title>
          <Doc>xxx.xxx.xxx-xx</Doc>
          <Email>ze@ze.com.br</Email>
        </PacienteDetail>


          <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <SexoContainer>
              <Text>Masculino</Text>
              <RadioButton value="masculino" />
              <Text>Feminino</Text>
              <RadioButton value="feminino" />
            </SexoContainer>
          </RadioButton.Group>


          <Raca>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
              <SwitchContainerRaca>
                  <Text>Amarela</Text>
                  <RadioButton value="amarela" />
                  <Text>Branca</Text>
                  <RadioButton value="branca" />
                  <Text>Indigena</Text>
                  <RadioButton value="indigena" />
                  <Text>Negra</Text>
                  <RadioButton value="negra" />
                  <Text>Parda</Text>
                  <RadioButton value="parda" />
              </SwitchContainerRaca>
            </RadioButton.Group>
          </Raca>

          <Pesquisa>
            <Sobre>
              <View>
                <TextSwitch >Profissional de Saúde</TextSwitch>
                <Switch />
              </View>
              <View>
                <TextSwitch >Profissional de Segurança</TextSwitch>
                <Switch />
              </View>
              </Sobre>
          </Pesquisa>

          <SwitchPesquisa>
              <Title>Saude do Paciente</Title>
              <SwitchContainerPesquisa>
                <TextSwitch >Obesidade</TextSwitch>
                <Switch />
              </SwitchContainerPesquisa>

              <SwitchContainerPesquisa>
                <TextSwitch >Diabetes</TextSwitch>
                <Switch />
              </SwitchContainerPesquisa>

              <SwitchContainerPesquisa>
                <TextSwitch >Imunossupressão</TextSwitch>
                <Switch />
              </SwitchContainerPesquisa>

              <SwitchContainerPesquisa>
                <TextSwitch >Doença Cardiaca Cronica</TextSwitch>
                <Switch />
              </SwitchContainerPesquisa>
              <Input name="doencacardica" placeholder="Doença Cardiaca" />

              <SwitchContainerPesquisa>
                <TextSwitch >Doença Respiratória Cronica</TextSwitch>
                <Switch />
              </SwitchContainerPesquisa>
              <Input name="doencarespiratoria" placeholder="Doença Respiratória" />

              <SwitchContainerPesquisa>
                <TextSwitch >Doença Cromossomica Cronica</TextSwitch>
                <Switch />
              </SwitchContainerPesquisa>
              <Input name="doencacromossomica" placeholder="Doença Cromossomica" />

              <SwitchContainerPesquisa>
                <TextSwitch >Doença Renal Cronica</TextSwitch>
                <Switch />
              </SwitchContainerPesquisa>
              <Input name="doencarenal" placeholder="Doença Renal" />

              <SwitchContainerPesquisa>
                <TextSwitch >Gestante de Risco</TextSwitch>
                <Switch />
              </SwitchContainerPesquisa>
              <Input name="tempogestacao" placeholder="Tempo de Gestação" />


          </SwitchPesquisa>

          <View style={{alignItems:'center', justifyContent:'center', marginBottom: 25}}>
            <Button
              onPress={() =>navigation.navigate('Coletar')}
            >Coletar</Button>
          </View>

        </ScrollView>
        </SafeAreaView>
      </>


  )
}

export default Paciente
