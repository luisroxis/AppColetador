import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
export const Container = styled(RectButton)`
  width: 90%;
  height: 60px;
  border-radius: 10px;
  background: #04D361;

  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 18px;
`;
