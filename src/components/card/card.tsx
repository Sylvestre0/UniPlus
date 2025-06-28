// ImageCard.js
import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const screenWidth = Dimensions.get('window').width;

const Container = styled.View`
  margin-vertical: 10px;
  align-items: center;
`;

const StyledImage = styled.Image`
  width: ${screenWidth}px;
  height: 200px;
`;

const Caption = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  color: #333;
  text-align: center;
`;

const ImageCard = ({ imageSource, onPress, caption }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <StyledImage source={imageSource} resizeMode="cover" />
      </TouchableOpacity>
      <Caption>{caption}</Caption>
    </Container>
  );
};

export default ImageCard;
