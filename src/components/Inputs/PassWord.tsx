import { forwardRef, useImperativeHandle, useState } from "react";
import { InputText, Container, Props } from '@/components/Inputs/style';
import { EmailRef } from "./Email";

const Password = forwardRef<EmailRef, Props>(({ placeholder = "Digite sua senha:" }: Props, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    getValue: () => text,
  }));

  return (
    <Container>
      <InputText
        placeholder={placeholder}
        value={text}
        onChangeText={setText}
        secureTextEntry={true}
        returnKeyType="done"
      />
    </Container>
  );
});

export default Password;
