// ImageCard.js
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  margin-vertical: 10px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

const Caption = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  color: #333;
  text-align: left;
  padding-horizontal: 12px;
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
