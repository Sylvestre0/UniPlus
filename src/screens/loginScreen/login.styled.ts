import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: white;
`;

export const RegisterButton = styled.TouchableOpacity`
  background-color: #17d406;
  padding: 12px 24px;
  border-radius: 10px;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)
`;

export const RegisterText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: -20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: transparent;
`;

export const ForgotText = styled.Text`
  color: white;
  font-size: 14px;
  margin-top: 10px;
  text-decoration: underline;
`;