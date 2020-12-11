import styled from 'styled-components/native'


export const Container = styled.View`
  flex: 1;
`;

export const PPaciente = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 48px 5px;
`;

export const CardPaciente = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 90px;
  justify-content: center;

  margin-bottom: 8px;
  border-radius: 10px;
  background: #6B6666;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
  margin-top: 5px;
  margin-bottom: 8px;
  margin-left: 20px;
`;

export const CardContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
`;

export const CardExame = styled.Text`
 color: #000;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
  margin-left: 20px;
`;

export const CardDoc = styled.Text`
 color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  margin-right: 30px;
`;
