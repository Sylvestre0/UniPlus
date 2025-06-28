import React, { useRef, useState } from 'react';
import { Text } from 'react-native';
import { router } from 'expo-router';

import { Logo } from "@/components/Logo/Logo.style";
import Password from "@/components/Inputs/PassWord";
import Email, { EmailRef } from "@/components/Inputs/Email";
import { Login, Personbottom } from "@/components/bottom/bottomInput";
import { WaterMask } from "@/components/Marca_D'agua/cooporation";
import { FontAwesome } from '@expo/vector-icons';

import {Container,ForgotPassword,ForgotText,RegisterButton,RegisterText} from './login.styled';

import { API } from '@/services/api';
import CustomAlert from "@/components/CustomAlert/CustomAlert";

export default function LoginScreen() {
  const emailRef = useRef<EmailRef>(null);
  const passwordRef = useRef<EmailRef>(null);

  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'error'>('error');

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

  const handleLogin = async () => {
    const DevMode = false;
    if (DevMode) {
      router.navigate('/router/home');
      return;
    }

    const email = emailRef.current?.getValue();
    const password = passwordRef.current?.getValue();

    if (!email?.trim() || !password?.trim()) {
      showCustomAlert("Erro", "Preencha todos os campos.", "error");
      return;
    }

    try {
      const response = await API.post('/login', { email, password });

      if (response.status === 200) {
        showCustomAlert("✅ Sucesso", "Login realizado com sucesso!", "success");
        setTimeout(() => {
          setShowAlert(false);
        }, 1500);
      }
    } catch (error) {
      const status = error.response?.status;
      const mensagem = error.response?.data?.error;
      showCustomAlert(`Erro ${status}`, mensagem || "Erro inesperado", "error");
    }
  };

  return (
    <Container>
      <Logo />
      <Email ref={emailRef} />
      <Password ref={passwordRef} />

      <ForgotPassword onPress={() => router.navigate('/router/forgot-password')}>
        <ForgotText>Esqueceu sua senha?</ForgotText>
      </ForgotPassword>

      <Personbottom onPress={handleLogin}>
        <FontAwesome
          name="sign-in"
          size={16}
          color="#fff"
          style={{ marginRight: 8 }}
            />
        <Login>Login</Login>
        
      </Personbottom>

      <Text> ou </Text>

      <RegisterButton onPress={() => router.navigate('/router/register')}>
        <RegisterText>Registre-se</RegisterText>
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
