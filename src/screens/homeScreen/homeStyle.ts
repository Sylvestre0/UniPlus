// styles.js (ou StyledComponents.js)
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    padding: 16,
    paddingTop: 20,
    justifyContent: 'flex-start',
  },
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
`;


export const TopBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 160px;
  height: 50px;
  resize-mode: contain;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #002764;
  padding-horizontal: 16px;
  padding-vertical: 8px;  
  border-radius: 8px;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const CenterTextContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const CenterText = styled.Text`
  color: #002764;
  font-size: 15px;
  text-align: center;
`;
