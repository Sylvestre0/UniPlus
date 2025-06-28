import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

type AlertType = 'success' | 'error';

interface CustomAlertProps {
  show: boolean;
  title: string;
  message: string;
  type?: AlertType;
  onConfirm: () => void;
}

export default function CustomAlert({
  show,
  title,
  message,
  type = 'error',
  onConfirm,
}: CustomAlertProps) {
  return (
    <AwesomeAlert
      show={show}
      showProgress={false}
      title={title}
      message={message}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={true}
      showConfirmButton={true}
      confirmText="Ok"
      confirmButtonColor={type === 'success' ? '#4BB543' : '#DD6B55'}
      onConfirmPressed={onConfirm}
    />
  );
}
