import { forwardRef, useImperativeHandle, useState } from "react";
import { InputText, Container, Props } from '@/components/Inputs/style';

// Tipo da ref que será exposta
export interface EmailRef {
  getValue: () => string;
}

// Tipagem explícita no forwardRef
const Email = forwardRef<EmailRef, Props>(({ placeholder = "Digite seu email:" }, ref) => {
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
        secureTextEntry={false}
        returnKeyType="done"
      />
    </Container>
  );
});

export default Email;
