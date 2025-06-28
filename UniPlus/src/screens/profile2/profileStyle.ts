import styled from 'styled-components/native';

export const ProfileContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;

export const Email = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 24px;
`;
const Idade = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 24px;
`;
export const Button = styled.TouchableOpacity`
  width: 80%;
  padding: 12px;
  border-radius: 8px;
  background-color: #2e86de;
  align-items: center;
  margin-top: 12px;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;
