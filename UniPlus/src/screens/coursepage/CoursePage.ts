import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Card = styled(TouchableOpacity)`
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  elevation: 4;
`;

export const CourseImage = styled.Image`
  width: 100%;
  height: 150px;
`;

export const InfoContainer = styled.View`
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;
