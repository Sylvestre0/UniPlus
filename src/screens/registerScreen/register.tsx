import React, { useRef, useState } from 'react';
import { Logo } from "@/components/Logo/Logo.style";
import Password from "@/components/Inputs/PassWord";
import Email, { EmailRef } from "@/components/Inputs/Email";
import Name from "@/components/Inputs/Name"; 
import { Login, Personbottom } from "@/components/bottom/bottomInput";
import { WaterMask } from "@/components/Marca_D'agua/cooporation";
import { router } from 'expo-router';
import { Text, Alert, TouchableOpacity } from 'react-native';
import {API} from '@/services/api';
import { Container, RegisterButton, RegisterText, BackButton, BackText } from './registerStyle';
import { FontAwesome } from '@expo/vector-icons';
import CustomAlert from '@/components/CustomAlert/CustomAlert';


export default function RegisterScreen() {
  const nameRef = useRef<EmailRef>(null);
  const emailRef = useRef<EmailRef>(null);
  const passwordRef = useRef<EmailRef>(null);

 const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'error'>('error');

  // ✅ Função para mostrar alerta
  const showCustomAlert = (
    title: string,
    message: string,
    type: 'success' | 'error' = 'error'
  ) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);
  };



  const handleRegister = async () => {
    const name = nameRef.current?.getValue();
    const email = emailRef.current?.getValue();
    const password = passwordRef.current?.getValue();

    if (!name?.trim() || !email?.trim() || !password?.trim()) {
      showCustomAlert("Erro", "Preencha todos os campos.");
      return;
    }

    if (password.length < 8) {
      showCustomAlert("Erro", "A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    try {
      const response = await API.post('/register', {
        name: name,
        email: email,
        password: password,
        googleId: null, 
      });

      if (response.status === 201) {
        showCustomAlert("Sucesso", "Usuário cadastrado com sucesso!");
        router.navigate('/router/home');
      }
    } catch (error) {
      const status = error.response?.status;
      const mensagem = error.response?.data?.error;
      Alert.alert(`Erro: ${mensagem} status-Code: ${status}`);
    }
  };

  return (
    <Container>
      <Logo />
      <Name ref={nameRef} />
      <Email ref={emailRef} />
      <Password ref={passwordRef} />

      <Personbottom onPress={handleRegister}>
        <FontAwesome name="sign-in" size={16} color="white" style={{ marginRight: 8 }} />
        <Login>Cadastrar</Login>
      </Personbottom>

      <Text> ou </Text>

     <RegisterButton onPress={() => router.back()}>
        <FontAwesome name="sign-in" size={16} color="white" style={{ marginRight: 8 }} />
        <RegisterText>Já tem uma conta? Faça login</RegisterText>
      </RegisterButton>

      <WaterMask>©Sylvester Coop</WaterMask>
     <CustomAlert
        show={showAlert}
        title={alertTitle}
        message={alertMessage}
        type={alertType}
        onConfirm={() => setShowAlert(false)}
      />
    </Container>
    
  );
}