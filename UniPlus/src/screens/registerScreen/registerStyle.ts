import { View } from "react-native";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const RegisterButton = styled.TouchableOpacity`
  background-color: #17d406;
  padding: 12px 24px;
  border-radius: 10px;
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)
`;

export const RegisterText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: -20px;
  margin-bottom: 10px;
`;

export const ForgotText = styled.Text`
  color: white;
  font-size: 14px;
  text-decoration: underline;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px;
`;

export const BackText = styled.Text`
  color: #002764; 
  font-size: 16px;
`;