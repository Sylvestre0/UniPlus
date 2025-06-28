import React from 'react';
import {
  Card,
  CourseImage,
  InfoContainer,
  Title,
  Description
} from './CoursePage'; //

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  onPress?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, image, onPress }) => {
  return (
    <Card activeOpacity={0.8} onPress={onPress}>
      <CourseImage source={{ uri: image }} resizeMode="cover" />
      <InfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoContainer>
    </Card>
  );
};

export default CourseCard;
