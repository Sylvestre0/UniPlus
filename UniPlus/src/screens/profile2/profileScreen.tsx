import React from 'react';
import { Alert } from 'react-native';
import { ProfileContainer, Avatar, Name, Email, Button, ButtonText } from './profileStyle';
import { FontAwesome } from '@expo/vector-icons';

// import {WaterMask} from '../../components/Marca_D%27agua/cooporation';

export default function Profile() {
  const handleEdit = () => {
    Alert.alert('Editar Perfil', 'Função de edição ainda não implementada.');
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Você saiu da sua conta.');
  };

  return (
    <ProfileContainer>
      <Avatar source={{ uri: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png' }} />
      <Name>Rafael Silva</Name>
      <Email>rafael@example.com</Email>
      

      <Button onPress={handleEdit}>
        <ButtonText>Editar Perfil</ButtonText>
        <FontAwesome name="edit" size={16} color="white" style={{ marginLeft: 8 }} />
      </Button>

      <Button onPress={handleLogout}>
        <ButtonText>Sair</ButtonText>
        <FontAwesome name="sign-out" size={16} color="white" style={{ marginLeft: 8 }} />
      </Button>
      
    </ProfileContainer>
  );
}
