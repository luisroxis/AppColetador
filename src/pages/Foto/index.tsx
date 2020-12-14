import React, { useState } from 'react'
import { RNCamera } from 'react-native-camera'
import Icon from 'react-native-vector-icons/Feather'
import { Container, CameraConatiner, Button, ButtonContainer, ButtonIcon } from './styles'

const Foto: React.FC = () => {
  const [camera, setCamera] = useState()
  return (
    <>
      <CameraConatiner>
        <RNCamera
        ref={ref => setCamera(ref)}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: "Permissão para usar a câmera",
          message: "Precisamos da sua permissão para usar a câmera.",
          buttonPositive: "Ok",
          buttonNegative: "Cancelar"
        }}
        captureAudio={false}
      >

      </RNCamera>

      </CameraConatiner>

      <ButtonContainer>
        <Button>
          <ButtonIcon>
          <Icon name="camera" size={35} color="#fff" />
          </ButtonIcon>
        </Button>
        <Button style={{backgroundColor: "#fb505b"}}>
          <ButtonIcon>
            <Icon name="trash" size={35} color="#fff" />
          </ButtonIcon>
        </Button>
      </ButtonContainer>

    </>




  )
}

export default Foto
