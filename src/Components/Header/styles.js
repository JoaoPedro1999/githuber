import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Header = styled.View`
  height: 54px;
  flex-direction: row;
  /* border: ${StyleSheet.hairlineWidth}px; */
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 20px;
`;

export const Title = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: #000;
`;

export const Button = styled.TouchableOpacity``;

export const Left = styled.View``;
