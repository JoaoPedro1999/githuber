import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #444a5a;
  padding: 40px;
  justify-content: center;
  align-items: stretch;
`;

export const Form = styled.View`
  margin-top: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 24;
`;

export const Subtitle = styled.Text`
  text-align: center;
  margin-top: 20px;
  color: #eee;
  font-size: 15;
  line-height: 21;
`;

export const Input = styled.TextInput`
  background: #fff;
  border-radius: 3px;
  padding-horizontal: 20px;
`;

export const Button = styled.TouchableOpacity`
  background: #7a91ca;
  border-radius: 3px;
  height: 44px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16;
`;
