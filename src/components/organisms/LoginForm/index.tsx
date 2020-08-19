import React, { useRef } from "react";

import Logo from "components/atoms/Logo";
import InputLabel from "components/molecules/InputLabel";
import Button from "components/atoms/Button";
import { Form } from "./styles";

interface LoginFormProps {
  email: string;
  password: string;
  onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export default function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit() {
    const formElement = formRef.current as HTMLFormElement;

    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }

    onSubmit();
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <Form ref={formRef}>
      <Logo size="large" marginBottom={40} />
      <InputLabel
        id="email"
        onChange={onEmailChange}
        value={email}
        type="email"
        label="E-mail"
        isRequired
        marginBottom={32}
        placeholder="E-mail"
      />
      <InputLabel
        id="password"
        onChange={onPasswordChange}
        onKeyPress={handleKeyPress}
        value={password}
        label="Senha"
        type="password"
        isRequired
        marginBottom={32}
        placeholder="Senha"
      />
      <Button type="button" onClick={handleSubmit}>
        Entrar
      </Button>
    </Form>
  );
}
