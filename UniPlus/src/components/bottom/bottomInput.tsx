import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Personbottom = styled(TouchableOpacity).attrs((props) => ({
  onPress: props.onPress || (() => console.log('Clicado!')),
}))`
  background-color: ${props => props.bgColor || '#166BAD'};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  height: 83px;
  width: 336px;
  flex-direction: row;  
  gap: 8x;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)
`;

export const Login = styled(Text)`
  font-size: 20px;
  color: #fff;
`;
