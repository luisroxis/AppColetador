import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`;


export const CameraConatiner = styled.View`
  flex: 2;
  width: 90%;
  height: 250px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-left: 20px;
`;

export const ButtonContainer = styled.View`
  flex: 0.98;
  width: 90%;
  height: 90px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-left: 20px;
  margin-bottom: 20px;

`;

export const Button = styled.TouchableOpacity`
  width: 40%;
  height: 60px;
  background: #323aca;
  border-color: #323aca;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export const ButtonIcon = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`;
